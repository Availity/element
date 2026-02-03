import{j as r}from"./iframe-CsWHXpAl.js";import{F as l}from"./FormControl-CVX71svO.js";import{O as s}from"./OutlinedInput-BC0zMwA1.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-BObYwVlf.js";import{I as p}from"./Input-NEXdK1MQ.js";import{F as n}from"./FormHelperText-CbEwfTpA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-C7imt2Hm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Bn1OwKtz.js";import"./styled-7ngSg1XE.js";import"./memoTheme-D1WvXAYX.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-C-HgPgYg.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-ByFiieHy.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BavqdjkP.js";import"./useSlot-C4woaFwW.js";import"./FieldHelpIcon-gQVb0wp_.js";import"./index-BiBDMnSv.js";import"./index-CAQ8YrHX.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-rO9Zrjko.js";import"./index-vavqp1NI.js";import"./Tooltip-Bng6bCNf.js";import"./useTheme-p1ELRF_q.js";import"./useTimeout-MBLSaU9x.js";import"./useControlled-D3FoPl0A.js";import"./getReactElementRef-U9GKYTTT.js";import"./Portal-BnhBoGVi.js";import"./utils-DGzkDCaD.js";import"./TransitionGroupContext-C2wcbRoz.js";import"./useSlotProps-DAB-O9r_.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BElkJFHg.js";import"./ButtonBase-Bidr6pNA.js";import"./CircularProgress-DpaflDra.js";import"./Button-CA2GH-94.js";import"./FormLabel-Bq2nsaK6.js";import"./FormHelperText-JfQUw7jj.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
