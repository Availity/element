import{r as S}from"./index-DcWiA9TO.js";import{g as I,c as k}from"./generateUtilityClass-DELP8s2G.js";import{g as A}from"./generateUtilityClasses-duJ5YrlI.js";import{j as b}from"./jsx-runtime-CcL-W3nW.js";import{u as E}from"./DefaultPropsProvider-LCKMq1Iv.js";import{P as G}from"./PaginationItem-BQGjWpdu.js";import{u as $}from"./useControlled-WdbyInBW.js";import{s as U,c as F}from"./styled-wZqJTO_n.js";function z(s){return I("MuiPagination",s)}A("MuiPagination",["root","ul","outlined","text"]);function D(s={}){const{boundaryCount:t=1,componentName:o="usePagination",count:e=1,defaultPage:v=1,disabled:p=!1,hideNextButton:d=!1,hidePrevButton:y=!1,onChange:f,page:m,showFirstButton:h=!1,showLastButton:M=!1,siblingCount:i=1,...R}=s,[r,P]=$({controlled:m,default:v,name:o,state:"page"}),l=(a,n)=>{m||P(n),f&&f(a,n)},u=(a,n)=>{const j=n-a+1;return Array.from({length:j},(J,L)=>a+L)},w=u(1,Math.min(t,e)),B=u(Math.max(e-t+1,t+1),e),c=Math.max(Math.min(r-i,e-t-i*2-1),t+2),g=Math.min(Math.max(r+i,t+i*2+2),e-t-1),N=[...h?["first"]:[],...y?[]:["previous"],...w,...c>t+2?["start-ellipsis"]:t+1<e-t?[t+1]:[],...u(c,g),...g<e-t-1?["end-ellipsis"]:e-t>t?[e-t]:[],...B,...d?[]:["next"],...M?["last"]:[]],x=a=>{switch(a){case"first":return 1;case"previous":return r-1;case"next":return r+1;case"last":return e;default:return null}};return{items:N.map(a=>typeof a=="number"?{onClick:n=>{l(n,a)},type:"page",page:a,selected:a===r,disabled:p,"aria-current":a===r?"page":void 0}:{onClick:n=>{l(n,x(a))},type:a,page:x(a),selected:!1,disabled:p||!a.includes("ellipsis")&&(a==="next"||a==="last"?r>=e:r<=1)}),...R}}const W=s=>{const{classes:t,variant:o}=s;return F({root:["root",o],ul:["ul"]},z,t)},_=U("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,t[o.variant]]}})({}),q=U("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(s,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function H(s,t,o){return s==="page"?`${o?"":"Go to "}page ${t}`:`Go to ${s} page`}const tt=S.forwardRef(function(t,o){const e=E({props:t,name:"MuiPagination"}),{boundaryCount:v=1,className:p,color:d="standard",count:y=1,defaultPage:f=1,disabled:m=!1,getItemAriaLabel:h=H,hideNextButton:M=!1,hidePrevButton:i=!1,onChange:R,page:r,renderItem:P=n=>b.jsx(G,{...n}),shape:l="circular",showFirstButton:u=!1,showLastButton:w=!1,siblingCount:B=1,size:c="medium",variant:g="text",...N}=e,{items:x}=D({...e,componentName:"Pagination"}),C={...e,boundaryCount:v,color:d,count:y,defaultPage:f,disabled:m,getItemAriaLabel:h,hideNextButton:M,hidePrevButton:i,renderItem:P,shape:l,showFirstButton:u,showLastButton:w,siblingCount:B,size:c,variant:g},a=W(C);return b.jsx(_,{"aria-label":"pagination navigation",className:k(a.root,p),ownerState:C,ref:o,...N,children:b.jsx(q,{className:a.ul,ownerState:C,children:x.map((n,j)=>b.jsx("li",{children:P({...n,color:d,"aria-label":h(n.type,n.page,n.selected),shape:l,size:c,variant:g})},j))})})});export{tt as P};
