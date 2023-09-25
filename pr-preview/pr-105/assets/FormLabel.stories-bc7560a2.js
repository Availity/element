import{j as r,a as l,F as L}from"./jsx-runtime-390e5fc8.js";import{F as e}from"./FormLabel-e303ce64.js";import{F as b}from"./FormControl-8b41a575.js";import{O as h,F as x}from"./OutlinedInput-be2438d3.js";import{v as g}from"./visuallyHidden-14c3de6e.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./FieldHelpIcon-84b22826.js";import"./index-9681c8ff.js";import"./index-91a95a3a.js";import"./faCircleArrowRight-32490c46.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-644454bc.js";import"./styled-2191822d.js";import"./useThemeProps-66ab754c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./index-d51ee930.js";import"./Button-fce9389c.js";import"./ButtonBase-121cbb7f.js";import"./emotion-react.browser.esm-d7d6545d.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./Tooltip-e09bffc1.js";import"./useTheme-c775f3da.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./useSlotProps-38dd38c0.js";import"./utils-aacfec48.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-130e3844.js";import"./LoadingButton-25a551fc.js";import"./Box-4c9f5af0.js";import"./extendSxProp-564f0963.js";import"./FormLabel-f2bb53c2.js";import"./ownerWindow-698471fc.js";import"./GlobalStyles-3f09bceb.js";const ir={title:"Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:f=>r(e,{...f}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>l(L,{children:[r(e,{children:"Default"}),r(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r(e,{required:!0,children:"Required"}),r(e,{error:!0,children:"Error"}),l(b,{disabled:!0,size:"small",children:[r(e,{htmlFor:"disabled",children:"Disabled"}),r(h,{id:"disabled",sx:g})]})]})},i={render:()=>l(b,{required:!0,size:"small",children:[r(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r(h,{id:"field-1",defaultValue:"default value"}),r(x,{children:"Helper Text"})]})};var a,m,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: FormLabelProps) => <FormLabel {...args} />,
  args: {
    children: 'This text is a child of FormLabel',
    required: true
  }
}`,...(s=(m=o.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var d,n,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <>
      <FormLabel>Default</FormLabel>
      <FormLabel helpTopicId="1234">With Field Help Icon</FormLabel>
      <FormLabel required>Required</FormLabel>
      <FormLabel error>Error</FormLabel>
      {/* A disabled label by itself will throw contrast warning unless used correctly with a disabled input. */}
      <FormControl disabled size="small">
        <FormLabel htmlFor="disabled">Disabled</FormLabel>
        <OutlinedInput id="disabled" sx={visuallyHidden} />
      </FormControl>
    </>
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,u,F;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <FormControl required size="small">
      <FormLabel htmlFor="field-1" helpTopicId="1234">
        Example
      </FormLabel>
      <OutlinedInput id="field-1" defaultValue="default value" />
      <FormHelperText>Helper Text</FormHelperText>
    </FormControl>
}`,...(F=(u=i.parameters)==null?void 0:u.docs)==null?void 0:F.source}}};const lr=["_FormLabel","_States","_Controls"];export{i as _Controls,o as _FormLabel,t as _States,lr as __namedExportsOrder,ir as default};
//# sourceMappingURL=FormLabel.stories-bc7560a2.js.map
