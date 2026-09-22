import{R as u,j as e}from"./iframe-QKKiXGe2.js";import{A as o}from"./Alert-BYeLO3BO.js";import{C as d}from"./Collapse-BzKppt1G.js";import{L as b}from"./Link-BBs-xXid.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dx_zFY-v.js";import"./IconButton-SAs9Di6J.js";import"./memoTheme-CZ6h3Fbh.js";import"./styled-CQy7SchW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-BjGfF1Y_.js";import"./useTimeout-DkvHtZOb.js";import"./TransitionGroupContext-CAofQ-AT.js";import"./useForkRef-GKR9CYz5.js";import"./useEventCallback-KenlF9RE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BAVpeqhg.js";import"./Tooltip-BYG0wW6K.js";import"./useTheme-CobnQWC-.js";import"./useSlot-DRcEuyBg.js";import"./mergeSlotProps-C7lIBrBK.js";import"./useControlled-BjERoBEC.js";import"./getReactElementRef-DpOU19qE.js";import"./Portal-JL7agaji.js";import"./utils-Dh1OrGpA.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CqRX49VI.js";import"./Button-B0ZWu58J.js";import"./index-C-csxGdp.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D3LX6zM9.js";import"./Alert-CirbgJPt.js";import"./createSvgIcon-Bm4mBUxC.js";import"./Close-DncTnFTq.js";import"./Paper-Bu_9L5He.js";import"./Typography-lfATY7Ds.js";const te={title:"Components/Alert/Alert",component:o,tags:["autodocs"],args:{severity:"info",children:"This text is inside the alert"}},a={render:t=>e.jsx(o,{severity:"info",...t})},n={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)};return e.jsx(d,{in:i,children:e.jsx(o,{onClose:s,...t})})}},c={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)},p=e.jsx(b,{component:"button",onClick:s,children:"Action"});return e.jsx(d,{in:i,children:e.jsx(o,{action:p,...t})})}},l={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)},p=e.jsx(b,{component:"button",onClick:s,children:"Action"});return e.jsx(d,{in:i,children:e.jsx(o,{onClose:s,action:p,...t})})}},A=["info","success","warning","error"],m={render:()=>e.jsx(e.Fragment,{children:A.map(t=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{severity:t,children:["This is a ",t," alert — check it out!"]},t),e.jsx("br",{})]}))})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
