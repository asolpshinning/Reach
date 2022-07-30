import Head from 'next/head'
//import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import loadStdlib from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backendCtc from '../reachBackend/vault.main'
import React from "react";
import { useState, useRef, useEffect } from "react";

let Address = 'Address';
let Bool = 'Bool';
let UInt = 'UInt';
const cenCtc = '101899591';

const API = (arg = {apiName: [['']]}) => {
    return arg;
}
const Fun = (arg1, arg2 , arg3, arg4) => {
    return [arg1, arg2, arg3, arg4]
}
//this is an input that needs to be provided by the smart contract developer
const User = API({
    depositToVault : Fun([UInt], Bool, ["Amount to deposit"], `Creator Needs to Deposit to Vault`),
    pressSwitch : Fun([], Bool, [], `Creator Needs to Press Switch When Ready`),
    optIn : Fun([], Bool, [], `Opt In to the Contract`),
    acceptTermsToRecDistribution : Fun([], Bool, [], `Attacher needs to Accept Terms to Receive Distribution. OPTIN to Token First`),
});
//
//useful function for reading user-entered values from input boxes
  const getElement = (className) => {
    let theElement = document.getElementsByClassName(className)[0];
    return theElement.value
  }

function Deliver() {
  const [address, setAddress] = useState("Connect Your Wallet. Click 'connect'");
  const [balance, setBalance] = useState(0);
 //
  const connect = async () => {
    const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ALGO"});
    reach.setWalletFallback(reach.walletFallback({
    providerEnv: 'TestNet', MyAlgoConnect }));
    const acc = await reach.getDefaultAccount();
    setAddress(acc.getAddress());
    setBalance(reach.formatCurrency((await reach.balanceOf(acc))), 4);
    //
  };
  
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

  //this is just an example of how callAPI works - worked well BTW
  const saveToDB = () => {
    callAPI(
      backendDB,
      cenCtc,
      'stCtcId',
      ['0x00000e']
    )
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

  const deploySmartContract = async() => {
        //connect wallet
        const stdlib = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
        stdlib.setWalletFallback(stdlib.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect }));
        const accCreator = await stdlib.getDefaultAccount()
        //connect to backend
        const ctcCreator = accCreator.contract(backendCtc);
        console.log(`...backend now connected`);
        await Promise.all([
            backendCtc.Creator(ctcCreator, {
                getParams: (msg) => {
                    console.log(`${stdlib.formatAddress(accCreator)} about to set one parameter of central Contract`);
                    ctcCreator.getInfo().then((id) => {
                      console.log(`this is contract id: ${id} and ${msg}`);
                      alert(`SUCCESS: this is the deployed contract id: ${id} and ${msg}`);
                        ctcCreator.getContractAddress().then((address) =>
                        console.log(`this is contract id: ${address} I am giving you after deploying`))
                    }
                    ) 
                    return {tok: `101882925`, attacherNumber: stdlib.parseCurrency(5), distribution: stdlib.parseCurrency(10000), countDown: 25 }
                    
                },
                iDeployed: (msg) => {
                    console.log(msg);
                    alert(`SUCCESS: ${msg}`);
                }
            })])
  }

  const deployToken = async() => {
        //connect wallet
        let reach = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
        reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect }));
        const accCreator = await reach.getDefaultAccount();
        //Launch tokens
        const bT = await reach.launchToken(accCreator, `fineToken`, `TOKEN`);
        console.log('This is the ID of the backing token: ', bT.id._hex);
        console.log('Backing token ID in plain number: ', reach.bigNumberToNumber(bT.id._hex));
        alert(`Backing token ID (copy and use for smart contract): ${reach.bigNumberToNumber(bT.id._hex)}`);
    
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
//
  return (
    <div className={styles.container}>
      <h1>REACH BEAR CHALLENGE: The Vault</h1>
      <button onClick={connect} style = {{backgroundColor : 'green', color: 'white', borderRadius: '6px', padding: '2px'}}> Connect </button>

      <div><h3> Your Connected Wallet Address: </h3> {address} </div>
      <div> <h3> Your Wallet Balance: {balance} ALGO </h3>  </div>
      <button onClick={deployToken} style = {{backgroundColor : 'blue', color: 'white', borderRadius: '6px', padding: '2px'}}> Deploy ASA </button>
      <br/><br/>
      <button onClick={deploySmartContract} style = {{backgroundColor : 'yellow', color: 'black', borderRadius: '6px', padding: '2px'}}> Deploy Contract </button>
      <br/>
      <br/>
      {apiDivs()}
      <br/>
    </div>
  );
}

export default Deliver;
