import{T as _}from"./index-DSF7aQ5o.js";import{L as h}from"./index-DyDKnJdB.js";import{j as i}from"./jsx-runtime-BTJTZTIL.js";import{s}from"./styled-CKuRQFSa.js";var j=Object.defineProperty,D=Object.defineProperties,b=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,v=(r,e,a)=>e in r?j(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,m=(r,e)=>{for(var a in e||(e={}))x.call(e,a)&&v(r,a,e[a]);if(n)for(var a of n(e))O.call(e,a)&&v(r,a,e[a]);return r},f=(r,e)=>D(r,b(e)),g=(r,e)=>{var a={};for(var t in r)x.call(r,t)&&e.indexOf(t)<0&&(a[t]=r[t]);if(r!=null&&n)for(var t of n(r))e.indexOf(t)<0&&O.call(r,t)&&(a[t]=r[t]);return a},w=s("div",{name:"AvDisclaimer",slot:"root",overridesResolver:(r,e)=>[e.root,r.accent&&e.accent,r.dense&&e.dense]})({}),u=s(_,{name:"AvDisclaimer",slot:"header"})(({ownerState:r})=>({marginBottom:r.dense?"4px":"8px"})),A=s(h,{name:"AvDisclaimer",slot:"link"})(({ownerState:r})=>({marginTop:r.dense?"8px":"16px",display:"block"})),R=r=>{var e=r,{accent:a=!0,dense:t=!1,description:y,headerText:l,link:c}=e,P=g(e,["accent","dense","description","headerText","link"]);let o="body1",d="h5";t&&(o="body2",d="h6");const p={dense:t};return i.jsxs(w,f(m({accent:a,dense:t},P),{children:[l&&i.jsx(u,{variant:d,ownerState:p,color:"text.secondary",children:l}),i.jsx(_,{variant:o,color:"text.secondary",children:y}),c&&i.jsx(A,f(m({ownerState:p},c),{iconPosition:"end",variant:o}))]}))};export{R as D};
