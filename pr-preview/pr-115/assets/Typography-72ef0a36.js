import{f as u,b as p,e as T}from"./createTheme-b02e766d.js";import{r as B}from"./index-570b25c1.js";import{c as M}from"./clsx-43049957.js";import{g as W,s as C,a as P}from"./styled-69a32198.js";import{u as R}from"./useThemeProps-ac7867ed.js";import{g as U}from"./generateUtilityClasses-b06d554b.js";import{j}from"./jsx-runtime-390e5fc8.js";import{e as N}from"./extendSxProp-b0ad88fc.js";function _(r){return W("MuiTypography",r)}U("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const L=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],$=r=>{const{align:t,gutterBottom:a,noWrap:n,paragraph:i,variant:o,classes:s}=r,e={root:["root",o,r.align!=="inherit"&&`align${u(t)}`,a&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return P(e,_,s)},z=C("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:a}=r;return[t.root,a.variant&&t[a.variant],a.align!=="inherit"&&t[`align${u(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})(({theme:r,ownerState:t})=>p({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&r.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},A={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},D=r=>A[r]||r,E=B.forwardRef(function(t,a){const n=R({props:t,name:"MuiTypography"}),i=D(n.color),o=N(p({},n,{color:i})),{align:s="inherit",className:e,component:g,gutterBottom:f=!1,noWrap:d=!1,paragraph:m=!1,variant:h="body1",variantMapping:l=y}=o,v=T(o,L),c=p({},o,{align:s,color:i,className:e,component:g,gutterBottom:f,noWrap:d,paragraph:m,variant:h,variantMapping:l}),x=g||(m?"p":l[h]||y[h])||"span",b=$(c);return j(z,p({as:x,ref:a,ownerState:c,className:M(b.root,e)},v))}),H=E;export{H as M};
//# sourceMappingURL=Typography-72ef0a36.js.map
