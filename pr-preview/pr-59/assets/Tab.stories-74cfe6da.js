import{a as u,j as t}from"./jsx-runtime-91a467a5.js";import{r as c}from"./index-8db94870.js";import{T as p}from"./Tabs-e8e48550.js";import{T as r}from"./Tab-960f7b38.js";import"./_commonjsHelpers-042e6b4d.js";import"./ownerWindow-abbdbaf0.js";import"./ownerDocument-613eb639.js";import"./styled-cb03d4d5.js";import"./useThemeProps-911242ec.js";import"./extends-bab83b91.js";import"./useTheme-2f271e1c.js";import"./ButtonBase-3730792f.js";import"./emotion-react.browser.esm-ee37bc0f.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./createSvgIcon-bd229898.js";import"./SvgIcon-4c9e085d.js";import"./useSlotProps-fd9c0c61.js";const z={title:"Components/Tabs/Tab",component:p,tags:["autodocs"]};function o(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}const a={render:e=>{const[l,i]=c.useState(0);return u(p,{value:l,onChange:(T,b)=>{i(b)},children:[t(r,{label:"Item One",...e,...o(0)}),t(r,{label:"Item Two",...e,...o(1)}),t(r,{label:"Item Three",...e,...o(2),disabled:!0})]})},args:{}};var n,s,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: TabProps) => {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return <Tabs value={value} onChange={handleChange}>
        <Tab label="Item One" {...args} {...a11yProps(0)} />
        <Tab label="Item Two" {...args} {...a11yProps(1)} />
        <Tab label="Item Three" {...args} {...a11yProps(2)} disabled />
      </Tabs>;
  },
  args: {}
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const A=["_Tab"];export{a as _Tab,A as __namedExportsOrder,z as default};
//# sourceMappingURL=Tab.stories-74cfe6da.js.map
