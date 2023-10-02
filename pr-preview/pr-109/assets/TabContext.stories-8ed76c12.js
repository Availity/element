import{a as o,j as e}from"./jsx-runtime-390e5fc8.js";import{r as u}from"./index-570b25c1.js";import{T as s,a as c,b as t}from"./TabPanel-115a6902.js";import{D as v}from"./index-bfc803e0.js";import{T as r}from"./Tab-8659e263.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-52ae1682.js";import"./useThemeProps-09701b40.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./Divider-2fdf100d.js";import"./dividerClasses-21aada36.js";import"./react-is.production.min-a192e302.js";import"./useTheme-a833130b.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./useEnhancedEffect-460150e6.js";import"./KeyboardArrowRight-60fa4295.js";import"./createSvgIcon-cde3b626.js";import"./SvgIcon-33a08535.js";import"./ButtonBase-d82e3f0a.js";import"./emotion-react.browser.esm-7b849601.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useSlotProps-163bc2ac.js";import"./isHostComponent-73d6e646.js";const J={title:"Components/Tabs/TabContext",component:s,tags:["autodocs"]},a={render:i=>{const[p,b]=u.useState("1");return o(s,{...i,value:p,children:[o(c,{onChange:(h,T)=>{b(T)},"aria-label":"lab API tabs example",children:[e(r,{label:"Item One",value:"1"}),e(r,{label:"Item Two",value:"2"}),e(r,{label:"Item Three",value:"3"})]}),e(v,{}),e(t,{value:"1",children:"Item One"}),e(t,{value:"2",children:"Item Two"}),e(t,{value:"3",children:"Item Three"})]})},args:{}};var l,n,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
//# sourceMappingURL=TabContext.stories-8ed76c12.js.map
