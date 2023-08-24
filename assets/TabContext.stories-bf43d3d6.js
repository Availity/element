import{a as o,j as e}from"./jsx-runtime-91a467a5.js";import{r as u}from"./index-8db94870.js";import{T as s,a as c,b as t}from"./TabPanel-48a10e4e.js";import{D as v}from"./index-f7bd27af.js";import{T as r}from"./Tab-0d507c33.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-3f92ccfd.js";import"./useThemeProps-e4a8cdbc.js";import"./extends-bab83b91.js";import"./Divider-346e2f52.js";import"./dividerClasses-a536a9bd.js";import"./react-is.production.min-a192e302.js";import"./useTheme-9732e621.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./ButtonBase-984984ab.js";import"./emotion-react.browser.esm-638d3fdc.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./KeyboardArrowRight-b2c20915.js";import"./createSvgIcon-ac09799d.js";import"./SvgIcon-2cc6257a.js";import"./useSlotProps-cdd19d6c.js";const J={title:"Components/Tabs/TabContext",component:s,tags:["autodocs"]},a={render:i=>{const[p,b]=u.useState("1");return o(s,{...i,value:p,children:[o(c,{onChange:(h,T)=>{b(T)},"aria-label":"lab API tabs example",children:[e(r,{label:"Item One",value:"1"}),e(r,{label:"Item Two",value:"2"}),e(r,{label:"Item Three",value:"3"})]}),e(v,{}),e(t,{value:"1",children:"Item One"}),e(t,{value:"2",children:"Item Two"}),e(t,{value:"3",children:"Item Three"})]})},args:{}};var l,n,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const K=["_TabContext"];export{a as _TabContext,K as __namedExportsOrder,J as default};
//# sourceMappingURL=TabContext.stories-bf43d3d6.js.map
