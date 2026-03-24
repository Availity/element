import{j as r}from"./iframe-BP-fstPH.js";import{F as l}from"./FormControl-f7wPjL1x.js";import{O as s}from"./OutlinedInput-DAVO5nXI.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-DooA424k.js";import{I as p}from"./Input-CQmBmnNO.js";import{F as n}from"./FormHelperText-DC_sfDSF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BqU37Iip.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-DVbYF-_U.js";import"./styled-QS_6ePhI.js";import"./memoTheme-CBW4mAKK.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-kN7FeyJY.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback--hrt0XPn.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-CZ6XbOjr.js";import"./useSlot-AMpyQgX8.js";import"./FieldHelpIcon-CT4FEbwX.js";import"./index-BiBDMnSv.js";import"./index-Ds-ZEgLG.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BNSNkhkk.js";import"./index-CUBSMbdA.js";import"./Tooltip-CFDxDxIS.js";import"./useTheme-8xMS95AC.js";import"./useTimeout-aFoefsbK.js";import"./useControlled-C1wvNNpf.js";import"./getReactElementRef-rCjbZXAY.js";import"./Portal-DXb3wffR.js";import"./utils-ct7xOGzP.js";import"./TransitionGroupContext-CBWt0gZQ.js";import"./useSlotProps-B35r-AKt.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CG0C3HM8.js";import"./ButtonBase-CN3Lj4mC.js";import"./CircularProgress-CgtN00kw.js";import"./Button-Bi9jGuft.js";import"./FormLabel-DabwHVcZ.js";import"./FormHelperText-C4xW4xrL.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
