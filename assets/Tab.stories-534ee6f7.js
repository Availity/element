import{a as i,F as v,j as e}from"./jsx-runtime-390e5fc8.js";import{r as g}from"./index-570b25c1.js";import{T as c}from"./Tabs-b5d72afc.js";import{T as s}from"./Tab-2fb35ed1.js";import{B as P}from"./Box-7f261278.js";import{M as f}from"./Typography-125528da.js";import"./_commonjsHelpers-042e6b4d.js";import"./createTheme-e6b56ddb.js";import"./react-is.production.min-a192e302.js";import"./clsx-8416b751.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-78cd751f.js";import"./useThemeProps-285a8f6c.js";import"./useTheme-b3699c65.js";import"./debounce-517eeb3c.js";import"./useEnhancedEffect-460150e6.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./generateUtilityClasses-2915a045.js";import"./KeyboardArrowRight-f1b42dda.js";import"./createSvgIcon-c7fbf131.js";import"./SvgIcon-f3e07af8.js";import"./ButtonBase-6abe7f0b.js";import"./emotion-react.browser.esm-69a15469.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useSlotProps-1710581f.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./extendSxProp-4d42c058.js";const Z={title:"Components/Tabs/Tab",component:c,tags:["autodocs"]};function p(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}const o={render:a=>{const[r,T]=g.useState(0),h=(m,t)=>{T(t)};function l(m){const{value:t,index:n,...x}=m;return e("div",{role:"tabpanel",hidden:t!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...x,children:t===n&&e(P,{sx:{p:3},children:i(f,{children:["Hello from panel ",n]})})})}return i(v,{children:[i(c,{value:r,onChange:h,children:[e(s,{label:"Item One",...a,...p(0)}),e(s,{label:"Item Two",...a,...p(1)}),e(s,{label:"Item Three",...a,...p(2),disabled:!0})]}),e(l,{value:r,index:0}),e(l,{value:r,index:1}),e(l,{value:r,index:2})]})},args:{}};var d,u,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const ee=["_Tab"];export{o as _Tab,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=Tab.stories-534ee6f7.js.map
