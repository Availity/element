import{s as f}from"./index-9681c8ff.js";import{E as h,H as I,W as x}from"./index-d61120f8.js";import{I as F}from"./index-407eec83.js";import{a as n,j as o}from"./jsx-runtime-390e5fc8.js";import{r as p}from"./index-570b25c1.js";import{s}from"./styled-523cb007.js";import{B as c}from"./Box-df8a6414.js";import{M}from"./FormControlLabel-34fd3025.js";import{M as b}from"./FormLabel-ae04d927.js";import{D as g}from"./Divider-c3141017.js";import{M as S}from"./Typography-cb5a2c80.js";import{M as y}from"./FormHelperText-8ba5d276.js";import{O as A}from"./OutlinedInput-c5324d24.js";import{M as E}from"./Select-e3d164a2.js";import{S as L}from"./Stack-ded40119.js";var R=r=>{f.send({event:"nav:help:field",id:r})},v=({helpTopicId:r,labelId:e,sx:a,...i})=>o(F,{...i,color:"primary",title:"Help",role:"link",onClick:()=>R(r),"aria-describedby":e,size:"small",sx:{...a,fontSize:"inherit",marginTop:"-2px",opacity:1},children:o(I,{"aria-hidden":!0,titleAccess:void 0})}),W=s(c,{name:"MuiFormControlLabel",slot:"AvWrapper",overridesResolver:(r,e)=>e.avWrapper})({}),C=p.forwardRef(({helpTopicId:r,id:e,sx:a,...i},l)=>{const t=e||(i.htmlFor?`${i.htmlFor}-label`:void 0);return n(W,{className:"MuiFormControlLabel-avWrapper",sx:a,children:[o(M,{id:t,...i,ref:l}),r?o(v,{helpTopicId:"12345",labelId:t}):null]})}),Z=({children:r,...e})=>n(y,{...e,children:[o(x,{sx:{marginRight:"4px"},titleAccess:"Error","aria-hidden":!1}),r]}),T=s(c,{name:"MuiFormLabel",slot:"AvWrapper",overridesResolver:(r,e)=>e.avWrapper})({}),H={position:"relative !important",transform:"none !important",transition:"none !important",animation:"none !important"},k=p.forwardRef((r,e)=>{const{helpTopicId:a,id:i,sx:l,...t}=r,m=i||(t.htmlFor?`${t.htmlFor}-label`:void 0);return n(T,{className:"MuiFormLabel-avWrapper",sx:l,children:[o(b,{id:m,sx:{...H},...t,ref:e}),a?o(v,{helpTopicId:a,labelId:m,sx:{px:.5}}):null]})}),u={notched:!1},rr=r=>{const{required:e,inputProps:a,...i}=r;return o(A,{...i,...u,inputProps:{"aria-required":e||void 0,...a}})},D=s(g,{name:"MuiSelect",slot:"AvEndAdornmentDivider",overridesResolver:(r,e)=>e.avEndAdornmentDivider})({}),N=s(h,{name:"MuiSelect",slot:"AvExpandIcon",overridesResolver:(r,e)=>e.avExpandIcon})({}),O=r=>n(L,{...r,direction:"row",height:"100%",top:"unset!important",children:[o(D,{orientation:"vertical",className:"MuiSelect-avEndAdornmentDivider"}),o(N,{className:"MuiSelect-avExpandIcon"})]}),_={IconComponent:O,...u},er=r=>o(E,{...r,..._}),d=p.forwardRef(({children:r,...e},a)=>o(S,{...e,ref:a,children:r})),or=()=>{const r=s(d,{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,a)=>a.asterisk})({marginLeft:"0!important",marginRight:"0!important"});return n(d,{children:[o(r,{component:"span",children:"*"})," is a required field."]})};C.__docgenInfo={description:"",methods:[],displayName:"FormControlLabel"};k.__docgenInfo={description:"",methods:[],displayName:"FormLabel"};export{k as F,u as I,or as R,D as S,N as a,Z as b,_ as c,C as d,er as e,rr as f};
//# sourceMappingURL=index-036f48fa.js.map