import{r as v}from"./index-570b25c1.js";import{a as s,j as w}from"./jsx-runtime-a3bcee63.js";import{S as P}from"./SvgIcon-075b1db6.js";import{L}from"./Link-b7684510.js";var O=Object.create,_=Object.defineProperty,b=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,j=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty,y=(e,r)=>function(){return e&&(r=(0,e[u(e)[0]])(e=0)),r},h=(e,r)=>function(){return r||(0,e[u(e)[0]])((r={exports:{}}).exports,r),r.exports},N=(e,r,a,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of u(r))!k.call(e,i)&&i!==a&&_(e,i,{get:()=>r[i],enumerable:!(n=b(r,i))||n.enumerable});return e},E=(e,r,a)=>(a=e!=null?O(j(e)):{},N(r||!e||!e.__esModule?_(a,"default",{value:e,enumerable:!0}):a,e)),t=y({"node_modules/tsup/assets/esm_shims.js"(){}}),A=h({"../../node_modules/@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare.js"(e){t(),Object.defineProperty(e,"__esModule",{value:!0});var r="fas",a="arrow-up-right-from-square",n=512,i=512,o=["external-link"],c="f08e",l="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z";e.definition={prefix:r,iconName:a,icon:[n,i,o,c,l]},e.faArrowUpRightFromSquare=e.definition,e.prefix=r,e.iconName=a,e.width=n,e.height=i,e.ligatures=o,e.unicode=c,e.svgPathData=l,e.aliases=o}}),z=h({"../../node_modules/@fortawesome/free-solid-svg-icons/faExternalLink.js"(e){t(),Object.defineProperty(e,"__esModule",{value:!0});var r=A();e.definition={prefix:r.prefix,iconName:r.iconName,icon:[r.width,r.height,r.aliases,r.unicode,r.svgPathData]},e.faExternalLink=e.definition,e.prefix=r.prefix,e.iconName=r.iconName,e.width=r.width,e.height=r.height,e.ligatures=r.aliases,e.unicode=r.unicode,e.svgPathData=r.svgPathData,e.aliases=r.aliases}});t();t();t();t();t();var D={prefix:"fas",iconName:"notdef",icon:[384,512,[],"e1fe","M64 390.3L153.5 256 64 121.7V390.3zM102.5 448H281.5L192 313.7 102.5 448zm128-192L320 390.3V121.7L230.5 256zM281.5 64H102.5L192 198.3 281.5 64zM0 48C0 21.5 21.5 0 48 0H336c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48z"]},H=v.forwardRef((e,r)=>{const{icon:a=D,...n}=e,{icon:[i,o,,,c]}=a;return s(P,{ref:r,viewBox:`0 0 ${i} ${o}`,...n,children:typeof c=="string"?s("path",{d:c}):null})});t();var M=E(z()),R=({...e})=>s(H,{icon:M.faExternalLink,"aria-hidden":!1,titleAccess:"(opens in new window)",...e});t();t();t();t();var S=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,V=/^[a-zA-Z]:\\/;function I(e){return V.test(e)?!1:S.test(e)}var U=(e="")=>`/public/apps/home/#!/loadApp?appUrl=${encodeURIComponent(e)}`,q=e=>{const r=document.createElement("a");return r.href=e,r},C=(e,r,a)=>{if(r==="_blank"&&a&&q(e).hostname!==window.location.hostname)return"noopener noreferrer"},F=v.forwardRef((e,r)=>{const{href:a,target:n="_self",children:i,onClick:o,loadApp:c=!0,rel:l,...p}=e,d=I(a),f=!(d||!c)?U(a):a,g=n==="_blank"?s(R,{}):null;return s(L,{href:f,target:n,onClick:m=>o&&o(m,f),rel:l||C(f,n,d),underline:"hover",...p,ref:r,children:w("span",{children:[i," ",g]})})});F.__docgenInfo={description:"",methods:[],displayName:"Link"};export{F as L};
//# sourceMappingURL=index-b3099525.js.map
