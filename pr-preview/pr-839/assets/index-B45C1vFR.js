import{r as j}from"./index-BSuoOqEd.js";import{a as O}from"./identifier-DhnHujDJ.js";import{m as R}from"./memoTheme-BwIkkReu.js";import{g as $}from"./generateUtilityClass-BtcU_pBl.js";import{g as U}from"./generateUtilityClasses-DDbjFgb8.js";import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{u as B}from"./DefaultPropsProvider-B1sWsgx2.js";import{s as I,c as L}from"./styled-9znMky1q.js";import{c as y,k as w}from"./emotion-react.browser.esm-CVJjYY2z.js";import{p as M,N}from"./index-BgHLshU-.js";import{L as _}from"./index-CKZZDTDE.js";import{B as A}from"./Breadcrumbs-Bh0k5_Bt.js";import{T as k}from"./Typography-CHtEfMke.js";function E(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function T(t){return parseFloat(t)}function X(t){return $("MuiSkeleton",t)}U("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const D=t=>{const{classes:r,variant:a,animation:e,hasChildren:o,width:i,height:n}=t;return L({root:["root",a,e,o&&"withChildren",o&&!i&&"fitContent",o&&!n&&"heightAuto"]},X,r)},u=w`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,g=w`
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
`,H=typeof u!="string"?y`
        animation: ${u} 2s ease-in-out 0.5s infinite;
      `:null,z=typeof g!="string"?y`
        &::after {
          animation: ${g} 2s linear 0.5s infinite;
        }
      `:null,K=I("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:a}=t;return[r.root,r[a.variant],a.animation!==!1&&r[a.animation],a.hasChildren&&r.withChildren,a.hasChildren&&!a.width&&r.fitContent,a.hasChildren&&!a.height&&r.heightAuto]}})(R(({theme:t})=>{const r=E(t.shape.borderRadius)||"px",a=T(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:t.alpha(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${r}/${Math.round(a/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:e})=>e.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:e})=>e.hasChildren&&!e.width,style:{maxWidth:"fit-content"}},{props:({ownerState:e})=>e.hasChildren&&!e.height,style:{height:"auto"}},{props:{animation:"pulse"},style:H||{animation:`${u} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:z||{"&::after":{animation:`${g} 2s linear 0.5s infinite`}}}]}})),pt=j.forwardRef(function(r,a){const e=B({props:r,name:"MuiSkeleton"}),{animation:o="pulse",className:i,component:n="span",height:l,style:p,variant:c="text",width:h,...m}=e,v={...e,animation:o,component:n,variant:c,hasChildren:!!m.children},S=D(v);return s.jsx(K,{as:n,ref:a,className:O(S.root,i),ownerState:v,...m,style:{width:h,height:l,...p}})});var V=Object.defineProperty,W=Object.defineProperties,F=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,b=(t,r,a)=>r in t?V(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,d=(t,r)=>{for(var a in r||(r={}))x.call(r,a)&&b(t,a,r[a]);if(f)for(var a of f(r))C.call(r,a)&&b(t,a,r[a]);return t},P=(t,r)=>W(t,F(r)),q=(t,r)=>{var a={};for(var e in t)x.call(t,e)&&r.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&f)for(var e of f(t))r.indexOf(e)<0&&C.call(t,e)&&(a[e]=t[e]);return a},G=({name:t,url:r,target:a="_top",LinkProps:e})=>{const o={"aria-label":t,children:t};return r?s.jsx(_,P(d(d({},o),e),{href:r,target:a})):s.jsx(k,d({},o))},ct=t=>{var r=t,{active:a,children:e,crumbs:o,emptyState:i="...",homeUrl:n="/static/web/onb/onboarding-ui-apps/dashboard-ui/",LinkProps:l}=r,p=q(r,["active","children","crumbs","emptyState","homeUrl","LinkProps"]);return s.jsxs(A,P(d({},p),{separator:s.jsx(N,{fontSize:"xsmall"}),slotProps:{collapsedIcon:{className:"breadcrumbs__collapsed-icon"}},slots:{CollapsedIcon:M},"aria-label":p["aria-label"]||"breadcrumbs",children:[s.jsx(_,{"aria-label":"Home",href:n,loadApp:!1,children:"Home"}),o&&o.length>0&&o.map(({name:c=i,url:h,target:m})=>s.jsx(G,{name:c,url:h,target:m,LinkProps:l},c)),e,s.jsx(k,{children:a||i})]}))};export{ct as B,pt as S};
