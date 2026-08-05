import{j as r}from"./iframe-Cwe65xm_.js";import{F as l}from"./FormControl-DZK54C7D.js";import{O as s}from"./OutlinedInput-CVtI0giW.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-CjjPdabz.js";import{I as n}from"./Input-5w-8m9kM.js";import{F as p}from"./FormHelperText-h6aWyaza.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BhG-OBsq.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CFlSzKZl.js";import"./styled-DQU8Bodb.js";import"./memoTheme-JTO0J2AE.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-B3dE_Xi9.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./useEventCallback-Cus8kDUU.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-DptD_Py-.js";import"./useSlot-DT6vlKow.js";import"./FieldHelpIcon-B8jPZX1K.js";import"./index-CrcoPoGw.js";import"./index-Dwd1T5KI.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DVcTXB35.js";import"./index-B70TfKNL.js";import"./Tooltip-DXMour_H.js";import"./useTheme-ClD_legM.js";import"./useTimeout-B979BKpc.js";import"./useControlled-B5htf0na.js";import"./getReactElementRef-BO3eeWP1.js";import"./Portal-MprWoh0y.js";import"./utils-E62tsqSg.js";import"./TransitionGroupContext-DfpprYK4.js";import"./useSlotProps-CHdu95RH.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CLwVH8iN.js";import"./ButtonBase-B2MrdNo3.js";import"./CircularProgress-Gl2vZfvX.js";import"./Button-BPlwCXwF.js";import"./FormLabel-CoNS-ZSY.js";import"./FormHelperText-CcTnWzja.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
