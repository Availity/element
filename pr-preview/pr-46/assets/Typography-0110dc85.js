import{r as T}from"./index-8db94870.js";import{g as b,a as B,s as C,c as W,b as M}from"./styled-38682cfe.js";import{c as y,u as R}from"./useThemeProps-bac2eb8f.js";import{j as P}from"./jsx-runtime-91a467a5.js";import{e as U}from"./extendSxProp-d2b2c052.js";function $(t){return b("MuiTypography",t)}B("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const j=t=>{const{align:r,gutterBottom:a,noWrap:o,paragraph:n,variant:i,classes:s}=t,e={root:["root",i,t.align!=="inherit"&&`align${y(r)}`,a&&"gutterBottom",o&&"noWrap",n&&"paragraph"]};return M(e,$,s)},N=C("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:a}=t;return[r.root,a.variant&&r[a.variant],a.align!=="inherit"&&r[`align${y(a.align)}`],a.noWrap&&r.noWrap,a.gutterBottom&&r.gutterBottom,a.paragraph&&r.paragraph]}})(({theme:t,ownerState:r})=>({margin:0,...r.variant&&t.typography[r.variant],...r.align!=="inherit"&&{textAlign:r.align},...r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},...r.gutterBottom&&{marginBottom:"0.35em"},...r.paragraph&&{marginBottom:16}})),c={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},z=t=>w[t]||t,A=T.forwardRef(function(r,a){const o=R({props:r,name:"MuiTypography"}),n=z(o.color),i=U({...o,color:n}),{align:s="inherit",className:e,component:h,gutterBottom:u=!1,noWrap:f=!1,paragraph:g=!1,variant:p="body1",variantMapping:l=c,...d}=i,m={...i,align:s,color:n,className:e,component:h,gutterBottom:u,noWrap:f,paragraph:g,variant:p,variantMapping:l},v=h||(g?"p":l[p]||c[p])||"span",x=j(m);return P(N,{as:v,ref:a,ownerState:m,className:W(x.root,e),...d})}),V=A;export{V as T};
//# sourceMappingURL=Typography-0110dc85.js.map
