import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{r as k}from"./index-DcWiA9TO.js";import{T as r}from"./index-Bssefeeu.js";import{q as c,g as i}from"./index-BDqO7SwG.js";import{C as F}from"./Checkbox-DPndP3iH.js";import{C as x}from"./Container-7wpQgvnn.js";import{F as n}from"./FormControlLabel-CImDabQe.js";import{B as R}from"./Box-DR5TX31P.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Typography-Dw3TlP36.js";import"./generateUtilityClass-DELP8s2G.js";import"./identifier-CenlGZaM.js";import"./index-BKNdG2lN.js";import"./extendSxProp-w61GJfY-.js";import"./DefaultPropsProvider-LCKMq1Iv.js";import"./useTheme-DwYC2ms6.js";import"./emotion-react.browser.esm-BKUJyPAt.js";import"./memoTheme-CIpOTVoB.js";import"./styled-wZqJTO_n.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-duJ5YrlI.js";import"./faUser-CAcveCor.js";import"./SvgIcon-DfAk99tL.js";import"./SwitchBase-CHDa-0k7.js";import"./useFormControl-68oiojFJ.js";import"./useControlled-WdbyInBW.js";import"./ButtonBase-Ctwr4_Dd.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./useForkRef-BVrIj09m.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-BzSwLqYD.js";import"./styled-CIC6PLSI.js";import"./useThemeProps-BAwiOWAz.js";import"./formControlState-Dq1zat_P.js";import"./useSlot-CaH4cQiJ.js";import"./resolveComponentProps-D4XT56l6.js";const a=k.forwardRef((o,t)=>e.jsx(F,{...o,ref:t,size:"medium"}));try{a.displayName="Checkbox",a.__docgenInfo={description:"",displayName:"Checkbox",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CheckboxClasses>"}},onChange:{defaultValue:null,description:"Callback fired when the state is changed.\n@param event The event source of the callback.\nYou can pull out the new checked state by accessing `event.target.checked` (boolean).",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, checked: boolean) => void"}},defaultChecked:{defaultValue:null,description:"The default checked state. Use when the component is not controlled.",name:"defaultChecked",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The id of the `input` element.",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},color:{defaultValue:null,description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).`,name:"color",required:!1,type:{name:'"primary" | "error"'}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},value:{defaultValue:null,description:`The value of the component. The DOM API casts this to a string.
The browser uses "on" as the default value.`,name:"value",required:!1,type:{name:"unknown"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"<CheckBoxOutlineBlankIcon />"},description:"The icon to display when the component is unchecked.",name:"icon",required:!1,type:{name:"ReactNode"}},required:{defaultValue:{value:"false"},description:"If `true`, the `input` element is required.",name:"required",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},inputProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},edge:{defaultValue:{value:"false"},description:`If given, uses a negative margin to counteract the padding on one
side (this is often helpful for aligning the left or right
side of the icon with content above or below, without ruining the border
size and shape).`,name:"edge",required:!1,type:{name:'false | "start" | "end"'}},checked:{defaultValue:null,description:"If `true`, the component is checked.",name:"checked",required:!1,type:{name:"boolean"}},checkedIcon:{defaultValue:{value:"<CheckBoxIcon />"},description:"The icon to display when the component is checked.",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},indeterminate:{defaultValue:{value:"false"},description:"If `true`, the component appears indeterminate.\nThis does not set the native input element to indeterminate due\nto inconsistent behavior across browsers.\nHowever, we set a `data-indeterminate` attribute on the `input`.",name:"indeterminate",required:!1,type:{name:"boolean"}},indeterminateIcon:{defaultValue:{value:"<IndeterminateCheckBoxIcon />"},description:"The icon to display when the component is indeterminate.",name:"indeterminateIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const Te={title:"Form Components/Checkbox/Checkbox",component:a,tags:["autodocs"],argTypes:{readOnly:{table:{disable:!0}}}},d={render:o=>e.jsxs(x,{children:[e.jsx(r,{variant:"h1",marginTop:"1rem",children:"Examples"}),e.jsx(r,{variant:"body1",children:"Storybook controls do not apply to these"}),e.jsx(a,{defaultChecked:!0,inputProps:{"aria-label":"Default Checked example"}}),e.jsx(a,{inputProps:{"aria-label":"Default Unchecked example"}}),e.jsx(a,{inputProps:{"aria-label":"Disabled example"},disabled:!0}),e.jsx(a,{inputProps:{"aria-label":"Disabled Checked example"},disabled:!0,checked:!0}),e.jsx(r,{variant:"h1",children:"Playground"}),e.jsx(r,{variant:"body1",children:"Storybook controls apply to this component"}),e.jsx(a,{...o})]}),args:{color:"primary",inputProps:{"aria-label":"Playground example"}}},p={render:o=>e.jsxs(x,{children:[e.jsx(r,{variant:"h1",sx:{marginTop:"1rem"},children:"Examples"}),e.jsx(r,{variant:"body1",children:"Storybook controls do not apply to these"}),e.jsx(a,{defaultChecked:!0,inputProps:{"aria-label":"Default Checked example"},color:"error",icon:e.jsx(i,{}),checkedIcon:e.jsx(c,{})}),e.jsx(a,{inputProps:{"aria-label":"Default Unchecked example"},color:"error",icon:e.jsx(i,{}),checkedIcon:e.jsx(c,{})}),e.jsx(a,{disabled:!0,inputProps:{"aria-label":"Disabled example"},color:"error",icon:e.jsx(i,{}),checkedIcon:e.jsx(c,{})}),e.jsx(a,{disabled:!0,checked:!0,inputProps:{"aria-label":"Disabled Checked example"},color:"error",icon:e.jsx(i,{}),checkedIcon:e.jsx(c,{})}),e.jsx(r,{variant:"h1",children:"Playground"}),e.jsx(r,{variant:"body1",children:"Storybook controls apply to this component"}),e.jsx(a,{...o})]}),args:{color:"error",icon:e.jsx(i,{}),checkedIcon:e.jsx(c,{}),inputProps:{"aria-label":"Playground example"}}},h={render:o=>e.jsxs(x,{children:[e.jsx(r,{variant:"h1",sx:{marginTop:"1rem"},children:"Examples"}),e.jsx(r,{variant:"body1",children:"Storybook controls do not apply to these"}),e.jsx(n,{control:e.jsx(a,{defaultChecked:!0}),label:"Label"}),e.jsx(n,{required:!0,control:e.jsx(a,{}),label:"Required"}),e.jsx(n,{control:e.jsx(a,{disabled:!0}),label:"Disabled"}),e.jsx(r,{variant:"h1",children:"Playground"}),e.jsx(r,{variant:"body1",children:"Storybook controls apply to this component"}),e.jsx(n,{control:e.jsx(a,{...o}),label:"Label"})]}),args:{}},u={render:o=>{const[t,s]=k.useState(!1),b=y=>s(y.target.checked);return e.jsx(a,{...o,checked:t,onChange:b,inputProps:{"aria-label":"controlled"}})},args:{}},m={render:o=>{const[t,s]=k.useState([!0,!1]),b=l=>{s([l.target.checked,l.target.checked])},y=l=>{s([l.target.checked,t[1]])},D=l=>{s([t[0],l.target.checked])},_=e.jsxs(R,{sx:{display:"flex",flexDirection:"column",ml:3},children:[e.jsx(n,{label:"Child 1",control:e.jsx(a,{checked:t[0],onChange:y})}),e.jsx(n,{label:"Child 2",control:e.jsx(a,{checked:t[1],onChange:D})})]});return e.jsxs("div",{children:[e.jsx(n,{label:"Parent",control:e.jsx(a,{...o,checked:t[0]&&t[1],indeterminate:t[0]!==t[1],onChange:b})}),_]})},args:{}};var f,g,C;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(q=(P=h.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var E,V,S;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => {
    const [checked, setChecked] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);
    return <Checkbox {...args} checked={checked} onChange={handleChange} inputProps={{
      'aria-label': 'controlled'
    }} />;
  },
  args: {}
}`,...(S=(V=u.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var w,L,H;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(H=(L=m.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};const Ie=["_Checkbox","_CustomCheckbox","_LabeledCheckbox","_ControlledCheckbox","_IndeterminateCheckbox"];export{d as _Checkbox,u as _ControlledCheckbox,p as _CustomCheckbox,m as _IndeterminateCheckbox,h as _LabeledCheckbox,Ie as __namedExportsOrder,Te as default};
