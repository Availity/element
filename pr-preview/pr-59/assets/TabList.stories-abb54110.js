import{j as e,a as b}from"./jsx-runtime-91a467a5.js";import{r as u}from"./index-8db94870.js";import{a as l,T}from"./TabList-90864882.js";import{T as t}from"./Tab-333feb99.js";import"./_commonjsHelpers-042e6b4d.js";import"./ownerWindow-abbdbaf0.js";import"./ownerDocument-613eb639.js";import"./styled-bbc4db24.js";import"./useThemeProps-0aafcae6.js";import"./extends-bab83b91.js";import"./useTheme-aec6e016.js";import"./ButtonBase-353bf105.js";import"./emotion-react.browser.esm-f47b4cc7.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./createSvgIcon-6d7c3e0b.js";import"./SvgIcon-ca7a5f5b.js";import"./useSlotProps-4b86086d.js";const q={title:"Components/Tabs/TabList",component:l,tags:["autodocs"]},a={render:n=>{const[m,i]=u.useState("1");return e(T,{value:m,children:b(l,{...n,onChange:(d,p)=>{i(p)},"aria-label":"lab API tabs example",children:[e(t,{label:"Item One",value:"1"}),e(t,{label:"Item Two",value:"2"}),e(t,{label:"Item Three",value:"3"})]})})},args:{}};var r,o,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const z=["_TabList"];export{a as _TabList,z as __namedExportsOrder,q as default};
//# sourceMappingURL=TabList.stories-abb54110.js.map
