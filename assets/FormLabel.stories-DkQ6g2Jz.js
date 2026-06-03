import{j as r}from"./iframe-C9Q7A5ra.js";import{F as l}from"./FormControl-CN3DMGzN.js";import{O as s}from"./OutlinedInput-CSgt8L6A.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-Buv7tJRo.js";import{I as n}from"./Input-MLCCmvbg.js";import{F as p}from"./FormHelperText-kwin25J0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CWsMajyi.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-BgeoDj0f.js";import"./styled-0UczSNXk.js";import"./memoTheme-YF5MtDv6.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-B8T8EBOK.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-LHv8CayF.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-UhsM3zsz.js";import"./useSlot--WqN-Xj_.js";import"./FieldHelpIcon-Tduuw83I.js";import"./index-BiBDMnSv.js";import"./index-CyBTe91T.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CzclMxo5.js";import"./index-Cb9JJsiN.js";import"./Tooltip-Dxz12tat.js";import"./useTheme-DiIVsm9U.js";import"./useTimeout-BpXHY--n.js";import"./useControlled-__FO7R_p.js";import"./getReactElementRef-D2IRer1N.js";import"./Portal-1jOXhtNE.js";import"./utils-BZDXaftX.js";import"./TransitionGroupContext-DyV0aRJH.js";import"./useSlotProps-Osd4OcEu.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DZcoIB4U.js";import"./ButtonBase-B3rBS9gF.js";import"./CircularProgress-CPrPE9Sw.js";import"./Button-CeTzgLEE.js";import"./FormLabel-BmBjgzzS.js";import"./FormHelperText-Cbb9nKyC.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
