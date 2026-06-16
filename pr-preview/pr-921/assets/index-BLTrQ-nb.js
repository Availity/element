import{r as x,c as C,j as s,e as w,V as g,U as b}from"./iframe-C9_PxSGQ.js";import{m as R}from"./memoTheme-BxvcW3UF.js";import{g as S}from"./generateUtilityClass-BtcU_pBl.js";import{g as j}from"./generateUtilityClasses-DDbjFgb8.js";import{c as $,s as U}from"./styled-B-vqXkzy.js";import{r as B,N as M}from"./index-Ddg0Heb3.js";import{L as v}from"./index-BFpa8mDd.js";import{B as A}from"./Breadcrumbs-CzrcU_HO.js";import{T as y}from"./Typography-B7ymJCK8.js";function N(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function I(t){return parseFloat(t)}function L(t){return S("MuiSkeleton",t)}j("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const P=t=>{const{classes:e,variant:a,animation:o,hasChildren:r,width:i,height:n}=t;return $({root:["root",a,o,r&&"withChildren",r&&!i&&"fitContent",r&&!n&&"heightAuto"]},L,e)},h=b`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,m=b`
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
`,T=typeof h!="string"?g`
        animation: ${h} 2s ease-in-out 0.5s infinite;
      `:null,X=typeof m!="string"?g`
        &::after {
          animation: ${m} 2s linear 0.5s infinite;
        }
      `:null,_=U("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(R(({theme:t})=>{const e=N(t.shape.borderRadius)||"px",a=I(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:t.alpha(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${e}/${Math.round(a/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:o})=>o.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:o})=>o.hasChildren&&!o.width,style:{maxWidth:"fit-content"}},{props:({ownerState:o})=>o.hasChildren&&!o.height,style:{height:"auto"}},{props:{animation:"pulse"},style:T||{animation:`${h} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:X||{"&::after":{animation:`${m} 2s linear 0.5s infinite`}}}]}})),G=x.forwardRef(function(e,a){const o=C({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:i,component:n="span",height:l,style:p,variant:d="text",width:c,...u}=o,f={...o,animation:r,component:n,variant:d,hasChildren:!!u.children},k=P(f);return s.jsx(_,{as:n,ref:a,className:w(k.root,i),ownerState:f,...u,style:{width:c,height:l,...p}})});var H=({name:t,url:e,target:a="_top",LinkProps:o})=>{const r={"aria-label":t,children:t};return e?s.jsx(v,{...r,...o,href:e,target:a}):s.jsx(y,{...r})},J=({active:t,children:e,crumbs:a,emptyState:o="...",homeTarget:r="_self",homeUrl:i="/static/web/onb/onboarding-ui-apps/dashboard-ui/",LinkProps:n,...l})=>s.jsxs(A,{...l,separator:s.jsx(M,{fontSize:"xsmall"}),slotProps:{collapsedIcon:{className:"breadcrumbs__collapsed-icon"}},slots:{CollapsedIcon:B},"aria-label":l["aria-label"]||"breadcrumbs",children:[s.jsx(v,{"aria-label":"Home",href:i,target:r,loadApp:!1,children:"Home"}),a&&a.length>0&&a.map(({name:p=o,url:d,target:c})=>s.jsx(H,{name:p,url:d,target:c,LinkProps:n},p)),e,s.jsx(y,{children:t||o})]});export{J as B,G as S};
