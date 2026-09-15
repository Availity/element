import{j as r}from"./iframe-_ZTccD58.js";import{F as l}from"./FormControl-COm2WUnr.js";import{O as s}from"./OutlinedInput-DXlNzAXJ.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-CdEVf94I.js";import{I as n}from"./Input-B1Yj6DFO.js";import{F as p}from"./FormHelperText-Cm-R64hF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-3-vne5Nr.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-yepEbMeh.js";import"./styled-DxUGJNed.js";import"./memoTheme-BuxtMmS2.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-BH960YuM.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./useEventCallback-Bsg7GzMN.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BNTkh1_h.js";import"./useSlot-Y1vfiROK.js";import"./FieldHelpIcon-BIa7kHqP.js";import"./index-CrcoPoGw.js";import"./index-D2g-Snq2.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-B7LeHXNQ.js";import"./index-DLaYSOpi.js";import"./IconButton-DaIXPvFu.js";import"./ButtonBase-CPTcrrxt.js";import"./useTimeout-COBvC2JW.js";import"./TransitionGroupContext-U0kEnV9D.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DP4XdEyk.js";import"./Tooltip-BlJXya1q.js";import"./useTheme-CbKlvc9V.js";import"./useControlled-h9lrVQtL.js";import"./getReactElementRef-CKHPMftD.js";import"./Portal-D40QliBd.js";import"./utils-CGytJ6bP.js";import"./useSlotProps-93kC9vNJ.js";import"./Button-DpAEBbkn.js";import"./FormLabel-BOIs-YGq.js";import"./FormHelperText-CVMjCHsI.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
