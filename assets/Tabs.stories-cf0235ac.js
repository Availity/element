import{j as i,F as v,a as e}from"./jsx-runtime-a3bcee63.js";import{r as P}from"./index-570b25c1.js";import{T as c}from"./Tabs-50bc7406.js";import{T as s}from"./Tab-f218eafc.js";import{B as f}from"./Box-0b96d669.js";import{M as g}from"./Typography-f61e077a.js";import"./_commonjsHelpers-042e6b4d.js";import"./createTheme-bcd1d157.js";import"./react-is.production.min-a192e302.js";import"./clsx-7dc4e18d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-7846e708.js";import"./useThemeProps-018254e6.js";import"./useTheme-76c02901.js";import"./useEnhancedEffect-460150e6.js";import"./debounce-517eeb3c.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./generateUtilityClasses-70c60a0e.js";import"./KeyboardArrowRight-f02ae11e.js";import"./createSvgIcon-60c2b2ae.js";import"./SvgIcon-951d7748.js";import"./ButtonBase-d80b4855.js";import"./emotion-react.browser.esm-474fda6d.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useSlotProps-f4be827f.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./extendSxProp-9115426f.js";const Z={title:"Components/Tabs/Tabs",component:c,tags:["autodocs"]};function p(n){return{id:`simple-tab-${n}`,"aria-controls":`simple-tabpanel-${n}`}}const o={render:n=>{const[r,T]=P.useState(0),h=(m,t)=>{T(t)};function l(m){const{value:t,index:a,...x}=m;return e("div",{role:"tabpanel",hidden:t!==a,id:`simple-tabpanel-${a}`,"aria-labelledby":`simple-tab-${a}`,...x,children:t===a&&e(f,{sx:{p:3},children:i(g,{children:["Hello from panel ",a]})})})}return i(v,{children:[i(c,{value:r,onChange:h,...n,children:[e(s,{label:"Item One",...p(0)}),e(s,{label:"Item Two",...p(1)}),e(s,{label:"Item Three",...p(2),disabled:!0})]}),e(l,{value:r,index:0}),e(l,{value:r,index:1}),e(l,{value:r,index:2})]})}};var d,u,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const ee=["_Tabs"];export{o as _Tabs,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=Tabs.stories-cf0235ac.js.map