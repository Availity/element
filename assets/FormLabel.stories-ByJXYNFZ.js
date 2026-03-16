import{j as r}from"./iframe-DPzbdwV6.js";import{F as l}from"./FormControl-BS7CnZqa.js";import{O as s}from"./OutlinedInput-FZJmt1fs.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-CQtoweH0.js";import{I as p}from"./Input-CBNsw8i4.js";import{F as n}from"./FormHelperText-NTHDHOJB.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-1JXYARsd.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-D-kuf848.js";import"./styled-rDINGuMr.js";import"./memoTheme-BPZzx3Fh.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-DK4-OTh4.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-D6Y3GTd7.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-C_Eyz2VC.js";import"./useSlot-D5vL0YkG.js";import"./FieldHelpIcon-7YJVJIUY.js";import"./index-BiBDMnSv.js";import"./index-Dc5vJBpb.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-DJ4ww3AR.js";import"./index-DWmIprsC.js";import"./Tooltip-BXHSE_Yz.js";import"./useTheme-CsAYvKS6.js";import"./useTimeout-BEe3g1yB.js";import"./useControlled-B7b2C6zg.js";import"./getReactElementRef-KOzEHSpK.js";import"./Portal-BKsBZMKZ.js";import"./utils-C8GgNPFy.js";import"./TransitionGroupContext-_giaZQD1.js";import"./useSlotProps-DqDqMweE.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-MOZEFIpK.js";import"./ButtonBase-DiUPj8iu.js";import"./CircularProgress-DahfViZv.js";import"./Button-DBTzQ06_.js";import"./FormLabel-QN0beRBt.js";import"./FormHelperText-f01bZ0iU.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
