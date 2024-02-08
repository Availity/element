import{f as M,_ as m,b as w}from"./createTheme-3fee607a.js";import{r as v}from"./index-570b25c1.js";import{c as x}from"./clsx-b831246b.js";import{g as j,s as R,c as U}from"./styled-523cb007.js";import{u as A}from"./useThemeProps-98dc6282.js";import{g as D}from"./generateUtilityClasses-b58f947a.js";import{u as E,f as I}from"./utils-3d35716f.js";import{j as W,a as C}from"./jsx-runtime-390e5fc8.js";import{M as F}from"./Typography-cb5a2c80.js";import{S as z}from"./Stack-ded40119.js";function B(e){return j("MuiFormControlLabel",e)}const H=D("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),s=H,G=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],J=e=>{const{classes:o,disabled:l,labelPlacement:n,error:a,required:r}=e,p={root:["root",l&&"disabled",`labelPlacement${M(n)}`,a&&"error",r&&"required"],label:["label",l&&"disabled"],asterisk:["asterisk",a&&"error"]};return U(p,B,o)},K=R("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:l}=e;return[{[`& .${s.label}`]:o.label},o.root,o[`labelPlacement${M(l.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>m({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${s.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${s.label}`]:{[`&.${s.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),O=R("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${s.error}`]:{color:(e.vars||e).palette.error.main}})),Q=v.forwardRef(function(o,l){var n,a;const r=A({props:o,name:"MuiFormControlLabel"}),{className:p,componentsProps:$={},control:i,disabled:P,disableTypography:k,label:q,labelPlacement:S="end",required:h,slotProps:N={}}=r,T=w(r,G),d=E(),y=(n=P??i.props.disabled)!=null?n:d==null?void 0:d.disabled,b=h??i.props.required,L={disabled:y,required:b};["checked","name","onChange","value","inputRef"].forEach(c=>{typeof i.props[c]>"u"&&typeof r[c]<"u"&&(L[c]=r[c])});const _=I({props:r,muiFormControl:d,states:["error"]}),u=m({},r,{disabled:y,labelPlacement:S,required:b,error:_.error}),f=J(u),g=(a=N.typography)!=null?a:$.typography;let t=q;return t!=null&&t.type!==F&&!k&&(t=W(F,m({component:"span"},g,{className:x(f.label,g==null?void 0:g.className),children:t}))),C(K,m({className:x(f.root,p),ownerState:u,ref:l},T,{children:[v.cloneElement(i,L),b?C(z,{direction:"row",alignItems:"center",children:[t,C(O,{ownerState:u,"aria-hidden":!0,className:f.asterisk,children:[" ","*"]})]}):t]}))}),se=Q;export{se as M};
//# sourceMappingURL=FormControlLabel-34fd3025.js.map