import{r as p}from"./index-BgYLq7fD.js";import{g as y,c as T}from"./generateUtilityClass-BeVSWKCg.js";import{b as w}from"./TableCell-Dihxu9Xc.js";import{g as R}from"./generateUtilityClasses-whvyra8-.js";import{j as d}from"./jsx-runtime-BTJTZTIL.js";import{u as C}from"./DefaultPropsProvider-CWkNlXkE.js";import{s as g,c as h}from"./styled-CKuRQFSa.js";import{m as $}from"./memoTheme-CpoNRPWX.js";import{a as m}from"./identifier-CudAVvBZ.js";function B(o){return y("MuiTableBody",o)}R("MuiTableBody",["root"]);const M=o=>{const{classes:t}=o;return h({root:["root"]},B,t)},O=g("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(o,t)=>t.root})({display:"table-row-group"}),U={variant:"body"},b="tbody",H=p.forwardRef(function(t,e){const s=C({props:t,name:"MuiTableBody"}),{className:r,component:a=b,...l}=s,n={...s,component:a},i=M(n);return d.jsx(w.Provider,{value:U,children:d.jsx(O,{className:T(i.root,r),as:a,ref:e,role:a===b?null:"rowgroup",ownerState:n,...l})})});function j(o){return y("MuiTableRow",o)}const v=R("MuiTableRow",["root","selected","hover","head","footer"]),N=o=>{const{classes:t,selected:e,hover:s,head:r,footer:a}=o;return h({root:["root",e&&"selected",s&&"hover",r&&"head",a&&"footer"]},j,t)},k=g("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,e.head&&t.head,e.footer&&t.footer]}})($(({theme:o})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${v.hover}:hover`]:{backgroundColor:(o.vars||o).palette.action.hover},[`&.${v.selected}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:m(o.palette.primary.main,o.palette.action.selectedOpacity),"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:m(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity)}}}))),f="tr",I=p.forwardRef(function(t,e){const s=C({props:t,name:"MuiTableRow"}),{className:r,component:a=f,hover:l=!1,selected:n=!1,...i}=s,c=p.useContext(w),u={...s,component:a,hover:l,selected:n,head:c&&c.variant==="head",footer:c&&c.variant==="footer"},x=N(u);return d.jsx(k,{as:a,ref:e,className:T(x.root,r),role:a===f?null:"row",ownerState:u,...i})});export{H as T,I as a};
