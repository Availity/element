import{j as s,a as u,F as y}from"./jsx-runtime-390e5fc8.js";import{l as P,N as z}from"./index-d2e63b55.js";import{_ as n,a as l,b as j,f as g}from"./createTheme-e6b56ddb.js";import{r as U}from"./index-570b25c1.js";import{c as N}from"./clsx-8416b751.js";import{u as A}from"./useThemeProps-285a8f6c.js";import{g as D}from"./generateUtilityClasses-2915a045.js";import{g as H,s as I,c as G}from"./styled-78cd751f.js";import{u as J}from"./useTheme-b3699c65.js";import{F as k,L as O}from"./LastPage-92c52e7e.js";import{c as L}from"./createSvgIcon-c7fbf131.js";import{B as K}from"./ButtonBase-6abe7f0b.js";function Q(a){return H("MuiPaginationItem",a)}const S=D("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),o=S,T=L(s("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),R=L(s("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),X=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],q=(a,e)=>{const{ownerState:t}=a;return[e.root,e[t.variant],e[`size${g(t.size)}`],t.variant==="text"&&e[`text${g(t.color)}`],t.variant==="outlined"&&e[`outlined${g(t.color)}`],t.shape==="rounded"&&e.rounded,t.type==="page"&&e.page,(t.type==="start-ellipsis"||t.type==="end-ellipsis")&&e.ellipsis,(t.type==="previous"||t.type==="next")&&e.previousNext,(t.type==="first"||t.type==="last")&&e.firstLast]},Y=a=>{const{classes:e,color:t,disabled:c,selected:v,size:m,shape:b,type:i,variant:p}=a,x={root:["root",`size${g(m)}`,p,b,t!=="standard"&&`${p}${g(t)}`,c&&"disabled",v&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[i]],icon:["icon"]};return G(x,Q,e)},Z=I("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:q})(({theme:a,ownerState:e})=>n({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,height:"auto",[`&.${o.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity}},e.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)})),h=I(K,{name:"MuiPaginationItem",slot:"Root",overridesResolver:q})(({theme:a,ownerState:e})=>n({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,[`&.${o.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${o.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},transition:a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short}),"&:hover":{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${o.selected}`]:{backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selected} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:l(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}},[`&.${o.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selected} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:l(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},[`&.${o.disabled}`]:{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}}},e.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)},e.shape==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius}),({theme:a,ownerState:e})=>n({},e.variant==="text"&&{[`&.${o.selected}`]:n({},e.color!=="standard"&&{color:(a.vars||a).palette[e.color].contrastText,backgroundColor:(a.vars||a).palette[e.color].main,"&:hover":{backgroundColor:(a.vars||a).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[e.color].main}},[`&.${o.focusVisible}`]:{backgroundColor:(a.vars||a).palette[e.color].dark}},{[`&.${o.disabled}`]:{color:(a.vars||a).palette.action.disabled}})},e.variant==="outlined"&&{border:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${o.selected}`]:n({},e.color!=="standard"&&{color:(a.vars||a).palette[e.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[e.color].mainChannel} / 0.5)`:l(a.palette[e.color].main,.5)}`,backgroundColor:a.vars?`rgba(${a.vars.palette[e.color].mainChannel} / ${a.vars.palette.action.activatedOpacity})`:l(a.palette[e.color].main,a.palette.action.activatedOpacity),"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[e.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:l(a.palette[e.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${o.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[e.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:l(a.palette[e.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity)}},{[`&.${o.disabled}`]:{borderColor:(a.vars||a).palette.action.disabledBackground,color:(a.vars||a).palette.action.disabled}})})),w=I("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(a,e)=>e.icon})(({theme:a,ownerState:e})=>n({fontSize:a.typography.pxToRem(20),margin:"0 -8px"},e.size==="small"&&{fontSize:a.typography.pxToRem(18)},e.size==="large"&&{fontSize:a.typography.pxToRem(22)})),aa=U.forwardRef(function(e,t){const c=A({props:e,name:"MuiPaginationItem"}),{className:v,color:m="standard",component:b,components:i={},disabled:p=!1,page:x,selected:M=!1,shape:_="circular",size:E="medium",slots:r={},type:d="page",variant:B="text"}=c,W=j(c,X),f=n({},c,{color:m,disabled:p,selected:M,shape:_,size:E,type:d,variant:B}),F=J(),$=Y(f),C=(F.direction==="rtl"?{previous:r.next||i.next||R,next:r.previous||i.previous||T,last:r.first||i.first||k,first:r.last||i.last||O}:{previous:r.previous||i.previous||T,next:r.next||i.next||R,first:r.first||i.first||k,last:r.last||i.last||O})[d];return d==="start-ellipsis"||d==="end-ellipsis"?s(Z,{ref:t,ownerState:f,className:N($.root,v),children:"…"}):u(h,n({ref:t,ownerState:f,component:b,disabled:p,className:N($.root,v)},W,{children:[d==="page"&&x,C?s(w,{as:C,ownerState:f,className:$.icon}):null]}))}),ea=aa,ta={first:()=>u(y,{children:[s(P,{sx:{mr:".2rem"}})," First"]}),previous:()=>u(y,{children:[s(P,{sx:{mr:".2rem"}})," Prev"]}),next:()=>u(y,{children:["Next ",s(z,{sx:{ml:".2rem"}})]}),last:()=>u(y,{children:["Last ",s(z,{sx:{ml:".2rem"}})]})},V=a=>s(ea,{slots:ta,...a});try{V.displayName="PaginationItem",V.__docgenInfo={description:"",displayName:"PaginationItem",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<PaginationItemClasses> & Partial<ClassNameMap<never>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},page:{defaultValue:null,description:"The current page number.",name:"page",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"'text'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"text" | "outlined"'}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.\n\nThis prop is an alias for the `components` prop, which will be deprecated in the future.",name:"slots",required:!1,type:{name:"{ first?: ElementType<any>; last?: ElementType<any>; next?: ElementType<any>; previous?: ElementType<any>; }"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"'page'"},description:"The type of pagination item.",name:"type",required:!1,type:{name:'"page" | "next" | "previous" | "first" | "last" | "start-ellipsis" | "end-ellipsis"'}},selected:{defaultValue:{value:"false"},description:"If `true` the pagination item is selected.",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}export{ea as M,V as P};
//# sourceMappingURL=PaginationItem-eb0f2353.js.map
