import{f as t,_ as s,a as u,b as m}from"./createTheme-3fee607a.js";import{r as z}from"./index-570b25c1.js";import{c as R}from"./clsx-b831246b.js";import{g as y,s as B,c as C}from"./styled-523cb007.js";import{u as $}from"./useThemeProps-98dc6282.js";import{g as x}from"./generateUtilityClasses-b58f947a.js";import{a as I}from"./jsx-runtime-a3bcee63.js";import{B as h}from"./ButtonBase-44753119.js";function M(o){return y("MuiIconButton",o)}const k=x("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),_=k,O=["edge","children","className","color","disabled","disableFocusRipple","size"],T=o=>{const{classes:a,disabled:r,color:e,edge:i,size:n}=o,l={root:["root",r&&"disabled",e!=="default"&&`color${t(e)}`,i&&`edge${t(i)}`,`size${t(n)}`]};return C(l,M,a)},U=B(h,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.root,r.color!=="default"&&a[`color${t(r.color)}`],r.edge&&a[`edge${t(r.edge)}`],a[`size${t(r.size)}`]]}})(({theme:o,ownerState:a})=>s({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!a.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.edge==="start"&&{marginLeft:a.size==="small"?-3:-12},a.edge==="end"&&{marginRight:a.size==="small"?-3:-12}),({theme:o,ownerState:a})=>{var r;const e=(r=(o.vars||o).palette)==null?void 0:r[a.color];return s({},a.color==="inherit"&&{color:"inherit"},a.color!=="inherit"&&a.color!=="default"&&s({color:e==null?void 0:e.main},!a.disableRipple&&{"&:hover":s({},e&&{backgroundColor:o.vars?`rgba(${e.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:u(e.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),a.size==="small"&&{padding:5,fontSize:o.typography.pxToRem(18)},a.size==="large"&&{padding:12,fontSize:o.typography.pxToRem(28)},{[`&.${_.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}})}),E=z.forwardRef(function(a,r){const e=$({props:a,name:"MuiIconButton"}),{edge:i=!1,children:n,className:l,color:g="default",disabled:c=!1,disableFocusRipple:d=!1,size:f="medium"}=e,v=m(e,O),p=s({},e,{edge:i,color:g,disabled:c,disableFocusRipple:d,size:f}),b=T(p);return I(U,s({className:R(b.root,l),centerRipple:!0,focusRipple:!d,disabled:c,ref:r,ownerState:p},v,{children:n}))}),D=E;export{D as M};
//# sourceMappingURL=IconButton-3fd19b93.js.map