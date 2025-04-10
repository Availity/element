import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{e as u}from"./index-DcWiA9TO.js";import{A as s}from"./Alert-BtFJorfx.js";import{C as d}from"./Collapse-quvbLMTx.js";import{L as P}from"./Link-DYJ9uraP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-dekIPCUU.js";import"./Tooltip-CiiaKkqp.js";import"./generateUtilityClass-CVWqFxsA.js";import"./identifier-Dtqimryx.js";import"./index-nos-0K8U.js";import"./useTheme-DUkCvbx_.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./useTheme-C2CrmYKc.js";import"./styled-CF1hcdwO.js";import"./memoTheme-D-rVhYRp.js";import"./useSlot-DnkSxE3X.js";import"./resolveComponentProps-Dg20wxiM.js";import"./useForkRef-BVrIj09m.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-CBAx_nZm.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BAIpVL6Y.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Caxu-qgA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DbVRbsLs.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./CircularProgress-D8w9ZPs6.js";import"./Button-DDPbJ3HZ.js";import"./LoadingButton-BRK58AHE.js";import"./index-BTr7iyfv.js";import"./faCircleArrowRight-6L8v8FIg.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./SvgIcon-DSdWmKAH.js";import"./Alert-ui2dSBj_.js";import"./createSvgIcon-TketyoFF.js";import"./Close-CpXO-CFZ.js";import"./Paper-DXcIEVia.js";import"./Typography-CvSvtD2a.js";import"./index-f0Aa_BgU.js";import"./extendSxProp-B5AgUjQT.js";const Pe={title:"Components/Alert/Alert",component:s,tags:["autodocs"],args:{severity:"info",children:"This text is inside the alert"}},a={render:t=>e.jsx(s,{severity:"info",...t})},n={render:t=>{const[i,r]=u.useState(!0),o=()=>{r(!1),setTimeout(()=>r(!0),1e3)};return e.jsx(d,{in:i,children:e.jsx(s,{onClose:o,...t})})}},m={render:t=>{const[i,r]=u.useState(!0),o=()=>{r(!1),setTimeout(()=>r(!0),1e3)},p=e.jsx(P,{component:"button",onClick:o,children:"Action"});return e.jsx(d,{in:i,children:e.jsx(s,{action:p,...t})})}},c={render:t=>{const[i,r]=u.useState(!0),o=()=>{r(!1),setTimeout(()=>r(!0),1e3)},p=e.jsx(P,{component:"button",onClick:o,children:"Action"});return e.jsx(d,{in:i,children:e.jsx(s,{onClose:o,action:p,...t})})}},R=["info","success","warning","error"],l={render:()=>e.jsx(e.Fragment,{children:R.map(t=>e.jsxs(e.Fragment,{children:[e.jsxs(s,{severity:t,children:["This is a ",t," alert — check it out!"]},t),e.jsx("br",{})]}))})};var b,A,C;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(O=(L=l.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const Re=["_Alert","_DismissableAlert","_Action","_ActionAndClose","_Severities"];export{m as _Action,c as _ActionAndClose,a as _Alert,n as _DismissableAlert,l as _Severities,Re as __namedExportsOrder,Pe as default};
