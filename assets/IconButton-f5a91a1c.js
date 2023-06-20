import{r as b}from"./index-8db94870.js";import{g as m,a as z,s as y,c as B,b as C}from"./styled-05cc2f2a.js";import{c as e,b as p,e as R}from"./useThemeProps-7db2adde.js";import{j as $}from"./jsx-runtime-91a467a5.js";import{B as I}from"./ButtonBase-dac0a791.js";function x(o){return z("MuiIconButton",o)}const h=m("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),M=h,k=o=>{const{classes:a,disabled:r,color:t,edge:s,size:i}=o,n={root:["root",r&&"disabled",t!=="default"&&`color${e(t)}`,s&&`edge${e(s)}`,`size${e(i)}`]};return C(n,x,a)},O=y(I,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.root,r.color!=="default"&&a[`color${e(r.color)}`],r.edge&&a[`edge${e(r.edge)}`],a[`size${e(r.size)}`]]}})(({theme:o,ownerState:a})=>({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest}),...!a.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:p(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},...a.edge==="start"&&{marginLeft:a.size==="small"?-3:-12},...a.edge==="end"&&{marginRight:a.size==="small"?-3:-12}}),({theme:o,ownerState:a})=>{var r;const t=(r=(o.vars||o).palette)==null?void 0:r[a.color];return{...a.color==="inherit"&&{color:"inherit"},...a.color!=="inherit"&&a.color!=="default"&&{color:t==null?void 0:t.main,...!a.disableRipple&&{"&:hover":{...t&&{backgroundColor:o.vars?`rgba(${t.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:p(t.main,o.palette.action.hoverOpacity)},"@media (hover: none)":{backgroundColor:"transparent"}}}},...a.size==="small"&&{padding:5,fontSize:o.typography.pxToRem(18)},...a.size==="large"&&{padding:12,fontSize:o.typography.pxToRem(28)},[`&.${M.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}}}),T=b.forwardRef(function(a,r){const t=R({props:a,name:"MuiIconButton"}),{edge:s=!1,children:i,className:n,color:u="default",disabled:l=!1,disableFocusRipple:c=!1,size:g="medium",...v}=t,d={...t,edge:s,color:u,disabled:l,disableFocusRipple:c,size:g},f=k(d);return $(O,{className:B(f.root,n),centerRipple:!0,focusRipple:!c,disabled:l,ref:r,ownerState:d,...v,children:i})}),P=T;export{P as M};
//# sourceMappingURL=IconButton-f5a91a1c.js.map
