import{j as e,r as C}from"./iframe-DHkqGgbi.js";import{T as r}from"./Typography-BunlOy3h.js";import{H as s,a as p}from"./Actions-BhLIra-T.js";import{C as o}from"./Checkbox-SLnKfcRZ.js";import{C as y}from"./Container-CBjQYq55.js";import{B as j}from"./Box-DMMQfXcC.js";import{F as n}from"./FormControlLabel-DadtF2ZI.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-i96SYvKe.js";import"./memoTheme-vxEZSkJ8.js";import"./styled-BFLY3dn7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./FaSvgIcon-BtkjvlUV.js";import"./SvgIcon-D9Y7JiS_.js";import"./Checkbox-CuHdIdkj.js";import"./SwitchBase-BwOio7J8.js";import"./useFormControl-ZgfjO4em.js";import"./useSlot-CAeYipRU.js";import"./mergeSlotProps-Dp8H4ez1.js";import"./useForkRef-B4h6zx_x.js";import"./useControlled-DlDi1BKb.js";import"./ButtonBase-BwqJJF5q.js";import"./useTimeout-Bjfnw5AG.js";import"./TransitionGroupContext-3E4Xv_Lx.js";import"./useEventCallback-LtXdtY4h.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-BS4jmzRl.js";import"./mergeSlotProps-BNZZW_n2.js";import"./styled-HR_WeqBB.js";import"./formControlState-Dq1zat_P.js";const ee={title:"Form Components/Uncontrolled FormUtils/Checkbox",component:o,tags:["autodocs"],argTypes:{readOnly:{table:{disable:!0}}}},d={render:t=>e.jsxs(y,{children:[e.jsx(r,{variant:"h1",marginTop:"1rem",children:"Examples"}),e.jsx(r,{variant:"body1",children:"Storybook controls do not apply to these"}),e.jsx(o,{defaultChecked:!0,inputProps:{"aria-label":"Default Checked example"}}),e.jsx(o,{inputProps:{"aria-label":"Default Unchecked example"}}),e.jsx(o,{inputProps:{"aria-label":"Disabled example"},disabled:!0}),e.jsx(o,{inputProps:{"aria-label":"Disabled Checked example"},disabled:!0,checked:!0}),e.jsx(r,{variant:"h1",children:"Playground"}),e.jsx(r,{variant:"body1",children:"Storybook controls apply to this component"}),e.jsx(o,{...t})]}),args:{color:"primary",inputProps:{"aria-label":"Playground example"}}},h={render:t=>e.jsxs(y,{children:[e.jsx(r,{variant:"h1",sx:{marginTop:"1rem"},children:"Examples"}),e.jsx(r,{variant:"body1",children:"Storybook controls do not apply to these"}),e.jsx(o,{defaultChecked:!0,inputProps:{"aria-label":"Default Checked example"},color:"error",icon:e.jsx(p,{}),checkedIcon:e.jsx(s,{})}),e.jsx(o,{inputProps:{"aria-label":"Default Unchecked example"},color:"error",icon:e.jsx(p,{}),checkedIcon:e.jsx(s,{})}),e.jsx(o,{disabled:!0,inputProps:{"aria-label":"Disabled example"},color:"error",icon:e.jsx(p,{}),checkedIcon:e.jsx(s,{})}),e.jsx(o,{disabled:!0,checked:!0,inputProps:{"aria-label":"Disabled Checked example"},color:"error",icon:e.jsx(p,{}),checkedIcon:e.jsx(s,{})}),e.jsx(r,{variant:"h1",children:"Playground"}),e.jsx(r,{variant:"body1",children:"Storybook controls apply to this component"}),e.jsx(o,{...t})]}),args:{color:"error",icon:e.jsx(p,{}),checkedIcon:e.jsx(s,{}),inputProps:{"aria-label":"Playground example"}}},i={render:t=>e.jsxs(y,{children:[e.jsx(r,{variant:"h1",sx:{marginTop:"1rem"},children:"Examples"}),e.jsx(r,{variant:"body1",children:"Storybook controls do not apply to these"}),e.jsx(n,{control:e.jsx(o,{defaultChecked:!0}),label:"Label"}),e.jsx(n,{required:!0,control:e.jsx(o,{}),label:"Required"}),e.jsx(n,{control:e.jsx(o,{disabled:!0}),label:"Disabled"}),e.jsx(r,{variant:"h1",children:"Playground"}),e.jsx(r,{variant:"body1",children:"Storybook controls apply to this component"}),e.jsx(n,{control:e.jsx(o,{...t}),label:"Label"})]}),args:{}},m={render:t=>{const[a,l]=C.useState(!1),x=k=>l(k.target.checked);return e.jsx(o,{...t,checked:a,onChange:x,inputProps:{"aria-label":"controlled"}})},args:{}},b={render:t=>{const[a,l]=C.useState([!0,!1]),x=c=>{l([c.target.checked,c.target.checked])},k=c=>{l([c.target.checked,a[1]])},g=c=>{l([a[0],c.target.checked])},u=e.jsxs(j,{sx:{display:"flex",flexDirection:"column",ml:3},children:[e.jsx(n,{label:"Child 1",control:e.jsx(o,{checked:a[0],onChange:k})}),e.jsx(n,{label:"Child 2",control:e.jsx(o,{checked:a[1],onChange:g})})]});return e.jsxs("div",{children:[e.jsx(n,{label:"Parent",control:e.jsx(o,{...t,checked:a[0]&&a[1],indeterminate:a[0]!==a[1],onChange:x})}),u]})},args:{}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => {
    const [checked, setChecked] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);
    return <Checkbox {...args} checked={checked} onChange={handleChange} inputProps={{
      'aria-label': 'controlled'
    }} />;
  },
  args: {}
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const oe=["_Checkbox","_CustomCheckbox","_LabeledCheckbox","_ControlledCheckbox","_IndeterminateCheckbox"];export{d as _Checkbox,m as _ControlledCheckbox,h as _CustomCheckbox,b as _IndeterminateCheckbox,i as _LabeledCheckbox,oe as __namedExportsOrder,ee as default};
