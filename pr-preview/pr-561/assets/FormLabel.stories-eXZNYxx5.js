import{j as r}from"./jsx-runtime-CcL-W3nW.js";import"./FieldHelpIcon-DtluNVJ-.js";import{F as o}from"./FormLabel-C6J36-5U.js";import{F as h}from"./Switch-B72ZCsXz.js";import{I as x}from"./Input-DzoSC1rI.js";import"./index-Bssefeeu.js";import{F}from"./FormControl-BhCdTdWt.js";import{O as f}from"./OutlinedInput-BeuFtjMr.js";import{v as L}from"./visuallyHidden-Dan1xhjv.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DMWJB0MK.js";import"./index-BDqO7SwG.js";import"./faUser-CAcveCor.js";import"./SvgIcon-DfAk99tL.js";import"./generateUtilityClass-DELP8s2G.js";import"./identifier-CenlGZaM.js";import"./memoTheme-CIpOTVoB.js";import"./styled-wZqJTO_n.js";import"./DefaultPropsProvider-LCKMq1Iv.js";import"./generateUtilityClasses-duJ5YrlI.js";import"./index-DSGElAqY.js";import"./Tooltip-BNHD4B5V.js";import"./index-nos-0K8U.js";import"./useTheme-Cf-RAc4Y.js";import"./useTheme-DwYC2ms6.js";import"./useSlot-CaH4cQiJ.js";import"./resolveComponentProps-D4XT56l6.js";import"./useForkRef-BVrIj09m.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-D32Mdiva.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DE50rPTb.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DGohL5ME.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Ctwr4_Dd.js";import"./emotion-react.browser.esm-BKUJyPAt.js";import"./CircularProgress-D2topXWR.js";import"./Button-C-tuTFv-.js";import"./LoadingButton-BK9aMQRn.js";import"./FormControlLabel-CImDabQe.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-68oiojFJ.js";import"./Typography-Dw3TlP36.js";import"./index-BKNdG2lN.js";import"./extendSxProp-w61GJfY-.js";import"./Box-DR5TX31P.js";import"./FormLabel-CZFypZnO.js";import"./RadioGroup-B7AA9dKi.js";import"./SwitchBase-CHDa-0k7.js";import"./createSvgIcon-BzSwLqYD.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Select-Dt0UCwxY.js";import"./Menu-BU9jXi-3.js";import"./Popover-CSXcjUnK.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-DoDJPSvm.js";import"./Modal-B_4-9GXq.js";import"./Backdrop-4xfgJS0q.js";import"./Fade-DlB6bWB0.js";import"./List-BRpAtMOZ.js";import"./utils-DoM3o7-Q.js";import"./Stack-BPYMGdgv.js";import"./styled-CIC6PLSI.js";import"./useThemeProps-BAwiOWAz.js";import"./Divider-Dys0WftY.js";import"./dividerClasses-C6lHB_qP.js";import"./faCheck-B05F4ORy.js";import"./Switch-CXk7mhi6.js";import"./isMuiElement-DAzOCCHH.js";const Mr={title:"Form Components/FormUtils/FormLabel",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},e={render:b=>r.jsx(o,{...b}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(o,{children:"Default"}),r.jsx(o,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(o,{required:!0,children:"Required"}),r.jsx(o,{error:!0,children:"Error"}),r.jsxs(F,{disabled:!0,size:"small",children:[r.jsx(o,{htmlFor:"disabled",children:"Disabled"}),r.jsx(f,{id:"disabled",sx:L})]})]})},i={render:()=>r.jsxs(F,{required:!0,size:"small",children:[r.jsx(o,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(x,{id:"field-1",defaultValue:"default value"}),r.jsx(h,{children:"Helper Text"})]})};var m,p,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: FormLabelProps) => <FormLabel {...args} />,
  args: {
    children: 'This text is a child of FormLabel',
    required: true
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var s,a,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var d,c,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <FormControl required size="small">
      <FormLabel htmlFor="field-1" helpTopicId="1234">
        Example
      </FormLabel>
      <Input id="field-1" defaultValue="default value" />
      <FormHelperText>Helper Text</FormHelperText>
    </FormControl>
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const Nr=["_FormLabel","_States","_Controls"];export{i as _Controls,e as _FormLabel,t as _States,Nr as __namedExportsOrder,Mr as default};
