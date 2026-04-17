import{j as r}from"./iframe-D_FBGCyt.js";import{F as l}from"./FormControl-am7KBdv4.js";import{O as s}from"./OutlinedInput-BIVPjmnf.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-C-J80xH0.js";import{I as n}from"./Input-ag75FSBU.js";import{F as p}from"./FormHelperText-Dcr870r9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-D0mczUgB.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-DWlz3pJm.js";import"./styled-xf6f_HVu.js";import"./memoTheme-BLxVLpBG.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-CnVOscb6.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-jDv7Sv7e.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-gV_s4djX.js";import"./useSlot-BtMprAQd.js";import"./FieldHelpIcon-DIaWgQqk.js";import"./index-BiBDMnSv.js";import"./index-C15pSvNp.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-5AfvjDJL.js";import"./index-DfmN7Pdp.js";import"./Tooltip-Cz548eDU.js";import"./useTheme-C9l_6OF0.js";import"./useTimeout-SlAgGEcH.js";import"./useControlled-CdfLcSkL.js";import"./getReactElementRef-CwqBwRrr.js";import"./Portal-DcK87Y2W.js";import"./utils-DnGyS3wP.js";import"./TransitionGroupContext-D8t5YM-9.js";import"./useSlotProps-C2D_NZSZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-eUYvyQUt.js";import"./ButtonBase-D61WXHG0.js";import"./CircularProgress-BjsVuxPp.js";import"./Button-CuoV_D53.js";import"./FormLabel-CcBITnwG.js";import"./FormHelperText-D-uyeHOV.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
