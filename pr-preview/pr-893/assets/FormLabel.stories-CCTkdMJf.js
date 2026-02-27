import{j as r}from"./iframe-DdfW-8_N.js";import{F as l}from"./FormControl-DApFLC8G.js";import{O as s}from"./OutlinedInput-BotArOsj.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-CnTEAwGj.js";import{I as p}from"./Input-Bz5SGb3a.js";import{F as n}from"./FormHelperText-CFLD-kMr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CG8sOhjY.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Bemz2x0M.js";import"./styled-LeBzfrVS.js";import"./memoTheme-Dy9OKavz.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-B88Yvlsp.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-DvSzgmRL.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-CqPusD8W.js";import"./useSlot-CGn3_9IL.js";import"./FieldHelpIcon-wWCd4vhD.js";import"./index-BiBDMnSv.js";import"./index-BFOrYL81.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-Dd37ovUy.js";import"./index-C-S8qNMg.js";import"./Tooltip-Bx3cCyVU.js";import"./useTheme-CibYXdii.js";import"./useTimeout-B6LNCSjE.js";import"./useControlled-DoVGZQrv.js";import"./getReactElementRef-C38daVWB.js";import"./Portal-HR7sjuNG.js";import"./utils-ByofAeEv.js";import"./TransitionGroupContext-CyCzSLBs.js";import"./useSlotProps-1teZLVpX.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-cVpvf3wp.js";import"./ButtonBase-Beiib6fe.js";import"./CircularProgress-YKVCICB8.js";import"./Button-B9MkHEWu.js";import"./FormLabel-sMVSQNOc.js";import"./FormHelperText-DRC7w-DS.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
