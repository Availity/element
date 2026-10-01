import{j as r}from"./iframe-BfiSjCZE.js";import{F as l}from"./FormControl-C9VIskN5.js";import{O as s}from"./OutlinedInput-DF7uYzJm.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-DdMNJcrr.js";import{I as n}from"./Input-BTeYCcU5.js";import{F as p}from"./FormHelperText-Bex5yw6a.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-C5CMMi3k.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CIl3go_L.js";import"./styled-B9LoXHeR.js";import"./memoTheme-Bf2lNlfa.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-KHwM-Xb0.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./useEventCallback-BRDDRqyT.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-d8P6odjW.js";import"./useSlot-BvJ3REjy.js";import"./FieldHelpIcon-C_WAK0Rc.js";import"./index-MVgG_W0q.js";import"./index-CnlcVsMi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-pfgupZ4n.js";import"./index-BnEi8s_n.js";import"./IconButton-CFfT0ndL.js";import"./ButtonBase-B0Rj5enX.js";import"./useTimeout-Dvw-KAbd.js";import"./TransitionGroupContext-BprlU7j-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DFM5h0gz.js";import"./Tooltip-DQOY4bTe.js";import"./useTheme-CyCmmmWE.js";import"./useControlled-DuHd5Dfi.js";import"./getReactElementRef-DrqUH2UJ.js";import"./Portal-1iQSKTOk.js";import"./utils-CZVImzMM.js";import"./useSlotProps-DsKdZe-B.js";import"./Button-CWR2xa5V.js";import"./FormLabel-BkT6Jibn.js";import"./FormHelperText-CxIv3Am1.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
