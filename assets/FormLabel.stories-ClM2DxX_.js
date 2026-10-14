import{j as r}from"./iframe-BxUHITI1.js";import{F as l}from"./FormControl-DxWH6o6g.js";import{O as s}from"./OutlinedInput-RCQ8H0A1.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-CQdiyQl0.js";import{I as n}from"./Input-4J3fZK3J.js";import{F as p}from"./FormHelperText--sKTYTWs.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DBh9raQ6.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-D7EX6TJ1.js";import"./styled-CpGjzToy.js";import"./memoTheme-CzoHsl9a.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-lvxB79U5.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./useEventCallback-C37BR1tG.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-MHJ1SX4K.js";import"./useSlot-B7qqTYAC.js";import"./FieldHelpIcon-D2E4CX8c.js";import"./index-MVgG_W0q.js";import"./index-D7Z8d6Jb.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BZhbNLcx.js";import"./index-Cxy_eo2a.js";import"./IconButton-B68upYna.js";import"./ButtonBase-DsL-5Cn7.js";import"./useTimeout-DAfKtcD8.js";import"./TransitionGroupContext-l3bxEgIQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DLAhFeVr.js";import"./Tooltip-DZz3XPMm.js";import"./useTheme-D1EEqNP3.js";import"./useControlled-Bgh5sVCP.js";import"./getReactElementRef-CgE3Obh2.js";import"./Portal-uHNWHw4F.js";import"./utils-Bx4IaHxc.js";import"./useSlotProps-CkGYMLCU.js";import"./Button-iASAD3CE.js";import"./FormLabel-DlwqTA7N.js";import"./FormHelperText-D2Y_lV8s.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
