import{j as r}from"./iframe-La0hozmm.js";import{F as l}from"./FormControl-CgcW0UT-.js";import{O as s}from"./OutlinedInput-CTfBg3Vp.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-BhNQtIG5.js";import{I as n}from"./Input-DK9UjA2s.js";import{F as p}from"./FormHelperText-Bkeb9Mvm.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-ClnyVQ0Y.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-VxhL7QTS.js";import"./styled-06PLk0qx.js";import"./memoTheme-CzcgztNR.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-CYgSXLxN.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./useEventCallback-CkMNQS0_.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-CfiUOF2K.js";import"./useSlot-nKi4u3tI.js";import"./FieldHelpIcon-Df_dO11W.js";import"./index-MVgG_W0q.js";import"./index-D89vBAiO.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BIfisKmW.js";import"./index-CT5mpeGo.js";import"./IconButton-BEf7IA6l.js";import"./ButtonBase-RNjBI3PY.js";import"./useTimeout-CjP9kdgI.js";import"./TransitionGroupContext-Db3Z6NMb.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DKXLIFka.js";import"./Tooltip-DDgYhS1x.js";import"./useTheme-D5kgDNuB.js";import"./useControlled-DV2EMPBp.js";import"./getReactElementRef-TIeMXNsW.js";import"./Portal-QPUTbchU.js";import"./utils-C_Yf081A.js";import"./useSlotProps-o4xrbGrj.js";import"./Button-x0oW_Zme.js";import"./FormLabel-YrmrWU_k.js";import"./FormHelperText-Bk8ZiDzG.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
