import{j as s,F as a,a as l}from"./jsx-runtime-670450c2.js";import{R as _}from"./index-f1f749bf.js";import{A as i,C as y}from"./Alert-675a2aae.js";import"./_commonjsHelpers-042e6b4d.js";import"./useThemeProps-545788c1.js";import"./extends-98964cd2.js";import"./emotion-element-6a883da9.browser.esm-1c5b50fe.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./index-4b118493.js";import"./emotion-react.browser.esm-5cb50a94.js";import"./inheritsLoose-d374ba88.js";import"./index-96c5f47c.js";import"./ButtonBase-eb9095b7.js";import"./useForkRef-2e794f8b.js";import"./faMagnifyingGlass-99b7af3b.js";import"./faExclamationCircle-878a3411.js";import"./useTheme-e15b8e4e.js";const G={title:"Components/Alert/Alert",component:i,tags:["autodocs"],args:{children:"This text is inside the alert"}},t={render:e=>s(i,{severity:"info",...e})},r={render:e=>{const[b,n]=_.useState(!0);return s(y,{in:b,children:s(i,{onClose:()=>{n(!1),setTimeout(()=>n(!0),1e3)},...e})})}},S=["info","success","warning","error"],o={render:()=>s(a,{children:S.map(e=>l(a,{children:[l(i,{severity:e,children:["This is a ",e," alert — check it out!"]},e),s("br",{})]}))})};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: AlertProps) => <Alert severity="info" {...args} />
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,h,A,v;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: AlertProps) => {
    const [visible, setVisible] = React.useState(true);
    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };
    return <Collapse in={visible}>
        <Alert onClose={onClose} {...args} />
      </Collapse>;
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:"The `Collapse` component is a recommended way to handle visual dismissing of an alert.\nCheck out the Material UI docs for more information.",...(v=(A=r.parameters)==null?void 0:A.docs)==null?void 0:v.description}}};var f,g,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <>
    {severities.map(severity => <>
        <Alert severity={severity} key={severity}>
          This is a {severity} alert — check it out!
        </Alert>
        <br />
      </>)}
  </>
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const H=["_Alert","_DismissableAlert","_Severities"];export{t as _Alert,r as _DismissableAlert,o as _Severities,H as __namedExportsOrder,G as default};
//# sourceMappingURL=Alert.stories-c8408c44.js.map
