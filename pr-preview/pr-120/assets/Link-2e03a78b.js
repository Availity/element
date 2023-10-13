import{p as y,c as A,f as x,b as a,e as B}from"./createTheme-b02e766d.js";import{r as h}from"./index-570b25c1.js";import{c as j}from"./clsx-43049957.js";import{g as N,s as P,a as U}from"./styled-69a32198.js";import{u as z}from"./useThemeProps-ac7867ed.js";import{g as W}from"./generateUtilityClasses-b06d554b.js";import{j as _}from"./jsx-runtime-390e5fc8.js";import{M as H}from"./Typography-72ef0a36.js";import{u as w}from"./useIsFocusVisible-5e7b1ff1.js";import{u as E}from"./useForkRef-153a0a89.js";function I(e){return N("MuiLink",e)}const O=W("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),S=O,g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},q=e=>g[e]||e,G=({theme:e,ownerState:o})=>{const r=q(o.color),n=y(e,`palette.${r}`,!1)||o.color,s=y(e,`palette.${r}Channel`);return"vars"in e&&s?`rgba(${s} / 0.4)`:A(n,.4)},J=G,K=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Q=e=>{const{classes:o,component:r,focusVisible:n,underline:s}=e,t={root:["root",`underline${x(s)}`,r==="button"&&"button",n&&"focusVisible"]};return U(t,I,o)},X=P(H,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[`underline${x(r.underline)}`],r.component==="button"&&o.button]}})(({theme:e,ownerState:o})=>a({},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},o.underline==="always"&&a({textDecoration:"underline"},o.color!=="inherit"&&{textDecorationColor:J({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${S.focusVisible}`]:{outline:"auto"}})),Y=h.forwardRef(function(o,r){const n=z({props:o,name:"MuiLink"}),{className:s,color:t="primary",component:c="a",onBlur:u,onFocus:p,TypographyClasses:C,underline:k="always",variant:m="inherit",sx:l}=n,L=B(n,K),{isFocusVisibleRef:d,onBlur:V,onFocus:v,ref:F}=w(),[D,f]=h.useState(!1),R=E(r,F),$=i=>{V(i),d.current===!1&&f(!1),u&&u(i)},T=i=>{v(i),d.current===!0&&f(!0),p&&p(i)},b=a({},n,{color:t,component:c,focusVisible:D,underline:k,variant:m}),M=Q(b);return _(X,a({color:t,className:j(M.root,s),classes:C,component:c,onBlur:$,onFocus:T,ref:R,ownerState:b,variant:m,sx:[...Object.keys(g).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},L))}),co=Y;export{co as L};
//# sourceMappingURL=Link-2e03a78b.js.map
