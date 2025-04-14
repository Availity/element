import{r as c}from"./index-BgYLq7fD.js";import{F as M,c as N,d as $,I as A,a as y}from"./index-B9kSWecB.js";import{j as a}from"./jsx-runtime-BTJTZTIL.js";import{T as V}from"./TextField-DBCIsg8u.js";import{B as W}from"./Box-Dv31mJKI.js";import{T as k}from"./Typography-COSof5sR.js";import{G as z}from"./Grid2-JMPt1-k0.js";var J=Object.defineProperty,K=Object.defineProperties,Q=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,C=(e,r,t)=>r in e?J(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,o=(e,r)=>{for(var t in r||(r={}))I.call(r,t)&&C(e,t,r[t]);if(m)for(var t of m(r))F.call(r,t)&&C(e,t,r[t]);return e},l=(e,r)=>K(e,Q(r)),v=(e,r)=>{var t={};for(var n in e)I.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&m)for(var n of m(e))r.indexOf(n)<0&&F.call(e,n)&&(t[n]=e[n]);return t};c.forwardRef((e,r)=>a.jsx(W,l(o({},e),{ref:r})));var U=e=>a.jsx(z,o({},e)),b=c.forwardRef((e,r)=>{var t=e,{children:n}=t,p=v(t,["children"]);return a.jsx(k,l(o({},p),{ref:r,children:n}))}),X=e=>{var r=e,{charCount:t,helperText:n,maxLength:p,showCharacterCount:u}=r,d=v(r,["charCount","helperText","maxLength","showCharacterCount"]);return u?a.jsxs(U,{container:!0,justifyContent:"space-between",flexWrap:"nowrap",children:[a.jsx(y,l(o({},d),{sx:{marginRight:"12px"},children:n})),a.jsxs(b,{variant:"caption",marginTop:"4px",lineHeight:"1.25rem",children:[a.jsx(b,{component:"span",variant:"inherit",color:t>p?"error":"textPrimary",children:t||0}),"/",p]})]}):a.jsx(y,l(o({},d),{children:n}))},Y=c.forwardRef((e,r)=>{var t,n,p,u,d,P,_;const g=e,{InputProps:L,helpTopicId:H,InputLabelProps:S,FormHelperTextProps:R,required:T,SelectProps:f,inputProps:x,helperText:O,showCharacterCount:D=!1,displayOverflowMaxLength:j=!1}=g,s=v(g,["InputProps","helpTopicId","InputLabelProps","FormHelperTextProps","required","SelectProps","inputProps","helperText","showCharacterCount","displayOverflowMaxLength"]),[E,q]=c.useState(!1),[G,B]=c.useState(0),w=(x==null?void 0:x.maxLength)||((n=(t=s.slotProps)==null?void 0:t.htmlInput)==null?void 0:n.maxLength),h=i=>!i||Object.keys(i).length===0?void 0:i;return a.jsx(V,l(o({},s),{onChange:i=>{B(i.target.value.length),s.onChange&&s.onChange(i)},helperText:O||a.jsx(a.Fragment,{}),slots:{formHelperText:X},slotProps:{input:h(o(o(o({},L),A),(p=s.slotProps)==null?void 0:p.input)),htmlInput:h(l(o(o({"aria-required":T},x),(u=s.slotProps)==null?void 0:u.htmlInput),{maxLength:j?void 0:w})),select:h(o(o(o(o({},f),N),$(E,q,f==null?void 0:f.open)),(d=s.slotProps)==null?void 0:d.select)),inputLabel:h(o(o({component:M,helpTopicId:H,required:T,shrink:!0},S),(P=s.slotProps)==null?void 0:P.inputLabel)),formHelperText:h(l(o(o({component:"div"},R),(_=s.slotProps)==null?void 0:_.formHelperText),{charCount:G,helperText:O,maxLength:w,displayOverflowMaxLength:j,showCharacterCount:D}))},ref:r}))});Y.__docgenInfo={description:"",methods:[],displayName:"TextField"};export{Y as T};
