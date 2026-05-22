import{j as r}from"./iframe-CEMXsp8C.js";import{F as l}from"./FormControl-CUQ3qwGV.js";import{O as s}from"./OutlinedInput-DkQzF-Yr.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-BwRC4Nvu.js";import{I as n}from"./Input-C6xKRwdX.js";import{F as p}from"./FormHelperText-DwJWH6ZM.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-rkOnYHMv.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-D0FqNR9x.js";import"./styled-qsRty7dq.js";import"./memoTheme-l-GP-bwx.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-DoG2Adio.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-DFupxdy5.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-CZJ2E7Ux.js";import"./useSlot-CsbKhATt.js";import"./FieldHelpIcon-CmZ8wu0h.js";import"./index-BiBDMnSv.js";import"./index-D94lOHFj.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-nYHR5krO.js";import"./index-CwlIgXTJ.js";import"./Tooltip-DE_9rsm0.js";import"./useTheme-DmimCZ1K.js";import"./useTimeout-Dr5vw9MW.js";import"./useControlled-BuTFob83.js";import"./getReactElementRef-7aOdyAnj.js";import"./Portal-Cd1GL2Ny.js";import"./utils-uO-Y6Lu-.js";import"./TransitionGroupContext-CFI9AaDj.js";import"./useSlotProps-Uj4Ej5E1.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CI45TlqX.js";import"./ButtonBase-DV3wZvw5.js";import"./CircularProgress-C6UU3hYL.js";import"./Button-BggChkC7.js";import"./FormLabel-B5UQsNVX.js";import"./FormHelperText-DqMuL7fY.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
