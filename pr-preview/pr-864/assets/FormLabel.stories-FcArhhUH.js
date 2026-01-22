import{j as r}from"./iframe-CFnK--5_.js";import{F as l}from"./FormControl-LoBeFHez.js";import{O as s}from"./OutlinedInput-BfiYytvL.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-NI0MhKEv.js";import{I as p}from"./Input-DwF_u9vN.js";import{F as n}from"./FormHelperText-BByp96_Y.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DJceSmmG.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CSdCdkNb.js";import"./styled-B_SR2Ytp.js";import"./memoTheme-DHqcPMUG.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-Di9rDSJ_.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-CAGgRosr.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-CjkbnSEr.js";import"./useSlot-Bcbuphfr.js";import"./FieldHelpIcon-D_Z2LNe9.js";import"./index-BiBDMnSv.js";import"./index-B8FQNIIr.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-BS2_Q9nG.js";import"./index-JryDx5j_.js";import"./Tooltip-D7zb4Xpv.js";import"./useTheme-BUU7R_-h.js";import"./useTimeout-C_X7UAwn.js";import"./useControlled-QCqU36h_.js";import"./getReactElementRef-guKTxCdd.js";import"./Portal-By2AWbtS.js";import"./utils-DAiY7LDj.js";import"./TransitionGroupContext-D3GUir9f.js";import"./useSlotProps-3SA_4L0x.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DDlS7gn-.js";import"./ButtonBase-BaxBneFE.js";import"./CircularProgress-DUyilEJx.js";import"./Button-CFFdP_-2.js";import"./FormLabel-BxmsTci0.js";import"./FormHelperText-CpKPjCPu.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
