import{r as d,j as e}from"./iframe-BcpGFM79.js";import{F as r}from"./FormControlLabel-BNRja3ZA.js";import{S as t}from"./Switch-D_6fFhqc.js";import{T as u}from"./Typography-giEvkJi7.js";import{F as g}from"./FormGroup-DkeyJcWV.js";import"./preload-helper-Dab_6GC_.js";import"./FieldHelpIcon-Dc0XpqfL.js";import"./index-CrcoPoGw.js";import"./Form-BSB-tu1Z.js";import"./FaSvgIcon-CT_rBCtN.js";import"./SvgIcon-DwHLgNU7.js";import"./memoTheme-CUR-_UQu.js";import"./styled-YELB7PbO.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./IconButton-BQJBDMuu.js";import"./Tooltip-CGfPTNyc.js";import"./useTheme-DjrtHLeH.js";import"./useSlot-COYLd7Pd.js";import"./mergeSlotProps-Y-QEFSGT.js";import"./useForkRef-BE9Mh8bk.js";import"./useTimeout-D7cMLa2k.js";import"./useControlled-B1x_m4Ao.js";import"./useEventCallback-B998UMHo.js";import"./getReactElementRef-ksE6JIsb.js";import"./Grow-DgKR5Z9h.js";import"./utils-CX-dufza.js";import"./TransitionGroupContext-DMVjCYVP.js";import"./Popper-77inD8mp.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-D0YnE6km.js";import"./useSlotProps-wCHKs8ch.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-bOxsf80n.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DuPW9E1K.js";import"./CircularProgress-B0VZoizd.js";import"./FormControlLabel-BMa98H6J.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BGMg_aeo.js";import"./Typography-D2_Tvhdq.js";import"./Box-YZXBtx3i.js";import"./Switch-D7MKOh2D.js";import"./SwitchBase-_V4FthNd.js";import"./mergeSlotProps-0PeTl37o.js";const ne={title:"Form Components/Uncontrolled FormUtils/Switch",component:t,tags:["autodocs"],parameters:{controls:{exclude:["action","autoFocus","className","component","onChange","onFocusVisible","readOnly","ref","required","style","tabIndex"]}}},c={render:o=>e.jsx(t,{...o}),args:{inputProps:{"aria-label":"example"}}},n={render:o=>{const[a,s]=d.useState(!1);return e.jsx(r,{control:e.jsx(t,{...o,onChange:h=>s(h.target.checked)}),label:a?"On":"Off"})},args:{sx:{marginRight:"6px"}}},i={render:()=>{const[o,a]=d.useState(!0);return e.jsxs(g,{children:[e.jsx(r,{control:e.jsx(t,{showCheckedIcon:!0,size:"small",sx:{marginRight:"6px"},onChange:s=>a(s.target.checked),defaultChecked:!0}),label:o?"On":"Off"}),e.jsx(u,{variant:"caption",children:"The checked icon only applies to small Switches"})]})}},l={render:()=>{const[o,a]=d.useState(!1),[s,h]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{control:e.jsx(t,{id:"smallSwitch",size:"small",sx:{marginRight:"6px"},onChange:p=>a(p.target.checked)}),label:o?"On":"Off"}),e.jsx(r,{control:e.jsx(t,{id:"defaultSwitch",size:"medium",sx:{marginRight:"6px"},onChange:p=>h(p.target.checked)}),label:s?"On":"Off"})]})}},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{control:e.jsx(t,{sx:{marginRight:"6px"}}),label:"unchecked",checked:!1}),e.jsx(r,{control:e.jsx(t,{defaultChecked:!0,sx:{marginRight:"6px"}}),label:"checked",checked:!0}),e.jsx(r,{control:e.jsx(t,{sx:{marginRight:"6px"}}),label:"disabled unchecked",disabled:!0}),e.jsx(r,{control:e.jsx(t,{defaultChecked:!0,sx:{marginRight:"6px"}}),label:"disabled checked",disabled:!0})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: SwitchProps) => {
    return <Switch {...args} />;
  },
  args: {
    inputProps: {
      'aria-label': 'example'
    }
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (args: SwitchProps) => {
    const [checked, setChecked] = useState(false);
    return <FormControlLabel control={<Switch {...args} onChange={event => setChecked(event.target.checked)} />} label={checked ? 'On' : 'Off'} />;
  },
  args: {
    sx: {
      marginRight: '6px'
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <FormGroup>
        <FormControlLabel control={<Switch showCheckedIcon size="small" sx={{
        marginRight: '6px'
      }} onChange={event => setChecked(event.target.checked)} defaultChecked />} label={checked ? 'On' : 'Off'} />
        <Typography variant="caption" children="The checked icon only applies to small Switches" />
      </FormGroup>;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [smallChecked, setSmallChecked] = useState(false);
    const [defaultChecked, setDefaultChecked] = useState(false);
    return <>
        <FormControlLabel control={<Switch id="smallSwitch" size="small" sx={{
        marginRight: '6px'
      }} onChange={event => setSmallChecked(event.target.checked)} />} label={smallChecked ? 'On' : 'Off'} />
        <FormControlLabel control={<Switch id="defaultSwitch" size="medium" sx={{
        marginRight: '6px'
      }} onChange={event => setDefaultChecked(event.target.checked)} />} label={defaultChecked ? 'On' : 'Off'} />
      </>;
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <FormControlLabel control={<Switch sx={{
      marginRight: '6px'
    }} />} label="unchecked" checked={false} />
      <FormControlLabel control={<Switch defaultChecked={true} sx={{
      marginRight: '6px'
    }} />} label="checked" checked />
      <FormControlLabel control={<Switch sx={{
      marginRight: '6px'
    }} />} label="disabled unchecked" disabled />
      <FormControlLabel control={<Switch defaultChecked={true} sx={{
      marginRight: '6px'
    }} />} label="disabled checked" disabled />
    </>
}`,...m.parameters?.docs?.source}}};const ie=["_Switch","_WithLabel","_WithCheckedIcon","_Sizes","_States"];export{l as _Sizes,m as _States,c as _Switch,i as _WithCheckedIcon,n as _WithLabel,ie as __namedExportsOrder,ne as default};
