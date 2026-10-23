import{j as r}from"./iframe-TaNZkFdX.js";import{F as l}from"./FormControl-aukPUzfN.js";import{O as s}from"./OutlinedInput-CUtfKWDd.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-3R3zsiU7.js";import{I as n}from"./Input-B7Bnq8Wt.js";import{F as p}from"./FormHelperText-D9KPI2cK.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-C3JuhRxY.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-D3gl8ezB.js";import"./styled-B4LT_xKE.js";import"./memoTheme-DWNFUNe8.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-BWA77Ou0.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./useEventCallback-Mv5Tf1uh.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-I1tu7yOe.js";import"./useSlot-C54pGJsm.js";import"./FieldHelpIcon-B86-MXkw.js";import"./index-MVgG_W0q.js";import"./index-DQOdSWXL.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DJOFM4ge.js";import"./index-B97OVu1W.js";import"./IconButton-Bj0GebPw.js";import"./ButtonBase-hN41DD3n.js";import"./useTimeout-6mINgJ0s.js";import"./TransitionGroupContext-DNirSs3q.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-UQNWqsj-.js";import"./Tooltip-NifhenR9.js";import"./useTheme-BwMLg3Cm.js";import"./useControlled-DvjtXf7N.js";import"./getReactElementRef-CAOV2LsM.js";import"./Portal-bQbDJznY.js";import"./utils-DLs5F192.js";import"./useSlotProps-DaoY2z77.js";import"./Button-BwGYoRWi.js";import"./FormLabel-DDrneIVK.js";import"./FormHelperText-hu8qIV4s.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
