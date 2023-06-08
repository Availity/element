import{r as b}from"./index-8db94870.js";import{g as A,a as B,s as M,c as U,b as j}from"./styled-66459c09.js";import{g as y,a as z,c as h,u as N}from"./useThemeProps-c9f65ede.js";import{j as P}from"./jsx-runtime-91a467a5.js";import{T as H}from"./Typography-dc377249.js";import{u as W}from"./useIsFocusVisible-bbf13f29.js";import{u as w}from"./useForkRef-2674f3de.js";function E(e){return B("MuiLink",e)}const I=A("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),O=I,x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=e=>x[e]||e,q=({theme:e,ownerState:o})=>{const n=S(o.color),r=y(e,`palette.${n}`,!1)||o.color,s=y(e,`palette.${n}Channel`);return"vars"in e&&s?`rgba(${s} / 0.4)`:z(r,.4)},G=q,J=e=>{const{classes:o,component:n,focusVisible:r,underline:s}=e,t={root:["root",`underline${h(s)}`,n==="button"&&"button",r&&"focusVisible"]};return j(t,E,o)},K=M(H,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[`underline${h(n.underline)}`],n.component==="button"&&o.button]}})(({theme:e,ownerState:o})=>({...o.underline==="none"&&{textDecoration:"none"},...o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},...o.underline==="always"&&{textDecoration:"underline",...o.color!=="inherit"&&{textDecorationColor:G({theme:e,ownerState:o})},"&:hover":{textDecorationColor:"inherit"}},...o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${O.focusVisible}`]:{outline:"auto"}}})),Q=b.forwardRef(function(o,n){const r=N({props:o,name:"MuiLink"}),{className:s,color:t="primary",component:l="a",onBlur:c,onFocus:u,TypographyClasses:g,underline:k="always",variant:p="inherit",sx:a,...C}=r,{isFocusVisibleRef:d,onBlur:V,onFocus:L,ref:v}=W(),[D,m]=b.useState(!1),F=w(n,v),R=i=>{V(i),d.current===!1&&m(!1),c&&c(i)},$=i=>{L(i),d.current===!0&&m(!0),u&&u(i)},f={...r,color:t,component:l,focusVisible:D,underline:k,variant:p},T=J(f);return P(K,{color:t,className:U(T.root,s),classes:g,component:l,onBlur:R,onFocus:$,ref:F,ownerState:f,variant:p,sx:[...Object.keys(x).includes(t)?[]:[{color:t}],...Array.isArray(a)?a:[a]],...C})}),ro=Q;export{ro as L};
//# sourceMappingURL=Link-fb6b162d.js.map
