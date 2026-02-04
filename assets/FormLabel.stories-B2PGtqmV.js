import{j as r}from"./iframe-BjnuDffd.js";import{F as l}from"./FormControl-D7Bj8nG1.js";import{O as s}from"./OutlinedInput-DF2vQFYi.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-CpCR7hc4.js";import{I as p}from"./Input-vYifScyq.js";import{F as n}from"./FormHelperText-rcRY5K5-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CIls3zi9.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CRA1aQWB.js";import"./styled-DqMp1nYt.js";import"./memoTheme-B2JdP5Lg.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-DH1owG2H.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-C7vIb1Zh.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-ShRnscjH.js";import"./useSlot-jAOnMiB5.js";import"./FieldHelpIcon-QHNiUSFf.js";import"./index-BiBDMnSv.js";import"./index-BPcsFkr_.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CargZ35d.js";import"./index-ozQD-jv-.js";import"./Tooltip-DY2U7J0u.js";import"./useTheme-C7UHXn64.js";import"./useTimeout-C6wFpPob.js";import"./useControlled-BK8V1AI9.js";import"./getReactElementRef-Cj7TLjNv.js";import"./Portal-BeYOOpZP.js";import"./utils-BWRWa3IK.js";import"./TransitionGroupContext-CjQYVfWF.js";import"./useSlotProps-BCOe5sCp.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CTKwlcpD.js";import"./ButtonBase-B91JQX2j.js";import"./CircularProgress-2p5PvuKn.js";import"./Button-Z3VsI-jq.js";import"./FormLabel-gNuCHhVS.js";import"./FormHelperText-CtgE_BPS.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
