import{j as o}from"./iframe-igAdvFbl.js";import{C as r}from"./index-hLgR9kKQ.js";import{F as l}from"./FormGroup-C9xaqCDH.js";import{F as a}from"./FormControl-MYCsooLK.js";import{F as s}from"./FormLabel-Cb_2K5T5.js";import{F as e}from"./FormControlLabel-6O-Sex3g.js";import"./preload-helper-PPVm8Dsz.js";import"./Checkbox-CkKu5slW.js";import"./SwitchBase-D9KptgKZ.js";import"./styled-91ph4J30.js";import"./useFormControl-Bx8k6zBT.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-DFdPJoU3.js";import"./mergeSlotProps-Cu3OtoH3.js";import"./useForkRef-D-t6gd0T.js";import"./useControlled-CFxyCb-W.js";import"./ButtonBase-B-BThNWO.js";import"./useTimeout-BVAWMZsv.js";import"./TransitionGroupContext-ymy7tNok.js";import"./useEventCallback-CsTRRlXt.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-D2IPPG_U.js";import"./SvgIcon-Bjb7RMXU.js";import"./memoTheme-CLnB_uxM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-DAotqHD5.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-BIGdb7v5.js";import"./FieldHelpIcon-2960mKc-.js";import"./index-MVgG_W0q.js";import"./index-LwuFN9gm.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./index-C0-lL2nR.js";import"./IconButton-C_pwG3tG.js";import"./CircularProgress-W3XJwf44.js";import"./Tooltip-Cq44iNEt.js";import"./useTheme-CIUac4TP.js";import"./getReactElementRef-B9sY4O0b.js";import"./Portal-CXKAB8qb.js";import"./utils-BtrN11DB.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-IKBnSf1M.js";import"./Button-Cul-JvC2.js";import"./FormLabel-CGkPHvag.js";import"./FormControlLabel-Cr28FXxz.js";import"./Typography-D8sokpBT.js";import"./Box-BVxISqTJ.js";const no={title:"Form Components/Uncontrolled FormUtils/FormGroup",component:l,tags:["autodocs"],args:{size:"small"},parameters:{docs:{description:{component:"Form input context. Controls styling (`size`, etc) and state (`error`, `disabled`, etc) across input components, like `FormLabel`, `Input`, `FormHelperText`."}}}},t={render:n=>o.jsxs(a,{sx:{m:3},component:"fieldset",variant:"standard",required:!0,children:[o.jsx(s,{component:"legend",children:"Vertical Checkboxes"}),o.jsxs(l,{...n,children:[o.jsx(e,{control:o.jsx(r,{defaultChecked:!0}),label:"Label"}),o.jsx(e,{control:o.jsx(r,{}),label:"Label 2"}),o.jsx(e,{disabled:!0,control:o.jsx(r,{}),label:"Label 3"})]})]}),args:{}},m={render:n=>o.jsxs(a,{sx:{m:3},component:"fieldset",variant:"standard",required:!0,children:[o.jsx(s,{component:"legend",children:"Horizontal Checkboxes"}),o.jsxs(l,{...n,children:[o.jsx(e,{control:o.jsx(r,{defaultChecked:!0}),label:"Label"}),o.jsx(e,{control:o.jsx(r,{}),label:"Label 2"}),o.jsx(e,{disabled:!0,control:o.jsx(r,{}),label:"Label 3"})]})]}),args:{row:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
