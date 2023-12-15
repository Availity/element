import{r as f}from"./index-570b25c1.js";import{T as I,P as B,a as W,b as A,c as L}from"./index-17b796d4.js";import{B as y,L as P,I as R}from"./index-762a5bc1.js";import{T as j}from"./index-44f36572.js";import{C as z,F as q,a as E,b as G}from"./index-a94774e7.js";import{F as _}from"./index-9025450b.js";import{u as $,C as O}from"./index.esm-d81a0d8c.js";import{j as h,F as M,a as e}from"./jsx-runtime-a3bcee63.js";import{T as V}from"./index-96688515.js";import{C as D}from"./Container-a1530f69.js";import{G as s}from"./Grid-af1a3ff2.js";import{s as C}from"./styled-7846e708.js";var H=C(I,{name:"AvFeedbackContainer",slot:"SmileButtons"})({}),J=({disabled:n,Icon:o,label:a,value:r,...t})=>e("div",{children:e(A,{"aria-label":r,value:r,...t,disabled:n,children:e(o,{fontSize:"large"})})}),K=({analytics:n,appName:o,handleClose:a,loading:r,sent:t,setLoading:c,setSent:m})=>{var b;const{control:p,formState:{errors:d},handleSubmit:F,register:g,setValue:w,watch:x}=$(),T=async({smileField:i,...l})=>{c(!0);try{const u=await L.getCurrentRegion();await n.info({surveyId:`${o.replace(/\s/g,"_")}_Smile_Survey`,smileLocation:`${o}`,smile:`icon-${i}`,url:window.location.href,region:u.data.regions[0]&&u.data.regions[0].id,userAgent:window.navigator.userAgent,submitTime:new Date,...l}),m(!0),c(!1)}catch{m(!1),c(!1)}};f.useEffect(()=>{t&&setTimeout(()=>{a()},2e3)},[t]);const k=[{Icon:q,label:"What do you like?",value:"smile"},{Icon:E,label:"What would you improve?",value:"meh"},{Icon:G,label:"What don't you like?",value:"frown"}],v=x("smileField"),S=()=>{const i=k.find(l=>l.value===v);return(i==null?void 0:i.label)||"What would you improve?"};return t?null:h(s,{component:"form",container:!0,justifyContent:"center",onSubmit:F(T),"aria-label":"Feedback Form","aria-describedby":"feedback-form-header",children:[e(O,{control:p,name:"smileField",render:({field:i})=>e(H,{children:k.map((l,u)=>e(J,{autoFocus:u===0,disabled:r,...l},l.value)),...i,"aria-labelledby":"feedback-form-header",onChange:(l,u)=>{w(i.name,u)},size:"medium",exclusive:!0})}),v&&e(j,{...g("feedback",{required:"This field is required",maxLength:{value:200,message:"This field must not exceed 200 characters"}}),fullWidth:!0,multiline:!0,minRows:3,maxRows:3,label:S(),inputProps:{"aria-required":"true"},InputLabelProps:{component:_,required:!0},helperText:((b=d.feedback)==null?void 0:b.message)||"Max 200 characters",error:!!d.feedback,disabled:r}),h(s,{container:!0,direction:"row",marginTop:"16px",spacing:1,children:[e(s,{item:!0,xs:6,children:e(y,{color:"secondary",disabled:r,fullWidth:!0,onClick:a,children:"Cancel"})}),e(s,{item:!0,xs:6,children:e(P,{disabled:!v,fullWidth:!0,loading:r,type:"submit",variant:"contained",children:"Send Feedback"})})]})]})},Q=({appName:n,handleClose:o,loading:a,sent:r})=>h(s,{alignItems:"center",container:!0,direction:"row",marginBottom:r?"0px":"8px",justifyContent:"space-between",flexWrap:"nowrap",id:"feedback-form-header",children:[e(s,{item:!0,whiteSpace:"normal",children:e(V,{component:"h2",variant:"h5",children:r?"Thank you for your feedback.":`Tell us what you think about ${n}`})}),e(s,{item:!0,marginRight:"-8px",children:e(R,{disabled:a,title:"Close",onClick:o,children:e(z,{})})})]}),U=C(D,{name:"AvFeedbackContainer",slot:"root"})({}),se=({analytics:n=W,appName:o})=>{const[a,r]=f.useState(null),[t,c]=f.useState(!1),[m,b]=f.useState(!1),p=g=>{r(g.currentTarget),c(!1)},d=()=>{r(null)};return h(M,{children:[e(y,{onClick:p,color:"secondary",size:"large",children:"Give Feedback"}),e(B,{anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{marginTop:"4px"},disableRestoreFocus:!0,onClose:d,open:!!a,transformOrigin:{vertical:"top",horizontal:"right"},children:h(U,{children:[e(Q,{appName:o,handleClose:d,loading:m,sent:t}),e(K,{analytics:n,appName:o,handleClose:d,loading:m,sent:t,setLoading:b,setSent:c})]})})]})};export{se as F};
//# sourceMappingURL=index-2c16657f.js.map
