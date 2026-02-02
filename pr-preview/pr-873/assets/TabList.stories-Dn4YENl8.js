import{r as c,j as e}from"./iframe-rhK9tIc4.js";import{L as v,U as d}from"./index-DRr7OjqP.js";import{a as i,T as p,b as l}from"./TabPanel-CNgHvSmA.js";import{T as t}from"./Tab-CAuvE7gb.js";import"./preload-helper-PPVm8Dsz.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DzAUVQ7n.js";import"./memoTheme-IQ7acCr3.js";import"./styled-CBQFiEom.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./TabPanel-2ypwORby.js";import"./Tabs-CBRCKFFl.js";import"./ButtonBase-C62hOKjf.js";import"./useTimeout-D0IbZg6d.js";import"./TransitionGroupContext-uy7bHgBz.js";import"./useForkRef-DQY4LT_f.js";import"./useEventCallback-Ds2BvoNa.js";import"./isFocusVisible-B8k4qzLc.js";import"./useTheme-BXOJLFox.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlot-Ss2ummcO.js";import"./mergeSlotProps-C1tzmMCQ.js";import"./useSlotProps-CU-sXxN2.js";import"./KeyboardArrowRight-shwU2Y4k.js";import"./createSvgIcon-C0bXOuHF.js";import"./getActiveElement-BQgAPKnO.js";const G={title:"Components/Tabs/TabList",component:i,argTypes:{level:{options:["primary","secondary"],control:{type:"radio"}}},tags:["autodocs"]},r={render:n=>{const[a,s]=c.useState("1"),m=(u,b)=>{s(b)};return e.jsxs(p,{value:a,children:[e.jsxs(i,{...n,onChange:m,"aria-label":"lab API tabs example",children:[e.jsx(t,{label:"Item One",value:"1"}),e.jsx(t,{label:"Item Two",value:"2"}),e.jsx(t,{label:"Item Three",value:"3"})]}),e.jsx(l,{value:"1",children:`Hello from Panel ${a}`}),e.jsx(l,{value:"2",children:`Hello from Panel ${a}`}),e.jsx(l,{value:"3",children:`Hello from Panel ${a}`})]})},args:{}},o={render:()=>{const[n,a]=c.useState("1"),s=(m,u)=>{a(u)};return e.jsxs(p,{value:n,children:[e.jsxs(i,{onChange:s,"aria-label":"lab API tabs example",children:[e.jsx(t,{value:"1",icon:e.jsx(v,{}),label:"Links"}),e.jsx(t,{value:"2",icon:e.jsx(d,{}),label:"My Account"})]}),e.jsx(l,{value:"1",children:`Hello from Panel ${n}`}),e.jsx(l,{value:"2",children:`Hello from Panel ${n}`})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
