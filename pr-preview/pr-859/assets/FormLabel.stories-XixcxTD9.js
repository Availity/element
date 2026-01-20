import{j as r}from"./iframe-DDdys5VZ.js";import{F as l}from"./FormControl-DV2HCR4z.js";import{O as s}from"./OutlinedInput-ucVlTC9v.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-CfxgG_tP.js";import{I as p}from"./Input-X1-w7bkp.js";import{F as n}from"./FormHelperText-BT-GTM_z.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BqJWQcaa.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CGZGs55h.js";import"./styled-hFTqa5AW.js";import"./memoTheme-Cxx5qwbm.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-CnZ00-R9.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-Cc8SLIyn.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-4h4cl7Iv.js";import"./useSlot-tZFGbiOx.js";import"./FieldHelpIcon-xCxfmxrJ.js";import"./index-BiBDMnSv.js";import"./index-BnYYGU_m.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DHyw-wAY.js";import"./index-Do6uxBxf.js";import"./Tooltip-BrywaEgo.js";import"./useTheme-3S67f5Cb.js";import"./useTimeout-DZwXI9W9.js";import"./useControlled-DPgR13iz.js";import"./getReactElementRef-KKwdvyjG.js";import"./Portal-CIlqDXrO.js";import"./utils-CF4In8Xa.js";import"./TransitionGroupContext-Dv_3Vfqr.js";import"./useSlotProps-CMLU_yM0.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BOaXfSEH.js";import"./ButtonBase-DZVI88h8.js";import"./CircularProgress-CD5GaXFj.js";import"./Button-uXds9IdN.js";import"./FormLabel-BxsO_0-t.js";import"./FormHelperText-Cpr7oON-.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
