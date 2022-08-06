import Web3 from 'web3'
import {nftContract, bridgeContract} from '../ethContracts/erc721.js'
import styles from '../styles/Home.module.css'
import React from "react";
import { useState, useRef, useEffect } from "react";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backendCtc from '../reachBackend/test.main'
import 'bulma/css/bulma.css'
import loadStdlib from '@reach-sh/stdlib'
import { lockNFT } from '../reachBackend/test.main.js';

export default function Erc721() {
    const [web3, setWeb3] = useState()
    const address = useRef('')
    const ctcId = useRef('')
    const [successMsg, setSuccessMsg] = useState('')
    const [image, setImage] = useState(null);
    const [metaData, setMetaData] = useState(null);
    const [URL, setURL] = useState('');
    const wallConn = useRef(false)

    let Bool = 'Bool';
    let UInt = 'UInt';
    const cenCtc = '101984136';

    const API = (arg = {apiName: [['']]}) => {
        return arg;
    }
    const Fun = (arg1, arg2 , arg3, arg4) => {
        return [arg1, arg2, arg3, arg4]
    }
    //this is an input that needs to be provided by the smart contract developer
    const User = API({
        approveBridge : Fun([], Bool, [], `Backend Approve Bridge`),
        lockNFT : Fun([], Bool, [], `Bridger Lock NFT`),
        claimNFT : Fun([], Bool, [], `Bridger Claim NFT`),
    });
//

    //useful function to getELement by id
    const getElement = (id) => {
        let theElement = document.getElementById(id);
        return theElement.value
      }
    
      
      const [algoAddress, setAlgoAddress] = useState("Connect Your Wallet. Click 'connect'");
      const [algoBalance, setAlgoBalance] = useState(0);
     //
      const connect = async () => {
        const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ALGO"});
        reach.setWalletFallback(reach.walletFallback({
        providerEnv: 'TestNet', MyAlgoConnect }));
        const acc = await reach.getDefaultAccount();
        setAlgoAddress(acc.getAddress());
        setAlgoBalance(reach.formatCurrency((await reach.balanceOf(acc))), 4);
        //
      };
      const checkAlgoNftBalance = async () => {
        return algoBalance;
        }
      //API for saving new contract address into DB
      const callAPI = async (reachBackend, ctcDeployed, apiName, apiArg) => {
        const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ALGO"});
        reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
        const acc = await reach.getDefaultAccount();
        const ctc = acc.contract(reachBackend, ctcDeployed);
        
        const call = async (f) => {
            let res = undefined;
            try {
                res = await f();
                if (res == `no`) {console.log(`"${apiName}" API is not available from Reach backend`); 
                    alert(`"${apiName}" API is not available from Reach backend`);}
                else {console.log(`the "${apiName}" API has successfully worked. Here is the response:`, res)
                    alert(`the "${apiName}" API has successfully worked. Here is the response: ${res}`)}
            } catch (e) {
                res = [`err`, e]
                console.log(`there is an error while running "${apiName} API: "`, e);
                alert(`there is an error while running "${apiName} API: ${e}`);
            }
        };
        //
        const apis = ctc.a;
        call(async () => {
          let apiReturn ; ``;
          for (const x in apis){
            if(x == apiName){
              apiReturn = await apis[apiName](...apiArg);
            } 
          }
          if(apiReturn == ``){
                apiReturn = `no`
          }
            return apiReturn;
        });
      }
    
    
      // this is the function that executes and call the callAPI
      const runAPI = (apiName) => {
        let arrArg = [];
        let input = User[apiName][0].map(
          (j, index) => {
            return j == UInt ? parseInt(getElement(`${apiName}${j}${index+1}`)) : getElement(`${apiName}${j}${index+1}`);        
          }
        )
        console.log(`this is input: `, input);
       callAPI(backendCtc, cenCtc, apiName, input )
      }
    
    
      
    // this is the div that is generated from the API code
      const apiDivs = () => {
        let array = [];
        let counter = 0;
        for (const apiName in User){
          let div = User[apiName][0].map(
            (j, index) => {
               return(
                <div key = {`${apiName}${j}${index+1}`}>
                  {` ${j} (${User[apiName][2] && User[apiName][2][index]})`} == 
                  <input className = {`${apiName}${j}${index+1}`}></input>
                <br/>
                </div>)
            }
          )
            array = array.concat(<h2>{User[apiName][3]}</h2>);
            let style = {backgroundColor : 'brown', color: 'white', borderRadius: '8px', padding: '2px'};
            array = array.concat(div.concat(<div><br/><button style={style} onClick = {() => runAPI(apiName)}>Call {apiName} API</button><br/><br/><br/></div>));
          
          counter++
        }
        return array;
        }

    return (
        <div className={styles.container}>
            <nav className="navbar mt-4 mb-4">
            <div className="container">
                <h2 font = "34px"><strong>TESTING ETH BRIDGE</strong></h2>
                <div className="navbar-end">
                <button onClick={connect} className="button is-primary">Connect Wallet</button>
                </div>
            </div>
            </nav>
            <div className = 'mb-5'>
                <p>Enter the ERC721 NFT Contract ID</p>
                <input class = 'input is-info is-medium mb-2' id = 'erc721nftId' ></input>
                <button  class="button is-warning" onClick = {checkAlgoNftBalance}>Check your NFT Balance (ERC-721)</button> <br/>
            </div>
            <div className = 'mb-5'>
                <p>Enter the token ID</p>
                <input class = 'input is-info is-medium mb-2' id = 'nftUrl'></input>
                <button className="button is-link" onClick = {runAPI('lockNFT')}>Bridge NFT</button>
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