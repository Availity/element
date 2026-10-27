import{j as r}from"./iframe-DUa_E2nK.js";import{F as l}from"./FormControl-Bsqtqb3j.js";import{O as s}from"./OutlinedInput-CFR5oBwr.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-CwlS3P5k.js";import{I as n}from"./Input-CmK18YU0.js";import{F as p}from"./FormHelperText-C4Li-5mA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-S2Jix1K5.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CAErNZ9l.js";import"./styled-D3Muh4M2.js";import"./memoTheme-Bo6NThYL.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-CxpHUqnO.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./useEventCallback-BMK6R2Pt.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-CEo301sU.js";import"./useSlot-DlELlrwU.js";import"./FieldHelpIcon-BhE_f-n8.js";import"./index-MVgG_W0q.js";import"./index-BevA4mtD.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BewdDvzO.js";import"./index-CS_NebII.js";import"./IconButton-BifEyGUq.js";import"./ButtonBase-Bug9d4_R.js";import"./useTimeout-CVWqITqM.js";import"./TransitionGroupContext-CaPdAk9s.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bzposo0O.js";import"./Tooltip-Bq-dRAZk.js";import"./useTheme-D2wrQY5U.js";import"./useControlled-mPNvpXlD.js";import"./getReactElementRef-ReUsDlEE.js";import"./Portal-DK6E0QaG.js";import"./utils-9zA4k4wE.js";import"./useSlotProps-Cc5Sw607.js";import"./Button-CbV8DhMK.js";import"./FormLabel-CpBzcOsS.js";import"./FormHelperText-D9BA1QML.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
