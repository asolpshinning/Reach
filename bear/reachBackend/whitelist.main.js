// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
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
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  const map1_ctc = ctc7;
  
  
  return {
    infos: {
      amIwhiteListed: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v446, v447, v448, v458, v461] = svs;
            return (await ((async (_v465 ) => {
                const v465 = stdlib.protect(ctc0, _v465, null);
              
              const v466 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v465), null);
              let v467;
              switch (v466[0]) {
                case 'None': {
                  const v468 = v466[1];
                  v467 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v469 = v466[1];
                  v467 = true;
                  
                  break;
                  }
                }
              
              return v467;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        }
      },
    views: {
      3: [ctc0, ctc1, ctc2, ctc1, ctc5]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  return {
    mapDataTy: ctc2
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
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    tok: ctc2,
    tokenAmtToDistribute: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc3]);
  const ctc7 = stdlib.T_Data({
    optIn0_75: ctc5,
    payTokens0_75: ctc6,
    receiveToken0_75: ctc5
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const v433 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v434 = [v433];
  const v440 = 'I have deployed';
  const v441 = stdlib.protect(ctc4, await interact.getParams(v440), {
    at: './index.rsh:25:76:application',
    fs: ['at ./index.rsh:24:17:application call to [unknown function] (defined at: ./index.rsh:24:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v442 = v441.tok;
  const v443 = v441.tokenAmtToDistribute;
  
  const txn1 = await (ctc.sendrecv({
    args: [v443, v442],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:28:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v447, v448], secs: v450, time: v449, didSend: v33, from: v446 } = txn1;
      
      const v451 = v434[stdlib.checkedBigNumberify('./index.rsh:28:13:dot', stdlib.UInt_max, '0')];
      const v453 = v451[stdlib.checkedBigNumberify('./index.rsh:28:13:dot', stdlib.UInt_max, '1')];
      const v454 = v451[stdlib.checkedBigNumberify('./index.rsh:28:13:dot', stdlib.UInt_max, '2')];
      const v455 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v453, v454];
      const v456 = stdlib.Array_set(v434, stdlib.checkedBigNumberify('./index.rsh:28:13:dot', stdlib.UInt_max, '0'), v455);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v448
        });
      ;
      const v458 = stdlib.checkedBigNumberify('./index.rsh:38:37:decimal', stdlib.UInt_max, '0');
      const v459 = v449;
      const v461 = v456;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v448
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
    tys: [ctc3, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v447, v448], secs: v450, time: v449, didSend: v33, from: v446 } = txn1;
  const v451 = v434[stdlib.checkedBigNumberify('./index.rsh:28:13:dot', stdlib.UInt_max, '0')];
  const v453 = v451[stdlib.checkedBigNumberify('./index.rsh:28:13:dot', stdlib.UInt_max, '1')];
  const v454 = v451[stdlib.checkedBigNumberify('./index.rsh:28:13:dot', stdlib.UInt_max, '2')];
  const v455 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v453, v454];
  const v456 = stdlib.Array_set(v434, stdlib.checkedBigNumberify('./index.rsh:28:13:dot', stdlib.UInt_max, '0'), v455);
  ;
  ;
  let v458 = stdlib.checkedBigNumberify('./index.rsh:38:37:decimal', stdlib.UInt_max, '0');
  let v459 = v449;
  let v461 = v456;
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc7],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v446, v447, v448, v458, v461],
        evt_cnt: 0,
        funcNum: 3,
        lct: v459,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:104:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v868, time: v867, didSend: v348, from: v866 } = txn3;
          
          ;
          const cv458 = v458;
          const cv459 = v867;
          const cv461 = v461;
          
          await (async () => {
            const v458 = cv458;
            const v459 = cv459;
            const v461 = cv461;
            
            if (await (async () => {
              
              return true;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v448
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
        tys: [ctc9, ctc3, ctc2, ctc3, ctc11],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v868, time: v867, didSend: v348, from: v866 } = txn3;
      ;
      const v869 = stdlib.addressEq(v446, v866);
      stdlib.assert(v869, {
        at: './index.rsh:104:21:dot',
        fs: ['at ./index.rsh:103:40:application call to [unknown function] (defined at: ./index.rsh:103:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv458 = v458;
      const cv459 = v867;
      const cv461 = v461;
      
      v458 = cv458;
      v459 = cv459;
      v461 = cv461;
      
      continue;
      }
    else {
      const {data: [v551], secs: v553, time: v552, didSend: v271, from: v550 } = txn2;
      switch (v551[0]) {
        case 'optIn0_75': {
          const v554 = v551[1];
          undefined /* setApiDetails */;
          ;
          const v589 = v461[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0')];
          const v590 = v589[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0')];
          const v594 = v589[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '1')];
          const v595 = v589[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '2')];
          const v596 = [v590, v594, v595];
          const v597 = stdlib.Array_set(v461, stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0'), v596);
          ;
          const v599 = stdlib.le(v458, stdlib.checkedBigNumberify('./index.rsh:97:34:decimal', stdlib.UInt_max, '4'));
          stdlib.assert(v599, {
            at: './index.rsh:97:24:application',
            fs: ['at ./index.rsh:96:13:application call to [unknown function] (defined at: ./index.rsh:96:13:function exp)'],
            msg: 'Max white list reached',
            who: 'Creator'
            });
          await stdlib.mapSet(map0, v550, null);
          const v601 = true;
          await txn2.getOutput('optIn', 'v601', ctc8, v601);
          const v607 = stdlib.add(v458, stdlib.checkedBigNumberify('./index.rsh:100:33:decimal', stdlib.UInt_max, '1'));
          const cv458 = v607;
          const cv459 = v552;
          const cv461 = v597;
          
          v458 = cv458;
          v459 = cv459;
          v461 = cv461;
          
          continue;
          break;
          }
        case 'payTokens0_75': {
          const v658 = v551[1];
          undefined /* setApiDetails */;
          const v670 = v658[stdlib.checkedBigNumberify('./index.rsh:45:13:spread', stdlib.UInt_max, '0')];
          ;
          const v693 = v461[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0')];
          const v694 = v693[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0')];
          const v695 = stdlib.add(v694, v670);
          const v698 = v693[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '1')];
          const v699 = v693[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '2')];
          const v700 = [v695, v698, v699];
          const v701 = stdlib.Array_set(v461, stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0'), v700);
          ;
          const v715 = stdlib.addressEq(v550, v446);
          stdlib.assert(v715, {
            at: './index.rsh:57:24:application',
            fs: ['at ./index.rsh:56:13:application call to [unknown function] (defined at: ./index.rsh:56:13:function exp)'],
            msg: 'You must be the Creator to pay tokens',
            who: 'Creator'
            });
          const v716 = stdlib.gt(v670, stdlib.checkedBigNumberify('./index.rsh:58:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v716, {
            at: './index.rsh:58:24:application',
            fs: ['at ./index.rsh:56:13:application call to [unknown function] (defined at: ./index.rsh:56:13:function exp)'],
            msg: 'Amount must be greater than 0',
            who: 'Creator'
            });
          const v717 = true;
          await txn2.getOutput('payTokens', 'v717', ctc8, v717);
          const cv458 = v458;
          const cv459 = v552;
          const cv461 = v701;
          
          v458 = cv458;
          v459 = cv459;
          v461 = cv461;
          
          continue;
          break;
          }
        case 'receiveToken0_75': {
          const v762 = v551[1];
          undefined /* setApiDetails */;
          ;
          const v797 = v461[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0')];
          const v798 = v797[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0')];
          const v802 = v797[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '1')];
          const v803 = v797[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '2')];
          const v804 = [v798, v802, v803];
          const v805 = stdlib.Array_set(v461, stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0'), v804);
          ;
          const v830 = stdlib.gt(v447, stdlib.checkedBigNumberify('./index.rsh:77:47:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v830, {
            at: './index.rsh:77:24:application',
            fs: ['at ./index.rsh:76:13:application call to [unknown function] (defined at: ./index.rsh:76:13:function exp)'],
            msg: 'not enough tokens to distribute',
            who: 'Creator'
            });
          const v831 = v805[stdlib.checkedBigNumberify('./index.rsh:78:32:application', stdlib.UInt_max, '0')];
          const v832 = v831[stdlib.checkedBigNumberify('./index.rsh:78:32:application', stdlib.UInt_max, '0')];
          const v833 = stdlib.gt(v832, stdlib.checkedBigNumberify('./index.rsh:78:40:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v833, {
            at: './index.rsh:78:24:application',
            fs: ['at ./index.rsh:76:13:application call to [unknown function] (defined at: ./index.rsh:76:13:function exp)'],
            msg: 'Zero balance of token',
            who: 'Creator'
            });
          const v836 = stdlib.div(v447, stdlib.checkedBigNumberify('./index.rsh:79:64:decimal', stdlib.UInt_max, '5'));
          const v837 = stdlib.ge(v832, v836);
          stdlib.assert(v837, {
            at: './index.rsh:79:24:application',
            fs: ['at ./index.rsh:76:13:application call to [unknown function] (defined at: ./index.rsh:76:13:function exp)'],
            msg: 'not enough tokens to distribute',
            who: 'Creator'
            });
          const v838 = stdlib.ge(v458, stdlib.checkedBigNumberify('./index.rsh:80:34:decimal', stdlib.UInt_max, '5'));
          stdlib.assert(v838, {
            at: './index.rsh:80:24:application',
            fs: ['at ./index.rsh:76:13:application call to [unknown function] (defined at: ./index.rsh:76:13:function exp)'],
            msg: 'Not enough white listed',
            who: 'Creator'
            });
          const v839 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v550), null);
          let v840;
          switch (v839[0]) {
            case 'None': {
              const v841 = v839[1];
              v840 = false;
              
              break;
              }
            case 'Some': {
              const v842 = v839[1];
              v840 = true;
              
              break;
              }
            }
          const v844 = v840 ? false : true;
          stdlib.assert(v844, {
            at: './index.rsh:81:24:application',
            fs: ['at ./index.rsh:76:13:application call to [unknown function] (defined at: ./index.rsh:76:13:function exp)'],
            msg: 'You already received tokens',
            who: 'Creator'
            });
          const v851 = stdlib.sub(v832, v836);
          const v854 = v831[stdlib.checkedBigNumberify('./index.rsh:82:66:application', stdlib.UInt_max, '1')];
          const v855 = v831[stdlib.checkedBigNumberify('./index.rsh:82:66:application', stdlib.UInt_max, '2')];
          const v856 = [v851, v854, v855];
          const v857 = stdlib.Array_set(v805, stdlib.checkedBigNumberify('./index.rsh:82:66:application', stdlib.UInt_max, '0'), v856);
          ;
          await stdlib.mapSet(map1, v550, null);
          const v859 = true;
          await txn2.getOutput('receiveToken', 'v859', ctc8, v859);
          const cv458 = v458;
          const cv459 = v552;
          const cv461 = v857;
          
          v458 = cv458;
          v459 = cv459;
          v461 = cv461;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  };
export async function _optIn3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _optIn3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _optIn3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc3]);
  const ctc10 = stdlib.T_Data({
    optIn0_75: ctc8,
    payTokens0_75: ctc9,
    receiveToken0_75: ctc8
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v446, v447, v448, v458, v461] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3, ctc4, ctc3, ctc7]);
  const v512 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:90:13:application call to [unknown function] (defined at: ./index.rsh:90:13:function exp)', 'at ./index.rsh:38:35:application call to "runoptIn0_75" (defined at: ./index.rsh:87:14:function exp)', 'at ./index.rsh:38:35:application call to [unknown function] (defined at: ./index.rsh:38:35:function exp)'],
    msg: 'in',
    who: 'optIn'
    });
  const v514 = stdlib.le(v458, stdlib.checkedBigNumberify('./index.rsh:91:33:decimal', stdlib.UInt_max, '4'));
  stdlib.assert(v514, {
    at: './index.rsh:91:23:application',
    fs: ['at ./index.rsh:90:13:application call to [unknown function] (defined at: ./index.rsh:90:17:function exp)', 'at ./index.rsh:90:13:application call to [unknown function] (defined at: ./index.rsh:90:13:function exp)', 'at ./index.rsh:38:35:application call to "runoptIn0_75" (defined at: ./index.rsh:87:14:function exp)', 'at ./index.rsh:38:35:application call to [unknown function] (defined at: ./index.rsh:38:35:function exp)'],
    msg: 'Max white list reached',
    who: 'optIn'
    });
  const v517 = ['optIn0_75', v512];
  
  const txn1 = await (ctc.sendrecv({
    args: [v446, v447, v448, v458, v461, v517],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:94:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:94:25:decimal', stdlib.UInt_max, '0'), v448]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v551], secs: v553, time: v552, didSend: v271, from: v550 } = txn1;
      
      switch (v551[0]) {
        case 'optIn0_75': {
          const v554 = v551[1];
          sim_r.txns.push({
            kind: 'api',
            who: "optIn"
            });
          ;
          const v589 = v461[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0')];
          const v590 = v589[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0')];
          const v594 = v589[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '1')];
          const v595 = v589[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '2')];
          const v596 = [v590, v594, v595];
          const v597 = stdlib.Array_set(v461, stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0'), v596);
          ;
          await stdlib.simMapSet(sim_r, 0, v550, null);
          const v601 = true;
          const v602 = await txn1.getOutput('optIn', 'v601', ctc5, v601);
          
          const v607 = stdlib.add(v458, stdlib.checkedBigNumberify('./index.rsh:100:33:decimal', stdlib.UInt_max, '1'));
          const v1126 = v607;
          const v1128 = v597;
          sim_r.isHalt = false;
          
          break;
          }
        case 'payTokens0_75': {
          const v658 = v551[1];
          
          break;
          }
        case 'receiveToken0_75': {
          const v762 = v551[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc3, ctc7, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v551], secs: v553, time: v552, didSend: v271, from: v550 } = txn1;
  switch (v551[0]) {
    case 'optIn0_75': {
      const v554 = v551[1];
      undefined /* setApiDetails */;
      ;
      const v589 = v461[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0')];
      const v590 = v589[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0')];
      const v594 = v589[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '1')];
      const v595 = v589[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '2')];
      const v596 = [v590, v594, v595];
      const v597 = stdlib.Array_set(v461, stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0'), v596);
      ;
      const v599 = stdlib.le(v458, stdlib.checkedBigNumberify('./index.rsh:97:34:decimal', stdlib.UInt_max, '4'));
      stdlib.assert(v599, {
        at: './index.rsh:97:24:application',
        fs: ['at ./index.rsh:96:13:application call to [unknown function] (defined at: ./index.rsh:96:13:function exp)'],
        msg: 'Max white list reached',
        who: 'optIn'
        });
      await stdlib.mapSet(map0, v550, null);
      const v601 = true;
      const v602 = await txn1.getOutput('optIn', 'v601', ctc5, v601);
      if (v271) {
        stdlib.protect(ctc0, await interact.out(v554, v602), {
          at: './index.rsh:88:13:application',
          fs: ['at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:13:function exp)', 'at ./index.rsh:99:20:application call to "res" (defined at: ./index.rsh:96:13:function exp)', 'at ./index.rsh:96:13:application call to [unknown function] (defined at: ./index.rsh:96:13:function exp)'],
          msg: 'out',
          who: 'optIn'
          });
        }
      else {
        }
      
      const v607 = stdlib.add(v458, stdlib.checkedBigNumberify('./index.rsh:100:33:decimal', stdlib.UInt_max, '1'));
      const v1126 = v607;
      const v1128 = v597;
      return;
      
      break;
      }
    case 'payTokens0_75': {
      const v658 = v551[1];
      return;
      break;
      }
    case 'receiveToken0_75': {
      const v762 = v551[1];
      return;
      break;
      }
    }
  
  
  };
export async function _payTokens3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _payTokens3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _payTokens3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    optIn0_75: ctc9,
    payTokens0_75: ctc8,
    receiveToken0_75: ctc9
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v446, v447, v448, v458, v461] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3, ctc4, ctc3, ctc7]);
  const v474 = ctc.selfAddress();
  const v476 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:13:function exp)', 'at ./index.rsh:38:35:application call to "runpayTokens0_75" (defined at: ./index.rsh:45:13:function exp)', 'at ./index.rsh:38:35:application call to [unknown function] (defined at: ./index.rsh:38:35:function exp)'],
    msg: 'in',
    who: 'payTokens'
    });
  const v477 = v476[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v480 = stdlib.gt(v477, stdlib.checkedBigNumberify('./index.rsh:49:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v480, {
    at: './index.rsh:49:23:application',
    fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:20:function exp)', 'at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:13:function exp)', 'at ./index.rsh:38:35:application call to "runpayTokens0_75" (defined at: ./index.rsh:45:13:function exp)', 'at ./index.rsh:38:35:application call to [unknown function] (defined at: ./index.rsh:38:35:function exp)'],
    msg: 'Amount must be greater than 0',
    who: 'payTokens'
    });
  const v481 = stdlib.addressEq(v474, v446);
  stdlib.assert(v481, {
    at: './index.rsh:50:23:application',
    fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:20:function exp)', 'at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:13:function exp)', 'at ./index.rsh:38:35:application call to "runpayTokens0_75" (defined at: ./index.rsh:45:13:function exp)', 'at ./index.rsh:38:35:application call to [unknown function] (defined at: ./index.rsh:38:35:function exp)'],
    msg: 'You must be the Creator to pay tokens',
    who: 'payTokens'
    });
  const v485 = ['payTokens0_75', v476];
  
  const txn1 = await (ctc.sendrecv({
    args: [v446, v447, v448, v458, v461, v485],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:54:24:decimal', stdlib.UInt_max, '0'), [[v477, v448]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v551], secs: v553, time: v552, didSend: v271, from: v550 } = txn1;
      
      switch (v551[0]) {
        case 'optIn0_75': {
          const v554 = v551[1];
          
          break;
          }
        case 'payTokens0_75': {
          const v658 = v551[1];
          sim_r.txns.push({
            kind: 'api',
            who: "payTokens"
            });
          const v670 = v658[stdlib.checkedBigNumberify('./index.rsh:45:13:spread', stdlib.UInt_max, '0')];
          ;
          const v693 = v461[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0')];
          const v694 = v693[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0')];
          const v695 = stdlib.add(v694, v670);
          const v698 = v693[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '1')];
          const v699 = v693[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '2')];
          const v700 = [v695, v698, v699];
          const v701 = stdlib.Array_set(v461, stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0'), v700);
          sim_r.txns.push({
            amt: v670,
            kind: 'to',
            tok: v448
            });
          const v717 = true;
          const v718 = await txn1.getOutput('payTokens', 'v717', ctc5, v717);
          
          const v1138 = v458;
          const v1140 = v701;
          sim_r.isHalt = false;
          
          break;
          }
        case 'receiveToken0_75': {
          const v762 = v551[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc3, ctc7, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v551], secs: v553, time: v552, didSend: v271, from: v550 } = txn1;
  switch (v551[0]) {
    case 'optIn0_75': {
      const v554 = v551[1];
      return;
      break;
      }
    case 'payTokens0_75': {
      const v658 = v551[1];
      undefined /* setApiDetails */;
      const v670 = v658[stdlib.checkedBigNumberify('./index.rsh:45:13:spread', stdlib.UInt_max, '0')];
      ;
      const v693 = v461[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0')];
      const v694 = v693[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0')];
      const v695 = stdlib.add(v694, v670);
      const v698 = v693[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '1')];
      const v699 = v693[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '2')];
      const v700 = [v695, v698, v699];
      const v701 = stdlib.Array_set(v461, stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0'), v700);
      ;
      const v715 = stdlib.addressEq(v550, v446);
      stdlib.assert(v715, {
        at: './index.rsh:57:24:application',
        fs: ['at ./index.rsh:56:13:application call to [unknown function] (defined at: ./index.rsh:56:13:function exp)'],
        msg: 'You must be the Creator to pay tokens',
        who: 'payTokens'
        });
      const v716 = stdlib.gt(v670, stdlib.checkedBigNumberify('./index.rsh:58:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v716, {
        at: './index.rsh:58:24:application',
        fs: ['at ./index.rsh:56:13:application call to [unknown function] (defined at: ./index.rsh:56:13:function exp)'],
        msg: 'Amount must be greater than 0',
        who: 'payTokens'
        });
      const v717 = true;
      const v718 = await txn1.getOutput('payTokens', 'v717', ctc5, v717);
      if (v271) {
        stdlib.protect(ctc0, await interact.out(v658, v718), {
          at: './index.rsh:46:13:application',
          fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:13:function exp)', 'at ./index.rsh:59:20:application call to "res" (defined at: ./index.rsh:56:13:function exp)', 'at ./index.rsh:56:13:application call to [unknown function] (defined at: ./index.rsh:56:13:function exp)'],
          msg: 'out',
          who: 'payTokens'
          });
        }
      else {
        }
      
      const v1138 = v458;
      const v1140 = v701;
      return;
      
      break;
      }
    case 'receiveToken0_75': {
      const v762 = v551[1];
      return;
      break;
      }
    }
  
  
  };
export async function _receiveToken3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _receiveToken3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _receiveToken3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc3]);
  const ctc10 = stdlib.T_Data({
    optIn0_75: ctc8,
    payTokens0_75: ctc9,
    receiveToken0_75: ctc8
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v446, v447, v448, v458, v461] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3, ctc4, ctc3, ctc7]);
  const v487 = ctc.selfAddress();
  const v489 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:65:13:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)', 'at ./index.rsh:38:35:application call to "runreceiveToken0_75" (defined at: ./index.rsh:62:14:function exp)', 'at ./index.rsh:38:35:application call to [unknown function] (defined at: ./index.rsh:38:35:function exp)'],
    msg: 'in',
    who: 'receiveToken'
    });
  const v491 = stdlib.gt(v447, stdlib.checkedBigNumberify('./index.rsh:66:46:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v491, {
    at: './index.rsh:66:23:application',
    fs: ['at ./index.rsh:65:13:application call to [unknown function] (defined at: ./index.rsh:65:17:function exp)', 'at ./index.rsh:65:13:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)', 'at ./index.rsh:38:35:application call to "runreceiveToken0_75" (defined at: ./index.rsh:62:14:function exp)', 'at ./index.rsh:38:35:application call to [unknown function] (defined at: ./index.rsh:38:35:function exp)'],
    msg: 'not enough tokens to distribute',
    who: 'receiveToken'
    });
  const v492 = v461[stdlib.checkedBigNumberify('./index.rsh:67:31:application', stdlib.UInt_max, '0')];
  const v493 = v492[stdlib.checkedBigNumberify('./index.rsh:67:31:application', stdlib.UInt_max, '0')];
  const v494 = stdlib.gt(v493, stdlib.checkedBigNumberify('./index.rsh:67:39:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v494, {
    at: './index.rsh:67:23:application',
    fs: ['at ./index.rsh:65:13:application call to [unknown function] (defined at: ./index.rsh:65:17:function exp)', 'at ./index.rsh:65:13:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)', 'at ./index.rsh:38:35:application call to "runreceiveToken0_75" (defined at: ./index.rsh:62:14:function exp)', 'at ./index.rsh:38:35:application call to [unknown function] (defined at: ./index.rsh:38:35:function exp)'],
    msg: 'Zero balance of token',
    who: 'receiveToken'
    });
  const v497 = stdlib.div(v447, stdlib.checkedBigNumberify('./index.rsh:68:63:decimal', stdlib.UInt_max, '5'));
  const v498 = stdlib.ge(v493, v497);
  stdlib.assert(v498, {
    at: './index.rsh:68:23:application',
    fs: ['at ./index.rsh:65:13:application call to [unknown function] (defined at: ./index.rsh:65:17:function exp)', 'at ./index.rsh:65:13:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)', 'at ./index.rsh:38:35:application call to "runreceiveToken0_75" (defined at: ./index.rsh:62:14:function exp)', 'at ./index.rsh:38:35:application call to [unknown function] (defined at: ./index.rsh:38:35:function exp)'],
    msg: 'not enough tokens to distribute',
    who: 'receiveToken'
    });
  const v499 = stdlib.ge(v458, stdlib.checkedBigNumberify('./index.rsh:69:33:decimal', stdlib.UInt_max, '5'));
  stdlib.assert(v499, {
    at: './index.rsh:69:23:application',
    fs: ['at ./index.rsh:65:13:application call to [unknown function] (defined at: ./index.rsh:65:17:function exp)', 'at ./index.rsh:65:13:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)', 'at ./index.rsh:38:35:application call to "runreceiveToken0_75" (defined at: ./index.rsh:62:14:function exp)', 'at ./index.rsh:38:35:application call to [unknown function] (defined at: ./index.rsh:38:35:function exp)'],
    msg: 'Not enough white listed',
    who: 'receiveToken'
    });
  const v500 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v487), null);
  let v501;
  switch (v500[0]) {
    case 'None': {
      const v502 = v500[1];
      v501 = false;
      
      break;
      }
    case 'Some': {
      const v503 = v500[1];
      v501 = true;
      
      break;
      }
    }
  const v505 = v501 ? false : true;
  stdlib.assert(v505, {
    at: './index.rsh:70:23:application',
    fs: ['at ./index.rsh:65:13:application call to [unknown function] (defined at: ./index.rsh:65:17:function exp)', 'at ./index.rsh:65:13:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)', 'at ./index.rsh:38:35:application call to "runreceiveToken0_75" (defined at: ./index.rsh:62:14:function exp)', 'at ./index.rsh:38:35:application call to [unknown function] (defined at: ./index.rsh:38:35:function exp)'],
    msg: 'YOu already received tokens',
    who: 'receiveToken'
    });
  const v508 = ['receiveToken0_75', v489];
  
  const txn1 = await (ctc.sendrecv({
    args: [v446, v447, v448, v458, v461, v508],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:74:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:74:25:decimal', stdlib.UInt_max, '0'), v448]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v551], secs: v553, time: v552, didSend: v271, from: v550 } = txn1;
      
      switch (v551[0]) {
        case 'optIn0_75': {
          const v554 = v551[1];
          
          break;
          }
        case 'payTokens0_75': {
          const v658 = v551[1];
          
          break;
          }
        case 'receiveToken0_75': {
          const v762 = v551[1];
          sim_r.txns.push({
            kind: 'api',
            who: "receiveToken"
            });
          ;
          const v797 = v461[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0')];
          const v798 = v797[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0')];
          const v802 = v797[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '1')];
          const v803 = v797[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '2')];
          const v804 = [v798, v802, v803];
          const v805 = stdlib.Array_set(v461, stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0'), v804);
          ;
          const v831 = v805[stdlib.checkedBigNumberify('./index.rsh:78:32:application', stdlib.UInt_max, '0')];
          const v832 = v831[stdlib.checkedBigNumberify('./index.rsh:78:32:application', stdlib.UInt_max, '0')];
          const v836 = stdlib.div(v447, stdlib.checkedBigNumberify('./index.rsh:79:64:decimal', stdlib.UInt_max, '5'));
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v550), null);
          const v851 = stdlib.sub(v832, v836);
          const v854 = v831[stdlib.checkedBigNumberify('./index.rsh:82:66:application', stdlib.UInt_max, '1')];
          const v855 = v831[stdlib.checkedBigNumberify('./index.rsh:82:66:application', stdlib.UInt_max, '2')];
          const v856 = [v851, v854, v855];
          const v857 = stdlib.Array_set(v805, stdlib.checkedBigNumberify('./index.rsh:82:66:application', stdlib.UInt_max, '0'), v856);
          sim_r.txns.push({
            kind: 'from',
            to: v550,
            tok: v448
            });
          await stdlib.simMapSet(sim_r, 1, v550, null);
          const v859 = true;
          const v860 = await txn1.getOutput('receiveToken', 'v859', ctc5, v859);
          
          const v1150 = v458;
          const v1152 = v857;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc3, ctc7, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v551], secs: v553, time: v552, didSend: v271, from: v550 } = txn1;
  switch (v551[0]) {
    case 'optIn0_75': {
      const v554 = v551[1];
      return;
      break;
      }
    case 'payTokens0_75': {
      const v658 = v551[1];
      return;
      break;
      }
    case 'receiveToken0_75': {
      const v762 = v551[1];
      undefined /* setApiDetails */;
      ;
      const v797 = v461[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0')];
      const v798 = v797[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0')];
      const v802 = v797[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '1')];
      const v803 = v797[stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '2')];
      const v804 = [v798, v802, v803];
      const v805 = stdlib.Array_set(v461, stdlib.checkedBigNumberify('./index.rsh:38:35:dot', stdlib.UInt_max, '0'), v804);
      ;
      const v830 = stdlib.gt(v447, stdlib.checkedBigNumberify('./index.rsh:77:47:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v830, {
        at: './index.rsh:77:24:application',
        fs: ['at ./index.rsh:76:13:application call to [unknown function] (defined at: ./index.rsh:76:13:function exp)'],
        msg: 'not enough tokens to distribute',
        who: 'receiveToken'
        });
      const v831 = v805[stdlib.checkedBigNumberify('./index.rsh:78:32:application', stdlib.UInt_max, '0')];
      const v832 = v831[stdlib.checkedBigNumberify('./index.rsh:78:32:application', stdlib.UInt_max, '0')];
      const v833 = stdlib.gt(v832, stdlib.checkedBigNumberify('./index.rsh:78:40:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v833, {
        at: './index.rsh:78:24:application',
        fs: ['at ./index.rsh:76:13:application call to [unknown function] (defined at: ./index.rsh:76:13:function exp)'],
        msg: 'Zero balance of token',
        who: 'receiveToken'
        });
      const v836 = stdlib.div(v447, stdlib.checkedBigNumberify('./index.rsh:79:64:decimal', stdlib.UInt_max, '5'));
      const v837 = stdlib.ge(v832, v836);
      stdlib.assert(v837, {
        at: './index.rsh:79:24:application',
        fs: ['at ./index.rsh:76:13:application call to [unknown function] (defined at: ./index.rsh:76:13:function exp)'],
        msg: 'not enough tokens to distribute',
        who: 'receiveToken'
        });
      const v838 = stdlib.ge(v458, stdlib.checkedBigNumberify('./index.rsh:80:34:decimal', stdlib.UInt_max, '5'));
      stdlib.assert(v838, {
        at: './index.rsh:80:24:application',
        fs: ['at ./index.rsh:76:13:application call to [unknown function] (defined at: ./index.rsh:76:13:function exp)'],
        msg: 'Not enough white listed',
        who: 'receiveToken'
        });
      const v839 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v550), null);
      let v840;
      switch (v839[0]) {
        case 'None': {
          const v841 = v839[1];
          v840 = false;
          
          break;
          }
        case 'Some': {
          const v842 = v839[1];
          v840 = true;
          
          break;
          }
        }
      const v844 = v840 ? false : true;
      stdlib.assert(v844, {
        at: './index.rsh:81:24:application',
        fs: ['at ./index.rsh:76:13:application call to [unknown function] (defined at: ./index.rsh:76:13:function exp)'],
        msg: 'You already received tokens',
        who: 'receiveToken'
        });
      const v851 = stdlib.sub(v832, v836);
      const v854 = v831[stdlib.checkedBigNumberify('./index.rsh:82:66:application', stdlib.UInt_max, '1')];
      const v855 = v831[stdlib.checkedBigNumberify('./index.rsh:82:66:application', stdlib.UInt_max, '2')];
      const v856 = [v851, v854, v855];
      const v857 = stdlib.Array_set(v805, stdlib.checkedBigNumberify('./index.rsh:82:66:application', stdlib.UInt_max, '0'), v856);
      ;
      await stdlib.mapSet(map1, v550, null);
      const v859 = true;
      const v860 = await txn1.getOutput('receiveToken', 'v859', ctc5, v859);
      if (v271) {
        stdlib.protect(ctc0, await interact.out(v762, v860), {
          at: './index.rsh:63:13:application',
          fs: ['at ./index.rsh:63:13:application call to [unknown function] (defined at: ./index.rsh:63:13:function exp)', 'at ./index.rsh:84:20:application call to "res" (defined at: ./index.rsh:76:13:function exp)', 'at ./index.rsh:76:13:application call to [unknown function] (defined at: ./index.rsh:76:13:function exp)'],
          msg: 'out',
          who: 'receiveToken'
          });
        }
      else {
        }
      
      const v1150 = v458;
      const v1152 = v857;
      return;
      
      break;
      }
    }
  
  
  };
export async function optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _optIn3(ctcTop, interact);}
  };
export async function payTokens(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for payTokens expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for payTokens expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _payTokens3(ctcTop, interact);}
  };
export async function receiveToken(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for receiveToken expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for receiveToken expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _receiveToken3(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`optIn()byte`, `payTokens(uint64)byte`, `receiveToken()byte`],
    pure: [`amIwhiteListed(address)byte`],
    sigs: [`amIwhiteListed(address)byte`, `optIn()byte`, `payTokens(uint64)byte`, `receiveToken()byte`]
    },
  appApproval: `BiAPAAEDCAIEBdvQoOMFkZi2kAr5hIqRBf///////////wEgKDCgjQYmBAEAAAEBAgAAIjUAMRhBA6cpZEkiWzUBJVs1AjEZIxJBAAgxACgrZkIDdjYaABdJQQCEIjUEIzUGSSEHDEAASEkhCAxAADEhCBJENAEkEkQ2GgGIA4BXAAFJNf4iVUAABiI1/0IABiM1/0IAADT/FlEHCDUHQgM4IQcSRDYaATX/KjT/UEIAlUkhCQxAABEhCRJEKTX/KDT/UCWvUEIAfYHNop6/AxJEKTX/gAECNP9QJa9QQgBmNhoCFzUENhoDNhoBF0khBAxAAf5JJAxAAEskEkQkNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEp2XEtLAyBiEKD0Q0/zEAEkQ0/zQDIQtbNAMhDFs0AyENWzIGNANXOBFCAh5IJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hC1s1/iEMWzX9IQ1bNfxXOBE1+0k1BTX6gAQeBuawNPpQsDIGIQoMRDT6IlVJIwxAARJJIQQMQAC1IQQSRDT7VwARSTX5VwAINPlXCAhQNPlXEAFQNfg0/iINRDT4VwARSTX3IltJNfYiDUQ0/iEGCjX1NPY09Q9ENPwhBg9EMQCIAhhXAQFJNfMiVUAABiI19EIABiM19EIAADT0FESxIrIBNPWyEiEFshAxALIUNP2yEbMxACgxAIgB4CMjTFZmgAkAAAAAAAADWwGwKjUHNP80/jT9NPwyBjT2NPUJFjT3VwgIUDT3VxABUEIBEUg0+lcBCDX5NPkXNfg0+1cAETX3NPg0/YgBtzEANP8SRDT4Ig1EgAkAAAAAAAACzQGwKjUHNP80/jT9NPwyBjT3Ils0+AgWNPdXCAhQNPdXEAFQQgC7SDT7VwARNfk0/CEFDkQxACgxAIgBQSMiTFZmgAkAAAAAAAACWQGwKjUHNP80/jT9NPwjCDIGNPlXAAg0+VcICFA0+VcQAVBCAHEiEkQhDogBEiI0ARJENARJIhJMNAISEURJNQVJIls1/yVbNf6ABKzRH8M0/xZQNP4WULCBEa9JNf1XABE1/CEOiADXsSKyASKyEiEFshAyCrIUNP6yEbMxADT/NP4iMgYlrzT8VwgIUDT8VxABUEIAADX/Nf41/TX8NftJNfo0+xZQNPwWUDT9FlA0/1AoSwFXAElnSCQ1ATIGNQJCABwxGSEGEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQQxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAANIK4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECEFEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 2,
  stateKeys: 1,
  stateSize: 73,
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
                "name": "v447",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v448",
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
                "name": "v447",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v448",
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
                    "name": "_optIn0_75",
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
                    "name": "_payTokens0_75",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_receiveToken0_75",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T11",
                "name": "v551",
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
    "name": "_reach_oe_v601",
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
    "name": "_reach_oe_v717",
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
    "name": "_reach_oe_v859",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
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
                    "name": "_optIn0_75",
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
                    "name": "_payTokens0_75",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_receiveToken0_75",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T11",
                "name": "v551",
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
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v1153",
        "type": "address"
      }
    ],
    "name": "amIwhiteListed",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "payTokens",
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
    "name": "receiveToken",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620020a1380380620020a18339810160408190526200002691620004b8565b6000805543600355620000386200029b565b6040805133815283516020808301919091528085015180518385015201516001600160a01b0316606082015290517f7f05ef72ba4be4573fbbe84ae43ad7123b9e105ada7dc62406560e3322fcdac99181900360800190a18051600090819052815160209081018290528251604090810183905283518285018051919091528185018051949094528051518301518451909301929092529051518101519151911515910152620000eb3415600862000161565b620000f5620002f6565b8051339052602083810180515183518301525181015182516001600160a01b0390911660409182015281830180516000908190529051439084015291840151908401516200014492906200018b565b60208201516040015262000158816200020e565b50505062000631565b81620001875760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200019562000328565b60005b6001811015620001eb57848160018110620001b757620001b762000532565b6020020151828260018110620001d157620001d162000532565b602002015280620001e28162000548565b91505062000198565b508181846001811062000202576200020262000532565b60200201529392505050565b6200021862000375565b8151516001600160a01b03908116825282516020908101518184015283516040908101519092168284015280840180515160608501525182015160808401526003600055436001559051620002709183910162000572565b6040516020818303038152906040526002908051906020019062000296929190620003b8565b505050565b6040805160c081019091526000606082018181526080830182905260a0830191909152815260208101620002ce62000328565b815260408051606081018252600080825260208281018290529282015291015290565b905290565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101620002f162000447565b60405180602001604052806001905b6200035e604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003375790505090565b6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001620002f162000328565b828054620003c690620005f4565b90600052602060002090601f016020900481019282620003ea576000855562000435565b82601f106200040557805160ff191683800117855562000435565b8280016001018555821562000435579182015b828111156200043557825182559160200191906001019062000418565b50620004439291506200046a565b5090565b60405180606001604052806000815260200160008152602001620002f162000328565b5b808211156200044357600081556001016200046b565b604080519081016001600160401b0381118282101715620004b257634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620004cc57600080fd5b620004d662000481565b835181526040601f1983011215620004ed57600080fd5b620004f762000481565b6020850151815260408501519092506001600160a01b03811681146200051c57600080fd5b6020838101919091528101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200056b57634e487b7160e01b600052601160045260246000fd5b5060010190565b81516001600160a01b03908116825260208084015181840152604080850151909216828401526060808501518185015260808086015160e086019492939291860160005b6001811015620005e85782518051835285810151868401528401511515848301529184019190850190600101620005b6565b50505050505092915050565b600181811c908216806200060957607f821691505b602082108114156200062b57634e487b7160e01b600052602260045260246000fd5b50919050565b611a6080620006416000396000f3fe60806040526004361061009a5760003560e01c806383230757116100615780638323075714610132578063ab53f2c614610147578063cadc2e7a1461016a578063d3d0843e1461018a578063e9ba77fb1461019d578063f1915182146101a557005b80630535020d146100a35780631e93b0f1146100cb5780633bc5b7bf146100ea5780635b48684e1461011757806373b4522c1461011f57005b366100a157005b005b6100b66100b1366004611450565b6101c5565b60405190151581526020015b60405180910390f35b3480156100d757600080fd5b506003545b6040519081526020016100c2565b3480156100f657600080fd5b5061010a610105366004611481565b610215565b6040516100c291906114b4565b6100b6610241565b6100a161012d3660046114ed565b61027f565b34801561013e57600080fd5b506001546100dc565b34801561015357600080fd5b5061015c6102b8565b6040516100c2929190611531565b34801561017657600080fd5b5061010a610185366004611481565b610355565b6100a161019836600461156b565b61037b565b6100b66103b0565b3480156101b157600080fd5b506100b66101c0366004611481565b6103f5565b60006101cf6111ca565b6020818101805151600190525151604090810151859052805160608101825260008082529281018390529081019190915261020a8282610521565b602001519392505050565b604080516060810182526000808252602082018190529181019190915261023b82610b87565b92915050565b600061024b6111ca565b60208181015151600090819052604080516060810182528281529283018290528201526102788282610521565b5192915050565b60408051606081018252600080825260208201819052918101919091526102b46102ae36849003840184611656565b82610c5f565b5050565b6000606060005460028080546102cd906116ac565b80601f01602080910402602001604051908101604052809291908181526020018280546102f9906116ac565b80156103465780601f1061031b57610100808354040283529160200191610346565b820191906000526020600020905b81548152906001019060200180831161032957829003601f168201915b50505050509050915091509091565b604080516060810182526000808252602082018190529181019190915261023b82610e0a565b60408051606081018252600080825260208201819052918101919091526102b46103aa368490038401846116e1565b82610521565b60006103ba6111ca565b6020818101515160029052604080516060810182526000808252928101839052908101919091526103eb8282610521565b6040015192915050565b60006003600054141561051057600060028054610411906116ac565b80601f016020809104026020016040519081016040528092919081815260200182805461043d906116ac565b801561048a5780601f1061045f5761010080835404028352916020019161048a565b820191906000526020600020905b81548152906001019060200180831161046d57829003601f168201915b50505050508060200190518101906104a2919061179b565b60408051602081019091526000815290915060006104bf85610b87565b5160018111156104d1576104d161149e565b14156104e05760008152610508565b60016104eb85610b87565b5160018111156104fd576104fd61149e565b141561050857600181525b519392505050565b61051c60006007610e97565b919050565b6105316003600054146017610e97565b815161054c90158061054557508251600154145b6018610e97565b60008080556002805461055e906116ac565b80601f016020809104026020016040519081016040528092919081815260200182805461058a906116ac565b80156105d75780601f106105ac576101008083540402835291602001916105d7565b820191906000526020600020905b8154815290600101906020018083116105ba57829003601f168201915b50505050508060200190518101906105ef919061179b565b90506105f9611219565b61060860001943106019610e97565b7f9872ef67a29ec4ac85ec9dc19079c33db0e59ce7ae360343d6d0946c660441733385604051610639929190611874565b60405180910390a1600060208501515151600281111561065b5761065b61149e565b141561079d5761066d34156009610e97565b608082018051515182515280515160209081015183519091015251516040908101518251901515908201528201516106b3906106ac9033906000610ebd565b600a610e97565b6106c6600483606001511115600b610e97565b33600090815260046020908152604091829020805462ff00ff1916600190811790915591519182527f2d85a8ed619f69f4ed295cafc684c32ee00ef7bc71a97a9f39dec200e517de02910160405180910390a1600183526107256112da565b825181516001600160a01b03918216905260208085015183519091015260408085015183519216910152606083015161076090600190611905565b6020808301805192909252905143910152608083015182516107859190600090610ed5565b60208201516040015261079781610f49565b50610b81565b60016020850151515160028111156107b7576107b761149e565b1415610901576020808501515160400151908201526107d83415600c610e97565b602081015151608083015151516107ef9190611905565b6040828101805192909252608084018051516020908101518451820152905151820151925192151592820192909252830151908201515161083d9161083691339190610ebd565b600d610e97565b8151610855906001600160a01b03163314600e610e97565b602081015151610868901515600f610e97565b604051600181527f76304c6361deb260c0c977ead678b53928a7db84aabe25003147f2f5862156d09060200160405180910390a1600160208401526108ab6112da565b825181516001600160a01b03918216905260208085015183518201526040808601518451931692810192909252606085015181840180519190915251439101526080840151908301516107859190600090610ed5565b600260208501515151600281111561091b5761091b61149e565b1415610b815761092d34156010610e97565b6080820180515151606083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516109709190600090610ed5565b816080018190525061099261098b3384604001516000610ebd565b6011610e97565b6109a460008360200151116012610e97565b608081015151516109b89015156013610e97565b600582602001516109c9919061191d565b60a08201819052608082015151516109e49111156014610e97565b6109f76005836060015110156015610e97565b6000610a0233610e0a565b516001811115610a1457610a1461149e565b1415610a2657600060c0820152610a51565b6001610a3133610e0a565b516001811115610a4357610a4361149e565b1415610a5157600160c08201525b610a6e8160c00151610a64576001610a67565b60005b6016610e97565b60a081015160808201515151610a84919061193f565b60e0820180519190915260808201805151602090810151835190910152515160409081015191519115159181019190915282015160a0820151610ac991903390610fd0565b33600090815260056020908152604091829020805462ff00ff1916600190811790915591519182527f06cca2ec26b36f288eda855591a3c0c69582caff77bfda3b0a10e39b1b9e62e4910160405180910390a160016040840152610b2b6112da565b825181516001600160a01b03918216905260208085015183518201526040808601518451931692019190915260608401518183018051919091525143910152608082015160e08301516107859190600090610ed5565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610bd357610bd361149e565b1415610c50576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610c1457610c1461149e565b6001811115610c2557610c2561149e565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b610c6f600360005414601c610e97565b8151610c8a901580610c8357508251600154145b601d610e97565b600080805560028054610c9c906116ac565b80601f0160208091040260200160405190810160405280929190818152602001828054610cc8906116ac565b8015610d155780601f10610cea57610100808354040283529160200191610d15565b820191906000526020600020905b815481529060010190602001808311610cf857829003601f168201915b5050505050806020019051810190610d2d919061179b565b9050610d3f600019431015601e610e97565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a1610d923415601a610e97565b8051610daa906001600160a01b03163314601b610e97565b610db26112da565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169281019290925260608401518184018051919091528051439201919091526080840151905190910152610b8181610f49565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115610e5657610e5661149e565b1415610c50576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115610c1457610c1461149e565b816102b45760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000610ecb83853085610fe4565b90505b9392505050565b610edd61130a565b60005b6001811015610f2957848160018110610efb57610efb6118d9565b6020020151828260018110610f1257610f126118d9565b602002015280610f2181611956565b915050610ee0565b5081818460018110610f3d57610f3d6118d9565b60200201529392505050565b610f51611355565b8151516001600160a01b03908116825282516020908101518184015283516040908101519092168284015280840180515160608501525182015160808401526003600055436001559051610fa791839101611971565b60405160208183030381529060405260029080519060200190610fcb929190611396565b505050565b610fdb8383836110be565b610fcb57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161104b916119f1565b60006040518083038185875af1925050503d8060008114611088576040519150601f19603f3d011682016040523d82523d6000602084013e61108d565b606091505b509150915061109e8282600161118f565b50808060200190518101906110b39190611a0d565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161111d916119f1565b60006040518083038185875af1925050503d806000811461115a576040519150601f19603f3d011682016040523d82523d6000602084013e61115f565b606091505b50915091506111708282600261118f565b50808060200190518101906111859190611a0d565b9695505050505050565b6060831561119e575081610ece565b8251156111ae5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610eb4565b6040518060400160405280600081526020016112146040805160a0810182526000602080830182815283850183905284519182019094528181526060830152608082015290815290565b905290565b60408051610160810182526000610100820181815261012083018290526101408301829052825282516020818101909452908152909182019081526040805160608101825260008082526020828101829052928201529101908152604080516060810182526000808252602082810182905292820152910190815260200161129f61130a565b815260200160008152602001600015158152602001611214604051806060016040528060008152602001600081526020016000151581525090565b6040805160a08101825260009181018281526060820183905260808201929092529081526020810161121461141a565b60405180602001604052806001905b61133f604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816113195790505090565b6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200161121461130a565b8280546113a2906116ac565b90600052602060002090601f0160209004810192826113c4576000855561140a565b82601f106113dd57805160ff191683800117855561140a565b8280016001018555821561140a579182015b8281111561140a5782518255916020019190600101906113ef565b5061141692915061143b565b5090565b6040518060600160405280600081526020016000815260200161121461130a565b5b80821115611416576000815560010161143c565b60006020828403121561146257600080fd5b5035919050565b6001600160a01b038116811461147e57600080fd5b50565b60006020828403121561149357600080fd5b8135610ece81611469565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106114cb576114cb61149e565b8083525060208301511515602083015260408301511515604083015292915050565b6000604082840312156114ff57600080fd5b50919050565b60005b83811015611520578181015183820152602001611508565b83811115610b815750506000910152565b8281526040602082015260008251806040840152611556816060850160208701611505565b601f01601f1916919091016060019392505050565b600060a082840312156114ff57600080fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156115b6576115b661157d565b60405290565b6040516020810167ffffffffffffffff811182821017156115b6576115b661157d565b6040516080810167ffffffffffffffff811182821017156115b6576115b661157d565b60405160a0810167ffffffffffffffff811182821017156115b6576115b661157d565b6040516060810167ffffffffffffffff811182821017156115b6576115b661157d565b801515811461147e57600080fd5b60006040828403121561166857600080fd5b6040516040810181811067ffffffffffffffff8211171561168b5761168b61157d565b6040528235815260208301356116a081611648565b60208201529392505050565b600181811c908216806116c057607f821691505b602082108114156114ff57634e487b7160e01b600052602260045260246000fd5b600081830360a08112156116f457600080fd5b6116fc611593565b833581526080601f198301121561171257600080fd5b61171a6115bc565b6117226115df565b60208601356003811061173457600080fd5b8152604086013561174481611648565b806020830152506020605f198501121561175d57600080fd5b6117656115bc565b6060870135815260408201526080860135935061178184611648565b606081019390935291825260208101919091529392505050565b600060e082840312156117ad57600080fd5b6117b5611602565b82516117c081611469565b8152602083810151818301526040808501516117db81611469565b8382015260608581015181850152609f860187136117f857600080fd5b6118006115bc565b8060e088018981111561181257600080fd5b608089015b818110156118615784818c03121561182f5760008081fd5b611837611625565b8151815287820151888201528682015161185081611648565b818801528452928601928401611817565b5050608086015250929695505050505050565b6001600160a01b0383168152815160208083019190915282015151805160c083019190600381106118a7576118a761149e565b8060408501525060208101511515606084015260408101515160808401526060810151151560a0840152509392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611918576119186118ef565b500190565b60008261193a57634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611951576119516118ef565b500390565b600060001982141561196a5761196a6118ef565b5060010190565b81516001600160a01b03908116825260208084015181840152604080850151909216828401526060808501518185015260808086015160e086019492939291860160005b60018110156119e557825180518352858101518684015284015115158483015291840191908501906001016119b5565b50505050505092915050565b60008251611a03818460208701611505565b9190910192915050565b600060208284031215611a1f57600080fd5b8151610ece8161164856fea264697066735822122061bfd94c6770743a33e06bce8abcb8ec3319436eae5b14ab780335e155c0d1c464736f6c634300080c0033`,
  BytecodeLen: 8353,
  Which: `oD`,
  version: 7,
  views: {
    amIwhiteListed: `amIwhiteListed`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:108:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:38:35:after expr stmt semicolon',
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
  "optIn": optIn,
  "payTokens": payTokens,
  "receiveToken": receiveToken
  };
export const _APIs = {
  optIn: optIn,
  payTokens: payTokens,
  receiveToken: receiveToken
  };
