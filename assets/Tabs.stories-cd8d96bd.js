import{a as s,F as v,j as e}from"./jsx-runtime-91a467a5.js";import{r as P}from"./index-8db94870.js";import{T as c}from"./Tabs-54e85b22.js";import{T as i}from"./Tab-0d507c33.js";import{B as f}from"./Box-992d9cc4.js";import{T as g}from"./Typography-d2e5eadd.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-is.production.min-a192e302.js";import"./styled-3f92ccfd.js";import"./useThemeProps-e4a8cdbc.js";import"./extends-bab83b91.js";import"./useTheme-9732e621.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./ButtonBase-984984ab.js";import"./emotion-react.browser.esm-638d3fdc.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./KeyboardArrowRight-b2c20915.js";import"./createSvgIcon-ac09799d.js";import"./SvgIcon-2cc6257a.js";import"./useSlotProps-cdd19d6c.js";import"./extendSxProp-60b1cf3b.js";const M={title:"Components/Tabs/Tabs",component:c,tags:["autodocs"]};function p(n){return{id:`simple-tab-${n}`,"aria-controls":`simple-tabpanel-${n}`}}const o={render:n=>{const[r,T]=P.useState(0),h=(m,t)=>{T(t)};function l(m){const{value:t,index:a,...x}=m;return e("div",{role:"tabpanel",hidden:t!==a,id:`simple-tabpanel-${a}`,"aria-labelledby":`simple-tab-${a}`,...x,children:t===a&&e(f,{sx:{p:3},children:s(g,{children:["Hello from panel ",a]})})})}return s(v,{children:[s(c,{value:r,onChange:h,...n,children:[e(i,{label:"Item One",...p(0)}),e(i,{label:"Item Two",...p(1)}),e(i,{label:"Item Three",...p(2),disabled:!0})]}),e(l,{value:r,index:0}),e(l,{value:r,index:1}),e(l,{value:r,index:2})]})}};var d,u,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const Q=["_Tabs"];export{o as _Tabs,Q as __namedExportsOrder,M as default};
//# sourceMappingURL=Tabs.stories-cd8d96bd.js.map
