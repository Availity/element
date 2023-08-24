import{j as r,a as l,F as L}from"./jsx-runtime-91a467a5.js";import{F as e}from"./FormLabel-3e23e1c1.js";import{F as b}from"./FormLabel-4402a0fa.js";import{M as h}from"./OutlinedInput-e0105204.js";import{v as x}from"./visuallyHidden-14c3de6e.js";import{F as g}from"./FormHelperText-4f09096a.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./FieldHelpIcon-3b1edd12.js";import"./index-9681c8ff.js";import"./index-8950f082.js";import"./faCircleArrowRight-dbb40e32.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-c3c5be0b.js";import"./styled-657e2aa7.js";import"./useThemeProps-ad7d4b8c.js";import"./extends-bab83b91.js";import"./index-8e80667f.js";import"./Button-0c87990d.js";import"./ButtonBase-6cf3e0c4.js";import"./emotion-react.browser.esm-a6af08ad.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./useEnhancedEffect-c45cae33.js";import"./Tooltip-20eef2a5.js";import"./useTheme-92c76a56.js";import"./ownerDocument-613eb639.js";import"./index-8ce4a492.js";import"./useSlotProps-d00a877a.js";import"./isHostComponent-73d6e646.js";import"./utils-ec691a65.js";import"./useId-fd294ee9.js";import"./IconButton-427dc05a.js";import"./LoadingButton-c81ddd00.js";import"./Box-08ad8bbe.js";import"./extendSxProp-1ec1a8c1.js";import"./utils-0a422cdb.js";import"./ownerWindow-698471fc.js";import"./GlobalStyles-25cb3a8b.js";const sr={title:"Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:f=>r(e,{...f}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>l(L,{children:[r(e,{children:"Default"}),r(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r(e,{required:!0,children:"Required"}),r(e,{error:!0,children:"Error"}),l(b,{disabled:!0,size:"small",children:[r(e,{htmlFor:"disabled",children:"Disabled"}),r(h,{id:"disabled",sx:x})]})]})},i={render:()=>l(b,{required:!0,size:"small",children:[r(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r(h,{id:"field-1",defaultValue:"default value"}),r(g,{children:"Helper Text"})]})};var a,m,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(F=(u=i.parameters)==null?void 0:u.docs)==null?void 0:F.source}}};const dr=["_FormLabel","_States","_Controls"];export{i as _Controls,o as _FormLabel,t as _States,dr as __namedExportsOrder,sr as default};
//# sourceMappingURL=FormLabel.stories-2a0219f8.js.map
