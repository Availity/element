import{r as m,j as e}from"./iframe-CLut6yOe.js";import{R as c}from"./RadioGroup-DtHGdsBt.js";import{R as o}from"./Radio-DH68ucYk.js";import{F as d}from"./FormControl-BZcEw6H3.js";import{F as s}from"./FormLabel-BTJi8eTk.js";import{F as r}from"./FormControlLabel-D9O_lF0A.js";import{F as b}from"./FormHelperText-yjxQtgN7.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Radio-C6QDUZlf.js";import"./SwitchBase-B76ZlPUO.js";import"./styled-B56iE4qf.js";import"./useFormControl-CsURvBpr.js";import"./useSlot-C8ASSSxZ.js";import"./mergeSlotProps-BoE-e40D.js";import"./useForkRef-CW7nwTzV.js";import"./useControlled-BMhEC-vi.js";import"./ButtonBase-B4AmE_nS.js";import"./useTimeout-DSf2abi9.js";import"./TransitionGroupContext-CxTk-KXz.js";import"./useEventCallback-BXl50wnQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-BcCXBLY5.js";import"./SvgIcon-Dd51Rz_D.js";import"./memoTheme-BCZ6py50.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FormGroup-_FRXrzq-.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-CAAIFwhI.js";import"./FieldHelpIcon-BgH6Lc3x.js";import"./index-MVgG_W0q.js";import"./index-CxuuQ7ms.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./index-DNgDR8tQ.js";import"./IconButton-MKfAwX3T.js";import"./CircularProgress-Cb3dAqoX.js";import"./Tooltip-20BxdW9m.js";import"./useTheme-uzqIZvgA.js";import"./getReactElementRef-CPIcGi-m.js";import"./Portal-buqhKvPN.js";import"./utils-CY0-o-M4.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BphsLqn6.js";import"./Button-CO7SGq6S.js";import"./FormLabel-C4ZzvvPY.js";import"./FormControlLabel-DK2k45Ms.js";import"./Typography-BLWoaJn_.js";import"./Box-KcVtg1pO.js";import"./FormHelperText-Du_S5IXp.js";const l=m.forwardRef(({children:a,...u},p)=>e.jsx(c,{...u,ref:p,children:a}));try{l.displayName="RadioGroup",l.__docgenInfo={description:"",displayName:"RadioGroup",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FormGroupClasses> | undefined"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme> | undefined"}},name:{defaultValue:null,description:`The name used to reference the value of the control.
If you don't provide this prop, it falls back to a randomly generated name.`,name:"name",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:`Callback fired when a radio button is selected.
@param event The event source of the callback.
@param value The value of the selected radio button.
You can pull out the new value by accessing \`event.target.value\` (string).`,name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement, Element>, value: string) => void) | undefined"}},row:{defaultValue:{value:"false"},description:"Display group of elements in a compact row.",name:"row",required:!1,type:{name:"boolean | undefined"}},value:{defaultValue:null,description:"Value of the selected radio button. The DOM API casts this to a string.",name:"value",required:!1,type:{name:"any"}},defaultValue:{defaultValue:null,description:"The default value. Use when the component is not controlled.",name:"defaultValue",required:!1,type:{name:"any"}}}}}catch{}const be={title:"Form Components/Uncontrolled FormUtils/RadioGroup",component:l,tags:["autodocs"]},n={render:a=>e.jsxs(d,{children:[e.jsx(s,{component:"legend",id:"radio-buttons-group-label",children:"Radio Group"}),e.jsxs(l,{"aria-labelledby":"radio-buttons-group-label",defaultValue:"one",name:"radio-buttons-group",...a,children:[e.jsx(r,{value:"one",control:e.jsx(o,{}),label:"Radio One"}),e.jsx(r,{value:"two",control:e.jsx(o,{}),label:"Radio Two",helpTopicId:"1234"}),e.jsx(r,{value:"three",control:e.jsx(o,{}),label:"Radio Three"})]})]}),args:{}},i={render:a=>e.jsxs(e.Fragment,{children:[e.jsxs(d,{margin:"normal",required:!0,children:[e.jsx(s,{id:"required-radio-buttons-group-label",children:"Required"}),e.jsxs(l,{"aria-labelledby":"required-radio-buttons-group-label",defaultValue:"one",name:"required-radio-buttons-group",...a,children:[e.jsx(r,{value:"one",control:e.jsx(o,{}),label:"Radio One"}),e.jsx(r,{value:"two",control:e.jsx(o,{}),label:"Radio Two",helpTopicId:"1234"}),e.jsx(r,{value:"three",control:e.jsx(o,{}),label:"Radio Three"})]})]}),e.jsxs(d,{margin:"normal",error:!0,children:[e.jsx(s,{id:"error-radio-buttons-group-label",children:"Error"}),e.jsxs(l,{"aria-labelledby":"error-radio-buttons-group-label","aria-describedby":"error-radio-buttons-group-helpertext",name:"error-radio-buttons-group",...a,children:[e.jsx(r,{value:"one",control:e.jsx(o,{}),label:"Radio One"}),e.jsx(r,{value:"two",control:e.jsx(o,{}),label:"Radio Two",helpTopicId:"1234"}),e.jsx(r,{value:"three",control:e.jsx(o,{}),label:"Radio Three"})]}),e.jsx(b,{id:"error-radio-buttons-group-helpertext",children:"Error Message"})]})]}),args:{}},t={render:a=>e.jsxs(d,{children:[e.jsx(s,{className:"legend",id:"radio-buttons-group-legend-label",children:"Radio Group"}),e.jsxs(l,{"aria-labelledby":"radio-buttons-group-legend-label",defaultValue:"one",name:"radio-buttons-group",...a,children:[e.jsx(r,{value:"one",control:e.jsx(o,{}),label:"Radio One"}),e.jsx(r,{value:"two",control:e.jsx(o,{}),label:"Radio Two",helpTopicId:"1234"}),e.jsx(r,{value:"three",control:e.jsx(o,{}),label:"Radio Three"})]})]}),args:{}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:'Legacy styling for the group label can be achieved with the `"legend"` class on the `FormLabel`.',...t.parameters?.docs?.description}}};const ge=["_RadioGroup","_States","_Legacy"];export{t as _Legacy,n as _RadioGroup,i as _States,ge as __namedExportsOrder,be as default};
