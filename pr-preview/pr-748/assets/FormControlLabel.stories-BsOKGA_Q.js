import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{a as r,F as j}from"./FormLabel-D9tb10Fq.js";import{C as e}from"./Checkbox-DDZWJ_7e.js";import{F as m,R as L,a as i}from"./RadioGroup-CZeO-sCM.js";import{F as n}from"./FormControl-BpN01e6f.js";import{B as g}from"./Box-Dv31mJKI.js";import{F as k}from"./FormLabel-BDxB3zbH.js";import"./index-ChsGqxH_.js";import"./index-BgYLq7fD.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./FieldHelpIcon-C_RQexU-.js";import"./index-DJKl12U0.js";import"./index-BAgvEqVW.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./SvgIcon-CiBNlF9H.js";import"./generateUtilityClass-BeVSWKCg.js";import"./identifier-CudAVvBZ.js";import"./memoTheme-CpoNRPWX.js";import"./styled-CKuRQFSa.js";import"./DefaultPropsProvider-CWkNlXkE.js";import"./generateUtilityClasses-whvyra8-.js";import"./index-DnNfvsmq.js";import"./Tooltip-CIyLwlBA.js";import"./index-DyJdRKzS.js";import"./useTheme-Cx1wRXKO.js";import"./useTheme-Ib01SJ3a.js";import"./useSlot-1VRyIerd.js";import"./resolveComponentProps-CCNxqvxI.js";import"./useForkRef-Dz4aGlyk.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./useControlled-DxC1uCGX.js";import"./useId-DIK8ekB4.js";import"./getReactElementRef-Df0xbma2.js";import"./Portal-C2J4q3Ji.js";import"./utils-tFrEP9Vf.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BmqT0tgx.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D_kG6RhR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D97P5WV0.js";import"./emotion-react.browser.esm-v7Jm8XFw.js";import"./CircularProgress-fcRSDrpN.js";import"./Button-yLAd6_L_.js";import"./LoadingButton-Cl76w144.js";import"./FormControlLabel-BzV1MzKU.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-t_-EwZHM.js";import"./Typography-COSof5sR.js";import"./index-DfraP8LW.js";import"./extendSxProp-BY7TjwKM.js";import"./SwitchBase-CYtmyT40.js";import"./createSvgIcon-BWWwXn7v.js";import"./createChainedFunction-BO_9K8Jh.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-DiOAsJE6.js";const So={title:"Form Components/FormUtils/FormControlLabel",component:r,tags:["autodocs"],parameters:{controls:{exclude:["labelPlacement"]},docs:{description:{component:"Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component to display a label."}}}},l={render:C=>o.jsx(r,{...C,control:o.jsx(e,{})}),args:{label:"Label",required:!0}},t={render:()=>o.jsxs(m,{children:[o.jsx(r,{control:o.jsx(e,{}),label:"Default"}),o.jsx(r,{helpTopicId:"1234",control:o.jsx(e,{}),label:"With FieldHelpIcon"}),o.jsx(r,{disabled:!0,control:o.jsx(e,{}),label:"Disabled"}),o.jsx(n,{error:!0,children:o.jsx(m,{children:o.jsx(r,{control:o.jsx(e,{}),label:"Error (Only visible in FormControl group)"})})})]})},a={render:()=>o.jsxs(g,{sx:{display:"flex",flexDirection:"column"},children:[o.jsxs(n,{component:"fieldset","aria-labelledby":"checkbox-group",margin:"normal",children:[o.jsx(k,{component:"legend",id:"checkbox-group",children:"Checkbox Group"}),o.jsxs(m,{row:!0,children:[o.jsx(r,{control:o.jsx(e,{}),label:"Check 1 with Extra Long Label"}),o.jsx(r,{control:o.jsx(e,{}),label:"Check 2",helpTopicId:"2"}),o.jsx(r,{control:o.jsx(e,{}),label:"Check 3"})]})]}),o.jsxs(n,{required:!0,error:!0,margin:"normal",children:[o.jsx(j,{id:"radio-group",helpTopicId:"12",children:"Radio Group"}),o.jsxs(L,{"aria-labelledby":"radio-group",name:"radio-group",defaultValue:"3",children:[o.jsx(r,{control:o.jsx(i,{}),value:"1",label:"Radio 1 with Extra Long Label"}),o.jsx(r,{control:o.jsx(i,{}),value:"2",label:"Radio 2"}),o.jsx(r,{control:o.jsx(i,{}),value:"3",label:"Radio 3"})]})]})]})};var p,s,c;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(F=(h=a.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};const To=["_FormLabel","_States","_Groups"];export{l as _FormLabel,a as _Groups,t as _States,To as __namedExportsOrder,So as default};
