import{j as e,a as b}from"./jsx-runtime-91a467a5.js";import{r as u}from"./index-8db94870.js";import{a as l,T}from"./TabList-72a4d773.js";import{T as t}from"./Tab-abc4c82b.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-is.production.min-a192e302.js";import"./styled-e83a4d6b.js";import"./useThemeProps-2be0b178.js";import"./extends-bab83b91.js";import"./useTheme-4b6e7437.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./ButtonBase-43bbae14.js";import"./emotion-react.browser.esm-69c9b3f9.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./KeyboardArrowRight-1b89ff74.js";import"./createSvgIcon-bb9b4c74.js";import"./SvgIcon-6bda5215.js";import"./useSlotProps-c61722cd.js";const B={title:"Components/Tabs/TabList",component:l,tags:["autodocs"]},a={render:n=>{const[m,i]=u.useState("1");return e(T,{value:m,children:b(l,{...n,onChange:(d,p)=>{i(p)},"aria-label":"lab API tabs example",children:[e(t,{label:"Item One",value:"1"}),e(t,{label:"Item Two",value:"2"}),e(t,{label:"Item Three",value:"3"})]})})},args:{}};var r,o,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
//# sourceMappingURL=TabList.stories-525456fe.js.map
