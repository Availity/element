import{e as U,c as P,b as T,a as I,s as h,g as L}from"./styled-362768da.js";import{q as j,c as R,t as A,v as w,b as N}from"./useThemeProps-209b167f.js";import{r as g}from"./index-8db94870.js";import{j as s,a as E}from"./jsx-runtime-91a467a5.js";import{N as O,H as q}from"./index-243cee36.js";import{B as D}from"./Box-dd25e24e.js";import"./react-is.production.min-a192e302.js";import{c as V}from"./createSvgIcon-fecd2817.js";import{B as F}from"./ButtonBase-e390fcf3.js";import{T as z}from"./Typography-3506bfd2.js";import{u as J}from"./useSlotProps-0d6e705d.js";import{M as K}from"./IconButton-d2e52582.js";import{M}from"./Paper-e8439940.js";const Q=U(),X=Q,Y=j(),Z=X("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[`maxWidth${R(String(r.maxWidth))}`],r.fixed&&o.fixed,r.disableGutters&&o.disableGutters]}}),_=e=>A({props:e,name:"MuiContainer",defaultTheme:Y}),ee=(e,o)=>{const r=d=>I(o,d),{classes:i,fixed:n,disableGutters:m,maxWidth:t}=e,a={root:["root",t&&`maxWidth${R(String(t))}`,n&&"fixed",m&&"disableGutters"]};return T(a,r,i)};function oe(e={}){const{createStyledComponent:o=Z,useThemeProps:r=_,componentName:i="MuiContainer"}=e,n=o(({theme:t,ownerState:a})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block",...!a.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}}),({theme:t,ownerState:a})=>a.fixed&&Object.keys(t.breakpoints.values).reduce((d,f)=>{const p=f,c=t.breakpoints.values[p];return c!==0&&(d[t.breakpoints.up(p)]={maxWidth:`${c}${t.breakpoints.unit}`}),d},{}),({theme:t,ownerState:a})=>({...a.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},...a.maxWidth&&a.maxWidth!=="xs"&&{[t.breakpoints.up(a.maxWidth)]:{maxWidth:`${t.breakpoints.values[a.maxWidth]}${t.breakpoints.unit}`}}}));return g.forwardRef(function(a,d){const f=r(a),{className:p,component:c="div",disableGutters:x=!1,fixed:C=!1,maxWidth:S="lg",classes:v,...y}=f,u={...f,component:c,disableGutters:x,fixed:C,maxWidth:S},b=ee(u,i);return s(n,{as:c,ownerState:u,className:P(b.root,p),ref:d,...y})})}const te=V(s("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),re=h(F)(({theme:e})=>({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`,...e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},borderRadius:2,"&:hover, &:focus":{...e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}},"&:active":{boxShadow:e.shadows[0],...e.palette.mode==="light"?{backgroundColor:w(e.palette.grey[200],.12)}:{backgroundColor:w(e.palette.grey[600],.12)}}})),se=h(te)({width:24,height:16});function ae(e){const{slots:o={},slotProps:r={},...i}=e,n=e;return s("li",{children:s(re,{focusRipple:!0,...i,ownerState:n,children:s(se,{as:o.CollapsedIcon,ownerState:n,...r.collapsedIcon})})})}function ne(e){return I("MuiBreadcrumbs",e)}const ie=L("MuiBreadcrumbs",["root","ol","li","separator"]),le=ie,ce=e=>{const{classes:o}=e;return T({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},ne,o)},de=h(z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,o)=>[{[`& .${le.li}`]:o.li},o.root]})({}),pe=h("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,o)=>o.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),ue=h("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,o)=>o.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function me(e,o,r,i){return e.reduce((n,m,t)=>(t<e.length-1?n=n.concat(m,s(ue,{"aria-hidden":!0,className:o,ownerState:i,children:r},`separator-${t}`)):n.push(m),n),[])}const fe=g.forwardRef(function(o,r){const i=N({props:o,name:"MuiBreadcrumbs"}),{children:n,className:m,component:t="nav",slots:a={},slotProps:d={},expandText:f="Show path",itemsAfterCollapse:p=1,itemsBeforeCollapse:c=1,maxItems:x=8,separator:C="/",...S}=i,[v,y]=g.useState(!1),u={...i,component:t,expanded:v,expandText:f,itemsAfterCollapse:p,itemsBeforeCollapse:c,maxItems:x,separator:C},b=ce(u),G=J({elementType:a.CollapsedIcon,externalSlotProps:d.collapsedIcon,ownerState:u}),$=g.useRef(null),H=l=>{const k=()=>{y(!0);const W=$.current.querySelector("a[href],button,[tabindex]");W&&W.focus()};return c+p>=l.length?l:[...l.slice(0,c),s(ae,{"aria-label":f,slots:{CollapsedIcon:a.CollapsedIcon},slotProps:{collapsedIcon:G},onClick:k},"ellipsis"),...l.slice(l.length-p,l.length)]},B=g.Children.toArray(n).filter(l=>g.isValidElement(l)).map((l,k)=>s("li",{className:b.li,children:l},`child-${k}`));return s(de,{ref:r,component:t,color:"text.secondary",className:P(b.root,m),ownerState:u,...S,children:s(pe,{className:b.ol,ref:$,ownerState:u,children:me(v||x&&B.length<=x?B:H(B),b.separator,C,u)})})}),be=fe,ge=oe({createStyledComponent:h("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[`maxWidth${R(String(r.maxWidth))}`],r.fixed&&o.fixed,r.disableGutters&&o.disableGutters]}}),useThemeProps:e=>N({props:e,name:"MuiContainer"})}),Pe=ge,Te=()=>s(D,{children:E(be,{"aria-label":"breadcrumbs",separator:s(O,{fontSize:"small"}),children:[s(K,{size:"small",children:s(q,{})}),s(z,{children:"Current Page"})]})}),Ie=()=>s(M,{variant:"elevation",elevation:0,children:"Search"}),Ne=()=>s(M,{sx:{height:"100%"},variant:"elevation",elevation:0,children:"Side Navigation"}),ze=()=>s(M,{variant:"elevation",elevation:0,children:"Tables"});export{Pe as C,Te as H,Ne as S,ze as T,Ie as a};
//# sourceMappingURL=TablesSection-6dbb3627.js.map