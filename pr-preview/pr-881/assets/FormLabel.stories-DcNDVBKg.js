import{j as r}from"./iframe-D81qY2CF.js";import{F as l}from"./FormControl-CPJa8i5X.js";import{O as s}from"./OutlinedInput-CBLYdT9S.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-cxvxeTrS.js";import{I as p}from"./Input-7O8GhY1h.js";import{F as n}from"./FormHelperText-5kwVGcrV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-B58sNEHq.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CnND6WC1.js";import"./styled-CaGoIOKf.js";import"./memoTheme-A9yntoiy.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-aj5N3dMx.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-CqgW2Pgy.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BaZVmxsR.js";import"./useSlot-ietvTX_K.js";import"./FieldHelpIcon-BkJ0_ecK.js";import"./index-BiBDMnSv.js";import"./index-BD-so7Wr.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-B6ASqf__.js";import"./index-D8s0t892.js";import"./Tooltip-DVNRBZHi.js";import"./useTheme-DaB7mFrL.js";import"./useTimeout-DKkko9rl.js";import"./useControlled-JeBGtbqT.js";import"./getReactElementRef-DGERSSwn.js";import"./Portal-CxFiB9ei.js";import"./utils-or5sFOOm.js";import"./TransitionGroupContext-CUPg0qtb.js";import"./useSlotProps-huDybs-7.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DShobRfO.js";import"./ButtonBase-D8v-94oh.js";import"./CircularProgress-ByHKQjCZ.js";import"./Button-B5mFfpCi.js";import"./FormLabel-1LiFzSpb.js";import"./FormHelperText-DCQUYD-6.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
