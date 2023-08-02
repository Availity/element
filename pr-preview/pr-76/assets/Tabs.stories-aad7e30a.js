import{a as c,j as t}from"./jsx-runtime-91a467a5.js";import{r as u}from"./index-8db94870.js";import{T as p}from"./Tabs-9f7faebb.js";import{T as r}from"./Tab-abc4c82b.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-is.production.min-a192e302.js";import"./styled-e83a4d6b.js";import"./useThemeProps-2be0b178.js";import"./extends-bab83b91.js";import"./useTheme-4b6e7437.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./ButtonBase-43bbae14.js";import"./emotion-react.browser.esm-69c9b3f9.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./KeyboardArrowRight-1b89ff74.js";import"./createSvgIcon-bb9b4c74.js";import"./SvgIcon-6bda5215.js";import"./useSlotProps-c61722cd.js";const B={title:"Components/Tabs/Tabs",component:p,tags:["autodocs"]};function o(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}const a={render:e=>{const[l,i]=u.useState(0);return c(p,{...e,value:l,onChange:(d,b)=>{i(b)},children:[t(r,{label:"Item One",...o(0)}),t(r,{label:"Item Two",...o(1)}),t(r,{label:"Item Three",...o(2)})]})}};var n,s,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
//# sourceMappingURL=Tabs.stories-aad7e30a.js.map
