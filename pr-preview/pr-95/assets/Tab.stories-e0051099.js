import{a as i,F as v,j as e}from"./jsx-runtime-91a467a5.js";import{r as g}from"./index-8db94870.js";import{T as c}from"./Tabs-65c6d0a3.js";import{T as s}from"./Tab-87600133.js";import{B as P}from"./Box-08ad8bbe.js";import{T as f}from"./Typography-b1d35567.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-is.production.min-a192e302.js";import"./styled-657e2aa7.js";import"./useThemeProps-ad7d4b8c.js";import"./extends-bab83b91.js";import"./useTheme-92c76a56.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./useEnhancedEffect-c45cae33.js";import"./KeyboardArrowRight-a6d1a9a8.js";import"./createSvgIcon-fedf70c8.js";import"./SvgIcon-c3c5be0b.js";import"./ButtonBase-6cf3e0c4.js";import"./emotion-react.browser.esm-a6af08ad.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./useSlotProps-d00a877a.js";import"./isHostComponent-73d6e646.js";import"./extendSxProp-1ec1a8c1.js";const U={title:"Components/Tabs/Tab",component:c,tags:["autodocs"]};function p(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}const o={render:a=>{const[r,T]=g.useState(0),h=(m,t)=>{T(t)};function l(m){const{value:t,index:n,...x}=m;return e("div",{role:"tabpanel",hidden:t!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...x,children:t===n&&e(P,{sx:{p:3},children:i(f,{children:["Hello from panel ",n]})})})}return i(v,{children:[i(c,{value:r,onChange:h,children:[e(s,{label:"Item One",...a,...p(0)}),e(s,{label:"Item Two",...a,...p(1)}),e(s,{label:"Item Three",...a,...p(2),disabled:!0})]}),e(l,{value:r,index:0}),e(l,{value:r,index:1}),e(l,{value:r,index:2})]})},args:{}};var d,u,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: TabProps) => {
    interface TabPanelProps {
      children?: React.ReactNode;
      index: number;
      value: number;
    }
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    function CustomTabPanel(props: TabPanelProps) {
      const {
        value,
        index,
        ...other
      } = props;
      return <div role="tabpanel" hidden={value !== index} id={\`simple-tabpanel-\${index}\`} aria-labelledby={\`simple-tab-\${index}\`} {...other}>
          {value === index && <Box sx={{
          p: 3
        }}>
              <Typography>Hello from panel {index}</Typography>
            </Box>}
        </div>;
    }
    return <>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Item One" {...args} {...a11yProps(0)} />
          <Tab label="Item Two" {...args} {...a11yProps(1)} />
          <Tab label="Item Three" {...args} {...a11yProps(2)} disabled />
        </Tabs>
        <CustomTabPanel value={value} index={0} />
        <CustomTabPanel value={value} index={1} />
        <CustomTabPanel value={value} index={2} />
      </>;
  },
  args: {}
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const W=["_Tab"];export{o as _Tab,W as __namedExportsOrder,U as default};
//# sourceMappingURL=Tab.stories-e0051099.js.map
