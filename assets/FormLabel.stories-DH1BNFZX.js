import{j as r}from"./iframe-CLut6yOe.js";import{F as l}from"./FormControl-BZcEw6H3.js";import{O as s}from"./OutlinedInput-NqaTAoz7.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-BTJi8eTk.js";import{I as n}from"./Input-ITcMCnkO.js";import{F as p}from"./FormHelperText-yjxQtgN7.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CsURvBpr.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CAAIFwhI.js";import"./styled-B56iE4qf.js";import"./memoTheme-BCZ6py50.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-CW7nwTzV.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./useEventCallback-BXl50wnQ.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BoE-e40D.js";import"./useSlot-C8ASSSxZ.js";import"./FieldHelpIcon-BgH6Lc3x.js";import"./index-MVgG_W0q.js";import"./index-CxuuQ7ms.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Dd51Rz_D.js";import"./index-DNgDR8tQ.js";import"./IconButton-MKfAwX3T.js";import"./ButtonBase-B4AmE_nS.js";import"./useTimeout-DSf2abi9.js";import"./TransitionGroupContext-CxTk-KXz.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cb3dAqoX.js";import"./Tooltip-20BxdW9m.js";import"./useTheme-uzqIZvgA.js";import"./useControlled-BMhEC-vi.js";import"./getReactElementRef-CPIcGi-m.js";import"./Portal-buqhKvPN.js";import"./utils-CY0-o-M4.js";import"./useSlotProps-BphsLqn6.js";import"./Button-CO7SGq6S.js";import"./FormLabel-C4ZzvvPY.js";import"./FormHelperText-Du_S5IXp.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
