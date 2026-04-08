import{j as r}from"./iframe-B3XSEB2p.js";import{F as l}from"./FormControl-BWJTqszo.js";import{O as s}from"./OutlinedInput-DspMNzyC.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-Cdvm6NoY.js";import{I as n}from"./Input-C1VANDBW.js";import{F as p}from"./FormHelperText-D-x7_4oA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-rtm0CpB1.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-ZiQktaUF.js";import"./styled-BKJUYYzH.js";import"./memoTheme-zFBVIAxJ.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-BFyiqj42.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-Dfz_oY_W.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BUA7aXyy.js";import"./useSlot-fXCwMtx-.js";import"./FieldHelpIcon-DUVeCraK.js";import"./index-BiBDMnSv.js";import"./index-CAS_Ehni.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BW4di25g.js";import"./index-BDo5zO46.js";import"./Tooltip-CpMdDorm.js";import"./useTheme-Gs2b_SoM.js";import"./useTimeout-DjubHrAv.js";import"./useControlled-BnIqSLBp.js";import"./getReactElementRef-m4HA6qqR.js";import"./Portal-DeOXpMrf.js";import"./utils-CMJMNufc.js";import"./TransitionGroupContext-bUHI8Opa.js";import"./useSlotProps-BnXi_Ts5.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-ML2PMq2-.js";import"./ButtonBase-CV7JyDx9.js";import"./CircularProgress-C6blXItT.js";import"./Button-Cx7ia3Qx.js";import"./FormLabel-CxLEzcw-.js";import"./FormHelperText-B6YW8aeN.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
