import{r as d}from"./index-BgYLq7fD.js";import{g as p,c as m}from"./generateUtilityClass-BeVSWKCg.js";import{m as c}from"./memoTheme-CpoNRPWX.js";import{g}from"./generateUtilityClasses-whvyra8-.js";import{d as u}from"./dialogTitleClasses-BXUk1z2I.js";import{j as v}from"./jsx-runtime-BTJTZTIL.js";import{u as f}from"./DefaultPropsProvider-CWkNlXkE.js";import{s as C,c as x}from"./styled-CKuRQFSa.js";function D(o){return p("MuiDialogContent",o)}g("MuiDialogContent",["root","dividers"]);const y=o=>{const{classes:t,dividers:s}=o;return x({root:["root",s&&"dividers"]},D,t)},w=C("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,s.dividers&&t.dividers]}})(c(({theme:o})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",variants:[{props:({ownerState:t})=>t.dividers,style:{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}},{props:({ownerState:t})=>!t.dividers,style:{[`.${u.root} + &`]:{paddingTop:0}}}]}))),E=d.forwardRef(function(t,s){const r=f({props:t,name:"MuiDialogContent"}),{className:i,dividers:a=!1,...n}=r,e={...r,dividers:a},l=y(e);return v.jsx(w,{className:m(l.root,i),ownerState:e,ref:s,...n})});export{E as D};
