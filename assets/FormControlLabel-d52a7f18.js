import{a as u,j as t}from"./jsx-runtime-390e5fc8.js";import{r as p}from"./index-570b25c1.js";import{F as c}from"./FieldHelpIcon-4f97963b.js";import{B as m}from"./Box-7f261278.js";import{M as h}from"./FormLabel-4f2fd2fa.js";import{s as y}from"./styled-78cd751f.js";import{M as b}from"./FormControlLabel-4f099345.js";const q=y("span",{name:"MuiFormLabel",slot:"Children",overridesResolver:(e,a)=>a.children})({}),v={position:"relative !important",transform:"none !important",transition:"none !important",animation:"none !important"},s=p.forwardRef((e,a)=>{const{children:l,helpTopicId:n,id:r,sx:f,...o}=e,i=r||(o.htmlFor?`${o.htmlFor}-label`:void 0);return u(m,{display:"flex",flexDirection:"row",sx:f,children:[t(h,{id:i,sx:{...v},...o,ref:a,children:t(q,{className:"MuiFormLabel-children",children:l})}),n?t(c,{helpTopicId:n,labelId:i,sx:{px:.5}}):null]})});try{s.displayName="FormLabel",s.__docgenInfo={description:"",displayName:"FormLabel",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FormLabelClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},error:{defaultValue:null,description:"If `true`, the label is displayed in an error state.",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"If `true`, the label should be displayed in a disabled state.",name:"disabled",required:!1,type:{name:"boolean"}},filled:{defaultValue:null,description:"If `true`, the label should use filled classes key.",name:"filled",required:!1,type:{name:"boolean"}},focused:{defaultValue:null,description:"If `true`, the input of this label is focused (used by `FormGroup` components).",name:"focused",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"If `true`, the label will indicate that the `input` is required.",name:"required",required:!1,type:{name:"boolean"}},helpTopicId:{defaultValue:null,description:"Adds `FieldHelpIcon` next to the label (should not be within label for accessibility)",name:"helpTopicId",required:!1,type:{name:"string"}}}}}catch{}const d=p.forwardRef(({helpTopicId:e,id:a,...l},n)=>{const r=a||(l.htmlFor?`${l.htmlFor}-label`:void 0);return u(m,{children:[t(b,{id:r,...l,ref:n}),e?t(c,{helpTopicId:"12345",labelId:r}):null]})});try{d.displayName="FormControlLabel",d.__docgenInfo={description:"",displayName:"FormControlLabel",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FormControlLabelClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},label:{defaultValue:null,description:"A text or an element to be used in an enclosing label element.",name:"label",required:!0,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"Callback fired when the state is changed.\n@param event The event source of the callback.\nYou can pull out the new checked state by accessing `event.target.checked` (boolean).",name:"onChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, checked: boolean) => void"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ typography?: TypographyProps<"span", {}>; }'}},disabled:{defaultValue:null,description:"If `true`, the control is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The value of the component.",name:"value",required:!1,type:{name:"unknown"}},required:{defaultValue:null,description:"If `true`, adds required to control. (No required asterisk on individual controls in the group)",name:"required",required:!1,type:{name:"boolean"}},helpTopicId:{defaultValue:null,description:"Adds `FieldHelpIcon` next to the label (should not be within label for accessibility)",name:"helpTopicId",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<any>"}},checked:{defaultValue:null,description:"If `true`, the component appears selected.",name:"checked",required:!1,type:{name:"boolean"}},disableTypography:{defaultValue:null,description:"If `true`, the label is rendered as it is passed without an additional typography node.",name:"disableTypography",required:!1,type:{name:"boolean"}},control:{defaultValue:null,description:"A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.",name:"control",required:!0,type:{name:"ReactElement<any, any>"}}}}}catch{}export{s as F,d as a};
//# sourceMappingURL=FormControlLabel-d52a7f18.js.map
