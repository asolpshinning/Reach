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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc3, ctc3, ctc2]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc3
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      Bridger_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = svs;
            return (await ((async () => {
              
              
              return v508;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      Creator_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = svs;
            return (await ((async () => {
              
              
              return v493;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      balance_NFT_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = svs;
            return (await ((async () => {
              
              
              return v525;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      balance_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = svs;
            return (await ((async () => {
              
              
              return v514;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      bridgeAppr_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = svs;
            return (await ((async () => {
              
              
              return v509;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      lockedNFT_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = svs;
            return (await ((async () => {
              
              
              return v510;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      saved_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = svs;
            return (await ((async (_v526 ) => {
                const v526 = stdlib.protect(ctc0, _v526, null);
              
              const v527 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v526), null);
              const v528 = stdlib.fromSome(v527, stdlib.checkedBigNumberify('./index.rsh:49:45:decimal', stdlib.UInt_max, '0'));
              
              return v528;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        }
      },
    views: {
      3: [ctc0, ctc0, ctc1, ctc0, ctc2, ctc2, ctc5, ctc3, ctc4, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    Bridger: ctc3,
    NFT: ctc4
    });
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc7]);
  const ctc9 = stdlib.T_Data({
    approveBridge0_73: ctc6,
    claimNFT0_73: ctc6,
    lockNFT0_73: ctc6,
    onERC721Received0_73: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v480 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v481 = [v480];
  const v487 = 'I have deployed';
  const v488 = stdlib.protect(ctc5, await interact.getParams(v487), {
    at: './index.rsh:36:66:application',
    fs: ['at ./index.rsh:35:21:application call to [unknown function] (defined at: ./index.rsh:35:25:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v489 = v488.Bridger;
  const v490 = v488.NFT;
  
  const txn1 = await (ctc.sendrecv({
    args: [v489, v490],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:40:17:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v494, v495], secs: v497, time: v496, didSend: v33, from: v493 } = txn1;
      
      const v498 = v481[stdlib.checkedBigNumberify('./index.rsh:40:17:dot', stdlib.UInt_max, '0')];
      const v500 = v498[stdlib.checkedBigNumberify('./index.rsh:40:17:dot', stdlib.UInt_max, '1')];
      const v501 = v498[stdlib.checkedBigNumberify('./index.rsh:40:17:dot', stdlib.UInt_max, '2')];
      const v502 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v500, v501];
      const v503 = stdlib.Array_set(v481, stdlib.checkedBigNumberify('./index.rsh:40:17:dot', stdlib.UInt_max, '0'), v502);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v495
        });
      ;
      
      const v508 = v494;
      const v509 = false;
      const v510 = false;
      const v511 = v496;
      const v513 = v503;
      const v514 = stdlib.checkedBigNumberify('./index.rsh:33:15:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        const v524 = v513[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
        const v525 = v524[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v495
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
    tys: [ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v494, v495], secs: v497, time: v496, didSend: v33, from: v493 } = txn1;
  const v498 = v481[stdlib.checkedBigNumberify('./index.rsh:40:17:dot', stdlib.UInt_max, '0')];
  const v500 = v498[stdlib.checkedBigNumberify('./index.rsh:40:17:dot', stdlib.UInt_max, '1')];
  const v501 = v498[stdlib.checkedBigNumberify('./index.rsh:40:17:dot', stdlib.UInt_max, '2')];
  const v502 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v500, v501];
  const v503 = stdlib.Array_set(v481, stdlib.checkedBigNumberify('./index.rsh:40:17:dot', stdlib.UInt_max, '0'), v502);
  ;
  ;
  const v506 = 'I HAVE DEPLOYED';
  stdlib.protect(ctc0, await interact.iDeployed(v506), {
    at: './index.rsh:42:35:application',
    fs: ['at ./index.rsh:42:35:application call to [unknown function] (defined at: ./index.rsh:42:35:function exp)', 'at ./index.rsh:42:35:application call to "liftedInteract" (defined at: ./index.rsh:42:35:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  let v508 = v494;
  let v509 = false;
  let v510 = false;
  let v511 = v496;
  let v513 = v503;
  let v514 = stdlib.checkedBigNumberify('./index.rsh:33:15:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const v524 = v513[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
    const v525 = v524[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc9],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525],
        evt_cnt: 0,
        funcNum: 3,
        lct: v511,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:160:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v1096, time: v1095, didSend: v382, from: v1094 } = txn3;
          
          ;
          const cv508 = v508;
          const cv509 = v509;
          const cv510 = v510;
          const cv511 = v1095;
          const cv513 = v513;
          const cv514 = v514;
          
          await (async () => {
            const v508 = cv508;
            const v509 = cv509;
            const v510 = cv510;
            const v511 = cv511;
            const v513 = cv513;
            const v514 = cv514;
            
            if (await (async () => {
              
              return true;})()) {
              const v524 = v513[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
              const v525 = v524[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v495
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
        tys: [ctc3, ctc3, ctc4, ctc3, ctc10, ctc10, ctc12, ctc1, ctc11, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1096, time: v1095, didSend: v382, from: v1094 } = txn3;
      ;
      const v1097 = stdlib.addressEq(v493, v1094);
      stdlib.assert(v1097, {
        at: './index.rsh:160:21:dot',
        fs: ['at ./index.rsh:159:40:application call to [unknown function] (defined at: ./index.rsh:159:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv508 = v508;
      const cv509 = v509;
      const cv510 = v510;
      const cv511 = v1095;
      const cv513 = v513;
      const cv514 = v514;
      
      v508 = cv508;
      v509 = cv509;
      v510 = cv510;
      v511 = cv511;
      v513 = cv513;
      v514 = cv514;
      
      continue;
      }
    else {
      const {data: [v631], secs: v633, time: v632, didSend: v306, from: v630 } = txn2;
      switch (v631[0]) {
        case 'approveBridge0_73': {
          const v634 = v631[1];
          undefined /* setApiDetails */;
          ;
          const v684 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '1')];
          const v685 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '2')];
          const v686 = [v525, v684, v685];
          const v687 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '0'), v686);
          ;
          const v689 = stdlib.addressEq(v630, v493);
          stdlib.assert(v689, {
            at: './index.rsh:86:40:application',
            fs: ['at ./index.rsh:85:13:application call to [unknown function] (defined at: ./index.rsh:85:13:function exp)'],
            msg: 'Only Backend can approve Bridging',
            who: 'Creator'
            });
          const v690 = true;
          await txn2.getOutput('approveBridge', 'v690', ctc10, v690);
          const cv508 = v508;
          const cv509 = true;
          const cv510 = v510;
          const cv511 = v632;
          const cv513 = v687;
          const cv514 = v514;
          
          v508 = cv508;
          v509 = cv509;
          v510 = cv510;
          v511 = cv511;
          v513 = cv513;
          v514 = cv514;
          
          continue;
          break;
          }
        case 'claimNFT0_73': {
          const v749 = v631[1];
          undefined /* setApiDetails */;
          ;
          const v799 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '1')];
          const v800 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '2')];
          const v801 = [v525, v799, v800];
          const v802 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '0'), v801);
          ;
          const v813 = stdlib.addressEq(v630, v494);
          stdlib.assert(v813, {
            at: './index.rsh:133:24:application',
            fs: ['at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)'],
            msg: 'Only Bridger can claim NFT when bridging',
            who: 'Creator'
            });
          stdlib.assert(v509, {
            at: './index.rsh:134:24:application',
            fs: ['at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)'],
            msg: 'Creator/BackEnd must already approve this',
            who: 'Creator'
            });
          stdlib.assert(v510, {
            at: './index.rsh:135:24:application',
            fs: ['at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)'],
            msg: 'Bridger must have NFT to claim. None available',
            who: 'Creator'
            });
          const v816 = v802[stdlib.checkedBigNumberify('./index.rsh:136:32:application', stdlib.UInt_max, '0')];
          const v817 = v816[stdlib.checkedBigNumberify('./index.rsh:136:32:application', stdlib.UInt_max, '0')];
          const v818 = stdlib.gt(v817, stdlib.checkedBigNumberify('./index.rsh:136:40:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v818, {
            at: './index.rsh:136:24:application',
            fs: ['at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)'],
            msg: 'Bridger must have NFT to claim. None available',
            who: 'Creator'
            });
          const v824 = stdlib.sub(v817, stdlib.checkedBigNumberify('./index.rsh:137:42:decimal', stdlib.UInt_max, '1'));
          const v827 = v816[stdlib.checkedBigNumberify('./index.rsh:137:52:application', stdlib.UInt_max, '1')];
          const v828 = v816[stdlib.checkedBigNumberify('./index.rsh:137:52:application', stdlib.UInt_max, '2')];
          const v829 = [v824, v827, v828];
          const v830 = stdlib.Array_set(v802, stdlib.checkedBigNumberify('./index.rsh:137:52:application', stdlib.UInt_max, '0'), v829);
          ;
          await stdlib.mapSet(map0, v630, stdlib.checkedBigNumberify('./index.rsh:140:31:decimal', stdlib.UInt_max, '0'));
          const v831 = true;
          await txn2.getOutput('claimNFT', 'v831', ctc10, v831);
          const cv508 = v508;
          const cv509 = false;
          const cv510 = false;
          const cv511 = v632;
          const cv513 = v830;
          const cv514 = v514;
          
          v508 = cv508;
          v509 = cv509;
          v510 = cv510;
          v511 = cv511;
          v513 = cv513;
          v514 = cv514;
          
          continue;
          break;
          }
        case 'lockNFT0_73': {
          const v864 = v631[1];
          undefined /* setApiDetails */;
          ;
          const v911 = stdlib.add(v525, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v914 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '1')];
          const v915 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '2')];
          const v916 = [v911, v914, v915];
          const v917 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '0'), v916);
          ;
          const v954 = stdlib.addressEq(v630, v494);
          stdlib.assert(v954, {
            at: './index.rsh:107:24:application',
            fs: ['at ./index.rsh:106:13:application call to [unknown function] (defined at: ./index.rsh:106:13:function exp)'],
            msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
            who: 'Creator'
            });
          const v955 = v510 ? false : true;
          stdlib.assert(v955, {
            at: './index.rsh:108:24:application',
            fs: ['at ./index.rsh:106:13:application call to [unknown function] (defined at: ./index.rsh:106:13:function exp)'],
            msg: 'NFT is already locked. You can only bridge one NFT at a time',
            who: 'Creator'
            });
          await stdlib.mapSet(map0, v630, stdlib.checkedBigNumberify('./index.rsh:111:31:decimal', stdlib.UInt_max, '1'));
          const v956 = true;
          await txn2.getOutput('lockNFT', 'v956', ctc10, v956);
          const cv508 = v508;
          const cv509 = false;
          const cv510 = true;
          const cv511 = v632;
          const cv513 = v917;
          const cv514 = v514;
          
          v508 = cv508;
          v509 = cv509;
          v510 = cv510;
          v511 = cv511;
          v513 = cv513;
          v514 = cv514;
          
          continue;
          break;
          }
        case 'onERC721Received0_73': {
          const v979 = v631[1];
          undefined /* setApiDetails */;
          ;
          const v1029 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '1')];
          const v1030 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '2')];
          const v1031 = [v525, v1029, v1030];
          const v1032 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '0'), v1031);
          ;
          const v1083 = 'true';
          await txn2.getOutput('onERC721Received', 'v1083', ctc7, v1083);
          const cv508 = v508;
          const cv509 = v509;
          const cv510 = v510;
          const cv511 = v632;
          const cv513 = v1032;
          const cv514 = v514;
          
          v508 = cv508;
          v509 = cv509;
          v510 = cv510;
          v511 = cv511;
          v513 = cv513;
          v514 = cv514;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  };
export async function _approveBridge3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _approveBridge3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _approveBridge3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc9]);
  const ctc11 = stdlib.T_Data({
    approveBridge0_73: ctc8,
    claimNFT0_73: ctc8,
    lockNFT0_73: ctc8,
    onERC721Received0_73: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v533 = ctc.selfAddress();
  const v535 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:79:13:application call to [unknown function] (defined at: ./index.rsh:79:13:function exp)', 'at ./index.rsh:62:71:application call to "runapproveBridge0_73" (defined at: ./index.rsh:76:13:function exp)', 'at ./index.rsh:62:71:application call to [unknown function] (defined at: ./index.rsh:62:71:function exp)'],
    msg: 'in',
    who: 'approveBridge'
    });
  const v537 = stdlib.addressEq(v533, v493);
  stdlib.assert(v537, {
    at: './index.rsh:80:39:application',
    fs: ['at ./index.rsh:79:13:application call to [unknown function] (defined at: ./index.rsh:79:17:function exp)', 'at ./index.rsh:79:13:application call to [unknown function] (defined at: ./index.rsh:79:13:function exp)', 'at ./index.rsh:62:71:application call to "runapproveBridge0_73" (defined at: ./index.rsh:76:13:function exp)', 'at ./index.rsh:62:71:application call to [unknown function] (defined at: ./index.rsh:62:71:function exp)'],
    msg: 'Only Backend can approve Bridging',
    who: 'approveBridge'
    });
  const v540 = ['approveBridge0_73', v535];
  
  const txn1 = await (ctc.sendrecv({
    args: [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525, v540],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:83:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:83:25:decimal', stdlib.UInt_max, '0'), v495]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v631], secs: v633, time: v632, didSend: v306, from: v630 } = txn1;
      
      switch (v631[0]) {
        case 'approveBridge0_73': {
          const v634 = v631[1];
          sim_r.txns.push({
            kind: 'api',
            who: "approveBridge"
            });
          ;
          const v684 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '1')];
          const v685 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '2')];
          const v686 = [v525, v684, v685];
          const v687 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '0'), v686);
          ;
          const v690 = true;
          const v691 = await txn1.getOutput('approveBridge', 'v690', ctc5, v690);
          
          const v1654 = v508;
          const v1655 = true;
          const v1656 = v510;
          const v1658 = v687;
          const v1659 = v514;
          const v1660 = v687[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
          const v1661 = v1660[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'claimNFT0_73': {
          const v749 = v631[1];
          
          break;
          }
        case 'lockNFT0_73': {
          const v864 = v631[1];
          
          break;
          }
        case 'onERC721Received0_73': {
          const v979 = v631[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v631], secs: v633, time: v632, didSend: v306, from: v630 } = txn1;
  switch (v631[0]) {
    case 'approveBridge0_73': {
      const v634 = v631[1];
      undefined /* setApiDetails */;
      ;
      const v684 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '1')];
      const v685 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '2')];
      const v686 = [v525, v684, v685];
      const v687 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '0'), v686);
      ;
      const v689 = stdlib.addressEq(v630, v493);
      stdlib.assert(v689, {
        at: './index.rsh:86:40:application',
        fs: ['at ./index.rsh:85:13:application call to [unknown function] (defined at: ./index.rsh:85:13:function exp)'],
        msg: 'Only Backend can approve Bridging',
        who: 'approveBridge'
        });
      const v690 = true;
      const v691 = await txn1.getOutput('approveBridge', 'v690', ctc5, v690);
      if (v306) {
        stdlib.protect(ctc0, await interact.out(v634, v691), {
          at: './index.rsh:77:13:application',
          fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:13:function exp)', 'at ./index.rsh:90:20:application call to "res" (defined at: ./index.rsh:85:13:function exp)', 'at ./index.rsh:85:13:application call to [unknown function] (defined at: ./index.rsh:85:13:function exp)'],
          msg: 'out',
          who: 'approveBridge'
          });
        }
      else {
        }
      
      const v1654 = v508;
      const v1655 = true;
      const v1656 = v510;
      const v1658 = v687;
      const v1659 = v514;
      const v1660 = v687[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
      const v1661 = v1660[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'claimNFT0_73': {
      const v749 = v631[1];
      return;
      break;
      }
    case 'lockNFT0_73': {
      const v864 = v631[1];
      return;
      break;
      }
    case 'onERC721Received0_73': {
      const v979 = v631[1];
      return;
      break;
      }
    }
  
  
  };
export async function _claimNFT3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _claimNFT3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _claimNFT3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc9]);
  const ctc11 = stdlib.T_Data({
    approveBridge0_73: ctc8,
    claimNFT0_73: ctc8,
    lockNFT0_73: ctc8,
    onERC721Received0_73: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v552 = ctc.selfAddress();
  const v554 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)', 'at ./index.rsh:62:71:application call to "runclaimNFT0_73" (defined at: ./index.rsh:120:13:function exp)', 'at ./index.rsh:62:71:application call to [unknown function] (defined at: ./index.rsh:62:71:function exp)'],
    msg: 'in',
    who: 'claimNFT'
    });
  const v556 = stdlib.addressEq(v552, v494);
  stdlib.assert(v556, {
    at: './index.rsh:124:23:application',
    fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:17:function exp)', 'at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)', 'at ./index.rsh:62:71:application call to "runclaimNFT0_73" (defined at: ./index.rsh:120:13:function exp)', 'at ./index.rsh:62:71:application call to [unknown function] (defined at: ./index.rsh:62:71:function exp)'],
    msg: 'Only Bridger can claim NFT when bridging',
    who: 'claimNFT'
    });
  stdlib.assert(v509, {
    at: './index.rsh:125:23:application',
    fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:17:function exp)', 'at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)', 'at ./index.rsh:62:71:application call to "runclaimNFT0_73" (defined at: ./index.rsh:120:13:function exp)', 'at ./index.rsh:62:71:application call to [unknown function] (defined at: ./index.rsh:62:71:function exp)'],
    msg: 'Creator/BackEnd must already approve this',
    who: 'claimNFT'
    });
  stdlib.assert(v510, {
    at: './index.rsh:126:23:application',
    fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:17:function exp)', 'at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)', 'at ./index.rsh:62:71:application call to "runclaimNFT0_73" (defined at: ./index.rsh:120:13:function exp)', 'at ./index.rsh:62:71:application call to [unknown function] (defined at: ./index.rsh:62:71:function exp)'],
    msg: 'Bridger must have NFT to claim. None available',
    who: 'claimNFT'
    });
  const v561 = stdlib.gt(v525, stdlib.checkedBigNumberify('./index.rsh:127:39:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v561, {
    at: './index.rsh:127:23:application',
    fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:17:function exp)', 'at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)', 'at ./index.rsh:62:71:application call to "runclaimNFT0_73" (defined at: ./index.rsh:120:13:function exp)', 'at ./index.rsh:62:71:application call to [unknown function] (defined at: ./index.rsh:62:71:function exp)'],
    msg: 'Bridger must have NFT to claim. None available',
    who: 'claimNFT'
    });
  const v564 = ['claimNFT0_73', v554];
  
  const txn1 = await (ctc.sendrecv({
    args: [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525, v564],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:130:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:130:25:decimal', stdlib.UInt_max, '0'), v495]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v631], secs: v633, time: v632, didSend: v306, from: v630 } = txn1;
      
      switch (v631[0]) {
        case 'approveBridge0_73': {
          const v634 = v631[1];
          
          break;
          }
        case 'claimNFT0_73': {
          const v749 = v631[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimNFT"
            });
          ;
          const v799 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '1')];
          const v800 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '2')];
          const v801 = [v525, v799, v800];
          const v802 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '0'), v801);
          ;
          const v816 = v802[stdlib.checkedBigNumberify('./index.rsh:136:32:application', stdlib.UInt_max, '0')];
          const v817 = v816[stdlib.checkedBigNumberify('./index.rsh:136:32:application', stdlib.UInt_max, '0')];
          const v824 = stdlib.sub(v817, stdlib.checkedBigNumberify('./index.rsh:137:42:decimal', stdlib.UInt_max, '1'));
          const v827 = v816[stdlib.checkedBigNumberify('./index.rsh:137:52:application', stdlib.UInt_max, '1')];
          const v828 = v816[stdlib.checkedBigNumberify('./index.rsh:137:52:application', stdlib.UInt_max, '2')];
          const v829 = [v824, v827, v828];
          const v830 = stdlib.Array_set(v802, stdlib.checkedBigNumberify('./index.rsh:137:52:application', stdlib.UInt_max, '0'), v829);
          sim_r.txns.push({
            kind: 'from',
            to: v630,
            tok: v495
            });
          await stdlib.simMapSet(sim_r, 0, v630, stdlib.checkedBigNumberify('./index.rsh:140:31:decimal', stdlib.UInt_max, '0'));
          const v831 = true;
          const v832 = await txn1.getOutput('claimNFT', 'v831', ctc5, v831);
          
          const v1704 = v508;
          const v1705 = false;
          const v1706 = false;
          const v1708 = v830;
          const v1709 = v514;
          const v1710 = v830[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
          const v1711 = v1710[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'lockNFT0_73': {
          const v864 = v631[1];
          
          break;
          }
        case 'onERC721Received0_73': {
          const v979 = v631[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v631], secs: v633, time: v632, didSend: v306, from: v630 } = txn1;
  switch (v631[0]) {
    case 'approveBridge0_73': {
      const v634 = v631[1];
      return;
      break;
      }
    case 'claimNFT0_73': {
      const v749 = v631[1];
      undefined /* setApiDetails */;
      ;
      const v799 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '1')];
      const v800 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '2')];
      const v801 = [v525, v799, v800];
      const v802 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '0'), v801);
      ;
      const v813 = stdlib.addressEq(v630, v494);
      stdlib.assert(v813, {
        at: './index.rsh:133:24:application',
        fs: ['at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)'],
        msg: 'Only Bridger can claim NFT when bridging',
        who: 'claimNFT'
        });
      stdlib.assert(v509, {
        at: './index.rsh:134:24:application',
        fs: ['at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)'],
        msg: 'Creator/BackEnd must already approve this',
        who: 'claimNFT'
        });
      stdlib.assert(v510, {
        at: './index.rsh:135:24:application',
        fs: ['at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)'],
        msg: 'Bridger must have NFT to claim. None available',
        who: 'claimNFT'
        });
      const v816 = v802[stdlib.checkedBigNumberify('./index.rsh:136:32:application', stdlib.UInt_max, '0')];
      const v817 = v816[stdlib.checkedBigNumberify('./index.rsh:136:32:application', stdlib.UInt_max, '0')];
      const v818 = stdlib.gt(v817, stdlib.checkedBigNumberify('./index.rsh:136:40:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v818, {
        at: './index.rsh:136:24:application',
        fs: ['at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)'],
        msg: 'Bridger must have NFT to claim. None available',
        who: 'claimNFT'
        });
      const v824 = stdlib.sub(v817, stdlib.checkedBigNumberify('./index.rsh:137:42:decimal', stdlib.UInt_max, '1'));
      const v827 = v816[stdlib.checkedBigNumberify('./index.rsh:137:52:application', stdlib.UInt_max, '1')];
      const v828 = v816[stdlib.checkedBigNumberify('./index.rsh:137:52:application', stdlib.UInt_max, '2')];
      const v829 = [v824, v827, v828];
      const v830 = stdlib.Array_set(v802, stdlib.checkedBigNumberify('./index.rsh:137:52:application', stdlib.UInt_max, '0'), v829);
      ;
      await stdlib.mapSet(map0, v630, stdlib.checkedBigNumberify('./index.rsh:140:31:decimal', stdlib.UInt_max, '0'));
      const v831 = true;
      const v832 = await txn1.getOutput('claimNFT', 'v831', ctc5, v831);
      if (v306) {
        stdlib.protect(ctc0, await interact.out(v749, v832), {
          at: './index.rsh:121:13:application',
          fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:13:function exp)', 'at ./index.rsh:143:20:application call to "res" (defined at: ./index.rsh:132:13:function exp)', 'at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)'],
          msg: 'out',
          who: 'claimNFT'
          });
        }
      else {
        }
      
      const v1704 = v508;
      const v1705 = false;
      const v1706 = false;
      const v1708 = v830;
      const v1709 = v514;
      const v1710 = v830[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
      const v1711 = v1710[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'lockNFT0_73': {
      const v864 = v631[1];
      return;
      break;
      }
    case 'onERC721Received0_73': {
      const v979 = v631[1];
      return;
      break;
      }
    }
  
  
  };
export async function _lockNFT3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _lockNFT3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _lockNFT3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc9]);
  const ctc11 = stdlib.T_Data({
    approveBridge0_73: ctc8,
    claimNFT0_73: ctc8,
    lockNFT0_73: ctc8,
    onERC721Received0_73: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v542 = ctc.selfAddress();
  const v544 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)', 'at ./index.rsh:62:71:application call to "runlockNFT0_73" (defined at: ./index.rsh:96:13:function exp)', 'at ./index.rsh:62:71:application call to [unknown function] (defined at: ./index.rsh:62:71:function exp)'],
    msg: 'in',
    who: 'lockNFT'
    });
  const v546 = stdlib.addressEq(v542, v494);
  stdlib.assert(v546, {
    at: './index.rsh:100:23:application',
    fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:17:function exp)', 'at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)', 'at ./index.rsh:62:71:application call to "runlockNFT0_73" (defined at: ./index.rsh:96:13:function exp)', 'at ./index.rsh:62:71:application call to [unknown function] (defined at: ./index.rsh:62:71:function exp)'],
    msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
    who: 'lockNFT'
    });
  const v547 = v510 ? false : true;
  stdlib.assert(v547, {
    at: './index.rsh:101:23:application',
    fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:17:function exp)', 'at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)', 'at ./index.rsh:62:71:application call to "runlockNFT0_73" (defined at: ./index.rsh:96:13:function exp)', 'at ./index.rsh:62:71:application call to [unknown function] (defined at: ./index.rsh:62:71:function exp)'],
    msg: 'NFT is already locked. You can only bridge one NFT at a time',
    who: 'lockNFT'
    });
  const v550 = ['lockNFT0_73', v544];
  
  const txn1 = await (ctc.sendrecv({
    args: [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525, v550],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:104:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:104:25:decimal', stdlib.UInt_max, '1'), v495]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v631], secs: v633, time: v632, didSend: v306, from: v630 } = txn1;
      
      switch (v631[0]) {
        case 'approveBridge0_73': {
          const v634 = v631[1];
          
          break;
          }
        case 'claimNFT0_73': {
          const v749 = v631[1];
          
          break;
          }
        case 'lockNFT0_73': {
          const v864 = v631[1];
          sim_r.txns.push({
            kind: 'api',
            who: "lockNFT"
            });
          ;
          const v911 = stdlib.add(v525, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v914 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '1')];
          const v915 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '2')];
          const v916 = [v911, v914, v915];
          const v917 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '0'), v916);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v495
            });
          await stdlib.simMapSet(sim_r, 0, v630, stdlib.checkedBigNumberify('./index.rsh:111:31:decimal', stdlib.UInt_max, '1'));
          const v956 = true;
          const v957 = await txn1.getOutput('lockNFT', 'v956', ctc5, v956);
          
          const v1754 = v508;
          const v1755 = false;
          const v1756 = true;
          const v1758 = v917;
          const v1759 = v514;
          const v1760 = v917[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
          const v1761 = v1760[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'onERC721Received0_73': {
          const v979 = v631[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v631], secs: v633, time: v632, didSend: v306, from: v630 } = txn1;
  switch (v631[0]) {
    case 'approveBridge0_73': {
      const v634 = v631[1];
      return;
      break;
      }
    case 'claimNFT0_73': {
      const v749 = v631[1];
      return;
      break;
      }
    case 'lockNFT0_73': {
      const v864 = v631[1];
      undefined /* setApiDetails */;
      ;
      const v911 = stdlib.add(v525, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v914 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '1')];
      const v915 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '2')];
      const v916 = [v911, v914, v915];
      const v917 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '0'), v916);
      ;
      const v954 = stdlib.addressEq(v630, v494);
      stdlib.assert(v954, {
        at: './index.rsh:107:24:application',
        fs: ['at ./index.rsh:106:13:application call to [unknown function] (defined at: ./index.rsh:106:13:function exp)'],
        msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
        who: 'lockNFT'
        });
      const v955 = v510 ? false : true;
      stdlib.assert(v955, {
        at: './index.rsh:108:24:application',
        fs: ['at ./index.rsh:106:13:application call to [unknown function] (defined at: ./index.rsh:106:13:function exp)'],
        msg: 'NFT is already locked. You can only bridge one NFT at a time',
        who: 'lockNFT'
        });
      await stdlib.mapSet(map0, v630, stdlib.checkedBigNumberify('./index.rsh:111:31:decimal', stdlib.UInt_max, '1'));
      const v956 = true;
      const v957 = await txn1.getOutput('lockNFT', 'v956', ctc5, v956);
      if (v306) {
        stdlib.protect(ctc0, await interact.out(v864, v957), {
          at: './index.rsh:97:13:application',
          fs: ['at ./index.rsh:97:13:application call to [unknown function] (defined at: ./index.rsh:97:13:function exp)', 'at ./index.rsh:114:20:application call to "res" (defined at: ./index.rsh:106:13:function exp)', 'at ./index.rsh:106:13:application call to [unknown function] (defined at: ./index.rsh:106:13:function exp)'],
          msg: 'out',
          who: 'lockNFT'
          });
        }
      else {
        }
      
      const v1754 = v508;
      const v1755 = false;
      const v1756 = true;
      const v1758 = v917;
      const v1759 = v514;
      const v1760 = v917[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
      const v1761 = v1760[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'onERC721Received0_73': {
      const v979 = v631[1];
      return;
      break;
      }
    }
  
  
  };
export async function _onERC721Received3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _onERC721Received3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _onERC721Received3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc9 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc8]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    approveBridge0_73: ctc10,
    claimNFT0_73: ctc10,
    lockNFT0_73: ctc10,
    onERC721Received0_73: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v568 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)', 'at ./index.rsh:62:71:application call to "runonERC721Received0_73" (defined at: ./index.rsh:147:13:function exp)', 'at ./index.rsh:62:71:application call to [unknown function] (defined at: ./index.rsh:62:71:function exp)'],
    msg: 'in',
    who: 'onERC721Received'
    });
  const v584 = ['onERC721Received0_73', v568];
  
  const txn1 = await (ctc.sendrecv({
    args: [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525, v584],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:152:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:152:33:decimal', stdlib.UInt_max, '0'), v495]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v631], secs: v633, time: v632, didSend: v306, from: v630 } = txn1;
      
      switch (v631[0]) {
        case 'approveBridge0_73': {
          const v634 = v631[1];
          
          break;
          }
        case 'claimNFT0_73': {
          const v749 = v631[1];
          
          break;
          }
        case 'lockNFT0_73': {
          const v864 = v631[1];
          
          break;
          }
        case 'onERC721Received0_73': {
          const v979 = v631[1];
          sim_r.txns.push({
            kind: 'api',
            who: "onERC721Received"
            });
          ;
          const v1029 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '1')];
          const v1030 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '2')];
          const v1031 = [v525, v1029, v1030];
          const v1032 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '0'), v1031);
          ;
          const v1083 = 'true';
          const v1084 = await txn1.getOutput('onERC721Received', 'v1083', ctc8, v1083);
          
          const v1804 = v508;
          const v1805 = v509;
          const v1806 = v510;
          const v1808 = v1032;
          const v1809 = v514;
          const v1810 = v1032[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
          const v1811 = v1810[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v631], secs: v633, time: v632, didSend: v306, from: v630 } = txn1;
  switch (v631[0]) {
    case 'approveBridge0_73': {
      const v634 = v631[1];
      return;
      break;
      }
    case 'claimNFT0_73': {
      const v749 = v631[1];
      return;
      break;
      }
    case 'lockNFT0_73': {
      const v864 = v631[1];
      return;
      break;
      }
    case 'onERC721Received0_73': {
      const v979 = v631[1];
      undefined /* setApiDetails */;
      ;
      const v1029 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '1')];
      const v1030 = v524[stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '2')];
      const v1031 = [v525, v1029, v1030];
      const v1032 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./index.rsh:62:71:dot', stdlib.UInt_max, '0'), v1031);
      ;
      const v1083 = 'true';
      const v1084 = await txn1.getOutput('onERC721Received', 'v1083', ctc8, v1083);
      if (v306) {
        stdlib.protect(ctc0, await interact.out(v979, v1084), {
          at: './index.rsh:148:13:application',
          fs: ['at ./index.rsh:148:13:application call to [unknown function] (defined at: ./index.rsh:148:13:function exp)', 'at ./index.rsh:155:20:application call to "res" (defined at: ./index.rsh:154:13:function exp)', 'at ./index.rsh:154:13:application call to [unknown function] (defined at: ./index.rsh:154:13:function exp)'],
          msg: 'out',
          who: 'onERC721Received'
          });
        }
      else {
        }
      
      const v1804 = v508;
      const v1805 = v509;
      const v1806 = v510;
      const v1808 = v1032;
      const v1809 = v514;
      const v1810 = v1032[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
      const v1811 = v1810[stdlib.checkedBigNumberify('./index.rsh:70:48:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    }
  
  
  };
export async function approveBridge(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for approveBridge expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for approveBridge expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _approveBridge3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function claimNFT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claimNFT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claimNFT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _claimNFT3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function lockNFT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for lockNFT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for lockNFT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _lockNFT3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function onERC721Received(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for onERC721Received expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for onERC721Received expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _onERC721Received3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`approveBridge()byte`, `claimNFT()byte`, `lockNFT()byte`, `onERC721Received(address,address,uint64,byte[4])byte[4]`],
    pure: [`Bridger_v()address`, `Creator_v()address`, `balance_NFT_v()uint64`, `balance_v()uint64`, `bridgeAppr_v()byte`, `lockedNFT_v()byte`, `saved_v(address)uint64`],
    sigs: [`Bridger_v()address`, `Creator_v()address`, `approveBridge()byte`, `balance_NFT_v()uint64`, `balance_v()uint64`, `bridgeAppr_v()byte`, `claimNFT()byte`, `lockNFT()byte`, `lockedNFT_v()byte`, `onERC721Received(address,address,uint64,byte[4])byte[4]`, `saved_v(address)uint64`]
    },
  appApproval: `BiAWAAEDTAQICf62i6oH7vXeqQrZ0ISjC56inrQMucDN+wet+PWVCKaJr9cCnMmS8QPI1t6XBrDEzIMBAv///////////wFAe6CNBiYDAQABAQAiNQAxGEEE4SpkSSJbNQEhBVs1AjEZIxJBAAoxACghBq9mQgStNhoAF0lBAVgiNQQjNQZJIQcMQACqSSEIDEAAWkkhCQxAAEBJIQoMQAAZIQoSRDQBJBJEKGQpZFBJNQNXACA1B0IEeSEJEkQ0ASQSRCI2GgGIBI5JNf8jWzT/IlVNFjUHQgRZIQgSRCo1/4ABAjT/UCWvUEIBZEkhCwxAADFJIQwMQAARIQwSRCo1/yk0/1Alr1BCAUUhCxJENAEkEkQoZClkUEk1A1dIIDUHQgQOIQcSRCo1/yg0/1Alr1BCARtJIQ0MQABZSSEODEAAOUkhDwxAABkhDxJENAEkEkQoZClkUEk1A1eUCDUHQgPPIQ4SRDQBJBJEKGQpZFBJNQNXaAE1B0IDtiENEkQ0ASQSRChkKWRQSTUDV3sINQdCA51JIRAMQAAeIRASRDYaATYaAlA2GgNQNhoEUDX/gAEDNP9QQgCWgf3whT0SRDQBJBJEKGQpZFBJNQNXaQE1B0IDXDYaAhc1BDYaAzYaARdJIREMQAIqSSQMQABfJBJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABKdlxLSwMgYhEg9ENP8xABJENP80A1cgIDQDIRNbNANXSCA0A1doARc0A1dpARcyBjQDV2oRNAMhFFtCAjxIJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSkpXACA1/1cgIDX+IRNbNf1XSCA1/FdoARc1+1dpARc1+ldqETX5IRRbNfhXgxE194GUAVs19kk1BTX1gARgVjLXNPVQsDIGIRIMRDT1IlVJIREMQACTSSQMQAA8JBJEgAwAAAAAAAAEO3RydWWwgAR0cnVlNQc0/zT+NP00/DT7NPoyBjT2FjT3VwgIUDT3VxABUDT4QgGHSCM0/YgCczEANP4SRDT6FEQxACiACQEAAAAAAAAAAWaACQAAAAAAAAO8AbApNQc0/zT+NP00/CIjMgY09iMIFjT3VwgIUDT3VxABUDT4QgE2SSMMQACCSDT2FjT3VwgIUDT3VxABUDX0MQA0/hJENPtENPpENPRXABFJNfMiW0k18iINRLEisgEjshIhBLIQMQCyFDT9shGzMQAogAkBAAAAAAAAAABmgAkAAAAAAAADPwGwKTUHNP80/jT9NPwiIjIGNPIjCRY081cICFA081cQAVA0+EIArkgxADT/EkSACQAAAAAAAAKyAbApNQc0/zT+NP00/CM0+jIGNPYWNPdXCAhQNPdXEAFQNPhCAHciEkQhFYgBSiI0ARJENARJIhJMNAISEURJNQVJVwAgNf+BIFs1/oAE2emxyjT/UDT+FlCwgRGvSTX9VwARNfwhFYgBDrEisgEishIhBLIQMgqyFDT+shGzMQA0/zT+NP8iIjIGIQWvNPxXCAhQNPxXEAFQIkIAADX/Nf41/TX8Nfs1+jX5Nfg19zT+VwARSTX2Ils19TT3NPhQNPkWUDT6UDT7FlEHCFA0/BZRBwhQNP5QNP8WUDT2UDT1FlAoSwFXAH9nKUsBV38dZ0gkNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQjMTcSRCI1ASI1AkL/r0kxGGFAAAVIIQaviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 2,
  stateSize: 156,
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
                "internalType": "address payable",
                "name": "v494",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v495",
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
                "internalType": "address payable",
                "name": "v494",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v495",
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
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_approveBridge0_73",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimNFT0_73",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_lockNFT0_73",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes4",
                            "name": "elem0",
                            "type": "bytes4"
                          }
                        ],
                        "internalType": "struct T10",
                        "name": "elem3",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_onERC721Received0_73",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T12",
                "name": "v631",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
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
        "internalType": "struct T16",
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
        "components": [
          {
            "internalType": "bytes4",
            "name": "elem0",
            "type": "bytes4"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1083",
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
    "name": "_reach_oe_v690",
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
    "name": "_reach_oe_v831",
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
    "name": "_reach_oe_v956",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Bridger_v",
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_approveBridge0_73",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimNFT0_73",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_lockNFT0_73",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes4",
                            "name": "elem0",
                            "type": "bytes4"
                          }
                        ],
                        "internalType": "struct T10",
                        "name": "elem3",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_onERC721Received0_73",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T12",
                "name": "v631",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
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
        "internalType": "struct T16",
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
    "name": "approveBridge",
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
    "name": "bridgeAppr_v",
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
    "name": "claimNFT",
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
    "name": "lockNFT",
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
    "name": "lockedNFT_v",
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
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "_a1",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_a2",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "bytes4",
            "name": "elem0",
            "type": "bytes4"
          }
        ],
        "internalType": "struct T10",
        "name": "_a3",
        "type": "tuple"
      }
    ],
    "name": "onERC721Received",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes4",
            "name": "elem0",
            "type": "bytes4"
          }
        ],
        "internalType": "struct T10",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v1820",
        "type": "address"
      }
    ],
    "name": "saved_v",
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
  Bytecode: `0x608060405260405162002bc138038062002bc18339810160408190526200002691620005a2565b6000805543600355620000386200030f565b6040805133815283516020808301919091528085015180516001600160a01b039081168486015291015116606082015290517f7ef2bbfb2ea024d26186c284a79cb0c0f7ce810d4811d99d5fe360d4533f50fb9181900360800190a18051600090819052815160209081018290528251604090810183905283518285018051919091528185018051949094528051518301518451909301929092529051518101519151911515910152620000ef3415600e6200018d565b620000f96200036a565b8051339052602080840180515183516001600160a01b039182169084015281518301518451908216604091820152915151838501805191909216905280516000908401819052815183018190529051436060909101529184015190840151620001639290620001b7565b6020820180516080019190915251600060a09091015262000184816200023a565b505050620007c8565b81620001b35760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620001c16200039c565b60005b60018110156200021757848160018110620001e357620001e362000617565b6020020151828260018110620001fd57620001fd62000617565b6020020152806200020e816200062d565b915050620001c4565b50818184600181106200022e576200022e62000617565b60200201529392505050565b62000244620003e9565b8151516001600160a01b039081168252825160209081015182168184015283516040908101518316818501528185018051519093166060850152825182015115156080808601919091528351820151151560a080870191909152845182015160c08701528451015160e086015283518101515161010086015292519092015151516101208401526003600055436001559051620002e491839101620006a4565b604051602081830303815290604052600290805190602001906200030a9291906200046a565b505050565b6040805160c081019091526000606082018181526080830182905260a0830191909152815260208101620003426200039c565b815260408051606081018252600080825260208281018290529282015291015290565b905290565b6040805160a08101825260009181018281526060820183905260808201929092529081526020810162000365620004f9565b60405180602001604052806001905b620003d2604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003ab5790505090565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915260c081016200042a6200039c565b8152602001600081526020016200045d604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b82805462000478906200078b565b90600052602060002090601f0160209004810192826200049c5760008555620004e7565b82601f10620004b757805160ff1916838001178555620004e7565b82800160010185558215620004e7579182015b82811115620004e7578251825591602001919060010190620004ca565b50620004f592915062000537565b5090565b6040518060c0016040528060006001600160a01b03168152602001600015158152602001600015158152602001600081526020016200045d6200039c565b5b80821115620004f5576000815560010162000538565b604080519081016001600160401b03811182821017156200057f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200059d57600080fd5b919050565b60008183036060811215620005b657600080fd5b620005c06200054e565b835181526040601f1983011215620005d757600080fd5b620005e16200054e565b9150620005f16020850162000585565b8252620006016040850162000585565b6020830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200065057634e487b7160e01b600052601160045260246000fd5b5060010190565b8060005b60018110156200069e576200068784835180518252602080820151908301526040908101511515910152565b60609390930192602091909101906001016200065b565b50505050565b81516001600160a01b031681526101c081016020830151620006d160208401826001600160a01b03169052565b506040830151620006ed60408401826001600160a01b03169052565b5060608301516200070960608401826001600160a01b03169052565b5060808301516200071e608084018215159052565b5060a08301516200073360a084018215159052565b5060c08301516200074860c084018262000657565b5060e08301516101208381019190915261010084015180516101408501526020810151610160850152604001511515610180840152909201516101a09091015290565b600181811c90821680620007a057607f821691505b60208210811415620007c257634e487b7160e01b600052602260045260246000fd5b50919050565b6123e980620007d86000396000f3fe6080604052600436106100f65760003560e01c806373b4522c1161008f578063b03011ff11610061578063b03011ff1461025c578063bee2660914610271578063d2b339bd14610279578063d76a47691461028e578063e43ffb9f146102a357005b806373b4522c146101fc578063819938fc1461020f5780638323075714610224578063ab53f2c61461023957005b80633a3dbe72116100c85780633a3dbe721461017b5780633bc5b7bf1461019b57806343460b1c146101c8578063672756ad146101f457005b80631844d9c8146100ff5780631e93b0f11461011c57806326db6d731461013b5780633894aea51461014e57005b366100fd57005b005b6101076102b8565b60405190151581526020015b60405180910390f35b34801561012857600080fd5b506003545b604051908152602001610113565b6100fd610149366004611b76565b6102e5565b34801561015a57600080fd5b50610163610309565b6040516001600160a01b039091168152602001610113565b34801561018757600080fd5b5061012d610196366004611ba7565b6103c5565b3480156101a757600080fd5b506101bb6101b6366004611ba7565b6104c3565b6040516101139190611bda565b6101db6101d6366004611d38565b6104ef565b60405190516001600160e01b0319168152602001610113565b61010761056e565b6100fd61020a366004611d8a565b61059e565b34801561021b57600080fd5b506101636105be565b34801561023057600080fd5b5060015461012d565b34801561024557600080fd5b5061024e610681565b604051610113929190611dc8565b34801561026857600080fd5b5061010761071e565b6101076107e1565b34801561028557600080fd5b5061012d610811565b34801561029a57600080fd5b506101076108d5565b3480156102af57600080fd5b5061012d610998565b60006102c261180b565b602081015151600090526102d461182a565b6102de8282610a5b565b5192915050565b6102ed61182a565b6103056102ff36849003840184611e10565b82610a5b565b5050565b6000600360005414156103b65760006002805461032590611f16565b80601f016020809104026020016040519081016040528092919081815260200182805461035190611f16565b801561039e5780601f106103735761010080835404028352916020019161039e565b820191906000526020600020905b81548152906001019060200180831161038157829003601f168201915b50505050508060200190518101906102de9190612022565b6103c2600060086111e5565b90565b6000600360005414156104b2576000600280546103e190611f16565b80601f016020809104026020016040519081016040528092919081815260200182805461040d90611f16565b801561045a5780601f1061042f5761010080835404028352916020019161045a565b820191906000526020600020905b81548152906001019060200180831161043d57829003601f168201915b50505050508060200190518101906104729190612022565b9050600161047f8461120b565b51600181111561049157610491611bc4565b1461049d5760006104ab565b6104a68361120b565b604001515b9392505050565b6104be6000600d6111e5565b919050565b60408051606081018252600080825260208201819052918101919091526104e98261120b565b92915050565b60408051602081019091526000815261050661180b565b6020818101805151600390528051516080908101516001600160a01b038a81169091528251518201519089169301929092528051518201516040018690525151015160600183905261055661182a565b6105608282610a5b565b606001519695505050505050565b600061057861180b565b6020810151516001905261058a61182a565b6105948282610a5b565b6020015192915050565b6105a661182a565b6103056105b8368490038401846120e4565b826112dd565b600060036000541415610675576000600280546105da90611f16565b80601f016020809104026020016040519081016040528092919081815260200182805461060690611f16565b80156106535780601f1061062857610100808354040283529160200191610653565b820191906000526020600020905b81548152906001019060200180831161063657829003601f168201915b505050505080602001905181019061066b9190612022565b6060015192915050565b6103c2600060076111e5565b60006060600054600280805461069690611f16565b80601f01602080910402602001604051908101604052809291908181526020018280546106c290611f16565b801561070f5780601f106106e45761010080835404028352916020019161070f565b820191906000526020600020905b8154815290600101906020018083116106f257829003601f168201915b50505050509050915091509091565b6000600360005414156107d55760006002805461073a90611f16565b80601f016020809104026020016040519081016040528092919081815260200182805461076690611f16565b80156107b35780601f10610788576101008083540402835291602001916107b3565b820191906000526020600020905b81548152906001019060200180831161079657829003601f168201915b50505050508060200190518101906107cb9190612022565b6080015192915050565b6103c26000600b6111e5565b60006107eb61180b565b602081015151600290526107fd61182a565b6108078282610a5b565b6040015192915050565b6000600360005414156108c95760006002805461082d90611f16565b80601f016020809104026020016040519081016040528092919081815260200182805461085990611f16565b80156108a65780601f1061087b576101008083540402835291602001916108a6565b820191906000526020600020905b81548152906001019060200180831161088957829003601f168201915b50505050508060200190518101906108be9190612022565b610120015192915050565b6103c2600060096111e5565b60006003600054141561098c576000600280546108f190611f16565b80601f016020809104026020016040519081016040528092919081815260200182805461091d90611f16565b801561096a5780601f1061093f5761010080835404028352916020019161096a565b820191906000526020600020905b81548152906001019060200180831161094d57829003601f168201915b50505050508060200190518101906109829190612022565b60a0015192915050565b6103c26000600c6111e5565b600060036000541415610a4f576000600280546109b490611f16565b80601f01602080910402602001604051908101604052809291908181526020018280546109e090611f16565b8015610a2d5780601f10610a0257610100808354040283529160200191610a2d565b820191906000526020600020905b815481529060010190602001808311610a1057829003601f168201915b5050505050806020019051810190610a459190612022565b60e0015192915050565b6103c26000600a6111e5565b610a6b600360005414601e6111e5565b8151610a86901580610a7f57508251600154145b601f6111e5565b600080805560028054610a9890611f16565b80601f0160208091040260200160405190810160405280929190818152602001828054610ac490611f16565b8015610b115780601f10610ae657610100808354040283529160200191610b11565b820191906000526020600020905b815481529060010190602001808311610af457829003601f168201915b5050505050806020019051810190610b299190612022565b9050610b3361185a565b610b42600019431060206111e5565b7f255e12bbcf231c7f27e3b80ff0f7d4b1256e182ecb734d2871c175682a3be7b03385604051610b7392919061213a565b60405180910390a16000602085015151516003811115610b9557610b95611bc4565b1415610cde57610ba73415600f6111e5565b6101208201518151526101008201805160209081015183519091015251604090810151825190151590820152820151610bee90610be790339060006114b8565b60106111e5565b8151610c06906001600160a01b0316331460116111e5565b604051600181527fa38b52b4112b24cd7a7d882f0cbaa49ae74f7640a90ea44c839361aeb564eec29060200160405180910390a160018352610c46611923565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015183860180519190951690528351600193019290925260a0860151835190151591015290514391015260c08301518251610cb791906000906114ce565b6020820180516080019190915260e0840151905160a00152610cd881611542565b506111df565b6001602085015151516003811115610cf857610cf8611bc4565b1415610ee657610d0a341560126111e5565b61012082015160208083018051929092526101008401805182015183519092019190915251604090810151825190151591015260c08301519051610d5191906000906114ce565b8160400181905250610d73610d6c33846040015160006114b8565b60136111e5565b610d9682602001516001600160a01b0316336001600160a01b03161460146111e5565b610da5826080015160156111e5565b610db48260a0015160166111e5565b60408101515151610dc890151560176111e5565b60408101515151610ddb9060019061220c565b6060820180519190915260408083018051516020908101518451909101525151810151915191151591810191909152820151610e1990336001611611565b336000908152600460209081526040808320805460ff19166001908117825590810193909355519182527fedb4021e01e858673bbac4654ea433b3cdcd0d45002d5d83aaf1f8c7d603de3a910160405180910390a160016020840152610e7d611923565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518386018051919095169052835160009301839052835182018390529251439084015284015191840151610cb79291906114ce565b6002602085015151516003811115610f0057610f00611bc4565b141561108457610f12341560186111e5565b6001826101200151610f249190612223565b608082018051919091526101008301805160209081015183519091015251604090810151915191151591810191909152820151610f6f90610f6890339060016114b8565b60196111e5565b610f9282602001516001600160a01b0316336001600160a01b031614601a6111e5565b610faf8260a00151610fa5576001610fa8565b60005b601b6111e5565b33600090815260046020908152604091829020805460ff19166001908117825590810181905591519182527f08fb0ee4e78312e9032ac0feb1e35541a504a1771ca76152e4a539681e17bbd1910160405180910390a160016040840152611014611923565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015183860180519190951690528351600093018390528351600192019190915291514392019190915260c08401516080840151610cb792906114ce565b600360208501515151600381111561109e5761109e611bc4565b14156111df576110b03415601c6111e5565b61012082015160a082018051919091526101008301805160209081015183519091015251604090810151915191151591810191909152820151611101906110fa90339060006114b8565b601d6111e5565b60c081018051637472756560e01b90525160405190516001600160e01b03191681527f89834ee5232c822e3e8c52c2d134c58bef33aa1ab7219315487f2f760ea65ee99060200160405180910390a160c08101516060840152611162611923565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015183860180519190951690526080870151845190151593019290925260a080870151845190151592019190915291514391015260c084015190830151610cb791906000906114ce565b50505050565b816103055760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561125757611257611bc4565b14156112ce576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561129857611298611bc4565b60018111156112a9576112a9611bc4565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6112ed60036000541460236111e5565b815161130890158061130157508251600154145b60246111e5565b60008080556002805461131a90611f16565b80601f016020809104026020016040519081016040528092919081815260200182805461134690611f16565b80156113935780601f1061136857610100808354040283529160200191611393565b820191906000526020600020905b81548152906001019060200180831161137657829003601f168201915b50505050508060200190518101906113ab9190612022565b90506113bd60001943101560256111e5565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a1611410341560216111e5565b8051611428906001600160a01b0316331460226111e5565b611430611923565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451908416908201526060808601518386018051919095169052608080870151855190151594019390935260a080870151855190151593019290925283514391015260c085015183519092019190915260e0840151915101526111df81611542565b60006114c683853085611625565b949350505050565b6114d6611953565b60005b6001811015611522578481600181106114f4576114f46121e0565b602002015182826001811061150b5761150b6121e0565b60200201528061151a8161223b565b9150506114d9565b5081818460018110611536576115366121e0565b60200201529392505050565b61154a61199e565b8151516001600160a01b039081168252825160209081015182168184015283516040908101518316818501528185018051519093166060850152825182015115156080808601919091528351820151151560a080870191909152845182015160c08701528451015160e0860152835181015151610100860152925190920151515161012084015260036000554360015590516115e89183910161229a565b6040516020818303038152906040526002908051906020019061160c929190611a1c565b505050565b61161c8383836116ff565b61160c57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161168c9161237a565b60006040518083038185875af1925050503d80600081146116c9576040519150601f19603f3d011682016040523d82523d6000602084013e6116ce565b606091505b50915091506116df828260016117d0565b50808060200190518101906116f49190612396565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161175e9161237a565b60006040518083038185875af1925050503d806000811461179b576040519150601f19603f3d011682016040523d82523d6000602084013e6117a0565b606091505b50915091506117b1828260026117d0565b50808060200190518101906117c69190612396565b9695505050505050565b606083156117df5750816104ab565b8251156117ef5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611202565b604051806040016040528060008152602001611825611aa0565b905290565b60408051608081018252600080825260208083018290528284018290528351908101909352825290606082015290565b6040805161014081018252600060e082018181526101008301829052610120830182905282528251606081018452818152602080820183905281850192909252908201529081016118a9611953565b815260408051606081018252600080825260208281018290529282015291019081526040805160608101825260008082526020828101829052928201529101908152604080516060810182526000808252602082810182905292820152910190815260200161182560408051602081019091526000815290565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101611825611ab3565b60405180602001604052806001905b611988604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816119625790505090565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915260c081016119dd611953565b815260200160008152602001611a0f604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b828054611a2890611f16565b90600052602060002090601f016020900481019282611a4a5760008555611a90565b82601f10611a6357805160ff1916838001178555611a90565b82800160010185558215611a90579182015b82811115611a90578251825591602001919060010190611a75565b50611a9c929150611aef565b5090565b6040518060200160405280611825611b04565b6040518060c0016040528060006001600160a01b0316815260200160001515815260200160001515815260200160008152602001611a0f611953565b5b80821115611a9c5760008155600101611af0565b6040805160a081019091528060008152600060208201819052604082018190526060820152608001611825604051806080016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200161182560408051602081019091526000815290565b60006101208284031215611b8957600080fd5b50919050565b6001600160a01b0381168114611ba457600080fd5b50565b600060208284031215611bb957600080fd5b81356104ab81611b8f565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110611bf157611bf1611bc4565b808352506020830151151560208301526040830151604083015292915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611c4a57611c4a611c11565b60405290565b6040516020810167ffffffffffffffff81118282101715611c4a57611c4a611c11565b60405160a0810167ffffffffffffffff81118282101715611c4a57611c4a611c11565b6040516080810167ffffffffffffffff81118282101715611c4a57611c4a611c11565b604051610140810167ffffffffffffffff81118282101715611c4a57611c4a611c11565b600060208284031215611cef57600080fd5b6040516020810181811067ffffffffffffffff82111715611d1257611d12611c11565b60405290508082356001600160e01b031981168114611d3057600080fd5b905292915050565b60008060008060808587031215611d4e57600080fd5b8435611d5981611b8f565b93506020850135611d6981611b8f565b925060408501359150611d7f8660608701611cdd565b905092959194509250565b600060408284031215611b8957600080fd5b60005b83811015611db7578181015183820152602001611d9f565b838111156111df5750506000910152565b8281526040602082015260008251806040840152611ded816060850160208701611d9c565b601f01601f1916919091016060019392505050565b8015158114611ba457600080fd5b6000818303610120811215611e2457600080fd5b611e2c611c27565b8335815261010080601f1984011215611e4457600080fd5b611e4c611c50565b611e54611c73565b602087013560048110611e6657600080fd5b81526040870135611e7681611e02565b60208201526060870135611e8981611e02565b60408201526080870135611e9c81611e02565b60608201526080609f1986011215611eb357600080fd5b611ebb611c96565b945060a0870135611ecb81611b8f565b855260c0870135611edb81611b8f565b602086015260e08701356040860152611ef688848901611cdd565b606086015260808101949094529283525060208101919091529392505050565b600181811c90821680611f2a57607f821691505b60208210811415611b8957634e487b7160e01b600052602260045260246000fd5b80516104be81611b8f565b80516104be81611e02565b600060608284031215611f7357600080fd5b6040516060810181811067ffffffffffffffff82111715611f9657611f96611c11565b806040525080915082518152602083015160208201526040830151611fba81611e02565b6040919091015292915050565b600082601f830112611fd857600080fd5b611fe0611c50565b80606080850186811115611ff357600080fd5b855b81811015612016576120078882611f61565b85526020909401938201611ff5565b50919695505050505050565b60006101c0828403121561203557600080fd5b61203d611cb9565b61204683611f4b565b815261205460208401611f4b565b602082015261206560408401611f4b565b604082015261207660608401611f4b565b606082015261208760808401611f56565b608082015261209860a08401611f56565b60a08201526120aa8460c08501611fc7565b60c08201526101208084015160e08301526120c9856101408601611f61565b6101008301526101a084015181830152508091505092915050565b6000604082840312156120f657600080fd5b6040516040810181811067ffffffffffffffff8211171561211957612119611c11565b60405282358152602083013561212e81611e02565b60208201529392505050565b6001600160a01b038381168252825160208084019190915283015151805161014084019291906004811061217057612170611bc4565b806040860152506020810151151560608501526040810151151560808501526060810151151560a0850152608081015190508181511660c08501528160208201511660e0850152604081015161010085015263ffffffff60e01b6060820151511661012085015250509392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008282101561221e5761221e6121f6565b500390565b60008219821115612236576122366121f6565b500190565b600060001982141561224f5761224f6121f6565b5060010190565b8060005b60018110156111df5761228484835180518252602080820151908301526040908101511515910152565b606093909301926020919091019060010161225a565b81516001600160a01b031681526101c0810160208301516122c660208401826001600160a01b03169052565b5060408301516122e160408401826001600160a01b03169052565b5060608301516122fc60608401826001600160a01b03169052565b506080830151612310608084018215159052565b5060a083015161232460a084018215159052565b5060c083015161233760c0840182612256565b5060e08301516101208381019190915261010084015180516101408501526020810151610160850152604001511515610180840152909201516101a09091015290565b6000825161238c818460208701611d9c565b9190910192915050565b6000602082840312156123a857600080fd5b81516104ab81611e0256fea26469706673582212204cc4630f8e82d04c917792184ba00a10fbd0977b0f7be5ceb7034b8e834f4d4664736f6c634300080c0033`,
  BytecodeLen: 11201,
  Which: `oD`,
  version: 7,
  views: {
    Bridger_v: `Bridger_v`,
    Creator_v: `Creator_v`,
    balance_NFT_v: `balance_NFT_v`,
    balance_v: `balance_v`,
    bridgeAppr_v: `bridgeAppr_v`,
    lockedNFT_v: `lockedNFT_v`,
    saved_v: `saved_v`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:163:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:62:71:after expr stmt semicolon',
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
  "approveBridge": approveBridge,
  "claimNFT": claimNFT,
  "lockNFT": lockNFT,
  "IERC721Receiver": onERC721Received
  };
export const _APIs = {
  approveBridge: approveBridge,
  claimNFT: claimNFT,
  lockNFT: lockNFT,
  IERC721Receiver: onERC721Received
  };
