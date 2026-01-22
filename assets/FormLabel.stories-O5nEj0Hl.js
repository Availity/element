import{j as r}from"./iframe-P-I-t7s_.js";import{F as l}from"./FormControl-DTZL-Ep5.js";import{O as s}from"./OutlinedInput-D9ScyHuO.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-DYzlatpe.js";import{I as p}from"./Input-R8cv8Uyh.js";import{F as n}from"./FormHelperText-CloInde9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-PrL4cH60.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-DIafhdSN.js";import"./styled-DNi79hKI.js";import"./memoTheme-Bi3jfVWD.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-B5SqA4pZ.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-DAYatbRK.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-CDm4lxrI.js";import"./useSlot-DY-xq6aU.js";import"./FieldHelpIcon-DjMAr2iY.js";import"./index-BiBDMnSv.js";import"./index-C3cy06cM.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DmOXCSGB.js";import"./index-BOqcfzn9.js";import"./Tooltip-kyKJtl96.js";import"./useTheme-BPf64W-X.js";import"./useTimeout-Dzhca5Jx.js";import"./useControlled-Cqclzim-.js";import"./getReactElementRef-DFgmZ0uJ.js";import"./Portal-_y01gIKP.js";import"./utils-DTqcJog-.js";import"./TransitionGroupContext-Dvdi4lCr.js";import"./useSlotProps-Cx6Yk_v4.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BTlhtNIa.js";import"./ButtonBase-P5TjO14T.js";import"./CircularProgress-BRuGXxty.js";import"./Button-xw2JRpr3.js";import"./FormLabel-0KiMc52e.js";import"./FormHelperText-Bbq60y1z.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
