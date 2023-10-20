import{f as t,_ as s,a as u,b as m}from"./createTheme-e6b56ddb.js";import{r as z}from"./index-570b25c1.js";import{c as R}from"./clsx-8416b751.js";import{g as y,s as B,c as C}from"./styled-188025da.js";import{u as $}from"./useThemeProps-db7202c2.js";import{g as x}from"./generateUtilityClasses-f776b170.js";import{j as I}from"./jsx-runtime-390e5fc8.js";import{B as h}from"./ButtonBase-6040f690.js";function M(o){return y("MuiIconButton",o)}const k=x("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),_=k,O=["edge","children","className","color","disabled","disableFocusRipple","size"],T=o=>{const{classes:r,disabled:a,color:e,edge:i,size:n}=o,l={root:["root",a&&"disabled",e!=="default"&&`color${t(e)}`,i&&`edge${t(i)}`,`size${t(n)}`]};return C(l,M,r)},U=B(h,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:a}=o;return[r.root,a.color!=="default"&&r[`color${t(a.color)}`],a.edge&&r[`edge${t(a.edge)}`],r[`size${t(a.size)}`]]}})(({theme:o,ownerState:r})=>s({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!r.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},r.edge==="start"&&{marginLeft:r.size==="small"?-3:-12},r.edge==="end"&&{marginRight:r.size==="small"?-3:-12}),({theme:o,ownerState:r})=>{var a;const e=(a=(o.vars||o).palette)==null?void 0:a[r.color];return s({},r.color==="inherit"&&{color:"inherit"},r.color!=="inherit"&&r.color!=="default"&&s({color:e==null?void 0:e.main},!r.disableRipple&&{"&:hover":s({},e&&{backgroundColor:o.vars?`rgba(${e.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:u(e.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),r.size==="small"&&{padding:5,fontSize:o.typography.pxToRem(18)},r.size==="large"&&{padding:12,fontSize:o.typography.pxToRem(28)},{[`&.${_.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}})}),j=z.forwardRef(function(r,a){const e=$({props:r,name:"MuiIconButton"}),{edge:i=!1,children:n,className:l,color:g="default",disabled:c=!1,disableFocusRipple:d=!1,size:f="medium"}=e,v=m(e,O),p=s({},e,{edge:i,color:g,disabled:c,disableFocusRipple:d,size:f}),b=T(p);return I(U,s({className:R(b.root,l),centerRipple:!0,focusRipple:!d,disabled:c,ref:a,ownerState:p},v,{children:n}))}),D=j;export{D as M};
//# sourceMappingURL=IconButton-15cd5b0a.js.map
