import{r as R}from"./index-8db94870.js";import{b as E,g as D,s as h,c as W,a as S}from"./styled-bbc4db24.js";import{j as v,a as _}from"./jsx-runtime-91a467a5.js";import{B as F}from"./Button-c7fe7886.js";import{e as l,c as U}from"./useThemeProps-0aafcae6.js";import{k as z,c as N}from"./emotion-react.browser.esm-f47b4cc7.js";import{u as j}from"./useId-fd294ee9.js";function K(t){return E("MuiCircularProgress",t)}D("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);let C=t=>t,y,b,B,M;const c=44,G=z(y||(y=C`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),T=z(b||(b=C`
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
`)),V=t=>{const{classes:o,variant:i,color:r,disableShrink:s}=t,e={root:["root",i,`color${l(r)}`],svg:["svg"],circle:["circle",`circle${l(i)}`,s&&"circleDisableShrink"]};return S(e,K,o)},Z=h("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,o[i.variant],o[`color${l(i.color)}`]]}})(({ownerState:t,theme:o})=>({display:"inline-block",...t.variant==="determinate"&&{transition:o.transitions.create("transform")},...t.color!=="inherit"&&{color:(o.vars||o).palette[t.color].main}}),({ownerState:t})=>t.variant==="indeterminate"&&N(B||(B=C`
      animation: ${0} 1.4s linear infinite;
    `),G)),q=h("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,o)=>o.svg})({display:"block"}),A=h("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.circle,o[`circle${l(i.variant)}`],i.disableShrink&&o.circleDisableShrink]}})(({ownerState:t,theme:o})=>({stroke:"currentColor",...t.variant==="determinate"&&{transition:o.transitions.create("stroke-dashoffset")},...t.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}}),({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink&&N(M||(M=C`
      animation: ${0} 1.4s ease-in-out infinite;
    `),T)),H=R.forwardRef(function(o,i){const r=U({props:o,name:"MuiCircularProgress"}),{className:s,color:e="primary",disableShrink:$=!1,size:d=40,style:I,thickness:u=3.6,value:f=0,variant:P="indeterminate",...L}=r,g={...r,color:e,disableShrink:$,size:d,thickness:u,value:f,variant:P},n=V(g),m={},p={},k={};if(P==="determinate"){const x=2*Math.PI*((c-u)/2);m.strokeDasharray=x.toFixed(3),k["aria-valuenow"]=Math.round(f),m.strokeDashoffset=`${((100-f)/100*x).toFixed(3)}px`,p.transform="rotate(-90deg)"}return v(Z,{className:W(n.root,s),style:{width:d,height:d,...p,...I},ownerState:g,ref:i,role:"progressbar",...k,...L,children:v(q,{className:n.svg,ownerState:g,viewBox:`${c/2} ${c/2} ${c} ${c}`,children:v(A,{className:n.circle,style:m,ownerState:g,cx:c,cy:c,r:(c-u)/2,fill:"none",strokeWidth:u})})})}),J=H;function O(t){return E("MuiLoadingButton",t)}const Q=D("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),a=Q,X=t=>{const{loading:o,loadingPosition:i,classes:r}=t,s={root:["root",o&&"loading"],startIcon:[o&&`startIconLoading${l(i)}`],endIcon:[o&&`endIconLoading${l(i)}`],loadingIndicator:["loadingIndicator",o&&`loadingIndicator${l(i)}`]},e=S(s,O,r);return{...r,...e}},Y=t=>t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"&&t!=="classes",w=h(F,{shouldForwardProp:t=>Y(t)||t==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(t,o)=>[o.root,o.startIconLoadingStart&&{[`& .${a.startIconLoadingStart}`]:o.startIconLoadingStart},o.endIconLoadingEnd&&{[`& .${a.endIconLoadingEnd}`]:o.endIconLoadingEnd}]})(({ownerState:t,theme:o})=>({[`& .${a.startIconLoadingStart}, & .${a.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0},...t.loadingPosition==="center"&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${a.loading}`]:{color:"transparent"}},...t.loadingPosition==="start"&&t.fullWidth&&{[`& .${a.startIconLoadingStart}, & .${a.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},...t.loadingPosition==="end"&&t.fullWidth&&{[`& .${a.startIconLoadingStart}, & .${a.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}}})),oo=h("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.loadingIndicator,o[`loadingIndicator${l(i.loadingPosition)}`]]}})(({theme:t,ownerState:o})=>({position:"absolute",visibility:"visible",display:"flex",...o.loadingPosition==="start"&&(o.variant==="outlined"||o.variant==="contained")&&{left:o.size==="small"?10:14},...o.loadingPosition==="start"&&o.variant==="text"&&{left:6},...o.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled},...o.loadingPosition==="end"&&(o.variant==="outlined"||o.variant==="contained")&&{right:o.size==="small"?10:14},...o.loadingPosition==="end"&&o.variant==="text"&&{right:6},...o.loadingPosition==="start"&&o.fullWidth&&{position:"relative",left:-10},...o.loadingPosition==="end"&&o.fullWidth&&{position:"relative",right:-10}})),to=R.forwardRef(function(o,i){const r=U({props:o,name:"MuiLoadingButton"}),{children:s,disabled:e=!1,id:$,loading:d=!1,loadingIndicator:I,loadingPosition:u="center",variant:f="text",...P}=r,L=j($),g=I??v(J,{"aria-labelledby":L,color:"inherit",size:16}),n={...r,disabled:e,loading:d,loadingIndicator:g,loadingPosition:u,variant:f},m=X(n),p=d?v(oo,{className:m.loadingIndicator,ownerState:n,children:g}):null;return _(w,{disabled:e||d,id:L,ref:i,...P,variant:f,classes:m,ownerState:n,children:[n.loadingPosition==="end"?s:p,n.loadingPosition==="end"?p:s]})}),lo=to;export{J as C,lo as M};
//# sourceMappingURL=LoadingButton-33e357a1.js.map
