import{j as r}from"./iframe-VmT73p94.js";import{F as l}from"./FormControl-CtGChhDH.js";import{O as s}from"./OutlinedInput-DmwOWPcc.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-dpLYvj9m.js";import{I as p}from"./Input-Caxh3AdO.js";import{F as n}from"./FormHelperText-BsDAt_co.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-SPs3ZDhM.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Bqpdq4Yq.js";import"./styled-DVm59HJf.js";import"./memoTheme-CW0LOUve.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-Ctnrtb-D.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-C3cbUdrm.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-B8SRg1CI.js";import"./useSlot-BmxE9uZS.js";import"./FieldHelpIcon-CTl8nvVa.js";import"./index-BiBDMnSv.js";import"./index-Cb5v9xcC.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-OqnDZfg-.js";import"./index-HUpkhuIg.js";import"./Tooltip-BRQG12-b.js";import"./useTheme-COUM0_Su.js";import"./useTimeout-BprXv5F8.js";import"./useControlled-BjbV18t2.js";import"./getReactElementRef-ft3Uw4WU.js";import"./Portal-BwXxrIv3.js";import"./utils-ByQY0EBI.js";import"./TransitionGroupContext-CeVXvV0a.js";import"./useSlotProps-DY7-TJQW.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Br45PAbc.js";import"./ButtonBase-BXyceE0h.js";import"./CircularProgress-CrZ4k3FD.js";import"./Button-zpUHMDEI.js";import"./FormLabel-Bl-cZ89x.js";import"./FormHelperText-B6vrgGZp.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
