import{j as o}from"./jsx-runtime-CcL-W3nW.js";import{r as s}from"./index-DcWiA9TO.js";import{s as i}from"./styled-CF1hcdwO.js";import{A as f,a as S,b as x,c as V}from"./AccordionSummary-Bpx6nRwA.js";import{d as q}from"./index-CTQn_wDL.js";import{T as y}from"./index-BtPDELIe.js";const C=i(f,{name:"MuiAccordion",slot:"AvFilled",overridesResolver:(e,a)=>a.avFilled})(({theme:e})=>({borderColor:e.palette.grey[100],"> .MuiAccordion-heading .MuiAccordionSummary-root":{backgroundColor:e.palette.grey[100]}})),P=i(f,{name:"MuiAccordion",slot:"AvOutlined",overridesResolver:(e,a)=>a.avOutlined})(({theme:e})=>({borderColor:e.palette.divider,"> .MuiAccordion-heading .MuiAccordionSummary-root:not(.Mui-focusVisible, :hover, :active)":{backgroundColor:e.palette.background.paper},"> .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionDetails-root:first-of-type":{borderTop:`1px solid ${e.palette.divider}`}})),c=s.forwardRef((e,a)=>{const{variant:r="filled",disableNestedStyling:l=!1,className:d,...n}=e,t=`${r==="filled"?"MuiAccordion-avFilled":"MuiAccordion-avOutlined"}${l?" Av-disableNested":""} ${d||""}`;return r==="filled"?o.jsx(C,{className:t,...n,ref:a}):o.jsx(P,{className:t,...n,ref:a})});try{c.displayName="Accordion",c.__docgenInfo={description:"",displayName:"Accordion",props:{variant:{defaultValue:{value:'"filled"'},description:"",name:"variant",required:!1,type:{name:'"filled" | "outlined"'}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<AccordionSlots>"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AccordionClasses> & Partial<ClassNameMap<never>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"NonNullable<ReactNode> & ReactNode"}},square:{defaultValue:{value:"false"},description:"If `true`, rounded corners are disabled.",name:"square",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},onChange:{defaultValue:null,description:"Callback fired when the expand/collapse state is changed.\n@param event The event source of the callback. **Warning**: This is a generic event not a change event.\n@param expanded The `expanded` state of the accordion.",name:"onChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, expanded: boolean) => void"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ heading?: SlotProps<ElementType<HTMLProps<HTMLHeadingElement>, keyof IntrinsicElements>, AccordionHeadingSlotPropsOverrides, AccordionOwnerState>; transition?: SlotProps<...>; }"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disableGutters:{defaultValue:{value:"false"},description:"If `true`, it removes the margin between two expanded accordion items and the increase of height.",name:"disableGutters",required:!1,type:{name:"boolean"}},defaultExpanded:{defaultValue:{value:"false"},description:"If `true`, expands the accordion by default.",name:"defaultExpanded",required:!1,type:{name:"boolean"}},expanded:{defaultValue:null,description:"If `true`, expands the accordion, otherwise collapse it.\nSetting this prop enables control over the accordion.",name:"expanded",required:!1,type:{name:"boolean"}},disableNestedStyling:{defaultValue:{value:"false"},description:"Disable nested styling for child `Accordions`",name:"disableNestedStyling",required:!1,type:{name:"boolean"}}}}}catch{}const p=s.forwardRef((e,a)=>o.jsx(S,{...e,ref:a}));try{p.displayName="AccordionActions",p.__docgenInfo={description:"",displayName:"AccordionActions",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AccordionActionsClasses>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},disableSpacing:{defaultValue:{value:"false"},description:"If `true`, the actions do not have additional margin.",name:"disableSpacing",required:!1,type:{name:"boolean"}}}}}catch{}const u=s.forwardRef((e,a)=>o.jsx(x,{...e,ref:a}));try{u.displayName="AccordionDetails",u.__docgenInfo={description:"",displayName:"AccordionDetails",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AccordionDetailsClasses>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}}}catch{}const N=i(y,{name:"MuiAccordionSummary",slot:"AvPrimaryContent",overridesResolver:(e,a)=>a.avPrimaryContent})(({theme:e})=>({marginRight:"auto",paddingRight:e.spacing(1),lineHeight:"1.5rem"})),T=i(y,{name:"MuiAccordionSummary",slot:"AvSecondaryContent",overridesResolver:(e,a)=>a.avSecondaryContent})({}),m=s.forwardRef((e,a)=>{const{children:r,primary:l,primaryProps:d,secondary:n,secondaryProps:t,...h}=e,v={className:"MuiAccordionSummary-avPrimaryContent",variant:"h6",component:"div",...d},b={className:"MuiAccordionSummary-avSecondaryContent",variant:"body1",component:"div",...t},g=o.jsx(N,{...v,children:l||r}),A=n?o.jsx(T,{...b,children:n}):null;return o.jsxs(V,{...h,expandIcon:o.jsx(q,{}),ref:a,children:[g,A]})});try{m.displayName="AccordionSummary",m.__docgenInfo={description:"",displayName:"AccordionSummary",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AccordionSummaryClasses> & Partial<ClassNameMap<never>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},primary:{defaultValue:null,description:"The main content element. Aliased by the `children` prop.",name:"primary",required:!1,type:{name:"ReactNode"}},secondary:{defaultValue:null,description:"The secondary content element.",name:"secondary",required:!1,type:{name:"ReactNode"}},primaryProps:{defaultValue:null,description:"These props will be forwarded to the primary typography component. Update `component` to reflect the correct heading level for accessibility.",name:"primaryProps",required:!1,type:{name:'Omit<TypographyProps, "className">'}},secondaryProps:{defaultValue:null,description:"These props will be forwarded to the secondary typography component.",name:"secondaryProps",required:!1,type:{name:'Omit<TypographyProps, "className">'}}}}}catch{}export{c as A,m as a,u as b,p as c};
