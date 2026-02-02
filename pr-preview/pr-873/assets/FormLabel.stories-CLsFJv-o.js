import{j as r}from"./iframe-rhK9tIc4.js";import{F as l}from"./FormControl-DzPtRk9q.js";import{O as s}from"./OutlinedInput-COUc_T8p.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-Cd_dfBPj.js";import{I as p}from"./Input-P3e72uUl.js";import{F as n}from"./FormHelperText-BTKXQJgq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CYsp_SKE.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-D8DZ9hal.js";import"./styled-CBQFiEom.js";import"./memoTheme-IQ7acCr3.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-DQY4LT_f.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-Ds2BvoNa.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-C1tzmMCQ.js";import"./useSlot-Ss2ummcO.js";import"./FieldHelpIcon-MAz98aCf.js";import"./index-BiBDMnSv.js";import"./index-DRr7OjqP.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DzAUVQ7n.js";import"./index-C-QneIm0.js";import"./Tooltip-DiEqfW-N.js";import"./useTheme-BXOJLFox.js";import"./useTimeout-D0IbZg6d.js";import"./useControlled-CseZ_aCu.js";import"./getReactElementRef-D1xzuExO.js";import"./Portal-D-ZKSgVP.js";import"./utils-Doe2UH4J.js";import"./TransitionGroupContext-uy7bHgBz.js";import"./useSlotProps-CU-sXxN2.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BVic3zsX.js";import"./ButtonBase-C62hOKjf.js";import"./CircularProgress-BoTRikuG.js";import"./Button-KJ_PCDyl.js";import"./FormLabel-BV3CtcmF.js";import"./FormHelperText-iHOtARPd.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
