import{j as u,a as e,F as R}from"./jsx-runtime-a3bcee63.js";import{r as b}from"./index-570b25c1.js";import{T as L,b as W,c as P,P as j,a as z}from"./index-4810b236.js";import{B as I,L as E,I as G}from"./index-daf8ff4e.js";import{T as O}from"./index-01b89d4f.js";import{F as $,a as D,b as H,C as M}from"./index-53288845.js";import{F as J}from"./index-14edf826.js";import{u as K,C as Q}from"./index.esm-d81a0d8c.js";import{G as s}from"./Grid-62fb460c.js";import{s as V}from"./styled-523cb007.js";import{T as U}from"./index-bf8151f5.js";import{C as X}from"./Container-3c3a93d6.js";import"./_commonjsHelpers-042e6b4d.js";import"./Popover-252d82a4.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-98dc6282.js";import"./generateUtilityClasses-b58f947a.js";import"./Modal-1f45fd5c.js";import"./Backdrop-4a58ec86.js";import"./useTheme-c07bb8e7.js";import"./utils-1ac07bae.js";import"./TransitionGroupContext-c71596b3.js";import"./index-8a077077.js";import"./useForkRef-153a0a89.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-95ccb7bd.js";import"./isHostComponent-73d6e646.js";import"./createChainedFunction-0bab83cf.js";import"./Grow-8a00b99f.js";import"./Paper-389d56e7.js";import"./debounce-517eeb3c.js";import"./index-7c0e1f2b.js";import"./_baseFor-53bad3ef.js";import"./_initCloneObject-31384e14.js";import"./isPlainObject-272efb33.js";import"./ToggleButtonGroup-2e6e00f5.js";import"./react-is.production.min-a192e302.js";import"./ToggleButton-54342354.js";import"./ButtonBase-44753119.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./Button-af0ca45f.js";import"./Tooltip-91ad21bd.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-3fd19b93.js";import"./LoadingButton-1ec35b70.js";import"./extends-90dea224.js";import"./CircularProgress-96ade162.js";import"./TextField-57e9b08d.js";import"./FormLabel-d63492ff.js";import"./utils-3d35716f.js";import"./isMuiElement-6907f060.js";import"./Select-473a43cb.js";import"./Menu-113dab7f.js";import"./List-446c66c9.js";import"./createSvgIcon-ca656bec.js";import"./SvgIcon-075b1db6.js";import"./OutlinedInput-71306fdf.js";import"./GlobalStyles-5f9800bb.js";import"./FormHelperText-e428b621.js";import"./faCircleArrowRight-f69b7367.js";import"./faMagnifyingGlass-482fd726.js";import"./index-9681c8ff.js";import"./Box-51bd3ea0.js";import"./extendSxProp-b1abb964.js";import"./FormControlLabel-1ceb9da1.js";import"./Typography-f453bb5c.js";import"./Stack-3fcb8940.js";import"./styled-5c6c15e1.js";import"./Divider-2d957b7a.js";import"./dividerClasses-871b72e6.js";const Y=V(L,{name:"AvFeedbackContainer",slot:"SmileButtons"})({}),Z=({disabled:t,Icon:o,label:a,value:r,...i})=>e("div",{children:e(W,{"aria-label":r,value:r,...i,disabled:t,children:e(o,{fontSize:"large"})})}),_=({analytics:t,appName:o,handleClose:a,loading:r,sent:i,setLoading:m,setSent:c})=>{var w;const{control:y,formState:{errors:h},handleSubmit:d,register:C,setValue:F,watch:N}=K(),A=async({smileField:n,...l})=>{m(!0);try{const p=await P.getCurrentRegion();await t.info({surveyId:`${o.replace(/\s/g,"_")}_Smile_Survey`,smileLocation:`${o}`,smile:`icon-${n}`,url:window.location.href,region:p.data.regions[0]&&p.data.regions[0].id,userAgent:window.navigator.userAgent,submitTime:new Date,...l}),c(!0),m(!1)}catch{c(!1),m(!1)}};b.useEffect(()=>{i&&setTimeout(()=>{a()},2e3)},[i]);const S=[{Icon:$,label:"What do you like?",value:"smile"},{Icon:D,label:"What would you improve?",value:"meh"},{Icon:H,label:"What don't you like?",value:"frown"}],k=N("smileField"),B=()=>{const n=S.find(l=>l.value===k);return(n==null?void 0:n.label)||"What would you improve?"};return i?null:u(s,{component:"form",container:!0,justifyContent:"center",onSubmit:d(A),"aria-label":"Feedback Form","aria-describedby":"feedback-form-header",children:[e(Q,{control:y,name:"smileField",render:({field:n})=>e(Y,{children:S.map((l,p)=>e(Z,{autoFocus:p===0,disabled:r,...l},l.value)),...n,"aria-labelledby":"feedback-form-header",onChange:(l,p)=>{F(n.name,p)},size:"medium",exclusive:!0})}),k&&e(O,{...C("feedback",{required:"This field is required",maxLength:{value:200,message:"This field must not exceed 200 characters"}}),fullWidth:!0,multiline:!0,minRows:3,maxRows:3,label:B(),inputProps:{"aria-required":"true"},InputLabelProps:{component:J,required:!0},helperText:((w=h.feedback)==null?void 0:w.message)||"Max 200 characters",error:!!h.feedback,disabled:r}),u(s,{container:!0,direction:"row",marginTop:"16px",spacing:1,children:[e(s,{item:!0,xs:6,children:e(I,{color:"secondary",disabled:r,fullWidth:!0,onClick:a,children:"Cancel"})}),e(s,{item:!0,xs:6,children:e(E,{disabled:!k,fullWidth:!0,loading:r,type:"submit",variant:"contained",children:"Send Feedback"})})]})]})};try{_.displayName="FeedbackForm",_.__docgenInfo={description:"",displayName:"FeedbackForm",props:{analytics:{defaultValue:null,description:"",name:"analytics",required:!0,type:{name:"{ info: (entries: Record<string, unknown>) => any; }"}},appName:{defaultValue:null,description:"",name:"appName",required:!0,type:{name:"string"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},sent:{defaultValue:null,description:"",name:"sent",required:!0,type:{name:"boolean"}},setLoading:{defaultValue:null,description:"",name:"setLoading",required:!0,type:{name:"React.Dispatch<React.SetStateAction<boolean>>"}},setSent:{defaultValue:null,description:"",name:"setSent",required:!0,type:{name:"React.Dispatch<React.SetStateAction<boolean>>"}}}}}catch{}const v=({appName:t,handleClose:o,loading:a,sent:r})=>u(s,{alignItems:"center",container:!0,direction:"row",marginBottom:r?"0px":"8px",justifyContent:"space-between",flexWrap:"nowrap",id:"feedback-form-header",children:[e(s,{item:!0,whiteSpace:"normal",children:e(U,{component:"h2",variant:"h5",children:r?"Thank you for your feedback.":`Tell us what you think about ${t}`})}),e(s,{item:!0,marginRight:"-8px",children:e(G,{disabled:a,title:"Close",onClick:o,children:e(M,{})})})]});try{v.displayName="FeedbackHeader",v.__docgenInfo={description:"",displayName:"FeedbackHeader",props:{appName:{defaultValue:null,description:"",name:"appName",required:!0,type:{name:"string"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},sent:{defaultValue:null,description:"",name:"sent",required:!0,type:{name:"boolean"}}}}}catch{}const ee=V(X,{name:"AvFeedbackContainer",slot:"root"})({}),g=({analytics:t=z,appName:o})=>{const[a,r]=b.useState(null),[i,m]=b.useState(!1),[c,y]=b.useState(!1),h=F=>{r(F.currentTarget),m(!1)},d=()=>{r(null)};return u(R,{children:[e(I,{onClick:h,color:"secondary",size:"large",children:"Give Feedback"}),e(j,{anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{marginTop:"4px"},disableRestoreFocus:!0,onClose:d,open:!!a,transformOrigin:{vertical:"top",horizontal:"right"},children:u(ee,{children:[e(v,{appName:o,handleClose:d,loading:c,sent:i}),e(_,{analytics:t,appName:o,handleClose:d,loading:c,sent:i,setLoading:y,setSent:m})]})})]})};try{g.displayName="Feedback",g.__docgenInfo={description:"",displayName:"Feedback",props:{analytics:{defaultValue:null,description:"",name:"analytics",required:!1,type:{name:"{ info: (entries: any) => any; }"}},appName:{defaultValue:null,description:"",name:"appName",required:!0,type:{name:"string"}}}}}catch{}const wr={title:"Components/Feedback/Feedback",component:g,tags:["autodocs"]},f={render:t=>e(g,{...t}),args:{appName:"This App"}};var x,T,q;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: FeedbackProps) => <Feedback {...args} />,
  args: {
    appName: 'This App'
  }
}`,...(q=(T=f.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const xr=["_Feedback"];export{f as _Feedback,xr as __namedExportsOrder,wr as default};
//# sourceMappingURL=Feedback.stories-834ac8ec.js.map
