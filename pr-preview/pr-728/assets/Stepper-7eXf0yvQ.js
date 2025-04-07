import{j as n}from"./jsx-runtime-CcL-W3nW.js";import{d as M,e as O,a as A,b as z,f as U,g as D,c as E,S as q}from"./Stepper-aozmk_l2.js";import{r as l}from"./index-DcWiA9TO.js";import{g as W,c as G}from"./generateUtilityClass-CVWqFxsA.js";import{m as H}from"./memoTheme-D-rVhYRp.js";import{g as $}from"./generateUtilityClasses-BGOCnVj7.js";import{u as F}from"./useSlot-DnkSxE3X.js";import{u as J}from"./DefaultPropsProvider-_cNB_dWy.js";import{C as L}from"./Collapse-quvbLMTx.js";import{s as V,c as X}from"./styled-CF1hcdwO.js";import{W as C,S as Y,h as K,N as Q}from"./index-CTQn_wDL.js";import{T as Z}from"./index-BtPDELIe.js";import{I as T}from"./index-DLsH_p52.js";import{G as ee}from"./index-Cyp_3NIz.js";function te(e){return W("MuiStepContent",e)}$("MuiStepContent",["root","last","transition"]);const ne=e=>{const{classes:t,last:o}=e;return X({root:["root",o&&"last"],transition:["transition"]},te,t)},ae=V("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.last&&t.last]}})(H(({theme:e})=>({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:e.vars?`1px solid ${e.vars.palette.StepContent.border}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}`,variants:[{props:{last:!0},style:{borderLeft:"none"}}]}))),oe=V(L,{name:"MuiStepContent",slot:"Transition",overridesResolver:(e,t)=>t.transition})({}),se=l.forwardRef(function(t,o){const i=J({props:t,name:"MuiStepContent"}),{children:s,className:p,TransitionComponent:r=L,transitionDuration:c="auto",TransitionProps:f,slots:h={},slotProps:y={},...S}=i,{orientation:v}=l.useContext(M),{active:a,last:d,expanded:m}=l.useContext(O),u={...i,last:d},x=ne(u);let w=c;c==="auto"&&!r.muiSupportAuto&&(w=void 0);const k={slots:h,slotProps:{transition:f,...y}},[B,j]=F("transition",{elementType:oe,externalForwardedProps:k,ownerState:u,className:x.transition,additionalProps:{in:a||m,timeout:w,unmountOnExit:!0}});return n.jsx(ae,{className:G(x.root,p),ref:o,ownerState:u,...S,children:n.jsx(B,{as:r,...j,children:s})})}),I=({children:e,...t})=>n.jsx(A,{...t,children:e});try{I.displayName="Step",I.__docgenInfo={description:"",displayName:"Step",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},active:{defaultValue:null,description:"Sets the step as active. Is passed to child components.",name:"active",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Should be `Step` sub-components such as `StepLabel`, `StepContent`.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<StepClasses> & Partial<ClassNameMap<never>>"}},completed:{defaultValue:null,description:"Mark the step as completed. Is passed to child components.",name:"completed",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"If `true`, the step is disabled, will also disable the button if\n`StepButton` is a child of `Step`. Is passed to child components.",name:"disabled",required:!1,type:{name:"boolean"}},expanded:{defaultValue:{value:"false"},description:"Expand the step.",name:"expanded",required:!1,type:{name:"boolean"}},index:{defaultValue:null,description:`The position of the step.
The prop defaults to the value inherited from the parent Stepper component.`,name:"index",required:!1,type:{name:"number"}},last:{defaultValue:null,description:"If `true`, the Step is displayed as rendered last.\nThe prop defaults to the value inherited from the parent Stepper component.",name:"last",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const P=({children:e,...t})=>n.jsx(z,{...t,disableRipple:!0,disableTouchRipple:!0,children:e});try{P.displayName="StepButton",P.__docgenInfo={description:"",displayName:"StepButton",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<StepButtonClasses> & Partial<ClassNameMap<never>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"Can be a `StepLabel` or a node to place inside `StepLabel` as children.\nThe content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},icon:{defaultValue:null,description:"The icon displayed by the step label.",name:"icon",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},optional:{defaultValue:null,description:"The optional node to display.",name:"optional",required:!1,type:{name:"ReactNode"}}}}}catch{}const _=e=>n.jsx(U,{...e});try{_.displayName="StepConnector",_.__docgenInfo={description:"",displayName:"StepConnector",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<StepConnectorClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const N=({children:e,...t})=>n.jsx(se,{...t,children:e});try{N.displayName="StepContent",N.__docgenInfo={description:"",displayName:"StepContent",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<StepContentClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},TransitionComponent:{defaultValue:{value:"Collapse"},description:"The component used for the transition.\n[Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.\n@deprecated Use `slots.transition` instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).",name:"TransitionComponent",required:!1,type:{name:"JSXElementConstructor<TransitionProps & { children: ReactElement<unknown, any>; }>"}},transitionDuration:{defaultValue:{value:"'auto'"},description:`Adjust the duration of the content expand transition.
Passed as a prop to the transition component.

Set to 'auto' to automatically calculate transition time based on height.`,name:"transitionDuration",required:!1,type:{name:'number | "auto" | { appear?: number; enter?: number; exit?: number; } | { appear?: number; enter?: number; exit?: number; }'}},TransitionProps:{defaultValue:null,description:"Props applied to the transition element.\nBy default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.\n@deprecated Use `slotProps.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"TransitionProps",required:!1,type:{name:"TransitionProps"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<StepContentSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ transition?: SlotProps<ElementType<CollapseProps, keyof IntrinsicElements>, {}, StepContentOwnerState>; }"}}}}}catch{}const b=({error:e,completed:t,warning:o,...i})=>{let s=null;return e&&(s=C),o&&(s=p=>n.jsx(C,{color:"warning",...p})),t&&(s=Y),n.jsx(D,{...i,error:e,completed:t,as:s})};try{b.displayName="StepIcon",b.__docgenInfo={description:"",displayName:"StepIcon",props:{warning:{defaultValue:null,description:"If `true`, the step will have a warning icon.",name:"warning",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"false"},description:"Whether this step is active.",name:"active",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<StepIconClasses>"}},completed:{defaultValue:{value:"false"},description:"Mark the step as completed. Is passed to child components.",name:"completed",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"If `true`, the step is marked as failed.",name:"error",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"The label displayed in the step icon.",name:"icon",required:!0,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"(props: SvgIconProps) => Element"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},color:{defaultValue:{value:"'inherit'"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
You can use the \`htmlColor\` prop to apply a color attribute to the SVG element.`,name:"color",required:!1,type:{name:'OverridableStringUnion<"action" | "success" | "info" | "warning" | "error" | "inherit" | "disabled" | "primary" | "secondary", SvgIconPropsColorOverrides>'}},fontSize:{defaultValue:{value:"'medium'"},description:"The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.",name:"fontSize",required:!1,type:{name:'OverridableStringUnion<"small" | "inherit" | "large" | "medium", SvgIconPropsSizeOverrides>'}},shapeRendering:{defaultValue:null,description:`The shape-rendering attribute. The behavior of the different options is described on the
[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
If you are having issues with blurry icons you should investigate this prop.`,name:"shapeRendering",required:!1,type:{name:"string"}},htmlColor:{defaultValue:null,description:"Applies a color attribute to the SVG element.",name:"htmlColor",required:!1,type:{name:"string"}},inheritViewBox:{defaultValue:{value:"false"},description:"If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`\nprop will be ignored.\nUseful when you want to reference a custom `component` and have `SvgIcon` pass that\n`component`'s viewBox to the root node.",name:"inheritViewBox",required:!1,type:{name:"boolean"}},titleAccess:{defaultValue:null,description:`Provides a human-readable title for the element that contains it.
https://www.w3.org/TR/SVG-access/#Equivalent`,name:"titleAccess",required:!1,type:{name:"string"}},viewBox:{defaultValue:{value:"'0 0 24 24'"},description:`Allows you to redefine what the coordinates without units mean inside an SVG element.
For example, if the SVG element is 500 (width) by 200 (height),
and you pass viewBox="0 0 50 20",
this means that the coordinates inside the SVG will go from the top left corner (0,0)
to bottom right (50,20) and each unit will be worth 10px.`,name:"viewBox",required:!1,type:{name:"string"}}}}}catch{}const g=({children:e,error:t,optional:o,warning:i,...s})=>(typeof o=="string"&&(o=n.jsx(Z,{variant:"caption",children:o})),n.jsx(E,{StepIconProps:{error:t,warning:i},StepIconComponent:b,error:t,optional:o,...s,children:e}));g.muiName=E.muiName;try{g.displayName="StepLabel",g.__docgenInfo={description:"",displayName:"StepLabel",props:{warning:{defaultValue:null,description:"If `true`, the step will have a warning icon.",name:"warning",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"In most cases will simply be a string containing a title for the label.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<StepLabelClasses>"}},componentsProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.\n@deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"componentsProps",required:!1,type:{name:"{ label?: HTMLProps<HTMLSpanElement>; }"}},error:{defaultValue:{value:"false"},description:"If `true`, the step is marked as failed.",name:"error",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Override the default label of the step icon.",name:"icon",required:!1,type:{name:"ReactNode"}},optional:{defaultValue:null,description:"The optional node to display.",name:"optional",required:!1,type:{name:"ReactNode"}},StepIconComponent:{defaultValue:null,description:"The component to render in place of the [`StepIcon`](https://mui.com/material-ui/api/step-icon/).\n@deprecated Use `slots.stepIcon` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"StepIconComponent",required:!1,type:{name:"ElementType<StepIconProps, keyof IntrinsicElements>"}},StepIconProps:{defaultValue:null,description:"Props applied to the [`StepIcon`](https://mui.com/material-ui/api/step-icon/) element.\n@deprecated Use `slotProps.stepIcon` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"StepIconProps",required:!1,type:{name:"Partial<StepIconProps>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<StepLabelSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ label?: SlotProps<ElementType<HTMLProps<HTMLSpanElement>, keyof IntrinsicElements>, {}, StepLabelOwnerState>; stepIcon?: SlotProps<...>; }"}}}}}catch{}const R=({children:e,connector:t,orientation:o,scrollButtons:i,...s})=>{const p=o!=="vertical",r=l.useRef(null),[c,f]=l.useState(!0),[h,y]=l.useState(!0);l.useEffect(()=>{const a=r.current,d=()=>{if(a){f(a.scrollLeft>0);const u=Math.abs(a.scrollWidth-a.clientWidth-a.scrollLeft)<=1;y(!u)}},m=new ResizeObserver(()=>{d()});return a&&(a.addEventListener("scroll",d),m.observe(a),d()),()=>{a&&(a.removeEventListener("scroll",d),m.disconnect())}},[]);const S=i&&o!=="vertical",v=V("div")({width:"50px",flexShrink:0,paddingTop:"15px"});return S?n.jsxs(ee,{container:!0,direction:"row",justifyContent:"space-between",wrap:"nowrap",children:[n.jsx(v,{style:{paddingRight:"8px"},children:c&&n.jsx(T,{title:"Previous",variant:"outlined",onClick:()=>{var a;return(a=r.current)==null?void 0:a.scrollTo({left:0,behavior:"smooth"})},children:n.jsx(K,{fontSize:"xsmall"})})}),n.jsx(q,{"aria-label":"multi-step process",role:"region",...s,connector:t,orientation:o,alternativeLabel:p,ref:r,children:e,tabIndex:0}),n.jsx(v,{style:{paddingLeft:"8px"},children:h&&n.jsx(T,{title:"Next",variant:"outlined",onClick:()=>{var a;(a=r.current)==null||a.scrollTo({left:r.current.scrollWidth-r.current.clientWidth,behavior:"smooth"})},children:n.jsx(Q,{fontSize:"xsmall"})})})]}):n.jsx(q,{"aria-label":"multi-step process",role:"region",...s,connector:t,orientation:o,alternativeLabel:p,ref:r,children:e})};try{R.displayName="Stepper",R.__docgenInfo={description:"",displayName:"Stepper",props:{scrollButtons:{defaultValue:null,description:"",name:"scrollButtons",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'elevation'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'OverridableStringUnion<"elevation" | "outlined", PaperPropsVariantOverrides>'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<StepperClasses> & Partial<ClassNameMap<never>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"Two or more `<Step />` components.",name:"children",required:!1,type:{name:"ReactNode"}},square:{defaultValue:{value:"false"},description:"If `true`, rounded corners are disabled.",name:"square",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},orientation:{defaultValue:{value:"'horizontal'"},description:"The component orientation (layout flow direction).",name:"orientation",required:!1,type:{name:"Orientation"}},activeStep:{defaultValue:{value:"0"},description:`Set the active step (zero based index).
Set to -1 to disable all the steps.`,name:"activeStep",required:!1,type:{name:"number"}},connector:{defaultValue:{value:"<StepConnector />"},description:"An element to be placed between each step.",name:"connector",required:!1,type:{name:"ReactElement<unknown, any>"}},nonLinear:{defaultValue:{value:"false"},description:"If set the `Stepper` will not assist in controlling steps for linear flow.",name:"nonLinear",required:!1,type:{name:"boolean"}}}}}catch{}export{I as S,R as a,P as b,g as c};
