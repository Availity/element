import{j as p,a as n}from"./jsx-runtime-a3bcee63.js";import{r as u}from"./index-570b25c1.js";import{F as m}from"./FieldHelpIcon-f5d77900.js";import{B as c}from"./Box-51bd3ea0.js";import{M as f}from"./FormLabel-d63492ff.js";import{s as h}from"./styled-523cb007.js";import{M as y}from"./FormControlLabel-1ceb9da1.js";const b=h(c,{name:"MuiFormLabel",slot:"Wrapper",overridesResolver:(e,l)=>l.wrapper})({}),q={position:"relative !important",transform:"none !important",transition:"none !important",animation:"none !important"},i=u.forwardRef((e,l)=>{const{helpTopicId:a,id:r,sx:t,...o}=e,s=r||(o.htmlFor?`${o.htmlFor}-label`:void 0);return p(b,{className:"MuiFormLabel-wrapper",sx:t,children:[n(f,{id:s,sx:{...q},...o,ref:l}),a?n(m,{helpTopicId:a,labelId:s,sx:{px:.5}}):null]})});try{i.displayName="FormLabel",i.__docgenInfo={description:"",displayName:"FormLabel",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FormLabelClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},error:{defaultValue:null,description:"If `true`, the label is displayed in an error state.",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"If `true`, the label should be displayed in a disabled state.",name:"disabled",required:!1,type:{name:"boolean"}},filled:{defaultValue:null,description:"If `true`, the label should use filled classes key.",name:"filled",required:!1,type:{name:"boolean"}},focused:{defaultValue:null,description:"If `true`, the input of this label is focused (used by `FormGroup` components).",name:"focused",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"If `true`, the label will indicate that the `input` is required.",name:"required",required:!1,type:{name:"boolean"}},helpTopicId:{defaultValue:null,description:"Adds `FieldHelpIcon` next to the label (should not be within label for accessibility)",name:"helpTopicId",required:!1,type:{name:"string"}}}}}catch{}const d=u.forwardRef(({helpTopicId:e,id:l,...a},r)=>{const t=l||(a.htmlFor?`${a.htmlFor}-label`:void 0);return p(c,{children:[n(y,{id:t,...a,ref:r}),e?n(m,{helpTopicId:"12345",labelId:t}):null]})});try{d.displayName="FormControlLabel",d.__docgenInfo={description:"",displayName:"FormControlLabel",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FormControlLabelClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},label:{defaultValue:null,description:"A text or an element to be used in an enclosing label element.",name:"label",required:!0,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"Callback fired when the state is changed.\n@param event The event source of the callback.\nYou can pull out the new checked state by accessing `event.target.checked` (boolean).",name:"onChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, checked: boolean) => void"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ typography?: TypographyProps<"span", {}>; }'}},disabled:{defaultValue:null,description:"If `true`, the control is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The value of the component.",name:"value",required:!1,type:{name:"unknown"}},required:{defaultValue:null,description:"If `true`, adds required to control. (No required asterisk on individual controls in the group)",name:"required",required:!1,type:{name:"boolean"}},helpTopicId:{defaultValue:null,description:"Adds `FieldHelpIcon` next to the label (should not be within label for accessibility)",name:"helpTopicId",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<any>"}},checked:{defaultValue:null,description:"If `true`, the component appears selected.",name:"checked",required:!1,type:{name:"boolean"}},disableTypography:{defaultValue:null,description:"If `true`, the label is rendered as it is passed without an additional typography node.",name:"disableTypography",required:!1,type:{name:"boolean"}},control:{defaultValue:null,description:"A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.",name:"control",required:!0,type:{name:"ReactElement<any, any>"}}}}}catch{}export{i as F,d as a};
//# sourceMappingURL=FormControlLabel-6502a124.js.map