import Web3 from 'web3'
import {nftContract, bridgeContract} from '../ethContracts/erc721.js'
import styles from '../styles/Home.module.css'
import React from "react";
import { useState, useRef, useEffect } from "react";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import 'bulma/css/bulma.css'
import loadStdlib from '@reach-sh/stdlib'

export default function Erc721() {
    const ctcId = '0x7a403d1f0CF58EDa5D3047d856D2525cbbc993f2';
    const [web3, setWeb3] = useState()
    const [address, setAddress] = useState()
    const [nftCtc, setNftCtc] = useState()
    const [error, setError] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    const [modal, setModal] = useState(null);
    const [image, setImage] = useState(null);
    const [metaData, setMetaData] = useState(null);
    const [URL, setURL] = useState('');

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
            /* request wallet connection */
            await window.ethereum.request({ method: "eth_requestAccounts"})
            /* create web3 instance & set to state */
            const web3_ = new Web3(window.ethereum)
            /* set web3 instance in React state */
            setWeb3(web3_)
            if(web3_.providers){alert(`Metamask Wallet already connected`)}
            /* get list of accounts */
            const accounts = await web3_.eth.getAccounts()
            console.log(accounts)
            /* set account 1 to React state */
            setAddress(accounts[0])
    
            /* create local contract copy */
            const ctc = nftContract(web3_)
            setNftCtc(ctc) 
    
            /* window.ethereum.on('accountsChanged', async () => {
              const accounts = await web3.eth.getAccounts()
              console.log(accounts[0])
              setAddress(accounts[0])
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
        const ctcid = getElement('erc721nftId');
        const tokenId = parseInt(getElement('nftUrl'))
        setError('')
        setSuccessMsg('')
        console.log(`address of person bridging :: ${address}`)
        const deployToken = async() => {
            let reach = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
            reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect }));
            const accCreator = await reach.getDefaultAccount();
            //Launch tokens
            const bT = await reach.launchToken(accCreator, metaData.symbol, metaData.Name, {decimals: 0, supply: 1, url: URL, metadataHash: ''});
            console.log('This is the ID of the bridged token on Algorand: ', reach.bigNumberToNumber(bT.id._hex));
            alert(`This is the ID of the bridged NFT on Algorand:  ${reach.bigNumberToNumber(bT.id._hex)}`);
        }
        let count = 0
        try {
            nftCtc.methods.transferFrom(address, ctcid, tokenId).send({
                from: address,
                gas: 300000,
                gasPrice: null
            }).on('confirmation', function(confirmationNumber, receipt){
                while(count <= 1){
                    deployToken(); 
                    getNftUri()
                    count++
                }
                
            })
        } catch(err) {
            alert(err.message)
            setError(err.message)
        }

        
    }

    const checkNftBalance = async () => {
        const id = getElement('erc721nftId')
        try {
            const bal = await nftCtc.methods.balanceOf(id).call();
            alert (`NFT balance of ${id} is ${bal}`)
        } catch(err) {
            alert(err.message)
            setError(err.message)
        }
    }

    const getNftUri = async () => {
        setSuccessMsg('')
        setError('')
        const tokenId = getElement('nftUrl')
        try {
            const uri = await nftCtc.methods.tokenURI(tokenId).call(); setURL(uri)
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
                <button className="button is-link" onClick = {bridgeNFT}>Bridge NFT</button>
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