import Web3 from 'web3'
import {nftContract, bridgeContract} from '../ethContracts/erc721.js'
import styles from '../styles/Home.module.css'
import React from "react";
import { useState, useRef, useEffect } from "react";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import 'bulma/css/bulma.css'
import loadStdlib from '@reach-sh/stdlib'

export default function Erc721() {
    //const ctcId = '0x7a403d1f0CF58EDa5D3047d856D2525cbbc993f2';
    const [web3, setWeb3] = useState()
    const address = useRef('')
    const ctcId = useRef('')
    const [error, setError] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    const [modal, setModal] = useState(null);
    const [image, setImage] = useState(null);
    const [metaData, setMetaData] = useState(null);
    const [URL, setURL] = useState('');
    const wallConn = useRef(false)

    //useful function to getELement by id
    const getElement = (id) => {
        let theElement = document.getElementById(id);
        return theElement.value
      }
    
    const connectWallet = async () => {
        setError('')
        setSuccessMsg('')
        /* ////check if MetaMask is installed */
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
          try {
            if(getElement('erc721nftId').length <= 8){alert(`Please enter a valid NFT CONTRACT ID first`); return}
            /* request wallet connection */
            await window.ethereum.request({ method: "eth_requestAccounts"})
            /* create web3 instance & set to state */
            const web3_ = new Web3(window.ethereum)
            /* set web3 instance in React state */
            setWeb3(web3_)
            if(wallConn.current == true){alert(`Metamask Wallet already connected`)}
            /* get list of accounts */
            const accounts = await web3_.eth.getAccounts()
            /* set account 1 to React state */
            address.current = (accounts[0])
            const nftCtcId = getElement('erc721nftId');
            /* create local contract copy */
            const ctc = await nftContract(web3_, nftCtcId)
            ctcId.current = ctc 
            //write a function that finds how many enteries is in an object
            const count = (obj) => {
                let count = 0;
                for(let key in obj){
                    if(obj.hasOwnProperty(key)){
                        count++;
                    }
                }
                return count;
            }
            while(wallConn.current == false){
                if(count(ctc.methods)>=1) {wallConn.current = true; ctcId.current = ctc; alert(`Fun fact: There are ${count(ctc.methods)} methods in the nft contract`)}
                if(wallConn.current == true){alert(`Metamask Wallet connected`)}
            }
            /* window.ethereum.on('accountsChanged', async () => {
              const accounts = await web3.eth.getAccounts()
              console.log(accounts[0])
              addreess.current = (accounts[0])
            }) */
          } catch(err) {
            setError(err.message)
            alert(err.message)
          }
        } else {
          /* MetaMask is not installed */
          console.log("Please install MetaMask")
        }
      }
      

    const bridgeNFT = async () => {
        if(wallConn.current !== true){alert('Let us connect your wallet...')}
        if(wallConn.current !== true) connectWallet()        
        const tokenId = parseInt(getElement('nftUrl'))
        setError('')
        setSuccessMsg('')
        console.log(`address of person bridging :: ${address.current}`)

        const deployToken = async() => {
            /* let reach = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
            reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect }));
            const accCreator = await reach.getDefaultAccount();
            //Launch tokens
            const bT = await reach.launchToken(accCreator, metaData.symbol, metaData.Name, {decimals: 0, supply: 1, url: URL, metadataHash: ''});
            console.log('This is the ID of the bridged token on Algorand: ', reach.bigNumberToNumber(bT.id._hex));
            alert(`This is the ID of the bridged NFT on Algorand:  ${reach.bigNumberToNumber(bT.id._hex)}`); */
            const res = await fetch('api/bridgeToAlgo',{
                method : 'POST',
                body: JSON.stringify({'bridger' : address.current, 'name': 0, 'url': URL, 'metadataHash': 'metaDataHash', 'tokenId': tokenId}),
                headers: {'Content-Type' : 'application/json'},
            })
            const data = await res.json();
            console.log(data)
            alert(`This is the ID of your "NFT" waiting for you to claim: `, data.NFT);
        }
        let count = 0
        if(wallConn.current == true) try {
            if(isNaN(tokenId)){alert(`Please enter a valid NFT ID. You entered this invalid value: "${getElement('nftUrl')}"`); return}
            ctcId.current.methods.transferFrom(address.current, '0x7a403d1f0CF58EDa5D3047d856D2525cbbc993f2', tokenId).send({
                from: address.current,
                gas: 300000,
                gasPrice: null
            }).on('confirmation', function(confirmationNumber, receipt){
                while(count < 1){
                    getNftUri();
                    deployToken(); 
                    count++
                }
            })
        } catch(err) {
            alert(err.message)
            setError(err.message)
        }

        
    }

    const checkNftBalance = async () => {
        if(wallConn.current !== true){alert('Let us connect your wallet...')}
        if(wallConn.current !== true) connectWallet()
        let ctcid = ctcId.current
        if(wallConn.current == true) try {
            const bal = await ctcid.methods.balanceOf(address.current).call();
            alert (`NFT balance of ${address.current} is ${bal}`)
        } catch(err) {
            alert(err.message)
            setError(err.message)
        }
    }

    const getNftUri = async () => {
        if(wallConn.current !== true){alert('Let us connect your wallet...')}
        if(wallConn.current !== true) connectWallet()            
        const tokenId = parseInt(getElement('nftUrl'))
        if(isNaN(tokenId)){alert(`Please enter a valid NFT ID. You entered this invalid value: "${getElement('nftUrl')}"`); return}
        if(wallConn.current == true) try {
            const uri = await ctcId.current.methods.tokenURI(tokenId).call(); setURL(uri)
                const gateway = uri.replace(
                    "ipfs://",
                    "https://gateway.ipfscdn.io/ipfs/",
                  );
                const metadata = await fetch(gateway).then((r) => r.json()); setMetaData(metadata);
                const uri2 = 'https://ipfs.io/ipfs/'+metadata.image.substring(7)
                setSuccessMsg(`The URL of the NFT with id ${tokenId} is: 
                 ${uri2}`);
                 setImage(
                        <img  src= {uri2}></img>
                 )
        } catch(err) {
            alert(err.message)
            setError(err.message)
        }
    }

    const deployToken = async() => {
        /* let reach = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
        reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect }));
        const accCreator = await reach.getDefaultAccount();
        //Launch tokens
        const bT = await reach.launchToken(accCreator, metaData.symbol, metaData.Name, {decimals: 0, supply: 1, url: URL, metadataHash: ''});
        console.log('This is the ID of the bridged token on Algorand: ', reach.bigNumberToNumber(bT.id._hex));
        alert(`This is the ID of the bridged NFT on Algorand:  ${reach.bigNumberToNumber(bT.id._hex)}`); */
        const res = await fetch('api/bridgeToAlgo',{
            method : 'POST',
            body: JSON.stringify({'bridger' : address, 'name': 0, 'url': URL, 'metadataHash': 'metaDataHash', 'tokenId': parseInt(getElement('nftUrl'))}),
            headers: {'Content-Type' : 'application/json'},
        })
        const data = await res.json();
        console.log(`This is your contract id: ${data.contractId}`)
        alert(`This is the ID of your "NFT" waiting for you to claim:  ${data.NFTid}`);
    }
    return (
        <div className={styles.container}>
            <nav className="navbar mt-4 mb-4">
            <div className="container">
                <h2 font = "34px"><strong>TESTING ETH BRIDGE</strong></h2>
                <div className="navbar-end">
                <button onClick={connectWallet} className="button is-primary">Connect Wallet</button>
                </div>
            </div>
            </nav>
            <div className = 'mb-5'>
                <p>Enter the ERC721 NFT Contract ID</p>
                <input class = 'input is-info is-medium mb-2' id = 'erc721nftId' ></input>
                <button  class="button is-warning" onClick = {checkNftBalance}>Check your NFT Balance (ERC-721)</button> <br/>
            </div>
            <div className = 'mb-5'>
                <p>Enter the token ID</p>
                <input class = 'input is-info is-medium mb-2' id = 'nftUrl'></input>
                <button className="button is-link" onClick = {bridgeNFT}>Bridge NFT</button> <br/><br/>
                <button className="button is-danger" onClick = {deployToken}>BackEndTesting(Do not use)</button>

            </div>
            <div className = 'mb-5'>
                
                <button  class="button is-info is-outlined" onClick = {getNftUri}>Check NFT URL</button> <br/>
                <h3 style = {{color : 'green'}}>
                    {successMsg}
                </h3>
                {image}
                
            </div>
           
        </div>
    )

}