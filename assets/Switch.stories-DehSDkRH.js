import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as p}from"./index-BgYLq7fD.js";import"./FieldHelpIcon-Do0u9pLB.js";import{c as t,b as r}from"./Switch-DFSN_4r5.js";import"./Input-iFf81Ofw.js";import{T as v}from"./index-ClMemn8c.js";import{F as y}from"./RadioGroup-CGGGzwtq.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DJKl12U0.js";import"./index-CmMPo3bx.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./SvgIcon-D3xe1wVB.js";import"./generateUtilityClass-GxznSYtt.js";import"./identifier-CHUoN9pF.js";import"./memoTheme-BLrvrRyo.js";import"./styled-FZfCzBz5.js";import"./DefaultPropsProvider-ArLX9SCD.js";import"./generateUtilityClasses-aotQgNYZ.js";import"./index-k9OtkSpc.js";import"./Tooltip-Xh9QA514.js";import"./index-DyJdRKzS.js";import"./useTheme-BGaXYmwe.js";import"./useTheme-CVByJb8R.js";import"./useSlot-qvYlW2UV.js";import"./resolveComponentProps-XMphxBSb.js";import"./useForkRef-Dz4aGlyk.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./useControlled-DxC1uCGX.js";import"./useId-DIK8ekB4.js";import"./getReactElementRef-Df0xbma2.js";import"./Portal-DEVqEMA6.js";import"./utils-tFrEP9Vf.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DT0tbkWv.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BFylt634.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DwAEbHIm.js";import"./emotion-react.browser.esm-DW5OmoQI.js";import"./CircularProgress-o1goEU37.js";import"./Button-DrYdciQ0.js";import"./LoadingButton-C6EjcQI6.js";import"./FormControlLabel-NrRuXsuu.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-t_-EwZHM.js";import"./Typography-geKghQyJ.js";import"./index-Df15702_.js";import"./extendSxProp-BZnzVrgj.js";import"./Box-BU2WakPM.js";import"./Select-D8Pqa1Dd.js";import"./Menu-BUIr0rCt.js";import"./Popover-DNs0CrC2.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-zGtC1N39.js";import"./Modal-BSor9Am9.js";import"./Backdrop-DwIksyfj.js";import"./Fade-rL0rk9XF.js";import"./List-CN2yCDHK.js";import"./OutlinedInput-ClKDCKpR.js";import"./createSvgIcon-DK1T27V3.js";import"./Stack-2ILcP_1D.js";import"./styled-CsKbBpC_.js";import"./useThemeProps-BNBLMFIr.js";import"./Divider-CE8hkX1u.js";import"./dividerClasses-Cy3VQ5Zc.js";import"./faCheck-BUdkY9Qv.js";import"./Switch-BMNMooHv.js";import"./SwitchBase-DpeF2ikX.js";import"./index-DmY_4rvh.js";import"./Grid2-BbvvmKhh.js";import"./isMuiElement-DiOAsJE6.js";import"./Container-DvcsWH8C.js";const st={title:"Form Components/FormUtils/Switch",component:t,tags:["autodocs"],parameters:{controls:{exclude:["action","autoFocus","className","component","onChange","onFocusVisible","readOnly","ref","required","style","tabIndex"]}}},i={render:o=>e.jsx(t,{...o}),args:{inputProps:{"aria-label":"example"}}},c={render:o=>{const[a,s]=p.useState(!1);return e.jsx(r,{control:e.jsx(t,{...o,onChange:d=>s(d.target.checked)}),label:a?"On":"Off"})},args:{sx:{marginRight:"6px"}}},n={render:()=>{const[o,a]=p.useState(!0);return e.jsxs(y,{children:[e.jsx(r,{control:e.jsx(t,{showCheckedIcon:!0,size:"small",sx:{marginRight:"6px"},onChange:s=>a(s.target.checked),defaultChecked:!0}),label:o?"On":"Off"}),e.jsx(v,{variant:"caption",children:"The checked icon only applies to small Switches"})]})}},m={render:()=>{const[o,a]=p.useState(!1),[s,d]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{control:e.jsx(t,{id:"smallSwitch",size:"small",sx:{marginRight:"6px"},onChange:h=>a(h.target.checked)}),label:o?"On":"Off"}),e.jsx(r,{control:e.jsx(t,{id:"defaultSwitch",size:"medium",sx:{marginRight:"6px"},onChange:h=>d(h.target.checked)}),label:s?"On":"Off"})]})}},l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{control:e.jsx(t,{sx:{marginRight:"6px"}}),label:"unchecked",checked:!1}),e.jsx(r,{control:e.jsx(t,{defaultChecked:!0,sx:{marginRight:"6px"}}),label:"checked",checked:!0}),e.jsx(r,{control:e.jsx(t,{sx:{marginRight:"6px"}}),label:"disabled unchecked",disabled:!0}),e.jsx(r,{control:e.jsx(t,{defaultChecked:!0,sx:{marginRight:"6px"}}),label:"disabled checked",disabled:!0})]})};var u,g,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: SwitchProps) => {
    return <Switch {...args} />;
  },
  args: {
    inputProps: {
      'aria-label': 'example'
    }
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var k,C,f;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: SwitchProps) => {
    const [checked, setChecked] = useState(false);
    return <FormControlLabel control={<Switch {...args} onChange={event => setChecked(event.target.checked)} />} label={checked ? 'On' : 'Off'} />;
  },
  args: {
    sx: {
      marginRight: '6px'
    }
  }
}`,...(f=(C=c.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var S,b,j;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <FormGroup>
        <FormControlLabel control={<Switch showCheckedIcon size="small" sx={{
        marginRight: '6px'
      }} onChange={event => setChecked(event.target.checked)} defaultChecked />} label={checked ? 'On' : 'Off'} />
        <Typography variant="caption" children="The checked icon only applies to small Switches" />
      </FormGroup>;
  }
}`,...(j=(b=n.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var w,F,O;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(O=(F=m.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var R,_,L;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(L=(_=l.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const it=["_Switch","_WithLabel","_WithCheckedIcon","_Sizes","_States"];export{m as _Sizes,l as _States,i as _Switch,n as _WithCheckedIcon,c as _WithLabel,it as __namedExportsOrder,st as default};
