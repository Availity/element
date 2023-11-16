import{f as n,_ as a,b as N}from"./createTheme-bcd1d157.js";import{r as U}from"./index-570b25c1.js";import{c as z}from"./clsx-7dc4e18d.js";import{u as I}from"./useThemeProps-018254e6.js";import{g as j,s as v,c as E}from"./styled-7846e708.js";import{g as F}from"./generateUtilityClasses-70c60a0e.js";import{a as g}from"./jsx-runtime-a3bcee63.js";import{k as M,c as D}from"./emotion-react.browser.esm-474fda6d.js";function K(r){return j("MuiCircularProgress",r)}F("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const W=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,S,b,$;const t=44,B=M(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),G=M(S||(S=l`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),L=r=>{const{classes:e,variant:s,color:o,disableShrink:m}=r,d={root:["root",s,`color${n(o)}`],svg:["svg"],circle:["circle",`circle${n(s)}`,m&&"circleDisableShrink"]};return E(d,K,e)},T=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${n(s.color)}`]]}})(({ownerState:r,theme:e})=>a({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&D(b||(b=l`
      animation: ${0} 1.4s linear infinite;
    `),B)),V=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),Z=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${n(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>a({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&D($||($=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),G)),q=U.forwardRef(function(e,s){const o=I({props:e,name:"MuiCircularProgress"}),{className:m,color:d="primary",disableShrink:_=!1,size:u=40,style:R,thickness:i=3.6,value:f=0,variant:k="indeterminate"}=o,w=N(o,W),c=a({},o,{color:d,disableShrink:_,size:u,thickness:i,value:f,variant:k}),p=L(c),h={},x={},y={};if(k==="determinate"){const C=2*Math.PI*((t-i)/2);h.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(f),h.strokeDashoffset=`${((100-f)/100*C).toFixed(3)}px`,x.transform="rotate(-90deg)"}return g(T,a({className:z(p.root,m),style:a({width:u,height:u},x,R),ownerState:c,ref:s,role:"progressbar"},y,w,{children:g(V,{className:p.svg,ownerState:c,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:g(Z,{className:p.circle,style:h,ownerState:c,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))}),er=q;export{er as M};
//# sourceMappingURL=CircularProgress-83597315.js.map
