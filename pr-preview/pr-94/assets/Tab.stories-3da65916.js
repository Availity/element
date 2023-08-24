import{a as s,F as v,j as e}from"./jsx-runtime-91a467a5.js";import{r as g}from"./index-8db94870.js";import{T as c}from"./Tabs-54e85b22.js";import{T as i}from"./Tab-0d507c33.js";import{B as P}from"./Box-992d9cc4.js";import{T as f}from"./Typography-d2e5eadd.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-is.production.min-a192e302.js";import"./styled-3f92ccfd.js";import"./useThemeProps-e4a8cdbc.js";import"./extends-bab83b91.js";import"./useTheme-9732e621.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./ButtonBase-984984ab.js";import"./emotion-react.browser.esm-638d3fdc.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./KeyboardArrowRight-b2c20915.js";import"./createSvgIcon-ac09799d.js";import"./SvgIcon-2cc6257a.js";import"./useSlotProps-cdd19d6c.js";import"./extendSxProp-60b1cf3b.js";const M={title:"Components/Tabs/Tab",component:c,tags:["autodocs"]};function p(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}const o={render:a=>{const[r,T]=g.useState(0),h=(m,t)=>{T(t)};function l(m){const{value:t,index:n,...x}=m;return e("div",{role:"tabpanel",hidden:t!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...x,children:t===n&&e(P,{sx:{p:3},children:s(f,{children:["Hello from panel ",n]})})})}return s(v,{children:[s(c,{value:r,onChange:h,children:[e(i,{label:"Item One",...a,...p(0)}),e(i,{label:"Item Two",...a,...p(1)}),e(i,{label:"Item Three",...a,...p(2),disabled:!0})]}),e(l,{value:r,index:0}),e(l,{value:r,index:1}),e(l,{value:r,index:2})]})},args:{}};var d,u,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const Q=["_Tab"];export{o as _Tab,Q as __namedExportsOrder,M as default};
//# sourceMappingURL=Tab.stories-3da65916.js.map
