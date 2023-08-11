import{j as e,a as b}from"./jsx-runtime-91a467a5.js";import{r as u}from"./index-8db94870.js";import{a as l,T}from"./TabList-34c0abae.js";import{T as t}from"./Tab-608a4773.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-is.production.min-a192e302.js";import"./styled-a84420af.js";import"./useThemeProps-2498ecc2.js";import"./extends-bab83b91.js";import"./useTheme-fc3bf0b8.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./ButtonBase-3eb7f77d.js";import"./emotion-react.browser.esm-8a1b3cc7.js";import"./inheritsLoose-8349f581.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./KeyboardArrowRight-3a3cc91a.js";import"./createSvgIcon-6dc812c4.js";import"./SvgIcon-aa084682.js";import"./useSlotProps-e284ca0c.js";const z={title:"Components/Tabs/TabList",component:l,tags:["autodocs"]},a={render:n=>{const[m,i]=u.useState("1");return e(T,{value:m,children:b(l,{...n,onChange:(d,p)=>{i(p)},"aria-label":"lab API tabs example",children:[e(t,{label:"Item One",value:"1"}),e(t,{label:"Item Two",value:"2"}),e(t,{label:"Item Three",value:"3"})]})})},args:{}};var r,o,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
//# sourceMappingURL=TabList.stories-beee1f52.js.map
