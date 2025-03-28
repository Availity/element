import{r as q}from"./index-DcWiA9TO.js";import{g as G,c as O}from"./generateUtilityClass-CVWqFxsA.js";import{u as J}from"./index-nos-0K8U.js";import{g as K}from"./generateUtilityClasses-BGOCnVj7.js";import{c as I}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{c as x}from"./createSvgIcon-TketyoFF.js";import{j as r}from"./jsx-runtime-CcL-W3nW.js";import{u as b}from"./useSlot-DnkSxE3X.js";import{m as C}from"./memoTheme-D-rVhYRp.js";import{u as Q}from"./DefaultPropsProvider-_cNB_dWy.js";import{s as z,c as X}from"./styled-CF1hcdwO.js";import{f as p,a as l}from"./identifier-Dtqimryx.js";import{B as Y}from"./ButtonBase-DbVRbsLs.js";function Z(a){return G("MuiPaginationItem",a)}const s=K("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon","colorPrimary","colorSecondary"]),_=x(r.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),h=x(r.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),aa=x(r.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),ta=x(r.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),R=(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant],t[`size${p(o.size)}`],o.variant==="text"&&t[`text${p(o.color)}`],o.variant==="outlined"&&t[`outlined${p(o.color)}`],o.shape==="rounded"&&t.rounded,o.type==="page"&&t.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&t.ellipsis,(o.type==="previous"||o.type==="next")&&t.previousNext,(o.type==="first"||o.type==="last")&&t.firstLast]},oa=a=>{const{classes:t,color:o,disabled:d,selected:v,size:y,shape:f,type:e,variant:c}=a,$={root:["root",`size${p(y)}`,c,f,o!=="standard"&&`color${p(o)}`,o!=="standard"&&`${c}${p(o)}`,d&&"disabled",v&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[e]],icon:["icon"]};return X($,Z,t)},sa=z("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:R})(C(({theme:a})=>({...a.typography.body2,borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,height:"auto",[`&.${s.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},variants:[{props:{size:"small"},style:{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"}},{props:{size:"large"},style:{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)}}]}))),ia=z(Y,{name:"MuiPaginationItem",slot:"Root",overridesResolver:R})(C(({theme:a})=>({...a.typography.body2,borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,[`&.${s.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${s.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},transition:a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short}),"&:hover":{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${s.selected}`]:{backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:l(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}},[`&.${s.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:l(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},[`&.${s.disabled}`]:{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}},variants:[{props:{size:"small"},style:{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"}},{props:{size:"large"},style:{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)}},{props:{shape:"rounded"},style:{borderRadius:(a.vars||a).shape.borderRadius}},{props:{variant:"outlined"},style:{border:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${s.selected}`]:{[`&.${s.disabled}`]:{borderColor:(a.vars||a).palette.action.disabledBackground,color:(a.vars||a).palette.action.disabled}}}},{props:{variant:"text"},style:{[`&.${s.selected}`]:{[`&.${s.disabled}`]:{color:(a.vars||a).palette.action.disabled}}}},...Object.entries(a.palette).filter(I(["dark","contrastText"])).map(([t])=>({props:{variant:"text",color:t},style:{[`&.${s.selected}`]:{color:(a.vars||a).palette[t].contrastText,backgroundColor:(a.vars||a).palette[t].main,"&:hover":{backgroundColor:(a.vars||a).palette[t].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[t].main}},[`&.${s.focusVisible}`]:{backgroundColor:(a.vars||a).palette[t].dark},[`&.${s.disabled}`]:{color:(a.vars||a).palette.action.disabled}}}})),...Object.entries(a.palette).filter(I(["light"])).map(([t])=>({props:{variant:"outlined",color:t},style:{[`&.${s.selected}`]:{color:(a.vars||a).palette[t].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[t].mainChannel} / 0.5)`:l(a.palette[t].main,.5)}`,backgroundColor:a.vars?`rgba(${a.vars.palette[t].mainChannel} / ${a.vars.palette.action.activatedOpacity})`:l(a.palette[t].main,a.palette.action.activatedOpacity),"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:l(a.palette[t].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${s.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[t].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:l(a.palette[t].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity)}}}}))]}))),ra=z("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(a,t)=>t.icon})(C(({theme:a})=>({fontSize:a.typography.pxToRem(20),margin:"0 -8px",variants:[{props:{size:"small"},style:{fontSize:a.typography.pxToRem(18)}},{props:{size:"large"},style:{fontSize:a.typography.pxToRem(22)}}]}))),$a=q.forwardRef(function(t,o){const d=Q({props:t,name:"MuiPaginationItem"}),{className:v,color:y="standard",component:f,components:e={},disabled:c=!1,page:$,selected:m=!1,shape:L="circular",size:N="medium",slots:g={},slotProps:T={},type:n="page",variant:M="text",...j}=d,i={...d,color:y,disabled:c,selected:m,shape:L,size:N,type:n,variant:M},B=J(),P=oa(i),u={slots:{previous:g.previous??e.previous,next:g.next??e.next,first:g.first??e.first,last:g.last??e.last},slotProps:T},[F,V]=b("previous",{elementType:aa,externalForwardedProps:u,ownerState:i}),[W,w]=b("next",{elementType:ta,externalForwardedProps:u,ownerState:i}),[U,A]=b("first",{elementType:_,externalForwardedProps:u,ownerState:i}),[D,E]=b("last",{elementType:h,externalForwardedProps:u,ownerState:i}),S=B?{previous:"next",next:"previous",first:"last",last:"first"}[n]:n,k={previous:F,next:W,first:U,last:D}[S],H={previous:V,next:w,first:A,last:E}[S];return n==="start-ellipsis"||n==="end-ellipsis"?r.jsx(sa,{ref:o,ownerState:i,className:O(P.root,v),children:"…"}):r.jsxs(ia,{ref:o,ownerState:i,component:f,disabled:c,className:O(P.root,v),...j,children:[n==="page"&&$,k?r.jsx(ra,{...H,className:P.icon,as:k}):null]})});export{_ as F,h as L,$a as P};
