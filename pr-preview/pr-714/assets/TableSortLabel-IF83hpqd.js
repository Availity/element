import{g as C,c as I}from"./generateUtilityClass-CVWqFxsA.js";import{r as j}from"./index-DcWiA9TO.js";import{c as M}from"./createSvgIcon-TketyoFF.js";import{j as i}from"./jsx-runtime-CcL-W3nW.js";import{m as u}from"./memoTheme-D-rVhYRp.js";import{g as $}from"./generateUtilityClasses-BGOCnVj7.js";import{u as f}from"./useSlot-DnkSxE3X.js";import{u as P}from"./DefaultPropsProvider-_cNB_dWy.js";import{s as b,c as A}from"./styled-CF1hcdwO.js";import{f as c}from"./identifier-Dtqimryx.js";import{B as U}from"./ButtonBase-DbVRbsLs.js";const h=M(i.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function z(o){return C("MuiTableSortLabel",o)}const n=$("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc","directionDesc","directionAsc"]),B=o=>{const{classes:t,direction:e,active:r}=o,s={root:["root",r&&"active",`direction${c(e)}`],icon:["icon",`iconDirection${c(e)}`]};return A(s,z,t)},N=b(U,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,e.active&&t.active]}})(u(({theme:o})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(o.vars||o).palette.text.secondary},"&:hover":{color:(o.vars||o).palette.text.secondary,[`& .${n.icon}`]:{opacity:.5}},[`&.${n.active}`]:{color:(o.vars||o).palette.text.primary,[`& .${n.icon}`]:{opacity:1,color:(o.vars||o).palette.text.secondary}}}))),E=b("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.icon,t[`iconDirection${c(e.direction)}`]]}})(u(({theme:o})=>({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:o.transitions.create(["opacity","transform"],{duration:o.transitions.duration.shorter}),userSelect:"none",variants:[{props:{direction:"desc"},style:{transform:"rotate(0deg)"}},{props:{direction:"asc"},style:{transform:"rotate(180deg)"}}]}))),X=j.forwardRef(function(t,e){const r=P({props:t,name:"MuiTableSortLabel"}),{active:s=!1,children:S,className:v,direction:y="asc",hideSortIcon:l=!1,IconComponent:p=h,slots:x={},slotProps:L={},...T}=r,a={...r,active:s,direction:y,hideSortIcon:l,IconComponent:p},m=B(a),d={slots:x,slotProps:L},[g,w]=f("root",{elementType:N,externalForwardedProps:d,ownerState:a,className:I(m.root,v),ref:e}),[D,R]=f("icon",{elementType:E,externalForwardedProps:d,ownerState:a,className:m.icon});return i.jsxs(g,{disableRipple:!0,component:"span",...w,...T,children:[S,l&&!s?null:i.jsx(D,{as:p,...R})]})});export{X as T};
