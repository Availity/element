import{a as i,F as v,j as e}from"./jsx-runtime-390e5fc8.js";import{r as P}from"./index-570b25c1.js";import{T as c}from"./Tabs-cc911131.js";import{T as s}from"./Tab-0969d3a6.js";import{B as f}from"./Box-df8a6414.js";import{M as g}from"./Typography-cb5a2c80.js";import"./_commonjsHelpers-042e6b4d.js";import"./createTheme-3fee607a.js";import"./react-is.production.min-a192e302.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-523cb007.js";import"./useThemeProps-98dc6282.js";import"./useTheme-c07bb8e7.js";import"./useEnhancedEffect-460150e6.js";import"./debounce-517eeb3c.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./generateUtilityClasses-b58f947a.js";import"./KeyboardArrowRight-aeba4e0f.js";import"./createSvgIcon-b91027d9.js";import"./SvgIcon-4a92f20a.js";import"./ButtonBase-e49cd770.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useSlotProps-95ccb7bd.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./isHostComponent-73d6e646.js";import"./extendSxProp-b1abb964.js";const ee={title:"Components/Tabs/Tabs",component:c,tags:["autodocs"]};function p(n){return{id:`simple-tab-${n}`,"aria-controls":`simple-tabpanel-${n}`}}const o={render:n=>{const[r,T]=P.useState(0),h=(m,t)=>{T(t)};function l(m){const{value:t,index:a,...x}=m;return e("div",{role:"tabpanel",hidden:t!==a,id:`simple-tabpanel-${a}`,"aria-labelledby":`simple-tab-${a}`,...x,children:t===a&&e(f,{sx:{p:3},children:i(g,{children:["Hello from panel ",a]})})})}return i(v,{children:[i(c,{value:r,onChange:h,...n,children:[e(s,{label:"Item One",...p(0)}),e(s,{label:"Item Two",...p(1)}),e(s,{label:"Item Three",...p(2),disabled:!0})]}),e(l,{value:r,index:0}),e(l,{value:r,index:1}),e(l,{value:r,index:2})]})}};var d,u,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const ae=["_Tabs"];export{o as _Tabs,ae as __namedExportsOrder,ee as default};
//# sourceMappingURL=Tabs.stories-bb7cfda8.js.map
