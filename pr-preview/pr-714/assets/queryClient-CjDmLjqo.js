import{m as L,o as z,r as N,q as y,t as V,v as W,w as I,n as l,x as S,y as G,S as H,z as k,A as g,B as R,C as T,D as U,E,p as D,F as _,j as J,G as F,H as K}from"./suspense-BqeUBMhm.js";const M=console;class B{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),L(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,t??(z?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class X extends B{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||M,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||Y(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(t,e){const s=N(this.state.data,t,this.options);return this.dispatch({data:s,type:"success",dataUpdatedAt:e==null?void 0:e.updatedAt,manual:e==null?void 0:e.manual}),s}setState(t,e){this.dispatch({type:"setState",state:t,setStateOptions:e})}cancel(t){var e;const s=this.promise;return(e=this.retryer)==null||e.cancel(t),s?s.then(y).catch(y):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!V(this.state.dataUpdatedAt,t)}onFocus(){var t;const e=this.observers.find(s=>s.shouldFetchOnWindowFocus());e&&e.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}onOnline(){var t;const e=this.observers.find(s=>s.shouldFetchOnReconnect());e&&e.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,e){var s,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&e!=null&&e.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var a;return(a=this.retryer)==null||a.continueRetry(),this.promise}}if(t&&this.setOptions(t),!this.options.queryFn){const u=this.observers.find(d=>d.options.queryFn);u&&this.setOptions(u.options)}const r=W(),n={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},o=u=>{Object.defineProperty(u,"signal",{enumerable:!0,get:()=>{if(r)return this.abortSignalConsumed=!0,r.signal}})};o(n);const p=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(n)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),f={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:p};if(o(f),(s=this.options.behavior)==null||s.onFetch(f),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=f.fetchOptions)==null?void 0:i.meta)){var C;this.dispatch({type:"fetch",meta:(C=f.fetchOptions)==null?void 0:C.meta})}const q=u=>{if(S(u)&&u.silent||this.dispatch({type:"error",error:u}),!S(u)){var d,v,m,b;(d=(v=this.cache.config).onError)==null||d.call(v,u,this),(m=(b=this.cache.config).onSettled)==null||m.call(b,this.state.data,u,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=I({fn:f.fetchFn,abort:r==null?void 0:r.abort.bind(r),onSuccess:u=>{var d,v,m,b;if(typeof u>"u"){q(new Error(this.queryHash+" data is undefined"));return}this.setData(u),(d=(v=this.cache.config).onSuccess)==null||d.call(v,u,this),(m=(b=this.cache.config).onSettled)==null||m.call(b,u,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:q,onFail:(u,d)=>{this.dispatch({type:"failed",failureCount:u,error:d})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:f.options.retry,retryDelay:f.options.retryDelay,networkMode:f.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){const e=s=>{var i,a;switch(t.type){case"failed":return{...s,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=t.meta)!=null?i:null,fetchStatus:G(this.options.networkMode)?"fetching":"paused",...!s.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...s,data:t.data,dataUpdateCount:s.dataUpdateCount+1,dataUpdatedAt:(a=t.dataUpdatedAt)!=null?a:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const r=t.error;return S(r)&&r.revert&&this.revertState?{...this.revertState,fetchStatus:"idle"}:{...s,error:r,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...t.state}}};this.state=e(this.state),l.batch(()=>{this.observers.forEach(s=>{s.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}}function Y(c){const t=typeof c.initialData=="function"?c.initialData():c.initialData,e=typeof t<"u",s=e?typeof c.initialDataUpdatedAt=="function"?c.initialDataUpdatedAt():c.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:e?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:e?"success":"loading",fetchStatus:"idle"}}class Z extends H{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,e,s){var i;const a=e.queryKey,r=(i=e.queryHash)!=null?i:k(a,e);let n=this.get(r);return n||(n=new X({cache:this,logger:t.getLogger(),queryKey:a,queryHash:r,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(a)}),this.add(n)),n}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){const e=this.queriesMap[t.queryHash];e&&(t.destroy(),this.queries=this.queries.filter(s=>s!==t),e===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){l.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,e){const[s]=g(t,e);return typeof s.exact>"u"&&(s.exact=!0),this.queries.find(i=>R(s,i))}findAll(t,e){const[s]=g(t,e);return Object.keys(s).length>0?this.queries.filter(i=>R(s,i)):this.queries}notify(t){l.batch(()=>{this.listeners.forEach(({listener:e})=>{e(t)})})}onFocus(){l.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){l.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}}class $ extends B{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||M,this.observers=[],this.state=t.state||tt(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(e=>e!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,e;return(t=(e=this.retryer)==null?void 0:e.continue())!=null?t:this.execute()}async execute(){const t=()=>{var h;return this.retryer=I({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(O,j)=>{this.dispatch({type:"failed",failureCount:O,error:j})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(h=this.options.retry)!=null?h:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},e=this.state.status==="loading";try{var s,i,a,r,n,o,p,f;if(!e){var C,q,u,d;this.dispatch({type:"loading",variables:this.options.variables}),await((C=(q=this.mutationCache.config).onMutate)==null?void 0:C.call(q,this.state.variables,this));const O=await((u=(d=this.options).onMutate)==null?void 0:u.call(d,this.state.variables));O!==this.state.context&&this.dispatch({type:"loading",context:O,variables:this.state.variables})}const h=await t();return await((s=(i=this.mutationCache.config).onSuccess)==null?void 0:s.call(i,h,this.state.variables,this.state.context,this)),await((a=(r=this.options).onSuccess)==null?void 0:a.call(r,h,this.state.variables,this.state.context)),await((n=(o=this.mutationCache.config).onSettled)==null?void 0:n.call(o,h,null,this.state.variables,this.state.context,this)),await((p=(f=this.options).onSettled)==null?void 0:p.call(f,h,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:h}),h}catch(h){try{var v,m,b,Q,A,w,x,P;throw await((v=(m=this.mutationCache.config).onError)==null?void 0:v.call(m,h,this.state.variables,this.state.context,this)),await((b=(Q=this.options).onError)==null?void 0:b.call(Q,h,this.state.variables,this.state.context)),await((A=(w=this.mutationCache.config).onSettled)==null?void 0:A.call(w,void 0,h,this.state.variables,this.state.context,this)),await((x=(P=this.options).onSettled)==null?void 0:x.call(P,void 0,h,this.state.variables,this.state.context)),h}finally{this.dispatch({type:"error",error:h})}}}dispatch(t){const e=s=>{switch(t.type){case"failed":return{...s,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"loading":return{...s,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!G(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...s,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:t.error,failureCount:s.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...s,...t.state}}};this.state=e(this.state),l.batch(()=>{this.observers.forEach(s=>{s.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}function tt(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class et extends H{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,e,s){const i=new $({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(e),state:s,defaultOptions:e.mutationKey?t.getMutationDefaults(e.mutationKey):void 0});return this.add(i),i}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){l.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return typeof t.exact>"u"&&(t.exact=!0),this.mutations.find(e=>T(t,e))}findAll(t){return this.mutations.filter(e=>T(t,e))}notify(t){l.batch(()=>{this.listeners.forEach(({listener:e})=>{e(t)})})}resumePausedMutations(){var t;return this.resuming=((t=this.resuming)!=null?t:Promise.resolve()).then(()=>{const e=this.mutations.filter(s=>s.state.isPaused);return l.batch(()=>e.reduce((s,i)=>s.then(()=>i.continue().catch(y)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}class it{constructor(t={}){this.queryCache=t.queryCache||new Z,this.mutationCache=t.mutationCache||new et,this.logger=t.logger||M,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=U.subscribe(()=>{U.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=E.subscribe(()=>{E.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,e;this.mountCount--,this.mountCount===0&&((t=this.unsubscribeFocus)==null||t.call(this),this.unsubscribeFocus=void 0,(e=this.unsubscribeOnline)==null||e.call(this),this.unsubscribeOnline=void 0)}isFetching(t,e){const[s]=g(t,e);return s.fetchStatus="fetching",this.queryCache.findAll(s).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,e){var s;return(s=this.queryCache.find(t,e))==null?void 0:s.state.data}ensureQueryData(t,e,s){const i=D(t,e,s),a=this.getQueryData(i.queryKey);return a?Promise.resolve(a):this.fetchQuery(i)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:e,state:s})=>{const i=s.data;return[e,i]})}setQueryData(t,e,s){const i=this.queryCache.find(t),a=i==null?void 0:i.state.data,r=_(e,a);if(typeof r>"u")return;const n=D(t),o=this.defaultQueryOptions(n);return this.queryCache.build(this,o).setData(r,{...s,manual:!0})}setQueriesData(t,e,s){return l.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,s)]))}getQueryState(t,e){var s;return(s=this.queryCache.find(t,e))==null?void 0:s.state}removeQueries(t,e){const[s]=g(t,e),i=this.queryCache;l.batch(()=>{i.findAll(s).forEach(a=>{i.remove(a)})})}resetQueries(t,e,s){const[i,a]=g(t,e,s),r=this.queryCache,n={type:"active",...i};return l.batch(()=>(r.findAll(i).forEach(o=>{o.reset()}),this.refetchQueries(n,a)))}cancelQueries(t,e,s){const[i,a={}]=g(t,e,s);typeof a.revert>"u"&&(a.revert=!0);const r=l.batch(()=>this.queryCache.findAll(i).map(n=>n.cancel(a)));return Promise.all(r).then(y).catch(y)}invalidateQueries(t,e,s){const[i,a]=g(t,e,s);return l.batch(()=>{var r,n;if(this.queryCache.findAll(i).forEach(p=>{p.invalidate()}),i.refetchType==="none")return Promise.resolve();const o={...i,type:(r=(n=i.refetchType)!=null?n:i.type)!=null?r:"active"};return this.refetchQueries(o,a)})}refetchQueries(t,e,s){const[i,a]=g(t,e,s),r=l.batch(()=>this.queryCache.findAll(i).filter(o=>!o.isDisabled()).map(o=>{var p;return o.fetch(void 0,{...a,cancelRefetch:(p=a==null?void 0:a.cancelRefetch)!=null?p:!0,meta:{refetchPage:i.refetchPage}})}));let n=Promise.all(r).then(y);return a!=null&&a.throwOnError||(n=n.catch(y)),n}fetchQuery(t,e,s){const i=D(t,e,s),a=this.defaultQueryOptions(i);typeof a.retry>"u"&&(a.retry=!1);const r=this.queryCache.build(this,a);return r.isStaleByTime(a.staleTime)?r.fetch(a):Promise.resolve(r.state.data)}prefetchQuery(t,e,s){return this.fetchQuery(t,e,s).then(y).catch(y)}fetchInfiniteQuery(t,e,s){const i=D(t,e,s);return i.behavior=J(),this.fetchQuery(i)}prefetchInfiniteQuery(t,e,s){return this.fetchInfiniteQuery(t,e,s).then(y).catch(y)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,e){const s=this.queryDefaults.find(i=>F(t)===F(i.queryKey));s?s.defaultOptions=e:this.queryDefaults.push({queryKey:t,defaultOptions:e})}getQueryDefaults(t){if(!t)return;const e=this.queryDefaults.find(s=>K(t,s.queryKey));return e==null?void 0:e.defaultOptions}setMutationDefaults(t,e){const s=this.mutationDefaults.find(i=>F(t)===F(i.mutationKey));s?s.defaultOptions=e:this.mutationDefaults.push({mutationKey:t,defaultOptions:e})}getMutationDefaults(t){if(!t)return;const e=this.mutationDefaults.find(s=>K(t,s.mutationKey));return e==null?void 0:e.defaultOptions}defaultQueryOptions(t){if(t!=null&&t._defaulted)return t;const e={...this.defaultOptions.queries,...this.getQueryDefaults(t==null?void 0:t.queryKey),...t,_defaulted:!0};return!e.queryHash&&e.queryKey&&(e.queryHash=k(e.queryKey,e)),typeof e.refetchOnReconnect>"u"&&(e.refetchOnReconnect=e.networkMode!=="always"),typeof e.useErrorBoundary>"u"&&(e.useErrorBoundary=!!e.suspense),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(t==null?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}export{it as Q,tt as g};
