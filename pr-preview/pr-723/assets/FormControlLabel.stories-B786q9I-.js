import{j as o}from"./jsx-runtime-CcL-W3nW.js";import{a as r,F as j}from"./FormLabel-BtHyOGiH.js";import{C as e}from"./Checkbox-imGzR8Us.js";import{F as m,R as L,a as i}from"./RadioGroup-BogPRRDq.js";import{F as n}from"./FormControl-BPSU2g7t.js";import{B as g}from"./Box-DWnb8VZB.js";import{F as k}from"./FormLabel-98YPf6ct.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FieldHelpIcon-odLvbeOS.js";import"./index-DMWJB0MK.js";import"./index-BTr7iyfv.js";import"./faCircleArrowRight-6L8v8FIg.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./SvgIcon-DSdWmKAH.js";import"./generateUtilityClass-CVWqFxsA.js";import"./identifier-Dtqimryx.js";import"./memoTheme-D-rVhYRp.js";import"./styled-CF1hcdwO.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./index-dekIPCUU.js";import"./Tooltip-CiiaKkqp.js";import"./index-nos-0K8U.js";import"./useTheme-DUkCvbx_.js";import"./useTheme-C2CrmYKc.js";import"./useSlot-DnkSxE3X.js";import"./resolveComponentProps-Dg20wxiM.js";import"./useForkRef-BVrIj09m.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-CBAx_nZm.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BAIpVL6Y.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Caxu-qgA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DbVRbsLs.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./CircularProgress-D8w9ZPs6.js";import"./Button-DDPbJ3HZ.js";import"./LoadingButton-BRK58AHE.js";import"./FormControlLabel-GqYWwHWT.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-68oiojFJ.js";import"./Typography-CvSvtD2a.js";import"./index-f0Aa_BgU.js";import"./extendSxProp-B5AgUjQT.js";import"./SwitchBase-Z9YgLJlx.js";import"./createSvgIcon-TketyoFF.js";import"./createChainedFunction-BO_9K8Jh.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-DAzOCCHH.js";const _o={title:"Form Components/FormUtils/FormControlLabel",component:r,tags:["autodocs"],parameters:{controls:{exclude:["labelPlacement"]},docs:{description:{component:"Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component to display a label."}}}},l={render:C=>o.jsx(r,{...C,control:o.jsx(e,{})}),args:{label:"Label",required:!0}},t={render:()=>o.jsxs(m,{children:[o.jsx(r,{control:o.jsx(e,{}),label:"Default"}),o.jsx(r,{helpTopicId:"1234",control:o.jsx(e,{}),label:"With FieldHelpIcon"}),o.jsx(r,{disabled:!0,control:o.jsx(e,{}),label:"Disabled"}),o.jsx(n,{error:!0,children:o.jsx(m,{children:o.jsx(r,{control:o.jsx(e,{}),label:"Error (Only visible in FormControl group)"})})})]})},a={render:()=>o.jsxs(g,{sx:{display:"flex",flexDirection:"column"},children:[o.jsxs(n,{component:"fieldset","aria-labelledby":"checkbox-group",margin:"normal",children:[o.jsx(k,{component:"legend",id:"checkbox-group",children:"Checkbox Group"}),o.jsxs(m,{row:!0,children:[o.jsx(r,{control:o.jsx(e,{}),label:"Check 1 with Extra Long Label"}),o.jsx(r,{control:o.jsx(e,{}),label:"Check 2",helpTopicId:"2"}),o.jsx(r,{control:o.jsx(e,{}),label:"Check 3"})]})]}),o.jsxs(n,{required:!0,error:!0,margin:"normal",children:[o.jsx(j,{id:"radio-group",helpTopicId:"12",children:"Radio Group"}),o.jsxs(L,{"aria-labelledby":"radio-group",name:"radio-group",defaultValue:"3",children:[o.jsx(r,{control:o.jsx(i,{}),value:"1",label:"Radio 1 with Extra Long Label"}),o.jsx(r,{control:o.jsx(i,{}),value:"2",label:"Radio 2"}),o.jsx(r,{control:o.jsx(i,{}),value:"3",label:"Radio 3"})]})]})]})};var p,s,c;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
