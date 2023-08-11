import{a as u,j as t}from"./jsx-runtime-91a467a5.js";import{r as c}from"./index-8db94870.js";import{T as p}from"./Tabs-9f7faebb.js";import{T as r}from"./Tab-abc4c82b.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-is.production.min-a192e302.js";import"./styled-e83a4d6b.js";import"./useThemeProps-2be0b178.js";import"./extends-bab83b91.js";import"./useTheme-4b6e7437.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./ButtonBase-43bbae14.js";import"./emotion-react.browser.esm-69c9b3f9.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./KeyboardArrowRight-1b89ff74.js";import"./createSvgIcon-bb9b4c74.js";import"./SvgIcon-6bda5215.js";import"./useSlotProps-c61722cd.js";const B={title:"Components/Tabs/Tab",component:p,tags:["autodocs"]};function o(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}const a={render:e=>{const[l,i]=c.useState(0);return u(p,{value:l,onChange:(T,b)=>{i(b)},children:[t(r,{label:"Item One",...e,...o(0)}),t(r,{label:"Item Two",...e,...o(1)}),t(r,{label:"Item Three",...e,...o(2),disabled:!0})]})},args:{}};var n,s,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const D=["_Tab"];export{a as _Tab,D as __namedExportsOrder,B as default};
//# sourceMappingURL=Tab.stories-7dd47543.js.map
