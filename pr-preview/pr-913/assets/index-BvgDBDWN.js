import{r as j,c as O,j as s,e as R,V as y,U as w}from"./iframe-CoG_eD6W.js";import{m as U}from"./memoTheme-CN1XLapj.js";import{g as $}from"./generateUtilityClass-BtcU_pBl.js";import{g as B}from"./generateUtilityClasses-DDbjFgb8.js";import{c as I,s as L}from"./styled-CrcATWO9.js";import{r as M,N}from"./index-BiwFPdxj.js";import{L as _}from"./index-BANFRkPt.js";import{B as A}from"./Breadcrumbs-DvSe_YHm.js";import{T as x}from"./Typography-ByO5UaW_.js";function T(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function E(t){return parseFloat(t)}function X(t){return $("MuiSkeleton",t)}B("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const D=t=>{const{classes:r,variant:e,animation:a,hasChildren:o,width:n,height:i}=t;return I({root:["root",e,a,o&&"withChildren",o&&!n&&"fitContent",o&&!i&&"heightAuto"]},X,r)},g=w`
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
`,H=typeof g!="string"?y`
        animation: ${g} 2s ease-in-out 0.5s infinite;
      `:null,V=typeof v!="string"?y`
        &::after {
          animation: ${v} 2s linear 0.5s infinite;
        }
      `:null,z=L("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:e}=t;return[r.root,r[e.variant],e.animation!==!1&&r[e.animation],e.hasChildren&&r.withChildren,e.hasChildren&&!e.width&&r.fitContent,e.hasChildren&&!e.height&&r.heightAuto]}})(U(({theme:t})=>{const r=T(t.shape.borderRadius)||"px",e=E(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:t.alpha(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${e}${r}/${Math.round(e/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:a})=>a.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:a})=>a.hasChildren&&!a.width,style:{maxWidth:"fit-content"}},{props:({ownerState:a})=>a.hasChildren&&!a.height,style:{height:"auto"}},{props:{animation:"pulse"},style:H||{animation:`${g} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:V||{"&::after":{animation:`${v} 2s linear 0.5s infinite`}}}]}})),st=j.forwardRef(function(r,e){const a=O({props:r,name:"MuiSkeleton"}),{animation:o="pulse",className:n,component:i="span",height:l,style:u,variant:p="text",width:c,...d}=a,m={...a,animation:o,component:i,variant:p,hasChildren:!!d.children},S=D(m);return s.jsx(z,{as:i,ref:e,className:R(S.root,n),ownerState:m,...d,style:{width:c,height:l,...u}})});var K=Object.defineProperty,W=Object.defineProperties,F=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,b=(t,r,e)=>r in t?K(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,h=(t,r)=>{for(var e in r||(r={}))k.call(r,e)&&b(t,e,r[e]);if(f)for(var e of f(r))C.call(r,e)&&b(t,e,r[e]);return t},P=(t,r)=>W(t,F(r)),q=(t,r)=>{var e={};for(var a in t)k.call(t,a)&&r.indexOf(a)<0&&(e[a]=t[a]);if(t!=null&&f)for(var a of f(t))r.indexOf(a)<0&&C.call(t,a)&&(e[a]=t[a]);return e},G=({name:t,url:r,target:e="_top",LinkProps:a})=>{const o={"aria-label":t,children:t};return r?s.jsx(_,P(h(h({},o),a),{href:r,target:e})):s.jsx(x,h({},o))},nt=t=>{var r=t,{active:e,children:a,crumbs:o,emptyState:n="...",homeTarget:i="_self",homeUrl:l="/static/web/onb/onboarding-ui-apps/dashboard-ui/",LinkProps:u}=r,p=q(r,["active","children","crumbs","emptyState","homeTarget","homeUrl","LinkProps"]);return s.jsxs(A,P(h({},p),{separator:s.jsx(N,{fontSize:"xsmall"}),slotProps:{collapsedIcon:{className:"breadcrumbs__collapsed-icon"}},slots:{CollapsedIcon:M},"aria-label":p["aria-label"]||"breadcrumbs",children:[s.jsx(_,{"aria-label":"Home",href:l,target:i,loadApp:!1,children:"Home"}),o&&o.length>0&&o.map(({name:c=n,url:d,target:m})=>s.jsx(G,{name:c,url:d,target:m,LinkProps:u},c)),a,s.jsx(x,{children:e||n})]}))};export{nt as B,st as S};
