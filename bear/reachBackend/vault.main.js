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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc3
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      Creator_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v582, v583, v584, v585, v586, v587, v599, v600, v601, v602, v604, v605, v615, v616] = svs;
            return (await ((async () => {
              
              
              return v582;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      attachedTotal_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v582, v583, v584, v585, v586, v587, v599, v600, v601, v602, v604, v605, v615, v616] = svs;
            return (await ((async () => {
              
              
              return v599;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        },
      balance_tok_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v582, v583, v584, v585, v586, v587, v599, v600, v601, v602, v604, v605, v615, v616] = svs;
            return (await ((async () => {
              
              
              return v616;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        },
      balance_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v582, v583, v584, v585, v586, v587, v599, v600, v601, v602, v604, v605, v615, v616] = svs;
            return (await ((async () => {
              
              
              return v605;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        },
      distrReceived_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v582, v583, v584, v585, v586, v587, v599, v600, v601, v602, v604, v605, v615, v616] = svs;
            return (await ((async (_v617 ) => {
                const v617 = stdlib.protect(ctc0, _v617, null);
              
              const v618 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v617), null);
              const v619 = stdlib.fromSome(v618, false);
              
              return v619;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      initDepositMade_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v582, v583, v584, v585, v586, v587, v599, v600, v601, v602, v604, v605, v615, v616] = svs;
            return (await ((async () => {
              
              
              return v600;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      switchPressed_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v582, v583, v584, v585, v586, v587, v599, v600, v601, v602, v604, v605, v615, v616] = svs;
            return (await ((async () => {
              
              
              return v601;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        }
      },
    views: {
      3: [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc3, ctc3, ctc1, ctc5, ctc1, ctc4, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
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
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    attacherNumber: ctc3,
    countDown: ctc3,
    distribution: ctc3,
    tok: ctc4
    });
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Data({
    acceptTermsToRecDistribution0_79: ctc6,
    depositToVault0_79: ctc7,
    optIn0_79: ctc6,
    pressSwitch0_79: ctc6
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v565 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v566 = [v565];
  const v572 = 'I have deployed';
  const v573 = stdlib.protect(ctc5, await interact.getParams(v572), {
    at: './index.rsh:36:96:application',
    fs: ['at ./index.rsh:35:21:application call to [unknown function] (defined at: ./index.rsh:35:25:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v574 = v573.attacherNumber;
  const v575 = v573.countDown;
  const v576 = v573.distribution;
  const v577 = v573.tok;
  
  const txn1 = await (ctc.sendrecv({
    args: [v574, v576, v575, v577],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:40:17:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc3, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v583, v584, v585, v586], secs: v588, time: v587, didSend: v39, from: v582 } = txn1;
      
      const v589 = v566[stdlib.checkedBigNumberify('./index.rsh:40:17:dot', stdlib.UInt_max, '0')];
      const v591 = v589[stdlib.checkedBigNumberify('./index.rsh:40:17:dot', stdlib.UInt_max, '1')];
      const v592 = v589[stdlib.checkedBigNumberify('./index.rsh:40:17:dot', stdlib.UInt_max, '2')];
      const v593 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v591, v592];
      const v594 = stdlib.Array_set(v566, stdlib.checkedBigNumberify('./index.rsh:40:17:dot', stdlib.UInt_max, '0'), v593);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v586
        });
      ;
      
      const v599 = stdlib.checkedBigNumberify('./index.rsh:62:100:decimal', stdlib.UInt_max, '0');
      const v600 = false;
      const v601 = false;
      const v602 = v587;
      const v604 = v594;
      const v605 = stdlib.checkedBigNumberify('./index.rsh:33:15:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        const v615 = v604[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
        const v616 = v615[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v586
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
    tys: [ctc3, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v583, v584, v585, v586], secs: v588, time: v587, didSend: v39, from: v582 } = txn1;
  const v589 = v566[stdlib.checkedBigNumberify('./index.rsh:40:17:dot', stdlib.UInt_max, '0')];
  const v591 = v589[stdlib.checkedBigNumberify('./index.rsh:40:17:dot', stdlib.UInt_max, '1')];
  const v592 = v589[stdlib.checkedBigNumberify('./index.rsh:40:17:dot', stdlib.UInt_max, '2')];
  const v593 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v591, v592];
  const v594 = stdlib.Array_set(v566, stdlib.checkedBigNumberify('./index.rsh:40:17:dot', stdlib.UInt_max, '0'), v593);
  ;
  ;
  const v597 = 'I HAVE DEPLOYED';
  stdlib.protect(ctc0, await interact.iDeployed(v597), {
    at: './index.rsh:42:35:application',
    fs: ['at ./index.rsh:42:35:application call to [unknown function] (defined at: ./index.rsh:42:35:function exp)', 'at ./index.rsh:42:35:application call to "liftedInteract" (defined at: ./index.rsh:42:35:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  let v599 = stdlib.checkedBigNumberify('./index.rsh:62:100:decimal', stdlib.UInt_max, '0');
  let v600 = false;
  let v601 = false;
  let v602 = v587;
  let v604 = v594;
  let v605 = stdlib.checkedBigNumberify('./index.rsh:33:15:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const v615 = v604[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
    const v616 = v615[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc8],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v582, v583, v584, v585, v586, v587, v599, v600, v601, v602, v604, v605, v615, v616],
        evt_cnt: 0,
        funcNum: 3,
        lct: v602,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:181:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v1298, time: v1297, didSend: v431, from: v1296 } = txn3;
          
          ;
          const cv599 = v599;
          const cv600 = v600;
          const cv601 = v601;
          const cv602 = v1297;
          const cv604 = v604;
          const cv605 = v605;
          
          await (async () => {
            const v599 = cv599;
            const v600 = cv600;
            const v601 = cv601;
            const v602 = cv602;
            const v604 = cv604;
            const v605 = cv605;
            
            if (await (async () => {
              
              return true;})()) {
              const v615 = v604[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
              const v616 = v615[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v586
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
        tys: [ctc9, ctc3, ctc3, ctc3, ctc4, ctc3, ctc3, ctc1, ctc1, ctc3, ctc11, ctc3, ctc10, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1298, time: v1297, didSend: v431, from: v1296 } = txn3;
      ;
      const v1299 = stdlib.addressEq(v582, v1296);
      stdlib.assert(v1299, {
        at: './index.rsh:181:21:dot',
        fs: ['at ./index.rsh:180:40:application call to [unknown function] (defined at: ./index.rsh:180:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv599 = v599;
      const cv600 = v600;
      const cv601 = v601;
      const cv602 = v1297;
      const cv604 = v604;
      const cv605 = v605;
      
      v599 = cv599;
      v600 = cv600;
      v601 = cv601;
      v602 = cv602;
      v604 = cv604;
      v605 = cv605;
      
      continue;
      }
    else {
      const {data: [v729], secs: v731, time: v730, didSend: v333, from: v728 } = txn2;
      switch (v729[0]) {
        case 'acceptTermsToRecDistribution0_79': {
          const v732 = v729[1];
          undefined /* setApiDetails */;
          ;
          const v779 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '1')];
          const v780 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '2')];
          const v781 = [v616, v779, v780];
          const v782 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '0'), v781);
          ;
          const v784 = stdlib.addressEq(v728, v582);
          const v785 = v784 ? false : true;
          stdlib.assert(v785, {
            at: './index.rsh:164:24:application',
            fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)'],
            msg: 'Deployer cannot receive distributions',
            who: 'Creator'
            });
          stdlib.assert(v600, {
            at: './index.rsh:165:24:application',
            fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)'],
            msg: 'Deposit has not been made',
            who: 'Creator'
            });
          const v787 = v601 ? false : true;
          stdlib.assert(v787, {
            at: './index.rsh:166:24:application',
            fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)'],
            msg: 'Vault is already over after switch was pressed',
            who: 'Creator'
            });
          const v789 = stdlib.add(v587, v585);
          const v790 = stdlib.ge(v602, v789);
          stdlib.assert(v790, {
            at: './index.rsh:167:24:application',
            fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)'],
            msg: 'Terms accepted BUT countDown not complete yet.',
            who: 'Creator'
            });
          const v791 = stdlib.lt(v599, v583);
          stdlib.assert(v791, {
            at: './index.rsh:168:24:application',
            fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)'],
            msg: 'Maximum number of people have already attached to the vault',
            who: 'Creator'
            });
          const v792 = v782[stdlib.checkedBigNumberify('./index.rsh:169:32:application', stdlib.UInt_max, '0')];
          const v793 = v792[stdlib.checkedBigNumberify('./index.rsh:169:32:application', stdlib.UInt_max, '0')];
          const v794 = stdlib.div(v584, v583);
          const v795 = stdlib.gt(v793, v794);
          stdlib.assert(v795, {
            at: './index.rsh:169:24:application',
            fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)'],
            msg: 'token balance must be greater than distribution',
            who: 'Creator'
            });
          const v796 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v728), null);
          const v797 = stdlib.fromSome(v796, false);
          const v798 = v797 ? false : true;
          stdlib.assert(v798, {
            at: './index.rsh:170:24:application',
            fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)'],
            msg: 'You have already received distribution',
            who: 'Creator'
            });
          const v805 = stdlib.sub(v793, v794);
          const v808 = v792[stdlib.checkedBigNumberify('./index.rsh:171:78:application', stdlib.UInt_max, '1')];
          const v809 = v792[stdlib.checkedBigNumberify('./index.rsh:171:78:application', stdlib.UInt_max, '2')];
          const v810 = [v805, v808, v809];
          const v811 = stdlib.Array_set(v782, stdlib.checkedBigNumberify('./index.rsh:171:78:application', stdlib.UInt_max, '0'), v810);
          ;
          const v812 = stdlib.add(v599, stdlib.checkedBigNumberify('./index.rsh:173:64:decimal', stdlib.UInt_max, '1'));
          await stdlib.mapSet(map0, v728, true);
          const v813 = true;
          await txn2.getOutput('acceptTermsToRecDistribution', 'v813', ctc1, v813);
          const cv599 = v812;
          const cv600 = true;
          const cv601 = v601;
          const cv602 = v730;
          const cv604 = v811;
          const cv605 = v605;
          
          v599 = cv599;
          v600 = cv600;
          v601 = cv601;
          v602 = cv602;
          v604 = cv604;
          v605 = cv605;
          
          continue;
          break;
          }
        case 'depositToVault0_79': {
          const v873 = v729[1];
          undefined /* setApiDetails */;
          const v885 = v873[stdlib.checkedBigNumberify('./index.rsh:76:13:spread', stdlib.UInt_max, '0')];
          ;
          const v917 = stdlib.add(v616, v885);
          const v920 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '1')];
          const v921 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '2')];
          const v922 = [v917, v920, v921];
          const v923 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '0'), v922);
          ;
          const v963 = stdlib.addressEq(v728, v582);
          stdlib.assert(v963, {
            at: './index.rsh:90:24:application',
            fs: ['at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:13:function exp)'],
            msg: 'Only Deployer can make deposit to vault',
            who: 'Creator'
            });
          const v964 = stdlib.eq(v885, v584);
          stdlib.assert(v964, {
            at: './index.rsh:91:24:application',
            fs: ['at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:13:function exp)'],
            msg: 'Amount deposited must be equal to set distribution amount',
            who: 'Creator'
            });
          const v965 = v600 ? false : true;
          stdlib.assert(v965, {
            at: './index.rsh:92:24:application',
            fs: ['at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:13:function exp)'],
            msg: 'Deposit has already been made',
            who: 'Creator'
            });
          const v966 = v601 ? false : true;
          stdlib.assert(v966, {
            at: './index.rsh:93:24:application',
            fs: ['at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:13:function exp)'],
            msg: 'Vault is already over after switch was pressed',
            who: 'Creator'
            });
          const v968 = stdlib.add(v587, v585);
          const v969 = stdlib.lt(v602, v968);
          stdlib.assert(v969, {
            at: './index.rsh:94:24:application',
            fs: ['at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:13:function exp)'],
            msg: 'countDown for deposit completed. It is over',
            who: 'Creator'
            });
          const v970 = true;
          await txn2.getOutput('depositToVault', 'v970', ctc1, v970);
          const cv599 = v599;
          const cv600 = true;
          const cv601 = v601;
          const cv602 = v730;
          const cv604 = v923;
          const cv605 = v605;
          
          v599 = cv599;
          v600 = cv600;
          v601 = cv601;
          v602 = cv602;
          v604 = cv604;
          v605 = cv605;
          
          continue;
          break;
          }
        case 'optIn0_79': {
          const v1014 = v729[1];
          undefined /* setApiDetails */;
          ;
          const v1061 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '1')];
          const v1062 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '2')];
          const v1063 = [v616, v1061, v1062];
          const v1064 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '0'), v1063);
          ;
          const v1120 = true;
          await txn2.getOutput('optIn', 'v1120', ctc1, v1120);
          const cv599 = v599;
          const cv600 = v600;
          const cv601 = v601;
          const cv602 = v730;
          const cv604 = v1064;
          const cv605 = v605;
          
          v599 = cv599;
          v600 = cv600;
          v601 = cv601;
          v602 = cv602;
          v604 = cv604;
          v605 = cv605;
          
          continue;
          break;
          }
        case 'pressSwitch0_79': {
          const v1155 = v729[1];
          undefined /* setApiDetails */;
          ;
          const v1202 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '1')];
          const v1203 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '2')];
          const v1204 = [v616, v1202, v1203];
          const v1205 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '0'), v1204);
          ;
          const v1269 = stdlib.addressEq(v728, v582);
          stdlib.assert(v1269, {
            at: './index.rsh:115:24:application',
            fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)'],
            msg: 'Only Deployer can make deposit to vault',
            who: 'Creator'
            });
          stdlib.assert(v600, {
            at: './index.rsh:116:24:application',
            fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)'],
            msg: 'Deposit has not been made',
            who: 'Creator'
            });
          const v1271 = v601 ? false : true;
          stdlib.assert(v1271, {
            at: './index.rsh:117:24:application',
            fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)'],
            msg: 'Vault is already over after switch was pressed',
            who: 'Creator'
            });
          const v1273 = stdlib.add(v587, v585);
          const v1274 = stdlib.lt(v602, v1273);
          stdlib.assert(v1274, {
            at: './index.rsh:118:24:application',
            fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)'],
            msg: 'countDown completed. It is over',
            who: 'Creator'
            });
          const v1275 = v1205[stdlib.checkedBigNumberify('./index.rsh:119:49:application', stdlib.UInt_max, '0')];
          const v1276 = v1275[stdlib.checkedBigNumberify('./index.rsh:119:49:application', stdlib.UInt_max, '0')];
          const v1282 = stdlib.sub(v1276, v1276);
          const v1285 = v1275[stdlib.checkedBigNumberify('./index.rsh:119:63:application', stdlib.UInt_max, '1')];
          const v1286 = v1275[stdlib.checkedBigNumberify('./index.rsh:119:63:application', stdlib.UInt_max, '2')];
          const v1287 = [v1282, v1285, v1286];
          const v1288 = stdlib.Array_set(v1205, stdlib.checkedBigNumberify('./index.rsh:119:63:application', stdlib.UInt_max, '0'), v1287);
          ;
          const v1289 = true;
          await txn2.getOutput('pressSwitch', 'v1289', ctc1, v1289);
          const cv599 = v599;
          const cv600 = true;
          const cv601 = true;
          const cv602 = v730;
          const cv604 = v1288;
          const cv605 = v605;
          
          v599 = cv599;
          v600 = cv600;
          v601 = cv601;
          v602 = cv602;
          v604 = cv604;
          v605 = cv605;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  };
export async function _acceptTermsToRecDistribution3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _acceptTermsToRecDistribution3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _acceptTermsToRecDistribution3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Data({
    acceptTermsToRecDistribution0_79: ctc8,
    depositToVault0_79: ctc9,
    optIn0_79: ctc8,
    pressSwitch0_79: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v582, v583, v584, v585, v586, v587, v599, v600, v601, v602, v604, v605, v615, v616] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc4, ctc1, ctc1, ctc4, ctc7, ctc4, ctc6, ctc4]);
  const v664 = ctc.selfAddress();
  const v666 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:13:function exp)', 'at ./index.rsh:62:86:application call to "runacceptTermsToRecDistribution0_79" (defined at: ./index.rsh:148:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'in',
    who: 'acceptTermsToRecDistribution'
    });
  const v668 = stdlib.addressEq(v664, v582);
  const v669 = v668 ? false : true;
  stdlib.assert(v669, {
    at: './index.rsh:152:23:application',
    fs: ['at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:17:function exp)', 'at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:13:function exp)', 'at ./index.rsh:62:86:application call to "runacceptTermsToRecDistribution0_79" (defined at: ./index.rsh:148:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'Deployer cannot receive distributions',
    who: 'acceptTermsToRecDistribution'
    });
  stdlib.assert(v600, {
    at: './index.rsh:153:23:application',
    fs: ['at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:17:function exp)', 'at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:13:function exp)', 'at ./index.rsh:62:86:application call to "runacceptTermsToRecDistribution0_79" (defined at: ./index.rsh:148:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'Deposit has not been made',
    who: 'acceptTermsToRecDistribution'
    });
  const v671 = v601 ? false : true;
  stdlib.assert(v671, {
    at: './index.rsh:154:23:application',
    fs: ['at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:17:function exp)', 'at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:13:function exp)', 'at ./index.rsh:62:86:application call to "runacceptTermsToRecDistribution0_79" (defined at: ./index.rsh:148:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'Vault is already over after switch was pressed',
    who: 'acceptTermsToRecDistribution'
    });
  const v673 = stdlib.add(v587, v585);
  const v674 = stdlib.ge(v602, v673);
  stdlib.assert(v674, {
    at: './index.rsh:155:23:application',
    fs: ['at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:17:function exp)', 'at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:13:function exp)', 'at ./index.rsh:62:86:application call to "runacceptTermsToRecDistribution0_79" (defined at: ./index.rsh:148:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'Terms accepted BUT countDown not complete yet.',
    who: 'acceptTermsToRecDistribution'
    });
  const v675 = stdlib.lt(v599, v583);
  stdlib.assert(v675, {
    at: './index.rsh:156:23:application',
    fs: ['at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:17:function exp)', 'at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:13:function exp)', 'at ./index.rsh:62:86:application call to "runacceptTermsToRecDistribution0_79" (defined at: ./index.rsh:148:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'Maximum number of people have already attached to the vault',
    who: 'acceptTermsToRecDistribution'
    });
  const v678 = stdlib.div(v584, v583);
  const v679 = stdlib.gt(v616, v678);
  stdlib.assert(v679, {
    at: './index.rsh:157:23:application',
    fs: ['at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:17:function exp)', 'at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:13:function exp)', 'at ./index.rsh:62:86:application call to "runacceptTermsToRecDistribution0_79" (defined at: ./index.rsh:148:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'token balance must be greater than distribution',
    who: 'acceptTermsToRecDistribution'
    });
  const v680 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v664), null);
  const v681 = stdlib.fromSome(v680, false);
  const v682 = v681 ? false : true;
  stdlib.assert(v682, {
    at: './index.rsh:158:23:application',
    fs: ['at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:17:function exp)', 'at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:13:function exp)', 'at ./index.rsh:62:86:application call to "runacceptTermsToRecDistribution0_79" (defined at: ./index.rsh:148:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'You have already received distribution',
    who: 'acceptTermsToRecDistribution'
    });
  const v685 = ['acceptTermsToRecDistribution0_79', v666];
  
  const txn1 = await (ctc.sendrecv({
    args: [v582, v583, v584, v585, v586, v587, v599, v600, v601, v602, v604, v605, v615, v616, v685],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:161:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:161:25:decimal', stdlib.UInt_max, '0'), v586]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v729], secs: v731, time: v730, didSend: v333, from: v728 } = txn1;
      
      switch (v729[0]) {
        case 'acceptTermsToRecDistribution0_79': {
          const v732 = v729[1];
          sim_r.txns.push({
            kind: 'api',
            who: "acceptTermsToRecDistribution"
            });
          ;
          const v779 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '1')];
          const v780 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '2')];
          const v781 = [v616, v779, v780];
          const v782 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '0'), v781);
          ;
          const v792 = v782[stdlib.checkedBigNumberify('./index.rsh:169:32:application', stdlib.UInt_max, '0')];
          const v793 = v792[stdlib.checkedBigNumberify('./index.rsh:169:32:application', stdlib.UInt_max, '0')];
          const v794 = stdlib.div(v584, v583);
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v728), null);
          const v805 = stdlib.sub(v793, v794);
          const v808 = v792[stdlib.checkedBigNumberify('./index.rsh:171:78:application', stdlib.UInt_max, '1')];
          const v809 = v792[stdlib.checkedBigNumberify('./index.rsh:171:78:application', stdlib.UInt_max, '2')];
          const v810 = [v805, v808, v809];
          const v811 = stdlib.Array_set(v782, stdlib.checkedBigNumberify('./index.rsh:171:78:application', stdlib.UInt_max, '0'), v810);
          sim_r.txns.push({
            kind: 'from',
            to: v728,
            tok: v586
            });
          const v812 = stdlib.add(v599, stdlib.checkedBigNumberify('./index.rsh:173:64:decimal', stdlib.UInt_max, '1'));
          await stdlib.simMapSet(sim_r, 0, v728, true);
          const v813 = true;
          const v814 = await txn1.getOutput('acceptTermsToRecDistribution', 'v813', ctc1, v813);
          
          const v1848 = v812;
          const v1849 = true;
          const v1850 = v601;
          const v1851 = v730;
          const v1852 = v811;
          const v1853 = v605;
          const v1854 = v811[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
          const v1855 = v1854[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'depositToVault0_79': {
          const v873 = v729[1];
          
          break;
          }
        case 'optIn0_79': {
          const v1014 = v729[1];
          
          break;
          }
        case 'pressSwitch0_79': {
          const v1155 = v729[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc4, ctc1, ctc1, ctc4, ctc7, ctc4, ctc6, ctc4, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v729], secs: v731, time: v730, didSend: v333, from: v728 } = txn1;
  switch (v729[0]) {
    case 'acceptTermsToRecDistribution0_79': {
      const v732 = v729[1];
      undefined /* setApiDetails */;
      ;
      const v779 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '1')];
      const v780 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '2')];
      const v781 = [v616, v779, v780];
      const v782 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '0'), v781);
      ;
      const v784 = stdlib.addressEq(v728, v582);
      const v785 = v784 ? false : true;
      stdlib.assert(v785, {
        at: './index.rsh:164:24:application',
        fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)'],
        msg: 'Deployer cannot receive distributions',
        who: 'acceptTermsToRecDistribution'
        });
      stdlib.assert(v600, {
        at: './index.rsh:165:24:application',
        fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)'],
        msg: 'Deposit has not been made',
        who: 'acceptTermsToRecDistribution'
        });
      const v787 = v601 ? false : true;
      stdlib.assert(v787, {
        at: './index.rsh:166:24:application',
        fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)'],
        msg: 'Vault is already over after switch was pressed',
        who: 'acceptTermsToRecDistribution'
        });
      const v789 = stdlib.add(v587, v585);
      const v790 = stdlib.ge(v602, v789);
      stdlib.assert(v790, {
        at: './index.rsh:167:24:application',
        fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)'],
        msg: 'Terms accepted BUT countDown not complete yet.',
        who: 'acceptTermsToRecDistribution'
        });
      const v791 = stdlib.lt(v599, v583);
      stdlib.assert(v791, {
        at: './index.rsh:168:24:application',
        fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)'],
        msg: 'Maximum number of people have already attached to the vault',
        who: 'acceptTermsToRecDistribution'
        });
      const v792 = v782[stdlib.checkedBigNumberify('./index.rsh:169:32:application', stdlib.UInt_max, '0')];
      const v793 = v792[stdlib.checkedBigNumberify('./index.rsh:169:32:application', stdlib.UInt_max, '0')];
      const v794 = stdlib.div(v584, v583);
      const v795 = stdlib.gt(v793, v794);
      stdlib.assert(v795, {
        at: './index.rsh:169:24:application',
        fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)'],
        msg: 'token balance must be greater than distribution',
        who: 'acceptTermsToRecDistribution'
        });
      const v796 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v728), null);
      const v797 = stdlib.fromSome(v796, false);
      const v798 = v797 ? false : true;
      stdlib.assert(v798, {
        at: './index.rsh:170:24:application',
        fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)'],
        msg: 'You have already received distribution',
        who: 'acceptTermsToRecDistribution'
        });
      const v805 = stdlib.sub(v793, v794);
      const v808 = v792[stdlib.checkedBigNumberify('./index.rsh:171:78:application', stdlib.UInt_max, '1')];
      const v809 = v792[stdlib.checkedBigNumberify('./index.rsh:171:78:application', stdlib.UInt_max, '2')];
      const v810 = [v805, v808, v809];
      const v811 = stdlib.Array_set(v782, stdlib.checkedBigNumberify('./index.rsh:171:78:application', stdlib.UInt_max, '0'), v810);
      ;
      const v812 = stdlib.add(v599, stdlib.checkedBigNumberify('./index.rsh:173:64:decimal', stdlib.UInt_max, '1'));
      await stdlib.mapSet(map0, v728, true);
      const v813 = true;
      const v814 = await txn1.getOutput('acceptTermsToRecDistribution', 'v813', ctc1, v813);
      if (v333) {
        stdlib.protect(ctc0, await interact.out(v732, v814), {
          at: './index.rsh:149:13:application',
          fs: ['at ./index.rsh:149:13:application call to [unknown function] (defined at: ./index.rsh:149:13:function exp)', 'at ./index.rsh:176:20:application call to "res" (defined at: ./index.rsh:163:13:function exp)', 'at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)'],
          msg: 'out',
          who: 'acceptTermsToRecDistribution'
          });
        }
      else {
        }
      
      const v1848 = v812;
      const v1849 = true;
      const v1850 = v601;
      const v1851 = v730;
      const v1852 = v811;
      const v1853 = v605;
      const v1854 = v811[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
      const v1855 = v1854[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'depositToVault0_79': {
      const v873 = v729[1];
      return;
      break;
      }
    case 'optIn0_79': {
      const v1014 = v729[1];
      return;
      break;
      }
    case 'pressSwitch0_79': {
      const v1155 = v729[1];
      return;
      break;
      }
    }
  
  
  };
export async function _depositToVault3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _depositToVault3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _depositToVault3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    acceptTermsToRecDistribution0_79: ctc9,
    depositToVault0_79: ctc8,
    optIn0_79: ctc9,
    pressSwitch0_79: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v582, v583, v584, v585, v586, v587, v599, v600, v601, v602, v604, v605, v615, v616] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc4, ctc1, ctc1, ctc4, ctc7, ctc4, ctc6, ctc4]);
  const v624 = ctc.selfAddress();
  const v626 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:79:13:application call to [unknown function] (defined at: ./index.rsh:79:13:function exp)', 'at ./index.rsh:62:86:application call to "rundepositToVault0_79" (defined at: ./index.rsh:76:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'in',
    who: 'depositToVault'
    });
  const v627 = v626[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v630 = stdlib.addressEq(v624, v582);
  stdlib.assert(v630, {
    at: './index.rsh:80:23:application',
    fs: ['at ./index.rsh:79:13:application call to [unknown function] (defined at: ./index.rsh:79:20:function exp)', 'at ./index.rsh:79:13:application call to [unknown function] (defined at: ./index.rsh:79:13:function exp)', 'at ./index.rsh:62:86:application call to "rundepositToVault0_79" (defined at: ./index.rsh:76:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'Only Deployer can make deposit to vault',
    who: 'depositToVault'
    });
  const v631 = stdlib.eq(v627, v584);
  stdlib.assert(v631, {
    at: './index.rsh:81:23:application',
    fs: ['at ./index.rsh:79:13:application call to [unknown function] (defined at: ./index.rsh:79:20:function exp)', 'at ./index.rsh:79:13:application call to [unknown function] (defined at: ./index.rsh:79:13:function exp)', 'at ./index.rsh:62:86:application call to "rundepositToVault0_79" (defined at: ./index.rsh:76:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'Amount deposited must be equal to set distribution amount',
    who: 'depositToVault'
    });
  const v632 = v600 ? false : true;
  stdlib.assert(v632, {
    at: './index.rsh:82:23:application',
    fs: ['at ./index.rsh:79:13:application call to [unknown function] (defined at: ./index.rsh:79:20:function exp)', 'at ./index.rsh:79:13:application call to [unknown function] (defined at: ./index.rsh:79:13:function exp)', 'at ./index.rsh:62:86:application call to "rundepositToVault0_79" (defined at: ./index.rsh:76:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'Deposit has already been made',
    who: 'depositToVault'
    });
  const v633 = v601 ? false : true;
  stdlib.assert(v633, {
    at: './index.rsh:83:23:application',
    fs: ['at ./index.rsh:79:13:application call to [unknown function] (defined at: ./index.rsh:79:20:function exp)', 'at ./index.rsh:79:13:application call to [unknown function] (defined at: ./index.rsh:79:13:function exp)', 'at ./index.rsh:62:86:application call to "rundepositToVault0_79" (defined at: ./index.rsh:76:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'Vault is already over after switch was pressed',
    who: 'depositToVault'
    });
  const v635 = stdlib.add(v587, v585);
  const v636 = stdlib.lt(v602, v635);
  stdlib.assert(v636, {
    at: './index.rsh:84:23:application',
    fs: ['at ./index.rsh:79:13:application call to [unknown function] (defined at: ./index.rsh:79:20:function exp)', 'at ./index.rsh:79:13:application call to [unknown function] (defined at: ./index.rsh:79:13:function exp)', 'at ./index.rsh:62:86:application call to "rundepositToVault0_79" (defined at: ./index.rsh:76:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'countDown for deposit completed. It is over',
    who: 'depositToVault'
    });
  const v640 = ['depositToVault0_79', v626];
  
  const txn1 = await (ctc.sendrecv({
    args: [v582, v583, v584, v585, v586, v587, v599, v600, v601, v602, v604, v605, v615, v616, v640],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:87:24:decimal', stdlib.UInt_max, '0'), [[v627, v586]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v729], secs: v731, time: v730, didSend: v333, from: v728 } = txn1;
      
      switch (v729[0]) {
        case 'acceptTermsToRecDistribution0_79': {
          const v732 = v729[1];
          
          break;
          }
        case 'depositToVault0_79': {
          const v873 = v729[1];
          sim_r.txns.push({
            kind: 'api',
            who: "depositToVault"
            });
          const v885 = v873[stdlib.checkedBigNumberify('./index.rsh:76:13:spread', stdlib.UInt_max, '0')];
          ;
          const v917 = stdlib.add(v616, v885);
          const v920 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '1')];
          const v921 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '2')];
          const v922 = [v917, v920, v921];
          const v923 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '0'), v922);
          sim_r.txns.push({
            amt: v885,
            kind: 'to',
            tok: v586
            });
          const v970 = true;
          const v971 = await txn1.getOutput('depositToVault', 'v970', ctc1, v970);
          
          const v1898 = v599;
          const v1899 = true;
          const v1900 = v601;
          const v1901 = v730;
          const v1902 = v923;
          const v1903 = v605;
          const v1904 = v923[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
          const v1905 = v1904[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'optIn0_79': {
          const v1014 = v729[1];
          
          break;
          }
        case 'pressSwitch0_79': {
          const v1155 = v729[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc4, ctc1, ctc1, ctc4, ctc7, ctc4, ctc6, ctc4, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v729], secs: v731, time: v730, didSend: v333, from: v728 } = txn1;
  switch (v729[0]) {
    case 'acceptTermsToRecDistribution0_79': {
      const v732 = v729[1];
      return;
      break;
      }
    case 'depositToVault0_79': {
      const v873 = v729[1];
      undefined /* setApiDetails */;
      const v885 = v873[stdlib.checkedBigNumberify('./index.rsh:76:13:spread', stdlib.UInt_max, '0')];
      ;
      const v917 = stdlib.add(v616, v885);
      const v920 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '1')];
      const v921 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '2')];
      const v922 = [v917, v920, v921];
      const v923 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '0'), v922);
      ;
      const v963 = stdlib.addressEq(v728, v582);
      stdlib.assert(v963, {
        at: './index.rsh:90:24:application',
        fs: ['at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:13:function exp)'],
        msg: 'Only Deployer can make deposit to vault',
        who: 'depositToVault'
        });
      const v964 = stdlib.eq(v885, v584);
      stdlib.assert(v964, {
        at: './index.rsh:91:24:application',
        fs: ['at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:13:function exp)'],
        msg: 'Amount deposited must be equal to set distribution amount',
        who: 'depositToVault'
        });
      const v965 = v600 ? false : true;
      stdlib.assert(v965, {
        at: './index.rsh:92:24:application',
        fs: ['at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:13:function exp)'],
        msg: 'Deposit has already been made',
        who: 'depositToVault'
        });
      const v966 = v601 ? false : true;
      stdlib.assert(v966, {
        at: './index.rsh:93:24:application',
        fs: ['at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:13:function exp)'],
        msg: 'Vault is already over after switch was pressed',
        who: 'depositToVault'
        });
      const v968 = stdlib.add(v587, v585);
      const v969 = stdlib.lt(v602, v968);
      stdlib.assert(v969, {
        at: './index.rsh:94:24:application',
        fs: ['at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:13:function exp)'],
        msg: 'countDown for deposit completed. It is over',
        who: 'depositToVault'
        });
      const v970 = true;
      const v971 = await txn1.getOutput('depositToVault', 'v970', ctc1, v970);
      if (v333) {
        stdlib.protect(ctc0, await interact.out(v873, v971), {
          at: './index.rsh:77:13:application',
          fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:13:function exp)', 'at ./index.rsh:98:20:application call to "res" (defined at: ./index.rsh:89:13:function exp)', 'at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:13:function exp)'],
          msg: 'out',
          who: 'depositToVault'
          });
        }
      else {
        }
      
      const v1898 = v599;
      const v1899 = true;
      const v1900 = v601;
      const v1901 = v730;
      const v1902 = v923;
      const v1903 = v605;
      const v1904 = v923[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
      const v1905 = v1904[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'optIn0_79': {
      const v1014 = v729[1];
      return;
      break;
      }
    case 'pressSwitch0_79': {
      const v1155 = v729[1];
      return;
      break;
      }
    }
  
  
  };
export async function _optIn3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _optIn3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _optIn3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Data({
    acceptTermsToRecDistribution0_79: ctc8,
    depositToVault0_79: ctc9,
    optIn0_79: ctc8,
    pressSwitch0_79: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v582, v583, v584, v585, v586, v587, v599, v600, v601, v602, v604, v605, v615, v616] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc4, ctc1, ctc1, ctc4, ctc7, ctc4, ctc6, ctc4]);
  const v658 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)', 'at ./index.rsh:62:86:application call to "runoptIn0_79" (defined at: ./index.rsh:129:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'in',
    who: 'optIn'
    });
  const v662 = ['optIn0_79', v658];
  
  const txn1 = await (ctc.sendrecv({
    args: [v582, v583, v584, v585, v586, v587, v599, v600, v601, v602, v604, v605, v615, v616, v662],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:136:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:136:25:decimal', stdlib.UInt_max, '0'), v586]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v729], secs: v731, time: v730, didSend: v333, from: v728 } = txn1;
      
      switch (v729[0]) {
        case 'acceptTermsToRecDistribution0_79': {
          const v732 = v729[1];
          
          break;
          }
        case 'depositToVault0_79': {
          const v873 = v729[1];
          
          break;
          }
        case 'optIn0_79': {
          const v1014 = v729[1];
          sim_r.txns.push({
            kind: 'api',
            who: "optIn"
            });
          ;
          const v1061 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '1')];
          const v1062 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '2')];
          const v1063 = [v616, v1061, v1062];
          const v1064 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '0'), v1063);
          ;
          const v1120 = true;
          const v1121 = await txn1.getOutput('optIn', 'v1120', ctc1, v1120);
          
          const v1948 = v599;
          const v1949 = v600;
          const v1950 = v601;
          const v1951 = v730;
          const v1952 = v1064;
          const v1953 = v605;
          const v1954 = v1064[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
          const v1955 = v1954[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'pressSwitch0_79': {
          const v1155 = v729[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc4, ctc1, ctc1, ctc4, ctc7, ctc4, ctc6, ctc4, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v729], secs: v731, time: v730, didSend: v333, from: v728 } = txn1;
  switch (v729[0]) {
    case 'acceptTermsToRecDistribution0_79': {
      const v732 = v729[1];
      return;
      break;
      }
    case 'depositToVault0_79': {
      const v873 = v729[1];
      return;
      break;
      }
    case 'optIn0_79': {
      const v1014 = v729[1];
      undefined /* setApiDetails */;
      ;
      const v1061 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '1')];
      const v1062 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '2')];
      const v1063 = [v616, v1061, v1062];
      const v1064 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '0'), v1063);
      ;
      const v1120 = true;
      const v1121 = await txn1.getOutput('optIn', 'v1120', ctc1, v1120);
      if (v333) {
        stdlib.protect(ctc0, await interact.out(v1014, v1121), {
          at: './index.rsh:130:13:application',
          fs: ['at ./index.rsh:130:13:application call to [unknown function] (defined at: ./index.rsh:130:13:function exp)', 'at ./index.rsh:142:20:application call to "res" (defined at: ./index.rsh:138:13:function exp)', 'at ./index.rsh:138:13:application call to [unknown function] (defined at: ./index.rsh:138:13:function exp)'],
          msg: 'out',
          who: 'optIn'
          });
        }
      else {
        }
      
      const v1948 = v599;
      const v1949 = v600;
      const v1950 = v601;
      const v1951 = v730;
      const v1952 = v1064;
      const v1953 = v605;
      const v1954 = v1064[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
      const v1955 = v1954[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'pressSwitch0_79': {
      const v1155 = v729[1];
      return;
      break;
      }
    }
  
  
  };
export async function _pressSwitch3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _pressSwitch3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _pressSwitch3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Data({
    acceptTermsToRecDistribution0_79: ctc8,
    depositToVault0_79: ctc9,
    optIn0_79: ctc8,
    pressSwitch0_79: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v582, v583, v584, v585, v586, v587, v599, v600, v601, v602, v604, v605, v615, v616] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc4, ctc1, ctc1, ctc4, ctc7, ctc4, ctc6, ctc4]);
  const v642 = ctc.selfAddress();
  const v644 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:105:13:application call to [unknown function] (defined at: ./index.rsh:105:13:function exp)', 'at ./index.rsh:62:86:application call to "runpressSwitch0_79" (defined at: ./index.rsh:102:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'in',
    who: 'pressSwitch'
    });
  const v646 = stdlib.addressEq(v642, v582);
  stdlib.assert(v646, {
    at: './index.rsh:106:23:application',
    fs: ['at ./index.rsh:105:13:application call to [unknown function] (defined at: ./index.rsh:105:17:function exp)', 'at ./index.rsh:105:13:application call to [unknown function] (defined at: ./index.rsh:105:13:function exp)', 'at ./index.rsh:62:86:application call to "runpressSwitch0_79" (defined at: ./index.rsh:102:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'Only Deployer can make deposit to vault',
    who: 'pressSwitch'
    });
  stdlib.assert(v600, {
    at: './index.rsh:107:23:application',
    fs: ['at ./index.rsh:105:13:application call to [unknown function] (defined at: ./index.rsh:105:17:function exp)', 'at ./index.rsh:105:13:application call to [unknown function] (defined at: ./index.rsh:105:13:function exp)', 'at ./index.rsh:62:86:application call to "runpressSwitch0_79" (defined at: ./index.rsh:102:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'Deposit has not been made',
    who: 'pressSwitch'
    });
  const v648 = v601 ? false : true;
  stdlib.assert(v648, {
    at: './index.rsh:108:23:application',
    fs: ['at ./index.rsh:105:13:application call to [unknown function] (defined at: ./index.rsh:105:17:function exp)', 'at ./index.rsh:105:13:application call to [unknown function] (defined at: ./index.rsh:105:13:function exp)', 'at ./index.rsh:62:86:application call to "runpressSwitch0_79" (defined at: ./index.rsh:102:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'Vault is already over after switch was pressed',
    who: 'pressSwitch'
    });
  const v650 = stdlib.add(v587, v585);
  const v651 = stdlib.lt(v602, v650);
  stdlib.assert(v651, {
    at: './index.rsh:109:23:application',
    fs: ['at ./index.rsh:105:13:application call to [unknown function] (defined at: ./index.rsh:105:17:function exp)', 'at ./index.rsh:105:13:application call to [unknown function] (defined at: ./index.rsh:105:13:function exp)', 'at ./index.rsh:62:86:application call to "runpressSwitch0_79" (defined at: ./index.rsh:102:13:function exp)', 'at ./index.rsh:62:86:application call to [unknown function] (defined at: ./index.rsh:62:86:function exp)'],
    msg: 'countDown completed. It is over',
    who: 'pressSwitch'
    });
  const v654 = ['pressSwitch0_79', v644];
  
  const txn1 = await (ctc.sendrecv({
    args: [v582, v583, v584, v585, v586, v587, v599, v600, v601, v602, v604, v605, v615, v616, v654],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:112:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:112:25:decimal', stdlib.UInt_max, '0'), v586]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v729], secs: v731, time: v730, didSend: v333, from: v728 } = txn1;
      
      switch (v729[0]) {
        case 'acceptTermsToRecDistribution0_79': {
          const v732 = v729[1];
          
          break;
          }
        case 'depositToVault0_79': {
          const v873 = v729[1];
          
          break;
          }
        case 'optIn0_79': {
          const v1014 = v729[1];
          
          break;
          }
        case 'pressSwitch0_79': {
          const v1155 = v729[1];
          sim_r.txns.push({
            kind: 'api',
            who: "pressSwitch"
            });
          ;
          const v1202 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '1')];
          const v1203 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '2')];
          const v1204 = [v616, v1202, v1203];
          const v1205 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '0'), v1204);
          ;
          const v1275 = v1205[stdlib.checkedBigNumberify('./index.rsh:119:49:application', stdlib.UInt_max, '0')];
          const v1276 = v1275[stdlib.checkedBigNumberify('./index.rsh:119:49:application', stdlib.UInt_max, '0')];
          const v1282 = stdlib.sub(v1276, v1276);
          const v1285 = v1275[stdlib.checkedBigNumberify('./index.rsh:119:63:application', stdlib.UInt_max, '1')];
          const v1286 = v1275[stdlib.checkedBigNumberify('./index.rsh:119:63:application', stdlib.UInt_max, '2')];
          const v1287 = [v1282, v1285, v1286];
          const v1288 = stdlib.Array_set(v1205, stdlib.checkedBigNumberify('./index.rsh:119:63:application', stdlib.UInt_max, '0'), v1287);
          sim_r.txns.push({
            kind: 'from',
            to: v728,
            tok: v586
            });
          const v1289 = true;
          const v1290 = await txn1.getOutput('pressSwitch', 'v1289', ctc1, v1289);
          
          const v1998 = v599;
          const v1999 = true;
          const v2000 = true;
          const v2001 = v730;
          const v2002 = v1288;
          const v2003 = v605;
          const v2004 = v1288[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
          const v2005 = v2004[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc4, ctc1, ctc1, ctc4, ctc7, ctc4, ctc6, ctc4, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v729], secs: v731, time: v730, didSend: v333, from: v728 } = txn1;
  switch (v729[0]) {
    case 'acceptTermsToRecDistribution0_79': {
      const v732 = v729[1];
      return;
      break;
      }
    case 'depositToVault0_79': {
      const v873 = v729[1];
      return;
      break;
      }
    case 'optIn0_79': {
      const v1014 = v729[1];
      return;
      break;
      }
    case 'pressSwitch0_79': {
      const v1155 = v729[1];
      undefined /* setApiDetails */;
      ;
      const v1202 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '1')];
      const v1203 = v615[stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '2')];
      const v1204 = [v616, v1202, v1203];
      const v1205 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:62:86:dot', stdlib.UInt_max, '0'), v1204);
      ;
      const v1269 = stdlib.addressEq(v728, v582);
      stdlib.assert(v1269, {
        at: './index.rsh:115:24:application',
        fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)'],
        msg: 'Only Deployer can make deposit to vault',
        who: 'pressSwitch'
        });
      stdlib.assert(v600, {
        at: './index.rsh:116:24:application',
        fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)'],
        msg: 'Deposit has not been made',
        who: 'pressSwitch'
        });
      const v1271 = v601 ? false : true;
      stdlib.assert(v1271, {
        at: './index.rsh:117:24:application',
        fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)'],
        msg: 'Vault is already over after switch was pressed',
        who: 'pressSwitch'
        });
      const v1273 = stdlib.add(v587, v585);
      const v1274 = stdlib.lt(v602, v1273);
      stdlib.assert(v1274, {
        at: './index.rsh:118:24:application',
        fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)'],
        msg: 'countDown completed. It is over',
        who: 'pressSwitch'
        });
      const v1275 = v1205[stdlib.checkedBigNumberify('./index.rsh:119:49:application', stdlib.UInt_max, '0')];
      const v1276 = v1275[stdlib.checkedBigNumberify('./index.rsh:119:49:application', stdlib.UInt_max, '0')];
      const v1282 = stdlib.sub(v1276, v1276);
      const v1285 = v1275[stdlib.checkedBigNumberify('./index.rsh:119:63:application', stdlib.UInt_max, '1')];
      const v1286 = v1275[stdlib.checkedBigNumberify('./index.rsh:119:63:application', stdlib.UInt_max, '2')];
      const v1287 = [v1282, v1285, v1286];
      const v1288 = stdlib.Array_set(v1205, stdlib.checkedBigNumberify('./index.rsh:119:63:application', stdlib.UInt_max, '0'), v1287);
      ;
      const v1289 = true;
      const v1290 = await txn1.getOutput('pressSwitch', 'v1289', ctc1, v1289);
      if (v333) {
        stdlib.protect(ctc0, await interact.out(v1155, v1290), {
          at: './index.rsh:103:13:application',
          fs: ['at ./index.rsh:103:13:application call to [unknown function] (defined at: ./index.rsh:103:13:function exp)', 'at ./index.rsh:123:20:application call to "res" (defined at: ./index.rsh:114:13:function exp)', 'at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)'],
          msg: 'out',
          who: 'pressSwitch'
          });
        }
      else {
        }
      
      const v1998 = v599;
      const v1999 = true;
      const v2000 = true;
      const v2001 = v730;
      const v2002 = v1288;
      const v2003 = v605;
      const v2004 = v1288[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
      const v2005 = v2004[stdlib.checkedBigNumberify('./index.rsh:69:48:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    }
  
  
  };
export async function acceptTermsToRecDistribution(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for acceptTermsToRecDistribution expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for acceptTermsToRecDistribution expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _acceptTermsToRecDistribution3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function depositToVault(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for depositToVault expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for depositToVault expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _depositToVault3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _optIn3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function pressSwitch(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for pressSwitch expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for pressSwitch expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _pressSwitch3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`acceptTermsToRecDistribution()byte`, `depositToVault(uint64)byte`, `optIn()byte`, `pressSwitch()byte`],
    pure: [`Creator_v()address`, `attachedTotal_v()uint64`, `balance_tok_v()uint64`, `balance_v()uint64`, `distrReceived_v(address)byte`, `initDepositMade_v()byte`, `switchPressed_v()byte`],
    sigs: [`Creator_v()address`, `acceptTermsToRecDistribution()byte`, `attachedTotal_v()uint64`, `balance_tok_v()uint64`, `balance_v()uint64`, `depositToVault(uint64)byte`, `distrReceived_v(address)byte`, `initDepositMade_v()byte`, `optIn()byte`, `pressSwitch()byte`, `switchPressed_v()byte`]
    },
  appApproval: `BiAZAAEDCASfw4vbCZSIkPgKnqKetAzfvMaoDvyKmIoKqPLYvwqmia/XAvmEipEFjKTMgAjU6Nd3Av///////////wEgKDA4QEhroI0GJgQBAQEAAAIAACI1ADEYQQW7KmRJIls1ASVbNQIxGSMSQQAIMQApK2ZCBYo2GgAXSUEBUSI1BCM1BkkhBQxAAK5JIQYMQABQSSEHDEAAMEkhCAxAABAhCBJENhoBNf8oNP9QQgGoIQcSRDQBJBJEKWQoZFBJNQNXACA1B0IFRiEGEkQ0ASQSRClkKGRQSTUDV4QINQdCBS1JIQkMQAA9SSEKDEAAJSEKEkQ0ASQSRCI2GgGIBTRJNf9XAQEXNP8iVU0WUQcINQdCBPohCRJEKjX/KTT/UCWvUEIBMiEFEkQqNf+AAQM0/1Alr1BCAR9JIQsMQABTSSEMDEAAM0khDQxAABkhDRJENAEkEkQpZChkUEk1A1dRATUHQgSoIQwSRCo1/4ABAjT/UCWvUEIA3iELEkQ0ASQSRClkKGRQSTUDV2sINQdCBHxJIQ4MQAAZIQ4SRDQBJBJEKWQoZFBJNQNXUAE1B0IEXIHAguBcEkQ0ASQSRClkKGRQSTUDV0gINQdCBEA2GgIXNQQ2GgM2GgEXSSEPDEAC4EkkDEAAbiQSRCQ0ARJENARJIhJMNAISEUQpZChkUEk1A1cAIDX/gASnZcS0sDIGIRAPRDT/MQASRDT/NAMhEVs0AyESWzQDIRNbNAMhFFs0AyEVWzQDIRZbNANXUAEXNANXUQEXMgY0A1daETQDIRdbQgL5SCQ0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpKSkpXACA1/yERWzX+IRJbNf0hE1s1/CEUWzX7IRVbNfohFls1+VdQARc1+FdRARc194FSWzX2V1oRNfUhF1s19FdzETXzgYQBWzXySTUFNfGABB4G5rA08VCwMgYhEAxENPEiVUkhDwxAAMBJJAxAAIIkEkQ08hY081cICFA081cQAVA18DEANP8SRDT4RDT3FEQ09jT6NPwIDEQ08FcAEUk17yJbNe6xIrIBNO6yEiEEshAxALIUNPuyEbOACQAAAAAAAAUJAbAoNQc0/zT+NP00/DT7NPo0+SMjMgY07kkJFjTvVwgIUDTvVxABUDT0QgHoSIAJAAAAAAAABGABsCg1BzT/NP40/TT8NPs0+jT5NPg09zIGNPIWNPNXCAhQNPNXEAFQNPRCAbBJIwxAAGpINPFXAQg18DTwFzXvNO80+4gCnzEANP8SRDTvNP0SRDT4FEQ09xRENPY0+jT8CAxEgAkAAAAAAAADygGwKDUHNP80/jT9NPw0+zT6NPkjNPcyBjTyNO8IFjTzVwgIUDTzVxABUDT0QgFASDTyFjTzVwgIUDTzVxABUDXwMQA0/xNENPhENPcURDT2NPo0/AgPRDT5NP4MRDTwVwARSTXvIls17jT9NP4KNe007jTtDUQiMQCIAddJNexXAQEXNOwiVU0URLEisgE07bISIQSyEDEAshQ0+7IRszEAKYACAQFmgAkAAAAAAAADLQGwKDUHNP80/jT9NPw0+zT6NPkjCCM09zIGNO407QkWNO9XCAhQNO9XEAFQNPRCAI0iEkQhGIgBdiI0ARJENARJIhJMNAISEURJNQVJSiJbNf8lWzX+gRBbNf2BGFs1/IAE9u2r0jT/FlA0/hZQNP0WUDT8FlCwgRGvSTX7VwARNfohGIgBKLEisgEishIhBLIQMgqyFDT8shGzMQA0/zT+NP00/DIGIiIiMgYlrzT6VwgIUDT6VxABUCJCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ0/lcAEUk18yJbNfI09DT1FlA09hZQNPcWUDT4FlA0+RZQNPoWUDT7FlEHCFA0/BZRBwhQNP0WUDT+UDT/FlA081A08hZQKUsBVwB/ZyhLAVd/DWdIJDUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIzE3EkQiNQEiNQJC/69JMRhhQAADSCuJKWKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhBBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 2,
  stateKeys: 2,
  stateSize: 140,
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
                "name": "v583",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v584",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v585",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v586",
                "type": "address"
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
                "name": "v583",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v584",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v585",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v586",
                "type": "address"
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_acceptTermsToRecDistribution0_79",
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
                    "internalType": "struct T10",
                    "name": "_depositToVault0_79",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_79",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_pressSwitch0_79",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T11",
                "name": "v729",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
        "internalType": "struct T15",
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
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1120",
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
    "name": "_reach_oe_v1289",
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
    "name": "_reach_oe_v813",
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
    "name": "_reach_oe_v970",
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
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_acceptTermsToRecDistribution0_79",
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
                    "internalType": "struct T10",
                    "name": "_depositToVault0_79",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_79",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_pressSwitch0_79",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T11",
                "name": "v729",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
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
        "internalType": "struct T15",
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
    "inputs": [],
    "name": "acceptTermsToRecDistribution",
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
    "name": "attachedTotal_v",
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
    "name": "balance_tok_v",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "depositToVault",
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
        "internalType": "address payable",
        "name": "v2012",
        "type": "address"
      }
    ],
    "name": "distrReceived_v",
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
    "name": "initDepositMade_v",
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
    "name": "optIn",
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
    "name": "pressSwitch",
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
    "name": "switchPressed_v",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002e8038038062002e8083398101604081905262000026916200061a565b60008055436003556200003862000366565b604080513381528351602080830191909152808501518051838501529081015160608084019190915281840151608084015201516001600160a01b031660a082015290517f1cd6ca450caa5bb17ef612268a37c7dd22282a38b03189d958d226f4ba5777759181900360c00190a18051600090819052815160209081018290528251604090810183905283518285018051919091528185018051949094528051518301518451909301929092529051518101519151911515910152620001013415600e620001be565b6200010b620003c1565b8051339052602083810180515183518301528051820151835160409081019190915281518101518451606090810191909152915182015184516001600160a01b0390911660809091015283514360a090910181905283850180516000908190528151860181905281518401819052905190930152918401519184015162000194929190620001e8565b6020820180516080019190915251600060a090910152620001b5816200026b565b5050506200087f565b81620001e45760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620001f262000409565b60005b60018110156200024857848160018110620002145762000214620006ce565b60200201518282600181106200022e576200022e620006ce565b6020020152806200023f81620006e4565b915050620001f5565b50818184600181106200025f576200025f620006ce565b60200201529392505050565b6200027562000456565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015181860152855160809081015190941684860152855160a0908101518187015283870180515160c08801528051850151151560e088015280518401511515610100880152805190920151610120870152815185015161014087015281510151610160860152805184015151610180860152519092015151516101a084015260036000554360015590516200033b918391016200075b565b604051602081830303815290604052600290805190602001906200036192919062000508565b505050565b6040805160c081019091526000606082018181526080830182905260a08301919091528152602081016200039962000409565b815260408051606081018252600080825260208281018290529282015291015290565b905290565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e082019290925290815260208101620003bc62000597565b60405180602001604052806001905b6200043f604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004185790505090565b604051806101c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160001515815260200160001515815260200160008152602001620004c862000409565b815260200160008152602001620004fb604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b828054620005169062000842565b90600052602060002090601f0160209004810192826200053a576000855562000585565b82601f106200055557805160ff191683800117855562000585565b8280016001018555821562000585579182015b828111156200058557825182559160200191906001019062000568565b5062000593929150620005cc565b5090565b6040518060c001604052806000815260200160001515815260200160001515815260200160008152602001620004fb62000409565b5b80821115620005935760008155600101620005cd565b604051608081016001600160401b03811182821017156200061457634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360a08112156200062e57600080fd5b604080519081016001600160401b03811182821017156200065f57634e487b7160e01b600052604160045260246000fd5b604052835181526080601f19830112156200067957600080fd5b62000683620005e3565b9150602084015182526040840151602083015260608401516040830152608084015160018060a01b0381168114620006ba57600080fd5b606083015260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200070757634e487b7160e01b600052601160045260246000fd5b5060010190565b8060005b600181101562000755576200073e84835180518252602080820151908301526040908101511515910152565b606093909301926020919091019060010162000712565b50505050565b81516001600160a01b0316815261024081016020830151602083015260408301516040830152606083015160608301526080830151620007a660808401826001600160a01b03169052565b5060a083015160a083015260c083015160c083015260e0830151620007cf60e084018215159052565b5061010083810151151590830152610120808401519083015261014080840151620007fd828501826200070e565b50506101608301516101a08381019190915261018084015180516101c085015260208101516101e0850152604001511515610200840152909201516102209091015290565b600181811c908216806200085757607f821691505b602082108114156200087957634e487b7160e01b600052602260045260246000fd5b50919050565b6125f1806200088f6000396000f3fe6080604052600436106100f65760003560e01c806373b4522c1161008f578063ab53f2c611610061578063ab53f2c61461023d578063b046229614610260578063b62d3faa14610273578063e43ffb9f14610286578063e489cd4f1461029b57005b806373b4522c146101f8578063832307571461020b57806383230c871461022057806397593cd71461023557005b806342b99026116100c857806342b99026146101965780634a1a291d146101bb5780634f53c41b146101d05780635b48684e146101f057005b8063095db0f9146100ff5780631e93b0f1146101275780633894aea51461013c5780633bc5b7bf1461016957005b366100fd57005b005b34801561010b57600080fd5b506101146102a3565b6040519081526020015b60405180910390f35b34801561013357600080fd5b50600354610114565b34801561014857600080fd5b5061015161036a565b6040516001600160a01b03909116815260200161011e565b34801561017557600080fd5b50610189610184366004611e75565b61042a565b60405161011e9190611ea8565b3480156101a257600080fd5b506101ab610441565b604051901515815260200161011e565b3480156101c757600080fd5b506101ab610504565b3480156101dc57600080fd5b506101ab6101eb366004611e75565b6105c8565b6101ab6106c6565b6100fd610206366004611ee1565b610712565b34801561021757600080fd5b50600154610114565b34801561022c57600080fd5b50610114610752565b6101ab610815565b34801561024957600080fd5b50610252610861565b60405161011e929190611f25565b6101ab61026e366004611f5f565b6108fe565b6100fd610281366004611f78565b610955565b34801561029257600080fd5b50610114610991565b6101ab610a55565b60006003600054141561035b576000600280546102bf90611f8a565b80601f01602080910402602001604051908101604052809291908181526020018280546102eb90611f8a565b80156103385780601f1061030d57610100808354040283529160200191610338565b820191906000526020600020905b81548152906001019060200180831161031b57829003601f168201915b5050505050806020019051810190610350919061214d565b6101a0015192915050565b61036760006009610a93565b90565b60006003600054141561041e5760006002805461038690611f8a565b80601f01602080910402602001604051908101604052809291908181526020018280546103b290611f8a565b80156103ff5780601f106103d4576101008083540402835291602001916103ff565b820191906000526020600020905b8154815290600101906020018083116103e257829003601f168201915b5050505050806020019051810190610417919061214d565b5192915050565b61036760006007610a93565b610432611abf565b61043b82610ab9565b92915050565b6000600360005414156104f85760006002805461045d90611f8a565b80601f016020809104026020016040519081016040528092919081815260200182805461048990611f8a565b80156104d65780601f106104ab576101008083540402835291602001916104d6565b820191906000526020600020905b8154815290600101906020018083116104b957829003601f168201915b50505050508060200190518101906104ee919061214d565b60e0015192915050565b6103676000600c610a93565b6000600360005414156105bc5760006002805461052090611f8a565b80601f016020809104026020016040519081016040528092919081815260200182805461054c90611f8a565b80156105995780601f1061056e57610100808354040283529160200191610599565b820191906000526020600020905b81548152906001019060200180831161057c57829003601f168201915b50505050508060200190518101906105b1919061214d565b610100015192915050565b6103676000600d610a93565b6000600360005414156106b5576000600280546105e490611f8a565b80601f016020809104026020016040519081016040528092919081815260200182805461061090611f8a565b801561065d5780601f106106325761010080835404028352916020019161065d565b820191906000526020600020905b81548152906001019060200180831161064057829003601f168201915b5050505050806020019051810190610675919061214d565b9050600161068284610ab9565b51600181111561069457610694611e92565b146106a05760006106ae565b6106a983610ab9565b604001515b9392505050565b6106c16000600b610a93565b919050565b60006106d0611ae2565b602081810151516002905260408051608081018252600080825292810183905290810182905260608101919091526107088282610b7c565b6040015192915050565b60408051608081018252600080825260208201819052918101829052606081019190915261074e61074836849003840184612238565b8261154c565b5050565b6000600360005414156108095760006002805461076e90611f8a565b80601f016020809104026020016040519081016040528092919081815260200182805461079a90611f8a565b80156107e75780601f106107bc576101008083540402835291602001916107e7565b820191906000526020600020905b8154815290600101906020018083116107ca57829003601f168201915b50505050508060200190518101906107ff919061214d565b60c0015192915050565b61036760006008610a93565b600061081f611ae2565b602081810151516003905260408051608081018252600080825292810183905290810182905260608101919091526108578282610b7c565b6060015192915050565b60006060600054600280805461087690611f8a565b80601f01602080910402602001604051908101604052809291908181526020018280546108a290611f8a565b80156108ef5780601f106108c4576101008083540402835291602001916108ef565b820191906000526020600020905b8154815290600101906020018083116108d257829003601f168201915b50505050509050915091509091565b6000610908611ae2565b602081810180515160019052515160409081015185905280516080810182526000808252928101839052908101829052606081019190915261094a8282610b7c565b602001519392505050565b60408051608081018252600080825260208201819052918101829052606081019190915261074e61098b3684900384018461228e565b82610b7c565b600060036000541415610a49576000600280546109ad90611f8a565b80601f01602080910402602001604051908101604052809291908181526020018280546109d990611f8a565b8015610a265780601f106109fb57610100808354040283529160200191610a26565b820191906000526020600020905b815481529060010190602001808311610a0957829003601f168201915b5050505050806020019051810190610a3e919061214d565b610160015192915050565b6103676000600a610a93565b6000610a5f611ae2565b6020818101515160009081905260408051608081018252828152928301829052820181905260608201526104178282610b7c565b8161074e5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b610ac1611abf565b60016001600160a01b03831660009081526004602052604090205460ff166001811115610af057610af0611e92565b1415610b6d576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610b3157610b31611e92565b6001811115610b4257610b42611e92565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b610b8c6003600054146027610a93565b8151610ba7901580610ba057508251600154145b6028610a93565b600080805560028054610bb990611f8a565b80601f0160208091040260200160405190810160405280929190818152602001828054610be590611f8a565b8015610c325780601f10610c0757610100808354040283529160200191610c32565b820191906000526020600020905b815481529060010190602001808311610c1557829003601f168201915b5050505050806020019051810190610c4a919061214d565b9050610c54611b01565b610c6360001943106029610a93565b7f58c467b7e5e026afd00aaee7697fd717350626bc51eece7ceb51269d89afd1b93385604051610c94929190612352565b60405180910390a16000602085015151516003811115610cb657610cb6611e92565b1415610fba57610cc83415600f610a93565b6101a0820151815152610180820180516020908101518351909101525160409081015182519015159101526101408201518151610d089190600090611746565b8160200181905250610d2a610d2333846080015160006117ba565b6010610a93565b8151610d50906001600160a01b03163314610d46576001610d49565b60005b6011610a93565b610d5f8260e001516012610a93565b610d7d826101000151610d73576001610d76565b60005b6013610a93565b610da382606001518360a00151610d9491906123d9565b83610120015110156014610a93565b610db882602001518360c00151106015610a93565b81602001518260400151610dcc91906123f1565b6040820181905260208201515151610de691106016610a93565b610e356001610df433610ab9565b516001811115610e0657610e06611e92565b14610e12576000610e20565b610e1b33610ab9565b604001515b610e2b576001610e2e565b60005b6017610a93565b604081015160208201515151610e4b9190612429565b6060820180519190915260208083018051518201518351909201919091525151604090810151915191151591810191909152608083015190820151610e92919033906117d0565b33600090815260046020908152604091829020805462ff00ff1916620100011790559051600181527f1026132a213d027116231a915566b5513ebadcb32861c1ccb6d1e73d5838790f910160405180910390a160018352610ef1611c13565b825181516001600160a01b0391821690526020808501518351909101526040808501518351909101526060808501518351909101526080808501518351921691015260a08084015182519091015260c0830151610f50906001906123d9565b6020808301805192909252815160019082015261010085015182519015156040909101529051436060918201529083015190830151610f929190600090611746565b60208201805160800191909152610160840151905160a00152610fb4816117e9565b50611546565b6001602085015151516003811115610fd457610fd4611e92565b14156111c157602084015151604001516080820152610ff534156018610a93565b6080810151516101a083015161100b91906123d9565b60a0820180519190915261018083018051602090810151835190910152516040908101519151911515910152608080830151908201515161105991611052913391906117ba565b6019610a93565b8151611071906001600160a01b03163314601a610a93565b60408201516080820151516110889114601b610a93565b6110a58260e0015161109b57600161109e565b60005b601c610a93565b6110c38261010001516110b95760016110bc565b60005b601d610a93565b6110e882606001518360a001516110da91906123d9565b83610120015110601e610a93565b604051600181527fd6095ea14af92fa06f6f63f7926a3c8dab6754003c6f84a865da73d8ab6fa4639060200160405180910390a16001602084015261112b611c13565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087015185518201526080808801518651951694019390935260a080870151855182015260c087015183860180519190915280516001940193909352610100870151835190151592019190915290514392019190915261014084015190830151610f929190600090611746565b60026020850151515160038111156111db576111db611e92565b141561131d576111ed3415601f610a93565b6101a082015160c0820180519190915261018083018051602090810151835190910152516040908101519151911515910152608082015161123c9061123590339060006117ba565b6020610a93565b604051600181527fb163b00769d080e48cb15e61e54fa6606cd8b96f0d471e3d0424423f319671d89060200160405180910390a16001604084015261127f611c13565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087015185518201526080808801518651951694019390935260a08087015185519091015260c08087015183860180519190915260e08801518151901515940193909352610100870151835190151592019190915290514392019190915261014084015190830151610f929190600090611746565b600360208501515151600381111561133757611337611e92565b14156115465761134934156021610a93565b6101a082015160e082018051919091526101808301805160209081015183519091015251604090810151825190151591015261014083015190516113909190600090611746565b8161010001819052506113b36113ac33846080015160006117ba565b6022610a93565b81516113cb906001600160a01b031633146023610a93565b6113da8260e001516024610a93565b6113f88261010001516113ee5760016113f1565b60005b6025610a93565b61141d82606001518360a0015161140f91906123d9565b836101200151106026610a93565b610100810151515161142f9080612429565b610120820180519190915261010082018051516020908101518351909101528051516040908101519251921515920191909152608083015190515151611477919033906117d0565b604051600181527f66bc7091a5a0b0b7d3c9a23ac2c12f0775e607515cc4ed0591a7e7a9b8850b8d9060200160405180910390a1600160608401526114ba611c13565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087015185518201526080808801518651951694019390935260a08087015185519091015260c08601518285018051919091528051600193018390528051909101919091525143910152610100820151610120830151610f929190600090611746565b50505050565b61155c600360005414602c610a93565b815161157790158061157057508251600154145b602d610a93565b60008080556002805461158990611f8a565b80601f01602080910402602001604051908101604052809291908181526020018280546115b590611f8a565b80156116025780601f106115d757610100808354040283529160200191611602565b820191906000526020600020905b8154815290600101906020018083116115e557829003601f168201915b505050505080602001905181019061161a919061214d565b905061162c600019431015602e610a93565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a161167f3415602a610a93565b8051611697906001600160a01b03163314602b610a93565b61169f611c13565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551820152608080870151865195169481019490945260a080870151865182015260c087015184870180519190915260e088015181519015159501949094526101008701518451901515930192909252825143910152610140850151825190930192909252610160840151905190910152611546816117e9565b61174e611c59565b60005b600181101561179a5784816001811061176c5761176c612413565b602002015182826001811061178357611783612413565b60200201528061179281612440565b915050611751565b50818184600181106117ae576117ae612413565b60200201529392505050565b60006117c8838530856118d9565b949350505050565b6117db8383836119b3565b6117e457600080fd5b505050565b6117f1611ca4565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015181860152855160809081015190941684860152855160a0908101518187015283870180515160c08801528051850151151560e088015280518401511515610100880152805190920151610120870152815185015161014087015281510151610160860152805184015151610180860152519092015151516101a084015260036000554360015590516118b59183910161249f565b604051602081830303815290604052600290805190602001906117e4929190611d53565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161194091612582565b60006040518083038185875af1925050503d806000811461197d576040519150601f19603f3d011682016040523d82523d6000602084013e611982565b606091505b509150915061199382826001611a84565b50808060200190518101906119a8919061259e565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611a1291612582565b60006040518083038185875af1925050503d8060008114611a4f576040519150601f19603f3d011682016040523d82523d6000602084013e611a54565b606091505b5091509150611a6582826002611a84565b5080806020019051810190611a7a919061259e565b9695505050505050565b60608315611a935750816106ae565b825115611aa35782518084602001fd5b60405163100960cb60e01b815260048101839052602401610ab0565b60408051606081019091528060005b815260006020820181905260409091015290565b604051806040016040528060008152602001611afc611dd7565b905290565b604080516101a08101909152600061014082018181526101608301829052610180830191909152815260208101611b36611c59565b815260200160008152602001611b68604051806060016040528060008152602001600081526020016000151581525090565b8152602001611b836040518060200160405280600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526040805160608101825260008082526020828101829052928201529101908152602001611bf0611c59565b815260408051606081018252600080825260208281018290529282015291015290565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e082019290925290815260208101611afc611dea565b60405180602001604052806001905b611c8e604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081611c685790505090565b604051806101c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160001515815260200160001515815260200160008152602001611d14611c59565b815260200160008152602001611d46604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b828054611d5f90611f8a565b90600052602060002090601f016020900481019282611d815760008555611dc7565b82601f10611d9a57805160ff1916838001178555611dc7565b82800160010185558215611dc7579182015b82811115611dc7578251825591602001919060010190611dac565b50611dd3929150611e1d565b5090565b6040518060200160405280611afc611e32565b6040518060c001604052806000815260200160001515815260200160001515815260200160008152602001611d46611c59565b5b80821115611dd35760008155600101611e1e565b6040805160a08101825260008082526020808301829052835190810184529081529091820190611ace565b6001600160a01b0381168114611e7257600080fd5b50565b600060208284031215611e8757600080fd5b81356106ae81611e5d565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110611ebf57611ebf611e92565b8083525060208301511515602083015260408301511515604083015292915050565b600060408284031215611ef357600080fd5b50919050565b60005b83811015611f14578181015183820152602001611efc565b838111156115465750506000910152565b8281526040602082015260008251806040840152611f4a816060850160208701611ef9565b601f01601f1916919091016060019392505050565b600060208284031215611f7157600080fd5b5035919050565b600060c08284031215611ef357600080fd5b600181811c90821680611f9e57607f821691505b60208210811415611ef357634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715611ff857611ff8611fbf565b60405290565b6040516101c0810167ffffffffffffffff81118282101715611ff857611ff8611fbf565b6040805190810167ffffffffffffffff81118282101715611ff857611ff8611fbf565b60405160a0810167ffffffffffffffff81118282101715611ff857611ff8611fbf565b80516106c181611e5d565b8015158114611e7257600080fd5b80516106c181612073565b60006060828403121561209e57600080fd5b6040516060810181811067ffffffffffffffff821117156120c1576120c1611fbf565b8060405250809150825181526020830151602082015260408301516120e581612073565b6040919091015292915050565b600082601f83011261210357600080fd5b61210b611fd5565b8060608085018681111561211e57600080fd5b855b8181101561214157612132888261208c565b85526020909401938201612120565b50919695505050505050565b6000610240828403121561216057600080fd5b612168611ffe565b61217183612068565b815260208301516020820152604083015160408201526060830151606082015261219d60808401612068565b608082015260a083015160a082015260c083015160c08201526121c260e08401612081565b60e08201526101006121d5818501612081565b9082015261012083810151908201526101406121f3858286016120f2565b908201526101a083810151610160830152612212856101c0860161208c565b61018083015261022084015181830152508091505092915050565b80356106c181612073565b60006040828403121561224a57600080fd5b6040516040810181811067ffffffffffffffff8211171561226d5761226d611fbf565b60405282358152602083013561228281612073565b60208201529392505050565b600081830360c08112156122a157600080fd5b6122a9612022565b8335815260a0601f19830112156122bf57600080fd5b6122c7611fd5565b6122cf612045565b6020860135600481106122e157600080fd5b815260408601356122f181612073565b806020830152506020605f198501121561230a57600080fd5b612312611fd5565b93506060860135845283604082015261232d6080870161222d565b606082015261233e60a0870161222d565b608082015281526020820152949350505050565b6001600160a01b0383168152815160208083019190915282015151805160e0830191906004811061238557612385611e92565b8060408501525060208101511515606084015260408101515160808401526060810151151560a08401526080810151151560c0840152509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156123ec576123ec6123c3565b500190565b60008261240e57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052603260045260246000fd5b60008282101561243b5761243b6123c3565b500390565b6000600019821415612454576124546123c3565b5060010190565b8060005b60018110156115465761248984835180518252602080820151908301526040908101511515910152565b606093909301926020919091019060010161245f565b81516001600160a01b03168152610240810160208301516020830152604083015160408301526060830151606083015260808301516124e960808401826001600160a01b03169052565b5060a083015160a083015260c083015160c083015260e083015161251160e084018215159052565b506101008381015115159083015261012080840151908301526101408084015161253d8285018261245b565b50506101608301516101a08381019190915261018084015180516101c085015260208101516101e0850152604001511515610200840152909201516102209091015290565b60008251612594818460208701611ef9565b9190910192915050565b6000602082840312156125b057600080fd5b81516106ae8161207356fea2646970667358221220d56dd675ce1de31ebab8acf6f5d57b81a30a06576679a96f0e1fe75b1679d9d864736f6c634300080c0033`,
  BytecodeLen: 11904,
  Which: `oD`,
  version: 7,
  views: {
    Creator_v: `Creator_v`,
    attachedTotal_v: `attachedTotal_v`,
    balance_tok_v: `balance_tok_v`,
    balance_v: `balance_v`,
    distrReceived_v: `distrReceived_v`,
    initDepositMade_v: `initDepositMade_v`,
    switchPressed_v: `switchPressed_v`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:184:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:62:86:after expr stmt semicolon',
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
  "acceptTermsToRecDistribution": acceptTermsToRecDistribution,
  "depositToVault": depositToVault,
  "optIn": optIn,
  "pressSwitch": pressSwitch
  };
export const _APIs = {
  acceptTermsToRecDistribution: acceptTermsToRecDistribution,
  depositToVault: depositToVault,
  optIn: optIn,
  pressSwitch: pressSwitch
  };
