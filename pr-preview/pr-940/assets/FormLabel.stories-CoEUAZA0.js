import{j as r}from"./iframe-Cn9qPtrp.js";import{F as l}from"./FormControl-BmLSzKHH.js";import{O as s}from"./OutlinedInput-havtgxzd.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-BXSMDUoH.js";import{I as n}from"./Input-DX-sXZk3.js";import{F as p}from"./FormHelperText-DbFAHlAg.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-TW3X2czK.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-DcGc7pTf.js";import"./styled-D2CDconu.js";import"./memoTheme-6yds69P_.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-Dq6ZsqmR.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./useEventCallback-CiCWuPbq.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-Bjka9Klf.js";import"./useSlot-Cknh0r9X.js";import"./FieldHelpIcon-utkJhIgR.js";import"./index-CrcoPoGw.js";import"./index-DWYQ4eQk.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-LXn_mqm4.js";import"./index-BIlLMFwD.js";import"./IconButton-BEbO5w96.js";import"./ButtonBase-2oFpmJBY.js";import"./useTimeout-BoQb9RDS.js";import"./TransitionGroupContext-CFwcVVqT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DAUt--dg.js";import"./Tooltip-DKs25lhA.js";import"./useTheme-B6YVOUYP.js";import"./useControlled-BIT0kvxY.js";import"./getReactElementRef-6Fd7mh7z.js";import"./Portal-BWZt9Zv4.js";import"./utils-BlV9er3y.js";import"./useSlotProps-yJhFLJQp.js";import"./Button-Cp2YlGAc.js";import"./FormLabel-BxiY_bl4.js";import"./FormHelperText-BWYBhNPM.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
