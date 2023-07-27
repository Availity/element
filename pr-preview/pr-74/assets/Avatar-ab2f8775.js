import{r as p}from"./index-8db94870.js";import{b as w,g as x,s as g,c as C,a as I}from"./styled-48536e78.js";import{c as D}from"./useThemeProps-4e8cc45e.js";import{c as M}from"./createSvgIcon-a18730f7.js";import{j as u}from"./jsx-runtime-91a467a5.js";const S=M(u("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function F(a){return w("MuiAvatar",a)}x("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const z=a=>{const{classes:r,variant:t,colorDefault:e}=a;return I({root:["root",t,e&&"colorDefault"],img:["img"],fallback:["fallback"]},F,r)},N=g("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(a,r)=>{const{ownerState:t}=a;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})(({theme:a,ownerState:r})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",...r.variant==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius},...r.variant==="square"&&{borderRadius:0},...r.colorDefault&&{color:(a.vars||a).palette.background.default,...a.vars?{backgroundColor:a.vars.palette.Avatar.defaultBg}:{backgroundColor:a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[600]}}})),P=g("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(a,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),j=g(S,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(a,r)=>r.fallback})({width:"75%",height:"75%"});function U({crossOrigin:a,referrerPolicy:r,src:t,srcSet:e}){const[s,l]=p.useState(!1);return p.useEffect(()=>{if(!t&&!e)return;l(!1);let n=!0;const o=new Image;return o.onload=()=>{n&&l("loaded")},o.onerror=()=>{n&&l("error")},o.crossOrigin=a,o.referrerPolicy=r,o.src=t,e&&(o.srcset=e),()=>{n=!1}},[a,r,t,e]),s}const q=p.forwardRef(function(r,t){const e=D({props:r,name:"MuiAvatar"}),{alt:s,children:l,className:n,component:o="div",imgProps:m,sizes:A,src:d,srcSet:f,variant:y="circular",...k}=e;let i=null;const R=U({...m,src:d,srcSet:f}),b=d||f,h=b&&R!=="error",c={...e,colorDefault:!h,component:o,variant:y},v=z(c);return h?i=u(P,{alt:s,src:d,srcSet:f,sizes:A,ownerState:c,className:v.img,...m}):l!=null?i=l:b&&s?i=s[0]:i=u(j,{ownerState:c,className:v.fallback}),u(N,{as:o,ownerState:c,className:C(v.root,n),ref:t,...k,children:i})}),$=q;export{$ as A};
//# sourceMappingURL=Avatar-ab2f8775.js.map
