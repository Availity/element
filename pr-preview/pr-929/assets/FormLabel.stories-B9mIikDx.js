import{j as r}from"./iframe-Cnf77ZIg.js";import{F as l}from"./FormControl-CCnUhFPG.js";import{O as s}from"./OutlinedInput-Wlr5Q67i.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-DewUqx1F.js";import{I as n}from"./Input-D5rvun6A.js";import{F as p}from"./FormHelperText-BJWegvlE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-FlV4R_pV.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-DBtd91O4.js";import"./styled-D7PTo4Yf.js";import"./memoTheme-rtNk9j34.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-CwrFiSR5.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./useEventCallback-C-Qx89z1.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-CtuEIw1c.js";import"./useSlot-UCTcrF1q.js";import"./FieldHelpIcon-_sf6o81A.js";import"./index-CrcoPoGw.js";import"./index-CCvoZ_po.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D8TdQCTz.js";import"./index-BbhRJntT.js";import"./Tooltip-RxJZvyE-.js";import"./useTheme-fbZoBAbS.js";import"./useTimeout-DDbT1lIl.js";import"./useControlled-CSfvqfPH.js";import"./getReactElementRef-CMOtQl0I.js";import"./Portal-_ErOQT1L.js";import"./utils-C9oXke8q.js";import"./TransitionGroupContext-PCEy4ISN.js";import"./useSlotProps-9tgtsXjP.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-De56WQhg.js";import"./ButtonBase-Cb27w-UN.js";import"./CircularProgress-DjiS4vOo.js";import"./Button-B1EPaR8-.js";import"./FormLabel-BjvK7be8.js";import"./FormHelperText-BughnuW6.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
