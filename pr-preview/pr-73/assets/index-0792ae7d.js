import{r as _}from"./index-8db94870.js";import{j as c,a as w}from"./jsx-runtime-91a467a5.js";import{S as P}from"./SvgIcon-6bda5215.js";import{L as O}from"./Link-47223823.js";var b=Object.create,h=Object.defineProperty,j=Object.getOwnPropertyDescriptor,f=Object.getOwnPropertyNames,L=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty,y=(e,r)=>function(){return e&&(r=(0,e[f(e)[0]])(e=0)),r},v=(e,r)=>function(){return r||(0,e[f(e)[0]])((r={exports:{}}).exports,r),r.exports},E=(e,r,a,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of f(r))!k.call(e,i)&&i!==a&&h(e,i,{get:()=>r[i],enumerable:!(n=j(r,i))||n.enumerable});return e},A=(e,r,a)=>(a=e!=null?b(L(e)):{},E(r||!e||!e.__esModule?h(a,"default",{value:e,enumerable:!0}):a,e)),t=y({"node_modules/tsup/assets/esm_shims.js"(){}}),N=v({"../../node_modules/@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare.js"(e){t(),Object.defineProperty(e,"__esModule",{value:!0});var r="fas",a="arrow-up-right-from-square",n=512,i=512,o=["external-link"],s="f08e",l="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z";e.definition={prefix:r,iconName:a,icon:[n,i,o,s,l]},e.faArrowUpRightFromSquare=e.definition,e.prefix=r,e.iconName=a,e.width=n,e.height=i,e.ligatures=o,e.unicode=s,e.svgPathData=l,e.aliases=o}}),R=v({"../../node_modules/@fortawesome/free-solid-svg-icons/faExternalLink.js"(e){t(),Object.defineProperty(e,"__esModule",{value:!0});var r=N();e.definition={prefix:r.prefix,iconName:r.iconName,icon:[r.width,r.height,r.aliases,r.unicode,r.svgPathData]},e.faExternalLink=e.definition,e.prefix=r.prefix,e.iconName=r.iconName,e.width=r.width,e.height=r.height,e.ligatures=r.aliases,e.unicode=r.unicode,e.svgPathData=r.svgPathData,e.aliases=r.aliases}});t();t();t();t();t();var S=_.forwardRef((e,r)=>{const{icon:a,...n}=e,{icon:[i,o,,,s]}=a;return c(P,{ref:r,viewBox:`0 0 ${i} ${o}`,...n,children:typeof s=="string"?c("path",{d:s}):null})});t();var D=A(R()),U=({...e})=>c(S,{icon:D.faExternalLink,"aria-hidden":!1,titleAccess:"(opens in new window)",...e});t();t();t();t();var I=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,q=/^[a-zA-Z]:\\/;function H(e){return q.test(e)?!1:I.test(e)}var M=(e="")=>`/public/apps/home/#!/loadApp?appUrl=${encodeURIComponent(e)}`,V=e=>{const r=document.createElement("a");return r.href=e,r},z=(e,r,a)=>{if(r==="_blank"&&a&&V(e).hostname!==window.location.hostname)return"noopener noreferrer"},C=_.forwardRef((e,r)=>{const{href:a,target:n="_self",children:i,onClick:o,loadApp:s=!0,rel:l,...p}=e,d=H(a),u=!(d||!s)?M(a):a,g=n==="_blank"?c(U,{}):null;return c(O,{href:u,target:n,onClick:m=>o&&o(m,u),rel:l||z(u,n,d),underline:"hover",...p,ref:r,children:w("span",{children:[i," ",g]})})});C.__docgenInfo={description:"",methods:[],displayName:"Link"};export{C as L};
//# sourceMappingURL=index-0792ae7d.js.map
