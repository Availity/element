import{r as n}from"./index-DcWiA9TO.js";import{g as b,c as h}from"./generateUtilityClass-CVWqFxsA.js";import{g as x}from"./generateUtilityClasses-BGOCnVj7.js";import{j as p}from"./jsx-runtime-CcL-W3nW.js";import{u as L}from"./DefaultPropsProvider-_cNB_dWy.js";import{s as C,c as v}from"./styled-CF1hcdwO.js";const P=n.createContext({});function y(s){return b("MuiList",s)}x("MuiList",["root","padding","dense","subheader"]);const M=s=>{const{classes:e,disablePadding:t,dense:o,subheader:a}=s;return v({root:["root",!t&&"padding",o&&"dense",a&&"subheader"]},y,e)},R=C("ul",{name:"MuiList",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:s})=>!s.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:s})=>s.subheader,style:{paddingTop:0}}]}),T=n.forwardRef(function(e,t){const o=L({props:e,name:"MuiList"}),{children:a,className:i,component:d="ul",dense:r=!1,disablePadding:c=!1,subheader:u,...m}=o,g=n.useMemo(()=>({dense:r}),[r]),l={...o,component:d,dense:r,disablePadding:c},f=M(l);return p.jsx(P.Provider,{value:g,children:p.jsxs(R,{as:d,className:h(f.root,i),ref:t,ownerState:l,...m,children:[u,a]})})});export{T as L,P as a};
