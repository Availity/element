import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{r as c}from"./index-DcWiA9TO.js";import{a as m,T,b as r}from"./TabPanel-rgo3yekt.js";import{T as o}from"./Tab-0-RADtx2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Tabs-Ckb3j6QA.js";import"./generateUtilityClass-Bqc1qv72.js";import"./createTheme-CKCRSfxM.js";import"./memoTheme-DvanvhnP.js";import"./styled-Dbr85gFc.js";import"./DefaultPropsProvider-CIAoFptl.js";import"./generateUtilityClasses-DyVAdLaw.js";import"./ButtonBase-DQZrtVrL.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./emotion-react.browser.esm-rTq5AsO6.js";import"./useForkRef-BVrIj09m.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-nos-0K8U.js";import"./useTheme-ChS1Y5Lw.js";import"./useTheme-BUEqHFQV.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./KeyboardArrowRight-CZg1oL5c.js";import"./createSvgIcon-IUeEQzFc.js";import"./SvgIcon-BS-p1eoC.js";import"./useSlotProps-Cuv6gcjd.js";import"./resolveComponentProps-BiTA-uKg.js";import"./useThemeProps-CHu9suWH.js";import"./useThemeProps-YZ7_EcgO.js";const U={title:"Components/Tabs/TabList",component:m,tags:["autodocs"]},t={render:i=>{const[a,p]=c.useState("1"),u=(v,b)=>{p(b)};return e.jsxs(T,{value:a,children:[e.jsxs(m,{...i,onChange:u,"aria-label":"lab API tabs example",children:[e.jsx(o,{label:"Item One",value:"1"}),e.jsx(o,{label:"Item Two",value:"2"}),e.jsx(o,{label:"Item Three",value:"3"})]}),e.jsx(r,{value:"1",children:`Hello from Panel ${a}`}),e.jsx(r,{value:"2",children:`Hello from Panel ${a}`}),e.jsx(r,{value:"3",children:`Hello from Panel ${a}`})]})},args:{}};var l,n,s;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const W=["_TabList"];export{t as _TabList,W as __namedExportsOrder,U as default};
