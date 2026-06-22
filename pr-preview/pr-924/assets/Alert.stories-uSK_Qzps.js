import{R as u,j as e}from"./iframe-B3KH45W1.js";import{A as o}from"./Alert-D7-DHY3L.js";import{C as d}from"./Collapse-DfjkZUiC.js";import{L as b}from"./Link-CEZZky2H.js";import"./preload-helper-Dab_6GC_.js";import"./IconButton-UjBwLmV3.js";import"./Tooltip-BBnoBBLv.js";import"./useTheme-Ds4SDsFm.js";import"./styled-B89GBRvi.js";import"./memoTheme-DWwRHojM.js";import"./useSlot-DGd0VXU6.js";import"./mergeSlotProps--7hXBDn0.js";import"./useForkRef-C1kAtY37.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-BS1Rp5sI.js";import"./useControlled-cbOgjwu_.js";import"./useEventCallback-CVbD2IC6.js";import"./getReactElementRef-CBNP7eUh.js";import"./Grow-iiG6wjq6.js";import"./utils-BQeXEgW_.js";import"./TransitionGroupContext-CAm2K2SY.js";import"./Popper-Bmyzhh-s.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CUL18StY.js";import"./useSlotProps-CXce_cAS.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dv3tzyaZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DgN9Oijw.js";import"./CircularProgress-BSNAtS4j.js";import"./Actions-CO819m3I.js";import"./FaSvgIcon-DUC6Q4wv.js";import"./SvgIcon-DDVH-xS0.js";import"./Form-D1K37nGD.js";import"./Alert-CobxnwGF.js";import"./createSvgIcon-CP7Sjzln.js";import"./Close-CCXJfw-Y.js";import"./Paper-BJPkQ8DM.js";import"./Typography-D3qZBRmm.js";const re={title:"Components/Alert/Alert",component:o,tags:["autodocs"],args:{severity:"info",children:"This text is inside the alert"}},a={render:t=>e.jsx(o,{severity:"info",...t})},n={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)};return e.jsx(d,{in:i,children:e.jsx(o,{onClose:s,...t})})}},c={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)},p=e.jsx(b,{component:"button",onClick:s,children:"Action"});return e.jsx(d,{in:i,children:e.jsx(o,{action:p,...t})})}},l={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)},p=e.jsx(b,{component:"button",onClick:s,children:"Action"});return e.jsx(d,{in:i,children:e.jsx(o,{onClose:s,action:p,...t})})}},A=["info","success","warning","error"],m={render:()=>e.jsx(e.Fragment,{children:A.map(t=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{severity:t,children:["This is a ",t," alert — check it out!"]},t),e.jsx("br",{})]}))})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const se=["_Alert","_DismissableAlert","_Action","_ActionAndClose","_Severities"];export{c as _Action,l as _ActionAndClose,a as _Alert,n as _DismissableAlert,m as _Severities,se as __namedExportsOrder,re as default};
