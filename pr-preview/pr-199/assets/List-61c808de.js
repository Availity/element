import{_ as r,b as h}from"./createTheme-3fee607a.js";import{r as i}from"./index-570b25c1.js";import{c as f}from"./clsx-b831246b.js";import{g as L,s as x,c as C}from"./styled-523cb007.js";import{u as P}from"./useThemeProps-98dc6282.js";import{g as v}from"./generateUtilityClasses-b58f947a.js";import{j as M,a as j}from"./jsx-runtime-390e5fc8.js";const R=i.createContext({}),U=R;function _(s){return L("MuiList",s)}v("MuiList",["root","padding","dense","subheader"]);const w=["children","className","component","dense","disablePadding","subheader"],y=s=>{const{classes:e,disablePadding:t,dense:o,subheader:a}=s;return C({root:["root",!t&&"padding",o&&"dense",a&&"subheader"]},_,e)},N=x("ul",{name:"MuiList",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})(({ownerState:s})=>r({listStyle:"none",margin:0,padding:0,position:"relative"},!s.disablePadding&&{paddingTop:8,paddingBottom:8},s.subheader&&{paddingTop:0})),S=i.forwardRef(function(e,t){const o=P({props:e,name:"MuiList"}),{children:a,className:d,component:c="ul",dense:n=!1,disablePadding:p=!1,subheader:u}=o,m=h(o,w),g=i.useMemo(()=>({dense:n}),[n]),l=r({},o,{component:c,dense:n,disablePadding:p}),b=y(l);return M(U.Provider,{value:g,children:j(N,r({as:c,className:f(b.root,d),ref:t,ownerState:l},m,{children:[u,a]}))})}),z=S;export{z as L,U as a};
//# sourceMappingURL=List-61c808de.js.map
