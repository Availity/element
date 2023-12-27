import{_ as s,a as l,b as g}from"./createTheme-e6b56ddb.js";import{r as m}from"./index-570b25c1.js";import{c as b}from"./clsx-8416b751.js";import{g as x,s as P,c as $}from"./styled-188025da.js";import{u as y}from"./useThemeProps-db7202c2.js";import{g as M}from"./generateUtilityClasses-f776b170.js";import{j as C}from"./jsx-runtime-390e5fc8.js";const R=e=>{let a;return e<1?a=5.11916*e**2:a=4.5*Math.log(e+1)+2,(a/100).toFixed(2)},v=R;function k(e){return x("MuiPaper",e)}M("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const q=["className","component","elevation","square","variant"],_=e=>{const{square:a,elevation:o,variant:t,classes:n}=e,r={root:["root",t,!a&&"rounded",t==="elevation"&&`elevation${o}`]};return $(r,k,n)},U=P("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.variant],!o.square&&a.rounded,o.variant==="elevation"&&a[`elevation${o.elevation}`]]}})(({theme:e,ownerState:a})=>{var o;return s({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!a.square&&{borderRadius:e.shape.borderRadius},a.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},a.variant==="elevation"&&s({boxShadow:(e.vars||e).shadows[a.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${l("#fff",v(a.elevation))}, ${l("#fff",v(a.elevation))})`},e.vars&&{backgroundImage:(o=e.vars.overlays)==null?void 0:o[a.elevation]}))}),j=m.forwardRef(function(a,o){const t=y({props:a,name:"MuiPaper"}),{className:n,component:r="div",elevation:p=1,square:c=!1,variant:d="elevation"}=t,u=g(t,q),i=s({},t,{component:r,elevation:p,square:c,variant:d}),f=_(i);return C(U,s({as:r,ownerState:i,className:b(f.root,n),ref:o},u))}),L=j;export{L as M};
//# sourceMappingURL=Paper-4c319fed.js.map