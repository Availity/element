import{j as r}from"./iframe-hulqVKFa.js";import{F as l}from"./FormControl-BTDFP5sq.js";import{O as s}from"./OutlinedInput-8C-NOWfH.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-C2reUauk.js";import{I as n}from"./Input-X-tJoUoI.js";import{F as p}from"./FormHelperText-BKQ9g6K7.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CY5egsXZ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-B2zjcqD7.js";import"./styled-CYnX6RAa.js";import"./memoTheme-B_nCzl8M.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-BQz3TnTQ.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-IcKGM0BT.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-C6UhvrC4.js";import"./useSlot-CalbLJ3n.js";import"./FieldHelpIcon-BsQFbJ3-.js";import"./index-BiBDMnSv.js";import"./index-CFZ7DghX.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-i9gddw4o.js";import"./index-CWJdyCdu.js";import"./Tooltip-CwFATdR1.js";import"./useTheme-C7AUirRA.js";import"./useTimeout-Bim6OzXz.js";import"./useControlled-maN10Goq.js";import"./getReactElementRef-DCfmlyG2.js";import"./Portal-BqpYj0TQ.js";import"./utils-CqZ-bN0c.js";import"./TransitionGroupContext-DQUbB_yy.js";import"./useSlotProps-CO5Qh0k_.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D52dKoJw.js";import"./ButtonBase-2bDflI9o.js";import"./CircularProgress-p22Pqfnj.js";import"./Button-BD9YMHcT.js";import"./FormLabel-Buq9vnb5.js";import"./FormHelperText-CJHErJH9.js";const ir={title:"Form Components/Uncontrolled FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(n,{id:"field-1",defaultValue:"default value"}),r.jsx(p,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
