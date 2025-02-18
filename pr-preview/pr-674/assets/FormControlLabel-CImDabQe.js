import{r as P}from"./index-DcWiA9TO.js";import{g as E,c as x}from"./generateUtilityClass-DELP8s2G.js";import{m as v}from"./memoTheme-CIpOTVoB.js";import{g as U}from"./generateUtilityClasses-duJ5YrlI.js";import{f as A}from"./formControlState-Dq1zat_P.js";import{u as z}from"./useSlot-CaH4cQiJ.js";import{j as c}from"./jsx-runtime-CcL-W3nW.js";import{u as B}from"./DefaultPropsProvider-LCKMq1Iv.js";import{u as H}from"./useFormControl-68oiojFJ.js";import{T as y}from"./Typography-Dw3TlP36.js";import{s as L,c as I}from"./styled-wZqJTO_n.js";import{f as F}from"./identifier-CenlGZaM.js";function W(e){return E("MuiFormControlLabel",e)}const l=U("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),G=e=>{const{classes:r,disabled:t,labelPlacement:o,error:d,required:b}=e,u={root:["root",t&&"disabled",`labelPlacement${F(o)}`,d&&"error",b&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",d&&"error"]};return I(u,W,r)},J=L("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[{[`& .${l.label}`]:r.label},r.root,r[`labelPlacement${F(t.labelPlacement)}`]]}})(v(({theme:e})=>({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${l.disabled}`]:{cursor:"default"},[`& .${l.label}`]:{[`&.${l.disabled}`]:{color:(e.vars||e).palette.text.disabled}},variants:[{props:{labelPlacement:"start"},style:{flexDirection:"row-reverse",marginRight:-11}},{props:{labelPlacement:"top"},style:{flexDirection:"column-reverse"}},{props:{labelPlacement:"bottom"},style:{flexDirection:"column"}},{props:({labelPlacement:r})=>r==="start"||r==="top"||r==="bottom",style:{marginLeft:16}}]}))),K=L("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,r)=>r.asterisk})(v(({theme:e})=>({[`&.${l.error}`]:{color:(e.vars||e).palette.error.main}}))),me=P.forwardRef(function(r,t){const o=B({props:r,name:"MuiFormControlLabel"}),{checked:d,className:b,componentsProps:u={},control:a,disabled:R,disableTypography:T,inputRef:O,label:k,labelPlacement:q="end",name:Q,onChange:V,required:$,slots:j={},slotProps:w={},value:X,...M}=o,n=H(),g=R??a.props.disabled??(n==null?void 0:n.disabled),f=$??a.props.required,h={disabled:g,required:f};["checked","name","onChange","value","inputRef"].forEach(p=>{typeof a.props[p]>"u"&&typeof o[p]<"u"&&(h[p]=o[p])});const N=A({props:o,muiFormControl:n,states:["error"]}),i={...o,disabled:g,labelPlacement:q,required:f,error:N.error},C=G(i),S={slots:j,slotProps:{...u,...w}},[D,m]=z("typography",{elementType:y,externalForwardedProps:S,ownerState:i});let s=k;return s!=null&&s.type!==y&&!T&&(s=c.jsx(D,{component:"span",...m,className:x(C.label,m==null?void 0:m.className),children:s})),c.jsxs(J,{className:x(C.root,b),ownerState:i,ref:t,...M,children:[P.cloneElement(a,h),f?c.jsxs("div",{children:[s,c.jsxs(K,{ownerState:i,"aria-hidden":!0,className:C.asterisk,children:[" ","*"]})]}):s]})});export{me as F};
