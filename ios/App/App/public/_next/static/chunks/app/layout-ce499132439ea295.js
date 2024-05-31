(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{17931:function(e,t,r){Promise.resolve().then(r.bind(r,20240)),Promise.resolve().then(r.t.bind(r,57737,23)),Promise.resolve().then(r.bind(r,93294)),Promise.resolve().then(r.bind(r,55591)),Promise.resolve().then(r.t.bind(r,35442,23))},20240:function(e,t,r){"use strict";r.r(t),r.d(t,{boxClasses:function(){return o.Z},default:function(){return n.Z}});var n=r(60304),o=r(21977)},19473:function(e,t,r){"use strict";var n=r(47907),o=r(64090);t.Z=function(e){var t=e.children,r=n.useRouter(),i=n.usePathname(),s=n.useSearchParams();return t(o.useMemo(function(){function e(e){var t=i;return e.search&&(t+=e.search),window.location.hash&&(t+=window.location.hash),t}return{replace:function(t){r.replace(e(t),{scroll:!1})},push:function(t){r.push(e(t),{scroll:!1})},location:{search:s.toString()}}},[s,i,r]))}},87722:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){var t=(0,o.default)(e);return{getItem:function(e){return new Promise(function(r,n){r(t.getItem(e))})},setItem:function(e,r){return new Promise(function(n,o){n(t.setItem(e,r))})},removeItem:function(e){return new Promise(function(r,n){r(t.removeItem(e))})}}};var n,o=(n=r(13434))&&n.__esModule?n:{default:n}},13434:function(e,t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(){}t.__esModule=!0,t.default=function(e){var t="".concat(e,"Storage");return!function(e){if(("undefined"==typeof self?"undefined":r(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch(e){return!1}return!0}(t)?o:self[t]};var o={getItem:n,setItem:n,removeItem:n}},76295:function(e,t,r){"use strict";t.Z=void 0;var n,o=(0,((n=r(87722))&&n.__esModule?n:{default:n}).default)("local");t.Z=o},93294:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return eq}});var n,o,i,s,a,c,u,l,p,d,f,h,y,m,b=r(3827),g=r(14749),x=r(70444),v=r(64090);let j=v.createContext(null);function P(){return v.useContext(j)}var S="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",O=function(e){let{children:t,theme:r}=e,n=P(),o=v.useMemo(()=>{let e=null===n?r:"function"==typeof r?r(n):(0,g.Z)({},n,r);return null!=e&&(e[S]=null!==n),e},[r,n]);return(0,b.jsx)(j.Provider,{value:o,children:t})},Z=r(92050),w=r(61733),k=r(93346);let _={};function T(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return v.useMemo(()=>{let o=e&&t[e]||t;if("function"==typeof r){let i=r(o),s=e?(0,g.Z)({},t,{[e]:i}):i;return n?()=>s:s}return e?(0,g.Z)({},t,{[e]:r}):(0,g.Z)({},t,r)},[e,t,r,n])}var C=function(e){let{children:t,theme:r,themeId:n}=e,o=(0,w.Z)(_),i=P()||_,s=T(n,o,r),a=T(n,i,r,!0),c="rtl"===s.direction;return(0,b.jsx)(O,{theme:a,children:(0,b.jsx)(Z.T.Provider,{value:s,children:(0,b.jsx)(k.Z,{value:c,children:t})})})},I=r(11335);let E=["theme"];function R(e){let{theme:t}=e,r=(0,x.Z)(e,E),n=t[I.Z];return(0,b.jsx)(C,(0,g.Z)({},r,{themeId:n?I.Z:void 0,theme:n||t}))}var D=r(14342),A=r(33646),z=r(46608),B=r(17540);let M=(0,z.oM)({name:"createPost",initialState:{currentStep:0,steps:0,isCurrentStepCompleted:!1,transactionType:"sale",propertyType:"house",addressId:null,address:null,displayedAddress:"",location:null,title:"",description:"",images:[],bedrooms:0,bathrooms:0,area:0,price:0,priceSuggestion:0},reducers:{initialSteps:(e,t)=>{e.steps=t.payload},goNext:(e,t)=>{e.currentStep<e.steps&&e.isCurrentStepCompleted&&(e.currentStep+=1,e.isCurrentStepCompleted=!1)},goBack:(e,t)=>{e.currentStep>0&&(e.currentStep-=1)},setIsStepCompleted:(e,t)=>{e.isCurrentStepCompleted=t.payload},setTransactionType:(e,t)=>{e.transactionType=t.payload},setPropertyType:(e,t)=>{e.propertyType=t.payload},setAddressId:(e,t)=>{e.addressId=t.payload},setAddress:(e,t)=>{e.address=t.payload},setDisplayedAddress:(e,t)=>{e.displayedAddress=t.payload},setLocation:(e,t)=>{e.location=t.payload},setTitle:(e,t)=>{e.title=t.payload},setDescription:(e,t)=>{e.description=t.payload},updateAddress:(e,t)=>{e.address=Object.assign(e.address,t.payload)},setImages:(e,t)=>{e.images=t.payload},addSingleImage:(e,t)=>{e.images=[...e.images,t.payload]},removeSingleImage:(e,t)=>{e.images=e.images.filter(e=>e.id!==t.payload)},addMultipleImages:(e,t)=>{e.images=[...e.images,...t.payload]},setBedrooms:(e,t)=>{e.bedrooms=t.payload},setBathrooms:(e,t)=>{e.bathrooms=t.payload},setPrice:(e,t)=>{e.price=t.payload},setArea:(e,t)=>{e.area=t.payload},setPriceSuggestion:(e,t)=>{e.priceSuggestion=t.payload}}}),{setTransactionType:U,setPropertyType:L,setAddressId:W,initialSteps:F,goNext:N,goBack:H,setIsStepCompleted:Q,setAddress:q,updateAddress:G,setLocation:J,setTitle:Y,setDescription:K,addSingleImage:V,addMultipleImages:X,removeSingleImage:$,setArea:ee,setBedrooms:et,setBathrooms:er,setDisplayedAddress:en,setPrice:eo,setPriceSuggestion:ei}=M.actions;var es=M.reducer,ea=r(57607),ec=r(66413),eu=r(76295),el="persist:",ep="persist/FLUSH",ed="persist/REHYDRATE",ef="persist/PAUSE",eh="persist/PERSIST",ey="persist/PURGE",em="persist/REGISTER";function eb(e){return(eb="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function eg(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ex(e){return JSON.stringify(e)}function ev(e){return JSON.parse(e)}function ej(e){}function eP(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function eS(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eP(r,!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eP(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function eO(e){return function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance")}()}function eZ(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ew(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eZ(r,!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eZ(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ek={registry:[],bootstrapped:!1};let e_={key:"root",storage:eu.Z,timeout:2e3,whitelist:["auth"]},eT=(0,A.UY)({[D.g.reducerPath]:D.g.reducer,[ea.Bx.reducerPath]:ea.Bx.reducer,[ec.WQ.reducerPath]:ec.WQ.reducer,auth:B.ZP,createPost:es}),eC=(n=void 0!==e_.version?e_.version:-1,e_.debug,o=void 0===e_.stateReconciler?function(e,t,r,n){n.debug;var o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eg(r,!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eg(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},r);return e&&"object"===eb(e)&&Object.keys(e).forEach(function(n){"_persist"!==n&&t[n]===r[n]&&(o[n]=e[n])}),o}:e_.stateReconciler,i=e_.getStoredState||function(e){var t,r=e.transforms||[],n="".concat(void 0!==e.keyPrefix?e.keyPrefix:el).concat(e.key),o=e.storage;return e.debug,t=!1===e.deserialize?function(e){return e}:"function"==typeof e.deserialize?e.deserialize:ev,o.getItem(n).then(function(e){if(e)try{var n={},o=t(e);return Object.keys(o).forEach(function(e){n[e]=r.reduceRight(function(t,r){return r.out(t,e,o)},t(o[e]))}),n}catch(e){throw e}})},s=void 0!==e_.timeout?e_.timeout:5e3,a=null,c=!1,u=!0,l=function(e){return e._persist.rehydrated&&a&&!u&&a.update(e),e},function(e,t){var r,p,d=e||{},f=d._persist,h=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(d,["_persist"]);if(t.type===eh){var y=!1,m=function(e,r){y||(t.rehydrate(e_.key,e,r),y=!0)};if(s&&setTimeout(function(){y||m(void 0,Error('redux-persist: persist timed out for persist key "'.concat(e_.key,'"')))},s),u=!1,a||(a=function(e){var t,r=e.blacklist||null,n=e.whitelist||null,o=e.transforms||[],i=e.throttle||0,s="".concat(void 0!==e.keyPrefix?e.keyPrefix:el).concat(e.key),a=e.storage;t=!1===e.serialize?function(e){return e}:"function"==typeof e.serialize?e.serialize:ex;var c=e.writeFailHandler||null,u={},l={},p=[],d=null,f=null;function h(){if(0===p.length){d&&clearInterval(d),d=null;return}var e=p.shift(),r=o.reduce(function(t,r){return r.in(t,e,u)},u[e]);if(void 0!==r)try{l[e]=t(r)}catch(e){console.error("redux-persist/createPersistoid: error serializing state",e)}else delete l[e];0===p.length&&(Object.keys(l).forEach(function(e){void 0===u[e]&&delete l[e]}),f=a.setItem(s,t(l)).catch(m))}function y(e){return(!n||-1!==n.indexOf(e)||"_persist"===e)&&(!r||-1===r.indexOf(e))}function m(e){c&&c(e)}return{update:function(e){Object.keys(e).forEach(function(t){y(t)&&u[t]!==e[t]&&-1===p.indexOf(t)&&p.push(t)}),Object.keys(u).forEach(function(t){void 0===e[t]&&y(t)&&-1===p.indexOf(t)&&void 0!==u[t]&&p.push(t)}),null===d&&(d=setInterval(h,i)),u=e},flush:function(){for(;0!==p.length;)h();return f||Promise.resolve()}}}(e_)),f)return eS({},eT(h,t),{_persist:f});if("function"!=typeof t.rehydrate||"function"!=typeof t.register)throw Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return t.register(e_.key),i(e_).then(function(e){(e_.migrate||function(e,t){return Promise.resolve(e)})(e,n).then(function(e){m(e)},function(e){m(void 0,e)})},function(e){m(void 0,e)}),eS({},eT(h,t),{_persist:{version:n,rehydrated:!1}})}if(t.type===ey)return c=!0,t.result((r=e_.storage,p="".concat(void 0!==e_.keyPrefix?e_.keyPrefix:el).concat(e_.key),r.removeItem(p,ej))),eS({},eT(h,t),{_persist:f});if(t.type===ep)return t.result(a&&a.flush()),eS({},eT(h,t),{_persist:f});if(t.type===ef)u=!0;else if(t.type===ed){if(c)return eS({},h,{_persist:eS({},f,{rehydrated:!0})});if(t.key===e_.key){var b=eT(h,t),g=t.payload;return l(eS({},!1!==o&&void 0!==g?o(g,e,b,e_):b,{_persist:eS({},f,{rehydrated:!0})}))}}if(!f)return eT(e,t);var x=eT(h,t);return x===h?e:l(eS({},x,{_persist:f}))}),eI=(0,z.xC)({reducer:eC,middleware:e=>e({serializableCheck:{ignoredActions:["persist/PERSIST","persist/REHYDRATE","persist/PURGE","persist/FLUSH"]}}).concat(D.g.middleware).concat(ea.Bx.middleware).concat(ec.WQ.middleware)}),eE=(d=!1,f=(0,A.MT)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ek,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case em:return ew({},e,{registry:[].concat(eO(e.registry),[t.key])});case ed:var r=e.registry.indexOf(t.key),n=eO(e.registry);return n.splice(r,1),ew({},e,{registry:n,bootstrapped:0===n.length});default:return e}},ek,p&&p.enhancer?p.enhancer:void 0),h=function(e){f.dispatch({type:em,key:e})},y=function(e,t,r){var n={type:ed,payload:t,err:r,key:e};eI.dispatch(n),f.dispatch(n),d&&m.getState().bootstrapped&&(d(),d=!1)},m=ew({},f,{purge:function(){var e=[];return eI.dispatch({type:ey,result:function(t){e.push(t)}}),Promise.all(e)},flush:function(){var e=[];return eI.dispatch({type:ep,result:function(t){e.push(t)}}),Promise.all(e)},pause:function(){eI.dispatch({type:ef})},persist:function(){eI.dispatch({type:eh,register:h,rehydrate:y})}}),p&&p.manualPersist||m.persist(),m);var eR=r(19473),eD=r(30828),eA=r(72827),ez=r(83603),eB=r(54090);let eM=(0,r(76795).Z)({palette:{primary:{main:ez.Z[800],contrastText:"#fff"},secondary:{main:"#f44336"},blue:{main:"#5F9DF7",contrastText:"#fff"}},typography:{button:{textTransform:"none",fontWeight:"normal"},h4:{fontWeight:600,color:eB.Z[900]}}});function eU(e){return(eU="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function eL(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function eW(e){return(eW=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function eF(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function eN(e,t){return(eN=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function eH(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var eQ=function(e){var t;function r(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r);for(var e,t,n,o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=(e=(t=eW(r)).call.apply(t,[this].concat(i)))&&("object"===eU(e)||"function"==typeof e)?e:eF(this),eH(eF(n),"state",{bootstrapped:!1}),eH(eF(n),"_unsubscribe",void 0),eH(eF(n),"handlePersistorState",function(){n.props.persistor.getState().bootstrapped&&(n.props.onBeforeLift?Promise.resolve(n.props.onBeforeLift()).finally(function(){return n.setState({bootstrapped:!0})}):n.setState({bootstrapped:!0}),n._unsubscribe&&n._unsubscribe())}),n}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&eN(e,t)}(r,e),eL(r.prototype,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return"function"==typeof this.props.children?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t&&eL(r,t),r}(v.PureComponent);function eq(e){let{children:t}=e;return(0,b.jsx)(eD.zt,{store:eI,children:(0,b.jsx)(eQ,{persistor:eE,children:(0,b.jsx)(eA.QueryParamProvider,{adapter:eR.Z,options:{enableBatching:!0},children:(0,b.jsx)(R,{theme:eM,children:t})})})})}eH(eQ,"defaultProps",{children:null,loading:null})},55591:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return U}});var n=r(3827),o=r(8792),i=r(30828),s=r(92293),a=r(58836),c=r(4598),u=r(70895),l=r(6285),p=r(17489),d=r(29835),f=r(43206),h=r(60304),y=r(83603),m=r(54090),b=r(47907),g=r(64090),x=r(33797),v=r(19038),j=r(58237),P=r(17540),S=r(71498),O=r(62522),Z=r(19204),w=r(48915);function k(e){let{anchorEl:t,open:r,handleClose:o}=e,s=(0,b.useRouter)(),a=(0,i.I0)();return(0,n.jsxs)(x.Z,{anchorEl:t,id:"account-menu",open:r,onClose:o,onClick:o,transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[(0,n.jsxs)(v.Z,{onClick:()=>s.push("/landlord"),children:[(0,n.jsx)(j.Z,{children:(0,n.jsx)(S.Z,{sx:{fontSize:18}})}),"Manage my properties"]}),(0,n.jsxs)(v.Z,{onClick:o,children:[(0,n.jsx)(j.Z,{children:(0,n.jsx)(O.Z,{sx:{fontSize:18}})}),"Update profile"]}),(0,n.jsxs)(v.Z,{onClick:o,children:[(0,n.jsx)(j.Z,{children:(0,n.jsx)(Z.Z,{sx:{fontSize:18}})}),"Change password"]}),(0,n.jsxs)(v.Z,{onClick:()=>{s.push("/"),a((0,P.TT)())},children:[(0,n.jsx)(j.Z,{children:(0,n.jsx)(w.Z,{sx:{fontSize:18}})}),"Logout"]})]})}var _=r(48740),T=r(36892),C=r(58129),I=r(90144),E=r(69905),R=r(88433),D=r(29409),A=r(97528);function z(e){let{open:t,toggleDrawer:r,user:o,userName:s}=e,a=(0,b.useRouter)(),c=(0,i.I0)();return(0,n.jsxs)(T.ZP,{anchor:"left",open:t,onClose:r(!1),children:[(0,n.jsxs)(h.Z,{sx:{width:250},role:"presentation",onClick:r(!1),onKeyDown:r(!1),children:[o?(0,n.jsxs)(u.Z,{direction:"row",alignItems:"center",spacing:1,sx:{padding:2},children:[(0,n.jsx)(p.Z,{sx:{width:30,height:30},children:s[0].toUpperCase()}),(0,n.jsx)(d.Z,{sx:{fontWeight:700},children:s})]}):(0,n.jsxs)(u.Z,{direction:"row",spacing:1,sx:{padding:2},children:[(0,n.jsx)(l.Z,{variant:"outlined",sx:{flexGrow:1},onClick:()=>a.push("/login"),children:"Login"}),(0,n.jsx)(l.Z,{variant:"contained",sx:{flexGrow:1},onClick:()=>a.push("/signup"),children:"Sign- up"})]}),o?(0,n.jsx)(h.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,n.jsx)(l.Z,{variant:"contained",sx:{width:"90%"},children:(0,n.jsx)(d.Z,{children:"Manage my properties"})})}):(0,n.jsx)(C.Z,{}),(0,n.jsxs)(I.Z,{children:[(0,n.jsxs)(E.ZP,{onClick:()=>a.push("/rent"),children:[(0,n.jsx)(j.Z,{sx:{minWidth:36},children:(0,n.jsx)(D.Z,{color:"primary"})}),(0,n.jsx)(R.Z,{primary:"Rent"})]}),(0,n.jsxs)(E.ZP,{onClick:()=>a.push("/buy"),children:[(0,n.jsx)(j.Z,{sx:{minWidth:36},children:(0,n.jsx)(A.Z,{color:"primary"})}),(0,n.jsx)(R.Z,{primary:"Buy"})]})]})]}),o&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(C.Z,{}),(0,n.jsx)(I.Z,{children:(0,n.jsxs)(E.ZP,{onClick:()=>{a.push("/"),c((0,P.TT)())},children:[(0,n.jsx)(j.Z,{sx:{minWidth:36},children:(0,n.jsx)(D.Z,{color:"primary"})}),(0,n.jsx)(R.Z,{primary:"Log out"})]})})]})]})}let B=e=>{let{children:t,...r}=e;return(0,n.jsx)(s.Z,{component:o.default,underline:"none",...r,children:t})},M=(0,a.ZP)(e=>(0,n.jsx)(c.Z,{maxWidth:"xl",...e}))(e=>{let{theme:t}=e;return{paddingTop:"60px",paddingBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",position:"fixed",zIndex:1e3,backgroundColor:y.Z[800]}});var U=function(){let e=(0,b.useRouter)(),t=(0,i.v9)(e=>e.auth.user),r=(0,g.useMemo)(()=>(null==t?void 0:t.name)||"User",[t]),[o,s]=(0,g.useState)(null),[a,c]=(0,g.useState)(!1),y=e=>t=>{("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&c(e)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(M,{children:[(0,n.jsxs)(u.Z,{direction:"row",spacing:3,alignItems:"center",children:[(0,n.jsx)(B,{href:"/",sx:{fontSize:28,fontWeight:600,width:120,color:"#fff"},children:"BKRental"}),(0,n.jsx)(B,{fontSize:20,href:"/rent",color:"inherit",sx:{display:{xs:"none",sm:"none",md:"flex"}},children:"Rent"}),(0,n.jsx)(B,{fontSize:20,href:"/buy",color:"inherit",sx:{display:{xs:"none",sm:"none",md:"flex"}},children:"Buy"})]}),(0,n.jsxs)(u.Z,{direction:"row",spacing:1,sx:{display:{xs:"none",sm:"none",md:"flex"}},children:[(0,n.jsx)(l.Z,{onClick:()=>e.push("/landlord"),size:"large",color:"inherit",children:"Post a property"}),t?(0,n.jsxs)(u.Z,{direction:"row",alignItems:"center",spacing:1,sx:{border:1,borderColor:m.Z[300],px:1,borderRadius:2,cursor:"pointer"},onClick:e=>{s(e.currentTarget)},children:[(0,n.jsx)(p.Z,{sx:{width:30,height:30},children:r[0].toUpperCase()}),(0,n.jsx)(d.Z,{children:r})]}):(0,n.jsx)(l.Z,{onClick:()=>e.push("/login"),variant:"outlined",children:"Sign Up or Login"})]}),(0,n.jsx)(f.Z,{edge:"start",color:"inherit","aria-label":"menu",sx:{display:{xs:"flex",sm:"flex",md:"none"}},onClick:y(!0),children:(0,n.jsx)(_.Z,{})}),(0,n.jsx)(z,{open:a,toggleDrawer:y,user:t,userName:r}),(0,n.jsx)(k,{anchorEl:o,open:!!o,handleClose:()=>{s(null)}})]}),(0,n.jsx)(h.Z,{sx:{width:"100%",height:"60px"}})]})}},14342:function(e,t,r){"use strict";r.d(t,{g:function(){return c}});var n=r(27230),o=r(43741),i=r(17540);let s=(0,n.ni)({baseUrl:"http://localhost:3000",prepareHeaders:(e,t)=>{let{getState:r}=t,n=r().auth.accessToken;return n&&e.set("Authorization","Bearer ".concat(n)),e}}),a=async(e,t,r)=>{var n;let o=await s(e,t,r);if((null==o?void 0:null===(n=o.error)||void 0===n?void 0:n.originalStatus)===401){console.log("sending refresh token");let n=await s("/auth/refresh",t,r);console.log("refreshResult",n),(null==n?void 0:n.data)?(t.dispatch((0,i.ps)({...auth,accessToken:n.data.accessToken})),o=await s(e,t,r)):(console.log("refresh failed"),t.dispatch((0,i.TT)()))}return o},c=(0,o.LC)({baseQuery:a,endpoints:e=>({})})},17540:function(e,t,r){"use strict";r.d(t,{TT:function(){return i},he:function(){return s},ps:function(){return o}});let n=(0,r(46608).oM)({name:"auth",initialState:{accessToken:null,user:null,isAuthenticated:!1},reducers:{loginSuccess:(e,t)=>{e.accessToken=t.payload.access_token,e.user=t.payload.user,e.isAuthenticated=!0},setUserInfo:(e,t)=>{e.accessToken=t.payload.access_token,e.user=t.payload.user,e.isAuthenticated=!0},removeUserInfo:(e,t)=>{localStorage.removeItem("accessToken"),e.isAuthenticated=!1,e.user=null,e.accessToken=null}}}),{setUserInfo:o,removeUserInfo:i,loginSuccess:s}=n.actions;t.ZP=n.reducer},66413:function(e,t,r){"use strict";r.d(t,{WQ:function(){return s},jn:function(){return c},wf:function(){return a}});let{fetchBaseQuery:n}=r(60077),o=n({baseUrl:"http://localhost:3000",prepareHeaders:(e,t)=>{let{getState:r}=t,n=r().auth.accessToken;return console.log(n),n&&e.set("Authorization","Bearer ".concat(n)),e}});var i=r(66817);let s=(0,r(43741).LC)({reducerPath:"landlord",baseQuery:o,endpoints:e=>({getMyProperties:e.query({query:e=>({url:"/posts/me",params:{...e}}),transformResponse:i.F}),deletePost:e.mutation({query:e=>({url:"/posts/".concat(e),method:"DELETE"})})})}),{useGetMyPropertiesQuery:a,useDeletePostMutation:c}=s},57607:function(e,t,r){"use strict";r.d(t,{Bx:function(){return s},JD:function(){return a}});var n=r(66817),o=r(43741),i=r(27230);let s=(0,o.LC)({reducerPath:"properties",baseQuery:(0,i.ni)({baseUrl:"http://localhost:3000"}),endpoints:e=>({getProperties:e.query({query:e=>({url:"/posts",params:{...e}}),transformResponse:n.F}),getPropertyById:e.query({query:e=>({url:"/posts/".concat(e)}),transformResponse:e=>e.data})})}),{useGetPropertiesQuery:a,useGetPropertyByIdQuery:c}=s},66817:function(e,t,r){"use strict";r.d(t,{F:function(){return n}});let n=e=>{var t;return{properties:null!==(t=null==e?void 0:e.data)&&void 0!==t?t:[],pagination:null==e?void 0:e.pagination}}},35442:function(){},57737:function(e){e.exports={style:{fontFamily:"'__Roboto_0e1fb9', '__Roboto_Fallback_0e1fb9'",fontStyle:"normal"},className:"__className_0e1fb9"}}},function(e){e.O(0,[826,665,792,585,741,865,623,824,790,971,69,744],function(){return e(e.s=17931)}),_N_E=e.O()}]);