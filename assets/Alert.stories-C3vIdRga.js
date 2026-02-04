import{j as e,R as u}from"./iframe-BjnuDffd.js";import{A as o}from"./Alert-TMn5JqAr.js";import{C as d}from"./Collapse-BYyNddSj.js";import{L as b}from"./Link-Cyp3RfM_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ozQD-jv-.js";import"./Tooltip-DY2U7J0u.js";import"./useTheme-C7UHXn64.js";import"./styled-DqMp1nYt.js";import"./memoTheme-B2JdP5Lg.js";import"./useSlot-jAOnMiB5.js";import"./mergeSlotProps-ShRnscjH.js";import"./useForkRef-DH1owG2H.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-C6wFpPob.js";import"./useControlled-BK8V1AI9.js";import"./useEventCallback-C7vIb1Zh.js";import"./getReactElementRef-Cj7TLjNv.js";import"./Portal-BeYOOpZP.js";import"./utils-BWRWa3IK.js";import"./TransitionGroupContext-CjQYVfWF.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BCOe5sCp.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CTKwlcpD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B91JQX2j.js";import"./CircularProgress-2p5PvuKn.js";import"./Button-Z3VsI-jq.js";import"./index-BPcsFkr_.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CargZ35d.js";import"./Alert-CxN2_of6.js";import"./createSvgIcon-mv4Pxh2n.js";import"./Close-D01zy2br.js";import"./Paper-rd8sC7yH.js";import"./Typography-fWFZNgKP.js";const te={title:"Components/Alert/Alert",component:o,tags:["autodocs"],args:{severity:"info",children:"This text is inside the alert"}},a={render:t=>e.jsx(o,{severity:"info",...t})},n={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)};return e.jsx(d,{in:i,children:e.jsx(o,{onClose:s,...t})})}},c={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)},p=e.jsx(b,{component:"button",onClick:s,children:"Action"});return e.jsx(d,{in:i,children:e.jsx(o,{action:p,...t})})}},l={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)},p=e.jsx(b,{component:"button",onClick:s,children:"Action"});return e.jsx(d,{in:i,children:e.jsx(o,{onClose:s,action:p,...t})})}},A=["info","success","warning","error"],m={render:()=>e.jsx(e.Fragment,{children:A.map(t=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{severity:t,children:["This is a ",t," alert — check it out!"]},t),e.jsx("br",{})]}))})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
