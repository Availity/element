import{j as r,a as l,F as L}from"./jsx-runtime-390e5fc8.js";import{F as e}from"./FormLabel-f908053d.js";import{F as b}from"./FormControl-91252996.js";import{M as h}from"./OutlinedInput-472e64a7.js";import{v as x}from"./visuallyHidden-14c3de6e.js";import{F as g}from"./FormHelperText-c4f9f03b.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./FieldHelpIcon-5ba387c6.js";import"./index-9681c8ff.js";import"./index-6c98e8c4.js";import"./faCircleArrowRight-a219d0fc.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-544b53cd.js";import"./clsx.m-5a18bdae.js";import"./createTheme-cf9cd31a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-4eed9f55.js";import"./styled-34470687.js";import"./generateUtilityClasses-379cd6e3.js";import"./index-ab2511e5.js";import"./Button-b8d9193e.js";import"./ButtonBase-c1676a07.js";import"./emotion-react.browser.esm-166e2a31.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-cf9f79a8.js";import"./useTheme-75b14aeb.js";import"./Grow-16063720.js";import"./index-8a077077.js";import"./utils-7964d339.js";import"./ownerDocument-613eb639.js";import"./useSlotProps-5f03bd16.js";import"./isHostComponent-73d6e646.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-899bd586.js";import"./LoadingButton-f3d81a39.js";import"./Box-4ff12a56.js";import"./extendSxProp-3c84bad0.js";import"./FormLabel-c1b87670.js";import"./utils-3d35716f.js";import"./isMuiElement-9a8390c4.js";import"./ownerWindow-698471fc.js";import"./GlobalStyles-de8dc72e.js";const ur={title:"Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:f=>r(e,{...f}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>l(L,{children:[r(e,{children:"Default"}),r(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r(e,{required:!0,children:"Required"}),r(e,{error:!0,children:"Error"}),l(b,{disabled:!0,size:"small",children:[r(e,{htmlFor:"disabled",children:"Disabled"}),r(h,{id:"disabled",sx:x})]})]})},i={render:()=>l(b,{required:!0,size:"small",children:[r(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r(h,{id:"field-1",defaultValue:"default value"}),r(g,{children:"Helper Text"})]})};var m,a,s;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: FormLabelProps) => <FormLabel {...args} />,
  args: {
    children: 'This text is a child of FormLabel',
    required: true
  }
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var d,p,n;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var c,u,F;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <FormControl required size="small">
      <FormLabel htmlFor="field-1" helpTopicId="1234">
        Example
      </FormLabel>
      <OutlinedInput id="field-1" defaultValue="default value" />
      <FormHelperText>Helper Text</FormHelperText>
    </FormControl>
}`,...(F=(u=i.parameters)==null?void 0:u.docs)==null?void 0:F.source}}};const Fr=["_FormLabel","_States","_Controls"];export{i as _Controls,o as _FormLabel,t as _States,Fr as __namedExportsOrder,ur as default};
//# sourceMappingURL=FormLabel.stories-5f0715d3.js.map
