import{f as x,_ as c,b as T}from"./createTheme-bcd1d157.js";import{r as v}from"./index-570b25c1.js";import{c as z}from"./clsx-7dc4e18d.js";import{u as b,f as F}from"./utils-3d35716f.js";import{g as H,s as C,c as q}from"./styled-7846e708.js";import{g as M}from"./generateUtilityClasses-70c60a0e.js";import{u as R}from"./useThemeProps-018254e6.js";import{a as p}from"./jsx-runtime-a3bcee63.js";function y(e){return H("MuiFormHelperText",e)}const _=M("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),f=_;var u;const $=["children","className","component","disabled","error","filled","focused","margin","required","variant"],h=e=>{const{classes:r,contained:s,size:t,disabled:a,error:l,filled:i,focused:n,required:d}=e,o={root:["root",a&&"disabled",l&&"error",t&&`size${x(t)}`,s&&"contained",n&&"focused",i&&"filled",d&&"required"]};return q(o,y,r)},N=C("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,s.size&&r[`size${x(s.size)}`],s.contained&&r.contained,s.filled&&r.filled]}})(({theme:e,ownerState:r})=>c({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${f.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${f.error}`]:{color:(e.vars||e).palette.error.main}},r.size==="small"&&{marginTop:4},r.contained&&{marginLeft:14,marginRight:14})),S=v.forwardRef(function(r,s){const t=R({props:r,name:"MuiFormHelperText"}),{children:a,className:l,component:i="p"}=t,n=T(t,$),d=b(),o=F({props:t,muiFormControl:d,states:["variant","size","disabled","error","filled","focused","required"]}),m=c({},t,{component:i,contained:o.variant==="filled"||o.variant==="outlined",variant:o.variant,size:o.size,disabled:o.disabled,error:o.error,filled:o.filled,focused:o.focused,required:o.required}),g=h(m);return p(N,c({as:i,ownerState:m,className:z(g.root,l),ref:s},n,{children:a===" "?u||(u=p("span",{className:"notranslate",children:"​"})):a}))}),W=S;export{W as M};
//# sourceMappingURL=FormHelperText-ae2a8f0e.js.map
