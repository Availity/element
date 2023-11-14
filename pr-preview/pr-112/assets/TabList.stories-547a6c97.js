import{j as n,a as e}from"./jsx-runtime-a3bcee63.js";import{r as c}from"./index-570b25c1.js";import{a as i,T,b as r}from"./TabPanel-005d25d0.js";import{T as l}from"./Tab-5696e7e7.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-90dea224.js";import"./clsx-7dc4e18d.js";import"./createTheme-bcd1d157.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-7846e708.js";import"./useThemeProps-018254e6.js";import"./generateUtilityClasses-70c60a0e.js";import"./react-is.production.min-a192e302.js";import"./useTheme-76c02901.js";import"./useEnhancedEffect-460150e6.js";import"./debounce-517eeb3c.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./KeyboardArrowRight-f02ae11e.js";import"./createSvgIcon-60c2b2ae.js";import"./SvgIcon-951d7748.js";import"./ButtonBase-d80b4855.js";import"./emotion-react.browser.esm-474fda6d.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useSlotProps-4e64ffeb.js";import"./objectWithoutPropertiesLoose-830c72af.js";const M={title:"Components/Tabs/TabList",component:i,tags:["autodocs"]},t={render:p=>{const[a,u]=c.useState("1");return n(T,{value:a,children:[n(i,{...p,onChange:(d,b)=>{u(b)},"aria-label":"lab API tabs example",children:[e(l,{label:"Item One",value:"1"}),e(l,{label:"Item Two",value:"2"}),e(l,{label:"Item Three",value:"3"})]}),e(r,{value:"1",children:`Hello from Panel ${a}`}),e(r,{value:"2",children:`Hello from Panel ${a}`}),e(r,{value:"3",children:`Hello from Panel ${a}`})]})},args:{}};var o,m,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(m=t.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const N=["_TabList"];export{t as _TabList,N as __namedExportsOrder,M as default};
//# sourceMappingURL=TabList.stories-547a6c97.js.map
