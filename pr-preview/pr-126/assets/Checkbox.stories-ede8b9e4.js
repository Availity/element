import{j as e,a as l,F as k}from"./jsx-runtime-390e5fc8.js";import{r as v}from"./index-570b25c1.js";import{F as t}from"./index-67c58611.js";import{T as a}from"./index-77af8b5f.js";import{e as s,f as d}from"./index-f35eb24e.js";import{C as U}from"./Checkbox-b04c18ed.js";import{B as W}from"./Box-7f261278.js";import{F as f,M as g}from"./FormLabel-a07a3cea.js";import{F as x}from"./FormGroup-8de9d621.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-9681c8ff.js";import"./index-49af8d8b.js";import"./Button-9af3d166.js";import"./createTheme-e6b56ddb.js";import"./clsx-8416b751.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-188025da.js";import"./useThemeProps-db7202c2.js";import"./generateUtilityClasses-f776b170.js";import"./ButtonBase-6040f690.js";import"./emotion-react.browser.esm-69a15469.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-d9214433.js";import"./useTheme-3a36d7a0.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./useSlotProps-1710581f.js";import"./utils-df51f77d.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-15cd5b0a.js";import"./LoadingButton-2cbf4819.js";import"./extends-90dea224.js";import"./FormControlLabel-0fb4668c.js";import"./utils-3d35716f.js";import"./Typography-a571125c.js";import"./extendSxProp-4d42c058.js";import"./Stack-aed56d46.js";import"./styled-4350ac6b.js";import"./FormHelperText-ffbef46f.js";import"./Divider-e6df2ce9.js";import"./dividerClasses-d4e8510c.js";import"./faCircleArrowRight-5066acd3.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-ab7aa383.js";import"./createSvgIcon-e4b87ef5.js";import"./isMuiElement-6907f060.js";const o=v.forwardRef((r,n)=>e(U,{...r,ref:n,size:"medium"}));try{o.displayName="Checkbox",o.__docgenInfo={description:"",displayName:"Checkbox",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CheckboxClasses>"}},defaultChecked:{defaultValue:null,description:"The default checked state. Use when the component is not controlled.",name:"defaultChecked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The id of the `input` element.",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},color:{defaultValue:null,description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:'"primary" | "error"'}},onChange:{defaultValue:null,description:"Callback fired when the state is changed.\n@param event The event source of the callback.\nYou can pull out the new checked state by accessing `event.target.checked` (boolean).",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, checked: boolean) => void"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"<CheckBoxOutlineBlankIcon />"},description:"The icon to display when the component is unchecked.",name:"icon",required:!1,type:{name:"ReactNode"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},edge:{defaultValue:{value:"false"},description:`If given, uses a negative margin to counteract the padding on one
side (this is often helpful for aligning the left or right
side of the icon with content above or below, without ruining the border
size and shape).`,name:"edge",required:!1,type:{name:'false | "end" | "start"'}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`The value of the component. The DOM API casts this to a string.
The browser uses "on" as the default value.`,name:"value",required:!1,type:{name:"unknown"}},checkedIcon:{defaultValue:{value:"<CheckBoxIcon />"},description:"The icon to display when the component is checked.",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},checked:{defaultValue:null,description:"If `true`, the component is checked.",name:"checked",required:!1,type:{name:"boolean"}},inputProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"If `true`, the `input` element is required.",name:"required",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:{value:"false"},description:"If `true`, the component appears indeterminate.\nThis does not set the native input element to indeterminate due\nto inconsistent behavior across browsers.\nHowever, we set a `data-indeterminate` attribute on the `input`.",name:"indeterminate",required:!1,type:{name:"boolean"}},indeterminateIcon:{defaultValue:{value:"<IndeterminateCheckBoxIcon />"},description:"The icon to display when the component is indeterminate.",name:"indeterminateIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const Ae={title:"Components/Checkbox/Checkbox",component:o,tags:["autodocs"],argTypes:{readOnly:{table:{disable:!0}}}},p={render:r=>l(k,{children:[e(a,{variant:"h1",children:"Examples"}),e(a,{variant:"body1",children:"Storybook controls do not apply to these"}),e(o,{defaultChecked:!0,inputProps:{"aria-label":"Default Checked example"}}),e(o,{inputProps:{"aria-label":"Default Unchecked example"}}),e(o,{inputProps:{"aria-label":"Disabled example"},disabled:!0}),e(o,{inputProps:{"aria-label":"Disabled Checked example"},disabled:!0,checked:!0}),e(a,{variant:"h1",children:"Playground"}),e(a,{variant:"body1",children:"Storybook controls apply to this component"}),e(o,{...r})]}),args:{color:"primary",inputProps:{"aria-label":"Playground example"}}},h={render:r=>l(k,{children:[e(a,{variant:"h1",children:"Examples"}),e(a,{variant:"body1",children:"Storybook controls do not apply to these"}),e(o,{defaultChecked:!0,inputProps:{"aria-label":"Default Checked example"},color:"error",icon:e(s,{}),checkedIcon:e(d,{})}),e(o,{inputProps:{"aria-label":"Default Unchecked example"},color:"error",icon:e(s,{}),checkedIcon:e(d,{})}),e(o,{disabled:!0,inputProps:{"aria-label":"Disabled example"},color:"error",icon:e(s,{}),checkedIcon:e(d,{})}),e(o,{disabled:!0,checked:!0,inputProps:{"aria-label":"Disabled Checked example"},color:"error",icon:e(s,{}),checkedIcon:e(d,{})}),e(a,{variant:"h1",children:"Playground"}),e(a,{variant:"body1",children:"Storybook controls apply to this component"}),e(o,{...r})]}),args:{color:"error",icon:e(s,{}),checkedIcon:e(d,{}),inputProps:{"aria-label":"Playground example"}}},u={render:r=>l(k,{children:[e(a,{variant:"h1",children:"Examples"}),e(a,{variant:"body1",children:"Storybook controls do not apply to these"}),e(t,{control:e(o,{defaultChecked:!0}),label:"Label"}),e(t,{required:!0,control:e(o,{}),label:"Required"}),e(t,{control:e(o,{disabled:!0}),label:"Disabled"}),e(a,{variant:"h1",children:"Playground"}),e(a,{variant:"body1",children:"Storybook controls apply to this component"}),e(t,{control:e(o,{...r}),label:"Label"})]}),args:{}},m={render:r=>{const[n,i]=v.useState(!1);return e(o,{...r,checked:n,onChange:C=>i(C.target.checked),inputProps:{"aria-label":"controlled"}})},args:{}},b={render:r=>{const[n,i]=v.useState([!0,!1]),T=c=>{i([c.target.checked,c.target.checked])},C=c=>{i([c.target.checked,n[1]])},A=c=>{i([n[0],c.target.checked])},O=l(W,{sx:{display:"flex",flexDirection:"column",ml:3},children:[e(t,{label:"Child 1",control:e(o,{checked:n[0],onChange:C})}),e(t,{label:"Child 2",control:e(o,{checked:n[1],onChange:A})})]});return l("div",{children:[e(t,{label:"Parent",control:e(o,{...r,checked:n[0]&&n[1],indeterminate:n[0]!==n[1],onChange:T})}),O]})},args:{}},y={render:r=>l(k,{children:[e(a,{variant:"h1",children:"Examples"}),e(a,{variant:"body1",children:"Storybook controls do not apply to these"}),l(f,{sx:{m:3},component:"fieldset",variant:"standard",required:!0,children:[e(g,{component:"legend",children:"Vertical Checkboxes"}),l(x,{children:[e(t,{control:e(o,{defaultChecked:!0}),label:"Label"}),e(t,{control:e(o,{}),label:"Label 2"}),e(t,{disabled:!0,control:e(o,{}),label:"Label 3"})]})]}),l(f,{sx:{m:3},component:"fieldset",variant:"standard",required:!0,children:[e(g,{component:"legend",children:"Horizontal Checkboxes"}),l(x,{row:!0,children:[e(t,{control:e(o,{defaultChecked:!0}),label:"Label"}),e(t,{control:e(o,{}),label:"Label 2"}),e(t,{disabled:!0,control:e(o,{}),label:"Label 3"})]})]}),e(a,{variant:"h1",children:"Playground"}),e(a,{variant:"body1",children:"Storybook controls apply to this component"}),l(f,{sx:{m:3},component:"fieldset",variant:"standard",required:r.required,children:[e(g,{component:"legend",children:"Horizontal Checkbox"}),e(x,{row:!0,children:e(t,{control:e(o,{...r}),label:"Label"})})]})]}),args:{color:"primary"}};var I,L,F;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => <>
      <Typography variant="h1">Examples</Typography>
      <Typography variant="body1">Storybook controls do not apply to these</Typography>
      <Checkbox defaultChecked inputProps={{
      'aria-label': 'Default Checked example'
    }} />
      <Checkbox inputProps={{
      'aria-label': 'Default Unchecked example'
    }} />
      <Checkbox inputProps={{
      'aria-label': 'Disabled example'
    }} disabled />
      <Checkbox inputProps={{
      'aria-label': 'Disabled Checked example'
    }} disabled checked />
      <Typography variant="h1">Playground</Typography>
      <Typography variant="body1">Storybook controls apply to this component</Typography>
      <Checkbox {...args} />
    </>,
  args: {
    color: 'primary',
    inputProps: {
      'aria-label': 'Playground example'
    }
  }
}`,...(F=(L=p.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var P,q,V;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => <>
      <Typography variant="h1">Examples</Typography>
      <Typography variant="body1">Storybook controls do not apply to these</Typography>
      <Checkbox defaultChecked inputProps={{
      'aria-label': 'Default Checked example'
    }} color="error" icon={<HeartEmptyIcon />} checkedIcon={<HeartIcon />} />
      <Checkbox inputProps={{
      'aria-label': 'Default Unchecked example'
    }} color="error" icon={<HeartEmptyIcon />} checkedIcon={<HeartIcon />} />
      <Checkbox disabled inputProps={{
      'aria-label': 'Disabled example'
    }} color="error" icon={<HeartEmptyIcon />} checkedIcon={<HeartIcon />} />
      <Checkbox disabled checked inputProps={{
      'aria-label': 'Disabled Checked example'
    }} color="error" icon={<HeartEmptyIcon />} checkedIcon={<HeartIcon />} />
      <Typography variant="h1">Playground</Typography>
      <Typography variant="body1">Storybook controls apply to this component</Typography>
      <Checkbox {...args} />
    </>,
  args: {
    color: 'error',
    icon: <HeartEmptyIcon />,
    checkedIcon: <HeartIcon />,
    inputProps: {
      'aria-label': 'Playground example'
    }
  }
}`,...(V=(q=h.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var S,E,w;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => <>
      <Typography variant="h1">Examples</Typography>
      <Typography variant="body1">Storybook controls do not apply to these</Typography>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox />} label="Required" />
      <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
      <Typography variant="h1">Playground</Typography>
      <Typography variant="body1">Storybook controls apply to this component</Typography>
      <FormControlLabel control={<Checkbox {...args} />} label="Label" />
    </>,
  args: {}
}`,...(w=(E=u.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var H,D,_;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => {
    const [checked, setChecked] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);
    return <Checkbox {...args} checked={checked} onChange={handleChange} inputProps={{
      'aria-label': 'controlled'
    }} />;
  },
  args: {}
}`,...(_=(D=m.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var R,M,G;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(G=(M=b.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var B,N,z;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => <>
      <Typography variant="h1">Examples</Typography>
      <Typography variant="body1">Storybook controls do not apply to these</Typography>
      <FormControl sx={{
      m: 3
    }} component="fieldset" variant="standard" required>
        <FormLabel component="legend">Vertical Checkboxes</FormLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel control={<Checkbox />} label="Label 2" />
          <FormControlLabel disabled control={<Checkbox />} label="Label 3" />
        </FormGroup>
      </FormControl>

      <FormControl sx={{
      m: 3
    }} component="fieldset" variant="standard" required>
        <FormLabel component="legend">Horizontal Checkboxes</FormLabel>
        <FormGroup row>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel control={<Checkbox />} label="Label 2" />
          <FormControlLabel disabled control={<Checkbox />} label="Label 3" />
        </FormGroup>
      </FormControl>

      <Typography variant="h1">Playground</Typography>
      <Typography variant="body1">Storybook controls apply to this component</Typography>

      <FormControl sx={{
      m: 3
    }} component="fieldset" variant="standard" required={args.required}>
        <FormLabel component="legend">Horizontal Checkbox</FormLabel>
        <FormGroup row>
          <FormControlLabel control={<Checkbox {...args} />} label="Label" />
        </FormGroup>
      </FormControl>
    </>,
  args: {
    color: 'primary'
  }
}`,...(z=(N=y.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};const Oe=["_Checkbox","_CustomCheckbox","_LabeledCheckbox","_ControlledCheckbox","_IndeterminateCheckbox","_FormGroupCheckbox"];export{p as _Checkbox,m as _ControlledCheckbox,h as _CustomCheckbox,y as _FormGroupCheckbox,b as _IndeterminateCheckbox,u as _LabeledCheckbox,Oe as __namedExportsOrder,Ae as default};
//# sourceMappingURL=Checkbox.stories-ede8b9e4.js.map
