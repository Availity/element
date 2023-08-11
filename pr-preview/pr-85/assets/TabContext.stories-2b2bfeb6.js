import{a as o,j as e}from"./jsx-runtime-91a467a5.js";import{r as u}from"./index-8db94870.js";import{T as s,a as c}from"./TabList-34c0abae.js";import{D as v,T as t}from"./TabPanel-f647a82e.js";import{T as r}from"./Tab-608a4773.js";import"./_commonjsHelpers-042e6b4d.js";import"./Divider-686e4b75.js";import"./styled-a84420af.js";import"./useThemeProps-2498ecc2.js";import"./extends-bab83b91.js";import"./dividerClasses-d158f676.js";import"./react-is.production.min-a192e302.js";import"./useTheme-fc3bf0b8.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./ButtonBase-3eb7f77d.js";import"./emotion-react.browser.esm-8a1b3cc7.js";import"./inheritsLoose-8349f581.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./KeyboardArrowRight-3a3cc91a.js";import"./createSvgIcon-6dc812c4.js";import"./SvgIcon-aa084682.js";import"./useSlotProps-e284ca0c.js";const H={title:"Components/Tabs/TabContext",component:s,tags:["autodocs"]},a={render:i=>{const[p,b]=u.useState("1");return o(s,{...i,value:p,children:[o(c,{onChange:(h,T)=>{b(T)},"aria-label":"lab API tabs example",children:[e(r,{label:"Item One",value:"1"}),e(r,{label:"Item Two",value:"2"}),e(r,{label:"Item Three",value:"3"})]}),e(v,{}),e(t,{value:"1",children:"Item One"}),e(t,{value:"2",children:"Item Two"}),e(t,{value:"3",children:"Item Three"})]})},args:{}};var l,n,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const J=["_TabContext"];export{a as _TabContext,J as __namedExportsOrder,H as default};
//# sourceMappingURL=TabContext.stories-2b2bfeb6.js.map
