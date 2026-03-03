import{j as r}from"./iframe-Dv1Hb7kF.js";import{F as l}from"./FormControl-CW8ltJ6i.js";import{O as s}from"./OutlinedInput-D5mtK01a.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-CUJeauLs.js";import{I as p}from"./Input--4egyJZD.js";import{F as n}from"./FormHelperText-D0ztYCw2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-B8g9qj4o.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CfSIe_7M.js";import"./styled-89sVFKyy.js";import"./memoTheme-BBZRIDpe.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-DHvmsRje.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-BE-Xh8QX.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-CVQXFPJk.js";import"./useSlot-D3-97Bpj.js";import"./FieldHelpIcon-DyBszY21.js";import"./index-BiBDMnSv.js";import"./index-B9y9IGGa.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-5pvqgcrC.js";import"./index-BBTP1ICE.js";import"./Tooltip-johHX3Tw.js";import"./useTheme-CGsP9Gxx.js";import"./useTimeout-CU6v0sK-.js";import"./useControlled-wUW2FFSG.js";import"./getReactElementRef-87-1wWv5.js";import"./Portal-nZmp6a4c.js";import"./utils-BsA11HdC.js";import"./TransitionGroupContext-C2v-exTz.js";import"./useSlotProps-8Sv9aFcC.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-X5Y4CM4M.js";import"./ButtonBase-B7Edy8zQ.js";import"./CircularProgress-D7Y0JvGB.js";import"./Button-B4ml1k34.js";import"./FormLabel-CYY7WDyQ.js";import"./FormHelperText-D669KPjG.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
