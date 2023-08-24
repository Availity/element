import{r as z}from"./index-8db94870.js";import{g as F,b as H,s as b,c as C,a as q}from"./styled-657e2aa7.js";import{u as R,f as $}from"./utils-0a422cdb.js";import{e as x,c as y}from"./useThemeProps-ad7d4b8c.js";import{j as p}from"./jsx-runtime-91a467a5.js";function M(e){return H("MuiFormHelperText",e)}const S=F("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),f=S;var u;const U=e=>{const{classes:r,contained:s,size:t,disabled:a,error:l,filled:i,focused:n,required:d}=e,c={root:["root",a&&"disabled",l&&"error",t&&`size${x(t)}`,s&&"contained",n&&"focused",i&&"filled",d&&"required"]};return q(c,M,r)},w=b("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,s.size&&r[`size${x(s.size)}`],s.contained&&r.contained,s.filled&&r.filled]}})(({theme:e,ownerState:r})=>({color:(e.vars||e).palette.text.secondary,...e.typography.caption,textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${f.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${f.error}`]:{color:(e.vars||e).palette.error.main},...r.size==="small"&&{marginTop:4},...r.contained&&{marginLeft:14,marginRight:14}})),N=z.forwardRef(function(r,s){const t=y({props:r,name:"MuiFormHelperText"}),{children:a,className:l,component:i="p",disabled:n,error:d,filled:c,focused:h,margin:j,required:B,variant:L,...g}=t,T=R(),o=$({props:t,muiFormControl:T,states:["variant","size","disabled","error","filled","focused","required"]}),m={...t,component:i,contained:o.variant==="filled"||o.variant==="outlined",variant:o.variant,size:o.size,disabled:o.disabled,error:o.error,filled:o.filled,focused:o.focused,required:o.required},v=U(m);return p(w,{as:i,ownerState:m,className:C(v.root,l),ref:s,...g,children:a===" "?u||(u=p("span",{className:"notranslate",children:"​"})):a})}),D=N;export{D as F};
//# sourceMappingURL=FormHelperText-4f09096a.js.map
