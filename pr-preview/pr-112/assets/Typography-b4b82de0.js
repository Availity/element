import{r as T}from"./index-570b25c1.js";import{c as b}from"./clsx.m-5a18bdae.js";import{g as B,s as C,c as M}from"./styled-34470687.js";import{u as W}from"./useThemeProps-4eed9f55.js";import{g as R}from"./generateUtilityClasses-379cd6e3.js";import{j as P}from"./jsx-runtime-390e5fc8.js";import{e as U}from"./extendSxProp-3c84bad0.js";import{c as y}from"./createTheme-cf9cd31a.js";function j(t){return B("MuiTypography",t)}R("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const N=t=>{const{align:r,gutterBottom:o,noWrap:a,paragraph:n,variant:i,classes:e}=t,p={root:["root",i,t.align!=="inherit"&&`align${y(r)}`,o&&"gutterBottom",a&&"noWrap",n&&"paragraph"]};return M(p,j,e)},$=C("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,o.variant&&r[o.variant],o.align!=="inherit"&&r[`align${y(o.align)}`],o.noWrap&&r.noWrap,o.gutterBottom&&r.gutterBottom,o.paragraph&&r.paragraph]}})(({theme:t,ownerState:r})=>({margin:0,...r.variant&&t.typography[r.variant],...r.align!=="inherit"&&{textAlign:r.align},...r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},...r.gutterBottom&&{marginBottom:"0.35em"},...r.paragraph&&{marginBottom:16}})),c={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},z=t=>w[t]||t,A=T.forwardRef(function(r,o){const a=W({props:r,name:"MuiTypography"}),n=z(a.color),i=U({...a,color:n}),{align:e="inherit",className:p,component:g,gutterBottom:u=!1,noWrap:f=!1,paragraph:h=!1,variant:s="body1",variantMapping:m=c,...d}=i,l={...i,align:e,color:n,className:p,component:g,gutterBottom:u,noWrap:f,paragraph:h,variant:s,variantMapping:m},v=g||(h?"p":m[s]||c[s])||"span",x=N(l);return P($,{as:v,ref:o,ownerState:l,className:b(x.root,p),...d})}),F=A;export{F as M};
//# sourceMappingURL=Typography-b4b82de0.js.map
