import{r as S}from"./index-DcWiA9TO.js";import{g as j,c as M}from"./generateUtilityClass-DELP8s2G.js";import{m as y}from"./memoTheme-CIpOTVoB.js";import{c as I}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{g as O}from"./generateUtilityClasses-duJ5YrlI.js";import{j as n}from"./jsx-runtime-CcL-W3nW.js";import{u as P}from"./DefaultPropsProvider-LCKMq1Iv.js";import{u as L}from"./useId-DszduLV4.js";import{s as z,c as W}from"./styled-wZqJTO_n.js";import{f as r,a as b}from"./identifier-CenlGZaM.js";import{B as h}from"./ButtonBase-Ctwr4_Dd.js";import{C as k}from"./CircularProgress-D2topXWR.js";function E(o){return j("MuiIconButton",o)}const B=O("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge","loading","loadingIndicator","loadingWrapper"]),N=o=>{const{classes:a,disabled:t,color:e,edge:s,size:l,loading:c}=o,p={root:["root",c&&"loading",t&&"disabled",e!=="default"&&`color${r(e)}`,s&&`edge${r(s)}`,`size${r(l)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]};return W(p,E,a)},T=z(h,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:t}=o;return[a.root,t.loading&&a.loading,t.color!=="default"&&a[`color${r(t.color)}`],t.edge&&a[`edge${r(t.edge)}`],a[`size${r(t.size)}`]]}})(y(({theme:o})=>({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest}),variants:[{props:a=>!a.disableRipple,style:{"--IconButton-hoverBg":o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:b(o.palette.action.active,o.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),y(({theme:o})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(o.palette).filter(I()).map(([a])=>({props:{color:a},style:{color:(o.vars||o).palette[a].main}})),...Object.entries(o.palette).filter(I()).map(([a])=>({props:{color:a},style:{"--IconButton-hoverBg":o.vars?`rgba(${(o.vars||o).palette[a].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:b((o.vars||o).palette[a].main,o.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:o.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:o.typography.pxToRem(28)}}],[`&.${B.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled},[`&.${B.loading}`]:{color:"transparent"}}))),U=z("span",{name:"MuiIconButton",slot:"LoadingIndicator",overridesResolver:(o,a)=>a.loadingIndicator})(({theme:o})=>({display:"none",position:"absolute",visibility:"visible",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:(o.vars||o).palette.action.disabled,variants:[{props:{loading:!0},style:{display:"flex"}}]})),Y=S.forwardRef(function(a,t){const e=P({props:a,name:"MuiIconButton"}),{edge:s=!1,children:l,className:c,color:p="default",disabled:u=!1,disableFocusRipple:f=!1,size:R="medium",id:x,loading:i=null,loadingIndicator:C,...$}=e,m=L(x),v=C??n.jsx(k,{"aria-labelledby":m,color:"inherit",size:16}),d={...e,edge:s,color:p,disabled:u,disableFocusRipple:f,loading:i,loadingIndicator:v,size:R},g=N(d);return n.jsxs(T,{id:m,className:M(g.root,c),centerRipple:!0,focusRipple:!f,disabled:u||i,ref:t,...$,ownerState:d,children:[typeof i=="boolean"&&n.jsx("span",{className:g.loadingWrapper,style:{display:"contents"},children:n.jsx(U,{className:g.loadingIndicator,ownerState:d,children:i&&v})}),l]})});export{Y as I};
