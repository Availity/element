import{a as o,j as e}from"./jsx-runtime-91a467a5.js";import{r as u}from"./index-8db94870.js";import{T as s,a as c}from"./TabList-90864882.js";import{D as v,T as t}from"./TabPanel-436a2a7a.js";import{T as r}from"./Tab-333feb99.js";import"./_commonjsHelpers-042e6b4d.js";import"./Divider-18980443.js";import"./styled-bbc4db24.js";import"./useThemeProps-0aafcae6.js";import"./extends-bab83b91.js";import"./dividerClasses-b028230b.js";import"./ownerWindow-abbdbaf0.js";import"./ownerDocument-613eb639.js";import"./useTheme-aec6e016.js";import"./ButtonBase-353bf105.js";import"./emotion-react.browser.esm-f47b4cc7.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./createSvgIcon-6d7c3e0b.js";import"./SvgIcon-ca7a5f5b.js";import"./useSlotProps-4b86086d.js";const G={title:"Components/Tabs/TabContext",component:s,tags:["autodocs"]},a={render:i=>{const[p,b]=u.useState("1");return o(s,{...i,value:p,children:[o(c,{onChange:(h,T)=>{b(T)},"aria-label":"lab API tabs example",children:[e(r,{label:"Item One",value:"1"}),e(r,{label:"Item Two",value:"2"}),e(r,{label:"Item Three",value:"3"})]}),e(v,{}),e(t,{value:"1",children:"Item One"}),e(t,{value:"2",children:"Item Two"}),e(t,{value:"3",children:"Item Three"})]})},args:{}};var l,n,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: TabContextProps) => {
    const [value, setValue] = useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    return <TabContext {...args} value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Item One" value="1" />
          <Tab label="Item Two" value="2" />
          <Tab label="Item Three" value="3" />
        </TabList>
        <Divider />
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>;
  },
  args: {}
}`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const H=["_TabContext"];export{a as _TabContext,H as __namedExportsOrder,G as default};
//# sourceMappingURL=TabContext.stories-2e4b99b0.js.map
