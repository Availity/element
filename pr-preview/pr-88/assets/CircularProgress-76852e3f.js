import{r as _}from"./index-8db94870.js";import{a as N,g as U,s as h,c as I,b as j}from"./styled-838f2411.js";import{c,u as z}from"./useThemeProps-ac6a164c.js";import{j as g}from"./jsx-runtime-91a467a5.js";import{k as b,c as D}from"./emotion-react.browser.esm-63c9efdb.js";function E(r){return N("MuiCircularProgress",r)}U("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);let n=r=>r,x,P,S,$;const t=44,F=b(x||(x=n`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),K=b(P||(P=n`
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
`)),B=r=>{const{classes:e,variant:s,color:o,disableShrink:l}=r,m={root:["root",s,`color${c(o)}`],svg:["svg"],circle:["circle",`circle${c(s)}`,l&&"circleDisableShrink"]};return j(m,E,e)},G=h("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${c(s.color)}`]]}})(({ownerState:r,theme:e})=>({display:"inline-block",...r.variant==="determinate"&&{transition:e.transitions.create("transform")},...r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}}),({ownerState:r})=>r.variant==="indeterminate"&&D(S||(S=n`
      animation: ${0} 1.4s linear infinite;
    `),F)),T=h("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),V=h("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${c(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>({stroke:"currentColor",...r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},...r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&D($||($=n`
      animation: ${0} 1.4s ease-in-out infinite;
    `),K)),W=_.forwardRef(function(e,s){const o=z({props:e,name:"MuiCircularProgress"}),{className:l,color:m="primary",disableShrink:M=!1,size:d=40,style:R,thickness:a=3.6,value:u=0,variant:v="indeterminate",...w}=o,i={...o,color:m,disableShrink:M,size:d,thickness:a,value:u,variant:v},f=B(i),p={},k={},C={};if(v==="determinate"){const y=2*Math.PI*((t-a)/2);p.strokeDasharray=y.toFixed(3),C["aria-valuenow"]=Math.round(u),p.strokeDashoffset=`${((100-u)/100*y).toFixed(3)}px`,k.transform="rotate(-90deg)"}return g(G,{className:I(f.root,l),style:{width:d,height:d,...k,...R},ownerState:i,ref:s,role:"progressbar",...C,...w,children:g(T,{className:f.svg,ownerState:i,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:g(V,{className:f.circle,style:p,ownerState:i,cx:t,cy:t,r:(t-a)/2,fill:"none",strokeWidth:a})})})}),L=W;export{L as C};
//# sourceMappingURL=CircularProgress-76852e3f.js.map
