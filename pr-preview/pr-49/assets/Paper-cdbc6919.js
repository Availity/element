import{r as f}from"./index-8db94870.js";import{a as g,g as P,s as b,c as x,b as $}from"./styled-66459c09.js";import{a as i,u as m}from"./useThemeProps-c9f65ede.js";import{j as y}from"./jsx-runtime-91a467a5.js";const C=a=>{let e;return a<1?e=5.11916*a**2:e=4.5*Math.log(a+1)+2,(e/100).toFixed(2)},l=C;function R(a){return g("MuiPaper",a)}P("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const k=a=>{const{square:e,elevation:o,variant:t,classes:n}=a,r={root:["root",t,!e&&"rounded",t==="elevation"&&`elevation${o}`]};return $(r,R,n)},M=b("div",{name:"MuiPaper",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[o.variant],!o.square&&e.rounded,o.variant==="elevation"&&e[`elevation${o.elevation}`]]}})(({theme:a,ownerState:e})=>{var o;return{backgroundColor:(a.vars||a).palette.background.paper,color:(a.vars||a).palette.text.primary,transition:a.transitions.create("box-shadow"),...!e.square&&{borderRadius:a.shape.borderRadius},...e.variant==="outlined"&&{border:`1px solid ${(a.vars||a).palette.divider}`},...e.variant==="elevation"&&{boxShadow:(a.vars||a).shadows[e.elevation],...!a.vars&&a.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${i("#fff",l(e.elevation))}, ${i("#fff",l(e.elevation))})`},...a.vars&&{backgroundImage:(o=a.vars.overlays)==null?void 0:o[e.elevation]}}}}),q=f.forwardRef(function(e,o){const t=m({props:e,name:"MuiPaper"}),{className:n,component:r="div",elevation:v=1,square:p=!1,variant:d="elevation",...u}=t,s={...t,component:r,elevation:v,square:p,variant:d},c=k(s);return y(M,{as:r,ownerState:s,className:x(c.root,n),ref:o,...u})}),N=q;export{N as P};
//# sourceMappingURL=Paper-cdbc6919.js.map
