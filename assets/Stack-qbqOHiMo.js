import{c as V,s as T}from"./styled-CKuRQFSa.js";import{r as p}from"./index-BgYLq7fD.js";import{c as b,g as D}from"./generateUtilityClass-BeVSWKCg.js";import{j as B}from"./jsx-runtime-BTJTZTIL.js";import{s as F}from"./styled-Dbr83ACF.js";import{e as M}from"./extendSxProp-BY7TjwKM.js";import{u as E}from"./useThemeProps-Do5o_sjG.js";import{h as k,r as u,j as G,k as N,m as O,e as U,n as v}from"./identifier-CudAVvBZ.js";import{u as $}from"./DefaultPropsProvider-CWkNlXkE.js";const A=U(),I=F("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function L(e){return E({props:e,name:"MuiStack",defaultTheme:A})}function q(e,o){const n=p.Children.toArray(e).filter(Boolean);return n.reduce((c,a,t)=>(c.push(a),t<n.length-1&&c.push(p.cloneElement(o,{key:`separator-${t}`})),c),[])}const z=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],H=({ownerState:e,theme:o})=>{let n={display:"flex",flexDirection:"column",...k({theme:o},u({values:e.direction,breakpoints:o.breakpoints.values}),c=>({flexDirection:c}))};if(e.spacing){const c=G(o),a=Object.keys(o.breakpoints.values).reduce((s,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(s[r]=!0),s),{}),t=u({values:e.direction,base:a}),m=u({values:e.spacing,base:a});typeof t=="object"&&Object.keys(t).forEach((s,r,i)=>{if(!t[s]){const l=r>0?t[i[r-1]]:"column";t[s]=l}}),n=N(n,k({theme:o},m,(s,r)=>e.useFlexGap?{gap:v(c,s)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${z(r?t[r]:e.direction)}`]:v(c,s)}}))}return n=O(o.breakpoints,n),n};function J(e={}){const{createStyledComponent:o=I,useThemeProps:n=L,componentName:c="MuiStack"}=e,a=()=>V({root:["root"]},s=>D(c,s),{}),t=o(H);return p.forwardRef(function(s,r){const i=n(s),f=M(i),{component:l="div",direction:h="column",spacing:x=0,divider:y,children:g,className:j,useFlexGap:C=!1,...P}=f,S={direction:h,spacing:x,useFlexGap:C},R=a();return B.jsx(t,{as:l,ownerState:S,ref:r,className:b(R.root,j),...P,children:y?q(g,y):g})})}const oe=J({createStyledComponent:T("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>$({props:e,name:"MuiStack"})});export{oe as S};
