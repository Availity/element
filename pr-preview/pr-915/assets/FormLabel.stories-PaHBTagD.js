import{j as r}from"./iframe-BeW-ShBa.js";import{F as l}from"./FormControl-BGOvdkoq.js";import{O as s}from"./OutlinedInput-DFxqNyAs.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-t9cKM0KN.js";import{I as n}from"./Input--UWUIS6h.js";import{F as p}from"./FormHelperText-X3q8MXlY.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DwS3dUaL.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Gc_4vFE3.js";import"./styled-E0CmYcz3.js";import"./memoTheme-Dx1_-nEN.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-Bgl7H4kw.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-6Uyg9fGx.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-CGqoVYOm.js";import"./useSlot-BhPPWLJz.js";import"./FieldHelpIcon-BMCCOx9o.js";import"./index-BiBDMnSv.js";import"./index-BKqV-UiY.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-C3Z68du4.js";import"./index-B-GrkHTI.js";import"./Tooltip-UPiMyfZ8.js";import"./useTheme-BPzLpLU0.js";import"./useTimeout-Da9tNn-P.js";import"./useControlled-BpXRfpPn.js";import"./getReactElementRef-BjNvvstO.js";import"./Portal-BPMEmQxN.js";import"./utils-CvRtdEc9.js";import"./TransitionGroupContext-BUF6kaGb.js";import"./useSlotProps-ghuGdCEB.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BvJM40or.js";import"./ButtonBase-Z8KwVcKF.js";import"./CircularProgress-CiOpdtGa.js";import"./Button-BwdPpmvm.js";import"./FormLabel-Cxj9EV6v.js";import"./FormHelperText-DLkF45Vp.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
