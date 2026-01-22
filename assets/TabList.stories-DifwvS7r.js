import{r as c,j as e}from"./iframe-P-I-t7s_.js";import{L as v,U as d}from"./index-C3cy06cM.js";import{a as i,T as p,b as l}from"./TabPanel-B81KXMU5.js";import{T as t}from"./Tab-CTqu8qGQ.js";import"./preload-helper-PPVm8Dsz.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DmOXCSGB.js";import"./memoTheme-Bi3jfVWD.js";import"./styled-DNi79hKI.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./TabPanel-B7FJbAr1.js";import"./Tabs-CaL-cxUg.js";import"./ButtonBase-P5TjO14T.js";import"./useTimeout-Dzhca5Jx.js";import"./TransitionGroupContext-Dvdi4lCr.js";import"./useForkRef-B5SqA4pZ.js";import"./useEventCallback-DAYatbRK.js";import"./isFocusVisible-B8k4qzLc.js";import"./useTheme-BPf64W-X.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlot-DY-xq6aU.js";import"./mergeSlotProps-CDm4lxrI.js";import"./useSlotProps-Cx6Yk_v4.js";import"./KeyboardArrowRight-CbeuMfoU.js";import"./createSvgIcon-JwEd2gcS.js";import"./getActiveElement-BQgAPKnO.js";const G={title:"Components/Tabs/TabList",component:i,argTypes:{level:{options:["primary","secondary"],control:{type:"radio"}}},tags:["autodocs"]},r={render:n=>{const[a,s]=c.useState("1"),m=(u,b)=>{s(b)};return e.jsxs(p,{value:a,children:[e.jsxs(i,{...n,onChange:m,"aria-label":"lab API tabs example",children:[e.jsx(t,{label:"Item One",value:"1"}),e.jsx(t,{label:"Item Two",value:"2"}),e.jsx(t,{label:"Item Three",value:"3"})]}),e.jsx(l,{value:"1",children:`Hello from Panel ${a}`}),e.jsx(l,{value:"2",children:`Hello from Panel ${a}`}),e.jsx(l,{value:"3",children:`Hello from Panel ${a}`})]})},args:{}},o={render:()=>{const[n,a]=c.useState("1"),s=(m,u)=>{a(u)};return e.jsxs(p,{value:n,children:[e.jsxs(i,{onChange:s,"aria-label":"lab API tabs example",children:[e.jsx(t,{value:"1",icon:e.jsx(v,{}),label:"Links"}),e.jsx(t,{value:"2",icon:e.jsx(d,{}),label:"My Account"})]}),e.jsx(l,{value:"1",children:`Hello from Panel ${n}`}),e.jsx(l,{value:"2",children:`Hello from Panel ${n}`})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
