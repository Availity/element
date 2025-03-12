import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{r as g}from"./index-DcWiA9TO.js";import{T as R,a as B,P as L}from"./index-jEjq4cAX.js";import{B as T,L as W,I}from"./index-DLsH_p52.js";import{e as P,g as z}from"./index-Bq9RhMiD.js";import{T as E}from"./index-Cy29Pico.js";import{G as l}from"./index-Cyp_3NIz.js";import{t as H,u as O,v as $,C as D,s as G}from"./index-4AU0IlPL.js";import{F as M}from"./index-DS2qViMa.js";import{u as J,C as K}from"./index.esm-D1k4U55D.js";import{s as u}from"./styled-CF1hcdwO.js";import{T as Q}from"./index-BtPDELIe.js";import{C as U}from"./Container-Cqq8qXXg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Popover-ChEuM7rO.js";import"./generateUtilityClass-CVWqFxsA.js";import"./identifier-Dtqimryx.js";import"./isHostComponent-DVu5iVWx.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./useSlot-DnkSxE3X.js";import"./resolveComponentProps-Dg20wxiM.js";import"./useForkRef-BVrIj09m.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./Portal-CBAx_nZm.js";import"./useTheme-DUkCvbx_.js";import"./useTheme-C2CrmYKc.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./getReactElementRef-AnOffBoZ.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-DXcIEVia.js";import"./memoTheme-D-rVhYRp.js";import"./Modal-B5s0Thvt.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-B4gbyDGC.js";import"./Fade-Dl4gmST4.js";import"./ToggleButtonGroup-Bvxgw2Rb.js";import"./ToggleButton-FLUHnJ1i.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DbVRbsLs.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./isFocusVisible-B8k4qzLc.js";import"./Tooltip-CiiaKkqp.js";import"./index-nos-0K8U.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./useSlotProps-BAIpVL6Y.js";import"./IconButton-Caxu-qgA.js";import"./CircularProgress-D8w9ZPs6.js";import"./Button-BAEbeAyH.js";import"./LoadingButton-9DxABi24.js";import"./index-B-wyh3_N.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./_toKey-MoF_TmUD.js";import"./TextField-BxbLM7nG.js";import"./OutlinedInput-CQlxW3ax.js";import"./useFormControl-68oiojFJ.js";import"./formControlState-Dq1zat_P.js";import"./index-f0Aa_BgU.js";import"./extendSxProp-B5AgUjQT.js";import"./utils-DoM3o7-Q.js";import"./Select-hLZ2S4VH.js";import"./Menu-Byu17A6t.js";import"./List-ChBzRQcW.js";import"./createSvgIcon-TketyoFF.js";import"./SvgIcon-DSdWmKAH.js";import"./FormLabel-98YPf6ct.js";import"./FormControl-BPSU2g7t.js";import"./isMuiElement-DAzOCCHH.js";import"./Box-DWnb8VZB.js";import"./Grid2-y9MPRr2u.js";import"./styled-vBjI3IQc.js";import"./useThemeProps-BIK-1DKm.js";import"./Stack-BcsM4Vc0.js";import"./faCircleArrowRight-BeBmJtPK.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./index-DMWJB0MK.js";import"./faCheck-B05F4ORy.js";import"./FormControlLabel-GqYWwHWT.js";import"./Typography-CvSvtD2a.js";import"./Switch-BqVUWLaW.js";import"./SwitchBase-Z9YgLJlx.js";import"./RadioGroup-BogPRRDq.js";import"./Divider-jUONNV4j.js";import"./dividerClasses-BmOcEkDu.js";const X=u(R,{name:"AvFeedbackContainer",slot:"SmileButtons"})({}),Y=u(l,{name:"AvFeedbackContainer",slot:"FormActions"})({}),Z=({disabled:t,Icon:o,label:a,value:r,...i})=>e.jsx("div",{children:e.jsx(B,{component:I,disableRipple:!0,title:a,"aria-label":r,value:r,...i,disabled:t,size:"large",children:e.jsx(o,{})})}),j=({analytics:t,appName:o,handleClose:a,loading:r,sent:i,setLoading:m,setSent:d})=>{var w;const{control:b,formState:{errors:f},handleSubmit:x,register:c,setValue:F,watch:k}=J(),A=async({smileField:n,...s})=>{m(!0);try{const p=await P.getCurrentRegion();await t.info({surveyId:`${o.replace(/\s/g,"_")}_Smile_Survey`,smileLocation:`${o}`,smile:`icon-${n}`,url:window.location.href,region:p.data.regions[0]&&p.data.regions[0].id,userAgent:window.navigator.userAgent,submitTime:new Date,...s}),d(!0),m(!1)}catch{d(!1),m(!1)}};g.useEffect(()=>{i&&setTimeout(()=>{a()},2e3)},[i]);const _=[{Icon:H,label:"What do you like?",value:"smile"},{Icon:O,label:"What would you improve?",value:"meh"},{Icon:$,label:"What don't you like?",value:"frown"}],v=k("smileField"),N=()=>{const n=_.find(s=>s.value===v);return(n==null?void 0:n.label)||"What would you improve?"};return i?null:e.jsxs(l,{component:"form",container:!0,sx:{justifyContent:"center"},onSubmit:x(A),"aria-label":"Feedback Form","aria-describedby":"feedback-form-header",children:[e.jsx(K,{control:b,name:"smileField",render:({field:n})=>e.jsx(X,{children:_.map((s,p)=>e.jsx(Z,{autoFocus:p===0,disabled:r,...s},s.value)),...n,"aria-labelledby":"feedback-form-header",onChange:(s,p)=>{F(n.name,p)},size:"medium",exclusive:!0})}),e.jsx(E,{...c("feedback",{required:"This field is required",maxLength:{value:200,message:"This field must not exceed 200 characters"}}),fullWidth:!0,multiline:!0,minRows:3,maxRows:3,label:N(),InputLabelProps:{component:M,required:!0},inputProps:{"aria-required":"true"},helperText:((w=f.feedback)==null?void 0:w.message)||"Max 200 characters",error:!!f.feedback,disabled:r||!v}),e.jsxs(Y,{container:!0,direction:"row",width:"100%",spacing:1,wrap:"wrap",children:[e.jsx(l,{sx:{flex:1,minWidth:"147px"},children:e.jsx(T,{color:"secondary",disabled:r,onClick:a,children:"Close"})}),e.jsx(l,{sx:{flex:1,minWidth:"147px"},children:e.jsx(W,{disabled:!v,loading:r,type:"submit",variant:"contained",children:"Send Feedback"})})]})]})};try{j.displayName="FeedbackForm",j.__docgenInfo={description:"",displayName:"FeedbackForm",props:{analytics:{defaultValue:null,description:"",name:"analytics",required:!0,type:{name:"{ info: (entries: Record<string, unknown>) => any; }"}},appName:{defaultValue:null,description:"",name:"appName",required:!0,type:{name:"string"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},sent:{defaultValue:null,description:"",name:"sent",required:!0,type:{name:"boolean"}},setLoading:{defaultValue:null,description:"",name:"setLoading",required:!0,type:{name:"React.Dispatch<React.SetStateAction<boolean>>"}},setSent:{defaultValue:null,description:"",name:"setSent",required:!0,type:{name:"React.Dispatch<React.SetStateAction<boolean>>"}}}}}catch{}const ee=u(l,{name:"AvFeedbackContainer",slot:"FeedbackHeaderContainer"})({}),C=({appName:t,handleClose:o,loading:a,sent:r})=>e.jsxs(ee,{alignItems:"flex-start",container:!0,direction:"row",justifyContent:"space-between",flexWrap:"nowrap",id:"feedback-form-header",children:[e.jsx(l,{sx:{whiteSpace:"normal"},children:e.jsx(Q,{component:"h2",variant:"h5",children:r?"Thank you for your feedback.":`Tell us what you think about ${t}`})}),e.jsx(l,{children:e.jsx(I,{disabled:a,title:"Close",onClick:o,size:"medium",children:e.jsx(D,{fontSize:"xsmall"})})})]});try{C.displayName="FeedbackHeader",C.__docgenInfo={description:"",displayName:"FeedbackHeader",props:{appName:{defaultValue:null,description:"",name:"appName",required:!0,type:{name:"string"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},sent:{defaultValue:null,description:"",name:"sent",required:!0,type:{name:"boolean"}}}}}catch{}const te=u(U,{name:"AvFeedbackContainer",slot:"root"})({}),re=u(T,{name:"AvFeedbackButton",slot:"root"})({}),y=({analytics:t=z,appName:o,buttonVariant:a="secondary"})=>{const[r,i]=g.useState(null),[m,d]=g.useState(!1),[b,f]=g.useState(!1),x=k=>{i(k.currentTarget),d(!1)},c=()=>{i(null)},F=!!r;return e.jsxs(e.Fragment,{children:[e.jsx(re,{onClick:x,color:a,startIcon:e.jsx(G,{}),children:"Feedback"}),e.jsx(L,{anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{marginTop:"4px"},disableRestoreFocus:!0,onClose:c,open:F,transformOrigin:{vertical:"top",horizontal:"right"},children:e.jsxs(te,{children:[e.jsx(C,{appName:o,handleClose:c,loading:b,sent:m}),e.jsx(j,{analytics:t,appName:o,handleClose:c,loading:b,sent:m,setLoading:f,setSent:d})]})})]})};try{y.displayName="Feedback",y.__docgenInfo={description:"",displayName:"Feedback",props:{analytics:{defaultValue:null,description:"",name:"analytics",required:!1,type:{name:"{ info: (entries: Record<string, unknown>) => void; }"}},appName:{defaultValue:null,description:"",name:"appName",required:!0,type:{name:"string"}},buttonVariant:{defaultValue:{value:"secondary"},description:"",name:"buttonVariant",required:!1,type:{name:'"secondary" | "tertiary"'}}}}}catch{}const Ht={title:"Components/Feedback/Feedback",component:y,tags:["autodocs"]},h={render:t=>e.jsx(y,{...t}),args:{appName:"This App"}};var S,V,q;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: FeedbackProps) => <Feedback {...args} />,
  args: {
    appName: 'This App'
  }
}`,...(q=(V=h.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const Ot=["_Feedback"];export{h as _Feedback,Ot as __namedExportsOrder,Ht as default};
