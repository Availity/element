import{j as r}from"./iframe-B-IDRs1c.js";import{F}from"./FormControl-CzWcShYR.js";import{O as h}from"./OutlinedInput-2jEgO4FM.js";import{v as x}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-BLV-c_fz.js";import{I as f}from"./Input-U0DhY5-Z.js";import{F as L}from"./FormHelperText-Dlg2skY6.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DeAhKfVJ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Cvcy1-u-.js";import"./styled-7JhYMRam.js";import"./memoTheme-CE8Ve8p3.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-ClLnv_Rm.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-cI9q2pBc.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-BDZruxXA.js";import"./mergeSlotProps-C8D8DcHH.js";import"./FieldHelpIcon-cDQCeobz.js";import"./index-DJKl12U0.js";import"./index-B8qzEHL-.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-Dnen4Kai.js";import"./index-CT2WTVvP.js";import"./Tooltip-CSSVlh_J.js";import"./useTheme-BCGo3_gR.js";import"./useTimeout-B5Lb3nSx.js";import"./useControlled-c6loq-MY.js";import"./getReactElementRef-DTxB74xF.js";import"./Portal-Br3wST_n.js";import"./utils-BDyqiFkI.js";import"./TransitionGroupContext-FoUS5PCq.js";import"./useSlotProps-CfOviytx.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BX_62obP.js";import"./ButtonBase-BRBh8179.js";import"./CircularProgress-DIITlzvm.js";import"./Button-BTxgxpDX.js";import"./FormLabel-MY60MoUc.js";import"./FormHelperText-CkBHd9eX.js";const Fr={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:b=>r.jsx(e,{...b}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(F,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(h,{id:"disabled",sx:x})]})]})},i={render:()=>r.jsxs(F,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(f,{id:"field-1",defaultValue:"default value"}),r.jsx(L,{children:"Helper Text"})]})};var m,l,s;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: FormLabelProps) => <FormLabel {...args} />,
  args: {
    children: 'This text is a child of FormLabel',
    required: true
  }
}`,...(s=(l=o.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var a,p,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var d,c,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <FormControl required size="small">
      <FormLabel htmlFor="field-1" helpTopicId="1234">
        Example
      </FormLabel>
      <Input id="field-1" defaultValue="default value" />
      <FormHelperText>Helper Text</FormHelperText>
    </FormControl>
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const br=["_FormLabel","_States","_Controls"];export{i as _Controls,o as _FormLabel,t as _States,br as __namedExportsOrder,Fr as default};
