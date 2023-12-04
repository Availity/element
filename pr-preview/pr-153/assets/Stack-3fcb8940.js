import{c as b,g as R,s as F}from"./styled-523cb007.js";import{a as B,u as D}from"./useThemeProps-98dc6282.js";import{g as M,d as h,j as k,r as p,k as $,l as G,m as N,c as E,n as v}from"./createTheme-3fee607a.js";import{r as m}from"./index-570b25c1.js";import{c as O}from"./clsx-b831246b.js";import{s as U}from"./styled-5c6c15e1.js";import{a as _}from"./jsx-runtime-a3bcee63.js";import{e as A}from"./extendSxProp-b1abb964.js";const L=["component","direction","spacing","divider","children","className","useFlexGap"],I=M(),W=U("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function q(e){return B({props:e,name:"MuiStack",defaultTheme:I})}function z(e,s){const n=m.Children.toArray(e).filter(Boolean);return n.reduce((c,a,t)=>(c.push(a),t<n.length-1&&c.push(m.cloneElement(s,{key:`separator-${t}`})),c),[])}const H=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],J=({ownerState:e,theme:s})=>{let n=h({display:"flex",flexDirection:"column"},k({theme:s},p({values:e.direction,breakpoints:s.breakpoints.values}),c=>({flexDirection:c})));if(e.spacing){const c=$(s),a=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),t=p({values:e.direction,base:a}),d=p({values:e.spacing,base:a});typeof t=="object"&&Object.keys(t).forEach((o,r,i)=>{if(!t[o]){const u=r>0?t[i[r-1]]:"column";t[o]=u}}),n=G(n,k({theme:s},d,(o,r)=>e.useFlexGap?{gap:v(c,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${H(r?t[r]:e.direction)}`]:v(c,o)}}))}return n=N(s.breakpoints,n),n};function K(e={}){const{createStyledComponent:s=W,useThemeProps:n=q,componentName:c="MuiStack"}=e,a=()=>b({root:["root"]},o=>R(c,o),{}),t=s(J);return m.forwardRef(function(o,r){const i=n(o),l=A(i),{component:u="div",direction:x="column",spacing:S=0,divider:y,children:g,className:P,useFlexGap:j=!1}=l,C=E(l,L),T={direction:x,spacing:S,useFlexGap:j},V=a();return _(t,h({as:u,ownerState:T,ref:r,className:O(V.root,P)},C,{children:y?z(g,y):g}))})}const Q=K({createStyledComponent:F("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>D({props:e,name:"MuiStack"})}),re=Q;export{re as S};
//# sourceMappingURL=Stack-3fcb8940.js.map
