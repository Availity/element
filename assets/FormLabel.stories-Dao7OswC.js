import{j as r}from"./iframe-DNfpO8Rq.js";import{F as l}from"./FormControl-BUQr9Gsk.js";import{O as s}from"./OutlinedInput-CxWcWAhd.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-D0KPTgXy.js";import{I as p}from"./Input-CXZhumF8.js";import{F as n}from"./FormHelperText-D0WyH86s.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CXy51Z7B.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-DJ9IZ7LZ.js";import"./styled-Sw3aRR2D.js";import"./memoTheme-B-zz_BUk.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-BEoZ4oWN.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-Cty6Llwj.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-D2aT8sWY.js";import"./useSlot-C-w8GshL.js";import"./FieldHelpIcon-EtPqhm8X.js";import"./index-BiBDMnSv.js";import"./index-BcmMVDWe.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-wfbC-1tw.js";import"./index-DN_R5H2f.js";import"./Tooltip-B3COV0pN.js";import"./useTheme-ChvAJH3t.js";import"./useTimeout-DYZny39l.js";import"./useControlled-C3q2PKrI.js";import"./getReactElementRef-CLhxke3N.js";import"./Portal-r7W1nGba.js";import"./utils-SDoQ5BJm.js";import"./TransitionGroupContext-BRbpeLOF.js";import"./useSlotProps-DDNYhqkV.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-ERuDSHkW.js";import"./ButtonBase-CF5Cip_l.js";import"./CircularProgress-BsdZW6N9.js";import"./Button-UPAXXDe3.js";import"./FormLabel-DZJIxUfx.js";import"./FormHelperText-D1EIcDeZ.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
