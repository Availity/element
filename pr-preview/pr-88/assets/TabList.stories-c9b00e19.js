import{a as r,j as e}from"./jsx-runtime-91a467a5.js";import{r as c}from"./index-8db94870.js";import{a as i,T,b as l}from"./TabPanel-1bd5bf1b.js";import{T as n}from"./Tab-2040bec6.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-838f2411.js";import"./useThemeProps-ac6a164c.js";import"./extends-bab83b91.js";import"./react-is.production.min-a192e302.js";import"./useTheme-c349195b.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./ButtonBase-246c583e.js";import"./emotion-react.browser.esm-63c9efdb.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./KeyboardArrowRight-c8f32650.js";import"./createSvgIcon-802be96d.js";import"./SvgIcon-247857dd.js";import"./useSlotProps-8f208bee.js";const z={title:"Components/Tabs/TabList",component:i,tags:["autodocs"]},t={render:p=>{const[a,u]=c.useState("1");return r(T,{value:a,children:[r(i,{...p,onChange:(d,b)=>{u(b)},"aria-label":"lab API tabs example",children:[e(n,{label:"Item One",value:"1"}),e(n,{label:"Item Two",value:"2"}),e(n,{label:"Item Three",value:"3"})]}),e(l,{value:"1",children:`Hello from Panel ${a}`}),e(l,{value:"2",children:`Hello from Panel ${a}`}),e(l,{value:"3",children:`Hello from Panel ${a}`})]})},args:{}};var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const B=["_TabList"];export{t as _TabList,B as __namedExportsOrder,z as default};
//# sourceMappingURL=TabList.stories-c9b00e19.js.map
