import{j as r,a as l,F as L}from"./jsx-runtime-390e5fc8.js";import{F as e}from"./FormLabel-b4d6599c.js";import{F as b}from"./FormControl-c9e553ad.js";import{M as h}from"./OutlinedInput-193b0208.js";import{v as x}from"./visuallyHidden-14c3de6e.js";import{F as g}from"./FormHelperText-b3427492.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./FieldHelpIcon-efe1170d.js";import"./index-9681c8ff.js";import"./index-77e680bf.js";import"./faCircleArrowRight-2a86424a.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-102d705b.js";import"./clsx.m-fb33c42b.js";import"./createTheme-4dc6b23f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-5f33a28c.js";import"./styled-fc2b35f5.js";import"./generateUtilityClasses-8a827d83.js";import"./index-2dd44fd1.js";import"./Button-4ab2863e.js";import"./ButtonBase-654f8a82.js";import"./emotion-react.browser.esm-325397be.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-528bd356.js";import"./useTheme-117bd4f5.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./useSlotProps-ff3a8657.js";import"./isHostComponent-73d6e646.js";import"./utils-c4e5670c.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-5b7e7002.js";import"./LoadingButton-7e27a20e.js";import"./Box-a5c2ee7f.js";import"./extendSxProp-fa3ab054.js";import"./FormLabel-204f23dc.js";import"./utils-3d35716f.js";import"./isMuiElement-9a8390c4.js";import"./ownerWindow-698471fc.js";import"./GlobalStyles-7484fee1.js";const cr={title:"Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:f=>r(e,{...f}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>l(L,{children:[r(e,{children:"Default"}),r(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r(e,{required:!0,children:"Required"}),r(e,{error:!0,children:"Error"}),l(b,{disabled:!0,size:"small",children:[r(e,{htmlFor:"disabled",children:"Disabled"}),r(h,{id:"disabled",sx:x})]})]})},i={render:()=>l(b,{required:!0,size:"small",children:[r(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r(h,{id:"field-1",defaultValue:"default value"}),r(g,{children:"Helper Text"})]})};var m,a,s;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: FormLabelProps) => <FormLabel {...args} />,
  args: {
    children: 'This text is a child of FormLabel',
    required: true
  }
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var d,n,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(F=(u=i.parameters)==null?void 0:u.docs)==null?void 0:F.source}}};const ur=["_FormLabel","_States","_Controls"];export{i as _Controls,o as _FormLabel,t as _States,ur as __namedExportsOrder,cr as default};
//# sourceMappingURL=FormLabel.stories-4fa0b541.js.map
