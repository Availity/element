import{a as s,F as v,j as e}from"./jsx-runtime-390e5fc8.js";import{r as P}from"./index-570b25c1.js";import{T as c}from"./Tabs-493403f7.js";import{T as i}from"./Tab-916c0a15.js";import{B as f}from"./Box-4c9f5af0.js";import{M as g}from"./Typography-8314e3e3.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-is.production.min-a192e302.js";import"./styled-2191822d.js";import"./useThemeProps-66ab754c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useTheme-c775f3da.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./ButtonBase-121cbb7f.js";import"./emotion-react.browser.esm-d7d6545d.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./KeyboardArrowRight-56f43038.js";import"./createSvgIcon-cafa5f0c.js";import"./SvgIcon-644454bc.js";import"./useSlotProps-38dd38c0.js";import"./extendSxProp-564f0963.js";const J={title:"Components/Tabs/Tabs",component:c,tags:["autodocs"]};function p(n){return{id:`simple-tab-${n}`,"aria-controls":`simple-tabpanel-${n}`}}const o={render:n=>{const[r,T]=P.useState(0),h=(m,t)=>{T(t)};function l(m){const{value:t,index:a,...x}=m;return e("div",{role:"tabpanel",hidden:t!==a,id:`simple-tabpanel-${a}`,"aria-labelledby":`simple-tab-${a}`,...x,children:t===a&&e(f,{sx:{p:3},children:s(g,{children:["Hello from panel ",a]})})})}return s(v,{children:[s(c,{value:r,onChange:h,...n,children:[e(i,{label:"Item One",...p(0)}),e(i,{label:"Item Two",...p(1)}),e(i,{label:"Item Three",...p(2),disabled:!0})]}),e(l,{value:r,index:0}),e(l,{value:r,index:1}),e(l,{value:r,index:2})]})}};var d,u,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: TabsProps) => {
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
        <Tabs value={value} onChange={handleChange} {...args}>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} disabled />
        </Tabs>
        <CustomTabPanel value={value} index={0} />
        <CustomTabPanel value={value} index={1} />
        <CustomTabPanel value={value} index={2} />
      </>;
  }
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const K=["_Tabs"];export{o as _Tabs,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Tabs.stories-c7444500.js.map