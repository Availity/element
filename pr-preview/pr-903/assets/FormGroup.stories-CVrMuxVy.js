import{j as o}from"./iframe-BP-fstPH.js";import{C as r}from"./index-DcHmgOCg.js";import{F as l}from"./FormGroup-CcKsQGcG.js";import{F as a}from"./FormControl-f7wPjL1x.js";import{F as s}from"./FormLabel-DooA424k.js";import{F as e}from"./FormControlLabel-BCLnQAIR.js";import"./preload-helper-PPVm8Dsz.js";import"./Checkbox-3oXEVEj5.js";import"./SwitchBase-CyaT9YQ0.js";import"./styled-QS_6ePhI.js";import"./useFormControl-BqU37Iip.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-AMpyQgX8.js";import"./mergeSlotProps-CZ6XbOjr.js";import"./useForkRef-kN7FeyJY.js";import"./useControlled-C1wvNNpf.js";import"./ButtonBase-CN3Lj4mC.js";import"./useTimeout-aFoefsbK.js";import"./TransitionGroupContext-CBWt0gZQ.js";import"./useEventCallback--hrt0XPn.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-CdaKSufU.js";import"./SvgIcon-BNSNkhkk.js";import"./memoTheme-CBW4mAKK.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-BN9RGjlA.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-DVbYF-_U.js";import"./FieldHelpIcon-CT4FEbwX.js";import"./index-BiBDMnSv.js";import"./index-Ds-ZEgLG.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./index-CUBSMbdA.js";import"./Tooltip-CFDxDxIS.js";import"./useTheme-8xMS95AC.js";import"./getReactElementRef-rCjbZXAY.js";import"./Portal-DXb3wffR.js";import"./utils-ct7xOGzP.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B35r-AKt.js";import"./IconButton-CG0C3HM8.js";import"./CircularProgress-CgtN00kw.js";import"./Button-Bi9jGuft.js";import"./FormLabel-DabwHVcZ.js";import"./FormControlLabel-DVBIx8eJ.js";import"./Typography-BMazaI8i.js";import"./Box-yuve2Yeg.js";const no={title:"Form Components/FormUtils/FormGroup",component:l,tags:["autodocs"],args:{size:"small"},parameters:{docs:{description:{component:"Form input context. Controls styling (`size`, etc) and state (`error`, `disabled`, etc) across input components, like `FormLabel`, `Input`, `FormHelperText`."}}}},t={render:n=>o.jsxs(a,{sx:{m:3},component:"fieldset",variant:"standard",required:!0,children:[o.jsx(s,{component:"legend",children:"Vertical Checkboxes"}),o.jsxs(l,{...n,children:[o.jsx(e,{control:o.jsx(r,{defaultChecked:!0}),label:"Label"}),o.jsx(e,{control:o.jsx(r,{}),label:"Label 2"}),o.jsx(e,{disabled:!0,control:o.jsx(r,{}),label:"Label 3"})]})]}),args:{}},m={render:n=>o.jsxs(a,{sx:{m:3},component:"fieldset",variant:"standard",required:!0,children:[o.jsx(s,{component:"legend",children:"Horizontal Checkboxes"}),o.jsxs(l,{...n,children:[o.jsx(e,{control:o.jsx(r,{defaultChecked:!0}),label:"Label"}),o.jsx(e,{control:o.jsx(r,{}),label:"Label 2"}),o.jsx(e,{disabled:!0,control:o.jsx(r,{}),label:"Label 3"})]})]}),args:{row:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: FormGroupProps) => <FormControl sx={{
    m: 3
  }} component="fieldset" variant="standard" required>
      <FormLabel component="legend">Vertical Checkboxes</FormLabel>
      <FormGroup {...args}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel control={<Checkbox />} label="Label 2" />
        <FormControlLabel disabled control={<Checkbox />} label="Label 3" />
      </FormGroup>
    </FormControl>,
  args: {}
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: FormGroupProps) => <FormControl sx={{
    m: 3
  }} component="fieldset" variant="standard" required>
      <FormLabel component="legend">Horizontal Checkboxes</FormLabel>
      <FormGroup {...args}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel control={<Checkbox />} label="Label 2" />
        <FormControlLabel disabled control={<Checkbox />} label="Label 3" />
      </FormGroup>
    </FormControl>,
  args: {
    row: true
  }
}`,...m.parameters?.docs?.source}}};const lo=["_FormGroupCheckbox","_HorizontalFormGroupCheckbox"];export{t as _FormGroupCheckbox,m as _HorizontalFormGroupCheckbox,lo as __namedExportsOrder,no as default};
