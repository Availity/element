import{a as c,j as t}from"./jsx-runtime-91a467a5.js";import{r as u}from"./index-8db94870.js";import{T as p}from"./Tabs-d3b875b6.js";import{T as r}from"./Tab-2040bec6.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-is.production.min-a192e302.js";import"./styled-838f2411.js";import"./useThemeProps-ac6a164c.js";import"./extends-bab83b91.js";import"./useTheme-c349195b.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./ButtonBase-246c583e.js";import"./emotion-react.browser.esm-63c9efdb.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./KeyboardArrowRight-c8f32650.js";import"./createSvgIcon-802be96d.js";import"./SvgIcon-247857dd.js";import"./useSlotProps-8f208bee.js";const B={title:"Components/Tabs/Tabs",component:p,tags:["autodocs"]};function o(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}const a={render:e=>{const[l,i]=u.useState(0);return c(p,{...e,value:l,onChange:(d,b)=>{i(b)},children:[t(r,{label:"Item One",...o(0)}),t(r,{label:"Item Two",...o(1)}),t(r,{label:"Item Three",...o(2)})]})}};var n,s,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const D=["_Tabs"];export{a as _Tabs,D as __namedExportsOrder,B as default};
//# sourceMappingURL=Tabs.stories-cce727b5.js.map
