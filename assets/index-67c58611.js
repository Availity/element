import{s as h}from"./index-9681c8ff.js";import{H as f,W as v,E as x}from"./index-f35eb24e.js";import{I as F}from"./index-49af8d8b.js";import{a as t,j as e}from"./jsx-runtime-390e5fc8.js";import{r as m}from"./index-570b25c1.js";import{B as d}from"./Box-7f261278.js";import{M as I}from"./FormControlLabel-0fb4668c.js";import{s as b}from"./styled-188025da.js";import{M as u}from"./FormLabel-a07a3cea.js";import{M as g}from"./FormHelperText-ffbef46f.js";import{S as y}from"./Stack-aed56d46.js";import{D as C}from"./Divider-e6df2ce9.js";var L=r=>{h.send({event:"nav:help:field",id:r})},p=({helpTopicId:r,labelId:o,sx:i,...a})=>e(F,{...a,color:"primary",title:"Help",role:"link",onClick:()=>L(r),"aria-describedby":o,size:"small",sx:{...i,padding:.5,fontSize:"inherit",marginTop:"-2px",opacity:1},children:e(f,{"aria-hidden":!0,titleAccess:void 0})}),M=m.forwardRef(({helpTopicId:r,id:o,...i},a)=>{const n=o||(i.htmlFor?`${i.htmlFor}-label`:void 0);return t(d,{children:[e(I,{id:n,...i,ref:a}),r?e(p,{helpTopicId:"12345",labelId:n}):null]})}),$=({children:r,...o})=>t(g,{...o,children:[e(v,{sx:{marginRight:"4px"},titleAccess:"Error","aria-hidden":!1}),r]}),H=b("span",{name:"MuiFormLabel",slot:"Children",overridesResolver:(r,o)=>o.children})({}),S={position:"relative !important",transform:"none !important",transition:"none !important",animation:"none !important"},T=m.forwardRef((r,o)=>{const{children:i,helpTopicId:a,id:n,sx:c,...l}=r,s=n||(l.htmlFor?`${l.htmlFor}-label`:void 0);return t(d,{display:"flex",flexDirection:"row",sx:c,children:[e(u,{id:s,sx:{...S},...l,ref:o,children:e(H,{className:"MuiFormLabel-children",children:i})}),a?e(p,{helpTopicId:a,labelId:s,sx:{px:.5}}):null]})}),E={notched:!1},_=r=>t(y,{...r,direction:"row",spacing:1,height:"100%",paddingY:".5rem",top:"unset!important",children:[e(C,{orientation:"vertical"}),e(x,{sx:{position:"relative",top:"calc(50% - .5rem)"}})]}),Y={IconComponent:_,...E};M.__docgenInfo={description:"",methods:[],displayName:"FormControlLabel"};T.__docgenInfo={description:"",methods:[],displayName:"FormLabel"};export{M as F,E as I,Y as S,T as a,$ as b};
//# sourceMappingURL=index-67c58611.js.map