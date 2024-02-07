import{_ as m,b as A,f as c}from"./createTheme-3fee607a.js";import{r as h}from"./index-570b25c1.js";import{c as C}from"./clsx-b831246b.js";import{u as E,F as I}from"./utils-3d35716f.js";import{g as L,s as $,c as z}from"./styled-523cb007.js";import{g as M}from"./generateUtilityClasses-b58f947a.js";import{u as F}from"./useThemeProps-98dc6282.js";import{j as a,a as R}from"./jsx-runtime-390e5fc8.js";import{M as T}from"./Typography-cb5a2c80.js";function _(n){return L("MuiInputAdornment",n)}const j=M("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),b=j;var g;const N=["children","className","component","disablePointerEvents","disableTypography","position","variant"],S=(n,t)=>{const{ownerState:o}=n;return[t.root,t[`position${c(o.position)}`],o.disablePointerEvents===!0&&t.disablePointerEvents,t[o.variant]]},U=n=>{const{classes:t,disablePointerEvents:o,hiddenLabel:s,position:e,size:r,variant:l}=n,p={root:["root",o&&"disablePointerEvents",e&&`position${c(e)}`,l,s&&"hiddenLabel",r&&`size${c(r)}`]};return z(p,_,t)},w=$("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:S})(({theme:n,ownerState:t})=>m({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},t.variant==="filled"&&{[`&.${b.positionStart}&:not(.${b.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),B=h.forwardRef(function(t,o){const s=F({props:t,name:"MuiInputAdornment"}),{children:e,className:r,component:l="div",disablePointerEvents:p=!1,disableTypography:P=!1,position:u,variant:v}=s,x=A(s,N),i=E()||{};let d=v;v&&i.variant,i&&!d&&(d=i.variant);const f=m({},s,{hiddenLabel:i.hiddenLabel,size:i.size,disablePointerEvents:p,position:u,variant:d}),y=U(f);return a(I.Provider,{value:null,children:a(w,m({as:l,ownerState:f,className:C(y.root,r),ref:o},x,{children:typeof e=="string"&&!P?a(T,{color:"text.secondary",children:e}):R(h.Fragment,{children:[u==="start"?g||(g=a("span",{className:"notranslate",children:"​"})):null,e]})}))})}),Q=B;export{Q as I};
//# sourceMappingURL=InputAdornment-f8017836.js.map
