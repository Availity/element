import{a as s,F as v,j as e}from"./jsx-runtime-390e5fc8.js";import{r as g}from"./index-570b25c1.js";import{T as c}from"./Tabs-a02c495e.js";import{T as i}from"./Tab-3a906fde.js";import{B as P}from"./Box-84f0fe93.js";import{M as f}from"./Typography-66f9d519.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-is.production.min-a192e302.js";import"./styled-46700abb.js";import"./useThemeProps-a0bcf1fa.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useTheme-d6ae80b7.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./ButtonBase-aeff0912.js";import"./emotion-react.browser.esm-dc94dc3c.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./KeyboardArrowRight-8c9c4049.js";import"./createSvgIcon-ddb735eb.js";import"./SvgIcon-5897cc2b.js";import"./useSlotProps-31aaaa55.js";import"./extendSxProp-00384f26.js";const J={title:"Components/Tabs/Tab",component:c,tags:["autodocs"]};function p(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}const o={render:a=>{const[r,T]=g.useState(0),h=(m,t)=>{T(t)};function l(m){const{value:t,index:n,...x}=m;return e("div",{role:"tabpanel",hidden:t!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...x,children:t===n&&e(P,{sx:{p:3},children:s(f,{children:["Hello from panel ",n]})})})}return s(v,{children:[s(c,{value:r,onChange:h,children:[e(i,{label:"Item One",...a,...p(0)}),e(i,{label:"Item Two",...a,...p(1)}),e(i,{label:"Item Three",...a,...p(2),disabled:!0})]}),e(l,{value:r,index:0}),e(l,{value:r,index:1}),e(l,{value:r,index:2})]})},args:{}};var d,u,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const K=["_Tab"];export{o as _Tab,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Tab.stories-e54dc02f.js.map
