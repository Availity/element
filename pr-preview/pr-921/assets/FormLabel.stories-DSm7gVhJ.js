import{j as r}from"./iframe-DVscMr-A.js";import{F as l}from"./FormControl-wb4CWP8v.js";import{O as s}from"./OutlinedInput-CY0TCNx8.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-CM4Q49gW.js";import{I as n}from"./Input-Y2MaHHBl.js";import{F as p}from"./FormHelperText-B3gK1N_u.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DkCKu5ph.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-J0UlRgLR.js";import"./styled-DQ7SGoXr.js";import"./memoTheme-BWlAx59E.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-D_2VvoZd.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./useEventCallback-yUNJdQIx.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-2ZD1Wa3p.js";import"./useSlot-CcjURTXg.js";import"./FieldHelpIcon-DGqdOUt1.js";import"./index-CrcoPoGw.js";import"./index-BnViiisy.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-W7CV7YPZ.js";import"./index-BeF-k_6p.js";import"./Tooltip-fH0F2vbV.js";import"./useTheme-YOFO5C4H.js";import"./useTimeout-zxUPRTwq.js";import"./useControlled-DNBFEVpl.js";import"./getReactElementRef-BdBU57AF.js";import"./Portal-DpqzBqCy.js";import"./utils-3Br-A01V.js";import"./TransitionGroupContext-BG8XIQuv.js";import"./useSlotProps-pr2a7puG.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dq1PDEwT.js";import"./ButtonBase-Rik4d0uu.js";import"./CircularProgress-DG2q71MX.js";import"./Button-C5YW8aoX.js";import"./FormLabel-BdI1jtcT.js";import"./FormHelperText-DTQfoS1X.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
