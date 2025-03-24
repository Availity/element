import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{r as T}from"./index-DcWiA9TO.js";import{T as s,a as h}from"./Tab-B14qCAFG.js";import{B as v}from"./Box-DWnb8VZB.js";import{T as g}from"./Typography-CvSvtD2a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./styled-CF1hcdwO.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./identifier-Dtqimryx.js";import"./generateUtilityClass-CVWqFxsA.js";import"./Tabs-Q_4h7ycJ.js";import"./memoTheme-D-rVhYRp.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./ButtonBase-DbVRbsLs.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./useForkRef-BVrIj09m.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-nos-0K8U.js";import"./useTheme-DUkCvbx_.js";import"./useTheme-C2CrmYKc.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./KeyboardArrowRight-PXT6z23P.js";import"./createSvgIcon-TketyoFF.js";import"./SvgIcon-DSdWmKAH.js";import"./useSlotProps-BAIpVL6Y.js";import"./resolveComponentProps-Dg20wxiM.js";import"./extendSxProp-B5AgUjQT.js";import"./index-f0Aa_BgU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const ae={title:"Components/Tabs/Tab",component:s,tags:["autodocs"]};function l(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}const o={render:a=>{const[r,b]=T.useState(0),x=(p,t)=>{b(t)};function i(p){const{value:t,index:n,...c}=p;return e.jsx("div",{role:"tabpanel",hidden:t!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...c,children:t===n&&e.jsx(v,{sx:{p:3},children:e.jsxs(g,{children:["Hello from panel ",n]})})})}return e.jsxs(e.Fragment,{children:[e.jsxs(h,{value:r,onChange:x,children:[e.jsx(s,{label:"Item One",...a,...l(0)}),e.jsx(s,{label:"Item Two",...a,...l(1)}),e.jsx(s,{label:"Item Three",...a,...l(2),disabled:!0})]}),e.jsx(i,{value:r,index:0}),e.jsx(i,{value:r,index:1}),e.jsx(i,{value:r,index:2})]})},args:{}};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: TabProps) => {
    interface TabPanelProps {
      children?: React.ReactNode;
      index: number;
      value: number;
    }
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    function CustomTabPanel(props: TabPanelProps) {
      const {
        value,
        index,
        ...other
      } = props;
      return <div role="tabpanel" hidden={value !== index} id={\`simple-tabpanel-\${index}\`} aria-labelledby={\`simple-tab-\${index}\`} {...other}>
          {value === index && <Box sx={{
          p: 3
        }}>
              <Typography>Hello from panel {index}</Typography>
            </Box>}
        </div>;
    }
    return <>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Item One" {...args} {...a11yProps(0)} />
          <Tab label="Item Two" {...args} {...a11yProps(1)} />
          <Tab label="Item Three" {...args} {...a11yProps(2)} disabled />
        </Tabs>
        <CustomTabPanel value={value} index={0} />
        <CustomTabPanel value={value} index={1} />
        <CustomTabPanel value={value} index={2} />
      </>;
  },
  args: {}
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const ne=["_Tab"];export{o as _Tab,ne as __namedExportsOrder,ae as default};
