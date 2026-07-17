import{j as r}from"./iframe-DFjmTghm.js";import{F as l}from"./FormControl-CBg4yJvo.js";import{O as s}from"./OutlinedInput-CYFmS-1F.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-BxoMdSk-.js";import{I as n}from"./Input-u0na44hV.js";import{F as p}from"./FormHelperText-CT_v0x1I.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BfqaQjSl.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-BTwBnJKE.js";import"./styled-Bs6aTLdD.js";import"./memoTheme-BQvuiRMw.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-Cm1smsVr.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./useEventCallback-DYc4zMoP.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-dd0y0IZz.js";import"./useSlot-Cc0TH-P4.js";import"./FieldHelpIcon-DTHHI-6f.js";import"./index-CrcoPoGw.js";import"./index-BziNu4GU.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-loQPFd-T.js";import"./index-C9VG5BR5.js";import"./Tooltip-BpELumoD.js";import"./useTheme-C6J0_U3R.js";import"./useTimeout-DYSzpSzE.js";import"./useControlled-_CojnKOO.js";import"./getReactElementRef-dZ7e7R7I.js";import"./Portal-6A9k5eoS.js";import"./utils-DG8dL2Al.js";import"./TransitionGroupContext-CFoyGAe4.js";import"./useSlotProps-BPRZd4R9.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D8Ip9ZNp.js";import"./ButtonBase-WbBW4SNX.js";import"./CircularProgress-DAp6FT1u.js";import"./Button-Di2tppwh.js";import"./FormLabel-CVzJErPY.js";import"./FormHelperText-D5drgxgl.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
