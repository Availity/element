import{r as f}from"./index-570b25c1.js";import{c as g}from"./clsx.m-5a18bdae.js";import{g as m,s as P,c as b}from"./styled-34470687.js";import{u as x}from"./useThemeProps-4eed9f55.js";import{g as $}from"./generateUtilityClasses-379cd6e3.js";import{j as y}from"./jsx-runtime-390e5fc8.js";import{a as s}from"./createTheme-cf9cd31a.js";const M=a=>{let e;return a<1?e=5.11916*a**2:e=4.5*Math.log(a+1)+2,(e/100).toFixed(2)},l=M;function C(a){return m("MuiPaper",a)}$("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const R=a=>{const{square:e,elevation:o,variant:r,classes:i}=a,t={root:["root",r,!e&&"rounded",r==="elevation"&&`elevation${o}`]};return b(t,C,i)},k=P("div",{name:"MuiPaper",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[o.variant],!o.square&&e.rounded,o.variant==="elevation"&&e[`elevation${o.elevation}`]]}})(({theme:a,ownerState:e})=>{var o;return{backgroundColor:(a.vars||a).palette.background.paper,color:(a.vars||a).palette.text.primary,transition:a.transitions.create("box-shadow"),...!e.square&&{borderRadius:a.shape.borderRadius},...e.variant==="outlined"&&{border:`1px solid ${(a.vars||a).palette.divider}`},...e.variant==="elevation"&&{boxShadow:(a.vars||a).shadows[e.elevation],...!a.vars&&a.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${s("#fff",l(e.elevation))}, ${s("#fff",l(e.elevation))})`},...a.vars&&{backgroundImage:(o=a.vars.overlays)==null?void 0:o[e.elevation]}}}}),q=f.forwardRef(function(e,o){const r=x({props:e,name:"MuiPaper"}),{className:i,component:t="div",elevation:v=1,square:p=!1,variant:d="elevation",...u}=r,n={...r,component:t,elevation:v,square:p,variant:d},c=R(n);return y(k,{as:t,ownerState:n,className:g(c.root,i),ref:o,...u})}),E=q;export{E as M};
//# sourceMappingURL=Paper-bff53714.js.map
