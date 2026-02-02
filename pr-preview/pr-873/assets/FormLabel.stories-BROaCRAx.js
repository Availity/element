import{j as r}from"./iframe-BACK_0qL.js";import{F as l}from"./FormControl-DSY8Auwb.js";import{O as s}from"./OutlinedInput-BBATfXzR.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-BSfjFDxF.js";import{I as p}from"./Input-FGzSm4ZC.js";import{F as n}from"./FormHelperText-BojK9A-w.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BhxRA0Wm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-9m4N3JlX.js";import"./styled-CILYMfR2.js";import"./memoTheme-CehCTkMp.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-COVhBD0c.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-B1QjfuHc.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-Ce5vEJyz.js";import"./useSlot-4KwJ1ZEX.js";import"./FieldHelpIcon-DIqkCFnd.js";import"./index-BiBDMnSv.js";import"./index-CThJnamY.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-BWD4KGVI.js";import"./index-DezS3mgp.js";import"./Tooltip-CvzAHSPe.js";import"./useTheme-CAH-7WS1.js";import"./useTimeout-Bbnn395Q.js";import"./useControlled-Bvcrhgjz.js";import"./getReactElementRef-cseQ0t00.js";import"./Portal-BBUkHp6C.js";import"./utils-CTnKgbLp.js";import"./TransitionGroupContext-B4j_r9NY.js";import"./useSlotProps-DdDv6txA.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-fOR7z52u.js";import"./ButtonBase-CDXMi9Z2.js";import"./CircularProgress-BxeLfgty.js";import"./Button-DJ1l2vuX.js";import"./FormLabel-Dno3GiSo.js";import"./FormHelperText-BT3PilzM.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
