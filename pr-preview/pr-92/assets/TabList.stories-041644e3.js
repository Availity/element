import{a as r,j as e}from"./jsx-runtime-390e5fc8.js";import{r as c}from"./index-570b25c1.js";import{a as i,T,b as t}from"./TabPanel-f7e8fd42.js";import{T as n}from"./Tab-091abee2.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-4775977a.js";import"./useThemeProps-760858ee.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./react-is.production.min-a192e302.js";import"./useTheme-c803dd64.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./ButtonBase-f6c00ee6.js";import"./emotion-react.browser.esm-2467a126.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./KeyboardArrowRight-6daa7f7d.js";import"./createSvgIcon-2cd6d7e5.js";import"./SvgIcon-a70a27d9.js";import"./useSlotProps-cb7adee4.js";const k={title:"Components/Tabs/TabList",component:i,tags:["autodocs"]},l={render:u=>{const[a,b]=c.useState("1");return r(T,{value:a,children:[r(i,{...u,onChange:(d,p)=>{b(p)},"aria-label":"lab API tabs example",children:[e(n,{label:"Item One",value:"1"}),e(n,{label:"Item Two",value:"2"}),e(n,{label:"Item Three",value:"3"})]}),e(t,{value:"1",children:`Hello from Panel ${a}`}),e(t,{value:"2",children:`Hello from Panel ${a}`}),e(t,{value:"3",children:`Hello from Panel ${a}`})]})},args:{}};var o,s,m;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(s=l.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const q=["_TabList"];export{l as _TabList,q as __namedExportsOrder,k as default};
//# sourceMappingURL=TabList.stories-041644e3.js.map
