import{j as r}from"./iframe-DTpfCdTP.js";import{F as l}from"./FormControl-CXqj2fUU.js";import{O as s}from"./OutlinedInput-CVj7dZL7.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-BfT9mNhS.js";import{I as p}from"./Input-Dam5ar83.js";import{F as n}from"./FormHelperText-D6-77xfP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CbIMQ9id.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-DL6gjngF.js";import"./styled-JKD3wrB9.js";import"./memoTheme-D8G-akul.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-Dez1FBmj.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-5DZSu_H1.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BJk609iI.js";import"./useSlot-h1Ycty7Q.js";import"./FieldHelpIcon-B-vtB4q4.js";import"./index-BiBDMnSv.js";import"./index-DFihowQv.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CZ5jOsa4.js";import"./index-q1MxSMZt.js";import"./Tooltip-uiVSuhLb.js";import"./useTheme-jT65VjN1.js";import"./useTimeout-BG483csS.js";import"./useControlled-BQlebmQ3.js";import"./getReactElementRef-Bdxo8MI5.js";import"./Portal-Ghvglbwf.js";import"./utils-vs6bWRab.js";import"./TransitionGroupContext-DugTcswx.js";import"./useSlotProps-BBfgcS2b.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C1za8a59.js";import"./ButtonBase-TqCu7TYl.js";import"./CircularProgress-eXewDO5k.js";import"./Button-CuRegif2.js";import"./FormLabel-BGFTL5Tj.js";import"./FormHelperText-BjaQkS1m.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
