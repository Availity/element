import{r as R}from"./index-DcWiA9TO.js";import{g as j,c as w}from"./generateUtilityClass-Bqc1qv72.js";import{m as P}from"./memoTheme-DvanvhnP.js";import{c as N}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{g as U}from"./generateUtilityClasses-DyVAdLaw.js";import{j as d}from"./jsx-runtime-CcL-W3nW.js";import{u as E}from"./DefaultPropsProvider-CIAoFptl.js";import{s as v,c as F}from"./styled-Dbr85gFc.js";import{f as n}from"./createTheme-CKCRSfxM.js";import{c as S,k as $}from"./emotion-react.browser.esm-rTq5AsO6.js";function I(e){return j("MuiCircularProgress",e)}U("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const t=44,g=$`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,h=$`
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
`,z=typeof g!="string"?S`
        animation: ${g} 1.4s linear infinite;
      `:null,A=typeof h!="string"?S`
        animation: ${h} 1.4s ease-in-out infinite;
      `:null,K=e=>{const{classes:r,variant:s,color:o,disableShrink:c}=e,l={root:["root",s,`color${n(o)}`],svg:["svg"],circle:["circle",`circle${n(s)}`,c&&"circleDisableShrink"]};return F(l,I,r)},V=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,r[s.variant],r[`color${n(s.color)}`]]}})(P(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:z||{animation:`${g} 1.4s linear infinite`}},...Object.entries(e.palette).filter(N()).map(([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}}))]}))),B=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),G=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.circle,r[`circle${n(s.variant)}`],s.disableShrink&&r.circleDisableShrink]}})(P(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink,style:A||{animation:`${h} 1.4s ease-in-out infinite`}}]}))),Y=R.forwardRef(function(r,s){const o=E({props:r,name:"MuiCircularProgress"}),{className:c,color:l="primary",disableShrink:b=!1,size:m=40,style:D,thickness:a=3.6,value:p=0,variant:y="indeterminate",...M}=o,i={...o,color:l,disableShrink:b,size:m,thickness:a,value:p,variant:y},f=K(i),u={},k={},x={};if(y==="determinate"){const C=2*Math.PI*((t-a)/2);u.strokeDasharray=C.toFixed(3),x["aria-valuenow"]=Math.round(p),u.strokeDashoffset=`${((100-p)/100*C).toFixed(3)}px`,k.transform="rotate(-90deg)"}return d.jsx(V,{className:w(f.root,c),style:{width:m,height:m,...k,...D},ownerState:i,ref:s,role:"progressbar",...x,...M,children:d.jsx(B,{className:f.svg,ownerState:i,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:d.jsx(G,{className:f.circle,style:u,ownerState:i,cx:t,cy:t,r:(t-a)/2,fill:"none",strokeWidth:a})})})});export{Y as C};
