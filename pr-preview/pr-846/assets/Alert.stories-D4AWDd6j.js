import{j as e,e as u}from"./iframe-BOqhEPj6.js";import{A as o}from"./Alert-DENS-D1O.js";import{C as d}from"./Collapse-DPvamv9x.js";import{L as P}from"./Link-DMwU-t10.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CQw0a6ar.js";import"./Tooltip-DKIHpwU2.js";import"./useTheme-s5qe_7AX.js";import"./styled-ClQgRsdc.js";import"./memoTheme-BYC15E_2.js";import"./useSlot-B469CtEr.js";import"./mergeSlotProps-sNcrx_r5.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D87wou6e.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-CKtuW5yl.js";import"./useControlled-CmW8DIBb.js";import"./useEventCallback-BHkbNqwn.js";import"./getReactElementRef-DF_NnWMb.js";import"./Portal-Cx3wFGpK.js";import"./utils-CDaWu4n1.js";import"./TransitionGroupContext-TO625Yxj.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DnEE7xuk.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BP3VjvuD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C7cVXKAH.js";import"./CircularProgress-Xg5tMO8-.js";import"./Button-BDF2rRxm.js";import"./index-DX6yAWWK.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-BlVGnbba.js";import"./Alert-CRy7X466.js";import"./createSvgIcon-BzRll-a0.js";import"./Close-CCJbhEGR.js";import"./Paper-Bx06Uw5g.js";import"./Typography-DCSeVpBd.js";const ge={title:"Components/Alert/Alert",component:o,tags:["autodocs"],args:{severity:"info",children:"This text is inside the alert"}},a={render:t=>e.jsx(o,{severity:"info",...t})},n={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)};return e.jsx(d,{in:i,children:e.jsx(o,{onClose:s,...t})})}},c={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)},p=e.jsx(P,{component:"button",onClick:s,children:"Action"});return e.jsx(d,{in:i,children:e.jsx(o,{action:p,...t})})}},l={render:t=>{const[i,r]=u.useState(!0),s=()=>{r(!1),setTimeout(()=>r(!0),1e3)},p=e.jsx(P,{component:"button",onClick:s,children:"Action"});return e.jsx(d,{in:i,children:e.jsx(o,{onClose:s,action:p,...t})})}},R=["info","success","warning","error"],m={render:()=>e.jsx(e.Fragment,{children:R.map(t=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{severity:t,children:["This is a ",t," alert — check it out!"]},t),e.jsx("br",{})]}))})};var b,A,C;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
