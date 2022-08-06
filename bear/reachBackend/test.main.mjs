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
            const [v577, v578, v579, v592, v593, v594, v597, v598, v608, v609] = svs;
            return (await ((async () => {
              
              
              return v592;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      Creator_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v577, v578, v579, v592, v593, v594, v597, v598, v608, v609] = svs;
            return (await ((async () => {
              
              
              return v577;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      balance_NFT_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v577, v578, v579, v592, v593, v594, v597, v598, v608, v609] = svs;
            return (await ((async () => {
              
              
              return v609;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      balance_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v577, v578, v579, v592, v593, v594, v597, v598, v608, v609] = svs;
            return (await ((async () => {
              
              
              return v598;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      bridgeAppr_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v577, v578, v579, v592, v593, v594, v597, v598, v608, v609] = svs;
            return (await ((async () => {
              
              
              return v593;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      lockedNFT_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v577, v578, v579, v592, v593, v594, v597, v598, v608, v609] = svs;
            return (await ((async () => {
              
              
              return v594;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      saved_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v577, v578, v579, v592, v593, v594, v597, v598, v608, v609] = svs;
            return (await ((async (_v610 ) => {
                const v610 = stdlib.protect(ctc0, _v610, null);
              
              const v611 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v610), null);
              const v612 = stdlib.fromSome(v611, stdlib.checkedBigNumberify('./indexBridge.rsh:52:45:decimal', stdlib.UInt_max, '0'));
              
              return v612;}))(...args));
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc6]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    IERC721Receiver0_74: ctc7,
    adminSaveNFT0_74: ctc8,
    approveBridge0_74: ctc8,
    claimNFT0_74: ctc8,
    lockNFT0_74: ctc8
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
  
  
  const v564 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v565 = [v564];
  const v571 = 'I have deployed';
  const v572 = stdlib.protect(ctc5, await interact.getParams(v571), {
    at: './indexBridge.rsh:39:66:application',
    fs: ['at ./indexBridge.rsh:38:21:application call to [unknown function] (defined at: ./indexBridge.rsh:38:25:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v573 = v572.Bridger;
  const v574 = v572.NFT;
  
  const txn1 = await (ctc.sendrecv({
    args: [v573, v574],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc4],
    pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v578, v579], secs: v581, time: v580, didSend: v33, from: v577 } = txn1;
      
      const v582 = v565[stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '0')];
      const v584 = v582[stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '1')];
      const v585 = v582[stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '2')];
      const v586 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v584, v585];
      const v587 = stdlib.Array_set(v565, stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '0'), v586);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v579
        });
      ;
      
      const v592 = v578;
      const v593 = false;
      const v594 = false;
      const v595 = v580;
      const v597 = v587;
      const v598 = stdlib.checkedBigNumberify('./indexBridge.rsh:36:15:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        const v608 = v597[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
        const v609 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v579
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
  const {data: [v578, v579], secs: v581, time: v580, didSend: v33, from: v577 } = txn1;
  const v582 = v565[stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '0')];
  const v584 = v582[stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '1')];
  const v585 = v582[stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '2')];
  const v586 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v584, v585];
  const v587 = stdlib.Array_set(v565, stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '0'), v586);
  ;
  ;
  const v590 = 'I HAVE DEPLOYED';
  stdlib.protect(ctc0, await interact.iDeployed(v590), {
    at: './indexBridge.rsh:45:35:application',
    fs: ['at ./indexBridge.rsh:45:35:application call to [unknown function] (defined at: ./indexBridge.rsh:45:35:function exp)', 'at ./indexBridge.rsh:45:35:application call to "liftedInteract" (defined at: ./indexBridge.rsh:45:35:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  let v592 = v578;
  let v593 = false;
  let v594 = false;
  let v595 = v580;
  let v597 = v587;
  let v598 = stdlib.checkedBigNumberify('./indexBridge.rsh:36:15:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const v608 = v597[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
    const v609 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
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
        args: [v577, v578, v579, v592, v593, v594, v597, v598, v608, v609],
        evt_cnt: 0,
        funcNum: 3,
        lct: v595,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:183:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v1412, time: v1411, didSend: v450, from: v1410 } = txn3;
          
          ;
          const cv592 = v592;
          const cv593 = v593;
          const cv594 = v594;
          const cv595 = v1411;
          const cv597 = v597;
          const cv598 = v598;
          
          await (async () => {
            const v592 = cv592;
            const v593 = cv593;
            const v594 = cv594;
            const v595 = cv595;
            const v597 = cv597;
            const v598 = cv598;
            
            if (await (async () => {
              
              return true;})()) {
              const v608 = v597[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
              const v609 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v579
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
      const {data: [], secs: v1412, time: v1411, didSend: v450, from: v1410 } = txn3;
      ;
      const v1413 = stdlib.addressEq(v577, v1410);
      stdlib.assert(v1413, {
        at: './indexBridge.rsh:183:21:dot',
        fs: ['at ./indexBridge.rsh:182:40:application call to [unknown function] (defined at: ./indexBridge.rsh:182:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv592 = v592;
      const cv593 = v593;
      const cv594 = v594;
      const cv595 = v1411;
      const cv597 = v597;
      const cv598 = v598;
      
      v592 = cv592;
      v593 = cv593;
      v594 = cv594;
      v595 = cv595;
      v597 = cv597;
      v598 = cv598;
      
      continue;
      }
    else {
      const {data: [v737], secs: v739, time: v738, didSend: v359, from: v736 } = txn2;
      switch (v737[0]) {
        case 'IERC721Receiver0_74': {
          const v740 = v737[1];
          undefined /* setApiDetails */;
          ;
          const v797 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '1')];
          const v798 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '2')];
          const v799 = [v609, v797, v798];
          const v800 = stdlib.Array_set(v597, stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '0'), v799);
          ;
          const v806 = 'true';
          await txn2.getOutput('IERC721Receiver', 'v806', ctc6, v806);
          const cv592 = v592;
          const cv593 = v593;
          const cv594 = v594;
          const cv595 = v738;
          const cv597 = v800;
          const cv598 = v598;
          
          v592 = cv592;
          v593 = cv593;
          v594 = cv594;
          v595 = cv595;
          v597 = cv597;
          v598 = cv598;
          
          continue;
          break;
          }
        case 'adminSaveNFT0_74': {
          const v874 = v737[1];
          undefined /* setApiDetails */;
          ;
          const v928 = stdlib.add(v609, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v931 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '1')];
          const v932 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '2')];
          const v933 = [v928, v931, v932];
          const v934 = stdlib.Array_set(v597, stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '0'), v933);
          ;
          const v952 = stdlib.addressEq(v736, v577);
          stdlib.assert(v952, {
            at: './indexBridge.rsh:109:40:application',
            fs: ['at ./indexBridge.rsh:108:13:application call to [unknown function] (defined at: ./indexBridge.rsh:108:13:function exp)'],
            msg: 'Only Backend can save NFT',
            who: 'Creator'
            });
          const v953 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v592), null);
          const v954 = stdlib.fromSome(v953, stdlib.checkedBigNumberify('./indexBridge.rsh:52:45:decimal', stdlib.UInt_max, '0'));
          const v955 = stdlib.eq(v954, stdlib.checkedBigNumberify('./indexBridge.rsh:110:64:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v955, {
            at: './indexBridge.rsh:110:32:application',
            fs: ['at ./indexBridge.rsh:108:13:application call to [unknown function] (defined at: ./indexBridge.rsh:108:13:function exp)'],
            msg: 'one NFT already locked by this bridger',
            who: 'Creator'
            });
          const v956 = true;
          await txn2.getOutput('adminSaveNFT', 'v956', ctc10, v956);
          const cv592 = v592;
          const cv593 = v593;
          const cv594 = v594;
          const cv595 = v738;
          const cv597 = v934;
          const cv598 = v598;
          
          v592 = cv592;
          v593 = cv593;
          v594 = cv594;
          v595 = cv595;
          v597 = cv597;
          v598 = cv598;
          
          continue;
          break;
          }
        case 'approveBridge0_74': {
          const v1008 = v737[1];
          undefined /* setApiDetails */;
          ;
          const v1065 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '1')];
          const v1066 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '2')];
          const v1067 = [v609, v1065, v1066];
          const v1068 = stdlib.Array_set(v597, stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '0'), v1067);
          ;
          const v1098 = stdlib.addressEq(v736, v577);
          stdlib.assert(v1098, {
            at: './indexBridge.rsh:89:40:application',
            fs: ['at ./indexBridge.rsh:88:13:application call to [unknown function] (defined at: ./indexBridge.rsh:88:13:function exp)'],
            msg: 'Only Backend can approve Bridging',
            who: 'Creator'
            });
          const v1099 = true;
          await txn2.getOutput('approveBridge', 'v1099', ctc10, v1099);
          const cv592 = v592;
          const cv593 = true;
          const cv594 = v594;
          const cv595 = v738;
          const cv597 = v1068;
          const cv598 = v598;
          
          v592 = cv592;
          v593 = cv593;
          v594 = cv594;
          v595 = cv595;
          v597 = cv597;
          v598 = cv598;
          
          continue;
          break;
          }
        case 'claimNFT0_74': {
          const v1142 = v737[1];
          undefined /* setApiDetails */;
          ;
          const v1199 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '1')];
          const v1200 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '2')];
          const v1201 = [v609, v1199, v1200];
          const v1202 = stdlib.Array_set(v597, stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '0'), v1201);
          ;
          const v1241 = stdlib.addressEq(v736, v578);
          stdlib.assert(v1241, {
            at: './indexBridge.rsh:156:24:application',
            fs: ['at ./indexBridge.rsh:155:13:application call to [unknown function] (defined at: ./indexBridge.rsh:155:13:function exp)'],
            msg: 'Only Bridger can claim NFT when bridging',
            who: 'Creator'
            });
          stdlib.assert(v593, {
            at: './indexBridge.rsh:157:24:application',
            fs: ['at ./indexBridge.rsh:155:13:application call to [unknown function] (defined at: ./indexBridge.rsh:155:13:function exp)'],
            msg: 'Creator/BackEnd must already approve this',
            who: 'Creator'
            });
          stdlib.assert(v594, {
            at: './indexBridge.rsh:158:24:application',
            fs: ['at ./indexBridge.rsh:155:13:application call to [unknown function] (defined at: ./indexBridge.rsh:155:13:function exp)'],
            msg: 'Bridger must have NFT to claim. None available',
            who: 'Creator'
            });
          const v1244 = v1202[stdlib.checkedBigNumberify('./indexBridge.rsh:159:32:application', stdlib.UInt_max, '0')];
          const v1245 = v1244[stdlib.checkedBigNumberify('./indexBridge.rsh:159:32:application', stdlib.UInt_max, '0')];
          const v1246 = stdlib.gt(v1245, stdlib.checkedBigNumberify('./indexBridge.rsh:159:40:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v1246, {
            at: './indexBridge.rsh:159:24:application',
            fs: ['at ./indexBridge.rsh:155:13:application call to [unknown function] (defined at: ./indexBridge.rsh:155:13:function exp)'],
            msg: 'Bridger must have NFT to claim. None available',
            who: 'Creator'
            });
          const v1252 = stdlib.sub(v1245, stdlib.checkedBigNumberify('./indexBridge.rsh:160:42:decimal', stdlib.UInt_max, '1'));
          const v1255 = v1244[stdlib.checkedBigNumberify('./indexBridge.rsh:160:52:application', stdlib.UInt_max, '1')];
          const v1256 = v1244[stdlib.checkedBigNumberify('./indexBridge.rsh:160:52:application', stdlib.UInt_max, '2')];
          const v1257 = [v1252, v1255, v1256];
          const v1258 = stdlib.Array_set(v1202, stdlib.checkedBigNumberify('./indexBridge.rsh:160:52:application', stdlib.UInt_max, '0'), v1257);
          ;
          await stdlib.mapSet(map0, v736, stdlib.checkedBigNumberify('./indexBridge.rsh:163:31:decimal', stdlib.UInt_max, '0'));
          const v1259 = true;
          await txn2.getOutput('claimNFT', 'v1259', ctc10, v1259);
          const cv592 = v592;
          const cv593 = false;
          const cv594 = false;
          const cv595 = v738;
          const cv597 = v1258;
          const cv598 = v598;
          
          v592 = cv592;
          v593 = cv593;
          v594 = cv594;
          v595 = cv595;
          v597 = cv597;
          v598 = cv598;
          
          continue;
          break;
          }
        case 'lockNFT0_74': {
          const v1276 = v737[1];
          undefined /* setApiDetails */;
          ;
          const v1330 = stdlib.add(v609, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v1333 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '1')];
          const v1334 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '2')];
          const v1335 = [v1330, v1333, v1334];
          const v1336 = stdlib.Array_set(v597, stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '0'), v1335);
          ;
          const v1401 = stdlib.addressEq(v736, v578);
          stdlib.assert(v1401, {
            at: './indexBridge.rsh:130:24:application',
            fs: ['at ./indexBridge.rsh:129:13:application call to [unknown function] (defined at: ./indexBridge.rsh:129:13:function exp)'],
            msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
            who: 'Creator'
            });
          const v1402 = v594 ? false : true;
          stdlib.assert(v1402, {
            at: './indexBridge.rsh:131:24:application',
            fs: ['at ./indexBridge.rsh:129:13:application call to [unknown function] (defined at: ./indexBridge.rsh:129:13:function exp)'],
            msg: 'NFT is already locked. You can only bridge one NFT at a time',
            who: 'Creator'
            });
          await stdlib.mapSet(map0, v736, stdlib.checkedBigNumberify('./indexBridge.rsh:134:31:decimal', stdlib.UInt_max, '1'));
          const v1403 = true;
          await txn2.getOutput('lockNFT', 'v1403', ctc10, v1403);
          const cv592 = v592;
          const cv593 = false;
          const cv594 = true;
          const cv595 = v738;
          const cv597 = v1336;
          const cv598 = v598;
          
          v592 = cv592;
          v593 = cv593;
          v594 = cv594;
          v595 = cv595;
          v597 = cv597;
          v598 = cv598;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  };
export async function _IERC721Receiver3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _IERC721Receiver3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _IERC721Receiver3 expects to receive an interact object as its second argument.`));}
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
    IERC721Receiver0_74: ctc9,
    adminSaveNFT0_74: ctc10,
    approveBridge0_74: ctc10,
    claimNFT0_74: ctc10,
    lockNFT0_74: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v577, v578, v579, v592, v593, v594, v597, v598, v608, v609] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v664 = stdlib.protect(ctc9, await interact.in(), {
    at: './indexBridge.rsh:1:23:application',
    fs: ['at ./indexBridge.rsh:173:13:application call to [unknown function] (defined at: ./indexBridge.rsh:173:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to "runIERC721Receiver0_74" (defined at: ./indexBridge.rsh:170:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to [unknown function] (defined at: ./indexBridge.rsh:65:71:function exp)'],
    msg: 'in',
    who: 'IERC721Receiver'
    });
  const v680 = ['IERC721Receiver0_74', v664];
  
  const txn1 = await (ctc.sendrecv({
    args: [v577, v578, v579, v592, v593, v594, v597, v598, v608, v609, v680],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:175:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge.rsh:175:33:decimal', stdlib.UInt_max, '0'), v579]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v737], secs: v739, time: v738, didSend: v359, from: v736 } = txn1;
      
      switch (v737[0]) {
        case 'IERC721Receiver0_74': {
          const v740 = v737[1];
          sim_r.txns.push({
            kind: 'api',
            who: "IERC721Receiver"
            });
          ;
          const v797 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '1')];
          const v798 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '2')];
          const v799 = [v609, v797, v798];
          const v800 = stdlib.Array_set(v597, stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '0'), v799);
          ;
          const v806 = 'true';
          const v807 = await txn1.getOutput('IERC721Receiver', 'v806', ctc8, v806);
          
          const v2178 = v592;
          const v2179 = v593;
          const v2180 = v594;
          const v2182 = v800;
          const v2183 = v598;
          const v2184 = v800[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
          const v2185 = v2184[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'adminSaveNFT0_74': {
          const v874 = v737[1];
          
          break;
          }
        case 'approveBridge0_74': {
          const v1008 = v737[1];
          
          break;
          }
        case 'claimNFT0_74': {
          const v1142 = v737[1];
          
          break;
          }
        case 'lockNFT0_74': {
          const v1276 = v737[1];
          
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
  const {data: [v737], secs: v739, time: v738, didSend: v359, from: v736 } = txn1;
  switch (v737[0]) {
    case 'IERC721Receiver0_74': {
      const v740 = v737[1];
      undefined /* setApiDetails */;
      ;
      const v797 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '1')];
      const v798 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '2')];
      const v799 = [v609, v797, v798];
      const v800 = stdlib.Array_set(v597, stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '0'), v799);
      ;
      const v806 = 'true';
      const v807 = await txn1.getOutput('IERC721Receiver', 'v806', ctc8, v806);
      if (v359) {
        stdlib.protect(ctc0, await interact.out(v740, v807), {
          at: './indexBridge.rsh:171:13:application',
          fs: ['at ./indexBridge.rsh:171:13:application call to [unknown function] (defined at: ./indexBridge.rsh:171:13:function exp)', 'at ./indexBridge.rsh:178:20:application call to "res" (defined at: ./indexBridge.rsh:177:13:function exp)', 'at ./indexBridge.rsh:177:13:application call to [unknown function] (defined at: ./indexBridge.rsh:177:13:function exp)'],
          msg: 'out',
          who: 'IERC721Receiver'
          });
        }
      else {
        }
      
      const v2178 = v592;
      const v2179 = v593;
      const v2180 = v594;
      const v2182 = v800;
      const v2183 = v598;
      const v2184 = v800[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
      const v2185 = v2184[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'adminSaveNFT0_74': {
      const v874 = v737[1];
      return;
      break;
      }
    case 'approveBridge0_74': {
      const v1008 = v737[1];
      return;
      break;
      }
    case 'claimNFT0_74': {
      const v1142 = v737[1];
      return;
      break;
      }
    case 'lockNFT0_74': {
      const v1276 = v737[1];
      return;
      break;
      }
    }
  
  
  };
export async function _adminSaveNFT3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _adminSaveNFT3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _adminSaveNFT3 expects to receive an interact object as its second argument.`));}
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
    IERC721Receiver0_74: ctc10,
    adminSaveNFT0_74: ctc8,
    approveBridge0_74: ctc8,
    claimNFT0_74: ctc8,
    lockNFT0_74: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v577, v578, v579, v592, v593, v594, v597, v598, v608, v609] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v626 = ctc.selfAddress();
  const v628 = stdlib.protect(ctc8, await interact.in(), {
    at: './indexBridge.rsh:1:23:application',
    fs: ['at ./indexBridge.rsh:101:13:application call to [unknown function] (defined at: ./indexBridge.rsh:101:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to "runadminSaveNFT0_74" (defined at: ./indexBridge.rsh:98:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to [unknown function] (defined at: ./indexBridge.rsh:65:71:function exp)'],
    msg: 'in',
    who: 'adminSaveNFT'
    });
  const v630 = stdlib.addressEq(v626, v577);
  stdlib.assert(v630, {
    at: './indexBridge.rsh:102:39:application',
    fs: ['at ./indexBridge.rsh:101:13:application call to [unknown function] (defined at: ./indexBridge.rsh:101:17:function exp)', 'at ./indexBridge.rsh:101:13:application call to [unknown function] (defined at: ./indexBridge.rsh:101:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to "runadminSaveNFT0_74" (defined at: ./indexBridge.rsh:98:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to [unknown function] (defined at: ./indexBridge.rsh:65:71:function exp)'],
    msg: 'Only Backend can save NFT',
    who: 'adminSaveNFT'
    });
  const v631 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v592), null);
  const v632 = stdlib.fromSome(v631, stdlib.checkedBigNumberify('./indexBridge.rsh:52:45:decimal', stdlib.UInt_max, '0'));
  const v633 = stdlib.eq(v632, stdlib.checkedBigNumberify('./indexBridge.rsh:103:63:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v633, {
    at: './indexBridge.rsh:103:31:application',
    fs: ['at ./indexBridge.rsh:101:13:application call to [unknown function] (defined at: ./indexBridge.rsh:101:17:function exp)', 'at ./indexBridge.rsh:101:13:application call to [unknown function] (defined at: ./indexBridge.rsh:101:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to "runadminSaveNFT0_74" (defined at: ./indexBridge.rsh:98:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to [unknown function] (defined at: ./indexBridge.rsh:65:71:function exp)'],
    msg: 'one NFT already locked by this bridger',
    who: 'adminSaveNFT'
    });
  const v636 = ['adminSaveNFT0_74', v628];
  
  const txn1 = await (ctc.sendrecv({
    args: [v577, v578, v579, v592, v593, v594, v597, v598, v608, v609, v636],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:106:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge.rsh:106:25:decimal', stdlib.UInt_max, '1'), v579]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v737], secs: v739, time: v738, didSend: v359, from: v736 } = txn1;
      
      switch (v737[0]) {
        case 'IERC721Receiver0_74': {
          const v740 = v737[1];
          
          break;
          }
        case 'adminSaveNFT0_74': {
          const v874 = v737[1];
          sim_r.txns.push({
            kind: 'api',
            who: "adminSaveNFT"
            });
          ;
          const v928 = stdlib.add(v609, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v931 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '1')];
          const v932 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '2')];
          const v933 = [v928, v931, v932];
          const v934 = stdlib.Array_set(v597, stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '0'), v933);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v579
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v592), null);
          const v956 = true;
          const v957 = await txn1.getOutput('adminSaveNFT', 'v956', ctc5, v956);
          
          const v2238 = v592;
          const v2239 = v593;
          const v2240 = v594;
          const v2242 = v934;
          const v2243 = v598;
          const v2244 = v934[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
          const v2245 = v2244[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'approveBridge0_74': {
          const v1008 = v737[1];
          
          break;
          }
        case 'claimNFT0_74': {
          const v1142 = v737[1];
          
          break;
          }
        case 'lockNFT0_74': {
          const v1276 = v737[1];
          
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
  const {data: [v737], secs: v739, time: v738, didSend: v359, from: v736 } = txn1;
  switch (v737[0]) {
    case 'IERC721Receiver0_74': {
      const v740 = v737[1];
      return;
      break;
      }
    case 'adminSaveNFT0_74': {
      const v874 = v737[1];
      undefined /* setApiDetails */;
      ;
      const v928 = stdlib.add(v609, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v931 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '1')];
      const v932 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '2')];
      const v933 = [v928, v931, v932];
      const v934 = stdlib.Array_set(v597, stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '0'), v933);
      ;
      const v952 = stdlib.addressEq(v736, v577);
      stdlib.assert(v952, {
        at: './indexBridge.rsh:109:40:application',
        fs: ['at ./indexBridge.rsh:108:13:application call to [unknown function] (defined at: ./indexBridge.rsh:108:13:function exp)'],
        msg: 'Only Backend can save NFT',
        who: 'adminSaveNFT'
        });
      const v953 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v592), null);
      const v954 = stdlib.fromSome(v953, stdlib.checkedBigNumberify('./indexBridge.rsh:52:45:decimal', stdlib.UInt_max, '0'));
      const v955 = stdlib.eq(v954, stdlib.checkedBigNumberify('./indexBridge.rsh:110:64:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v955, {
        at: './indexBridge.rsh:110:32:application',
        fs: ['at ./indexBridge.rsh:108:13:application call to [unknown function] (defined at: ./indexBridge.rsh:108:13:function exp)'],
        msg: 'one NFT already locked by this bridger',
        who: 'adminSaveNFT'
        });
      const v956 = true;
      const v957 = await txn1.getOutput('adminSaveNFT', 'v956', ctc5, v956);
      if (v359) {
        stdlib.protect(ctc0, await interact.out(v874, v957), {
          at: './indexBridge.rsh:99:13:application',
          fs: ['at ./indexBridge.rsh:99:13:application call to [unknown function] (defined at: ./indexBridge.rsh:99:13:function exp)', 'at ./indexBridge.rsh:112:20:application call to "res" (defined at: ./indexBridge.rsh:108:13:function exp)', 'at ./indexBridge.rsh:108:13:application call to [unknown function] (defined at: ./indexBridge.rsh:108:13:function exp)'],
          msg: 'out',
          who: 'adminSaveNFT'
          });
        }
      else {
        }
      
      const v2238 = v592;
      const v2239 = v593;
      const v2240 = v594;
      const v2242 = v934;
      const v2243 = v598;
      const v2244 = v934[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
      const v2245 = v2244[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'approveBridge0_74': {
      const v1008 = v737[1];
      return;
      break;
      }
    case 'claimNFT0_74': {
      const v1142 = v737[1];
      return;
      break;
      }
    case 'lockNFT0_74': {
      const v1276 = v737[1];
      return;
      break;
      }
    }
  
  
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
    IERC721Receiver0_74: ctc10,
    adminSaveNFT0_74: ctc8,
    approveBridge0_74: ctc8,
    claimNFT0_74: ctc8,
    lockNFT0_74: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v577, v578, v579, v592, v593, v594, v597, v598, v608, v609] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v617 = ctc.selfAddress();
  const v619 = stdlib.protect(ctc8, await interact.in(), {
    at: './indexBridge.rsh:1:23:application',
    fs: ['at ./indexBridge.rsh:82:13:application call to [unknown function] (defined at: ./indexBridge.rsh:82:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to "runapproveBridge0_74" (defined at: ./indexBridge.rsh:79:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to [unknown function] (defined at: ./indexBridge.rsh:65:71:function exp)'],
    msg: 'in',
    who: 'approveBridge'
    });
  const v621 = stdlib.addressEq(v617, v577);
  stdlib.assert(v621, {
    at: './indexBridge.rsh:83:39:application',
    fs: ['at ./indexBridge.rsh:82:13:application call to [unknown function] (defined at: ./indexBridge.rsh:82:17:function exp)', 'at ./indexBridge.rsh:82:13:application call to [unknown function] (defined at: ./indexBridge.rsh:82:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to "runapproveBridge0_74" (defined at: ./indexBridge.rsh:79:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to [unknown function] (defined at: ./indexBridge.rsh:65:71:function exp)'],
    msg: 'Only Backend can approve Bridging',
    who: 'approveBridge'
    });
  const v624 = ['approveBridge0_74', v619];
  
  const txn1 = await (ctc.sendrecv({
    args: [v577, v578, v579, v592, v593, v594, v597, v598, v608, v609, v624],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:86:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge.rsh:86:25:decimal', stdlib.UInt_max, '0'), v579]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v737], secs: v739, time: v738, didSend: v359, from: v736 } = txn1;
      
      switch (v737[0]) {
        case 'IERC721Receiver0_74': {
          const v740 = v737[1];
          
          break;
          }
        case 'adminSaveNFT0_74': {
          const v874 = v737[1];
          
          break;
          }
        case 'approveBridge0_74': {
          const v1008 = v737[1];
          sim_r.txns.push({
            kind: 'api',
            who: "approveBridge"
            });
          ;
          const v1065 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '1')];
          const v1066 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '2')];
          const v1067 = [v609, v1065, v1066];
          const v1068 = stdlib.Array_set(v597, stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '0'), v1067);
          ;
          const v1099 = true;
          const v1100 = await txn1.getOutput('approveBridge', 'v1099', ctc5, v1099);
          
          const v2298 = v592;
          const v2299 = true;
          const v2300 = v594;
          const v2302 = v1068;
          const v2303 = v598;
          const v2304 = v1068[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
          const v2305 = v2304[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'claimNFT0_74': {
          const v1142 = v737[1];
          
          break;
          }
        case 'lockNFT0_74': {
          const v1276 = v737[1];
          
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
  const {data: [v737], secs: v739, time: v738, didSend: v359, from: v736 } = txn1;
  switch (v737[0]) {
    case 'IERC721Receiver0_74': {
      const v740 = v737[1];
      return;
      break;
      }
    case 'adminSaveNFT0_74': {
      const v874 = v737[1];
      return;
      break;
      }
    case 'approveBridge0_74': {
      const v1008 = v737[1];
      undefined /* setApiDetails */;
      ;
      const v1065 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '1')];
      const v1066 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '2')];
      const v1067 = [v609, v1065, v1066];
      const v1068 = stdlib.Array_set(v597, stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '0'), v1067);
      ;
      const v1098 = stdlib.addressEq(v736, v577);
      stdlib.assert(v1098, {
        at: './indexBridge.rsh:89:40:application',
        fs: ['at ./indexBridge.rsh:88:13:application call to [unknown function] (defined at: ./indexBridge.rsh:88:13:function exp)'],
        msg: 'Only Backend can approve Bridging',
        who: 'approveBridge'
        });
      const v1099 = true;
      const v1100 = await txn1.getOutput('approveBridge', 'v1099', ctc5, v1099);
      if (v359) {
        stdlib.protect(ctc0, await interact.out(v1008, v1100), {
          at: './indexBridge.rsh:80:13:application',
          fs: ['at ./indexBridge.rsh:80:13:application call to [unknown function] (defined at: ./indexBridge.rsh:80:13:function exp)', 'at ./indexBridge.rsh:93:20:application call to "res" (defined at: ./indexBridge.rsh:88:13:function exp)', 'at ./indexBridge.rsh:88:13:application call to [unknown function] (defined at: ./indexBridge.rsh:88:13:function exp)'],
          msg: 'out',
          who: 'approveBridge'
          });
        }
      else {
        }
      
      const v2298 = v592;
      const v2299 = true;
      const v2300 = v594;
      const v2302 = v1068;
      const v2303 = v598;
      const v2304 = v1068[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
      const v2305 = v2304[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'claimNFT0_74': {
      const v1142 = v737[1];
      return;
      break;
      }
    case 'lockNFT0_74': {
      const v1276 = v737[1];
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
    IERC721Receiver0_74: ctc10,
    adminSaveNFT0_74: ctc8,
    approveBridge0_74: ctc8,
    claimNFT0_74: ctc8,
    lockNFT0_74: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v577, v578, v579, v592, v593, v594, v597, v598, v608, v609] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v648 = ctc.selfAddress();
  const v650 = stdlib.protect(ctc8, await interact.in(), {
    at: './indexBridge.rsh:1:23:application',
    fs: ['at ./indexBridge.rsh:146:13:application call to [unknown function] (defined at: ./indexBridge.rsh:146:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to "runclaimNFT0_74" (defined at: ./indexBridge.rsh:143:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to [unknown function] (defined at: ./indexBridge.rsh:65:71:function exp)'],
    msg: 'in',
    who: 'claimNFT'
    });
  const v652 = stdlib.addressEq(v648, v578);
  stdlib.assert(v652, {
    at: './indexBridge.rsh:147:23:application',
    fs: ['at ./indexBridge.rsh:146:13:application call to [unknown function] (defined at: ./indexBridge.rsh:146:17:function exp)', 'at ./indexBridge.rsh:146:13:application call to [unknown function] (defined at: ./indexBridge.rsh:146:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to "runclaimNFT0_74" (defined at: ./indexBridge.rsh:143:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to [unknown function] (defined at: ./indexBridge.rsh:65:71:function exp)'],
    msg: 'Only Bridger can claim NFT when bridging',
    who: 'claimNFT'
    });
  stdlib.assert(v593, {
    at: './indexBridge.rsh:148:23:application',
    fs: ['at ./indexBridge.rsh:146:13:application call to [unknown function] (defined at: ./indexBridge.rsh:146:17:function exp)', 'at ./indexBridge.rsh:146:13:application call to [unknown function] (defined at: ./indexBridge.rsh:146:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to "runclaimNFT0_74" (defined at: ./indexBridge.rsh:143:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to [unknown function] (defined at: ./indexBridge.rsh:65:71:function exp)'],
    msg: 'Creator/BackEnd must already approve this',
    who: 'claimNFT'
    });
  stdlib.assert(v594, {
    at: './indexBridge.rsh:149:23:application',
    fs: ['at ./indexBridge.rsh:146:13:application call to [unknown function] (defined at: ./indexBridge.rsh:146:17:function exp)', 'at ./indexBridge.rsh:146:13:application call to [unknown function] (defined at: ./indexBridge.rsh:146:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to "runclaimNFT0_74" (defined at: ./indexBridge.rsh:143:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to [unknown function] (defined at: ./indexBridge.rsh:65:71:function exp)'],
    msg: 'Bridger must have NFT to claim. None available',
    who: 'claimNFT'
    });
  const v657 = stdlib.gt(v609, stdlib.checkedBigNumberify('./indexBridge.rsh:150:39:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v657, {
    at: './indexBridge.rsh:150:23:application',
    fs: ['at ./indexBridge.rsh:146:13:application call to [unknown function] (defined at: ./indexBridge.rsh:146:17:function exp)', 'at ./indexBridge.rsh:146:13:application call to [unknown function] (defined at: ./indexBridge.rsh:146:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to "runclaimNFT0_74" (defined at: ./indexBridge.rsh:143:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to [unknown function] (defined at: ./indexBridge.rsh:65:71:function exp)'],
    msg: 'Bridger must have NFT to claim. None available',
    who: 'claimNFT'
    });
  const v660 = ['claimNFT0_74', v650];
  
  const txn1 = await (ctc.sendrecv({
    args: [v577, v578, v579, v592, v593, v594, v597, v598, v608, v609, v660],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:153:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge.rsh:153:25:decimal', stdlib.UInt_max, '0'), v579]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v737], secs: v739, time: v738, didSend: v359, from: v736 } = txn1;
      
      switch (v737[0]) {
        case 'IERC721Receiver0_74': {
          const v740 = v737[1];
          
          break;
          }
        case 'adminSaveNFT0_74': {
          const v874 = v737[1];
          
          break;
          }
        case 'approveBridge0_74': {
          const v1008 = v737[1];
          
          break;
          }
        case 'claimNFT0_74': {
          const v1142 = v737[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimNFT"
            });
          ;
          const v1199 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '1')];
          const v1200 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '2')];
          const v1201 = [v609, v1199, v1200];
          const v1202 = stdlib.Array_set(v597, stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '0'), v1201);
          ;
          const v1244 = v1202[stdlib.checkedBigNumberify('./indexBridge.rsh:159:32:application', stdlib.UInt_max, '0')];
          const v1245 = v1244[stdlib.checkedBigNumberify('./indexBridge.rsh:159:32:application', stdlib.UInt_max, '0')];
          const v1252 = stdlib.sub(v1245, stdlib.checkedBigNumberify('./indexBridge.rsh:160:42:decimal', stdlib.UInt_max, '1'));
          const v1255 = v1244[stdlib.checkedBigNumberify('./indexBridge.rsh:160:52:application', stdlib.UInt_max, '1')];
          const v1256 = v1244[stdlib.checkedBigNumberify('./indexBridge.rsh:160:52:application', stdlib.UInt_max, '2')];
          const v1257 = [v1252, v1255, v1256];
          const v1258 = stdlib.Array_set(v1202, stdlib.checkedBigNumberify('./indexBridge.rsh:160:52:application', stdlib.UInt_max, '0'), v1257);
          sim_r.txns.push({
            kind: 'from',
            to: v736,
            tok: v579
            });
          await stdlib.simMapSet(sim_r, 0, v736, stdlib.checkedBigNumberify('./indexBridge.rsh:163:31:decimal', stdlib.UInt_max, '0'));
          const v1259 = true;
          const v1260 = await txn1.getOutput('claimNFT', 'v1259', ctc5, v1259);
          
          const v2358 = v592;
          const v2359 = false;
          const v2360 = false;
          const v2362 = v1258;
          const v2363 = v598;
          const v2364 = v1258[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
          const v2365 = v2364[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'lockNFT0_74': {
          const v1276 = v737[1];
          
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
  const {data: [v737], secs: v739, time: v738, didSend: v359, from: v736 } = txn1;
  switch (v737[0]) {
    case 'IERC721Receiver0_74': {
      const v740 = v737[1];
      return;
      break;
      }
    case 'adminSaveNFT0_74': {
      const v874 = v737[1];
      return;
      break;
      }
    case 'approveBridge0_74': {
      const v1008 = v737[1];
      return;
      break;
      }
    case 'claimNFT0_74': {
      const v1142 = v737[1];
      undefined /* setApiDetails */;
      ;
      const v1199 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '1')];
      const v1200 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '2')];
      const v1201 = [v609, v1199, v1200];
      const v1202 = stdlib.Array_set(v597, stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '0'), v1201);
      ;
      const v1241 = stdlib.addressEq(v736, v578);
      stdlib.assert(v1241, {
        at: './indexBridge.rsh:156:24:application',
        fs: ['at ./indexBridge.rsh:155:13:application call to [unknown function] (defined at: ./indexBridge.rsh:155:13:function exp)'],
        msg: 'Only Bridger can claim NFT when bridging',
        who: 'claimNFT'
        });
      stdlib.assert(v593, {
        at: './indexBridge.rsh:157:24:application',
        fs: ['at ./indexBridge.rsh:155:13:application call to [unknown function] (defined at: ./indexBridge.rsh:155:13:function exp)'],
        msg: 'Creator/BackEnd must already approve this',
        who: 'claimNFT'
        });
      stdlib.assert(v594, {
        at: './indexBridge.rsh:158:24:application',
        fs: ['at ./indexBridge.rsh:155:13:application call to [unknown function] (defined at: ./indexBridge.rsh:155:13:function exp)'],
        msg: 'Bridger must have NFT to claim. None available',
        who: 'claimNFT'
        });
      const v1244 = v1202[stdlib.checkedBigNumberify('./indexBridge.rsh:159:32:application', stdlib.UInt_max, '0')];
      const v1245 = v1244[stdlib.checkedBigNumberify('./indexBridge.rsh:159:32:application', stdlib.UInt_max, '0')];
      const v1246 = stdlib.gt(v1245, stdlib.checkedBigNumberify('./indexBridge.rsh:159:40:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1246, {
        at: './indexBridge.rsh:159:24:application',
        fs: ['at ./indexBridge.rsh:155:13:application call to [unknown function] (defined at: ./indexBridge.rsh:155:13:function exp)'],
        msg: 'Bridger must have NFT to claim. None available',
        who: 'claimNFT'
        });
      const v1252 = stdlib.sub(v1245, stdlib.checkedBigNumberify('./indexBridge.rsh:160:42:decimal', stdlib.UInt_max, '1'));
      const v1255 = v1244[stdlib.checkedBigNumberify('./indexBridge.rsh:160:52:application', stdlib.UInt_max, '1')];
      const v1256 = v1244[stdlib.checkedBigNumberify('./indexBridge.rsh:160:52:application', stdlib.UInt_max, '2')];
      const v1257 = [v1252, v1255, v1256];
      const v1258 = stdlib.Array_set(v1202, stdlib.checkedBigNumberify('./indexBridge.rsh:160:52:application', stdlib.UInt_max, '0'), v1257);
      ;
      await stdlib.mapSet(map0, v736, stdlib.checkedBigNumberify('./indexBridge.rsh:163:31:decimal', stdlib.UInt_max, '0'));
      const v1259 = true;
      const v1260 = await txn1.getOutput('claimNFT', 'v1259', ctc5, v1259);
      if (v359) {
        stdlib.protect(ctc0, await interact.out(v1142, v1260), {
          at: './indexBridge.rsh:144:13:application',
          fs: ['at ./indexBridge.rsh:144:13:application call to [unknown function] (defined at: ./indexBridge.rsh:144:13:function exp)', 'at ./indexBridge.rsh:166:20:application call to "res" (defined at: ./indexBridge.rsh:155:13:function exp)', 'at ./indexBridge.rsh:155:13:application call to [unknown function] (defined at: ./indexBridge.rsh:155:13:function exp)'],
          msg: 'out',
          who: 'claimNFT'
          });
        }
      else {
        }
      
      const v2358 = v592;
      const v2359 = false;
      const v2360 = false;
      const v2362 = v1258;
      const v2363 = v598;
      const v2364 = v1258[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
      const v2365 = v2364[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'lockNFT0_74': {
      const v1276 = v737[1];
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
    IERC721Receiver0_74: ctc10,
    adminSaveNFT0_74: ctc8,
    approveBridge0_74: ctc8,
    claimNFT0_74: ctc8,
    lockNFT0_74: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v577, v578, v579, v592, v593, v594, v597, v598, v608, v609] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v638 = ctc.selfAddress();
  const v640 = stdlib.protect(ctc8, await interact.in(), {
    at: './indexBridge.rsh:1:23:application',
    fs: ['at ./indexBridge.rsh:122:13:application call to [unknown function] (defined at: ./indexBridge.rsh:122:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to "runlockNFT0_74" (defined at: ./indexBridge.rsh:119:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to [unknown function] (defined at: ./indexBridge.rsh:65:71:function exp)'],
    msg: 'in',
    who: 'lockNFT'
    });
  const v642 = stdlib.addressEq(v638, v578);
  stdlib.assert(v642, {
    at: './indexBridge.rsh:123:23:application',
    fs: ['at ./indexBridge.rsh:122:13:application call to [unknown function] (defined at: ./indexBridge.rsh:122:17:function exp)', 'at ./indexBridge.rsh:122:13:application call to [unknown function] (defined at: ./indexBridge.rsh:122:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to "runlockNFT0_74" (defined at: ./indexBridge.rsh:119:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to [unknown function] (defined at: ./indexBridge.rsh:65:71:function exp)'],
    msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
    who: 'lockNFT'
    });
  const v643 = v594 ? false : true;
  stdlib.assert(v643, {
    at: './indexBridge.rsh:124:23:application',
    fs: ['at ./indexBridge.rsh:122:13:application call to [unknown function] (defined at: ./indexBridge.rsh:122:17:function exp)', 'at ./indexBridge.rsh:122:13:application call to [unknown function] (defined at: ./indexBridge.rsh:122:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to "runlockNFT0_74" (defined at: ./indexBridge.rsh:119:13:function exp)', 'at ./indexBridge.rsh:65:71:application call to [unknown function] (defined at: ./indexBridge.rsh:65:71:function exp)'],
    msg: 'NFT is already locked. You can only bridge one NFT at a time',
    who: 'lockNFT'
    });
  const v646 = ['lockNFT0_74', v640];
  
  const txn1 = await (ctc.sendrecv({
    args: [v577, v578, v579, v592, v593, v594, v597, v598, v608, v609, v646],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:127:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge.rsh:127:25:decimal', stdlib.UInt_max, '1'), v579]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v737], secs: v739, time: v738, didSend: v359, from: v736 } = txn1;
      
      switch (v737[0]) {
        case 'IERC721Receiver0_74': {
          const v740 = v737[1];
          
          break;
          }
        case 'adminSaveNFT0_74': {
          const v874 = v737[1];
          
          break;
          }
        case 'approveBridge0_74': {
          const v1008 = v737[1];
          
          break;
          }
        case 'claimNFT0_74': {
          const v1142 = v737[1];
          
          break;
          }
        case 'lockNFT0_74': {
          const v1276 = v737[1];
          sim_r.txns.push({
            kind: 'api',
            who: "lockNFT"
            });
          ;
          const v1330 = stdlib.add(v609, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v1333 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '1')];
          const v1334 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '2')];
          const v1335 = [v1330, v1333, v1334];
          const v1336 = stdlib.Array_set(v597, stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '0'), v1335);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v579
            });
          await stdlib.simMapSet(sim_r, 0, v736, stdlib.checkedBigNumberify('./indexBridge.rsh:134:31:decimal', stdlib.UInt_max, '1'));
          const v1403 = true;
          const v1404 = await txn1.getOutput('lockNFT', 'v1403', ctc5, v1403);
          
          const v2418 = v592;
          const v2419 = false;
          const v2420 = true;
          const v2422 = v1336;
          const v2423 = v598;
          const v2424 = v1336[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
          const v2425 = v2424[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
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
  const {data: [v737], secs: v739, time: v738, didSend: v359, from: v736 } = txn1;
  switch (v737[0]) {
    case 'IERC721Receiver0_74': {
      const v740 = v737[1];
      return;
      break;
      }
    case 'adminSaveNFT0_74': {
      const v874 = v737[1];
      return;
      break;
      }
    case 'approveBridge0_74': {
      const v1008 = v737[1];
      return;
      break;
      }
    case 'claimNFT0_74': {
      const v1142 = v737[1];
      return;
      break;
      }
    case 'lockNFT0_74': {
      const v1276 = v737[1];
      undefined /* setApiDetails */;
      ;
      const v1330 = stdlib.add(v609, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v1333 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '1')];
      const v1334 = v608[stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '2')];
      const v1335 = [v1330, v1333, v1334];
      const v1336 = stdlib.Array_set(v597, stdlib.checkedBigNumberify('./indexBridge.rsh:65:71:dot', stdlib.UInt_max, '0'), v1335);
      ;
      const v1401 = stdlib.addressEq(v736, v578);
      stdlib.assert(v1401, {
        at: './indexBridge.rsh:130:24:application',
        fs: ['at ./indexBridge.rsh:129:13:application call to [unknown function] (defined at: ./indexBridge.rsh:129:13:function exp)'],
        msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
        who: 'lockNFT'
        });
      const v1402 = v594 ? false : true;
      stdlib.assert(v1402, {
        at: './indexBridge.rsh:131:24:application',
        fs: ['at ./indexBridge.rsh:129:13:application call to [unknown function] (defined at: ./indexBridge.rsh:129:13:function exp)'],
        msg: 'NFT is already locked. You can only bridge one NFT at a time',
        who: 'lockNFT'
        });
      await stdlib.mapSet(map0, v736, stdlib.checkedBigNumberify('./indexBridge.rsh:134:31:decimal', stdlib.UInt_max, '1'));
      const v1403 = true;
      const v1404 = await txn1.getOutput('lockNFT', 'v1403', ctc5, v1403);
      if (v359) {
        stdlib.protect(ctc0, await interact.out(v1276, v1404), {
          at: './indexBridge.rsh:120:13:application',
          fs: ['at ./indexBridge.rsh:120:13:application call to [unknown function] (defined at: ./indexBridge.rsh:120:13:function exp)', 'at ./indexBridge.rsh:137:20:application call to "res" (defined at: ./indexBridge.rsh:129:13:function exp)', 'at ./indexBridge.rsh:129:13:application call to [unknown function] (defined at: ./indexBridge.rsh:129:13:function exp)'],
          msg: 'out',
          who: 'lockNFT'
          });
        }
      else {
        }
      
      const v2418 = v592;
      const v2419 = false;
      const v2420 = true;
      const v2422 = v1336;
      const v2423 = v598;
      const v2424 = v1336[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
      const v2425 = v2424[stdlib.checkedBigNumberify('./indexBridge.rsh:73:48:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    }
  
  
  };
export async function IERC721Receiver(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for IERC721Receiver expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for IERC721Receiver expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _IERC721Receiver3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function adminSaveNFT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for adminSaveNFT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for adminSaveNFT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _adminSaveNFT3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
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
const _ALGO = {
  ABI: {
    impure: [`IERC721Receiver(address,address,uint64,byte[4])byte[4]`, `adminSaveNFT()byte`, `approveBridge()byte`, `claimNFT()byte`, `lockNFT()byte`],
    pure: [`Bridger_v()address`, `Creator_v()address`, `balance_NFT_v()uint64`, `balance_v()uint64`, `bridgeAppr_v()byte`, `lockedNFT_v()byte`, `saved_v(address)uint64`],
    sigs: [`Bridger_v()address`, `Creator_v()address`, `IERC721Receiver(address,address,uint64,byte[4])byte[4]`, `adminSaveNFT()byte`, `approveBridge()byte`, `balance_NFT_v()uint64`, `balance_v()uint64`, `bridgeAppr_v()byte`, `claimNFT()byte`, `lockNFT()byte`, `lockedNFT_v()byte`, `saved_v(address)uint64`]
    },
  appApproval: `BiAXAAEDBEwICa349ZUInqKetAyS7uvnDOnrz/gP7vXeqQrZ0ISjC8jW3pcG/raLqge5wM37B6aJr9cCnMmS8QMC////////////AUB7oI0GJgMBAAEBACI1ADEYQQVWKmRJIls1ASEFWzUCMRkjEkEACjEAKCEGr2ZCBSI2GgAXSUEBdiI1BCM1BkkhBwxAALJJIQgMQABVSSEJDEAANUkhCgxAABIhChJEKjX/KTT/UCEEr1BCAbwhCRJENhoBNhoCUDYaA1A2GgRQNf8oNP9QQgGgIQgSRDQBJBJEKGQpZFBJNQNXACA1B0IEwEkhCwxAADtJIQwMQAAgIQwSRDQBJBJEIjYaAYgEx0k1/yNbNP8iVU0WNQdCBJIhCxJEKjX/gAEENP9QIQSvUEIBRSEHEkQqNf+AAQM0/1AhBK9QQgExSSENDEAAVEkhDgxAADRJIQ8MQAAZIQ8SRDQBJBJEKGQpZFBJNQNXSCA1B0IEPCEOEkQqNf+AAQI0/1AhBK9QQgDvIQ0SRDQBJBJEKGQpZFBJNQNXlAg1B0IED0khEAxAADlJIREMQAAZIRESRDQBJBJEKGQpZFBJNQNXaAE1B0ID6CEQEkQ0ASQSRChkKWRQSTUDV3sINQdCA8+B/fCFPRJENAEkEkQoZClkUEk1A1dpATUHQgOzNhoCFzUENhoDNhoBF0khEgxAAoJJJAxAAF8kEkQkNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEp2XEtLAyBiETD0Q0/zEAEkQ0/zQDVyAgNAMhFFs0A1dIIDQDV2gBFzQDV2kBFzIGNANXahE0AyEVW0ICk0gkNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSlcAIDX/VyAgNf4hFFs1/VdIIDX8V2gBFzX7V2kBFzX6V2oRNfkhFVs1+FeDETX3gZQBWzX2STUFNfWABGBWMtc09VCwMgYhEwxENPUiVUkhEgxAARdJJAxAANpJJQxAAFMlEkQjNP2IAv4xADT+EkQ0+hREMQAogAkBAAAAAAAAAAFmgAkAAAAAAAAFewGwKTUHNP80/jT9NPwiIzIGNPYjCBY091cICFA091cQAVA0+EIBwUg09hY091cICFA091cQAVA19DEANP4SRDT7RDT6RDT0VwARSTXzIltJNfIiDUSxIrIBI7ISJbIQMQCyFDT9shGzMQAogAkBAAAAAAAAAABmgAkAAAAAAAAE6wGwKTUHNP80/jT9NPwiIjIGNPIjCRY081cICFA081cQAVA0+EIBQEgxADT/EkSACQAAAAAAAARLAbApNQc0/zT+NP00/CM0+jIGNPYWNPdXCAhQNPdXEAFQNPhCAQlJIwxAAFNIIzT9iAHvMQA0/xJEIjT8iAG8STX0I1s09CJVTSISRIAJAAAAAAAAA7wBsCk1BzT/NP40/TT8NPs0+jIGNPYjCBY091cICFA091cQAVA0+EIAsEiADAAAAAAAAAMmdHJ1ZbCABHRydWU1BzT/NP40/TT8NPs0+jIGNPYWNPdXCAhQNPdXEAFQNPhCAHYiEkQhFogBSSI0ARJENARJIhJMNAISEURJNQVJVwAgNf+BIFs1/oAE2emxyjT/UDT+FlCwgRGvSTX9VwARNfwhFogBDbEisgEishIlshAyCrIUNP6yEbMxADT/NP40/yIiMgYhBa80/FcICFA0/FcQAVAiQgAANf81/jX9Nfw1+zX6Nfk1+DX3NP5XABFJNfYiWzX1NPc0+FA0+RZQNPpQNPsWUQcIUDT8FlEHCFA0/lA0/xZQNPZQNPUWUChLAVcAf2cpSwFXfx1nSCQ1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCMxNxJEIjUBIjUCQv+vSTEYYUAABUghBq+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiQ==`,
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
                "name": "v578",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v579",
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
                "name": "v578",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v579",
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
                        "internalType": "struct T9",
                        "name": "elem3",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_IERC721Receiver0_74",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_adminSaveNFT0_74",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_approveBridge0_74",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimNFT0_74",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_lockNFT0_74",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v737",
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
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1099",
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
    "name": "_reach_oe_v1259",
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
    "name": "_reach_oe_v1403",
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
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v806",
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
        "internalType": "struct T9",
        "name": "_a3",
        "type": "tuple"
      }
    ],
    "name": "IERC721Receiver",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes4",
            "name": "elem0",
            "type": "bytes4"
          }
        ],
        "internalType": "struct T9",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
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
                        "internalType": "struct T9",
                        "name": "elem3",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_IERC721Receiver0_74",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_adminSaveNFT0_74",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_approveBridge0_74",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimNFT0_74",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_lockNFT0_74",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v737",
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
    "name": "adminSaveNFT",
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
        "name": "v2434",
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
  Bytecode: `0x608060405260405162002dcd38038062002dcd8339810160408190526200002691620005a2565b6000805543600355620000386200030f565b6040805133815283516020808301919091528085015180516001600160a01b039081168486015291015116606082015290517f7ef2bbfb2ea024d26186c284a79cb0c0f7ce810d4811d99d5fe360d4533f50fb9181900360800190a18051600090819052815160209081018290528251604090810183905283518285018051919091528185018051949094528051518301518451909301929092529051518101519151911515910152620000ef3415600e6200018d565b620000f96200036a565b8051339052602080840180515183516001600160a01b039182169084015281518301518451908216604091820152915151838501805191909216905280516000908401819052815183018190529051436060909101529184015190840151620001639290620001b7565b6020820180516080019190915251600060a09091015262000184816200023a565b505050620007c8565b81620001b35760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620001c16200039c565b60005b60018110156200021757848160018110620001e357620001e362000617565b6020020151828260018110620001fd57620001fd62000617565b6020020152806200020e816200062d565b915050620001c4565b50818184600181106200022e576200022e62000617565b60200201529392505050565b62000244620003e9565b8151516001600160a01b039081168252825160209081015182168184015283516040908101518316818501528185018051519093166060850152825182015115156080808601919091528351820151151560a080870191909152845182015160c08701528451015160e086015283518101515161010086015292519092015151516101208401526003600055436001559051620002e491839101620006a4565b604051602081830303815290604052600290805190602001906200030a9291906200046a565b505050565b6040805160c081019091526000606082018181526080830182905260a0830191909152815260208101620003426200039c565b815260408051606081018252600080825260208281018290529282015291015290565b905290565b6040805160a08101825260009181018281526060820183905260808201929092529081526020810162000365620004f9565b60405180602001604052806001905b620003d2604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003ab5790505090565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915260c081016200042a6200039c565b8152602001600081526020016200045d604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b82805462000478906200078b565b90600052602060002090601f0160209004810192826200049c5760008555620004e7565b82601f10620004b757805160ff1916838001178555620004e7565b82800160010185558215620004e7579182015b82811115620004e7578251825591602001919060010190620004ca565b50620004f592915062000537565b5090565b6040518060c0016040528060006001600160a01b03168152602001600015158152602001600015158152602001600081526020016200045d6200039c565b5b80821115620004f5576000815560010162000538565b604080519081016001600160401b03811182821017156200057f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200059d57600080fd5b919050565b60008183036060811215620005b657600080fd5b620005c06200054e565b835181526040601f1983011215620005d757600080fd5b620005e16200054e565b9150620005f16020850162000585565b8252620006016040850162000585565b6020830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200065057634e487b7160e01b600052601160045260246000fd5b5060010190565b8060005b60018110156200069e576200068784835180518252602080820151908301526040908101511515910152565b60609390930192602091909101906001016200065b565b50505050565b81516001600160a01b031681526101c081016020830151620006d160208401826001600160a01b03169052565b506040830151620006ed60408401826001600160a01b03169052565b5060608301516200070960608401826001600160a01b03169052565b5060808301516200071e608084018215159052565b5060a08301516200073360a084018215159052565b5060c08301516200074860c084018262000657565b5060e08301516101208381019190915261010084015180516101408501526020810151610160850152604001511515610180840152909201516101a09091015290565b600181811c90821680620007a057607f821691505b60208210811415620007c257634e487b7160e01b600052602260045260246000fd5b50919050565b6125f580620007d86000396000f3fe6080604052600436106101015760003560e01c8063832307571161008f578063bee2660911610061578063bee2660914610271578063c106e3fb14610279578063d2b339bd1461028c578063d76a4769146102a1578063e43ffb9f146102b657005b8063832307571461021c578063a1c6864014610231578063ab53f2c614610239578063b03011ff1461025c57005b80633bc5b7bf116100d35780633bc5b7bf14610193578063672756ad146101c057806369e13bd7146101c857806373b4522c146101f4578063819938fc1461020757005b80631844d9c81461010a5780631e93b0f1146101275780633894aea5146101465780633a3dbe721461017357005b3661010857005b005b6101126102cb565b60405190151581526020015b60405180910390f35b34801561013357600080fd5b506003545b60405190815260200161011e565b34801561015257600080fd5b5061015b6102fb565b6040516001600160a01b03909116815260200161011e565b34801561017f57600080fd5b5061013861018e366004611d72565b6103be565b34801561019f57600080fd5b506101b36101ae366004611d72565b6104bc565b60405161011e9190611da5565b6101126104e8565b6101db6101d6366004611f03565b610518565b60405190516001600160e01b031916815260200161011e565b610108610202366004611f55565b61058f565b34801561021357600080fd5b5061015b6105b3565b34801561022857600080fd5b50600154610138565b61011261066c565b34801561024557600080fd5b5061024e61069c565b60405161011e929190611f99565b34801561026857600080fd5b50610112610739565b6101126107fc565b610108610287366004611fd3565b610822565b34801561029857600080fd5b50610138610842565b3480156102ad57600080fd5b50610112610906565b3480156102c257600080fd5b506101386109c9565b60006102d56119e6565b602081015151600290526102e7611a05565b6102f18282610a8c565b6040015192915050565b6000600360005414156103af5760006002805461031790611fe6565b80601f016020809104026020016040519081016040528092919081815260200182805461034390611fe6565b80156103905780601f1061036557610100808354040283529160200191610390565b820191906000526020600020905b81548152906001019060200180831161037357829003601f168201915b50505050508060200190518101906103a89190612100565b5192915050565b6103bb600060086113c0565b90565b6000600360005414156104ab576000600280546103da90611fe6565b80601f016020809104026020016040519081016040528092919081815260200182805461040690611fe6565b80156104535780601f1061042857610100808354040283529160200191610453565b820191906000526020600020905b81548152906001019060200180831161043657829003601f168201915b505050505080602001905181019061046b9190612100565b90506001610478846113e6565b51600181111561048a5761048a611d8f565b146104965760006104a4565b61049f836113e6565b604001515b9392505050565b6104b76000600d6113c0565b919050565b60408051606081018252600080825260208201819052918101919091526104e2826113e6565b92915050565b60006104f26119e6565b60208101515160039052610504611a05565b61050e8282610a8c565b6060015192915050565b60408051602081019091526000815261052f6119e6565b6020818101805151600090528051518201516001600160a01b03898116909152815151830151908816908301528051518201516040018690525151015160600183905261057a611a05565b6105848282610a8c565b519695505050505050565b610597611a05565b6105af6105a9368490038401846121cd565b826114b8565b5050565b600060036000541415610660576000600280546105cf90611fe6565b80601f01602080910402602001604051908101604052809291908181526020018280546105fb90611fe6565b80156106485780601f1061061d57610100808354040283529160200191610648565b820191906000526020600020905b81548152906001019060200180831161062b57829003601f168201915b505050505080602001905181019061050e9190612100565b6103bb600060076113c0565b60006106766119e6565b60208101515160019052610688611a05565b6106928282610a8c565b6020015192915050565b6000606060005460028080546106b190611fe6565b80601f01602080910402602001604051908101604052809291908181526020018280546106dd90611fe6565b801561072a5780601f106106ff5761010080835404028352916020019161072a565b820191906000526020600020905b81548152906001019060200180831161070d57829003601f168201915b50505050509050915091509091565b6000600360005414156107f05760006002805461075590611fe6565b80601f016020809104026020016040519081016040528092919081815260200182805461078190611fe6565b80156107ce5780601f106107a3576101008083540402835291602001916107ce565b820191906000526020600020905b8154815290600101906020018083116107b157829003601f168201915b50505050508060200190518101906107e69190612100565b6080015192915050565b6103bb6000600b6113c0565b60006108066119e6565b60208101515160049052610818611a05565b6107e68282610a8c565b61082a611a05565b6105af61083c36849003840184612223565b82610a8c565b6000600360005414156108fa5760006002805461085e90611fe6565b80601f016020809104026020016040519081016040528092919081815260200182805461088a90611fe6565b80156108d75780601f106108ac576101008083540402835291602001916108d7565b820191906000526020600020905b8154815290600101906020018083116108ba57829003601f168201915b50505050508060200190518101906108ef9190612100565b610120015192915050565b6103bb600060096113c0565b6000600360005414156109bd5760006002805461092290611fe6565b80601f016020809104026020016040519081016040528092919081815260200182805461094e90611fe6565b801561099b5780601f106109705761010080835404028352916020019161099b565b820191906000526020600020905b81548152906001019060200180831161097e57829003601f168201915b50505050508060200190518101906109b39190612100565b60a0015192915050565b6103bb6000600c6113c0565b600060036000541415610a80576000600280546109e590611fe6565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1190611fe6565b8015610a5e5780601f10610a3357610100808354040283529160200191610a5e565b820191906000526020600020905b815481529060010190602001808311610a4157829003601f168201915b5050505050806020019051810190610a769190612100565b60e0015192915050565b6103bb6000600a6113c0565b610a9c60036000541460226113c0565b8151610ab7901580610ab057508251600154145b60236113c0565b600080805560028054610ac990611fe6565b80601f0160208091040260200160405190810160405280929190818152602001828054610af590611fe6565b8015610b425780601f10610b1757610100808354040283529160200191610b42565b820191906000526020600020905b815481529060010190602001808311610b2557829003601f168201915b5050505050806020019051810190610b5a9190612100565b9050610b64611a3e565b610b73600019431060246113c0565b7f77d038d4dcc73c118a46bf53ae889beb41318246fee23bfcd7817212999f77f63385604051610ba4929190612330565b60405180910390a16000602085015151516004811115610bc657610bc6611d8f565b1415610d1a57610bd83415600f6113c0565b6101208201518151526101008201805160209081015183519091015251604090810151825190151590820152820151610c1f90610c189033906000611693565b60106113c0565b60208181018051637472756560e01b90525160405190516001600160e01b03191681527ffb1749781f86a1238cc9d030c2866b0ce4da8d5810ce12f87eca423313eeab74910160405180910390a160208101518352610c7c611b1c565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015183860180519190951690526080870151845190151593019290925260a0860151835190151591015290514391015260c08301518251610cf391906000906116a9565b6020820180516080019190915260e0840151905160a00152610d148161171d565b506113ba565b6001602085015151516004811115610d3457610d34611d8f565b1415610ec257610d46341560116113c0565b6001826101200151610d589190612402565b60408083018051929092526101008401805160209081015184519091015251810151915191151591810191909152820151610da190610d9a9033906001611693565b60126113c0565b8151610db9906001600160a01b0316331460136113c0565b610e0560006001610dcd85606001516113e6565b516001811115610ddf57610ddf611d8f565b14610deb576000610dfd565b610df884606001516113e6565b604001515b1460146113c0565b604051600181527f08fb0ee4e78312e9032ac0feb1e35541a504a1771ca76152e4a539681e17bbd19060200160405180910390a160016020840152610e48611b1c565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015183860180519190951690526080870151845190151593019290925260a086015183519015159082015291514391015260c084015190830151610cf391906000906116a9565b6002602085015151516004811115610edc57610edc611d8f565b141561100e57610eee341560156113c0565b610120820151606082018051919091526101008301805160209081015183519091015251604090810151915191151591810191909152820151610f3f90610f389033906000611693565b60166113c0565b8151610f57906001600160a01b0316331460176113c0565b604051600181527f6bae9c1493d2f6b81640e1b268b6ea2dfed2b6b79d41dfa6929df6de990cd14f9060200160405180910390a160016040840152610f9a611b1c565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015183860180519190951690528351600193019290925260a086015183519015159101529051439082015260c084015190830151610cf391906000906116a9565b600360208501515151600481111561102857611028611d8f565b141561121c5761103a341560186113c0565b610120820151608082018051919091526101008301805160209081015183519091015251604090810151825190151591015260c0830151905161108091906000906116a9565b8160a001819052506110a261109b3384604001516000611693565b60196113c0565b6110c582602001516001600160a01b0316336001600160a01b031614601a6113c0565b6110d48260800151601b6113c0565b6110e38260a00151601c6113c0565b60a081015151516110f7901515601d6113c0565b60a0810151515161110a90600190612430565b60c0820180519190915260a08201805151602090810151835190910152515160409081015191519115159181019190915282015161114a903360016117ec565b336000908152600460209081526040808320805460ff19166001908117825590810193909355519182527fa80b725486f7997326f202b32312eb7c3a7b03dd0ea04de73202663cd003195d910160405180910390a1600160608401526111ae611b1c565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518386018051919095169052835160009301839052835190910182905291514392019190915260a083015160c0840151610cf392906116a9565b600460208501515151600481111561123657611236611d8f565b14156113ba576112483415601e6113c0565b600182610120015161125a9190612402565b60e0820180519190915261010083018051602090810151835190910152516040908101519151911515918101919091528201516112a59061129e9033906001611693565b601f6113c0565b6112c882602001516001600160a01b0316336001600160a01b03161460206113c0565b6112e58260a001516112db5760016112de565b60005b60216113c0565b33600090815260046020908152604091829020805460ff19166001908117825590810181905591519182527f7051be215a204ca0e104ad1d0b58019307cc8fe5e53d9d51ebed60fdc3cff62b910160405180910390a16001608084015261134a611b1c565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015183860180519190951690528351600093018390528351600192019190915291514392019190915260c084015160e0840151610cf392906116a9565b50505050565b816105af5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561143257611432611d8f565b14156114a9576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561147357611473611d8f565b600181111561148457611484611d8f565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6114c860036000541460276113c0565b81516114e39015806114dc57508251600154145b60286113c0565b6000808055600280546114f590611fe6565b80601f016020809104026020016040519081016040528092919081815260200182805461152190611fe6565b801561156e5780601f106115435761010080835404028352916020019161156e565b820191906000526020600020905b81548152906001019060200180831161155157829003601f168201915b50505050508060200190518101906115869190612100565b905061159860001943101560296113c0565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a16115eb341560256113c0565b8051611603906001600160a01b0316331460266113c0565b61160b611b1c565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451908416908201526060808601518386018051919095169052608080870151855190151594019390935260a080870151855190151593019290925283514391015260c085015183519092019190915260e0840151915101526113ba8161171d565b60006116a183853085611800565b949350505050565b6116b1611b4c565b60005b60018110156116fd578481600181106116cf576116cf61241a565b60200201518282600181106116e6576116e661241a565b6020020152806116f581612447565b9150506116b4565b50818184600181106117115761171161241a565b60200201529392505050565b611725611b97565b8151516001600160a01b039081168252825160209081015182168184015283516040908101518316818501528185018051519093166060850152825182015115156080808601919091528351820151151560a080870191909152845182015160c08701528451015160e0860152835181015151610100860152925190920151515161012084015260036000554360015590516117c3918391016124a6565b604051602081830303815290604052600290805190602001906117e7929190611c15565b505050565b6117f78383836118da565b6117e757600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161186791612586565b60006040518083038185875af1925050503d80600081146118a4576040519150601f19603f3d011682016040523d82523d6000602084013e6118a9565b606091505b50915091506118ba828260016119ab565b50808060200190518101906118cf91906125a2565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161193991612586565b60006040518083038185875af1925050503d8060008114611976576040519150601f19603f3d011682016040523d82523d6000602084013e61197b565b606091505b509150915061198c828260026119ab565b50808060200190518101906119a191906125a2565b9695505050505050565b606083156119ba5750816104a4565b8251156119ca5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016113dd565b604051806040016040528060008152602001611a00611c99565b905290565b6040805160c08101909152600060a0820190815281905b8152600060208201819052604082018190526060820181905260809091015290565b604080516101608101825260006101008201818152610120830182905261014083018290528252825160208082018552828252808401919091528351606080820186528382528183018490528186018490528486019190915284518082018652838152808301849052808601849052818501528451908101855282815290810182905292830152608081019190915260a08101611ad9611b4c565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291015290565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101611a00611cac565b60405180602001604052806001905b611b81604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081611b5b5790505090565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915260c08101611bd6611b4c565b815260200160008152602001611c08604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b828054611c2190611fe6565b90600052602060002090601f016020900481019282611c435760008555611c89565b82601f10611c5c57805160ff1916838001178555611c89565b82800160010185558215611c89579182015b82811115611c89578251825591602001919060010190611c6e565b50611c95929150611ce8565b5090565b6040518060200160405280611a00611cfd565b6040518060c0016040528060006001600160a01b0316815260200160001515815260200160001515815260200160008152602001611c08611b4c565b5b80821115611c955760008155600101611ce9565b6040805160c081019091528060008152602001611a1c604051806080016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001611a0060408051602081019091526000815290565b6001600160a01b0381168114611d6f57600080fd5b50565b600060208284031215611d8457600080fd5b81356104a481611d5a565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110611dbc57611dbc611d8f565b808352506020830151151560208301526040830151604083015292915050565b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715611e1557611e15611ddc565b60405290565b604051610140810167ffffffffffffffff81118282101715611e1557611e15611ddc565b6040805190810167ffffffffffffffff81118282101715611e1557611e15611ddc565b60405160c0810167ffffffffffffffff81118282101715611e1557611e15611ddc565b6040516080810167ffffffffffffffff81118282101715611e1557611e15611ddc565b600060208284031215611eba57600080fd5b6040516020810181811067ffffffffffffffff82111715611edd57611edd611ddc565b60405290508082356001600160e01b031981168114611efb57600080fd5b905292915050565b60008060008060808587031215611f1957600080fd5b8435611f2481611d5a565b93506020850135611f3481611d5a565b925060408501359150611f4a8660608701611ea8565b905092959194509250565b600060408284031215611f6757600080fd5b50919050565b60005b83811015611f88578181015183820152602001611f70565b838111156113ba5750506000910152565b8281526040602082015260008251806040840152611fbe816060850160208701611f6d565b601f01601f1916919091016060019392505050565b60006101408284031215611f6757600080fd5b600181811c90821680611ffa57607f821691505b60208210811415611f6757634e487b7160e01b600052602260045260246000fd5b80516104b781611d5a565b8015158114611d6f57600080fd5b80516104b781612026565b60006060828403121561205157600080fd5b6040516060810181811067ffffffffffffffff8211171561207457612074611ddc565b80604052508091508251815260208301516020820152604083015161209881612026565b6040919091015292915050565b600082601f8301126120b657600080fd5b6120be611df2565b806060808501868111156120d157600080fd5b855b818110156120f4576120e5888261203f565b855260209094019382016120d3565b50919695505050505050565b60006101c0828403121561211357600080fd5b61211b611e1b565b6121248361201b565b81526121326020840161201b565b60208201526121436040840161201b565b60408201526121546060840161201b565b606082015261216560808401612034565b608082015261217660a08401612034565b60a08201526121888460c085016120a5565b60c08201526101208084015160e08301526121a785610140860161203f565b6101008301526101a084015181830152508091505092915050565b80356104b781612026565b6000604082840312156121df57600080fd5b6040516040810181811067ffffffffffffffff8211171561220257612202611ddc565b60405282358152602083013561221781612026565b60208201529392505050565b600081830361014081121561223757600080fd5b61223f611e3f565b8335815261012080601f198401121561225757600080fd5b61225f611df2565b612267611e62565b60208701356005811061227957600080fd5b81526080603f198601121561228d57600080fd5b612295611e85565b945060408701356122a581611d5a565b855260608701356122b581611d5a565b6020860152608087013560408601526122d18860a08901611ea8565b60608601528460208201526122e860c088016121c2565b60408201526122f960e088016121c2565b606082015261230b61010088016121c2565b608082015261231b8388016121c2565b60a08201528152602083015250949350505050565b6001600160a01b038381168252825160208084019190915283015151805161016084019291906005811061236657612366611d8f565b806040860152506020810151828151166060860152826020820151166080860152604081015160a086015263ffffffff60e01b6060820151511660c086015250604081015191506123bb60e085018315159052565b606081015115156101008501526080810151151561012085015260a001511515610140909301929092529392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612415576124156123ec565b500190565b634e487b7160e01b600052603260045260246000fd5b600082821015612442576124426123ec565b500390565b600060001982141561245b5761245b6123ec565b5060010190565b8060005b60018110156113ba5761249084835180518252602080820151908301526040908101511515910152565b6060939093019260209190910190600101612466565b81516001600160a01b031681526101c0810160208301516124d260208401826001600160a01b03169052565b5060408301516124ed60408401826001600160a01b03169052565b50606083015161250860608401826001600160a01b03169052565b50608083015161251c608084018215159052565b5060a083015161253060a084018215159052565b5060c083015161254360c0840182612462565b5060e08301516101208381019190915261010084015180516101408501526020810151610160850152604001511515610180840152909201516101a09091015290565b60008251612598818460208701611f6d565b9190910192915050565b6000602082840312156125b457600080fd5b81516104a48161202656fea26469706673582212203e7df26cbe8d0453489d0c6a0cb2351fdd593e571e376abe922803643643b5fb64736f6c634300080c0033`,
  BytecodeLen: 11725,
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
    at: './indexBridge.rsh:186:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './indexBridge.rsh:65:71:after expr stmt semicolon',
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
  "IERC721Receiver": IERC721Receiver,
  "adminSaveNFT": adminSaveNFT,
  "approveBridge": approveBridge,
  "claimNFT": claimNFT,
  "lockNFT": lockNFT
  };
export const _APIs = {
  IERC721Receiver: IERC721Receiver,
  adminSaveNFT: adminSaveNFT,
  approveBridge: approveBridge,
  claimNFT: claimNFT,
  lockNFT: lockNFT
  };
