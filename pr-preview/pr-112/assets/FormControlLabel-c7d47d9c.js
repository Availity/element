import{r as y}from"./index-570b25c1.js";import{c as L}from"./clsx.m-5a18bdae.js";import{g as U,s as x,c as j}from"./styled-34470687.js";import{u as A}from"./useThemeProps-4eed9f55.js";import{g as D}from"./generateUtilityClasses-379cd6e3.js";import{u as E,f as _}from"./utils-3d35716f.js";import{j as z,a as v}from"./jsx-runtime-390e5fc8.js";import{M as F}from"./Typography-b4b82de0.js";import{c as M}from"./createTheme-cf9cd31a.js";function B(e){return U("MuiFormControlLabel",e)}const H=D("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),s=H,I=e=>{const{classes:r,disabled:l,labelPlacement:n,error:t,required:o}=e,f={root:["root",l&&"disabled",`labelPlacement${M(n)}`,t&&"error",o&&"required"],label:["label",l&&"disabled"],asterisk:["asterisk",t&&"error"]};return j(f,B,r)},W=x("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:l}=e;return[{[`& .${s.label}`]:r.label},r.root,r[`labelPlacement${M(l.labelPlacement)}`]]}})(({theme:e,ownerState:r})=>({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${s.disabled}`]:{cursor:"default"},...r.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},...r.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},...r.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},[`& .${s.label}`]:{[`&.${s.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),G=x("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,r)=>r.asterisk})(({theme:e})=>({[`&.${s.error}`]:{color:(e.vars||e).palette.error.main}})),J=y.forwardRef(function(r,l){var n,t;const o=A({props:r,name:"MuiFormControlLabel"}),{checked:f,className:R,componentsProps:$={},control:i,disabled:C,disableTypography:k,inputRef:K,label:q,labelPlacement:N="end",name:O,onChange:Q,required:g,slotProps:S={},value:V,...T}=o,m=E(),P=(n=C??i.props.disabled)!=null?n:m==null?void 0:m.disabled,p=g??i.props.required,h={disabled:P,required:p};["checked","name","onChange","value","inputRef"].forEach(c=>{typeof i.props[c]>"u"&&typeof o[c]<"u"&&(h[c]=o[c])});const w=_({props:o,muiFormControl:m,states:["error"]}),d={...o,disabled:P,labelPlacement:N,required:p,error:w.error},b=I(d),u=(t=S.typography)!=null?t:$.typography;let a=q;return a!=null&&a.type!==F&&!k&&(a=z(F,{component:"span",...u,className:L(b.label,u==null?void 0:u.className),children:a})),v(W,{className:L(b.root,R),ownerState:d,ref:l,...T,children:[y.cloneElement(i,h),a,p&&v(G,{ownerState:d,"aria-hidden":!0,className:b.asterisk,children:[" ","*"]})]})}),se=J;export{se as M};
//# sourceMappingURL=FormControlLabel-c7d47d9c.js.map
