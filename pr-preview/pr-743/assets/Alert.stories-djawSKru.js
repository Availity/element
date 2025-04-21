import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{e as u}from"./index-BgYLq7fD.js";import{A as s}from"./Alert-DIc-4Pou.js";import{C as d}from"./Collapse-CiPJcNM-.js";import{L as P}from"./Link-BSmfV1tO.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DnNfvsmq.js";import"./Tooltip-CIyLwlBA.js";import"./generateUtilityClass-BeVSWKCg.js";import"./identifier-CudAVvBZ.js";import"./index-DyJdRKzS.js";import"./useTheme-Cx1wRXKO.js";import"./DefaultPropsProvider-CWkNlXkE.js";import"./useTheme-Ib01SJ3a.js";import"./styled-CKuRQFSa.js";import"./memoTheme-CpoNRPWX.js";import"./useSlot-1VRyIerd.js";import"./resolveComponentProps-CCNxqvxI.js";import"./useForkRef-Dz4aGlyk.js";import"./generateUtilityClasses-whvyra8-.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./useControlled-DxC1uCGX.js";import"./useId-DIK8ekB4.js";import"./getReactElementRef-Df0xbma2.js";import"./Portal-C2J4q3Ji.js";import"./utils-tFrEP9Vf.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BmqT0tgx.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D_kG6RhR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D97P5WV0.js";import"./emotion-react.browser.esm-v7Jm8XFw.js";import"./CircularProgress-fcRSDrpN.js";import"./Button-yLAd6_L_.js";import"./LoadingButton-Cl76w144.js";import"./index-BAgvEqVW.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./SvgIcon-CiBNlF9H.js";import"./Alert-d3Gg0mya.js";import"./createSvgIcon-BWWwXn7v.js";import"./Close-_BvKU_hM.js";import"./Paper-4P5FqKie.js";import"./Typography-COSof5sR.js";import"./index-DfraP8LW.js";import"./extendSxProp-BY7TjwKM.js";const we={title:"Components/Alert/Alert",component:s,tags:["autodocs"],args:{severity:"info",children:"This text is inside the alert"}},a={render:t=>e.jsx(s,{severity:"info",...t})},n={render:t=>{const[i,r]=u.useState(!0),o=()=>{r(!1),setTimeout(()=>r(!0),1e3)};return e.jsx(d,{in:i,children:e.jsx(s,{onClose:o,...t})})}},m={render:t=>{const[i,r]=u.useState(!0),o=()=>{r(!1),setTimeout(()=>r(!0),1e3)},p=e.jsx(P,{component:"button",onClick:o,children:"Action"});return e.jsx(d,{in:i,children:e.jsx(s,{action:p,...t})})}},c={render:t=>{const[i,r]=u.useState(!0),o=()=>{r(!1),setTimeout(()=>r(!0),1e3)},p=e.jsx(P,{component:"button",onClick:o,children:"Action"});return e.jsx(d,{in:i,children:e.jsx(s,{onClose:o,action:p,...t})})}},R=["info","success","warning","error"],l={render:()=>e.jsx(e.Fragment,{children:R.map(t=>e.jsxs(e.Fragment,{children:[e.jsxs(s,{severity:t,children:["This is a ",t," alert — check it out!"]},t),e.jsx("br",{})]}))})};var b,A,C;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source},description:{story:"The `Collapse` component is a recommended way to handle visual dismissing of an alert.\nCheck out the Material UI docs for more information.",...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.description}}};var j,k,S;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(S=(k=m.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var _,V,T;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(T=(V=c.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var y,L,O;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <>
    {severities.map(severity => <>
        <Alert severity={severity} key={severity}>
          This is a {severity} alert — check it out!
        </Alert>
        <br />
      </>)}
  </>
}`,...(O=(L=l.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const De=["_Alert","_DismissableAlert","_Action","_ActionAndClose","_Severities"];export{m as _Action,c as _ActionAndClose,a as _Alert,n as _DismissableAlert,l as _Severities,De as __namedExportsOrder,we as default};
