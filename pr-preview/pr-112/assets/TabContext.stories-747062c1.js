import{a as o,j as e}from"./jsx-runtime-390e5fc8.js";import{r as u}from"./index-570b25c1.js";import{T as i,a as c,b as t}from"./TabPanel-8f41107a.js";import{D as v}from"./index-0c942154.js";import{T as r}from"./Tab-995c8c0a.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-90dea224.js";import"./clsx-7dc4e18d.js";import"./createTheme-bcd1d157.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-7846e708.js";import"./useThemeProps-018254e6.js";import"./generateUtilityClasses-70c60a0e.js";import"./Divider-7fb78c99.js";import"./dividerClasses-b19abef8.js";import"./react-is.production.min-a192e302.js";import"./useTheme-76c02901.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./debounce-517eeb3c.js";import"./useEnhancedEffect-460150e6.js";import"./KeyboardArrowRight-0ba4b66f.js";import"./createSvgIcon-359b5f59.js";import"./SvgIcon-b52b22c3.js";import"./ButtonBase-f1b77b46.js";import"./emotion-react.browser.esm-474fda6d.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useSlotProps-4e64ffeb.js";import"./objectWithoutPropertiesLoose-830c72af.js";const W={title:"Components/Tabs/TabContext",component:i,tags:["autodocs"]},a={render:s=>{const[p,b]=u.useState("1");return o(i,{...s,value:p,children:[o(c,{onChange:(h,T)=>{b(T)},"aria-label":"lab API tabs example",children:[e(r,{label:"Item One",value:"1"}),e(r,{label:"Item Two",value:"2"}),e(r,{label:"Item Three",value:"3"})]}),e(v,{}),e(t,{value:"1",children:"Item One"}),e(t,{value:"2",children:"Item Two"}),e(t,{value:"3",children:"Item Three"})]})},args:{}};var l,n,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const X=["_TabContext"];export{a as _TabContext,X as __namedExportsOrder,W as default};
//# sourceMappingURL=TabContext.stories-747062c1.js.map
