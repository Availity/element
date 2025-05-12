import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as T}from"./index-BgYLq7fD.js";import{T as s,a as h}from"./Tab-lzLuZDfJ.js";import{B as v}from"./Box-BU2WakPM.js";import{T as g}from"./Typography-geKghQyJ.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./styled-FZfCzBz5.js";import"./DefaultPropsProvider-ArLX9SCD.js";import"./identifier-CHUoN9pF.js";import"./generateUtilityClass-GxznSYtt.js";import"./Tabs-DA3CdUG8.js";import"./memoTheme-BLrvrRyo.js";import"./generateUtilityClasses-aotQgNYZ.js";import"./ButtonBase-DwAEbHIm.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./emotion-react.browser.esm-DW5OmoQI.js";import"./useForkRef-Dz4aGlyk.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-DyJdRKzS.js";import"./useTheme-BGaXYmwe.js";import"./useTheme-CVByJb8R.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./KeyboardArrowRight-DGijcEGn.js";import"./createSvgIcon-DK1T27V3.js";import"./SvgIcon-D3xe1wVB.js";import"./useSlotProps-DT0tbkWv.js";import"./resolveComponentProps-XMphxBSb.js";import"./extendSxProp-BZnzVrgj.js";import"./index-Df15702_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const ne={title:"Components/Tabs/Tab",component:s,tags:["autodocs"]};function l(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}const o={render:a=>{const[r,b]=T.useState(0),x=(p,t)=>{b(t)};function i(p){const{value:t,index:n,...c}=p;return e.jsx("div",{role:"tabpanel",hidden:t!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...c,children:t===n&&e.jsx(v,{sx:{p:3},children:e.jsxs(g,{children:["Hello from panel ",n]})})})}return e.jsxs(e.Fragment,{children:[e.jsxs(h,{value:r,onChange:x,children:[e.jsx(s,{label:"Item One",...a,...l(0)}),e.jsx(s,{label:"Item Two",...a,...l(1)}),e.jsx(s,{label:"Item Three",...a,...l(2),disabled:!0})]}),e.jsx(i,{value:r,index:0}),e.jsx(i,{value:r,index:1}),e.jsx(i,{value:r,index:2})]})},args:{}};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const re=["_Tab"];export{o as _Tab,re as __namedExportsOrder,ne as default};
