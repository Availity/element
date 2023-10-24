import{c as W,g as k,s as v}from"./styled-ba967c06.js";import{a as $,u as G}from"./useThemeProps-32d9d40f.js";import{d as p,h as R,f as m,c as S}from"./createTheme-bcd1d157.js";import{r as T}from"./index-570b25c1.js";import{c as M}from"./clsx-7dc4e18d.js";import{s as P}from"./styled-b379d1d1.js";import{j}from"./jsx-runtime-390e5fc8.js";const y=["className","component","disableGutters","fixed","maxWidth","classes"],L=R(),N=P("div",{name:"MuiContainer",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,e[`maxWidth${m(String(a.maxWidth))}`],a.fixed&&e.fixed,a.disableGutters&&e.disableGutters]}}),U=o=>$({props:o,name:"MuiContainer",defaultTheme:L}),_=(o,e)=>{const a=i=>k(e,i),{classes:c,fixed:u,disableGutters:l,maxWidth:t}=o,s={root:["root",t&&`maxWidth${m(String(t))}`,u&&"fixed",l&&"disableGutters"]};return W(s,a,c)};function w(o={}){const{createStyledComponent:e=N,useThemeProps:a=U,componentName:c="MuiContainer"}=o,u=e(({theme:t,ownerState:s})=>p({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!s.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:s})=>s.fixed&&Object.keys(t.breakpoints.values).reduce((i,r)=>{const d=r,n=t.breakpoints.values[d];return n!==0&&(i[t.breakpoints.up(d)]={maxWidth:`${n}${t.breakpoints.unit}`}),i},{}),({theme:t,ownerState:s})=>p({},s.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},s.maxWidth&&s.maxWidth!=="xs"&&{[t.breakpoints.up(s.maxWidth)]:{maxWidth:`${t.breakpoints.values[s.maxWidth]}${t.breakpoints.unit}`}}));return T.forwardRef(function(s,i){const r=a(s),{className:d,component:n="div",disableGutters:f=!1,fixed:b=!1,maxWidth:C="lg"}=r,g=S(r,y),x=p({},r,{component:n,disableGutters:f,fixed:b,maxWidth:C}),h=_(x,c);return j(u,p({as:n,ownerState:x,className:M(h.root,d),ref:i},g))})}const z=w({createStyledComponent:v("div",{name:"MuiContainer",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,e[`maxWidth${m(String(a.maxWidth))}`],a.fixed&&e.fixed,a.disableGutters&&e.disableGutters]}}),useThemeProps:o=>G({props:o,name:"MuiContainer"})}),H=z;export{H as C};
//# sourceMappingURL=Container-1fb095c3.js.map
