import{b as a,e as U,f as I,c as K}from"./createTheme-b02e766d.js";import{r as B}from"./index-570b25c1.js";import{c as _}from"./clsx-43049957.js";import{g as E,s as F,a as H,r as Q}from"./styled-69a32198.js";import{u as X}from"./utils-3d35716f.js";import{g as L}from"./generateUtilityClasses-b06d554b.js";import{a as Y,j as l}from"./jsx-runtime-390e5fc8.js";import{B as Z}from"./ButtonBase-78eecb53.js";import{u as ee}from"./useControlled-9b1271e0.js";import{c as R}from"./createSvgIcon-5dca4d92.js";import{u as oe}from"./useThemeProps-ac7867ed.js";function te(e){return E("PrivateSwitchBase",e)}L("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const ce=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ne=e=>{const{classes:o,checked:t,disabled:r,edge:c}=e,n={root:["root",t&&"checked",r&&"disabled",c&&`edge${I(c)}`],input:["input"]};return H(n,te,o)},se=F(Z)(({ownerState:e})=>a({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ae=F("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),re=B.forwardRef(function(o,t){const{autoFocus:r,checked:c,checkedIcon:n,className:u,defaultChecked:C,disabled:v,disableFocusRipple:d=!1,edge:b=!1,icon:y,id:p,inputProps:z,inputRef:S,name:x,onBlur:h,onChange:m,onFocus:f,readOnly:j,required:V=!1,tabIndex:q,type:g,value:w}=o,T=U(o,ce),[M,W]=ee({controlled:c,default:!!C,name:"SwitchBase",state:"checked"}),i=X(),A=s=>{f&&f(s),i&&i.onFocus&&i.onFocus(s)},D=s=>{h&&h(s),i&&i.onBlur&&i.onBlur(s)},G=s=>{if(s.nativeEvent.defaultPrevented)return;const O=s.target.checked;W(O),m&&m(s,O)};let k=v;i&&typeof k>"u"&&(k=i.disabled);const J=g==="checkbox"||g==="radio",P=a({},o,{checked:M,disabled:k,disableFocusRipple:d,edge:b}),N=ne(P);return Y(se,a({component:"span",className:_(N.root,u),centerRipple:!0,focusRipple:!d,disabled:k,tabIndex:null,role:void 0,onFocus:A,onBlur:D,ownerState:P,ref:t},T,{children:[l(ae,a({autoFocus:r,checked:c,defaultChecked:C,className:N.input,disabled:k,id:J?p:void 0,name:x,onChange:G,readOnly:j,ref:S,required:V,ownerState:P,tabIndex:q,type:g},g==="checkbox"&&w===void 0?{}:{value:w},z)),M?n:y]}))}),ie=re,le=R(l("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),de=R(l("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),ue=R(l("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function pe(e){return E("MuiCheckbox",e)}const he=L("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),$=he,me=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],fe=e=>{const{classes:o,indeterminate:t,color:r,size:c}=e,n={root:["root",t&&"indeterminate",`color${I(r)}`,`size${I(c)}`]},u=H(n,pe,o);return a({},o,u)},ke=F(ie,{shouldForwardProp:e=>Q(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,t.color!=="default"&&o[`color${I(t.color)}`]]}})(({theme:e,ownerState:o})=>a({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:K(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${$.checked}, &.${$.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${$.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),Ce=l(de,{}),be=l(le,{}),xe=l(ue,{}),ge=B.forwardRef(function(o,t){var r,c;const n=oe({props:o,name:"MuiCheckbox"}),{checkedIcon:u=Ce,color:C="primary",icon:v=be,indeterminate:d=!1,indeterminateIcon:b=xe,inputProps:y,size:p="medium",className:z}=n,S=U(n,me),x=d?b:v,h=d?b:u,m=a({},n,{color:C,indeterminate:d,size:p}),f=fe(m);return l(ke,a({type:"checkbox",inputProps:a({"data-indeterminate":d},y),icon:B.cloneElement(x,{fontSize:(r=x.props.fontSize)!=null?r:p}),checkedIcon:B.cloneElement(h,{fontSize:(c=h.props.fontSize)!=null?c:p}),ownerState:m,ref:t,className:_(f.root,z)},S,{classes:f}))}),Me=ge;export{Me as C,ie as S};
//# sourceMappingURL=Checkbox-91df2012.js.map