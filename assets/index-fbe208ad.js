import{r as c}from"./index-8db94870.js";import{j as n}from"./jsx-runtime-91a467a5.js";import{B as l}from"./Button-7fd1b50b.js";import{M as g,C as p}from"./LoadingButton-9150d040.js";var m={bgcolor:"tertiary.main",color:"black","&:focus, &:hover":{bgcolor:"tertiary.dark"},"&:active":{bgcolor:"tertiary.light"}},y={minWidth:2,px:1,"& .MuiButton-startIcon":{m:0},"& .MuiButton-endIcon":{m:0}},u=c.forwardRef((a,i)=>{const{color:r="secondary",variant:t="contained",iconOnly:o,sx:e,...s}=a,d={...r=="tertiary"&&t=="contained"&&m,...o&&y};return n(l,{color:r=="tertiary"?"secondary":r,variant:t,sx:{...d,...e},disableRipple:!0,...s,ref:i})}),I=n(p,{color:"inherit",size:16,"aria-label":"loading"}),f=c.forwardRef((a,i)=>{const{children:r,loading:t,...o}=a,e=o.startIcon?"start":"end",s=o.startIcon||o.endIcon||t?{}:{padding:"0 .7rem"},d=o.startIcon?void 0:n("span",{style:t?{padding:"0 .7rem"}:{}});return n(g,{endIcon:d,loadingPosition:e,loading:t,disableRipple:!0,loadingIndicator:I,...o,ref:i,children:n("span",{style:s,children:r})})});u.__docgenInfo={description:"",methods:[],displayName:"Button"};f.__docgenInfo={description:"",methods:[],displayName:"LoadingButton"};export{u as B};
//# sourceMappingURL=index-fbe208ad.js.map
