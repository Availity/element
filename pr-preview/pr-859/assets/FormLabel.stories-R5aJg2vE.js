import{j as r}from"./iframe-C1vntzAX.js";import{F as m}from"./FormControl-C2A4DMgu.js";import{O as s}from"./OutlinedInput-Cw6JNZpA.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-DywNZwmX.js";import{I as p}from"./Input-ZkmAZQHS.js";import{F as n}from"./FormHelperText-5gHQ1ggL.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-SXzsh7qR.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-DtGZmajx.js";import"./styled-CpL5pW3T.js";import"./memoTheme-B-OyMYhz.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-DLYnPViW.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-D85fiQCE.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-BmDgUDTi.js";import"./mergeSlotProps-B_ZZvCmf.js";import"./FieldHelpIcon-C1_mgjam.js";import"./index-BiBDMnSv.js";import"./index-CDQPidku.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-CgejwYEH.js";import"./index-BuDjrn_R.js";import"./Tooltip-CVSMh7i1.js";import"./useTheme-vaQlFbmr.js";import"./useTimeout-Dtp_2qQ3.js";import"./useControlled-DMvVP-hg.js";import"./getReactElementRef-Bv2ENe3N.js";import"./Portal-CG1k2SoH.js";import"./utils-3uAZdIAp.js";import"./TransitionGroupContext-cDoqgCSl.js";import"./useSlotProps-B-xFDx91.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-qkSs6g8Y.js";import"./ButtonBase-COQRfLrd.js";import"./CircularProgress-Drsym3OL.js";import"./Button-CbKLSFYP.js";import"./FormLabel-ViyvnT0n.js";import"./FormHelperText-C4dhFzeB.js";const mr={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:l=>r.jsx(e,{...l}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(m,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(m,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const lr=["_FormLabel","_States","_Controls"];export{i as _Controls,o as _FormLabel,t as _States,lr as __namedExportsOrder,mr as default};
