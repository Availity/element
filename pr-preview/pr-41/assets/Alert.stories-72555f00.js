import{j as s,F as a,a as l}from"./jsx-runtime-91a467a5.js";import{R as _}from"./index-8db94870.js";import{A as i,C as y}from"./Alert-e7bc9e64.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-38682cfe.js";import"./useThemeProps-bac2eb8f.js";import"./extends-bab83b91.js";import"./utils-918a2028.js";import"./SvgIcon-719795fb.js";import"./ButtonBase-2a1f4575.js";import"./emotion-react.browser.esm-bff3daf8.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./index-8ce4a492.js";import"./index-88762835.js";import"./faHome-8ccf1391.js";import"./faExclamationCircle-878a3411.js";import"./Paper-7d3ed731.js";const J={title:"Components/Alert/Alert",component:i,tags:["autodocs"],args:{severity:"info",children:"This text is inside the alert"}},t={render:e=>s(i,{...e})},r={render:e=>{const[f,n]=_.useState(!0);return s(y,{in:f,children:s(i,{onClose:()=>{n(!1),setTimeout(()=>n(!0),1e3)},...e})})}},S=["info","success","warning","error"],o={render:()=>s(a,{children:S.map(e=>l(a,{children:[l(i,{severity:e,children:["This is a ",e," alert — check it out!"]},e),s("br",{})]}))})};var m,c,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: AlertProps) => <Alert {...args} />
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,h,A,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:"The `Collapse` component is a recommended way to handle visual dismissing of an alert.\nCheck out the Material UI docs for more information.",...(g=(A=r.parameters)==null?void 0:A.docs)==null?void 0:g.description}}};var v,C,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <>
    {severities.map(severity => <>
        <Alert severity={severity} key={severity}>
          This is a {severity} alert — check it out!
        </Alert>
        <br />
      </>)}
  </>
}`,...(b=(C=o.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const K=["_Alert","_DismissableAlert","_Severities"];export{t as _Alert,r as _DismissableAlert,o as _Severities,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Alert.stories-72555f00.js.map
