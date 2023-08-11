import{a as c,j as t}from"./jsx-runtime-91a467a5.js";import{r as u}from"./index-8db94870.js";import{T as p}from"./Tabs-399418ed.js";import{T as r}from"./Tab-608a4773.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-is.production.min-a192e302.js";import"./styled-a84420af.js";import"./useThemeProps-2498ecc2.js";import"./extends-bab83b91.js";import"./useTheme-fc3bf0b8.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./ButtonBase-3eb7f77d.js";import"./emotion-react.browser.esm-8a1b3cc7.js";import"./inheritsLoose-8349f581.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./KeyboardArrowRight-3a3cc91a.js";import"./createSvgIcon-6dc812c4.js";import"./SvgIcon-aa084682.js";import"./useSlotProps-e284ca0c.js";const A={title:"Components/Tabs/Tabs",component:p,tags:["autodocs"]};function o(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}const a={render:e=>{const[l,i]=u.useState(0);return c(p,{...e,value:l,onChange:(d,b)=>{i(b)},children:[t(r,{label:"Item One",...o(0)}),t(r,{label:"Item Two",...o(1)}),t(r,{label:"Item Three",...o(2)})]})}};var n,s,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const B=["_Tabs"];export{a as _Tabs,B as __namedExportsOrder,A as default};
//# sourceMappingURL=Tabs.stories-6f0384b0.js.map
