import{j as r,a as e,F as x}from"./jsx-runtime-a3bcee63.js";import{r as F}from"./index-570b25c1.js";import{d as l}from"./index-a5c9266e.js";import{T as t}from"./index-96688515.js";import{p as h,q as m}from"./index-cb4dbded.js";import{D as Y}from"./index-507c6617.js";import{B as $}from"./index-b0be4767.js";import{L as J}from"./index-cb507f8c.js";import{B as K}from"./index-5496e90f.js";import{F as Q}from"./index-158332cd.js";import{G as i}from"./Grid-af1a3ff2.js";import{C as u}from"./Container-a1530f69.js";import{C as X}from"./Checkbox-837bf21d.js";import{B as Z}from"./Box-0b96d669.js";import{F as L,M as I}from"./FormLabel-16418a49.js";import{F as P}from"./FormGroup-7fc7ab9c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-9681c8ff.js";import"./FormControlLabel-625d44f3.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-7846e708.js";import"./useThemeProps-018254e6.js";import"./generateUtilityClasses-70c60a0e.js";import"./utils-3d35716f.js";import"./Typography-f61e077a.js";import"./extendSxProp-9115426f.js";import"./Stack-8a417692.js";import"./styled-11d1647d.js";import"./FormHelperText-ae2a8f0e.js";import"./OutlinedInput-bd5ed4eb.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./index-8a077077.js";import"./useForkRef-153a0a89.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./useEnhancedEffect-460150e6.js";import"./debounce-517eeb3c.js";import"./GlobalStyles-7ba993a7.js";import"./emotion-react.browser.esm-474fda6d.js";import"./Select-be273af1.js";import"./react-is.production.min-a192e302.js";import"./Menu-932c384c.js";import"./useTheme-76c02901.js";import"./Popover-277c5654.js";import"./Modal-8fa896b2.js";import"./Backdrop-49825a13.js";import"./utils-1ac07bae.js";import"./TransitionGroupContext-c71596b3.js";import"./useEventCallback-e1b9edb9.js";import"./useSlotProps-f4be827f.js";import"./createChainedFunction-0bab83cf.js";import"./Grow-e87a736b.js";import"./Paper-722ac472.js";import"./useId-6f4bfce0.js";import"./useControlled-9b1271e0.js";import"./createSvgIcon-60c2b2ae.js";import"./SvgIcon-951d7748.js";import"./Divider-fcaf2f3a.js";import"./dividerClasses-b19abef8.js";import"./faCircleArrowRight-e7789e56.js";import"./faMagnifyingGlass-482fd726.js";import"./Breadcrumbs-b153b1d7.js";import"./ButtonBase-d80b4855.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./Link-a674eae6.js";import"./Button-d84dd9a0.js";import"./Tooltip-c716d13a.js";import"./IconButton-de653fbd.js";import"./LoadingButton-7f26c21d.js";import"./extends-90dea224.js";import"./CircularProgress-83597315.js";import"./index-aa1f890f.js";import"./index-7c0e1f2b.js";import"./_baseFor-53bad3ef.js";import"./_initCloneObject-31384e14.js";import"./isPlainObject-272efb33.js";import"./ToggleButtonGroup-303ca8bb.js";import"./ToggleButton-7fcf6cce.js";import"./index-9e86b6d5.js";import"./TextField-785bc636.js";import"./index.esm-d81a0d8c.js";import"./isMuiElement-6907f060.js";var v=({breadcrumbs:a,buttons:n,feedback:c=!1,headerText:p,helpLink:d})=>r(i,{component:u,container:!0,direction:"column",marginTop:"1rem",marginBottom:"1.25rem",children:[a||d?r(i,{direction:"row",item:!0,container:!0,justifyContent:"space-between",marginBottom:4,children:[a&&e(i,{item:!0,children:e($,{...a})}),d&&e(i,{item:!0,marginLeft:2,children:r(t,{variant:"body1",children:["Need help? ",e(J,{href:d,target:"_blank",children:"Watch a demo"})]})})]}):null,r(i,{direction:"row",item:!0,container:!0,marginBottom:2,alignItems:"center",justifyContent:"space-between",children:[e(i,{item:!0,children:e(t,{variant:"h1",children:p})}),r(i,{item:!0,container:!0,width:"auto",children:[n&&n.length>0&&(n==null?void 0:n.map(T=>e(i,{item:!0,marginLeft:2,height:"100%",children:e(K,{...T,size:"large",color:"secondary"})}))),c?e(i,{item:!0,marginLeft:2,height:"100%",children:e(Q,{appName:p})}):null]})]}),e(Y,{})]});const o=F.forwardRef((a,n)=>e(X,{...a,ref:n,size:"medium"}));try{o.displayName="Checkbox",o.__docgenInfo={description:"",displayName:"Checkbox",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CheckboxClasses>"}},defaultChecked:{defaultValue:null,description:"The default checked state. Use when the component is not controlled.",name:"defaultChecked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The id of the `input` element.",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},color:{defaultValue:null,description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:'"error" | "primary"'}},onChange:{defaultValue:null,description:"Callback fired when the state is changed.\n@param event The event source of the callback.\nYou can pull out the new checked state by accessing `event.target.checked` (boolean).",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, checked: boolean) => void"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},icon:{defaultValue:{value:"<CheckBoxOutlineBlankIcon />"},description:"The icon to display when the component is unchecked.",name:"icon",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},edge:{defaultValue:{value:"false"},description:`If given, uses a negative margin to counteract the padding on one
side (this is often helpful for aligning the left or right
side of the icon with content above or below, without ruining the border
size and shape).`,name:"edge",required:!1,type:{name:'false | "end" | "start"'}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:`The value of the component. The DOM API casts this to a string.
The browser uses "on" as the default value.`,name:"value",required:!1,type:{name:"unknown"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"If `true`, the `input` element is required.",name:"required",required:!1,type:{name:"boolean"}},inputProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},checked:{defaultValue:null,description:"If `true`, the component is checked.",name:"checked",required:!1,type:{name:"boolean"}},checkedIcon:{defaultValue:{value:"<CheckBoxIcon />"},description:"The icon to display when the component is checked.",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},indeterminate:{defaultValue:{value:"false"},description:"If `true`, the component appears indeterminate.\nThis does not set the native input element to indeterminate due\nto inconsistent behavior across browsers.\nHowever, we set a `data-indeterminate` attribute on the `input`.",name:"indeterminate",required:!1,type:{name:"boolean"}},indeterminateIcon:{defaultValue:{value:"<IndeterminateCheckBoxIcon />"},description:"The icon to display when the component is indeterminate.",name:"indeterminateIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const So={title:"Components/Checkbox/Checkbox",component:o,tags:["autodocs"],argTypes:{readOnly:{table:{disable:!0}}}},b={render:a=>r(x,{children:[e(v,{headerText:"Checkboxes",breadcrumbs:{active:"This page"}}),r(u,{children:[e(t,{variant:"h2",marginTop:"1rem",children:"Examples"}),e(t,{variant:"body1",children:"Storybook controls do not apply to these"}),e(o,{defaultChecked:!0,inputProps:{"aria-label":"Default Checked example"}}),e(o,{inputProps:{"aria-label":"Default Unchecked example"}}),e(o,{inputProps:{"aria-label":"Disabled example"},disabled:!0}),e(o,{inputProps:{"aria-label":"Disabled Checked example"},disabled:!0,checked:!0}),e(t,{variant:"h2",children:"Playground"}),e(t,{variant:"body1",children:"Storybook controls apply to this component"}),e(o,{...a})]})]}),args:{color:"primary",inputProps:{"aria-label":"Playground example"}}},y={render:a=>r(x,{children:[e(v,{headerText:"Custom Checkboxes",breadcrumbs:{active:"This page"}}),r(u,{children:[e(t,{variant:"h2",marginTop:"1rem",children:"Examples"}),e(t,{variant:"body1",children:"Storybook controls do not apply to these"}),e(o,{defaultChecked:!0,inputProps:{"aria-label":"Default Checked example"},color:"error",icon:e(h,{}),checkedIcon:e(m,{})}),e(o,{inputProps:{"aria-label":"Default Unchecked example"},color:"error",icon:e(h,{}),checkedIcon:e(m,{})}),e(o,{disabled:!0,inputProps:{"aria-label":"Disabled example"},color:"error",icon:e(h,{}),checkedIcon:e(m,{})}),e(o,{disabled:!0,checked:!0,inputProps:{"aria-label":"Disabled Checked example"},color:"error",icon:e(h,{}),checkedIcon:e(m,{})}),e(t,{variant:"h2",children:"Playground"}),e(t,{variant:"body1",children:"Storybook controls apply to this component"}),e(o,{...a})]})]}),args:{color:"error",icon:e(h,{}),checkedIcon:e(m,{}),inputProps:{"aria-label":"Playground example"}}},g={render:a=>r(x,{children:[e(v,{headerText:"Labeled Checkboxes",breadcrumbs:{active:"This page"}}),r(u,{children:[e(t,{variant:"h2",marginTop:"1rem",children:"Examples"}),e(t,{variant:"body1",children:"Storybook controls do not apply to these"}),e(l,{control:e(o,{defaultChecked:!0}),label:"Label"}),e(l,{required:!0,control:e(o,{}),label:"Required"}),e(l,{control:e(o,{disabled:!0}),label:"Disabled"}),e(t,{variant:"h2",children:"Playground"}),e(t,{variant:"body1",children:"Storybook controls apply to this component"}),e(l,{control:e(o,{...a}),label:"Label"})]})]}),args:{}},k={render:a=>{const[n,c]=F.useState(!1);return e(o,{...a,checked:n,onChange:d=>c(d.target.checked),inputProps:{"aria-label":"controlled"}})},args:{}},C={render:a=>{const[n,c]=F.useState([!0,!1]),p=s=>{c([s.target.checked,s.target.checked])},d=s=>{c([s.target.checked,n[1]])},T=s=>{c([n[0],s.target.checked])},W=r(Z,{sx:{display:"flex",flexDirection:"column",ml:3},children:[e(l,{label:"Child 1",control:e(o,{checked:n[0],onChange:d})}),e(l,{label:"Child 2",control:e(o,{checked:n[1],onChange:T})})]});return r("div",{children:[e(l,{label:"Parent",control:e(o,{...a,checked:n[0]&&n[1],indeterminate:n[0]!==n[1],onChange:p})}),W]})},args:{}},f={render:a=>r(x,{children:[e(v,{headerText:"Form Group Checkboxes",breadcrumbs:{active:"This page"}}),r(u,{children:[e(t,{variant:"h2",marginTop:"1rem",children:"Examples"}),e(t,{variant:"body1",children:"Storybook controls do not apply to these"}),r(L,{sx:{m:3},component:"fieldset",variant:"standard",required:!0,children:[e(I,{component:"legend",children:"Vertical Checkboxes"}),r(P,{children:[e(l,{control:e(o,{defaultChecked:!0}),label:"Label"}),e(l,{control:e(o,{}),label:"Label 2"}),e(l,{disabled:!0,control:e(o,{}),label:"Label 3"})]})]}),r(L,{sx:{m:3},component:"fieldset",variant:"standard",required:!0,children:[e(I,{component:"legend",children:"Horizontal Checkboxes"}),r(P,{row:!0,children:[e(l,{control:e(o,{defaultChecked:!0}),label:"Label"}),e(l,{control:e(o,{}),label:"Label 2"}),e(l,{disabled:!0,control:e(o,{}),label:"Label 3"})]})]}),e(t,{variant:"h2",children:"Playground"}),e(t,{variant:"body1",children:"Storybook controls apply to this component"}),r(L,{sx:{m:3},component:"fieldset",variant:"standard",required:a.required,children:[e(I,{component:"legend",children:"Horizontal Checkbox"}),e(P,{row:!0,children:e(l,{control:e(o,{...a}),label:"Label"})})]})]})]}),args:{color:"primary"}};var q,w,V;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(V=(w=b.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var S,E,H;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(H=(E=y.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var D,_,B;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(B=(_=g.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var G,R,M;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => {
    const [checked, setChecked] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);
    return <Checkbox {...args} checked={checked} onChange={handleChange} inputProps={{
      'aria-label': 'controlled'
    }} />;
  },
  args: {}
}`,...(M=(R=k.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var N,z,A;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(A=(z=C.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var O,U,j;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(U=f.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};const Eo=["_Checkbox","_CustomCheckbox","_LabeledCheckbox","_ControlledCheckbox","_IndeterminateCheckbox","_FormGroupCheckbox"];export{b as _Checkbox,k as _ControlledCheckbox,y as _CustomCheckbox,f as _FormGroupCheckbox,C as _IndeterminateCheckbox,g as _LabeledCheckbox,Eo as __namedExportsOrder,So as default};
//# sourceMappingURL=Checkbox.stories-7fd06693.js.map
