import{r as i}from"./index-8db94870.js";import"./react-is.production.min-a192e302.js";import{s as p,g as z,b as $,c as N,a as T}from"./styled-a84420af.js";import{l as R,c as A}from"./useThemeProps-2498ecc2.js";import{c as E}from"./createSvgIcon-6dc812c4.js";import{j as t}from"./jsx-runtime-91a467a5.js";import{B as U}from"./ButtonBase-3eb7f77d.js";import{T as j}from"./Typography-a32bf19b.js";import{u as H}from"./useSlotProps-e284ca0c.js";const L=E(t("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),O=p(U)(({theme:e})=>({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`,...e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},borderRadius:2,"&:hover, &:focus":{...e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}},"&:active":{boxShadow:e.shadows[0],...e.palette.mode==="light"?{backgroundColor:R(e.palette.grey[200],.12)}:{backgroundColor:R(e.palette.grey[600],.12)}}})),q=p(L)({width:24,height:16});function V(e){const{slots:r={},slotProps:a={},...l}=e,s=e;return t("li",{children:t(O,{focusRipple:!0,...l,ownerState:s,children:t(q,{as:r.CollapsedIcon,ownerState:s,...a.collapsedIcon})})})}function W(e){return $("MuiBreadcrumbs",e)}const D=z("MuiBreadcrumbs",["root","ol","li","separator"]),F=D,G=e=>{const{classes:r}=e;return T({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},W,r)},J=p(j,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${F.li}`]:r.li},r.root]})({}),K=p("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),Q=p("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function X(e,r,a,l){return e.reduce((s,d,n)=>(n<e.length-1?s=s.concat(d,t(Q,{"aria-hidden":!0,className:r,ownerState:l,children:a},`separator-${n}`)):s.push(d),s),[])}const Y=i.forwardRef(function(r,a){const l=A({props:r,name:"MuiBreadcrumbs"}),{children:s,className:d,component:n="nav",slots:h={},slotProps:M={},expandText:y="Show path",itemsAfterCollapse:m=1,itemsBeforeCollapse:g=1,maxItems:f=8,separator:B="/",...v}=l,[S,I]=i.useState(!1),c={...l,component:n,expanded:S,expandText:y,itemsAfterCollapse:m,itemsBeforeCollapse:g,maxItems:f,separator:B},u=G(c),k=H({elementType:h.CollapsedIcon,externalSlotProps:M.collapsedIcon,ownerState:c}),x=i.useRef(null),P=o=>{const C=()=>{I(!0);const w=x.current.querySelector("a[href],button,[tabindex]");w&&w.focus()};return g+m>=o.length?o:[...o.slice(0,g),t(V,{"aria-label":y,slots:{CollapsedIcon:h.CollapsedIcon},slotProps:{collapsedIcon:k},onClick:C},"ellipsis"),...o.slice(o.length-m,o.length)]},b=i.Children.toArray(s).filter(o=>i.isValidElement(o)).map((o,C)=>t("li",{className:u.li,children:o},`child-${C}`));return t(J,{ref:a,component:n,color:"text.secondary",className:N(u.root,d),ownerState:c,...v,children:t(K,{className:u.ol,ref:x,ownerState:c,children:X(S||f&&b.length<=f?b:P(b),u.separator,B,c)})})}),ne=Y;export{ne as M};
//# sourceMappingURL=Breadcrumbs-264fd2b1.js.map
