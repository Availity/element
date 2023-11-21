import{r as m}from"./index-570b25c1.js";import{T as L,P as B,a as D,b as O,c as R}from"./index-aa1f890f.js";import{I as S,B as T,L as $}from"./index-5496e90f.js";import{T as P}from"./index-9e86b6d5.js";import{H as N,C as z,F as H,a as G,b as q}from"./index-cb4dbded.js";import{j as h,a as o,F as V}from"./jsx-runtime-a3bcee63.js";import{u as J,C as U}from"./index.esm-d81a0d8c.js";import{B as _}from"./Box-0b96d669.js";import{M as K}from"./FormControlLabel-625d44f3.js";import{M as Q}from"./FormLabel-16418a49.js";import{M as X}from"./Typography-f61e077a.js";import{C as Y}from"./Container-a1530f69.js";import{G as u}from"./Grid-af1a3ff2.js";import{s as w}from"./styled-7846e708.js";var Z=Object.defineProperty,j=(e,i,r)=>i in e?Z(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,C=(e,i,r)=>(j(e,typeof i!="symbol"?i+"":i,r),r),I=(e,i,r)=>{if(!i.has(e))throw TypeError("Cannot "+r)},k=(e,i,r)=>(I(e,i,"read from private field"),r?r.call(e):i.get(e)),ee=(e,i,r)=>{if(i.has(e))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(e):i.set(e,r)},re=(e,i,r,t)=>(I(e,i,"write to private field"),t?t.call(e,r):i.set(e,r),r),b,ie=class{constructor(){C(this,"subscribers",{}),C(this,"getEventData",e=>{const i=e.source===window;if(!this.isEnabled||!e||!e.data||!e.origin||!e.source||!this.isDomain(e.origin))return;let{data:r}=e;if(typeof r=="string")try{r=JSON.parse(r)}catch{}typeof r=="string"?(e=r,r=void 0):e=r&&r.event||this.DEFAULT_EVENT;const t={isSameWindow:i};this.onMessage(e,r,t)}),ee(this,b,0),this.isEnabled=!0,this.DEFAULT_EVENT="avMessage",this.DOMAIN=/https?:\/\/([\w-]+\.)?availity\.(com|net)/,window.addEventListener("message",this.getEventData)}enabled(e){return arguments.length>0&&(this.isEnabled=!!e),this.isEnabled}subscribe(e,i,r){var t;this.subscribers[e]||(this.subscribers[e]=[]),re(this,b,k(this,b)+1);const a=k(this,b),s=(t=r==null?void 0:r.ignoreSameWindow)!=null?t:!0,n={id:a,callback:i,options:{ignoreSameWindow:s}};return this.subscribers[e].push(n),()=>{this.subscribers[e]=this.subscribers[e].filter(l=>l.id!==a)}}unsubscribe(e){delete this.subscribers[e]}unsubscribeAll(){this.subscribers={}}onMessage(e,i,r){const{isSameWindow:t}=r;if(this.subscribers[e])for(const a of this.subscribers[e]){const{ignoreSameWindow:s}=a.options;t&&s||a.callback(i)}}isDomain(e){return!this.DOMAIN.test(this.domain())||this.DOMAIN.test(e)}domain(){return window.location.origin?window.location.origin:window.location.hostname?`${window.location.protocol}//${window.location.hostname}${window.location.port?`:${window.location.port}`:""}`:"*"}send(e,i=window.top){if(!(!this.isEnabled||!e))try{const r=typeof e=="string"?e:JSON.stringify(e);i.postMessage(r,this.domain())}catch(r){console.warn("AvMessage.send()",r)}}};b=new WeakMap;var te=ie,oe=new te,ae=e=>{oe.send({event:"nav:help:field",id:e})},M=({helpTopicId:e,labelId:i,sx:r,...t})=>o(S,{...t,color:"primary",title:"Help",role:"link",onClick:()=>ae(e),"aria-describedby":i,size:"small",sx:{...r,padding:.5,fontSize:"inherit",marginTop:"-2px",opacity:1},children:o(N,{"aria-hidden":!0,titleAccess:void 0})});m.forwardRef(({helpTopicId:e,id:i,...r},t)=>{const a=i||(r.htmlFor?`${r.htmlFor}-label`:void 0);return h(_,{children:[o(K,{id:a,...r,ref:t}),e?o(M,{helpTopicId:"12345",labelId:a}):null]})});var ne=w("span",{name:"MuiFormLabel",slot:"Children",overridesResolver:(e,i)=>i.children})({}),se={position:"relative !important",transform:"none !important",transition:"none !important",animation:"none !important"},le=m.forwardRef((e,i)=>{const{children:r,helpTopicId:t,id:a,sx:s,...n}=e,l=a||(n.htmlFor?`${n.htmlFor}-label`:void 0);return h(_,{display:"flex",flexDirection:"row",sx:s,children:[o(Q,{id:l,sx:{...se},...n,ref:i,children:o(ne,{className:"MuiFormLabel-children",children:r})}),t?o(M,{helpTopicId:t,labelId:l,sx:{px:.5}}):null]})}),ce=w(L,{name:"AvFeedbackContainer",slot:"SmileButtons"})({}),de=({disabled:e,Icon:i,label:r,value:t,...a})=>o("div",{children:o(O,{"aria-label":t,value:t,...a,disabled:e,children:o(i,{fontSize:"large"})})}),ue=({analytics:e,appName:i,handleClose:r,loading:t,sent:a,setLoading:s,setSent:n})=>{var l;const{control:g,formState:{errors:p},handleSubmit:F,register:v,setValue:E,watch:y}=J(),A=async({smileField:f,...c})=>{s(!0);try{const d=await R.getCurrentRegion();await e.info({surveyId:`${i.replace(/\s/g,"_")}_Smile_Survey`,smileLocation:`${i}`,smile:`icon-${f}`,url:window.location.href,region:d.data.regions[0]&&d.data.regions[0].id,userAgent:window.navigator.userAgent,submitTime:new Date,...c}),n(!0),s(!1)}catch{n(!1),s(!1)}};m.useEffect(()=>{a&&setTimeout(()=>{r()},2e3)},[a]);const x=[{Icon:H,label:"What do you like?",value:"smile"},{Icon:G,label:"What would you improve?",value:"meh"},{Icon:q,label:"What don't you like?",value:"frown"}],W=()=>{const f=y("smileField"),c=x.find(d=>d.value===f);return(c==null?void 0:c.label)||"What would you improve?"};return a?null:h(u,{component:"form",container:!0,justifyContent:"center",onSubmit:F(A),"aria-label":"Feedback Form","aria-describedby":"feedback-form-header",children:[o(U,{control:g,name:"smileField",render:({field:f})=>o(ce,{children:x.map((c,d)=>o(de,{autoFocus:d===0,disabled:t,...c},c.value)),...f,"aria-labelledby":"feedback-form-header",onChange:(c,d)=>{E(f.name,d)},size:"medium",exclusive:!0})}),o(P,{...v("feedback",{required:"This field is required",maxLength:{value:200,message:"This field must not exceed 200 characters"}}),fullWidth:!0,multiline:!0,minRows:3,maxRows:3,label:W(),inputProps:{"aria-required":"true"},InputLabelProps:{component:le,required:!0},helperText:((l=p.feedback)==null?void 0:l.message)||"Max 200 characters",error:!!p.feedback,disabled:t}),h(u,{container:!0,direction:"row",marginTop:"16px",spacing:1,children:[o(u,{item:!0,xs:6,children:o(T,{color:"secondary",disabled:t,fullWidth:!0,onClick:r,children:"Cancel"})}),o(u,{item:!0,xs:6,children:o($,{disabled:!y("smileField"),fullWidth:!0,loading:t,type:"submit",variant:"contained",children:"Send Feedback"})})]})]})},me=m.forwardRef(({children:e,...i},r)=>o(X,{...i,ref:r,children:e})),he=({appName:e,handleClose:i,loading:r,sent:t})=>h(u,{alignItems:"center",container:!0,direction:"row",marginBottom:t?"0px":"8px",justifyContent:"space-between",flexWrap:"nowrap",id:"feedback-form-header",children:[o(u,{item:!0,whiteSpace:"normal",children:o(me,{component:"h2",variant:"h5",children:t?"Thank you for your feedback.":`Tell us what you think about ${e}`})}),o(u,{item:!0,marginRight:"-8px",children:o(S,{disabled:r,title:"Close",onClick:i,children:o(z,{})})})]}),pe=w(Y,{name:"AvFeedbackContainer",slot:"root"})({}),Me=({analytics:e=D,appName:i})=>{const[r,t]=m.useState(null),[a,s]=m.useState(!1),[n,l]=m.useState(!1),g=v=>{t(v.currentTarget)},p=()=>{t(null)};return h(V,{children:[o(T,{onClick:g,color:"secondary",size:"large",children:"Give Feedback"}),o(B,{anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{marginTop:"4px"},disableRestoreFocus:!0,onClose:p,open:!!r,transformOrigin:{vertical:"top",horizontal:"right"},children:h(pe,{children:[o(he,{appName:i,handleClose:p,loading:n,sent:a}),o(ue,{analytics:e,appName:i,handleClose:p,loading:n,sent:a,setLoading:l,setSent:s})]})})]})};export{Me as F};
//# sourceMappingURL=index-a14b3699.js.map