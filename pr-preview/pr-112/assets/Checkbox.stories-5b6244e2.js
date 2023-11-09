import{a,j as e,F as x}from"./jsx-runtime-390e5fc8.js";import{r as P}from"./index-570b25c1.js";import{b as l}from"./index-b905a91a.js";import{T as t}from"./index-0733667c.js";import{k as h,l as m}from"./index-c91bacb5.js";import{D as Y}from"./index-0c942154.js";import{B as $}from"./index-185d376d.js";import{L as J}from"./index-6c4f7381.js";import{B as K}from"./index-4f46ff89.js";import{G as i}from"./Grid-51c21610.js";import{C as u}from"./Container-6934edbe.js";import{C as Q}from"./Checkbox-de5c3cff.js";import{B as X}from"./Box-ca2a0b09.js";import{F as T,M as L}from"./FormLabel-26dfe09c.js";import{F as I}from"./FormGroup-2da996ba.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-9681c8ff.js";import"./FormControlLabel-eda9707b.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-7846e708.js";import"./useThemeProps-018254e6.js";import"./generateUtilityClasses-70c60a0e.js";import"./utils-3d35716f.js";import"./Typography-8f39b1cb.js";import"./extendSxProp-9115426f.js";import"./Stack-caeba03e.js";import"./styled-11d1647d.js";import"./FormHelperText-eb61de0b.js";import"./OutlinedInput-5c4aca78.js";import"./objectWithoutPropertiesLoose-830c72af.js";import"./index-8a077077.js";import"./useForkRef-153a0a89.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./useEnhancedEffect-460150e6.js";import"./debounce-517eeb3c.js";import"./GlobalStyles-bc6ce36c.js";import"./emotion-react.browser.esm-474fda6d.js";import"./Divider-7fb78c99.js";import"./dividerClasses-b19abef8.js";import"./faCircleArrowRight-ecf82256.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-b52b22c3.js";import"./Breadcrumbs-d7963cd1.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-359b5f59.js";import"./ButtonBase-f1b77b46.js";import"./TransitionGroupContext-c71596b3.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useSlotProps-4e64ffeb.js";import"./Link-0fc2a91d.js";import"./Button-676c50e4.js";import"./Tooltip-e75628f1.js";import"./useTheme-76c02901.js";import"./Grow-f5561129.js";import"./utils-1ac07bae.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-de7b27e6.js";import"./LoadingButton-23ede12c.js";import"./extends-90dea224.js";import"./CircularProgress-924892c6.js";import"./isMuiElement-6907f060.js";var v=({breadcrumbs:r,buttons:n,headerText:c,helpLink:d})=>a(i,{component:u,container:!0,direction:"column",marginTop:"1rem",marginBottom:"1.25rem",children:[r||d?a(i,{direction:"row",item:!0,container:!0,justifyContent:"space-between",marginBottom:4,children:[r&&e(i,{item:!0,children:e($,{...r})}),d&&e(i,{item:!0,marginLeft:2,children:a(t,{variant:"body1",children:["Need help? ",e(J,{href:d,target:"_blank",children:"Watch a demo"})]})})]}):null,a(i,{direction:"row",item:!0,container:!0,marginBottom:2,alignItems:"center",justifyContent:"space-between",children:[e(i,{item:!0,children:e(t,{variant:"h1",children:c})}),n&&n.length>0&&e(i,{item:!0,container:!0,width:"auto",children:n==null?void 0:n.map(p=>e(i,{item:!0,marginLeft:2,height:"100%",children:e(K,{...p,size:"large",color:"secondary"})}))})]}),e(Y,{})]});const o=P.forwardRef((r,n)=>e(Q,{...r,ref:n,size:"medium"}));try{o.displayName="Checkbox",o.__docgenInfo={description:"",displayName:"Checkbox",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CheckboxClasses>"}},color:{defaultValue:null,description:`The color of the component.
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
The browser uses "on" as the default value.`,name:"value",required:!1,type:{name:"unknown"}},checkedIcon:{defaultValue:{value:"<CheckBoxIcon />"},description:"The icon to display when the component is checked.",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},checked:{defaultValue:null,description:"If `true`, the component is checked.",name:"checked",required:!1,type:{name:"boolean"}},inputProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"If `true`, the `input` element is required.",name:"required",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:{value:"false"},description:"If `true`, the component appears indeterminate.\nThis does not set the native input element to indeterminate due\nto inconsistent behavior across browsers.\nHowever, we set a `data-indeterminate` attribute on the `input`.",name:"indeterminate",required:!1,type:{name:"boolean"}},indeterminateIcon:{defaultValue:{value:"<IndeterminateCheckBoxIcon />"},description:"The icon to display when the component is indeterminate.",name:"indeterminateIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const po={title:"Components/Checkbox/Checkbox",component:o,tags:["autodocs"],argTypes:{readOnly:{table:{disable:!0}}}},b={render:r=>a(x,{children:[e(v,{headerText:"Checkboxes",breadcrumbs:{active:"This page"}}),a(u,{children:[e(t,{variant:"h2",marginTop:"1rem",children:"Examples"}),e(t,{variant:"body1",children:"Storybook controls do not apply to these"}),e(o,{defaultChecked:!0,inputProps:{"aria-label":"Default Checked example"}}),e(o,{inputProps:{"aria-label":"Default Unchecked example"}}),e(o,{inputProps:{"aria-label":"Disabled example"},disabled:!0}),e(o,{inputProps:{"aria-label":"Disabled Checked example"},disabled:!0,checked:!0}),e(t,{variant:"h2",children:"Playground"}),e(t,{variant:"body1",children:"Storybook controls apply to this component"}),e(o,{...r})]})]}),args:{color:"primary",inputProps:{"aria-label":"Playground example"}}},y={render:r=>a(x,{children:[e(v,{headerText:"Custom Checkboxes",breadcrumbs:{active:"This page"}}),a(u,{children:[e(t,{variant:"h2",marginTop:"1rem",children:"Examples"}),e(t,{variant:"body1",children:"Storybook controls do not apply to these"}),e(o,{defaultChecked:!0,inputProps:{"aria-label":"Default Checked example"},color:"error",icon:e(h,{}),checkedIcon:e(m,{})}),e(o,{inputProps:{"aria-label":"Default Unchecked example"},color:"error",icon:e(h,{}),checkedIcon:e(m,{})}),e(o,{disabled:!0,inputProps:{"aria-label":"Disabled example"},color:"error",icon:e(h,{}),checkedIcon:e(m,{})}),e(o,{disabled:!0,checked:!0,inputProps:{"aria-label":"Disabled Checked example"},color:"error",icon:e(h,{}),checkedIcon:e(m,{})}),e(t,{variant:"h2",children:"Playground"}),e(t,{variant:"body1",children:"Storybook controls apply to this component"}),e(o,{...r})]})]}),args:{color:"error",icon:e(h,{}),checkedIcon:e(m,{}),inputProps:{"aria-label":"Playground example"}}},g={render:r=>a(x,{children:[e(v,{headerText:"Labeled Checkboxes",breadcrumbs:{active:"This page"}}),a(u,{children:[e(t,{variant:"h2",marginTop:"1rem",children:"Examples"}),e(t,{variant:"body1",children:"Storybook controls do not apply to these"}),e(l,{control:e(o,{defaultChecked:!0}),label:"Label"}),e(l,{required:!0,control:e(o,{}),label:"Required"}),e(l,{control:e(o,{disabled:!0}),label:"Disabled"}),e(t,{variant:"h2",children:"Playground"}),e(t,{variant:"body1",children:"Storybook controls apply to this component"}),e(l,{control:e(o,{...r}),label:"Label"})]})]}),args:{}},k={render:r=>{const[n,c]=P.useState(!1);return e(o,{...r,checked:n,onChange:p=>c(p.target.checked),inputProps:{"aria-label":"controlled"}})},args:{}},C={render:r=>{const[n,c]=P.useState([!0,!1]),d=s=>{c([s.target.checked,s.target.checked])},p=s=>{c([s.target.checked,n[1]])},j=s=>{c([n[0],s.target.checked])},W=a(X,{sx:{display:"flex",flexDirection:"column",ml:3},children:[e(l,{label:"Child 1",control:e(o,{checked:n[0],onChange:p})}),e(l,{label:"Child 2",control:e(o,{checked:n[1],onChange:j})})]});return a("div",{children:[e(l,{label:"Parent",control:e(o,{...r,checked:n[0]&&n[1],indeterminate:n[0]!==n[1],onChange:d})}),W]})},args:{}},f={render:r=>a(x,{children:[e(v,{headerText:"Form Group Checkboxes",breadcrumbs:{active:"This page"}}),a(u,{children:[e(t,{variant:"h2",marginTop:"1rem",children:"Examples"}),e(t,{variant:"body1",children:"Storybook controls do not apply to these"}),a(T,{sx:{m:3},component:"fieldset",variant:"standard",required:!0,children:[e(L,{component:"legend",children:"Vertical Checkboxes"}),a(I,{children:[e(l,{control:e(o,{defaultChecked:!0}),label:"Label"}),e(l,{control:e(o,{}),label:"Label 2"}),e(l,{disabled:!0,control:e(o,{}),label:"Label 3"})]})]}),a(T,{sx:{m:3},component:"fieldset",variant:"standard",required:!0,children:[e(L,{component:"legend",children:"Horizontal Checkboxes"}),a(I,{row:!0,children:[e(l,{control:e(o,{defaultChecked:!0}),label:"Label"}),e(l,{control:e(o,{}),label:"Label 2"}),e(l,{disabled:!0,control:e(o,{}),label:"Label 3"})]})]}),e(t,{variant:"h2",children:"Playground"}),e(t,{variant:"body1",children:"Storybook controls apply to this component"}),a(T,{sx:{m:3},component:"fieldset",variant:"standard",required:r.required,children:[e(L,{component:"legend",children:"Horizontal Checkbox"}),e(I,{row:!0,children:e(l,{control:e(o,{...r}),label:"Label"})})]})]})]}),args:{color:"primary"}};var F,q,w;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(w=(q=b.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var V,S,E;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(E=(S=y.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var H,D,_;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(_=(D=g.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var B,G,R;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => {
    const [checked, setChecked] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);
    return <Checkbox {...args} checked={checked} onChange={handleChange} inputProps={{
      'aria-label': 'controlled'
    }} />;
  },
  args: {}
}`,...(R=(G=k.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var M,N,z;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(z=(N=C.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var A,O,U;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(U=(O=f.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const ho=["_Checkbox","_CustomCheckbox","_LabeledCheckbox","_ControlledCheckbox","_IndeterminateCheckbox","_FormGroupCheckbox"];export{b as _Checkbox,k as _ControlledCheckbox,y as _CustomCheckbox,f as _FormGroupCheckbox,C as _IndeterminateCheckbox,g as _LabeledCheckbox,ho as __namedExportsOrder,po as default};
//# sourceMappingURL=Checkbox.stories-5b6244e2.js.map
