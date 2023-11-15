import{a as o,j as e}from"./jsx-runtime-390e5fc8.js";import{r as u}from"./index-570b25c1.js";import{T as i,a as c,b as t}from"./TabPanel-a4d88762.js";import{D as v}from"./index-03bacd1a.js";import{T as r}from"./Tab-ebcc40ab.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-90dea224.js";import"./clsx-8416b751.js";import"./createTheme-e6b56ddb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-78cd751f.js";import"./useThemeProps-285a8f6c.js";import"./generateUtilityClasses-2915a045.js";import"./Divider-bf202c30.js";import"./dividerClasses-17e5b451.js";import"./react-is.production.min-a192e302.js";import"./useTheme-b3699c65.js";import"./debounce-517eeb3c.js";import"./useEnhancedEffect-460150e6.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./KeyboardArrowRight-f1b42dda.js";import"./createSvgIcon-c7fbf131.js";import"./SvgIcon-f3e07af8.js";import"./ButtonBase-6abe7f0b.js";import"./emotion-react.browser.esm-69a15469.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useSlotProps-1710581f.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";const X={title:"Components/Tabs/TabContext",component:i,tags:["autodocs"]},a={render:s=>{const[p,b]=u.useState("1");return o(i,{...s,value:p,children:[o(c,{onChange:(h,T)=>{b(T)},"aria-label":"lab API tabs example",children:[e(r,{label:"Item One",value:"1"}),e(r,{label:"Item Two",value:"2"}),e(r,{label:"Item Three",value:"3"})]}),e(v,{}),e(t,{value:"1",children:"Item One"}),e(t,{value:"2",children:"Item Two"}),e(t,{value:"3",children:"Item Three"})]})},args:{}};var l,m,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(n=(m=a.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const Y=["_TabContext"];export{a as _TabContext,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=TabContext.stories-376dfc58.js.map
