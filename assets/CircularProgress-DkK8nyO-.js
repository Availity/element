import{r as R,u as w,j as c,c as N,v as l,y as $,z as b}from"./iframe-DF1q2aaL.js";import{m as h}from"./memoTheme-BD6H9365.js";import{c as T}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{g as U}from"./generateUtilityClass-BtcU_pBl.js";import{g as z}from"./generateUtilityClasses-DDbjFgb8.js";import{s as m,c as E}from"./styled-CFEXa4qH.js";function F(r){return U("MuiCircularProgress",r)}z("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","track","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const s=44,g=b`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,y=b`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,I=typeof g!="string"?$`
        animation: ${g} 1.4s linear infinite;
      `:null,A=typeof y!="string"?$`
        animation: ${y} 1.4s ease-in-out infinite;
      `:null,K=r=>{const{classes:e,variant:t,color:i,disableShrink:p}=r,u={root:["root",t,`color${l(i)}`],svg:["svg"],track:["track"],circle:["circle",`circle${l(t)}`,p&&"circleDisableShrink"]};return E(u,F,e)},O=m("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[t.variant],e[`color${l(t.color)}`]]}})(h(({theme:r})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("transform")}},{props:{variant:"indeterminate"},style:I||{animation:`${g} 1.4s linear infinite`}},...Object.entries(r.palette).filter(T()).map(([e])=>({props:{color:e},style:{color:(r.vars||r).palette[e].main}}))]}))),V=m("svg",{name:"MuiCircularProgress",slot:"Svg"})({display:"block"}),W=m("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.circle,e[`circle${l(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})(h(({theme:r})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink,style:A||{animation:`${y} 1.4s ease-in-out infinite`}}]}))),B=m("circle",{name:"MuiCircularProgress",slot:"Track"})(h(({theme:r})=>({stroke:"currentColor",opacity:(r.vars||r).palette.action.activatedOpacity}))),Q=R.forwardRef(function(e,t){const i=w({props:e,name:"MuiCircularProgress"}),{className:p,color:u="primary",disableShrink:D=!1,enableTrackSlot:v=!1,size:d=40,style:M,thickness:a=3.6,value:f=0,variant:x="indeterminate",...j}=i,o={...i,color:u,disableShrink:D,size:d,thickness:a,value:f,variant:x,enableTrackSlot:v},n=K(o),k={},C={},P={};if(x==="determinate"){const S=2*Math.PI*((s-a)/2);k.strokeDasharray=S.toFixed(3),P["aria-valuenow"]=Math.round(f),k.strokeDashoffset=`${((100-f)/100*S).toFixed(3)}px`,C.transform="rotate(-90deg)"}return c.jsx(O,{className:N(n.root,p),style:{width:d,height:d,...C,...M},ownerState:o,ref:t,role:"progressbar",...P,...j,children:c.jsxs(V,{className:n.svg,ownerState:o,viewBox:`${s/2} ${s/2} ${s} ${s}`,children:[v?c.jsx(B,{className:n.track,ownerState:o,cx:s,cy:s,r:(s-a)/2,fill:"none",strokeWidth:a,"aria-hidden":"true"}):null,c.jsx(W,{className:n.circle,style:k,ownerState:o,cx:s,cy:s,r:(s-a)/2,fill:"none",strokeWidth:a})]})})});export{Q as C};
