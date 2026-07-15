import{j as r}from"./iframe-DDeFjhwT.js";import{F as l}from"./FormControl-CYQG91-S.js";import{O as s}from"./OutlinedInput-ZBGK4L-L.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-CyRGekvm.js";import{I as n}from"./Input-CmRuXeS1.js";import{F as p}from"./FormHelperText-D_lyWNH-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-eu10Xp36.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-C8BOTMMK.js";import"./styled-PQjfDOgQ.js";import"./memoTheme-BKUl2Kw8.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-DgKt8E30.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./useEventCallback-tCUa2-C3.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BPESDwW9.js";import"./useSlot-SzvoDGen.js";import"./FieldHelpIcon-C9mvWlZE.js";import"./index-CrcoPoGw.js";import"./index-V6LxtqOC.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DRz9ijBU.js";import"./index-CSwp3I03.js";import"./Tooltip-5o6beSBH.js";import"./useTheme-KKOLTJXa.js";import"./useTimeout-Cm2RyAAI.js";import"./useControlled-BH5VVnvv.js";import"./getReactElementRef-BeHDg4ji.js";import"./Portal-BqacPdFW.js";import"./utils-DshWixdw.js";import"./TransitionGroupContext-DKXhXx0i.js";import"./useSlotProps-B4bgTElG.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CurJhF0D.js";import"./ButtonBase-D-CcOUqB.js";import"./CircularProgress-DZuzO0Uv.js";import"./Button-su8UM5h8.js";import"./FormLabel-DwKt04Fe.js";import"./FormHelperText-C0of87GE.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
