import{r as T,j as e}from"./iframe-DdXne19Y.js";import{T as s,a as h}from"./Tab-Bz08MqtD.js";import{B as v}from"./Box-C-w4SaHJ.js";import{T as g}from"./Typography-DcBpERD3.js";import"./preload-helper-Dp1pzeXC.js";import"./styled-BazYwfX2.js";import"./Tabs-C2hpLbfk.js";import"./memoTheme-CUJXAVnw.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./ButtonBase-QyfCUXJP.js";import"./useTimeout-DNSBYZWv.js";import"./TransitionGroupContext-BmVNFFik.js";import"./useForkRef-CwS1hXJN.js";import"./useEventCallback-tpV6a8iV.js";import"./isFocusVisible-B8k4qzLc.js";import"./useTheme-CuyM6APQ.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlot-C03We_gL.js";import"./mergeSlotProps-DnK45DUJ.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-By8gKRU1.js";import"./KeyboardArrowRight-DXGj2beb.js";import"./createSvgIcon-DN69LkXl.js";import"./SvgIcon-BQDSNwSM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const Q={title:"Components/Tabs/Tab",component:s,tags:["autodocs"]};function i(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}const o={render:a=>{const[r,b]=T.useState(0),x=(p,t)=>{b(t)};function l(p){const{value:t,index:n,...c}=p;return e.jsx("div",{role:"tabpanel",hidden:t!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...c,children:t===n&&e.jsx(v,{sx:{p:3},children:e.jsxs(g,{children:["Hello from panel ",n]})})})}return e.jsxs(e.Fragment,{children:[e.jsxs(h,{value:r,onChange:x,children:[e.jsx(s,{label:"Item One",...a,...i(0)}),e.jsx(s,{label:"Item Two",...a,...i(1)}),e.jsx(s,{label:"Item Three",...a,...i(2),disabled:!0})]}),e.jsx(l,{value:r,index:0}),e.jsx(l,{value:r,index:1}),e.jsx(l,{value:r,index:2})]})},args:{}};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const U=["_Tab"];export{o as _Tab,U as __namedExportsOrder,Q as default};
