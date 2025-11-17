import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as T}from"./index-BSuoOqEd.js";import{T as i,a as h}from"./Tab-K_OT3aVI.js";import{B as v}from"./Box-BAprLmuU.js";import{T as g}from"./Typography-CHtEfMke.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./styled-9znMky1q.js";import"./DefaultPropsProvider-B1sWsgx2.js";import"./identifier-DhnHujDJ.js";import"./Tabs-BSED5KRg.js";import"./memoTheme-BwIkkReu.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./ButtonBase-AdAh9sBA.js";import"./useTimeout-B9dULhq6.js";import"./TransitionGroupContext-CcytU7uK.js";import"./emotion-react.browser.esm-CVJjYY2z.js";import"./useForkRef-BIkqQIqh.js";import"./useEventCallback-Dvy07Fv6.js";import"./useEnhancedEffect-CIAiDanS.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-bqlmQ0VS.js";import"./useTheme-DG5qVMsu.js";import"./useTheme-C_c7PR3o.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlot-jI6_c_PV.js";import"./mergeSlotProps-C8ahzxnq.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-BphRKsXg.js";import"./KeyboardArrowRight-ClDzbhUK.js";import"./createSvgIcon-DjY4rWdK.js";import"./SvgIcon-enpUMgPP.js";import"./extendSxProp-plByhdXY.js";import"./index-DtRw77fL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const re={title:"Components/Tabs/Tab",component:i,tags:["autodocs"]};function l(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}const o={render:a=>{const[r,b]=T.useState(0),x=(p,t)=>{b(t)};function s(p){const{value:t,index:n,...c}=p;return e.jsx("div",{role:"tabpanel",hidden:t!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...c,children:t===n&&e.jsx(v,{sx:{p:3},children:e.jsxs(g,{children:["Hello from panel ",n]})})})}return e.jsxs(e.Fragment,{children:[e.jsxs(h,{value:r,onChange:x,children:[e.jsx(i,{label:"Item One",...a,...l(0)}),e.jsx(i,{label:"Item Two",...a,...l(1)}),e.jsx(i,{label:"Item Three",...a,...l(2),disabled:!0})]}),e.jsx(s,{value:r,index:0}),e.jsx(s,{value:r,index:1}),e.jsx(s,{value:r,index:2})]})},args:{}};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const te=["_Tab"];export{o as _Tab,te as __namedExportsOrder,re as default};
