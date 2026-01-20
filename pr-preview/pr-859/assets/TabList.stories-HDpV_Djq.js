import{r as c,j as e}from"./iframe-DDdys5VZ.js";import{L as v,U as d}from"./index-BnYYGU_m.js";import{a as i,T as p,b as l}from"./TabPanel-LBx6RIDQ.js";import{T as t}from"./Tab-BL2vW-0P.js";import"./preload-helper-PPVm8Dsz.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DHyw-wAY.js";import"./memoTheme-Cxx5qwbm.js";import"./styled-hFTqa5AW.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./TabPanel-BdN_eqs0.js";import"./Tabs-78RaiChy.js";import"./ButtonBase-DZVI88h8.js";import"./useTimeout-DZwXI9W9.js";import"./TransitionGroupContext-Dv_3Vfqr.js";import"./useForkRef-CnZ00-R9.js";import"./useEventCallback-Cc8SLIyn.js";import"./isFocusVisible-B8k4qzLc.js";import"./useTheme-3S67f5Cb.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlot-tZFGbiOx.js";import"./mergeSlotProps-4h4cl7Iv.js";import"./useSlotProps-CMLU_yM0.js";import"./KeyboardArrowRight-Ct4xqaq_.js";import"./createSvgIcon-Q7sAoZ8R.js";import"./getActiveElement-BQgAPKnO.js";const G={title:"Components/Tabs/TabList",component:i,argTypes:{level:{options:["primary","secondary"],control:{type:"radio"}}},tags:["autodocs"]},r={render:n=>{const[a,s]=c.useState("1"),m=(u,b)=>{s(b)};return e.jsxs(p,{value:a,children:[e.jsxs(i,{...n,onChange:m,"aria-label":"lab API tabs example",children:[e.jsx(t,{label:"Item One",value:"1"}),e.jsx(t,{label:"Item Two",value:"2"}),e.jsx(t,{label:"Item Three",value:"3"})]}),e.jsx(l,{value:"1",children:`Hello from Panel ${a}`}),e.jsx(l,{value:"2",children:`Hello from Panel ${a}`}),e.jsx(l,{value:"3",children:`Hello from Panel ${a}`})]})},args:{}},o={render:()=>{const[n,a]=c.useState("1"),s=(m,u)=>{a(u)};return e.jsxs(p,{value:n,children:[e.jsxs(i,{onChange:s,"aria-label":"lab API tabs example",children:[e.jsx(t,{value:"1",icon:e.jsx(v,{}),label:"Links"}),e.jsx(t,{value:"2",icon:e.jsx(d,{}),label:"My Account"})]}),e.jsx(l,{value:"1",children:`Hello from Panel ${n}`}),e.jsx(l,{value:"2",children:`Hello from Panel ${n}`})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: (args: TabListProps) => {
    const [value, setValue] = useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    return <TabContext value={value}>
        <TabList {...args} onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Item One" value="1" />
          <Tab label="Item Two" value="2" />
          <Tab label="Item Three" value="3" />
        </TabList>
        <TabPanel value="1" children={\`Hello from Panel \${value}\`} />
        <TabPanel value="2" children={\`Hello from Panel \${value}\`} />
        <TabPanel value="3" children={\`Hello from Panel \${value}\`} />
      </TabContext>;
  },
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    return <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab value="1" icon={<LinkIcon />} label="Links" />
          <Tab value="2" icon={<UserIcon />} label="My Account" />
        </TabList>
        <TabPanel value="1" children={\`Hello from Panel \${value}\`} />
        <TabPanel value="2" children={\`Hello from Panel \${value}\`} />
      </TabContext>;
  }
}`,...o.parameters?.docs?.source}}};const J=["_TabList","_WithIcons"];export{r as _TabList,o as _WithIcons,J as __namedExportsOrder,G as default};
