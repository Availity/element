import{r as f}from"./index-DcWiA9TO.js";import{j as i}from"./jsx-runtime-CcL-W3nW.js";import{T as I}from"./Tooltip-CiiaKkqp.js";import{I as x}from"./IconButton-Caxu-qgA.js";import{B as y}from"./Button-BAEbeAyH.js";import{L as P}from"./LoadingButton-9DxABi24.js";import{C as j}from"./CircularProgress-D8w9ZPs6.js";var O=Object.defineProperty,b=Object.defineProperties,h=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,_=(r,t,o)=>t in r?O(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,n=(r,t)=>{for(var o in t||(t={}))u.call(t,o)&&_(r,o,t[o]);if(d)for(var o of d(t))v.call(t,o)&&_(r,o,t[o]);return r},m=(r,t)=>b(r,h(t)),g=(r,t)=>{var o={};for(var e in r)u.call(r,e)&&t.indexOf(e)<0&&(o[e]=r[e]);if(r!=null&&d)for(var e of d(r))t.indexOf(e)<0&&v.call(r,e)&&(o[e]=r[e]);return o},B={disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},w=f.forwardRef((r,t)=>i.jsx(y,m(n(n({},r),B),{ref:t}))),R={borderRadius:".25rem",border:1},L=f.forwardRef((r,t)=>{const o=r,{title:e,variant:s="text",sx:a,size:l="medium"}=o,p=g(o,["title","variant","sx","size"]),c=n(n({},a),s==="outlined"&&R);return i.jsx(I,{title:e,children:i.jsx(x,m(n({"aria-label":e,sx:n({},c)},p),{ref:t,size:l}))})}),E=i.jsx(j,{color:"inherit",size:16,"aria-label":"loading"}),N=f.forwardRef((r,t)=>{const o=r,{children:e,loading:s}=o,a=g(o,["children","loading"]),l=a.startIcon?"start":"end",p=a.startIcon||a.endIcon||s?{}:{padding:"0 .7rem"},c=a.startIcon?void 0:i.jsx("span",{style:s?{padding:"0 .7rem"}:{}});return i.jsx(P,m(n({endIcon:c,loadingPosition:l,loading:s,disableRipple:!0,loadingIndicator:E},a),{ref:t,children:i.jsx("span",{style:p,children:e})}))});w.__docgenInfo={description:"",methods:[],displayName:"Button"};L.__docgenInfo={description:"",methods:[],displayName:"IconButton"};N.__docgenInfo={description:"",methods:[],displayName:"LoadingButton"};export{w as B,L as I,N as L};
