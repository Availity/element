import{r as f}from"./index-BgYLq7fD.js";import{g as E,c as C}from"./generateUtilityClass-BeVSWKCg.js";import{u as I,F as P}from"./useFormControl-t_-EwZHM.js";import{m as A}from"./memoTheme-CpoNRPWX.js";import{g as j}from"./generateUtilityClasses-whvyra8-.js";import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{u as L}from"./DefaultPropsProvider-CWkNlXkE.js";import{s as S,c as z}from"./styled-CKuRQFSa.js";import{T as R}from"./Typography-COSof5sR.js";import{f as d}from"./identifier-CudAVvBZ.js";function w(t){return E("MuiInputAdornment",t)}const h=j("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var g;const F=(t,o)=>{const{ownerState:e}=t;return[o.root,o[`position${d(e.position)}`],e.disablePointerEvents===!0&&o.disablePointerEvents,o[e.variant]]},T=t=>{const{classes:o,disablePointerEvents:e,hiddenLabel:i,position:n,size:a,variant:l}=t,p={root:["root",e&&"disablePointerEvents",n&&`position${d(n)}`,l,i&&"hiddenLabel",a&&`size${d(a)}`]};return z(p,w,o)},$=S("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:F})(A(({theme:t})=>({display:"flex",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active,variants:[{props:{variant:"filled"},style:{[`&.${h.positionStart}&:not(.${h.hiddenLabel})`]:{marginTop:16}}},{props:{position:"start"},style:{marginRight:8}},{props:{position:"end"},style:{marginLeft:8}},{props:{disablePointerEvents:!0},style:{pointerEvents:"none"}}]}))),J=f.forwardRef(function(o,e){const i=L({props:o,name:"MuiInputAdornment"}),{children:n,className:a,component:l="div",disablePointerEvents:p=!1,disableTypography:b=!1,position:c,variant:u,...x}=i,s=I()||{};let m=u;u&&s.variant,s&&!m&&(m=s.variant);const v={...i,hiddenLabel:s.hiddenLabel,size:s.size,disablePointerEvents:p,position:c,variant:m},y=T(v);return r.jsx(P.Provider,{value:null,children:r.jsx($,{as:l,ownerState:v,className:C(y.root,a),ref:e,...x,children:typeof n=="string"&&!b?r.jsx(R,{color:"textSecondary",children:n}):r.jsxs(f.Fragment,{children:[c==="start"?g||(g=r.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):null,n]})})})});export{J as I};
