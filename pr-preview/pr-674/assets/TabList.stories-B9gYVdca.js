import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{r as c}from"./index-DcWiA9TO.js";import{a as m,T,b as r}from"./TabPanel-CTeYMa2k.js";import{T as l}from"./Tab-Vg17sp1t.js";import"./_commonjsHelpers-BosuxZz1.js";import"./generateUtilityClass-DELP8s2G.js";import"./identifier-CenlGZaM.js";import"./generateUtilityClasses-duJ5YrlI.js";import"./useThemeProps-CsOQpjjJ.js";import"./DefaultPropsProvider-LCKMq1Iv.js";import"./useThemeProps-BAwiOWAz.js";import"./useTheme-DwYC2ms6.js";import"./styled-wZqJTO_n.js";import"./index-nos-0K8U.js";import"./useTheme-Cf-RAc4Y.js";import"./memoTheme-CIpOTVoB.js";import"./useEnhancedEffect-D2f2tbda.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./KeyboardArrowRight-DtJl0LVn.js";import"./createSvgIcon-BzSwLqYD.js";import"./SvgIcon-DfAk99tL.js";import"./useSlotProps-DE50rPTb.js";import"./resolveComponentProps-D4XT56l6.js";import"./useForkRef-BVrIj09m.js";import"./ButtonBase-Ctwr4_Dd.js";import"./useTimeout-B8wmcRZV.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./emotion-react.browser.esm-BKUJyPAt.js";import"./isFocusVisible-B8k4qzLc.js";const Q={title:"Components/Tabs/TabList",component:m,tags:["autodocs"]},t={render:i=>{const[a,p]=c.useState("1"),u=(v,b)=>{p(b)};return e.jsxs(T,{value:a,children:[e.jsxs(m,{...i,onChange:u,"aria-label":"lab API tabs example",children:[e.jsx(l,{label:"Item One",value:"1"}),e.jsx(l,{label:"Item Two",value:"2"}),e.jsx(l,{label:"Item Three",value:"3"})]}),e.jsx(r,{value:"1",children:`Hello from Panel ${a}`}),e.jsx(r,{value:"2",children:`Hello from Panel ${a}`}),e.jsx(r,{value:"3",children:`Hello from Panel ${a}`})]})},args:{}};var o,n,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        <TabPanel value="1" children={\`Hello from Panel \${value}\`} />
        <TabPanel value="2" children={\`Hello from Panel \${value}\`} />
        <TabPanel value="3" children={\`Hello from Panel \${value}\`} />
      </TabContext>;
  },
  args: {}
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const U=["_TabList"];export{t as _TabList,U as __namedExportsOrder,Q as default};
