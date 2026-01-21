import{j as r}from"./iframe-B15MwHjc.js";import{F as l}from"./FormControl-6JPYAktP.js";import{O as s}from"./OutlinedInput-BMlXZ3gW.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-DFaWjf7w.js";import{I as p}from"./Input-VKxyEW7X.js";import{F as n}from"./FormHelperText-aKCeljmF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DbxR-Wox.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-DJZ5QjLd.js";import"./styled-Dsm9_3nR.js";import"./memoTheme-D5o8CaBh.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-DuY6SZZx.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-37O-Z23c.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-CdThJ-3P.js";import"./useSlot-CSAMaxgS.js";import"./FieldHelpIcon-DD0OlGVl.js";import"./index-BiBDMnSv.js";import"./index-B-JYDf49.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-B05McAjj.js";import"./index-C1-wXq3o.js";import"./Tooltip-Cn8xYtbM.js";import"./useTheme-DNjXucVs.js";import"./useTimeout-Cm6ZfeQK.js";import"./useControlled-DMX50sqj.js";import"./getReactElementRef-GzGc3gHa.js";import"./Portal-BtkHLfcV.js";import"./utils-Cl7K9KPr.js";import"./TransitionGroupContext-C0L_he2M.js";import"./useSlotProps-CHKxwTOr.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DjrXNLZD.js";import"./ButtonBase-CE7Ewp3a.js";import"./CircularProgress-CW5OewJC.js";import"./Button-BsXdLE5f.js";import"./FormLabel-DRfWx8jo.js";import"./FormHelperText-CDhxewv3.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
