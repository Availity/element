import{j as r,a as l,F as L}from"./jsx-runtime-91a467a5.js";import{F as e}from"./FormLabel-b015907b.js";import{F as b}from"./FormControl-6288b859.js";import{O as h,F as x}from"./OutlinedInput-519d8c45.js";import{v as g}from"./visuallyHidden-14c3de6e.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./FieldHelpIcon-4ea9f0b4.js";import"./index-9681c8ff.js";import"./index-bc648821.js";import"./faCircleArrowRight-555d384f.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-2cc6257a.js";import"./styled-3f92ccfd.js";import"./useThemeProps-e4a8cdbc.js";import"./extends-bab83b91.js";import"./index-5c97ad5f.js";import"./Button-f7c44a22.js";import"./ButtonBase-984984ab.js";import"./emotion-react.browser.esm-638d3fdc.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./Tooltip-7b223af2.js";import"./useTheme-9732e621.js";import"./ownerDocument-613eb639.js";import"./index-8ce4a492.js";import"./useSlotProps-cdd19d6c.js";import"./utils-cd6c7dfd.js";import"./useId-fd294ee9.js";import"./IconButton-87076761.js";import"./LoadingButton-bb1adf78.js";import"./Box-992d9cc4.js";import"./extendSxProp-60b1cf3b.js";import"./FormLabel-fefed97f.js";import"./ownerWindow-698471fc.js";import"./GlobalStyles-22b090b6.js";const lr={title:"Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:f=>r(e,{...f}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>l(L,{children:[r(e,{children:"Default"}),r(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r(e,{required:!0,children:"Required"}),r(e,{error:!0,children:"Error"}),l(b,{disabled:!0,size:"small",children:[r(e,{htmlFor:"disabled",children:"Disabled"}),r(h,{id:"disabled",sx:g})]})]})},i={render:()=>l(b,{required:!0,size:"small",children:[r(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r(h,{id:"field-1",defaultValue:"default value"}),r(x,{children:"Helper Text"})]})};var a,m,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(F=(u=i.parameters)==null?void 0:u.docs)==null?void 0:F.source}}};const ar=["_FormLabel","_States","_Controls"];export{i as _Controls,o as _FormLabel,t as _States,ar as __namedExportsOrder,lr as default};
//# sourceMappingURL=FormLabel.stories-3df9bd38.js.map
