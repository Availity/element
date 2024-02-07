import{j as n,a as e}from"./jsx-runtime-a3bcee63.js";import{r as c}from"./index-570b25c1.js";import{a as i,T,b as r}from"./TabPanel-ceb5a58a.js";import{T as l}from"./Tab-8663fb4c.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-90dea224.js";import"./clsx-b831246b.js";import"./createTheme-3fee607a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-523cb007.js";import"./useThemeProps-98dc6282.js";import"./generateUtilityClasses-b58f947a.js";import"./react-is.production.min-a192e302.js";import"./useTheme-c07bb8e7.js";import"./useEnhancedEffect-460150e6.js";import"./debounce-517eeb3c.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./KeyboardArrowRight-94c6c8ce.js";import"./createSvgIcon-ca656bec.js";import"./SvgIcon-075b1db6.js";import"./ButtonBase-44753119.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useSlotProps-95ccb7bd.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./isHostComponent-73d6e646.js";const N={title:"Components/Tabs/TabList",component:i,tags:["autodocs"]},t={render:p=>{const[a,u]=c.useState("1");return n(T,{value:a,children:[n(i,{...p,onChange:(d,b)=>{u(b)},"aria-label":"lab API tabs example",children:[e(l,{label:"Item One",value:"1"}),e(l,{label:"Item Two",value:"2"}),e(l,{label:"Item Three",value:"3"})]}),e(r,{value:"1",children:`Hello from Panel ${a}`}),e(r,{value:"2",children:`Hello from Panel ${a}`}),e(r,{value:"3",children:`Hello from Panel ${a}`})]})},args:{}};var o,m,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(m=t.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const Q=["_TabList"];export{t as _TabList,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=TabList.stories-892335d9.js.map
