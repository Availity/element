import{j as s,F as a,a as l}from"./jsx-runtime-91a467a5.js";import{R as _}from"./index-8db94870.js";import{A as i,C as y}from"./Alert-d91ea012.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-83dce9db.js";import"./useThemeProps-bbf3a6ab.js";import"./extends-bab83b91.js";import"./utils-543594d3.js";import"./ButtonBase-31edf4e9.js";import"./emotion-react.browser.esm-b298e083.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./index-8ce4a492.js";import"./index-a181615a.js";import"./faMagnifyingGlass-816a2eda.js";import"./faCircleArrowRight-d415119f.js";import"./SvgIcon-f1c7c68e.js";import"./createSvgIcon-2ab2ba44.js";import"./Paper-a679b040.js";import"./IconButton-52188c55.js";const L={title:"Components/Alert/Alert",component:i,tags:["autodocs"],args:{children:"This text is inside the alert"}},t={render:e=>s(i,{severity:"info",...e})},r={render:e=>{const[b,n]=_.useState(!0);return s(y,{in:b,children:s(i,{onClose:()=>{n(!1),setTimeout(()=>n(!0),1e3)},...e})})}},S=["info","success","warning","error"],o={render:()=>s(a,{children:S.map(e=>l(a,{children:[l(i,{severity:e,children:["This is a ",e," alert — check it out!"]},e),s("br",{})]}))})};var m,c,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: AlertProps) => <Alert severity="info" {...args} />
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,h,A,v;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const N=["_Alert","_DismissableAlert","_Severities"];export{t as _Alert,r as _DismissableAlert,o as _Severities,N as __namedExportsOrder,L as default};
//# sourceMappingURL=Alert.stories-a898f9c4.js.map
