import{j as r}from"./iframe-3dkTY0jX.js";import{F as l}from"./FormControl-DVjrtSwm.js";import{O as s}from"./OutlinedInput-Duj6wcXY.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-CX1S9uux.js";import{I as n}from"./Input-BT9RiC7m.js";import{F as p}from"./FormHelperText-B19ReGhV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BkMljPP4.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Bd2bXImB.js";import"./styled-DpUmhVNm.js";import"./memoTheme-ClYOyAcO.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-D98SVFOp.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./useEventCallback-DqxbtF2b.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-DA590uQB.js";import"./useSlot-rqG-d0ju.js";import"./FieldHelpIcon-oCcNi9cX.js";import"./index-CrcoPoGw.js";import"./index-CuTsacvC.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-iH6sJxt7.js";import"./index-B-aFmFgv.js";import"./Tooltip-gP38pAtd.js";import"./useTheme-DqSWHq5v.js";import"./useTimeout-C1Q0-pFI.js";import"./useControlled-BRptJIgz.js";import"./getReactElementRef-D5Pt6kS1.js";import"./Portal-COcgB0Km.js";import"./utils-q4WRQ2GW.js";import"./TransitionGroupContext-CenxJGkC.js";import"./useSlotProps-cunvSKS2.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-NndX5job.js";import"./ButtonBase-CGwtNBxW.js";import"./CircularProgress-BLVqZX76.js";import"./Button-llKR0QUB.js";import"./FormLabel-BNykh8H7.js";import"./FormHelperText-CfwUUlMy.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
