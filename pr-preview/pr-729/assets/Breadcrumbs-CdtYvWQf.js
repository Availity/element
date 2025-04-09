import{r as i}from"./index-DcWiA9TO.js";import{g as P,c as z}from"./generateUtilityClass-CVWqFxsA.js";import{m as E}from"./memoTheme-D-rVhYRp.js";import{c as T}from"./createSvgIcon-TketyoFF.js";import{j as t}from"./jsx-runtime-CcL-W3nW.js";import{s as p,c as $}from"./styled-CF1hcdwO.js";import{B as A}from"./ButtonBase-DbVRbsLs.js";import{t as j}from"./identifier-Dtqimryx.js";import{g as N}from"./generateUtilityClasses-BGOCnVj7.js";import{u as U}from"./DefaultPropsProvider-_cNB_dWy.js";import{u as H}from"./useSlotProps-BAIpVL6Y.js";import{T as L}from"./Typography-CvSvtD2a.js";const O=T(t.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),q=p(A)(E(({theme:r})=>({display:"flex",marginLeft:`calc(${r.spacing(1)} * 0.5)`,marginRight:`calc(${r.spacing(1)} * 0.5)`,...r.palette.mode==="light"?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},borderRadius:2,"&:hover, &:focus":{...r.palette.mode==="light"?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}},"&:active":{boxShadow:r.shadows[0],...r.palette.mode==="light"?{backgroundColor:j(r.palette.grey[200],.12)}:{backgroundColor:j(r.palette.grey[600],.12)}}}))),D=p(O)({width:24,height:16});function V(r){const{slots:o={},slotProps:a={},...l}=r,s=r;return t.jsx("li",{children:t.jsx(q,{focusRipple:!0,...l,ownerState:s,children:t.jsx(D,{as:o.CollapsedIcon,ownerState:s,...a.collapsedIcon})})})}function W(r){return P("MuiBreadcrumbs",r)}const F=N("MuiBreadcrumbs",["root","ol","li","separator"]),G=r=>{const{classes:o}=r;return $({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},W,o)},J=p(L,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(r,o)=>[{[`& .${F.li}`]:o.li},o.root]})({}),K=p("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(r,o)=>o.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),Q=p("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(r,o)=>o.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function X(r,o,a,l){return r.reduce((s,d,n)=>(n<r.length-1?s=s.concat(d,t.jsx(Q,{"aria-hidden":!0,className:o,ownerState:l,children:a},`separator-${n}`)):s.push(d),s),[])}const ir=i.forwardRef(function(o,a){const l=U({props:o,name:"MuiBreadcrumbs"}),{children:s,className:d,component:n="nav",slots:h={},slotProps:v={},expandText:C="Show path",itemsAfterCollapse:m=1,itemsBeforeCollapse:f=1,maxItems:g=8,separator:y="/",...I}=l,[B,M]=i.useState(!1),c={...l,component:n,expanded:B,expandText:C,itemsAfterCollapse:m,itemsBeforeCollapse:f,maxItems:g,separator:y},u=G(c),k=H({elementType:h.CollapsedIcon,externalSlotProps:v.collapsedIcon,ownerState:c}),S=i.useRef(null),w=e=>{const x=()=>{M(!0);const R=S.current.querySelector("a[href],button,[tabindex]");R&&R.focus()};return f+m>=e.length?e:[...e.slice(0,f),t.jsx(V,{"aria-label":C,slots:{CollapsedIcon:h.CollapsedIcon},slotProps:{collapsedIcon:k},onClick:x},"ellipsis"),...e.slice(e.length-m,e.length)]},b=i.Children.toArray(s).filter(e=>i.isValidElement(e)).map((e,x)=>t.jsx("li",{className:u.li,children:e},`child-${x}`));return t.jsx(J,{ref:a,component:n,color:"textSecondary",className:z(u.root,d),ownerState:c,...I,children:t.jsx(K,{className:u.ol,ref:S,ownerState:c,children:X(B||g&&b.length<=g?b:w(b),u.separator,y,c)})})});export{ir as B};
