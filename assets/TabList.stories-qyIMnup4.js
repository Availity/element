import{r as T,j as e}from"./iframe-Cv4YEYCT.js";import{L as g,U as j}from"./index-CNJpAeel.js";import{a as i,T as x,b as l}from"./TabPanel-be3gWHFH.js";import{T as t}from"./Tab-BqfEy7_S.js";import"./preload-helper-Dp1pzeXC.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-RzgLEiZ2.js";import"./memoTheme-pu_-LVrP.js";import"./styled-BjYrgzj8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./TabPanel-CgEnIgB0.js";import"./Tabs-Bitto0gj.js";import"./ButtonBase-Te2dWPfF.js";import"./useTimeout-S5FMYS9P.js";import"./TransitionGroupContext-ReV1kAll.js";import"./useForkRef-Cy9-wLDX.js";import"./useEventCallback-Dezg1Jp2.js";import"./isFocusVisible-B8k4qzLc.js";import"./useTheme-yn0WqvlF.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlot-DM3XJHLF.js";import"./mergeSlotProps-bXMVHHr9.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-DpLQsBTB.js";import"./KeyboardArrowRight-D0I0Fdd1.js";import"./createSvgIcon-anG-4vyn.js";const Y={title:"Components/Tabs/TabList",component:i,argTypes:{level:{options:["primary","secondary"],control:{type:"radio"}}},tags:["autodocs"]},r={render:n=>{const[a,s]=T.useState("1"),m=(u,P)=>{s(P)};return e.jsxs(x,{value:a,children:[e.jsxs(i,{...n,onChange:m,"aria-label":"lab API tabs example",children:[e.jsx(t,{label:"Item One",value:"1"}),e.jsx(t,{label:"Item Two",value:"2"}),e.jsx(t,{label:"Item Three",value:"3"})]}),e.jsx(l,{value:"1",children:`Hello from Panel ${a}`}),e.jsx(l,{value:"2",children:`Hello from Panel ${a}`}),e.jsx(l,{value:"3",children:`Hello from Panel ${a}`})]})},args:{}},o={render:()=>{const[n,a]=T.useState("1"),s=(m,u)=>{a(u)};return e.jsxs(x,{value:n,children:[e.jsxs(i,{onChange:s,"aria-label":"lab API tabs example",children:[e.jsx(t,{value:"1",icon:e.jsx(g,{}),label:"Links"}),e.jsx(t,{value:"2",icon:e.jsx(j,{}),label:"My Account"})]}),e.jsx(l,{value:"1",children:`Hello from Panel ${n}`}),e.jsx(l,{value:"2",children:`Hello from Panel ${n}`})]})}};var c,p,b;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var v,d,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const Z=["_TabList","_WithIcons"];export{r as _TabList,o as _WithIcons,Z as __namedExportsOrder,Y as default};
