import{r as d,j as e}from"./iframe-D__S4UWJ.js";import{T as u}from"./index-DoXDZQMb.js";import{F as g}from"./FormGroup-DqGHfD-7.js";import{S as t}from"./Switch-Bdj2rYwr.js";import{F as r}from"./FormControlLabel-CXeY2YSL.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-jktlZrXz.js";import"./memoTheme-BV959hj8.js";import"./styled-D9hsOvpf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useFormControl-BV3eLlPL.js";import"./formControlState-Dq1zat_P.js";import"./faCheck-1iOl5y2I.js";import"./Switch-CtmyTchu.js";import"./SwitchBase-D1Cjv_3W.js";import"./useSlot-O8ollNDw.js";import"./mergeSlotProps-D3BIdMsf.js";import"./useForkRef-BqPQmHw4.js";import"./useControlled-jwoPGZ3a.js";import"./ButtonBase-Ci_mfbwX.js";import"./useTimeout-92omNL17.js";import"./TransitionGroupContext-y7HMp-IG.js";import"./useEventCallback-DJS3GGm_.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-CgsjCMz0.js";import"./FieldHelpIcon-eDoPVhXj.js";import"./index-CrcoPoGw.js";import"./index-DhycCYh-.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-XbFZbbsX.js";import"./index-CSzUZNdV.js";import"./Tooltip-CiiYXVhS.js";import"./useTheme-CFaiP_LB.js";import"./getReactElementRef-CXYGkVyS.js";import"./Portal-DQUO7uTD.js";import"./utils-qh6k9bbM.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BwqG8d0v.js";import"./IconButton-CNhmLG-N.js";import"./CircularProgress-haj7VCd3.js";import"./Button-CFqvl5Id.js";import"./FormControlLabel-DOCoDnNz.js";import"./Box-BOn3j62W.js";const ie={title:"Form Components/Uncontrolled FormUtils/Switch",component:t,tags:["autodocs"],parameters:{controls:{exclude:["action","autoFocus","className","component","onChange","onFocusVisible","readOnly","ref","required","style","tabIndex"]}}},c={render:o=>e.jsx(t,{...o}),args:{inputProps:{"aria-label":"example"}}},n={render:o=>{const[a,s]=d.useState(!1);return e.jsx(r,{control:e.jsx(t,{...o,onChange:h=>s(h.target.checked)}),label:a?"On":"Off"})},args:{sx:{marginRight:"6px"}}},i={render:()=>{const[o,a]=d.useState(!0);return e.jsxs(g,{children:[e.jsx(r,{control:e.jsx(t,{showCheckedIcon:!0,size:"small",sx:{marginRight:"6px"},onChange:s=>a(s.target.checked),defaultChecked:!0}),label:o?"On":"Off"}),e.jsx(u,{variant:"caption",children:"The checked icon only applies to small Switches"})]})}},l={render:()=>{const[o,a]=d.useState(!1),[s,h]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{control:e.jsx(t,{id:"smallSwitch",size:"small",sx:{marginRight:"6px"},onChange:p=>a(p.target.checked)}),label:o?"On":"Off"}),e.jsx(r,{control:e.jsx(t,{id:"defaultSwitch",size:"medium",sx:{marginRight:"6px"},onChange:p=>h(p.target.checked)}),label:s?"On":"Off"})]})}},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{control:e.jsx(t,{sx:{marginRight:"6px"}}),label:"unchecked",checked:!1}),e.jsx(r,{control:e.jsx(t,{defaultChecked:!0,sx:{marginRight:"6px"}}),label:"checked",checked:!0}),e.jsx(r,{control:e.jsx(t,{sx:{marginRight:"6px"}}),label:"disabled unchecked",disabled:!0}),e.jsx(r,{control:e.jsx(t,{defaultChecked:!0,sx:{marginRight:"6px"}}),label:"disabled checked",disabled:!0})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const le=["_Switch","_WithLabel","_WithCheckedIcon","_Sizes","_States"];export{l as _Sizes,m as _States,c as _Switch,i as _WithCheckedIcon,n as _WithLabel,le as __namedExportsOrder,ie as default};
