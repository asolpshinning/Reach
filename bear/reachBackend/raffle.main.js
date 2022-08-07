// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Data({
    None: ctc8,
    Some: ctc7
    });
  const ctc10 = stdlib.T_Data({
    None: ctc8,
    Some: ctc1
    });
  const map0_ctc = ctc9;
  
  const map1_ctc = ctc10;
  
  
  return {
    infos: {
      Creator_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v635, v636, v637, v638, v646] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v635, v636, v637, v638, v665, v667, v668, v669, v670, v671, v678, v679, v690, v691] = svs;
            return (await ((async () => {
              
              
              return v635;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      balance_NFT_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v635, v636, v637, v638, v646] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v635, v636, v637, v638, v665, v667, v668, v669, v670, v671, v678, v679, v690, v691] = svs;
            return (await ((async () => {
              
              
              return v691;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        },
      balance_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v635, v636, v637, v638, v646] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v635, v636, v637, v638, v665, v667, v668, v669, v670, v671, v678, v679, v690, v691] = svs;
            return (await ((async () => {
              
              
              return v679;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        },
      raffleOver_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v635, v636, v637, v638, v646] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v635, v636, v637, v638, v665, v667, v668, v669, v670, v671, v678, v679, v690, v691] = svs;
            return (await ((async () => {
              
              
              return v667;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc4
        },
      receivedTickets_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v635, v636, v637, v638, v646] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v635, v636, v637, v638, v665, v667, v668, v669, v670, v671, v678, v679, v690, v691] = svs;
            stdlib.assert(false, 'illegal view')
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        },
      rewardsClaimed_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v635, v636, v637, v638, v646] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v635, v636, v637, v638, v665, v667, v668, v669, v670, v671, v678, v679, v690, v691] = svs;
            return (await ((async () => {
              
              
              return v668;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc4
        },
      ticketPrice_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v635, v636, v637, v638, v646] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v635, v636, v637, v638, v665, v667, v668, v669, v670, v671, v678, v679, v690, v691] = svs;
            return (await ((async () => {
              
              
              return v636;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        },
      ticketsSold_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v635, v636, v637, v638, v646] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v635, v636, v637, v638, v665, v667, v668, v669, v670, v671, v678, v679, v690, v691] = svs;
            return (await ((async () => {
              
              
              return v670;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        },
      winningTicket_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v635, v636, v637, v638, v646] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v635, v636, v637, v638, v665, v667, v668, v669, v670, v671, v678, v679, v690, v691] = svs;
            return (await ((async () => {
              
              
              return v671;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc3, ctc6],
      4: [ctc0, ctc1, ctc2, ctc3, ctc7, ctc4, ctc4, ctc7, ctc1, ctc1, ctc6, ctc1, ctc5, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc3, ctc4]);
  return {
    mapDataTy: ctc5
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Object({
    NFT: ctc6,
    ticketPrice: ctc1
    });
  const ctc8 = stdlib.T_Digest;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    claimRewards0_86: ctc9,
    getTicket0_86: ctc10,
    revealWinner0_86: ctc5
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Address;
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc12]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const v617 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v618 = [v617];
  const v624 = stdlib.protect(ctc1, await interact.random(), {
    at: './raffle.rsh:39:51:application',
    fs: ['at ./raffle.rsh:38:21:application call to [unknown function] (defined at: ./raffle.rsh:38:25:function exp)'],
    msg: 'random',
    who: 'Creator'
    });
  const v625 = stdlib.mod(v624, stdlib.checkedBigNumberify('./raffle.rsh:9:26:decimal', stdlib.UInt_max, '5'));
  const v626 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./raffle.rsh:40:59:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./raffle.rsh:38:21:application call to [unknown function] (defined at: ./raffle.rsh:38:25:function exp)'],
    msg: 'random',
    who: 'Creator'
    });
  const v627 = stdlib.digest(ctc5, [v626, v625]);
  stdlib.protect(ctc0, await interact.showSalt(v626), {
    at: './raffle.rsh:42:51:application',
    fs: ['at ./raffle.rsh:38:21:application call to [unknown function] (defined at: ./raffle.rsh:38:25:function exp)'],
    msg: 'showSalt',
    who: 'Creator'
    });
  stdlib.protect(ctc0, await interact.showWinningTicket(v625), {
    at: './raffle.rsh:43:60:application',
    fs: ['at ./raffle.rsh:38:21:application call to [unknown function] (defined at: ./raffle.rsh:38:25:function exp)'],
    msg: 'showWinningTicket',
    who: 'Creator'
    });
  const v629 = 'I have deployed';
  const v630 = stdlib.protect(ctc7, await interact.getParams(v629), {
    at: './raffle.rsh:44:69:application',
    fs: ['at ./raffle.rsh:38:21:application call to [unknown function] (defined at: ./raffle.rsh:38:25:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v631 = v630.NFT;
  const v632 = v630.ticketPrice;
  
  const txn1 = await (ctc.sendrecv({
    args: [v632, v631, v627],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./raffle.rsh:48:17:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc6, ctc8],
    pay: [stdlib.checkedBigNumberify('./raffle.rsh:48:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v636, v637, v638], secs: v640, time: v639, didSend: v40, from: v635 } = txn1;
      
      const v641 = v618[stdlib.checkedBigNumberify('./raffle.rsh:48:17:dot', stdlib.UInt_max, '0')];
      const v643 = v641[stdlib.checkedBigNumberify('./raffle.rsh:48:17:dot', stdlib.UInt_max, '1')];
      const v644 = v641[stdlib.checkedBigNumberify('./raffle.rsh:48:17:dot', stdlib.UInt_max, '2')];
      const v645 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v643, v644];
      const v646 = stdlib.Array_set(v618, stdlib.checkedBigNumberify('./raffle.rsh:48:17:dot', stdlib.UInt_max, '0'), v645);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v637
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v636, v637, v638], secs: v640, time: v639, didSend: v40, from: v635 } = txn1;
  const v641 = v618[stdlib.checkedBigNumberify('./raffle.rsh:48:17:dot', stdlib.UInt_max, '0')];
  const v643 = v641[stdlib.checkedBigNumberify('./raffle.rsh:48:17:dot', stdlib.UInt_max, '1')];
  const v644 = v641[stdlib.checkedBigNumberify('./raffle.rsh:48:17:dot', stdlib.UInt_max, '2')];
  const v645 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v643, v644];
  const v646 = stdlib.Array_set(v618, stdlib.checkedBigNumberify('./raffle.rsh:48:17:dot', stdlib.UInt_max, '0'), v645);
  ;
  ;
  const v649 = 'I HAVE DEPLOYED';
  stdlib.protect(ctc0, await interact.iDeployed(v649), {
    at: './raffle.rsh:50:35:application',
    fs: ['at ./raffle.rsh:50:35:application call to [unknown function] (defined at: ./raffle.rsh:50:35:function exp)', 'at ./raffle.rsh:50:35:application call to "liftedInteract" (defined at: ./raffle.rsh:50:35:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v635, v636, v637, v638, v646],
    evt_cnt: 0,
    funcNum: 1,
    lct: v639,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./raffle.rsh:52:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle.rsh:52:25:decimal', stdlib.UInt_max, '1000000'), v637]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v652, time: v651, didSend: v52, from: v650 } = txn2;
      
      ;
      const v653 = v646[stdlib.checkedBigNumberify('./raffle.rsh:52:17:dot', stdlib.UInt_max, '0')];
      const v654 = v653[stdlib.checkedBigNumberify('./raffle.rsh:52:17:dot', stdlib.UInt_max, '0')];
      const v655 = stdlib.add(v654, stdlib.checkedBigNumberify('./raffle.rsh:52:25:decimal', stdlib.UInt_max, '1000000'));
      const v658 = v653[stdlib.checkedBigNumberify('./raffle.rsh:52:17:dot', stdlib.UInt_max, '1')];
      const v659 = v653[stdlib.checkedBigNumberify('./raffle.rsh:52:17:dot', stdlib.UInt_max, '2')];
      const v660 = [v655, v658, v659];
      const v661 = stdlib.Array_set(v646, stdlib.checkedBigNumberify('./raffle.rsh:52:17:dot', stdlib.UInt_max, '0'), v660);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./raffle.rsh:52:25:decimal', stdlib.UInt_max, '1000000'),
        kind: 'to',
        tok: v637
        });
      const v665 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v667 = false;
      const v668 = false;
      const v669 = v665;
      const v670 = stdlib.checkedBigNumberify('./raffle.rsh:73:113:decimal', stdlib.UInt_max, '0');
      const v671 = stdlib.checkedBigNumberify('./raffle.rsh:73:127:decimal', stdlib.UInt_max, '0');
      const v672 = v651;
      const v678 = v661;
      const v679 = stdlib.checkedBigNumberify('./raffle.rsh:36:15:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        const v690 = v678[stdlib.checkedBigNumberify('./raffle.rsh:80:44:application', stdlib.UInt_max, '0')];
        const v691 = v690[stdlib.checkedBigNumberify('./raffle.rsh:80:44:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v637
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc1, ctc6, ctc8, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v652, time: v651, didSend: v52, from: v650 } = txn2;
  ;
  const v653 = v646[stdlib.checkedBigNumberify('./raffle.rsh:52:17:dot', stdlib.UInt_max, '0')];
  const v654 = v653[stdlib.checkedBigNumberify('./raffle.rsh:52:17:dot', stdlib.UInt_max, '0')];
  const v655 = stdlib.add(v654, stdlib.checkedBigNumberify('./raffle.rsh:52:25:decimal', stdlib.UInt_max, '1000000'));
  const v658 = v653[stdlib.checkedBigNumberify('./raffle.rsh:52:17:dot', stdlib.UInt_max, '1')];
  const v659 = v653[stdlib.checkedBigNumberify('./raffle.rsh:52:17:dot', stdlib.UInt_max, '2')];
  const v660 = [v655, v658, v659];
  const v661 = stdlib.Array_set(v646, stdlib.checkedBigNumberify('./raffle.rsh:52:17:dot', stdlib.UInt_max, '0'), v660);
  ;
  const v662 = stdlib.addressEq(v635, v650);
  stdlib.assert(v662, {
    at: './raffle.rsh:52:17:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const v665 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  let v667 = false;
  let v668 = false;
  let v669 = v665;
  let v670 = stdlib.checkedBigNumberify('./raffle.rsh:73:113:decimal', stdlib.UInt_max, '0');
  let v671 = stdlib.checkedBigNumberify('./raffle.rsh:73:127:decimal', stdlib.UInt_max, '0');
  let v672 = v651;
  let v678 = v661;
  let v679 = stdlib.checkedBigNumberify('./raffle.rsh:36:15:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const v690 = v678[stdlib.checkedBigNumberify('./raffle.rsh:80:44:application', stdlib.UInt_max, '0')];
    const v691 = v690[stdlib.checkedBigNumberify('./raffle.rsh:80:44:application', stdlib.UInt_max, '0')];
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc11],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v635, v636, v637, v638, v665, v667, v668, v669, v670, v671, v678, v679, v690, v691],
        evt_cnt: 0,
        funcNum: 4,
        lct: v672,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./raffle.rsh:174:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v1224, time: v1223, didSend: v529, from: v1222 } = txn4;
          
          ;
          const cv667 = v667;
          const cv668 = v668;
          const cv669 = v669;
          const cv670 = v670;
          const cv671 = v671;
          const cv672 = v1223;
          const cv678 = v678;
          const cv679 = v679;
          
          await (async () => {
            const v667 = cv667;
            const v668 = cv668;
            const v669 = cv669;
            const v670 = cv670;
            const v671 = cv671;
            const v672 = cv672;
            const v678 = cv678;
            const v679 = cv679;
            
            if (await (async () => {
              
              return true;})()) {
              const v690 = v678[stdlib.checkedBigNumberify('./raffle.rsh:80:44:application', stdlib.UInt_max, '0')];
              const v691 = v690[stdlib.checkedBigNumberify('./raffle.rsh:80:44:application', stdlib.UInt_max, '0')];
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v637
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc13, ctc1, ctc6, ctc8, ctc2, ctc12, ctc12, ctc2, ctc1, ctc1, ctc15, ctc1, ctc14, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1224, time: v1223, didSend: v529, from: v1222 } = txn4;
      ;
      const v1225 = stdlib.addressEq(v635, v1222);
      stdlib.assert(v1225, {
        at: './raffle.rsh:174:21:dot',
        fs: ['at ./raffle.rsh:173:40:application call to [unknown function] (defined at: ./raffle.rsh:173:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv667 = v667;
      const cv668 = v668;
      const cv669 = v669;
      const cv670 = v670;
      const cv671 = v671;
      const cv672 = v1223;
      const cv678 = v678;
      const cv679 = v679;
      
      v667 = cv667;
      v668 = cv668;
      v669 = cv669;
      v670 = cv670;
      v671 = cv671;
      v672 = cv672;
      v678 = cv678;
      v679 = cv679;
      
      continue;
      }
    else {
      const {data: [v805], secs: v807, time: v806, didSend: v394, from: v804 } = txn3;
      switch (v805[0]) {
        case 'claimRewards0_86': {
          const v808 = v805[1];
          undefined /* setApiDetails */;
          ;
          const v850 = v690[stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '1')];
          const v851 = v690[stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '2')];
          const v852 = [v691, v850, v851];
          const v853 = stdlib.Array_set(v678, stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '0'), v852);
          ;
          const v855 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v804), null);
          const v859 = stdlib.fromSome(v855, v665);
          const v860 = await stdlib.Array_asyncReduce([v859], false, async([v862], v861, v863) => {
            const v864 = stdlib.eq(v671, v862);
            const v866 = v861 ? v861 : v864;
            
            return v866;})
          stdlib.assert(v860, {
            at: './raffle.rsh:160:24:application',
            fs: ['at ./raffle.rsh:159:13:application call to [unknown function] (defined at: ./raffle.rsh:159:13:function exp)'],
            msg: 'You do not have the winning ticket, Wait for another raffle',
            who: 'Creator'
            });
          const v868 = v668 ? false : true;
          stdlib.assert(v868, {
            at: './raffle.rsh:161:32:application',
            fs: ['at ./raffle.rsh:159:13:application call to [unknown function] (defined at: ./raffle.rsh:159:13:function exp)'],
            msg: 'Rewards have already been claimed by the raffle winner',
            who: 'Creator'
            });
          stdlib.assert(v667, {
            at: './raffle.rsh:162:32:application',
            fs: ['at ./raffle.rsh:159:13:application call to [unknown function] (defined at: ./raffle.rsh:159:13:function exp)'],
            msg: 'Raffle is not yet over. ',
            who: 'Creator'
            });
          const v870 = v853[stdlib.checkedBigNumberify('./raffle.rsh:163:32:application', stdlib.UInt_max, '0')];
          const v871 = v870[stdlib.checkedBigNumberify('./raffle.rsh:163:32:application', stdlib.UInt_max, '0')];
          const v872 = stdlib.ge(v871, stdlib.checkedBigNumberify('./raffle.rsh:163:41:decimal', stdlib.UInt_max, '1'));
          stdlib.assert(v872, {
            at: './raffle.rsh:163:24:application',
            fs: ['at ./raffle.rsh:159:13:application call to [unknown function] (defined at: ./raffle.rsh:159:13:function exp)'],
            msg: 'Weirdly, you do not have enough NFT to claim the rewards',
            who: 'Creator'
            });
          const v878 = stdlib.sub(v871, stdlib.checkedBigNumberify('./raffle.rsh:165:26:decimal', stdlib.UInt_max, '1'));
          const v881 = v870[stdlib.checkedBigNumberify('./raffle.rsh:165:36:application', stdlib.UInt_max, '1')];
          const v882 = v870[stdlib.checkedBigNumberify('./raffle.rsh:165:36:application', stdlib.UInt_max, '2')];
          const v883 = [v878, v881, v882];
          const v884 = stdlib.Array_set(v853, stdlib.checkedBigNumberify('./raffle.rsh:165:36:application', stdlib.UInt_max, '0'), v883);
          ;
          const v885 = true;
          await txn3.getOutput('claimRewards', 'v885', ctc12, v885);
          const cv667 = true;
          const cv668 = true;
          const cv669 = v669;
          const cv670 = v670;
          const cv671 = v671;
          const cv672 = v806;
          const cv678 = v884;
          const cv679 = v679;
          
          v667 = cv667;
          v668 = cv668;
          v669 = cv669;
          v670 = cv670;
          v671 = cv671;
          v672 = cv672;
          v678 = cv678;
          v679 = cv679;
          
          continue;
          break;
          }
        case 'getTicket0_86': {
          const v946 = v805[1];
          undefined /* setApiDetails */;
          const v982 = stdlib.add(v679, v636);
          ;
          const v988 = v690[stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '1')];
          const v989 = v690[stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '2')];
          const v990 = [v691, v988, v989];
          const v991 = stdlib.Array_set(v678, stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '0'), v990);
          ;
          const v1031 = v946[stdlib.checkedBigNumberify('./raffle.rsh:88:13:spread', stdlib.UInt_max, '0')];
          const v1032 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v804), null);
          const v1033 = stdlib.fromSome(v1032, stdlib.checkedBigNumberify('./raffle.rsh:59:45:decimal', stdlib.UInt_max, '0'));
          const v1034 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v804), null);
          const v1038 = stdlib.fromSome(v1034, v665);
          const v1039 = stdlib.gt(v1031, stdlib.checkedBigNumberify('./raffle.rsh:107:31:decimal', stdlib.UInt_max, '0'));
          const v1040 = stdlib.le(v1031, stdlib.checkedBigNumberify('./raffle.rsh:9:26:decimal', stdlib.UInt_max, '5'));
          const v1041 = v1039 ? v1040 : false;
          stdlib.assert(v1041, {
            at: './raffle.rsh:107:24:application',
            fs: ['at ./raffle.rsh:104:13:application call to [unknown function] (defined at: ./raffle.rsh:104:13:function exp)'],
            msg: 'Invalid ticket number',
            who: 'Creator'
            });
          const v1042 = stdlib.lt(v670, stdlib.checkedBigNumberify('./raffle.rsh:9:26:decimal', stdlib.UInt_max, '5'));
          stdlib.assert(v1042, {
            at: './raffle.rsh:108:24:application',
            fs: ['at ./raffle.rsh:104:13:application call to [unknown function] (defined at: ./raffle.rsh:104:13:function exp)'],
            msg: 'All tickets have been sold. Sorry!',
            who: 'Creator'
            });
          const v1043 = v667 ? false : true;
          stdlib.assert(v1043, {
            at: './raffle.rsh:109:32:application',
            fs: ['at ./raffle.rsh:104:13:application call to [unknown function] (defined at: ./raffle.rsh:104:13:function exp)'],
            msg: 'Raffle is already over. Sorry!',
            who: 'Creator'
            });
          const v1044 = await stdlib.Array_asyncReduce([v669], false, async([v1046], v1045, v1047) => {
            const v1048 = stdlib.eq(v1031, v1046);
            const v1050 = v1045 ? v1045 : v1048;
            
            return v1050;})
          const v1051 = v1044 ? false : true;
          stdlib.assert(v1051, {
            at: './raffle.rsh:110:32:application',
            fs: ['at ./raffle.rsh:104:13:application call to [unknown function] (defined at: ./raffle.rsh:104:13:function exp)'],
            msg: 'Someone already purchased your chosen ticket!. Try again',
            who: 'Creator'
            });
          const v1052 = stdlib.lt(v1033, stdlib.checkedBigNumberify('./raffle.rsh:9:26:decimal', stdlib.UInt_max, '5'));
          stdlib.assert(v1052, {
            at: './raffle.rsh:111:24:application',
            fs: ['at ./raffle.rsh:104:13:application call to [unknown function] (defined at: ./raffle.rsh:104:13:function exp)'],
            msg: 'weird - ticketCount bigger than array size',
            who: 'Creator'
            });
          const v1053 = stdlib.add(v1033, stdlib.checkedBigNumberify('./raffle.rsh:113:51:decimal', stdlib.UInt_max, '1'));
          await stdlib.mapSet(map1, v804, v1053);
          const v1054 = stdlib.add(v670, stdlib.checkedBigNumberify('./raffle.rsh:114:60:decimal', stdlib.UInt_max, '1'));
          const v1056 = stdlib.Array_set(v1038, v1033, v1031);
          await stdlib.mapSet(map0, v804, v1056);
          const v1058 = stdlib.Array_set(v669, v1033, v1031);
          const v1059 = true;
          await txn3.getOutput('getTicket', 'v1059', ctc12, v1059);
          const cv667 = v667;
          const cv668 = v668;
          const cv669 = v1058;
          const cv670 = v1054;
          const cv671 = v671;
          const cv672 = v806;
          const cv678 = v991;
          const cv679 = v982;
          
          v667 = cv667;
          v668 = cv668;
          v669 = cv669;
          v670 = cv670;
          v671 = cv671;
          v672 = cv672;
          v678 = cv678;
          v679 = cv679;
          
          continue;
          break;
          }
        case 'revealWinner0_86': {
          const v1084 = v805[1];
          undefined /* setApiDetails */;
          ;
          const v1126 = v690[stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '1')];
          const v1127 = v690[stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '2')];
          const v1128 = [v691, v1126, v1127];
          const v1129 = stdlib.Array_set(v678, stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '0'), v1128);
          ;
          const v1206 = v1084[stdlib.checkedBigNumberify('./raffle.rsh:122:13:spread', stdlib.UInt_max, '0')];
          const v1207 = v1084[stdlib.checkedBigNumberify('./raffle.rsh:122:13:spread', stdlib.UInt_max, '1')];
          const v1208 = stdlib.addressEq(v804, v635);
          stdlib.assert(v1208, {
            at: './raffle.rsh:134:24:application',
            fs: ['at ./raffle.rsh:133:13:application call to [unknown function] (defined at: ./raffle.rsh:133:13:function exp)'],
            msg: 'Only Raffle Creator can use this API',
            who: 'Creator'
            });
          const v1209 = stdlib.eq(stdlib.checkedBigNumberify('./raffle.rsh:9:26:decimal', stdlib.UInt_max, '5'), v670);
          stdlib.assert(v1209, {
            at: './raffle.rsh:135:32:application',
            fs: ['at ./raffle.rsh:133:13:application call to [unknown function] (defined at: ./raffle.rsh:133:13:function exp)'],
            msg: 'Wait until all tickets are sold before revealing the winner',
            who: 'Creator'
            });
          const v1210 = v667 ? false : true;
          stdlib.assert(v1210, {
            at: './raffle.rsh:136:32:application',
            fs: ['at ./raffle.rsh:133:13:application call to [unknown function] (defined at: ./raffle.rsh:133:13:function exp)'],
            msg: 'Raffle is already over. ',
            who: 'Creator'
            });
          const v1211 = stdlib.digest(ctc5, [v1206, v1207]);
          const v1212 = stdlib.digestEq(v638, v1211);
          stdlib.assert(v1212, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./raffle.rsh:138:32:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)', 'at ./raffle.rsh:133:13:application call to [unknown function] (defined at: ./raffle.rsh:133:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1213 = true;
          await txn3.getOutput('revealWinner', 'v1213', ctc12, v1213);
          const cv667 = v667;
          const cv668 = v668;
          const cv669 = v669;
          const cv670 = v670;
          const cv671 = v1207;
          const cv672 = v806;
          const cv678 = v1129;
          const cv679 = v679;
          
          v667 = cv667;
          v668 = cv668;
          v669 = cv669;
          v670 = cv670;
          v671 = cv671;
          v672 = cv672;
          v678 = cv678;
          v679 = cv679;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  
  
  };
export async function _claimRewards4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _claimRewards4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _claimRewards4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Digest;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc14 = stdlib.T_Data({
    claimRewards0_86: ctc11,
    getTicket0_86: ctc12,
    revealWinner0_86: ctc13
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v635, v636, v637, v638, v665, v667, v668, v669, v670, v671, v678, v679, v690, v691] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc6, ctc7, ctc2, ctc8, ctc8, ctc2, ctc1, ctc1, ctc10, ctc1, ctc9, ctc1]);
  const v745 = ctc.selfAddress();
  const v747 = stdlib.protect(ctc11, await interact.in(), {
    at: './raffle.rsh:1:23:application',
    fs: ['at ./raffle.rsh:149:13:application call to [unknown function] (defined at: ./raffle.rsh:149:13:function exp)', 'at ./raffle.rsh:73:111:application call to "runclaimRewards0_86" (defined at: ./raffle.rsh:146:13:function exp)', 'at ./raffle.rsh:73:111:application call to [unknown function] (defined at: ./raffle.rsh:73:111:function exp)'],
    msg: 'in',
    who: 'claimRewards'
    });
  const v749 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v745), null);
  const v753 = stdlib.fromSome(v749, v665);
  const v754 = await stdlib.Array_asyncReduce([v753], false, async([v756], v755, v757) => {
    const v758 = stdlib.eq(v671, v756);
    const v760 = v755 ? v755 : v758;
    
    return v760;})
  stdlib.assert(v754, {
    at: './raffle.rsh:150:23:application',
    fs: ['at ./raffle.rsh:149:13:application call to [unknown function] (defined at: ./raffle.rsh:149:17:function exp)', 'at ./raffle.rsh:149:13:application call to [unknown function] (defined at: ./raffle.rsh:149:13:function exp)', 'at ./raffle.rsh:73:111:application call to "runclaimRewards0_86" (defined at: ./raffle.rsh:146:13:function exp)', 'at ./raffle.rsh:73:111:application call to [unknown function] (defined at: ./raffle.rsh:73:111:function exp)'],
    msg: 'You do not have the winning ticket, Wait for another raffle',
    who: 'claimRewards'
    });
  const v762 = v668 ? false : true;
  stdlib.assert(v762, {
    at: './raffle.rsh:151:31:application',
    fs: ['at ./raffle.rsh:149:13:application call to [unknown function] (defined at: ./raffle.rsh:149:17:function exp)', 'at ./raffle.rsh:149:13:application call to [unknown function] (defined at: ./raffle.rsh:149:13:function exp)', 'at ./raffle.rsh:73:111:application call to "runclaimRewards0_86" (defined at: ./raffle.rsh:146:13:function exp)', 'at ./raffle.rsh:73:111:application call to [unknown function] (defined at: ./raffle.rsh:73:111:function exp)'],
    msg: 'Rewards have already been claimed by the raffle winner',
    who: 'claimRewards'
    });
  stdlib.assert(v667, {
    at: './raffle.rsh:152:31:application',
    fs: ['at ./raffle.rsh:149:13:application call to [unknown function] (defined at: ./raffle.rsh:149:17:function exp)', 'at ./raffle.rsh:149:13:application call to [unknown function] (defined at: ./raffle.rsh:149:13:function exp)', 'at ./raffle.rsh:73:111:application call to "runclaimRewards0_86" (defined at: ./raffle.rsh:146:13:function exp)', 'at ./raffle.rsh:73:111:application call to [unknown function] (defined at: ./raffle.rsh:73:111:function exp)'],
    msg: 'Raffle is not yet over. ',
    who: 'claimRewards'
    });
  const v766 = stdlib.ge(v691, stdlib.checkedBigNumberify('./raffle.rsh:153:40:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v766, {
    at: './raffle.rsh:153:23:application',
    fs: ['at ./raffle.rsh:149:13:application call to [unknown function] (defined at: ./raffle.rsh:149:17:function exp)', 'at ./raffle.rsh:149:13:application call to [unknown function] (defined at: ./raffle.rsh:149:13:function exp)', 'at ./raffle.rsh:73:111:application call to "runclaimRewards0_86" (defined at: ./raffle.rsh:146:13:function exp)', 'at ./raffle.rsh:73:111:application call to [unknown function] (defined at: ./raffle.rsh:73:111:function exp)'],
    msg: 'Weirdly, you do not have enough NFT to claim the rewards',
    who: 'claimRewards'
    });
  const v769 = ['claimRewards0_86', v747];
  
  const txn1 = await (ctc.sendrecv({
    args: [v635, v636, v637, v638, v665, v667, v668, v669, v670, v671, v678, v679, v690, v691, v769],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle.rsh:157:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle.rsh:157:25:decimal', stdlib.UInt_max, '0'), v637]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v805], secs: v807, time: v806, didSend: v394, from: v804 } = txn1;
      
      switch (v805[0]) {
        case 'claimRewards0_86': {
          const v808 = v805[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimRewards"
            });
          ;
          const v850 = v690[stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '1')];
          const v851 = v690[stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '2')];
          const v852 = [v691, v850, v851];
          const v853 = stdlib.Array_set(v678, stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '0'), v852);
          ;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v804), null);
          const v870 = v853[stdlib.checkedBigNumberify('./raffle.rsh:163:32:application', stdlib.UInt_max, '0')];
          const v871 = v870[stdlib.checkedBigNumberify('./raffle.rsh:163:32:application', stdlib.UInt_max, '0')];
          const v878 = stdlib.sub(v871, stdlib.checkedBigNumberify('./raffle.rsh:165:26:decimal', stdlib.UInt_max, '1'));
          const v881 = v870[stdlib.checkedBigNumberify('./raffle.rsh:165:36:application', stdlib.UInt_max, '1')];
          const v882 = v870[stdlib.checkedBigNumberify('./raffle.rsh:165:36:application', stdlib.UInt_max, '2')];
          const v883 = [v878, v881, v882];
          const v884 = stdlib.Array_set(v853, stdlib.checkedBigNumberify('./raffle.rsh:165:36:application', stdlib.UInt_max, '0'), v883);
          sim_r.txns.push({
            kind: 'from',
            to: v804,
            tok: v637
            });
          const v885 = true;
          const v886 = await txn1.getOutput('claimRewards', 'v885', ctc8, v885);
          
          const v1890 = true;
          const v1891 = true;
          const v1892 = v669;
          const v1893 = v670;
          const v1894 = v671;
          const v1896 = v884;
          const v1897 = v679;
          const v1898 = v884[stdlib.checkedBigNumberify('./raffle.rsh:80:44:application', stdlib.UInt_max, '0')];
          const v1899 = v1898[stdlib.checkedBigNumberify('./raffle.rsh:80:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'getTicket0_86': {
          const v946 = v805[1];
          
          break;
          }
        case 'revealWinner0_86': {
          const v1084 = v805[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc6, ctc7, ctc2, ctc8, ctc8, ctc2, ctc1, ctc1, ctc10, ctc1, ctc9, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v805], secs: v807, time: v806, didSend: v394, from: v804 } = txn1;
  switch (v805[0]) {
    case 'claimRewards0_86': {
      const v808 = v805[1];
      undefined /* setApiDetails */;
      ;
      const v850 = v690[stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '1')];
      const v851 = v690[stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '2')];
      const v852 = [v691, v850, v851];
      const v853 = stdlib.Array_set(v678, stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '0'), v852);
      ;
      const v855 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v804), null);
      const v859 = stdlib.fromSome(v855, v665);
      const v860 = await stdlib.Array_asyncReduce([v859], false, async([v862], v861, v863) => {
        const v864 = stdlib.eq(v671, v862);
        const v866 = v861 ? v861 : v864;
        
        return v866;})
      stdlib.assert(v860, {
        at: './raffle.rsh:160:24:application',
        fs: ['at ./raffle.rsh:159:13:application call to [unknown function] (defined at: ./raffle.rsh:159:13:function exp)'],
        msg: 'You do not have the winning ticket, Wait for another raffle',
        who: 'claimRewards'
        });
      const v868 = v668 ? false : true;
      stdlib.assert(v868, {
        at: './raffle.rsh:161:32:application',
        fs: ['at ./raffle.rsh:159:13:application call to [unknown function] (defined at: ./raffle.rsh:159:13:function exp)'],
        msg: 'Rewards have already been claimed by the raffle winner',
        who: 'claimRewards'
        });
      stdlib.assert(v667, {
        at: './raffle.rsh:162:32:application',
        fs: ['at ./raffle.rsh:159:13:application call to [unknown function] (defined at: ./raffle.rsh:159:13:function exp)'],
        msg: 'Raffle is not yet over. ',
        who: 'claimRewards'
        });
      const v870 = v853[stdlib.checkedBigNumberify('./raffle.rsh:163:32:application', stdlib.UInt_max, '0')];
      const v871 = v870[stdlib.checkedBigNumberify('./raffle.rsh:163:32:application', stdlib.UInt_max, '0')];
      const v872 = stdlib.ge(v871, stdlib.checkedBigNumberify('./raffle.rsh:163:41:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v872, {
        at: './raffle.rsh:163:24:application',
        fs: ['at ./raffle.rsh:159:13:application call to [unknown function] (defined at: ./raffle.rsh:159:13:function exp)'],
        msg: 'Weirdly, you do not have enough NFT to claim the rewards',
        who: 'claimRewards'
        });
      const v878 = stdlib.sub(v871, stdlib.checkedBigNumberify('./raffle.rsh:165:26:decimal', stdlib.UInt_max, '1'));
      const v881 = v870[stdlib.checkedBigNumberify('./raffle.rsh:165:36:application', stdlib.UInt_max, '1')];
      const v882 = v870[stdlib.checkedBigNumberify('./raffle.rsh:165:36:application', stdlib.UInt_max, '2')];
      const v883 = [v878, v881, v882];
      const v884 = stdlib.Array_set(v853, stdlib.checkedBigNumberify('./raffle.rsh:165:36:application', stdlib.UInt_max, '0'), v883);
      ;
      const v885 = true;
      const v886 = await txn1.getOutput('claimRewards', 'v885', ctc8, v885);
      if (v394) {
        stdlib.protect(ctc0, await interact.out(v808, v886), {
          at: './raffle.rsh:147:13:application',
          fs: ['at ./raffle.rsh:147:13:application call to [unknown function] (defined at: ./raffle.rsh:147:13:function exp)', 'at ./raffle.rsh:169:20:application call to "res" (defined at: ./raffle.rsh:159:13:function exp)', 'at ./raffle.rsh:159:13:application call to [unknown function] (defined at: ./raffle.rsh:159:13:function exp)'],
          msg: 'out',
          who: 'claimRewards'
          });
        }
      else {
        }
      
      const v1890 = true;
      const v1891 = true;
      const v1892 = v669;
      const v1893 = v670;
      const v1894 = v671;
      const v1896 = v884;
      const v1897 = v679;
      const v1898 = v884[stdlib.checkedBigNumberify('./raffle.rsh:80:44:application', stdlib.UInt_max, '0')];
      const v1899 = v1898[stdlib.checkedBigNumberify('./raffle.rsh:80:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'getTicket0_86': {
      const v946 = v805[1];
      return;
      break;
      }
    case 'revealWinner0_86': {
      const v1084 = v805[1];
      return;
      break;
      }
    }
  
  
  };
export async function _getTicket4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _getTicket4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _getTicket4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Digest;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc14 = stdlib.T_Data({
    claimRewards0_86: ctc12,
    getTicket0_86: ctc11,
    revealWinner0_86: ctc13
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v635, v636, v637, v638, v665, v667, v668, v669, v670, v671, v678, v679, v690, v691] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc6, ctc7, ctc2, ctc8, ctc8, ctc2, ctc1, ctc1, ctc10, ctc1, ctc9, ctc1]);
  const v696 = ctc.selfAddress();
  const v698 = stdlib.protect(ctc11, await interact.in(), {
    at: './raffle.rsh:1:23:application',
    fs: ['at ./raffle.rsh:91:13:application call to [unknown function] (defined at: ./raffle.rsh:91:13:function exp)', 'at ./raffle.rsh:73:111:application call to "rungetTicket0_86" (defined at: ./raffle.rsh:88:13:function exp)', 'at ./raffle.rsh:73:111:application call to [unknown function] (defined at: ./raffle.rsh:73:111:function exp)'],
    msg: 'in',
    who: 'getTicket'
    });
  const v699 = v698[stdlib.checkedBigNumberify('./raffle.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v702 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v696), null);
  const v703 = stdlib.fromSome(v702, stdlib.checkedBigNumberify('./raffle.rsh:59:45:decimal', stdlib.UInt_max, '0'));
  const v709 = stdlib.gt(v699, stdlib.checkedBigNumberify('./raffle.rsh:94:30:decimal', stdlib.UInt_max, '0'));
  const v710 = stdlib.le(v699, stdlib.checkedBigNumberify('./raffle.rsh:9:26:decimal', stdlib.UInt_max, '5'));
  const v711 = v709 ? v710 : false;
  stdlib.assert(v711, {
    at: './raffle.rsh:94:23:application',
    fs: ['at ./raffle.rsh:91:13:application call to [unknown function] (defined at: ./raffle.rsh:91:20:function exp)', 'at ./raffle.rsh:91:13:application call to [unknown function] (defined at: ./raffle.rsh:91:13:function exp)', 'at ./raffle.rsh:73:111:application call to "rungetTicket0_86" (defined at: ./raffle.rsh:88:13:function exp)', 'at ./raffle.rsh:73:111:application call to [unknown function] (defined at: ./raffle.rsh:73:111:function exp)'],
    msg: 'Invalid ticket number',
    who: 'getTicket'
    });
  const v712 = stdlib.lt(v670, stdlib.checkedBigNumberify('./raffle.rsh:9:26:decimal', stdlib.UInt_max, '5'));
  stdlib.assert(v712, {
    at: './raffle.rsh:95:23:application',
    fs: ['at ./raffle.rsh:91:13:application call to [unknown function] (defined at: ./raffle.rsh:91:20:function exp)', 'at ./raffle.rsh:91:13:application call to [unknown function] (defined at: ./raffle.rsh:91:13:function exp)', 'at ./raffle.rsh:73:111:application call to "rungetTicket0_86" (defined at: ./raffle.rsh:88:13:function exp)', 'at ./raffle.rsh:73:111:application call to [unknown function] (defined at: ./raffle.rsh:73:111:function exp)'],
    msg: 'All tickets have been sold. Sorry!',
    who: 'getTicket'
    });
  const v713 = v667 ? false : true;
  stdlib.assert(v713, {
    at: './raffle.rsh:96:31:application',
    fs: ['at ./raffle.rsh:91:13:application call to [unknown function] (defined at: ./raffle.rsh:91:20:function exp)', 'at ./raffle.rsh:91:13:application call to [unknown function] (defined at: ./raffle.rsh:91:13:function exp)', 'at ./raffle.rsh:73:111:application call to "rungetTicket0_86" (defined at: ./raffle.rsh:88:13:function exp)', 'at ./raffle.rsh:73:111:application call to [unknown function] (defined at: ./raffle.rsh:73:111:function exp)'],
    msg: 'Raffle is already over. Sorry!',
    who: 'getTicket'
    });
  const v714 = await stdlib.Array_asyncReduce([v669], false, async([v716], v715, v717) => {
    const v718 = stdlib.eq(v699, v716);
    const v720 = v715 ? v715 : v718;
    
    return v720;})
  const v721 = v714 ? false : true;
  stdlib.assert(v721, {
    at: './raffle.rsh:97:31:application',
    fs: ['at ./raffle.rsh:91:13:application call to [unknown function] (defined at: ./raffle.rsh:91:20:function exp)', 'at ./raffle.rsh:91:13:application call to [unknown function] (defined at: ./raffle.rsh:91:13:function exp)', 'at ./raffle.rsh:73:111:application call to "rungetTicket0_86" (defined at: ./raffle.rsh:88:13:function exp)', 'at ./raffle.rsh:73:111:application call to [unknown function] (defined at: ./raffle.rsh:73:111:function exp)'],
    msg: 'Someone already purchased your chosen ticket!. Try again',
    who: 'getTicket'
    });
  const v722 = stdlib.lt(v703, stdlib.checkedBigNumberify('./raffle.rsh:9:26:decimal', stdlib.UInt_max, '5'));
  stdlib.assert(v722, {
    at: './raffle.rsh:98:23:application',
    fs: ['at ./raffle.rsh:91:13:application call to [unknown function] (defined at: ./raffle.rsh:91:20:function exp)', 'at ./raffle.rsh:91:13:application call to [unknown function] (defined at: ./raffle.rsh:91:13:function exp)', 'at ./raffle.rsh:73:111:application call to "rungetTicket0_86" (defined at: ./raffle.rsh:88:13:function exp)', 'at ./raffle.rsh:73:111:application call to [unknown function] (defined at: ./raffle.rsh:73:111:function exp)'],
    msg: 'weird - ticketCount bigger than array size',
    who: 'getTicket'
    });
  const v726 = ['getTicket0_86', v698];
  
  const txn1 = await (ctc.sendrecv({
    args: [v635, v636, v637, v638, v665, v667, v668, v669, v670, v671, v678, v679, v690, v691, v726],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [v636, [[stdlib.checkedBigNumberify('./raffle.rsh:102:38:decimal', stdlib.UInt_max, '0'), v637]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v805], secs: v807, time: v806, didSend: v394, from: v804 } = txn1;
      
      switch (v805[0]) {
        case 'claimRewards0_86': {
          const v808 = v805[1];
          
          break;
          }
        case 'getTicket0_86': {
          const v946 = v805[1];
          sim_r.txns.push({
            kind: 'api',
            who: "getTicket"
            });
          const v982 = stdlib.add(v679, v636);
          sim_r.txns.push({
            amt: v636,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v988 = v690[stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '1')];
          const v989 = v690[stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '2')];
          const v990 = [v691, v988, v989];
          const v991 = stdlib.Array_set(v678, stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '0'), v990);
          ;
          const v1031 = v946[stdlib.checkedBigNumberify('./raffle.rsh:88:13:spread', stdlib.UInt_max, '0')];
          const v1032 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v804), null);
          const v1033 = stdlib.fromSome(v1032, stdlib.checkedBigNumberify('./raffle.rsh:59:45:decimal', stdlib.UInt_max, '0'));
          const v1034 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v804), null);
          const v1038 = stdlib.fromSome(v1034, v665);
          const v1053 = stdlib.add(v1033, stdlib.checkedBigNumberify('./raffle.rsh:113:51:decimal', stdlib.UInt_max, '1'));
          await stdlib.simMapSet(sim_r, 1, v804, v1053);
          const v1054 = stdlib.add(v670, stdlib.checkedBigNumberify('./raffle.rsh:114:60:decimal', stdlib.UInt_max, '1'));
          const v1056 = stdlib.Array_set(v1038, v1033, v1031);
          await stdlib.simMapSet(sim_r, 0, v804, v1056);
          const v1058 = stdlib.Array_set(v669, v1033, v1031);
          const v1059 = true;
          const v1060 = await txn1.getOutput('getTicket', 'v1059', ctc8, v1059);
          
          const v1938 = v667;
          const v1939 = v668;
          const v1940 = v1058;
          const v1941 = v1054;
          const v1942 = v671;
          const v1944 = v991;
          const v1945 = v982;
          const v1946 = v991[stdlib.checkedBigNumberify('./raffle.rsh:80:44:application', stdlib.UInt_max, '0')];
          const v1947 = v1946[stdlib.checkedBigNumberify('./raffle.rsh:80:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'revealWinner0_86': {
          const v1084 = v805[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc6, ctc7, ctc2, ctc8, ctc8, ctc2, ctc1, ctc1, ctc10, ctc1, ctc9, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v805], secs: v807, time: v806, didSend: v394, from: v804 } = txn1;
  switch (v805[0]) {
    case 'claimRewards0_86': {
      const v808 = v805[1];
      return;
      break;
      }
    case 'getTicket0_86': {
      const v946 = v805[1];
      undefined /* setApiDetails */;
      const v982 = stdlib.add(v679, v636);
      ;
      const v988 = v690[stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '1')];
      const v989 = v690[stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '2')];
      const v990 = [v691, v988, v989];
      const v991 = stdlib.Array_set(v678, stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '0'), v990);
      ;
      const v1031 = v946[stdlib.checkedBigNumberify('./raffle.rsh:88:13:spread', stdlib.UInt_max, '0')];
      const v1032 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v804), null);
      const v1033 = stdlib.fromSome(v1032, stdlib.checkedBigNumberify('./raffle.rsh:59:45:decimal', stdlib.UInt_max, '0'));
      const v1034 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v804), null);
      const v1038 = stdlib.fromSome(v1034, v665);
      const v1039 = stdlib.gt(v1031, stdlib.checkedBigNumberify('./raffle.rsh:107:31:decimal', stdlib.UInt_max, '0'));
      const v1040 = stdlib.le(v1031, stdlib.checkedBigNumberify('./raffle.rsh:9:26:decimal', stdlib.UInt_max, '5'));
      const v1041 = v1039 ? v1040 : false;
      stdlib.assert(v1041, {
        at: './raffle.rsh:107:24:application',
        fs: ['at ./raffle.rsh:104:13:application call to [unknown function] (defined at: ./raffle.rsh:104:13:function exp)'],
        msg: 'Invalid ticket number',
        who: 'getTicket'
        });
      const v1042 = stdlib.lt(v670, stdlib.checkedBigNumberify('./raffle.rsh:9:26:decimal', stdlib.UInt_max, '5'));
      stdlib.assert(v1042, {
        at: './raffle.rsh:108:24:application',
        fs: ['at ./raffle.rsh:104:13:application call to [unknown function] (defined at: ./raffle.rsh:104:13:function exp)'],
        msg: 'All tickets have been sold. Sorry!',
        who: 'getTicket'
        });
      const v1043 = v667 ? false : true;
      stdlib.assert(v1043, {
        at: './raffle.rsh:109:32:application',
        fs: ['at ./raffle.rsh:104:13:application call to [unknown function] (defined at: ./raffle.rsh:104:13:function exp)'],
        msg: 'Raffle is already over. Sorry!',
        who: 'getTicket'
        });
      const v1044 = await stdlib.Array_asyncReduce([v669], false, async([v1046], v1045, v1047) => {
        const v1048 = stdlib.eq(v1031, v1046);
        const v1050 = v1045 ? v1045 : v1048;
        
        return v1050;})
      const v1051 = v1044 ? false : true;
      stdlib.assert(v1051, {
        at: './raffle.rsh:110:32:application',
        fs: ['at ./raffle.rsh:104:13:application call to [unknown function] (defined at: ./raffle.rsh:104:13:function exp)'],
        msg: 'Someone already purchased your chosen ticket!. Try again',
        who: 'getTicket'
        });
      const v1052 = stdlib.lt(v1033, stdlib.checkedBigNumberify('./raffle.rsh:9:26:decimal', stdlib.UInt_max, '5'));
      stdlib.assert(v1052, {
        at: './raffle.rsh:111:24:application',
        fs: ['at ./raffle.rsh:104:13:application call to [unknown function] (defined at: ./raffle.rsh:104:13:function exp)'],
        msg: 'weird - ticketCount bigger than array size',
        who: 'getTicket'
        });
      const v1053 = stdlib.add(v1033, stdlib.checkedBigNumberify('./raffle.rsh:113:51:decimal', stdlib.UInt_max, '1'));
      await stdlib.mapSet(map1, v804, v1053);
      const v1054 = stdlib.add(v670, stdlib.checkedBigNumberify('./raffle.rsh:114:60:decimal', stdlib.UInt_max, '1'));
      const v1056 = stdlib.Array_set(v1038, v1033, v1031);
      await stdlib.mapSet(map0, v804, v1056);
      const v1058 = stdlib.Array_set(v669, v1033, v1031);
      const v1059 = true;
      const v1060 = await txn1.getOutput('getTicket', 'v1059', ctc8, v1059);
      if (v394) {
        stdlib.protect(ctc0, await interact.out(v946, v1060), {
          at: './raffle.rsh:89:13:application',
          fs: ['at ./raffle.rsh:89:13:application call to [unknown function] (defined at: ./raffle.rsh:89:13:function exp)', 'at ./raffle.rsh:118:20:application call to "res" (defined at: ./raffle.rsh:104:13:function exp)', 'at ./raffle.rsh:104:13:application call to [unknown function] (defined at: ./raffle.rsh:104:13:function exp)'],
          msg: 'out',
          who: 'getTicket'
          });
        }
      else {
        }
      
      const v1938 = v667;
      const v1939 = v668;
      const v1940 = v1058;
      const v1941 = v1054;
      const v1942 = v671;
      const v1944 = v991;
      const v1945 = v982;
      const v1946 = v991[stdlib.checkedBigNumberify('./raffle.rsh:80:44:application', stdlib.UInt_max, '0')];
      const v1947 = v1946[stdlib.checkedBigNumberify('./raffle.rsh:80:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'revealWinner0_86': {
      const v1084 = v805[1];
      return;
      break;
      }
    }
  
  
  };
export async function _revealWinner4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _revealWinner4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _revealWinner4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Digest;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    claimRewards0_86: ctc12,
    getTicket0_86: ctc13,
    revealWinner0_86: ctc11
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v635, v636, v637, v638, v665, v667, v668, v669, v670, v671, v678, v679, v690, v691] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc6, ctc7, ctc2, ctc8, ctc8, ctc2, ctc1, ctc1, ctc10, ctc1, ctc9, ctc1]);
  const v728 = ctc.selfAddress();
  const v730 = stdlib.protect(ctc11, await interact.in(), {
    at: './raffle.rsh:1:23:application',
    fs: ['at ./raffle.rsh:125:13:application call to [unknown function] (defined at: ./raffle.rsh:125:13:function exp)', 'at ./raffle.rsh:73:111:application call to "runrevealWinner0_86" (defined at: ./raffle.rsh:122:13:function exp)', 'at ./raffle.rsh:73:111:application call to [unknown function] (defined at: ./raffle.rsh:73:111:function exp)'],
    msg: 'in',
    who: 'revealWinner'
    });
  const v736 = stdlib.addressEq(v728, v635);
  stdlib.assert(v736, {
    at: './raffle.rsh:126:23:application',
    fs: ['at ./raffle.rsh:125:13:application call to [unknown function] (defined at: ./raffle.rsh:125:25:function exp)', 'at ./raffle.rsh:125:13:application call to [unknown function] (defined at: ./raffle.rsh:125:13:function exp)', 'at ./raffle.rsh:73:111:application call to "runrevealWinner0_86" (defined at: ./raffle.rsh:122:13:function exp)', 'at ./raffle.rsh:73:111:application call to [unknown function] (defined at: ./raffle.rsh:73:111:function exp)'],
    msg: 'Only Raffle Creator can reveal the winner',
    who: 'revealWinner'
    });
  const v737 = stdlib.eq(stdlib.checkedBigNumberify('./raffle.rsh:9:26:decimal', stdlib.UInt_max, '5'), v670);
  stdlib.assert(v737, {
    at: './raffle.rsh:127:31:application',
    fs: ['at ./raffle.rsh:125:13:application call to [unknown function] (defined at: ./raffle.rsh:125:25:function exp)', 'at ./raffle.rsh:125:13:application call to [unknown function] (defined at: ./raffle.rsh:125:13:function exp)', 'at ./raffle.rsh:73:111:application call to "runrevealWinner0_86" (defined at: ./raffle.rsh:122:13:function exp)', 'at ./raffle.rsh:73:111:application call to [unknown function] (defined at: ./raffle.rsh:73:111:function exp)'],
    msg: 'Wait until all tickets are sold before revealing the winner',
    who: 'revealWinner'
    });
  const v738 = v667 ? false : true;
  stdlib.assert(v738, {
    at: './raffle.rsh:128:31:application',
    fs: ['at ./raffle.rsh:125:13:application call to [unknown function] (defined at: ./raffle.rsh:125:25:function exp)', 'at ./raffle.rsh:125:13:application call to [unknown function] (defined at: ./raffle.rsh:125:13:function exp)', 'at ./raffle.rsh:73:111:application call to "runrevealWinner0_86" (defined at: ./raffle.rsh:122:13:function exp)', 'at ./raffle.rsh:73:111:application call to [unknown function] (defined at: ./raffle.rsh:73:111:function exp)'],
    msg: 'Raffle is already over. ',
    who: 'revealWinner'
    });
  const v743 = ['revealWinner0_86', v730];
  
  const txn1 = await (ctc.sendrecv({
    args: [v635, v636, v637, v638, v665, v667, v668, v669, v670, v671, v678, v679, v690, v691, v743],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./raffle.rsh:131:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./raffle.rsh:131:33:decimal', stdlib.UInt_max, '0'), v637]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v805], secs: v807, time: v806, didSend: v394, from: v804 } = txn1;
      
      switch (v805[0]) {
        case 'claimRewards0_86': {
          const v808 = v805[1];
          
          break;
          }
        case 'getTicket0_86': {
          const v946 = v805[1];
          
          break;
          }
        case 'revealWinner0_86': {
          const v1084 = v805[1];
          sim_r.txns.push({
            kind: 'api',
            who: "revealWinner"
            });
          ;
          const v1126 = v690[stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '1')];
          const v1127 = v690[stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '2')];
          const v1128 = [v691, v1126, v1127];
          const v1129 = stdlib.Array_set(v678, stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '0'), v1128);
          ;
          const v1207 = v1084[stdlib.checkedBigNumberify('./raffle.rsh:122:13:spread', stdlib.UInt_max, '1')];
          const v1213 = true;
          const v1214 = await txn1.getOutput('revealWinner', 'v1213', ctc8, v1213);
          
          const v1986 = v667;
          const v1987 = v668;
          const v1988 = v669;
          const v1989 = v670;
          const v1990 = v1207;
          const v1992 = v1129;
          const v1993 = v679;
          const v1994 = v1129[stdlib.checkedBigNumberify('./raffle.rsh:80:44:application', stdlib.UInt_max, '0')];
          const v1995 = v1994[stdlib.checkedBigNumberify('./raffle.rsh:80:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc6, ctc7, ctc2, ctc8, ctc8, ctc2, ctc1, ctc1, ctc10, ctc1, ctc9, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v805], secs: v807, time: v806, didSend: v394, from: v804 } = txn1;
  switch (v805[0]) {
    case 'claimRewards0_86': {
      const v808 = v805[1];
      return;
      break;
      }
    case 'getTicket0_86': {
      const v946 = v805[1];
      return;
      break;
      }
    case 'revealWinner0_86': {
      const v1084 = v805[1];
      undefined /* setApiDetails */;
      ;
      const v1126 = v690[stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '1')];
      const v1127 = v690[stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '2')];
      const v1128 = [v691, v1126, v1127];
      const v1129 = stdlib.Array_set(v678, stdlib.checkedBigNumberify('./raffle.rsh:73:111:dot', stdlib.UInt_max, '0'), v1128);
      ;
      const v1206 = v1084[stdlib.checkedBigNumberify('./raffle.rsh:122:13:spread', stdlib.UInt_max, '0')];
      const v1207 = v1084[stdlib.checkedBigNumberify('./raffle.rsh:122:13:spread', stdlib.UInt_max, '1')];
      const v1208 = stdlib.addressEq(v804, v635);
      stdlib.assert(v1208, {
        at: './raffle.rsh:134:24:application',
        fs: ['at ./raffle.rsh:133:13:application call to [unknown function] (defined at: ./raffle.rsh:133:13:function exp)'],
        msg: 'Only Raffle Creator can use this API',
        who: 'revealWinner'
        });
      const v1209 = stdlib.eq(stdlib.checkedBigNumberify('./raffle.rsh:9:26:decimal', stdlib.UInt_max, '5'), v670);
      stdlib.assert(v1209, {
        at: './raffle.rsh:135:32:application',
        fs: ['at ./raffle.rsh:133:13:application call to [unknown function] (defined at: ./raffle.rsh:133:13:function exp)'],
        msg: 'Wait until all tickets are sold before revealing the winner',
        who: 'revealWinner'
        });
      const v1210 = v667 ? false : true;
      stdlib.assert(v1210, {
        at: './raffle.rsh:136:32:application',
        fs: ['at ./raffle.rsh:133:13:application call to [unknown function] (defined at: ./raffle.rsh:133:13:function exp)'],
        msg: 'Raffle is already over. ',
        who: 'revealWinner'
        });
      const v1211 = stdlib.digest(ctc11, [v1206, v1207]);
      const v1212 = stdlib.digestEq(v638, v1211);
      stdlib.assert(v1212, {
        at: 'reach standard library:69:17:application',
        fs: ['at ./raffle.rsh:138:32:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)', 'at ./raffle.rsh:133:13:application call to [unknown function] (defined at: ./raffle.rsh:133:13:function exp)'],
        msg: null,
        who: 'revealWinner'
        });
      const v1213 = true;
      const v1214 = await txn1.getOutput('revealWinner', 'v1213', ctc8, v1213);
      if (v394) {
        stdlib.protect(ctc0, await interact.out(v1084, v1214), {
          at: './raffle.rsh:123:13:application',
          fs: ['at ./raffle.rsh:123:13:application call to [unknown function] (defined at: ./raffle.rsh:123:13:function exp)', 'at ./raffle.rsh:140:20:application call to "res" (defined at: ./raffle.rsh:133:13:function exp)', 'at ./raffle.rsh:133:13:application call to [unknown function] (defined at: ./raffle.rsh:133:13:function exp)'],
          msg: 'out',
          who: 'revealWinner'
          });
        }
      else {
        }
      
      const v1986 = v667;
      const v1987 = v668;
      const v1988 = v669;
      const v1989 = v670;
      const v1990 = v1207;
      const v1992 = v1129;
      const v1993 = v679;
      const v1994 = v1129[stdlib.checkedBigNumberify('./raffle.rsh:80:44:application', stdlib.UInt_max, '0')];
      const v1995 = v1994[stdlib.checkedBigNumberify('./raffle.rsh:80:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    }
  
  
  };
export async function claimRewards(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claimRewards expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claimRewards expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _claimRewards4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function getTicket(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for getTicket expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for getTicket expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _getTicket4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function revealWinner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for revealWinner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for revealWinner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _revealWinner4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`claimRewards()byte`, `getTicket(uint64)byte`, `revealWinner(uint64,uint64)byte`],
    pure: [`Creator_v()address`, `balance_NFT_v()uint64`, `balance_v()uint64`, `raffleOver_v()byte`, `receivedTickets_v(address)uint64`, `rewardsClaimed_v()byte`, `ticketPrice_v()uint64`, `ticketsSold_v()uint64`, `winningTicket_v()uint64`],
    sigs: [`Creator_v()address`, `balance_NFT_v()uint64`, `balance_v()uint64`, `claimRewards()byte`, `getTicket(uint64)byte`, `raffleOver_v()byte`, `receivedTickets_v(address)uint64`, `revealWinner(uint64,uint64)byte`, `rewardsClaimed_v()byte`, `ticketPrice_v()uint64`, `ticketsSold_v()uint64`, `winningTicket_v()uint64`]
    },
  appApproval: `BiAbAAEECAUoIDLI1t6XBoOg2d8HnqKetAywuvnkDJHGqtwG16S42wemia/XAs2O0r0DmdTVtgXtuK2RAp+/x74CA////////////wGiAaoBwwECwIQ9oI0GJgMBAAEBACI1ADEYQQaqKmRJIls1ASVbNQIxGSMSQQAKMQAoIQevZkIGdzYaABdJQQFgIjUEIzUGSSEIDEAAsEkhCQxAAFlJIQoMQAA5SSELDEAAGSELEkQ0ASQSRChkKWRQSTUDV3gBNQdCBkMhChJENAEkEkQoZClkUEk1A1cAIDUHQgYqIQkSRDQBJBJEKGQpZFBJNQNXqgg1B0IGEUkhDAxAADBJIQ0MQAATIQ0SRDYaATX/KTT/UCWvUEIBYCEMEkQ2GgE2GgJQNf+AAQI0/1BCAUohCBJENAEkEkQoZClkUEk1A1fcCDUHQgXBSSEODEAAR0khDwxAACdJIRAMQAAZIRASRDQBJBJEKGQpZFBJNQNXeQE1B0IFkyEPEkQ0AQAhDhJENAEkEkQoZClkUEk1A1fDCDUHQgVzSSERDEAAMkkhEgxAABIhEhJEKjX/KDT/UIEQr1BCAMMhERJENAEkEkQoZClkUEk1A1eiCDUHQgU6gZ26uA4SRDQBJBJEKGQpZFBJNQNXIAg1B0IFHjYaAhc1BDYaAzYaARdJIRMMQAM+SSQMQABzJBJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABJEnNPOwMgYhFA9ENP8xABJENP80AyEGWzQDIQVbNANXMCA0A1dQKDQDV3gBFzQDV3kBFzQDV3ooNAMhFVs0AyEWWzIGNANXshE0AyEXW0ID00gkNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSkpKVwAgNf8hBls1/iEFWzX9VzAgNfxXUCg1+1d4ARc1+ld5ARc1+Vd6KDX4IRVbNfchFls19leyETX1IRdbNfRXyxE184HcAVs18kk1BTXxgAQ0IGXYNPFQsDIGIRQMRDTxIlVJIwxAAYlJIRgMQABoIRgSRDTxVwEQNfA08CVbNe8xADT/EkQhBDT3EkQ0+hRENPw08FcACDTvFlABEkSACQAAAAAAAAS9AbApNQc0/zT+NP00/DT7NPo0+TT4NPc07zIGNPIWNPNXCAhQNPNXEAFQNPRCAtxINPFXAQg18DT+iAPCNPAXNe8iMQCIA6hXKQlJNe0jWzTtIlVNNe407yINNO8hBA4QRDT3IQQMRDT6FEQiNe0iNew0+CU07AslWBc16zTvNOsSNO1JTTXtNOwjCEk17CEEDED/3TTtFEQ07iEEDEQxACgxAIgDSSk07iMIFlA17FcAKTTsUGYxACgxAIgDMSk0+zEAiAMpVwApSTXsVwEoNOwiVU1JIiU07gtSNO8WUEwlSTTuCwghBVJQUDXsVykJNOxMUGaACQAAAAAAAAQjAbApNQc0/zT+NP00/DT7NPo0+TT4IiU07gtSNO8WUDT4JUk07gsIIQVSUDT3Iwg09jIGNPIWNPNXCAhQNPNXEAFQNPQ0/ghCAcJINPIWNPNXCAhQNPNXEAFQNfAiNe8iNe40+zEAiAKHVwApSTXtVwEoNO0iVU0lNO4LJVgXNe009jTtEjTvSU017zTuIwhJNe4hBAxA/8o070Q0+RRENPpENPBXABFJNe4iW0k17SMPRLEisgEjshIkshAxALIUNP2yEbOACQAAAAAAAAN1AbApNQc0/zT+NP00/DT7IyM0+DT3NPYyBjTtIwkWNO5XCAhQNO5XEAFQNPRCAQ5JIwxAAHkjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQVbNf5XUBE1/YAEmouRdLA0/VcAETX8IRk0/ogB1TT/MQASRCEFrzX7NP80AyEGWzT+NANXMCA0+yIiNPsiIjIGNPwiWyEZCBY0/FcICFA0/FcQAVAiQgCPSCEaiAF8IjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yVbNf5XECA1/YAEFi0oOzT/FlA0/hZQNP1QsIERr0k1/FcAETX7Ja80+1cICFA0+1cQAVA1+iEaiAEosSKyASKyEiSyEDIKshQ0/rIRszEANP8WUDT+FlA0/VA0+lAoSwFXAGFnSCM1ATIGNQJCAJI1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zT+VwARSTXyIls18TTzNPQWUDT1FlA09lA091A0+BZRBwhQNPkWUQcIUDT6UDT7FlA0/BZQNP5QNP8WUDTyUDTxFlAoSwFXAH9nKUsBV39lZ0gkNQEyBjUCQgAcMRkhBBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCETMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAAFSCEHr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 50,
  stateKeys: 2,
  stateSize: 228,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v636",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v637",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v638",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v636",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v637",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v638",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimRewards0_86",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_getTicket0_86",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_revealWinner0_86",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v805",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1059",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1213",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v885",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Creator_v",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256[5]",
            "name": "_Some",
            "type": "uint256[5]"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T2",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T2",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimRewards0_86",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_getTicket0_86",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_revealWinner0_86",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v805",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "balance_NFT_v",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "balance_v",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claimRewards",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "getTicket",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "raffleOver_v",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v2002",
        "type": "address"
      }
    ],
    "name": "receivedTickets_v",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "revealWinner",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rewardsClaimed_v",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ticketPrice_v",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ticketsSold_v",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "winningTicket_v",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162003ab838038062003ab883398101604081905262000026916200041b565b60008055436003556200003862000247565b60408051338152835160208083019190915280850151805183850152908101516001600160a01b03166060830152820151608082015290517f57dd92bd95aea54c5537e918ca905e8ab41e33e8440512d93886574b31989f4f9181900360a00190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620000f892906200019a565b60608201526200010b341560106200021d565b62000115620002ae565b33815260208084018051518284015280518201516001600160a01b03166040808501919091529051810151606080850191909152840151608084015260016000819055439055516200016a91839101620004de565b6040516020818303038152906040526002908051906020019062000190929190620002f1565b50505050620005c7565b620001a462000380565b60005b6001811015620001fa57848160018110620001c657620001c6620004c8565b6020020151828260018110620001e057620001e0620004c8565b602002015280620001f18162000560565b915050620001a7565b5081818460018110620002115762000211620004c8565b60200201529392505050565b81620002435760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200027a62000380565b81526040805160608101825260008082526020828101829052928201529101908152602001620002a962000380565b905290565b6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001620002a962000380565b828054620002ff906200058a565b90600052602060002090601f0160209004810192826200032357600085556200036e565b82601f106200033e57805160ff19168380011785556200036e565b828001600101855582156200036e579182015b828111156200036e57825182559160200191906001019062000351565b506200037c929150620003cd565b5090565b60405180602001604052806001905b620003b6604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200038f5790505090565b5b808211156200037c5760008155600101620003ce565b604051606081016001600160401b03811182821017156200041557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200042f57600080fd5b604080519081016001600160401b03811182821017156200046057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200047a57600080fd5b62000484620003e4565b6020850151815260408501519092506001600160a01b0381168114620004a957600080fd5b6020838101919091526060949094015160408301529283015250919050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b03908116825260208084015181840152604080850151909216828401526060808501518185015260808086015160e086019492939291860160005b600181101562000554578251805183528581015186840152840151151584830152918401919085019060010162000522565b50505050505092915050565b60006000198214156200058357634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200059f57607f821691505b60208210811415620005c157634e487b7160e01b600052602260045260246000fd5b50919050565b6134e180620005d76000396000f3fe6080604052600436106101175760003560e01c80639ba0680d1161009a578063cadc2e7a11610061578063cadc2e7a146102b2578063d2b339bd146102df578063df13d7ad146102f4578063e43ffb9f14610307578063f6f52c131461031c57005b80639ba0680d1461023d578063a41942a714610252578063a7661d5414610267578063a80cb2c21461027a578063ab53f2c61461028f57005b80633894aea5116100de5780633894aea5146101a85780633bc5b7bf146101d55780637dc379fa1461020257806383230757146102155780638c9d21741461022a57005b806313658db7146101205780631476ca821461014a5780631e93b0f1146101785780632c10a1591461018d578063372500ab146101a057005b3661011e57005b005b34801561012c57600080fd5b50610135610331565b60405190151581526020015b60405180910390f35b34801561015657600080fd5b5061016a610165366004612bd0565b6104b2565b604051908152602001610141565b34801561018457600080fd5b5060035461016a565b61011e61019b366004612bed565b61063b565b610135610674565b3480156101b457600080fd5b506101bd6106b2565b6040516001600160a01b039091168152602001610141565b3480156101e157600080fd5b506101f56101f0366004612bd0565b610826565b6040516101419190612c4e565b610135610210366004612c87565b61083d565b34801561022157600080fd5b5060015461016a565b61011e610238366004612ca0565b61088d565b34801561024957600080fd5b5061016a6108c2565b34801561025e57600080fd5b50610135610a41565b61011e610275366004612bed565b610bbf565b34801561028657600080fd5b5061016a610bf4565b34801561029b57600080fd5b506102a4610d73565b604051610141929190612cde565b3480156102be57600080fd5b506102d26102cd366004612bd0565b610e10565b6040516101419190612d18565b3480156102eb57600080fd5b5061016a610e36565b610135610302366004612d48565b610fb5565b34801561031357600080fd5b5061016a611012565b34801561032857600080fd5b5061016a611191565b6000600160005414156103ee5760006002805461034d90612d6a565b80601f016020809104026020016040519081016040528092919081815260200182805461037990612d6a565b80156103c65780601f1061039b576101008083540402835291602001916103c6565b820191906000526020600020905b8154815290600101906020018083116103a957829003601f168201915b50505050508060200190518101906103de9190612f2d565b90506103ec6000600a61130b565b505b600460005414156104a35760006002805461040890612d6a565b80601f016020809104026020016040519081016040528092919081815260200182805461043490612d6a565b80156104815780601f1061045657610100808354040283529160200191610481565b820191906000526020600020905b81548152906001019060200180831161046457829003601f168201915b50505050508060200190518101906104999190613020565b60a0015192915050565b6104af6000600a61130b565b90565b60006001600054141561056f576000600280546104ce90612d6a565b80601f01602080910402602001604051908101604052809291908181526020018280546104fa90612d6a565b80156105475780601f1061051c57610100808354040283529160200191610547565b820191906000526020600020905b81548152906001019060200180831161052a57829003601f168201915b505050505080602001905181019061055f9190612f2d565b905061056d6000600b61130b565b505b6004600054141561062a5760006002805461058990612d6a565b80601f01602080910402602001604051908101604052809291908181526020018280546105b590612d6a565b80156106025780601f106105d757610100808354040283529160200191610602565b820191906000526020600020905b8154815290600101906020018083116105e557829003601f168201915b505050505080602001905181019061061a9190613020565b90506106286000600b61130b565b505b6106366000600b61130b565b919050565b604080516060810182526000808252602082018190529181019190915261067061066a36849003840184613114565b82611331565b5050565b600061067e61275e565b60208181015151600090819052604080516060810182528281529283018290528201526106ab82826115b2565b5192915050565b60006001600054141561076f576000600280546106ce90612d6a565b80601f01602080910402602001604051908101604052809291908181526020018280546106fa90612d6a565b80156107475780601f1061071c57610100808354040283529160200191610747565b820191906000526020600020905b81548152906001019060200180831161072a57829003601f168201915b505050505080602001905181019061075f9190612f2d565b905061076d6000600761130b565b505b6004600054141561081a5760006002805461078990612d6a565b80601f01602080910402602001604051908101604052809291908181526020018280546107b590612d6a565b80156108025780601f106107d757610100808354040283529160200191610802565b820191906000526020600020905b8154815290600101906020018083116107e557829003601f168201915b50505050508060200190518101906106ab9190613020565b6104af6000600761130b565b61082e61277d565b61083782611fb7565b92915050565b600061084761275e565b6020818101805151600190525151604090810151859052805160608101825260008082529281018390529081019190915261088282826115b2565b602001519392505050565b60408051606081018252600080825260208201819052918101919091526106706108bc3684900384018461316a565b826115b2565b60006001600054141561097f576000600280546108de90612d6a565b80601f016020809104026020016040519081016040528092919081815260200182805461090a90612d6a565b80156109575780601f1061092c57610100808354040283529160200191610957565b820191906000526020600020905b81548152906001019060200180831161093a57829003601f168201915b505050505080602001905181019061096f9190612f2d565b905061097d6000600e61130b565b505b60046000541415610a355760006002805461099990612d6a565b80601f01602080910402602001604051908101604052809291908181526020018280546109c590612d6a565b8015610a125780601f106109e757610100808354040283529160200191610a12565b820191906000526020600020905b8154815290600101906020018083116109f557829003601f168201915b5050505050806020019051810190610a2a9190613020565b610100015192915050565b6104af6000600e61130b565b600060016000541415610afe57600060028054610a5d90612d6a565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8990612d6a565b8015610ad65780601f10610aab57610100808354040283529160200191610ad6565b820191906000526020600020905b815481529060010190602001808311610ab957829003601f168201915b5050505050806020019051810190610aee9190612f2d565b9050610afc6000600c61130b565b505b60046000541415610bb357600060028054610b1890612d6a565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4490612d6a565b8015610b915780601f10610b6657610100808354040283529160200191610b91565b820191906000526020600020905b815481529060010190602001808311610b7457829003601f168201915b5050505050806020019051810190610ba99190613020565b60c0015192915050565b6104af6000600c61130b565b6040805160608101825260008082526020820181905291810191909152610670610bee36849003840184613114565b826120a1565b600060016000541415610cb157600060028054610c1090612d6a565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3c90612d6a565b8015610c895780601f10610c5e57610100808354040283529160200191610c89565b820191906000526020600020905b815481529060010190602001808311610c6c57829003601f168201915b5050505050806020019051810190610ca19190612f2d565b9050610caf6000600f61130b565b505b60046000541415610d6757600060028054610ccb90612d6a565b80601f0160208091040260200160405190810160405280929190818152602001828054610cf790612d6a565b8015610d445780601f10610d1957610100808354040283529160200191610d44565b820191906000526020600020905b815481529060010190602001808311610d2757829003601f168201915b5050505050806020019051810190610d5c9190613020565b610120015192915050565b6104af6000600f61130b565b600060606000546002808054610d8890612d6a565b80601f0160208091040260200160405190810160405280929190818152602001828054610db490612d6a565b8015610e015780601f10610dd657610100808354040283529160200191610e01565b820191906000526020600020905b815481529060010190602001808311610de457829003601f168201915b50505050509050915091509091565b6040805160608101825260008082526020820181905291810191909152610837826122b0565b600060016000541415610ef357600060028054610e5290612d6a565b80601f0160208091040260200160405190810160405280929190818152602001828054610e7e90612d6a565b8015610ecb5780601f10610ea057610100808354040283529160200191610ecb565b820191906000526020600020905b815481529060010190602001808311610eae57829003601f168201915b5050505050806020019051810190610ee39190612f2d565b9050610ef16000600861130b565b505b60046000541415610fa957600060028054610f0d90612d6a565b80601f0160208091040260200160405190810160405280929190818152602001828054610f3990612d6a565b8015610f865780601f10610f5b57610100808354040283529160200191610f86565b820191906000526020600020905b815481529060010190602001808311610f6957829003601f168201915b5050505050806020019051810190610f9e9190613020565b6101a0015192915050565b6104af6000600861130b565b6000610fbf61275e565b6020818101805151600290528051516060908101518790529051518101518201859052604080519182018152600080835292820183905281019190915261100682826115b2565b60400151949350505050565b6000600160005414156110cf5760006002805461102e90612d6a565b80601f016020809104026020016040519081016040528092919081815260200182805461105a90612d6a565b80156110a75780601f1061107c576101008083540402835291602001916110a7565b820191906000526020600020905b81548152906001019060200180831161108a57829003601f168201915b50505050508060200190518101906110bf9190612f2d565b90506110cd6000600961130b565b505b60046000541415611185576000600280546110e990612d6a565b80601f016020809104026020016040519081016040528092919081815260200182805461111590612d6a565b80156111625780601f1061113757610100808354040283529160200191611162565b820191906000526020600020905b81548152906001019060200180831161114557829003601f168201915b505050505080602001905181019061117a9190613020565b610160015192915050565b6104af6000600961130b565b60006001600054141561124e576000600280546111ad90612d6a565b80601f01602080910402602001604051908101604052809291908181526020018280546111d990612d6a565b80156112265780601f106111fb57610100808354040283529160200191611226565b820191906000526020600020905b81548152906001019060200180831161120957829003601f168201915b505050505080602001905181019061123e9190612f2d565b905061124c6000600d61130b565b505b600460005414156113035760006002805461126890612d6a565b80601f016020809104026020016040519081016040528092919081815260200182805461129490612d6a565b80156112e15780601f106112b6576101008083540402835291602001916112e1565b820191906000526020600020905b8154815290600101906020018083116112c457829003601f168201915b50505050508060200190518101906112f99190613020565b6020015192915050565b6104af6000600d5b816106705760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b611341600160005414601461130b565b815161135c90158061135557508251600154145b601561130b565b60008080556002805461136e90612d6a565b80601f016020809104026020016040519081016040528092919081815260200182805461139a90612d6a565b80156113e75780601f106113bc576101008083540402835291602001916113e7565b820191906000526020600020905b8154815290600101906020018083116113ca57829003601f168201915b50505050508060200190518101906113ff9190612f2d565b905061140961279c565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a161145c3415601161130b565b6080820151515161147190620f424090613271565b8151526080820180515160209081015183519091015251516040908101518251901515908201528201516114b5906114ae903390620f4240612373565b601261130b565b81516114cd906001600160a01b03163314601361130b565b6020818101805160009081905281519092018290528051604001829052805160600182905251608001526114ff6127cc565b825181516001600160a01b03918216905260208085015183518201526040808601518451931692810192909252606080860151845182015284820180518551608090810191909152838601805160009081905281519095018590529151825190950194909452805190910182905280518301829052514360a09091015290840151835161158c929061238b565b60208201805160c0019190915251600060e0909101526115ab816123ff565b5050505050565b6115c2600460005414602961130b565b81516115dd9015806115d657508251600154145b602a61130b565b6000808055600280546115ef90612d6a565b80601f016020809104026020016040519081016040528092919081815260200182805461161b90612d6a565b80156116685780601f1061163d57610100808354040283529160200191611668565b820191906000526020600020905b81548152906001019060200180831161164b57829003601f168201915b50505050508060200190518101906116809190613020565b905061168a6127ec565b6116996000194310602b61130b565b7fa5bee8b44bb12a2fcff2042cd41b42521bc069bbeb378195a7bb68d5c61462ac33856040516116ca929190613289565b60405180910390a160006020850151515160028111156116ec576116ec612c05565b14156119b3576116fe3415601661130b565b6101a082015181515261018082018051602090810151835190910152516040908101518251901515910152610140820151815161173e919060009061238b565b81602001819052506117606117593384604001516000612373565b601761130b565b6000606082018190525b600581101561180157600161177e33611fb7565b51600181111561179057611790612c05565b1461179f5782608001516117ad565b6117a833611fb7565b604001515b81600581106117be576117be613245565b6020020151608083015260608201516117e2578160800151836101200151146117e8565b81606001515b15156060830152806117f9816132fa565b91505061176a565b50606081015115156040820181905261181b90601861130b565b6118388260c0015161182e576001611831565b60005b601961130b565b6118478260a00151601a61130b565b6020810151515161185d9060011115601b61130b565b6020810151515161187090600190613315565b60a08201805191909152602080830180515182015183519092019190915251516040908101519151911515918101919091528201516118b1903360016124fc565b604051600181527f030e0fa6219601374e6817c928207be1218cd54edb22009b455339026a23649d9060200160405180910390a1600183526118f16127cc565b825181516001600160a01b03918216905260208085015183518201526040808601518451931692810192909252606080860151845182015260808087015185518201528285018051600190819052815185015260e088015181519095019490945261010087015184519092019190915261012086015183519091015290514360a091820152908301519083015161198b919060009061238b565b60208201805160c00191909152610160840151905160e001526119ad816123ff565b50611fb1565b60016020850151515160028111156119cd576119cd612c05565b1415611d9857602080850151516040015160c08301528201516119f3903414601c61130b565b6101a082015160e082018051919091526101808301805160209081015183519091015251604090810151915191151591810191909152820151611a4490611a3d9033906000612373565b601d61130b565b6001611a4f336122b0565b516001811115611a6157611a61612c05565b14611a6d576000611a7b565b611a76336122b0565b604001515b61010082015260c081015151611aa890611a96576000611aa1565b60c082015151600510155b601e61130b565b611abb600583610100015110601f61130b565b611ad88260a00151611ace576001611ad1565b60005b602061130b565b600061014082018190525b6005811015611b4a578260e001518160058110611b0257611b02613245565b6020020151610160830152610140820151611b295761016082015160c08301515114611b30565b8161014001515b151561014083015280611b42816132fa565b915050611ae3565b5061014081015115156101208201819052611b7490611b6a576001611b6d565b60005b602161130b565b611b87600582610100015110602261130b565b336000908152600560205260409020805460ff19166001908117909155610100820151611bb49190613271565b33600081815260056020908152604080832060019081019590955560049091529020805460ff191683179055611c2e9190611bee90611fb7565b516001811115611c0057611c00612c05565b14611c0f578260800151611c1d565b611c1833611fb7565b604001515b61010083015160c084015151612510565b336000908152600460205260409020611c4e916001909101906005612905565b50604051600181527fdb6ceda7a2970f063c8b2cd65c953449e2aa69ab411565585e87224dfd1d656c9060200160405180910390a160016020840152611c926127cc565b825181516001600160a01b03918216905260208085015183518201526040808601518451931692019190915260608085015183519091015260808085015183519091015260a0840151818301805191151590915260c0808601519151911515919092015260e08401516101008401519184015151611d109290612510565b602082015160400152610100830151611d2b90600190613271565b60208201805160600191909152610120840151815160800152514360a0919091015261014083015160e0830151611d65919060009061238b565b816020015160c001819052508260200151836101600151611d869190613271565b602082015160e001526119ad816123ff565b6002602085015151516002811115611db257611db2612c05565b1415611fb15760208401515160600151610180820152611dd43415602361130b565b6101a0808301519082018051919091526101808301805160209081015183519091015251604090810151915191151591810191909152820151611e2590611e1e9033906000612373565b602461130b565b8151611e3d906001600160a01b03163314602561130b565b611e50826101000151600514602661130b565b611e6d8260a00151611e63576001611e66565b60005b602761130b565b6101808101518051602091820151604051611ebd93611e9793929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836060015114602861130b565b604051600181527feeaec2a820f83d69d5d4eec3a514cb1a5682a2b5fe3108261245ce75a74dc19d9060200160405180910390a160016040840152611f006127cc565b825181516001600160a01b039182169052602080850151835182015260408086015184519316928101929092526060808601518451820152608080870151855182015260a080880151848701805191151590915260c089015181519015159086015260e0890151815190960195909552610100880151855190930192909252610180860151909201518351909201919091529051439101526101408301516101a083015161198b919060009061238b565b50505050565b611fbf61277d565b60016001600160a01b03831660009081526004602052604090205460ff166001811115611fee57611fee612c05565b1415612092576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561202f5761202f612c05565b600181111561204057612040612c05565b81528154610100900460ff16151560208201526040805160a08101808352919092019190600184019060059082845b81548152602001906001019080831161206f575050505050815250509050919050565b60008082526020820152919050565b6120b1600460005414602e61130b565b81516120cc9015806120c557508251600154145b602f61130b565b6000808055600280546120de90612d6a565b80601f016020809104026020016040519081016040528092919081815260200182805461210a90612d6a565b80156121575780601f1061212c57610100808354040283529160200191612157565b820191906000526020600020905b81548152906001019060200180831161213a57829003601f168201915b505050505080602001905181019061216f9190613020565b9050612181600019431015603061130b565b60408051338152845160208083019190915285015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a16121d43415602c61130b565b80516121ec906001600160a01b03163314602d61130b565b6121f46127cc565b815181516001600160a01b039182169052602080840151835182015260408085015184519316928101929092526060808501518451820152608080860151855182015260a080870151848701805191151590915260c080890151825190151596019590955260e080890151825190970196909652610100880151815190940193909352610120870151835190920191909152815143910152610140850151815190920191909152610160840151905190910152611fb1816123ff565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156122fc576122fc612c05565b1415612092576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561233d5761233d612c05565b600181111561234e5761234e612c05565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600061238183853085612578565b90505b9392505050565b612393612943565b60005b60018110156123df578481600181106123b1576123b1613245565b60200201518282600181106123c8576123c8613245565b6020020152806123d7816132fa565b915050612396565b50818184600181106123f3576123f3613245565b60200201529392505050565b61240761298e565b8151516001600160a01b039081168252825160209081015181840152835160409081015190921682840152835160609081015181850152845160809081015181860152828601805151151560a08701528051840151151560c080880191909152815186015160e08089019190915282519094015161010088015281519092015161012087015280518201516101408701528051909201516101608601528151810151516101808601529051015151516101a084015260046000554360015590516124d391839101613370565b604051602081830303815290604052600290805190602001906124f7929190612a45565b505050565b612507838383612652565b6124f757600080fd5b612518612ab8565b60005b60058110156125645784816005811061253657612536613245565b602002015182826005811061254d5761254d613245565b60200201528061255c816132fa565b91505061251b565b50818184600581106123f3576123f3613245565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916125df91613472565b60006040518083038185875af1925050503d806000811461261c576040519150601f19603f3d011682016040523d82523d6000602084013e612621565b606091505b509150915061263282826001612723565b5080806020019051810190612647919061348e565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916126b191613472565b60006040518083038185875af1925050503d80600081146126ee576040519150601f19603f3d011682016040523d82523d6000602084013e6126f3565b606091505b509150915061270482826002612723565b5080806020019051810190612719919061348e565b9695505050505050565b60608315612732575081612384565b8251156127425782518084602001fd5b60405163100960cb60e01b815260048101839052602401611328565b604051806040016040528060008152602001612778612ad6565b905290565b6040805160608101825260008082526020820152908101612778612ab8565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101612778612ab8565b60405180604001604052806127df612b20565b8152602001612778612b61565b60408051610220810190915260006101c082018181526101e08301829052610200830191909152815260208101612821612943565b815260200160001515815260200160001515815260200160008152602001612865604051806060016040528060008152602001600081526020016000151581525090565b81526020016128806040518060200160405280600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600015158152602001600015158152602001600081526020016128e2604051806040016040528060008152602001600081525090565b815260408051606081018252600080825260208281018290529282015291015290565b8260058101928215612933579160200282015b82811115612933578251825591602001919060010190612918565b5061293f929150612ba3565b5090565b60405180602001604052806001905b612978604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816129525790505090565b604051806101c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016129d0612ab8565b815260006020820181905260408201526060016129eb612ab8565b81526020016000815260200160008152602001612a06612943565b815260200160008152602001612a38604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b828054612a5190612d6a565b90600052602060002090601f016020900481019282612a735760008555612933565b82601f10612a8c57805160ff1916838001178555612933565b828001600101855582156129335791820182811115612933578251825591602001919060010190612918565b6040518060a001604052806005906020820280368337509192915050565b604051806020016040528061277860408051608081018252600080825260208083018290528351808201855282815283850152835180850190945281845283015290606082015290565b6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001612778612ab8565b604080516101008101825260008082526020820152908101612b81612ab8565b8152602001600081526020016000815260200160008152602001612a38612943565b5b8082111561293f5760008155600101612ba4565b6001600160a01b0381168114612bcd57600080fd5b50565b600060208284031215612be257600080fd5b813561238481612bb8565b600060408284031215612bff57600080fd5b50919050565b634e487b7160e01b600052602160045260246000fd5b60028110612bcd57612bcd612c05565b8060005b6005811015611fb1578151845260209384019390910190600101612c2f565b815160e0820190612c5e81612c1b565b808352506020830151151560208301526040830151612c806040840182612c2b565b5092915050565b600060208284031215612c9957600080fd5b5035919050565b600060c08284031215612bff57600080fd5b60005b83811015612ccd578181015183820152602001612cb5565b83811115611fb15750506000910152565b8281526040602082015260008251806040840152612d03816060850160208701612cb2565b601f01601f1916919091016060019392505050565b81516060820190612d2881612c1b565b808352506020830151151560208301526040830151604083015292915050565b60008060408385031215612d5b57600080fd5b50508035926020909101359150565b600181811c90821680612d7e57607f821691505b60208210811415612bff57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516101c0810167ffffffffffffffff81118282101715612dd957612dd9612d9f565b60405290565b6040805190810167ffffffffffffffff81118282101715612dd957612dd9612d9f565b6040516020810167ffffffffffffffff81118282101715612dd957612dd9612d9f565b6040516080810167ffffffffffffffff81118282101715612dd957612dd9612d9f565b805161063681612bb8565b8015158114612bcd57600080fd5b805161063681612e53565b600060608284031215612e7e57600080fd5b6040516060810181811067ffffffffffffffff82111715612ea157612ea1612d9f565b806040525080915082518152602083015160208201526040830151612ec581612e53565b6040919091015292915050565b600082601f830112612ee357600080fd5b612eeb612e02565b80606080850186811115612efe57600080fd5b855b81811015612f2157612f128882612e6c565b85526020909401938201612f00565b50919695505050505050565b600060e08284031215612f3f57600080fd5b60405160a0810181811067ffffffffffffffff82111715612f6257612f62612d9f565b6040528251612f7081612bb8565b8152602083810151908201526040830151612f8a81612bb8565b604082015260608381015190820152612fa68460808501612ed2565b60808201529392505050565b600082601f830112612fc357600080fd5b60405160a0810181811067ffffffffffffffff82111715612fe657612fe6612d9f565b6040528060a0840185811115612ffb57600080fd5b845b81811015613015578051835260209283019201612ffd565b509195945050505050565b6000610340828403121561303357600080fd5b61303b612db5565b61304483612e48565b81526020830151602082015261305c60408401612e48565b6040820152606083015160608201526130788460808501612fb2565b608082015261012061308b818501612e61565b60a083015261014061309e818601612e61565b60c08401526101606130b287828801612fb2565b60e0850152610200860151610100850152610220860151838501526130db876102408801612ed2565b828501526102a0860151818501525050506130fa846102c08501612e6c565b61018082015261032092909201516101a083015250919050565b60006040828403121561312657600080fd5b6040516040810181811067ffffffffffffffff8211171561314957613149612d9f565b60405282358152602083013561315e81612e53565b60208201529392505050565b600081830360c081121561317d57600080fd5b613185612ddf565b8335815260a0601f198301121561319b57600080fd5b6131a3612e02565b6131ab612e25565b6020860135600381106131bd57600080fd5b815260408601356131cd81612e53565b806020830152506020605f19850112156131e657600080fd5b6131ee612e02565b60608701358152806040830152506040607f198501121561320e57600080fd5b613216612ddf565b93506080860135845260a086013560208501528360608201528082525080602083015250809250505092915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156132845761328461325b565b500190565b6001600160a01b0383168152815160208083019190915282015151805160e083019190600381106132bc576132bc612c05565b80604085015250602081015115156060840152604081015151608084015260608101519050805160a0840152602081015160c0840152509392505050565b600060001982141561330e5761330e61325b565b5060010190565b6000828210156133275761332761325b565b500390565b8060005b6001811015611fb15761335a84835180518252602080820151908301526040908101511515910152565b6060939093019260209190910190600101613330565b81516001600160a01b0316815261034081016020830151602083015260408301516133a660408401826001600160a01b03169052565b506060830151606083015260808301516133c36080840182612c2b565b5060a08301516101206133d98185018315159052565b60c085015191506101406133f08186018415159052565b60e0860151925061016061340681870185612c2b565b6101008701516102008701528287015161022087015281870151935061343061024087018561332c565b8601516102a086015250505061018083015180516102c084015260208101516102e08401526040015115156103008301526101a0909201516103209091015290565b60008251613484818460208701612cb2565b9190910192915050565b6000602082840312156134a057600080fd5b815161238481612e5356fea2646970667358221220b5ca6ee3ce3462a6615767021ea31a6aa17da487c9112657b9731bc78d876a0c64736f6c634300080c0033`,
  BytecodeLen: 15032,
  Which: `oD`,
  version: 7,
  views: {
    Creator_v: `Creator_v`,
    balance_NFT_v: `balance_NFT_v`,
    balance_v: `balance_v`,
    raffleOver_v: `raffleOver_v`,
    receivedTickets_v: `receivedTickets_v`,
    rewardsClaimed_v: `rewardsClaimed_v`,
    ticketPrice_v: `ticketPrice_v`,
    ticketsSold_v: `ticketsSold_v`,
    winningTicket_v: `winningTicket_v`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './raffle.rsh:51:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './raffle.rsh:177:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './raffle.rsh:73:111:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Creator": Creator,
  "claimRewards": claimRewards,
  "getTicket": getTicket,
  "revealWinner": revealWinner
  };
export const _APIs = {
  claimRewards: claimRewards,
  getTicket: getTicket,
  revealWinner: revealWinner
  };
