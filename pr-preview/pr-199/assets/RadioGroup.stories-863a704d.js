import{a,j as o,F as C}from"./jsx-runtime-390e5fc8.js";import{a as i,R as r,F as G}from"./RadioGroup-fa3c9d14.js";import"./FieldHelpIcon-4403612a.js";import{F as p,a as e}from"./FormLabel-0e537d36.js";import"./Input-995ea178.js";import"./index-a67dd6a2.js";import{F as m}from"./FormControl-76ef8a2c.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d61120f8.js";import"./faCircleArrowRight-a1a581c0.js";import"./index-72be33c9.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-4a92f20a.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-98dc6282.js";import"./styled-523cb007.js";import"./generateUtilityClasses-b58f947a.js";import"./FormHelperText-8ba5d276.js";import"./utils-3d35716f.js";import"./Divider-c3141017.js";import"./dividerClasses-871b72e6.js";import"./Select-e3d164a2.js";import"./react-is.production.min-a192e302.js";import"./Menu-20281694.js";import"./useTheme-c07bb8e7.js";import"./Popover-c29df6e8.js";import"./Modal-c0d06b41.js";import"./Backdrop-374fdef5.js";import"./utils-1ac07bae.js";import"./TransitionGroupContext-c71596b3.js";import"./index-8a077077.js";import"./useForkRef-153a0a89.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-95ccb7bd.js";import"./isHostComponent-73d6e646.js";import"./createChainedFunction-0bab83cf.js";import"./Grow-7a512b16.js";import"./Paper-23216610.js";import"./debounce-517eeb3c.js";import"./List-61c808de.js";import"./useId-6f4bfce0.js";import"./useControlled-9b1271e0.js";import"./createSvgIcon-b91027d9.js";import"./OutlinedInput-c5324d24.js";import"./GlobalStyles-0727d895.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./Stack-ded40119.js";import"./styled-5c6c15e1.js";import"./extendSxProp-b1abb964.js";import"./RadioGroup-e5dc21e3.js";import"./SwitchBase-6b7028c9.js";import"./ButtonBase-e49cd770.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./FormGroup-99a23a63.js";import"./index-9681c8ff.js";import"./index-407eec83.js";import"./Button-f5f3570b.js";import"./Tooltip-bac6b43c.js";import"./IconButton-d91b4b62.js";import"./LoadingButton-f3e3dfec.js";import"./extends-90dea224.js";import"./CircularProgress-9882927c.js";import"./Box-df8a6414.js";import"./FormControlLabel-34fd3025.js";import"./Typography-cb5a2c80.js";import"./FormLabel-ae04d927.js";import"./isMuiElement-6907f060.js";const Do={title:"Components/FormUtils/RadioGroup",component:i,tags:["autodocs"]},n={render:l=>a(m,{children:[o(p,{component:"legend",id:"radio-buttons-group-label",children:"Radio Group"}),a(i,{"aria-labelledby":"radio-buttons-group-label",defaultValue:"one",name:"radio-buttons-group",...l,children:[o(e,{value:"one",control:o(r,{}),label:"Radio One"}),o(e,{value:"two",control:o(r,{}),label:"Radio Two",helpTopicId:"1234"}),o(e,{value:"three",control:o(r,{}),label:"Radio Three"})]})]}),args:{}},d={render:l=>a(C,{children:[a(m,{margin:"normal",required:!0,children:[o(p,{id:"required-radio-buttons-group-label",children:"Required"}),a(i,{"aria-labelledby":"required-radio-buttons-group-label",defaultValue:"one",name:"required-radio-buttons-group",...l,children:[o(e,{value:"one",control:o(r,{}),label:"Radio One"}),o(e,{value:"two",control:o(r,{}),label:"Radio Two",helpTopicId:"1234"}),o(e,{value:"three",control:o(r,{}),label:"Radio Three"})]})]}),a(m,{margin:"normal",error:!0,children:[o(p,{id:"error-radio-buttons-group-label",children:"Error"}),a(i,{"aria-labelledby":"error-radio-buttons-group-label","aria-describedby":"error-radio-buttons-group-helpertext",name:"error-radio-buttons-group",...l,children:[o(e,{value:"one",control:o(r,{}),label:"Radio One"}),o(e,{value:"two",control:o(r,{}),label:"Radio Two",helpTopicId:"1234"}),o(e,{value:"three",control:o(r,{}),label:"Radio Three"})]}),o(G,{id:"error-radio-buttons-group-helpertext",children:"Error Message"})]})]}),args:{}},t={render:l=>a(m,{children:[o(p,{className:"legend",id:"radio-buttons-group-legend-label",children:"Radio Group"}),a(i,{"aria-labelledby":"radio-buttons-group-legend-label",defaultValue:"one",name:"radio-buttons-group",...l,children:[o(e,{value:"one",control:o(r,{}),label:"Radio One"}),o(e,{value:"two",control:o(r,{}),label:"Radio Two",helpTopicId:"1234"}),o(e,{value:"three",control:o(r,{}),label:"Radio Three"})]})]}),args:{}};var u,b,s;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(T=(F=t.parameters)==null?void 0:F.docs)==null?void 0:T.source},description:{story:'Legacy styling for the group label can be achieved with the `"legend"` class on the `FormLabel`.',...(v=(L=t.parameters)==null?void 0:L.docs)==null?void 0:v.description}}};const Jo=["_RadioGroup","_States","_Legacy"];export{t as _Legacy,n as _RadioGroup,d as _States,Jo as __namedExportsOrder,Do as default};
//# sourceMappingURL=RadioGroup.stories-863a704d.js.map
