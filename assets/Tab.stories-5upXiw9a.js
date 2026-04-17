import{r as b,j as e}from"./iframe-D_FBGCyt.js";import{T as s,a as x}from"./Tab-BPHO7QTo.js";import{B as c}from"./Box-CvB3zA9H.js";import{T}from"./Typography-2LRTBqXt.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-xf6f_HVu.js";import"./Tabs-YYghlnH-.js";import"./memoTheme-BLxVLpBG.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-D61WXHG0.js";import"./useTimeout-SlAgGEcH.js";import"./TransitionGroupContext-D8t5YM-9.js";import"./useForkRef-CnVOscb6.js";import"./useEventCallback-jDv7Sv7e.js";import"./isFocusVisible-B8k4qzLc.js";import"./useTheme-C9l_6OF0.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlot-BtMprAQd.js";import"./mergeSlotProps-gV_s4djX.js";import"./useSlotProps-C2D_NZSZ.js";import"./KeyboardArrowRight-Q-aFD9-a.js";import"./createSvgIcon-CrDNgKEm.js";import"./SvgIcon-5AfvjDJL.js";import"./getActiveElement-BQgAPKnO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const K={title:"Components/Tabs/Tab",component:s,tags:["autodocs"]};function i(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}const o={render:a=>{const[r,m]=b.useState(0),d=(p,t)=>{m(t)};function l(p){const{value:t,index:n,...u}=p;return e.jsx("div",{role:"tabpanel",hidden:t!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...u,children:t===n&&e.jsx(c,{sx:{p:3},children:e.jsxs(T,{children:["Hello from panel ",n]})})})}return e.jsxs(e.Fragment,{children:[e.jsxs(x,{value:r,onChange:d,children:[e.jsx(s,{label:"Item One",...a,...i(0)}),e.jsx(s,{label:"Item Two",...a,...i(1)}),e.jsx(s,{label:"Item Three",...a,...i(2),disabled:!0})]}),e.jsx(l,{value:r,index:0}),e.jsx(l,{value:r,index:1}),e.jsx(l,{value:r,index:2})]})},args:{}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
