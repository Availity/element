import{j as r}from"./iframe-C4HkdVED.js";import{F as l}from"./FormControl-BsgqGLFQ.js";import{O as s}from"./OutlinedInput-Rbi1tT2Y.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-BZlD6iOL.js";import{I as n}from"./Input-BQNQHnYQ.js";import{F as p}from"./FormHelperText-D0Rug7G_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DBv_L_iF.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-DPikhU7x.js";import"./styled-BT-YQVcS.js";import"./memoTheme-BG6Rse2P.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-DbUR2J1C.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./useEventCallback-D9gX9Adj.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-l3M3qA9x.js";import"./useSlot-BskdyKfe.js";import"./FieldHelpIcon-BKTTQhJC.js";import"./index-MVgG_W0q.js";import"./index-BbnWHkMi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CzUPI6h_.js";import"./index-BxZtHMSR.js";import"./IconButton-DAm3sfm9.js";import"./ButtonBase-DSSz5Mb_.js";import"./useTimeout-Dr23bHsI.js";import"./TransitionGroupContext-CZn2k0zL.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ClUyHzUc.js";import"./Tooltip-Cu6qxs5M.js";import"./useTheme-B8XrPkIo.js";import"./useControlled-DrH6I0XL.js";import"./getReactElementRef-BgdKh17h.js";import"./Portal-Dwihqrdb.js";import"./utils-DTqk_mV5.js";import"./useSlotProps-zZW6O8Vc.js";import"./Button-Xlv09vPK.js";import"./FormLabel-C9ntXL4m.js";import"./FormHelperText-CB5Pl2UM.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
