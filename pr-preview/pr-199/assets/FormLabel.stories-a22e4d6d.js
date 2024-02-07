import{j as r,a as m,F as f}from"./jsx-runtime-390e5fc8.js";import"./FieldHelpIcon-4403612a.js";import{F as o}from"./FormLabel-0e537d36.js";import{F as L}from"./RadioGroup-fa3c9d14.js";import{I as x}from"./Input-995ea178.js";import"./index-a67dd6a2.js";import{F as b}from"./FormControl-76ef8a2c.js";import{O as g}from"./OutlinedInput-c5324d24.js";import{v as I}from"./visuallyHidden-14c3de6e.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-9681c8ff.js";import"./index-d61120f8.js";import"./faCircleArrowRight-a1a581c0.js";import"./index-72be33c9.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-4a92f20a.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-98dc6282.js";import"./styled-523cb007.js";import"./generateUtilityClasses-b58f947a.js";import"./index-407eec83.js";import"./Button-f5f3570b.js";import"./ButtonBase-e49cd770.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-bac6b43c.js";import"./useTheme-c07bb8e7.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./ownerDocument-613eb639.js";import"./Grow-7a512b16.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useSlotProps-95ccb7bd.js";import"./isHostComponent-73d6e646.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-d91b4b62.js";import"./LoadingButton-f3e3dfec.js";import"./extends-90dea224.js";import"./CircularProgress-9882927c.js";import"./Box-df8a6414.js";import"./extendSxProp-b1abb964.js";import"./FormControlLabel-34fd3025.js";import"./utils-3d35716f.js";import"./Typography-cb5a2c80.js";import"./Stack-ded40119.js";import"./styled-5c6c15e1.js";import"./FormLabel-ae04d927.js";import"./FormHelperText-8ba5d276.js";import"./Divider-c3141017.js";import"./dividerClasses-871b72e6.js";import"./Select-e3d164a2.js";import"./react-is.production.min-a192e302.js";import"./Menu-20281694.js";import"./Popover-c29df6e8.js";import"./Modal-c0d06b41.js";import"./Backdrop-374fdef5.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-23216610.js";import"./debounce-517eeb3c.js";import"./List-61c808de.js";import"./createSvgIcon-b91027d9.js";import"./RadioGroup-e5dc21e3.js";import"./SwitchBase-6b7028c9.js";import"./FormGroup-99a23a63.js";import"./isMuiElement-6907f060.js";import"./GlobalStyles-0727d895.js";const Br={title:"Components/FormUtils/FormLabel",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},e={render:h=>r(o,{...h}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>m(f,{children:[r(o,{children:"Default"}),r(o,{helpTopicId:"1234",children:"With Field Help Icon"}),r(o,{required:!0,children:"Required"}),r(o,{error:!0,children:"Error"}),m(b,{disabled:!0,size:"small",children:[r(o,{htmlFor:"disabled",children:"Disabled"}),r(g,{id:"disabled",sx:I})]})]})},i={render:()=>m(b,{required:!0,size:"small",children:[r(o,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r(x,{id:"field-1",defaultValue:"default value"}),r(L,{children:"Helper Text"})]})};var p,l,a;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: FormLabelProps) => <FormLabel {...args} />,
  args: {
    children: 'This text is a child of FormLabel',
    required: true
  }
}`,...(a=(l=e.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};var s,d,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(d=t.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var c,u,F;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <FormControl required size="small">
      <FormLabel htmlFor="field-1" helpTopicId="1234">
        Example
      </FormLabel>
      <Input id="field-1" defaultValue="default value" />
      <FormHelperText>Helper Text</FormHelperText>
    </FormControl>
}`,...(F=(u=i.parameters)==null?void 0:u.docs)==null?void 0:F.source}}};const Gr=["_FormLabel","_States","_Controls"];export{i as _Controls,e as _FormLabel,t as _States,Gr as __namedExportsOrder,Br as default};
//# sourceMappingURL=FormLabel.stories-a22e4d6d.js.map
