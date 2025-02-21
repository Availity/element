import{j as o}from"./jsx-runtime-CcL-W3nW.js";import{a as r,F as j}from"./FormLabel-Cq9PtHEt.js";import{C as e}from"./Checkbox-D003M6rt.js";import{F as m,R as L,a as i}from"./RadioGroup-DLgS-ogh.js";import{F as n}from"./FormControl-DxHQf2_s.js";import{B as g}from"./Box-BAeL439g.js";import{F as k}from"./FormLabel-DrJE-ijH.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FieldHelpIcon-DXmala-W.js";import"./index-DMWJB0MK.js";import"./index--IoBtPgS.js";import"./faCircleArrowRight-fEvkKBkH.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./SvgIcon-BS-p1eoC.js";import"./generateUtilityClass-Bqc1qv72.js";import"./createTheme-CKCRSfxM.js";import"./memoTheme-DvanvhnP.js";import"./styled-Dbr85gFc.js";import"./DefaultPropsProvider-CIAoFptl.js";import"./generateUtilityClasses-DyVAdLaw.js";import"./index-CDwEgPAM.js";import"./Tooltip-eF_7lzc5.js";import"./index-nos-0K8U.js";import"./useTheme-ChS1Y5Lw.js";import"./useTheme-BUEqHFQV.js";import"./useSlot-DO4SmqlR.js";import"./resolveComponentProps-BiTA-uKg.js";import"./useForkRef-BVrIj09m.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-CKWfQBCE.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cuv6gcjd.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-v3cBwN0V.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DQZrtVrL.js";import"./emotion-react.browser.esm-rTq5AsO6.js";import"./CircularProgress-BHFEuwTi.js";import"./Button-B22iKlEO.js";import"./LoadingButton-B6FUrH4t.js";import"./FormControlLabel-DLlzi5Ft.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-68oiojFJ.js";import"./Typography-Cng4iL4p.js";import"./index-D-S2KyN4.js";import"./extendSxProp-BKaoT_Qt.js";import"./SwitchBase-DPjFJeLH.js";import"./createSvgIcon-IUeEQzFc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-DAzOCCHH.js";const _o={title:"Form Components/FormUtils/FormControlLabel",component:r,tags:["autodocs"],parameters:{controls:{exclude:["labelPlacement"]},docs:{description:{component:"Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component to display a label."}}}},l={render:C=>o.jsx(r,{...C,control:o.jsx(e,{})}),args:{label:"Label",required:!0}},t={render:()=>o.jsxs(m,{children:[o.jsx(r,{control:o.jsx(e,{}),label:"Default"}),o.jsx(r,{helpTopicId:"1234",control:o.jsx(e,{}),label:"With FieldHelpIcon"}),o.jsx(r,{disabled:!0,control:o.jsx(e,{}),label:"Disabled"}),o.jsx(n,{error:!0,children:o.jsx(m,{children:o.jsx(r,{control:o.jsx(e,{}),label:"Error (Only visible in FormControl group)"})})})]})},a={render:()=>o.jsxs(g,{sx:{display:"flex",flexDirection:"column"},children:[o.jsxs(n,{component:"fieldset","aria-labelledby":"checkbox-group",margin:"normal",children:[o.jsx(k,{component:"legend",id:"checkbox-group",children:"Checkbox Group"}),o.jsxs(m,{row:!0,children:[o.jsx(r,{control:o.jsx(e,{}),label:"Check 1 with Extra Long Label"}),o.jsx(r,{control:o.jsx(e,{}),label:"Check 2",helpTopicId:"2"}),o.jsx(r,{control:o.jsx(e,{}),label:"Check 3"})]})]}),o.jsxs(n,{required:!0,error:!0,margin:"normal",children:[o.jsx(j,{id:"radio-group",helpTopicId:"12",children:"Radio Group"}),o.jsxs(L,{"aria-labelledby":"radio-group",name:"radio-group",defaultValue:"3",children:[o.jsx(r,{control:o.jsx(i,{}),value:"1",label:"Radio 1 with Extra Long Label"}),o.jsx(r,{control:o.jsx(i,{}),value:"2",label:"Radio 2"}),o.jsx(r,{control:o.jsx(i,{}),value:"3",label:"Radio 3"})]})]})]})};var p,s,c;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: FormControlLabelProps) => <FormControlLabel {...args} control={<Checkbox />} />,
  args: {
    label: 'Label',
    required: true
  }
}`,...(c=(s=l.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var d,b,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Default" />
      <FormControlLabel helpTopicId="1234" control={<Checkbox />} label="With FieldHelpIcon" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      {/* Error state not available on individual control, must be within FormControl. */}
      <FormControl error>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Error (Only visible in FormControl group)" />
        </FormGroup>
      </FormControl>
    </FormGroup>
}`,...(u=(b=t.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var x,h,F;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column'
  }}>
      <FormControl component="fieldset" aria-labelledby="checkbox-group" margin="normal">
        <MuiFormLabel component="legend" id="checkbox-group">
          Checkbox Group
        </MuiFormLabel>
        <FormGroup row>
          <FormControlLabel control={<Checkbox />} label="Check 1 with Extra Long Label" />
          <FormControlLabel control={<Checkbox />} label="Check 2" helpTopicId="2" />
          <FormControlLabel control={<Checkbox />} label="Check 3" />
        </FormGroup>
      </FormControl>
      <FormControl required error margin="normal">
        <FormLabel id="radio-group" helpTopicId="12">
          Radio Group
        </FormLabel>
        <RadioGroup aria-labelledby="radio-group" name="radio-group" defaultValue="3">
          <FormControlLabel control={<Radio />} value="1" label="Radio 1 with Extra Long Label" />
          <FormControlLabel control={<Radio />} value="2" label="Radio 2" />
          <FormControlLabel control={<Radio />} value="3" label="Radio 3" />
        </RadioGroup>
      </FormControl>
    </Box>
}`,...(F=(h=a.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};const Do=["_FormLabel","_States","_Groups"];export{l as _FormLabel,a as _Groups,t as _States,Do as __namedExportsOrder,_o as default};
