import{j as e,R as u}from"./iframe-DDdys5VZ.js";import{A as o}from"./Alert-NP5Q2bwh.js";import{C as d}from"./Collapse-48uCS0oQ.js";import{L as b}from"./Link-zmKIfFlz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Do6uxBxf.js";import"./Tooltip-BrywaEgo.js";import"./useTheme-3S67f5Cb.js";import"./styled-hFTqa5AW.js";import"./memoTheme-Cxx5qwbm.js";import"./useSlot-tZFGbiOx.js";import"./mergeSlotProps-4h4cl7Iv.js";import"./useForkRef-CnZ00-R9.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-DZwXI9W9.js";import"./useControlled-DPgR13iz.js";import"./useEventCallback-Cc8SLIyn.js";import"./getReactElementRef-KKwdvyjG.js";import"./Portal-CIlqDXrO.js";import"./utils-CF4In8Xa.js";import"./TransitionGroupContext-Dv_3Vfqr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CMLU_yM0.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BOaXfSEH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DZVI88h8.js";import"./CircularProgress-CD5GaXFj.js";import"./Button-uXds9IdN.js";import"./index-BnYYGU_m.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DHyw-wAY.js";import"./Alert-Dkq1iShR.js";import"./createSvgIcon-Q7sAoZ8R.js";import"./Close-D4KUM2AM.js";import"./Paper-BNuTBhMB.js";import"./Typography-CZtxpkXF.js";const te={title:"Components/Alert/Alert",component:o,tags:["autodocs"],args:{severity:"info",children:"This text is inside the alert"}},a={render:t=>e.jsx(o,{severity:"info",...t})},n={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)};return e.jsx(d,{in:i,children:e.jsx(o,{onClose:s,...t})})}},c={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)},p=e.jsx(b,{component:"button",onClick:s,children:"Action"});return e.jsx(d,{in:i,children:e.jsx(o,{action:p,...t})})}},l={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)},p=e.jsx(b,{component:"button",onClick:s,children:"Action"});return e.jsx(d,{in:i,children:e.jsx(o,{onClose:s,action:p,...t})})}},A=["info","success","warning","error"],m={render:()=>e.jsx(e.Fragment,{children:A.map(t=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{severity:t,children:["This is a ",t," alert — check it out!"]},t),e.jsx("br",{})]}))})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: Omit<AlertProps, 'ref'>) => <Alert severity="info" {...args} />
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (args: Omit<AlertProps, 'ref'>) => {
    const [visible, setVisible] = React.useState(true);
    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };
    return <Collapse in={visible}>
        <Alert onClose={onClose} {...args} />
      </Collapse>;
  }
}`,...n.parameters?.docs?.source},description:{story:"The `Collapse` component is a recommended way to handle visual dismissing of an alert.\nCheck out the Material UI docs for more information.",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: Omit<AlertProps, 'ref'>) => {
    const [visible, setVisible] = React.useState(true);
    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };
    const action = <Link component="button" onClick={onClose}>Action</Link>;
    return <Collapse in={visible}>
        <Alert action={action} {...args} />
      </Collapse>;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: Omit<AlertProps, 'ref'>) => {
    const [visible, setVisible] = React.useState(true);
    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };
    const action = <Link component="button" onClick={onClose}>Action</Link>;
    return <Collapse in={visible}>
        <Alert onClose={onClose} action={action} {...args} />
      </Collapse>;
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <>
    {severities.map(severity => <>
        <Alert severity={severity} key={severity}>
          This is a {severity} alert — check it out!
        </Alert>
        <br />
      </>)}
  </>
}`,...m.parameters?.docs?.source}}};const re=["_Alert","_DismissableAlert","_Action","_ActionAndClose","_Severities"];export{c as _Action,l as _ActionAndClose,a as _Alert,n as _DismissableAlert,m as _Severities,re as __namedExportsOrder,te as default};
