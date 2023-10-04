import{j as e,a as n,F as f}from"./jsx-runtime-390e5fc8.js";import{r as C}from"./index-570b25c1.js";import{F as r}from"./index-23365ade.js";import{e as O,f as W}from"./index-25d48f71.js";import{C as j}from"./Checkbox-91df2012.js";import{B as U}from"./Box-ce79f7f7.js";import{F as M}from"./FormGroup-0956aca8.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-9681c8ff.js";import"./index-bc19b086.js";import"./Button-48a9b380.js";import"./createTheme-b02e766d.js";import"./clsx-43049957.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-69a32198.js";import"./useThemeProps-ac7867ed.js";import"./generateUtilityClasses-b06d554b.js";import"./ButtonBase-78eecb53.js";import"./emotion-react.browser.esm-dc887828.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-9ef5363d.js";import"./useTheme-a234fe30.js";import"./objectWithoutPropertiesLoose-830c72af.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./useSlotProps-c5009eb1.js";import"./utils-a53b28cc.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-329b8fa1.js";import"./LoadingButton-8f26fe8a.js";import"./extends-90dea224.js";import"./FormControlLabel-61164d2c.js";import"./utils-3d35716f.js";import"./Typography-72ef0a36.js";import"./extendSxProp-b0ad88fc.js";import"./Stack-524d7b5c.js";import"./styled-9972f020.js";import"./FormLabel-5f5d671f.js";import"./OutlinedInput-0f61bb0e.js";import"./ownerWindow-698471fc.js";import"./GlobalStyles-6bf89189.js";import"./faCircleArrowRight-45fe0977.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-667e6608.js";import"./createSvgIcon-5dca4d92.js";const a=C.forwardRef((t,o)=>e(j,{...t,ref:o,size:"medium"}));try{a.displayName="Checkbox",a.__docgenInfo={description:"",displayName:"Checkbox",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CheckboxClasses>"}},color:{defaultValue:null,description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:'"primary" | "error"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},id:{defaultValue:null,description:"The id of the `input` element.",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Callback fired when the state is changed.\n@param event The event source of the callback.\nYou can pull out the new checked state by accessing `event.target.checked` (boolean).",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, checked: boolean) => void"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"The default checked state. Use when the component is not controlled.",name:"defaultChecked",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"<CheckBoxOutlineBlankIcon />"},description:"The icon to display when the component is unchecked.",name:"icon",required:!1,type:{name:"ReactNode"}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:{value:"false"},description:"If `true`, the ripple effect is disabled.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:{value:"false"},description:"If `true`, the touch ripple effect is disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:{value:"false"},description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},touchRippleRef:{defaultValue:null,description:"A ref that points to the `TouchRipple` element.",name:"touchRippleRef",required:!1,type:{name:"Ref<TouchRippleActions>"}},disableFocusRipple:{defaultValue:{value:"false"},description:"If `true`, the  keyboard focus ripple is disabled.",name:"disableFocusRipple",required:!1,type:{name:"boolean"}},edge:{defaultValue:{value:"false"},description:`If given, uses a negative margin to counteract the padding on one
side (this is often helpful for aligning the left or right
side of the icon with content above or below, without ruining the border
size and shape).`,name:"edge",required:!1,type:{name:'false | "end" | "start"'}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`The value of the component. The DOM API casts this to a string.
The browser uses "on" as the default value.`,name:"value",required:!1,type:{name:"unknown"}},checkedIcon:{defaultValue:{value:"<CheckBoxIcon />"},description:"The icon to display when the component is checked.",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},checked:{defaultValue:null,description:"If `true`, the component is checked.",name:"checked",required:!1,type:{name:"boolean"}},inputProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"If `true`, the `input` element is required.",name:"required",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:{value:"false"},description:"If `true`, the component appears indeterminate.\nThis does not set the native input element to indeterminate due\nto inconsistent behavior across browsers.\nHowever, we set a `data-indeterminate` attribute on the `input`.",name:"indeterminate",required:!1,type:{name:"boolean"}},indeterminateIcon:{defaultValue:{value:"<IndeterminateCheckBoxIcon />"},description:"The icon to display when the component is indeterminate.",name:"indeterminateIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const Ne={title:"Components/Checkbox/Checkbox",component:a,tags:["autodocs"]},c={render:t=>n(f,{children:[e(a,{...t,defaultChecked:!0}),e(a,{...t}),e(a,{...t,disabled:!0}),e(a,{...t,disabled:!0,checked:!0})]}),args:{color:"primary"}},s={render:t=>n(f,{children:[e(a,{...t,defaultChecked:!0}),e(a,{...t}),e(a,{...t,disabled:!0}),e(a,{...t,disabled:!0,checked:!0})]}),args:{color:"error",icon:e(O,{}),checkedIcon:e(W,{})}},d={render:t=>n(f,{children:[e(r,{control:e(a,{...t,defaultChecked:!0}),label:"Label"}),e(r,{required:!0,control:e(a,{...t}),label:"Required"}),e(r,{disabled:!0,control:e(a,{...t}),label:"Disabled"})]}),args:{children:"This text is a child of Checkbox"}},u={render:t=>{const[o,i]=C.useState(!1);return e(a,{...t,checked:o,onChange:b=>i(b.target.checked),inputProps:{"aria-label":"controlled"}})},args:{children:"This text is a child of Checkbox"}},p={render:t=>{const[o,i]=C.useState([!0,!1]),k=l=>{i([l.target.checked,l.target.checked])},b=l=>{i([l.target.checked,o[1]])},N=l=>{i([o[0],l.target.checked])},z=n(U,{sx:{display:"flex",flexDirection:"column",ml:3},children:[e(r,{label:"Child 1",control:e(a,{checked:o[0],onChange:b})}),e(r,{label:"Child 2",control:e(a,{checked:o[1],onChange:N})})]});return n("div",{children:[e(r,{label:"Parent",control:e(a,{...t,checked:o[0]&&o[1],indeterminate:o[0]!==o[1],onChange:k})}),z]})},args:{}},h={render:t=>n(M,{children:[e(r,{control:e(a,{...t,defaultChecked:!0}),label:"Label"}),e(r,{required:!0,control:e(a,{...t}),label:"Required"}),e(r,{disabled:!0,control:e(a,{...t}),label:"Disabled"})]}),args:{color:"primary"}},m={render:t=>n(M,{row:!0,children:[e(r,{control:e(a,{...t,defaultChecked:!0}),label:"Label"}),e(r,{required:!0,control:e(a,{...t}),label:"Required"}),e(r,{disabled:!0,control:e(a,{...t}),label:"Disabled"})]}),args:{color:"primary"}};var g,x,y;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => <>
      <Checkbox {...args} defaultChecked />
      <Checkbox {...args} />
      <Checkbox {...args} disabled />
      <Checkbox {...args} disabled checked />
    </>,
  args: {
    color: 'primary'
  }
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,q,I;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => <>
      <Checkbox {...args} defaultChecked />
      <Checkbox {...args} />
      <Checkbox {...args} disabled />
      <Checkbox {...args} disabled checked />
    </>,
  args: {
    color: 'error',
    icon: <HeartEmptyIcon />,
    checkedIcon: <HeartIcon />
  }
}`,...(I=(q=s.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var T,V,R;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => <>
      <FormControlLabel control={<Checkbox {...args} defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox {...args} />} label="Required" />
      <FormControlLabel disabled control={<Checkbox {...args} />} label="Disabled" />
    </>,
  args: {
    children: 'This text is a child of Checkbox'
  }
}`,...(R=(V=d.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var F,L,w;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => {
    const [checked, setChecked] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);
    return <Checkbox {...args} checked={checked} onChange={handleChange} inputProps={{
      'aria-label': 'controlled'
    }} />;
  },
  args: {
    children: 'This text is a child of Checkbox'
  }
}`,...(w=(L=u.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var _,P,E;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => {
    const [checked, setChecked] = useState([true, false]);
    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };
    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };
    const children = <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      ml: 3
    }}>
        <FormControlLabel label="Child 1" control={<Checkbox checked={checked[0]} onChange={handleChange2} />} />
        <FormControlLabel label="Child 2" control={<Checkbox checked={checked[1]} onChange={handleChange3} />} />
      </Box>;
    return <div>
        <FormControlLabel label="Parent" control={<Checkbox {...args} checked={checked[0] && checked[1]} indeterminate={checked[0] !== checked[1]} onChange={handleChange1} />} />
        {children}
      </div>;
  },
  args: {}
}`,...(E=(P=p.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var S,H,G;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => <FormGroup>
      <FormControlLabel control={<Checkbox {...args} defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox {...args} />} label="Required" />
      <FormControlLabel disabled control={<Checkbox {...args} />} label="Disabled" />
    </FormGroup>,
  args: {
    color: 'primary'
  }
}`,...(G=(H=h.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var A,B,D;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => <FormGroup row>
      <FormControlLabel control={<Checkbox {...args} defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox {...args} />} label="Required" />
      <FormControlLabel disabled control={<Checkbox {...args} />} label="Disabled" />
    </FormGroup>,
  args: {
    color: 'primary'
  }
}`,...(D=(B=m.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const ze=["_Checkbox","_CustomCheckbox","_LabeledCheckbox","_ControlledCheckbox","_IndeterminateCheckbox","_FormGroupCheckbox","_FormGroupHorizontalCheckbox"];export{c as _Checkbox,u as _ControlledCheckbox,s as _CustomCheckbox,h as _FormGroupCheckbox,m as _FormGroupHorizontalCheckbox,p as _IndeterminateCheckbox,d as _LabeledCheckbox,ze as __namedExportsOrder,Ne as default};
//# sourceMappingURL=Checkbox.stories-dcec5372.js.map
