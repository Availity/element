import{r as l}from"./index-8db94870.js";import{o as Z,d as Fe}from"./ownerWindow-abbdbaf0.js";import{b as ee,g as te,a as ne,s as j,c as V,r as Le}from"./styled-bbc4db24.js";import{u as ke}from"./useTheme-aec6e016.js";import{c as oe}from"./useThemeProps-0aafcae6.js";import{a as pe,j as A}from"./jsx-runtime-91a467a5.js";import{T as Oe,r as Ae,g as me}from"./utils-c18e98c8.js";import{u as re}from"./useForkRef-2674f3de.js";import{o as U}from"./ownerDocument-613eb639.js";import{a as De,b as $e,G as Be}from"./Grow-252694e0.js";import{u as ge,a as He}from"./ButtonBase-353bf105.js";import{u as be,r as ve,i as ze}from"./useSlotProps-4b86086d.js";import{M as we}from"./Paper-c4513d03.js";function ye(...e){return e.reduce((t,n)=>n==null?t:function(...a){t.apply(this,a),n.apply(this,a)},()=>{})}function Ce(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Ue=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Ke(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function We(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function _e(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||We(e))}function je(e){const t=[],n=[];return Array.from(e.querySelectorAll(Ue)).forEach((o,a)=>{const r=Ke(o);r===-1||!_e(o)||(r===0?t.push(o):n.push({documentOrder:a,tabIndex:r,node:o}))}),n.sort((o,a)=>o.tabIndex===a.tabIndex?o.documentOrder-a.documentOrder:o.tabIndex-a.tabIndex).map(o=>o.node).concat(t)}function Ge(){return!0}function Ye(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:a=!1,getTabbable:r=je,isEnabled:i=Ge,open:c}=e,d=l.useRef(!1),P=l.useRef(null),T=l.useRef(null),M=l.useRef(null),g=l.useRef(null),f=l.useRef(!1),p=l.useRef(null),C=re(t.ref,p),k=l.useRef(null);l.useEffect(()=>{!c||!p.current||(f.current=!n)},[n,c]),l.useEffect(()=>{if(!c||!p.current)return;const s=U(p.current);return p.current.contains(s.activeElement)||(p.current.hasAttribute("tabIndex")||p.current.setAttribute("tabIndex","-1"),f.current&&p.current.focus()),()=>{a||(M.current&&M.current.focus&&(d.current=!0,M.current.focus()),M.current=null)}},[c]),l.useEffect(()=>{if(!c||!p.current)return;const s=U(p.current),u=h=>{const{current:F}=p;if(F!==null){if(!s.hasFocus()||o||!i()||d.current){d.current=!1;return}if(!F.contains(s.activeElement)){if(h&&g.current!==h.target||s.activeElement!==g.current)g.current=null;else if(g.current!==null)return;if(!f.current)return;let N=[];if((s.activeElement===P.current||s.activeElement===T.current)&&(N=r(p.current)),N.length>0){var L,v;const H=!!((L=k.current)!=null&&L.shiftKey&&((v=k.current)==null?void 0:v.key)==="Tab"),z=N[0],y=N[N.length-1];typeof z!="string"&&typeof y!="string"&&(H?y.focus():z.focus())}else F.focus()}}},m=h=>{k.current=h,!(o||!i()||h.key!=="Tab")&&s.activeElement===p.current&&h.shiftKey&&(d.current=!0,T.current&&T.current.focus())};s.addEventListener("focusin",u),s.addEventListener("keydown",m,!0);const b=setInterval(()=>{s.activeElement&&s.activeElement.tagName==="BODY"&&u(null)},50);return()=>{clearInterval(b),s.removeEventListener("focusin",u),s.removeEventListener("keydown",m,!0)}},[n,o,a,i,c,r]);const R=s=>{M.current===null&&(M.current=s.relatedTarget),f.current=!0,g.current=s.target;const u=t.props.onFocus;u&&u(s)},w=s=>{M.current===null&&(M.current=s.relatedTarget),f.current=!0};return pe(l.Fragment,{children:[A("div",{tabIndex:c?0:-1,onFocus:w,ref:P,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:C,onFocus:R}),A("div",{tabIndex:c?0:-1,onFocus:w,ref:T,"data-testid":"sentinelEnd"})]})}function Ve(e){const t=U(e);return t.body===e?Z(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function Q(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ee(e){return parseInt(Z(e).getComputedStyle(e).paddingRight,10)||0}function qe(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function xe(e,t,n,o,a){const r=[t,n,...o];[].forEach.call(e.children,i=>{const c=r.indexOf(i)===-1,d=!qe(i);c&&d&&Q(i,a)})}function ue(e,t){let n=-1;return e.some((o,a)=>t(o)?(n=a,!0):!1),n}function Xe(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(Ve(o)){const i=Ce(U(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${Ee(o)+i}px`;const c=U(o).querySelectorAll(".mui-fixed");[].forEach.call(c,d=>{n.push({value:d.style.paddingRight,property:"padding-right",el:d}),d.style.paddingRight=`${Ee(d)+i}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=U(o).body;else{const i=o.parentElement,c=Z(o);r=(i==null?void 0:i.nodeName)==="HTML"&&c.getComputedStyle(i).overflowY==="scroll"?i:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:i,property:c})=>{r?i.style.setProperty(c,r):i.style.removeProperty(c)})}}function Je(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Qe{constructor(){this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&Q(t.modalRef,!1);const a=Je(n);xe(n,t.mount,t.modalRef,a,!0);const r=ue(this.containers,i=>i.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:a}),o)}mount(t,n){const o=ue(this.containers,r=>r.modals.indexOf(t)!==-1),a=this.containers[o];a.restore||(a.restore=Xe(a,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const a=ue(this.containers,i=>i.modals.indexOf(t)!==-1),r=this.containers[a];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&Q(t.modalRef,n),xe(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(a,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&Q(i.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Ze(e){return ee("MuiModal",e)}te("MuiModal",["root","hidden","backdrop"]);const et=e=>{const{open:t,exited:n}=e;return ne({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},$e(Ze))};function tt(e){return typeof e=="function"?e():e}function nt(e){return e?e.props.hasOwnProperty("in"):!1}const ot=new Qe,rt=l.forwardRef(function(t,n){var o,a;const{children:r,closeAfterTransition:i=!1,container:c,disableAutoFocus:d=!1,disableEnforceFocus:P=!1,disableEscapeKeyDown:T=!1,disablePortal:M=!1,disableRestoreFocus:g=!1,disableScrollLock:f=!1,hideBackdrop:p=!1,keepMounted:C=!1,manager:k=ot,onBackdropClick:R,onClose:w,onKeyDown:s,open:u,onTransitionEnter:m,onTransitionExited:b,slotProps:h={},slots:F={},...L}=t,v=k,[N,H]=l.useState(!u),z=l.useRef({}),y=l.useRef(null),E=l.useRef(null),D=re(E,n),G=nt(r),Y=(o=t["aria-hidden"])!=null?o:!0,q=()=>U(y.current),x=()=>(z.current.modalRef=E.current,z.current.mountNode=y.current,z.current),S=()=>{v.mount(x(),{disableScrollLock:f}),E.current&&(E.current.scrollTop=0)},I=ge(()=>{const $=tt(c)||q().body;v.add(x(),$),E.current&&S()}),_=l.useCallback(()=>v.isTopModal(x()),[v]),K=ge($=>{y.current=$,!(!$||!E.current)&&(u&&_()?S():Q(E.current,Y))}),O=l.useCallback(()=>{v.remove(x(),Y)},[v,Y]);l.useEffect(()=>()=>{O()},[O]),l.useEffect(()=>{u?I():(!G||!i)&&O()},[u,O,G,i,I]);const W={...t,closeAfterTransition:i,disableAutoFocus:d,disableEnforceFocus:P,disableEscapeKeyDown:T,disablePortal:M,disableRestoreFocus:g,disableScrollLock:f,exited:N,hideBackdrop:p,keepMounted:C},X=et(W),se=()=>{H(!1),m&&m()},ie=()=>{H(!0),b&&b(),i&&O()},ae=$=>{$.target===$.currentTarget&&(R&&R($),w&&w($,"backdropClick"))},B=$=>{s&&s($),!($.key!=="Escape"||!_())&&(T||($.stopPropagation(),w&&w($,"escapeKeyDown")))},le={};r.props.tabIndex===void 0&&(le.tabIndex="-1"),G&&(le.onEnter=ye(se,r.props.onEnter),le.onExited=ye(ie,r.props.onExited));const he=(a=F.root)!=null?a:"div",Ie=be({elementType:he,externalSlotProps:h.root,externalForwardedProps:L,additionalProps:{ref:D,role:"presentation",onKeyDown:B},className:X.root,ownerState:W}),ce=F.backdrop,Ne=be({elementType:ce,externalSlotProps:h.backdrop,additionalProps:{"aria-hidden":!0,onClick:ae,open:u},className:X.backdrop,ownerState:W});return!C&&!u&&(!G||N)?null:A(De,{ref:K,container:c,disablePortal:M,children:pe(he,{...Ie,children:[!p&&ce?A(ce,{...Ne}):null,A(Ye,{disableEnforceFocus:P,disableAutoFocus:d,disableRestoreFocus:g,isEnabled:_,open:u,children:l.cloneElement(r,le)})]})})}),st=rt,it={entering:{opacity:1},entered:{opacity:1}},at=l.forwardRef(function(t,n){const o=ke(),a={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:r,appear:i=!0,children:c,easing:d,in:P,onEnter:T,onEntered:M,onEntering:g,onExit:f,onExited:p,onExiting:C,style:k,timeout:R=a,TransitionComponent:w=Oe,...s}=t,u=l.useRef(null),m=re(u,c.ref,n),b=y=>E=>{if(y){const D=u.current;E===void 0?y(D):y(D,E)}},h=b(g),F=b((y,E)=>{Ae(y);const D=me({style:k,timeout:R,easing:d},{mode:"enter"});y.style.webkitTransition=o.transitions.create("opacity",D),y.style.transition=o.transitions.create("opacity",D),T&&T(y,E)}),L=b(M),v=b(C),N=b(y=>{const E=me({style:k,timeout:R,easing:d},{mode:"exit"});y.style.webkitTransition=o.transitions.create("opacity",E),y.style.transition=o.transitions.create("opacity",E),f&&f(y)}),H=b(p);return A(w,{appear:i,in:P,nodeRef:u,onEnter:F,onEntered:L,onEntering:h,onExit:N,onExited:H,onExiting:v,addEndListener:y=>{r&&r(u.current,y)},timeout:R,...s,children:(y,E)=>l.cloneElement(c,{style:{opacity:0,visibility:y==="exited"&&!P?"hidden":void 0,...it[y],...k,...c.props.style},ref:m,...E})})}),lt=at;function ct(e){return ee("MuiBackdrop",e)}te("MuiBackdrop",["root","invisible"]);const ut=e=>{const{classes:t,invisible:n}=e;return ne({root:["root",n&&"invisible"]},ct,t)},dt=j("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",...e.invisible&&{backgroundColor:"transparent"}})),ft=l.forwardRef(function(t,n){var o,a,r;const i=oe({props:t,name:"MuiBackdrop"}),{children:c,className:d,component:P="div",components:T={},componentsProps:M={},invisible:g=!1,open:f,slotProps:p={},slots:C={},TransitionComponent:k=lt,transitionDuration:R,...w}=i,s={...i,component:P,invisible:g},u=ut(s),m=(o=p.root)!=null?o:M.root;return A(k,{in:f,timeout:R,...w,children:A(dt,{"aria-hidden":!0,...m,as:(a=(r=C.root)!=null?r:T.Root)!=null?a:P,className:V(u.root,d,m==null?void 0:m.className),ownerState:{...s,...m==null?void 0:m.ownerState},classes:u,ref:n,children:c})})}),pt=ft,ht=j("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0,...!t.open&&t.exited&&{visibility:"hidden"}})),mt=j(pt,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),gt=l.forwardRef(function(t,n){var o,a,r,i,c,d;const P=oe({name:"MuiModal",props:t}),{BackdropComponent:T=mt,BackdropProps:M,classes:g,className:f,closeAfterTransition:p=!1,children:C,container:k,component:R,components:w={},componentsProps:s={},disableAutoFocus:u=!1,disableEnforceFocus:m=!1,disableEscapeKeyDown:b=!1,disablePortal:h=!1,disableRestoreFocus:F=!1,disableScrollLock:L=!1,hideBackdrop:v=!1,keepMounted:N=!1,onBackdropClick:H,onClose:z,open:y,slotProps:E,slots:D,theme:G,...Y}=P,[q,x]=l.useState(!0),S={container:k,closeAfterTransition:p,disableAutoFocus:u,disableEnforceFocus:m,disableEscapeKeyDown:b,disablePortal:h,disableRestoreFocus:F,disableScrollLock:L,hideBackdrop:v,keepMounted:N,onBackdropClick:H,onClose:z,open:y},I={...P,...S,exited:q},_=(o=(a=D==null?void 0:D.root)!=null?a:w.Root)!=null?o:ht,K=(r=(i=D==null?void 0:D.backdrop)!=null?i:w.Backdrop)!=null?r:T,O=(c=E==null?void 0:E.root)!=null?c:s.root,W=(d=E==null?void 0:E.backdrop)!=null?d:s.backdrop;return A(st,{slots:{root:_,backdrop:K},slotProps:{root:()=>({...ve(O,I),...!ze(_)&&{as:R,theme:G},className:V(f,O==null?void 0:O.className,g==null?void 0:g.root,!I.open&&I.exited&&(g==null?void 0:g.hidden))}),backdrop:()=>({...M,...ve(W,I),className:V(W==null?void 0:W.className,g==null?void 0:g.backdrop)})},onTransitionEnter:()=>x(!1),onTransitionExited:()=>x(!0),ref:n,...Y,...S,children:C})}),bt=gt,vt=l.createContext({}),yt=vt;function Et(e){return ee("MuiList",e)}te("MuiList",["root","padding","dense","subheader"]);const xt=e=>{const{classes:t,disablePadding:n,dense:o,subheader:a}=e;return ne({root:["root",!n&&"padding",o&&"dense",a&&"subheader"]},Et,t)},Rt=j("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>({listStyle:"none",margin:0,padding:0,position:"relative",...!e.disablePadding&&{paddingTop:8,paddingBottom:8},...e.subheader&&{paddingTop:0}})),Pt=l.forwardRef(function(t,n){const o=oe({props:t,name:"MuiList"}),{children:a,className:r,component:i="ul",dense:c=!1,disablePadding:d=!1,subheader:P,...T}=o,M=l.useMemo(()=>({dense:c}),[c]),g={...o,component:i,dense:c,disablePadding:d},f=xt(g);return A(yt.Provider,{value:M,children:pe(Rt,{as:i,className:V(f.root,r),ref:n,ownerState:g,...T,children:[P,a]})})}),Mt=Pt;function de(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function Re(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function Se(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function J(e,t,n,o,a,r){let i=!1,c=a(e,t,t?n:!1);for(;c;){if(c===e.firstChild){if(i)return!1;i=!0}const d=o?!1:c.disabled||c.getAttribute("aria-disabled")==="true";if(!c.hasAttribute("tabindex")||!Se(c,r)||d)c=a(e,c,n);else return c.focus(),!0}return!1}const Tt=l.forwardRef(function(t,n){const{actions:o,autoFocus:a=!1,autoFocusItem:r=!1,children:i,className:c,disabledItemsFocusable:d=!1,disableListWrap:P=!1,onKeyDown:T,variant:M="selectedMenu",...g}=t,f=l.useRef(null),p=l.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});He(()=>{a&&f.current.focus()},[a]),l.useImperativeHandle(o,()=>({adjustStyleForScrollbar:(s,u)=>{const m=!f.current.style.width;if(s.clientHeight<f.current.clientHeight&&m){const b=`${Ce(U(s))}px`;f.current.style[u.direction==="rtl"?"paddingLeft":"paddingRight"]=b,f.current.style.width=`calc(100% + ${b})`}return f.current}}),[]);const C=s=>{const u=f.current,m=s.key,b=U(u).activeElement;if(m==="ArrowDown")s.preventDefault(),J(u,b,P,d,de);else if(m==="ArrowUp")s.preventDefault(),J(u,b,P,d,Re);else if(m==="Home")s.preventDefault(),J(u,null,P,d,de);else if(m==="End")s.preventDefault(),J(u,null,P,d,Re);else if(m.length===1){const h=p.current,F=m.toLowerCase(),L=performance.now();h.keys.length>0&&(L-h.lastTime>500?(h.keys=[],h.repeating=!0,h.previousKeyMatched=!0):h.repeating&&F!==h.keys[0]&&(h.repeating=!1)),h.lastTime=L,h.keys.push(F);const v=b&&!h.repeating&&Se(b,h);h.previousKeyMatched&&(v||J(u,b,!1,d,de,h))?s.preventDefault():h.previousKeyMatched=!1}T&&T(s)},k=re(f,n);let R=-1;l.Children.forEach(i,(s,u)=>{l.isValidElement(s)&&(s.props.disabled||(M==="selectedMenu"&&s.props.selected||R===-1)&&(R=u),R===u&&(s.props.disabled||s.props.muiSkipListHighlight||s.type.muiSkipListHighlight)&&(R+=1,R>=i.length&&(R=-1)))});const w=l.Children.map(i,(s,u)=>{if(u===R){const m={};return r&&(m.autoFocus=!0),s.props.tabIndex===void 0&&M==="selectedMenu"&&(m.tabIndex=0),l.cloneElement(s,m)}return s});return A(Mt,{role:"menu",ref:k,className:c,onKeyDown:C,tabIndex:a?0:-1,...g,children:w})}),kt=Tt;function wt(e){return ee("MuiPopover",e)}te("MuiPopover",["root","paper"]);function Pe(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Me(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function Te(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function fe(e){return typeof e=="function"?e():e}const Ct=e=>{const{classes:t}=e;return ne({root:["root"],paper:["paper"]},wt,t)},St=j(bt,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),It=j(we,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Nt=l.forwardRef(function(t,n){const o=oe({props:t,name:"MuiPopover"}),{action:a,anchorEl:r,anchorOrigin:i={vertical:"top",horizontal:"left"},anchorPosition:c,anchorReference:d="anchorEl",children:P,className:T,container:M,elevation:g=8,marginThreshold:f=16,open:p,PaperProps:C={},transformOrigin:k={vertical:"top",horizontal:"left"},TransitionComponent:R=Be,transitionDuration:w="auto",TransitionProps:{onEntering:s,...u}={},...m}=o,b=l.useRef(),h=re(b,C.ref),F={...o,anchorOrigin:i,anchorReference:d,elevation:g,marginThreshold:f,PaperProps:C,transformOrigin:k,TransitionComponent:R,transitionDuration:w,TransitionProps:u},L=Ct(F),v=l.useCallback(()=>{if(d==="anchorPosition")return c;const x=fe(r),I=(x&&x.nodeType===1?x:U(b.current).body).getBoundingClientRect();return{top:I.top+Pe(I,i.vertical),left:I.left+Me(I,i.horizontal)}},[r,i.horizontal,i.vertical,c,d]),N=l.useCallback(x=>({vertical:Pe(x,k.vertical),horizontal:Me(x,k.horizontal)}),[k.horizontal,k.vertical]),H=l.useCallback(x=>{const S={width:x.offsetWidth,height:x.offsetHeight},I=N(S);if(d==="none")return{top:null,left:null,transformOrigin:Te(I)};const _=v();let K=_.top-I.vertical,O=_.left-I.horizontal;const W=K+S.height,X=O+S.width,se=Z(fe(r)),ie=se.innerHeight-f,ae=se.innerWidth-f;if(K<f){const B=K-f;K-=B,I.vertical+=B}else if(W>ie){const B=W-ie;K-=B,I.vertical+=B}if(O<f){const B=O-f;O-=B,I.horizontal+=B}else if(X>ae){const B=X-ae;O-=B,I.horizontal+=B}return{top:`${Math.round(K)}px`,left:`${Math.round(O)}px`,transformOrigin:Te(I)}},[r,d,v,N,f]),[z,y]=l.useState(p),E=l.useCallback(()=>{const x=b.current;if(!x)return;const S=H(x);S.top!==null&&(x.style.top=S.top),S.left!==null&&(x.style.left=S.left),x.style.transformOrigin=S.transformOrigin,y(!0)},[H]),D=(x,S)=>{s&&s(x,S),E()},G=()=>{y(!1)};l.useEffect(()=>{p&&E()}),l.useImperativeHandle(a,()=>p?{updatePosition:()=>{E()}}:null,[p,E]),l.useEffect(()=>{if(!p)return;const x=Fe(()=>{E()}),S=Z(r);return S.addEventListener("resize",x),()=>{x.clear(),S.removeEventListener("resize",x)}},[r,p,E]);let Y=w;w==="auto"&&!R.muiSupportAuto&&(Y=void 0);const q=M||(r?U(fe(r)).body:void 0);return A(St,{BackdropProps:{invisible:!0},className:V(L.root,T),container:q,open:p,ref:n,ownerState:F,...m,children:A(R,{appear:!0,in:p,onEntering:D,onExited:G,timeout:Y,...u,children:A(It,{elevation:g,...C,ref:h,className:V(L.paper,C.className),...z?void 0:{style:{...C.style,opacity:0}},ownerState:F,children:P})})})}),Ft=Nt;function Lt(e){return ee("MuiMenu",e)}te("MuiMenu",["root","paper","list"]);const Ot={vertical:"top",horizontal:"right"},At={vertical:"top",horizontal:"left"},Dt=e=>{const{classes:t}=e;return ne({root:["root"],paper:["paper"],list:["list"]},Lt,t)},$t=j(Ft,{shouldForwardProp:e=>Le(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Bt=j(we,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Ht=j(kt,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),zt=l.forwardRef(function(t,n){const o=oe({props:t,name:"MuiMenu"}),{autoFocus:a=!0,children:r,disableAutoFocusItem:i=!1,MenuListProps:c={},onClose:d,open:P,PaperProps:T={},PopoverClasses:M,transitionDuration:g="auto",TransitionProps:{onEntering:f,...p}={},variant:C="selectedMenu",...k}=o,R=ke(),w=R.direction==="rtl",s={...o,autoFocus:a,disableAutoFocusItem:i,MenuListProps:c,onEntering:f,PaperProps:T,transitionDuration:g,TransitionProps:p,variant:C},u=Dt(s),m=a&&!i&&P,b=l.useRef(null),h=(v,N)=>{b.current&&b.current.adjustStyleForScrollbar(v,R),f&&f(v,N)},F=v=>{v.key==="Tab"&&(v.preventDefault(),d&&d(v,"tabKeyDown"))};let L=-1;return l.Children.map(r,(v,N)=>{l.isValidElement(v)&&(v.props.disabled||(C==="selectedMenu"&&v.props.selected||L===-1)&&(L=N))}),A($t,{onClose:d,anchorOrigin:{vertical:"bottom",horizontal:w?"right":"left"},transformOrigin:w?Ot:At,PaperProps:{as:Bt,...T,classes:{...T.classes,root:u.paper}},className:u.root,open:P,ref:n,transitionDuration:g,TransitionProps:{onEntering:h,...p},ownerState:s,...k,classes:M,children:A(Ht,{onKeyDown:F,actions:b,autoFocus:a&&(L===-1||i),autoFocusItem:m,variant:C,...c,className:V(u.list,c.className),children:r})})}),en=zt;export{yt as L,en as M,kt as a,Mt as b};
//# sourceMappingURL=Menu-5cb64747.js.map
