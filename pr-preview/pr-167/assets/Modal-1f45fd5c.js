import{_ as w,b as me}from"./createTheme-3fee607a.js";import{r as d}from"./index-570b25c1.js";import{c as ee}from"./clsx-b831246b.js";import{g as he,s as ie,c as be}from"./styled-523cb007.js";import{u as ge}from"./useThemeProps-98dc6282.js";import{g as Ee}from"./generateUtilityClasses-b58f947a.js";import{j as ae,a as K}from"./jsx-runtime-a3bcee63.js";import{M as xe}from"./Backdrop-4a58ec86.js";import{_ as Y}from"./objectWithoutPropertiesLoose-df62547b.js";import{o as A}from"./ownerDocument-613eb639.js";import{o as G}from"./ownerWindow-03d1c82d.js";import{u as le}from"./useForkRef-153a0a89.js";import{u as te}from"./useEventCallback-e1b9edb9.js";import{e as ve,u as oe}from"./useSlotProps-95ccb7bd.js";import{c as ne}from"./createChainedFunction-0bab83cf.js";import{P as Re}from"./Grow-8a00b99f.js";function Te(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const ke=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function ye(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Pe(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Ie(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Pe(e))}function Se(e){const t=[],n=[];return Array.from(e.querySelectorAll(ke)).forEach((o,s)=>{const r=ye(o);r===-1||!Ie(o)||(r===0?t.push(o):n.push({documentOrder:s,tabIndex:r,node:o}))}),n.sort((o,s)=>o.tabIndex===s.tabIndex?o.documentOrder-s.documentOrder:o.tabIndex-s.tabIndex).map(o=>o.node).concat(t)}function Me(){return!0}function Ce(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:s=!1,getTabbable:r=Se,isEnabled:i=Me,open:c}=e,u=d.useRef(!1),g=d.useRef(null),m=d.useRef(null),h=d.useRef(null),R=d.useRef(null),E=d.useRef(!1),l=d.useRef(null),O=le(t.ref,l),S=d.useRef(null);d.useEffect(()=>{!c||!l.current||(E.current=!n)},[n,c]),d.useEffect(()=>{if(!c||!l.current)return;const a=A(l.current);return l.current.contains(a.activeElement)||(l.current.hasAttribute("tabIndex")||l.current.setAttribute("tabIndex","-1"),E.current&&l.current.focus()),()=>{s||(h.current&&h.current.focus&&(u.current=!0,h.current.focus()),h.current=null)}},[c]),d.useEffect(()=>{if(!c||!l.current)return;const a=A(l.current),T=b=>{S.current=b,!(o||!i()||b.key!=="Tab")&&a.activeElement===l.current&&b.shiftKey&&(u.current=!0,m.current&&m.current.focus())},k=()=>{const b=l.current;if(b===null)return;if(!a.hasFocus()||!i()||u.current){u.current=!1;return}if(b.contains(a.activeElement)||o&&a.activeElement!==g.current&&a.activeElement!==m.current)return;if(a.activeElement!==R.current)R.current=null;else if(R.current!==null)return;if(!E.current)return;let x=[];if((a.activeElement===g.current||a.activeElement===m.current)&&(x=r(l.current)),x.length>0){var N,v;const B=!!((N=S.current)!=null&&N.shiftKey&&((v=S.current)==null?void 0:v.key)==="Tab"),F=x[0],I=x[x.length-1];typeof F!="string"&&typeof I!="string"&&(B?I.focus():F.focus())}else b.focus()};a.addEventListener("focusin",k),a.addEventListener("keydown",T,!0);const C=setInterval(()=>{a.activeElement&&a.activeElement.tagName==="BODY"&&k()},50);return()=>{clearInterval(C),a.removeEventListener("focusin",k),a.removeEventListener("keydown",T,!0)}},[n,o,s,i,c,r]);const M=a=>{h.current===null&&(h.current=a.relatedTarget),E.current=!0,R.current=a.target;const T=t.props.onFocus;T&&T(a)},P=a=>{h.current===null&&(h.current=a.relatedTarget),E.current=!0};return ae(d.Fragment,{children:[K("div",{tabIndex:c?0:-1,onFocus:P,ref:g,"data-testid":"sentinelStart"}),d.cloneElement(t,{ref:O,onFocus:M}),K("div",{tabIndex:c?0:-1,onFocus:P,ref:m,"data-testid":"sentinelEnd"})]})}function Ne(e){const t=A(e);return t.body===e?G(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function U(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function re(e){return parseInt(G(e).getComputedStyle(e).paddingRight,10)||0}function Fe(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function se(e,t,n,o,s){const r=[t,n,...o];[].forEach.call(e.children,i=>{const c=r.indexOf(i)===-1,u=!Fe(i);c&&u&&U(i,s)})}function q(e,t){let n=-1;return e.some((o,s)=>t(o)?(n=s,!0):!1),n}function we(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(Ne(o)){const i=Te(A(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${re(o)+i}px`;const c=A(o).querySelectorAll(".mui-fixed");[].forEach.call(c,u=>{n.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${re(u)+i}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=A(o).body;else{const i=o.parentElement,c=G(o);r=(i==null?void 0:i.nodeName)==="HTML"&&c.getComputedStyle(i).overflowY==="scroll"?i:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:i,property:c})=>{r?i.style.setProperty(c,r):i.style.removeProperty(c)})}}function Ae(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Oe{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&U(t.modalRef,!1);const s=Ae(n);se(n,t.mount,t.modalRef,s,!0);const r=q(this.containers,i=>i.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:s}),o)}mount(t,n){const o=q(this.containers,r=>r.modals.indexOf(t)!==-1),s=this.containers[o];s.restore||(s.restore=we(s,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const s=q(this.containers,i=>i.modals.indexOf(t)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&U(t.modalRef,n),se(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&U(i.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Be(e){return typeof e=="function"?e():e}function De(e){return e?e.props.hasOwnProperty("in"):!1}const Le=new Oe;function He(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,manager:s=Le,closeAfterTransition:r=!1,onTransitionEnter:i,onTransitionExited:c,children:u,onClose:g,open:m,rootRef:h}=e,R=d.useRef({}),E=d.useRef(null),l=d.useRef(null),O=le(l,h),[S,M]=d.useState(!m),P=De(u);let a=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(a=!1);const T=()=>A(E.current),k=()=>(R.current.modalRef=l.current,R.current.mount=E.current,R.current),C=()=>{s.mount(k(),{disableScrollLock:o}),l.current&&(l.current.scrollTop=0)},b=te(()=>{const p=Be(t)||T().body;s.add(k(),p),l.current&&C()}),x=d.useCallback(()=>s.isTopModal(k()),[s]),N=te(p=>{E.current=p,p&&(m&&x()?C():l.current&&U(l.current,a))}),v=d.useCallback(()=>{s.remove(k(),a)},[a,s]);d.useEffect(()=>()=>{v()},[v]),d.useEffect(()=>{m?b():(!P||!r)&&v()},[m,v,P,r,b]);const B=p=>f=>{var y;(y=p.onKeyDown)==null||y.call(p,f),!(f.key!=="Escape"||!x())&&(n||(f.stopPropagation(),g&&g(f,"escapeKeyDown")))},F=p=>f=>{var y;(y=p.onClick)==null||y.call(p,f),f.target===f.currentTarget&&g&&g(f,"backdropClick")};return{getRootProps:(p={})=>{const f=ve(e);delete f.onTransitionEnter,delete f.onTransitionExited;const y=Y({},f,p);return Y({role:"presentation"},y,{onKeyDown:B(y),ref:O})},getBackdropProps:(p={})=>{const f=p;return Y({"aria-hidden":!0},f,{onClick:F(f),open:m})},getTransitionProps:()=>{const p=()=>{M(!1),i&&i()},f=()=>{M(!0),c&&c(),r&&v()};return{onEnter:ne(p,u==null?void 0:u.props.onEnter),onExited:ne(f,u==null?void 0:u.props.onExited)}},rootRef:O,portalRef:N,isTopModal:x,exited:S,hasTransition:P}}function _e(e){return he("MuiModal",e)}Ee("MuiModal",["root","hidden","backdrop"]);const Ke=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],Ue=e=>{const{open:t,exited:n,classes:o}=e;return be({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},_e,o)},$e=ie("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>w({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),We=ie(xe,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),je=d.forwardRef(function(t,n){var o,s,r,i,c,u;const g=ge({name:"MuiModal",props:t}),{BackdropComponent:m=We,BackdropProps:h,className:R,closeAfterTransition:E=!1,children:l,container:O,component:S,components:M={},componentsProps:P={},disableAutoFocus:a=!1,disableEnforceFocus:T=!1,disableEscapeKeyDown:k=!1,disablePortal:C=!1,disableRestoreFocus:b=!1,disableScrollLock:x=!1,hideBackdrop:N=!1,keepMounted:v=!1,onBackdropClick:B,open:F,slotProps:I,slots:H}=g,V=me(g,Ke),p=w({},g,{closeAfterTransition:E,disableAutoFocus:a,disableEnforceFocus:T,disableEscapeKeyDown:k,disablePortal:C,disableRestoreFocus:b,disableScrollLock:x,hideBackdrop:N,keepMounted:v}),{getRootProps:f,getBackdropProps:y,getTransitionProps:ce,portalRef:de,isTopModal:ue,exited:X,hasTransition:J}=He(w({},p,{rootRef:n})),_=w({},p,{exited:X}),D=Ue(_),$={};if(l.props.tabIndex===void 0&&($.tabIndex="-1"),J){const{onEnter:L,onExited:W}=ce();$.onEnter=L,$.onExited=W}const Q=(o=(s=H==null?void 0:H.root)!=null?s:M.Root)!=null?o:$e,Z=(r=(i=H==null?void 0:H.backdrop)!=null?i:M.Backdrop)!=null?r:m,j=(c=I==null?void 0:I.root)!=null?c:P.root,z=(u=I==null?void 0:I.backdrop)!=null?u:P.backdrop,fe=oe({elementType:Q,externalSlotProps:j,externalForwardedProps:V,getSlotProps:f,additionalProps:{ref:n,as:S},ownerState:_,className:ee(R,j==null?void 0:j.className,D==null?void 0:D.root,!_.open&&_.exited&&(D==null?void 0:D.hidden))}),pe=oe({elementType:Z,externalSlotProps:z,additionalProps:h,getSlotProps:L=>y(w({},L,{onClick:W=>{B&&B(W),L!=null&&L.onClick&&L.onClick(W)}})),className:ee(z==null?void 0:z.className,h==null?void 0:h.className,D==null?void 0:D.backdrop),ownerState:_});return!v&&!F&&(!J||X)?null:K(Re,{ref:de,container:O,disablePortal:C,children:ae(Q,w({},fe,{children:[!N&&m?K(Z,w({},pe)):null,K(Ce,{disableEnforceFocus:T,disableAutoFocus:a,disableRestoreFocus:b,isEnabled:ue,open:F,children:d.cloneElement(l,$)})]}))})}),at=je;export{Ce as F,at as M,Te as g};
//# sourceMappingURL=Modal-1f45fd5c.js.map
