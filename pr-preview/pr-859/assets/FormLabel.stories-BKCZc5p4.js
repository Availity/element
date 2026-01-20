import{j as r}from"./iframe-Bb3d8CAJ.js";import{F as l}from"./FormControl-JAIVQZ8_.js";import{O as s}from"./OutlinedInput-Cn1Phwz7.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-B0KJGPi_.js";import{I as p}from"./Input-Cfi83XEf.js";import{F as n}from"./FormHelperText-6sFst8qX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-Drg5HQwL.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-DI-PqbcS.js";import"./styled-DljcZuS8.js";import"./memoTheme-DG97Ks8Q.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-B1A3wtQb.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-CXGXfcdA.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-gjnpxKKm.js";import"./useSlot-DsuYGff3.js";import"./FieldHelpIcon-gQU5sG59.js";import"./index-BiBDMnSv.js";import"./index-0wpeyl_7.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-B3pyeCMx.js";import"./index-5JqH0pbP.js";import"./Tooltip-SkDB5_9b.js";import"./useTheme-7VSsG7x3.js";import"./useTimeout-CybQo20w.js";import"./useControlled-Dk5cREEZ.js";import"./getReactElementRef-C8hW-Gj-.js";import"./Portal-Cn9zneq7.js";import"./utils-CYAKcw8L.js";import"./TransitionGroupContext-B6dWxZQA.js";import"./useSlotProps-DBrHcN3c.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C3Ov0u9A.js";import"./ButtonBase-ChdXNNb1.js";import"./CircularProgress-CEqu6RKG.js";import"./Button-Bh15sM15.js";import"./FormLabel-DpdhAv7p.js";import"./FormHelperText-qi6lM2Nc.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
