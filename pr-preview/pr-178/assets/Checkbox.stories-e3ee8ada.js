import{a as e,j as t,F as k}from"./jsx-runtime-a3bcee63.js";import{r as L}from"./index-570b25c1.js";import{d as n}from"./index-230b2b0b.js";import{T as r}from"./index-bf8151f5.js";import{h as s,i as d}from"./index-53288845.js";import{P as C}from"./index-8565fa46.js";import{C as j}from"./Checkbox-c8372156.js";import{C as g}from"./Container-3c3a93d6.js";import{B as Y}from"./Box-51bd3ea0.js";import{F as x}from"./FormControl-6b396c3c.js";import{M as v}from"./FormLabel-3e0f5024.js";import{F as T}from"./FormGroup-93228893.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-9681c8ff.js";import"./index-daf8ff4e.js";import"./Button-af0ca45f.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-523cb007.js";import"./useThemeProps-98dc6282.js";import"./generateUtilityClasses-b58f947a.js";import"./ButtonBase-44753119.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-91ad21bd.js";import"./useTheme-c07bb8e7.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./ownerDocument-613eb639.js";import"./Grow-8a00b99f.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useSlotProps-95ccb7bd.js";import"./isHostComponent-73d6e646.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-3fd19b93.js";import"./LoadingButton-1ec35b70.js";import"./extends-90dea224.js";import"./CircularProgress-96ade162.js";import"./FormControlLabel-1ceb9da1.js";import"./utils-3d35716f.js";import"./Typography-f453bb5c.js";import"./extendSxProp-b1abb964.js";import"./Stack-3fcb8940.js";import"./styled-5c6c15e1.js";import"./Divider-2d957b7a.js";import"./dividerClasses-871b72e6.js";import"./FormHelperText-e428b621.js";import"./OutlinedInput-71306fdf.js";import"./ownerWindow-03d1c82d.js";import"./debounce-517eeb3c.js";import"./GlobalStyles-5f9800bb.js";import"./Select-473a43cb.js";import"./react-is.production.min-a192e302.js";import"./Menu-113dab7f.js";import"./Popover-252d82a4.js";import"./Modal-1f45fd5c.js";import"./Backdrop-4a58ec86.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-389d56e7.js";import"./List-446c66c9.js";import"./createSvgIcon-ca656bec.js";import"./SvgIcon-075b1db6.js";import"./faCircleArrowRight-f69b7367.js";import"./faMagnifyingGlass-482fd726.js";import"./index-0ab557ce.js";import"./index-f567b834.js";import"./index-31fb134e.js";import"./Link-b7684510.js";import"./Breadcrumbs-3266d315.js";import"./index-4885976e.js";import"./index-4810b236.js";import"./index-7c0e1f2b.js";import"./_baseFor-53bad3ef.js";import"./_initCloneObject-31384e14.js";import"./isPlainObject-272efb33.js";import"./ToggleButtonGroup-2e6e00f5.js";import"./ToggleButton-54342354.js";import"./index-b2da221a.js";import"./TextField-471fdd1c.js";import"./index.esm-d81a0d8c.js";import"./Grid-62fb460c.js";import"./SwitchBase-1f7cd2d8.js";import"./isMuiElement-6907f060.js";const o=L.forwardRef((a,l)=>e(j,{...a,ref:l,size:"medium"}));try{o.displayName="Checkbox",o.__docgenInfo={description:"",displayName:"Checkbox",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CheckboxClasses>"}},color:{defaultValue:null,description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:'"primary" | "error"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},id:{defaultValue:null,description:"The id of the `input` element.",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Callback fired when the state is changed.\n@param event The event source of the callback.\nYou can pull out the new checked state by accessing `event.target.checked` (boolean).",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, checked: boolean) => void"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"The default checked state. Use when the component is not controlled.",name:"defaultChecked",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"<CheckBoxOutlineBlankIcon />"},description:"The icon to display when the component is unchecked.",name:"icon",required:!1,type:{name:"ReactNode"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},edge:{defaultValue:{value:"false"},description:`If given, uses a negative margin to counteract the padding on one
side (this is often helpful for aligning the left or right
side of the icon with content above or below, without ruining the border
size and shape).`,name:"edge",required:!1,type:{name:'false | "end" | "start"'}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`The value of the component. The DOM API casts this to a string.
The browser uses "on" as the default value.`,name:"value",required:!1,type:{name:"unknown"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"If `true`, the `input` element is required.",name:"required",required:!1,type:{name:"boolean"}},inputProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},checked:{defaultValue:null,description:"If `true`, the component is checked.",name:"checked",required:!1,type:{name:"boolean"}},checkedIcon:{defaultValue:{value:"<CheckBoxIcon />"},description:"The icon to display when the component is checked.",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},indeterminate:{defaultValue:{value:"false"},description:"If `true`, the component appears indeterminate.\nThis does not set the native input element to indeterminate due\nto inconsistent behavior across browsers.\nHowever, we set a `data-indeterminate` attribute on the `input`.",name:"indeterminate",required:!1,type:{name:"boolean"}},indeterminateIcon:{defaultValue:{value:"<IndeterminateCheckBoxIcon />"},description:"The icon to display when the component is indeterminate.",name:"indeterminateIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const So={title:"Components/Checkbox/Checkbox",component:o,tags:["autodocs"],argTypes:{readOnly:{table:{disable:!0}}}},p={render:a=>t(k,{children:[e(C,{headerText:"Checkboxes",breadcrumbs:{active:"This page"}}),t(g,{children:[e(r,{variant:"h2",marginTop:"1rem",children:"Examples"}),e(r,{variant:"body1",children:"Storybook controls do not apply to these"}),e(o,{defaultChecked:!0,inputProps:{"aria-label":"Default Checked example"}}),e(o,{inputProps:{"aria-label":"Default Unchecked example"}}),e(o,{inputProps:{"aria-label":"Disabled example"},disabled:!0}),e(o,{inputProps:{"aria-label":"Disabled Checked example"},disabled:!0,checked:!0}),e(r,{variant:"h2",children:"Playground"}),e(r,{variant:"body1",children:"Storybook controls apply to this component"}),e(o,{...a})]})]}),args:{color:"primary",inputProps:{"aria-label":"Playground example"}}},h={render:a=>t(k,{children:[e(C,{headerText:"Custom Checkboxes",breadcrumbs:{active:"This page"}}),t(g,{children:[e(r,{variant:"h2",marginTop:"1rem",children:"Examples"}),e(r,{variant:"body1",children:"Storybook controls do not apply to these"}),e(o,{defaultChecked:!0,inputProps:{"aria-label":"Default Checked example"},color:"error",icon:e(s,{}),checkedIcon:e(d,{})}),e(o,{inputProps:{"aria-label":"Default Unchecked example"},color:"error",icon:e(s,{}),checkedIcon:e(d,{})}),e(o,{disabled:!0,inputProps:{"aria-label":"Disabled example"},color:"error",icon:e(s,{}),checkedIcon:e(d,{})}),e(o,{disabled:!0,checked:!0,inputProps:{"aria-label":"Disabled Checked example"},color:"error",icon:e(s,{}),checkedIcon:e(d,{})}),e(r,{variant:"h2",children:"Playground"}),e(r,{variant:"body1",children:"Storybook controls apply to this component"}),e(o,{...a})]})]}),args:{color:"error",icon:e(s,{}),checkedIcon:e(d,{}),inputProps:{"aria-label":"Playground example"}}},m={render:a=>t(k,{children:[e(C,{headerText:"Labeled Checkboxes",breadcrumbs:{active:"This page"}}),t(g,{children:[e(r,{variant:"h2",marginTop:"1rem",children:"Examples"}),e(r,{variant:"body1",children:"Storybook controls do not apply to these"}),e(n,{control:e(o,{defaultChecked:!0}),label:"Label"}),e(n,{required:!0,control:e(o,{}),label:"Required"}),e(n,{control:e(o,{disabled:!0}),label:"Disabled"}),e(r,{variant:"h2",children:"Playground"}),e(r,{variant:"body1",children:"Storybook controls apply to this component"}),e(n,{control:e(o,{...a}),label:"Label"})]})]}),args:{}},u={render:a=>{const[l,c]=L.useState(!1);return e(o,{...a,checked:l,onChange:f=>c(f.target.checked),inputProps:{"aria-label":"controlled"}})},args:{}},b={render:a=>{const[l,c]=L.useState([!0,!1]),P=i=>{c([i.target.checked,i.target.checked])},f=i=>{c([i.target.checked,l[1]])},U=i=>{c([l[0],i.target.checked])},W=t(Y,{sx:{display:"flex",flexDirection:"column",ml:3},children:[e(n,{label:"Child 1",control:e(o,{checked:l[0],onChange:f})}),e(n,{label:"Child 2",control:e(o,{checked:l[1],onChange:U})})]});return t("div",{children:[e(n,{label:"Parent",control:e(o,{...a,checked:l[0]&&l[1],indeterminate:l[0]!==l[1],onChange:P})}),W]})},args:{}},y={render:a=>t(k,{children:[e(C,{headerText:"Form Group Checkboxes",breadcrumbs:{active:"This page"}}),t(g,{children:[e(r,{variant:"h2",marginTop:"1rem",children:"Examples"}),e(r,{variant:"body1",children:"Storybook controls do not apply to these"}),t(x,{sx:{m:3},component:"fieldset",variant:"standard",required:!0,children:[e(v,{component:"legend",children:"Vertical Checkboxes"}),t(T,{children:[e(n,{control:e(o,{defaultChecked:!0}),label:"Label"}),e(n,{control:e(o,{}),label:"Label 2"}),e(n,{disabled:!0,control:e(o,{}),label:"Label 3"})]})]}),t(x,{sx:{m:3},component:"fieldset",variant:"standard",required:!0,children:[e(v,{component:"legend",children:"Horizontal Checkboxes"}),t(T,{row:!0,children:[e(n,{control:e(o,{defaultChecked:!0}),label:"Label"}),e(n,{control:e(o,{}),label:"Label 2"}),e(n,{disabled:!0,control:e(o,{}),label:"Label 3"})]})]}),e(r,{variant:"h2",children:"Playground"}),e(r,{variant:"body1",children:"Storybook controls apply to this component"}),t(x,{sx:{m:3},component:"fieldset",variant:"standard",required:a.required,children:[e(v,{component:"legend",children:"Horizontal Checkbox"}),e(T,{row:!0,children:e(n,{control:e(o,{...a}),label:"Label"})})]})]})]}),args:{color:"primary"}};var I,F,q;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => <>
      <PageHeader headerText="Checkboxes" breadcrumbs={{
      active: 'This page'
    }} />
      <Container>
        <Typography variant="h2" marginTop="1rem">
          Examples
        </Typography>
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
        <Typography variant="h2">Playground</Typography>
        <Typography variant="body1">Storybook controls apply to this component</Typography>
        <Checkbox {...args} />
      </Container>
    </>,
  args: {
    color: 'primary',
    inputProps: {
      'aria-label': 'Playground example'
    }
  }
}`,...(q=(F=p.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var V,S,E;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => <>
      <PageHeader headerText="Custom Checkboxes" breadcrumbs={{
      active: 'This page'
    }} />
      <Container>
        <Typography variant="h2" marginTop="1rem">
          Examples
        </Typography>
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
        <Typography variant="h2">Playground</Typography>
        <Typography variant="body1">Storybook controls apply to this component</Typography>
        <Checkbox {...args} />
      </Container>
    </>,
  args: {
    color: 'error',
    icon: <HeartEmptyIcon />,
    checkedIcon: <HeartIcon />,
    inputProps: {
      'aria-label': 'Playground example'
    }
  }
}`,...(E=(S=h.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var H,w,D;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => <>
      <PageHeader headerText="Labeled Checkboxes" breadcrumbs={{
      active: 'This page'
    }} />
      <Container>
        <Typography variant="h2" marginTop="1rem">
          Examples
        </Typography>
        <Typography variant="body1">Storybook controls do not apply to these</Typography>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel required control={<Checkbox />} label="Required" />
        <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
        <Typography variant="h2">Playground</Typography>
        <Typography variant="body1">Storybook controls apply to this component</Typography>
        <FormControlLabel control={<Checkbox {...args} />} label="Label" />
      </Container>
    </>,
  args: {}
}`,...(D=(w=m.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var _,R,G;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => {
    const [checked, setChecked] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);
    return <Checkbox {...args} checked={checked} onChange={handleChange} inputProps={{
      'aria-label': 'controlled'
    }} />;
  },
  args: {}
}`,...(G=(R=u.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var M,B,N;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(B=b.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var z,A,O;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => <>
      <PageHeader headerText="Form Group Checkboxes" breadcrumbs={{
      active: 'This page'
    }} />
      <Container>
        <Typography variant="h2" marginTop="1rem">
          Examples
        </Typography>
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

        <Typography variant="h2">Playground</Typography>
        <Typography variant="body1">Storybook controls apply to this component</Typography>

        <FormControl sx={{
        m: 3
      }} component="fieldset" variant="standard" required={args.required}>
          <FormLabel component="legend">Horizontal Checkbox</FormLabel>
          <FormGroup row>
            <FormControlLabel control={<Checkbox {...args} />} label="Label" />
          </FormGroup>
        </FormControl>
      </Container>
    </>,
  args: {
    color: 'primary'
  }
}`,...(O=(A=y.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const Eo=["_Checkbox","_CustomCheckbox","_LabeledCheckbox","_ControlledCheckbox","_IndeterminateCheckbox","_FormGroupCheckbox"];export{p as _Checkbox,u as _ControlledCheckbox,h as _CustomCheckbox,y as _FormGroupCheckbox,b as _IndeterminateCheckbox,m as _LabeledCheckbox,Eo as __namedExportsOrder,So as default};
//# sourceMappingURL=Checkbox.stories-e3ee8ada.js.map
