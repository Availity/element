import{j as o,a as l}from"./jsx-runtime-390e5fc8.js";import{a as r,F as g}from"./FormLabel-0e537d36.js";import{C as e}from"./Checkbox-337f78ae.js";import{F as m}from"./FormGroup-99a23a63.js";import{F as p}from"./FormControl-76ef8a2c.js";import{B as k}from"./Box-df8a6414.js";import{M as f}from"./FormLabel-ae04d927.js";import{R,a as i}from"./RadioGroup-e5dc21e3.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./FieldHelpIcon-4403612a.js";import"./index-9681c8ff.js";import"./index-d61120f8.js";import"./faCircleArrowRight-a1a581c0.js";import"./index-72be33c9.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-4a92f20a.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-98dc6282.js";import"./styled-523cb007.js";import"./generateUtilityClasses-b58f947a.js";import"./index-407eec83.js";import"./Button-f5f3570b.js";import"./ButtonBase-e49cd770.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-bac6b43c.js";import"./useTheme-c07bb8e7.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./ownerDocument-613eb639.js";import"./Grow-7a512b16.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useSlotProps-95ccb7bd.js";import"./isHostComponent-73d6e646.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-d91b4b62.js";import"./LoadingButton-f3e3dfec.js";import"./extends-90dea224.js";import"./CircularProgress-9882927c.js";import"./FormControlLabel-34fd3025.js";import"./utils-3d35716f.js";import"./Typography-cb5a2c80.js";import"./extendSxProp-b1abb964.js";import"./Stack-ded40119.js";import"./styled-5c6c15e1.js";import"./SwitchBase-6b7028c9.js";import"./createSvgIcon-b91027d9.js";import"./isMuiElement-6907f060.js";import"./createChainedFunction-0bab83cf.js";const _o={title:"Components/FormUtils/FormControlLabel",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component to display a label."}}}},t={render:L=>o(r,{...L}),args:{label:"Label",required:!0,control:o(e,{})}},a={render:()=>l(m,{children:[o(r,{control:o(e,{}),label:"Default"}),o(r,{helpTopicId:"1234",control:o(e,{}),label:"With FieldHelpIcon"}),o(r,{disabled:!0,control:o(e,{}),label:"Disabled"}),o(p,{error:!0,children:o(m,{children:o(r,{control:o(e,{}),label:"Error (Only visible in FormControl group)"})})})]})},n={render:()=>l(k,{display:"flex",flexDirection:"column",children:[l(p,{component:"fieldset","aria-labelledby":"checkbox-group",children:[o(f,{component:"legend",id:"checkbox-group",children:"Checkbox Group"}),l(m,{row:!0,children:[o(r,{control:o(e,{}),label:"Check 1"}),o(r,{control:o(e,{}),label:"Check 2",helpTopicId:"2"}),o(r,{control:o(e,{}),label:"Check 3"})]})]}),l(p,{required:!0,error:!0,children:[o(g,{id:"radio-group",helpTopicId:"12",children:"Radio Group"}),l(R,{"aria-labelledby":"radio-group",name:"radio-group",defaultValue:"3",children:[o(r,{control:o(i,{}),value:"1",label:"Radio 1"}),o(r,{control:o(i,{}),value:"2",label:"Radio 2"}),o(r,{control:o(i,{}),value:"3",label:"Radio 3"})]})]})]})};var c,d,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Do=["_FormLabel","_States","_Groups"];export{t as _FormLabel,n as _Groups,a as _States,Do as __namedExportsOrder,_o as default};
//# sourceMappingURL=FormControlLabel.stories-d9c9ce72.js.map
