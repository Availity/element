import{e as h,c as W,a as k,b as v,s as $}from"./styled-52ae1682.js";import{j as R,e as u,k as G,c as S}from"./useThemeProps-09701b40.js";import{r as T}from"./index-570b25c1.js";import{j as y}from"./jsx-runtime-390e5fc8.js";const M=h(),P=M,j=R(),L=P("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,s)=>{const{ownerState:o}=a;return[s.root,s[`maxWidth${u(String(o.maxWidth))}`],o.fixed&&s.fixed,o.disableGutters&&s.disableGutters]}}),N=a=>G({props:a,name:"MuiContainer",defaultTheme:j}),U=(a,s)=>{const o=i=>v(s,i),{classes:p,fixed:c,disableGutters:l,maxWidth:t}=a,e={root:["root",t&&`maxWidth${u(String(t))}`,c&&"fixed",l&&"disableGutters"]};return k(e,o,p)};function w(a={}){const{createStyledComponent:s=L,useThemeProps:o=N,componentName:p="MuiContainer"}=a,c=s(({theme:t,ownerState:e})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block",...!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}}),({theme:t,ownerState:e})=>e.fixed&&Object.keys(t.breakpoints.values).reduce((i,r)=>{const d=r,n=t.breakpoints.values[d];return n!==0&&(i[t.breakpoints.up(d)]={maxWidth:`${n}${t.breakpoints.unit}`}),i},{}),({theme:t,ownerState:e})=>({...e.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},...e.maxWidth&&e.maxWidth!=="xs"&&{[t.breakpoints.up(e.maxWidth)]:{maxWidth:`${t.breakpoints.values[e.maxWidth]}${t.breakpoints.unit}`}}}));return T.forwardRef(function(e,i){const r=o(e),{className:d,component:n="div",disableGutters:x=!1,fixed:f=!1,maxWidth:b="lg",classes:D,...C}=r,m={...r,component:n,disableGutters:x,fixed:f,maxWidth:b},g=U(m,p);return y(c,{as:n,ownerState:m,className:W(g.root,d),ref:i,...C})})}const z=w({createStyledComponent:$("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,s)=>{const{ownerState:o}=a;return[s.root,s[`maxWidth${u(String(o.maxWidth))}`],o.fixed&&s.fixed,o.disableGutters&&s.disableGutters]}}),useThemeProps:a=>S({props:a,name:"MuiContainer"})}),B=z;export{B as C,P as s};
//# sourceMappingURL=Container-f071c24c.js.map