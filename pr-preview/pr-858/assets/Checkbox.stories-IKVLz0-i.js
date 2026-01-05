import{r as f,j as e}from"./iframe-Tg5E9Q0V.js";import{T as r}from"./index-CAbAbsxX.js";import{q as i,h as c}from"./index-D8INjewo.js";import{C as R}from"./Checkbox-dyKkKnHS.js";import{C as k}from"./Container-f8pbHfI3.js";import{F as n}from"./FormControlLabel-_Cs-jF7x.js";import{B as F}from"./Box-BsChB_Op.js";import"./preload-helper-Dp1pzeXC.js";import"./Typography-BcRYJcKe.js";import"./memoTheme-CSHka9uN.js";import"./styled-CkQGWiXZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-of2VfktU.js";import"./SwitchBase-dnO5HhvT.js";import"./useFormControl-r-M3yZ1X.js";import"./useSlot-DWYsP92Q.js";import"./mergeSlotProps-BNNCTn4N.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-B_DO_dbH.js";import"./useControlled-BcdiiQVx.js";import"./ButtonBase-CCTLTRt8.js";import"./useTimeout-CYbYxV9r.js";import"./TransitionGroupContext-cQD0tQZD.js";import"./useEventCallback-pJVTgRiD.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-BlU2wZ3P.js";import"./mergeSlotProps-D8IAAijA.js";import"./styled-CQuv9sTF.js";import"./formControlState-Dq1zat_P.js";const a=f.forwardRef((o,t)=>e.jsx(R,{...o,ref:t,size:"medium"}));try{a.displayName="Checkbox",a.__docgenInfo={description:"",displayName:"Checkbox",props:{icon:{defaultValue:{value:"<CheckBoxOutlineBlankIcon />"},description:"The icon to display when the component is unchecked.",name:"icon",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CheckboxClasses>"}},color:{defaultValue:null,description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).`,name:"color",required:!1,type:{name:'"primary" | "error"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},id:{defaultValue:null,description:"The id of the `input` element.",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Callback fired when the state is changed.\n@param event The event source of the callback.\nYou can pull out the new checked state by accessing `event.target.checked` (boolean).",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, checked: boolean) => void"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`The value of the component. The DOM API casts this to a string.
The browser uses "on" as the default value.`,name:"value",required:!1,type:{name:"unknown"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ root?: SlotProps<ElementType<SwitchBaseProps, keyof IntrinsicElements>, CheckboxRootSlotPropsOverrides, CheckboxOwnerState>; input?: SlotProps<...>; }"}},defaultChecked:{defaultValue:null,description:"The default checked state. Use when the component is not controlled.",name:"defaultChecked",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<CheckboxSlots>"}},required:{defaultValue:{value:"false"},description:"If `true`, the `input` element is required.",name:"required",required:!1,type:{name:"boolean"}},inputProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.\n@deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.\n@deprecated Use `slotProps.input.ref` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"inputRef",required:!1,type:{name:"Ref<any>"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},checkedIcon:{defaultValue:{value:"<CheckBoxIcon />"},description:"The icon to display when the component is checked.",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},checked:{defaultValue:null,description:"If `true`, the component is checked.",name:"checked",required:!1,type:{name:"boolean"}},edge:{defaultValue:{value:"false"},description:`If given, uses a negative margin to counteract the padding on one
side (this is often helpful for aligning the left or right
side of the icon with content above or below, without ruining the border
size and shape).`,name:"edge",required:!1,type:{name:'false | "end" | "start"'}},indeterminate:{defaultValue:{value:"false"},description:"If `true`, the component appears indeterminate.\nThis does not set the native input element to indeterminate due\nto inconsistent behavior across browsers.\nHowever, we set a `data-indeterminate` attribute on the `input`.",name:"indeterminate",required:!1,type:{name:"boolean"}},indeterminateIcon:{defaultValue:{value:"<IndeterminateCheckBoxIcon />"},description:"The icon to display when the component is indeterminate.",name:"indeterminateIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const fe={title:"Form Components/Checkbox/Checkbox",component:a,tags:["autodocs"],argTypes:{readOnly:{table:{disable:!0}}}},d={render:o=>e.jsxs(k,{children:[e.jsx(r,{variant:"h1",marginTop:"1rem",children:"Examples"}),e.jsx(r,{variant:"body1",children:"Storybook controls do not apply to these"}),e.jsx(a,{defaultChecked:!0,inputProps:{"aria-label":"Default Checked example"}}),e.jsx(a,{inputProps:{"aria-label":"Default Unchecked example"}}),e.jsx(a,{inputProps:{"aria-label":"Disabled example"},disabled:!0}),e.jsx(a,{inputProps:{"aria-label":"Disabled Checked example"},disabled:!0,checked:!0}),e.jsx(r,{variant:"h1",children:"Playground"}),e.jsx(r,{variant:"body1",children:"Storybook controls apply to this component"}),e.jsx(a,{...o})]}),args:{color:"primary",inputProps:{"aria-label":"Playground example"}}},p={render:o=>e.jsxs(k,{children:[e.jsx(r,{variant:"h1",sx:{marginTop:"1rem"},children:"Examples"}),e.jsx(r,{variant:"body1",children:"Storybook controls do not apply to these"}),e.jsx(a,{defaultChecked:!0,inputProps:{"aria-label":"Default Checked example"},color:"error",icon:e.jsx(c,{}),checkedIcon:e.jsx(i,{})}),e.jsx(a,{inputProps:{"aria-label":"Default Unchecked example"},color:"error",icon:e.jsx(c,{}),checkedIcon:e.jsx(i,{})}),e.jsx(a,{disabled:!0,inputProps:{"aria-label":"Disabled example"},color:"error",icon:e.jsx(c,{}),checkedIcon:e.jsx(i,{})}),e.jsx(a,{disabled:!0,checked:!0,inputProps:{"aria-label":"Disabled Checked example"},color:"error",icon:e.jsx(c,{}),checkedIcon:e.jsx(i,{})}),e.jsx(r,{variant:"h1",children:"Playground"}),e.jsx(r,{variant:"body1",children:"Storybook controls apply to this component"}),e.jsx(a,{...o})]}),args:{color:"error",icon:e.jsx(c,{}),checkedIcon:e.jsx(i,{}),inputProps:{"aria-label":"Playground example"}}},h={render:o=>e.jsxs(k,{children:[e.jsx(r,{variant:"h1",sx:{marginTop:"1rem"},children:"Examples"}),e.jsx(r,{variant:"body1",children:"Storybook controls do not apply to these"}),e.jsx(n,{control:e.jsx(a,{defaultChecked:!0}),label:"Label"}),e.jsx(n,{required:!0,control:e.jsx(a,{}),label:"Required"}),e.jsx(n,{control:e.jsx(a,{disabled:!0}),label:"Disabled"}),e.jsx(r,{variant:"h1",children:"Playground"}),e.jsx(r,{variant:"body1",children:"Storybook controls apply to this component"}),e.jsx(n,{control:e.jsx(a,{...o}),label:"Label"})]}),args:{}},u={render:o=>{const[t,s]=f.useState(!1),b=y=>s(y.target.checked);return e.jsx(a,{...o,checked:t,onChange:b,inputProps:{"aria-label":"controlled"}})},args:{}},m={render:o=>{const[t,s]=f.useState([!0,!1]),b=l=>{s([l.target.checked,l.target.checked])},y=l=>{s([l.target.checked,t[1]])},D=l=>{s([t[0],l.target.checked])},_=e.jsxs(F,{sx:{display:"flex",flexDirection:"column",ml:3},children:[e.jsx(n,{label:"Child 1",control:e.jsx(a,{checked:t[0],onChange:y})}),e.jsx(n,{label:"Child 2",control:e.jsx(a,{checked:t[1],onChange:D})})]});return e.jsxs("div",{children:[e.jsx(n,{label:"Parent",control:e.jsx(a,{...o,checked:t[0]&&t[1],indeterminate:t[0]!==t[1],onChange:b})}),_]})},args:{}};var x,g,C;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => <Container>
      <Typography variant="h1" marginTop="1rem">
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
      <Typography variant="h1">Playground</Typography>
      <Typography variant="body1">Storybook controls apply to this component</Typography>
      <Checkbox {...args} />
    </Container>,
  args: {
    color: 'primary',
    inputProps: {
      'aria-label': 'Playground example'
    }
  }
}`,...(C=(g=d.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var v,T,I;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => <Container>
      <Typography variant="h1" sx={{
      marginTop: '1rem'
    }}>
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
      <Typography variant="h1">Playground</Typography>
      <Typography variant="body1">Storybook controls apply to this component</Typography>
      <Checkbox {...args} />
    </Container>,
  args: {
    color: 'error',
    icon: <HeartEmptyIcon />,
    checkedIcon: <HeartIcon />,
    inputProps: {
      'aria-label': 'Playground example'
    }
  }
}`,...(I=(T=p.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var j,P,q;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => <Container>
      <Typography variant="h1" sx={{
      marginTop: '1rem'
    }}>
        Examples
      </Typography>
      <Typography variant="body1">Storybook controls do not apply to these</Typography>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox />} label="Required" />
      <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
      <Typography variant="h1">Playground</Typography>
      <Typography variant="body1">Storybook controls apply to this component</Typography>
      <FormControlLabel control={<Checkbox {...args} />} label="Label" />
    </Container>,
  args: {}
}`,...(q=(P=h.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var S,E,V;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => {
    const [checked, setChecked] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);
    return <Checkbox {...args} checked={checked} onChange={handleChange} inputProps={{
      'aria-label': 'controlled'
    }} />;
  },
  args: {}
}`,...(V=(E=u.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var w,L,H;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(H=(L=m.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};const ke=["_Checkbox","_CustomCheckbox","_LabeledCheckbox","_ControlledCheckbox","_IndeterminateCheckbox"];export{d as _Checkbox,u as _ControlledCheckbox,p as _CustomCheckbox,m as _IndeterminateCheckbox,h as _LabeledCheckbox,ke as __namedExportsOrder,fe as default};
