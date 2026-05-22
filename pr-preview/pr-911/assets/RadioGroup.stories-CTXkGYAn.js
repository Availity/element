import{r as m,j as e}from"./iframe-D2jXllzf.js";import{R as c}from"./RadioGroup-CIQq2756.js";import{R as o}from"./Radio-f1pBj4Nj.js";import{F as d}from"./FormControl-B1s-S060.js";import{F as s}from"./FormLabel-B2DvOPCd.js";import{F as r}from"./FormControlLabel-B3oxp3xt.js";import{F as b}from"./FormHelperText--YfNdyTJ.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Radio-DtF9_Ty_.js";import"./SwitchBase-DFUx5LAR.js";import"./styled-DdNVu9ib.js";import"./useFormControl-C4VpCIrq.js";import"./useSlot-CazCKcce.js";import"./mergeSlotProps-CJpLwHYZ.js";import"./useForkRef-BlUwhnRH.js";import"./useControlled-DpI9NEaZ.js";import"./ButtonBase-DMYh_tyc.js";import"./useTimeout-CPz5sd6r.js";import"./TransitionGroupContext-BzeXUGnN.js";import"./useEventCallback-B89JyN3q.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-BpTXI-oS.js";import"./SvgIcon-9pPXd2AZ.js";import"./memoTheme-Zt5oAqwv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FormGroup-kt5TsLUL.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-CtLsGuPJ.js";import"./FieldHelpIcon-4TY-_xEO.js";import"./index-BiBDMnSv.js";import"./index-SmivVlA3.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./index-toBpsxUE.js";import"./Tooltip-GSnbTknq.js";import"./useTheme-C2p3ig_2.js";import"./getReactElementRef-DHdu6blE.js";import"./Portal-DNbvJLzK.js";import"./utils-B6mCZ_7g.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-FypE9v1G.js";import"./IconButton-Dd5dInOR.js";import"./CircularProgress-BG5QNhqD.js";import"./Button-CwKYXhwT.js";import"./FormLabel-4fh9O_yA.js";import"./FormControlLabel-CI5bXKO9.js";import"./Typography-B2ZUFsL1.js";import"./Box-BbqhAezV.js";import"./FormHelperText-x3FNzzv5.js";const l=m.forwardRef(({children:a,...u},p)=>e.jsx(c,{...u,ref:p,children:a}));try{l.displayName="RadioGroup",l.__docgenInfo={description:"",displayName:"RadioGroup",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FormGroupClasses>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},name:{defaultValue:null,description:`The name used to reference the value of the control.
If you don't provide this prop, it falls back to a randomly generated name.`,name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`Callback fired when a radio button is selected.
@param event The event source of the callback.
@param value The value of the selected radio button.
You can pull out the new value by accessing \`event.target.value\` (string).`,name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, value: string) => void"}},row:{defaultValue:{value:"false"},description:"Display group of elements in a compact row.",name:"row",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"The default value. Use when the component is not controlled.",name:"defaultValue",required:!1,type:{name:"any"}},value:{defaultValue:null,description:"Value of the selected radio button. The DOM API casts this to a string.",name:"value",required:!1,type:{name:"any"}}}}}catch{}const be={title:"Form Components/Uncontrolled FormUtils/RadioGroup",component:l,tags:["autodocs"]},n={render:a=>e.jsxs(d,{children:[e.jsx(s,{component:"legend",id:"radio-buttons-group-label",children:"Radio Group"}),e.jsxs(l,{"aria-labelledby":"radio-buttons-group-label",defaultValue:"one",name:"radio-buttons-group",...a,children:[e.jsx(r,{value:"one",control:e.jsx(o,{}),label:"Radio One"}),e.jsx(r,{value:"two",control:e.jsx(o,{}),label:"Radio Two",helpTopicId:"1234"}),e.jsx(r,{value:"three",control:e.jsx(o,{}),label:"Radio Three"})]})]}),args:{}},i={render:a=>e.jsxs(e.Fragment,{children:[e.jsxs(d,{margin:"normal",required:!0,children:[e.jsx(s,{id:"required-radio-buttons-group-label",children:"Required"}),e.jsxs(l,{"aria-labelledby":"required-radio-buttons-group-label",defaultValue:"one",name:"required-radio-buttons-group",...a,children:[e.jsx(r,{value:"one",control:e.jsx(o,{}),label:"Radio One"}),e.jsx(r,{value:"two",control:e.jsx(o,{}),label:"Radio Two",helpTopicId:"1234"}),e.jsx(r,{value:"three",control:e.jsx(o,{}),label:"Radio Three"})]})]}),e.jsxs(d,{margin:"normal",error:!0,children:[e.jsx(s,{id:"error-radio-buttons-group-label",children:"Error"}),e.jsxs(l,{"aria-labelledby":"error-radio-buttons-group-label","aria-describedby":"error-radio-buttons-group-helpertext",name:"error-radio-buttons-group",...a,children:[e.jsx(r,{value:"one",control:e.jsx(o,{}),label:"Radio One"}),e.jsx(r,{value:"two",control:e.jsx(o,{}),label:"Radio Two",helpTopicId:"1234"}),e.jsx(r,{value:"three",control:e.jsx(o,{}),label:"Radio Three"})]}),e.jsx(b,{id:"error-radio-buttons-group-helpertext",children:"Error Message"})]})]}),args:{}},t={render:a=>e.jsxs(d,{children:[e.jsx(s,{className:"legend",id:"radio-buttons-group-legend-label",children:"Radio Group"}),e.jsxs(l,{"aria-labelledby":"radio-buttons-group-legend-label",defaultValue:"one",name:"radio-buttons-group",...a,children:[e.jsx(r,{value:"one",control:e.jsx(o,{}),label:"Radio One"}),e.jsx(r,{value:"two",control:e.jsx(o,{}),label:"Radio Two",helpTopicId:"1234"}),e.jsx(r,{value:"three",control:e.jsx(o,{}),label:"Radio Three"})]})]}),args:{}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
