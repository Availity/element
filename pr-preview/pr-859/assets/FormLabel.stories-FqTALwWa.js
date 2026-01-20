import{j as r}from"./iframe-PQChuD5P.js";import{F as l}from"./FormControl-DvecvwWK.js";import{O as s}from"./OutlinedInput-D5_x8OFb.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-Cvt6fBYi.js";import{I as p}from"./Input-D1F5xoSZ.js";import{F as n}from"./FormHelperText-Ct8tBTkQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CbIOiaJO.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-BKekQHvL.js";import"./styled-IO14y-za.js";import"./memoTheme-CVvKr3an.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-CKG9IprU.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-CVuBVoUk.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-D2tsKCVf.js";import"./useSlot-Budp5-i0.js";import"./FieldHelpIcon-DUw16WpV.js";import"./index-BiBDMnSv.js";import"./index-B-1E6jc-.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-Ct-k9MaL.js";import"./index-CPbMBP85.js";import"./Tooltip-D_0sM1X3.js";import"./useTheme-D_lM5llQ.js";import"./useTimeout-CrdRO3z-.js";import"./useControlled-DL9Iut2g.js";import"./getReactElementRef-CkDqfdPm.js";import"./Portal-CcwI5hbz.js";import"./utils-Bn3set7p.js";import"./TransitionGroupContext-4uG2Mcc_.js";import"./useSlotProps-NXvv48zc.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-uRCWfHSj.js";import"./ButtonBase-DrAbzSCI.js";import"./CircularProgress-C9w8hYD6.js";import"./Button-J7D5oBem.js";import"./FormLabel-GejnCESN.js";import"./FormHelperText-Cawj5hZz.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
