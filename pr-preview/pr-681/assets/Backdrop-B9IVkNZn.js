import{r as w}from"./index-DcWiA9TO.js";import{g as T,c as j}from"./generateUtilityClass-Bqc1qv72.js";import{u as a}from"./useSlot-DO4SmqlR.js";import{g as M}from"./generateUtilityClasses-DyVAdLaw.js";import{j as l}from"./jsx-runtime-CcL-W3nW.js";import{u as U}from"./DefaultPropsProvider-CIAoFptl.js";import{s as F,c as D}from"./styled-Dbr85gFc.js";import{F as E}from"./Fade-DbM47FxC.js";function N(o){return T("MuiBackdrop",o)}M("MuiBackdrop",["root","invisible"]);const H=o=>{const{classes:t,invisible:s}=o;return D({root:["root",s&&"invisible"]},N,t)},I=F("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,s.invisible&&t.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),O=w.forwardRef(function(t,s){const r=U({props:t,name:"MuiBackdrop"}),{children:p,className:c,component:m="div",invisible:d=!1,open:u,components:f={},componentsProps:b={},slotProps:k={},slots:C={},TransitionComponent:g,transitionDuration:v,...x}=r,e={...r,component:m,invisible:d},n=H(e),y={transition:g,root:f.Root,...C},B={...b,...k},i={slots:y,slotProps:B},[P,h]=a("root",{elementType:I,externalForwardedProps:i,className:j(n.root,c),ownerState:e}),[R,S]=a("transition",{elementType:E,externalForwardedProps:i,ownerState:e});return l.jsx(R,{in:u,timeout:v,...x,...S,children:l.jsx(P,{"aria-hidden":!0,...h,classes:n,ref:s,children:p})})});export{O as B};
