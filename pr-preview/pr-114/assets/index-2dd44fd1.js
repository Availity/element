import{r as d}from"./index-570b25c1.js";import{j as t}from"./jsx-runtime-390e5fc8.js";import{B as c}from"./Button-4ab2863e.js";import{M as p}from"./Tooltip-528bd356.js";import{M as u}from"./IconButton-5b7e7002.js";import{M as m,C as g}from"./LoadingButton-7e27a20e.js";var f={disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},I=d.forwardRef((r,n)=>t(c,{...r,...f,ref:n})),B={borderRadius:".25rem",border:1},v=d.forwardRef((r,n)=>{const{title:a,variant:e="text",sx:o,...i}=r,s={...o,...e==="outlined"&&B};return t(p,{title:a,children:t(u,{"aria-label":a,sx:{...s},...i,ref:n})})}),b=t(g,{color:"inherit",size:16,"aria-label":"loading"}),h=d.forwardRef((r,n)=>{const{children:a,loading:e,...o}=r,i=o.startIcon?"start":"end",s=o.startIcon||o.endIcon||e?{}:{padding:"0 .7rem"},l=o.startIcon?void 0:t("span",{style:e?{padding:"0 .7rem"}:{}});return t(m,{endIcon:l,loadingPosition:i,loading:e,disableRipple:!0,loadingIndicator:b,...o,ref:n,children:t("span",{style:s,children:a})})});I.__docgenInfo={description:"",methods:[],displayName:"Button"};v.__docgenInfo={description:"",methods:[],displayName:"IconButton"};h.__docgenInfo={description:"",methods:[],displayName:"LoadingButton"};export{I as B,v as I};
//# sourceMappingURL=index-2dd44fd1.js.map
