import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as u}from"./index-BgYLq7fD.js";import{I as r}from"./index-DnNfvsmq.js";import{C as m,W as s,S as f,I as h}from"./index-DcwHbAK-.js";import{A as y}from"./Alert-d3Gg0mya.js";const v={error:e.jsx(s,{color:"error"}),info:e.jsx(h,{color:"info"}),success:e.jsx(f,{color:"success"}),warning:e.jsx(s,{color:"warning",sx:{color:"warning.dark"}})},a=u.forwardRef((t,l)=>{const{action:o,onClose:n,closeText:i="dismiss alert",...c}=t,d={closeButton:o?p=>e.jsxs(e.Fragment,{children:[o,e.jsx(r,{size:"small",...p})]}):r,closeIcon:m};return e.jsx(y,{variant:"standard",action:n?void 0:o,onClose:n,closeText:i,iconMapping:v,slots:d,ref:l,...c})});try{a.displayName="Alert",a.__docgenInfo={description:"",displayName:"Alert",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertClasses>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},elevation:{defaultValue:{value:"1"},description:"Shadow depth, corresponds to `dp` in the spec.\nIt accepts values between 0 and 24 inclusive.",name:"elevation",required:!1,type:{name:"number"}},square:{defaultValue:{value:"false"},description:"If `true`, rounded corners are disabled.",name:"square",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},role:{defaultValue:{value:"'alert'"},description:"The ARIA role attribute of the element.",name:"role",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},action:{defaultValue:null,description:"The action to display. It renders after the message, at the end of the alert.",name:"action",required:!1,type:{name:"ReactNode"}},closeText:{defaultValue:{value:"'Close'"},description:`Override the default label for the *close popup* icon button.

For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).`,name:"closeText",required:!1,type:{name:"string"}},componentsProps:{defaultValue:{value:"{}"},description:"The extra props for the slot components.\nYou can override the existing props or add new ones.\n@deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"componentsProps",required:!1,type:{name:"{ closeButton?: IconButtonProps; closeIcon?: SvgIconProps; }"}},severity:{defaultValue:{value:"'success'"},description:"The severity of the alert. This defines the color and icon used.",name:"severity",required:!1,type:{name:'"success" | "info" | "warning" | "error"'}},icon:{defaultValue:null,description:"Override the icon displayed before the children.\nUnless provided, the icon is mapped to the value of the `severity` prop.\nSet to `false` to remove the `icon`.",name:"icon",required:!1,type:{name:"ReactNode"}},iconMapping:{defaultValue:null,description:"The component maps the `severity` prop to a range of different icons,\nfor instance success to `<SuccessOutlined>`.\nIf you wish to change this mapping, you can provide your own.\nAlternatively, you can use the `icon` prop to override the icon displayed.",name:"iconMapping",required:!1,type:{name:"Partial<Record<OverridableStringUnion<AlertColor, AlertPropsColorOverrides>, ReactNode>>"}},onClose:{defaultValue:null,description:"Callback fired when the component requests to be closed.\nWhen provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.\n@param event The event source of the callback.",name:"onClose",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ root?: SlotProps<ElementType<PaperProps, keyof IntrinsicElements>, AlertRootSlotPropsOverrides, AlertOwnerState>; ... 4 more ...; closeIcon?: SlotProps<...>; }"}}}}}catch{}export{a as A};
