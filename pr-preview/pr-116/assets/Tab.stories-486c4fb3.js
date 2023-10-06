import{a as i,F as v,j as e}from"./jsx-runtime-390e5fc8.js";import{r as g}from"./index-570b25c1.js";import{T as c}from"./Tabs-d8765ea0.js";import{T as s}from"./Tab-dca237dc.js";import{B as P}from"./Box-ce79f7f7.js";import{M as f}from"./Typography-72ef0a36.js";import"./_commonjsHelpers-042e6b4d.js";import"./createTheme-b02e766d.js";import"./react-is.production.min-a192e302.js";import"./clsx-43049957.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-69a32198.js";import"./useThemeProps-ac7867ed.js";import"./useTheme-a234fe30.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./useEnhancedEffect-460150e6.js";import"./generateUtilityClasses-b06d554b.js";import"./KeyboardArrowRight-71a82ecc.js";import"./createSvgIcon-5dca4d92.js";import"./SvgIcon-667e6608.js";import"./ButtonBase-78eecb53.js";import"./emotion-react.browser.esm-dc887828.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useSlotProps-c5009eb1.js";import"./objectWithoutPropertiesLoose-830c72af.js";import"./extendSxProp-b0ad88fc.js";const W={title:"Components/Tabs/Tab",component:c,tags:["autodocs"]};function p(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}const o={render:a=>{const[r,T]=g.useState(0),h=(m,t)=>{T(t)};function l(m){const{value:t,index:n,...x}=m;return e("div",{role:"tabpanel",hidden:t!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...x,children:t===n&&e(P,{sx:{p:3},children:i(f,{children:["Hello from panel ",n]})})})}return i(v,{children:[i(c,{value:r,onChange:h,children:[e(s,{label:"Item One",...a,...p(0)}),e(s,{label:"Item Two",...a,...p(1)}),e(s,{label:"Item Three",...a,...p(2),disabled:!0})]}),e(l,{value:r,index:0}),e(l,{value:r,index:1}),e(l,{value:r,index:2})]})},args:{}};var d,u,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const X=["_Tab"];export{o as _Tab,X as __namedExportsOrder,W as default};
//# sourceMappingURL=Tab.stories-486c4fb3.js.map
