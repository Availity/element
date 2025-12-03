import{j as r}from"./iframe-BiHmAaXu.js";import{F}from"./FormControl-DZnKpJWi.js";import{O as h}from"./OutlinedInput-BWJb0RpZ.js";import{v as x}from"./visuallyHidden-Dan1xhjv.js";import{F as e}from"./FormLabel-CoI8KDwH.js";import{I as f}from"./Input-DunSKSCB.js";import{F as L}from"./FormHelperText-HXW2BR1F.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DA3IDcHJ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-DKHzA-If.js";import"./styled-Dtda04LL.js";import"./memoTheme-zGeQXNTV.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-egRdNH_q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-A-8aNATG.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-BwnKjiCD.js";import"./mergeSlotProps-vY4QflWx.js";import"./FieldHelpIcon-hGk2uz-f.js";import"./index-DJKl12U0.js";import"./index-BvV5FGi6.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-CbropkBN.js";import"./index-Bh-1iHl-.js";import"./Tooltip-D9RCop2K.js";import"./useTheme-D51yRe8t.js";import"./useTimeout-BxBXWuFq.js";import"./useControlled-QJx0Pv3z.js";import"./getReactElementRef-DBbsA3vx.js";import"./Portal-3VCYEpJr.js";import"./utils-Derh_BFQ.js";import"./TransitionGroupContext-B15fWyGj.js";import"./useSlotProps-BP935MD-.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C3B7XTqu.js";import"./ButtonBase-DdAFxN83.js";import"./CircularProgress-BsuuE2cE.js";import"./Button-CeglKkVM.js";import"./FormLabel-xE0j2NN6.js";import"./FormHelperText-BzT4cDWj.js";const Fr={title:"Form Components/FormUtils/FormLabel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`."}}}},o={render:b=>r.jsx(e,{...b}),args:{children:"This text is a child of FormLabel",required:!0}},t={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Default"}),r.jsx(e,{helpTopicId:"1234",children:"With Field Help Icon"}),r.jsx(e,{required:!0,children:"Required"}),r.jsx(e,{error:!0,children:"Error"}),r.jsxs(F,{disabled:!0,size:"small",children:[r.jsx(e,{htmlFor:"disabled",children:"Disabled"}),r.jsx(h,{id:"disabled",sx:x})]})]})},i={render:()=>r.jsxs(F,{required:!0,size:"small",children:[r.jsx(e,{htmlFor:"field-1",helpTopicId:"1234",children:"Example"}),r.jsx(f,{id:"field-1",defaultValue:"default value"}),r.jsx(L,{children:"Helper Text"})]})};var m,l,s;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
