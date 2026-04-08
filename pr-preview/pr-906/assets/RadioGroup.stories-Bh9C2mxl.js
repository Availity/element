import{r as m,j as e}from"./iframe-B3XSEB2p.js";import{R as c}from"./RadioGroup-PiA-pQ_J.js";import{R as o}from"./Radio-BmymvPfC.js";import{F as d}from"./FormControl-BWJTqszo.js";import{F as s}from"./FormLabel-Cdvm6NoY.js";import{F as r}from"./FormControlLabel-DRyG6e_A.js";import{F as b}from"./FormHelperText-D-x7_4oA.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Radio-BX0zjP_U.js";import"./SwitchBase-zf7Fsryl.js";import"./styled-BKJUYYzH.js";import"./useFormControl-rtm0CpB1.js";import"./useSlot-fXCwMtx-.js";import"./mergeSlotProps-BUA7aXyy.js";import"./useForkRef-BFyiqj42.js";import"./useControlled-BnIqSLBp.js";import"./ButtonBase-CV7JyDx9.js";import"./useTimeout-DjubHrAv.js";import"./TransitionGroupContext-bUHI8Opa.js";import"./useEventCallback-Dfz_oY_W.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-DXiAxkxb.js";import"./SvgIcon-BW4di25g.js";import"./memoTheme-zFBVIAxJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FormGroup-BicZh9bY.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-ZiQktaUF.js";import"./FieldHelpIcon-DUVeCraK.js";import"./index-BiBDMnSv.js";import"./index-CAS_Ehni.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./index-BDo5zO46.js";import"./Tooltip-CpMdDorm.js";import"./useTheme-Gs2b_SoM.js";import"./getReactElementRef-m4HA6qqR.js";import"./Portal-DeOXpMrf.js";import"./utils-CMJMNufc.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BnXi_Ts5.js";import"./IconButton-ML2PMq2-.js";import"./CircularProgress-C6blXItT.js";import"./Button-Cx7ia3Qx.js";import"./FormLabel-CxLEzcw-.js";import"./FormControlLabel-DCV2mEAb.js";import"./Typography-BStgzFan.js";import"./Box-CT-z8ogS.js";import"./FormHelperText-B6YW8aeN.js";const l=m.forwardRef(({children:a,...u},p)=>e.jsx(c,{...u,ref:p,children:a}));try{l.displayName="RadioGroup",l.__docgenInfo={description:"",displayName:"RadioGroup",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FormGroupClasses>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},name:{defaultValue:null,description:`The name used to reference the value of the control.
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
