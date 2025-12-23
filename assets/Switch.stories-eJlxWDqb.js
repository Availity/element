import{j as e,r as d}from"./iframe-DF1q2aaL.js";import{T as v}from"./index-Q8RjvuCg.js";import{F as y}from"./FormGroup-CcYCP0zR.js";import{S as t}from"./Switch-DFuHndsd.js";import{F as r}from"./FormControlLabel-DZHWXkA0.js";import"./preload-helper-Dp1pzeXC.js";import"./Typography-cWmdXt40.js";import"./memoTheme-BD6H9365.js";import"./styled-CFEXa4qH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useFormControl-ByL3kvVY.js";import"./formControlState-Dq1zat_P.js";import"./faCheck-BUdkY9Qv.js";import"./Switch-DurZW9YG.js";import"./SwitchBase-iVmERgWS.js";import"./useSlot-CQvSmYnu.js";import"./mergeSlotProps-BnmzE4jq.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D-TFDBL_.js";import"./useControlled-C2txOzyk.js";import"./ButtonBase-D5OUD9Sm.js";import"./useTimeout-CJLBifOK.js";import"./TransitionGroupContext-DTdRQeqO.js";import"./useEventCallback-C9NbUrxX.js";import"./isFocusVisible-B8k4qzLc.js";import"./FieldHelpIcon-_Crxp_ey.js";import"./index-DS1ZdVNz.js";import"./index-DJNX-Iyq.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-DB8Z1ZTq.js";import"./index-D2mEmfXN.js";import"./Tooltip-BXhUmSeH.js";import"./useTheme-C0GFliqz.js";import"./getReactElementRef-Cr3R6gAV.js";import"./Portal-CbFePWP9.js";import"./utils-BdM8s10D.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B0ZOsC4g.js";import"./IconButton-K-5rBd1A.js";import"./CircularProgress-DkK8nyO-.js";import"./Button-B9ufjNyc.js";import"./FormControlLabel-D1O_4yuP.js";import"./Box-CIJZFnEp.js";const we={title:"Form Components/FormUtils/Switch",component:t,tags:["autodocs"],parameters:{controls:{exclude:["action","autoFocus","className","component","onChange","onFocusVisible","readOnly","ref","required","style","tabIndex"]}}},c={render:o=>e.jsx(t,{...o}),args:{inputProps:{"aria-label":"example"}}},n={render:o=>{const[a,s]=d.useState(!1);return e.jsx(r,{control:e.jsx(t,{...o,onChange:h=>s(h.target.checked)}),label:a?"On":"Off"})},args:{sx:{marginRight:"6px"}}},i={render:()=>{const[o,a]=d.useState(!0);return e.jsxs(y,{children:[e.jsx(r,{control:e.jsx(t,{showCheckedIcon:!0,size:"small",sx:{marginRight:"6px"},onChange:s=>a(s.target.checked),defaultChecked:!0}),label:o?"On":"Off"}),e.jsx(v,{variant:"caption",children:"The checked icon only applies to small Switches"})]})}},l={render:()=>{const[o,a]=d.useState(!1),[s,h]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{control:e.jsx(t,{id:"smallSwitch",size:"small",sx:{marginRight:"6px"},onChange:p=>a(p.target.checked)}),label:o?"On":"Off"}),e.jsx(r,{control:e.jsx(t,{id:"defaultSwitch",size:"medium",sx:{marginRight:"6px"},onChange:p=>h(p.target.checked)}),label:s?"On":"Off"})]})}},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{control:e.jsx(t,{sx:{marginRight:"6px"}}),label:"unchecked",checked:!1}),e.jsx(r,{control:e.jsx(t,{defaultChecked:!0,sx:{marginRight:"6px"}}),label:"checked",checked:!0}),e.jsx(r,{control:e.jsx(t,{sx:{marginRight:"6px"}}),label:"disabled unchecked",disabled:!0}),e.jsx(r,{control:e.jsx(t,{defaultChecked:!0,sx:{marginRight:"6px"}}),label:"disabled checked",disabled:!0})]})};var u,g,x;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: SwitchProps) => {
    return <Switch {...args} />;
  },
  args: {
    inputProps: {
      'aria-label': 'example'
    }
  }
}`,...(x=(g=c.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var k,C,f;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: SwitchProps) => {
    const [checked, setChecked] = useState(false);
    return <FormControlLabel control={<Switch {...args} onChange={event => setChecked(event.target.checked)} />} label={checked ? 'On' : 'Off'} />;
  },
  args: {
    sx: {
      marginRight: '6px'
    }
  }
}`,...(f=(C=n.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var S,b,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <FormGroup>
        <FormControlLabel control={<Switch showCheckedIcon size="small" sx={{
        marginRight: '6px'
      }} onChange={event => setChecked(event.target.checked)} defaultChecked />} label={checked ? 'On' : 'Off'} />
        <Typography variant="caption" children="The checked icon only applies to small Switches" />
      </FormGroup>;
  }
}`,...(j=(b=i.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var w,F,O;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(O=(F=l.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var R,_,L;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(L=(_=m.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const Fe=["_Switch","_WithLabel","_WithCheckedIcon","_Sizes","_States"];export{l as _Sizes,m as _States,c as _Switch,i as _WithCheckedIcon,n as _WithLabel,Fe as __namedExportsOrder,we as default};
