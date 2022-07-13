'reach 0.1';

export const main = Reach.App(() => {
    setOptions({ untrustworthyMaps: true });
    const Creator = Participant('Creator', {
        getParams: Fun([Bytes(15)], Object({tokenAmtToDistribute: UInt, tok : Token})),
    })

    const User = API({
        //creator pay tokens to contract
        payTokens: Fun([UInt], Bool),
        // receiveTokens()
        receiveToken: Fun([], Bool),  
        //optIn()
        optIn: Fun([], Bool),
    });

    const Views = View({
        amIwhiteListed: Fun([Address], Bool),
    });

    init();

    Creator.only(() => {
        const { tokenAmtToDistribute, tok } = declassify(interact.getParams('I have deployed'));
    });

    Creator.publish(tokenAmtToDistribute, tok);

    const end = UInt.max;
    /* //unwrap integer map handler
    const unwInt = (m) => fromSome(m, 0); */

    const whiteList = new Set(); //whitelist;  
    const addrThatCollectedTokens = new Set(); //addr that collected tokens

    
    const [wlNum] = parallelReduce([0])
        .invariant(balance() >= 0)
        .while(true)
        .paySpec([tok])
        .define(() => {
            Views.amIwhiteListed.set((address) => whiteList.member(address));
        })
        .api(
            User.payTokens,
            // Assumes
            ((amt) => {
                assume(amt > 0, 'Amount must be greater than 0');
                assume(this == Creator, 'You must be the Creator to pay tokens');

            }),
            // Payments
            ((amt) => [0, [amt, tok]]),
            // Consensus
            ((amt, res) => {
                require(this == Creator, 'You must be the Creator to pay tokens');
                require(amt > 0, 'Amount must be greater than 0');
                res(true);
                return [wlNum];
            })
        ).api(
            User.receiveToken,
            // Assumes
            (() => {
                assume(tokenAmtToDistribute >0, 'not enough tokens to distribute');
                assume(balance(tok) > 0, 'Zero balance of token');
                assume(balance(tok) >= tokenAmtToDistribute / 5 , 'not enough tokens to distribute');
                assume(wlNum >= 5, 'Not enough white listed');
                assume(addrThatCollectedTokens.member(this) != true, 'YOu already received tokens');

            }),
            // Payments
            (() => [0, [0, tok]]),
            // Consensus
            ((res) => {
                require(tokenAmtToDistribute >0, 'not enough tokens to distribute');
                require(balance(tok) > 0, 'Zero balance of token');
                require(balance(tok) >= tokenAmtToDistribute / 5 , 'not enough tokens to distribute');
                require(wlNum >= 5, 'Not enough white listed');
                require(addrThatCollectedTokens.member(this) != true, 'You already received tokens');
                transfer([0, [tokenAmtToDistribute / 5, tok]]).to(this);
                addrThatCollectedTokens.insert(this);
                res(true);
                return [wlNum];
            })
        ).api(
            User.optIn,
            // Assumes
            (() => {
                assume(wlNum <= 4, 'Max white list reached');
            }),
            // Payments
            (() => [0, [0, tok]]),
            // Consensus
            ((res) => {
                require(wlNum <= 4, 'Max white list reached');
                whiteList.insert(this);
                res(true);
                return [wlNum + 1];
            })
        )
        .timeout(absoluteTime(end), () => {
            Anybody.publish();
            return [wlNum];
        });

    commit();
    exit();
});