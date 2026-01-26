import{j as r}from"./iframe-B4F0UUz5.js";import{F as l}from"./FormControl-kze_2YuQ.js";import{O as s}from"./OutlinedInput-CTooi5LH.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-CjEnycTQ.js";import{I as p}from"./Input-BM8DTa8Y.js";import{F as n}from"./FormHelperText-DQLpXCcJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CfinztXI.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-DG4Oj80J.js";import"./styled-bGWttyC6.js";import"./memoTheme-BKk2saex.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-CjLG5x_H.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-BqH7MYZ-.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-DT_q42Lx.js";import"./useSlot-oo8TP9Im.js";import"./FieldHelpIcon-BwbGgrSR.js";import"./index-BiBDMnSv.js";import"./index-Cr9n8cqt.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DM1sZoZa.js";import"./index-CJ27nWYv.js";import"./Tooltip-DyWobFm2.js";import"./useTheme-DkdpmsKL.js";import"./useTimeout-BonZNUeG.js";import"./useControlled-BRFwdesD.js";import"./getReactElementRef-CApeICjD.js";import"./Portal-D8A5UmkR.js";import"./utils-BiHtS7y3.js";import"./TransitionGroupContext-fwmkieDY.js";import"./useSlotProps-C2ZAZv5Q.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CqGgnlnL.js";import"./ButtonBase-DqWoj7oR.js";import"./CircularProgress-PmMulKWi.js";import"./Button-BurqBlBC.js";import"./FormLabel-FPMZFyGu.js";import"./FormHelperText-CnAIs5dB.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
