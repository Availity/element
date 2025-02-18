import{j as r}from"./jsx-runtime-CcL-W3nW.js";import"./FieldHelpIcon-2Nwmz2W_.js";import{F as o}from"./FormLabel-B-8CxZAW.js";import{F as h}from"./Switch-UIv7YNku.js";import{I as x}from"./Input-CCDI14KV.js";import"./index-yTp6TMTk.js";import{F}from"./FormControl-DxHQf2_s.js";import{O as f}from"./OutlinedInput-DUFM6NiM.js";import{v as L}from"./visuallyHidden-Dan1xhjv.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DMWJB0MK.js";import"./index-CaTz9XJG.js";import"./faUser-CAcveCor.js";import"./SvgIcon-BS-p1eoC.js";import"./generateUtilityClass-Bqc1qv72.js";import"./createTheme-CKCRSfxM.js";import"./memoTheme-DvanvhnP.js";import"./styled-Dbr85gFc.js";import"./DefaultPropsProvider-CIAoFptl.js";import"./generateUtilityClasses-DyVAdLaw.js";import"./index-CDwEgPAM.js";import"./Tooltip-eF_7lzc5.js";import"./index-nos-0K8U.js";import"./useTheme-ChS1Y5Lw.js";import"./useTheme-BUEqHFQV.js";import"./useSlot-DO4SmqlR.js";import"./resolveComponentProps-BiTA-uKg.js";import"./useForkRef-BVrIj09m.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-CKWfQBCE.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cuv6gcjd.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-v3cBwN0V.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DQZrtVrL.js";import"./emotion-react.browser.esm-rTq5AsO6.js";import"./CircularProgress-BHFEuwTi.js";import"./Button-B22iKlEO.js";import"./LoadingButton-B6FUrH4t.js";import"./FormControlLabel-DLlzi5Ft.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-68oiojFJ.js";import"./Typography-Cng4iL4p.js";import"./index-D-S2KyN4.js";import"./extendSxProp-BKaoT_Qt.js";import"./Box-BAeL439g.js";import"./FormLabel-DrJE-ijH.js";import"./RadioGroup-DLgS-ogh.js";import"./SwitchBase-DPjFJeLH.js";import"./createSvgIcon-IUeEQzFc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Select-Bh3HlTBm.js";import"./Menu-BNF0dZPe.js";import"./Popover-DJDHQo2S.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-CvfFJp8a.js";import"./Modal-CzgY4V0Y.js";import"./Backdrop-B9IVkNZn.js";import"./Fade-DbM47FxC.js";import"./List-Ce1NCs06.js";import"./utils-DoM3o7-Q.js";import"./Stack-C5Zrd0Q6.js";import"./styled-C36SNKZX.js";import"./useThemeProps-YZ7_EcgO.js";import"./Divider-D_YJaRgz.js";import"./dividerClasses-Dy0fxzds.js";import"./faCheck-B05F4ORy.js";import"./Switch-6eDJgjyT.js";import"./isMuiElement-DAzOCCHH.js";const Mr={title:"Form Components/FormUtils/FormLabel",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},e={render:b=>r.jsx(o,{...b}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(o,{children:"Default"}),r.jsx(o,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(o,{required:!0,children:"Required"}),r.jsx(o,{error:!0,children:"Error"}),r.jsxs(F,{disabled:!0,size:"small",children:[r.jsx(o,{htmlFor:"disabled",children:"Disabled"}),r.jsx(f,{id:"disabled",sx:L})]})]})},i={render:()=>r.jsxs(F,{required:!0,size:"small",children:[r.jsx(o,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(x,{id:"field-1",defaultValue:"default value"}),r.jsx(h,{children:"Helper Text"})]})};var m,p,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
