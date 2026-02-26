import{r as b,j as e}from"./iframe-DRsKaZoV.js";import{T as s,a as x}from"./Tab-oZUHEqGA.js";import{B as c}from"./Box-C-WaElnX.js";import{T}from"./Typography-DeM8j2MH.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-DO91FIEC.js";import"./Tabs-DX1AZ0Bu.js";import"./memoTheme-olSsBjA8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-CTgQ_by3.js";import"./useTimeout-C--q8J9W.js";import"./TransitionGroupContext-BL3wvAVn.js";import"./useForkRef-LQtjIIgV.js";import"./useEventCallback-Bu60zwDR.js";import"./isFocusVisible-B8k4qzLc.js";import"./useTheme-C1O811uL.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlot-DNM0KLoM.js";import"./mergeSlotProps-BURl53KS.js";import"./useSlotProps-D3Llr-h-.js";import"./KeyboardArrowRight-Bc-FmwPE.js";import"./createSvgIcon-DdCwdPBR.js";import"./SvgIcon-Dpxjd7uT.js";import"./getActiveElement-BQgAPKnO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const K={title:"Components/Tabs/Tab",component:s,tags:["autodocs"]};function i(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}const o={render:a=>{const[r,m]=b.useState(0),d=(p,t)=>{m(t)};function l(p){const{value:t,index:n,...u}=p;return e.jsx("div",{role:"tabpanel",hidden:t!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...u,children:t===n&&e.jsx(c,{sx:{p:3},children:e.jsxs(T,{children:["Hello from panel ",n]})})})}return e.jsxs(e.Fragment,{children:[e.jsxs(x,{value:r,onChange:d,children:[e.jsx(s,{label:"Item One",...a,...i(0)}),e.jsx(s,{label:"Item Two",...a,...i(1)}),e.jsx(s,{label:"Item Three",...a,...i(2),disabled:!0})]}),e.jsx(l,{value:r,index:0}),e.jsx(l,{value:r,index:1}),e.jsx(l,{value:r,index:2})]})},args:{}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const L=["_Tab"];export{o as _Tab,L as __namedExportsOrder,K as default};
