import{j as r}from"./iframe-6QlsuZks.js";import{F as l}from"./FormControl-CXZTEhg_.js";import{O as s}from"./OutlinedInput-BvrLXmtS.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-Db3T47JC.js";import{I as n}from"./Input-29w1QT8U.js";import{F as p}from"./FormHelperText-Bd7JPO2H.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DZ_CUTQW.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Cw9eyX2o.js";import"./styled-DGzk_rgf.js";import"./memoTheme-B9sQlNky.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-B_RCYMsy.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-H76OWquH.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-hCluPQZ0.js";import"./useSlot-DzncR7P9.js";import"./FieldHelpIcon-C8_yE0Np.js";import"./index-BiBDMnSv.js";import"./index-CrKJovUE.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-o3xhyLw5.js";import"./index-Bu7ksarN.js";import"./Tooltip-Obr4DBw0.js";import"./useTheme-CgDfdbfy.js";import"./useTimeout-CoBmWaVy.js";import"./useControlled-D8gQq48B.js";import"./getReactElementRef-CeFrpTOn.js";import"./Portal-DtF3r0WZ.js";import"./utils-DDHdHaR3.js";import"./TransitionGroupContext-BfrWwv51.js";import"./useSlotProps-XhtNc6mu.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C52xOams.js";import"./ButtonBase-DqANlMe2.js";import"./CircularProgress-BzseWMqn.js";import"./Button-Ck8mL0PX.js";import"./FormLabel-0NhCwZGG.js";import"./FormHelperText-BoQfm90T.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
