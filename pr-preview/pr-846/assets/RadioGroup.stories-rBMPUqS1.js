import{r as y,j as e}from"./iframe-uHgbxI5K.js";import{R as T}from"./RadioGroup-DaQRAyuZ.js";import{R as o}from"./Radio-DoQAkM-d.js";import{F as d}from"./FormControl-C7zt7PRQ.js";import{F as s}from"./FormLabel-QIZDxMvk.js";import{F as r}from"./FormControlLabel-CQNnkEck.js";import{F as C}from"./FormHelperText-DTjv-yor.js";import"./preload-helper-Dp1pzeXC.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Radio-CCIIGQOt.js";import"./SwitchBase-Coc1IMyb.js";import"./styled-8YbhM9a0.js";import"./useFormControl-BeaDuuzQ.js";import"./useSlot-DoiGXRjP.js";import"./mergeSlotProps-Muvz4q9m.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BQsEeVXe.js";import"./useControlled-kFiMxWUJ.js";import"./ButtonBase-DWgIiiPw.js";import"./useTimeout-CnBSTBeY.js";import"./TransitionGroupContext-D0JdioPb.js";import"./useEventCallback-1jk_qbz7.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-BmijsGhR.js";import"./SvgIcon-C1fws6HS.js";import"./memoTheme-oX4ulD_d.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FormGroup-C41I1qRZ.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-DF8mSHc6.js";import"./FieldHelpIcon-BNVuoBwI.js";import"./index-DS1ZdVNz.js";import"./index-CUd5PmZT.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./index-BovvASnm.js";import"./Tooltip-sNbil-gw.js";import"./useTheme-CtIbOmqo.js";import"./getReactElementRef-WEJqQMPe.js";import"./Portal-DdZjlCce.js";import"./utils-Cj1f_ISK.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BTIA_7et.js";import"./IconButton-CXBoVS4j.js";import"./CircularProgress-DxKRrnZT.js";import"./Button-D_ToZGbA.js";import"./FormLabel-BvekG9my.js";import"./FormControlLabel-CMdu96K9.js";import"./Typography-BUwJzphg.js";import"./Box-CGtHD5r9.js";import"./FormHelperText-D71Rzsdg.js";const l=y.forwardRef(({children:a,...F},j)=>e.jsx(T,{...F,ref:j,children:a}));try{l.displayName="RadioGroup",l.__docgenInfo={description:"",displayName:"RadioGroup",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FormGroupClasses>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},name:{defaultValue:null,description:`The name used to reference the value of the control.
If you don't provide this prop, it falls back to a randomly generated name.`,name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`Callback fired when a radio button is selected.
@param event The event source of the callback.
@param value The value of the selected radio button.
You can pull out the new value by accessing \`event.target.value\` (string).`,name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, value: string) => void"}},row:{defaultValue:{value:"false"},description:"Display group of elements in a compact row.",name:"row",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"The default value. Use when the component is not controlled.",name:"defaultValue",required:!1,type:{name:"any"}},value:{defaultValue:null,description:"Value of the selected radio button. The DOM API casts this to a string.",name:"value",required:!1,type:{name:"any"}}}}}catch{}const Le={title:"Form Components/FormUtils/RadioGroup",component:l,tags:["autodocs"]},n={render:a=>e.jsxs(d,{children:[e.jsx(s,{component:"legend",id:"radio-buttons-group-label",children:"Radio Group"}),e.jsxs(l,{"aria-labelledby":"radio-buttons-group-label",defaultValue:"one",name:"radio-buttons-group",...a,children:[e.jsx(r,{value:"one",control:e.jsx(o,{}),label:"Radio One"}),e.jsx(r,{value:"two",control:e.jsx(o,{}),label:"Radio Two",helpTopicId:"1234"}),e.jsx(r,{value:"three",control:e.jsx(o,{}),label:"Radio Three"})]})]}),args:{}},i={render:a=>e.jsxs(e.Fragment,{children:[e.jsxs(d,{margin:"normal",required:!0,children:[e.jsx(s,{id:"required-radio-buttons-group-label",children:"Required"}),e.jsxs(l,{"aria-labelledby":"required-radio-buttons-group-label",defaultValue:"one",name:"required-radio-buttons-group",...a,children:[e.jsx(r,{value:"one",control:e.jsx(o,{}),label:"Radio One"}),e.jsx(r,{value:"two",control:e.jsx(o,{}),label:"Radio Two",helpTopicId:"1234"}),e.jsx(r,{value:"three",control:e.jsx(o,{}),label:"Radio Three"})]})]}),e.jsxs(d,{margin:"normal",error:!0,children:[e.jsx(s,{id:"error-radio-buttons-group-label",children:"Error"}),e.jsxs(l,{"aria-labelledby":"error-radio-buttons-group-label","aria-describedby":"error-radio-buttons-group-helpertext",name:"error-radio-buttons-group",...a,children:[e.jsx(r,{value:"one",control:e.jsx(o,{}),label:"Radio One"}),e.jsx(r,{value:"two",control:e.jsx(o,{}),label:"Radio Two",helpTopicId:"1234"}),e.jsx(r,{value:"three",control:e.jsx(o,{}),label:"Radio Three"})]}),e.jsx(C,{id:"error-radio-buttons-group-helpertext",children:"Error Message"})]})]}),args:{}},t={render:a=>e.jsxs(d,{children:[e.jsx(s,{className:"legend",id:"radio-buttons-group-legend-label",children:"Radio Group"}),e.jsxs(l,{"aria-labelledby":"radio-buttons-group-legend-label",defaultValue:"one",name:"radio-buttons-group",...a,children:[e.jsx(r,{value:"one",control:e.jsx(o,{}),label:"Radio One"}),e.jsx(r,{value:"two",control:e.jsx(o,{}),label:"Radio Two",helpTopicId:"1234"}),e.jsx(r,{value:"three",control:e.jsx(o,{}),label:"Radio Three"})]})]}),args:{}};var u,p,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,b,g;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,R,x,f,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(R=t.parameters)==null?void 0:R.docs)==null?void 0:x.source},description:{story:'Legacy styling for the group label can be achieved with the `"legend"` class on the `FormLabel`.',...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.description}}};const we=["_RadioGroup","_States","_Legacy"];export{t as _Legacy,n as _RadioGroup,i as _States,we as __namedExportsOrder,Le as default};
