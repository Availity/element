import{_ as w,b as O}from"./createTheme-e6b56ddb.js";import{r}from"./index-570b25c1.js";import"./react-is.production.min-a192e302.js";import{c as q}from"./clsx-8416b751.js";import{g as oe,s as W,c as ne,r as De}from"./styled-188025da.js";import{u as Ie}from"./useTheme-3a36d7a0.js";import{u as re}from"./useThemeProps-db7202c2.js";import{g as se}from"./generateUtilityClasses-f776b170.js";import{j as N,a as ke}from"./jsx-runtime-390e5fc8.js";import{g as Fe,M as Oe}from"./Modal-84f1cbdc.js";import{M as Ne}from"./Paper-4c319fed.js";import{G as $e}from"./Tooltip-d9214433.js";import{u as Me}from"./useForkRef-153a0a89.js";import{o as J}from"./ownerDocument-613eb639.js";import{o as ge}from"./ownerWindow-03d1c82d.js";import{d as _e}from"./debounce-517eeb3c.js";import{u as Q}from"./useSlotProps-1710581f.js";import{i as ze}from"./objectWithoutPropertiesLoose-b6174fb2.js";import{u as He}from"./useEnhancedEffect-460150e6.js";const Ke=r.createContext({}),Ae=Ke;function We(t){return oe("MuiList",t)}se("MuiList",["root","padding","dense","subheader"]);const Ue=["children","className","component","dense","disablePadding","subheader"],je=t=>{const{classes:e,disablePadding:o,dense:g,subheader:m}=t;return ne({root:["root",!o&&"padding",g&&"dense",m&&"subheader"]},We,e)},Ge=W("ul",{name:"MuiList",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,!o.disablePadding&&e.padding,o.dense&&e.dense,o.subheader&&e.subheader]}})(({ownerState:t})=>w({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})),Ve=r.forwardRef(function(e,o){const g=re({props:e,name:"MuiList"}),{children:m,className:y,component:f="ul",dense:u=!1,disablePadding:l=!1,subheader:h}=g,R=O(g,Ue),M=r.useMemo(()=>({dense:u}),[u]),T=w({},g,{component:f,dense:u,disablePadding:l}),P=je(T);return N(Ae.Provider,{value:M,children:ke(Ge,w({as:f,className:q(P.root,y),ref:o,ownerState:T},R,{children:[h,m]}))})}),Be=Ve,Xe=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function ee(t,e,o){return t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:o?null:t.firstChild}function Pe(t,e,o){return t===e?o?t.firstChild:t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:o?null:t.lastChild}function we(t,e){if(e===void 0)return!0;let o=t.innerText;return o===void 0&&(o=t.textContent),o=o.trim().toLowerCase(),o.length===0?!1:e.repeating?o[0]===e.keys[0]:o.indexOf(e.keys.join(""))===0}function V(t,e,o,g,m,y){let f=!1,u=m(t,e,e?o:!1);for(;u;){if(u===t.firstChild){if(f)return!1;f=!0}const l=g?!1:u.disabled||u.getAttribute("aria-disabled")==="true";if(!u.hasAttribute("tabindex")||!we(u,y)||l)u=m(t,u,o);else return u.focus(),!0}return!1}const Ye=r.forwardRef(function(e,o){const{actions:g,autoFocus:m=!1,autoFocusItem:y=!1,children:f,className:u,disabledItemsFocusable:l=!1,disableListWrap:h=!1,onKeyDown:R,variant:M="selectedMenu"}=e,T=O(e,Xe),P=r.useRef(null),U=r.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});He(()=>{m&&P.current.focus()},[m]),r.useImperativeHandle(g,()=>({adjustStyleForScrollbar:(n,i)=>{const p=!P.current.style.width;if(n.clientHeight<P.current.clientHeight&&p){const v=`${Fe(J(n))}px`;P.current.style[i.direction==="rtl"?"paddingLeft":"paddingRight"]=v,P.current.style.width=`calc(100% + ${v})`}return P.current}}),[]);const k=n=>{const i=P.current,p=n.key,v=J(i).activeElement;if(p==="ArrowDown")n.preventDefault(),V(i,v,h,l,ee);else if(p==="ArrowUp")n.preventDefault(),V(i,v,h,l,Pe);else if(p==="Home")n.preventDefault(),V(i,null,h,l,ee);else if(p==="End")n.preventDefault(),V(i,null,h,l,Pe);else if(p.length===1){const a=U.current,E=p.toLowerCase(),L=performance.now();a.keys.length>0&&(L-a.lastTime>500?(a.keys=[],a.repeating=!0,a.previousKeyMatched=!0):a.repeating&&E!==a.keys[0]&&(a.repeating=!1)),a.lastTime=L,a.keys.push(E);const $=v&&!a.repeating&&we(v,a);a.previousKeyMatched&&($||V(i,v,!1,l,ee,a))?n.preventDefault():a.previousKeyMatched=!1}R&&R(n)},d=Me(P,o);let s=-1;r.Children.forEach(f,(n,i)=>{if(!r.isValidElement(n)){s===i&&(s+=1,s>=f.length&&(s=-1));return}n.props.disabled||(M==="selectedMenu"&&n.props.selected||s===-1)&&(s=i),s===i&&(n.props.disabled||n.props.muiSkipListHighlight||n.type.muiSkipListHighlight)&&(s+=1,s>=f.length&&(s=-1))});const F=r.Children.map(f,(n,i)=>{if(i===s){const p={};return y&&(p.autoFocus=!0),n.props.tabIndex===void 0&&M==="selectedMenu"&&(p.tabIndex=0),r.cloneElement(n,p)}return n});return N(Be,w({role:"menu",ref:d,className:u,onKeyDown:k,tabIndex:m?0:-1},T,{children:F}))}),qe=Ye;function Je(t){return oe("MuiPopover",t)}se("MuiPopover",["root","paper"]);const Qe=["onEntering"],Ze=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],et=["slotProps"];function ve(t,e){let o=0;return typeof e=="number"?o=e:e==="center"?o=t.height/2:e==="bottom"&&(o=t.height),o}function be(t,e){let o=0;return typeof e=="number"?o=e:e==="center"?o=t.width/2:e==="right"&&(o=t.width),o}function ye(t){return[t.horizontal,t.vertical].map(e=>typeof e=="number"?`${e}px`:e).join(" ")}function te(t){return typeof t=="function"?t():t}const tt=t=>{const{classes:e}=t;return ne({root:["root"],paper:["paper"]},Je,e)},ot=W(Oe,{name:"MuiPopover",slot:"Root",overridesResolver:(t,e)=>e.root})({}),xe=W(Ne,{name:"MuiPopover",slot:"Paper",overridesResolver:(t,e)=>e.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),nt=r.forwardRef(function(e,o){var g,m,y;const f=re({props:e,name:"MuiPopover"}),{action:u,anchorEl:l,anchorOrigin:h={vertical:"top",horizontal:"left"},anchorPosition:R,anchorReference:M="anchorEl",children:T,className:P,container:U,elevation:k=8,marginThreshold:d=16,open:s,PaperProps:F={},slots:n,slotProps:i,transformOrigin:p={vertical:"top",horizontal:"left"},TransitionComponent:v=$e,transitionDuration:a="auto",TransitionProps:{onEntering:E}={},disableScrollLock:L=!1}=f,$=O(f.TransitionProps,Qe),j=O(f,Ze),D=(g=i==null?void 0:i.paper)!=null?g:F,G=r.useRef(),_=Me(G,D.ref),z=w({},f,{anchorOrigin:h,anchorReference:M,elevation:k,marginThreshold:d,externalPaperSlotProps:D,transformOrigin:p,TransitionComponent:v,transitionDuration:a,TransitionProps:$}),B=tt(z),X=r.useCallback(()=>{if(M==="anchorPosition")return R;const c=te(l),S=(c&&c.nodeType===1?c:J(G.current).body).getBoundingClientRect();return{top:S.top+ve(S,h.vertical),left:S.left+be(S,h.horizontal)}},[l,h.horizontal,h.vertical,R,M]),Y=r.useCallback(c=>({vertical:ve(c,p.vertical),horizontal:be(c,p.horizontal)}),[p.horizontal,p.vertical]),x=r.useCallback(c=>{const b={width:c.offsetWidth,height:c.offsetHeight},S=Y(b);if(M==="none")return{top:null,left:null,transformOrigin:ye(S)};const ue=X();let K=ue.top-S.vertical,A=ue.left-S.horizontal;const pe=K+b.height,fe=A+b.width,de=ge(te(l)),me=de.innerHeight-d,he=de.innerWidth-d;if(d!==null&&K<d){const C=K-d;K-=C,S.vertical+=C}else if(d!==null&&pe>me){const C=pe-me;K-=C,S.vertical+=C}if(d!==null&&A<d){const C=A-d;A-=C,S.horizontal+=C}else if(fe>he){const C=fe-he;A-=C,S.horizontal+=C}return{top:`${Math.round(K)}px`,left:`${Math.round(A)}px`,transformOrigin:ye(S)}},[l,M,X,Y,d]),[H,ie]=r.useState(s),I=r.useCallback(()=>{const c=G.current;if(!c)return;const b=x(c);b.top!==null&&(c.style.top=b.top),b.left!==null&&(c.style.left=b.left),c.style.transformOrigin=b.transformOrigin,ie(!0)},[x]);r.useEffect(()=>(L&&window.addEventListener("scroll",I),()=>window.removeEventListener("scroll",I)),[l,L,I]);const Se=(c,b)=>{E&&E(c,b),I()},Re=()=>{ie(!1)};r.useEffect(()=>{s&&I()}),r.useImperativeHandle(u,()=>s?{updatePosition:()=>{I()}}:null,[s,I]),r.useEffect(()=>{if(!s)return;const c=_e(()=>{I()}),b=ge(l);return b.addEventListener("resize",c),()=>{c.clear(),b.removeEventListener("resize",c)}},[l,s,I]);let ae=a;a==="auto"&&!v.muiSupportAuto&&(ae=void 0);const Ce=U||(l?J(te(l)).body:void 0),Z=(m=n==null?void 0:n.root)!=null?m:ot,le=(y=n==null?void 0:n.paper)!=null?y:xe,Ee=Q({elementType:le,externalSlotProps:w({},D,{style:H?D.style:w({},D.style,{opacity:0})}),additionalProps:{elevation:k,ref:_},ownerState:z,className:q(B.paper,D==null?void 0:D.className)}),ce=Q({elementType:Z,externalSlotProps:(i==null?void 0:i.root)||{},externalForwardedProps:j,additionalProps:{ref:o,slotProps:{backdrop:{invisible:!0}},container:Ce,open:s},ownerState:z,className:q(B.root,P)}),{slotProps:Le}=ce,Te=O(ce,et);return N(Z,w({},Te,!ze(Z)&&{slotProps:Le,disableScrollLock:L},{children:N(v,w({appear:!0,in:s,onEntering:Se,onExited:Re,timeout:ae},$,{children:N(le,w({},Ee,{children:T}))}))}))}),rt=nt;function st(t){return oe("MuiMenu",t)}se("MuiMenu",["root","paper","list"]);const it=["onEntering"],at=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],lt={vertical:"top",horizontal:"right"},ct={vertical:"top",horizontal:"left"},ut=t=>{const{classes:e}=t;return ne({root:["root"],paper:["paper"],list:["list"]},st,e)},pt=W(rt,{shouldForwardProp:t=>De(t)||t==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(t,e)=>e.root})({}),ft=W(xe,{name:"MuiMenu",slot:"Paper",overridesResolver:(t,e)=>e.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),dt=W(qe,{name:"MuiMenu",slot:"List",overridesResolver:(t,e)=>e.list})({outline:0}),mt=r.forwardRef(function(e,o){var g,m;const y=re({props:e,name:"MuiMenu"}),{autoFocus:f=!0,children:u,className:l,disableAutoFocusItem:h=!1,MenuListProps:R={},onClose:M,open:T,PaperProps:P={},PopoverClasses:U,transitionDuration:k="auto",TransitionProps:{onEntering:d}={},variant:s="selectedMenu",slots:F={},slotProps:n={}}=y,i=O(y.TransitionProps,it),p=O(y,at),v=Ie(),a=v.direction==="rtl",E=w({},y,{autoFocus:f,disableAutoFocusItem:h,MenuListProps:R,onEntering:d,PaperProps:P,transitionDuration:k,TransitionProps:i,variant:s}),L=ut(E),$=f&&!h&&T,j=r.useRef(null),D=(x,H)=>{j.current&&j.current.adjustStyleForScrollbar(x,v),d&&d(x,H)},G=x=>{x.key==="Tab"&&(x.preventDefault(),M&&M(x,"tabKeyDown"))};let _=-1;r.Children.map(u,(x,H)=>{r.isValidElement(x)&&(x.props.disabled||(s==="selectedMenu"&&x.props.selected||_===-1)&&(_=H))});const z=(g=F.paper)!=null?g:ft,B=(m=n.paper)!=null?m:P,X=Q({elementType:F.root,externalSlotProps:n.root,ownerState:E,className:[L.root,l]}),Y=Q({elementType:z,externalSlotProps:B,ownerState:E,className:L.paper});return N(pt,w({onClose:M,anchorOrigin:{vertical:"bottom",horizontal:a?"right":"left"},transformOrigin:a?lt:ct,slots:{paper:z,root:F.root},slotProps:{root:X,paper:Y},open:T,ref:o,transitionDuration:k,TransitionProps:w({onEntering:D},i),ownerState:E},p,{classes:U,children:N(dt,w({onKeyDown:G,actions:j,autoFocus:f&&(_===-1||h),autoFocusItem:$,variant:s},R,{className:q(L.list,R.className),children:u}))}))}),Ot=mt;export{Ae as L,Ot as M,qe as a,Be as b};
//# sourceMappingURL=Menu-4894e36d.js.map
