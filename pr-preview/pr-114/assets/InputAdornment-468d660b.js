import{r as f}from"./index-570b25c1.js";import{c as I}from"./clsx.m-fb33c42b.js";import{u as E,F as P}from"./utils-3d35716f.js";import{g as x,s as y,c as L}from"./styled-fc2b35f5.js";import{g as $}from"./generateUtilityClasses-8a827d83.js";import{u as z}from"./useThemeProps-5f33a28c.js";import{j as a,a as M}from"./jsx-runtime-390e5fc8.js";import{M as F}from"./Typography-bf8f4457.js";import{c as m}from"./createTheme-4dc6b23f.js";function R(n){return x("MuiInputAdornment",n)}const S=$("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),h=S;var g;const T=(n,t)=>{const{ownerState:o}=n;return[t.root,t[`position${m(o.position)}`],o.disablePointerEvents===!0&&t.disablePointerEvents,t[o.variant]]},U=n=>{const{classes:t,disablePointerEvents:o,hiddenLabel:i,position:e,size:r,variant:l}=n,p={root:["root",o&&"disablePointerEvents",e&&`position${m(e)}`,l,i&&"hiddenLabel",r&&`size${m(r)}`]};return L(p,R,t)},j=y("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:T})(({theme:n,ownerState:t})=>({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active,...t.variant==="filled"&&{[`&.${h.positionStart}&:not(.${h.hiddenLabel})`]:{marginTop:16}},...t.position==="start"&&{marginRight:8},...t.position==="end"&&{marginLeft:8},...t.disablePointerEvents===!0&&{pointerEvents:"none"}})),w=f.forwardRef(function(t,o){const i=z({props:t,name:"MuiInputAdornment"}),{children:e,className:r,component:l="div",disablePointerEvents:p=!1,disableTypography:b=!1,position:c,variant:u,...A}=i,s=E()||{};let d=u;u&&s.variant,s&&!d&&(d=s.variant);const v={...i,hiddenLabel:s.hiddenLabel,size:s.size,disablePointerEvents:p,position:c,variant:d},C=U(v);return a(P.Provider,{value:null,children:a(j,{as:l,ownerState:v,className:I(C.root,r),ref:o,...A,children:typeof e=="string"&&!b?a(F,{color:"text.secondary",children:e}):M(f.Fragment,{children:[c==="start"?g||(g=a("span",{className:"notranslate",children:"​"})):null,e]})})})}),K=w;export{K as I};
//# sourceMappingURL=InputAdornment-468d660b.js.map
