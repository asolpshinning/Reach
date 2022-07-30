
    'reach 0.1';

    const Params = Object({
        tok : Token,	
        attacherNumber : UInt,
        distribution : UInt,
        countDown : UInt,
	 
    });
    export const main = Reach.App(() => {
        setOptions({ untrustworthyMaps: true });
        const Creator = Participant('Creator', {
            getParams: Fun([Bytes(15)], Params),
            iDeployed: Fun([Bytes(15)], Null),
        })
        const User = API({
            depositToVault : Fun([UInt], Bool),
            pressSwitch : Fun([], Bool),
            optIn : Fun([], Bool),
            acceptTermsToRecDistribution : Fun([], Bool),	
        });
        const Views = View({
            Creator_v : Address,
            balance_v : UInt,
            balance_tok_v : UInt,
            initDepositMade_v : Bool,
            switchPressed_v : Bool,
            attachedTotal_v : UInt,
            distrReceived_v : Fun([Address], Bool),	
        });

        init();

        Creator.only(() => {
            const { attacherNumber,distribution,countDown,tok } = declassify(interact.getParams('I have deployed'));
            
        });

        Creator.publish(attacherNumber,distribution,countDown,tok);

        Creator.interact.iDeployed('I HAVE DEPLOYED');

        const end = UInt.max;
        const startTime = thisConsensusTime();

        //unwrap integer map handler
        const unwInt = (m) => fromSome(m, UInt256(0));
        const unwInt64 = (m) => fromSome(m, 0);
        //unwarap array of 100 UInt
        const unwUintArrMap = (m) => fromSome(m, Array.replicate(100, 0));
        //unwrap boolean map handler
        const unwBool = (m) => fromSome(m, false);

        //Maps
        const distrReceived = new Map(Bool);


        //Sets
        

        const [initDepositMade_St,switchPressed_St,attachedTotal_St] = parallelReduce([false,false,0])
            .invariant(balance() >= 0)
            .while(true)
            .paySpec([tok])
            .define(() => {
            	Views.Creator_v.set(Creator);
                Views.balance_v.set(balance());
                Views.balance_tok_v.set(balance(tok));
                Views.initDepositMade_v.set(initDepositMade_St);
                Views.switchPressed_v.set(switchPressed_St);
                Views.attachedTotal_v.set(attachedTotal_St);
                Views.distrReceived_v.set((addr) => unwBool(distrReceived[addr]));
        })
        
        .api(
            User.depositToVault,
            // Assumes
            ((amt) => {
                assume(this == Creator,'Only Deployer can make deposit to vault'); 
                assume(amt == distribution,'Amount deposited must be equal to set distribution amount'); 
                assume(initDepositMade_St == false,'Deposit has already been made'); 
                assume(switchPressed_St == false,'Vault is already over after switch was pressed'); 
                assume(lastConsensusTime() < startTime + countDown,'countDown for deposit completed. It is over');
            }),
            // Payments
            ((amt) => [0, [amt, tok]]),
            // Consensus
            ((amt, res) => {
                require(this == Creator,'Only Deployer can make deposit to vault'); 
                require(amt == distribution,'Amount deposited must be equal to set distribution amount'); 
                require(initDepositMade_St == false,'Deposit has already been made'); 
                require(switchPressed_St == false,'Vault is already over after switch was pressed'); 
                require(lastConsensusTime() < startTime + countDown,'countDown for deposit completed. It is over');
                
                const initDepositMade_Stt = true;

                res(true);
                return [initDepositMade_Stt,switchPressed_St,attachedTotal_St];
            })
        )
        .api(
            User.pressSwitch,
            // Assumes
            (() => {
                assume(this == Creator,'Only Deployer can make deposit to vault'); 
 		assume(initDepositMade_St == true,'Deposit has not been made'); 
		assume(switchPressed_St == false,'Vault is already over after switch was pressed'); 
		assume(lastConsensusTime() < startTime + countDown,'countDown completed. It is over');
            }),
            // Payments
            (() => [0, [0, tok]]),
            // Consensus
            ((res) => {
                require(this == Creator,'Only Deployer can make deposit to vault'); 
 		        require(initDepositMade_St == true,'Deposit has not been made'); 
		        require(switchPressed_St == false,'Vault is already over after switch was pressed'); 
		        require(lastConsensusTime() < startTime + countDown,'countDown completed. It is over');
                
                transfer(balance(tok),tok ).to(this);

                const switchPressed_Stt = true;

                res(true);
                return [initDepositMade_St,switchPressed_Stt,attachedTotal_St];
            })
            
        )

        .api(
            User.optIn,
            // Assumes
            (() => {
            }),
            // Payments
            (() => [0, [0, tok]]),
            // Consensus
            ((res) => {
                res(true);
                return [initDepositMade_St,switchPressed_St,attachedTotal_St];
            })
            
        )
  
        .api(
            User.acceptTermsToRecDistribution,
            // Assumes
            (() => {
                assume(this != Creator,'Deployer cannot receive distributions'); 
 		assume(initDepositMade_St == true,'Deposit has not been made'); 
		assume(switchPressed_St == false,'Vault is already over after switch was pressed'); 
		assume(lastConsensusTime() >= startTime + countDown,'Terms accepted BUT countDown not complete yet.'); 
		assume(attachedTotal_St < attacherNumber,'Maximum number of people have already attached to the vault'); 
		assume(balance(tok) > distribution/attacherNumber,'token balance must be greater than distribution'); 
		assume(unwBool(distrReceived[this]) == false,'You have already received distribution');
            }),
            // Payments
            (() => [0, [0, tok]]),
            // Consensus
            ((res) => {
                require(this != Creator,'Deployer cannot receive distributions'); 
                require(initDepositMade_St == true,'Deposit has not been made'); 
                require(switchPressed_St == false,'Vault is already over after switch was pressed'); 
                require(lastConsensusTime() >= startTime + countDown,'Terms accepted BUT countDown not complete yet.'); 
                require(attachedTotal_St < attacherNumber,'Maximum number of people have already attached to the vault'); 
                require(balance(tok) > distribution/attacherNumber,'token balance must be greater than distribution'); 
                require(unwBool(distrReceived[this]) == false,'You have already received distribution');
                
                transfer(distribution/attacherNumber,tok ).to(this);
                const attachedTotal_Stt = attachedTotal_St  +  1 ;
		        distrReceived[this] = true;

                res(true);
                return [initDepositMade_St,switchPressed_St,attachedTotal_Stt];
            })
        )
        .timeout(absoluteTime(end), () => {
            Anybody.publish();
            return [initDepositMade_St,switchPressed_St,attachedTotal_St];
        })
        commit();
        exit();
    });   
    