import{r as g}from"./index-DcWiA9TO.js";import{I as l}from"./index-DSGElAqY.js";import{W as c,S as O,I,C as P}from"./index-BDqO7SwG.js";import{j as s}from"./jsx-runtime-CcL-W3nW.js";import{A as u}from"./Alert-CDZ60Lm0.js";import{A as w}from"./AlertTitle-9tHYplCn.js";var A=Object.defineProperty,C=Object.defineProperties,b=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,f=(r,o,e)=>o in r?A(r,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[o]=e,n=(r,o)=>{for(var e in o||(o={}))p.call(o,e)&&f(r,e,o[e]);if(a)for(var e of a(o))m.call(o,e)&&f(r,e,o[e]);return r},y=(r,o)=>C(r,b(o)),_=(r,o)=>{var e={};for(var t in r)p.call(r,t)&&o.indexOf(t)<0&&(e[t]=r[t]);if(r!=null&&a)for(var t of a(r))o.indexOf(t)<0&&m.call(r,t)&&(e[t]=r[t]);return e},h={error:s.jsx(c,{color:"error"}),info:s.jsx(I,{color:"info"}),success:s.jsx(O,{color:"success"}),warning:s.jsx(c,{color:"warning",sx:{color:"warning.dark"}})},E=g.forwardRef((r,o)=>{const e=r,{action:t,onClose:i,closeText:d="dismiss alert"}=e,v=_(e,["action","onClose","closeText"]),x={closeButton:t?j=>s.jsxs(s.Fragment,{children:[t,s.jsx(l,n({size:"small"},j))]}):l,closeIcon:P};return s.jsx(u,n({variant:"standard",action:i?void 0:t,onClose:i,closeText:d,iconMapping:h,slots:x,ref:o},v))}),$=r=>{var o=r,{children:e}=o,t=_(o,["children"]);return s.jsx(w,y(n({},t),{children:e}))};E.__docgenInfo={description:"",methods:[],displayName:"Alert"};export{h as A,E as a,$ as b};
