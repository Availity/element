import{r as s}from"./index-570b25c1.js";import{c as D}from"./clsx.m-fb33c42b.js";import{u as I}from"./useThemeProps-bb804320.js";import{g as q,s as w,c as L}from"./styled-d0245a8f.js";import{i as k,a as N,F as G}from"./utils-3d35716f.js";import{g as H}from"./generateUtilityClasses-145aac4e.js";import{j as R}from"./jsx-runtime-390e5fc8.js";import{i as F}from"./isMuiElement-9a8390c4.js";import{c as U}from"./createTheme-4dc6b23f.js";function J(o){return q("MuiFormControl",o)}H("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const K=o=>{const{classes:t,margin:l,fullWidth:a}=o,e={root:["root",l!=="none"&&`margin${U(l)}`,a&&"fullWidth"]};return L(e,J,t)},O=w("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:o},t)=>({...t.root,...t[`margin${U(o.margin)}`],...o.fullWidth&&t.fullWidth})})(({ownerState:o})=>({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top",...o.margin==="normal"&&{marginTop:16,marginBottom:8},...o.margin==="dense"&&{marginTop:8,marginBottom:4},...o.fullWidth&&{width:"100%"}})),Q=s.forwardRef(function(t,l){const a=I({props:t,name:"MuiFormControl"}),{children:e,className:B,color:m="primary",component:h="div",disabled:i=!1,error:u=!1,focused:v,fullWidth:d=!1,hiddenLabel:f=!1,margin:P="none",required:c=!1,size:p="medium",variant:g="outlined",...T}=a,S={...a,color:m,component:h,disabled:i,error:u,fullWidth:d,hiddenLabel:f,margin:P,required:c,size:p,variant:g},$=K(S),[x,j]=s.useState(()=>{let n=!1;return e&&s.Children.forEach(e,r=>{if(!F(r,["Input","Select"]))return;const A=F(r,["Select"])?r.props.input:r;A&&k(A.props)&&(n=!0)}),n}),[W,y]=s.useState(()=>{let n=!1;return e&&s.Children.forEach(e,r=>{F(r,["Input","Select"])&&(N(r.props,!0)||N(r.props.inputProps,!0))&&(n=!0)}),n}),[E,C]=s.useState(!1);i&&E&&C(!1);const M=v!==void 0&&!i?v:E;let b;const z=s.useMemo(()=>({adornedStart:x,setAdornedStart:j,color:m,disabled:i,error:u,filled:W,focused:M,fullWidth:d,hiddenLabel:f,size:p,onBlur:()=>{C(!1)},onEmpty:()=>{y(!1)},onFilled:()=>{y(!0)},onFocus:()=>{C(!0)},registerEffect:b,required:c,variant:g}),[x,m,i,u,W,M,d,f,b,c,p,g]);return R(G.Provider,{value:z,children:R(O,{as:h,ownerState:S,className:D($.root,B),ref:l,...T,children:e})})}),so=Q;export{so as F};
//# sourceMappingURL=FormControl-e8c4f774.js.map
