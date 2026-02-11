import{j as r}from"./iframe-D1NCSytB.js";import{F as l}from"./FormControl-aaJETRc2.js";import{O as s}from"./OutlinedInput-mW4xZACZ.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-CBMBeY_o.js";import{I as p}from"./Input-qR5gWo9Q.js";import{F as n}from"./FormHelperText-XNOvsvOJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BPWmZTOm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-DU2Yi2t-.js";import"./styled-BbCZmQsA.js";import"./memoTheme-DOGX_B28.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-BpGj9yaf.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-C8LcGziW.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-DlDajhlR.js";import"./useSlot-D1NHtjkn.js";import"./FieldHelpIcon-pBI1aGjb.js";import"./index-BiBDMnSv.js";import"./index-BYdlpT-l.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-B4wc5_NU.js";import"./index-BPnk7Q5j.js";import"./Tooltip-C79jCpae.js";import"./useTheme-D3cMIjr1.js";import"./useTimeout-Bh_i1JKi.js";import"./useControlled-Czfb1u9c.js";import"./getReactElementRef-D8NIfLKv.js";import"./Portal-DSDwhvGd.js";import"./utils-DI3cRngQ.js";import"./TransitionGroupContext-BkHkrwff.js";import"./useSlotProps-WTXiNqL0.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cqago1eB.js";import"./ButtonBase-BAUCY_Oi.js";import"./CircularProgress-DKmuW22e.js";import"./Button-Dci9Exp7.js";import"./FormLabel-Dky5iOJU.js";import"./FormHelperText-00W-iRAK.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
