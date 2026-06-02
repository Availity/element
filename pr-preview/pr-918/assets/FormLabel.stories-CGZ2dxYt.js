import{j as r}from"./iframe-CNKi_Ec9.js";import{F as l}from"./FormControl-Bs8BKLyH.js";import{O as s}from"./OutlinedInput-DZuvzaas.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-Dd4Rb7GY.js";import{I as n}from"./Input-BerR3a10.js";import{F as p}from"./FormHelperText-B5b-ZndY.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DxT84DOF.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-B5CkoKss.js";import"./styled-CGPS0K8z.js";import"./memoTheme-DeusU9l_.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-BcCxGyq_.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-Cws-zXFa.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-NHo9zqIM.js";import"./useSlot-6u895GGS.js";import"./FieldHelpIcon-C0oar5Gv.js";import"./index-BiBDMnSv.js";import"./index-B_WSnka_.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-DRZMbgGT.js";import"./index-B621nc9Z.js";import"./Tooltip-CJ_GLTq5.js";import"./useTheme-BKQS-hPu.js";import"./useTimeout-qmb5R95B.js";import"./useControlled-w5dFxqhC.js";import"./getReactElementRef-8X4grM9z.js";import"./Portal-C3A-VfFU.js";import"./utils-SSfZp7cC.js";import"./TransitionGroupContext-BESWVVvg.js";import"./useSlotProps-BIvI5Lxh.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CeXbiSrq.js";import"./ButtonBase-CiH38IXk.js";import"./CircularProgress-BrUNS0I2.js";import"./Button-CTbvABeh.js";import"./FormLabel-CpWhdyIU.js";import"./FormHelperText-BvYn2Wec.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: FormLabelProps) => <FormLabel {...args} />,
  args: {
    children: 'This text is a child of FormLabel',
    required: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <FormControl required size="small">
      <FormLabel htmlFor="field-1" helpTopicId="1234">
        Example
      </FormLabel>
      <Input id="field-1" defaultValue="default value" />
      <FormHelperText>Helper Text</FormHelperText>
    </FormControl>
}`,...i.parameters?.docs?.source}}};const lr=["_FormLabel","_States","_Controls"];export{i as _Controls,o as _FormLabel,t as _States,lr as __namedExportsOrder,ir as default};
