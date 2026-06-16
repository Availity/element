import{j as r}from"./iframe-DbrIJLQi.js";import{F as l}from"./FormControl-CA9sRqVU.js";import{O as s}from"./OutlinedInput-BFe23H1n.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-3oZeu7dG.js";import{I as n}from"./Input-DaGAchKC.js";import{F as p}from"./FormHelperText-DZZdTXwf.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CYWmgkgE.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-2h_sD4kS.js";import"./styled-7I1Qt9E3.js";import"./memoTheme-CYnUbeeS.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-xHQCOq-i.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./useEventCallback-GRDf_Mdq.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-D6Q6z-MA.js";import"./useSlot-ucEwirIM.js";import"./FieldHelpIcon-DeOub3Ow.js";import"./index-CrcoPoGw.js";import"./index-BV8EXEzP.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DkLovEvc.js";import"./index-BviXD-l_.js";import"./Tooltip-Dj2v8eaN.js";import"./useTheme-DYW2Qal8.js";import"./useTimeout-0bEjAxlE.js";import"./useControlled-DZAExesg.js";import"./getReactElementRef-CTToKV8F.js";import"./Portal-CRDltpFP.js";import"./utils-C3QXpwtY.js";import"./TransitionGroupContext-bpHC9icU.js";import"./useSlotProps-CHkbcgjp.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-FVSq3BNJ.js";import"./ButtonBase-BHclRNV-.js";import"./CircularProgress-HcGcr7gk.js";import"./Button-CzxszAvI.js";import"./FormLabel-D7bT6Btw.js";import"./FormHelperText-BvP8g2iX.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
