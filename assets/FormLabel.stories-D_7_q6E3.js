import{j as r}from"./iframe-BAylI5Je.js";import{F as l}from"./FormControl-BbAZPcoD.js";import{O as s}from"./OutlinedInput-y_HDBIb1.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-1R_u-9oH.js";import{I as p}from"./Input-_8HdQ9dB.js";import{F as n}from"./FormHelperText-WescEByt.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-D3XHth8F.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Bp8yuFL1.js";import"./styled-qchFS-7q.js";import"./memoTheme-BuFiJMU4.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-BbXecB9y.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-kqwlHtUL.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-CpHFUTeD.js";import"./useSlot-tp0V2ckF.js";import"./FieldHelpIcon-CgEe4r-h.js";import"./index-BiBDMnSv.js";import"./index-BYPMkNsh.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-B08jEN2V.js";import"./index-Cwm8YEbi.js";import"./Tooltip-xJM8APnn.js";import"./useTheme-Ct91rq7x.js";import"./useTimeout-Dtra5kqE.js";import"./useControlled-DdXnTKyH.js";import"./getReactElementRef-DYgwaRsW.js";import"./Portal-CtkHDIPH.js";import"./utils-jWIr1tvh.js";import"./TransitionGroupContext-4YAWsFUH.js";import"./useSlotProps-CjIBT4F9.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DyCxfOpo.js";import"./ButtonBase-CKOllhzB.js";import"./CircularProgress-Da-Xnf7p.js";import"./Button-6oOIUTaT.js";import"./FormLabel-Cph4_T4L.js";import"./FormHelperText-CrBR3XVW.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
