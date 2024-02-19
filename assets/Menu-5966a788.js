import{r as l}from"./index-8db94870.js";import{a as ne,g as oe,b as re,s as V,c as X,r as Ve}from"./styled-0cac7ee0.js";import{u as ze}from"./useTheme-5d25d683.js";import{b as se}from"./useThemeProps-4a2bd4cc.js";import{a as Se,j as A}from"./jsx-runtime-91a467a5.js";import{T as Ye,r as qe,g as Ce}from"./utils-8f907144.js";import{u as ie}from"./useForkRef-2674f3de.js";import{o as z,P as Xe,u as Je,G as Qe}from"./Tooltip-b533b259.js";import{a as Ie,u as Ze}from"./ButtonBase-fa447215.js";import{u as Ne,r as Fe,i as et}from"./useSlotProps-52b151e4.js";import{M as Ue}from"./Paper-4d20a8fa.js";var R={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we=Symbol.for("react.element"),Te=Symbol.for("react.portal"),de=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),he=Symbol.for("react.provider"),me=Symbol.for("react.context"),tt=Symbol.for("react.server_context"),be=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),ve=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),nt=Symbol.for("react.offscreen"),Ke;Ke=Symbol.for("react.module.reference");function U(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case we:switch(e=e.type,e){case de:case pe:case fe:case ge:case ye:return e;default:switch(e=e&&e.$$typeof,e){case tt:case me:case be:case Ee:case ve:case he:return e;default:return t}}case Te:return t}}}R.ContextConsumer=me;R.ContextProvider=he;R.Element=we;R.ForwardRef=be;R.Fragment=de;R.Lazy=Ee;R.Memo=ve;R.Portal=Te;R.Profiler=pe;R.StrictMode=fe;R.Suspense=ge;R.SuspenseList=ye;R.isAsyncMode=function(){return!1};R.isConcurrentMode=function(){return!1};R.isContextConsumer=function(e){return U(e)===me};R.isContextProvider=function(e){return U(e)===he};R.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===we};R.isForwardRef=function(e){return U(e)===be};R.isFragment=function(e){return U(e)===de};R.isLazy=function(e){return U(e)===Ee};R.isMemo=function(e){return U(e)===ve};R.isPortal=function(e){return U(e)===Te};R.isProfiler=function(e){return U(e)===pe};R.isStrictMode=function(e){return U(e)===fe};R.isSuspense=function(e){return U(e)===ge};R.isSuspenseList=function(e){return U(e)===ye};R.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===de||e===pe||e===fe||e===ge||e===ye||e===nt||typeof e=="object"&&e!==null&&(e.$$typeof===Ee||e.$$typeof===ve||e.$$typeof===he||e.$$typeof===me||e.$$typeof===be||e.$$typeof===Ke||e.getModuleId!==void 0)};R.typeOf=U;function Le(...e){return e.reduce((t,n)=>n==null?t:function(...a){t.apply(this,a),n.apply(this,a)},()=>{})}function ot(e,t=166){let n;function o(...a){const r=()=>{e.apply(this,a)};clearTimeout(n),n=setTimeout(r,t)}return o.clear=()=>{clearTimeout(n)},o}function te(e){return z(e).defaultView||window}function _e(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const rt=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function st(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function it(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function at(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||it(e))}function lt(e){const t=[],n=[];return Array.from(e.querySelectorAll(rt)).forEach((o,a)=>{const r=st(o);r===-1||!at(o)||(r===0?t.push(o):n.push({documentOrder:a,tabIndex:r,node:o}))}),n.sort((o,a)=>o.tabIndex===a.tabIndex?o.documentOrder-a.documentOrder:o.tabIndex-a.tabIndex).map(o=>o.node).concat(t)}function ct(){return!0}function ut(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:a=!1,getTabbable:r=lt,isEnabled:i=ct,open:c}=e,d=l.useRef(!1),M=l.useRef(null),w=l.useRef(null),S=l.useRef(null),b=l.useRef(null),f=l.useRef(!1),p=l.useRef(null),C=ie(t.ref,p),T=l.useRef(null);l.useEffect(()=>{!c||!p.current||(f.current=!n)},[n,c]),l.useEffect(()=>{if(!c||!p.current)return;const s=z(p.current);return p.current.contains(s.activeElement)||(p.current.hasAttribute("tabIndex")||p.current.setAttribute("tabIndex","-1"),f.current&&p.current.focus()),()=>{a||(S.current&&S.current.focus&&(d.current=!0,S.current.focus()),S.current=null)}},[c]),l.useEffect(()=>{if(!c||!p.current)return;const s=z(p.current),u=h=>{const{current:L}=p;if(L!==null){if(!s.hasFocus()||o||!i()||d.current){d.current=!1;return}if(!L.contains(s.activeElement)){if(h&&b.current!==h.target||s.activeElement!==b.current)b.current=null;else if(b.current!==null)return;if(!f.current)return;let F=[];if((s.activeElement===M.current||s.activeElement===w.current)&&(F=r(p.current)),F.length>0){var O,y;const K=!!((O=T.current)!=null&&O.shiftKey&&((y=T.current)==null?void 0:y.key)==="Tab"),_=F[0],v=F[F.length-1];typeof _!="string"&&typeof v!="string"&&(K?v.focus():_.focus())}else L.focus()}}},m=h=>{T.current=h,!(o||!i()||h.key!=="Tab")&&s.activeElement===p.current&&h.shiftKey&&(d.current=!0,w.current&&w.current.focus())};s.addEventListener("focusin",u),s.addEventListener("keydown",m,!0);const g=setInterval(()=>{s.activeElement&&s.activeElement.tagName==="BODY"&&u(null)},50);return()=>{clearInterval(g),s.removeEventListener("focusin",u),s.removeEventListener("keydown",m,!0)}},[n,o,a,i,c,r]);const P=s=>{S.current===null&&(S.current=s.relatedTarget),f.current=!0,b.current=s.target;const u=t.props.onFocus;u&&u(s)},k=s=>{S.current===null&&(S.current=s.relatedTarget),f.current=!0};return Se(l.Fragment,{children:[A("div",{tabIndex:c?0:-1,onFocus:k,ref:M,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:C,onFocus:P}),A("div",{tabIndex:c?0:-1,onFocus:k,ref:w,"data-testid":"sentinelEnd"})]})}function dt(e){const t=z(e);return t.body===e?te(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function ee(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Oe(e){return parseInt(te(e).getComputedStyle(e).paddingRight,10)||0}function ft(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function $e(e,t,n,o,a){const r=[t,n,...o];[].forEach.call(e.children,i=>{const c=r.indexOf(i)===-1,d=!ft(i);c&&d&&ee(i,a)})}function Pe(e,t){let n=-1;return e.some((o,a)=>t(o)?(n=a,!0):!1),n}function pt(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(dt(o)){const i=_e(z(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${Oe(o)+i}px`;const c=z(o).querySelectorAll(".mui-fixed");[].forEach.call(c,d=>{n.push({value:d.style.paddingRight,property:"padding-right",el:d}),d.style.paddingRight=`${Oe(d)+i}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=z(o).body;else{const i=o.parentElement,c=te(o);r=(i==null?void 0:i.nodeName)==="HTML"&&c.getComputedStyle(i).overflowY==="scroll"?i:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:i,property:c})=>{r?i.style.setProperty(c,r):i.style.removeProperty(c)})}}function ht(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class mt{constructor(){this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&ee(t.modalRef,!1);const a=ht(n);$e(n,t.mount,t.modalRef,a,!0);const r=Pe(this.containers,i=>i.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:a}),o)}mount(t,n){const o=Pe(this.containers,r=>r.modals.indexOf(t)!==-1),a=this.containers[o];a.restore||(a.restore=pt(a,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const a=Pe(this.containers,i=>i.modals.indexOf(t)!==-1),r=this.containers[a];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&ee(t.modalRef,n),$e(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(a,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&ee(i.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function bt(e){return ne("MuiModal",e)}oe("MuiModal",["root","hidden","backdrop"]);const gt=e=>{const{open:t,exited:n}=e;return re({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},Je(bt))};function yt(e){return typeof e=="function"?e():e}function vt(e){return e?e.props.hasOwnProperty("in"):!1}const Et=new mt,xt=l.forwardRef(function(t,n){var o,a;const{children:r,closeAfterTransition:i=!1,container:c,disableAutoFocus:d=!1,disableEnforceFocus:M=!1,disableEscapeKeyDown:w=!1,disablePortal:S=!1,disableRestoreFocus:b=!1,disableScrollLock:f=!1,hideBackdrop:p=!1,keepMounted:C=!1,manager:T=Et,onBackdropClick:P,onClose:k,onKeyDown:s,open:u,onTransitionEnter:m,onTransitionExited:g,slotProps:h={},slots:L={},...O}=t,y=T,[F,K]=l.useState(!u),_=l.useRef({}),v=l.useRef(null),E=l.useRef(null),D=ie(E,n),Y=vt(r),q=(o=t["aria-hidden"])!=null?o:!0,J=()=>z(v.current),x=()=>(_.current.modalRef=E.current,_.current.mountNode=v.current,_.current),I=()=>{y.mount(x(),{disableScrollLock:f}),E.current&&(E.current.scrollTop=0)},N=Ie(()=>{const B=yt(c)||J().body;y.add(x(),B),E.current&&I()}),G=l.useCallback(()=>y.isTopModal(x()),[y]),W=Ie(B=>{v.current=B,!(!B||!E.current)&&(u&&G()?I():ee(E.current,q))}),$=l.useCallback(()=>{y.remove(x(),q)},[y,q]);l.useEffect(()=>()=>{$()},[$]),l.useEffect(()=>{u?N():(!Y||!i)&&$()},[u,$,Y,i,N]);const j={...t,closeAfterTransition:i,disableAutoFocus:d,disableEnforceFocus:M,disableEscapeKeyDown:w,disablePortal:S,disableRestoreFocus:b,disableScrollLock:f,exited:F,hideBackdrop:p,keepMounted:C},Q=gt(j),ae=()=>{K(!1),m&&m()},le=()=>{K(!0),g&&g(),i&&$()},ce=B=>{B.target===B.currentTarget&&(P&&P(B),k&&k(B,"backdropClick"))},H=B=>{s&&s(B),!(B.key!=="Escape"||!G())&&(w||(B.stopPropagation(),k&&k(B,"escapeKeyDown")))},ue={};r.props.tabIndex===void 0&&(ue.tabIndex="-1"),Y&&(ue.onEnter=Le(ae,r.props.onEnter),ue.onExited=Le(le,r.props.onExited));const ke=(a=L.root)!=null?a:"div",je=Ne({elementType:ke,externalSlotProps:h.root,externalForwardedProps:O,additionalProps:{ref:D,role:"presentation",onKeyDown:H},className:Q.root,ownerState:j}),xe=L.backdrop,Ge=Ne({elementType:xe,externalSlotProps:h.backdrop,additionalProps:{"aria-hidden":!0,onClick:ce,open:u},className:Q.backdrop,ownerState:j});return!C&&!u&&(!Y||F)?null:A(Xe,{ref:W,container:c,disablePortal:S,children:Se(ke,{...je,children:[!p&&xe?A(xe,{...Ge}):null,A(ut,{disableEnforceFocus:M,disableAutoFocus:d,disableRestoreFocus:b,isEnabled:G,open:u,children:l.cloneElement(r,ue)})]})})}),Pt=xt,Rt={entering:{opacity:1},entered:{opacity:1}},Mt=l.forwardRef(function(t,n){const o=ze(),a={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:r,appear:i=!0,children:c,easing:d,in:M,onEnter:w,onEntered:S,onEntering:b,onExit:f,onExited:p,onExiting:C,style:T,timeout:P=a,TransitionComponent:k=Ye,...s}=t,u=l.useRef(null),m=ie(u,c.ref,n),g=v=>E=>{if(v){const D=u.current;E===void 0?v(D):v(D,E)}},h=g(b),L=g((v,E)=>{qe(v);const D=Ce({style:T,timeout:P,easing:d},{mode:"enter"});v.style.webkitTransition=o.transitions.create("opacity",D),v.style.transition=o.transitions.create("opacity",D),w&&w(v,E)}),O=g(S),y=g(C),F=g(v=>{const E=Ce({style:T,timeout:P,easing:d},{mode:"exit"});v.style.webkitTransition=o.transitions.create("opacity",E),v.style.transition=o.transitions.create("opacity",E),f&&f(v)}),K=g(p);return A(k,{appear:i,in:M,nodeRef:u,onEnter:L,onEntered:O,onEntering:h,onExit:F,onExited:K,onExiting:y,addEndListener:v=>{r&&r(u.current,v)},timeout:P,...s,children:(v,E)=>l.cloneElement(c,{style:{opacity:0,visibility:v==="exited"&&!M?"hidden":void 0,...Rt[v],...T,...c.props.style},ref:m,...E})})}),St=Mt;function wt(e){return ne("MuiBackdrop",e)}oe("MuiBackdrop",["root","invisible"]);const Tt=e=>{const{classes:t,invisible:n}=e;return re({root:["root",n&&"invisible"]},wt,t)},kt=V("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",...e.invisible&&{backgroundColor:"transparent"}})),Ct=l.forwardRef(function(t,n){var o,a,r;const i=se({props:t,name:"MuiBackdrop"}),{children:c,className:d,component:M="div",components:w={},componentsProps:S={},invisible:b=!1,open:f,slotProps:p={},slots:C={},TransitionComponent:T=St,transitionDuration:P,...k}=i,s={...i,component:M,invisible:b},u=Tt(s),m=(o=p.root)!=null?o:S.root;return A(T,{in:f,timeout:P,...k,children:A(kt,{"aria-hidden":!0,...m,as:(a=(r=C.root)!=null?r:w.Root)!=null?a:M,className:X(u.root,d,m==null?void 0:m.className),ownerState:{...s,...m==null?void 0:m.ownerState},classes:u,ref:n,children:c})})}),It=Ct,Nt=V("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0,...!t.open&&t.exited&&{visibility:"hidden"}})),Ft=V(It,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Lt=l.forwardRef(function(t,n){var o,a,r,i,c,d;const M=se({name:"MuiModal",props:t}),{BackdropComponent:w=Ft,BackdropProps:S,classes:b,className:f,closeAfterTransition:p=!1,children:C,container:T,component:P,components:k={},componentsProps:s={},disableAutoFocus:u=!1,disableEnforceFocus:m=!1,disableEscapeKeyDown:g=!1,disablePortal:h=!1,disableRestoreFocus:L=!1,disableScrollLock:O=!1,hideBackdrop:y=!1,keepMounted:F=!1,onBackdropClick:K,onClose:_,open:v,slotProps:E,slots:D,theme:Y,...q}=M,[J,x]=l.useState(!0),I={container:T,closeAfterTransition:p,disableAutoFocus:u,disableEnforceFocus:m,disableEscapeKeyDown:g,disablePortal:h,disableRestoreFocus:L,disableScrollLock:O,hideBackdrop:y,keepMounted:F,onBackdropClick:K,onClose:_,open:v},N={...M,...I,exited:J},G=(o=(a=D==null?void 0:D.root)!=null?a:k.Root)!=null?o:Nt,W=(r=(i=D==null?void 0:D.backdrop)!=null?i:k.Backdrop)!=null?r:w,$=(c=E==null?void 0:E.root)!=null?c:s.root,j=(d=E==null?void 0:E.backdrop)!=null?d:s.backdrop;return A(Pt,{slots:{root:G,backdrop:W},slotProps:{root:()=>({...Fe($,N),...!et(G)&&{as:P,theme:Y},className:X(f,$==null?void 0:$.className,b==null?void 0:b.root,!N.open&&N.exited&&(b==null?void 0:b.hidden))}),backdrop:()=>({...S,...Fe(j,N),className:X(j==null?void 0:j.className,b==null?void 0:b.backdrop)})},onTransitionEnter:()=>x(!1),onTransitionExited:()=>x(!0),ref:n,...q,...I,children:C})}),Ot=Lt,$t=l.createContext({}),At=$t;function Dt(e){return ne("MuiList",e)}oe("MuiList",["root","padding","dense","subheader"]);const Bt=e=>{const{classes:t,disablePadding:n,dense:o,subheader:a}=e;return re({root:["root",!n&&"padding",o&&"dense",a&&"subheader"]},Dt,t)},Ht=V("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>({listStyle:"none",margin:0,padding:0,position:"relative",...!e.disablePadding&&{paddingTop:8,paddingBottom:8},...e.subheader&&{paddingTop:0}})),zt=l.forwardRef(function(t,n){const o=se({props:t,name:"MuiList"}),{children:a,className:r,component:i="ul",dense:c=!1,disablePadding:d=!1,subheader:M,...w}=o,S=l.useMemo(()=>({dense:c}),[c]),b={...o,component:i,dense:c,disablePadding:d},f=Bt(b);return A(At.Provider,{value:S,children:Se(Ht,{as:i,className:X(f.root,r),ref:n,ownerState:b,...w,children:[M,a]})})}),Ut=zt;function Re(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function Ae(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function We(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function Z(e,t,n,o,a,r){let i=!1,c=a(e,t,t?n:!1);for(;c;){if(c===e.firstChild){if(i)return!1;i=!0}const d=o?!1:c.disabled||c.getAttribute("aria-disabled")==="true";if(!c.hasAttribute("tabindex")||!We(c,r)||d)c=a(e,c,n);else return c.focus(),!0}return!1}const Kt=l.forwardRef(function(t,n){const{actions:o,autoFocus:a=!1,autoFocusItem:r=!1,children:i,className:c,disabledItemsFocusable:d=!1,disableListWrap:M=!1,onKeyDown:w,variant:S="selectedMenu",...b}=t,f=l.useRef(null),p=l.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Ze(()=>{a&&f.current.focus()},[a]),l.useImperativeHandle(o,()=>({adjustStyleForScrollbar:(s,u)=>{const m=!f.current.style.width;if(s.clientHeight<f.current.clientHeight&&m){const g=`${_e(z(s))}px`;f.current.style[u.direction==="rtl"?"paddingLeft":"paddingRight"]=g,f.current.style.width=`calc(100% + ${g})`}return f.current}}),[]);const C=s=>{const u=f.current,m=s.key,g=z(u).activeElement;if(m==="ArrowDown")s.preventDefault(),Z(u,g,M,d,Re);else if(m==="ArrowUp")s.preventDefault(),Z(u,g,M,d,Ae);else if(m==="Home")s.preventDefault(),Z(u,null,M,d,Re);else if(m==="End")s.preventDefault(),Z(u,null,M,d,Ae);else if(m.length===1){const h=p.current,L=m.toLowerCase(),O=performance.now();h.keys.length>0&&(O-h.lastTime>500?(h.keys=[],h.repeating=!0,h.previousKeyMatched=!0):h.repeating&&L!==h.keys[0]&&(h.repeating=!1)),h.lastTime=O,h.keys.push(L);const y=g&&!h.repeating&&We(g,h);h.previousKeyMatched&&(y||Z(u,g,!1,d,Re,h))?s.preventDefault():h.previousKeyMatched=!1}w&&w(s)},T=ie(f,n);let P=-1;l.Children.forEach(i,(s,u)=>{l.isValidElement(s)&&(s.props.disabled||(S==="selectedMenu"&&s.props.selected||P===-1)&&(P=u),P===u&&(s.props.disabled||s.props.muiSkipListHighlight||s.type.muiSkipListHighlight)&&(P+=1,P>=i.length&&(P=-1)))});const k=l.Children.map(i,(s,u)=>{if(u===P){const m={};return r&&(m.autoFocus=!0),s.props.tabIndex===void 0&&S==="selectedMenu"&&(m.tabIndex=0),l.cloneElement(s,m)}return s});return A(Ut,{role:"menu",ref:T,className:c,onKeyDown:C,tabIndex:a?0:-1,...b,children:k})}),_t=Kt;function Wt(e){return ne("MuiPopover",e)}oe("MuiPopover",["root","paper"]);function De(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Be(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function He(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Me(e){return typeof e=="function"?e():e}const jt=e=>{const{classes:t}=e;return re({root:["root"],paper:["paper"]},Wt,t)},Gt=V(Ot,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Vt=V(Ue,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Yt=l.forwardRef(function(t,n){const o=se({props:t,name:"MuiPopover"}),{action:a,anchorEl:r,anchorOrigin:i={vertical:"top",horizontal:"left"},anchorPosition:c,anchorReference:d="anchorEl",children:M,className:w,container:S,elevation:b=8,marginThreshold:f=16,open:p,PaperProps:C={},transformOrigin:T={vertical:"top",horizontal:"left"},TransitionComponent:P=Qe,transitionDuration:k="auto",TransitionProps:{onEntering:s,...u}={},...m}=o,g=l.useRef(),h=ie(g,C.ref),L={...o,anchorOrigin:i,anchorReference:d,elevation:b,marginThreshold:f,PaperProps:C,transformOrigin:T,TransitionComponent:P,transitionDuration:k,TransitionProps:u},O=jt(L),y=l.useCallback(()=>{if(d==="anchorPosition")return c;const x=Me(r),N=(x&&x.nodeType===1?x:z(g.current).body).getBoundingClientRect();return{top:N.top+De(N,i.vertical),left:N.left+Be(N,i.horizontal)}},[r,i.horizontal,i.vertical,c,d]),F=l.useCallback(x=>({vertical:De(x,T.vertical),horizontal:Be(x,T.horizontal)}),[T.horizontal,T.vertical]),K=l.useCallback(x=>{const I={width:x.offsetWidth,height:x.offsetHeight},N=F(I);if(d==="none")return{top:null,left:null,transformOrigin:He(N)};const G=y();let W=G.top-N.vertical,$=G.left-N.horizontal;const j=W+I.height,Q=$+I.width,ae=te(Me(r)),le=ae.innerHeight-f,ce=ae.innerWidth-f;if(W<f){const H=W-f;W-=H,N.vertical+=H}else if(j>le){const H=j-le;W-=H,N.vertical+=H}if($<f){const H=$-f;$-=H,N.horizontal+=H}else if(Q>ce){const H=Q-ce;$-=H,N.horizontal+=H}return{top:`${Math.round(W)}px`,left:`${Math.round($)}px`,transformOrigin:He(N)}},[r,d,y,F,f]),[_,v]=l.useState(p),E=l.useCallback(()=>{const x=g.current;if(!x)return;const I=K(x);I.top!==null&&(x.style.top=I.top),I.left!==null&&(x.style.left=I.left),x.style.transformOrigin=I.transformOrigin,v(!0)},[K]),D=(x,I)=>{s&&s(x,I),E()},Y=()=>{v(!1)};l.useEffect(()=>{p&&E()}),l.useImperativeHandle(a,()=>p?{updatePosition:()=>{E()}}:null,[p,E]),l.useEffect(()=>{if(!p)return;const x=ot(()=>{E()}),I=te(r);return I.addEventListener("resize",x),()=>{x.clear(),I.removeEventListener("resize",x)}},[r,p,E]);let q=k;k==="auto"&&!P.muiSupportAuto&&(q=void 0);const J=S||(r?z(Me(r)).body:void 0);return A(Gt,{BackdropProps:{invisible:!0},className:X(O.root,w),container:J,open:p,ref:n,ownerState:L,...m,children:A(P,{appear:!0,in:p,onEntering:D,onExited:Y,timeout:q,...u,children:A(Vt,{elevation:b,...C,ref:h,className:X(O.paper,C.className),..._?void 0:{style:{...C.style,opacity:0}},ownerState:L,children:M})})})}),qt=Yt;function Xt(e){return ne("MuiMenu",e)}oe("MuiMenu",["root","paper","list"]);const Jt={vertical:"top",horizontal:"right"},Qt={vertical:"top",horizontal:"left"},Zt=e=>{const{classes:t}=e;return re({root:["root"],paper:["paper"],list:["list"]},Xt,t)},en=V(qt,{shouldForwardProp:e=>Ve(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),tn=V(Ue,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),nn=V(_t,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),on=l.forwardRef(function(t,n){const o=se({props:t,name:"MuiMenu"}),{autoFocus:a=!0,children:r,disableAutoFocusItem:i=!1,MenuListProps:c={},onClose:d,open:M,PaperProps:w={},PopoverClasses:S,transitionDuration:b="auto",TransitionProps:{onEntering:f,...p}={},variant:C="selectedMenu",...T}=o,P=ze(),k=P.direction==="rtl",s={...o,autoFocus:a,disableAutoFocusItem:i,MenuListProps:c,onEntering:f,PaperProps:w,transitionDuration:b,TransitionProps:p,variant:C},u=Zt(s),m=a&&!i&&M,g=l.useRef(null),h=(y,F)=>{g.current&&g.current.adjustStyleForScrollbar(y,P),f&&f(y,F)},L=y=>{y.key==="Tab"&&(y.preventDefault(),d&&d(y,"tabKeyDown"))};let O=-1;return l.Children.map(r,(y,F)=>{l.isValidElement(y)&&(y.props.disabled||(C==="selectedMenu"&&y.props.selected||O===-1)&&(O=F))}),A(en,{onClose:d,anchorOrigin:{vertical:"bottom",horizontal:k?"right":"left"},transformOrigin:k?Jt:Qt,PaperProps:{as:tn,...w,classes:{...w.classes,root:u.paper}},className:u.root,open:M,ref:n,transitionDuration:b,TransitionProps:{onEntering:h,...p},ownerState:s,...T,classes:S,children:A(nn,{onKeyDown:L,actions:g,autoFocus:a&&(O===-1||i),autoFocusItem:m,variant:C,...c,className:X(u.list,c.className),children:r})})}),bn=on;export{At as L,bn as M,_t as a,ot as d,te as o};
//# sourceMappingURL=Menu-5966a788.js.map