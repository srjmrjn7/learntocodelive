(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const x of h.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&c(x)}).observe(document,{childList:!0,subtree:!0});function f(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(d){if(d.ep)return;d.ep=!0;const h=f(d);fetch(d.href,h)}})();function Vh(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Er={exports:{}},Dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd;function Zh(){if(jd)return Dl;jd=1;var u=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function f(c,d,h){var x=null;if(h!==void 0&&(x=""+h),d.key!==void 0&&(x=""+d.key),"key"in d){h={};for(var R in d)R!=="key"&&(h[R]=d[R])}else h=d;return d=h.ref,{$$typeof:u,type:c,key:x,ref:d!==void 0?d:null,props:h}}return Dl.Fragment=s,Dl.jsx=f,Dl.jsxs=f,Dl}var Ld;function kh(){return Ld||(Ld=1,Er.exports=Zh()),Er.exports}var M=kh(),Tr={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function Kh(){if(qd)return ae;qd=1;var u=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),x=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),j=Symbol.iterator;function O(y){return y===null||typeof y!="object"?null:(y=j&&y[j]||y["@@iterator"],typeof y=="function"?y:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,B={};function X(y,U,V){this.props=y,this.context=U,this.refs=B,this.updater=V||G}X.prototype.isReactComponent={},X.prototype.setState=function(y,U){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,U,"setState")},X.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function q(){}q.prototype=X.prototype;function L(y,U,V){this.props=y,this.context=U,this.refs=B,this.updater=V||G}var k=L.prototype=new q;k.constructor=L,_(k,X.prototype),k.isPureReactComponent=!0;var te=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},Oe=Object.prototype.hasOwnProperty;function Ae(y,U,V,Y,J,re){return V=re.ref,{$$typeof:u,type:y,key:U,ref:V!==void 0?V:null,props:re}}function Re(y,U){return Ae(y.type,U,void 0,void 0,void 0,y.props)}function be(y){return typeof y=="object"&&y!==null&&y.$$typeof===u}function Ke(y){var U={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(V){return U[V]})}var ft=/\/+/g;function Qe(y,U){return typeof y=="object"&&y!==null&&y.key!=null?Ke(""+y.key):U.toString(36)}function Ta(){}function Aa(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Ta,Ta):(y.status="pending",y.then(function(U){y.status==="pending"&&(y.status="fulfilled",y.value=U)},function(U){y.status==="pending"&&(y.status="rejected",y.reason=U)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function Xe(y,U,V,Y,J){var re=typeof y;(re==="undefined"||re==="boolean")&&(y=null);var ee=!1;if(y===null)ee=!0;else switch(re){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(y.$$typeof){case u:case s:ee=!0;break;case w:return ee=y._init,Xe(ee(y._payload),U,V,Y,J)}}if(ee)return J=J(y),ee=Y===""?"."+Qe(y,0):Y,te(J)?(V="",ee!=null&&(V=ee.replace(ft,"$&/")+"/"),Xe(J,U,V,"",function(Wt){return Wt})):J!=null&&(be(J)&&(J=Re(J,V+(J.key==null||y&&y.key===J.key?"":(""+J.key).replace(ft,"$&/")+"/")+ee)),U.push(J)),1;ee=0;var et=Y===""?".":Y+":";if(te(y))for(var xe=0;xe<y.length;xe++)Y=y[xe],re=et+Qe(Y,xe),ee+=Xe(Y,U,V,re,J);else if(xe=O(y),typeof xe=="function")for(y=xe.call(y),xe=0;!(Y=y.next()).done;)Y=Y.value,re=et+Qe(Y,xe++),ee+=Xe(Y,U,V,re,J);else if(re==="object"){if(typeof y.then=="function")return Xe(Aa(y),U,V,Y,J);throw U=String(y),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return ee}function C(y,U,V){if(y==null)return y;var Y=[],J=0;return Xe(y,Y,"","",function(re){return U.call(V,re,J++)}),Y}function Q(y){if(y._status===-1){var U=y._result;U=U(),U.then(function(V){(y._status===0||y._status===-1)&&(y._status=1,y._result=V)},function(V){(y._status===0||y._status===-1)&&(y._status=2,y._result=V)}),y._status===-1&&(y._status=0,y._result=U)}if(y._status===1)return y._result.default;throw y._result}var P=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function ye(){}return ae.Children={map:C,forEach:function(y,U,V){C(y,function(){U.apply(this,arguments)},V)},count:function(y){var U=0;return C(y,function(){U++}),U},toArray:function(y){return C(y,function(U){return U})||[]},only:function(y){if(!be(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},ae.Component=X,ae.Fragment=f,ae.Profiler=d,ae.PureComponent=L,ae.StrictMode=c,ae.Suspense=v,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ae.__COMPILER_RUNTIME={__proto__:null,c:function(y){return F.H.useMemoCache(y)}},ae.cache=function(y){return function(){return y.apply(null,arguments)}},ae.cloneElement=function(y,U,V){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var Y=_({},y.props),J=y.key,re=void 0;if(U!=null)for(ee in U.ref!==void 0&&(re=void 0),U.key!==void 0&&(J=""+U.key),U)!Oe.call(U,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&U.ref===void 0||(Y[ee]=U[ee]);var ee=arguments.length-2;if(ee===1)Y.children=V;else if(1<ee){for(var et=Array(ee),xe=0;xe<ee;xe++)et[xe]=arguments[xe+2];Y.children=et}return Ae(y.type,J,void 0,void 0,re,Y)},ae.createContext=function(y){return y={$$typeof:x,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:h,_context:y},y},ae.createElement=function(y,U,V){var Y,J={},re=null;if(U!=null)for(Y in U.key!==void 0&&(re=""+U.key),U)Oe.call(U,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(J[Y]=U[Y]);var ee=arguments.length-2;if(ee===1)J.children=V;else if(1<ee){for(var et=Array(ee),xe=0;xe<ee;xe++)et[xe]=arguments[xe+2];J.children=et}if(y&&y.defaultProps)for(Y in ee=y.defaultProps,ee)J[Y]===void 0&&(J[Y]=ee[Y]);return Ae(y,re,void 0,void 0,null,J)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(y){return{$$typeof:R,render:y}},ae.isValidElement=be,ae.lazy=function(y){return{$$typeof:w,_payload:{_status:-1,_result:y},_init:Q}},ae.memo=function(y,U){return{$$typeof:p,type:y,compare:U===void 0?null:U}},ae.startTransition=function(y){var U=F.T,V={};F.T=V;try{var Y=y(),J=F.S;J!==null&&J(V,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(ye,P)}catch(re){P(re)}finally{F.T=U}},ae.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ae.use=function(y){return F.H.use(y)},ae.useActionState=function(y,U,V){return F.H.useActionState(y,U,V)},ae.useCallback=function(y,U){return F.H.useCallback(y,U)},ae.useContext=function(y){return F.H.useContext(y)},ae.useDebugValue=function(){},ae.useDeferredValue=function(y,U){return F.H.useDeferredValue(y,U)},ae.useEffect=function(y,U,V){var Y=F.H;if(typeof V=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Y.useEffect(y,U)},ae.useId=function(){return F.H.useId()},ae.useImperativeHandle=function(y,U,V){return F.H.useImperativeHandle(y,U,V)},ae.useInsertionEffect=function(y,U){return F.H.useInsertionEffect(y,U)},ae.useLayoutEffect=function(y,U){return F.H.useLayoutEffect(y,U)},ae.useMemo=function(y,U){return F.H.useMemo(y,U)},ae.useOptimistic=function(y,U){return F.H.useOptimistic(y,U)},ae.useReducer=function(y,U,V){return F.H.useReducer(y,U,V)},ae.useRef=function(y){return F.H.useRef(y)},ae.useState=function(y){return F.H.useState(y)},ae.useSyncExternalStore=function(y,U,V){return F.H.useSyncExternalStore(y,U,V)},ae.useTransition=function(){return F.H.useTransition()},ae.version="19.1.0",ae}var Gd;function Nr(){return Gd||(Gd=1,Tr.exports=Kh()),Tr.exports}var N=Nr();const Yd=Vh(N);var Ar={exports:{}},Cl={},wr={exports:{}},Mr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd;function Jh(){return Qd||(Qd=1,function(u){function s(C,Q){var P=C.length;C.push(Q);e:for(;0<P;){var ye=P-1>>>1,y=C[ye];if(0<d(y,Q))C[ye]=Q,C[P]=y,P=ye;else break e}}function f(C){return C.length===0?null:C[0]}function c(C){if(C.length===0)return null;var Q=C[0],P=C.pop();if(P!==Q){C[0]=P;e:for(var ye=0,y=C.length,U=y>>>1;ye<U;){var V=2*(ye+1)-1,Y=C[V],J=V+1,re=C[J];if(0>d(Y,P))J<y&&0>d(re,Y)?(C[ye]=re,C[J]=P,ye=J):(C[ye]=Y,C[V]=P,ye=V);else if(J<y&&0>d(re,P))C[ye]=re,C[J]=P,ye=J;else break e}}return Q}function d(C,Q){var P=C.sortIndex-Q.sortIndex;return P!==0?P:C.id-Q.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;u.unstable_now=function(){return h.now()}}else{var x=Date,R=x.now();u.unstable_now=function(){return x.now()-R}}var v=[],p=[],w=1,j=null,O=3,G=!1,_=!1,B=!1,X=!1,q=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function te(C){for(var Q=f(p);Q!==null;){if(Q.callback===null)c(p);else if(Q.startTime<=C)c(p),Q.sortIndex=Q.expirationTime,s(v,Q);else break;Q=f(p)}}function F(C){if(B=!1,te(C),!_)if(f(v)!==null)_=!0,Oe||(Oe=!0,Qe());else{var Q=f(p);Q!==null&&Xe(F,Q.startTime-C)}}var Oe=!1,Ae=-1,Re=5,be=-1;function Ke(){return X?!0:!(u.unstable_now()-be<Re)}function ft(){if(X=!1,Oe){var C=u.unstable_now();be=C;var Q=!0;try{e:{_=!1,B&&(B=!1,L(Ae),Ae=-1),G=!0;var P=O;try{t:{for(te(C),j=f(v);j!==null&&!(j.expirationTime>C&&Ke());){var ye=j.callback;if(typeof ye=="function"){j.callback=null,O=j.priorityLevel;var y=ye(j.expirationTime<=C);if(C=u.unstable_now(),typeof y=="function"){j.callback=y,te(C),Q=!0;break t}j===f(v)&&c(v),te(C)}else c(v);j=f(v)}if(j!==null)Q=!0;else{var U=f(p);U!==null&&Xe(F,U.startTime-C),Q=!1}}break e}finally{j=null,O=P,G=!1}Q=void 0}}finally{Q?Qe():Oe=!1}}}var Qe;if(typeof k=="function")Qe=function(){k(ft)};else if(typeof MessageChannel<"u"){var Ta=new MessageChannel,Aa=Ta.port2;Ta.port1.onmessage=ft,Qe=function(){Aa.postMessage(null)}}else Qe=function(){q(ft,0)};function Xe(C,Q){Ae=q(function(){C(u.unstable_now())},Q)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(C){C.callback=null},u.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Re=0<C?Math.floor(1e3/C):5},u.unstable_getCurrentPriorityLevel=function(){return O},u.unstable_next=function(C){switch(O){case 1:case 2:case 3:var Q=3;break;default:Q=O}var P=O;O=Q;try{return C()}finally{O=P}},u.unstable_requestPaint=function(){X=!0},u.unstable_runWithPriority=function(C,Q){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=O;O=C;try{return Q()}finally{O=P}},u.unstable_scheduleCallback=function(C,Q,P){var ye=u.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ye+P:ye):P=ye,C){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=P+y,C={id:w++,callback:Q,priorityLevel:C,startTime:P,expirationTime:y,sortIndex:-1},P>ye?(C.sortIndex=P,s(p,C),f(v)===null&&C===f(p)&&(B?(L(Ae),Ae=-1):B=!0,Xe(F,P-ye))):(C.sortIndex=y,s(v,C),_||G||(_=!0,Oe||(Oe=!0,Qe()))),C},u.unstable_shouldYield=Ke,u.unstable_wrapCallback=function(C){var Q=O;return function(){var P=O;O=Q;try{return C.apply(this,arguments)}finally{O=P}}}}(Mr)),Mr}var Xd;function $h(){return Xd||(Xd=1,wr.exports=Jh()),wr.exports}var Rr={exports:{}},ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd;function Wh(){if(Vd)return ke;Vd=1;var u=Nr();function s(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)p+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(s(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(v,p,w){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:j==null?null:""+j,children:v,containerInfo:p,implementation:w}}var x=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function R(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ke.createPortal=function(v,p){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(s(299));return h(v,p,null,w)},ke.flushSync=function(v){var p=x.T,w=c.p;try{if(x.T=null,c.p=2,v)return v()}finally{x.T=p,c.p=w,c.d.f()}},ke.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(v,p))},ke.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},ke.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var w=p.as,j=R(w,p.crossOrigin),O=typeof p.integrity=="string"?p.integrity:void 0,G=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;w==="style"?c.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:j,integrity:O,fetchPriority:G}):w==="script"&&c.d.X(v,{crossOrigin:j,integrity:O,fetchPriority:G,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ke.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var w=R(p.as,p.crossOrigin);c.d.M(v,{crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(v)},ke.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var w=p.as,j=R(w,p.crossOrigin);c.d.L(v,w,{crossOrigin:j,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ke.preloadModule=function(v,p){if(typeof v=="string")if(p){var w=R(p.as,p.crossOrigin);c.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(v)},ke.requestFormReset=function(v){c.d.r(v)},ke.unstable_batchedUpdates=function(v,p){return v(p)},ke.useFormState=function(v,p,w){return x.H.useFormState(v,p,w)},ke.useFormStatus=function(){return x.H.useHostTransitionStatus()},ke.version="19.1.0",ke}var Zd;function Fh(){if(Zd)return Rr.exports;Zd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(s){console.error(s)}}return u(),Rr.exports=Wh(),Rr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function Ph(){if(kd)return Cl;kd=1;var u=$h(),s=Nr(),f=Fh();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R(e){if(h(e)!==e)throw Error(c(188))}function v(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return R(l),e;if(i===n)return R(l),t;i=i.sibling}throw Error(c(188))}if(a.return!==n.return)a=l,n=i;else{for(var o=!1,r=l.child;r;){if(r===a){o=!0,a=l,n=i;break}if(r===n){o=!0,n=l,a=i;break}r=r.sibling}if(!o){for(r=i.child;r;){if(r===a){o=!0,a=i,n=l;break}if(r===n){o=!0,n=i,a=l;break}r=r.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,j=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),k=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),Oe=Symbol.for("react.suspense_list"),Ae=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),Ke=Symbol.for("react.memo_cache_sentinel"),ft=Symbol.iterator;function Qe(e){return e===null||typeof e!="object"?null:(e=ft&&e[ft]||e["@@iterator"],typeof e=="function"?e:null)}var Ta=Symbol.for("react.client.reference");function Aa(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ta?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case X:return"Profiler";case B:return"StrictMode";case F:return"Suspense";case Oe:return"SuspenseList";case be:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case k:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ae:return t=e.displayName||null,t!==null?t:Aa(e.type)||"Memo";case Re:t=e._payload,e=e._init;try{return Aa(e(t))}catch{}}return null}var Xe=Array.isArray,C=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ye=[],y=-1;function U(e){return{current:e}}function V(e){0>y||(e.current=ye[y],ye[y]=null,y--)}function Y(e,t){y++,ye[y]=e.current,e.current=t}var J=U(null),re=U(null),ee=U(null),et=U(null);function xe(e,t){switch(Y(ee,t),Y(re,e),Y(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?fd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=fd(t),e=dd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(J),Y(J,e)}function Wt(){V(J),V(re),V(ee)}function uu(e){e.memoizedState!==null&&Y(et,e);var t=J.current,a=dd(t,e.type);t!==a&&(Y(re,e),Y(J,a))}function jl(e){re.current===e&&(V(J),V(re)),et.current===e&&(V(et),Tl._currentValue=P)}var ou=Object.prototype.hasOwnProperty,ru=u.unstable_scheduleCallback,cu=u.unstable_cancelCallback,Ep=u.unstable_shouldYield,Tp=u.unstable_requestPaint,At=u.unstable_now,Ap=u.unstable_getCurrentPriorityLevel,Vr=u.unstable_ImmediatePriority,Zr=u.unstable_UserBlockingPriority,Ll=u.unstable_NormalPriority,wp=u.unstable_LowPriority,kr=u.unstable_IdlePriority,Mp=u.log,Rp=u.unstable_setDisableYieldValue,_n=null,tt=null;function Ft(e){if(typeof Mp=="function"&&Rp(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(_n,e)}catch{}}var at=Math.clz32?Math.clz32:Op,Dp=Math.log,Cp=Math.LN2;function Op(e){return e>>>=0,e===0?32:31-(Dp(e)/Cp|0)|0}var ql=256,Gl=4194304;function wa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yl(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var r=n&134217727;return r!==0?(n=r&~i,n!==0?l=wa(n):(o&=r,o!==0?l=wa(o):a||(a=r&~e,a!==0&&(l=wa(a))))):(r=n&~i,r!==0?l=wa(r):o!==0?l=wa(o):a||(a=n&~e,a!==0&&(l=wa(a)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:l}function Hn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function _p(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kr(){var e=ql;return ql<<=1,(ql&4194048)===0&&(ql=256),e}function Jr(){var e=Gl;return Gl<<=1,(Gl&62914560)===0&&(Gl=4194304),e}function su(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Nn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Hp(e,t,a,n,l,i){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var r=e.entanglements,m=e.expirationTimes,E=e.hiddenUpdates;for(a=o&~a;0<a;){var D=31-at(a),z=1<<D;r[D]=0,m[D]=-1;var T=E[D];if(T!==null)for(E[D]=null,D=0;D<T.length;D++){var A=T[D];A!==null&&(A.lane&=-536870913)}a&=~z}n!==0&&$r(e,n,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function $r(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-at(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function Wr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-at(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function fu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function du(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Fr(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:_d(e.type))}function Np(e,t){var a=Q.p;try{return Q.p=e,t()}finally{Q.p=a}}var Pt=Math.random().toString(36).slice(2),Ve="__reactFiber$"+Pt,$e="__reactProps$"+Pt,Xa="__reactContainer$"+Pt,pu="__reactEvents$"+Pt,zp="__reactListeners$"+Pt,Up="__reactHandles$"+Pt,Pr="__reactResources$"+Pt,zn="__reactMarker$"+Pt;function mu(e){delete e[Ve],delete e[$e],delete e[pu],delete e[zp],delete e[Up]}function Va(e){var t=e[Ve];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Xa]||a[Ve]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=yd(e);e!==null;){if(a=e[Ve])return a;e=yd(e)}return t}e=a,a=e.parentNode}return null}function Za(e){if(e=e[Ve]||e[Xa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Un(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function ka(e){var t=e[Pr];return t||(t=e[Pr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ue(e){e[zn]=!0}var Ir=new Set,ec={};function Ma(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(ec[e]=t,e=0;e<t.length;e++)Ir.add(t[e])}var Bp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tc={},ac={};function jp(e){return ou.call(ac,e)?!0:ou.call(tc,e)?!1:Bp.test(e)?ac[e]=!0:(tc[e]=!0,!1)}function Ql(e,t,a){if(jp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Xl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Nt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var hu,nc;function Ja(e){if(hu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);hu=t&&t[1]||"",nc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hu+e+nc}var yu=!1;function gu(e,t){if(!e||yu)return"";yu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(A){var T=A}Reflect.construct(e,[],z)}else{try{z.call()}catch(A){T=A}e.call(z.prototype)}}else{try{throw Error()}catch(A){T=A}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(A){if(A&&T&&typeof A.stack=="string")return[A.stack,T.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),o=i[0],r=i[1];if(o&&r){var m=o.split(`
`),E=r.split(`
`);for(l=n=0;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;for(;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;if(n===m.length||l===E.length)for(n=m.length-1,l=E.length-1;1<=n&&0<=l&&m[n]!==E[l];)l--;for(;1<=n&&0<=l;n--,l--)if(m[n]!==E[l]){if(n!==1||l!==1)do if(n--,l--,0>l||m[n]!==E[l]){var D=`
`+m[n].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=n&&0<=l);break}}}finally{yu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ja(a):""}function Lp(e){switch(e.tag){case 26:case 27:case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return gu(e.type,!1);case 11:return gu(e.type.render,!1);case 1:return gu(e.type,!0);case 31:return Ja("Activity");default:return""}}function lc(e){try{var t="";do t+=Lp(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ic(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qp(e){var t=ic(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vl(e){e._valueTracker||(e._valueTracker=qp(e))}function uc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=ic(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Zl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gp=/[\n"\\]/g;function pt(e){return e.replace(Gp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function vu(e,t,a,n,l,i,o,r){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?bu(e,o,dt(t)):a!=null?bu(e,o,dt(a)):n!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+dt(r):e.removeAttribute("name")}function oc(e,t,a,n,l,i,o,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+dt(a):"",t=t!=null?""+dt(t):a,r||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=r?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function bu(e,t,a){t==="number"&&Zl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $a(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+dt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function rc(e,t,a){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+dt(a):""}function cc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(Xe(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=dt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function Wa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Yp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Yp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function fc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&sc(e,l,n)}else for(var i in t)t.hasOwnProperty(i)&&sc(e,i,t[i])}function xu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kl(e){return Xp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Su=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,Pa=null;function dc(e){var t=Za(e);if(t&&(e=t.stateNode)){var a=e[$e]||null;e:switch(e=t.stateNode,t.type){case"input":if(vu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[$e]||null;if(!l)throw Error(c(90));vu(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&uc(n)}break e;case"textarea":rc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&$a(e,!!a.multiple,t,!1)}}}var Tu=!1;function pc(e,t,a){if(Tu)return e(t,a);Tu=!0;try{var n=e(t);return n}finally{if(Tu=!1,(Fa!==null||Pa!==null)&&(_i(),Fa&&(t=Fa,e=Pa,Pa=Fa=null,dc(t),e)))for(t=0;t<e.length;t++)dc(e[t])}}function Bn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[$e]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(zt)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){Au=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{Au=!1}var It=null,wu=null,Kl=null;function mc(){if(Kl)return Kl;var e,t=wu,a=t.length,n,l="value"in It?It.value:It.textContent,i=l.length;for(e=0;e<a&&t[e]===l[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===l[i-n];n++);return Kl=l.slice(e,1<n?1-n:void 0)}function Jl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $l(){return!0}function hc(){return!1}function We(e){function t(a,n,l,i,o){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(a=e[r],this[r]=a?a(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$l:hc,this.isPropagationStopped=hc,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),t}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=We(Ra),Ln=w({},Ra,{view:0,detail:0}),Vp=We(Ln),Mu,Ru,qn,Fl=w({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qn&&(qn&&e.type==="mousemove"?(Mu=e.screenX-qn.screenX,Ru=e.screenY-qn.screenY):Ru=Mu=0,qn=e),Mu)},movementY:function(e){return"movementY"in e?e.movementY:Ru}}),yc=We(Fl),Zp=w({},Fl,{dataTransfer:0}),kp=We(Zp),Kp=w({},Ln,{relatedTarget:0}),Du=We(Kp),Jp=w({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),$p=We(Jp),Wp=w({},Ra,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fp=We(Wp),Pp=w({},Ra,{data:0}),gc=We(Pp),Ip={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},em={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function am(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tm[e])?!!t[e]:!1}function Cu(){return am}var nm=w({},Ln,{key:function(e){if(e.key){var t=Ip[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?em[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cu,charCode:function(e){return e.type==="keypress"?Jl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lm=We(nm),im=w({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vc=We(im),um=w({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cu}),om=We(um),rm=w({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),cm=We(rm),sm=w({},Fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fm=We(sm),dm=w({},Ra,{newState:0,oldState:0}),pm=We(dm),mm=[9,13,27,32],Ou=zt&&"CompositionEvent"in window,Gn=null;zt&&"documentMode"in document&&(Gn=document.documentMode);var hm=zt&&"TextEvent"in window&&!Gn,bc=zt&&(!Ou||Gn&&8<Gn&&11>=Gn),xc=" ",Sc=!1;function Ec(e,t){switch(e){case"keyup":return mm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ia=!1;function ym(e,t){switch(e){case"compositionend":return Tc(t);case"keypress":return t.which!==32?null:(Sc=!0,xc);case"textInput":return e=t.data,e===xc&&Sc?null:e;default:return null}}function gm(e,t){if(Ia)return e==="compositionend"||!Ou&&Ec(e,t)?(e=mc(),Kl=wu=It=null,Ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bc&&t.locale!=="ko"?null:t.data;default:return null}}var vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vm[e.type]:t==="textarea"}function wc(e,t,a,n){Fa?Pa?Pa.push(n):Pa=[n]:Fa=n,t=ji(t,"onChange"),0<t.length&&(a=new Wl("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Yn=null,Qn=null;function bm(e){ud(e,0)}function Pl(e){var t=Un(e);if(uc(t))return e}function Mc(e,t){if(e==="change")return t}var Rc=!1;if(zt){var _u;if(zt){var Hu="oninput"in document;if(!Hu){var Dc=document.createElement("div");Dc.setAttribute("oninput","return;"),Hu=typeof Dc.oninput=="function"}_u=Hu}else _u=!1;Rc=_u&&(!document.documentMode||9<document.documentMode)}function Cc(){Yn&&(Yn.detachEvent("onpropertychange",Oc),Qn=Yn=null)}function Oc(e){if(e.propertyName==="value"&&Pl(Qn)){var t=[];wc(t,Qn,e,Eu(e)),pc(bm,t)}}function xm(e,t,a){e==="focusin"?(Cc(),Yn=t,Qn=a,Yn.attachEvent("onpropertychange",Oc)):e==="focusout"&&Cc()}function Sm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pl(Qn)}function Em(e,t){if(e==="click")return Pl(t)}function Tm(e,t){if(e==="input"||e==="change")return Pl(t)}function Am(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Am;function Xn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!ou.call(t,l)||!nt(e[l],t[l]))return!1}return!0}function _c(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hc(e,t){var a=_c(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_c(a)}}function Nc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Zl(e.document)}return t}function Nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var wm=zt&&"documentMode"in document&&11>=document.documentMode,en=null,zu=null,Vn=null,Uu=!1;function Uc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uu||en==null||en!==Zl(n)||(n=en,"selectionStart"in n&&Nu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Vn&&Xn(Vn,n)||(Vn=n,n=ji(zu,"onSelect"),0<n.length&&(t=new Wl("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=en)))}function Da(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var tn={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},Bu={},Bc={};zt&&(Bc=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function Ca(e){if(Bu[e])return Bu[e];if(!tn[e])return e;var t=tn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Bc)return Bu[e]=t[a];return e}var jc=Ca("animationend"),Lc=Ca("animationiteration"),qc=Ca("animationstart"),Mm=Ca("transitionrun"),Rm=Ca("transitionstart"),Dm=Ca("transitioncancel"),Gc=Ca("transitionend"),Yc=new Map,ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ju.push("scrollEnd");function St(e,t){Yc.set(e,t),Ma(t,[e])}var Qc=new WeakMap;function mt(e,t){if(typeof e=="object"&&e!==null){var a=Qc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:lc(t)},Qc.set(e,t),t)}return{value:e,source:t,stack:lc(t)}}var ht=[],an=0,Lu=0;function Il(){for(var e=an,t=Lu=an=0;t<e;){var a=ht[t];ht[t++]=null;var n=ht[t];ht[t++]=null;var l=ht[t];ht[t++]=null;var i=ht[t];if(ht[t++]=null,n!==null&&l!==null){var o=n.pending;o===null?l.next=l:(l.next=o.next,o.next=l),n.pending=l}i!==0&&Xc(a,l,i)}}function ei(e,t,a,n){ht[an++]=e,ht[an++]=t,ht[an++]=a,ht[an++]=n,Lu|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function qu(e,t,a,n){return ei(e,t,a,n),ti(e)}function nn(e,t){return ei(e,null,null,t),ti(e)}function Xc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,i=e.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-at(a),e=i.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),i):null}function ti(e){if(50<hl)throw hl=0,ko=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ln={};function Cm(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,a,n){return new Cm(e,t,a,n)}function Gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ut(e,t){var a=e.alternate;return a===null?(a=lt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Vc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ai(e,t,a,n,l,i){var o=0;if(n=e,typeof e=="function")Gu(e)&&(o=1);else if(typeof e=="string")o=_h(e,a,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case be:return e=lt(31,a,t,l),e.elementType=be,e.lanes=i,e;case _:return Oa(a.children,l,i,t);case B:o=8,l|=24;break;case X:return e=lt(12,a,t,l|2),e.elementType=X,e.lanes=i,e;case F:return e=lt(13,a,t,l),e.elementType=F,e.lanes=i,e;case Oe:return e=lt(19,a,t,l),e.elementType=Oe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:case k:o=10;break e;case L:o=9;break e;case te:o=11;break e;case Ae:o=14;break e;case Re:o=16,n=null;break e}o=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=lt(o,a,t,l),t.elementType=e,t.type=n,t.lanes=i,t}function Oa(e,t,a,n){return e=lt(7,e,n,t),e.lanes=a,e}function Yu(e,t,a){return e=lt(6,e,null,t),e.lanes=a,e}function Qu(e,t,a){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var un=[],on=0,ni=null,li=0,yt=[],gt=0,_a=null,Bt=1,jt="";function Ha(e,t){un[on++]=li,un[on++]=ni,ni=e,li=t}function Zc(e,t,a){yt[gt++]=Bt,yt[gt++]=jt,yt[gt++]=_a,_a=e;var n=Bt;e=jt;var l=32-at(n)-1;n&=~(1<<l),a+=1;var i=32-at(t)+l;if(30<i){var o=l-l%5;i=(n&(1<<o)-1).toString(32),n>>=o,l-=o,Bt=1<<32-at(t)+l|a<<l|n,jt=i+e}else Bt=1<<i|a<<l|n,jt=e}function Xu(e){e.return!==null&&(Ha(e,1),Zc(e,1,0))}function Vu(e){for(;e===ni;)ni=un[--on],un[on]=null,li=un[--on],un[on]=null;for(;e===_a;)_a=yt[--gt],yt[gt]=null,jt=yt[--gt],yt[gt]=null,Bt=yt[--gt],yt[gt]=null}var Je=null,we=null,se=!1,Na=null,wt=!1,Zu=Error(c(519));function za(e){var t=Error(c(418,""));throw Kn(mt(t,e)),Zu}function kc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Ve]=e,t[$e]=n,a){case"dialog":ue("cancel",t),ue("close",t);break;case"iframe":case"object":case"embed":ue("load",t);break;case"video":case"audio":for(a=0;a<gl.length;a++)ue(gl[a],t);break;case"source":ue("error",t);break;case"img":case"image":case"link":ue("error",t),ue("load",t);break;case"details":ue("toggle",t);break;case"input":ue("invalid",t),oc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Vl(t);break;case"select":ue("invalid",t);break;case"textarea":ue("invalid",t),cc(t,n.value,n.defaultValue,n.children),Vl(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||sd(t.textContent,a)?(n.popover!=null&&(ue("beforetoggle",t),ue("toggle",t)),n.onScroll!=null&&ue("scroll",t),n.onScrollEnd!=null&&ue("scrollend",t),n.onClick!=null&&(t.onclick=Li),t=!0):t=!1,t||za(e)}function Kc(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 13:wt=!1;return;case 27:case 3:wt=!0;return;default:Je=Je.return}}function Zn(e){if(e!==Je)return!1;if(!se)return Kc(e),se=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||rr(e.type,e.memoizedProps)),a=!a),a&&we&&za(e),Kc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){we=Tt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}we=null}}else t===27?(t=we,ha(e.type)?(e=dr,dr=null,we=e):we=t):we=Je?Tt(e.stateNode.nextSibling):null;return!0}function kn(){we=Je=null,se=!1}function Jc(){var e=Na;return e!==null&&(Ie===null?Ie=e:Ie.push.apply(Ie,e),Na=null),e}function Kn(e){Na===null?Na=[e]:Na.push(e)}var ku=U(null),Ua=null,Lt=null;function ea(e,t,a){Y(ku,t._currentValue),t._currentValue=a}function qt(e){e._currentValue=ku.current,V(ku)}function Ku(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Ju(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;e:for(;i!==null;){var r=i;i=l;for(var m=0;m<t.length;m++)if(r.context===t[m]){i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),Ku(i.return,a,e),n||(o=null);break e}i=r.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(c(341));o.lanes|=a,i=o.alternate,i!==null&&(i.lanes|=a),Ku(o,a,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function Jn(e,t,a,n){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var r=l.type;nt(l.pendingProps.value,o.value)||(e!==null?e.push(r):e=[r])}}else if(l===et.current){if(o=l.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Tl):e=[Tl])}l=l.return}e!==null&&Ju(t,e,a,n),t.flags|=262144}function ii(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ba(e){Ua=e,Lt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return $c(Ua,e)}function ui(e,t){return Ua===null&&Ba(e),$c(e,t)}function $c(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Lt===null){if(e===null)throw Error(c(308));Lt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Lt=Lt.next=t;return a}var Om=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},_m=u.unstable_scheduleCallback,Hm=u.unstable_NormalPriority,Ne={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $u(){return{controller:new Om,data:new Map,refCount:0}}function $n(e){e.refCount--,e.refCount===0&&_m(Hm,function(){e.controller.abort()})}var Wn=null,Wu=0,rn=0,cn=null;function Nm(e,t){if(Wn===null){var a=Wn=[];Wu=0,rn=Io(),cn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Wu++,t.then(Wc,Wc),t}function Wc(){if(--Wu===0&&Wn!==null){cn!==null&&(cn.status="fulfilled");var e=Wn;Wn=null,rn=0,cn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function zm(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var Fc=C.S;C.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Nm(e,t),Fc!==null&&Fc(e,t)};var ja=U(null);function Fu(){var e=ja.current;return e!==null?e:ve.pooledCache}function oi(e,t){t===null?Y(ja,ja.current):Y(ja,t.pool)}function Pc(){var e=Fu();return e===null?null:{parent:Ne._currentValue,pool:e}}var Fn=Error(c(460)),Ic=Error(c(474)),ri=Error(c(542)),Pu={then:function(){}};function es(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ci(){}function ts(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ci,ci),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ns(e),e;default:if(typeof t.status=="string")t.then(ci,ci);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ns(e),e}throw Pn=t,Fn}}var Pn=null;function as(){if(Pn===null)throw Error(c(459));var e=Pn;return Pn=null,e}function ns(e){if(e===Fn||e===ri)throw Error(c(483))}var ta=!1;function Iu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function na(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(fe&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=ti(e),Xc(e,null,a),t}return ei(e,n,t,a),ti(e)}function In(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Wr(e,a)}}function to(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ao=!1;function el(){if(ao){var e=cn;if(e!==null)throw e}}function tl(e,t,a,n){ao=!1;var l=e.updateQueue;ta=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,r=l.shared.pending;if(r!==null){l.shared.pending=null;var m=r,E=m.next;m.next=null,o===null?i=E:o.next=E,o=m;var D=e.alternate;D!==null&&(D=D.updateQueue,r=D.lastBaseUpdate,r!==o&&(r===null?D.firstBaseUpdate=E:r.next=E,D.lastBaseUpdate=m))}if(i!==null){var z=l.baseState;o=0,D=E=m=null,r=i;do{var T=r.lane&-536870913,A=T!==r.lane;if(A?(oe&T)===T:(n&T)===T){T!==0&&T===rn&&(ao=!0),D!==null&&(D=D.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var I=e,$=r;T=t;var he=a;switch($.tag){case 1:if(I=$.payload,typeof I=="function"){z=I.call(he,z,T);break e}z=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=$.payload,T=typeof I=="function"?I.call(he,z,T):I,T==null)break e;z=w({},z,T);break e;case 2:ta=!0}}T=r.callback,T!==null&&(e.flags|=64,A&&(e.flags|=8192),A=l.callbacks,A===null?l.callbacks=[T]:A.push(T))}else A={lane:T,tag:r.tag,payload:r.payload,callback:r.callback,next:null},D===null?(E=D=A,m=z):D=D.next=A,o|=T;if(r=r.next,r===null){if(r=l.shared.pending,r===null)break;A=r,r=A.next,A.next=null,l.lastBaseUpdate=A,l.shared.pending=null}}while(!0);D===null&&(m=z),l.baseState=m,l.firstBaseUpdate=E,l.lastBaseUpdate=D,i===null&&(l.shared.lanes=0),fa|=o,e.lanes=o,e.memoizedState=z}}function ls(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function is(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ls(a[e],t)}var sn=U(null),si=U(0);function us(e,t){e=kt,Y(si,e),Y(sn,t),kt=e|t.baseLanes}function no(){Y(si,kt),Y(sn,sn.current)}function lo(){kt=si.current,V(sn),V(si)}var la=0,ne=null,pe=null,_e=null,fi=!1,fn=!1,La=!1,di=0,al=0,dn=null,Um=0;function De(){throw Error(c(321))}function io(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!nt(e[a],t[a]))return!1;return!0}function uo(e,t,a,n,l,i){return la=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?Xs:Vs,La=!1,i=a(n,l),La=!1,fn&&(i=rs(t,a,n,l)),os(e),i}function os(e){C.H=vi;var t=pe!==null&&pe.next!==null;if(la=0,_e=pe=ne=null,fi=!1,al=0,dn=null,t)throw Error(c(300));e===null||Be||(e=e.dependencies,e!==null&&ii(e)&&(Be=!0))}function rs(e,t,a,n){ne=e;var l=0;do{if(fn&&(dn=null),al=0,fn=!1,25<=l)throw Error(c(301));if(l+=1,_e=pe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}C.H=Qm,i=t(a,n)}while(fn);return i}function Bm(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?nl(t):t,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(ne.flags|=1024),t}function oo(){var e=di!==0;return di=0,e}function ro(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function co(e){if(fi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fi=!1}la=0,_e=pe=ne=null,fn=!1,al=di=0,dn=null}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ne.memoizedState=_e=e:_e=_e.next=e,_e}function He(){if(pe===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=_e===null?ne.memoizedState:_e.next;if(t!==null)_e=t,pe=e;else{if(e===null)throw ne.alternate===null?Error(c(467)):Error(c(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},_e===null?ne.memoizedState=_e=e:_e=_e.next=e}return _e}function so(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nl(e){var t=al;return al+=1,dn===null&&(dn=[]),e=ts(dn,e,t),t=ne,(_e===null?t.memoizedState:_e.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?Xs:Vs),e}function pi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return nl(e);if(e.$$typeof===k)return Ze(e)}throw Error(c(438,String(e)))}function fo(e){var t=null,a=ne.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ne.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=so(),ne.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ke;return t.index++,a}function Gt(e,t){return typeof t=="function"?t(e):t}function mi(e){var t=He();return po(t,pe,e)}function po(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var l=e.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}t.baseQueue=l=i,n.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var r=o=null,m=null,E=t,D=!1;do{var z=E.lane&-536870913;if(z!==E.lane?(oe&z)===z:(la&z)===z){var T=E.revertLane;if(T===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),z===rn&&(D=!0);else if((la&T)===T){E=E.next,T===rn&&(D=!0);continue}else z={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},m===null?(r=m=z,o=i):m=m.next=z,ne.lanes|=T,fa|=T;z=E.action,La&&a(i,z),i=E.hasEagerState?E.eagerState:a(i,z)}else T={lane:z,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},m===null?(r=m=T,o=i):m=m.next=T,ne.lanes|=z,fa|=z;E=E.next}while(E!==null&&E!==t);if(m===null?o=i:m.next=r,!nt(i,e.memoizedState)&&(Be=!0,D&&(a=cn,a!==null)))throw a;e.memoizedState=i,e.baseState=o,e.baseQueue=m,n.lastRenderedState=i}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function mo(e){var t=He(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);nt(i,t.memoizedState)||(Be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function cs(e,t,a){var n=ne,l=He(),i=se;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var o=!nt((pe||l).memoizedState,a);o&&(l.memoizedState=a,Be=!0),l=l.queue;var r=ds.bind(null,n,l,e);if(ll(2048,8,r,[e]),l.getSnapshot!==t||o||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,pn(9,hi(),fs.bind(null,n,l,a,t),null),ve===null)throw Error(c(349));i||(la&124)!==0||ss(n,t,a)}return a}function ss(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ne.updateQueue,t===null?(t=so(),ne.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function fs(e,t,a,n){t.value=a,t.getSnapshot=n,ps(t)&&ms(e)}function ds(e,t,a){return a(function(){ps(t)&&ms(e)})}function ps(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!nt(e,a)}catch{return!0}}function ms(e){var t=nn(e,2);t!==null&&ct(t,e,2)}function ho(e){var t=Fe();if(typeof e=="function"){var a=e;if(e=a(),La){Ft(!0);try{a()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},t}function hs(e,t,a,n){return e.baseState=a,po(e,pe,typeof n=="function"?n:Gt)}function jm(e,t,a,n,l){if(gi(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};C.T!==null?a(!0):i.isTransition=!1,n(i),a=t.pending,a===null?(i.next=t.pending=i,ys(t,i)):(i.next=a.next,t.pending=a.next=i)}}function ys(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var i=C.T,o={};C.T=o;try{var r=a(l,n),m=C.S;m!==null&&m(o,r),gs(e,t,r)}catch(E){yo(e,t,E)}finally{C.T=i}}else try{i=a(l,n),gs(e,t,i)}catch(E){yo(e,t,E)}}function gs(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){vs(e,t,n)},function(n){return yo(e,t,n)}):vs(e,t,a)}function vs(e,t,a){t.status="fulfilled",t.value=a,bs(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ys(e,a)))}function yo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,bs(t),t=t.next;while(t!==n)}e.action=null}function bs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function xs(e,t){return t}function Ss(e,t){if(se){var a=ve.formState;if(a!==null){e:{var n=ne;if(se){if(we){t:{for(var l=we,i=wt;l.nodeType!==8;){if(!i){l=null;break t}if(l=Tt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){we=Tt(l.nextSibling),n=l.data==="F!";break e}}za(n)}n=!1}n&&(t=a[0])}}return a=Fe(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xs,lastRenderedState:t},a.queue=n,a=Gs.bind(null,ne,n),n.dispatch=a,n=ho(!1),i=So.bind(null,ne,!1,n.queue),n=Fe(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=jm.bind(null,ne,l,i,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function Es(e){var t=He();return Ts(t,pe,e)}function Ts(e,t,a){if(t=po(e,t,xs)[0],e=mi(Gt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=nl(t)}catch(o){throw o===Fn?ri:o}else n=t;t=He();var l=t.queue,i=l.dispatch;return a!==t.memoizedState&&(ne.flags|=2048,pn(9,hi(),Lm.bind(null,l,a),null)),[n,i,e]}function Lm(e,t){e.action=t}function As(e){var t=He(),a=pe;if(a!==null)return Ts(t,a,e);He(),t=t.memoizedState,a=He();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function pn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ne.updateQueue,t===null&&(t=so(),ne.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function hi(){return{destroy:void 0,resource:void 0}}function ws(){return He().memoizedState}function yi(e,t,a,n){var l=Fe();n=n===void 0?null:n,ne.flags|=e,l.memoizedState=pn(1|t,hi(),a,n)}function ll(e,t,a,n){var l=He();n=n===void 0?null:n;var i=l.memoizedState.inst;pe!==null&&n!==null&&io(n,pe.memoizedState.deps)?l.memoizedState=pn(t,i,a,n):(ne.flags|=e,l.memoizedState=pn(1|t,i,a,n))}function Ms(e,t){yi(8390656,8,e,t)}function Rs(e,t){ll(2048,8,e,t)}function Ds(e,t){return ll(4,2,e,t)}function Cs(e,t){return ll(4,4,e,t)}function Os(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,a){a=a!=null?a.concat([e]):null,ll(4,4,Os.bind(null,t,e),a)}function go(){}function Hs(e,t){var a=He();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&io(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Ns(e,t){var a=He();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&io(t,n[1]))return n[0];if(n=e(),La){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[n,t],n}function vo(e,t,a){return a===void 0||(la&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=jf(),ne.lanes|=e,fa|=e,a)}function zs(e,t,a,n){return nt(a,t)?a:sn.current!==null?(e=vo(e,a,n),nt(e,t)||(Be=!0),e):(la&42)===0?(Be=!0,e.memoizedState=a):(e=jf(),ne.lanes|=e,fa|=e,t)}function Us(e,t,a,n,l){var i=Q.p;Q.p=i!==0&&8>i?i:8;var o=C.T,r={};C.T=r,So(e,!1,t,a);try{var m=l(),E=C.S;if(E!==null&&E(r,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var D=zm(m,n);il(e,t,D,rt(e))}else il(e,t,n,rt(e))}catch(z){il(e,t,{then:function(){},status:"rejected",reason:z},rt())}finally{Q.p=i,C.T=o}}function qm(){}function bo(e,t,a,n){if(e.tag!==5)throw Error(c(476));var l=Bs(e).queue;Us(e,l,t,P,a===null?qm:function(){return js(e),a(n)})}function Bs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:P},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=Bs(e).next.queue;il(e,t,{},rt())}function xo(){return Ze(Tl)}function Ls(){return He().memoizedState}function qs(){return He().memoizedState}function Gm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=rt();e=aa(a);var n=na(t,e,a);n!==null&&(ct(n,t,a),In(n,t,a)),t={cache:$u()},e.payload=t;return}t=t.return}}function Ym(e,t,a){var n=rt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},gi(e)?Ys(t,a):(a=qu(e,t,a,n),a!==null&&(ct(a,e,n),Qs(a,t,n)))}function Gs(e,t,a){var n=rt();il(e,t,a,n)}function il(e,t,a,n){var l={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(gi(e))Ys(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,r=i(o,a);if(l.hasEagerState=!0,l.eagerState=r,nt(r,o))return ei(e,t,l,0),ve===null&&Il(),!1}catch{}finally{}if(a=qu(e,t,l,n),a!==null)return ct(a,e,n),Qs(a,t,n),!0}return!1}function So(e,t,a,n){if(n={lane:2,revertLane:Io(),action:n,hasEagerState:!1,eagerState:null,next:null},gi(e)){if(t)throw Error(c(479))}else t=qu(e,a,n,2),t!==null&&ct(t,e,2)}function gi(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Ys(e,t){fn=fi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Qs(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Wr(e,a)}}var vi={readContext:Ze,use:pi,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De},Xs={readContext:Ze,use:pi,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:Ms,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,yi(4194308,4,Os.bind(null,t,e),a)},useLayoutEffect:function(e,t){return yi(4194308,4,e,t)},useInsertionEffect:function(e,t){yi(4,2,e,t)},useMemo:function(e,t){var a=Fe();t=t===void 0?null:t;var n=e();if(La){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Fe();if(a!==void 0){var l=a(t);if(La){Ft(!0);try{a(t)}finally{Ft(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Ym.bind(null,ne,e),[n.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:function(e){e=ho(e);var t=e.queue,a=Gs.bind(null,ne,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:go,useDeferredValue:function(e,t){var a=Fe();return vo(a,e,t)},useTransition:function(){var e=ho(!1);return e=Us.bind(null,ne,e.queue,!0,!1),Fe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ne,l=Fe();if(se){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),ve===null)throw Error(c(349));(oe&124)!==0||ss(n,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,Ms(ds.bind(null,n,i,e),[e]),n.flags|=2048,pn(9,hi(),fs.bind(null,n,i,a,t),null),a},useId:function(){var e=Fe(),t=ve.identifierPrefix;if(se){var a=jt,n=Bt;a=(n&~(1<<32-at(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=di++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Um++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:xo,useFormState:Ss,useActionState:Ss,useOptimistic:function(e){var t=Fe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=So.bind(null,ne,!0,a),a.dispatch=t,[e,t]},useMemoCache:fo,useCacheRefresh:function(){return Fe().memoizedState=Gm.bind(null,ne)}},Vs={readContext:Ze,use:pi,useCallback:Hs,useContext:Ze,useEffect:Rs,useImperativeHandle:_s,useInsertionEffect:Ds,useLayoutEffect:Cs,useMemo:Ns,useReducer:mi,useRef:ws,useState:function(){return mi(Gt)},useDebugValue:go,useDeferredValue:function(e,t){var a=He();return zs(a,pe.memoizedState,e,t)},useTransition:function(){var e=mi(Gt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:nl(e),t]},useSyncExternalStore:cs,useId:Ls,useHostTransitionStatus:xo,useFormState:Es,useActionState:Es,useOptimistic:function(e,t){var a=He();return hs(a,pe,e,t)},useMemoCache:fo,useCacheRefresh:qs},Qm={readContext:Ze,use:pi,useCallback:Hs,useContext:Ze,useEffect:Rs,useImperativeHandle:_s,useInsertionEffect:Ds,useLayoutEffect:Cs,useMemo:Ns,useReducer:mo,useRef:ws,useState:function(){return mo(Gt)},useDebugValue:go,useDeferredValue:function(e,t){var a=He();return pe===null?vo(a,e,t):zs(a,pe.memoizedState,e,t)},useTransition:function(){var e=mo(Gt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:nl(e),t]},useSyncExternalStore:cs,useId:Ls,useHostTransitionStatus:xo,useFormState:As,useActionState:As,useOptimistic:function(e,t){var a=He();return pe!==null?hs(a,pe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:fo,useCacheRefresh:qs},mn=null,ul=0;function bi(e){var t=ul;return ul+=1,mn===null&&(mn=[]),ts(mn,e,t)}function ol(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function xi(e,t){throw t.$$typeof===j?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Zs(e){var t=e._init;return t(e._payload)}function ks(e){function t(b,g){if(e){var S=b.deletions;S===null?(b.deletions=[g],b.flags|=16):S.push(g)}}function a(b,g){if(!e)return null;for(;g!==null;)t(b,g),g=g.sibling;return null}function n(b){for(var g=new Map;b!==null;)b.key!==null?g.set(b.key,b):g.set(b.index,b),b=b.sibling;return g}function l(b,g){return b=Ut(b,g),b.index=0,b.sibling=null,b}function i(b,g,S){return b.index=S,e?(S=b.alternate,S!==null?(S=S.index,S<g?(b.flags|=67108866,g):S):(b.flags|=67108866,g)):(b.flags|=1048576,g)}function o(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function r(b,g,S,H){return g===null||g.tag!==6?(g=Yu(S,b.mode,H),g.return=b,g):(g=l(g,S),g.return=b,g)}function m(b,g,S,H){var Z=S.type;return Z===_?D(b,g,S.props.children,H,S.key):g!==null&&(g.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Re&&Zs(Z)===g.type)?(g=l(g,S.props),ol(g,S),g.return=b,g):(g=ai(S.type,S.key,S.props,null,b.mode,H),ol(g,S),g.return=b,g)}function E(b,g,S,H){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=Qu(S,b.mode,H),g.return=b,g):(g=l(g,S.children||[]),g.return=b,g)}function D(b,g,S,H,Z){return g===null||g.tag!==7?(g=Oa(S,b.mode,H,Z),g.return=b,g):(g=l(g,S),g.return=b,g)}function z(b,g,S){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Yu(""+g,b.mode,S),g.return=b,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case O:return S=ai(g.type,g.key,g.props,null,b.mode,S),ol(S,g),S.return=b,S;case G:return g=Qu(g,b.mode,S),g.return=b,g;case Re:var H=g._init;return g=H(g._payload),z(b,g,S)}if(Xe(g)||Qe(g))return g=Oa(g,b.mode,S,null),g.return=b,g;if(typeof g.then=="function")return z(b,bi(g),S);if(g.$$typeof===k)return z(b,ui(b,g),S);xi(b,g)}return null}function T(b,g,S,H){var Z=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return Z!==null?null:r(b,g,""+S,H);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case O:return S.key===Z?m(b,g,S,H):null;case G:return S.key===Z?E(b,g,S,H):null;case Re:return Z=S._init,S=Z(S._payload),T(b,g,S,H)}if(Xe(S)||Qe(S))return Z!==null?null:D(b,g,S,H,null);if(typeof S.then=="function")return T(b,g,bi(S),H);if(S.$$typeof===k)return T(b,g,ui(b,S),H);xi(b,S)}return null}function A(b,g,S,H,Z){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return b=b.get(S)||null,r(g,b,""+H,Z);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case O:return b=b.get(H.key===null?S:H.key)||null,m(g,b,H,Z);case G:return b=b.get(H.key===null?S:H.key)||null,E(g,b,H,Z);case Re:var le=H._init;return H=le(H._payload),A(b,g,S,H,Z)}if(Xe(H)||Qe(H))return b=b.get(S)||null,D(g,b,H,Z,null);if(typeof H.then=="function")return A(b,g,S,bi(H),Z);if(H.$$typeof===k)return A(b,g,S,ui(g,H),Z);xi(g,H)}return null}function I(b,g,S,H){for(var Z=null,le=null,K=g,W=g=0,Le=null;K!==null&&W<S.length;W++){K.index>W?(Le=K,K=null):Le=K.sibling;var ce=T(b,K,S[W],H);if(ce===null){K===null&&(K=Le);break}e&&K&&ce.alternate===null&&t(b,K),g=i(ce,g,W),le===null?Z=ce:le.sibling=ce,le=ce,K=Le}if(W===S.length)return a(b,K),se&&Ha(b,W),Z;if(K===null){for(;W<S.length;W++)K=z(b,S[W],H),K!==null&&(g=i(K,g,W),le===null?Z=K:le.sibling=K,le=K);return se&&Ha(b,W),Z}for(K=n(K);W<S.length;W++)Le=A(K,b,W,S[W],H),Le!==null&&(e&&Le.alternate!==null&&K.delete(Le.key===null?W:Le.key),g=i(Le,g,W),le===null?Z=Le:le.sibling=Le,le=Le);return e&&K.forEach(function(xa){return t(b,xa)}),se&&Ha(b,W),Z}function $(b,g,S,H){if(S==null)throw Error(c(151));for(var Z=null,le=null,K=g,W=g=0,Le=null,ce=S.next();K!==null&&!ce.done;W++,ce=S.next()){K.index>W?(Le=K,K=null):Le=K.sibling;var xa=T(b,K,ce.value,H);if(xa===null){K===null&&(K=Le);break}e&&K&&xa.alternate===null&&t(b,K),g=i(xa,g,W),le===null?Z=xa:le.sibling=xa,le=xa,K=Le}if(ce.done)return a(b,K),se&&Ha(b,W),Z;if(K===null){for(;!ce.done;W++,ce=S.next())ce=z(b,ce.value,H),ce!==null&&(g=i(ce,g,W),le===null?Z=ce:le.sibling=ce,le=ce);return se&&Ha(b,W),Z}for(K=n(K);!ce.done;W++,ce=S.next())ce=A(K,b,W,ce.value,H),ce!==null&&(e&&ce.alternate!==null&&K.delete(ce.key===null?W:ce.key),g=i(ce,g,W),le===null?Z=ce:le.sibling=ce,le=ce);return e&&K.forEach(function(Xh){return t(b,Xh)}),se&&Ha(b,W),Z}function he(b,g,S,H){if(typeof S=="object"&&S!==null&&S.type===_&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case O:e:{for(var Z=S.key;g!==null;){if(g.key===Z){if(Z=S.type,Z===_){if(g.tag===7){a(b,g.sibling),H=l(g,S.props.children),H.return=b,b=H;break e}}else if(g.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Re&&Zs(Z)===g.type){a(b,g.sibling),H=l(g,S.props),ol(H,S),H.return=b,b=H;break e}a(b,g);break}else t(b,g);g=g.sibling}S.type===_?(H=Oa(S.props.children,b.mode,H,S.key),H.return=b,b=H):(H=ai(S.type,S.key,S.props,null,b.mode,H),ol(H,S),H.return=b,b=H)}return o(b);case G:e:{for(Z=S.key;g!==null;){if(g.key===Z)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){a(b,g.sibling),H=l(g,S.children||[]),H.return=b,b=H;break e}else{a(b,g);break}else t(b,g);g=g.sibling}H=Qu(S,b.mode,H),H.return=b,b=H}return o(b);case Re:return Z=S._init,S=Z(S._payload),he(b,g,S,H)}if(Xe(S))return I(b,g,S,H);if(Qe(S)){if(Z=Qe(S),typeof Z!="function")throw Error(c(150));return S=Z.call(S),$(b,g,S,H)}if(typeof S.then=="function")return he(b,g,bi(S),H);if(S.$$typeof===k)return he(b,g,ui(b,S),H);xi(b,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,g!==null&&g.tag===6?(a(b,g.sibling),H=l(g,S),H.return=b,b=H):(a(b,g),H=Yu(S,b.mode,H),H.return=b,b=H),o(b)):a(b,g)}return function(b,g,S,H){try{ul=0;var Z=he(b,g,S,H);return mn=null,Z}catch(K){if(K===Fn||K===ri)throw K;var le=lt(29,K,null,b.mode);return le.lanes=H,le.return=b,le}finally{}}}var hn=ks(!0),Ks=ks(!1),vt=U(null),Mt=null;function ia(e){var t=e.alternate;Y(ze,ze.current&1),Y(vt,e),Mt===null&&(t===null||sn.current!==null||t.memoizedState!==null)&&(Mt=e)}function Js(e){if(e.tag===22){if(Y(ze,ze.current),Y(vt,e),Mt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Mt=e)}}else ua()}function ua(){Y(ze,ze.current),Y(vt,vt.current)}function Yt(e){V(vt),Mt===e&&(Mt=null),V(ze)}var ze=U(0);function Si(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||fr(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Eo(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:w({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var To={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=rt(),l=aa(n);l.payload=t,a!=null&&(l.callback=a),t=na(e,l,n),t!==null&&(ct(t,e,n),In(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=rt(),l=aa(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=na(e,l,n),t!==null&&(ct(t,e,n),In(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=rt(),n=aa(a);n.tag=2,t!=null&&(n.callback=t),t=na(e,n,a),t!==null&&(ct(t,e,a),In(t,e,a))}};function $s(e,t,a,n,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,o):t.prototype&&t.prototype.isPureReactComponent?!Xn(a,n)||!Xn(l,i):!0}function Ws(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&To.enqueueReplaceState(t,t.state,null)}function qa(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=w({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}var Ei=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Fs(e){Ei(e)}function Ps(e){console.error(e)}function Is(e){Ei(e)}function Ti(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function ef(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ao(e,t,a){return a=aa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ti(e,t)},a}function tf(e){return e=aa(e),e.tag=3,e}function af(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;e.payload=function(){return l(i)},e.callback=function(){ef(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){ef(t,a,n),typeof l!="function"&&(da===null?da=new Set([this]):da.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})})}function Xm(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Jn(t,a,l,!0),a=vt.current,a!==null){switch(a.tag){case 13:return Mt===null?Jo():a.alternate===null&&Me===0&&(Me=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===Pu?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Wo(e,n,l)),!1;case 22:return a.flags|=65536,n===Pu?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Wo(e,n,l)),!1}throw Error(c(435,a.tag))}return Wo(e,n,l),Jo(),!1}if(se)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==Zu&&(e=Error(c(422),{cause:n}),Kn(mt(e,a)))):(n!==Zu&&(t=Error(c(423),{cause:n}),Kn(mt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=mt(n,a),l=Ao(e.stateNode,n,l),to(e,l),Me!==4&&(Me=2)),!1;var i=Error(c(520),{cause:n});if(i=mt(i,a),ml===null?ml=[i]:ml.push(i),Me!==4&&(Me=2),t===null)return!0;n=mt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Ao(a.stateNode,n,e),to(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(da===null||!da.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=tf(l),af(l,e,a,n),to(a,l),!1}a=a.return}while(a!==null);return!1}var nf=Error(c(461)),Be=!1;function qe(e,t,a,n){t.child=e===null?Ks(t,null,a,n):hn(t,e.child,a,n)}function lf(e,t,a,n,l){a=a.render;var i=t.ref;if("ref"in n){var o={};for(var r in n)r!=="ref"&&(o[r]=n[r])}else o=n;return Ba(t),n=uo(e,t,a,o,i,l),r=oo(),e!==null&&!Be?(ro(e,t,l),Qt(e,t,l)):(se&&r&&Xu(t),t.flags|=1,qe(e,t,n,l),t.child)}function uf(e,t,a,n,l){if(e===null){var i=a.type;return typeof i=="function"&&!Gu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,of(e,t,i,n,l)):(e=ai(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Ho(e,l)){var o=i.memoizedProps;if(a=a.compare,a=a!==null?a:Xn,a(o,n)&&e.ref===t.ref)return Qt(e,t,l)}return t.flags|=1,e=Ut(i,n),e.ref=t.ref,e.return=t,t.child=e}function of(e,t,a,n,l){if(e!==null){var i=e.memoizedProps;if(Xn(i,n)&&e.ref===t.ref)if(Be=!1,t.pendingProps=n=i,Ho(e,l))(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,Qt(e,t,l)}return wo(e,t,a,n,l)}function rf(e,t,a){var n=t.pendingProps,l=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;t.childLanes=i&~n}else t.childLanes=0,t.child=null;return cf(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&oi(t,i!==null?i.cachePool:null),i!==null?us(t,i):no(),Js(t);else return t.lanes=t.childLanes=536870912,cf(e,t,i!==null?i.baseLanes|a:a,a)}else i!==null?(oi(t,i.cachePool),us(t,i),ua(),t.memoizedState=null):(e!==null&&oi(t,null),no(),ua());return qe(e,t,l,a),t.child}function cf(e,t,a,n){var l=Fu();return l=l===null?null:{parent:Ne._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&oi(t,null),no(),Js(t),e!==null&&Jn(e,t,n,!0),null}function Ai(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function wo(e,t,a,n,l){return Ba(t),a=uo(e,t,a,n,void 0,l),n=oo(),e!==null&&!Be?(ro(e,t,l),Qt(e,t,l)):(se&&n&&Xu(t),t.flags|=1,qe(e,t,a,l),t.child)}function sf(e,t,a,n,l,i){return Ba(t),t.updateQueue=null,a=rs(t,n,a,l),os(e),n=oo(),e!==null&&!Be?(ro(e,t,i),Qt(e,t,i)):(se&&n&&Xu(t),t.flags|=1,qe(e,t,a,i),t.child)}function ff(e,t,a,n,l){if(Ba(t),t.stateNode===null){var i=ln,o=a.contextType;typeof o=="object"&&o!==null&&(i=Ze(o)),i=new a(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=To,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},Iu(t),o=a.contextType,i.context=typeof o=="object"&&o!==null?Ze(o):ln,i.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Eo(t,a,o,n),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&To.enqueueReplaceState(i,i.state,null),tl(t,n,i,l),el(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var r=t.memoizedProps,m=qa(a,r);i.props=m;var E=i.context,D=a.contextType;o=ln,typeof D=="object"&&D!==null&&(o=Ze(D));var z=a.getDerivedStateFromProps;D=typeof z=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,D||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||E!==o)&&Ws(t,i,n,o),ta=!1;var T=t.memoizedState;i.state=T,tl(t,n,i,l),el(),E=t.memoizedState,r||T!==E||ta?(typeof z=="function"&&(Eo(t,a,z,n),E=t.memoizedState),(m=ta||$s(t,a,m,n,T,E,o))?(D||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=E),i.props=n,i.state=E,i.context=o,n=m):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,eo(e,t),o=t.memoizedProps,D=qa(a,o),i.props=D,z=t.pendingProps,T=i.context,E=a.contextType,m=ln,typeof E=="object"&&E!==null&&(m=Ze(E)),r=a.getDerivedStateFromProps,(E=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==z||T!==m)&&Ws(t,i,n,m),ta=!1,T=t.memoizedState,i.state=T,tl(t,n,i,l),el();var A=t.memoizedState;o!==z||T!==A||ta||e!==null&&e.dependencies!==null&&ii(e.dependencies)?(typeof r=="function"&&(Eo(t,a,r,n),A=t.memoizedState),(D=ta||$s(t,a,D,n,T,A,m)||e!==null&&e.dependencies!==null&&ii(e.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,A,m),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,A,m)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=A),i.props=n,i.state=A,i.context=m,n=D):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,Ai(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=hn(t,e.child,null,l),t.child=hn(t,null,a,l)):qe(e,t,a,l),t.memoizedState=i.state,e=t.child):e=Qt(e,t,l),e}function df(e,t,a,n){return kn(),t.flags|=256,qe(e,t,a,n),t.child}var Mo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ro(e){return{baseLanes:e,cachePool:Pc()}}function Do(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=bt),e}function pf(e,t,a){var n=t.pendingProps,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(se){if(l?ia(t):ua(),se){var r=we,m;if(m=r){e:{for(m=r,r=wt;m.nodeType!==8;){if(!r){r=null;break e}if(m=Tt(m.nextSibling),m===null){r=null;break e}}r=m}r!==null?(t.memoizedState={dehydrated:r,treeContext:_a!==null?{id:Bt,overflow:jt}:null,retryLane:536870912,hydrationErrors:null},m=lt(18,null,null,0),m.stateNode=r,m.return=t,t.child=m,Je=t,we=null,m=!0):m=!1}m||za(t)}if(r=t.memoizedState,r!==null&&(r=r.dehydrated,r!==null))return fr(r)?t.lanes=32:t.lanes=536870912,null;Yt(t)}return r=n.children,n=n.fallback,l?(ua(),l=t.mode,r=wi({mode:"hidden",children:r},l),n=Oa(n,l,a,null),r.return=t,n.return=t,r.sibling=n,t.child=r,l=t.child,l.memoizedState=Ro(a),l.childLanes=Do(e,o,a),t.memoizedState=Mo,n):(ia(t),Co(t,r))}if(m=e.memoizedState,m!==null&&(r=m.dehydrated,r!==null)){if(i)t.flags&256?(ia(t),t.flags&=-257,t=Oo(e,t,a)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),l=n.fallback,r=t.mode,n=wi({mode:"visible",children:n.children},r),l=Oa(l,r,a,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,hn(t,e.child,null,a),n=t.child,n.memoizedState=Ro(a),n.childLanes=Do(e,o,a),t.memoizedState=Mo,t=l);else if(ia(t),fr(r)){if(o=r.nextSibling&&r.nextSibling.dataset,o)var E=o.dgst;o=E,n=Error(c(419)),n.stack="",n.digest=o,Kn({value:n,source:null,stack:null}),t=Oo(e,t,a)}else if(Be||Jn(e,t,a,!1),o=(a&e.childLanes)!==0,Be||o){if(o=ve,o!==null&&(n=a&-a,n=(n&42)!==0?1:fu(n),n=(n&(o.suspendedLanes|a))!==0?0:n,n!==0&&n!==m.retryLane))throw m.retryLane=n,nn(e,n),ct(o,e,n),nf;r.data==="$?"||Jo(),t=Oo(e,t,a)}else r.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,we=Tt(r.nextSibling),Je=t,se=!0,Na=null,wt=!1,e!==null&&(yt[gt++]=Bt,yt[gt++]=jt,yt[gt++]=_a,Bt=e.id,jt=e.overflow,_a=t),t=Co(t,n.children),t.flags|=4096);return t}return l?(ua(),l=n.fallback,r=t.mode,m=e.child,E=m.sibling,n=Ut(m,{mode:"hidden",children:n.children}),n.subtreeFlags=m.subtreeFlags&65011712,E!==null?l=Ut(E,l):(l=Oa(l,r,a,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,r=e.child.memoizedState,r===null?r=Ro(a):(m=r.cachePool,m!==null?(E=Ne._currentValue,m=m.parent!==E?{parent:E,pool:E}:m):m=Pc(),r={baseLanes:r.baseLanes|a,cachePool:m}),l.memoizedState=r,l.childLanes=Do(e,o,a),t.memoizedState=Mo,n):(ia(t),a=e.child,e=a.sibling,a=Ut(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Co(e,t){return t=wi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function wi(e,t){return e=lt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Oo(e,t,a){return hn(t,e.child,null,a),e=Co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mf(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ku(e.return,t,a)}function _o(e,t,a,n,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=a,i.tailMode=l)}function hf(e,t,a){var n=t.pendingProps,l=n.revealOrder,i=n.tail;if(qe(e,t,n.children,a),n=ze.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mf(e,a,t);else if(e.tag===19)mf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(Y(ze,n),l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&Si(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),_o(t,!1,l,a,i);break;case"backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Si(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}_o(t,!0,a,null,i);break;case"together":_o(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Jn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Ut(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ut(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ho(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ii(e)))}function Vm(e,t,a){switch(t.tag){case 3:xe(t,t.stateNode.containerInfo),ea(t,Ne,e.memoizedState.cache),kn();break;case 27:case 5:uu(t);break;case 4:xe(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ia(t),t.flags|=128,null):(a&t.child.childLanes)!==0?pf(e,t,a):(ia(t),e=Qt(e,t,a),e!==null?e.sibling:null);ia(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Jn(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return hf(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Y(ze,ze.current),n)break;return null;case 22:case 23:return t.lanes=0,rf(e,t,a);case 24:ea(t,Ne,e.memoizedState.cache)}return Qt(e,t,a)}function yf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Be=!0;else{if(!Ho(e,a)&&(t.flags&128)===0)return Be=!1,Vm(e,t,a);Be=(e.flags&131072)!==0}else Be=!1,se&&(t.flags&1048576)!==0&&Zc(t,li,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,l=n._init;if(n=l(n._payload),t.type=n,typeof n=="function")Gu(n)?(e=qa(n,e),t.tag=1,t=ff(null,t,n,e,a)):(t.tag=0,t=wo(null,t,n,e,a));else{if(n!=null){if(l=n.$$typeof,l===te){t.tag=11,t=lf(null,t,n,e,a);break e}else if(l===Ae){t.tag=14,t=uf(null,t,n,e,a);break e}}throw t=Aa(n)||n,Error(c(306,t,""))}}return t;case 0:return wo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=qa(n,t.pendingProps),ff(e,t,n,l,a);case 3:e:{if(xe(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var i=t.memoizedState;l=i.element,eo(e,t),tl(t,n,null,a);var o=t.memoizedState;if(n=o.cache,ea(t,Ne,n),n!==i.cache&&Ju(t,[Ne],a,!0),el(),n=o.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=df(e,t,n,a);break e}else if(n!==l){l=mt(Error(c(424)),t),Kn(l),t=df(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(we=Tt(e.firstChild),Je=t,se=!0,Na=null,wt=!0,a=Ks(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(kn(),n===l){t=Qt(e,t,a);break e}qe(e,t,n,a)}t=t.child}return t;case 26:return Ai(e,t),e===null?(a=xd(t.type,null,t.pendingProps,null))?t.memoizedState=a:se||(a=t.type,e=t.pendingProps,n=qi(ee.current).createElement(a),n[Ve]=t,n[$e]=e,Ye(n,a,e),Ue(n),t.stateNode=n):t.memoizedState=xd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return uu(t),e===null&&se&&(n=t.stateNode=gd(t.type,t.pendingProps,ee.current),Je=t,wt=!0,l=we,ha(t.type)?(dr=l,we=Tt(n.firstChild)):we=l),qe(e,t,t.pendingProps.children,a),Ai(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&se&&((l=n=we)&&(n=vh(n,t.type,t.pendingProps,wt),n!==null?(t.stateNode=n,Je=t,we=Tt(n.firstChild),wt=!1,l=!0):l=!1),l||za(t)),uu(t),l=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,n=i.children,rr(l,i)?n=null:o!==null&&rr(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=uo(e,t,Bm,null,null,a),Tl._currentValue=l),Ai(e,t),qe(e,t,n,a),t.child;case 6:return e===null&&se&&((e=a=we)&&(a=bh(a,t.pendingProps,wt),a!==null?(t.stateNode=a,Je=t,we=null,e=!0):e=!1),e||za(t)),null;case 13:return pf(e,t,a);case 4:return xe(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=hn(t,null,n,a):qe(e,t,n,a),t.child;case 11:return lf(e,t,t.type,t.pendingProps,a);case 7:return qe(e,t,t.pendingProps,a),t.child;case 8:return qe(e,t,t.pendingProps.children,a),t.child;case 12:return qe(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ea(t,t.type,n.value),qe(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,Ba(t),l=Ze(l),n=n(l),t.flags|=1,qe(e,t,n,a),t.child;case 14:return uf(e,t,t.type,t.pendingProps,a);case 15:return of(e,t,t.type,t.pendingProps,a);case 19:return hf(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=wi(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Ut(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return rf(e,t,a);case 24:return Ba(t),n=Ze(Ne),e===null?(l=Fu(),l===null&&(l=ve,i=$u(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:n,cache:l},Iu(t),ea(t,Ne,l)):((e.lanes&a)!==0&&(eo(e,t),tl(t,null,null,a),el()),l=e.memoizedState,i=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ea(t,Ne,n)):(n=i.cache,ea(t,Ne,n),n!==l.cache&&Ju(t,[Ne],a,!0))),qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Xt(e){e.flags|=4}function gf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wd(t)){if(t=vt.current,t!==null&&((oe&4194048)===oe?Mt!==null:(oe&62914560)!==oe&&(oe&536870912)===0||t!==Mt))throw Pn=Pu,Ic;e.flags|=8192}}function Mi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Jr():536870912,e.lanes|=t,bn|=t)}function rl(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Zm(e,t,a){var n=t.pendingProps;switch(Vu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ee(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qt(Ne),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zn(t)?Xt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Jc())),Ee(t),null;case 26:return a=t.memoizedState,e===null?(Xt(t),a!==null?(Ee(t),gf(t,a)):(Ee(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Xt(t),Ee(t),gf(t,a)):(Ee(t),t.flags&=-16777217):(e.memoizedProps!==n&&Xt(t),Ee(t),t.flags&=-16777217),null;case 27:jl(t),a=ee.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Xt(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Ee(t),null}e=J.current,Zn(t)?kc(t):(e=gd(l,n,a),t.stateNode=e,Xt(t))}return Ee(t),null;case 5:if(jl(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Xt(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Ee(t),null}if(e=J.current,Zn(t))kc(t);else{switch(l=qi(ee.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?l.createElement(a,{is:n.is}):l.createElement(a)}}e[Ve]=t,e[$e]=n;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Ye(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Xt(t)}}return Ee(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Xt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=ee.current,Zn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=Je,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[Ve]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||sd(e.nodeValue,a)),e||za(t)}else e=qi(e).createTextNode(n),e[Ve]=t,t.stateNode=e}return Ee(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Zn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Ve]=t}else kn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),l=!1}else l=Jc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Yt(t),t):(Yt(t),null)}if(Yt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool);var i=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Mi(t,t.updateQueue),Ee(t),null;case 4:return Wt(),e===null&&nr(t.stateNode.containerInfo),Ee(t),null;case 10:return qt(t.type),Ee(t),null;case 19:if(V(ze),l=t.memoizedState,l===null)return Ee(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)rl(l,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Si(e),i!==null){for(t.flags|=128,rl(l,!1),e=i.updateQueue,t.updateQueue=e,Mi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Vc(a,e),a=a.sibling;return Y(ze,ze.current&1|2),t.child}e=e.sibling}l.tail!==null&&At()>Ci&&(t.flags|=128,n=!0,rl(l,!1),t.lanes=4194304)}else{if(!n)if(e=Si(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Mi(t,e),rl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!se)return Ee(t),null}else 2*At()-l.renderingStartTime>Ci&&a!==536870912&&(t.flags|=128,n=!0,rl(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=At(),t.sibling=null,e=ze.current,Y(ze,n?e&1|2:e&1),t):(Ee(t),null);case 22:case 23:return Yt(t),lo(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),a=t.updateQueue,a!==null&&Mi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&V(ja),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),qt(Ne),Ee(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function km(e,t){switch(Vu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qt(Ne),Wt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return jl(t),null;case 13:if(Yt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(ze),null;case 4:return Wt(),null;case 10:return qt(t.type),null;case 22:case 23:return Yt(t),lo(),e!==null&&V(ja),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qt(Ne),null;case 25:return null;default:return null}}function vf(e,t){switch(Vu(t),t.tag){case 3:qt(Ne),Wt();break;case 26:case 27:case 5:jl(t);break;case 4:Wt();break;case 13:Yt(t);break;case 19:V(ze);break;case 10:qt(t.type);break;case 22:case 23:Yt(t),lo(),e!==null&&V(ja);break;case 24:qt(Ne)}}function cl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var i=a.create,o=a.inst;n=i(),o.destroy=n}a=a.next}while(a!==l)}}catch(r){ge(t,t.return,r)}}function oa(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){var o=n.inst,r=o.destroy;if(r!==void 0){o.destroy=void 0,l=t;var m=a,E=r;try{E()}catch(D){ge(l,m,D)}}}n=n.next}while(n!==i)}}catch(D){ge(t,t.return,D)}}function bf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{is(t,a)}catch(n){ge(e,e.return,n)}}}function xf(e,t,a){a.props=qa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ge(e,t,n)}}function sl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){ge(e,t,l)}}function Rt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){ge(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ge(e,t,l)}else a.current=null}function Sf(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){ge(e,e.return,l)}}function No(e,t,a){try{var n=e.stateNode;ph(n,e.type,a,t),n[$e]=t}catch(l){ge(e,e.return,l)}}function Ef(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ha(e.type)||e.tag===4}function zo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ef(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uo(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Li));else if(n!==4&&(n===27&&ha(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Uo(e,t,a),e=e.sibling;e!==null;)Uo(e,t,a),e=e.sibling}function Ri(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ri(e,t,a),e=e.sibling;e!==null;)Ri(e,t,a),e=e.sibling}function Tf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ye(t,n,a),t[Ve]=e,t[$e]=a}catch(i){ge(e,e.return,i)}}var Vt=!1,Ce=!1,Bo=!1,Af=typeof WeakSet=="function"?WeakSet:Set,je=null;function Km(e,t){if(e=e.containerInfo,ur=Zi,e=zc(e),Nu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var o=0,r=-1,m=-1,E=0,D=0,z=e,T=null;t:for(;;){for(var A;z!==a||l!==0&&z.nodeType!==3||(r=o+l),z!==i||n!==0&&z.nodeType!==3||(m=o+n),z.nodeType===3&&(o+=z.nodeValue.length),(A=z.firstChild)!==null;)T=z,z=A;for(;;){if(z===e)break t;if(T===a&&++E===l&&(r=o),T===i&&++D===n&&(m=o),(A=z.nextSibling)!==null)break;z=T,T=z.parentNode}z=A}a=r===-1||m===-1?null:{start:r,end:m}}else a=null}a=a||{start:0,end:0}}else a=null;for(or={focusedElem:e,selectionRange:a},Zi=!1,je=t;je!==null;)if(t=je,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,je=e;else for(;je!==null;){switch(t=je,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,l=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var I=qa(a.type,l,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(I,i),n.__reactInternalSnapshotBeforeUpdate=e}catch($){ge(a,a.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)sr(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,je=e;break}je=t.return}}function wf(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ra(e,a),n&4&&cl(5,a);break;case 1:if(ra(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){ge(a,a.return,o)}else{var l=qa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ge(a,a.return,o)}}n&64&&bf(a),n&512&&sl(a,a.return);break;case 3:if(ra(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{is(e,t)}catch(o){ge(a,a.return,o)}}break;case 27:t===null&&n&4&&Tf(a);case 26:case 5:ra(e,a),t===null&&n&4&&Sf(a),n&512&&sl(a,a.return);break;case 12:ra(e,a);break;case 13:ra(e,a),n&4&&Df(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ah.bind(null,a),xh(e,a))));break;case 22:if(n=a.memoizedState!==null||Vt,!n){t=t!==null&&t.memoizedState!==null||Ce,l=Vt;var i=Ce;Vt=n,(Ce=t)&&!i?ca(e,a,(a.subtreeFlags&8772)!==0):ra(e,a),Vt=l,Ce=i}break;case 30:break;default:ra(e,a)}}function Mf(e){var t=e.alternate;t!==null&&(e.alternate=null,Mf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&mu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Se=null,Pe=!1;function Zt(e,t,a){for(a=a.child;a!==null;)Rf(e,t,a),a=a.sibling}function Rf(e,t,a){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(_n,a)}catch{}switch(a.tag){case 26:Ce||Rt(a,t),Zt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ce||Rt(a,t);var n=Se,l=Pe;ha(a.type)&&(Se=a.stateNode,Pe=!1),Zt(e,t,a),bl(a.stateNode),Se=n,Pe=l;break;case 5:Ce||Rt(a,t);case 6:if(n=Se,l=Pe,Se=null,Zt(e,t,a),Se=n,Pe=l,Se!==null)if(Pe)try{(Se.nodeType===9?Se.body:Se.nodeName==="HTML"?Se.ownerDocument.body:Se).removeChild(a.stateNode)}catch(i){ge(a,t,i)}else try{Se.removeChild(a.stateNode)}catch(i){ge(a,t,i)}break;case 18:Se!==null&&(Pe?(e=Se,hd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Rl(e)):hd(Se,a.stateNode));break;case 4:n=Se,l=Pe,Se=a.stateNode.containerInfo,Pe=!0,Zt(e,t,a),Se=n,Pe=l;break;case 0:case 11:case 14:case 15:Ce||oa(2,a,t),Ce||oa(4,a,t),Zt(e,t,a);break;case 1:Ce||(Rt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&xf(a,t,n)),Zt(e,t,a);break;case 21:Zt(e,t,a);break;case 22:Ce=(n=Ce)||a.memoizedState!==null,Zt(e,t,a),Ce=n;break;default:Zt(e,t,a)}}function Df(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rl(e)}catch(a){ge(t,t.return,a)}}function Jm(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Af),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Af),t;default:throw Error(c(435,e.tag))}}function jo(e,t){var a=Jm(e);t.forEach(function(n){var l=nh.bind(null,e,n);a.has(n)||(a.add(n),n.then(l,l))})}function it(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],i=e,o=t,r=o;e:for(;r!==null;){switch(r.tag){case 27:if(ha(r.type)){Se=r.stateNode,Pe=!1;break e}break;case 5:Se=r.stateNode,Pe=!1;break e;case 3:case 4:Se=r.stateNode.containerInfo,Pe=!0;break e}r=r.return}if(Se===null)throw Error(c(160));Rf(i,o,l),Se=null,Pe=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Cf(t,e),t=t.sibling}var Et=null;function Cf(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:it(t,e),ut(e),n&4&&(oa(3,e,e.return),cl(3,e),oa(5,e,e.return));break;case 1:it(t,e),ut(e),n&512&&(Ce||a===null||Rt(a,a.return)),n&64&&Vt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Et;if(it(t,e),ut(e),n&512&&(Ce||a===null||Rt(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[zn]||i[Ve]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),Ye(i,n,a),i[Ve]=e,Ue(i),n=i;break e;case"link":var o=Td("link","href",l).get(n+(a.href||""));if(o){for(var r=0;r<o.length;r++)if(i=o[r],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(r,1);break t}}i=l.createElement(n),Ye(i,n,a),l.head.appendChild(i);break;case"meta":if(o=Td("meta","content",l).get(n+(a.content||""))){for(r=0;r<o.length;r++)if(i=o[r],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(r,1);break t}}i=l.createElement(n),Ye(i,n,a),l.head.appendChild(i);break;default:throw Error(c(468,n))}i[Ve]=e,Ue(i),n=i}e.stateNode=n}else Ad(l,e.type,e.stateNode);else e.stateNode=Ed(l,n,e.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?Ad(l,e.type,e.stateNode):Ed(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&No(e,e.memoizedProps,a.memoizedProps)}break;case 27:it(t,e),ut(e),n&512&&(Ce||a===null||Rt(a,a.return)),a!==null&&n&4&&No(e,e.memoizedProps,a.memoizedProps);break;case 5:if(it(t,e),ut(e),n&512&&(Ce||a===null||Rt(a,a.return)),e.flags&32){l=e.stateNode;try{Wa(l,"")}catch(A){ge(e,e.return,A)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,No(e,l,a!==null?a.memoizedProps:l)),n&1024&&(Bo=!0);break;case 6:if(it(t,e),ut(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(A){ge(e,e.return,A)}}break;case 3:if(Qi=null,l=Et,Et=Gi(t.containerInfo),it(t,e),Et=l,ut(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Rl(t.containerInfo)}catch(A){ge(e,e.return,A)}Bo&&(Bo=!1,Of(e));break;case 4:n=Et,Et=Gi(e.stateNode.containerInfo),it(t,e),ut(e),Et=n;break;case 12:it(t,e),ut(e);break;case 13:it(t,e),ut(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xo=At()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,jo(e,n)));break;case 22:l=e.memoizedState!==null;var m=a!==null&&a.memoizedState!==null,E=Vt,D=Ce;if(Vt=E||l,Ce=D||m,it(t,e),Ce=D,Vt=E,ut(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||m||Vt||Ce||Ga(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){m=a=t;try{if(i=m.stateNode,l)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{r=m.stateNode;var z=m.memoizedProps.style,T=z!=null&&z.hasOwnProperty("display")?z.display:null;r.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(A){ge(m,m.return,A)}}}else if(t.tag===6){if(a===null){m=t;try{m.stateNode.nodeValue=l?"":m.memoizedProps}catch(A){ge(m,m.return,A)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,jo(e,a))));break;case 19:it(t,e),ut(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,jo(e,n)));break;case 30:break;case 21:break;default:it(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Ef(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var l=a.stateNode,i=zo(e);Ri(e,i,l);break;case 5:var o=a.stateNode;a.flags&32&&(Wa(o,""),a.flags&=-33);var r=zo(e);Ri(e,r,o);break;case 3:case 4:var m=a.stateNode.containerInfo,E=zo(e);Uo(e,E,m);break;default:throw Error(c(161))}}catch(D){ge(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Of(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Of(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ra(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)wf(e,t.alternate,t),t=t.sibling}function Ga(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:oa(4,t,t.return),Ga(t);break;case 1:Rt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&xf(t,t.return,a),Ga(t);break;case 27:bl(t.stateNode);case 26:case 5:Rt(t,t.return),Ga(t);break;case 22:t.memoizedState===null&&Ga(t);break;case 30:Ga(t);break;default:Ga(t)}e=e.sibling}}function ca(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:ca(l,i,a),cl(4,i);break;case 1:if(ca(l,i,a),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(E){ge(n,n.return,E)}if(n=i,l=n.updateQueue,l!==null){var r=n.stateNode;try{var m=l.shared.hiddenCallbacks;if(m!==null)for(l.shared.hiddenCallbacks=null,l=0;l<m.length;l++)ls(m[l],r)}catch(E){ge(n,n.return,E)}}a&&o&64&&bf(i),sl(i,i.return);break;case 27:Tf(i);case 26:case 5:ca(l,i,a),a&&n===null&&o&4&&Sf(i),sl(i,i.return);break;case 12:ca(l,i,a);break;case 13:ca(l,i,a),a&&o&4&&Df(l,i);break;case 22:i.memoizedState===null&&ca(l,i,a),sl(i,i.return);break;case 30:break;default:ca(l,i,a)}t=t.sibling}}function Lo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$n(a))}function qo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$n(e))}function Dt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_f(e,t,a,n),t=t.sibling}function _f(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,a,n),l&2048&&cl(9,t);break;case 1:Dt(e,t,a,n);break;case 3:Dt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$n(e)));break;case 12:if(l&2048){Dt(e,t,a,n),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,r=i.onPostCommit;typeof r=="function"&&r(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){ge(t,t.return,m)}}else Dt(e,t,a,n);break;case 13:Dt(e,t,a,n);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?Dt(e,t,a,n):fl(e,t):i._visibility&2?Dt(e,t,a,n):(i._visibility|=2,yn(e,t,a,n,(t.subtreeFlags&10256)!==0)),l&2048&&Lo(o,t);break;case 24:Dt(e,t,a,n),l&2048&&qo(t.alternate,t);break;default:Dt(e,t,a,n)}}function yn(e,t,a,n,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,o=t,r=a,m=n,E=o.flags;switch(o.tag){case 0:case 11:case 15:yn(i,o,r,m,l),cl(8,o);break;case 23:break;case 22:var D=o.stateNode;o.memoizedState!==null?D._visibility&2?yn(i,o,r,m,l):fl(i,o):(D._visibility|=2,yn(i,o,r,m,l)),l&&E&2048&&Lo(o.alternate,o);break;case 24:yn(i,o,r,m,l),l&&E&2048&&qo(o.alternate,o);break;default:yn(i,o,r,m,l)}t=t.sibling}}function fl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:fl(a,n),l&2048&&Lo(n.alternate,n);break;case 24:fl(a,n),l&2048&&qo(n.alternate,n);break;default:fl(a,n)}t=t.sibling}}var dl=8192;function gn(e){if(e.subtreeFlags&dl)for(e=e.child;e!==null;)Hf(e),e=e.sibling}function Hf(e){switch(e.tag){case 26:gn(e),e.flags&dl&&e.memoizedState!==null&&Nh(Et,e.memoizedState,e.memoizedProps);break;case 5:gn(e);break;case 3:case 4:var t=Et;Et=Gi(e.stateNode.containerInfo),gn(e),Et=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=dl,dl=16777216,gn(e),dl=t):gn(e));break;default:gn(e)}}function Nf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function pl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];je=n,Uf(n,e)}Nf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zf(e),e=e.sibling}function zf(e){switch(e.tag){case 0:case 11:case 15:pl(e),e.flags&2048&&oa(9,e,e.return);break;case 3:pl(e);break;case 12:pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Di(e)):pl(e);break;default:pl(e)}}function Di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];je=n,Uf(n,e)}Nf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:oa(8,t,t.return),Di(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Di(t));break;default:Di(t)}e=e.sibling}}function Uf(e,t){for(;je!==null;){var a=je;switch(a.tag){case 0:case 11:case 15:oa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:$n(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,je=n;else e:for(a=e;je!==null;){n=je;var l=n.sibling,i=n.return;if(Mf(n),n===a){je=null;break e}if(l!==null){l.return=i,je=l;break e}je=i}}}var $m={getCacheForType:function(e){var t=Ze(Ne),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Wm=typeof WeakMap=="function"?WeakMap:Map,fe=0,ve=null,ie=null,oe=0,de=0,ot=null,sa=!1,vn=!1,Go=!1,kt=0,Me=0,fa=0,Ya=0,Yo=0,bt=0,bn=0,ml=null,Ie=null,Qo=!1,Xo=0,Ci=1/0,Oi=null,da=null,Ge=0,pa=null,xn=null,Sn=0,Vo=0,Zo=null,Bf=null,hl=0,ko=null;function rt(){if((fe&2)!==0&&oe!==0)return oe&-oe;if(C.T!==null){var e=rn;return e!==0?e:Io()}return Fr()}function jf(){bt===0&&(bt=(oe&536870912)===0||se?Kr():536870912);var e=vt.current;return e!==null&&(e.flags|=32),bt}function ct(e,t,a){(e===ve&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(En(e,0),ma(e,oe,bt,!1)),Nn(e,a),((fe&2)===0||e!==ve)&&(e===ve&&((fe&2)===0&&(Ya|=a),Me===4&&ma(e,oe,bt,!1)),Ct(e))}function Lf(e,t,a){if((fe&6)!==0)throw Error(c(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Hn(e,t),l=n?Im(e,t):$o(e,t,!0),i=n;do{if(l===0){vn&&!n&&ma(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Fm(a)){l=$o(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var r=e;l=ml;var m=r.current.memoizedState.isDehydrated;if(m&&(En(r,o).flags|=256),o=$o(r,o,!1),o!==2){if(Go&&!m){r.errorRecoveryDisabledLanes|=i,Ya|=i,l=4;break e}i=Ie,Ie=l,i!==null&&(Ie===null?Ie=i:Ie.push.apply(Ie,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){En(e,0),ma(e,t,0,!0);break}e:{switch(n=e,i=l,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ma(n,t,bt,!sa);break e;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Xo+300-At(),10<l)){if(ma(n,t,bt,!sa),Yl(n,0,!0)!==0)break e;n.timeoutHandle=pd(qf.bind(null,n,a,Ie,Oi,Qo,t,bt,Ya,bn,sa,i,2,-0,0),l);break e}qf(n,a,Ie,Oi,Qo,t,bt,Ya,bn,sa,i,0,-0,0)}}break}while(!0);Ct(e)}function qf(e,t,a,n,l,i,o,r,m,E,D,z,T,A){if(e.timeoutHandle=-1,z=t.subtreeFlags,(z&8192||(z&16785408)===16785408)&&(El={stylesheets:null,count:0,unsuspend:Hh},Hf(t),z=zh(),z!==null)){e.cancelPendingCommit=z(kf.bind(null,e,t,i,a,n,l,o,r,m,D,1,T,A)),ma(e,i,o,!E);return}kf(e,t,i,a,n,l,o,r,m)}function Fm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],i=l.getSnapshot;l=l.value;try{if(!nt(i(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(e,t,a,n){t&=~Yo,t&=~Ya,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var i=31-at(l),o=1<<i;n[i]=-1,l&=~o}a!==0&&$r(e,a,t)}function _i(){return(fe&6)===0?(yl(0),!1):!0}function Ko(){if(ie!==null){if(de===0)var e=ie.return;else e=ie,Lt=Ua=null,co(e),mn=null,ul=0,e=ie;for(;e!==null;)vf(e.alternate,e),e=e.return;ie=null}}function En(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,hh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ko(),ve=e,ie=a=Ut(e.current,null),oe=t,de=0,ot=null,sa=!1,vn=Hn(e,t),Go=!1,bn=bt=Yo=Ya=fa=Me=0,Ie=ml=null,Qo=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-at(n),i=1<<l;t|=e[l],n&=~i}return kt=t,Il(),a}function Gf(e,t){ne=null,C.H=vi,t===Fn||t===ri?(t=as(),de=3):t===Ic?(t=as(),de=4):de=t===nf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ot=t,ie===null&&(Me=1,Ti(e,mt(t,e.current)))}function Yf(){var e=C.H;return C.H=vi,e===null?vi:e}function Qf(){var e=C.A;return C.A=$m,e}function Jo(){Me=4,sa||(oe&4194048)!==oe&&vt.current!==null||(vn=!0),(fa&134217727)===0&&(Ya&134217727)===0||ve===null||ma(ve,oe,bt,!1)}function $o(e,t,a){var n=fe;fe|=2;var l=Yf(),i=Qf();(ve!==e||oe!==t)&&(Oi=null,En(e,t)),t=!1;var o=Me;e:do try{if(de!==0&&ie!==null){var r=ie,m=ot;switch(de){case 8:Ko(),o=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var E=de;if(de=0,ot=null,Tn(e,r,m,E),a&&vn){o=0;break e}break;default:E=de,de=0,ot=null,Tn(e,r,m,E)}}Pm(),o=Me;break}catch(D){Gf(e,D)}while(!0);return t&&e.shellSuspendCounter++,Lt=Ua=null,fe=n,C.H=l,C.A=i,ie===null&&(ve=null,oe=0,Il()),o}function Pm(){for(;ie!==null;)Xf(ie)}function Im(e,t){var a=fe;fe|=2;var n=Yf(),l=Qf();ve!==e||oe!==t?(Oi=null,Ci=At()+500,En(e,t)):vn=Hn(e,t);e:do try{if(de!==0&&ie!==null){t=ie;var i=ot;t:switch(de){case 1:de=0,ot=null,Tn(e,t,i,1);break;case 2:case 9:if(es(i)){de=0,ot=null,Vf(t);break}t=function(){de!==2&&de!==9||ve!==e||(de=7),Ct(e)},i.then(t,t);break e;case 3:de=7;break e;case 4:de=5;break e;case 7:es(i)?(de=0,ot=null,Vf(t)):(de=0,ot=null,Tn(e,t,i,7));break;case 5:var o=null;switch(ie.tag){case 26:o=ie.memoizedState;case 5:case 27:var r=ie;if(!o||wd(o)){de=0,ot=null;var m=r.sibling;if(m!==null)ie=m;else{var E=r.return;E!==null?(ie=E,Hi(E)):ie=null}break t}}de=0,ot=null,Tn(e,t,i,5);break;case 6:de=0,ot=null,Tn(e,t,i,6);break;case 8:Ko(),Me=6;break e;default:throw Error(c(462))}}eh();break}catch(D){Gf(e,D)}while(!0);return Lt=Ua=null,C.H=n,C.A=l,fe=a,ie!==null?0:(ve=null,oe=0,Il(),Me)}function eh(){for(;ie!==null&&!Ep();)Xf(ie)}function Xf(e){var t=yf(e.alternate,e,kt);e.memoizedProps=e.pendingProps,t===null?Hi(e):ie=t}function Vf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=sf(a,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=sf(a,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:co(t);default:vf(a,t),t=ie=Vc(t,kt),t=yf(a,t,kt)}e.memoizedProps=e.pendingProps,t===null?Hi(e):ie=t}function Tn(e,t,a,n){Lt=Ua=null,co(t),mn=null,ul=0;var l=t.return;try{if(Xm(e,l,t,a,oe)){Me=1,Ti(e,mt(a,e.current)),ie=null;return}}catch(i){if(l!==null)throw ie=l,i;Me=1,Ti(e,mt(a,e.current)),ie=null;return}t.flags&32768?(se||n===1?e=!0:vn||(oe&536870912)!==0?e=!1:(sa=e=!0,(n===2||n===9||n===3||n===6)&&(n=vt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Zf(t,e)):Hi(t)}function Hi(e){var t=e;do{if((t.flags&32768)!==0){Zf(t,sa);return}e=t.return;var a=Zm(t.alternate,t,kt);if(a!==null){ie=a;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);Me===0&&(Me=5)}function Zf(e,t){do{var a=km(e.alternate,e);if(a!==null){a.flags&=32767,ie=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=a}while(e!==null);Me=6,ie=null}function kf(e,t,a,n,l,i,o,r,m){e.cancelPendingCommit=null;do Ni();while(Ge!==0);if((fe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=Lu,Hp(e,a,i,o,r,m),e===ve&&(ie=ve=null,oe=0),xn=t,pa=e,Sn=a,Vo=i,Zo=l,Bf=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,lh(Ll,function(){return Ff(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=C.T,C.T=null,l=Q.p,Q.p=2,o=fe,fe|=4;try{Km(e,t,a)}finally{fe=o,Q.p=l,C.T=n}}Ge=1,Kf(),Jf(),$f()}}function Kf(){if(Ge===1){Ge=0;var e=pa,t=xn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null;var n=Q.p;Q.p=2;var l=fe;fe|=4;try{Cf(t,e);var i=or,o=zc(e.containerInfo),r=i.focusedElem,m=i.selectionRange;if(o!==r&&r&&r.ownerDocument&&Nc(r.ownerDocument.documentElement,r)){if(m!==null&&Nu(r)){var E=m.start,D=m.end;if(D===void 0&&(D=E),"selectionStart"in r)r.selectionStart=E,r.selectionEnd=Math.min(D,r.value.length);else{var z=r.ownerDocument||document,T=z&&z.defaultView||window;if(T.getSelection){var A=T.getSelection(),I=r.textContent.length,$=Math.min(m.start,I),he=m.end===void 0?$:Math.min(m.end,I);!A.extend&&$>he&&(o=he,he=$,$=o);var b=Hc(r,$),g=Hc(r,he);if(b&&g&&(A.rangeCount!==1||A.anchorNode!==b.node||A.anchorOffset!==b.offset||A.focusNode!==g.node||A.focusOffset!==g.offset)){var S=z.createRange();S.setStart(b.node,b.offset),A.removeAllRanges(),$>he?(A.addRange(S),A.extend(g.node,g.offset)):(S.setEnd(g.node,g.offset),A.addRange(S))}}}}for(z=[],A=r;A=A.parentNode;)A.nodeType===1&&z.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<z.length;r++){var H=z[r];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}Zi=!!ur,or=ur=null}finally{fe=l,Q.p=n,C.T=a}}e.current=t,Ge=2}}function Jf(){if(Ge===2){Ge=0;var e=pa,t=xn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=C.T,C.T=null;var n=Q.p;Q.p=2;var l=fe;fe|=4;try{wf(e,t.alternate,t)}finally{fe=l,Q.p=n,C.T=a}}Ge=3}}function $f(){if(Ge===4||Ge===3){Ge=0,Tp();var e=pa,t=xn,a=Sn,n=Bf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ge=5:(Ge=0,xn=pa=null,Wf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(da=null),du(a),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(_n,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=C.T,l=Q.p,Q.p=2,C.T=null;try{for(var i=e.onRecoverableError,o=0;o<n.length;o++){var r=n[o];i(r.value,{componentStack:r.stack})}}finally{C.T=t,Q.p=l}}(Sn&3)!==0&&Ni(),Ct(e),l=e.pendingLanes,(a&4194090)!==0&&(l&42)!==0?e===ko?hl++:(hl=0,ko=e):hl=0,yl(0)}}function Wf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$n(t)))}function Ni(e){return Kf(),Jf(),$f(),Ff()}function Ff(){if(Ge!==5)return!1;var e=pa,t=Vo;Vo=0;var a=du(Sn),n=C.T,l=Q.p;try{Q.p=32>a?32:a,C.T=null,a=Zo,Zo=null;var i=pa,o=Sn;if(Ge=0,xn=pa=null,Sn=0,(fe&6)!==0)throw Error(c(331));var r=fe;if(fe|=4,zf(i.current),_f(i,i.current,o,a),fe=r,yl(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(_n,i)}catch{}return!0}finally{Q.p=l,C.T=n,Wf(e,t)}}function Pf(e,t,a){t=mt(a,t),t=Ao(e.stateNode,t,2),e=na(e,t,2),e!==null&&(Nn(e,2),Ct(e))}function ge(e,t,a){if(e.tag===3)Pf(e,e,a);else for(;t!==null;){if(t.tag===3){Pf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(da===null||!da.has(n))){e=mt(a,e),a=tf(2),n=na(t,a,2),n!==null&&(af(a,n,t,e),Nn(n,2),Ct(n));break}}t=t.return}}function Wo(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Wm;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(Go=!0,l.add(a),e=th.bind(null,e,t,a),t.then(e,e))}function th(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ve===e&&(oe&a)===a&&(Me===4||Me===3&&(oe&62914560)===oe&&300>At()-Xo?(fe&2)===0&&En(e,0):Yo|=a,bn===oe&&(bn=0)),Ct(e)}function If(e,t){t===0&&(t=Jr()),e=nn(e,t),e!==null&&(Nn(e,t),Ct(e))}function ah(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),If(e,a)}function nh(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),If(e,a)}function lh(e,t){return ru(e,t)}var zi=null,An=null,Fo=!1,Ui=!1,Po=!1,Qa=0;function Ct(e){e!==An&&e.next===null&&(An===null?zi=An=e:An=An.next=e),Ui=!0,Fo||(Fo=!0,uh())}function yl(e,t){if(!Po&&Ui){Po=!0;do for(var a=!1,n=zi;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var o=n.suspendedLanes,r=n.pingedLanes;i=(1<<31-at(42|e)+1)-1,i&=l&~(o&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,nd(n,i))}else i=oe,i=Yl(n,n===ve?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||Hn(n,i)||(a=!0,nd(n,i));n=n.next}while(a);Po=!1}}function ih(){ed()}function ed(){Ui=Fo=!1;var e=0;Qa!==0&&(mh()&&(e=Qa),Qa=0);for(var t=At(),a=null,n=zi;n!==null;){var l=n.next,i=td(n,t);i===0?(n.next=null,a===null?zi=l:a.next=l,l===null&&(An=a)):(a=n,(e!==0||(i&3)!==0)&&(Ui=!0)),n=l}yl(e)}function td(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-at(i),r=1<<o,m=l[o];m===-1?((r&a)===0||(r&n)!==0)&&(l[o]=_p(r,t)):m<=t&&(e.expiredLanes|=r),i&=~r}if(t=ve,a=oe,a=Yl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(de===2||de===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&cu(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Hn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&cu(n),du(a)){case 2:case 8:a=Zr;break;case 32:a=Ll;break;case 268435456:a=kr;break;default:a=Ll}return n=ad.bind(null,e),a=ru(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&cu(n),e.callbackPriority=2,e.callbackNode=null,2}function ad(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ni()&&e.callbackNode!==a)return null;var n=oe;return n=Yl(e,e===ve?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Lf(e,n,t),td(e,At()),e.callbackNode!=null&&e.callbackNode===a?ad.bind(null,e):null)}function nd(e,t){if(Ni())return null;Lf(e,t,!0)}function uh(){yh(function(){(fe&6)!==0?ru(Vr,ih):ed()})}function Io(){return Qa===0&&(Qa=Kr()),Qa}function ld(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:kl(""+e)}function id(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function oh(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var i=ld((l[$e]||null).action),o=n.submitter;o&&(t=(t=o[$e]||null)?ld(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var r=new Wl("action","action",null,n,l);e.push({event:r,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Qa!==0){var m=o?id(l,o):new FormData(l);bo(a,{pending:!0,data:m,method:l.method,action:i},null,m)}}else typeof i=="function"&&(r.preventDefault(),m=o?id(l,o):new FormData(l),bo(a,{pending:!0,data:m,method:l.method,action:i},i,m))},currentTarget:l}]})}}for(var er=0;er<ju.length;er++){var tr=ju[er],rh=tr.toLowerCase(),ch=tr[0].toUpperCase()+tr.slice(1);St(rh,"on"+ch)}St(jc,"onAnimationEnd"),St(Lc,"onAnimationIteration"),St(qc,"onAnimationStart"),St("dblclick","onDoubleClick"),St("focusin","onFocus"),St("focusout","onBlur"),St(Mm,"onTransitionRun"),St(Rm,"onTransitionStart"),St(Dm,"onTransitionCancel"),St(Gc,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),Ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gl));function ud(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var o=n.length-1;0<=o;o--){var r=n[o],m=r.instance,E=r.currentTarget;if(r=r.listener,m!==i&&l.isPropagationStopped())break e;i=r,l.currentTarget=E;try{i(l)}catch(D){Ei(D)}l.currentTarget=null,i=m}else for(o=0;o<n.length;o++){if(r=n[o],m=r.instance,E=r.currentTarget,r=r.listener,m!==i&&l.isPropagationStopped())break e;i=r,l.currentTarget=E;try{i(l)}catch(D){Ei(D)}l.currentTarget=null,i=m}}}}function ue(e,t){var a=t[pu];a===void 0&&(a=t[pu]=new Set);var n=e+"__bubble";a.has(n)||(od(t,e,2,!1),a.add(n))}function ar(e,t,a){var n=0;t&&(n|=4),od(a,e,n,t)}var Bi="_reactListening"+Math.random().toString(36).slice(2);function nr(e){if(!e[Bi]){e[Bi]=!0,Ir.forEach(function(a){a!=="selectionchange"&&(sh.has(a)||ar(a,!1,e),ar(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bi]||(t[Bi]=!0,ar("selectionchange",!1,t))}}function od(e,t,a,n){switch(_d(t)){case 2:var l=jh;break;case 8:l=Lh;break;default:l=gr}a=l.bind(null,t,a,e),l=void 0,!Au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function lr(e,t,a,n,l){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var r=n.stateNode.containerInfo;if(r===l)break;if(o===4)for(o=n.return;o!==null;){var m=o.tag;if((m===3||m===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;r!==null;){if(o=Va(r),o===null)return;if(m=o.tag,m===5||m===6||m===26||m===27){n=i=o;continue e}r=r.parentNode}}n=n.return}pc(function(){var E=i,D=Eu(a),z=[];e:{var T=Yc.get(e);if(T!==void 0){var A=Wl,I=e;switch(e){case"keypress":if(Jl(a)===0)break e;case"keydown":case"keyup":A=lm;break;case"focusin":I="focus",A=Du;break;case"focusout":I="blur",A=Du;break;case"beforeblur":case"afterblur":A=Du;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=om;break;case jc:case Lc:case qc:A=$p;break;case Gc:A=cm;break;case"scroll":case"scrollend":A=Vp;break;case"wheel":A=fm;break;case"copy":case"cut":case"paste":A=Fp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=vc;break;case"toggle":case"beforetoggle":A=pm}var $=(t&4)!==0,he=!$&&(e==="scroll"||e==="scrollend"),b=$?T!==null?T+"Capture":null:T;$=[];for(var g=E,S;g!==null;){var H=g;if(S=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||S===null||b===null||(H=Bn(g,b),H!=null&&$.push(vl(g,H,S))),he)break;g=g.return}0<$.length&&(T=new A(T,I,null,a,D),z.push({event:T,listeners:$}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",T&&a!==Su&&(I=a.relatedTarget||a.fromElement)&&(Va(I)||I[Xa]))break e;if((A||T)&&(T=D.window===D?D:(T=D.ownerDocument)?T.defaultView||T.parentWindow:window,A?(I=a.relatedTarget||a.toElement,A=E,I=I?Va(I):null,I!==null&&(he=h(I),$=I.tag,I!==he||$!==5&&$!==27&&$!==6)&&(I=null)):(A=null,I=E),A!==I)){if($=yc,H="onMouseLeave",b="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&($=vc,H="onPointerLeave",b="onPointerEnter",g="pointer"),he=A==null?T:Un(A),S=I==null?T:Un(I),T=new $(H,g+"leave",A,a,D),T.target=he,T.relatedTarget=S,H=null,Va(D)===E&&($=new $(b,g+"enter",I,a,D),$.target=S,$.relatedTarget=he,H=$),he=H,A&&I)t:{for($=A,b=I,g=0,S=$;S;S=wn(S))g++;for(S=0,H=b;H;H=wn(H))S++;for(;0<g-S;)$=wn($),g--;for(;0<S-g;)b=wn(b),S--;for(;g--;){if($===b||b!==null&&$===b.alternate)break t;$=wn($),b=wn(b)}$=null}else $=null;A!==null&&rd(z,T,A,$,!1),I!==null&&he!==null&&rd(z,he,I,$,!0)}}e:{if(T=E?Un(E):window,A=T.nodeName&&T.nodeName.toLowerCase(),A==="select"||A==="input"&&T.type==="file")var Z=Mc;else if(Ac(T))if(Rc)Z=Tm;else{Z=Sm;var le=xm}else A=T.nodeName,!A||A.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?E&&xu(E.elementType)&&(Z=Mc):Z=Em;if(Z&&(Z=Z(e,E))){wc(z,Z,a,D);break e}le&&le(e,T,E),e==="focusout"&&E&&T.type==="number"&&E.memoizedProps.value!=null&&bu(T,"number",T.value)}switch(le=E?Un(E):window,e){case"focusin":(Ac(le)||le.contentEditable==="true")&&(en=le,zu=E,Vn=null);break;case"focusout":Vn=zu=en=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,Uc(z,a,D);break;case"selectionchange":if(wm)break;case"keydown":case"keyup":Uc(z,a,D)}var K;if(Ou)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else Ia?Ec(e,a)&&(W="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(W="onCompositionStart");W&&(bc&&a.locale!=="ko"&&(Ia||W!=="onCompositionStart"?W==="onCompositionEnd"&&Ia&&(K=mc()):(It=D,wu="value"in It?It.value:It.textContent,Ia=!0)),le=ji(E,W),0<le.length&&(W=new gc(W,e,null,a,D),z.push({event:W,listeners:le}),K?W.data=K:(K=Tc(a),K!==null&&(W.data=K)))),(K=hm?ym(e,a):gm(e,a))&&(W=ji(E,"onBeforeInput"),0<W.length&&(le=new gc("onBeforeInput","beforeinput",null,a,D),z.push({event:le,listeners:W}),le.data=K)),oh(z,e,E,a,D)}ud(z,t)})}function vl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ji(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Bn(e,a),l!=null&&n.unshift(vl(e,l,i)),l=Bn(e,t),l!=null&&n.push(vl(e,l,i))),e.tag===3)return n;e=e.return}return[]}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rd(e,t,a,n,l){for(var i=t._reactName,o=[];a!==null&&a!==n;){var r=a,m=r.alternate,E=r.stateNode;if(r=r.tag,m!==null&&m===n)break;r!==5&&r!==26&&r!==27||E===null||(m=E,l?(E=Bn(a,i),E!=null&&o.unshift(vl(a,E,m))):l||(E=Bn(a,i),E!=null&&o.push(vl(a,E,m)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var fh=/\r\n?/g,dh=/\u0000|\uFFFD/g;function cd(e){return(typeof e=="string"?e:""+e).replace(fh,`
`).replace(dh,"")}function sd(e,t){return t=cd(t),cd(e)===t}function Li(){}function me(e,t,a,n,l,i){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Wa(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Wa(e,""+n);break;case"className":Xl(e,"class",n);break;case"tabIndex":Xl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Xl(e,a,n);break;case"style":fc(e,n,i);break;case"data":if(t!=="object"){Xl(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=kl(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&me(e,t,"name",l.name,l,null),me(e,t,"formEncType",l.formEncType,l,null),me(e,t,"formMethod",l.formMethod,l,null),me(e,t,"formTarget",l.formTarget,l,null)):(me(e,t,"encType",l.encType,l,null),me(e,t,"method",l.method,l,null),me(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=kl(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Li);break;case"onScroll":n!=null&&ue("scroll",e);break;case"onScrollEnd":n!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=kl(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ue("beforetoggle",e),ue("toggle",e),Ql(e,"popover",n);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ql(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Qp.get(a)||a,Ql(e,a,n))}}function ir(e,t,a,n,l,i){switch(a){case"style":fc(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Wa(e,n):(typeof n=="number"||typeof n=="bigint")&&Wa(e,""+n);break;case"onScroll":n!=null&&ue("scroll",e);break;case"onScrollEnd":n!=null&&ue("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Li);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ec.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),i=e[$e]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Ql(e,a,n)}}}function Ye(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var n=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var o=a[i];if(o!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:me(e,t,i,o,a,null)}}l&&me(e,t,"srcSet",a.srcSet,a,null),n&&me(e,t,"src",a.src,a,null);return;case"input":ue("invalid",e);var r=i=o=l=null,m=null,E=null;for(n in a)if(a.hasOwnProperty(n)){var D=a[n];if(D!=null)switch(n){case"name":l=D;break;case"type":o=D;break;case"checked":m=D;break;case"defaultChecked":E=D;break;case"value":i=D;break;case"defaultValue":r=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:me(e,t,n,D,a,null)}}oc(e,i,r,m,E,o,l,!1),Vl(e);return;case"select":ue("invalid",e),n=o=i=null;for(l in a)if(a.hasOwnProperty(l)&&(r=a[l],r!=null))switch(l){case"value":i=r;break;case"defaultValue":o=r;break;case"multiple":n=r;default:me(e,t,l,r,a,null)}t=i,a=o,e.multiple=!!n,t!=null?$a(e,!!n,t,!1):a!=null&&$a(e,!!n,a,!0);return;case"textarea":ue("invalid",e),i=l=n=null;for(o in a)if(a.hasOwnProperty(o)&&(r=a[o],r!=null))switch(o){case"value":n=r;break;case"defaultValue":l=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:me(e,t,o,r,a,null)}cc(e,n,l,i),Vl(e);return;case"option":for(m in a)if(a.hasOwnProperty(m)&&(n=a[m],n!=null))switch(m){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:me(e,t,m,n,a,null)}return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(n=0;n<gl.length;n++)ue(gl[n],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(n=a[E],n!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:me(e,t,E,n,a,null)}return;default:if(xu(t)){for(D in a)a.hasOwnProperty(D)&&(n=a[D],n!==void 0&&ir(e,t,D,n,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(n=a[r],n!=null&&me(e,t,r,n,a,null))}function ph(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,r=null,m=null,E=null,D=null;for(A in a){var z=a[A];if(a.hasOwnProperty(A)&&z!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":m=z;default:n.hasOwnProperty(A)||me(e,t,A,null,n,z)}}for(var T in n){var A=n[T];if(z=a[T],n.hasOwnProperty(T)&&(A!=null||z!=null))switch(T){case"type":i=A;break;case"name":l=A;break;case"checked":E=A;break;case"defaultChecked":D=A;break;case"value":o=A;break;case"defaultValue":r=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:A!==z&&me(e,t,T,A,n,z)}}vu(e,o,r,m,E,D,i,l);return;case"select":A=o=r=T=null;for(i in a)if(m=a[i],a.hasOwnProperty(i)&&m!=null)switch(i){case"value":break;case"multiple":A=m;default:n.hasOwnProperty(i)||me(e,t,i,null,n,m)}for(l in n)if(i=n[l],m=a[l],n.hasOwnProperty(l)&&(i!=null||m!=null))switch(l){case"value":T=i;break;case"defaultValue":r=i;break;case"multiple":o=i;default:i!==m&&me(e,t,l,i,n,m)}t=r,a=o,n=A,T!=null?$a(e,!!a,T,!1):!!n!=!!a&&(t!=null?$a(e,!!a,t,!0):$a(e,!!a,a?[]:"",!1));return;case"textarea":A=T=null;for(r in a)if(l=a[r],a.hasOwnProperty(r)&&l!=null&&!n.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:me(e,t,r,null,n,l)}for(o in n)if(l=n[o],i=a[o],n.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":T=l;break;case"defaultValue":A=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==i&&me(e,t,o,l,n,i)}rc(e,T,A);return;case"option":for(var I in a)if(T=a[I],a.hasOwnProperty(I)&&T!=null&&!n.hasOwnProperty(I))switch(I){case"selected":e.selected=!1;break;default:me(e,t,I,null,n,T)}for(m in n)if(T=n[m],A=a[m],n.hasOwnProperty(m)&&T!==A&&(T!=null||A!=null))switch(m){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:me(e,t,m,T,n,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in a)T=a[$],a.hasOwnProperty($)&&T!=null&&!n.hasOwnProperty($)&&me(e,t,$,null,n,T);for(E in n)if(T=n[E],A=a[E],n.hasOwnProperty(E)&&T!==A&&(T!=null||A!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:me(e,t,E,T,n,A)}return;default:if(xu(t)){for(var he in a)T=a[he],a.hasOwnProperty(he)&&T!==void 0&&!n.hasOwnProperty(he)&&ir(e,t,he,void 0,n,T);for(D in n)T=n[D],A=a[D],!n.hasOwnProperty(D)||T===A||T===void 0&&A===void 0||ir(e,t,D,T,n,A);return}}for(var b in a)T=a[b],a.hasOwnProperty(b)&&T!=null&&!n.hasOwnProperty(b)&&me(e,t,b,null,n,T);for(z in n)T=n[z],A=a[z],!n.hasOwnProperty(z)||T===A||T==null&&A==null||me(e,t,z,T,n,A)}var ur=null,or=null;function qi(e){return e.nodeType===9?e:e.ownerDocument}function fd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function rr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cr=null;function mh(){var e=window.event;return e&&e.type==="popstate"?e===cr?!1:(cr=e,!0):(cr=null,!1)}var pd=typeof setTimeout=="function"?setTimeout:void 0,hh=typeof clearTimeout=="function"?clearTimeout:void 0,md=typeof Promise=="function"?Promise:void 0,yh=typeof queueMicrotask=="function"?queueMicrotask:typeof md<"u"?function(e){return md.resolve(null).then(e).catch(gh)}:pd;function gh(e){setTimeout(function(){throw e})}function ha(e){return e==="head"}function hd(e,t){var a=t,n=0,l=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<n&&8>n){a=n;var o=e.ownerDocument;if(a&1&&bl(o.documentElement),a&2&&bl(o.body),a&4)for(a=o.head,bl(a),o=a.firstChild;o;){var r=o.nextSibling,m=o.nodeName;o[zn]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=r}}if(l===0){e.removeChild(i),Rl(t);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:n=a.charCodeAt(0)-48;else n=0;a=i}while(a);Rl(t)}function sr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sr(a),mu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function vh(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[zn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Tt(e.nextSibling),e===null)break}return null}function bh(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Tt(e.nextSibling),e===null))return null;return e}function fr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function xh(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var dr=null;function yd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function gd(e,t,a){switch(t=qi(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function bl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);mu(e)}var xt=new Map,vd=new Set;function Gi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kt=Q.d;Q.d={f:Sh,r:Eh,D:Th,C:Ah,L:wh,m:Mh,X:Dh,S:Rh,M:Ch};function Sh(){var e=Kt.f(),t=_i();return e||t}function Eh(e){var t=Za(e);t!==null&&t.tag===5&&t.type==="form"?js(t):Kt.r(e)}var Mn=typeof document>"u"?null:document;function bd(e,t,a){var n=Mn;if(n&&typeof t=="string"&&t){var l=pt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),vd.has(l)||(vd.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),Ye(t,"link",e),Ue(t),n.head.appendChild(t)))}}function Th(e){Kt.D(e),bd("dns-prefetch",e,null)}function Ah(e,t){Kt.C(e,t),bd("preconnect",e,t)}function wh(e,t,a){Kt.L(e,t,a);var n=Mn;if(n&&e&&t){var l='link[rel="preload"][as="'+pt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+pt(a.imageSizes)+'"]')):l+='[href="'+pt(e)+'"]';var i=l;switch(t){case"style":i=Rn(e);break;case"script":i=Dn(e)}xt.has(i)||(e=w({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),xt.set(i,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(xl(i))||t==="script"&&n.querySelector(Sl(i))||(t=n.createElement("link"),Ye(t,"link",e),Ue(t),n.head.appendChild(t)))}}function Mh(e,t){Kt.m(e,t);var a=Mn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+pt(n)+'"][href="'+pt(e)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Dn(e)}if(!xt.has(i)&&(e=w({rel:"modulepreload",href:e},t),xt.set(i,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sl(i)))return}n=a.createElement("link"),Ye(n,"link",e),Ue(n),a.head.appendChild(n)}}}function Rh(e,t,a){Kt.S(e,t,a);var n=Mn;if(n&&e){var l=ka(n).hoistableStyles,i=Rn(e);t=t||"default";var o=l.get(i);if(!o){var r={loading:0,preload:null};if(o=n.querySelector(xl(i)))r.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},a),(a=xt.get(i))&&pr(e,a);var m=o=n.createElement("link");Ue(m),Ye(m,"link",e),m._p=new Promise(function(E,D){m.onload=E,m.onerror=D}),m.addEventListener("load",function(){r.loading|=1}),m.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Yi(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:r},l.set(i,o)}}}function Dh(e,t){Kt.X(e,t);var a=Mn;if(a&&e){var n=ka(a).hoistableScripts,l=Dn(e),i=n.get(l);i||(i=a.querySelector(Sl(l)),i||(e=w({src:e,async:!0},t),(t=xt.get(l))&&mr(e,t),i=a.createElement("script"),Ue(i),Ye(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Ch(e,t){Kt.M(e,t);var a=Mn;if(a&&e){var n=ka(a).hoistableScripts,l=Dn(e),i=n.get(l);i||(i=a.querySelector(Sl(l)),i||(e=w({src:e,async:!0,type:"module"},t),(t=xt.get(l))&&mr(e,t),i=a.createElement("script"),Ue(i),Ye(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function xd(e,t,a,n){var l=(l=ee.current)?Gi(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Rn(a.href),a=ka(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Rn(a.href);var i=ka(l).hoistableStyles,o=i.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=l.querySelector(xl(e)))&&!i._p&&(o.instance=i,o.state.loading=5),xt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xt.set(e,a),i||Oh(l,e,a,o.state))),t&&n===null)throw Error(c(528,""));return o}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Dn(a),a=ka(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Rn(e){return'href="'+pt(e)+'"'}function xl(e){return'link[rel="stylesheet"]['+e+"]"}function Sd(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Oh(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ye(t,"link",a),Ue(t),e.head.appendChild(t))}function Dn(e){return'[src="'+pt(e)+'"]'}function Sl(e){return"script[async]"+e}function Ed(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+pt(a.href)+'"]');if(n)return t.instance=n,Ue(n),n;var l=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ue(n),Ye(n,"style",l),Yi(n,a.precedence,e),t.instance=n;case"stylesheet":l=Rn(a.href);var i=e.querySelector(xl(l));if(i)return t.state.loading|=4,t.instance=i,Ue(i),i;n=Sd(a),(l=xt.get(l))&&pr(n,l),i=(e.ownerDocument||e).createElement("link"),Ue(i);var o=i;return o._p=new Promise(function(r,m){o.onload=r,o.onerror=m}),Ye(i,"link",n),t.state.loading|=4,Yi(i,a.precedence,e),t.instance=i;case"script":return i=Dn(a.src),(l=e.querySelector(Sl(i)))?(t.instance=l,Ue(l),l):(n=a,(l=xt.get(i))&&(n=w({},a),mr(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ue(l),Ye(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Yi(n,a.precedence,e));return t.instance}function Yi(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,o=0;o<n.length;o++){var r=n[o];if(r.dataset.precedence===t)i=r;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function pr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function mr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Qi=null;function Td(e,t,a){if(Qi===null){var n=new Map,l=Qi=new Map;l.set(a,n)}else l=Qi,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var i=a[l];if(!(i[zn]||i[Ve]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var r=n.get(o);r?r.push(i):n.set(o,[i])}}return n}function Ad(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function _h(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function wd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var El=null;function Hh(){}function Nh(e,t,a){if(El===null)throw Error(c(475));var n=El;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Rn(a.href),i=e.querySelector(xl(l));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Xi.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=i,Ue(i);return}i=e.ownerDocument||e,a=Sd(a),(l=xt.get(l))&&pr(a,l),i=i.createElement("link"),Ue(i);var o=i;o._p=new Promise(function(r,m){o.onload=r,o.onerror=m}),Ye(i,"link",a),t.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Xi.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function zh(){if(El===null)throw Error(c(475));var e=El;return e.stylesheets&&e.count===0&&hr(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&hr(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Xi(){if(this.count--,this.count===0){if(this.stylesheets)hr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vi=null;function hr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vi=new Map,t.forEach(Uh,e),Vi=null,Xi.call(e))}function Uh(e,t){if(!(t.state.loading&4)){var a=Vi.get(e);if(a)var n=a.get(null);else{a=new Map,Vi.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}l=t.instance,o=l.getAttribute("data-precedence"),i=a.get(o)||n,i===n&&a.set(null,l),a.set(o,l),this.count++,n=Xi.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Tl={$$typeof:k,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Bh(e,t,a,n,l,i,o,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=su(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.hiddenUpdates=su(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Md(e,t,a,n,l,i,o,r,m,E,D,z){return e=new Bh(e,t,a,o,r,m,E,z),t=1,i===!0&&(t|=24),i=lt(3,null,null,t),e.current=i,i.stateNode=e,t=$u(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:t},Iu(i),e}function Rd(e){return e?(e=ln,e):ln}function Dd(e,t,a,n,l,i){l=Rd(l),n.context===null?n.context=l:n.pendingContext=l,n=aa(t),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=na(e,n,t),a!==null&&(ct(a,e,t),In(a,e,t))}function Cd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function yr(e,t){Cd(e,t),(e=e.alternate)&&Cd(e,t)}function Od(e){if(e.tag===13){var t=nn(e,67108864);t!==null&&ct(t,e,67108864),yr(e,67108864)}}var Zi=!0;function jh(e,t,a,n){var l=C.T;C.T=null;var i=Q.p;try{Q.p=2,gr(e,t,a,n)}finally{Q.p=i,C.T=l}}function Lh(e,t,a,n){var l=C.T;C.T=null;var i=Q.p;try{Q.p=8,gr(e,t,a,n)}finally{Q.p=i,C.T=l}}function gr(e,t,a,n){if(Zi){var l=vr(n);if(l===null)lr(e,t,n,ki,a),Hd(e,n);else if(Gh(l,e,t,a,n))n.stopPropagation();else if(Hd(e,n),t&4&&-1<qh.indexOf(e)){for(;l!==null;){var i=Za(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=wa(i.pendingLanes);if(o!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;o;){var m=1<<31-at(o);r.entanglements[1]|=m,o&=~m}Ct(i),(fe&6)===0&&(Ci=At()+500,yl(0))}}break;case 13:r=nn(i,2),r!==null&&ct(r,i,2),_i(),yr(i,2)}if(i=vr(n),i===null&&lr(e,t,n,ki,a),i===l)break;l=i}l!==null&&n.stopPropagation()}else lr(e,t,n,null,a)}}function vr(e){return e=Eu(e),br(e)}var ki=null;function br(e){if(ki=null,e=Va(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=x(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ki=e,null}function _d(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ap()){case Vr:return 2;case Zr:return 8;case Ll:case wp:return 32;case kr:return 268435456;default:return 32}default:return 32}}var xr=!1,ya=null,ga=null,va=null,Al=new Map,wl=new Map,ba=[],qh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hd(e,t){switch(e){case"focusin":case"focusout":ya=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":Al.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(t.pointerId)}}function Ml(e,t,a,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Za(t),t!==null&&Od(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Gh(e,t,a,n,l){switch(t){case"focusin":return ya=Ml(ya,e,t,a,n,l),!0;case"dragenter":return ga=Ml(ga,e,t,a,n,l),!0;case"mouseover":return va=Ml(va,e,t,a,n,l),!0;case"pointerover":var i=l.pointerId;return Al.set(i,Ml(Al.get(i)||null,e,t,a,n,l)),!0;case"gotpointercapture":return i=l.pointerId,wl.set(i,Ml(wl.get(i)||null,e,t,a,n,l)),!0}return!1}function Nd(e){var t=Va(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=x(a),t!==null){e.blockedOn=t,Np(e.priority,function(){if(a.tag===13){var n=rt();n=fu(n);var l=nn(a,n);l!==null&&ct(l,a,n),yr(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=vr(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Su=n,a.target.dispatchEvent(n),Su=null}else return t=Za(a),t!==null&&Od(t),e.blockedOn=a,!1;t.shift()}return!0}function zd(e,t,a){Ki(e)&&a.delete(t)}function Yh(){xr=!1,ya!==null&&Ki(ya)&&(ya=null),ga!==null&&Ki(ga)&&(ga=null),va!==null&&Ki(va)&&(va=null),Al.forEach(zd),wl.forEach(zd)}function Ji(e,t){e.blockedOn===t&&(e.blockedOn=null,xr||(xr=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Yh)))}var $i=null;function Ud(e){$i!==e&&($i=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){$i===e&&($i=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(br(n||a)===null)continue;break}var i=Za(a);i!==null&&(e.splice(t,3),t-=3,bo(i,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function Rl(e){function t(m){return Ji(m,e)}ya!==null&&Ji(ya,e),ga!==null&&Ji(ga,e),va!==null&&Ji(va,e),Al.forEach(t),wl.forEach(t);for(var a=0;a<ba.length;a++){var n=ba[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ba.length&&(a=ba[0],a.blockedOn===null);)Nd(a),a.blockedOn===null&&ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],i=a[n+1],o=l[$e]||null;if(typeof i=="function")o||Ud(a);else if(o){var r=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[$e]||null)r=o.formAction;else if(br(l)!==null)continue}else r=o.action;typeof r=="function"?a[n+1]=r:(a.splice(n,3),n-=3),Ud(a)}}}function Sr(e){this._internalRoot=e}Wi.prototype.render=Sr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=rt();Dd(a,n,e,t,null,null)},Wi.prototype.unmount=Sr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dd(e.current,2,null,e,null,null),_i(),t[Xa]=null}};function Wi(e){this._internalRoot=e}Wi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fr();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ba.length&&t!==0&&t<ba[a].priority;a++);ba.splice(a,0,e),a===0&&Nd(e)}};var Bd=s.version;if(Bd!=="19.1.0")throw Error(c(527,Bd,"19.1.0"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Qh={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{_n=Fi.inject(Qh),tt=Fi}catch{}}return Cl.createRoot=function(e,t){if(!d(e))throw Error(c(299));var a=!1,n="",l=Fs,i=Ps,o=Is,r=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(r=t.unstable_transitionCallbacks)),t=Md(e,1,!1,null,null,a,n,l,i,o,r,null),e[Xa]=t.current,nr(e),new Sr(t)},Cl.hydrateRoot=function(e,t,a){if(!d(e))throw Error(c(299));var n=!1,l="",i=Fs,o=Ps,r=Is,m=null,E=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(m=a.unstable_transitionCallbacks),a.formState!==void 0&&(E=a.formState)),t=Md(e,1,!0,t,a??null,n,l,i,o,r,m,E),t.context=Rd(null),a=t.current,n=rt(),n=fu(n),l=aa(n),l.callback=null,na(a,l,n),a=n,t.current.lanes=a,Nn(t,a),Ct(t),e[Xa]=t.current,nr(e),new Wi(t)},Cl.version="19.1.0",Cl}var Kd;function Ih(){if(Kd)return Ar.exports;Kd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(s){console.error(s)}}return u(),Ar.exports=Ph(),Ar.exports}var ey=Ih(),Ol={},Jd;function ty(){if(Jd)return Ol;Jd=1,Object.defineProperty(Ol,"__esModule",{value:!0}),Ol.parse=x,Ol.serialize=p;const u=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,s=/^[\u0021-\u003A\u003C-\u007E]*$/,f=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,c=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,h=(()=>{const O=function(){};return O.prototype=Object.create(null),O})();function x(O,G){const _=new h,B=O.length;if(B<2)return _;const X=(G==null?void 0:G.decode)||w;let q=0;do{const L=O.indexOf("=",q);if(L===-1)break;const k=O.indexOf(";",q),te=k===-1?B:k;if(L>te){q=O.lastIndexOf(";",L-1)+1;continue}const F=R(O,q,L),Oe=v(O,L,F),Ae=O.slice(F,Oe);if(_[Ae]===void 0){let Re=R(O,L+1,te),be=v(O,te,Re);const Ke=X(O.slice(Re,be));_[Ae]=Ke}q=te+1}while(q<B);return _}function R(O,G,_){do{const B=O.charCodeAt(G);if(B!==32&&B!==9)return G}while(++G<_);return _}function v(O,G,_){for(;G>_;){const B=O.charCodeAt(--G);if(B!==32&&B!==9)return G+1}return _}function p(O,G,_){const B=(_==null?void 0:_.encode)||encodeURIComponent;if(!u.test(O))throw new TypeError(`argument name is invalid: ${O}`);const X=B(G);if(!s.test(X))throw new TypeError(`argument val is invalid: ${G}`);let q=O+"="+X;if(!_)return q;if(_.maxAge!==void 0){if(!Number.isInteger(_.maxAge))throw new TypeError(`option maxAge is invalid: ${_.maxAge}`);q+="; Max-Age="+_.maxAge}if(_.domain){if(!f.test(_.domain))throw new TypeError(`option domain is invalid: ${_.domain}`);q+="; Domain="+_.domain}if(_.path){if(!c.test(_.path))throw new TypeError(`option path is invalid: ${_.path}`);q+="; Path="+_.path}if(_.expires){if(!j(_.expires)||!Number.isFinite(_.expires.valueOf()))throw new TypeError(`option expires is invalid: ${_.expires}`);q+="; Expires="+_.expires.toUTCString()}if(_.httpOnly&&(q+="; HttpOnly"),_.secure&&(q+="; Secure"),_.partitioned&&(q+="; Partitioned"),_.priority)switch(typeof _.priority=="string"?_.priority.toLowerCase():void 0){case"low":q+="; Priority=Low";break;case"medium":q+="; Priority=Medium";break;case"high":q+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${_.priority}`)}if(_.sameSite)switch(typeof _.sameSite=="string"?_.sameSite.toLowerCase():_.sameSite){case!0:case"strict":q+="; SameSite=Strict";break;case"lax":q+="; SameSite=Lax";break;case"none":q+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${_.sameSite}`)}return q}function w(O){if(O.indexOf("%")===-1)return O;try{return decodeURIComponent(O)}catch{return O}}function j(O){return d.call(O)==="[object Date]"}return Ol}ty();var $d="popstate";function ay(u={}){function s(c,d){let{pathname:h,search:x,hash:R}=c.location;return Or("",{pathname:h,search:x,hash:R},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function f(c,d){return typeof d=="string"?d:Nl(d)}return ly(s,f,null,u)}function Te(u,s){if(u===!1||u===null||typeof u>"u")throw new Error(s)}function Ot(u,s){if(!u){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function ny(){return Math.random().toString(36).substring(2,10)}function Wd(u,s){return{usr:u.state,key:u.key,idx:s}}function Or(u,s,f=null,c){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof s=="string"?Cn(s):s,state:f,key:s&&s.key||c||ny()}}function Nl({pathname:u="/",search:s="",hash:f=""}){return s&&s!=="?"&&(u+=s.charAt(0)==="?"?s:"?"+s),f&&f!=="#"&&(u+=f.charAt(0)==="#"?f:"#"+f),u}function Cn(u){let s={};if(u){let f=u.indexOf("#");f>=0&&(s.hash=u.substring(f),u=u.substring(0,f));let c=u.indexOf("?");c>=0&&(s.search=u.substring(c),u=u.substring(0,c)),u&&(s.pathname=u)}return s}function ly(u,s,f,c={}){let{window:d=document.defaultView,v5Compat:h=!1}=c,x=d.history,R="POP",v=null,p=w();p==null&&(p=0,x.replaceState({...x.state,idx:p},""));function w(){return(x.state||{idx:null}).idx}function j(){R="POP";let X=w(),q=X==null?null:X-p;p=X,v&&v({action:R,location:B.location,delta:q})}function O(X,q){R="PUSH";let L=Or(B.location,X,q);p=w()+1;let k=Wd(L,p),te=B.createHref(L);try{x.pushState(k,"",te)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;d.location.assign(te)}h&&v&&v({action:R,location:B.location,delta:1})}function G(X,q){R="REPLACE";let L=Or(B.location,X,q);p=w();let k=Wd(L,p),te=B.createHref(L);x.replaceState(k,"",te),h&&v&&v({action:R,location:B.location,delta:0})}function _(X){return iy(X)}let B={get action(){return R},get location(){return u(d,x)},listen(X){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener($d,j),v=X,()=>{d.removeEventListener($d,j),v=null}},createHref(X){return s(d,X)},createURL:_,encodeLocation(X){let q=_(X);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:O,replace:G,go(X){return x.go(X)}};return B}function iy(u,s=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Te(f,"No window.location.(origin|href) available to create URL");let c=typeof u=="string"?u:Nl(u);return c=c.replace(/ $/,"%20"),!s&&c.startsWith("//")&&(c=f+c),new URL(c,f)}function np(u,s,f="/"){return uy(u,s,f,!1)}function uy(u,s,f,c){let d=typeof s=="string"?Cn(s):s,h=$t(d.pathname||"/",f);if(h==null)return null;let x=lp(u);oy(x);let R=null;for(let v=0;R==null&&v<x.length;++v){let p=vy(h);R=yy(x[v],p,c)}return R}function lp(u,s=[],f=[],c=""){let d=(h,x,R)=>{let v={relativePath:R===void 0?h.path||"":R,caseSensitive:h.caseSensitive===!0,childrenIndex:x,route:h};v.relativePath.startsWith("/")&&(Te(v.relativePath.startsWith(c),`Absolute route path "${v.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(c.length));let p=Jt([c,v.relativePath]),w=f.concat(v);h.children&&h.children.length>0&&(Te(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),lp(h.children,s,w,p)),!(h.path==null&&!h.index)&&s.push({path:p,score:my(p,h.index),routesMeta:w})};return u.forEach((h,x)=>{var R;if(h.path===""||!((R=h.path)!=null&&R.includes("?")))d(h,x);else for(let v of ip(h.path))d(h,x,v)}),s}function ip(u){let s=u.split("/");if(s.length===0)return[];let[f,...c]=s,d=f.endsWith("?"),h=f.replace(/\?$/,"");if(c.length===0)return d?[h,""]:[h];let x=ip(c.join("/")),R=[];return R.push(...x.map(v=>v===""?h:[h,v].join("/"))),d&&R.push(...x),R.map(v=>u.startsWith("/")&&v===""?"/":v)}function oy(u){u.sort((s,f)=>s.score!==f.score?f.score-s.score:hy(s.routesMeta.map(c=>c.childrenIndex),f.routesMeta.map(c=>c.childrenIndex)))}var ry=/^:[\w-]+$/,cy=3,sy=2,fy=1,dy=10,py=-2,Fd=u=>u==="*";function my(u,s){let f=u.split("/"),c=f.length;return f.some(Fd)&&(c+=py),s&&(c+=sy),f.filter(d=>!Fd(d)).reduce((d,h)=>d+(ry.test(h)?cy:h===""?fy:dy),c)}function hy(u,s){return u.length===s.length&&u.slice(0,-1).every((c,d)=>c===s[d])?u[u.length-1]-s[s.length-1]:0}function yy(u,s,f=!1){let{routesMeta:c}=u,d={},h="/",x=[];for(let R=0;R<c.length;++R){let v=c[R],p=R===c.length-1,w=h==="/"?s:s.slice(h.length)||"/",j=au({path:v.relativePath,caseSensitive:v.caseSensitive,end:p},w),O=v.route;if(!j&&p&&f&&!c[c.length-1].route.index&&(j=au({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},w)),!j)return null;Object.assign(d,j.params),x.push({params:d,pathname:Jt([h,j.pathname]),pathnameBase:Ey(Jt([h,j.pathnameBase])),route:O}),j.pathnameBase!=="/"&&(h=Jt([h,j.pathnameBase]))}return x}function au(u,s){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[f,c]=gy(u.path,u.caseSensitive,u.end),d=s.match(f);if(!d)return null;let h=d[0],x=h.replace(/(.)\/+$/,"$1"),R=d.slice(1);return{params:c.reduce((p,{paramName:w,isOptional:j},O)=>{if(w==="*"){let _=R[O]||"";x=h.slice(0,h.length-_.length).replace(/(.)\/+$/,"$1")}const G=R[O];return j&&!G?p[w]=void 0:p[w]=(G||"").replace(/%2F/g,"/"),p},{}),pathname:h,pathnameBase:x,pattern:u}}function gy(u,s=!1,f=!0){Ot(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let c=[],d="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,R,v)=>(c.push({paramName:R,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return u.endsWith("*")?(c.push({paramName:"*"}),d+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?d+="\\/*$":u!==""&&u!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),c]}function vy(u){try{return u.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Ot(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),u}}function $t(u,s){if(s==="/")return u;if(!u.toLowerCase().startsWith(s.toLowerCase()))return null;let f=s.endsWith("/")?s.length-1:s.length,c=u.charAt(f);return c&&c!=="/"?null:u.slice(f)||"/"}function by(u,s="/"){let{pathname:f,search:c="",hash:d=""}=typeof u=="string"?Cn(u):u;return{pathname:f?f.startsWith("/")?f:xy(f,s):s,search:Ty(c),hash:Ay(d)}}function xy(u,s){let f=s.replace(/\/+$/,"").split("/");return u.split("/").forEach(d=>{d===".."?f.length>1&&f.pop():d!=="."&&f.push(d)}),f.length>1?f.join("/"):"/"}function Dr(u,s,f,c){return`Cannot include a '${u}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Sy(u){return u.filter((s,f)=>f===0||s.route.path&&s.route.path.length>0)}function up(u){let s=Sy(u);return s.map((f,c)=>c===s.length-1?f.pathname:f.pathnameBase)}function op(u,s,f,c=!1){let d;typeof u=="string"?d=Cn(u):(d={...u},Te(!d.pathname||!d.pathname.includes("?"),Dr("?","pathname","search",d)),Te(!d.pathname||!d.pathname.includes("#"),Dr("#","pathname","hash",d)),Te(!d.search||!d.search.includes("#"),Dr("#","search","hash",d)));let h=u===""||d.pathname==="",x=h?"/":d.pathname,R;if(x==null)R=f;else{let j=s.length-1;if(!c&&x.startsWith("..")){let O=x.split("/");for(;O[0]==="..";)O.shift(),j-=1;d.pathname=O.join("/")}R=j>=0?s[j]:"/"}let v=by(d,R),p=x&&x!=="/"&&x.endsWith("/"),w=(h||x===".")&&f.endsWith("/");return!v.pathname.endsWith("/")&&(p||w)&&(v.pathname+="/"),v}var Jt=u=>u.join("/").replace(/\/\/+/g,"/"),Ey=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),Ty=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,Ay=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u;function wy(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}var rp=["POST","PUT","PATCH","DELETE"];new Set(rp);var My=["GET",...rp];new Set(My);var On=N.createContext(null);On.displayName="DataRouter";var nu=N.createContext(null);nu.displayName="DataRouterState";var cp=N.createContext({isTransitioning:!1});cp.displayName="ViewTransition";var Ry=N.createContext(new Map);Ry.displayName="Fetchers";var Dy=N.createContext(null);Dy.displayName="Await";var _t=N.createContext(null);_t.displayName="Navigation";var zl=N.createContext(null);zl.displayName="Location";var Ht=N.createContext({outlet:null,matches:[],isDataRoute:!1});Ht.displayName="Route";var zr=N.createContext(null);zr.displayName="RouteError";function Cy(u,{relative:s}={}){Te(Ul(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:c}=N.useContext(_t),{hash:d,pathname:h,search:x}=Bl(u,{relative:s}),R=h;return f!=="/"&&(R=h==="/"?f:Jt([f,h])),c.createHref({pathname:R,search:x,hash:d})}function Ul(){return N.useContext(zl)!=null}function Ea(){return Te(Ul(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(zl).location}var sp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function fp(u){N.useContext(_t).static||N.useLayoutEffect(u)}function Ur(){let{isDataRoute:u}=N.useContext(Ht);return u?Xy():Oy()}function Oy(){Te(Ul(),"useNavigate() may be used only in the context of a <Router> component.");let u=N.useContext(On),{basename:s,navigator:f}=N.useContext(_t),{matches:c}=N.useContext(Ht),{pathname:d}=Ea(),h=JSON.stringify(up(c)),x=N.useRef(!1);return fp(()=>{x.current=!0}),N.useCallback((v,p={})=>{if(Ot(x.current,sp),!x.current)return;if(typeof v=="number"){f.go(v);return}let w=op(v,JSON.parse(h),d,p.relative==="path");u==null&&s!=="/"&&(w.pathname=w.pathname==="/"?s:Jt([s,w.pathname])),(p.replace?f.replace:f.push)(w,p.state,p)},[s,f,h,d,u])}N.createContext(null);function _y(){let{matches:u}=N.useContext(Ht),s=u[u.length-1];return s?s.params:{}}function Bl(u,{relative:s}={}){let{matches:f}=N.useContext(Ht),{pathname:c}=Ea(),d=JSON.stringify(up(f));return N.useMemo(()=>op(u,JSON.parse(d),c,s==="path"),[u,d,c,s])}function Hy(u,s){return dp(u,s)}function dp(u,s,f,c){var q;Te(Ul(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=N.useContext(_t),{matches:h}=N.useContext(Ht),x=h[h.length-1],R=x?x.params:{},v=x?x.pathname:"/",p=x?x.pathnameBase:"/",w=x&&x.route;{let L=w&&w.path||"";pp(v,!w||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let j=Ea(),O;if(s){let L=typeof s=="string"?Cn(s):s;Te(p==="/"||((q=L.pathname)==null?void 0:q.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${L.pathname}" was given in the \`location\` prop.`),O=L}else O=j;let G=O.pathname||"/",_=G;if(p!=="/"){let L=p.replace(/^\//,"").split("/");_="/"+G.replace(/^\//,"").split("/").slice(L.length).join("/")}let B=np(u,{pathname:_});Ot(w||B!=null,`No routes matched location "${O.pathname}${O.search}${O.hash}" `),Ot(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=jy(B&&B.map(L=>Object.assign({},L,{params:Object.assign({},R,L.params),pathname:Jt([p,d.encodeLocation?d.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?p:Jt([p,d.encodeLocation?d.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),h,f,c);return s&&X?N.createElement(zl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...O},navigationType:"POP"}},X):X}function Ny(){let u=Qy(),s=wy(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),f=u instanceof Error?u.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},h={padding:"2px 4px",backgroundColor:c},x=null;return console.error("Error handled by React Router default ErrorBoundary:",u),x=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:h},"ErrorBoundary")," or"," ",N.createElement("code",{style:h},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},s),f?N.createElement("pre",{style:d},f):null,x)}var zy=N.createElement(Ny,null),Uy=class extends N.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,s){return s.location!==u.location||s.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:s.error,location:s.location,revalidation:u.revalidation||s.revalidation}}componentDidCatch(u,s){console.error("React Router caught the following error during render",u,s)}render(){return this.state.error!==void 0?N.createElement(Ht.Provider,{value:this.props.routeContext},N.createElement(zr.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function By({routeContext:u,match:s,children:f}){let c=N.useContext(On);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),N.createElement(Ht.Provider,{value:u},f)}function jy(u,s=[],f=null,c=null){if(u==null){if(!f)return null;if(f.errors)u=f.matches;else if(s.length===0&&!f.initialized&&f.matches.length>0)u=f.matches;else return null}let d=u,h=f==null?void 0:f.errors;if(h!=null){let v=d.findIndex(p=>p.route.id&&(h==null?void 0:h[p.route.id])!==void 0);Te(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let x=!1,R=-1;if(f)for(let v=0;v<d.length;v++){let p=d[v];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(R=v),p.route.id){let{loaderData:w,errors:j}=f,O=p.route.loader&&!w.hasOwnProperty(p.route.id)&&(!j||j[p.route.id]===void 0);if(p.route.lazy||O){x=!0,R>=0?d=d.slice(0,R+1):d=[d[0]];break}}}return d.reduceRight((v,p,w)=>{let j,O=!1,G=null,_=null;f&&(j=h&&p.route.id?h[p.route.id]:void 0,G=p.route.errorElement||zy,x&&(R<0&&w===0?(pp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),O=!0,_=null):R===w&&(O=!0,_=p.route.hydrateFallbackElement||null)));let B=s.concat(d.slice(0,w+1)),X=()=>{let q;return j?q=G:O?q=_:p.route.Component?q=N.createElement(p.route.Component,null):p.route.element?q=p.route.element:q=v,N.createElement(By,{match:p,routeContext:{outlet:v,matches:B,isDataRoute:f!=null},children:q})};return f&&(p.route.ErrorBoundary||p.route.errorElement||w===0)?N.createElement(Uy,{location:f.location,revalidation:f.revalidation,component:G,error:j,children:X(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):X()},null)}function Br(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ly(u){let s=N.useContext(On);return Te(s,Br(u)),s}function qy(u){let s=N.useContext(nu);return Te(s,Br(u)),s}function Gy(u){let s=N.useContext(Ht);return Te(s,Br(u)),s}function jr(u){let s=Gy(u),f=s.matches[s.matches.length-1];return Te(f.route.id,`${u} can only be used on routes that contain a unique "id"`),f.route.id}function Yy(){return jr("useRouteId")}function Qy(){var c;let u=N.useContext(zr),s=qy("useRouteError"),f=jr("useRouteError");return u!==void 0?u:(c=s.errors)==null?void 0:c[f]}function Xy(){let{router:u}=Ly("useNavigate"),s=jr("useNavigate"),f=N.useRef(!1);return fp(()=>{f.current=!0}),N.useCallback(async(d,h={})=>{Ot(f.current,sp),f.current&&(typeof d=="number"?u.navigate(d):await u.navigate(d,{fromRouteId:s,...h}))},[u,s])}var Pd={};function pp(u,s,f){!s&&!Pd[u]&&(Pd[u]=!0,Ot(!1,f))}N.memo(Vy);function Vy({routes:u,future:s,state:f}){return dp(u,void 0,f,s)}function Hl(u){Te(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Zy({basename:u="/",children:s=null,location:f,navigationType:c="POP",navigator:d,static:h=!1}){Te(!Ul(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=u.replace(/^\/*/,"/"),R=N.useMemo(()=>({basename:x,navigator:d,static:h,future:{}}),[x,d,h]);typeof f=="string"&&(f=Cn(f));let{pathname:v="/",search:p="",hash:w="",state:j=null,key:O="default"}=f,G=N.useMemo(()=>{let _=$t(v,x);return _==null?null:{location:{pathname:_,search:p,hash:w,state:j,key:O},navigationType:c}},[x,v,p,w,j,O,c]);return Ot(G!=null,`<Router basename="${x}"> is not able to match the URL "${v}${p}${w}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:N.createElement(_t.Provider,{value:R},N.createElement(zl.Provider,{children:s,value:G}))}function ky({children:u,location:s}){return Hy(_r(u),s)}function _r(u,s=[]){let f=[];return N.Children.forEach(u,(c,d)=>{if(!N.isValidElement(c))return;let h=[...s,d];if(c.type===N.Fragment){f.push.apply(f,_r(c.props.children,h));return}Te(c.type===Hl,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Te(!c.props.index||!c.props.children,"An index route cannot have child routes.");let x={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(x.children=_r(c.props.children,h)),f.push(x)}),f}var Ii="get",eu="application/x-www-form-urlencoded";function lu(u){return u!=null&&typeof u.tagName=="string"}function Ky(u){return lu(u)&&u.tagName.toLowerCase()==="button"}function Jy(u){return lu(u)&&u.tagName.toLowerCase()==="form"}function $y(u){return lu(u)&&u.tagName.toLowerCase()==="input"}function Wy(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function Fy(u,s){return u.button===0&&(!s||s==="_self")&&!Wy(u)}var Pi=null;function Py(){if(Pi===null)try{new FormData(document.createElement("form"),0),Pi=!1}catch{Pi=!0}return Pi}var Iy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Cr(u){return u!=null&&!Iy.has(u)?(Ot(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${eu}"`),null):u}function eg(u,s){let f,c,d,h,x;if(Jy(u)){let R=u.getAttribute("action");c=R?$t(R,s):null,f=u.getAttribute("method")||Ii,d=Cr(u.getAttribute("enctype"))||eu,h=new FormData(u)}else if(Ky(u)||$y(u)&&(u.type==="submit"||u.type==="image")){let R=u.form;if(R==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=u.getAttribute("formaction")||R.getAttribute("action");if(c=v?$t(v,s):null,f=u.getAttribute("formmethod")||R.getAttribute("method")||Ii,d=Cr(u.getAttribute("formenctype"))||Cr(R.getAttribute("enctype"))||eu,h=new FormData(R,u),!Py()){let{name:p,type:w,value:j}=u;if(w==="image"){let O=p?`${p}.`:"";h.append(`${O}x`,"0"),h.append(`${O}y`,"0")}else p&&h.append(p,j)}}else{if(lu(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=Ii,c=null,d=eu,x=u}return h&&d==="text/plain"&&(x=h,h=void 0),{action:c,method:f.toLowerCase(),encType:d,formData:h,body:x}}function Lr(u,s){if(u===!1||u===null||typeof u>"u")throw new Error(s)}async function tg(u,s){if(u.id in s)return s[u.id];try{let f=await import(u.module);return s[u.id]=f,f}catch(f){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ag(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function ng(u,s,f){let c=await Promise.all(u.map(async d=>{let h=s.routes[d.route.id];if(h){let x=await tg(h,f);return x.links?x.links():[]}return[]}));return og(c.flat(1).filter(ag).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Id(u,s,f,c,d,h){let x=(v,p)=>f[p]?v.route.id!==f[p].route.id:!0,R=(v,p)=>{var w;return f[p].pathname!==v.pathname||((w=f[p].route.path)==null?void 0:w.endsWith("*"))&&f[p].params["*"]!==v.params["*"]};return h==="assets"?s.filter((v,p)=>x(v,p)||R(v,p)):h==="data"?s.filter((v,p)=>{var j;let w=c.routes[v.route.id];if(!w||!w.hasLoader)return!1;if(x(v,p)||R(v,p))return!0;if(v.route.shouldRevalidate){let O=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((j=f[0])==null?void 0:j.params)||{},nextUrl:new URL(u,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function lg(u,s,{includeHydrateFallback:f}={}){return ig(u.map(c=>{let d=s.routes[c.route.id];if(!d)return[];let h=[d.module];return d.clientActionModule&&(h=h.concat(d.clientActionModule)),d.clientLoaderModule&&(h=h.concat(d.clientLoaderModule)),f&&d.hydrateFallbackModule&&(h=h.concat(d.hydrateFallbackModule)),d.imports&&(h=h.concat(d.imports)),h}).flat(1))}function ig(u){return[...new Set(u)]}function ug(u){let s={},f=Object.keys(u).sort();for(let c of f)s[c]=u[c];return s}function og(u,s){let f=new Set;return new Set(s),u.reduce((c,d)=>{let h=JSON.stringify(ug(d));return f.has(h)||(f.add(h),c.push({key:h,link:d})),c},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var rg=new Set([100,101,204,205]);function cg(u,s){let f=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return f.pathname==="/"?f.pathname="_root.data":s&&$t(f.pathname,s)==="/"?f.pathname=`${s.replace(/\/$/,"")}/_root.data`:f.pathname=`${f.pathname.replace(/\/$/,"")}.data`,f}function mp(){let u=N.useContext(On);return Lr(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function sg(){let u=N.useContext(nu);return Lr(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var qr=N.createContext(void 0);qr.displayName="FrameworkContext";function hp(){let u=N.useContext(qr);return Lr(u,"You must render this element inside a <HydratedRouter> element"),u}function fg(u,s){let f=N.useContext(qr),[c,d]=N.useState(!1),[h,x]=N.useState(!1),{onFocus:R,onBlur:v,onMouseEnter:p,onMouseLeave:w,onTouchStart:j}=s,O=N.useRef(null);N.useEffect(()=>{if(u==="render"&&x(!0),u==="viewport"){let B=q=>{q.forEach(L=>{x(L.isIntersecting)})},X=new IntersectionObserver(B,{threshold:.5});return O.current&&X.observe(O.current),()=>{X.disconnect()}}},[u]),N.useEffect(()=>{if(c){let B=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(B)}}},[c]);let G=()=>{d(!0)},_=()=>{d(!1),x(!1)};return f?u!=="intent"?[h,O,{}]:[h,O,{onFocus:_l(R,G),onBlur:_l(v,_),onMouseEnter:_l(p,G),onMouseLeave:_l(w,_),onTouchStart:_l(j,G)}]:[!1,O,{}]}function _l(u,s){return f=>{u&&u(f),f.defaultPrevented||s(f)}}function dg({page:u,...s}){let{router:f}=mp(),c=N.useMemo(()=>np(f.routes,u,f.basename),[f.routes,u,f.basename]);return c?N.createElement(mg,{page:u,matches:c,...s}):null}function pg(u){let{manifest:s,routeModules:f}=hp(),[c,d]=N.useState([]);return N.useEffect(()=>{let h=!1;return ng(u,s,f).then(x=>{h||d(x)}),()=>{h=!0}},[u,s,f]),c}function mg({page:u,matches:s,...f}){let c=Ea(),{manifest:d,routeModules:h}=hp(),{basename:x}=mp(),{loaderData:R,matches:v}=sg(),p=N.useMemo(()=>Id(u,s,v,d,c,"data"),[u,s,v,d,c]),w=N.useMemo(()=>Id(u,s,v,d,c,"assets"),[u,s,v,d,c]),j=N.useMemo(()=>{if(u===c.pathname+c.search+c.hash)return[];let _=new Set,B=!1;if(s.forEach(q=>{var k;let L=d.routes[q.route.id];!L||!L.hasLoader||(!p.some(te=>te.route.id===q.route.id)&&q.route.id in R&&((k=h[q.route.id])!=null&&k.shouldRevalidate)||L.hasClientLoader?B=!0:_.add(q.route.id))}),_.size===0)return[];let X=cg(u,x);return B&&_.size>0&&X.searchParams.set("_routes",s.filter(q=>_.has(q.route.id)).map(q=>q.route.id).join(",")),[X.pathname+X.search]},[x,R,c,d,p,s,u,h]),O=N.useMemo(()=>lg(w,d),[w,d]),G=pg(w);return N.createElement(N.Fragment,null,j.map(_=>N.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...f})),O.map(_=>N.createElement("link",{key:_,rel:"modulepreload",href:_,...f})),G.map(({key:_,link:B})=>N.createElement("link",{key:_,...B})))}function hg(...u){return s=>{u.forEach(f=>{typeof f=="function"?f(s):f!=null&&(f.current=s)})}}var yp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{yp&&(window.__reactRouterVersion="7.6.2")}catch{}function yg({basename:u,children:s,window:f}){let c=N.useRef();c.current==null&&(c.current=ay({window:f,v5Compat:!0}));let d=c.current,[h,x]=N.useState({action:d.action,location:d.location}),R=N.useCallback(v=>{N.startTransition(()=>x(v))},[x]);return N.useLayoutEffect(()=>d.listen(R),[d,R]),N.createElement(Zy,{basename:u,children:s,location:h.location,navigationType:h.action,navigator:d})}var gp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,st=N.forwardRef(function({onClick:s,discover:f="render",prefetch:c="none",relative:d,reloadDocument:h,replace:x,state:R,target:v,to:p,preventScrollReset:w,viewTransition:j,...O},G){let{basename:_}=N.useContext(_t),B=typeof p=="string"&&gp.test(p),X,q=!1;if(typeof p=="string"&&B&&(X=p,yp))try{let be=new URL(window.location.href),Ke=p.startsWith("//")?new URL(be.protocol+p):new URL(p),ft=$t(Ke.pathname,_);Ke.origin===be.origin&&ft!=null?p=ft+Ke.search+Ke.hash:q=!0}catch{Ot(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=Cy(p,{relative:d}),[k,te,F]=fg(c,O),Oe=xg(p,{replace:x,state:R,target:v,preventScrollReset:w,relative:d,viewTransition:j});function Ae(be){s&&s(be),be.defaultPrevented||Oe(be)}let Re=N.createElement("a",{...O,...F,href:X||L,onClick:q||h?s:Ae,ref:hg(G,te),target:v,"data-discover":!B&&f==="render"?"true":void 0});return k&&!B?N.createElement(N.Fragment,null,Re,N.createElement(dg,{page:L})):Re});st.displayName="Link";var gg=N.forwardRef(function({"aria-current":s="page",caseSensitive:f=!1,className:c="",end:d=!1,style:h,to:x,viewTransition:R,children:v,...p},w){let j=Bl(x,{relative:p.relative}),O=Ea(),G=N.useContext(nu),{navigator:_,basename:B}=N.useContext(_t),X=G!=null&&wg(j)&&R===!0,q=_.encodeLocation?_.encodeLocation(j).pathname:j.pathname,L=O.pathname,k=G&&G.navigation&&G.navigation.location?G.navigation.location.pathname:null;f||(L=L.toLowerCase(),k=k?k.toLowerCase():null,q=q.toLowerCase()),k&&B&&(k=$t(k,B)||k);const te=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let F=L===q||!d&&L.startsWith(q)&&L.charAt(te)==="/",Oe=k!=null&&(k===q||!d&&k.startsWith(q)&&k.charAt(q.length)==="/"),Ae={isActive:F,isPending:Oe,isTransitioning:X},Re=F?s:void 0,be;typeof c=="function"?be=c(Ae):be=[c,F?"active":null,Oe?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let Ke=typeof h=="function"?h(Ae):h;return N.createElement(st,{...p,"aria-current":Re,className:be,ref:w,style:Ke,to:x,viewTransition:R},typeof v=="function"?v(Ae):v)});gg.displayName="NavLink";var vg=N.forwardRef(({discover:u="render",fetcherKey:s,navigate:f,reloadDocument:c,replace:d,state:h,method:x=Ii,action:R,onSubmit:v,relative:p,preventScrollReset:w,viewTransition:j,...O},G)=>{let _=Tg(),B=Ag(R,{relative:p}),X=x.toLowerCase()==="get"?"get":"post",q=typeof R=="string"&&gp.test(R),L=k=>{if(v&&v(k),k.defaultPrevented)return;k.preventDefault();let te=k.nativeEvent.submitter,F=(te==null?void 0:te.getAttribute("formmethod"))||x;_(te||k.currentTarget,{fetcherKey:s,method:F,navigate:f,replace:d,state:h,relative:p,preventScrollReset:w,viewTransition:j})};return N.createElement("form",{ref:G,method:X,action:B,onSubmit:c?v:L,...O,"data-discover":!q&&u==="render"?"true":void 0})});vg.displayName="Form";function bg(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vp(u){let s=N.useContext(On);return Te(s,bg(u)),s}function xg(u,{target:s,replace:f,state:c,preventScrollReset:d,relative:h,viewTransition:x}={}){let R=Ur(),v=Ea(),p=Bl(u,{relative:h});return N.useCallback(w=>{if(Fy(w,s)){w.preventDefault();let j=f!==void 0?f:Nl(v)===Nl(p);R(u,{replace:j,state:c,preventScrollReset:d,relative:h,viewTransition:x})}},[v,R,p,f,c,s,u,d,h,x])}var Sg=0,Eg=()=>`__${String(++Sg)}__`;function Tg(){let{router:u}=vp("useSubmit"),{basename:s}=N.useContext(_t),f=Yy();return N.useCallback(async(c,d={})=>{let{action:h,method:x,encType:R,formData:v,body:p}=eg(c,s);if(d.navigate===!1){let w=d.fetcherKey||Eg();await u.fetch(w,f,d.action||h,{preventScrollReset:d.preventScrollReset,formData:v,body:p,formMethod:d.method||x,formEncType:d.encType||R,flushSync:d.flushSync})}else await u.navigate(d.action||h,{preventScrollReset:d.preventScrollReset,formData:v,body:p,formMethod:d.method||x,formEncType:d.encType||R,replace:d.replace,state:d.state,fromRouteId:f,flushSync:d.flushSync,viewTransition:d.viewTransition})},[u,s,f])}function Ag(u,{relative:s}={}){let{basename:f}=N.useContext(_t),c=N.useContext(Ht);Te(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),h={...Bl(u||".",{relative:s})},x=Ea();if(u==null){h.search=x.search;let R=new URLSearchParams(h.search),v=R.getAll("index");if(v.some(w=>w==="")){R.delete("index"),v.filter(j=>j).forEach(j=>R.append("index",j));let w=R.toString();h.search=w?`?${w}`:""}}return(!u||u===".")&&d.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(h.pathname=h.pathname==="/"?f:Jt([f,h.pathname])),Nl(h)}function wg(u,s={}){let f=N.useContext(cp);Te(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=vp("useViewTransitionState"),d=Bl(u,{relative:s.relative});if(!f.isTransitioning)return!1;let h=$t(f.currentLocation.pathname,c)||f.currentLocation.pathname,x=$t(f.nextLocation.pathname,c)||f.nextLocation.pathname;return au(d.pathname,x)!=null||au(d.pathname,h)!=null}[...rg];const ep=u=>{let s;const f=new Set,c=(p,w)=>{const j=typeof p=="function"?p(s):p;if(!Object.is(j,s)){const O=s;s=w??(typeof j!="object"||j===null)?j:Object.assign({},s,j),f.forEach(G=>G(s,O))}},d=()=>s,R={setState:c,getState:d,getInitialState:()=>v,subscribe:p=>(f.add(p),()=>f.delete(p))},v=s=u(c,d,R);return R},Mg=u=>u?ep(u):ep,Rg=u=>u;function Dg(u,s=Rg){const f=Yd.useSyncExternalStore(u.subscribe,()=>s(u.getState()),()=>s(u.getInitialState()));return Yd.useDebugValue(f),f}const tp=u=>{const s=Mg(u),f=c=>Dg(s,c);return Object.assign(f,s),f},Gr=u=>u?tp(u):tp;function bp(u,s){let f;try{f=u()}catch{return}return{getItem:d=>{var h;const x=v=>v===null?null:JSON.parse(v,void 0),R=(h=f.getItem(d))!=null?h:null;return R instanceof Promise?R.then(x):x(R)},setItem:(d,h)=>f.setItem(d,JSON.stringify(h,void 0)),removeItem:d=>f.removeItem(d)}}const Hr=u=>s=>{try{const f=u(s);return f instanceof Promise?f:{then(c){return Hr(c)(f)},catch(c){return this}}}catch(f){return{then(c){return this},catch(c){return Hr(c)(f)}}}},Cg=(u,s)=>(f,c,d)=>{let h={storage:bp(()=>localStorage),partialize:B=>B,version:0,merge:(B,X)=>({...X,...B}),...s},x=!1;const R=new Set,v=new Set;let p=h.storage;if(!p)return u((...B)=>{console.warn(`[zustand persist middleware] Unable to update item '${h.name}', the given storage is currently unavailable.`),f(...B)},c,d);const w=()=>{const B=h.partialize({...c()});return p.setItem(h.name,{state:B,version:h.version})},j=d.setState;d.setState=(B,X)=>{j(B,X),w()};const O=u((...B)=>{f(...B),w()},c,d);d.getInitialState=()=>O;let G;const _=()=>{var B,X;if(!p)return;x=!1,R.forEach(L=>{var k;return L((k=c())!=null?k:O)});const q=((X=h.onRehydrateStorage)==null?void 0:X.call(h,(B=c())!=null?B:O))||void 0;return Hr(p.getItem.bind(p))(h.name).then(L=>{if(L)if(typeof L.version=="number"&&L.version!==h.version){if(h.migrate){const k=h.migrate(L.state,L.version);return k instanceof Promise?k.then(te=>[!0,te]):[!0,k]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,L.state];return[!1,void 0]}).then(L=>{var k;const[te,F]=L;if(G=h.merge(F,(k=c())!=null?k:O),f(G,!0),te)return w()}).then(()=>{q==null||q(G,void 0),G=c(),x=!0,v.forEach(L=>L(G))}).catch(L=>{q==null||q(void 0,L)})};return d.persist={setOptions:B=>{h={...h,...B},B.storage&&(p=B.storage)},clearStorage:()=>{p==null||p.removeItem(h.name)},getOptions:()=>h,rehydrate:()=>_(),hasHydrated:()=>x,onHydrate:B=>(R.add(B),()=>{R.delete(B)}),onFinishHydration:B=>(v.add(B),()=>{v.delete(B)})},h.skipHydration||_(),G||O},Og=Cg,iu=Gr(Og((u,s)=>({darkMode:!1,toggleDarkMode:()=>u({darkMode:!s().darkMode}),setDarkMode:f=>u({darkMode:f})}),{name:"dark-mode-preference",storage:bp(()=>localStorage),version:1})),xp=Gr(u=>({searchQuery:"",setSearchQuery:s=>u({searchQuery:s}),clearSearch:()=>u({searchQuery:""})})),Sp=Gr((u,s)=>({sidebarOpen:!1,toggleSidebar:()=>u({sidebarOpen:!s().sidebarOpen}),setSidebar:f=>u({sidebarOpen:f})})),tu={javascript:{intro:{title:"JavaScript Introduction",description:"JavaScript is the most popular programming language for web development. It powers dynamic behavior in browsers, servers (Node.js), and beyond.",examples:[{code:'console.log("Hello, World!");',explanation:"Outputs 'Hello, World!' to the console."}]},basics:{title:"Basics",description:"Core syntax and fundamentals of JavaScript.",topics:[{title:"Variables",code:`let x = 10; // Block scoped
const y = 20; // Constant
var z = 30;   // Function scoped`,explanation:"`let` is block-scoped, `const` for constants, `var` is function-scoped."},{title:"Data Types",code:`let str = "Hello";  // String
let num = 42;       // Number
let bool = true;    // Boolean
let arr = [1,2,3];  // Array
let obj = {a:1};    // Object
let undef;          // Undefined
let n = null;       // Null
let sym = Symbol(); // Symbol
let big = 123n;     // BigInt`,explanation:"JavaScript has 8 primitive types plus objects."},{title:"Operators",code:`let sum = 5 + 3;   // 8
let eq = (5 === '5'); // false
let cond = (x > 10) ? "big" : "small";`,explanation:"Arithmetic, comparison, logical, and conditional operators."}]},controlFlow:{title:"Control Flow",description:"Conditional statements and loops.",examples:[{code:`if (x > 10) {
  console.log("Greater");
} else {
  console.log("Smaller or equal");
}`,explanation:"Basic `if-else` conditional."},{code:`for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (x < 10) { x++; }`,explanation:"`for` and `while` loops control repetition."},{code:`switch(day) {
  case "Mon": console.log("Start"); break;
  case "Fri": console.log("End"); break;
  default: console.log("Midweek");
}`,explanation:"`switch` statement matches cases."}]},functions:{title:"Functions",description:"Reusable blocks of code.",examples:[{code:`function add(a, b) {
  return a + b;
}`,explanation:"Normal function declaration."},{code:"const multiply = (a, b) => a * b;",explanation:"Arrow function (ES6)."},{code:`(function(){
  console.log("IIFE");
})();`,explanation:"Immediately Invoked Function Expression."}]},objects:{title:"Objects & Arrays",description:"Core data structures in JavaScript.",examples:[{code:`let person = {
  name: "Alice",
  age: 25,
  greet() { console.log("Hi " + this.name); }
};

console.log(person.name); // Dot notation`,explanation:"Object with properties and methods."},{code:`let arr = [1, 2, 3];
arr.push(4);
arr.map(n => n*2);`,explanation:"Array methods for manipulation."}]},es6Features:{title:"Modern ES6+ Features",description:"New syntax introduced in ES6 and beyond.",examples:[{code:`let [a, b] = [1, 2]; // Destructuring
let {name, age} = person;`,explanation:"Destructuring arrays and objects."},{code:`let nums = [1, 2, 3];
let copy = [...nums];`,explanation:"Spread operator."},{code:`function greet(name = "Guest") {
  console.log("Hello " + name);
}`,explanation:"Default parameters."},{code:`class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(this.name + " makes noise"); }
}`,explanation:"ES6 Classes."}]},dom:{title:"DOM Manipulation",description:"Interacting with HTML and CSS using JavaScript.",examples:[{code:'document.getElementById("title").innerText = "New Title";',explanation:"Access and modify elements."},{code:`let btn = document.querySelector("button");
btn.addEventListener("click", () => alert("Clicked"));`,explanation:"Event handling."}]},asyncJS:{title:"Asynchronous JavaScript",description:"Handle tasks like fetching data.",examples:[{code:'setTimeout(() => console.log("Later"), 1000);',explanation:"Run code after delay."},{code:`fetch("https://api.example.com")
  .then(res => res.json())
  .then(data => console.log(data));`,explanation:"Using Promises."},{code:`async function getData() {
  let res = await fetch("https://api.example.com");
  let data = await res.json();
  console.log(data);
}`,explanation:"Using async/await."}]},advanced:{title:"Advanced Concepts",description:"Deep dive into JavaScript internals.",topics:[{title:"Closures",code:`function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
counter(); // 1
counter(); // 2`,explanation:"Closure remembers variables from outer function."},{title:"Prototype & Inheritance",code:`function Person(name) { this.name = name; }
Person.prototype.greet = function() {
  console.log("Hi " + this.name);
};`,explanation:"Inheritance via prototypes."},{title:"Modules",code:`// file.js
export function greet() { console.log("Hello"); }

// main.js
import { greet } from './file.js';`,explanation:"Modules for code organization."}]},extras:{title:"Extras",description:"Other important JavaScript topics.",topics:[{title:"Error Handling",code:'try { throw new Error("Oops"); } catch(e) { console.error(e); }'},{title:"JSON",code:"let obj = {a:1}; let str = JSON.stringify(obj); let back = JSON.parse(str);"},{title:"LocalStorage",code:'localStorage.setItem("key", "value");'},{title:"Date",code:"let now = new Date();"},{title:"Math",code:"Math.random(); Math.floor(3.9);"}]}},python:{intro:{title:"Python Introduction",description:"Python is a high-level, interpreted, general-purpose programming language known for its readability and versatility. It's used in web development, data science, machine learning, automation, and more.",examples:[{code:'print("Hello, World!")',output:"Hello, World!",explanation:"The simplest Python program — printing text to the console."}]},variables:{title:"Variables and Data Types",description:"Python is dynamically typed, meaning you don’t have to explicitly declare variable types. Common data types include int, float, str, bool, list, tuple, dict, and set.",examples:[{code:`x = 10
y = 3.14
name = "Alice"
is_active = True
print(x, y, name, is_active)`,output:"10 3.14 Alice True",explanation:"Python infers the data types automatically."}]},operators:{title:"Operators",description:"Python supports arithmetic, comparison, logical, assignment, bitwise, and membership operators.",examples:[{code:`a, b = 10, 3
print(a + b)   # Addition
print(a // b)  # Floor division
print(a ** b)  # Power
print(a > b and b < 5)`,output:`13
3
1000
True`,explanation:"Operators let you perform math, comparisons, and logic operations."}]},control_flow:{title:"Control Flow",description:"Conditional statements and loops control program execution.",examples:[{code:`x = 5
if x > 0:
    print("Positive")
elif x == 0:
    print("Zero")
else:
    print("Negative")

for i in range(3):
    print(i)

n = 5
while n > 0:
    print(n)
    n -= 1`,output:`Positive
0
1
2
5
4
3
2
1`,explanation:"Python uses `if/elif/else`, `for`, and `while` loops."}]},functions:{title:"Functions",description:"Functions in Python are defined using `def`. They can have default, keyword, and variable-length arguments. Python also supports anonymous functions with `lambda`.",examples:[{code:`def greet(name="World"):
    return f"Hello, {name}!"

print(greet())
print(greet("Alice"))

add = lambda a, b: a + b
print(add(5, 3))`,output:`Hello, World!
Hello, Alice!
8`,explanation:"Functions can have default args and use `lambda` for short definitions."}]},collections:{title:"Collections",description:"Python has powerful built-in collections: list, tuple, set, and dict.",examples:[{code:`fruits = ["apple", "banana", "orange"]
fruits.append("mango")
print(fruits)

numbers = (1, 2, 3)
print(numbers)

unique = {1, 2, 2, 3}
print(unique)

person = {"name": "Bob", "age": 25}
print(person["name"])`,output:`['apple', 'banana', 'orange', 'mango']
(1, 2, 3)
{1, 2, 3}
Bob`,explanation:"Lists are mutable, tuples are immutable, sets are unique, dicts are key-value pairs."}]},comprehensions:{title:"List/Dict/Set Comprehensions",description:"Comprehensions provide a concise way to create collections.",examples:[{code:`squares = [x**2 for x in range(5)]
evens = {x for x in range(10) if x % 2 == 0}
mapping = {x: x**2 for x in range(5)}

print(squares)
print(evens)
print(mapping)`,output:`[0, 1, 4, 9, 16]
{0, 2, 4, 6, 8}
{0: 0, 1: 1, 2: 4, 3: 9, 4: 16}`,explanation:"Comprehensions make creating new collections elegant and efficient."}]},oop:{title:"Object-Oriented Programming",description:"Python supports OOP with classes, inheritance, polymorphism, and special methods.",examples:[{code:`class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return f"{self.name} makes a sound"

class Dog(Animal):
    def speak(self):
        return f"{self.name} barks"

dog = Dog("Buddy")
print(dog.speak())`,output:"Buddy barks",explanation:"OOP in Python allows reuse and extension of code via classes."}]},modules:{title:"Modules and Packages",description:"Modules are Python files. Packages are collections of modules with `__init__.py`.",examples:[{code:`import math
print(math.sqrt(16))

from datetime import datetime
print(datetime.now().year)`,output:`4.0
2025`,explanation:"Use built-in or third-party modules with `import`."}]},exceptions:{title:"Error Handling",description:"Python uses try/except/finally for exception handling.",examples:[{code:`try:
    x = 10 / 0
except ZeroDivisionError as e:
    print("Error:", e)
finally:
    print("Done")`,output:`Error: division by zero
Done`,explanation:"Errors can be caught and handled gracefully."}]},files:{title:"File Handling",description:"Python supports reading/writing files using `open` with context managers.",examples:[{code:`with open("test.txt", "w") as f:
    f.write("Hello File")

with open("test.txt", "r") as f:
    print(f.read())`,output:"Hello File",explanation:"`with open` automatically closes the file after use."}]},decorators:{title:"Decorators",description:"Decorators are functions that modify other functions.",examples:[{code:`def log(func):
    def wrapper(*args, **kwargs):
        print("Calling", func.__name__)
        return func(*args, **kwargs)
    return wrapper

@log
def greet():
    return "Hello"

print(greet())`,output:`Calling greet
Hello`,explanation:"Decorators are applied with `@decorator` syntax."}]},generators:{title:"Generators",description:"Generators use `yield` to produce values lazily.",examples:[{code:`def countdown(n):
    while n > 0:
        yield n
        n -= 1

for i in countdown(3):
    print(i)`,output:`3
2
1`,explanation:"Generators create iterators without storing all values in memory."}]},async:{title:"Async/Await",description:"Python supports async programming using `asyncio`.",examples:[{code:`import asyncio

async def fetch_data():
    await asyncio.sleep(1)
    return "Data"

async def main():
    print(await fetch_data())

asyncio.run(main())`,output:"Data",explanation:"`async` defines coroutines and `await` suspends execution until completion."}]},advanced:{title:"Advanced Python",description:"Topics like type hints, context managers, and metaclasses help write scalable, maintainable code.",examples:[{code:`from typing import List

def square_all(nums: List[int]) -> List[int]:
    return [n**2 for n in nums]

print(square_all([1, 2, 3]))`,output:"[1, 4, 9]",explanation:"Type hints improve readability and catch bugs with tools like mypy."},{code:`class Singleton(type):
    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class MyClass(metaclass=Singleton):
    pass

a = MyClass()
b = MyClass()
print(a is b)`,output:"True",explanation:"Metaclasses let you control class creation, here implementing Singleton."}]}},java:{intro:{title:"Java Introduction",description:"Java is a high-level, class-based, object-oriented programming language developed by Sun Microsystems (now Oracle). It is platform-independent thanks to the JVM (Java Virtual Machine) and is widely used for web apps, Android development, enterprise software, and large-scale systems.",examples:[{code:`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`,output:"Hello, World!",explanation:"Basic Java program with a class and main method."}]},variables:{title:"Java Variables",description:"Variables in Java are statically typed. You must declare the type before using them.",examples:[{code:`public class Main {
  public static void main(String[] args) {
    int age = 25;
    double pi = 3.14159;
    char grade = 'A';
    boolean isJavaFun = true;
    String name = "Alice";

    System.out.println(name + " is " + age + " years old.");
  }
}`,output:"Alice is 25 years old.",explanation:"Java supports primitive types and object types."}]},operators:{title:"Java Operators",description:"Java provides arithmetic, relational, logical, and bitwise operators.",examples:[{code:`public class Main {
  public static void main(String[] args) {
    int a = 10, b = 5;
    System.out.println(a + b);  // 15
    System.out.println(a - b);  // 5
    System.out.println(a * b);  // 50
    System.out.println(a / b);  // 2
    System.out.println(a % b);  // 0
    System.out.println(a > b);  // true
  }
}`,output:`15
5
50
2
0
true`,explanation:"Arithmetic and relational operators in Java."}]},controlFlow:{title:"Java Control Flow",description:"Control flow statements include if-else, switch, loops, and break/continue.",examples:[{code:`public class Main {
  public static void main(String[] args) {
    int num = 3;

    if (num > 0) {
      System.out.println("Positive");
    } else {
      System.out.println("Non-positive");
    }

    switch(num) {
      case 1: System.out.println("One"); break;
      case 2: System.out.println("Two"); break;
      default: System.out.println("Other");
    }

    for (int i=1; i<=3; i++) {
      System.out.println("i = " + i);
    }
  }
}`,output:`Positive
Other
i = 1
i = 2
i = 3`,explanation:"Java supports `if-else`, `switch`, `for`, `while`, and `do-while` loops."}]},arrays:{title:"Java Arrays",description:"Arrays are fixed-length containers of elements of the same type.",examples:[{code:`public class Main {
  public static void main(String[] args) {
    int[] nums = {1, 2, 3, 4};
    System.out.println(nums[0]);
    System.out.println(nums.length);
  }
}`,output:`1
4`,explanation:"Arrays are zero-indexed and immutable in size."}]},oop:{title:"Java OOP",description:"Java is an object-oriented language with classes, objects, inheritance, polymorphism, encapsulation, and abstraction.",examples:[{code:`class Person {
  String name;
  int age;

  Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  void greet() {
    System.out.println("Hi, I'm " + name);
  }
}

public class Main {
  public static void main(String[] args) {
    Person p = new Person("Alice", 25);
    p.greet();
  }
}`,output:"Hi, I'm Alice",explanation:"Class with fields, constructor, and method."},{code:`class Animal {
  void sound() { System.out.println("Animal sound"); }
}

class Dog extends Animal {
  void sound() { System.out.println("Bark"); }
}

public class Main {
  public static void main(String[] args) {
    Animal a = new Dog();
    a.sound();
  }
}`,output:"Bark",explanation:"Method overriding demonstrates polymorphism."}]},exceptions:{title:"Java Exceptions",description:"Java uses exceptions for error handling with try-catch-finally.",examples:[{code:`public class Main {
  public static void main(String[] args) {
    try {
      int result = 10 / 0;
    } catch (ArithmeticException e) {
      System.out.println("Error: " + e.getMessage());
    } finally {
      System.out.println("Finally block always executes");
    }
  }
}`,output:`Error: / by zero
Finally block always executes`,explanation:"Exceptions prevent crashes and allow recovery."}]},collections:{title:"Java Collections",description:"Java provides the Collections Framework (`List`, `Set`, `Map`).",examples:[{code:`import java.util.*;

public class Main {
  public static void main(String[] args) {
    List<String> list = new ArrayList<>();
    list.add("Apple");
    list.add("Banana");

    Set<Integer> set = new HashSet<>();
    set.add(1);
    set.add(2);

    Map<String, Integer> map = new HashMap<>();
    map.put("Alice", 25);
    map.put("Bob", 30);

    System.out.println(list);
    System.out.println(set);
    System.out.println(map);
  }
}`,output:`[Apple, Banana]
[1, 2]
{Alice=25, Bob=30}`,explanation:"Common collections usage."}]},generics:{title:"Java Generics",description:"Generics allow type-safe data structures and algorithms.",examples:[{code:`class Box<T> {
  private T value;
  public void set(T value) { this.value = value; }
  public T get() { return value; }
}

public class Main {
  public static void main(String[] args) {
    Box<String> b = new Box<>();
    b.set("Hello");
    System.out.println(b.get());
  }
}`,output:"Hello",explanation:"Generics ensure type safety at compile-time."}]},streams:{title:"Java Streams (Functional Programming)",description:"Java 8 introduced Streams for functional-style programming.",examples:[{code:`import java.util.*;

public class Main {
  public static void main(String[] args) {
    List<Integer> nums = Arrays.asList(1,2,3,4,5);
    nums.stream()
        .filter(n -> n % 2 == 0)
        .map(n -> n * n)
        .forEach(System.out::println);
  }
}`,output:`4
16`,explanation:"Streams filter, transform, and process collections."}]},threads:{title:"Java Multithreading",description:"Java supports multithreading using the Thread class and Runnable interface.",examples:[{code:`class MyThread extends Thread {
  public void run() {
    for (int i=1; i<=3; i++) {
      System.out.println("Thread: " + i);
    }
  }
}

public class Main {
  public static void main(String[] args) {
    MyThread t1 = new MyThread();
    t1.start();
  }
}`,output:`Thread: 1
Thread: 2
Thread: 3`,explanation:"Threads run code concurrently."}]},advanced:{title:"Advanced Java Topics",description:"Covers advanced areas like JDBC, Servlets, Spring, Hibernate, and JVM internals.",examples:[{code:`// Example: JDBC connection (simplified)
import java.sql.*;

public class Main {
  public static void main(String[] args) throws Exception {
    Connection conn = DriverManager.getConnection(
      "jdbc:mysql://localhost:3306/test", "root", "password");
    Statement stmt = conn.createStatement();
    ResultSet rs = stmt.executeQuery("SELECT * FROM users");
    while (rs.next()) {
      System.out.println(rs.getString("name"));
    }
    conn.close();
  }
}`,output:"(Names of users in database)",explanation:"JDBC allows Java to connect to relational databases."}]}},c:{intro:{title:"C Language Introduction",description:"C is a general-purpose, procedural programming language developed in the early 1970s. It is widely used for system programming, operating systems, and embedded systems because of its efficiency and control over memory.",examples:[{code:`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,output:"Hello, World!",explanation:"Basic C program with `main` function and standard output."}]},variables:{title:"C Variables and Data Types",description:"C supports fundamental data types like `int`, `float`, `double`, `char`. Variables must be declared with a type before use.",examples:[{code:`#include <stdio.h>

int main() {
    int age = 25;
    float pi = 3.14;
    char grade = 'A';

    printf("Age: %d, Pi: %.2f, Grade: %c\\n", age, pi, grade);
    return 0;
}`,output:"Age: 25, Pi: 3.14, Grade: A",explanation:"Variables in C have fixed types and format specifiers for printing."}]},controlFlow:{title:"Control Flow",description:"C supports `if/else`, `for`, `while`, `do-while`, and `switch` statements.",examples:[{code:`#include <stdio.h>

int main() {
    int x = 10;

    if (x > 5) {
        printf("x is greater than 5\\n");
    } else {
        printf("x is small\\n");
    }

    for (int i = 0; i < 3; i++) {
        printf("%d\\n", i);
    }

    return 0;
}`,output:`x is greater than 5
0
1
2`,explanation:"Basic conditional and looping structures in C."}]},functions:{title:"C Functions",description:"Functions in C help modularize code. They require declarations (prototypes) and definitions.",examples:[{code:`#include <stdio.h>

// Function declaration
int add(int a, int b);

int main() {
    printf("Sum: %d\\n", add(3, 4));
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}`,output:"Sum: 7",explanation:"A simple function declaration and definition in C."},{code:`#include <stdio.h>

// Recursive factorial function
int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}

int main() {
    printf("Factorial of 5: %d\\n", factorial(5));
    return 0;
}`,output:"Factorial of 5: 120",explanation:"Recursion in C with a factorial example."}]},arrays:{title:"C Arrays",description:"Arrays in C are fixed-size collections of elements of the same type.",examples:[{code:`#include <stdio.h>

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};
    printf("First element: %d\\n", numbers[0]);
    printf("Array length: %lu\\n", sizeof(numbers)/sizeof(numbers[0]));
    return 0;
}`,output:`First element: 1
Array length: 5`,explanation:"Arrays store multiple values. Their size must be known at compile time."}]},strings:{title:"C Strings",description:"Strings in C are arrays of characters ending with a null terminator `\\0`.",examples:[{code:`#include <stdio.h>
#include <string.h>

int main() {
    char name[20] = "Alice";
    printf("Name: %s\\n", name);
    printf("Length: %lu\\n", strlen(name));
    return 0;
}`,output:`Name: Alice
Length: 5`,explanation:"Strings are arrays of characters, with library functions available in `<string.h>`."}]},pointers:{title:"Pointers",description:"Pointers are variables that store memory addresses. They allow direct memory access and manipulation.",examples:[{code:`#include <stdio.h>

int main() {
    int x = 10;
    int *ptr = &x;

    printf("Value of x: %d\\n", x);
    printf("Address of x: %p\\n", ptr);
    printf("Value via pointer: %d\\n", *ptr);
    return 0;
}`,output:`Value of x: 10
Address of x: (memory address)
Value via pointer: 10`,explanation:"`*ptr` dereferences the pointer to access the value at the address."}]},structures:{title:"Structures",description:"Structures in C group variables of different types under a single name.",examples:[{code:`#include <stdio.h>
#include <string.h>

struct Person {
    char name[20];
    int age;
};

int main() {
    struct Person p1;
    strcpy(p1.name, "John");
    p1.age = 30;

    printf("Name: %s, Age: %d\\n", p1.name, p1.age);
    return 0;
}`,output:"Name: John, Age: 30",explanation:"Structures are used to group related variables."}]},memory:{title:"Dynamic Memory Allocation",description:"C provides `malloc`, `calloc`, `realloc`, and `free` in `<stdlib.h>` for manual memory management.",examples:[{code:`#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr = (int*)malloc(3 * sizeof(int));
    arr[0] = 10; arr[1] = 20; arr[2] = 30;

    for (int i = 0; i < 3; i++) {
        printf("%d ", arr[i]);
    }
    free(arr); // free allocated memory
    return 0;
}`,output:"10 20 30",explanation:"`malloc` allocates memory dynamically, which must be freed with `free`."}]},fileIO:{title:"File I/O",description:"C provides functions in `<stdio.h>` for file handling, like `fopen`, `fprintf`, `fscanf`, and `fclose`.",examples:[{code:`#include <stdio.h>

int main() {
    FILE *f = fopen("test.txt", "w");
    fprintf(f, "Hello File!\\n");
    fclose(f);

    char buffer[50];
    f = fopen("test.txt", "r");
    fscanf(f, "%s", buffer);
    printf("Read: %s\\n", buffer);
    fclose(f);
    return 0;
}`,output:"Read: Hello",explanation:"Writing to and reading from a file in C."}]},preprocessor:{title:"Preprocessor Directives",description:"Preprocessor directives start with `#` and are used for macros, file inclusion, and conditional compilation.",examples:[{code:`#include <stdio.h>
#define PI 3.14159
#define SQUARE(x) ((x) * (x))

int main() {
    printf("Pi: %f\\n", PI);
    printf("Square of 5: %d\\n", SQUARE(5));
    return 0;
}`,output:`Pi: 3.141590
Square of 5: 25`,explanation:"Macros allow code substitution before compilation."}]}},cpp:{intro:{title:"C++ Introduction",description:"C++ is a powerful, general-purpose programming language created as an extension of C. It supports both procedural and object-oriented programming. C++ is widely used for system programming, game development, real-time simulations, embedded systems, and performance-critical applications.",examples:[{code:`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,output:"Hello, World!",explanation:"A simple C++ program that prints to the console using `iostream`."}]},variables:{title:"C++ Variables & Data Types",description:"C++ has strong static typing. Variables can be declared with types such as int, float, char, bool, string, etc. You can also use `auto` for type inference.",examples:[{code:`#include <iostream>
using namespace std;

int main() {
    int age = 25;
    float pi = 3.14;
    char grade = 'A';
    bool isStudent = true;
    string name = "Alice";

    cout << name << " is " << age << " years old." << endl;
    return 0;
}`,output:"Alice is 25 years old.",explanation:"Shows variable declaration with different types."},{code:`#include <iostream>
using namespace std;

int main() {
    auto x = 42;       // int
    auto y = 3.14;     // double
    auto z = "hello";  // const char*

    cout << x << ", " << y << ", " << z << endl;
    return 0;
}`,output:"42, 3.14, hello",explanation:"Using `auto` keyword for type inference."}]},functions:{title:"C++ Functions",description:"Functions in C++ allow code reuse and modularity. They can have return values, parameters, and support overloading.",examples:[{code:`#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

int main() {
    cout << add(5, 3) << endl;
    return 0;
}`,output:"8",explanation:"A basic function with parameters and return type."},{code:`#include <iostream>
using namespace std;

void greet(string name = "Guest") {
    cout << "Hello, " << name << "!" << endl;
}

int main() {
    greet();
    greet("Bob");
    return 0;
}`,output:`Hello, Guest!
Hello, Bob!`,explanation:"Function with default parameter."}]},classes:{title:"C++ Classes & OOP",description:"C++ supports Object-Oriented Programming with classes, objects, inheritance, polymorphism, and encapsulation.",examples:[{code:`#include <iostream>
using namespace std;

class Person {
public:
    string name;
    int age;

    Person(string n, int a) {
        name = n;
        age = a;
    }

    void introduce() {
        cout << "Hi, I'm " << name << " and I'm " << age << " years old." << endl;
    }
};

int main() {
    Person p("Alice", 25);
    p.introduce();
    return 0;
}`,output:"Hi, I'm Alice and I'm 25 years old.",explanation:"A basic class with constructor and method."},{code:`#include <iostream>
using namespace std;

class Animal {
public:
    void speak() { cout << "Generic sound" << endl; }
};

class Dog : public Animal {
public:
    void speak() { cout << "Woof!" << endl; }
};

int main() {
    Dog d;
    d.speak();
    return 0;
}`,output:"Woof!",explanation:"Inheritance and method overriding."}]},pointers:{title:"C++ Pointers & References",description:"Pointers are variables that store memory addresses. References act as aliases for existing variables.",examples:[{code:`#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int* ptr = &x;

    cout << "Value: " << x << endl;
    cout << "Address: " << ptr << endl;
    cout << "Dereference: " << *ptr << endl;
    return 0;
}`,output:`Value: 10
Address: (some memory address)
Dereference: 10`,explanation:"Shows pointer usage with dereferencing."},{code:`#include <iostream>
using namespace std;

void increment(int &n) {
    n++;
}

int main() {
    int x = 5;
    increment(x);
    cout << x << endl;
    return 0;
}`,output:"6",explanation:"Passing variables by reference."}]},stl:{title:"C++ Standard Template Library (STL)",description:"The STL provides powerful, reusable components like vectors, sets, maps, and algorithms.",examples:[{code:`#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};
    nums.push_back(6);

    for (int n : nums) cout << n << " ";
    return 0;
}`,output:"1 2 3 4 5 6",explanation:"Using `vector` to store dynamic arrays."},{code:`#include <iostream>
#include <map>
using namespace std;

int main() {
    map<string, int> ages;
    ages["Alice"] = 25;
    ages["Bob"] = 30;

    for (auto &p : ages)
        cout << p.first << " -> " << p.second << endl;

    return 0;
}`,output:`Alice -> 25
Bob -> 30`,explanation:"Using `map` (dictionary-like structure)."}]},advanced:{title:"Advanced C++ Concepts",description:"Modern C++ (C++11 and later) introduces advanced features like smart pointers, lambda functions, templates, and multithreading.",examples:[{code:`#include <iostream>
#include <memory>
using namespace std;

class Test {
public:
    Test() { cout << "Created" << endl; }
    ~Test() { cout << "Destroyed" << endl; }
};

int main() {
    unique_ptr<Test> t1 = make_unique<Test>();
    return 0;
}`,output:`Created
Destroyed`,explanation:"Smart pointers automatically manage memory."},{code:`#include <iostream>
#include <thread>
using namespace std;

void task() {
    cout << "Running in thread" << endl;
}

int main() {
    thread t(task);
    t.join();
    return 0;
}`,output:"Running in thread",explanation:"Basic multithreading using `std::thread`."}]}},csharp:{intro:{title:"C# Introduction",description:"C# (pronounced 'C-Sharp') is a modern, object-oriented, type-safe programming language developed by Microsoft. It's primarily used for developing desktop, mobile, and web applications, especially with the .NET framework and .NET Core.",examples:[{code:`using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,output:"Hello, World!",explanation:"Basic C# program with a Main entry point."}]},variables:{title:"C# Variables",description:"Variables in C# are strongly typed. You can declare them with explicit types or use `var` for implicit typing.",examples:[{code:`int age = 25;
string name = "Alice";
var city = "London";  // inferred as string
const double Pi = 3.14; // compile-time constant
readonly DateTime createdAt = DateTime.Now; // runtime constant`,output:"Variables declared and initialized with different keywords.",explanation:"`const` is compile-time constant; `readonly` is runtime constant."}]},dataTypes:{title:"C# Data Types",description:"C# supports value types (int, double, bool, structs) and reference types (string, arrays, objects).",examples:[{code:`int num = 100;
double pi = 3.14159;
bool isAlive = true;
char letter = 'A';
string message = "Hello";`,output:"Examples of value and reference types.",explanation:"C# data types are divided into value types and reference types."}]},operators:{title:"C# Operators",description:"Operators in C# include arithmetic, comparison, logical, assignment, bitwise, and more.",examples:[{code:`int a = 5, b = 2;
Console.WriteLine(a + b);  // 7
Console.WriteLine(a > b);  // True
Console.WriteLine(a & b);  // 0 (bitwise AND)
Console.WriteLine(a == 5 && b == 2); // True`,output:`7
True
0
True`,explanation:"Arithmetic, relational, logical, and bitwise operators."}]},controlFlow:{title:"Control Flow in C#",description:"C# supports conditional statements, loops, and switch-case structures.",examples:[{code:`int score = 85;
if (score >= 90) Console.WriteLine("A");
else if (score >= 80) Console.WriteLine("B");
else Console.WriteLine("C");`,output:"B",explanation:"Conditional branching using `if-else`."},{code:`for (int i = 0; i < 3; i++) {
    Console.WriteLine(i);
}`,output:`0
1
2`,explanation:"`for` loop example."},{code:`int day = 2;
switch(day) {
    case 1: Console.WriteLine("Monday"); break;
    case 2: Console.WriteLine("Tuesday"); break;
    default: Console.WriteLine("Other day"); break;
}`,output:"Tuesday",explanation:"`switch` statement example."}]},functions:{title:"C# Functions",description:"Methods (functions) in C# can have parameters, return types, optional parameters, and overloads.",examples:[{code:`int Add(int x, int y) {
    return x + y;
}

void Main() {
    Console.WriteLine(Add(5, 7));
}`,output:"12",explanation:"Method with parameters and return type."},{code:`void Greet(string name = "Guest") {
    Console.WriteLine($"Hello, {name}");
}

void Main() {
    Greet("Alice");
    Greet();
}`,output:`Hello, Alice
Hello, Guest`,explanation:"Optional parameter with default value."}]},oop:{title:"C# Object-Oriented Programming",description:"C# supports encapsulation, inheritance, polymorphism, and abstraction.",examples:[{code:`class Person {
    public string Name { get; set; }
    public Person(string name) { Name = name; }
    public virtual void Speak() {
        Console.WriteLine($"Hi, I'm {Name}");
    }
}

class Student : Person {
    public Student(string name) : base(name) {}
    public override void Speak() {
        Console.WriteLine($"{Name} is a student");
    }
}

void Main() {
    Person p = new Person("Alice");
    p.Speak();
    Student s = new Student("Bob");
    s.Speak();
}`,output:`Hi, I'm Alice
Bob is a student`,explanation:"Inheritance and method overriding."}]},collections:{title:"C# Collections",description:"Collections include arrays, lists, dictionaries, sets, and queues.",examples:[{code:`var numbers = new List<int>() { 1, 2, 3 };
numbers.Add(4);
Console.WriteLine(numbers[0]); // 1

var dict = new Dictionary<string, int>();
dict["Alice"] = 25;
dict["Bob"] = 30;
Console.WriteLine(dict["Bob"]);`,output:`1
30`,explanation:"Using List and Dictionary in C#."}]},linq:{title:"C# LINQ",description:"Language Integrated Query (LINQ) is used to query collections using a declarative syntax.",examples:[{code:`var numbers = new List<int>() { 1, 2, 3, 4, 5 };
var even = numbers.Where(n => n % 2 == 0);
foreach(var n in even) Console.WriteLine(n);`,output:`2
4`,explanation:"LINQ filtering example."}]},async:{title:"C# Async/Await",description:"C# uses async/await for asynchronous programming with `Task` and `Task<T>`.",examples:[{code:`async Task<string> FetchData() {
    await Task.Delay(1000);
    return "Data fetched";
}

async Task Main() {
    Console.WriteLine("Start");
    string data = await FetchData();
    Console.WriteLine(data);
    Console.WriteLine("End");
}`,output:`Start
Data fetched
End`,explanation:"Async method with await."}]},advanced:{title:"Advanced C# Features",description:"C# also supports delegates, events, generics, extension methods, records, pattern matching, and more.",examples:[{code:`delegate void Greet(string name);

void Main() {
    Greet greet = (name) => Console.WriteLine($"Hello {name}");
    greet("Alice");
}`,output:"Hello Alice",explanation:"Delegates and lambda expressions."},{code:`record Person(string Name, int Age);

void Main() {
    var p1 = new Person("Alice", 25);
    var p2 = p1 with { Age = 26 };
    Console.WriteLine(p1);
    Console.WriteLine(p2);
}`,output:`Person { Name = Alice, Age = 25 }
Person { Name = Alice, Age = 26 }`,explanation:"C# 9.0 records and immutability."}]}},php:{intro:{title:"Introduction",description:"PHP (Hypertext Preprocessor) is a widely-used open-source scripting language especially suited for web development. It runs on the server side and can generate dynamic page content, handle forms, interact with databases, manage sessions, and more.",examples:[{code:`<?php
echo "Hello, World!";
?>`,output:"Hello, World!",explanation:"Basic PHP program using `echo` to print output."}]},variables:{title:"PHP Variables",description:"Variables in PHP start with a `$` symbol and are loosely typed. They can hold different data types without explicit declaration.",examples:[{code:`<?php
$name = "Alice";
$age = 25;
$height = 5.7;
$isAdmin = true;

echo "$name is $age years old.";
?>`,output:"Alice is 25 years old.",explanation:"Variables can hold strings, integers, floats, and booleans."}]},operators:{title:"Operators in PHP",description:"PHP supports arithmetic, comparison, logical, and assignment operators.",examples:[{code:`<?php
$a = 10; 
$b = 5;

echo $a + $b;  // 15
echo $a > $b;  // true
echo ($a == 10 && $b == 5); // true
?>`,output:`15
1
1`,explanation:"`&&` is logical AND, `==` is equality check, arithmetic operators work as expected."}]},control:{title:"Control Structures",description:"PHP supports `if`, `else`, `switch`, and loop constructs.",examples:[{code:`<?php
$day = "Monday";

if ($day == "Monday") {
  echo "Start of the week!";
} else {
  echo "Not Monday!";
}
?>`,output:"Start of the week!",explanation:"Basic conditional statement in PHP."},{code:`<?php
for ($i = 1; $i <= 5; $i++) {
  echo $i . " ";
}
?>`,output:"1 2 3 4 5 ",explanation:"Loop from 1 to 5 using a `for` loop."}]},functions:{title:"PHP Functions",description:"Functions in PHP are blocks of reusable code. They can have parameters and return values.",examples:[{code:`<?php
function greet($name) {
  return "Hello, $name!";
}

echo greet("Bob");
?>`,output:"Hello, Bob!",explanation:"Custom function with parameter and return value."}]},arrays:{title:"PHP Arrays",description:"Arrays in PHP can be indexed, associative, or multidimensional.",examples:[{code:`<?php
// Indexed array
$fruits = ["Apple", "Banana", "Mango"];
echo $fruits[1];  // Banana

// Associative array
$person = ["name" => "Alice", "age" => 25];
echo $person["name"]; // Alice

// Multidimensional array
$matrix = [[1,2], [3,4]];
echo $matrix[1][0]; // 3
?>`,output:`Banana
Alice
3`,explanation:"Arrays can be indexed numerically or with keys."}]},oop:{title:"Object-Oriented PHP",description:"PHP supports classes, objects, inheritance, interfaces, and traits.",examples:[{code:`<?php
class Person {
  public $name;
  public function __construct($name) {
    $this->name = $name;
  }
  public function greet() {
    return "Hi, I'm " . $this->name;
  }
}

$p = new Person("Alice");
echo $p->greet();
?>`,output:"Hi, I'm Alice",explanation:"Basic class with constructor and method."},{code:`<?php
interface Animal {
  public function sound();
}

class Dog implements Animal {
  public function sound() {
    return "Woof!";
  }
}

$d = new Dog();
echo $d->sound();
?>`,output:"Woof!",explanation:"Interface implementation in PHP OOP."}]},superglobals:{title:"PHP Superglobals",description:"PHP provides built-in superglobals like `$_GET`, `$_POST`, `$_SESSION`, and `$_SERVER`.",examples:[{code:`<?php
// URL: example.com/index.php?name=Alice
echo $_GET["name"];
?>`,output:"Alice",explanation:"`$_GET` is used to capture query string parameters."}]},forms:{title:"Forms in PHP",description:"PHP is often used to handle form submissions.",examples:[{code:`<!-- form.html -->
<form method="post" action="submit.php">
  Name: <input type="text" name="name">
  <input type="submit">
</form>

// submit.php
<?php
$name = $_POST["name"];
echo "Hello, $name!";
?>`,output:"Hello, Alice!",explanation:"Form data is submitted with POST and handled by PHP."}]},database:{title:"PHP with MySQL",description:"PHP works with databases like MySQL using `mysqli` or `PDO`.",examples:[{code:`<?php
$conn = new mysqli("localhost", "root", "", "testdb");
if ($conn->connect_error) die("Connection failed");

$result = $conn->query("SELECT name FROM users");
while ($row = $result->fetch_assoc()) {
  echo $row["name"] . "\\n";
}
$conn->close();
?>`,output:`Alice
Bob
Charlie`,explanation:"Database connection and fetching results with MySQLi."}]},errors:{title:"Error Handling",description:"PHP provides `try`, `catch`, and `finally` blocks for exceptions.",examples:[{code:`<?php
try {
  if (!file_exists("data.txt")) {
    throw new Exception("File not found");
  }
} catch (Exception $e) {
  echo "Error: " . $e->getMessage();
} finally {
  echo " - Done";
}
?>`,output:"Error: File not found - Done",explanation:"Using exceptions for error handling."}]},advanced:{title:"Advanced PHP Features",description:"PHP also supports namespaces, traits, generators, type declarations, and modern features like arrow functions and attributes.",examples:[{code:`<?php
// Arrow function
$square = fn($n) => $n * $n;
echo $square(5);

// Generator
function countUp($max) {
  for ($i = 1; $i <= $max; $i++) yield $i;
}
foreach (countUp(3) as $num) echo $num;
?>`,output:"2531",explanation:"Arrow function for short syntax, generator for efficient iteration."}]}},html:{intro:{title:"HTML Introduction",description:"HTML (HyperText Markup Language) is the standard language for creating web pages. It provides the structure of a webpage, which is styled using CSS and made interactive with JavaScript.",examples:[{code:`<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Hello World!</h1>
  <p>This is my first HTML page.</p>
</body>
</html>`,output:"Renders a simple HTML page with a heading and paragraph.",explanation:"`<!DOCTYPE html>` defines the document type. `<html>` is the root, `<head>` contains metadata, and `<body>` contains visible content."}]},text:{title:"Text Elements",description:"HTML provides tags to display text content with structure and emphasis.",examples:[{code:`<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>This is a paragraph.</p>
<strong>Bold Text</strong>
<em>Italic Text</em>`,output:"Displays headings, paragraph, bold, and italic text.",explanation:"Use heading tags `<h1>–<h6>` for hierarchy. `<strong>` and `<em>` provide semantic emphasis."}]},links:{title:"Links",description:"Links connect documents or navigate within a page.",examples:[{code:`<a href="https://example.com">Visit Example</a>
<a href="#section">Go to Section</a>`,output:"Clickable links to external page and page section.",explanation:"The `href` attribute specifies the link target. Use `#id` for internal navigation."}]},images:{title:"Images",description:"Use the `<img>` tag to embed images.",examples:[{code:'<img src="image.jpg" alt="Description" width="300" height="200">',output:"Displays an image 300x200 with alt text.",explanation:"`alt` provides alternative text for accessibility and SEO."}]},lists:{title:"Lists",description:"HTML supports ordered, unordered, and definition lists.",examples:[{code:`<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>
<ol>
  <li>First</li>
  <li>Second</li>
</ol>
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
</dl>`,output:"Unordered list, ordered list, and definition list.",explanation:"Use `<ul>`, `<ol>`, and `<dl>` for different list types."}]},forms:{title:"Forms",description:"Forms allow user input.",examples:[{code:`<form action="/submit" method="post">
  <label>Name: <input type="text" name="username"></label>
  <input type="submit" value="Submit">
</form>`,output:"A form with text input and submit button.",explanation:"Forms collect data and send it via `GET` or `POST` methods."},{code:`<form>
  <input type="email" placeholder="Enter email">
  <input type="password" placeholder="Password">
  <input type="checkbox" checked> Remember me
  <input type="radio" name="gender" value="male"> Male
  <input type="radio" name="gender" value="female"> Female
</form>`,output:"Form with multiple input types.",explanation:"HTML5 provides specialized input types like `email`, `password`, `checkbox`, and `radio`."}]},tables:{title:"Tables",description:"Tables display data in tabular form.",examples:[{code:`<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>25</td>
  </tr>
</table>`,output:"A simple table with headers and rows.",explanation:"`<table>` contains rows `<tr>` and cells `<td>` or headers `<th>`."}]},semantic:{title:"Semantic HTML",description:"Semantic tags describe meaning and structure of content.",examples:[{code:`<header>Page Header</header>
<nav>Navigation Links</nav>
<main>Main Content</main>
<article>Article Content</article>
<aside>Sidebar</aside>
<footer>Footer Content</footer>`,output:"Page with semantic layout sections.",explanation:"Semantic elements improve accessibility, SEO, and readability."}]},media:{title:"Media Elements",description:"Embed audio and video using HTML5.",examples:[{code:`<audio controls>
  <source src="sound.mp3" type="audio/mpeg">
</audio>

<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
</video>`,output:"Playable audio and video.",explanation:"Use `<audio>` and `<video>` with `controls` for playback UI."}]},canvasSvg:{title:"Canvas & SVG",description:"For graphics and drawing.",examples:[{code:`<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(20, 20, 150, 50);
<\/script>`,output:"Draws a red rectangle.",explanation:"Canvas API is used for 2D graphics."},{code:`<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" fill="yellow"/>
</svg>`,output:"SVG circle.",explanation:"SVG uses XML-like syntax for vector graphics."}]},advanced:{title:"Advanced HTML Features",description:"Covers modern and advanced HTML capabilities.",examples:[{code:`<details>
  <summary>More info</summary>
  <p>This is hidden until expanded.</p>
</details>`,output:"Expandable/collapsible section.",explanation:"`<details>` and `<summary>` allow toggle-able content."},{code:`<progress value="70" max="100"></progress>
<meter value="0.6">60%</meter>`,output:"Progress bar and meter.",explanation:"Used for showing progress and measurements."},{code:'<iframe src="https://example.com" width="300" height="200"></iframe>',output:"Embedded external page.",explanation:"`<iframe>` embeds another webpage."}]}},css:{intro:{title:"CSS Introduction",description:"CSS (Cascading Style Sheets) is used to style and layout HTML elements. It controls colors, fonts, spacing, positioning, and responsiveness of web pages.",examples:[{code:`p {
  color: blue;
  font-size: 16px;
}`,output:"Paragraph text appears blue and with font size 16px.",explanation:"A simple CSS rule with a selector, property, and value."}]},selectors:{title:"CSS Selectors",description:"Selectors target HTML elements for styling.",examples:[{code:`/* Universal */
* { margin: 0; padding: 0; }

/* Element */
p { color: green; }

/* Class */
.intro { font-weight: bold; }

/* ID */
#main { background: yellow; }

/* Descendant */
div p { color: red; }

/* Pseudo-class */
a:hover { text-decoration: underline; }`,explanation:"Different ways to select elements for styling."}]},display:{title:"CSS Display",description:"The display property controls how elements are displayed on the page.",examples:[{code:`div { display: block; }
span { display: inline; }
img { display: inline-block; }
.hidden { display: none; }`,explanation:"`block`, `inline`, `inline-block`, and `none` are common display types."}]},position:{title:"CSS Position",description:"The position property specifies the positioning method for elements.",examples:[{code:`.box1 { position: static; }
.box2 { position: relative; top: 20px; }
.box3 { position: absolute; right: 10px; }
.box4 { position: fixed; bottom: 0; }
.box5 { position: sticky; top: 0; }`,explanation:"`static`, `relative`, `absolute`, `fixed`, and `sticky` control element placement."}]},boxModel:{title:"Box Model",description:"Every element in CSS is a box with content, padding, border, and margin.",examples:[{code:`div {
  width: 200px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}`,explanation:"Width = content width. Padding adds space inside border. Margin adds space outside."}]},flexbox:{title:"CSS Flexbox",description:"Flexbox makes it easier to design flexible and responsive layouts.",examples:[{code:`.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,explanation:"`justify-content` aligns items horizontally, `align-items` vertically."},{code:`.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}`,explanation:"`flex-direction` controls row/column direction. `gap` adds spacing between items."},{code:`.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100px;
}`,explanation:"`flex` shorthand defines how items grow, shrink, and set base width."}]},grid:{title:"CSS Grid",description:"Grid is a two-dimensional layout system for rows and columns.",examples:[{code:`.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 10px;
}`,explanation:"Defines a grid with 3 equal columns and auto row height."},{code:`.grid-item {
  grid-column: span 2;
  grid-row: 1 / 3;
}`,explanation:"Grid items can span across multiple rows and columns."}]},typography:{title:"CSS Typography",description:"Control text appearance with font properties.",examples:[{code:`p {
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
}`,explanation:"Common font and text-related CSS properties."}]},colorsBackgrounds:{title:"Colors & Backgrounds",description:"CSS allows solid colors, gradients, and images for backgrounds.",examples:[{code:`div {
  background-color: lightblue;
  background-image: url('pattern.png');
  background-size: cover;
  background-position: center;
}`,explanation:"Combining solid color with background image."},{code:`div {
  background: linear-gradient(to right, red, yellow);
}`,explanation:"Using CSS gradient backgrounds."}]},transitions:{title:"Transitions & Animations",description:"Make CSS changes smooth with transitions and animations.",examples:[{code:`.box {
  transition: all 0.5s ease;
}
.box:hover {
  transform: scale(1.2);
}`,explanation:"Smooth scaling on hover with `transition`."},{code:`@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}

.box {
  animation: slide 2s infinite alternate;
}`,explanation:"Defining and using keyframe animation."}]},responsive:{title:"Responsive Design",description:"Media queries adapt styles for different screen sizes.",examples:[{code:`@media (max-width: 600px) {
  body { font-size: 14px; }
}`,explanation:"Change font size for small screens."}]}},sql:{intro:{title:"SQL Introduction",description:"SQL (Structured Query Language) is the standard language for interacting with relational databases. It allows you to create, read, update, and delete (CRUD) data, as well as define and manage database structures.",examples:[{code:`-- Basic SELECT query
SELECT first_name, last_name FROM employees;`,output:"Returns first_name and last_name columns from the employees table",explanation:"The `SELECT` statement retrieves data from one or more tables."}]},datatypes:{title:"SQL Data Types",description:"SQL supports a wide range of data types that vary slightly between database systems (MySQL, PostgreSQL, SQL Server, Oracle).",examples:[{code:`-- Common SQL Data Types
INT          -- Integer numbers
DECIMAL(10,2) -- Fixed-point numbers
VARCHAR(255) -- Variable-length string
DATE         -- Date only
DATETIME     -- Date and time
BOOLEAN      -- True/False values`,output:"Defines column types for different types of data",explanation:"Choosing the right data type ensures efficiency and integrity."}]},createTable:{title:"Creating Tables",description:"Tables hold the actual data in rows and columns. Use `CREATE TABLE` to define schema.",examples:[{code:`CREATE TABLE employees (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  hire_date DATE,
  salary DECIMAL(10,2)
);`,output:"Table `employees` created with id, name, hire_date, salary columns",explanation:"Defines a table with constraints such as `PRIMARY KEY` and `AUTO_INCREMENT`."}]},crud:{title:"CRUD Operations",description:"SQL allows you to Create, Read, Update, and Delete data in tables.",examples:[{code:`-- Insert new data
INSERT INTO employees (first_name, last_name, hire_date, salary)
VALUES ('Alice', 'Smith', '2023-01-01', 50000);`,output:"New employee row inserted",explanation:"`INSERT` adds a row into a table."},{code:`-- Read data
SELECT * FROM employees WHERE salary > 40000;`,output:"All employees with salary greater than 40000",explanation:"`SELECT` retrieves rows matching a condition."},{code:`-- Update data
UPDATE employees SET salary = salary * 1.1 WHERE id = 1;`,output:"Increases salary by 10% for employee with id = 1",explanation:"`UPDATE` modifies existing rows."},{code:`-- Delete data
DELETE FROM employees WHERE id = 2;`,output:"Removes employee with id = 2",explanation:"`DELETE` removes rows from a table."}]},joins:{title:"SQL Joins",description:"Joins combine rows from two or more tables based on related columns.",examples:[{code:`-- Inner Join
SELECT e.first_name, d.department_name
FROM employees e
INNER JOIN departments d
  ON e.department_id = d.id;`,output:"Shows employees with their department names",explanation:"`INNER JOIN` returns rows with matching values in both tables."},{code:`-- Left Join
SELECT e.first_name, d.department_name
FROM employees e
LEFT JOIN departments d
  ON e.department_id = d.id;`,output:"All employees with department if available (NULL if not matched)",explanation:"`LEFT JOIN` keeps all rows from left table even if no match exists."}]},constraints:{title:"Constraints",description:"Constraints enforce rules on data in tables to ensure integrity.",examples:[{code:`CREATE TABLE students (
  id INT PRIMARY KEY,
  email VARCHAR(100) UNIQUE,
  age INT CHECK (age >= 18),
  enrolled_date DATE NOT NULL
);`,output:"Table `students` created with constraints",explanation:"`PRIMARY KEY`, `UNIQUE`, `CHECK`, `NOT NULL` ensure data validity."}]},indexes:{title:"Indexes",description:"Indexes speed up data retrieval at the cost of extra storage and slower writes.",examples:[{code:"CREATE INDEX idx_last_name ON employees(last_name);",output:"Creates an index on the `last_name` column",explanation:"Indexes improve performance for large datasets."}]},views:{title:"Views",description:"Views are virtual tables based on queries.",examples:[{code:`CREATE VIEW high_earners AS
SELECT first_name, last_name, salary
FROM employees
WHERE salary > 80000;`,output:"Creates a view showing only employees with salary > 80000",explanation:"Views simplify complex queries and improve security."}]},procedures:{title:"Stored Procedures",description:"Stored procedures are reusable blocks of SQL stored in the database.",examples:[{code:`DELIMITER $$
CREATE PROCEDURE GetEmployeesByDept(IN deptId INT)
BEGIN
  SELECT * FROM employees WHERE department_id = deptId;
END $$
DELIMITER ;`,output:"Procedure created to fetch employees by department",explanation:"Procedures encapsulate logic inside the database."}]},triggers:{title:"Triggers",description:"Triggers automatically execute SQL when certain events happen.",examples:[{code:`CREATE TRIGGER before_employee_insert
BEFORE INSERT ON employees
FOR EACH ROW
SET NEW.hire_date = IFNULL(NEW.hire_date, CURDATE());`,output:"Automatically sets hire_date to today if not provided",explanation:"Triggers enforce rules and automate tasks."}]},transactions:{title:"Transactions",description:"Transactions group multiple SQL statements into one unit of work with `COMMIT` and `ROLLBACK`.",examples:[{code:`START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;`,output:"Transfers 100 units from account 1 to account 2 safely",explanation:"Transactions maintain data integrity."}]},windowFunctions:{title:"Window Functions",description:"Window functions perform calculations across sets of rows related to the current row.",examples:[{code:`SELECT id, salary,
  RANK() OVER (ORDER BY salary DESC) AS salary_rank
FROM employees;`,output:"Ranks employees by salary",explanation:"`RANK`, `ROW_NUMBER`, `SUM OVER` are powerful analytic functions."}]},advanced:{title:"Advanced SQL Features",description:"Covers optimization, CTEs, JSON handling, recursive queries, and more.",examples:[{code:`-- Common Table Expression (CTE)
WITH top_salaries AS (
  SELECT first_name, salary
  FROM employees
  ORDER BY salary DESC
  LIMIT 3
)
SELECT * FROM top_salaries;`,output:"Top 3 highest-paid employees",explanation:"CTEs improve readability and allow recursive queries."},{code:`-- JSON in SQL (PostgreSQL/MySQL)
SELECT info->>'city' AS city
FROM users
WHERE info->>'country' = 'UK';`,output:"Extracts city from JSON column for users in UK",explanation:"Modern SQL engines support JSON data operations."}]}},dart:{intro:{title:"Dart Introduction",description:"Dart is a client-optimized programming language developed by Google, designed for building fast apps on multiple platforms. It's widely used in Flutter for mobile, web, and desktop development.",examples:[{code:`// Simple Dart example
void main() {
  print("Hello, World!");
}`,output:"Hello, World!",explanation:"Basic Dart program printing to the console."}]},variables:{title:"Dart Variables",description:"Dart supports type inference, but you can also explicitly define types. Variables can be declared using `var`, `final`, and `const`.",examples:[{code:`void main() {
  var name = "Alice"; // inferred String
  int age = 25;       // explicit type
  final country = "UK"; // runtime constant
  const pi = 3.14159; // compile-time constant
  
  print("$name is $age years old from $country, pi = $pi");
}`,output:"Alice is 25 years old from UK, pi = 3.14159",explanation:"`var` is flexible, `final` values cannot change after assignment, and `const` values are compile-time constants."}]},controlFlow:{title:"Control Flow",description:"Dart supports standard control flow: if/else, loops, switch, and assertions.",examples:[{code:`void main() {
  int x = 10;
  
  if (x > 5) {
    print("x is greater than 5");
  } else {
    print("x is small");
  }
  
  for (int i = 0; i < 3; i++) {
    print(i);
  }
}`,output:`x is greater than 5
0
1
2`,explanation:"Conditional and loop examples in Dart."}]},functions:{title:"Dart Functions",description:"Functions are first-class citizens in Dart. You can use arrow syntax, optional parameters, and named parameters.",examples:[{code:`// Named and optional parameters
String greet({required String name, int age = 18}) {
  return "Hello $name, age: $age";
}

void main() {
  print(greet(name: "Bob"));
  print(greet(name: "Alice", age: 25));
}`,output:`Hello Bob, age: 18
Hello Alice, age: 25`,explanation:"Named parameters make functions more readable. Default values can be provided."}]},lists:{title:"Dart Lists",description:"Lists are ordered collections. They support many powerful methods and spread operators.",examples:[{code:`void main() {
  var fruits = ["Apple", "Banana", "Orange"];
  fruits.add("Mango");
  
  var numbers = [1, 2, 3];
  var more = [0, ...numbers]; // spread operator
  
  print(fruits);
  print(more);
}`,output:`[Apple, Banana, Orange, Mango]
[0, 1, 2, 3]`,explanation:"Using lists with spread operators and adding elements."}]},maps:{title:"Dart Maps",description:"Maps are key-value pairs, similar to dictionaries in Python or objects in JavaScript.",examples:[{code:`void main() {
  var person = {
    "name": "John",
    "age": 30,
  };
  
  print(person["name"]);
  person["city"] = "London";
  print(person);
}`,output:`John
{name: John, age: 30, city: London}`,explanation:"Maps allow dynamic addition and retrieval of key-value pairs."}]},classes:{title:"Dart Classes",description:"Dart is an object-oriented language. It supports constructors, inheritance, abstract classes, and mixins.",examples:[{code:`class Person {
  String name;
  int age;
  
  Person(this.name, this.age);
  
  void greet() => print("Hi, I'm $name");
}

void main() {
  var p = Person("Alice", 25);
  p.greet();
}`,output:"Hi, I'm Alice",explanation:"Basic class with constructor and method."},{code:`abstract class Animal {
  void makeSound(); // abstract method
}

class Dog extends Animal {
  @override
  void makeSound() => print("Woof!");
}

void main() {
  var d = Dog();
  d.makeSound();
}`,output:"Woof!",explanation:"Abstract classes define contracts that subclasses must implement."}]},mixins:{title:"Mixins",description:"Mixins allow code reuse across multiple classes without traditional inheritance.",examples:[{code:`mixin Walker {
  void walk() => print("Walking...");
}

mixin Swimmer {
  void swim() => print("Swimming...");
}

class Person with Walker, Swimmer {}

void main() {
  var p = Person();
  p.walk();
  p.swim();
}`,output:`Walking...
Swimming...`,explanation:"Mixins let you compose behaviors into classes."}]},async:{title:"Async/Await",description:"Dart uses `Future` and `Stream` for async programming. `await` pauses execution until the Future completes.",examples:[{code:`import 'dart:async';

Future<String> fetchData() async {
  return Future.delayed(Duration(seconds: 2), () => "Data received");
}

void main() async {
  print("Start");
  var data = await fetchData();
  print(data);
  print("End");
}`,output:`Start
Data received
End`,explanation:"Using async/await with Future."},{code:`// Stream example
Stream<int> countStream(int max) async* {
  for (int i = 1; i <= max; i++) {
    await Future.delayed(Duration(milliseconds: 500));
    yield i;
  }
}

void main() async {
  await for (var n in countStream(3)) {
    print(n);
  }
}`,output:`1
2
3`,explanation:"Streams emit multiple values over time."}]},exceptions:{title:"Exceptions",description:"Dart uses try/catch/finally for error handling.",examples:[{code:`void main() {
  try {
    int result = 10 ~/ 0; // integer division by zero
    print(result);
  } catch (e) {
    print("Error: $e");
  } finally {
    print("Cleanup done");
  }
}`,output:`Error: IntegerDivisionByZeroException
Cleanup done`,explanation:"Error handling with try/catch/finally."}]},generics:{title:"Generics",description:"Generics provide type safety and reusability in Dart collections and classes.",examples:[{code:`class Box<T> {
  T value;
  Box(this.value);
}

void main() {
  var intBox = Box<int>(123);
  var strBox = Box<String>("Hello");
  
  print(intBox.value);
  print(strBox.value);
}`,output:`123
Hello`,explanation:"Generics allow type-safe containers."}]},advanced:{title:"Advanced Dart",description:"Covers enums, extensions, typedefs, operators.",examples:[{code:`// Enum example
enum Status { pending, approved, rejected }

void main() {
  var s = Status.approved;
  print(s);
}`,output:"Status.approved",explanation:"Enums are special classes for fixed sets of values."},{code:`// Extension method
extension StringExtension on String {
  String capitalize() =>
      this[0].toUpperCase() + substring(1).toLowerCase();
}

void main() {
  print("dart".capitalize());
}`,output:"Dart",explanation:"Extensions let you add methods to existing classes."}]}},go:{intro:{title:"Go Introduction",description:"Go (or Golang) is an open-source programming language created at Google. It is known for its simplicity, concurrency model, and performance, making it ideal for cloud-native applications, microservices, and scalable systems.",examples:[{code:`package main
import "fmt"

func main() {
  fmt.Println("Hello, World!")
}`,output:"Hello, World!",explanation:"A basic Go program printing to the console."}]},variables:{title:"Go Variables",description:"Go uses `var` for variable declaration, `:=` for short variable declaration, and `const` for constants.",examples:[{code:`package main
import "fmt"

func main() {
  var name string = "Alice"
  age := 25
  const pi = 3.14
  
  fmt.Println(name, age, pi)
}`,output:"Alice 25 3.14",explanation:"`var` declares typed variables, `:=` infers type, and `const` defines constants."}]},controlFlow:{title:"Go Control Flow",description:"Go supports typical conditionals and loops. Unlike other languages, `while` does not exist; use `for` instead.",examples:[{code:`package main
import "fmt"

func main() {
  x := 10
  
  if x > 5 {
    fmt.Println("x is greater than 5")
  }
  
  for i := 0; i < 3; i++ {
    fmt.Println("Loop", i)
  }
}`,output:`x is greater than 5
Loop 0
Loop 1
Loop 2`,explanation:"Basic if condition and for loop in Go."}]},functions:{title:"Go Functions",description:"Functions in Go can return multiple values and support named return values.",examples:[{code:`package main
import "fmt"

func add(a int, b int) int {
  return a + b
}

func swap(x, y string) (string, string) {
  return y, x
}

func main() {
  fmt.Println(add(5, 3))
  a, b := swap("Hello", "World")
  fmt.Println(a, b)
}`,output:`8
World Hello`,explanation:"Functions can return single or multiple values."}]},arraysAndSlices:{title:"Go Arrays & Slices",description:"Go has fixed-size arrays and dynamic slices (preferred for most cases).",examples:[{code:`package main
import "fmt"

func main() {
  // Array
  arr := [3]int{1, 2, 3}
  fmt.Println(arr)

  // Slice
  slice := []string{"apple", "banana"}
  slice = append(slice, "mango")
  fmt.Println(slice)
}`,output:`[1 2 3]
[apple banana mango]`,explanation:"Arrays have fixed length, slices are dynamic."}]},maps:{title:"Go Maps",description:"Maps in Go are key-value pairs, similar to dictionaries in Python.",examples:[{code:`package main
import "fmt"

func main() {
  m := map[string]int{
    "Alice": 25,
    "Bob":   30,
  }
  
  m["Charlie"] = 35
  fmt.Println(m["Alice"])
  fmt.Println(m)
}`,output:`25
map[Alice:25 Bob:30 Charlie:35]`,explanation:"Declaring and using maps in Go."}]},structs:{title:"Go Structs",description:"Structs in Go are used to group fields together, similar to classes without methods.",examples:[{code:`package main
import "fmt"

type Person struct {
  Name string
  Age  int
}

func main() {
  p := Person{Name: "Alice", Age: 25}
  fmt.Println(p.Name, p.Age)
}`,output:"Alice 25",explanation:"A struct groups multiple fields together."}]},methods:{title:"Go Methods",description:"Go supports methods on structs, but it does not have classes or inheritance. Instead, it uses composition.",examples:[{code:`package main
import "fmt"

type Rectangle struct {
  width, height int
}

func (r Rectangle) Area() int {
  return r.width * r.height
}

func main() {
  rect := Rectangle{10, 5}
  fmt.Println(rect.Area())
}`,output:"50",explanation:"Defining methods on structs in Go."}]},interfaces:{title:"Go Interfaces",description:"Interfaces define behavior in Go. A type implements an interface implicitly by implementing its methods.",examples:[{code:`package main
import "fmt"

type Shape interface {
  Area() int
}

type Square struct {
  side int
}

func (s Square) Area() int {
  return s.side * s.side
}

func printArea(sh Shape) {
  fmt.Println(sh.Area())
}

func main() {
  sq := Square{4}
  printArea(sq)
}`,output:"16",explanation:"Interfaces are satisfied implicitly in Go."}]},concurrency:{title:"Go Concurrency",description:"Go's goroutines and channels provide powerful concurrency support.",examples:[{code:`package main
import (
  "fmt"
  "time"
)

func worker(msg string) {
  for i := 0; i < 3; i++ {
    fmt.Println(msg, i)
    time.Sleep(time.Millisecond * 500)
  }
}

func main() {
  go worker("Goroutine")
  worker("Main")
}`,output:`Main 0
Goroutine 0
Main 1
Goroutine 1
Main 2
Goroutine 2`,explanation:"`go` launches a new goroutine for concurrency."},{code:`package main
import "fmt"

func main() {
  ch := make(chan string)
  
  go func() {
    ch <- "Hello from Goroutine"
  }()
  
  msg := <-ch
  fmt.Println(msg)
}`,output:"Hello from Goroutine",explanation:"Using channels for communication between goroutines."}]},advanced:{title:"Advanced Go Concepts",description:"Some advanced topics in Go include error handling, packages, defer/panic/recover, and Go modules.",examples:[{code:`package main
import (
  "fmt"
  "errors"
)

func divide(a, b int) (int, error) {
  if b == 0 {
    return 0, errors.New("division by zero")
  }
  return a / b, nil
}

func main() {
  result, err := divide(10, 0)
  if err != nil {
    fmt.Println("Error:", err)
  } else {
    fmt.Println("Result:", result)
  }
}`,output:"Error: division by zero",explanation:"Error handling in Go with `error` type."},{code:`package main
import "fmt"

func main() {
  defer fmt.Println("World")
  fmt.Println("Hello")
}`,output:`Hello
World`,explanation:"`defer` delays execution until the surrounding function returns."}]}},swift:{intro:{title:"Swift Introduction",description:"Swift is a powerful and intuitive programming language developed by Apple for iOS, macOS, watchOS, and tvOS app development. It’s fast, safe, and expressive, making it a top choice for mobile and system-level programming.",examples:[{code:`// Hello World in Swift
print("Hello, World!")`,output:"Hello, World!",explanation:"A simple Swift program printing text to the console."}]},variables:{title:"Swift Variables and Constants",description:"In Swift, you declare variables using `var` and constants using `let`. Swift is type-safe but also supports type inference.",examples:[{code:`var name: String = "Alice"
let age: Int = 25
var height = 5.9   // Type inferred as Double

print("\\(name) is \\(age) years old, height: \\(height)")`,output:"Alice is 25 years old, height: 5.9",explanation:"`var` creates a mutable variable, while `let` creates an immutable constant."}]},controlFlow:{title:"Swift Control Flow",description:"Swift supports conditional statements and loops similar to other modern languages.",examples:[{code:`let number = 10

if number % 2 == 0 {
    print("Even")
} else {
    print("Odd")
}

for i in 1...5 {
    print(i)
}`,output:`Even
1
2
3
4
5`,explanation:"Using `if-else` and a range-based `for` loop."}]},functions:{title:"Swift Functions",description:"Functions are first-class citizens in Swift. They can have parameters, return values, default arguments, and variadic parameters.",examples:[{code:`func greet(name: String) -> String {
    return "Hello, \\(name)!"
}

print(greet(name: "Bob"))`,output:"Hello, Bob!",explanation:"Basic function with parameter and return type."},{code:`func add(_ a: Int, _ b: Int) -> Int {
    a + b
}

print(add(5, 3))`,output:"8",explanation:"Function with shorthand syntax and no explicit `return` keyword."}]},optionals:{title:"Swift Optionals",description:"Optionals represent values that may be `nil` (no value). They are unwrapped safely using `if let`, `guard let`, or optional chaining.",examples:[{code:`var name: String? = "Alice"

if let safeName = name {
    print("Hello, \\(safeName)")
} else {
    print("No name provided")
}`,output:"Hello, Alice",explanation:"Optional unwrapped safely with `if let`."},{code:`var score: Int? = nil
print(score ?? 0)`,output:"0",explanation:"Using `??` to provide a default value when optional is `nil`."}]},collections:{title:"Swift Collections",description:"Swift provides Arrays, Dictionaries, and Sets as primary collection types.",examples:[{code:`var fruits = ["Apple", "Banana", "Mango"]
fruits.append("Orange")
print(fruits[0])`,output:"Apple",explanation:"Arrays hold ordered collections of values."},{code:`var ages: [String: Int] = ["Alice": 25, "Bob": 30]
print(ages["Alice"] ?? 0)`,output:"25",explanation:"Dictionaries map keys to values."}]},classes:{title:"Swift Classes and Structures",description:"Swift supports both classes (reference types) and structs (value types).",examples:[{code:`class Person {
    var name: String
    var age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
    
    func greet() {
        print("Hi, I'm \\(name)")
    }
}

let p = Person(name: "Alice", age: 25)
p.greet()`,output:"Hi, I'm Alice",explanation:"Defining a class with properties, initializer, and method."},{code:`struct Point {
    var x: Int
    var y: Int
}

let p = Point(x: 3, y: 4)
print(p.x)`,output:"3",explanation:"Struct is a value type, copied on assignment."}]},protocols:{title:"Swift Protocols",description:"Protocols define blueprints of methods or properties, similar to interfaces in other languages.",examples:[{code:`protocol Greetable {
    func greet()
}

class Dog: Greetable {
    func greet() {
        print("Woof!")
    }
}

let d = Dog()
d.greet()`,output:"Woof!",explanation:"Dog conforms to the `Greetable` protocol."}]},errorHandling:{title:"Swift Error Handling",description:"Swift uses `do-try-catch` for error handling with `Error` types.",examples:[{code:`enum DivisionError: Error {
    case divideByZero
}

func divide(_ a: Int, _ b: Int) throws -> Int {
    if b == 0 { throw DivisionError.divideByZero }
    return a / b
}

do {
    let result = try divide(10, 2)
    print(result)
} catch {
    print("Error: \\(error)")
}`,output:"5",explanation:"Error handled safely using `do-try-catch`."}]},async:{title:"Swift Concurrency (async/await)",description:"Swift 5.5 introduced structured concurrency with `async/await` and `Task`.",examples:[{code:`import Foundation

func fetchData() async -> String {
    try? await Task.sleep(nanoseconds: 2_000_000_000)
    return "Fetched Data"
}

Task {
    print("Start")
    let data = await fetchData()
    print(data)
    print("End")
}`,output:`Start
Fetched Data
End`,explanation:"Using async/await for asynchronous tasks."}]}},kotlin:{intro:{title:"Kotlin Introduction",description:"Kotlin is a modern, statically typed programming language developed by JetBrains. It runs on the JVM, is fully interoperable with Java, and is the official language for Android development.",examples:[{code:`fun main() {
    println("Hello, World!")
}`,output:"Hello, World!",explanation:"A basic Kotlin program using the `main` function and `println`."}]},variables:{title:"Kotlin Variables",description:"Kotlin supports mutable (`var`) and immutable (`val`) variables. Type inference is powerful, but you can also specify types explicitly.",examples:[{code:`fun main() {
    var name = "Alice"     // mutable
    val age = 25           // immutable
    val country: String = "UK"
    println("$name is $age years old from $country")
}`,output:"Alice is 25 years old from UK",explanation:"`var` allows reassignment, while `val` makes the variable read-only."}]},controlFlow:{title:"Kotlin Control Flow",description:"Kotlin has familiar control structures such as `if`, `when` (like switch), and loops (`for`, `while`).",examples:[{code:`fun main() {
    val num = 5
    if (num > 0) {
        println("Positive")
    } else {
        println("Non-positive")
    }
}`,output:"Positive",explanation:"Basic `if-else` statement."},{code:`fun main() {
    val day = 3
    when (day) {
        1 -> println("Monday")
        2 -> println("Tuesday")
        3 -> println("Wednesday")
        else -> println("Other Day")
    }
}`,output:"Wednesday",explanation:"`when` is Kotlin’s alternative to switch-case."}]},functions:{title:"Kotlin Functions",description:"Functions in Kotlin are first-class citizens. They support default arguments, named parameters, and single-expression syntax.",examples:[{code:`fun greet(name: String = "World"): String {
    return "Hello, $name!"
}

fun main() {
    println(greet())
    println(greet("Bob"))
}`,output:`Hello, World!
Hello, Bob!`,explanation:"Default arguments in Kotlin functions."},{code:`fun add(a: Int, b: Int) = a + b

fun main() {
    println(add(3, 5))
}`,output:"8",explanation:"Single-expression function using `=`."}]},collections:{title:"Kotlin Collections",description:"Kotlin has powerful collection APIs: lists, sets, and maps. You can use functional-style operations like `map`, `filter`, and `reduce`.",examples:[{code:`fun main() {
    val numbers = listOf(1, 2, 3, 4, 5)
    val doubled = numbers.map { it * 2 }
    val even = numbers.filter { it % 2 == 0 }
    println(doubled)
    println(even)
}`,output:`[2, 4, 6, 8, 10]
[2, 4]`,explanation:"Mapping and filtering collections."},{code:`fun main() {
    val capitals = mapOf("UK" to "London", "India" to "Delhi")
    println(capitals["UK"])
}`,output:"London",explanation:"Using a `Map` in Kotlin."}]},classes:{title:"Kotlin Classes",description:"Kotlin is object-oriented and supports classes, inheritance, interfaces, and data classes.",examples:[{code:`class Person(val name: String, val age: Int) {
    fun greet() = "Hi, I'm $name"
}

fun main() {
    val p = Person("Alice", 25)
    println(p.greet())
}`,output:"Hi, I'm Alice",explanation:"Basic class with constructor and method."},{code:`data class User(val username: String, val email: String)

fun main() {
    val u = User("john_doe", "john@example.com")
    println(u)
}`,output:"User(username=john_doe, email=john@example.com)",explanation:"`data class` automatically generates `toString`, `equals`, and `hashCode`."}]},oop:{title:"OOP in Kotlin",description:"Kotlin supports OOP with inheritance, abstract classes, and interfaces.",examples:[{code:`open class Animal {
    open fun sound() = "Some sound"
}

class Dog: Animal() {
    override fun sound() = "Bark"
}

fun main() {
    val dog = Dog()
    println(dog.sound())
}`,output:"Bark",explanation:"Inheritance with `open` and `override`."},{code:`interface Drivable {
    fun drive()
}

class Car: Drivable {
    override fun drive() = println("Driving a car")
}

fun main() {
    val car = Car()
    car.drive()
}`,output:"Driving a car",explanation:"Interfaces in Kotlin are implemented with `override`."}]},nullSafety:{title:"Null Safety",description:"Kotlin’s type system is designed to eliminate null pointer exceptions by making nullability explicit.",examples:[{code:`fun main() {
    var name: String? = "Alice"
    println(name?.length) // Safe call
    name = null
    println(name?.length ?: 0) // Elvis operator
}`,output:`5
0`,explanation:"Safe call (`?.`) and Elvis operator (`?:`)."}]},coroutines:{title:"Kotlin Coroutines",description:"Coroutines provide a simple way to write asynchronous, non-blocking code in Kotlin.",examples:[{code:`import kotlinx.coroutines.*

fun main() = runBlocking {
    launch {
        delay(1000L)
        println("World!")
    }
    println("Hello,")
}`,output:`Hello,
World!`,explanation:"`launch` creates a coroutine, and `delay` suspends without blocking."},{code:`import kotlinx.coroutines.*

suspend fun fetchData(): String {
    delay(2000L)
    return "Data fetched"
}

fun main() = runBlocking {
    val data = async { fetchData() }
    println("Waiting...")
    println(data.await())
}`,output:`Waiting...
Data fetched`,explanation:"`async` returns a `Deferred`, and `await` retrieves its value."}]},extensions:{title:"Kotlin Extensions",description:"You can extend existing classes with new functions without modifying their source code.",examples:[{code:`fun String.addExclamation() = this + "!"

fun main() {
    val text = "Hello"
    println(text.addExclamation())
}`,output:"Hello!",explanation:"Extension function added to `String`."}]}},typescript:{intro:{title:"TypeScript Introduction",description:"TypeScript is a superset of JavaScript developed by Microsoft. It adds static typing, interfaces, generics, and modern features while compiling down to JavaScript. This makes code safer, more maintainable, and easier to debug.",examples:[{code:`// Basic TypeScript example
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("Alice"));`,output:"Hello, Alice!",explanation:"The `name` parameter is typed as a string, and the function is guaranteed to return a string."}]},variables:{title:"TypeScript Variables",description:"Variables in TypeScript can be declared using `let`, `const`, or `var` (not recommended). You can specify types explicitly or let the compiler infer them.",examples:[{code:`let age: number = 25;
const pi: number = 3.14159;
let isStudent: boolean = true;
let name: string = "Alice";

// Type inference
let country = "UK"; // inferred as string
console.log(\`\${name} is \${age} from \${country}\`);`,output:"Alice is 25 from UK",explanation:"Explicit typing makes your code more predictable, while inference reduces verbosity."}]},functions:{title:"TypeScript Functions",description:"Functions in TypeScript can have typed parameters, optional parameters, default values, and return types.",examples:[{code:`function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3));`,output:"8",explanation:"Both parameters and return type are typed as numbers."},{code:'function greet(name: string, age?: number): string {\n  return age ? `Hello, ${name}, age ${age}` : `Hello, ${name}`;\n}\n\nconsole.log(greet("Bob"));\nconsole.log(greet("Alice", 25));',output:`Hello, Bob
Hello, Alice, age 25`,explanation:"Optional parameter `age` may or may not be passed."},{code:`// Arrow function with type
const multiply = (x: number, y: number): number => x * y;
console.log(multiply(4, 6));`,output:"24",explanation:"Arrow functions can be typed like normal functions."}]},arrays:{title:"TypeScript Arrays & Tuples",description:"TypeScript arrays can be typed, and tuples allow fixed-length arrays with specific types.",examples:[{code:`let numbers: number[] = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);`,output:"[1, 2, 3, 4, 5]",explanation:"Array explicitly typed as `number[]`."},{code:`let person: [string, number] = ["Alice", 25];
console.log(person[0]);`,output:"Alice",explanation:"Tuple with a string and number."}]},interfaces:{title:"TypeScript Interfaces",description:"Interfaces define the shape of objects, ensuring that objects meet specific requirements.",examples:[{code:`interface Person {
  name: string;
  age: number;
  greet(): string;
}

const user: Person = {
  name: "Alice",
  age: 25,
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
};

console.log(user.greet());`,output:"Hi, I'm Alice",explanation:"Interfaces enforce structure and type safety."}]},classes:{title:"TypeScript Classes",description:"Classes in TypeScript support access modifiers (`public`, `private`, `protected`) and implement interfaces.",examples:[{code:`class Animal {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  move(distance: number): void {
    console.log(\`\${this.name} moved \${distance}m\`);
  }
}

const dog = new Animal("Dog");
dog.move(10);`,output:"Dog moved 10m",explanation:"Basic class with constructor and method."},{code:`class Student extends Animal {
  grade: string;
  
  constructor(name: string, grade: string) {
    super(name);
    this.grade = grade;
  }
  
  study() {
    console.log(\`\${this.name} is studying for grade \${this.grade}\`);
  }
}

const s = new Student("John", "A");
s.study();`,output:"John is studying for grade A",explanation:"Inheritance in TypeScript classes."}]},generics:{title:"TypeScript Generics",description:"Generics allow writing reusable, type-safe code for collections, functions, and classes.",examples:[{code:`function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(123));`,output:`Hello
123`,explanation:"Generic function works with any type."},{code:`class Box<T> {
  contents: T;
  constructor(value: T) {
    this.contents = value;
  }
}

const stringBox = new Box("Book");
const numberBox = new Box(42);
console.log(stringBox.contents, numberBox.contents);`,output:"Book 42",explanation:"Generic class stores different types safely."}]},async:{title:"Async/Await in TypeScript",description:"TypeScript supports async/await with Promises for handling asynchronous tasks.",examples:[{code:`async function fetchData(): Promise<string> {
  return new Promise(resolve =>
    setTimeout(() => resolve("Fetched Data"), 2000)
  );
}

(async () => {
  console.log("Start");
  const data = await fetchData();
  console.log(data);
  console.log("End");
})();`,output:`Start
Fetched Data
End`,explanation:"`await` pauses execution until the promise resolves."},{code:`async function multipleRequests() {
  const results = await Promise.all([
    Promise.resolve("Users"),
    Promise.resolve("Posts"),
  ]);
  console.log(results);
}

multipleRequests();`,output:"[ 'Users', 'Posts' ]",explanation:"`Promise.all` runs multiple tasks in parallel."}]},advanced:{title:"Advanced TypeScript Features",description:"TypeScript has powerful features like union types, intersection types, utility types, and decorators.",examples:[{code:`// Union Types
let value: string | number;
value = "Hello";
value = 42;

// Intersection Types
interface A { a: string; }
interface B { b: number; }
type C = A & B;
const obj: C = { a: "Hi", b: 10 };`,output:"No direct console output",explanation:"Union types allow multiple possible types; intersection merges types."},{code:`// Type Aliases & Utility Types
type Point = { x: number; y: number };
type ReadonlyPoint = Readonly<Point>;

const p: ReadonlyPoint = { x: 10, y: 20 };
// p.x = 15; // Error: cannot assign to read-only`,output:"Compile-time error",explanation:"Utility types like `Readonly`, `Partial`, and `Pick` simplify type manipulation."}]}}},Sa={javascript:"JavaScript",python:"Python",java:"Java",csharp:"C#",php:"PHP",html:"HTML",css:"CSS",sql:"SQL",dart:"Dart",c:"C",cpp:"C++",go:"Go",swift:"Swift",kotlin:"Kotlin",typescript:"TypeScript"},_g=new Set(["javascript","python","html","css"]),Hg=Object.entries(Sa).filter(([u])=>!_g.has(u)).sort(()=>Math.random()-.5).slice(0,4).map(([u,s])=>M.jsx("li",{children:M.jsxs(st,{to:`/${u}`,children:[s," Tutorial"]})},u));function Ng(){return M.jsx(yg,{children:M.jsxs(ky,{children:[M.jsx(Hl,{path:"/",element:M.jsx(zg,{})}),M.jsx(Hl,{path:"/:language",element:M.jsx(ap,{})}),M.jsx(Hl,{path:"/:language/:topic",element:M.jsx(ap,{})}),M.jsx(Hl,{path:"/search",element:M.jsx(Bg,{})})]})})}function zg(){const u=iu(s=>s.darkMode);return M.jsxs("div",{className:`app ${u?"dark":""}`,children:[M.jsx(Yr,{}),M.jsxs("div",{className:"main-content",children:[M.jsx(Qr,{languages:Sa,currentLanguage:null,topics:null,currentTopic:null}),M.jsx("main",{className:"content-area",children:M.jsxs("div",{className:"home-content",children:[M.jsxs("div",{className:"hero",children:[M.jsx("h1",{children:"Learn to Code"}),M.jsx("p",{children:"The world's most popular programming tutorials"})]}),M.jsx("div",{className:"language-grid",children:Object.entries(Sa).map(([s,f])=>M.jsx(st,{to:`/${s}`,className:"language-card",children:M.jsxs("div",{className:"card-content",children:[M.jsx("h3",{children:f}),M.jsxs("p",{children:["Start learning ",f," now"]})]})},s))})]})})]}),M.jsx(Xr,{})]})}const Ug=u=>u.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function ap(){var w,j,O,G;const{language:u,topic:s}=_y(),f=Ur(),c=iu(_=>_.darkMode),d=Object.fromEntries(Object.entries(tu).map(([_,B])=>[_,Object.entries(B).map(([X,q])=>{let L=q.title;const k=Sa[_];if(k){const te=Ug(k);L=L.replace(new RegExp(`^${te}\\s+`,"i"),""),L=L.replace(new RegExp(`\\s+in\\s+${te}$`,"i"),""),L=L.replace(new RegExp(`\\s+${te}$`,"i"),""),L=L.replace(new RegExp(`\\s*${te}\\s*`,"gi")," ")}return{id:X,title:L.trim().replace(/\s+/g," ")}})]));N.useEffect(()=>{!s&&d[u]&&d[u].length>0&&f(`/${u}/${d[u][0].id}`,{replace:!0})},[u,s,f]);const h=((w=tu[u])==null?void 0:w[s])||((j=tu[u])==null?void 0:j.intro)||{title:"Tutorial Not Found",description:"The requested tutorial doesn't exist."},x=d[u]||[],R=x.findIndex(_=>_.id===s),v=R>0?x[R-1]:null,p=R<x.length-1?x[R+1]:null;return M.jsxs("div",{className:`app ${c?"dark":""}`,children:[M.jsx(Yr,{}),M.jsxs("div",{className:"main-content",children:[M.jsx(Qr,{languages:Sa,currentLanguage:u,topics:x,currentTopic:s}),M.jsxs("main",{className:"content-area",children:[M.jsxs("div",{className:"breadcrumb",children:[M.jsx(st,{to:"/",children:"Tutorials"})," >",M.jsx(st,{to:`/${u}`,children:Sa[u]||u})," >",M.jsx("span",{children:h.title})]}),M.jsx("h1",{className:"content-title",children:h.title}),M.jsx("p",{className:"content-description",children:h.description}),M.jsxs("div",{className:"examples",children:[(O=h.examples)==null?void 0:O.map((_,B)=>M.jsxs("div",{className:"example-card",children:[M.jsxs("h3",{children:["Example ",B+1]}),M.jsx("pre",{className:"code-block",children:M.jsx("code",{children:_.code})}),_.output&&M.jsxs("div",{className:"example-output",children:[M.jsx("h4",{children:"Output:"}),M.jsx("div",{className:"output-box",children:_.output})]}),M.jsx("p",{className:"explanation",children:_.explanation})]},B)),(G=h.topics)==null?void 0:G.map((_,B)=>M.jsxs("div",{className:"example-card",children:[M.jsx("h3",{children:_.title}),_.code&&M.jsx("pre",{className:"code-block",children:M.jsx("code",{children:_.code})}),M.jsx("p",{className:"explanation",children:_.explanation})]},B))]}),M.jsxs("div",{className:"content-navigation",children:[v?M.jsxs(st,{to:`/${u}/${v.id}`,className:"nav-btn prev-btn",children:[M.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-left",viewBox:"0 0 16 16",children:M.jsx("path",{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"})})," Previous"]}):M.jsx("div",{}),p?M.jsxs(st,{to:`/${u}/${p.id}`,className:"nav-btn next-btn",children:["Next ",M.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-right",viewBox:"0 0 16 16",children:M.jsx("path",{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"})})]}):M.jsx("div",{})]})]})]}),M.jsx(Xr,{})]})}function Yr(){const{darkMode:u,toggleDarkMode:s}=iu(),{setSearchQuery:f}=xp(),{toggleSidebar:c}=Sp(),[d,h]=N.useState(""),x=Ur(),R=v=>{v.preventDefault(),f(d),x("/search")};return M.jsxs("header",{className:"header",children:[M.jsxs("div",{className:"header-left",children:[M.jsx("button",{className:"menu-btn",onClick:c,children:M.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-list",viewBox:"0 0 16 16",children:M.jsx("path",{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"})})}),M.jsx(st,{to:"/",className:"logo",children:M.jsx("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",className:"logo",width:"181.000000pt",height:"97.000000pt",viewBox:"0 0 181.000000 97.000000",preserveAspectRatio:"xMidYMid meet",children:M.jsxs("g",{transform:"translate(0.000000,97.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none",children:[M.jsx("path",{d:`M112 955 c-44 -19 -91 -72 -98 -112 -13 -71 38 -139 181 -238 85 -59\r
            172 -140 191 -177 26 -50 16 -85 -36 -121 -13 -9 -19 -17 -13 -17 23 0 99 67\r
            117 103 39 81 -14 162 -180 274 -167 113 -240 219 -183 266 19 15 34 18 72 14\r
            59 -7 197 -78 218 -112 l15 -25 21 50 c25 60 27 58 -88 90 -85 23 -170 25\r
            -217 5z`}),M.jsx("path",{d:"M1715 840 l-29 -30 32 -33 32 -32 30 31 30 30 -33 32 -33 32 -29 -30z"}),M.jsx("path",{d:`M1244 692 c-32 -5 -72 -53 -99 -118 l-25 -59 0 87 0 87 -27 -15 c-16\r
            -7 -41 -14 -57 -14 -23 0 -27 -3 -20 -17 5 -10 10 -81 12 -159 3 -110 0 -149\r
            -12 -178 l-15 -36 74 0 74 0 -15 35 c-37 89 11 318 73 342 9 3 30 1 47 -5 32\r
            -13 40 -9 50 24 5 17 2 22 -16 25 -13 3 -33 3 -44 1z`}),M.jsx("path",{d:`M1440 690 c-41 -7 -87 -35 -101 -62 -12 -23 -12 -24 21 -33 23 -5 27\r
            -2 40 37 14 40 18 43 56 46 53 4 66 -13 68 -84 l1 -56 -66 -17 c-37 -9 -86\r
            -29 -109 -45 -73 -48 -88 -132 -32 -177 24 -19 35 -20 102 -14 89 8 109 8 173\r
            -1 l47 -6 -10 27 c-5 14 -10 86 -10 158 0 85 -5 141 -13 156 -26 52 -99 83\r
            -167 71z m90 -275 l0 -104 -37 -8 c-50 -9 -64 -6 -85 19 -21 23 -23 80 -7 127\r
            13 38 61 71 102 71 l27 0 0 -105z`}),M.jsx("path",{d:`M590 673 c-14 -7 -38 -13 -54 -13 -23 0 -27 -3 -20 -17 4 -10 11 -72\r
            14 -138 4 -95 9 -127 25 -154 42 -72 150 -93 237 -47 l46 24 18 -25 c14 -19\r
            31 -26 69 -30 49 -6 50 -5 33 14 -16 17 -18 43 -18 211 l0 191 -35 -15 c-19\r
            -7 -46 -14 -60 -14 -22 0 -24 -3 -15 -19 5 -11 10 -80 10 -154 l0 -135 -30\r
            -26 c-56 -46 -130 -48 -164 -3 -19 25 -22 46 -26 196 l-5 167 -25 -13z`}),M.jsx("path",{d:`M1770 673 c-14 -7 -37 -13 -52 -13 -25 0 -26 -2 -17 -29 6 -17 9\r
            -136 7 -304 -3 -254 -4 -277 -22 -296 -25 -27 -42 -27 -69 3 -19 21 -25 22\r
            -41 11 -17 -13 -17 -14 1 -23 71 -39 159 -15 198 53 l25 42 -2 284 -3 285 -25\r
            -13z`}),M.jsx("path",{d:`M37 409 l-37 -49 32 -20 c83 -51 218 -82 268 -61 l25 10 -29 0 c-16\r
            1 -49 10 -73 22 -45 22 -133 111 -133 135 0 24 -14 15 -53 -37z`})]})})})]}),M.jsxs("div",{className:"header-right",children:[M.jsx("button",{className:"dark-mode-btn",onClick:s,"aria-label":u?"Switch to light mode":"Switch to dark mode",children:u?M.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-sun-fill",viewBox:"0 0 16 16",children:M.jsx("path",{d:"M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"})}):M.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-moon-fill",viewBox:"0 0 16 16",children:M.jsx("path",{d:"M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"})})}),M.jsxs("form",{className:"search-box",onSubmit:R,children:[M.jsx("input",{type:"text",placeholder:"Search tutorials...",value:d,onChange:v=>h(v.target.value)}),M.jsx("button",{type:"submit",className:"search-button",children:M.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16",children:M.jsx("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"})})})]})]})]})}function Qr({languages:u,currentLanguage:s,topics:f,currentTopic:c}){const{sidebarOpen:d,toggleSidebar:h}=Sp();return M.jsxs("aside",{className:`sidebar ${d?"open":""}`,children:[M.jsxs("div",{className:"language-selector",children:[M.jsx("button",{className:"close-button",onClick:h,"aria-label":"Close",children:M.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-x",viewBox:"0 0 16 16",children:M.jsx("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"})})}),M.jsx("h3",{children:"Languages"}),M.jsx("div",{className:"language-list",children:Object.entries(u).map(([x,R])=>M.jsx(st,{to:`/${x}`,className:`language-btn ${s===x?"active":""}`,children:R},x))})]}),f&&M.jsxs("div",{className:"topic-list",children:[M.jsxs("h3",{children:[u[s]||s," Tutorial"]}),M.jsx("ul",{children:f.map(x=>M.jsx("li",{children:M.jsx(st,{to:`/${s}/${x.id}`,className:`topic-btn ${c===x.id?"active":""}`,children:x.title})},x.id))})]})]})}function Xr(){return M.jsxs("footer",{className:"footer",children:[M.jsxs("div",{className:"footer-content",children:[M.jsxs("div",{className:"footer-section",children:[M.jsx("h3",{children:"Learn to Code"}),M.jsx("p",{children:"Ready to start your coding journey? Learn by doing with real-world examples, get instant help when you're stuck, and build a portfolio that proves your skills. No confusing jargon—just clear, practical lessons to help you succeed."}),M.jsx("p",{children:"Start coding today and turn your ideas into reality!"})]}),M.jsxs("div",{className:"footer-section",children:[M.jsx("h3",{children:"Popular Tutorials"}),M.jsx("ul",{children:["javascript","python","html","css"].map(u=>M.jsx("li",{children:M.jsxs(st,{to:`/${u}`,children:[Sa[u]," Tutorial"]})},u))})]}),M.jsxs("div",{className:"footer-section",children:[M.jsx("h3",{children:"Browse Tutorials"}),M.jsx("ul",{children:Hg})]})]}),M.jsx("div",{className:"footer-bottom",children:M.jsxs("p",{children:["Copyright © ",new Date().getFullYear()," Suraj. All Rights Reserved."]})})]})}function Bg(){const u=iu(x=>x.darkMode),{searchQuery:s}=xp(),f=Ea(),c=new URLSearchParams(f.search).get("q")||"",d=s||c,h=d?Object.entries(tu).reduce((x,[R,v])=>(Object.entries(v).forEach(([p,w])=>{`${w.title} ${w.description} ${JSON.stringify(w.examples)}`.toLowerCase().includes(d.toLowerCase())&&x.push({language:R,topicId:p,...w})}),x),[]):[];return M.jsxs("div",{className:`app ${u?"dark":""}`,children:[M.jsx(Yr,{}),M.jsxs("div",{className:"main-content",children:[M.jsx(Qr,{languages:Sa,currentLanguage:null,topics:null,currentTopic:null}),M.jsxs("div",{className:"content-area",children:[M.jsxs("h2",{children:['Search Results for "',d,'"']}),h.length===0?M.jsx("p",{children:"No results found. Try a different search term."}):M.jsx("div",{className:"results-grid",children:h.map((x,R)=>M.jsxs("div",{className:"result-card",children:[M.jsx("h3",{children:M.jsxs(st,{to:`/${x.language}/${x.topicId}`,children:[x.title," (",x.language.toUpperCase(),")"]})}),M.jsx("p",{children:x.description}),M.jsx("div",{className:"examples-preview",children:x.examples.slice(0,1).map((v,p)=>M.jsx("pre",{className:"code-preview",children:M.jsxs("code",{children:[v.code.substring(0,100),v.code.length>100?"...":""]})},p))})]},R))})]})]}),M.jsx(Xr,{})]})}ey.createRoot(document.getElementById("root")).render(M.jsx(N.StrictMode,{children:M.jsx(Ng,{})}));
