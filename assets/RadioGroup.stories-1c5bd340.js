import{j as a,a as o,F as C}from"./jsx-runtime-a3bcee63.js";import{a as i,R as r,F as G}from"./RadioGroup-06931e25.js";import"./FieldHelpIcon-5be439a2.js";import{F as p,a as e}from"./FormLabel-e2aef229.js";import"./Input-60dde717.js";import"./index-bf8151f5.js";import{F as m}from"./FormControl-6b396c3c.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-53288845.js";import"./faCircleArrowRight-f69b7367.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-075b1db6.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-98dc6282.js";import"./styled-523cb007.js";import"./generateUtilityClasses-b58f947a.js";import"./FormHelperText-e428b621.js";import"./utils-3d35716f.js";import"./Divider-2d957b7a.js";import"./dividerClasses-871b72e6.js";import"./Select-473a43cb.js";import"./react-is.production.min-a192e302.js";import"./Menu-113dab7f.js";import"./useTheme-c07bb8e7.js";import"./Popover-252d82a4.js";import"./Modal-1f45fd5c.js";import"./Backdrop-4a58ec86.js";import"./utils-1ac07bae.js";import"./TransitionGroupContext-c71596b3.js";import"./index-8a077077.js";import"./useForkRef-153a0a89.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-95ccb7bd.js";import"./isHostComponent-73d6e646.js";import"./createChainedFunction-0bab83cf.js";import"./Grow-8a00b99f.js";import"./Paper-389d56e7.js";import"./debounce-517eeb3c.js";import"./List-446c66c9.js";import"./useId-6f4bfce0.js";import"./useControlled-9b1271e0.js";import"./createSvgIcon-ca656bec.js";import"./OutlinedInput-71306fdf.js";import"./GlobalStyles-5f9800bb.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./Stack-3fcb8940.js";import"./styled-5c6c15e1.js";import"./extendSxProp-b1abb964.js";import"./RadioGroup-1ffa6b3b.js";import"./SwitchBase-1f7cd2d8.js";import"./ButtonBase-44753119.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./FormGroup-93228893.js";import"./index-9681c8ff.js";import"./index-5efdcb36.js";import"./Button-af0ca45f.js";import"./Tooltip-91ad21bd.js";import"./IconButton-3fd19b93.js";import"./LoadingButton-1ec35b70.js";import"./extends-90dea224.js";import"./CircularProgress-96ade162.js";import"./Box-51bd3ea0.js";import"./FormControlLabel-1ceb9da1.js";import"./Typography-f453bb5c.js";import"./FormLabel-3e0f5024.js";import"./isMuiElement-6907f060.js";const Bo={title:"Components/FormUtils/RadioGroup",component:i,tags:["autodocs"]},n={render:l=>a(m,{children:[o(p,{component:"legend",id:"radio-buttons-group-label",children:"Radio Group"}),a(i,{"aria-labelledby":"radio-buttons-group-label",defaultValue:"one",name:"radio-buttons-group",...l,children:[o(e,{value:"one",control:o(r,{}),label:"Radio One"}),o(e,{value:"two",control:o(r,{}),label:"Radio Two",helpTopicId:"1234"}),o(e,{value:"three",control:o(r,{}),label:"Radio Three"})]})]}),args:{}},d={render:l=>a(C,{children:[a(m,{margin:"normal",required:!0,children:[o(p,{id:"required-radio-buttons-group-label",children:"Required"}),a(i,{"aria-labelledby":"required-radio-buttons-group-label",defaultValue:"one",name:"required-radio-buttons-group",...l,children:[o(e,{value:"one",control:o(r,{}),label:"Radio One"}),o(e,{value:"two",control:o(r,{}),label:"Radio Two",helpTopicId:"1234"}),o(e,{value:"three",control:o(r,{}),label:"Radio Three"})]})]}),a(m,{margin:"normal",error:!0,children:[o(p,{id:"error-radio-buttons-group-label",children:"Error"}),a(i,{"aria-labelledby":"error-radio-buttons-group-label","aria-describedby":"error-radio-buttons-group-helpertext",name:"error-radio-buttons-group",...l,children:[o(e,{value:"one",control:o(r,{}),label:"Radio One"}),o(e,{value:"two",control:o(r,{}),label:"Radio Two",helpTopicId:"1234"}),o(e,{value:"three",control:o(r,{}),label:"Radio Three"})]}),o(G,{id:"error-radio-buttons-group-helpertext",children:"Error Message"})]})]}),args:{}},t={render:l=>a(m,{children:[o(p,{className:"legend",id:"radio-buttons-group-legend-label",children:"Radio Group"}),a(i,{"aria-labelledby":"radio-buttons-group-legend-label",defaultValue:"one",name:"radio-buttons-group",...l,children:[o(e,{value:"one",control:o(r,{}),label:"Radio One"}),o(e,{value:"two",control:o(r,{}),label:"Radio Two",helpTopicId:"1234"}),o(e,{value:"three",control:o(r,{}),label:"Radio Three"})]})]}),args:{}};var u,b,s;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: RadioGroupProps) => <FormControl>
      <FormLabel component="legend" id="radio-buttons-group-label">
        Radio Group
      </FormLabel>
      <RadioGroup aria-labelledby="radio-buttons-group-label" defaultValue="one" name="radio-buttons-group" {...args}>
        <FormControlLabel value="one" control={<Radio />} label="Radio One" />
        <FormControlLabel value="two" control={<Radio />} label="Radio Two" helpTopicId="1234" />
        <FormControlLabel value="three" control={<Radio />} label="Radio Three" />
      </RadioGroup>
    </FormControl>,
  args: {}
}`,...(s=(b=n.parameters)==null?void 0:b.docs)==null?void 0:s.source}}};var c,g,R;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: RadioGroupProps) => <>
      <FormControl margin="normal" required>
        <FormLabel id="required-radio-buttons-group-label">Required</FormLabel>
        <RadioGroup aria-labelledby="required-radio-buttons-group-label" defaultValue="one" name="required-radio-buttons-group" {...args}>
          <FormControlLabel value="one" control={<Radio />} label="Radio One" />
          <FormControlLabel value="two" control={<Radio />} label="Radio Two" helpTopicId="1234" />
          <FormControlLabel value="three" control={<Radio />} label="Radio Three" />
        </RadioGroup>
      </FormControl>
      <FormControl margin="normal" error>
        <FormLabel id="error-radio-buttons-group-label">Error</FormLabel>
        <RadioGroup aria-labelledby="error-radio-buttons-group-label" aria-describedby="error-radio-buttons-group-helpertext" name="error-radio-buttons-group" {...args}>
          <FormControlLabel value="one" control={<Radio />} label="Radio One" />
          <FormControlLabel value="two" control={<Radio />} label="Radio Two" helpTopicId="1234" />
          <FormControlLabel value="three" control={<Radio />} label="Radio Three" />
        </RadioGroup>
        <FormHelperText id="error-radio-buttons-group-helpertext">Error Message</FormHelperText>
      </FormControl>
    </>,
  args: {}
}`,...(R=(g=d.parameters)==null?void 0:g.docs)==null?void 0:R.source}}};var h,F,T,L,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: RadioGroupProps) => <FormControl>
      <FormLabel className="legend" id="radio-buttons-group-legend-label">
        Radio Group
      </FormLabel>
      <RadioGroup aria-labelledby="radio-buttons-group-legend-label" defaultValue="one" name="radio-buttons-group" {...args}>
        <FormControlLabel value="one" control={<Radio />} label="Radio One" />
        <FormControlLabel value="two" control={<Radio />} label="Radio Two" helpTopicId="1234" />
        <FormControlLabel value="three" control={<Radio />} label="Radio Three" />
      </RadioGroup>
    </FormControl>,
  args: {}
}`,...(T=(F=t.parameters)==null?void 0:F.docs)==null?void 0:T.source},description:{story:'Legacy styling for the group label can be achieved with the `"legend"` class on the `FormLabel`.',...(v=(L=t.parameters)==null?void 0:L.docs)==null?void 0:v.description}}};const Do=["_RadioGroup","_States","_Legacy"];export{t as _Legacy,n as _RadioGroup,d as _States,Do as __namedExportsOrder,Bo as default};
//# sourceMappingURL=RadioGroup.stories-1c5bd340.js.map
