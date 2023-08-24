import{j as t}from"./jsx-runtime-91a467a5.js";import{s as o}from"./index-9681c8ff.js";import{H as r}from"./index-8950f082.js";import{I as d}from"./index-8e80667f.js";const a=e=>{o.send({event:"nav:help:field",id:e})},n=({helpTopicId:e,labelId:i,sx:l,...s})=>t(d,{...s,color:"primary",title:"Help",role:"link",onClick:()=>a(e),"aria-describedby":i,size:"small",sx:{...l,padding:.5,fontSize:"inherit",marginTop:"-2px"},children:t(r,{"aria-hidden":!0,titleAccess:void 0})});try{a.displayName="triggerFieldHelp",a.__docgenInfo={description:"",displayName:"triggerFieldHelp",props:{}}}catch{}try{n.displayName="FieldHelpIcon",n.__docgenInfo={description:"",displayName:"FieldHelpIcon",props:{helpTopicId:{defaultValue:null,description:"The Help ID",name:"helpTopicId",required:!0,type:{name:"string"}},labelId:{defaultValue:null,description:"The id of the on-screen label for aria-describedby, needed for accessibility",name:"labelId",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<IconButtonClasses> & Partial<ClassNameMap<never>>"}},children:{defaultValue:null,description:`The icon to display.
The content of the component.`,name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:{value:"'default'"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:'"inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | "default"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},edge:{defaultValue:{value:"false"},description:`If given, uses a negative margin to counteract the padding on one
side (this is often helpful for aligning the left or right
side of the icon with content above or below, without ruining the border
size and shape).`,name:"edge",required:!1,type:{name:'false | "end" | "start"'}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:'"small" | "large" | "medium"'}}}}}catch{}export{n as F};
//# sourceMappingURL=FieldHelpIcon-3b1edd12.js.map
