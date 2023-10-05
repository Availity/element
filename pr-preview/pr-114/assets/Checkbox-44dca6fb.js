import{r as x}from"./index-570b25c1.js";import{c as U}from"./clsx.m-fb33c42b.js";import{g as E,s as $,c as H,r as J}from"./styled-fc2b35f5.js";import{u as K}from"./utils-3d35716f.js";import{g as N}from"./generateUtilityClasses-8a827d83.js";import{a as Q,j as i}from"./jsx-runtime-390e5fc8.js";import{B as W}from"./ButtonBase-654f8a82.js";import{u as X}from"./useControlled-9b1271e0.js";import{c as P,a as Y}from"./createTheme-4dc6b23f.js";import{c as w}from"./createSvgIcon-fa525e7b.js";import{u as Z}from"./useThemeProps-5f33a28c.js";function ee(e){return E("PrivateSwitchBase",e)}N("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const oe=e=>{const{classes:o,checked:t,disabled:a,edge:c}=e,s={root:["root",t&&"checked",a&&"disabled",c&&`edge${P(c)}`],input:["input"]};return H(s,ee,o)},te=$(W)(({ownerState:e})=>({padding:9,borderRadius:"50%",...e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},...e.edge==="end"&&{marginRight:e.size==="small"?-3:-12}})),ce=$("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ne=x.forwardRef(function(o,t){const{autoFocus:a,checked:c,checkedIcon:s,className:g,defaultChecked:f,disabled:B,disableFocusRipple:l=!1,edge:k=!1,icon:v,id:d,inputProps:I,inputRef:y,name:C,onBlur:u,onChange:p,onFocus:h,readOnly:L,required:V=!1,tabIndex:j,type:b,value:F,...q}=o,[R,_]=X({controlled:c,default:!!f,name:"SwitchBase",state:"checked"}),r=K(),T=n=>{h&&h(n),r&&r.onFocus&&r.onFocus(n)},A=n=>{u&&u(n),r&&r.onBlur&&r.onBlur(n)},D=n=>{if(n.nativeEvent.defaultPrevented)return;const O=n.target.checked;_(O),p&&p(n,O)};let m=B;r&&typeof m>"u"&&(m=r.disabled);const G=b==="checkbox"||b==="radio",S={...o,checked:R,disabled:m,disableFocusRipple:l,edge:k},M=oe(S);return Q(te,{component:"span",className:U(M.root,g),centerRipple:!0,focusRipple:!l,disabled:m,tabIndex:null,role:void 0,onFocus:T,onBlur:A,ownerState:S,ref:t,...q,children:[i(ce,{autoFocus:a,checked:c,defaultChecked:f,className:M.input,disabled:m,id:G?d:void 0,name:C,onChange:D,readOnly:L,ref:y,required:V,ownerState:S,tabIndex:j,type:b,...b==="checkbox"&&F===void 0?{}:{value:F},...I}),R?s:v]})}),ae=ne,se=w(i("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),re=w(i("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),ie=w(i("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function le(e){return E("MuiCheckbox",e)}const de=N("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),z=de,ue=e=>{const{classes:o,indeterminate:t,color:a}=e,c={root:["root",t&&"indeterminate",`color${P(a)}`]},s=H(c,le,o);return{...o,...s}},pe=$(ae,{shouldForwardProp:e=>J(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,t.color!=="default"&&o[`color${P(t.color)}`]]}})(({theme:e,ownerState:o})=>({color:(e.vars||e).palette.text.secondary,...!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Y(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},...o.color!=="default"&&{[`&.${z.checked}, &.${z.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${z.disabled}`]:{color:(e.vars||e).palette.action.disabled}}})),he=i(re,{}),me=i(se,{}),fe=i(ie,{}),ke=x.forwardRef(function(o,t){var a,c;const s=Z({props:o,name:"MuiCheckbox"}),{checkedIcon:g=he,color:f="primary",icon:B=me,indeterminate:l=!1,indeterminateIcon:k=fe,inputProps:v,size:d="medium",className:I,...y}=s,C=l?k:B,u=l?k:g,p={...s,color:f,indeterminate:l,size:d},h=ue(p);return i(pe,{type:"checkbox",inputProps:{"data-indeterminate":l,...v},icon:x.cloneElement(C,{fontSize:(a=C.props.fontSize)!=null?a:d}),checkedIcon:x.cloneElement(u,{fontSize:(c=u.props.fontSize)!=null?c:d}),ownerState:p,ref:t,className:U(h.root,I),...y,classes:h})}),Pe=ke;export{Pe as C,ae as S};
//# sourceMappingURL=Checkbox-44dca6fb.js.map
