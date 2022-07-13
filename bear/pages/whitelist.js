import styles from '../styles/Home.module.css'
import loadStdlib from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backendCtc from '../reachBackend/whitelist.main.js'
import React from "react";
import { useState, useRef, useEffect } from "react";

//contractInfo
/* tthis is contract id: 98694180
 this is contract id: 0x886f6e25e107f27f1c8414e94eb72c0bcfbc603bf12e6aa84c04621f8d9c7175   */

export default function Algorand() {
    const ctcId = '99521192';
    const tokId = '99520481' //'0x05ee8fe1'//'99520481';
    const [address, setAddress] = useState("Connect Your Wallet. Click 'connect'");
    const [balance, setBalance] = useState(0);
    const swapPending = useRef(0);
    
    //connect to wallet
  const connect = async () => {
    try {
      const reach = loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
      reach.setWalletFallback(reach.walletFallback({
          providerEnv: 'TestNet', MyAlgoConnect
      }));
      const acc = await reach.getDefaultAccount();
      setAddress(acc.getAddress());
      const addr = acc.getAddress();
      setBalance(reach.formatCurrency((await reach.balanceOf(acc))), 4);
      const ctc = await acc.contract(backendCtc, ctcId);
      const x = await ctc.views.checkInitiatedSwap(addr)
      swapPending.current = reach.formatCurrency(x[1],6);
      x && console.log('This is the the amount of ALgo waiting for you to claim: ', reach.formatCurrency(x[1],6));
    } catch (error) {
      alert(error);
        console.log(error);
    };
    }

    //useful function for reading user-entered values from input boxes
    const getElement = (className) => {
        let theElement = document.getElementsByClassName(className)[0];
        console.log(theElement.value);
        return theElement.value;
    }
    //deploy tokens
    const deployBT = async () => {
        //connect wallet
        let reach = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
        reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect }));
        const accCreator = await reach.getDefaultAccount();
        //Launch tokens
        const bT = await reach.launchToken(accCreator, getElement("btCtcName"), getElement("btCtcSymbol"));
        console.log('This is the ID of the backing token: ', bT.id._hex);
        console.log('Backing token ID in plain number: ', reach.bigNumberToNumber(bT.id._hex));
    }
  
    //deploy central manager contract
    const deployManCtc = async () => {
        let tok = getElement('tokId')
        let amt = parseInt(getElement ('amtTok'))
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
                    return {tokenAmtToDistribute : reach.parseCurrency(amt), tok }
                    
                },
            })])
    }

    //optin to contract
  const optIn1 = async () => {
    const reach = loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
    reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect }));
    const acc = await reach.getDefaultAccount();
    acc.tokenAccept(ctcId).then(console.log('You have opted in to the contract'));
  }
    const optIn = async () => {
        const reach = loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
        reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect }));
        const acc = await reach.getDefaultAccount();
        const addr = acc.getAddress();
        //const cenContr = getElement('optIn');
        const ctc = acc.contract(backendCtc, ctcId);
        const call = async (f) => {
            let res = undefined;
            try {
                res = await f();
              console.log(`SUCCESS: ${addr} has just been opted into the contract: `, res);
              alert(`This ${addr} has just been opted into the contract: `, res)
            } catch (e) {
                res = [`err`, e]
                console.log(`There is an error: `, e);
                alert(e);
            }
        };
        const apis = ctc.a;
        call(async () => {
            const apiReturn = await apis.optIn();
            //console.log(`wait for it... share tokens allocated...`, apiReturn);
            return apiReturn;
        });
    }
    //Start Swap
    const payToken = async () => {
      const swapAmt = parseInt(getElement('tokenAllocated'));
      //const ctcId = getElement('invWallet')
      let reach = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
      reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect }));
      const acc = await reach.getDefaultAccount();
      const centralContract = ctcId;
      console.log(`I am reprinting central ctc: `, centralContract)
      const ctc = acc.contract(backendCtc, centralContract);
      

      const call = async (f) => {
          let res = undefined;
          try {
              res = await f();
            console.log(`Creator just paid this amount to the contract : `, swapAmt)
            alert(`SUCCESS: Creator just paid this amount to the contract : ${swapAmt} `)
          } catch (e) {
              res = [`err`, e]
            console.log(`There is an error: `, e);
            alert(e);
          }
      };
      const apis = ctc.a;
      call(async () => {
          const apiReturn = await apis.payTokens(reach.parseCurrency(swapAmt));
          console.log(`wait for it... swap Started...`, apiReturn);
          return apiReturn;
      });

    }

    //Claim Swap
    const receiveToken = async () => {
        const reach = loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
        reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect }));
        const acc = await reach.getDefaultAccount();
        const addr = acc.getAddress();
        const cenContr = ctcId;
        const ctc = acc.contract(backendCtc, cenContr);
        const call = async (f) => {
            let res = undefined;
            try {
                res = await f();
              console.log(`This ${addr} has just claimed all his/her token from the  Contract: `);
              alert(`SUCCESS: ${addr} has just claimed all his/her token from the  Contract: `)
            } catch (e) {
                res = [`err`, e]
              console.log(`There is an error: `, e);
              alert(e);
            }
        };
        const apis = ctc.a;
        call(async () => {
            const apiReturn = await apis.receiveToken();
            return apiReturn;
        });

    }

    //
    return (
      <div className={styles.container}>
            <button onClick={connect}>CONNECT YOUR WALLET</button><br />
            <br />
            <h3 className={styles.h3}>Connected Address: </h3> {address}
            <h3 className={styles.h3}> Balance: </h3> {balance} ALGO
            <br />
            <br />


          <h2>Launch Token (make sure to put tokId in the code afterwards) </h2>
            Name =
            { <input className='btCtcName'></input>}
            <br />
            Symbol =
            { <input className='btCtcSymbol'></input> }
            <br />
            <br />
            <button onClick={deployBT}> Deploy Token </button>
            <br />
        
        
            <h2>Deploy Contract (Only if you wish and change the ctcId in the code afterwards)</h2>
            <br/>
            Token ID =
            { <input className='tokId'></input> }
            <br/>
            Amount of token to Distribute =
            { <input className='amtTok'></input> }
            <br/>
            <button onClick={deployManCtc}>Deploy Contract</button>
            <br />
            <br />

            <h2>OPTIN to contract (Optin to Join Whitelist - 5 people limit)</h2>
            <button onClick={optIn}>OptIn to Contract</button>
            <br /><br />


            <h2>Pay Tokens to Contract (Only Creator can Use this)</h2>
            Amount of Tokens =
            <input className='tokenAllocated'></input>
            <br />
            <br />
            <button onClick={payToken}>PAY TOKEN</button>
            <br />
            <br />

            <h2>Receive Tokens (Only if you are white listed)</h2>
            You have this amount to claim:  == 
            <b>{swapPending.current} ALGO </b><br />
            <button onClick={receiveToken}>Receive</button>
            <br />
            <br />
            Test this and give feedback

        </div>
    )
}

