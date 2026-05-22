import{R as u,j as e}from"./iframe-D2jXllzf.js";import{A as o}from"./Alert-Dwf3OZJb.js";import{C as d}from"./Collapse-GXD2-kBy.js";import{L as b}from"./Link-C7TOntjN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-toBpsxUE.js";import"./Tooltip-GSnbTknq.js";import"./useTheme-C2p3ig_2.js";import"./styled-DdNVu9ib.js";import"./memoTheme-Zt5oAqwv.js";import"./useSlot-CazCKcce.js";import"./mergeSlotProps-CJpLwHYZ.js";import"./useForkRef-BlUwhnRH.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-CPz5sd6r.js";import"./useControlled-DpI9NEaZ.js";import"./useEventCallback-B89JyN3q.js";import"./getReactElementRef-DHdu6blE.js";import"./Portal-DNbvJLzK.js";import"./utils-B6mCZ_7g.js";import"./TransitionGroupContext-BzeXUGnN.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-FypE9v1G.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dd5dInOR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DMYh_tyc.js";import"./CircularProgress-BG5QNhqD.js";import"./Button-CwKYXhwT.js";import"./index-SmivVlA3.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-9pPXd2AZ.js";import"./Alert-wiNpMIjB.js";import"./createSvgIcon-BpTXI-oS.js";import"./Close-BsJCF7Mr.js";import"./Paper-DezgSOvY.js";import"./Typography-B2ZUFsL1.js";const te={title:"Components/Alert/Alert",component:o,tags:["autodocs"],args:{severity:"info",children:"This text is inside the alert"}},a={render:t=>e.jsx(o,{severity:"info",...t})},n={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)};return e.jsx(d,{in:i,children:e.jsx(o,{onClose:s,...t})})}},c={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)},p=e.jsx(b,{component:"button",onClick:s,children:"Action"});return e.jsx(d,{in:i,children:e.jsx(o,{action:p,...t})})}},l={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)},p=e.jsx(b,{component:"button",onClick:s,children:"Action"});return e.jsx(d,{in:i,children:e.jsx(o,{onClose:s,action:p,...t})})}},A=["info","success","warning","error"],m={render:()=>e.jsx(e.Fragment,{children:A.map(t=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{severity:t,children:["This is a ",t," alert — check it out!"]},t),e.jsx("br",{})]}))})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
