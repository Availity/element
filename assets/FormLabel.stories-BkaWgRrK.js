import{j as r}from"./iframe-BogvEzzk.js";import{F as l}from"./FormControl-CKOpWj-y.js";import{O as s}from"./OutlinedInput-Cq1_VBQe.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-BJO5WCm0.js";import{I as p}from"./Input-dESeUhwh.js";import{F as n}from"./FormHelperText-C_dNdhi0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-B8_Z0NzZ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-BFE19Jpd.js";import"./styled-BFtRu0jz.js";import"./memoTheme-ConJxO_1.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-CqcCgO8d.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-C0HPOgFU.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BErbrcgk.js";import"./useSlot-Y7PrCG6i.js";import"./FieldHelpIcon-B3BXlFJi.js";import"./index-BiBDMnSv.js";import"./index-DN6mEFyY.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-G5ERuA4c.js";import"./index-CVBbnXNY.js";import"./Tooltip-C6WVgS1U.js";import"./useTheme-BBNTCId8.js";import"./useTimeout-DZGpqNmU.js";import"./useControlled-gyysmPVY.js";import"./getReactElementRef-CP_6PAo8.js";import"./Portal-ZBYUloHF.js";import"./utils-5Q8am4bW.js";import"./TransitionGroupContext-CHnQfJTl.js";import"./useSlotProps-BANTEgU8.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BtFu5_Hj.js";import"./ButtonBase-BesYK0lh.js";import"./CircularProgress-DhfsvjKI.js";import"./Button-tZZ9xZeA.js";import"./FormLabel-C89BBoXI.js";import"./FormHelperText-BPy61GBU.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
