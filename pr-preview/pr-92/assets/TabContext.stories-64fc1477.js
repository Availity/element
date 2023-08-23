import{a as o,j as e}from"./jsx-runtime-390e5fc8.js";import{r as u}from"./index-570b25c1.js";import{T as s,a as c,b as t}from"./TabPanel-f7e8fd42.js";import{D as v}from"./index-6fa113c2.js";import{T as r}from"./Tab-091abee2.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-4775977a.js";import"./useThemeProps-760858ee.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./Divider-4fb2d638.js";import"./dividerClasses-91030350.js";import"./react-is.production.min-a192e302.js";import"./useTheme-c803dd64.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./ButtonBase-f6c00ee6.js";import"./emotion-react.browser.esm-2467a126.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./KeyboardArrowRight-6daa7f7d.js";import"./createSvgIcon-2cd6d7e5.js";import"./SvgIcon-a70a27d9.js";import"./useSlotProps-cb7adee4.js";const G={title:"Components/Tabs/TabContext",component:s,tags:["autodocs"]},a={render:i=>{const[b,p]=u.useState("1");return o(s,{...i,value:b,children:[o(c,{onChange:(h,T)=>{p(T)},"aria-label":"lab API tabs example",children:[e(r,{label:"Item One",value:"1"}),e(r,{label:"Item Two",value:"2"}),e(r,{label:"Item Three",value:"3"})]}),e(v,{}),e(t,{value:"1",children:"Item One"}),e(t,{value:"2",children:"Item Two"}),e(t,{value:"3",children:"Item Three"})]})},args:{}};var l,n,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
//# sourceMappingURL=TabContext.stories-64fc1477.js.map
