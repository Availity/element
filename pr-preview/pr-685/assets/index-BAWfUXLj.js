import{r as j}from"./index-DcWiA9TO.js";import{g as O,c as R}from"./generateUtilityClass-CVWqFxsA.js";import{m as $}from"./memoTheme-D-rVhYRp.js";import{g as U}from"./generateUtilityClasses-BGOCnVj7.js";import{j as s}from"./jsx-runtime-CcL-W3nW.js";import{u as B}from"./DefaultPropsProvider-_cNB_dWy.js";import{s as I,c as L}from"./styled-CF1hcdwO.js";import{c as y,k as w}from"./emotion-react.browser.esm-CU7ej9d2.js";import{a as M}from"./identifier-Dtqimryx.js";import{n as N,N as A}from"./index-0eQTE8wr.js";import{L as _}from"./index-bBMPy_C5.js";import{B as E}from"./Breadcrumbs-CdtYvWQf.js";import{T as k}from"./Typography-CvSvtD2a.js";function T(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function X(t){return parseFloat(t)}function D(t){return O("MuiSkeleton",t)}U("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const H=t=>{const{classes:r,variant:a,animation:e,hasChildren:o,width:n,height:i}=t;return L({root:["root",a,e,o&&"withChildren",o&&!n&&"fitContent",o&&!i&&"heightAuto"]},D,r)},u=w`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,v=w`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,z=typeof u!="string"?y`
        animation: ${u} 2s ease-in-out 0.5s infinite;
      `:null,K=typeof v!="string"?y`
        &::after {
          animation: ${v} 2s linear 0.5s infinite;
        }
      `:null,V=I("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:a}=t;return[r.root,r[a.variant],a.animation!==!1&&r[a.animation],a.hasChildren&&r.withChildren,a.hasChildren&&!a.width&&r.fitContent,a.hasChildren&&!a.height&&r.heightAuto]}})($(({theme:t})=>{const r=T(t.shape.borderRadius)||"px",a=X(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:M(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${r}/${Math.round(a/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:e})=>e.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:e})=>e.hasChildren&&!e.width,style:{maxWidth:"fit-content"}},{props:({ownerState:e})=>e.hasChildren&&!e.height,style:{height:"auto"}},{props:{animation:"pulse"},style:z||{animation:`${u} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:K||{"&::after":{animation:`${v} 2s linear 0.5s infinite`}}}]}})),ct=j.forwardRef(function(r,a){const e=B({props:r,name:"MuiSkeleton"}),{animation:o="pulse",className:n,component:i="span",height:l,style:p,variant:c="text",width:h,...m}=e,g={...e,animation:o,component:i,variant:c,hasChildren:!!m.children},S=H(g);return s.jsx(V,{as:i,ref:a,className:R(S.root,n),ownerState:g,...m,style:{width:h,height:l,...p}})});var W=Object.defineProperty,F=Object.defineProperties,q=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,b=(t,r,a)=>r in t?W(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,d=(t,r)=>{for(var a in r||(r={}))x.call(r,a)&&b(t,a,r[a]);if(f)for(var a of f(r))C.call(r,a)&&b(t,a,r[a]);return t},P=(t,r)=>F(t,q(r)),G=(t,r)=>{var a={};for(var e in t)x.call(t,e)&&r.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&f)for(var e of f(t))r.indexOf(e)<0&&C.call(t,e)&&(a[e]=t[e]);return a},J=({name:t,url:r,target:a="_top",LinkProps:e})=>{const o={"aria-label":t,children:t};return r?s.jsx(_,P(d(d({},o),e),{href:r,target:a})):s.jsx(k,d({},o))},mt=t=>{var r=t,{active:a,children:e,crumbs:o,emptyState:n="...",homeUrl:i="/public/apps/dashboard",LinkProps:l}=r,p=G(r,["active","children","crumbs","emptyState","homeUrl","LinkProps"]);return s.jsxs(E,P(d({},p),{separator:s.jsx(A,{fontSize:"xsmall"}),slotProps:{collapsedIcon:{className:"breadcrumbs__collapsed-icon"}},slots:{CollapsedIcon:N},"aria-label":p["aria-label"]||"breadcrumbs",children:[s.jsx(_,{"aria-label":"Home",href:i,loadApp:!1,children:"Home"}),o&&o.length>0&&o.map(({name:c=n,url:h,target:m})=>s.jsx(J,{name:c,url:h,target:m,LinkProps:l},c)),e,s.jsx(k,{children:a||n})]}))};export{mt as B,ct as S};
