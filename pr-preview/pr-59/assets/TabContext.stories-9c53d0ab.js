import{a as o,j as e}from"./jsx-runtime-91a467a5.js";import{r as u}from"./index-8db94870.js";import{T as s,a as c}from"./TabList-3ae6b6a8.js";import{D as v,T as t}from"./TabPanel-c6d858cc.js";import{T as r}from"./Tab-00293f36.js";import"./_commonjsHelpers-042e6b4d.js";import"./Divider-9474b138.js";import"./styled-cb03d4d5.js";import"./useThemeProps-911242ec.js";import"./extends-bab83b91.js";import"./dividerClasses-d0d5581a.js";import"./ownerWindow-abbdbaf0.js";import"./ownerDocument-613eb639.js";import"./useTheme-2f271e1c.js";import"./ButtonBase-3730792f.js";import"./emotion-react.browser.esm-ee37bc0f.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./createSvgIcon-bd229898.js";import"./SvgIcon-4c9e085d.js";import"./useSlotProps-fd9c0c61.js";const G={title:"Components/Tabs/TabContext",component:s,tags:["autodocs"]},a={render:i=>{const[p,b]=u.useState("1");return o(s,{...i,value:p,children:[o(c,{onChange:(h,T)=>{b(T)},"aria-label":"lab API tabs example",children:[e(r,{label:"Item One",value:"1"}),e(r,{label:"Item Two",value:"2"}),e(r,{label:"Item Three",value:"3"})]}),e(v,{}),e(t,{value:"1",children:"Item One"}),e(t,{value:"2",children:"Item Two"}),e(t,{value:"3",children:"Item Three"})]})},args:{}};var l,n,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
//# sourceMappingURL=TabContext.stories-9c53d0ab.js.map
