import{a as n,j as e}from"./jsx-runtime-390e5fc8.js";import{r as c}from"./index-570b25c1.js";import{a as i,T,b as r}from"./TabPanel-19999f5f.js";import{T as l}from"./Tab-5d38a7aa.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-90dea224.js";import"./clsx-8416b751.js";import"./createTheme-e6b56ddb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-188025da.js";import"./useThemeProps-db7202c2.js";import"./generateUtilityClasses-f776b170.js";import"./react-is.production.min-a192e302.js";import"./useTheme-3a36d7a0.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./useEnhancedEffect-460150e6.js";import"./KeyboardArrowRight-5ae0643c.js";import"./createSvgIcon-e4b87ef5.js";import"./SvgIcon-ab7aa383.js";import"./ButtonBase-dcf5e891.js";import"./emotion-react.browser.esm-69a15469.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useSlotProps-1710581f.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";const J={title:"Components/Tabs/TabList",component:i,tags:["autodocs"]},t={render:p=>{const[a,u]=c.useState("1");return n(T,{value:a,children:[n(i,{...p,onChange:(d,b)=>{u(b)},"aria-label":"lab API tabs example",children:[e(l,{label:"Item One",value:"1"}),e(l,{label:"Item Two",value:"2"}),e(l,{label:"Item Three",value:"3"})]}),e(r,{value:"1",children:`Hello from Panel ${a}`}),e(r,{value:"2",children:`Hello from Panel ${a}`}),e(r,{value:"3",children:`Hello from Panel ${a}`})]})},args:{}};var o,m,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(m=t.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const K=["_TabList"];export{t as _TabList,K as __namedExportsOrder,J as default};
//# sourceMappingURL=TabList.stories-ac0634b2.js.map
