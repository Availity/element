import{j as e,e as u}from"./iframe-uHgbxI5K.js";import{A as o}from"./Alert-Idr_1IcE.js";import{C as d}from"./Collapse-C8biy26g.js";import{L as P}from"./Link-DaRjCIQg.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BovvASnm.js";import"./Tooltip-sNbil-gw.js";import"./useTheme-CtIbOmqo.js";import"./styled-8YbhM9a0.js";import"./memoTheme-oX4ulD_d.js";import"./useSlot-DoiGXRjP.js";import"./mergeSlotProps-Muvz4q9m.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BQsEeVXe.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-CnBSTBeY.js";import"./useControlled-kFiMxWUJ.js";import"./useEventCallback-1jk_qbz7.js";import"./getReactElementRef-WEJqQMPe.js";import"./Portal-DdZjlCce.js";import"./utils-Cj1f_ISK.js";import"./TransitionGroupContext-D0JdioPb.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BTIA_7et.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CXBoVS4j.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DWgIiiPw.js";import"./CircularProgress-DxKRrnZT.js";import"./Button-D_ToZGbA.js";import"./index-CUd5PmZT.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-C1fws6HS.js";import"./Alert-XyFG9jF9.js";import"./createSvgIcon-BmijsGhR.js";import"./Close-B_oSM_XG.js";import"./Paper-Dmj0lJnR.js";import"./Typography-BUwJzphg.js";const ge={title:"Components/Alert/Alert",component:o,tags:["autodocs"],args:{severity:"info",children:"This text is inside the alert"}},a={render:t=>e.jsx(o,{severity:"info",...t})},n={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)};return e.jsx(d,{in:i,children:e.jsx(o,{onClose:s,...t})})}},c={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)},p=e.jsx(P,{component:"button",onClick:s,children:"Action"});return e.jsx(d,{in:i,children:e.jsx(o,{action:p,...t})})}},l={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)},p=e.jsx(P,{component:"button",onClick:s,children:"Action"});return e.jsx(d,{in:i,children:e.jsx(o,{onClose:s,action:p,...t})})}},R=["info","success","warning","error"],m={render:()=>e.jsx(e.Fragment,{children:R.map(t=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{severity:t,children:["This is a ",t," alert — check it out!"]},t),e.jsx("br",{})]}))})};var b,A,C;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: Omit<AlertProps, 'ref'>) => <Alert severity="info" {...args} />
}`,...(C=(A=a.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var f,v,g,h,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source},description:{story:"The `Collapse` component is a recommended way to handle visual dismissing of an alert.\nCheck out the Material UI docs for more information.",...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.description}}};var j,k,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(S=(k=c.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var _,V,T;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(T=(V=l.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var y,L,O;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <>
    {severities.map(severity => <>
        <Alert severity={severity} key={severity}>
          This is a {severity} alert — check it out!
        </Alert>
        <br />
      </>)}
  </>
}`,...(O=(L=m.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const he=["_Alert","_DismissableAlert","_Action","_ActionAndClose","_Severities"];export{c as _Action,l as _ActionAndClose,a as _Alert,n as _DismissableAlert,m as _Severities,he as __namedExportsOrder,ge as default};
