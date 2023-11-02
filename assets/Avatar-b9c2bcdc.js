import{_ as n,b as w}from"./createTheme-e6b56ddb.js";import{r as v}from"./index-570b25c1.js";import{c as M}from"./clsx-8416b751.js";import{g as C,s as g,c as I}from"./styled-188025da.js";import{u as S}from"./useThemeProps-db7202c2.js";import{c as D}from"./createSvgIcon-e4b87ef5.js";import{j as d}from"./jsx-runtime-390e5fc8.js";import{g as P}from"./generateUtilityClasses-f776b170.js";const z=D(d("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function F(r){return C("MuiAvatar",r)}P("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const N=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],j=r=>{const{classes:a,variant:t,colorDefault:e}=r;return I({root:["root",t,e&&"colorDefault"],img:["img"],fallback:["fallback"]},F,a)},U=g("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:t}=r;return[a.root,a[t.variant],t.colorDefault&&a.colorDefault]}})(({theme:r,ownerState:a})=>n({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},a.variant==="rounded"&&{borderRadius:(r.vars||r).shape.borderRadius},a.variant==="square"&&{borderRadius:0},a.colorDefault&&n({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:r.palette.mode==="light"?r.palette.grey[400]:r.palette.grey[600]}))),_=g("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(r,a)=>a.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),L=g(z,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(r,a)=>a.fallback})({width:"75%",height:"75%"});function q({crossOrigin:r,referrerPolicy:a,src:t,srcSet:e}){const[s,l]=v.useState(!1);return v.useEffect(()=>{if(!t&&!e)return;l(!1);let i=!0;const o=new Image;return o.onload=()=>{i&&l("loaded")},o.onerror=()=>{i&&l("error")},o.crossOrigin=r,o.referrerPolicy=a,o.src=t,e&&(o.srcset=e),()=>{i=!1}},[r,a,t,e]),s}const E=v.forwardRef(function(a,t){const e=S({props:a,name:"MuiAvatar"}),{alt:s,children:l,className:i,component:o="div",imgProps:h,sizes:y,src:f,srcSet:p,variant:k="circular"}=e,x=w(e,N);let c=null;const R=q(n({},h,{src:f,srcSet:p})),b=f||p,A=b&&R!=="error",u=n({},e,{colorDefault:!A,component:o,variant:k}),m=j(u);return A?c=d(_,n({alt:s,srcSet:p,src:f,sizes:y,ownerState:u,className:m.img},h)):l!=null?c=l:b&&s?c=s[0]:c=d(L,{ownerState:u,className:m.fallback}),d(U,n({as:o,ownerState:u,className:M(m.root,i),ref:t},x,{children:c}))}),Q=E;export{Q as M};
//# sourceMappingURL=Avatar-b9c2bcdc.js.map
