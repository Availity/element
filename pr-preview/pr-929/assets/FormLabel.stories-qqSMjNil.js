import{j as r}from"./iframe-Cl61WGkI.js";import{F as l}from"./FormControl-DYxyVnQd.js";import{O as s}from"./OutlinedInput-ClvlI1xc.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-CfDXFwCj.js";import{I as n}from"./Input-BOAN4zT6.js";import{F as p}from"./FormHelperText-CJ25N_p_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-D2EIO9e7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Cx1dzcL4.js";import"./styled-BC98FWsK.js";import"./memoTheme-Bl50oicv.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-BgBNpKdE.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./useEventCallback-04OY0OEQ.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-oCe6X0UM.js";import"./useSlot-BNKzCfYO.js";import"./FieldHelpIcon-BiYN6rmu.js";import"./index-CrcoPoGw.js";import"./index-CmI2eh32.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Dwb1J2d-.js";import"./index-CqgX4Pjw.js";import"./Tooltip-BWDly8di.js";import"./useTheme-IfO6Fwpt.js";import"./useTimeout-DRIZehDr.js";import"./useControlled-Df0GFCpG.js";import"./getReactElementRef-C7aNrngo.js";import"./Portal-CKqV7NOt.js";import"./utils-BISW7tPB.js";import"./TransitionGroupContext-DF5xYsKa.js";import"./useSlotProps-BwXPHno3.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-q11oqdUa.js";import"./ButtonBase-q-jaW3RD.js";import"./CircularProgress-Bq8oVM2O.js";import"./Button-DuB2O4vc.js";import"./FormLabel-BSv5oG3S.js";import"./FormHelperText-C194FQMi.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
