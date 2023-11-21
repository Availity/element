import{j as s,a as p,F as f}from"./jsx-runtime-390e5fc8.js";import{f as C,N as P}from"./index-74bc51e6.js";import{r as F}from"./index-570b25c1.js";import{c as z}from"./clsx.m-fb33c42b.js";import{u as U}from"./useThemeProps-bb804320.js";import{g as j}from"./generateUtilityClasses-145aac4e.js";import{g as A,s as $,c as D}from"./styled-d0245a8f.js";import{u as H}from"./useTheme-108b79b5.js";import{F as N,L as k}from"./LastPage-379dc1a2.js";import{c as V}from"./createSvgIcon-ab70d8ae.js";import{B as G}from"./ButtonBase-ae02db0a.js";import{a as n,c as d}from"./createTheme-4dc6b23f.js";function J(a){return A("MuiPaginationItem",a)}const K=j("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),o=K,O=V(s("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),R=V(s("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),L=(a,e)=>{const{ownerState:t}=a;return[e.root,e[t.variant],e[`size${d(t.size)}`],t.variant==="text"&&e[`text${d(t.color)}`],t.variant==="outlined"&&e[`outlined${d(t.color)}`],t.shape==="rounded"&&e.rounded,t.type==="page"&&e.page,(t.type==="start-ellipsis"||t.type==="end-ellipsis")&&e.ellipsis,(t.type==="previous"||t.type==="next")&&e.previousNext,(t.type==="first"||t.type==="last")&&e.firstLast]},Q=a=>{const{classes:e,color:t,disabled:u,selected:g,size:y,shape:b,type:i,variant:l}=a,m={root:["root",`size${d(y)}`,l,b,t!=="standard"&&`${l}${d(t)}`,u&&"disabled",g&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[i]],icon:["icon"]};return D(m,J,e)},S=$("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:L})(({theme:a,ownerState:e})=>({...a.typography.body2,borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,height:"auto",[`&.${o.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},...e.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},...e.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)}})),X=$(G,{name:"MuiPaginationItem",slot:"Root",overridesResolver:L})(({theme:a,ownerState:e})=>({...a.typography.body2,borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,[`&.${o.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${o.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},transition:a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short}),"&:hover":{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${o.selected}`]:{backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selected} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:n(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}},[`&.${o.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selected} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:n(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},[`&.${o.disabled}`]:{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}},...e.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},...e.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)},...e.shape==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius}}),({theme:a,ownerState:e})=>({...e.variant==="text"&&{[`&.${o.selected}`]:{...e.color!=="standard"&&{color:(a.vars||a).palette[e.color].contrastText,backgroundColor:(a.vars||a).palette[e.color].main,"&:hover":{backgroundColor:(a.vars||a).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[e.color].main}},[`&.${o.focusVisible}`]:{backgroundColor:(a.vars||a).palette[e.color].dark}},[`&.${o.disabled}`]:{color:(a.vars||a).palette.action.disabled}}},...e.variant==="outlined"&&{border:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${o.selected}`]:{...e.color!=="standard"&&{color:(a.vars||a).palette[e.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[e.color].mainChannel} / 0.5)`:n(a.palette[e.color].main,.5)}`,backgroundColor:a.vars?`rgba(${a.vars.palette[e.color].mainChannel} / ${a.vars.palette.action.activatedOpacity})`:n(a.palette[e.color].main,a.palette.action.activatedOpacity),"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[e.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:n(a.palette[e.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${o.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[e.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:n(a.palette[e.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity)}},[`&.${o.disabled}`]:{borderColor:(a.vars||a).palette.action.disabledBackground,color:(a.vars||a).palette.action.disabled}}}})),Y=$("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(a,e)=>e.icon})(({theme:a,ownerState:e})=>({fontSize:a.typography.pxToRem(20),margin:"0 -8px",...e.size==="small"&&{fontSize:a.typography.pxToRem(18)},...e.size==="large"&&{fontSize:a.typography.pxToRem(22)}})),Z=F.forwardRef(function(e,t){const u=U({props:e,name:"MuiPaginationItem"}),{className:g,color:y="standard",component:b,components:i={},disabled:l=!1,page:m,selected:M=!1,shape:q="circular",size:_="medium",slots:r={},type:c="page",variant:B="text",...E}=u,v={...u,color:y,disabled:l,selected:M,shape:q,size:_,type:c,variant:B},W=H(),x=Q(v),I=(W.direction==="rtl"?{previous:r.next||i.next||R,next:r.previous||i.previous||O,last:r.first||i.first||N,first:r.last||i.last||k}:{previous:r.previous||i.previous||O,next:r.next||i.next||R,first:r.first||i.first||N,last:r.last||i.last||k})[c];return c==="start-ellipsis"||c==="end-ellipsis"?s(S,{ref:t,ownerState:v,className:z(x.root,g),children:"…"}):p(X,{ref:t,ownerState:v,component:b,disabled:l,className:z(x.root,g),...E,children:[c==="page"&&m,I?s(Y,{as:I,ownerState:v,className:x.icon}):null]})}),h=Z,w={first:()=>p(f,{children:[s(C,{sx:{mr:".2rem"}})," First"]}),previous:()=>p(f,{children:[s(C,{sx:{mr:".2rem"}})," Prev"]}),next:()=>p(f,{children:["Next ",s(P,{sx:{ml:".2rem"}})]}),last:()=>p(f,{children:["Last ",s(P,{sx:{ml:".2rem"}})]})},T=a=>s(h,{slots:w,...a});try{T.displayName="PaginationItem",T.__docgenInfo={description:"",displayName:"PaginationItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<PaginationItemClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},type:{defaultValue:{value:"'page'"},description:"The type of pagination item.",name:"type",required:!1,type:{name:'"page" | "first" | "last" | "next" | "previous" | "start-ellipsis" | "end-ellipsis"'}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},page:{defaultValue:null,description:"The current page number.",name:"page",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"'text'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"text" | "outlined"'}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.\n\nThis prop is an alias for the `components` prop, which will be deprecated in the future.",name:"slots",required:!1,type:{name:"{ first?: ElementType<any>; last?: ElementType<any>; next?: ElementType<any>; previous?: ElementType<any>; }"}},selected:{defaultValue:{value:"false"},description:"If `true` the pagination item is selected.",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}export{h as M,T as P};
//# sourceMappingURL=PaginationItem-7ba3741c.js.map