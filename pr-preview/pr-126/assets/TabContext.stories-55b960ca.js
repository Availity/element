import{a as o,j as e}from"./jsx-runtime-390e5fc8.js";import{r as u}from"./index-570b25c1.js";import{T as s,a as c,b as t}from"./TabPanel-f70e53f5.js";import{D as v}from"./index-717ad5e2.js";import{T as r}from"./Tab-5f8df101.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-90dea224.js";import"./clsx-8416b751.js";import"./createTheme-e6b56ddb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-188025da.js";import"./useThemeProps-db7202c2.js";import"./generateUtilityClasses-f776b170.js";import"./Divider-e6df2ce9.js";import"./dividerClasses-d4e8510c.js";import"./react-is.production.min-a192e302.js";import"./useTheme-3a36d7a0.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./useEnhancedEffect-460150e6.js";import"./KeyboardArrowRight-5ae0643c.js";import"./createSvgIcon-e4b87ef5.js";import"./SvgIcon-ab7aa383.js";import"./ButtonBase-6040f690.js";import"./emotion-react.browser.esm-69a15469.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useSlotProps-1710581f.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";const Q={title:"Components/Tabs/TabContext",component:s,tags:["autodocs"]},a={render:i=>{const[p,b]=u.useState("1");return o(s,{...i,value:p,children:[o(c,{onChange:(h,T)=>{b(T)},"aria-label":"lab API tabs example",children:[e(r,{label:"Item One",value:"1"}),e(r,{label:"Item Two",value:"2"}),e(r,{label:"Item Three",value:"3"})]}),e(v,{}),e(t,{value:"1",children:"Item One"}),e(t,{value:"2",children:"Item Two"}),e(t,{value:"3",children:"Item Three"})]})},args:{}};var l,n,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const U=["_TabContext"];export{a as _TabContext,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=TabContext.stories-55b960ca.js.map
