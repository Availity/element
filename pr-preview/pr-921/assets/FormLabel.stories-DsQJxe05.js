import{j as r}from"./iframe-CskbrvwW.js";import{F as l}from"./FormControl-CY1-Z9r6.js";import{O as s}from"./OutlinedInput-DIJeNguT.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-DXkuy925.js";import{I as n}from"./Input-DxGJ4e0p.js";import{F as p}from"./FormHelperText--2Pq6ePV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CfOh6Tof.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-AkziJBw1.js";import"./styled-BsXlxVo_.js";import"./memoTheme-DEwbXW4J.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-CJ9Mlrh4.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./useEventCallback-SyYUcrzB.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BuWg2zjK.js";import"./useSlot-BWiqm7gO.js";import"./FieldHelpIcon-DPMHRmSj.js";import"./index-CrcoPoGw.js";import"./index-BWPz21f_.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-B2BnKrH8.js";import"./index-BA1sIr4x.js";import"./Tooltip-DpvX0KYg.js";import"./useTheme-BYK31DIa.js";import"./useTimeout-tPc9dJl0.js";import"./useControlled-DIqjKUDM.js";import"./getReactElementRef-C03_kC3i.js";import"./Portal-4hvJB8nO.js";import"./utils-JI7-Ixnq.js";import"./TransitionGroupContext-Bfg0KmSK.js";import"./useSlotProps-C5o6YfE5.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C3QjbCEP.js";import"./ButtonBase-D0cuhZpt.js";import"./CircularProgress-DRIVKGSr.js";import"./Button-NBHJiR2s.js";import"./FormLabel-De4oAUc0.js";import"./FormHelperText-DuMGeBBY.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
