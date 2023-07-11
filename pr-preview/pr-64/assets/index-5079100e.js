import{r as d}from"./index-8db94870.js";import{j as r}from"./jsx-runtime-91a467a5.js";import{B as p}from"./Button-c7fe7886.js";import{M as u,C as m}from"./LoadingButton-33e357a1.js";import{M as y}from"./Tooltip-ab4358e8.js";import{M as g}from"./IconButton-61ef6ad6.js";var I={bgcolor:"tertiary.main",color:"black","&:focus, &:hover":{bgcolor:"tertiary.dark"},"&:active":{bgcolor:"tertiary.light"}},f={minWidth:2,px:1,"& .MuiButton-startIcon":{m:0},"& .MuiButton-endIcon":{m:0}},l=d.forwardRef((i,n)=>{const{color:a="secondary",variant:o="contained",iconOnly:t,sx:e,...s}=i,c={...a=="tertiary"&&o=="contained"&&I,...t&&f};return r(p,{color:a=="tertiary"?"secondary":a,variant:o,sx:{...c,...e},disableRipple:!0,...s,ref:n})}),_=({children:i,title:n,filled:a,color:o="tertiary",...t})=>r(y,{title:n,children:a?r(l,{"aria-label":n,color:o,startIcon:i,iconOnly:!0,...t,children:"⁠"}):r(g,{"aria-label":n,disableRipple:!0,color:o==="tertiary"?"secondary":o,...t,children:i})}),B=r(m,{color:"inherit",size:16,"aria-label":"loading"}),b=d.forwardRef((i,n)=>{const{children:a,loading:o,...t}=i,e=t.startIcon?"start":"end",s=t.startIcon||t.endIcon||o?{}:{padding:"0 .7rem"},c=t.startIcon?void 0:r("span",{style:o?{padding:"0 .7rem"}:{}});return r(u,{endIcon:c,loadingPosition:e,loading:o,disableRipple:!0,loadingIndicator:B,...t,ref:n,children:r("span",{style:s,children:a})})});l.__docgenInfo={description:"",methods:[],displayName:"Button"};b.__docgenInfo={description:"",methods:[],displayName:"LoadingButton"};export{l as B,_ as I};
//# sourceMappingURL=index-5079100e.js.map
