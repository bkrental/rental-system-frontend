"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[741],{43741:function(e,t,n){n.d(t,{LC:function(){return b}});var r=n(27230),i=n(33646),a=n(46608),u=n(64090),o=n(30828),l=n(64419);function s(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Object.assign(e,...n)}function c(e){return e.replace(e[0],e[0].toUpperCase())}n(49079);var d=WeakMap?new WeakMap:void 0,f=e=>{let{endpointName:t,queryArgs:n}=e,r="",a=null==d?void 0:d.get(n);if("string"==typeof a)r=a;else{let e=JSON.stringify(n,(e,t)=>(0,i.PO)(t)?Object.keys(t).sort().reduce((e,n)=>(e[n]=t[n],e),{}):t);(0,i.PO)(n)&&(null==d||d.set(n,e)),r=e}return"".concat(t,"(").concat(r,")")},p=Symbol();function v(e,t,n,r){let i=(0,u.useMemo)(()=>({queryArgs:e,serialized:"object"==typeof e?t({queryArgs:e,endpointDefinition:n,endpointName:r}):e}),[e,t,n,r]),a=(0,u.useRef)(i);return(0,u.useEffect)(()=>{a.current.serialized!==i.serialized&&(a.current=i)},[i]),a.current.serialized===i.serialized?a.current.queryArgs:e}function m(e){let t=(0,u.useRef)(e);return(0,u.useEffect)(()=>{(0,o.wU)(t.current,e)||(t.current=e)},[e]),(0,o.wU)(t.current,e)?t.current:e}var h=window.document&&window.document.createElement?u.useLayoutEffect:u.useEffect,g=e=>e.isUninitialized?{...e,isUninitialized:!1,isFetching:!0,isLoading:void 0===e.data,status:r.oZ.pending}:e,y=Symbol(),b=(0,r.Tk)((0,r.hF)(),function(){let{batch:e=o.dC,hooks:t={useDispatch:o.I0,useSelector:o.v9,useStore:o.oR},createSelector:n=l.P1,unstable__sideEffectsInRender:i=!1,...d}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{name:y,init(l,d,y){let{serializeQueryArgs:b}=d,{buildQueryHooks:S,buildMutationHook:R,usePrefetch:A}=function(e){let{api:t,moduleOptions:{batch:n,hooks:{useDispatch:i,useSelector:l,useStore:s},unstable__sideEffectsInRender:c,createSelector:d},serializeQueryArgs:y,context:b}=e,S=c?e=>e():u.useEffect;return{buildQueryHooks:function(e){let c=function(n){let{refetchOnReconnect:o,refetchOnFocus:l,refetchOnMountOrArgChange:s,skip:c=!1,pollingInterval:d=0,skipPollingIfUnfocused:p=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{initiate:h}=t.endpoints[e],g=i(),y=(0,u.useRef)();if(!y.current){let e=g(t.internalActions.internal_getRTKQSubscriptions());y.current=e}let R=v(c?r.CN:n,f,b.endpointDefinitions[e],e),A=m({refetchOnReconnect:o,refetchOnFocus:l,pollingInterval:d,skipPollingIfUnfocused:p}),O=(0,u.useRef)(!1),q=(0,u.useRef)(),{queryCacheKey:w,requestId:j}=q.current||{},C=!1;w&&j&&(C=y.current.isRequestSubscribed(w,j));let M=!C&&O.current;return S(()=>{O.current=C}),S(()=>{M&&(q.current=void 0)},[M]),S(()=>{var e;let t=q.current;if(R===r.CN){null==t||t.unsubscribe(),q.current=void 0;return}let n=null===(e=q.current)||void 0===e?void 0:e.subscriptionOptions;if(t&&t.arg===R)A!==n&&t.updateSubscriptionOptions(A);else{null==t||t.unsubscribe();let e=g(h(R,{subscriptionOptions:A,forceRefetch:s}));q.current=e}},[g,h,s,R,A,M]),(0,u.useEffect)(()=>()=>{var e;null===(e=q.current)||void 0===e||e.unsubscribe(),q.current=void 0},[]),(0,u.useMemo)(()=>({refetch:()=>{var e;if(!q.current)throw Error((0,a.rJ)(38));return null===(e=q.current)||void 0===e?void 0:e.refetch()}}),[])},A=function(){let{refetchOnReconnect:r,refetchOnFocus:a,pollingInterval:o=0,skipPollingIfUnfocused:l=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{initiate:s}=t.endpoints[e],c=i(),[d,f]=(0,u.useState)(p),v=(0,u.useRef)(),h=m({refetchOnReconnect:r,refetchOnFocus:a,pollingInterval:o,skipPollingIfUnfocused:l});S(()=>{var e,t;h!==(null===(e=v.current)||void 0===e?void 0:e.subscriptionOptions)&&(null===(t=v.current)||void 0===t||t.updateSubscriptionOptions(h))},[h]);let g=(0,u.useRef)(h);S(()=>{g.current=h},[h]);let y=(0,u.useCallback)(function(e){let t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n(()=>{var n;null===(n=v.current)||void 0===n||n.unsubscribe(),v.current=t=c(s(e,{subscriptionOptions:g.current,forceRefetch:!r})),f(e)}),t},[c,s]);return(0,u.useEffect)(()=>()=>{var e;null==v||null===(e=v.current)||void 0===e||e.unsubscribe()},[]),(0,u.useEffect)(()=>{d===p||v.current||y(d,!0)},[d,y]),(0,u.useMemo)(()=>[y,d],[y,d])},O=function(n){let{skip:i=!1,selectFromResult:a}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{select:c}=t.endpoints[e],f=v(i?r.CN:n,y,b.endpointDefinitions[e],e),p=(0,u.useRef)(),m=(0,u.useMemo)(()=>d([c(f),(e,t)=>t,e=>f],R,{memoizeOptions:{resultEqualityCheck:o.wU}}),[c,f]),g=(0,u.useMemo)(()=>a?d([m],a,{devModeChecks:{identityFunctionCheck:"never"}}):m,[m,a]),S=l(e=>g(e,p.current),o.wU),A=m(s().getState(),p.current);return h(()=>{p.current=A},[A]),S};return{useQueryState:O,useQuerySubscription:c,useLazyQuerySubscription:A,useLazyQuery(e){let[t,n]=A(e),r=O(n,{...e,skip:n===p}),i=(0,u.useMemo)(()=>({lastArg:n}),[n]);return(0,u.useMemo)(()=>[t,r,i],[t,r,i])},useQuery(e,t){let n=c(e,t),i=O(e,{selectFromResult:e===r.CN||(null==t?void 0:t.skip)?void 0:g,...t}),{data:a,status:o,isLoading:l,isSuccess:s,isError:d,error:f}=i;return(0,u.useDebugValue)({data:a,status:o,isLoading:l,isSuccess:s,isError:d,error:f}),(0,u.useMemo)(()=>({...i,...n}),[i,n])}}},buildMutationHook:function(e){return function(){let{selectFromResult:r,fixedCacheKey:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{select:s,initiate:c}=t.endpoints[e],f=i(),[p,v]=(0,u.useState)();(0,u.useEffect)(()=>()=>{(null==p?void 0:p.arg.fixedCacheKey)||null==p||p.reset()},[p]);let m=(0,u.useCallback)(function(e){let t=f(c(e,{fixedCacheKey:a}));return v(t),t},[f,c,a]),{requestId:h}=p||{},g=(0,u.useMemo)(()=>s({fixedCacheKey:a,requestId:null==p?void 0:p.requestId}),[a,p,s]),y=l((0,u.useMemo)(()=>r?d([g],r):g,[r,g]),o.wU),b=null==a?null==p?void 0:p.arg.originalArgs:void 0,S=(0,u.useCallback)(()=>{n(()=>{p&&v(void 0),a&&f(t.internalActions.removeMutationResult({requestId:h,fixedCacheKey:a}))})},[f,a,p,h]),{endpointName:R,data:A,status:O,isLoading:q,isSuccess:w,isError:j,error:C}=y;(0,u.useDebugValue)({endpointName:R,data:A,status:O,isLoading:q,isSuccess:w,isError:j,error:C});let M=(0,u.useMemo)(()=>({...y,originalArgs:b,reset:S}),[y,b,S]);return(0,u.useMemo)(()=>[m,M],[m,M])}},usePrefetch:function(e,n){let r=i(),a=m(n);return(0,u.useCallback)((n,i)=>r(t.util.prefetch(e,n,{...a,...i})),[e,r,a])}};function R(e,t,n){if((null==t?void 0:t.endpointName)&&e.isUninitialized){let{endpointName:e}=t,r=b.endpointDefinitions[e];y({queryArgs:t.originalArgs,endpointDefinition:r,endpointName:e})===y({queryArgs:n,endpointDefinition:r,endpointName:e})&&(t=void 0)}let r=e.isSuccess?e.data:null==t?void 0:t.data;void 0===r&&(r=e.data);let i=void 0!==r,a=e.isLoading,u=e.isSuccess||a&&i;return{...e,data:r,currentData:e.data,isFetching:a,isLoading:!i&&a,isSuccess:u}}}({api:l,moduleOptions:{batch:e,hooks:t,unstable__sideEffectsInRender:i,createSelector:n},serializeQueryArgs:b,context:y});return s(l,{usePrefetch:A}),s(y,{batch:e}),{injectEndpoint(e,t){if("query"===t.type){let{useQuery:t,useLazyQuery:n,useLazyQuerySubscription:r,useQueryState:i,useQuerySubscription:a}=S(e);s(l.endpoints[e],{useQuery:t,useLazyQuery:n,useLazyQuerySubscription:r,useQueryState:i,useQuerySubscription:a}),l["use".concat(c(e),"Query")]=t,l["useLazy".concat(c(e),"Query")]=n}else if("mutation"===t.type){let t=R(e);s(l.endpoints[e],{useMutation:t}),l["use".concat(c(e),"Mutation")]=t}}}}}}())},27230:function(e,t,n){n.d(t,{CN:function(){return I},Tk:function(){return F},hF:function(){return ee},ni:function(){return g},oZ:function(){return l}});var r,i=n(33646),a=n(46608),u=n(2115),o=n(64419);n(49079);var l=((r=l||{}).uninitialized="uninitialized",r.pending="pending",r.fulfilled="fulfilled",r.rejected="rejected",r),s=e=>e.replace(/\/$/,""),c=e=>e.replace(/^\//,""),d=e=>[].concat(...e),f=i.PO,p=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t)},v=e=>e.status>=200&&e.status<=299,m=e=>/ion\/(vnd\.api\+)?json/.test(e.get("content-type")||"");function h(e){if(!(0,i.PO)(e))return e;let t={...e};for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return t}function g(){let{baseUrl:e,prepareHeaders:t=e=>e,fetchFn:n=p,paramsSerializer:r,isJsonContentType:a=m,jsonContentType:u="application/json",jsonReplacer:o,timeout:l,responseHandler:d,validateStatus:f,...g}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"undefined"==typeof fetch&&n===p&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),async(p,m)=>{let b,S;let{signal:R,getState:A,extra:O,endpoint:q,forced:w,type:j}=m,{url:C,headers:M=new Headers(g.headers),params:T,responseHandler:P=null!=d?d:"json",validateStatus:k=null!=f?f:v,timeout:D=l,...N}="string"==typeof p?{url:p}:p,Q={...g,signal:R,...N};M=new Headers(h(M)),Q.headers=await t(M,{getState:A,extra:O,endpoint:q,forced:w,type:j})||M;let E=e=>"object"==typeof e&&((0,i.PO)(e)||Array.isArray(e)||"function"==typeof e.toJSON);if(!Q.headers.has("content-type")&&E(Q.body)&&Q.headers.set("content-type",u),E(Q.body)&&a(Q.headers)&&(Q.body=JSON.stringify(Q.body,o)),T){let e=~C.indexOf("?")?"&":"?";C+=e+(r?r(T):new URLSearchParams(h(T)))}C=function(e,t){var n;if(!e)return t;if(!t)return e;if(n=t,RegExp("(^|:)//").test(n))return t;let r=e.endsWith("/")||!t.startsWith("?")?"/":"";return e=s(e),t=c(t),"".concat(e).concat(r).concat(t)}(e,C);let I=new Request(C,Q);b={request:new Request(C,Q)};let x,_=!1,z=D&&setTimeout(()=>{_=!0,m.abort()},D);try{x=await n(I)}catch(e){return{error:{status:_?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(e)},meta:b}}finally{z&&clearTimeout(z)}let K=x.clone();b.response=K;let U="";try{let e;if(await Promise.all([y(x,P).then(e=>S=e,t=>e=t),K.text().then(e=>U=e,()=>{})]),e)throw e}catch(e){return{error:{status:"PARSING_ERROR",originalStatus:x.status,data:U,error:String(e)},meta:b}}return k(x,S)?{data:S,meta:b}:{error:{status:x.status,data:S},meta:b}};async function y(e,t){if("function"==typeof t)return t(e);if("content-type"===t&&(t=a(e.headers)?"json":"text"),"json"===t){let t=await e.text();return t.length?JSON.parse(t):null}return e.text()}}var y=class{constructor(e,t){this.value=e,this.meta=t}},b=(0,a.PH)("__rtkq/focused"),S=(0,a.PH)("__rtkq/unfocused"),R=(0,a.PH)("__rtkq/online"),A=(0,a.PH)("__rtkq/offline");function O(e){return"query"===e.type}function q(e,t,n,r,i,a){return"function"==typeof e?e(t,n,r,i).map(w).map(a):Array.isArray(e)?e.map(w).map(a):[]}function w(e){return"string"==typeof e?{type:e}:e}function j(e){return null!=e}function C(e){let t=0;for(let n in e)t++;return t}var M=Symbol("forceQueryFn"),T=e=>"function"==typeof e[M];function P(e){return e}function k(e,t,n,r){return q(n[e.meta.arg.endpointName][t],(0,a.KD)(e)?e.payload:void 0,(0,a.h_)(e)?e.payload:void 0,e.meta.arg.originalArgs,"baseQueryMeta"in e.meta?e.meta.baseQueryMeta:void 0,r)}function D(e,t,n){let r=e[t];r&&n(r)}function N(e){var t;return null!==(t="arg"in e?e.arg.fixedCacheKey:e.fixedCacheKey)&&void 0!==t?t:e.requestId}function Q(e,t,n){let r=e[N(t)];r&&n(r)}var E={},I=Symbol.for("RTKQ/skipToken"),x={status:"uninitialized"},_=(0,u.Uy)(x,()=>{}),z=(0,u.Uy)(x,()=>{}),K=WeakMap?new WeakMap:void 0,U=e=>{let{endpointName:t,queryArgs:n}=e,r="",a=null==K?void 0:K.get(n);if("string"==typeof a)r=a;else{let e=JSON.stringify(n,(e,t)=>(0,i.PO)(t)?Object.keys(t).sort().reduce((e,n)=>(e[n]=t[n],e),{}):t);(0,i.PO)(n)&&(null==K||K.set(n,e)),r=e}return"".concat(t,"(").concat(r,")")};function F(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){let n=(0,o.kO)(t=>{var n,r;return null===(n=e.extractRehydrationInfo)||void 0===n?void 0:n.call(e,t,{reducerPath:null!==(r=e.reducerPath)&&void 0!==r?r:"api"})}),r={reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1,invalidationBehavior:"delayed",...e,extractRehydrationInfo:n,serializeQueryArgs(t){let n=U;if("serializeQueryArgs"in t.endpointDefinition){let e=t.endpointDefinition.serializeQueryArgs;n=t=>{let n=e(t);return"string"==typeof n?n:U({...t,queryArgs:n})}}else e.serializeQueryArgs&&(n=e.serializeQueryArgs);return n(t)},tagTypes:[...e.tagTypes||[]]},i={endpointDefinitions:{},batch(e){e()},apiUid:(0,a.x0)(),extractRehydrationInfo:n,hasRehydrationInfo:(0,o.kO)(e=>null!=n(e))},u={injectEndpoints:function(e){for(let[t,n]of Object.entries(e.endpoints({query:e=>({...e,type:"query"}),mutation:e=>({...e,type:"mutation"})}))){if(!0!==e.overrideExisting&&t in i.endpointDefinitions){if("throw"===e.overrideExisting)throw Error((0,a.rJ)(39));continue}for(let e of(i.endpointDefinitions[t]=n,l))e.injectEndpoint(t,n)}return u},enhanceEndpoints(e){let{addTagTypes:t,endpoints:n}=e;if(t)for(let e of t)r.tagTypes.includes(e)||r.tagTypes.push(e);if(n)for(let[e,t]of Object.entries(n))"function"==typeof t?t(i.endpointDefinitions[e]):Object.assign(i.endpointDefinitions[e]||{},t);return u}},l=t.map(e=>e.init(u,r,i));return u.injectEndpoints({endpoints:e.endpoints})}}var H=e=>{let{reducerPath:t,api:n,context:r,internalState:i}=e,{removeQueryResult:a,unsubscribeQueryResult:u}=n.internalActions;function o(e){let t=i.currentSubscriptions[e];return!!t&&!function(e){for(let t in e)return!1;return!0}(t)}let l={};function s(e,t,n,i){var u;let s=r.endpointDefinitions[t],c=null!==(u=null==s?void 0:s.keepUnusedDataFor)&&void 0!==u?u:i.keepUnusedDataFor;if(c!==1/0&&!o(e)){let t=l[e];t&&clearTimeout(t),l[e]=setTimeout(()=>{o(e)||n.dispatch(a({queryCacheKey:e})),delete l[e]},1e3*Math.max(0,Math.min(c,2147482.647)))}}return(e,i,a)=>{if(u.match(e)){var o;let n=i.getState()[t],{queryCacheKey:r}=e.payload;s(r,null===(o=n.queries[r])||void 0===o?void 0:o.endpointName,i,n.config)}if(n.util.resetApiState.match(e))for(let[e,t]of Object.entries(l))t&&clearTimeout(t),delete l[e];if(r.hasRehydrationInfo(e)){let n=i.getState()[t],{queries:a}=r.extractRehydrationInfo(e);for(let[e,t]of Object.entries(a))s(e,null==t?void 0:t.endpointName,i,n.config)}}},J=e=>{let{reducerPath:t,context:n,context:{endpointDefinitions:r},mutationThunk:i,queryThunk:u,api:o,assertTagType:l,refetchQuery:s,internalState:c}=e,{removeQueryResult:d}=o.internalActions,f=(0,a.Q)((0,a.KD)(i),(0,a.h_)(i)),p=(0,a.Q)((0,a.KD)(i,u),(0,a.Iv)(i,u)),v=[];function m(e,r){let i=r.getState(),a=i[t];if(v.push(...e),"delayed"===a.config.invalidationBehavior&&function(e){var t,n;for(let n in e.queries)if((null===(t=e.queries[n])||void 0===t?void 0:t.status)==="pending")return!0;for(let t in e.mutations)if((null===(n=e.mutations[t])||void 0===n?void 0:n.status)==="pending")return!0;return!1}(a))return;let u=v;if(v=[],0===u.length)return;let l=o.util.selectInvalidatedBy(i,u);n.batch(()=>{for(let{queryCacheKey:t}of Array.from(l.values())){var e;let n=a.queries[t],i=null!==(e=c.currentSubscriptions[t])&&void 0!==e?e:{};n&&(0===C(i)?r.dispatch(d({queryCacheKey:t})):"uninitialized"!==n.status&&r.dispatch(s(n,t)))}})}return(e,t)=>{f(e)?m(k(e,"invalidatesTags",r,l),t):p(e)?m([],t):o.util.invalidateTags.match(e)&&m(q(e.payload,void 0,void 0,void 0,void 0,l),t)}},L=e=>{let{reducerPath:t,queryThunk:n,api:r,refetchQuery:i,internalState:a}=e,u={};function o(e,n){let{queryCacheKey:r}=e,l=n.getState()[t],s=l.queries[r],d=a.currentSubscriptions[r];if(!s||"uninitialized"===s.status)return;let{lowestPollingInterval:f,skipPollingIfUnfocused:p}=c(d);if(!Number.isFinite(f))return;let v=u[r];(null==v?void 0:v.timeout)&&(clearTimeout(v.timeout),v.timeout=void 0);let m=Date.now()+f;u[r]={nextPollTimestamp:m,pollingInterval:f,timeout:setTimeout(()=>{(l.config.focused||!p)&&n.dispatch(i(s,r)),o({queryCacheKey:r},n)},f)}}function l(e,n){let{queryCacheKey:r}=e,i=n.getState()[t].queries[r],l=a.currentSubscriptions[r];if(!i||"uninitialized"===i.status)return;let{lowestPollingInterval:d}=c(l);if(!Number.isFinite(d)){s(r);return}let f=u[r],p=Date.now()+d;(!f||p<f.nextPollTimestamp)&&o({queryCacheKey:r},n)}function s(e){let t=u[e];(null==t?void 0:t.timeout)&&clearTimeout(t.timeout),delete u[e]}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!1,n=Number.POSITIVE_INFINITY;for(let r in e)e[r].pollingInterval&&(n=Math.min(e[r].pollingInterval,n),t=e[r].skipPollingIfUnfocused||t);return{lowestPollingInterval:n,skipPollingIfUnfocused:t}}return(e,t)=>{(r.internalActions.updateSubscriptionOptions.match(e)||r.internalActions.unsubscribeQueryResult.match(e))&&l(e.payload,t),(n.pending.match(e)||n.rejected.match(e)&&e.meta.condition)&&l(e.meta.arg,t),(n.fulfilled.match(e)||n.rejected.match(e)&&!e.meta.condition)&&o(e.meta.arg,t),r.util.resetApiState.match(e)&&function(){for(let e of Object.keys(u))s(e)}()}},B=e=>{let{reducerPath:t,context:n,api:r,refetchQuery:i,internalState:a}=e,{removeQueryResult:u}=r.internalActions;function o(e,r){let o=e.getState()[t],l=o.queries,s=a.currentSubscriptions;n.batch(()=>{for(let t of Object.keys(s)){let n=l[t],a=s[t];a&&n&&(Object.values(a).some(e=>!0===e[r])||Object.values(a).every(e=>void 0===e[r])&&o.config[r])&&(0===C(a)?e.dispatch(u({queryCacheKey:t})):"uninitialized"!==n.status&&e.dispatch(i(n,t)))}})}return(e,t)=>{b.match(e)&&o(t,"refetchOnFocus"),R.match(e)&&o(t,"refetchOnReconnect")}},W=Error("Promise never resolved before cacheEntryRemoved."),G=e=>{let{api:t,reducerPath:n,context:r,queryThunk:i,mutationThunk:u,internalState:o}=e,l=(0,a.Gx)(i),s=(0,a.Gx)(u),c=(0,a.KD)(i,u),d={};function f(e,n,i,a,u){let o=r.endpointDefinitions[e],l=null==o?void 0:o.onCacheEntryAdded;if(!l)return;let s={},c=new Promise(e=>{s.cacheEntryRemoved=e}),f=Promise.race([new Promise(e=>{s.valueResolved=e}),c.then(()=>{throw W})]);f.catch(()=>{}),d[i]=s;let p=t.endpoints[e].select("query"===o.type?n:i),v=a.dispatch((e,t,n)=>n),m={...a,getCacheEntry:()=>p(a.getState()),requestId:u,extra:v,updateCachedData:"query"===o.type?r=>a.dispatch(t.util.updateQueryData(e,n,r)):void 0,cacheDataLoaded:f,cacheEntryRemoved:c};Promise.resolve(l(n,m)).catch(e=>{if(e!==W)throw e})}return(e,r,a)=>{let o=function(e){if(l(e))return e.meta.arg.queryCacheKey;if(s(e)){var n;return null!==(n=e.meta.arg.fixedCacheKey)&&void 0!==n?n:e.meta.requestId}return t.internalActions.removeQueryResult.match(e)?e.payload.queryCacheKey:t.internalActions.removeMutationResult.match(e)?N(e.payload):""}(e);if(i.pending.match(e)){let t=a[n].queries[o],i=r.getState()[n].queries[o];!t&&i&&f(e.meta.arg.endpointName,e.meta.arg.originalArgs,o,r,e.meta.requestId)}else if(u.pending.match(e))r.getState()[n].mutations[o]&&f(e.meta.arg.endpointName,e.meta.arg.originalArgs,o,r,e.meta.requestId);else if(c(e)){let t=d[o];(null==t?void 0:t.valueResolved)&&(t.valueResolved({data:e.payload,meta:e.meta.baseQueryMeta}),delete t.valueResolved)}else if(t.internalActions.removeQueryResult.match(e)||t.internalActions.removeMutationResult.match(e)){let e=d[o];e&&(delete d[o],e.cacheEntryRemoved())}else if(t.util.resetApiState.match(e))for(let[e,t]of Object.entries(d))delete d[e],t.cacheEntryRemoved()}},V=e=>{let{api:t,context:n,queryThunk:r,mutationThunk:i}=e,u=(0,a.zR)(r,i),o=(0,a.Iv)(r,i),l=(0,a.KD)(r,i),s={};return(e,r)=>{var i,a,c;if(u(e)){let{requestId:i,arg:{endpointName:a,originalArgs:u}}=e.meta,o=n.endpointDefinitions[a],l=null==o?void 0:o.onQueryStarted;if(l){let e={},n=new Promise((t,n)=>{e.resolve=t,e.reject=n});n.catch(()=>{}),s[i]=e;let c=t.endpoints[a].select("query"===o.type?u:i),d=r.dispatch((e,t,n)=>n),f={...r,getCacheEntry:()=>c(r.getState()),requestId:i,extra:d,updateCachedData:"query"===o.type?e=>r.dispatch(t.util.updateQueryData(a,u,e)):void 0,queryFulfilled:n};l(u,f)}}else if(l(e)){let{requestId:t,baseQueryMeta:n}=e.meta;null===(i=s[t])||void 0===i||i.resolve({data:e.payload,meta:n}),delete s[t]}else if(o(e)){let{requestId:t,rejectedWithValue:n,baseQueryMeta:r}=e.meta;null===(a=s[t])||void 0===a||a.reject({error:null!==(c=e.payload)&&void 0!==c?c:e.error,isUnhandledError:!n,meta:r}),delete s[t]}}},Y=e=>{let{api:t,context:{apiUid:n},reducerPath:r}=e;return(e,r)=>{t.util.resetApiState.match(e)&&r.dispatch(t.internalActions.middlewareRegistered(n))}},Z=e=>{let{api:t,queryThunk:n,internalState:r}=e,i="".concat(t.reducerPath,"/subscriptions"),a=null,o=null,{updateSubscriptionOptions:l,unsubscribeQueryResult:s}=t.internalActions,c=(e,r)=>{var i,a,u,o,c,d,f,p,v;if(l.match(r)){let{queryCacheKey:t,requestId:n,options:a}=r.payload;return(null==e?void 0:null===(i=e[t])||void 0===i?void 0:i[n])&&(e[t][n]=a),!0}if(s.match(r)){let{queryCacheKey:t,requestId:n}=r.payload;return e[t]&&delete e[t][n],!0}if(t.internalActions.removeQueryResult.match(r))return delete e[r.payload.queryCacheKey],!0;if(n.pending.match(r)){let{meta:{arg:t,requestId:n}}=r,i=null!==(u=e[a=t.queryCacheKey])&&void 0!==u?u:e[a]={};return i["".concat(n,"_running")]={},t.subscribe&&(i[n]=null!==(c=null!==(o=t.subscriptionOptions)&&void 0!==o?o:i[n])&&void 0!==c?c:{}),!0}let m=!1;if(n.fulfilled.match(r)||n.rejected.match(r)){let t=e[r.meta.arg.queryCacheKey]||{},n="".concat(r.meta.requestId,"_running");m||(m=!!t[n]),delete t[n]}if(n.rejected.match(r)){let{meta:{condition:t,arg:n,requestId:i}}=r;if(t&&n.subscribe){let t=null!==(f=e[d=n.queryCacheKey])&&void 0!==f?f:e[d]={};t[i]=null!==(v=null!==(p=n.subscriptionOptions)&&void 0!==p?p:t[i])&&void 0!==v?v:{},m=!0}}return m},d=()=>r.currentSubscriptions,f={getSubscriptions:d,getSubscriptionCount:e=>{var t;return C(null!==(t=d()[e])&&void 0!==t?t:{})},isRequestSubscribed:(e,t)=>{var n;let r=d();return!!(null==r?void 0:null===(n=r[e])||void 0===n?void 0:n[t])}};return(e,l)=>{if(a||(a=JSON.parse(JSON.stringify(r.currentSubscriptions))),t.util.resetApiState.match(e))return a=r.currentSubscriptions={},o=null,[!0,!1];if(t.internalActions.internal_getRTKQSubscriptions.match(e))return[!1,f];let s=c(r.currentSubscriptions,e),d=!0;if(s){o||(o=setTimeout(()=>{let e=JSON.parse(JSON.stringify(r.currentSubscriptions)),[,n]=(0,u.aS)(a,()=>e);l.next(t.internalActions.subscriptionsUpdated(n)),a=e,o=null},500));let s="string"==typeof e.type&&!!e.type.startsWith(i),c=n.rejected.match(e)&&e.meta.condition&&!!e.meta.arg.subscribe;d=!s&&!c}return[d,!1]}};function $(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Object.assign(e,...n)}var X=Symbol(),ee=function(){let{createSelector:e=o.P1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{name:X,init(t,n,r){let{baseQuery:o,tagTypes:l,reducerPath:s,serializeQueryArgs:c,keepUnusedDataFor:p,refetchOnMountOrArgChange:v,refetchOnFocus:m,refetchOnReconnect:h,invalidationBehavior:g}=n;(0,u.vI)();let x=e=>e;Object.assign(t,{reducerPath:s,endpoints:{},internalActions:{onOnline:R,onOffline:A,onFocus:b,onFocusLost:S},util:{}});let{queryThunk:K,mutationThunk:U,patchQueryData:F,updateQueryData:W,upsertQueryData:ee,prefetch:et,buildMatchThunkActions:en}=function(e){let{reducerPath:t,baseQuery:n,context:{endpointDefinitions:r},serializeQueryArgs:i,api:o,assertTagType:l}=e,s=async(e,t)=>{let{signal:i,abort:u,rejectWithValue:o,fulfillWithValue:l,dispatch:s,getState:d,extra:f}=t,p=r[e.endpointName];try{let t,r=P,o={signal:i,abort:u,dispatch:s,getState:d,extra:f,endpoint:e.endpointName,type:e.type,forced:"query"===e.type?c(e,d()):void 0},v="query"===e.type?e[M]:void 0;if(v?t=v():p.query?(t=await n(p.query(e.originalArgs),o,p.extraOptions),p.transformResponse&&(r=p.transformResponse)):t=await p.queryFn(e.originalArgs,o,p.extraOptions,e=>n(e,o,p.extraOptions)),t.error)throw new y(t.error,t.meta);return l(await r(t.data,t.meta,e.originalArgs),{fulfilledTimeStamp:Date.now(),baseQueryMeta:t.meta,[a.s4]:!0})}catch(n){let t=n;if(t instanceof y){let n=P;p.query&&p.transformErrorResponse&&(n=p.transformErrorResponse);try{return o(await n(t.value,t.meta,e.originalArgs),{baseQueryMeta:t.meta,[a.s4]:!0})}catch(e){t=e}}throw console.error(t),t}};function c(e,n){var r,i,a,u;let o=null===(i=n[t])||void 0===i?void 0:null===(r=i.queries)||void 0===r?void 0:r[e.queryCacheKey],l=null===(a=n[t])||void 0===a?void 0:a.config.refetchOnMountOrArgChange,s=null==o?void 0:o.fulfilledTimeStamp,c=null!==(u=e.forceRefetch)&&void 0!==u?u:e.subscribe&&l;return!!c&&(!0===c||(Number(new Date)-Number(s))/1e3>=c)}let d=(0,a.hg)("".concat(t,"/executeQuery"),s,{getPendingMeta:()=>({startedTimeStamp:Date.now(),[a.s4]:!0}),condition(e,n){var i,a,u;let{getState:o}=n,l=o(),s=null===(a=l[t])||void 0===a?void 0:null===(i=a.queries)||void 0===i?void 0:i[e.queryCacheKey],d=null==s?void 0:s.fulfilledTimeStamp,f=e.originalArgs,p=null==s?void 0:s.originalArgs,v=r[e.endpointName];return!!T(e)||(null==s?void 0:s.status)!=="pending"&&(!!(c(e,l)||O(v)&&(null==v?void 0:null===(u=v.forceRefetch)||void 0===u?void 0:u.call(v,{currentArg:f,previousArg:p,endpointState:s,state:l})))||!d)},dispatchConditionRejection:!0}),f=(0,a.hg)("".concat(t,"/executeMutation"),s,{getPendingMeta:()=>({startedTimeStamp:Date.now(),[a.s4]:!0})}),p=e=>"force"in e,v=e=>"ifOlderThan"in e;function m(e){return t=>{var n,r;return(null==t?void 0:null===(r=t.meta)||void 0===r?void 0:null===(n=r.arg)||void 0===n?void 0:n.endpointName)===e}}return{queryThunk:d,mutationThunk:f,prefetch:(e,t,n)=>(r,i)=>{let a=p(n)&&n.force,u=v(n)&&n.ifOlderThan,l=function(){let n=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return o.endpoints[e].initiate(t,{forceRefetch:n,isPrefetch:!0})},s=o.endpoints[e].select(t)(i());if(a)r(l());else if(u){let e=null==s?void 0:s.fulfilledTimeStamp;if(!e){r(l());return}(Number(new Date)-Number(new Date(e)))/1e3>=u&&r(l())}else r(l(!1))},updateQueryData:function(e,t,n){let r=!(arguments.length>3)||void 0===arguments[3]||arguments[3];return(i,a)=>{let l;let s=o.endpoints[e].select(t)(a()),c={patches:[],inversePatches:[],undo:()=>i(o.util.patchQueryData(e,t,c.inversePatches,r))};if("uninitialized"===s.status)return c;if("data"in s){if((0,u.o$)(s.data)){let[e,t,r]=(0,u.aS)(s.data,n);c.patches.push(...t),c.inversePatches.push(...r),l=e}else l=n(s.data),c.patches.push({op:"replace",path:[],value:l}),c.inversePatches.push({op:"replace",path:[],value:s.data})}return i(o.util.patchQueryData(e,t,c.patches,r)),c}},upsertQueryData:(e,t,n)=>r=>r(o.endpoints[e].initiate(t,{subscribe:!1,forceRefetch:!0,[M]:()=>({data:n})})),patchQueryData:(e,t,n,a)=>(u,s)=>{let c=r[e],d=i({queryArgs:t,endpointDefinition:c,endpointName:e});if(u(o.internalActions.queryResultPatched({queryCacheKey:d,patches:n})),!a)return;let f=o.endpoints[e].select(t)(s()),p=q(c.providesTags,f.data,void 0,t,{},l);u(o.internalActions.updateProvidedBy({queryCacheKey:d,providedTags:p}))},buildMatchThunkActions:function(e,t){return{matchPending:(0,a.A6)((0,a.zR)(e),m(t)),matchFulfilled:(0,a.A6)((0,a.KD)(e),m(t)),matchRejected:(0,a.A6)((0,a.Iv)(e),m(t))}}}}({baseQuery:o,reducerPath:s,context:r,api:t,serializeQueryArgs:c,assertTagType:x}),{reducer:er,actions:ei}=function(e){let{reducerPath:t,queryThunk:n,mutationThunk:r,context:{endpointDefinitions:o,apiUid:l,extractRehydrationInfo:s,hasRehydrationInfo:c},assertTagType:d,config:p}=e,v=(0,a.PH)("".concat(t,"/resetApiState")),m=(0,a.oM)({name:"".concat(t,"/queries"),initialState:E,reducers:{removeQueryResult:{reducer(e,t){let{payload:{queryCacheKey:n}}=t;delete e[n]},prepare:(0,a.cw)()},queryResultPatched:{reducer(e,t){let{payload:{queryCacheKey:n,patches:r}}=t;D(e,n,e=>{e.data=(0,u.QE)(e.data,r.concat())})},prepare:(0,a.cw)()}},extraReducers(e){e.addCase(n.pending,(e,t)=>{var n,r;let{meta:i,meta:{arg:a}}=t,u=T(a);null!==(r=e[n=a.queryCacheKey])&&void 0!==r||(e[n]={status:"uninitialized",endpointName:a.endpointName}),D(e,a.queryCacheKey,e=>{e.status="pending",e.requestId=u&&e.requestId?e.requestId:i.requestId,void 0!==a.originalArgs&&(e.originalArgs=a.originalArgs),e.startedTimeStamp=i.startedTimeStamp})}).addCase(n.fulfilled,(e,t)=>{let{meta:n,payload:r}=t;D(e,n.arg.queryCacheKey,e=>{if(e.requestId!==n.requestId&&!T(n.arg))return;let{merge:t}=o[n.arg.endpointName];if(e.status="fulfilled",t){if(void 0!==e.data){let{fulfilledTimeStamp:i,arg:a,baseQueryMeta:o,requestId:l}=n,s=(0,u.Uy)(e.data,e=>t(e,r,{arg:a.originalArgs,baseQueryMeta:o,fulfilledTimeStamp:i,requestId:l}));e.data=s}else e.data=r}else{var i;e.data=null===(i=o[n.arg.endpointName].structuralSharing)||void 0===i||i?function e(t,n){if(t===n||!(f(t)&&f(n)||Array.isArray(t)&&Array.isArray(n)))return n;let r=Object.keys(n),i=Object.keys(t),a=r.length===i.length,u=Array.isArray(n)?[]:{};for(let i of r)u[i]=e(t[i],n[i]),a&&(a=t[i]===u[i]);return a?t:u}((0,u.mv)(e.data)?(0,u.Js)(e.data):e.data,r):r}delete e.error,e.fulfilledTimeStamp=n.fulfilledTimeStamp})}).addCase(n.rejected,(e,t)=>{let{meta:{condition:n,arg:r,requestId:i},error:a,payload:u}=t;D(e,r.queryCacheKey,e=>{if(n);else{if(e.requestId!==i)return;e.status="rejected",e.error=null!=u?u:a}})}).addMatcher(c,(e,t)=>{let{queries:n}=s(t);for(let[t,r]of Object.entries(n))((null==r?void 0:r.status)==="fulfilled"||(null==r?void 0:r.status)==="rejected")&&(e[t]=r)})}}),h=(0,a.oM)({name:"".concat(t,"/mutations"),initialState:E,reducers:{removeMutationResult:{reducer(e,t){let{payload:n}=t,r=N(n);r in e&&delete e[r]},prepare:(0,a.cw)()}},extraReducers(e){e.addCase(r.pending,(e,t)=>{let{meta:n,meta:{requestId:r,arg:i,startedTimeStamp:a}}=t;i.track&&(e[N(n)]={requestId:r,status:"pending",endpointName:i.endpointName,startedTimeStamp:a})}).addCase(r.fulfilled,(e,t)=>{let{payload:n,meta:r}=t;r.arg.track&&Q(e,r,e=>{e.requestId===r.requestId&&(e.status="fulfilled",e.data=n,e.fulfilledTimeStamp=r.fulfilledTimeStamp)})}).addCase(r.rejected,(e,t)=>{let{payload:n,error:r,meta:i}=t;i.arg.track&&Q(e,i,e=>{e.requestId===i.requestId&&(e.status="rejected",e.error=null!=n?n:r)})}).addMatcher(c,(e,t)=>{let{mutations:n}=s(t);for(let[t,r]of Object.entries(n))((null==r?void 0:r.status)==="fulfilled"||(null==r?void 0:r.status)==="rejected")&&t!==(null==r?void 0:r.requestId)&&(e[t]=r)})}}),g=(0,a.oM)({name:"".concat(t,"/invalidation"),initialState:E,reducers:{updateProvidedBy:{reducer(e,t){let{queryCacheKey:n,providedTags:r}=t.payload;for(let t of Object.values(e))for(let e of Object.values(t)){let t=e.indexOf(n);-1!==t&&e.splice(t,1)}for(let{type:t,id:l}of r){var i,a,u,o;let r=null!==(o=(i=null!==(u=e[t])&&void 0!==u?u:e[t]={})[a=l||"__internal_without_id"])&&void 0!==o?o:i[a]=[];r.includes(n)||r.push(n)}},prepare:(0,a.cw)()}},extraReducers(e){e.addCase(m.actions.removeQueryResult,(e,t)=>{let{payload:{queryCacheKey:n}}=t;for(let t of Object.values(e))for(let e of Object.values(t)){let t=e.indexOf(n);-1!==t&&e.splice(t,1)}}).addMatcher(c,(e,t)=>{let{provided:n}=s(t);for(let[t,o]of Object.entries(n))for(let[n,l]of Object.entries(o)){var r,i,a,u;let o=null!==(u=(r=null!==(a=e[t])&&void 0!==a?a:e[t]={})[i=n||"__internal_without_id"])&&void 0!==u?u:r[i]=[];for(let e of l)o.includes(e)||o.push(e)}}).addMatcher((0,a.Q)((0,a.KD)(n),(0,a.h_)(n)),(e,t)=>{let n=k(t,"providesTags",o,d),{queryCacheKey:r}=t.meta.arg;g.caseReducers.updateProvidedBy(e,g.actions.updateProvidedBy({queryCacheKey:r,providedTags:n}))})}}),y=(0,a.oM)({name:"".concat(t,"/subscriptions"),initialState:E,reducers:{updateSubscriptionOptions(e,t){},unsubscribeQueryResult(e,t){},internal_getRTKQSubscriptions(){}}}),O=(0,a.oM)({name:"".concat(t,"/internalSubscriptions"),initialState:E,reducers:{subscriptionsUpdated:{reducer:(e,t)=>(0,u.QE)(e,t.payload),prepare:(0,a.cw)()}}}),q=(0,a.oM)({name:"".concat(t,"/config"),initialState:{online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine,focused:"undefined"==typeof document||"hidden"!==document.visibilityState,middlewareRegistered:!1,...p},reducers:{middlewareRegistered(e,t){let{payload:n}=t;e.middlewareRegistered="conflict"!==e.middlewareRegistered&&l===n||"conflict"}},extraReducers:e=>{e.addCase(R,e=>{e.online=!0}).addCase(A,e=>{e.online=!1}).addCase(b,e=>{e.focused=!0}).addCase(S,e=>{e.focused=!1}).addMatcher(c,e=>({...e}))}}),w=(0,i.UY)({queries:m.reducer,mutations:h.reducer,provided:g.reducer,subscriptions:O.reducer,config:q.reducer});return{reducer:(e,t)=>w(v.match(t)?void 0:e,t),actions:{...q.actions,...m.actions,...y.actions,...O.actions,...h.actions,...g.actions,resetApiState:v}}}({context:r,queryThunk:K,mutationThunk:U,reducerPath:s,assertTagType:x,config:{refetchOnFocus:m,refetchOnReconnect:h,refetchOnMountOrArgChange:v,keepUnusedDataFor:p,reducerPath:s,invalidationBehavior:g}});$(t.util,{patchQueryData:F,updateQueryData:W,upsertQueryData:ee,prefetch:et,resetApiState:ei.resetApiState}),$(t.internalActions,ei);let{middleware:ea,actions:eu}=function(e){let{reducerPath:t,queryThunk:n,api:r,context:u}=e,{apiUid:o}=u,l={invalidateTags:(0,a.PH)("".concat(t,"/invalidateTags"))},s=e=>e.type.startsWith("".concat(t,"/")),c=[Y,H,J,L,G,V];return{middleware:n=>{let a=!1,l={...e,internalState:{currentSubscriptions:{}},refetchQuery:d,isThisApiSliceAction:s},f=c.map(e=>e(l)),p=Z(l),v=B(l);return e=>l=>{let c;if(!(0,i.LG)(l))return e(l);a||(a=!0,n.dispatch(r.internalActions.middlewareRegistered(o)));let d={...n,next:e},m=n.getState(),[h,g]=p(l,d,m);if(c=h?e(l):g,n.getState()[t]&&(v(l,d,m),s(l)||u.hasRehydrationInfo(l)))for(let e of f)e(l,d,m);return c}},actions:l};function d(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n({type:"query",endpointName:e.endpointName,originalArgs:e.originalArgs,subscribe:!1,forceRefetch:!0,queryCacheKey:t,...r})}}({reducerPath:s,context:r,queryThunk:K,mutationThunk:U,api:t,assertTagType:x});$(t.util,eu),$(t,{reducer:er,middleware:ea});let{buildQuerySelector:eo,buildMutationSelector:el,selectInvalidatedBy:es,selectCachedArgsForQuery:ec}=function(e){let{serializeQueryArgs:t,reducerPath:n,createSelector:r}=e,i=e=>_,a=e=>z;return{buildQuerySelector:function(e,a){return o=>{let l=t({queryArgs:o,endpointDefinition:a,endpointName:e});return r(o===I?i:e=>{var t,r,i;return null!==(i=null===(r=e[n])||void 0===r?void 0:null===(t=r.queries)||void 0===t?void 0:t[l])&&void 0!==i?i:_},u)}},buildMutationSelector:function(){return e=>{let t;if("object"==typeof e){var i;t=null!==(i=N(e))&&void 0!==i?i:I}else t=e;return r(t===I?a:e=>{var r,i,a;return null!==(a=null===(i=e[n])||void 0===i?void 0:null===(r=i.mutations)||void 0===r?void 0:r[t])&&void 0!==a?a:z},u)}},selectInvalidatedBy:function(e,t){let r=e[n],i=new Set;for(let e of t.map(w)){var a;let t=r.provided[e.type];if(t)for(let n of null!==(a=void 0!==e.id?t[e.id]:d(Object.values(t)))&&void 0!==a?a:[])i.add(n)}return d(Array.from(i.values()).map(e=>{let t=r.queries[e];return t?[{queryCacheKey:e,endpointName:t.endpointName,originalArgs:t.originalArgs}]:[]}))},selectCachedArgsForQuery:function(e,t){return Object.values(e[n].queries).filter(e=>(null==e?void 0:e.endpointName)===t&&"uninitialized"!==e.status).map(e=>e.originalArgs)}};function u(e){var t;return{...e,status:t=e.status,isUninitialized:"uninitialized"===t,isLoading:"pending"===t,isSuccess:"fulfilled"===t,isError:"rejected"===t}}}({serializeQueryArgs:c,reducerPath:s,createSelector:e});$(t.util,{selectInvalidatedBy:es,selectCachedArgsForQuery:ec});let{buildInitiateQuery:ed,buildInitiateMutation:ef,getRunningMutationThunk:ep,getRunningMutationsThunk:ev,getRunningQueriesThunk:em,getRunningQueryThunk:eh}=function(e){let{serializeQueryArgs:t,queryThunk:n,mutationThunk:r,api:i,context:a}=e,u=new Map,o=new Map,{unsubscribeQueryResult:l,removeMutationResult:s,updateSubscriptionOptions:c}=i.internalActions;return{buildInitiateQuery:function(e,r){let a=function(o){let{subscribe:s=!0,forceRefetch:d,subscriptionOptions:f,[M]:p,...v}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(m,h)=>{var g;let y=t({queryArgs:o,endpointDefinition:r,endpointName:e}),b=n({...v,type:"query",subscribe:s,forceRefetch:d,subscriptionOptions:f,endpointName:e,originalArgs:o,queryCacheKey:y,[M]:p}),S=i.endpoints[e].select(o),R=m(b),A=S(h()),{requestId:O,abort:q}=R,w=A.requestId!==O,j=null===(g=u.get(m))||void 0===g?void 0:g[y],T=()=>S(h()),P=Object.assign(p?R.then(T):w&&!j?Promise.resolve(A):Promise.all([j,R]).then(T),{arg:o,requestId:O,subscriptionOptions:f,queryCacheKey:y,abort:q,async unwrap(){let e=await P;if(e.isError)throw e.error;return e.data},refetch:()=>m(a(o,{subscribe:!1,forceRefetch:!0})),unsubscribe(){s&&m(l({queryCacheKey:y,requestId:O}))},updateSubscriptionOptions(t){P.subscriptionOptions=t,m(c({endpointName:e,requestId:O,queryCacheKey:y,options:t}))}});if(!j&&!w&&!p){let e=u.get(m)||{};e[y]=P,u.set(m,e),P.then(()=>{delete e[y],C(e)||u.delete(m)})}return P}};return a},buildInitiateMutation:function(e){return function(t){let{track:n=!0,fixedCacheKey:i}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(a,u)=>{let l=a(r({type:"mutation",endpointName:e,originalArgs:t,track:n,fixedCacheKey:i})),{requestId:c,abort:d,unwrap:f}=l,p=Object.assign(l.unwrap().then(e=>({data:e})).catch(e=>({error:e})),{arg:l.arg,requestId:c,abort:d,unwrap:f,reset:()=>{a(s({requestId:c,fixedCacheKey:i}))}}),v=o.get(a)||{};return o.set(a,v),v[c]=p,p.then(()=>{delete v[c],C(v)||o.delete(a)}),i&&(v[i]=p,p.then(()=>{v[i]!==p||(delete v[i],C(v)||o.delete(a))})),p}}},getRunningQueryThunk:function(e,n){return r=>{var i;let o=t({queryArgs:n,endpointDefinition:a.endpointDefinitions[e],endpointName:e});return null===(i=u.get(r))||void 0===i?void 0:i[o]}},getRunningMutationThunk:function(e,t){return e=>{var n;return null===(n=o.get(e))||void 0===n?void 0:n[t]}},getRunningQueriesThunk:function(){return e=>Object.values(u.get(e)||{}).filter(j)},getRunningMutationsThunk:function(){return e=>Object.values(o.get(e)||{}).filter(j)}}}({queryThunk:K,mutationThunk:U,api:t,serializeQueryArgs:c,context:r});return $(t.util,{getRunningMutationThunk:ep,getRunningMutationsThunk:ev,getRunningQueryThunk:eh,getRunningQueriesThunk:em}),{name:X,injectEndpoint(e,n){var r,i;(null!==(i=(r=t.endpoints)[e])&&void 0!==i||(r[e]={}),O(n))?$(t.endpoints[e],{name:e,select:eo(e,n),initiate:ed(e,n)},en(K,e)):"mutation"===n.type&&$(t.endpoints[e],{name:e,select:el(),initiate:ef(e)},en(U,e))}}}}};ee()}}]);