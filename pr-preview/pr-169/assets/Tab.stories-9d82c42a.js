import{j as i,F as v,a as e}from"./jsx-runtime-a3bcee63.js";import{r as g}from"./index-570b25c1.js";import{T as c}from"./Tabs-2463f354.js";import{T as p}from"./Tab-8663fb4c.js";import{B as P}from"./Box-51bd3ea0.js";import{M as f}from"./Typography-f453bb5c.js";import"./_commonjsHelpers-042e6b4d.js";import"./createTheme-3fee607a.js";import"./react-is.production.min-a192e302.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-523cb007.js";import"./useThemeProps-98dc6282.js";import"./useTheme-c07bb8e7.js";import"./useEnhancedEffect-460150e6.js";import"./debounce-517eeb3c.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./generateUtilityClasses-b58f947a.js";import"./KeyboardArrowRight-94c6c8ce.js";import"./createSvgIcon-ca656bec.js";import"./SvgIcon-075b1db6.js";import"./ButtonBase-44753119.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useSlotProps-95ccb7bd.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./isHostComponent-73d6e646.js";import"./extendSxProp-b1abb964.js";const ee={title:"Components/Tabs/Tab",component:c,tags:["autodocs"]};function s(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}const o={render:a=>{const[r,T]=g.useState(0),h=(m,t)=>{T(t)};function l(m){const{value:t,index:n,...x}=m;return e("div",{role:"tabpanel",hidden:t!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...x,children:t===n&&e(P,{sx:{p:3},children:i(f,{children:["Hello from panel ",n]})})})}return i(v,{children:[i(c,{value:r,onChange:h,children:[e(p,{label:"Item One",...a,...s(0)}),e(p,{label:"Item Two",...a,...s(1)}),e(p,{label:"Item Three",...a,...s(2),disabled:!0})]}),e(l,{value:r,index:0}),e(l,{value:r,index:1}),e(l,{value:r,index:2})]})},args:{}};var d,u,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const ae=["_Tab"];export{o as _Tab,ae as __namedExportsOrder,ee as default};
//# sourceMappingURL=Tab.stories-9d82c42a.js.map
