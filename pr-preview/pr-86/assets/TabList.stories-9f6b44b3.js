import{j as e,a as b}from"./jsx-runtime-91a467a5.js";import{r as u}from"./index-8db94870.js";import{a as l,T}from"./TabList-0d348657.js";import{T as t}from"./Tab-2040bec6.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-is.production.min-a192e302.js";import"./styled-838f2411.js";import"./useThemeProps-ac6a164c.js";import"./extends-bab83b91.js";import"./useTheme-c349195b.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./ButtonBase-246c583e.js";import"./emotion-react.browser.esm-63c9efdb.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./KeyboardArrowRight-c8f32650.js";import"./createSvgIcon-802be96d.js";import"./SvgIcon-247857dd.js";import"./useSlotProps-8f208bee.js";const B={title:"Components/Tabs/TabList",component:l,tags:["autodocs"]},a={render:n=>{const[m,i]=u.useState("1");return e(T,{value:m,children:b(l,{...n,onChange:(d,p)=>{i(p)},"aria-label":"lab API tabs example",children:[e(t,{label:"Item One",value:"1"}),e(t,{label:"Item Two",value:"2"}),e(t,{label:"Item Three",value:"3"})]})})},args:{}};var r,o,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
      </TabContext>;
  },
  args: {}
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const D=["_TabList"];export{a as _TabList,D as __namedExportsOrder,B as default};
//# sourceMappingURL=TabList.stories-9f6b44b3.js.map
