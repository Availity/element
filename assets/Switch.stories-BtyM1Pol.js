import{j as e,r as d}from"./iframe-BjnuDffd.js";import{T as u}from"./index-DpVJt-Ed.js";import{F as g}from"./FormGroup-BpUqtGY1.js";import{S as t}from"./Switch-VbQO0kco.js";import{F as r}from"./FormControlLabel-BIFtNX7R.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-fWFZNgKP.js";import"./memoTheme-B2JdP5Lg.js";import"./styled-DqMp1nYt.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useFormControl-CIls3zi9.js";import"./formControlState-Dq1zat_P.js";import"./faCheck-1iOl5y2I.js";import"./Switch-Dn3O0b_X.js";import"./SwitchBase-BeqnuivA.js";import"./useSlot-jAOnMiB5.js";import"./mergeSlotProps-ShRnscjH.js";import"./useForkRef-DH1owG2H.js";import"./useControlled-BK8V1AI9.js";import"./ButtonBase-B91JQX2j.js";import"./useTimeout-C6wFpPob.js";import"./TransitionGroupContext-CjQYVfWF.js";import"./useEventCallback-C7vIb1Zh.js";import"./isFocusVisible-B8k4qzLc.js";import"./FieldHelpIcon-QHNiUSFf.js";import"./index-BiBDMnSv.js";import"./index-BPcsFkr_.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CargZ35d.js";import"./index-ozQD-jv-.js";import"./Tooltip-DY2U7J0u.js";import"./useTheme-C7UHXn64.js";import"./getReactElementRef-Cj7TLjNv.js";import"./Portal-BeYOOpZP.js";import"./utils-BWRWa3IK.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BCOe5sCp.js";import"./IconButton-CTKwlcpD.js";import"./CircularProgress-2p5PvuKn.js";import"./Button-Z3VsI-jq.js";import"./FormControlLabel-CsqIcyf0.js";import"./Box-BZu1WY8a.js";const ne={title:"Form Components/FormUtils/Switch",component:t,tags:["autodocs"],parameters:{controls:{exclude:["action","autoFocus","className","component","onChange","onFocusVisible","readOnly","ref","required","style","tabIndex"]}}},c={render:o=>e.jsx(t,{...o}),args:{inputProps:{"aria-label":"example"}}},n={render:o=>{const[a,s]=d.useState(!1);return e.jsx(r,{control:e.jsx(t,{...o,onChange:h=>s(h.target.checked)}),label:a?"On":"Off"})},args:{sx:{marginRight:"6px"}}},i={render:()=>{const[o,a]=d.useState(!0);return e.jsxs(g,{children:[e.jsx(r,{control:e.jsx(t,{showCheckedIcon:!0,size:"small",sx:{marginRight:"6px"},onChange:s=>a(s.target.checked),defaultChecked:!0}),label:o?"On":"Off"}),e.jsx(u,{variant:"caption",children:"The checked icon only applies to small Switches"})]})}},l={render:()=>{const[o,a]=d.useState(!1),[s,h]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{control:e.jsx(t,{id:"smallSwitch",size:"small",sx:{marginRight:"6px"},onChange:p=>a(p.target.checked)}),label:o?"On":"Off"}),e.jsx(r,{control:e.jsx(t,{id:"defaultSwitch",size:"medium",sx:{marginRight:"6px"},onChange:p=>h(p.target.checked)}),label:s?"On":"Off"})]})}},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{control:e.jsx(t,{sx:{marginRight:"6px"}}),label:"unchecked",checked:!1}),e.jsx(r,{control:e.jsx(t,{defaultChecked:!0,sx:{marginRight:"6px"}}),label:"checked",checked:!0}),e.jsx(r,{control:e.jsx(t,{sx:{marginRight:"6px"}}),label:"disabled unchecked",disabled:!0}),e.jsx(r,{control:e.jsx(t,{defaultChecked:!0,sx:{marginRight:"6px"}}),label:"disabled checked",disabled:!0})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
