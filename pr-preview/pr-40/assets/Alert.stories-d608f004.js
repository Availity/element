import{j as s,F as a,a as l}from"./jsx-runtime-58698645.js";import{R as _}from"./index-ccf6a75d.js";import{A as i,C as y}from"./Alert-9534b194.js";import"./styled-b3e680f5.js";import"./useThemeProps-c0c32908.js";import"./extends-79cb841a.js";import"./utils-b5b0bbcf.js";import"./SvgIcon-1ac5a280.js";import"./ButtonBase-7cbb2f51.js";import"./emotion-react.browser.esm-3bd7d3fd.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-75c8d838.js";import"./index-8d7a8128.js";import"./index-c3ece1c7.js";import"./faHome-8ccf1391.js";import"./faExclamationCircle-878a3411.js";import"./Paper-ca3cde78.js";const H={title:"Components/Alert/Alert",component:i,tags:["autodocs"],args:{severity:"info",children:"This text is inside the alert"}},t={render:e=>s(i,{...e})},r={render:e=>{const[f,n]=_.useState(!0);return s(y,{in:f,children:s(i,{onClose:()=>{n(!1),setTimeout(()=>n(!0),1e3)},...e})})}},S=["info","success","warning","error"],o={render:()=>s(a,{children:S.map(e=>l(a,{children:[l(i,{severity:e,children:["This is a ",e," alert — check it out!"]},e),s("br",{})]}))})};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: AlertProps) => <Alert {...args} />
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,h,A,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(C=o.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const J=["_Alert","_DismissableAlert","_Severities"];export{t as _Alert,r as _DismissableAlert,o as _Severities,J as __namedExportsOrder,H as default};
//# sourceMappingURL=Alert.stories-d608f004.js.map
