import{e as j,b as T}from"./createTheme-b02e766d.js";import{r as l}from"./index-570b25c1.js";import"./react-is.production.min-a192e302.js";import{c as X}from"./clsx-43049957.js";import{g as le,s as Y,a as ce,r as Ke}from"./styled-69a32198.js";import{u as $e}from"./useTheme-a234fe30.js";import{u as ue}from"./useThemeProps-ac7867ed.js";import{g as de}from"./generateUtilityClasses-b06d554b.js";import{a as xe,j as B}from"./jsx-runtime-390e5fc8.js";import{T as ze,r as Ue,g as we}from"./utils-a53b28cc.js";import{u as pe}from"./useForkRef-153a0a89.js";import{a as be,i as We}from"./objectWithoutPropertiesLoose-830c72af.js";import{o as W}from"./ownerDocument-613eb639.js";import{o as ae,d as je}from"./ownerWindow-698471fc.js";import{u as Ce}from"./ButtonBase-78eecb53.js";import{e as Ge,u as oe}from"./useSlotProps-c5009eb1.js";import{c as Ie}from"./createChainedFunction-0bab83cf.js";import{P as Ye,G as Ve}from"./Tooltip-9ef5363d.js";import{M as qe}from"./Paper-f1647d6d.js";import{u as Xe}from"./useEnhancedEffect-460150e6.js";function _e(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Je=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Qe(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Ze(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function et(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Ze(e))}function tt(e){const t=[],o=[];return Array.from(e.querySelectorAll(Je)).forEach((n,a)=>{const s=Qe(n);s===-1||!et(n)||(s===0?t.push(n):o.push({documentOrder:a,tabIndex:s,node:n}))}),o.sort((n,a)=>n.tabIndex===a.tabIndex?n.documentOrder-a.documentOrder:n.tabIndex-a.tabIndex).map(n=>n.node).concat(t)}function ot(){return!0}function nt(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:a=!1,getTabbable:s=tt,isEnabled:i=ot,open:c}=e,u=l.useRef(!1),m=l.useRef(null),P=l.useRef(null),b=l.useRef(null),S=l.useRef(null),v=l.useRef(!1),g=l.useRef(null),D=pe(t.ref,g),E=l.useRef(null);l.useEffect(()=>{!c||!g.current||(v.current=!o)},[o,c]),l.useEffect(()=>{if(!c||!g.current)return;const r=W(g.current);return g.current.contains(r.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex","-1"),v.current&&g.current.focus()),()=>{a||(b.current&&b.current.focus&&(u.current=!0,b.current.focus()),b.current=null)}},[c]),l.useEffect(()=>{if(!c||!g.current)return;const r=W(g.current),d=h=>{E.current=h,!(n||!i()||h.key!=="Tab")&&r.activeElement===g.current&&h.shiftKey&&(u.current=!0,P.current&&P.current.focus())},f=()=>{const h=g.current;if(h===null)return;if(!r.hasFocus()||!i()||u.current){u.current=!1;return}if(h.contains(r.activeElement)||n&&r.activeElement!==m.current&&r.activeElement!==P.current)return;if(r.activeElement!==S.current)S.current=null;else if(S.current!==null)return;if(!v.current)return;let w=[];if((r.activeElement===m.current||r.activeElement===P.current)&&(w=s(g.current)),w.length>0){var I,N;const H=!!((I=E.current)!=null&&I.shiftKey&&((N=E.current)==null?void 0:N.key)==="Tab"),F=w[0],A=w[w.length-1];typeof F!="string"&&typeof A!="string"&&(H?A.focus():F.focus())}else h.focus()};r.addEventListener("focusin",f),r.addEventListener("keydown",d,!0);const x=setInterval(()=>{r.activeElement&&r.activeElement.tagName==="BODY"&&f()},50);return()=>{clearInterval(x),r.removeEventListener("focusin",f),r.removeEventListener("keydown",d,!0)}},[o,n,a,i,c,s]);const p=r=>{b.current===null&&(b.current=r.relatedTarget),v.current=!0,S.current=r.target;const d=t.props.onFocus;d&&d(r)},C=r=>{b.current===null&&(b.current=r.relatedTarget),v.current=!0};return xe(l.Fragment,{children:[B("div",{tabIndex:c?0:-1,onFocus:C,ref:m,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:D,onFocus:p}),B("div",{tabIndex:c?0:-1,onFocus:C,ref:P,"data-testid":"sentinelEnd"})]})}function rt(e){const t=W(e);return t.body===e?ae(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function ie(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ne(e){return parseInt(ae(e).getComputedStyle(e).paddingRight,10)||0}function st(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function Le(e,t,o,n,a){const s=[t,o,...n];[].forEach.call(e.children,i=>{const c=s.indexOf(i)===-1,u=!st(i);c&&u&&ie(i,a)})}function ve(e,t){let o=-1;return e.some((n,a)=>t(n)?(o=a,!0):!1),o}function it(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(rt(n)){const i=_e(W(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${Ne(n)+i}px`;const c=W(n).querySelectorAll(".mui-fixed");[].forEach.call(c,u=>{o.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${Ne(u)+i}px`})}let s;if(n.parentNode instanceof DocumentFragment)s=W(n).body;else{const i=n.parentElement,c=ae(n);s=(i==null?void 0:i.nodeName)==="HTML"&&c.getComputedStyle(i).overflowY==="scroll"?i:n}o.push({value:s.style.overflow,property:"overflow",el:s},{value:s.style.overflowX,property:"overflow-x",el:s},{value:s.style.overflowY,property:"overflow-y",el:s}),s.style.overflow="hidden"}return()=>{o.forEach(({value:s,el:i,property:c})=>{s?i.style.setProperty(c,s):i.style.removeProperty(c)})}}function at(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class lt{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&ie(t.modalRef,!1);const a=at(o);Le(o,t.mount,t.modalRef,a,!0);const s=ve(this.containers,i=>i.container===o);return s!==-1?(this.containers[s].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:a}),n)}mount(t,o){const n=ve(this.containers,s=>s.modals.indexOf(t)!==-1),a=this.containers[n];a.restore||(a.restore=it(a,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const a=ve(this.containers,i=>i.modals.indexOf(t)!==-1),s=this.containers[a];if(s.modals.splice(s.modals.indexOf(t),1),this.modals.splice(n,1),s.modals.length===0)s.restore&&s.restore(),t.modalRef&&ie(t.modalRef,o),Le(s.container,t.mount,t.modalRef,s.hiddenSiblings,!1),this.containers.splice(a,1);else{const i=s.modals[s.modals.length-1];i.modalRef&&ie(i.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function ct(e){return typeof e=="function"?e():e}function ut(e){return e?e.props.hasOwnProperty("in"):!1}const dt=new lt;function pt(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:n=!1,manager:a=dt,closeAfterTransition:s=!1,onTransitionEnter:i,onTransitionExited:c,children:u,onClose:m,open:P,rootRef:b}=e,S=l.useRef({}),v=l.useRef(null),g=l.useRef(null),D=pe(g,b),[E,p]=l.useState(!P),C=ut(u);let r=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(r=!1);const d=()=>W(v.current),f=()=>(S.current.modalRef=g.current,S.current.mount=v.current,S.current),x=()=>{a.mount(f(),{disableScrollLock:n}),g.current&&(g.current.scrollTop=0)},h=Ce(()=>{const R=ct(t)||d().body;a.add(f(),R),g.current&&x()}),w=l.useCallback(()=>a.isTopModal(f()),[a]),I=Ce(R=>{v.current=R,R&&(P&&w()?x():g.current&&ie(g.current,r))}),N=l.useCallback(()=>{a.remove(f(),r)},[r,a]);l.useEffect(()=>()=>{N()},[N]),l.useEffect(()=>{P?h():(!C||!s)&&N()},[P,N,C,s,h]);const H=R=>k=>{var $;($=R.onKeyDown)==null||$.call(R,k),!(k.key!=="Escape"||!w())&&(o||(k.stopPropagation(),m&&m(k,"escapeKeyDown")))},F=R=>k=>{var $;($=R.onClick)==null||$.call(R,k),k.target===k.currentTarget&&m&&m(k,"backdropClick")};return{getRootProps:(R={})=>{const k=Ge(e);delete k.onTransitionEnter,delete k.onTransitionExited;const $=be({},k,R);return be({role:"presentation"},$,{onKeyDown:H($),ref:D})},getBackdropProps:(R={})=>{const k=R;return be({"aria-hidden":!0},k,{onClick:F(k),open:P})},getTransitionProps:()=>{const R=()=>{p(!1),i&&i()},k=()=>{p(!0),c&&c(),s&&N()};return{onEnter:Ie(R,u==null?void 0:u.props.onEnter),onExited:Ie(k,u==null?void 0:u.props.onExited)}},rootRef:D,portalRef:I,isTopModal:w,exited:E,hasTransition:C}}const ft=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],ht={entering:{opacity:1},entered:{opacity:1}},mt=l.forwardRef(function(t,o){const n=$e(),a={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:s,appear:i=!0,children:c,easing:u,in:m,onEnter:P,onEntered:b,onEntering:S,onExit:v,onExited:g,onExiting:D,style:E,timeout:p=a,TransitionComponent:C=ze}=t,r=j(t,ft),d=l.useRef(null),f=pe(d,c.ref,o),x=y=>O=>{if(y){const R=d.current;O===void 0?y(R):y(R,O)}},h=x(S),w=x((y,O)=>{Ue(y);const R=we({style:E,timeout:p,easing:u},{mode:"enter"});y.style.webkitTransition=n.transitions.create("opacity",R),y.style.transition=n.transitions.create("opacity",R),P&&P(y,O)}),I=x(b),N=x(D),H=x(y=>{const O=we({style:E,timeout:p,easing:u},{mode:"exit"});y.style.webkitTransition=n.transitions.create("opacity",O),y.style.transition=n.transitions.create("opacity",O),v&&v(y)}),F=x(g);return B(C,T({appear:i,in:m,nodeRef:d,onEnter:w,onEntered:I,onEntering:h,onExit:H,onExited:F,onExiting:N,addEndListener:y=>{s&&s(d.current,y)},timeout:p},r,{children:(y,O)=>l.cloneElement(c,T({style:T({opacity:0,visibility:y==="exited"&&!m?"hidden":void 0},ht[y],E,c.props.style),ref:f},O))}))}),gt=mt;function bt(e){return le("MuiBackdrop",e)}de("MuiBackdrop",["root","invisible"]);const vt=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Pt=e=>{const{classes:t,invisible:o}=e;return ce({root:["root",o&&"invisible"]},bt,t)},Et=Y("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})(({ownerState:e})=>T({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),xt=l.forwardRef(function(t,o){var n,a,s;const i=ue({props:t,name:"MuiBackdrop"}),{children:c,className:u,component:m="div",components:P={},componentsProps:b={},invisible:S=!1,open:v,slotProps:g={},slots:D={},TransitionComponent:E=gt,transitionDuration:p}=i,C=j(i,vt),r=T({},i,{component:m,invisible:S}),d=Pt(r),f=(n=g.root)!=null?n:b.root;return B(E,T({in:v,timeout:p},C,{children:B(Et,T({"aria-hidden":!0},f,{as:(a=(s=D.root)!=null?s:P.Root)!=null?a:m,className:X(d.root,u,f==null?void 0:f.className),ownerState:T({},r,f==null?void 0:f.ownerState),classes:d,ref:o,children:c}))}))}),yt=xt;function Rt(e){return le("MuiModal",e)}de("MuiModal",["root","hidden","backdrop"]);const Tt=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],Mt=e=>{const{open:t,exited:o,classes:n}=e;return ce({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},Rt,n)},kt=Y("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(({theme:e,ownerState:t})=>T({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),St=Y(yt,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),wt=l.forwardRef(function(t,o){var n,a,s,i,c,u;const m=ue({name:"MuiModal",props:t}),{BackdropComponent:P=St,BackdropProps:b,className:S,closeAfterTransition:v=!1,children:g,container:D,component:E,components:p={},componentsProps:C={},disableAutoFocus:r=!1,disableEnforceFocus:d=!1,disableEscapeKeyDown:f=!1,disablePortal:x=!1,disableRestoreFocus:h=!1,disableScrollLock:w=!1,hideBackdrop:I=!1,keepMounted:N=!1,onBackdropClick:H,open:F,slotProps:A,slots:y}=m,O=j(m,Tt),R=T({},m,{closeAfterTransition:v,disableAutoFocus:r,disableEnforceFocus:d,disableEscapeKeyDown:f,disablePortal:x,disableRestoreFocus:h,disableScrollLock:w,hideBackdrop:I,keepMounted:N}),{getRootProps:k,getBackdropProps:$,getTransitionProps:_,portalRef:V,isTopModal:fe,exited:z,hasTransition:he}=pt(T({},R,{rootRef:o})),q=T({},R,{exited:z}),G=Mt(q),J={};if(g.props.tabIndex===void 0&&(J.tabIndex="-1"),he){const{onEnter:M,onExited:L}=_();J.onEnter=M,J.onExited=L}const Q=(n=(a=y==null?void 0:y.root)!=null?a:p.Root)!=null?n:kt,ne=(s=(i=y==null?void 0:y.backdrop)!=null?i:p.Backdrop)!=null?s:P,re=(c=A==null?void 0:A.root)!=null?c:C.root,Z=(u=A==null?void 0:A.backdrop)!=null?u:C.backdrop,me=oe({elementType:Q,externalSlotProps:re,externalForwardedProps:O,getSlotProps:k,additionalProps:{ref:o,as:E},ownerState:q,className:X(S,re==null?void 0:re.className,G==null?void 0:G.root,!q.open&&q.exited&&(G==null?void 0:G.hidden))}),ge=oe({elementType:ne,externalSlotProps:Z,additionalProps:b,getSlotProps:M=>$(T({},M,{onClick:L=>{H&&H(L),M!=null&&M.onClick&&M.onClick(L)}})),className:X(Z==null?void 0:Z.className,b==null?void 0:b.className,G==null?void 0:G.backdrop),ownerState:q});return!N&&!F&&(!he||z)?null:B(Ye,{ref:V,container:D,disablePortal:x,children:xe(Q,T({},me,{children:[!I&&P?B(ne,T({},ge)):null,B(nt,{disableEnforceFocus:d,disableAutoFocus:r,disableRestoreFocus:h,isEnabled:fe,open:F,children:l.cloneElement(g,J)})]}))})}),Ct=wt,It=l.createContext({}),Nt=It;function Lt(e){return le("MuiList",e)}de("MuiList",["root","padding","dense","subheader"]);const Ft=["children","className","component","dense","disablePadding","subheader"],Ot=e=>{const{classes:t,disablePadding:o,dense:n,subheader:a}=e;return ce({root:["root",!o&&"padding",n&&"dense",a&&"subheader"]},Lt,t)},Dt=Y("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disablePadding&&t.padding,o.dense&&t.dense,o.subheader&&t.subheader]}})(({ownerState:e})=>T({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),At=l.forwardRef(function(t,o){const n=ue({props:t,name:"MuiList"}),{children:a,className:s,component:i="ul",dense:c=!1,disablePadding:u=!1,subheader:m}=n,P=j(n,Ft),b=l.useMemo(()=>({dense:c}),[c]),S=T({},n,{component:i,dense:c,disablePadding:u}),v=Ot(S);return B(Nt.Provider,{value:b,children:xe(Dt,T({as:i,className:X(v.root,s),ref:o,ownerState:S},P,{children:[m,a]}))})}),$t=At,_t=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Pe(e,t,o){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:o?null:e.firstChild}function Fe(e,t,o){return e===t?o?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:o?null:e.lastChild}function Be(e,t){if(t===void 0)return!0;let o=e.innerText;return o===void 0&&(o=e.textContent),o=o.trim().toLowerCase(),o.length===0?!1:t.repeating?o[0]===t.keys[0]:o.indexOf(t.keys.join(""))===0}function se(e,t,o,n,a,s){let i=!1,c=a(e,t,t?o:!1);for(;c;){if(c===e.firstChild){if(i)return!1;i=!0}const u=n?!1:c.disabled||c.getAttribute("aria-disabled")==="true";if(!c.hasAttribute("tabindex")||!Be(c,s)||u)c=a(e,c,o);else return c.focus(),!0}return!1}const Bt=l.forwardRef(function(t,o){const{actions:n,autoFocus:a=!1,autoFocusItem:s=!1,children:i,className:c,disabledItemsFocusable:u=!1,disableListWrap:m=!1,onKeyDown:P,variant:b="selectedMenu"}=t,S=j(t,_t),v=l.useRef(null),g=l.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Xe(()=>{a&&v.current.focus()},[a]),l.useImperativeHandle(n,()=>({adjustStyleForScrollbar:(r,d)=>{const f=!v.current.style.width;if(r.clientHeight<v.current.clientHeight&&f){const x=`${_e(W(r))}px`;v.current.style[d.direction==="rtl"?"paddingLeft":"paddingRight"]=x,v.current.style.width=`calc(100% + ${x})`}return v.current}}),[]);const D=r=>{const d=v.current,f=r.key,x=W(d).activeElement;if(f==="ArrowDown")r.preventDefault(),se(d,x,m,u,Pe);else if(f==="ArrowUp")r.preventDefault(),se(d,x,m,u,Fe);else if(f==="Home")r.preventDefault(),se(d,null,m,u,Pe);else if(f==="End")r.preventDefault(),se(d,null,m,u,Fe);else if(f.length===1){const h=g.current,w=f.toLowerCase(),I=performance.now();h.keys.length>0&&(I-h.lastTime>500?(h.keys=[],h.repeating=!0,h.previousKeyMatched=!0):h.repeating&&w!==h.keys[0]&&(h.repeating=!1)),h.lastTime=I,h.keys.push(w);const N=x&&!h.repeating&&Be(x,h);h.previousKeyMatched&&(N||se(d,x,!1,u,Pe,h))?r.preventDefault():h.previousKeyMatched=!1}P&&P(r)},E=pe(v,o);let p=-1;l.Children.forEach(i,(r,d)=>{if(!l.isValidElement(r)){p===d&&(p+=1,p>=i.length&&(p=-1));return}r.props.disabled||(b==="selectedMenu"&&r.props.selected||p===-1)&&(p=d),p===d&&(r.props.disabled||r.props.muiSkipListHighlight||r.type.muiSkipListHighlight)&&(p+=1,p>=i.length&&(p=-1))});const C=l.Children.map(i,(r,d)=>{if(d===p){const f={};return s&&(f.autoFocus=!0),r.props.tabIndex===void 0&&b==="selectedMenu"&&(f.tabIndex=0),l.cloneElement(r,f)}return r});return B($t,T({role:"menu",ref:E,className:c,onKeyDown:D,tabIndex:a?0:-1},S,{children:C}))}),Ht=Bt;function Kt(e){return le("MuiPopover",e)}de("MuiPopover",["root","paper"]);const zt=["onEntering"],Ut=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Wt=["slotProps"];function Oe(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.height/2:t==="bottom"&&(o=e.height),o}function De(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.width/2:t==="right"&&(o=e.width),o}function Ae(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Ee(e){return typeof e=="function"?e():e}const jt=e=>{const{classes:t}=e;return ce({root:["root"],paper:["paper"]},Kt,t)},Gt=Y(Ct,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),He=Y(qe,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Yt=l.forwardRef(function(t,o){var n,a,s;const i=ue({props:t,name:"MuiPopover"}),{action:c,anchorEl:u,anchorOrigin:m={vertical:"top",horizontal:"left"},anchorPosition:P,anchorReference:b="anchorEl",children:S,className:v,container:g,elevation:D=8,marginThreshold:E=16,open:p,PaperProps:C={},slots:r,slotProps:d,transformOrigin:f={vertical:"top",horizontal:"left"},TransitionComponent:x=Ve,transitionDuration:h="auto",TransitionProps:{onEntering:w}={},disableScrollLock:I=!1}=i,N=j(i.TransitionProps,zt),H=j(i,Ut),F=(n=d==null?void 0:d.paper)!=null?n:C,A=l.useRef(),y=pe(A,F.ref),O=T({},i,{anchorOrigin:m,anchorReference:b,elevation:D,marginThreshold:E,externalPaperSlotProps:F,transformOrigin:f,TransitionComponent:x,transitionDuration:h,TransitionProps:N}),R=jt(O),k=l.useCallback(()=>{if(b==="anchorPosition")return P;const M=Ee(u),K=(M&&M.nodeType===1?M:W(A.current).body).getBoundingClientRect();return{top:K.top+Oe(K,m.vertical),left:K.left+De(K,m.horizontal)}},[u,m.horizontal,m.vertical,P,b]),$=l.useCallback(M=>({vertical:Oe(M,f.vertical),horizontal:De(M,f.horizontal)}),[f.horizontal,f.vertical]),_=l.useCallback(M=>{const L={width:M.offsetWidth,height:M.offsetHeight},K=$(L);if(b==="none")return{top:null,left:null,transformOrigin:Ae(K)};const ye=k();let ee=ye.top-K.vertical,te=ye.left-K.horizontal;const Re=ee+L.height,Te=te+L.width,Me=ae(Ee(u)),ke=Me.innerHeight-E,Se=Me.innerWidth-E;if(E!==null&&ee<E){const U=ee-E;ee-=U,K.vertical+=U}else if(E!==null&&Re>ke){const U=Re-ke;ee-=U,K.vertical+=U}if(E!==null&&te<E){const U=te-E;te-=U,K.horizontal+=U}else if(Te>Se){const U=Te-Se;te-=U,K.horizontal+=U}return{top:`${Math.round(ee)}px`,left:`${Math.round(te)}px`,transformOrigin:Ae(K)}},[u,b,k,$,E]),[V,fe]=l.useState(p),z=l.useCallback(()=>{const M=A.current;if(!M)return;const L=_(M);L.top!==null&&(M.style.top=L.top),L.left!==null&&(M.style.left=L.left),M.style.transformOrigin=L.transformOrigin,fe(!0)},[_]);l.useEffect(()=>(I&&window.addEventListener("scroll",z),()=>window.removeEventListener("scroll",z)),[u,I,z]);const he=(M,L)=>{w&&w(M,L),z()},q=()=>{fe(!1)};l.useEffect(()=>{p&&z()}),l.useImperativeHandle(c,()=>p?{updatePosition:()=>{z()}}:null,[p,z]),l.useEffect(()=>{if(!p)return;const M=je(()=>{z()}),L=ae(u);return L.addEventListener("resize",M),()=>{M.clear(),L.removeEventListener("resize",M)}},[u,p,z]);let G=h;h==="auto"&&!x.muiSupportAuto&&(G=void 0);const J=g||(u?W(Ee(u)).body:void 0),Q=(a=r==null?void 0:r.root)!=null?a:Gt,ne=(s=r==null?void 0:r.paper)!=null?s:He,re=oe({elementType:ne,externalSlotProps:T({},F,{style:V?F.style:T({},F.style,{opacity:0})}),additionalProps:{elevation:D,ref:y},ownerState:O,className:X(R.paper,F==null?void 0:F.className)}),Z=oe({elementType:Q,externalSlotProps:(d==null?void 0:d.root)||{},externalForwardedProps:H,additionalProps:{ref:o,slotProps:{backdrop:{invisible:!0}},container:J,open:p},ownerState:O,className:X(R.root,v)}),{slotProps:me}=Z,ge=j(Z,Wt);return B(Q,T({},ge,!We(Q)&&{slotProps:me,disableScrollLock:I},{children:B(x,T({appear:!0,in:p,onEntering:he,onExited:q,timeout:G},N,{children:B(ne,T({},re,{children:S}))}))}))}),Vt=Yt;function qt(e){return le("MuiMenu",e)}de("MuiMenu",["root","paper","list"]);const Xt=["onEntering"],Jt=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],Qt={vertical:"top",horizontal:"right"},Zt={vertical:"top",horizontal:"left"},eo=e=>{const{classes:t}=e;return ce({root:["root"],paper:["paper"],list:["list"]},qt,t)},to=Y(Vt,{shouldForwardProp:e=>Ke(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),oo=Y(He,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),no=Y(Ht,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),ro=l.forwardRef(function(t,o){var n,a;const s=ue({props:t,name:"MuiMenu"}),{autoFocus:i=!0,children:c,className:u,disableAutoFocusItem:m=!1,MenuListProps:P={},onClose:b,open:S,PaperProps:v={},PopoverClasses:g,transitionDuration:D="auto",TransitionProps:{onEntering:E}={},variant:p="selectedMenu",slots:C={},slotProps:r={}}=s,d=j(s.TransitionProps,Xt),f=j(s,Jt),x=$e(),h=x.direction==="rtl",w=T({},s,{autoFocus:i,disableAutoFocusItem:m,MenuListProps:P,onEntering:E,PaperProps:v,transitionDuration:D,TransitionProps:d,variant:p}),I=eo(w),N=i&&!m&&S,H=l.useRef(null),F=(_,V)=>{H.current&&H.current.adjustStyleForScrollbar(_,x),E&&E(_,V)},A=_=>{_.key==="Tab"&&(_.preventDefault(),b&&b(_,"tabKeyDown"))};let y=-1;l.Children.map(c,(_,V)=>{l.isValidElement(_)&&(_.props.disabled||(p==="selectedMenu"&&_.props.selected||y===-1)&&(y=V))});const O=(n=C.paper)!=null?n:oo,R=(a=r.paper)!=null?a:v,k=oe({elementType:C.root,externalSlotProps:r.root,ownerState:w,className:[I.root,u]}),$=oe({elementType:O,externalSlotProps:R,ownerState:w,className:I.paper});return B(to,T({onClose:b,anchorOrigin:{vertical:"bottom",horizontal:h?"right":"left"},transformOrigin:h?Qt:Zt,slots:{paper:O,root:C.root},slotProps:{root:k,paper:$},open:S,ref:o,transitionDuration:D,TransitionProps:T({onEntering:F},d),ownerState:w},f,{classes:g,children:B(no,T({onKeyDown:A,actions:H,autoFocus:i&&(y===-1||m),autoFocusItem:N,variant:p},P,{className:X(I.list,P.className),children:c}))}))}),ko=ro;export{nt as F,Nt as L,ko as M,Ht as a,$t as b};
//# sourceMappingURL=Menu-ada6f194.js.map