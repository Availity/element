import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{r as p}from"./index-DcWiA9TO.js";import"./FieldHelpIcon-D6BcmGxD.js";import{a as r}from"./FormLabel-BVRRrrvc.js";import{b as t}from"./Switch-ChiITbZR.js";import"./Input-APsdfdZo.js";import{T as v}from"./index-Bssefeeu.js";import{F as y}from"./RadioGroup-B7AA9dKi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DMWJB0MK.js";import"./index-BDqO7SwG.js";import"./faUser-CAcveCor.js";import"./SvgIcon-DfAk99tL.js";import"./generateUtilityClass-DELP8s2G.js";import"./identifier-CenlGZaM.js";import"./memoTheme-CIpOTVoB.js";import"./styled-wZqJTO_n.js";import"./DefaultPropsProvider-LCKMq1Iv.js";import"./generateUtilityClasses-duJ5YrlI.js";import"./index-DSGElAqY.js";import"./Tooltip-BNHD4B5V.js";import"./index-nos-0K8U.js";import"./useTheme-Cf-RAc4Y.js";import"./useTheme-DwYC2ms6.js";import"./useSlot-CaH4cQiJ.js";import"./resolveComponentProps-D4XT56l6.js";import"./useForkRef-BVrIj09m.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-D32Mdiva.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DE50rPTb.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DGohL5ME.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Ctwr4_Dd.js";import"./emotion-react.browser.esm-BKUJyPAt.js";import"./CircularProgress-D2topXWR.js";import"./Button-C-tuTFv-.js";import"./LoadingButton-BK9aMQRn.js";import"./FormControlLabel-CImDabQe.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-68oiojFJ.js";import"./Typography-Dw3TlP36.js";import"./index-BKNdG2lN.js";import"./extendSxProp-w61GJfY-.js";import"./Box-DR5TX31P.js";import"./FormLabel-CZFypZnO.js";import"./Select-Dt0UCwxY.js";import"./Menu-BU9jXi-3.js";import"./Popover-CSXcjUnK.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-DoDJPSvm.js";import"./Modal-B_4-9GXq.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-4xfgJS0q.js";import"./Fade-DlB6bWB0.js";import"./List-BRpAtMOZ.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BzSwLqYD.js";import"./OutlinedInput-BeuFtjMr.js";import"./Stack-BPYMGdgv.js";import"./styled-CIC6PLSI.js";import"./useThemeProps-BAwiOWAz.js";import"./Divider-Dys0WftY.js";import"./dividerClasses-C6lHB_qP.js";import"./faCheck-B05F4ORy.js";import"./Switch-CXk7mhi6.js";import"./SwitchBase-CHDa-0k7.js";const tt={title:"Form Components/FormUtils/Switch",component:t,tags:["autodocs"],parameters:{controls:{exclude:["action","autoFocus","className","component","onChange","onFocusVisible","readOnly","ref","required","style","tabIndex"]}}},i={render:o=>e.jsx(t,{...o}),args:{inputProps:{"aria-label":"example"}}},c={render:o=>{const[a,s]=p.useState(!1);return e.jsx(r,{control:e.jsx(t,{...o,onChange:d=>s(d.target.checked)}),label:a?"On":"Off"})},args:{sx:{marginRight:"6px"}}},n={render:()=>{const[o,a]=p.useState(!0);return e.jsxs(y,{children:[e.jsx(r,{control:e.jsx(t,{showCheckedIcon:!0,size:"small",sx:{marginRight:"6px"},onChange:s=>a(s.target.checked),defaultChecked:!0}),label:o?"On":"Off"}),e.jsx(v,{variant:"caption",children:"The checked icon only applies to small Switches"})]})}},m={render:()=>{const[o,a]=p.useState(!1),[s,d]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{control:e.jsx(t,{id:"smallSwitch",size:"small",sx:{marginRight:"6px"},onChange:h=>a(h.target.checked)}),label:o?"On":"Off"}),e.jsx(r,{control:e.jsx(t,{id:"defaultSwitch",size:"medium",sx:{marginRight:"6px"},onChange:h=>d(h.target.checked)}),label:s?"On":"Off"})]})}},l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{control:e.jsx(t,{sx:{marginRight:"6px"}}),label:"unchecked",checked:!1}),e.jsx(r,{control:e.jsx(t,{defaultChecked:!0,sx:{marginRight:"6px"}}),label:"checked",checked:!0}),e.jsx(r,{control:e.jsx(t,{sx:{marginRight:"6px"}}),label:"disabled unchecked",disabled:!0}),e.jsx(r,{control:e.jsx(t,{defaultChecked:!0,sx:{marginRight:"6px"}}),label:"disabled checked",disabled:!0})]})};var u,g,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(L=(_=l.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const rt=["_Switch","_WithLabel","_WithCheckedIcon","_Sizes","_States"];export{m as _Sizes,l as _States,i as _Switch,n as _WithCheckedIcon,c as _WithLabel,rt as __namedExportsOrder,tt as default};
