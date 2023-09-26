import{r as a}from"./index-570b25c1.js";import"./react-is.production.min-a192e302.js";import{b as ee,g as te,a as ne,s as j,c as V,r as Fe}from"./styled-52ae1682.js";import{u as ke}from"./useTheme-a833130b.js";import{c as oe}from"./useThemeProps-09701b40.js";import{a as pe,j as A}from"./jsx-runtime-390e5fc8.js";import{T as Le,r as Oe,g as me}from"./utils-237e8b7d.js";import{u as re}from"./useForkRef-153a0a89.js";import{o as U}from"./ownerDocument-613eb639.js";import{o as Z,d as Ae}from"./ownerWindow-698471fc.js";import{P as De,u as $e,G as Be}from"./Tooltip-863be512.js";import{u as ge}from"./ButtonBase-d82e3f0a.js";import{c as be}from"./createChainedFunction-0bab83cf.js";import{u as ve,r as ye}from"./useSlotProps-163bc2ac.js";import{i as He}from"./isHostComponent-73d6e646.js";import{M as we}from"./Paper-f833d12a.js";import{u as ze}from"./useEnhancedEffect-460150e6.js";function Ce(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Ue=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Ke(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function We(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function _e(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||We(e))}function je(e){const t=[],n=[];return Array.from(e.querySelectorAll(Ue)).forEach((o,c)=>{const r=Ke(o);r===-1||!_e(o)||(r===0?t.push(o):n.push({documentOrder:c,tabIndex:r,node:o}))}),n.sort((o,c)=>o.tabIndex===c.tabIndex?o.documentOrder-c.documentOrder:o.tabIndex-c.tabIndex).map(o=>o.node).concat(t)}function Ge(){return!0}function Ye(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:c=!1,getTabbable:r=je,isEnabled:i=Ge,open:l}=e,d=a.useRef(!1),R=a.useRef(null),T=a.useRef(null),M=a.useRef(null),g=a.useRef(null),f=a.useRef(!1),p=a.useRef(null),C=re(t.ref,p),k=a.useRef(null);a.useEffect(()=>{!l||!p.current||(f.current=!n)},[n,l]),a.useEffect(()=>{if(!l||!p.current)return;const s=U(p.current);return p.current.contains(s.activeElement)||(p.current.hasAttribute("tabIndex")||p.current.setAttribute("tabIndex","-1"),f.current&&p.current.focus()),()=>{c||(M.current&&M.current.focus&&(d.current=!0,M.current.focus()),M.current=null)}},[l]),a.useEffect(()=>{if(!l||!p.current)return;const s=U(p.current),u=h=>{const{current:F}=p;if(F!==null){if(!s.hasFocus()||o||!i()||d.current){d.current=!1;return}if(!F.contains(s.activeElement)){if(h&&g.current!==h.target||s.activeElement!==g.current)g.current=null;else if(g.current!==null)return;if(!f.current)return;let N=[];if((s.activeElement===R.current||s.activeElement===T.current)&&(N=r(p.current)),N.length>0){var L,v;const H=!!((L=k.current)!=null&&L.shiftKey&&((v=k.current)==null?void 0:v.key)==="Tab"),z=N[0],y=N[N.length-1];typeof z!="string"&&typeof y!="string"&&(H?y.focus():z.focus())}else F.focus()}}},m=h=>{k.current=h,!(o||!i()||h.key!=="Tab")&&s.activeElement===p.current&&h.shiftKey&&(d.current=!0,T.current&&T.current.focus())};s.addEventListener("focusin",u),s.addEventListener("keydown",m,!0);const b=setInterval(()=>{s.activeElement&&s.activeElement.tagName==="BODY"&&u(null)},50);return()=>{clearInterval(b),s.removeEventListener("focusin",u),s.removeEventListener("keydown",m,!0)}},[n,o,c,i,l,r]);const P=s=>{M.current===null&&(M.current=s.relatedTarget),f.current=!0,g.current=s.target;const u=t.props.onFocus;u&&u(s)},w=s=>{M.current===null&&(M.current=s.relatedTarget),f.current=!0};return pe(a.Fragment,{children:[A("div",{tabIndex:l?0:-1,onFocus:w,ref:R,"data-testid":"sentinelStart"}),a.cloneElement(t,{ref:C,onFocus:P}),A("div",{tabIndex:l?0:-1,onFocus:w,ref:T,"data-testid":"sentinelEnd"})]})}function Ve(e){const t=U(e);return t.body===e?Z(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function Q(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ee(e){return parseInt(Z(e).getComputedStyle(e).paddingRight,10)||0}function qe(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function xe(e,t,n,o,c){const r=[t,n,...o];[].forEach.call(e.children,i=>{const l=r.indexOf(i)===-1,d=!qe(i);l&&d&&Q(i,c)})}function ue(e,t){let n=-1;return e.some((o,c)=>t(o)?(n=c,!0):!1),n}function Xe(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(Ve(o)){const i=Ce(U(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${Ee(o)+i}px`;const l=U(o).querySelectorAll(".mui-fixed");[].forEach.call(l,d=>{n.push({value:d.style.paddingRight,property:"padding-right",el:d}),d.style.paddingRight=`${Ee(d)+i}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=U(o).body;else{const i=o.parentElement,l=Z(o);r=(i==null?void 0:i.nodeName)==="HTML"&&l.getComputedStyle(i).overflowY==="scroll"?i:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:i,property:l})=>{r?i.style.setProperty(l,r):i.style.removeProperty(l)})}}function Je(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Qe{constructor(){this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&Q(t.modalRef,!1);const c=Je(n);xe(n,t.mount,t.modalRef,c,!0);const r=ue(this.containers,i=>i.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:c}),o)}mount(t,n){const o=ue(this.containers,r=>r.modals.indexOf(t)!==-1),c=this.containers[o];c.restore||(c.restore=Xe(c,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const c=ue(this.containers,i=>i.modals.indexOf(t)!==-1),r=this.containers[c];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&Q(t.modalRef,n),xe(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(c,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&Q(i.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Ze(e){return ee("MuiModal",e)}te("MuiModal",["root","hidden","backdrop"]);const et=e=>{const{open:t,exited:n}=e;return ne({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},$e(Ze))};function tt(e){return typeof e=="function"?e():e}function nt(e){return e?e.props.hasOwnProperty("in"):!1}const ot=new Qe,rt=a.forwardRef(function(t,n){var o,c;const{children:r,closeAfterTransition:i=!1,container:l,disableAutoFocus:d=!1,disableEnforceFocus:R=!1,disableEscapeKeyDown:T=!1,disablePortal:M=!1,disableRestoreFocus:g=!1,disableScrollLock:f=!1,hideBackdrop:p=!1,keepMounted:C=!1,manager:k=ot,onBackdropClick:P,onClose:w,onKeyDown:s,open:u,onTransitionEnter:m,onTransitionExited:b,slotProps:h={},slots:F={},...L}=t,v=k,[N,H]=a.useState(!u),z=a.useRef({}),y=a.useRef(null),E=a.useRef(null),D=re(E,n),G=nt(r),Y=(o=t["aria-hidden"])!=null?o:!0,q=()=>U(y.current),x=()=>(z.current.modalRef=E.current,z.current.mountNode=y.current,z.current),S=()=>{v.mount(x(),{disableScrollLock:f}),E.current&&(E.current.scrollTop=0)},I=ge(()=>{const $=tt(l)||q().body;v.add(x(),$),E.current&&S()}),_=a.useCallback(()=>v.isTopModal(x()),[v]),K=ge($=>{y.current=$,!(!$||!E.current)&&(u&&_()?S():Q(E.current,Y))}),O=a.useCallback(()=>{v.remove(x(),Y)},[v,Y]);a.useEffect(()=>()=>{O()},[O]),a.useEffect(()=>{u?I():(!G||!i)&&O()},[u,O,G,i,I]);const W={...t,closeAfterTransition:i,disableAutoFocus:d,disableEnforceFocus:R,disableEscapeKeyDown:T,disablePortal:M,disableRestoreFocus:g,disableScrollLock:f,exited:N,hideBackdrop:p,keepMounted:C},X=et(W),se=()=>{H(!1),m&&m()},ie=()=>{H(!0),b&&b(),i&&O()},ae=$=>{$.target===$.currentTarget&&(P&&P($),w&&w($,"backdropClick"))},B=$=>{s&&s($),!($.key!=="Escape"||!_())&&(T||($.stopPropagation(),w&&w($,"escapeKeyDown")))},le={};r.props.tabIndex===void 0&&(le.tabIndex="-1"),G&&(le.onEnter=be(se,r.props.onEnter),le.onExited=be(ie,r.props.onExited));const he=(c=F.root)!=null?c:"div",Ie=ve({elementType:he,externalSlotProps:h.root,externalForwardedProps:L,additionalProps:{ref:D,role:"presentation",onKeyDown:B},className:X.root,ownerState:W}),ce=F.backdrop,Ne=ve({elementType:ce,externalSlotProps:h.backdrop,additionalProps:{"aria-hidden":!0,onClick:ae,open:u},className:X.backdrop,ownerState:W});return!C&&!u&&(!G||N)?null:A(De,{ref:K,container:l,disablePortal:M,children:pe(he,{...Ie,children:[!p&&ce?A(ce,{...Ne}):null,A(Ye,{disableEnforceFocus:R,disableAutoFocus:d,disableRestoreFocus:g,isEnabled:_,open:u,children:a.cloneElement(r,le)})]})})}),st=rt,it={entering:{opacity:1},entered:{opacity:1}},at=a.forwardRef(function(t,n){const o=ke(),c={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:r,appear:i=!0,children:l,easing:d,in:R,onEnter:T,onEntered:M,onEntering:g,onExit:f,onExited:p,onExiting:C,style:k,timeout:P=c,TransitionComponent:w=Le,...s}=t,u=a.useRef(null),m=re(u,l.ref,n),b=y=>E=>{if(y){const D=u.current;E===void 0?y(D):y(D,E)}},h=b(g),F=b((y,E)=>{Oe(y);const D=me({style:k,timeout:P,easing:d},{mode:"enter"});y.style.webkitTransition=o.transitions.create("opacity",D),y.style.transition=o.transitions.create("opacity",D),T&&T(y,E)}),L=b(M),v=b(C),N=b(y=>{const E=me({style:k,timeout:P,easing:d},{mode:"exit"});y.style.webkitTransition=o.transitions.create("opacity",E),y.style.transition=o.transitions.create("opacity",E),f&&f(y)}),H=b(p);return A(w,{appear:i,in:R,nodeRef:u,onEnter:F,onEntered:L,onEntering:h,onExit:N,onExited:H,onExiting:v,addEndListener:y=>{r&&r(u.current,y)},timeout:P,...s,children:(y,E)=>a.cloneElement(l,{style:{opacity:0,visibility:y==="exited"&&!R?"hidden":void 0,...it[y],...k,...l.props.style},ref:m,...E})})}),lt=at;function ct(e){return ee("MuiBackdrop",e)}te("MuiBackdrop",["root","invisible"]);const ut=e=>{const{classes:t,invisible:n}=e;return ne({root:["root",n&&"invisible"]},ct,t)},dt=j("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",...e.invisible&&{backgroundColor:"transparent"}})),ft=a.forwardRef(function(t,n){var o,c,r;const i=oe({props:t,name:"MuiBackdrop"}),{children:l,className:d,component:R="div",components:T={},componentsProps:M={},invisible:g=!1,open:f,slotProps:p={},slots:C={},TransitionComponent:k=lt,transitionDuration:P,...w}=i,s={...i,component:R,invisible:g},u=ut(s),m=(o=p.root)!=null?o:M.root;return A(k,{in:f,timeout:P,...w,children:A(dt,{"aria-hidden":!0,...m,as:(c=(r=C.root)!=null?r:T.Root)!=null?c:R,className:V(u.root,d,m==null?void 0:m.className),ownerState:{...s,...m==null?void 0:m.ownerState},classes:u,ref:n,children:l})})}),pt=ft,ht=j("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0,...!t.open&&t.exited&&{visibility:"hidden"}})),mt=j(pt,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),gt=a.forwardRef(function(t,n){var o,c,r,i,l,d;const R=oe({name:"MuiModal",props:t}),{BackdropComponent:T=mt,BackdropProps:M,classes:g,className:f,closeAfterTransition:p=!1,children:C,container:k,component:P,components:w={},componentsProps:s={},disableAutoFocus:u=!1,disableEnforceFocus:m=!1,disableEscapeKeyDown:b=!1,disablePortal:h=!1,disableRestoreFocus:F=!1,disableScrollLock:L=!1,hideBackdrop:v=!1,keepMounted:N=!1,onBackdropClick:H,onClose:z,open:y,slotProps:E,slots:D,theme:G,...Y}=R,[q,x]=a.useState(!0),S={container:k,closeAfterTransition:p,disableAutoFocus:u,disableEnforceFocus:m,disableEscapeKeyDown:b,disablePortal:h,disableRestoreFocus:F,disableScrollLock:L,hideBackdrop:v,keepMounted:N,onBackdropClick:H,onClose:z,open:y},I={...R,...S,exited:q},_=(o=(c=D==null?void 0:D.root)!=null?c:w.Root)!=null?o:ht,K=(r=(i=D==null?void 0:D.backdrop)!=null?i:w.Backdrop)!=null?r:T,O=(l=E==null?void 0:E.root)!=null?l:s.root,W=(d=E==null?void 0:E.backdrop)!=null?d:s.backdrop;return A(st,{slots:{root:_,backdrop:K},slotProps:{root:()=>({...ye(O,I),...!He(_)&&{as:P,theme:G},className:V(f,O==null?void 0:O.className,g==null?void 0:g.root,!I.open&&I.exited&&(g==null?void 0:g.hidden))}),backdrop:()=>({...M,...ye(W,I),className:V(W==null?void 0:W.className,g==null?void 0:g.backdrop)})},onTransitionEnter:()=>x(!1),onTransitionExited:()=>x(!0),ref:n,...Y,...S,children:C})}),bt=gt,vt=a.createContext({}),yt=vt;function Et(e){return ee("MuiList",e)}te("MuiList",["root","padding","dense","subheader"]);const xt=e=>{const{classes:t,disablePadding:n,dense:o,subheader:c}=e;return ne({root:["root",!n&&"padding",o&&"dense",c&&"subheader"]},Et,t)},Pt=j("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>({listStyle:"none",margin:0,padding:0,position:"relative",...!e.disablePadding&&{paddingTop:8,paddingBottom:8},...e.subheader&&{paddingTop:0}})),Rt=a.forwardRef(function(t,n){const o=oe({props:t,name:"MuiList"}),{children:c,className:r,component:i="ul",dense:l=!1,disablePadding:d=!1,subheader:R,...T}=o,M=a.useMemo(()=>({dense:l}),[l]),g={...o,component:i,dense:l,disablePadding:d},f=xt(g);return A(yt.Provider,{value:M,children:pe(Pt,{as:i,className:V(f.root,r),ref:n,ownerState:g,...T,children:[R,c]})})}),Mt=Rt;function de(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function Pe(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function Se(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function J(e,t,n,o,c,r){let i=!1,l=c(e,t,t?n:!1);for(;l;){if(l===e.firstChild){if(i)return!1;i=!0}const d=o?!1:l.disabled||l.getAttribute("aria-disabled")==="true";if(!l.hasAttribute("tabindex")||!Se(l,r)||d)l=c(e,l,n);else return l.focus(),!0}return!1}const Tt=a.forwardRef(function(t,n){const{actions:o,autoFocus:c=!1,autoFocusItem:r=!1,children:i,className:l,disabledItemsFocusable:d=!1,disableListWrap:R=!1,onKeyDown:T,variant:M="selectedMenu",...g}=t,f=a.useRef(null),p=a.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});ze(()=>{c&&f.current.focus()},[c]),a.useImperativeHandle(o,()=>({adjustStyleForScrollbar:(s,u)=>{const m=!f.current.style.width;if(s.clientHeight<f.current.clientHeight&&m){const b=`${Ce(U(s))}px`;f.current.style[u.direction==="rtl"?"paddingLeft":"paddingRight"]=b,f.current.style.width=`calc(100% + ${b})`}return f.current}}),[]);const C=s=>{const u=f.current,m=s.key,b=U(u).activeElement;if(m==="ArrowDown")s.preventDefault(),J(u,b,R,d,de);else if(m==="ArrowUp")s.preventDefault(),J(u,b,R,d,Pe);else if(m==="Home")s.preventDefault(),J(u,null,R,d,de);else if(m==="End")s.preventDefault(),J(u,null,R,d,Pe);else if(m.length===1){const h=p.current,F=m.toLowerCase(),L=performance.now();h.keys.length>0&&(L-h.lastTime>500?(h.keys=[],h.repeating=!0,h.previousKeyMatched=!0):h.repeating&&F!==h.keys[0]&&(h.repeating=!1)),h.lastTime=L,h.keys.push(F);const v=b&&!h.repeating&&Se(b,h);h.previousKeyMatched&&(v||J(u,b,!1,d,de,h))?s.preventDefault():h.previousKeyMatched=!1}T&&T(s)},k=re(f,n);let P=-1;a.Children.forEach(i,(s,u)=>{a.isValidElement(s)&&(s.props.disabled||(M==="selectedMenu"&&s.props.selected||P===-1)&&(P=u),P===u&&(s.props.disabled||s.props.muiSkipListHighlight||s.type.muiSkipListHighlight)&&(P+=1,P>=i.length&&(P=-1)))});const w=a.Children.map(i,(s,u)=>{if(u===P){const m={};return r&&(m.autoFocus=!0),s.props.tabIndex===void 0&&M==="selectedMenu"&&(m.tabIndex=0),a.cloneElement(s,m)}return s});return A(Mt,{role:"menu",ref:k,className:l,onKeyDown:C,tabIndex:c?0:-1,...g,children:w})}),kt=Tt;function wt(e){return ee("MuiPopover",e)}te("MuiPopover",["root","paper"]);function Re(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Me(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function Te(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function fe(e){return typeof e=="function"?e():e}const Ct=e=>{const{classes:t}=e;return ne({root:["root"],paper:["paper"]},wt,t)},St=j(bt,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),It=j(we,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Nt=a.forwardRef(function(t,n){const o=oe({props:t,name:"MuiPopover"}),{action:c,anchorEl:r,anchorOrigin:i={vertical:"top",horizontal:"left"},anchorPosition:l,anchorReference:d="anchorEl",children:R,className:T,container:M,elevation:g=8,marginThreshold:f=16,open:p,PaperProps:C={},transformOrigin:k={vertical:"top",horizontal:"left"},TransitionComponent:P=Be,transitionDuration:w="auto",TransitionProps:{onEntering:s,...u}={},...m}=o,b=a.useRef(),h=re(b,C.ref),F={...o,anchorOrigin:i,anchorReference:d,elevation:g,marginThreshold:f,PaperProps:C,transformOrigin:k,TransitionComponent:P,transitionDuration:w,TransitionProps:u},L=Ct(F),v=a.useCallback(()=>{if(d==="anchorPosition")return l;const x=fe(r),I=(x&&x.nodeType===1?x:U(b.current).body).getBoundingClientRect();return{top:I.top+Re(I,i.vertical),left:I.left+Me(I,i.horizontal)}},[r,i.horizontal,i.vertical,l,d]),N=a.useCallback(x=>({vertical:Re(x,k.vertical),horizontal:Me(x,k.horizontal)}),[k.horizontal,k.vertical]),H=a.useCallback(x=>{const S={width:x.offsetWidth,height:x.offsetHeight},I=N(S);if(d==="none")return{top:null,left:null,transformOrigin:Te(I)};const _=v();let K=_.top-I.vertical,O=_.left-I.horizontal;const W=K+S.height,X=O+S.width,se=Z(fe(r)),ie=se.innerHeight-f,ae=se.innerWidth-f;if(K<f){const B=K-f;K-=B,I.vertical+=B}else if(W>ie){const B=W-ie;K-=B,I.vertical+=B}if(O<f){const B=O-f;O-=B,I.horizontal+=B}else if(X>ae){const B=X-ae;O-=B,I.horizontal+=B}return{top:`${Math.round(K)}px`,left:`${Math.round(O)}px`,transformOrigin:Te(I)}},[r,d,v,N,f]),[z,y]=a.useState(p),E=a.useCallback(()=>{const x=b.current;if(!x)return;const S=H(x);S.top!==null&&(x.style.top=S.top),S.left!==null&&(x.style.left=S.left),x.style.transformOrigin=S.transformOrigin,y(!0)},[H]),D=(x,S)=>{s&&s(x,S),E()},G=()=>{y(!1)};a.useEffect(()=>{p&&E()}),a.useImperativeHandle(c,()=>p?{updatePosition:()=>{E()}}:null,[p,E]),a.useEffect(()=>{if(!p)return;const x=Ae(()=>{E()}),S=Z(r);return S.addEventListener("resize",x),()=>{x.clear(),S.removeEventListener("resize",x)}},[r,p,E]);let Y=w;w==="auto"&&!P.muiSupportAuto&&(Y=void 0);const q=M||(r?U(fe(r)).body:void 0);return A(St,{BackdropProps:{invisible:!0},className:V(L.root,T),container:q,open:p,ref:n,ownerState:F,...m,children:A(P,{appear:!0,in:p,onEntering:D,onExited:G,timeout:Y,...u,children:A(It,{elevation:g,...C,ref:h,className:V(L.paper,C.className),...z?void 0:{style:{...C.style,opacity:0}},ownerState:F,children:R})})})}),Ft=Nt;function Lt(e){return ee("MuiMenu",e)}te("MuiMenu",["root","paper","list"]);const Ot={vertical:"top",horizontal:"right"},At={vertical:"top",horizontal:"left"},Dt=e=>{const{classes:t}=e;return ne({root:["root"],paper:["paper"],list:["list"]},Lt,t)},$t=j(Ft,{shouldForwardProp:e=>Fe(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Bt=j(we,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Ht=j(kt,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),zt=a.forwardRef(function(t,n){const o=oe({props:t,name:"MuiMenu"}),{autoFocus:c=!0,children:r,disableAutoFocusItem:i=!1,MenuListProps:l={},onClose:d,open:R,PaperProps:T={},PopoverClasses:M,transitionDuration:g="auto",TransitionProps:{onEntering:f,...p}={},variant:C="selectedMenu",...k}=o,P=ke(),w=P.direction==="rtl",s={...o,autoFocus:c,disableAutoFocusItem:i,MenuListProps:l,onEntering:f,PaperProps:T,transitionDuration:g,TransitionProps:p,variant:C},u=Dt(s),m=c&&!i&&R,b=a.useRef(null),h=(v,N)=>{b.current&&b.current.adjustStyleForScrollbar(v,P),f&&f(v,N)},F=v=>{v.key==="Tab"&&(v.preventDefault(),d&&d(v,"tabKeyDown"))};let L=-1;return a.Children.map(r,(v,N)=>{a.isValidElement(v)&&(v.props.disabled||(C==="selectedMenu"&&v.props.selected||L===-1)&&(L=N))}),A($t,{onClose:d,anchorOrigin:{vertical:"bottom",horizontal:w?"right":"left"},transformOrigin:w?Ot:At,PaperProps:{as:Bt,...T,classes:{...T.classes,root:u.paper}},className:u.root,open:R,ref:n,transitionDuration:g,TransitionProps:{onEntering:h,...p},ownerState:s,...k,classes:M,children:A(Ht,{onKeyDown:F,actions:b,autoFocus:c&&(L===-1||i),autoFocusItem:m,variant:C,...l,className:V(u.list,l.className),children:r})})}),rn=zt;export{Ye as F,yt as L,rn as M,kt as a,Mt as b};
//# sourceMappingURL=Menu-24a09785.js.map
