import{a as c,j as t}from"./jsx-runtime-91a467a5.js";import{r as u}from"./index-8db94870.js";import{T as p}from"./Tabs-db321ef2.js";import{T as r}from"./Tab-333feb99.js";import"./_commonjsHelpers-042e6b4d.js";import"./ownerWindow-abbdbaf0.js";import"./ownerDocument-613eb639.js";import"./styled-bbc4db24.js";import"./useThemeProps-0aafcae6.js";import"./extends-bab83b91.js";import"./useTheme-aec6e016.js";import"./ButtonBase-353bf105.js";import"./emotion-react.browser.esm-f47b4cc7.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./createSvgIcon-6d7c3e0b.js";import"./SvgIcon-ca7a5f5b.js";import"./useSlotProps-4b86086d.js";const z={title:"Components/Tabs/Tabs",component:p,tags:["autodocs"]};function o(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}const a={render:e=>{const[l,i]=u.useState(0);return c(p,{...e,value:l,onChange:(d,b)=>{i(b)},children:[t(r,{label:"Item One",...o(0)}),t(r,{label:"Item Two",...o(1)}),t(r,{label:"Item Three",...o(2)})]})}};var n,s,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: TabsProps) => {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return <Tabs {...args} value={value} onChange={handleChange}>
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
      </Tabs>;
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const A=["_Tabs"];export{a as _Tabs,A as __namedExportsOrder,z as default};
//# sourceMappingURL=Tabs.stories-3c560488.js.map
