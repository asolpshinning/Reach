const loadStdlib = require( "@reach-sh/stdlib");
import * as backendCtc from '../../reachBackend/test.main.mjs';

 const handler = async(request, res) => {
    let req = request.body;
    let ctcId = `deployment pending`
    let nft = `not deployed yet`
    //let providerSet = false;
    
    const deploySmartContract = async() => {
        //connect wallet
        const stdlib = loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
        const accCreator = await stdlib.newAccountFromMnemonic('purse embrace special devote swear yellow deposit gadget punch feel pistol purity garden gain pause lava artist radar vault illness champion comfort call abstract good') 
        
        if(await stdlib.getProvider().length == 0){
            stdlib.setProviderByName('TestNet'); console.log(`TestNet has been set as the provider`);
        }

        //connect to backend
        const ctcCreator = accCreator.contract(backendCtc);
        console.log(`...backend now connected`);
        const deployToken = async() => {
            //Launch tokens
            const bT = await stdlib.launchToken(accCreator, req.tokenName, req.tokenSymbol , {decimals: 0, supply: 1, url: req.url, /* metadataHash: req.metadataHash */});
            console.log('This is the ID of the backing token: ', bT.id._hex);
            console.log('Backing token ID in plain number: ', stdlib.bigNumberToNumber(bT.id._hex));
            return String(stdlib.bigNumberToNumber(bT.id._hex));
        
        }
        await Promise.all([
            deployToken().then((nftId) => {
                nft = nftId;
                backendCtc.Creator(ctcCreator, {
                    getParams: (msg) => {
                        console.log(`${stdlib.formatAddress(accCreator)} about to set "NFTid" and "Bridger address" as parameters of central Contract`);
                        ctcCreator.getInfo().then((id) => {
                            ctcId = id;
                            console.log(`SUCCESS: this is the deployed contract id: ${id} and ${msg}`);
                        }
                        ) 
                        return {NFT: nftId, Bridger: req.bridger.current }
                        
                    },
                    iDeployed: (msg) => {
                        console.log(msg + ` and ${ctcId} is the contract ID`);
                    }
                }) ///.then(save NFT in the contract for bridger to claim) => Start from Here
            }),
            
        ])
        return [ctcId, nft];
  }
  try{
    deploySmartContract().then((a) => {
        //set timeout
        setTimeout(() => {
            res.status(200).json({ success: `Contract deployed successfully with Contract id: ${ctcId}`, NFTid : a[1], contractId : `${ctcId}` })
        }, 18000)
        }
    )
        


} catch (err) {
    console.log(`error: `, err);
    res.status(500).json({ error: err });
  }
  }
export default handler;  
  
  