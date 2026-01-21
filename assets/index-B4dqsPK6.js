import{r as j,u as O,j as s,c as R,H as y,I as w}from"./iframe-B15MwHjc.js";import{m as $}from"./memoTheme-D5o8CaBh.js";import{g as U}from"./generateUtilityClass-BtcU_pBl.js";import{g as I}from"./generateUtilityClasses-DDbjFgb8.js";import{s as B,c as L}from"./styled-Dsm9_3nR.js";import{p as M,N}from"./index-B-JYDf49.js";import{L as _}from"./index-BoGBWFCD.js";import{B as A}from"./Breadcrumbs-ZDM1fNfa.js";import{T as x}from"./Typography-DGTJIKj9.js";function E(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function H(t){return parseFloat(t)}function T(t){return U("MuiSkeleton",t)}I("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const X=t=>{const{classes:r,variant:a,animation:e,hasChildren:o,width:n,height:i}=t;return L({root:["root",a,e,o&&"withChildren",o&&!n&&"fitContent",o&&!i&&"heightAuto"]},T,r)},u=w`
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
`,D=typeof u!="string"?y`
        animation: ${u} 2s ease-in-out 0.5s infinite;
      `:null,z=typeof g!="string"?y`
        &::after {
          animation: ${g} 2s linear 0.5s infinite;
        }
      `:null,K=B("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:a}=t;return[r.root,r[a.variant],a.animation!==!1&&r[a.animation],a.hasChildren&&r.withChildren,a.hasChildren&&!a.width&&r.fitContent,a.hasChildren&&!a.height&&r.heightAuto]}})($(({theme:t})=>{const r=E(t.shape.borderRadius)||"px",a=H(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:t.alpha(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${r}/${Math.round(a/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:e})=>e.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:e})=>e.hasChildren&&!e.width,style:{maxWidth:"fit-content"}},{props:({ownerState:e})=>e.hasChildren&&!e.height,style:{height:"auto"}},{props:{animation:"pulse"},style:D||{animation:`${u} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:z||{"&::after":{animation:`${g} 2s linear 0.5s infinite`}}}]}})),st=j.forwardRef(function(r,a){const e=O({props:r,name:"MuiSkeleton"}),{animation:o="pulse",className:n,component:i="span",height:l,style:p,variant:c="text",width:f,...d}=e,v={...e,animation:o,component:i,variant:c,hasChildren:!!d.children},S=X(v);return s.jsx(K,{as:i,ref:a,className:R(S.root,n),ownerState:v,...d,style:{width:f,height:l,...p}})});var V=Object.defineProperty,W=Object.defineProperties,F=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,b=(t,r,a)=>r in t?V(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,m=(t,r)=>{for(var a in r||(r={}))k.call(r,a)&&b(t,a,r[a]);if(h)for(var a of h(r))C.call(r,a)&&b(t,a,r[a]);return t},P=(t,r)=>W(t,F(r)),q=(t,r)=>{var a={};for(var e in t)k.call(t,e)&&r.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&h)for(var e of h(t))r.indexOf(e)<0&&C.call(t,e)&&(a[e]=t[e]);return a},G=({name:t,url:r,target:a="_top",LinkProps:e})=>{const o={"aria-label":t,children:t};return r?s.jsx(_,P(m(m({},o),e),{href:r,target:a})):s.jsx(x,m({},o))},nt=t=>{var r=t,{active:a,children:e,crumbs:o,emptyState:n="...",homeUrl:i="/static/web/onb/onboarding-ui-apps/dashboard-ui/",LinkProps:l}=r,p=q(r,["active","children","crumbs","emptyState","homeUrl","LinkProps"]);return s.jsxs(A,P(m({},p),{separator:s.jsx(N,{fontSize:"xsmall"}),slotProps:{collapsedIcon:{className:"breadcrumbs__collapsed-icon"}},slots:{CollapsedIcon:M},"aria-label":p["aria-label"]||"breadcrumbs",children:[s.jsx(_,{"aria-label":"Home",href:i,loadApp:!1,children:"Home"}),o&&o.length>0&&o.map(({name:c=n,url:f,target:d})=>s.jsx(G,{name:c,url:f,target:d,LinkProps:l},c)),e,s.jsx(x,{children:a||n})]}))};export{nt as B,st as S};
