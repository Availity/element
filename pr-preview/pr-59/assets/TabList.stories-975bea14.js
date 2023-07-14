import{j as e,a as b}from"./jsx-runtime-91a467a5.js";import{r as u}from"./index-8db94870.js";import{a as l,T}from"./TabList-af67acdf.js";import{T as t}from"./Tab-3664575d.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-is.production.min-a192e302.js";import"./styled-48536e78.js";import"./useThemeProps-4e8cc45e.js";import"./extends-bab83b91.js";import"./useTheme-a8520578.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./ButtonBase-71b73842.js";import"./emotion-react.browser.esm-94564128.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./createSvgIcon-a18730f7.js";import"./SvgIcon-63a7a9ef.js";import"./useSlotProps-e755ff0f.js";const z={title:"Components/Tabs/TabList",component:l,tags:["autodocs"]},a={render:n=>{const[m,i]=u.useState("1");return e(T,{value:m,children:b(l,{...n,onChange:(d,p)=>{i(p)},"aria-label":"lab API tabs example",children:[e(t,{label:"Item One",value:"1"}),e(t,{label:"Item Two",value:"2"}),e(t,{label:"Item Three",value:"3"})]})})},args:{}};var r,o,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const B=["_TabList"];export{a as _TabList,B as __namedExportsOrder,z as default};
//# sourceMappingURL=TabList.stories-975bea14.js.map
