import{a as o,j as l}from"./jsx-runtime-a3bcee63.js";import{F as r,a as g}from"./FormControlLabel-a7198c4e.js";import{C as e}from"./Checkbox-3354e381.js";import{F as m}from"./FormGroup-7fc7ab9c.js";import{F as p,M as k}from"./FormLabel-16418a49.js";import{B as f}from"./Box-0b96d669.js";import{R,a as i}from"./RadioGroup-b0ef600c.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./FieldHelpIcon-99432cf6.js";import"./index-9681c8ff.js";import"./index-a94774e7.js";import"./faCircleArrowRight-f69b7367.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-951d7748.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-018254e6.js";import"./styled-7846e708.js";import"./generateUtilityClasses-70c60a0e.js";import"./index-762a5bc1.js";import"./Button-d84dd9a0.js";import"./ButtonBase-d80b4855.js";import"./emotion-react.browser.esm-474fda6d.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-7ded6962.js";import"./useTheme-76c02901.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./ownerDocument-613eb639.js";import"./Grow-e87a736b.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useSlotProps-ddd7eed7.js";import"./isHostComponent-73d6e646.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-de653fbd.js";import"./LoadingButton-7f26c21d.js";import"./extends-90dea224.js";import"./CircularProgress-83597315.js";import"./FormControlLabel-625d44f3.js";import"./utils-3d35716f.js";import"./Typography-f61e077a.js";import"./extendSxProp-9115426f.js";import"./Stack-8a417692.js";import"./styled-11d1647d.js";import"./SwitchBase-5230d714.js";import"./createSvgIcon-60c2b2ae.js";import"./isMuiElement-6907f060.js";import"./createChainedFunction-0bab83cf.js";const yo={title:"Components/FormUtils/FormControlLabel",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component to display a label."}}}},t={render:L=>o(r,{...L}),args:{label:"Label",required:!0,control:o(e,{})}},a={render:()=>l(m,{children:[o(r,{control:o(e,{}),label:"Default"}),o(r,{helpTopicId:"1234",control:o(e,{}),label:"With FieldHelpIcon"}),o(r,{disabled:!0,control:o(e,{}),label:"Disabled"}),o(p,{error:!0,children:o(m,{children:o(r,{control:o(e,{}),label:"Error (Only visible in FormControl group)"})})})]})},n={render:()=>l(f,{display:"flex",flexDirection:"column",children:[l(p,{component:"fieldset","aria-labelledby":"checkbox-group",children:[o(k,{component:"legend",id:"checkbox-group",children:"Checkbox Group"}),l(m,{row:!0,children:[o(r,{control:o(e,{}),label:"Check 1"}),o(r,{control:o(e,{}),label:"Check 2",helpTopicId:"2"}),o(r,{control:o(e,{}),label:"Check 3"})]})]}),l(p,{required:!0,error:!0,children:[o(g,{id:"radio-group",helpTopicId:"12",children:"Radio Group"}),l(R,{"aria-labelledby":"radio-group",name:"radio-group",defaultValue:"3",children:[o(r,{control:o(i,{}),value:"1",label:"Radio 1"}),o(r,{control:o(i,{}),value:"2",label:"Radio 2"}),o(r,{control:o(i,{}),value:"3",label:"Radio 3"})]})]})]})};var c,d,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: FormControlLabelProps) => <FormControlLabel {...args} />,
  args: {
    label: 'Label',
    required: true,
    control: <Checkbox />
  }
}`,...(b=(d=t.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var s,u,F;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(F=(u=a.parameters)==null?void 0:u.docs)==null?void 0:F.source}}};var C,h,x;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column">
      <FormControl component="fieldset" aria-labelledby="checkbox-group">
        <MuiFormLabel component="legend" id="checkbox-group">
          Checkbox Group
        </MuiFormLabel>
        <FormGroup row>
          <FormControlLabel control={<Checkbox />} label="Check 1" />
          <FormControlLabel control={<Checkbox />} label="Check 2" helpTopicId="2" />
          <FormControlLabel control={<Checkbox />} label="Check 3" />
        </FormGroup>
      </FormControl>
      <FormControl required error>
        <FormLabel id="radio-group" helpTopicId="12">
          Radio Group
        </FormLabel>
        <RadioGroup aria-labelledby="radio-group" name="radio-group" defaultValue="3">
          <FormControlLabel control={<Radio />} value="1" label="Radio 1" />
          <FormControlLabel control={<Radio />} value="2" label="Radio 2" />
          <FormControlLabel control={<Radio />} value="3" label="Radio 3" />
        </RadioGroup>
      </FormControl>
    </Box>
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Io=["_FormLabel","_States","_Groups"];export{t as _FormLabel,n as _Groups,a as _States,Io as __namedExportsOrder,yo as default};
//# sourceMappingURL=FormControlLabel.stories-43bc9d9d.js.map
