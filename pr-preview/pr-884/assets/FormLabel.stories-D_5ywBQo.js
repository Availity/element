import{j as r}from"./iframe-BVv6e2Np.js";import{F as l}from"./FormControl-aNwOyEUR.js";import{O as s}from"./OutlinedInput-DI3zgq5U.js";import{v as a}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-DjP83YZX.js";import{I as p}from"./Input-ChhkQ3v4.js";import{F as n}from"./FormHelperText-T2FEBCnb.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BAeGzom2.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Cd1iR6Ah.js";import"./styled-Bn_uYMrA.js";import"./memoTheme-PshU1uu8.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-QN_ofJ4G.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-emf-njXD.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-C-9V1pWD.js";import"./useSlot-Dio4nhmD.js";import"./FieldHelpIcon-D_-lIIXE.js";import"./index-BiBDMnSv.js";import"./index-B4G_w09r.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-DdboHVfF.js";import"./index-CAgTxRUA.js";import"./Tooltip-DzBLv92b.js";import"./useTheme-DDxdviwK.js";import"./useTimeout-VBRAECgQ.js";import"./useControlled-D2of93L0.js";import"./getReactElementRef-Dy4ZaQ26.js";import"./Portal-BwoQ5t2b.js";import"./utils-D_B0tNMS.js";import"./TransitionGroupContext-CL5aD017.js";import"./useSlotProps-DYhjeFex.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BcGJMyaC.js";import"./ButtonBase-BmS5gOfS.js";import"./CircularProgress-Pj_uAnf5.js";import"./Button-DHfmf7R6.js";import"./FormLabel-BgKjCqoz.js";import"./FormHelperText-BrnALqdS.js";const ir={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:m=>r.jsx(e,{...m}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(l,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(s,{id:"disabled",sx:a})]})]})},i={render:()=>r.jsxs(l,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(p,{id:"field-1",defaultValue:"default value"}),r.jsx(n,{children:"Helper Text"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
