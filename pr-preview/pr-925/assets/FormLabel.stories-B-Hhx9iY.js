import{j as r}from"./iframe-BRP1PsTd.js";import{F as l}from"./FormControl-DSVABsS-.js";import{O as s}from"./OutlinedInput-URDDzUkx.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-BfOTCASN.js";import{I as n}from"./Input-DrM9NPGU.js";import{F as p}from"./FormHelperText-B47nTdCz.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-ClZVz9V6.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CTMPmI0-.js";import"./styled-kfJMXx_R.js";import"./memoTheme-Rx2ZtNd-.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-DUyCy24e.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./useEventCallback-BX14bO_3.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-B2RYlZua.js";import"./useSlot-B51YQDxZ.js";import"./FieldHelpIcon-BCrGTaIT.js";import"./index-CrcoPoGw.js";import"./index-C9qIB2Ge.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-C0xh8SUy.js";import"./index-BsNnDr7w.js";import"./Tooltip-C5fygC3l.js";import"./useTheme-C-06SHWZ.js";import"./useTimeout-zBXF3kIc.js";import"./useControlled-8-M28gqE.js";import"./getReactElementRef-y-MSVziw.js";import"./Portal-CRr1uWpV.js";import"./utils-DtC8lP3P.js";import"./TransitionGroupContext-DjWTkcZP.js";import"./useSlotProps-fBG80Xpc.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-4bUdPSIB.js";import"./ButtonBase-DI3KZvly.js";import"./CircularProgress-Dy9r_LoH.js";import"./Button-BSPls0mt.js";import"./FormLabel-DFQHDft-.js";import"./FormHelperText-CJRPJvNW.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
