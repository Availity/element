import{r as u}from"./index-BgYLq7fD.js";import{S as x,W as h}from"./index-Bp9oCidm.js";import{T as v}from"./index-DSF7aQ5o.js";import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{S as _}from"./Stack-qbqOHiMo.js";import{C as O}from"./CircularProgress-fcRSDrpN.js";import{L as w}from"./LinearProgress-CZqiJK1L.js";import{B as y}from"./Box-Dv31mJKI.js";var S=Object.defineProperty,b=Object.defineProperties,C=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,g=(r,e,s)=>e in r?S(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s,i=(r,e)=>{for(var s in e||(e={}))j.call(e,s)&&g(r,s,e[s]);if(c)for(var s of c(e))P.call(e,s)&&g(r,s,e[s]);return r},l=(r,e)=>b(r,C(e)),m=(r,e)=>{var s={};for(var a in r)j.call(r,a)&&e.indexOf(a)<0&&(s[a]=r[a]);if(r!=null&&c)for(var a of c(r))e.indexOf(a)<0&&P.call(r,a)&&(s[a]=r[a]);return s},L=({status:r,size:e})=>{const s=e==="small"?"medium":"large";switch(r){case"error":return t.jsx(h,{color:"error",fontSize:s,titleAccess:"loading error"});case"success":return t.jsx(x,{color:"success",fontSize:s,titleAccess:"loading successful"});default:return null}},I=r=>({loading:"Loading",error:"Loading error",success:"Loading successful"})[r]||"",N=r=>{var e=r,{loadingCaption:s=!0,error:a=!1,success:o=!1,size:n="default"}=e,d=m(e,["loadingCaption","error","success","size"]);const[f,p]=u.useState("loading");return u.useEffect(()=>{p(a?"error":o?"success":"loading")},[a,o]),t.jsxs(_,{sx:{width:"fit-content",alignItems:"center"},children:[f==="loading"?t.jsx(O,l(i({"aria-label":"Loading"},d),{size:n==="small"?24:40,variant:"indeterminate"})):t.jsx(L,{status:f,size:n}),t.jsx(v,{sx:{marginTop:"8px"},variant:"caption",children:s||a||o?I(f):null})]})},E=u.forwardRef((r,e)=>t.jsx(y,l(i({},r),{ref:e}))),z=r=>{var e=r,{children:s}=e,a=m(e,["children"]);return t.jsx(_,l(i({},a),{children:s}))},V=r=>{var e=r,{variant:s="determinate",value:a=0,sx:o,hidePercentage:n=!1}=e,d=m(e,["variant","value","sx","hidePercentage"]);return t.jsxs(z,{direction:"row",sx:{alignItems:"center"},children:[t.jsx(E,{sx:{width:"100%",mr:.5},children:t.jsx(w,l(i({variant:s},d),{value:a,color:"success",sx:i({width:"100%"},o)}))}),a===100&&t.jsx(x,{color:"success","data-icon":"complete"}),!n&&t.jsx(v,{variant:"body2",sx:{color:"text.secondary",ml:1},children:`${Math.round(a)}%`})]})};export{N as C,V as L};
