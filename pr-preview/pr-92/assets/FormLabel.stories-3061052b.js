import{a as s,j as e,F as _}from"./jsx-runtime-91a467a5.js";import{r as T}from"./index-8db94870.js";import{F as g}from"./index-fe410b9c.js";import{B as V}from"./Box-473e99f8.js";import{M as C}from"./FormLabel-f4a5774d.js";import{F as S,O as v}from"./OutlinedInput-f4d9261c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-9681c8ff.js";import"./index-cd651495.js";import"./faCircleArrowRight-555d384f.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-247857dd.js";import"./styled-838f2411.js";import"./useThemeProps-ac6a164c.js";import"./extends-bab83b91.js";import"./Button-e016c6ed.js";import"./ButtonBase-246c583e.js";import"./emotion-react.browser.esm-63c9efdb.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./Tooltip-98269e07.js";import"./useTheme-c349195b.js";import"./ownerDocument-613eb639.js";import"./index-8ce4a492.js";import"./useSlotProps-8f208bee.js";import"./useId-fd294ee9.js";import"./utils-038da973.js";import"./IconButton-58eb99ee.js";import"./CircularProgress-76852e3f.js";import"./extendSxProp-d07c2917.js";import"./ownerWindow-698471fc.js";import"./GlobalStyles-6909ed97.js";const r=T.forwardRef((o,L)=>{const{children:y,helpTopicId:q,id:I,htmlFor:i,...x}=o,d=I||(i?`${i}-label`:void 0);return s(V,{display:"flex",flexDirection:"row",children:[e(C,{id:d,htmlFor:i,...x,ref:L,children:y}),q?e(g,{helpTopicId:"12345",labelId:d,sx:{px:.5}}):null]})});try{r.displayName="FormLabel",r.__docgenInfo={description:"",displayName:"FormLabel",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FormLabelClasses> & Partial<ClassNameMap<never>>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},disabled:{defaultValue:null,description:"If `true`, the label should be displayed in a disabled state.",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"If `true`, the label is displayed in an error state.",name:"error",required:!1,type:{name:"boolean"}},filled:{defaultValue:null,description:"If `true`, the label should use filled classes key.",name:"filled",required:!1,type:{name:"boolean"}},helpTopicId:{defaultValue:null,description:"",name:"helpTopicId",required:!1,type:{name:"string"}},focused:{defaultValue:null,description:"If `true`, the input of this label is focused (used by `FormGroup` components).",name:"focused",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"If `true`, the label will indicate that the `input` is required.",name:"required",required:!1,type:{name:"boolean"}}}}}catch{}const me={title:"Components/FormLabel/FormLabel",component:r,tags:["autodocs"]},l={render:o=>e(r,{...o}),args:{children:"This text is a child of FormLabel",required:!0}},a={render:()=>s(_,{children:[e(r,{children:"Default"}),e(r,{required:!0,children:"Required"}),e(r,{error:!0,children:"Error"}),e(r,{disabled:!0,children:"Disabled"}),e(r,{helpTopicId:"1234",children:"With Help Topic Icon"})]})},t={render:()=>s(S,{required:!0,error:!0,size:"small",children:[e(r,{htmlFor:"field-3",helpTopicId:"1234",children:"FormLabel"}),e(v,{id:"field-3",defaultValue:"field3 value"})]})};var n,m,p;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: FormLabelProps) => <FormLabel {...args} />,
  args: {
    children: 'This text is a child of FormLabel',
    required: true
  }
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,c,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <>
      <FormLabel>Default</FormLabel>
      <FormLabel required>Required</FormLabel>
      <FormLabel error>Error</FormLabel>
      <FormLabel disabled>Disabled</FormLabel>
      <FormLabel helpTopicId="1234">With Help Topic Icon</FormLabel>
    </>
}`,...(f=(c=a.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var h,b,F;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <FormControl required error size="small">
      <FormLabel htmlFor="field-3" helpTopicId="1234">
        FormLabel
      </FormLabel>
      <OutlinedInput id="field-3" defaultValue="field3 value" />
    </FormControl>
}`,...(F=(b=t.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};const pe=["_FormLabel","_States","_Controls"];export{t as _Controls,l as _FormLabel,a as _States,pe as __namedExportsOrder,me as default};
//# sourceMappingURL=FormLabel.stories-3061052b.js.map
