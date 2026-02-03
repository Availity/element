import{j as r}from"./iframe-DV3He85V.js";import{F as l}from"./FormControl-DppqsHib.js";import{O as s}from"./OutlinedInput-wiNtXLYd.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-I0BCskiR.js";import{I as p}from"./Input-w1GBZ0b_.js";import{F as n}from"./FormHelperText-C_m71Pwe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BVnKZRJX.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-_HgZ6tG6.js";import"./styled-BUFH9864.js";import"./memoTheme-CqO710ep.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-BjKAtTT0.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-DWs5MTmZ.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BOgCOH-Y.js";import"./useSlot-D_lQT_km.js";import"./FieldHelpIcon-BKBUQ4RL.js";import"./index-BiBDMnSv.js";import"./index-BjhlD0KS.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BPrDg5y8.js";import"./index-BfHLbFj4.js";import"./Tooltip-B-fI_KqI.js";import"./useTheme-SfRUUZiP.js";import"./useTimeout-Ckthjz3O.js";import"./useControlled-Ccx6itka.js";import"./getReactElementRef-DFI1E4nz.js";import"./Portal-C_yGG6TD.js";import"./utils-Bwvx3eCn.js";import"./TransitionGroupContext-DIj-4TH7.js";import"./useSlotProps-Da-PnXIN.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CvMV_1wy.js";import"./ButtonBase-CmkGGnOd.js";import"./CircularProgress-DhVft3f6.js";import"./Button-BaC_cxcf.js";import"./FormLabel-BaCofFNT.js";import"./FormHelperText-OP92smCd.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
