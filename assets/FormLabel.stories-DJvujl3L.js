import{j as r}from"./iframe-C99277Jn.js";import{F as l}from"./FormControl-CFCq4OSP.js";import{O as s}from"./OutlinedInput-BJeJtbfu.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-B7cA5R3l.js";import{I as n}from"./Input-CfV1asqJ.js";import{F as p}from"./FormHelperText-C9DRGnfU.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-nv_qHD3t.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-nAYICNXy.js";import"./styled-BSyyF-nm.js";import"./memoTheme-BcCvxPZB.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-Co0kt0JD.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-BvtgHlfy.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BBhrXk0t.js";import"./useSlot-C5dpIhsV.js";import"./FieldHelpIcon-BuLWmXGA.js";import"./index-BiBDMnSv.js";import"./index-DBNEVM-X.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BaWfF9je.js";import"./index-BLVZqh54.js";import"./Tooltip-1HJoGAor.js";import"./useTheme-rB5ljihk.js";import"./useTimeout-Dw4BvZaa.js";import"./useControlled-DV2QdfFp.js";import"./getReactElementRef-Bs67iJIN.js";import"./Portal-rCUOv2ZO.js";import"./utils-DQTgiKe9.js";import"./TransitionGroupContext-ByqVrO43.js";import"./useSlotProps-CQi1oJfT.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-GExIkIsQ.js";import"./ButtonBase-B6dKL5Sm.js";import"./CircularProgress-DWs2PQSt.js";import"./Button-D7NhHobB.js";import"./FormLabel-4tLKTmpv.js";import"./FormHelperText-BLAKn_Zn.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
