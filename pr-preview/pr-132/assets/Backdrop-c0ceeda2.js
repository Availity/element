import{b as S,_ as s}from"./createTheme-e6b56ddb.js";import{r as k}from"./index-570b25c1.js";import{c as $}from"./clsx-8416b751.js";import{g as D,s as W,c as z}from"./styled-78cd751f.js";import{u as A}from"./useThemeProps-285a8f6c.js";import{g as H}from"./generateUtilityClasses-2915a045.js";import{j as B}from"./jsx-runtime-390e5fc8.js";import{u as q}from"./useTheme-b3699c65.js";import{T as G,r as I,g as _}from"./utils-1ac07bae.js";import{u as J}from"./useForkRef-153a0a89.js";const K=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],O={entering:{opacity:1},entered:{opacity:1}},Q=k.forwardRef(function(e,r){const n=q(),g={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:d,appear:p=!0,children:m,easing:x,in:u,onEnter:y,onEntered:C,onEntering:T,onExit:v,onExited:P,onExiting:R,style:f,timeout:E=g,TransitionComponent:w=G}=e,b=S(e,K),a=k.useRef(null),c=J(a,m.ref,r),l=t=>i=>{if(t){const h=a.current;i===void 0?t(h):t(h,i)}},L=l(T),M=l((t,i)=>{I(t);const h=_({style:f,timeout:E,easing:x},{mode:"enter"});t.style.webkitTransition=n.transitions.create("opacity",h),t.style.transition=n.transitions.create("opacity",h),y&&y(t,i)}),F=l(C),j=l(R),N=l(t=>{const i=_({style:f,timeout:E,easing:x},{mode:"exit"});t.style.webkitTransition=n.transitions.create("opacity",i),t.style.transition=n.transitions.create("opacity",i),v&&v(t)}),U=l(P);return B(w,s({appear:p,in:u,nodeRef:a,onEnter:M,onEntered:F,onEntering:L,onExit:N,onExited:U,onExiting:j,addEndListener:t=>{d&&d(a.current,t)},timeout:E},b,{children:(t,i)=>k.cloneElement(m,s({style:s({opacity:0,visibility:t==="exited"&&!u?"hidden":void 0},O[t],f,m.props.style),ref:c},i))}))}),V=Q;function X(o){return D("MuiBackdrop",o)}H("MuiBackdrop",["root","invisible"]);const Y=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Z=o=>{const{classes:e,invisible:r}=o;return z({root:["root",r&&"invisible"]},X,e)},tt=W("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[e.root,r.invisible&&e.invisible]}})(({ownerState:o})=>s({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},o.invisible&&{backgroundColor:"transparent"})),nt=k.forwardRef(function(e,r){var n,g,d;const p=A({props:e,name:"MuiBackdrop"}),{children:m,className:x,component:u="div",components:y={},componentsProps:C={},invisible:T=!1,open:v,slotProps:P={},slots:R={},TransitionComponent:f=V,transitionDuration:E}=p,w=S(p,Y),b=s({},p,{component:u,invisible:T}),a=Z(b),c=(n=P.root)!=null?n:C.root;return B(f,s({in:v,timeout:E},w,{children:B(tt,s({"aria-hidden":!0},c,{as:(g=(d=R.root)!=null?d:y.Root)!=null?g:u,className:$(a.root,x,c==null?void 0:c.className),ownerState:s({},b,c==null?void 0:c.ownerState),classes:a,ref:r,children:m}))}))}),ut=nt;export{V as F,ut as M};
//# sourceMappingURL=Backdrop-c0ceeda2.js.map
