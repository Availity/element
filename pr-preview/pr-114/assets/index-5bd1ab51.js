import{r as d}from"./index-570b25c1.js";import{j as t}from"./jsx-runtime-390e5fc8.js";import{B as c}from"./Button-bf5d864a.js";import{M as p}from"./Tooltip-7c526765.js";import{M as u}from"./IconButton-e1c52fea.js";import{M as m}from"./LoadingButton-d30fce51.js";import{C as f}from"./CircularProgress-c55bac56.js";var g={disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},I=d.forwardRef((r,n)=>t(c,{...r,...g,ref:n})),B={borderRadius:".25rem",border:1},v=d.forwardRef((r,n)=>{const{title:i,variant:e="text",sx:o,...a}=r,s={...o,...e==="outlined"&&B};return t(p,{title:i,children:t(u,{"aria-label":i,sx:{...s},...a,ref:n})})}),b=t(f,{color:"inherit",size:16,"aria-label":"loading"}),h=d.forwardRef((r,n)=>{const{children:i,loading:e,...o}=r,a=o.startIcon?"start":"end",s=o.startIcon||o.endIcon||e?{}:{padding:"0 .7rem"},l=o.startIcon?void 0:t("span",{style:e?{padding:"0 .7rem"}:{}});return t(m,{endIcon:l,loadingPosition:a,loading:e,disableRipple:!0,loadingIndicator:b,...o,ref:n,children:t("span",{style:s,children:i})})});I.__docgenInfo={description:"",methods:[],displayName:"Button"};v.__docgenInfo={description:"",methods:[],displayName:"IconButton"};h.__docgenInfo={description:"",methods:[],displayName:"LoadingButton"};export{I as B,v as I};
//# sourceMappingURL=index-5bd1ab51.js.map
