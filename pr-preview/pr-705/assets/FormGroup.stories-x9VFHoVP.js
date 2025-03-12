import{j as o}from"./jsx-runtime-CcL-W3nW.js";import{C as r}from"./index-B-bCkWqS.js";import"./FieldHelpIcon-D_brM4fg.js";import{F as b,a as t}from"./FormLabel-1qAaXQOD.js";import"./Switch-nkI3qilU.js";import"./Input--PIJVhSZ.js";import"./index-BtPDELIe.js";import{F as p}from"./RadioGroup-BogPRRDq.js";import{F as x}from"./FormControl-BPSU2g7t.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Checkbox-imGzR8Us.js";import"./generateUtilityClass-CVWqFxsA.js";import"./identifier-Dtqimryx.js";import"./SwitchBase-Z9YgLJlx.js";import"./styled-CF1hcdwO.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./useFormControl-68oiojFJ.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./useControlled-WdbyInBW.js";import"./ButtonBase-DbVRbsLs.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./useForkRef-BVrIj09m.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-TketyoFF.js";import"./SvgIcon-DSdWmKAH.js";import"./memoTheme-D-rVhYRp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-DMWJB0MK.js";import"./index-4AU0IlPL.js";import"./faCircleArrowRight-BeBmJtPK.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./index-DLsH_p52.js";import"./Tooltip-CiiaKkqp.js";import"./index-nos-0K8U.js";import"./useTheme-DUkCvbx_.js";import"./useTheme-C2CrmYKc.js";import"./useSlot-DnkSxE3X.js";import"./resolveComponentProps-Dg20wxiM.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-CBAx_nZm.js";import"./utils-D5ZkK9XY.js";import"./index-BEx9gAkE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BAIpVL6Y.js";import"./IconButton-Caxu-qgA.js";import"./CircularProgress-D8w9ZPs6.js";import"./Button-BAEbeAyH.js";import"./LoadingButton-9DxABi24.js";import"./FormControlLabel-GqYWwHWT.js";import"./formControlState-Dq1zat_P.js";import"./Typography-CvSvtD2a.js";import"./index-f0Aa_BgU.js";import"./extendSxProp-B5AgUjQT.js";import"./Box-DWnb8VZB.js";import"./FormLabel-98YPf6ct.js";import"./Select-hLZ2S4VH.js";import"./Menu-Byu17A6t.js";import"./Popover-ChEuM7rO.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-DXcIEVia.js";import"./Modal-B5s0Thvt.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-B4gbyDGC.js";import"./Fade-Dl4gmST4.js";import"./List-ChBzRQcW.js";import"./utils-DoM3o7-Q.js";import"./OutlinedInput-CQlxW3ax.js";import"./Stack-BcsM4Vc0.js";import"./styled-vBjI3IQc.js";import"./useThemeProps-BIK-1DKm.js";import"./Divider-jUONNV4j.js";import"./dividerClasses-BmOcEkDu.js";import"./faCheck-B05F4ORy.js";import"./Switch-BqVUWLaW.js";import"./isMuiElement-DAzOCCHH.js";const Mo={title:"Form Components/FormUtils/FormGroup",component:p,tags:["autodocs"],args:{size:"small"},parameters:{docs:{description:{component:"Form input context. Controls styling (`size`, etc) and state (`error`, `disabled`, etc) across input components, like `FormLabel`, `Input`, `FormHelperText`."}}}},e={render:i=>o.jsxs(x,{sx:{m:3},component:"fieldset",variant:"standard",required:!0,children:[o.jsx(b,{component:"legend",children:"Vertical Checkboxes"}),o.jsxs(p,{...i,children:[o.jsx(t,{control:o.jsx(r,{defaultChecked:!0}),label:"Label"}),o.jsx(t,{control:o.jsx(r,{}),label:"Label 2"}),o.jsx(t,{disabled:!0,control:o.jsx(r,{}),label:"Label 3"})]})]}),args:{}},m={render:i=>o.jsxs(x,{sx:{m:3},component:"fieldset",variant:"standard",required:!0,children:[o.jsx(b,{component:"legend",children:"Horizontal Checkboxes"}),o.jsxs(p,{...i,children:[o.jsx(t,{control:o.jsx(r,{defaultChecked:!0}),label:"Label"}),o.jsx(t,{control:o.jsx(r,{}),label:"Label 2"}),o.jsx(t,{disabled:!0,control:o.jsx(r,{}),label:"Label 3"})]})]}),args:{row:!0}};var n,a,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var s,c,d;m.parameters={...m.parameters,docs:{...(s=m.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(c=m.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const No=["_FormGroupCheckbox","_HorizontalFormGroupCheckbox"];export{e as _FormGroupCheckbox,m as _HorizontalFormGroupCheckbox,No as __namedExportsOrder,Mo as default};
