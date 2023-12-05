import{r as p}from"./index-570b25c1.js";import{T as S,P as I,a as B,b as W,c as A}from"./index-7513f905.js";import{B as y,L,I as P}from"./index-6cb0af17.js";import{T as R}from"./index-ac70c534.js";import{C as j,F as z,a as q,b as E}from"./index-8e81bbc6.js";import{F as G}from"./index-2e583e87.js";import{u as _,C as $}from"./index.esm-d81a0d8c.js";import{j as h,F as O,a as e}from"./jsx-runtime-a3bcee63.js";import{T as M}from"./index-bf8151f5.js";import{C as D}from"./Container-3c3a93d6.js";import{G as s}from"./Grid-62fb460c.js";import{s as C}from"./styled-523cb007.js";var H=C(S,{name:"AvFeedbackContainer",slot:"SmileButtons"})({}),V=({disabled:l,Icon:o,label:a,value:r,...t})=>e("div",{children:e(W,{"aria-label":r,value:r,...t,disabled:l,children:e(o,{fontSize:"large"})})}),J=({analytics:l,appName:o,handleClose:a,loading:r,sent:t,setLoading:u,setSent:m})=>{var b;const{control:f,formState:{errors:c},handleSubmit:v,register:g,setValue:w,watch:F}=_(),x=async({smileField:d,...n})=>{u(!0);try{const i=await A.getCurrentRegion();await l.info({surveyId:`${o.replace(/\s/g,"_")}_Smile_Survey`,smileLocation:`${o}`,smile:`icon-${d}`,url:window.location.href,region:i.data.regions[0]&&i.data.regions[0].id,userAgent:window.navigator.userAgent,submitTime:new Date,...n}),m(!0),u(!1)}catch{m(!1),u(!1)}};p.useEffect(()=>{t&&setTimeout(()=>{a()},2e3)},[t]);const k=[{Icon:z,label:"What do you like?",value:"smile"},{Icon:q,label:"What would you improve?",value:"meh"},{Icon:E,label:"What don't you like?",value:"frown"}],T=()=>{const d=F("smileField"),n=k.find(i=>i.value===d);return(n==null?void 0:n.label)||"What would you improve?"};return t?null:h(s,{component:"form",container:!0,justifyContent:"center",onSubmit:v(x),"aria-label":"Feedback Form","aria-describedby":"feedback-form-header",children:[e($,{control:f,name:"smileField",render:({field:d})=>e(H,{children:k.map((n,i)=>e(V,{autoFocus:i===0,disabled:r,...n},n.value)),...d,"aria-labelledby":"feedback-form-header",onChange:(n,i)=>{w(d.name,i)},size:"medium",exclusive:!0})}),e(R,{...g("feedback",{required:"This field is required",maxLength:{value:200,message:"This field must not exceed 200 characters"}}),fullWidth:!0,multiline:!0,minRows:3,maxRows:3,label:T(),inputProps:{"aria-required":"true"},InputLabelProps:{component:G,required:!0},helperText:((b=c.feedback)==null?void 0:b.message)||"Max 200 characters",error:!!c.feedback,disabled:r}),h(s,{container:!0,direction:"row",marginTop:"16px",spacing:1,children:[e(s,{item:!0,xs:6,children:e(y,{color:"secondary",disabled:r,fullWidth:!0,onClick:a,children:"Cancel"})}),e(s,{item:!0,xs:6,children:e(L,{disabled:!F("smileField"),fullWidth:!0,loading:r,type:"submit",variant:"contained",children:"Send Feedback"})})]})]})},K=({appName:l,handleClose:o,loading:a,sent:r})=>h(s,{alignItems:"center",container:!0,direction:"row",marginBottom:r?"0px":"8px",justifyContent:"space-between",flexWrap:"nowrap",id:"feedback-form-header",children:[e(s,{item:!0,whiteSpace:"normal",children:e(M,{component:"h2",variant:"h5",children:r?"Thank you for your feedback.":`Tell us what you think about ${l}`})}),e(s,{item:!0,marginRight:"-8px",children:e(P,{disabled:a,title:"Close",onClick:o,children:e(j,{})})})]}),Q=C(D,{name:"AvFeedbackContainer",slot:"root"})({}),le=({analytics:l=B,appName:o})=>{const[a,r]=p.useState(null),[t,u]=p.useState(!1),[m,b]=p.useState(!1),f=g=>{r(g.currentTarget)},c=()=>{r(null)};return h(O,{children:[e(y,{onClick:f,color:"secondary",size:"large",children:"Give Feedback"}),e(I,{anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{marginTop:"4px"},disableRestoreFocus:!0,onClose:c,open:!!a,transformOrigin:{vertical:"top",horizontal:"right"},children:h(Q,{children:[e(K,{appName:o,handleClose:c,loading:m,sent:t}),e(J,{analytics:l,appName:o,handleClose:c,loading:m,sent:t,setLoading:b,setSent:u})]})})]})};export{le as F};
//# sourceMappingURL=index-a3c8c445.js.map
