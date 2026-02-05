import{j as r}from"./iframe-Cb7vw6QO.js";import{F as l}from"./FormControl-fPCLegLr.js";import{O as s}from"./OutlinedInput-DXGq1lSL.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-BdCdJOND.js";import{I as p}from"./Input-B4lwOaaG.js";import{F as n}from"./FormHelperText-vdkbG4go.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CTXbndWV.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-imdvoBqP.js";import"./styled-Bj0Es0Li.js";import"./memoTheme-BhRdBUps.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-BNxAHOk3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-DhPRnvwe.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-81oQhZWc.js";import"./useSlot-Bh9EPizr.js";import"./FieldHelpIcon-DC16BzuA.js";import"./index-BiBDMnSv.js";import"./index-CXcfblB4.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-DzlaQllX.js";import"./index-BC2dqveQ.js";import"./Tooltip-BsHoCzhf.js";import"./useTheme-CGEjvpOB.js";import"./useTimeout-Cz1ClSsL.js";import"./useControlled-DqdtCuR_.js";import"./getReactElementRef-a_8TXcOV.js";import"./Portal-DJJdN93D.js";import"./utils-DcOfItOr.js";import"./TransitionGroupContext-DGa2MF0H.js";import"./useSlotProps-BV7LDA1z.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CF-wUheM.js";import"./ButtonBase-CsQPbkJ1.js";import"./CircularProgress-CDQWW7ND.js";import"./Button-DxhLSeMc.js";import"./FormLabel-DpGDqrtm.js";import"./FormHelperText-Bt-HOScp.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
