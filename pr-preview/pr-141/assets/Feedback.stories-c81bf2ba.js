import{a as e,j as u,F as N}from"./jsx-runtime-a3bcee63.js";import{r as g}from"./index-570b25c1.js";import{P as A}from"./Popover-277c5654.js";import{B as q,L as B,I as R}from"./index-5496e90f.js";import{T as L,a as W,b as P,c as j}from"./index-5d036f5e.js";import{T as E}from"./index-0cd865b2.js";import{o as $,p as z,q as G,C as O}from"./index-fe51f95b.js";import{u as D,C as S}from"./index.esm-d81a0d8c.js";import{G as s}from"./Grid-af1a3ff2.js";import{s as I}from"./styled-7846e708.js";import{T as H}from"./index-96688515.js";import{C as M}from"./Container-a1530f69.js";import"./_commonjsHelpers-042e6b4d.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-018254e6.js";import"./generateUtilityClasses-70c60a0e.js";import"./Modal-8fa896b2.js";import"./Backdrop-49825a13.js";import"./useTheme-76c02901.js";import"./utils-1ac07bae.js";import"./TransitionGroupContext-c71596b3.js";import"./index-8a077077.js";import"./useForkRef-153a0a89.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-f4be827f.js";import"./createChainedFunction-0bab83cf.js";import"./Grow-e87a736b.js";import"./Paper-722ac472.js";import"./debounce-517eeb3c.js";import"./Button-d84dd9a0.js";import"./ButtonBase-d80b4855.js";import"./emotion-react.browser.esm-474fda6d.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./Tooltip-c716d13a.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-de653fbd.js";import"./LoadingButton-7f26c21d.js";import"./extends-90dea224.js";import"./CircularProgress-83597315.js";import"./index-7c0e1f2b.js";import"./_baseFor-53bad3ef.js";import"./_initCloneObject-31384e14.js";import"./isPlainObject-272efb33.js";import"./ToggleButtonGroup-303ca8bb.js";import"./react-is.production.min-a192e302.js";import"./ToggleButton-7fcf6cce.js";import"./index-85bef318.js";import"./index-9681c8ff.js";import"./Box-0b96d669.js";import"./extendSxProp-9115426f.js";import"./FormControlLabel-625d44f3.js";import"./utils-3d35716f.js";import"./Typography-f61e077a.js";import"./Stack-8a417692.js";import"./styled-11d1647d.js";import"./FormLabel-16418a49.js";import"./isMuiElement-6907f060.js";import"./FormHelperText-ae2a8f0e.js";import"./OutlinedInput-bd5ed4eb.js";import"./GlobalStyles-7ba993a7.js";import"./Select-be273af1.js";import"./Menu-932c384c.js";import"./createSvgIcon-60c2b2ae.js";import"./SvgIcon-951d7748.js";import"./Divider-fcaf2f3a.js";import"./dividerClasses-b19abef8.js";import"./TextField-785bc636.js";import"./faCircleArrowRight-e7789e56.js";import"./faMagnifyingGlass-482fd726.js";var J=({...t})=>e(A,{...t});const K=I(L,{name:"AvFeedbackContainer",slot:"SmileButtons"})({}),Q=({disabled:t,Icon:o,label:l,value:r,...i})=>e("div",{children:e(W,{"aria-label":r,value:r,...i,disabled:t,children:e(o,{fontSize:"large"})})}),k=({analytics:t,appName:o,handleClose:l,loading:r,sent:i,setLoading:p,setSent:c})=>{const{control:h,handleSubmit:y,setValue:d,watch:F}=D(),_=async({smileField:n,...a})=>{p(!0);try{const m=await P.getCurrentRegion();await t.info({surveyId:`${o.replace(/\s/g,"_")}_Smile_Survey`,smileLocation:`${o}`,smile:`icon-${n}`,url:window.location.href,region:m.data.regions[0]&&m.data.regions[0].id,userAgent:window.navigator.userAgent,submitTime:new Date,...a}),c(!0),p(!1)}catch{c(!1),p(!1)}};g.useEffect(()=>{i&&setTimeout(()=>{l()},2e3)},[i]);const C=[{Icon:$,label:"What do you like?",value:"smile"},{Icon:z,label:"What would you improve?",value:"meh"},{Icon:G,label:"What don't you like?",value:"frown"}],V=()=>{const n=F("smileField"),a=C.find(m=>m.value===n);return(a==null?void 0:a.label)||"What would you improve?"};return i?null:u(s,{component:"form",container:!0,justifyContent:"center",onSubmit:y(_),children:[e(S,{control:h,name:"smileField",render:({field:n})=>e(K,{children:C.map(a=>e(Q,{disabled:r,...a},a.value)),...n,onChange:(a,m)=>{d(n.name,m)},size:"medium",exclusive:!0})}),e(S,{control:h,name:"feedback",render:({field:n})=>e(E,{...n,fullWidth:!0,multiline:!0,minRows:3,maxRows:3,label:V(),disabled:r}),rules:{maxLength:200,required:!0}}),u(s,{container:!0,direction:"row",marginTop:"8px",spacing:1,children:[e(s,{item:!0,xs:6,children:e(q,{color:"secondary",disabled:r,fullWidth:!0,children:"Cancel"})}),e(s,{item:!0,xs:6,children:e(B,{disabled:!F("smileField"),fullWidth:!0,loading:r,type:"submit",variant:"contained",children:"Send Feedback"})})]})]})};try{k.displayName="FeedbackForm",k.__docgenInfo={description:"",displayName:"FeedbackForm",props:{analytics:{defaultValue:null,description:"",name:"analytics",required:!0,type:{name:"{ info: (entries: any) => any; }"}},appName:{defaultValue:null,description:"",name:"appName",required:!0,type:{name:"string"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},sent:{defaultValue:null,description:"",name:"sent",required:!0,type:{name:"boolean"}},setLoading:{defaultValue:null,description:"",name:"setLoading",required:!0,type:{name:"React.Dispatch<React.SetStateAction<boolean>>"}},setSent:{defaultValue:null,description:"",name:"setSent",required:!0,type:{name:"React.Dispatch<React.SetStateAction<boolean>>"}}}}}catch{}const v=({appName:t,handleClose:o,loading:l,sent:r})=>u(s,{alignItems:"center",container:!0,direction:"row",marginBottom:r?"0px":"8px",justifyContent:"space-between",whiteSpace:"nowrap",children:[e(s,{item:!0,width:"",children:e(H,{variant:"h5",children:r?"Thank you for your feedback.":`Tell us what you think about ${t}`})}),e(s,{item:!0,marginRight:"-8px",children:e(R,{disabled:l,title:"Close",onClick:o,children:e(O,{})})})]});try{v.displayName="FeedbackHeader",v.__docgenInfo={description:"",displayName:"FeedbackHeader",props:{appName:{defaultValue:null,description:"",name:"appName",required:!0,type:{name:"string"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},sent:{defaultValue:null,description:"",name:"sent",required:!0,type:{name:"boolean"}}}}}catch{}const U=I(M,{name:"AvFeedbackContainer",slot:"root"})({}),b=({analytics:t=j,appName:o})=>{const[l,r]=g.useState(null),[i,p]=g.useState(!1),[c,h]=g.useState(!1),y=_=>{r(_.currentTarget)},d=()=>{r(null)};return u(N,{children:[e(q,{onClick:y,color:"secondary",children:"Give Feedback"}),e(J,{anchorEl:l,anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{marginTop:"4px"},disableRestoreFocus:!0,onClose:d,open:!!l,transformOrigin:{vertical:"top",horizontal:"right"},children:u(U,{children:[e(v,{appName:o,handleClose:d,loading:c,sent:i}),e(k,{analytics:t,appName:o,handleClose:d,loading:c,sent:i,setLoading:h,setSent:p})]})})]})};try{b.displayName="Feedback",b.__docgenInfo={description:"",displayName:"Feedback",props:{analytics:{defaultValue:null,description:"",name:"analytics",required:!1,type:{name:"{ info: (entries: any) => any; }"}},appName:{defaultValue:null,description:"",name:"appName",required:!0,type:{name:"string"}}}}}catch{}const Ft={title:"Components/Feedback/Feedback",component:b,tags:["autodocs"]},f={render:t=>e(b,{...t}),args:{appName:"This App"}};var w,x,T;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args: FeedbackProps) => <Feedback {...args} />,
  args: {
    appName: 'This App'
  }
}`,...(T=(x=f.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const _t=["_Feedback"];export{f as _Feedback,_t as __namedExportsOrder,Ft as default};
//# sourceMappingURL=Feedback.stories-c81bf2ba.js.map
