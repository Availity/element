import{m as _,w as F,n as I,o as k}from"./useThemeProps-ad7d4b8c.js";import{r as M}from"./index-8db94870.js";import{u as w}from"./extends-bab83b91.js";var T={exports:{}},t={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=typeof Symbol=="function"&&Symbol.for,h=o?Symbol.for("react.element"):60103,x=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,y=o?Symbol.for("react.strict_mode"):60108,m=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,C=o?Symbol.for("react.async_mode"):60111,S=o?Symbol.for("react.concurrent_mode"):60111,b=o?Symbol.for("react.forward_ref"):60112,v=o?Symbol.for("react.suspense"):60113,z=o?Symbol.for("react.suspense_list"):60120,$=o?Symbol.for("react.memo"):60115,g=o?Symbol.for("react.lazy"):60116,O=o?Symbol.for("react.block"):60121,j=o?Symbol.for("react.fundamental"):60117,L=o?Symbol.for("react.responder"):60118,q=o?Symbol.for("react.scope"):60119;function n(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case h:switch(e=e.type,e){case C:case S:case c:case m:case y:case v:return e;default:switch(e=e&&e.$$typeof,e){case d:case b:case g:case $:case p:return e;default:return r}}case x:return r}}}function A(e){return n(e)===S}t.AsyncMode=C;t.ConcurrentMode=S;t.ContextConsumer=d;t.ContextProvider=p;t.Element=h;t.ForwardRef=b;t.Fragment=c;t.Lazy=g;t.Memo=$;t.Portal=x;t.Profiler=m;t.StrictMode=y;t.Suspense=v;t.isAsyncMode=function(e){return A(e)||n(e)===C};t.isConcurrentMode=A;t.isContextConsumer=function(e){return n(e)===d};t.isContextProvider=function(e){return n(e)===p};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===h};t.isForwardRef=function(e){return n(e)===b};t.isFragment=function(e){return n(e)===c};t.isLazy=function(e){return n(e)===g};t.isMemo=function(e){return n(e)===$};t.isPortal=function(e){return n(e)===x};t.isProfiler=function(e){return n(e)===m};t.isStrictMode=function(e){return n(e)===y};t.isSuspense=function(e){return n(e)===v};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===c||e===S||e===m||e===y||e===v||e===z||typeof e=="object"&&e!==null&&(e.$$typeof===g||e.$$typeof===$||e.$$typeof===p||e.$$typeof===d||e.$$typeof===b||e.$$typeof===j||e.$$typeof===L||e.$$typeof===q||e.$$typeof===O)};t.typeOf=n;T.exports=t;var G=T.exports,P=G,N={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},W={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},R={};R[P.ForwardRef]=N;R[P.Memo]=W;var H=F(function(e,r){var f=e.styles,i=_([f],void 0,M.useContext(I)),E=M.useRef();return w(function(){var u=r.key+"-global",s=new r.sheet.constructor({key:u,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),l=!1,a=document.querySelector('style[data-emotion="'+u+" "+i.name+'"]');return r.sheet.tags.length&&(s.before=r.sheet.tags[0]),a!==null&&(l=!0,a.setAttribute("data-emotion",u),s.hydrate([a])),E.current=[s,l],function(){s.flush()}},[r]),w(function(){var u=E.current,s=u[0],l=u[1];if(l){u[1]=!1;return}if(i.next!==void 0&&k(r,i.next,!0),s.tags.length){var a=s.tags[s.tags.length-1].nextElementSibling;s.before=a,s.flush()}r.insert("",i,s,!1)},[r,i.name]),null});function D(){for(var e=arguments.length,r=new Array(e),f=0;f<e;f++)r[f]=arguments[f];return _(r)}var J=function(){var r=D.apply(void 0,arguments),f="animation-"+r.name;return{name:f,styles:"@keyframes "+f+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};export{H as G,D as c,J as k};
//# sourceMappingURL=emotion-react.browser.esm-a6af08ad.js.map
