import{r as m,j as e}from"./iframe-rhK9tIc4.js";import{R as c}from"./RadioGroup-NJJTzESl.js";import{R as o}from"./Radio-Cfv5Pkvs.js";import{F as d}from"./FormControl-DzPtRk9q.js";import{F as s}from"./FormLabel-Cd_dfBPj.js";import{F as r}from"./FormControlLabel-DEdyQVFZ.js";import{F as b}from"./FormHelperText-BTKXQJgq.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Radio-BHuW9Gba.js";import"./SwitchBase-F3FXc6iE.js";import"./styled-CBQFiEom.js";import"./useFormControl-CYsp_SKE.js";import"./useSlot-Ss2ummcO.js";import"./mergeSlotProps-C1tzmMCQ.js";import"./useForkRef-DQY4LT_f.js";import"./useControlled-CseZ_aCu.js";import"./ButtonBase-C62hOKjf.js";import"./useTimeout-D0IbZg6d.js";import"./TransitionGroupContext-uy7bHgBz.js";import"./useEventCallback-Ds2BvoNa.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-C0bXOuHF.js";import"./SvgIcon-DzAUVQ7n.js";import"./memoTheme-IQ7acCr3.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FormGroup-CCTE-ze6.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-D8DZ9hal.js";import"./FieldHelpIcon-MAz98aCf.js";import"./index-BiBDMnSv.js";import"./index-DRr7OjqP.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./index-C-QneIm0.js";import"./Tooltip-DiEqfW-N.js";import"./useTheme-BXOJLFox.js";import"./getReactElementRef-D1xzuExO.js";import"./Portal-D-ZKSgVP.js";import"./utils-Doe2UH4J.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CU-sXxN2.js";import"./IconButton-BVic3zsX.js";import"./CircularProgress-BoTRikuG.js";import"./Button-KJ_PCDyl.js";import"./FormLabel-BV3CtcmF.js";import"./FormControlLabel-gbSYoGRZ.js";import"./Typography-DyqU0saw.js";import"./Box-D2lP2H-p.js";import"./FormHelperText-iHOtARPd.js";const l=m.forwardRef(({children:a,...u},p)=>e.jsx(c,{...u,ref:p,children:a}));try{l.displayName="RadioGroup",l.__docgenInfo={description:"",displayName:"RadioGroup",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FormGroupClasses>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},name:{defaultValue:null,description:`The name used to reference the value of the control.
If you don't provide this prop, it falls back to a randomly generated name.`,name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`Callback fired when a radio button is selected.
@param event The event source of the callback.
@param value The value of the selected radio button.
You can pull out the new value by accessing \`event.target.value\` (string).`,name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, value: string) => void"}},row:{defaultValue:{value:"false"},description:"Display group of elements in a compact row.",name:"row",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"The default value. Use when the component is not controlled.",name:"defaultValue",required:!1,type:{name:"any"}},value:{defaultValue:null,description:"Value of the selected radio button. The DOM API casts this to a string.",name:"value",required:!1,type:{name:"any"}}}}}catch{}const be={title:"Form Components/FormUtils/RadioGroup",component:l,tags:["autodocs"]},n={render:a=>e.jsxs(d,{children:[e.jsx(s,{component:"legend",id:"radio-buttons-group-label",children:"Radio Group"}),e.jsxs(l,{"aria-labelledby":"radio-buttons-group-label",defaultValue:"one",name:"radio-buttons-group",...a,children:[e.jsx(r,{value:"one",control:e.jsx(o,{}),label:"Radio One"}),e.jsx(r,{value:"two",control:e.jsx(o,{}),label:"Radio Two",helpTopicId:"1234"}),e.jsx(r,{value:"three",control:e.jsx(o,{}),label:"Radio Three"})]})]}),args:{}},i={render:a=>e.jsxs(e.Fragment,{children:[e.jsxs(d,{margin:"normal",required:!0,children:[e.jsx(s,{id:"required-radio-buttons-group-label",children:"Required"}),e.jsxs(l,{"aria-labelledby":"required-radio-buttons-group-label",defaultValue:"one",name:"required-radio-buttons-group",...a,children:[e.jsx(r,{value:"one",control:e.jsx(o,{}),label:"Radio One"}),e.jsx(r,{value:"two",control:e.jsx(o,{}),label:"Radio Two",helpTopicId:"1234"}),e.jsx(r,{value:"three",control:e.jsx(o,{}),label:"Radio Three"})]})]}),e.jsxs(d,{margin:"normal",error:!0,children:[e.jsx(s,{id:"error-radio-buttons-group-label",children:"Error"}),e.jsxs(l,{"aria-labelledby":"error-radio-buttons-group-label","aria-describedby":"error-radio-buttons-group-helpertext",name:"error-radio-buttons-group",...a,children:[e.jsx(r,{value:"one",control:e.jsx(o,{}),label:"Radio One"}),e.jsx(r,{value:"two",control:e.jsx(o,{}),label:"Radio Two",helpTopicId:"1234"}),e.jsx(r,{value:"three",control:e.jsx(o,{}),label:"Radio Three"})]}),e.jsx(b,{id:"error-radio-buttons-group-helpertext",children:"Error Message"})]})]}),args:{}},t={render:a=>e.jsxs(d,{children:[e.jsx(s,{className:"legend",id:"radio-buttons-group-legend-label",children:"Radio Group"}),e.jsxs(l,{"aria-labelledby":"radio-buttons-group-legend-label",defaultValue:"one",name:"radio-buttons-group",...a,children:[e.jsx(r,{value:"one",control:e.jsx(o,{}),label:"Radio One"}),e.jsx(r,{value:"two",control:e.jsx(o,{}),label:"Radio Two",helpTopicId:"1234"}),e.jsx(r,{value:"three",control:e.jsx(o,{}),label:"Radio Three"})]})]}),args:{}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
