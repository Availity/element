import{r as d}from"./index-570b25c1.js";import{a as t}from"./jsx-runtime-a3bcee63.js";import{B as c}from"./Button-d84dd9a0.js";import{M as p}from"./Tooltip-c716d13a.js";import{M as u}from"./IconButton-de653fbd.js";import{M as m}from"./LoadingButton-7f26c21d.js";import{M as f}from"./CircularProgress-83597315.js";var g={disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},I=d.forwardRef((r,n)=>t(c,{...r,...g,ref:n})),B={borderRadius:".25rem",border:1},v=d.forwardRef((r,n)=>{const{title:e,variant:a="text",sx:o,...i}=r,s={...o,...a==="outlined"&&B};return t(p,{title:e,children:t(u,{"aria-label":e,sx:{...s},...i,ref:n})})}),b=t(f,{color:"inherit",size:16,"aria-label":"loading"}),h=d.forwardRef((r,n)=>{const{children:e,loading:a,...o}=r,i=o.startIcon?"start":"end",s=o.startIcon||o.endIcon||a?{}:{padding:"0 .7rem"},l=o.startIcon?void 0:t("span",{style:a?{padding:"0 .7rem"}:{}});return t(m,{endIcon:l,loadingPosition:i,loading:a,disableRipple:!0,loadingIndicator:b,...o,ref:n,children:t("span",{style:s,children:e})})});I.__docgenInfo={description:"",methods:[],displayName:"Button"};v.__docgenInfo={description:"",methods:[],displayName:"IconButton"};h.__docgenInfo={description:"",methods:[],displayName:"LoadingButton"};export{I as B,v as I,h as L};
//# sourceMappingURL=index-5496e90f.js.map