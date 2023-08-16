import{a as s,F as v,j as e}from"./jsx-runtime-91a467a5.js";import{r as P}from"./index-8db94870.js";import{T as c}from"./Tabs-9f7faebb.js";import{T as i}from"./Tab-abc4c82b.js";import{B as f}from"./Box-21ea2d5d.js";import{T as g}from"./Typography-0affa63a.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-is.production.min-a192e302.js";import"./styled-e83a4d6b.js";import"./useThemeProps-2be0b178.js";import"./extends-bab83b91.js";import"./useTheme-4b6e7437.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./ButtonBase-43bbae14.js";import"./emotion-react.browser.esm-69c9b3f9.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./KeyboardArrowRight-1b89ff74.js";import"./createSvgIcon-bb9b4c74.js";import"./SvgIcon-6bda5215.js";import"./useSlotProps-c61722cd.js";import"./extendSxProp-f7e67a44.js";const M={title:"Components/Tabs/Tabs",component:c,tags:["autodocs"]};function p(n){return{id:`simple-tab-${n}`,"aria-controls":`simple-tabpanel-${n}`}}const o={render:n=>{const[r,T]=P.useState(0),h=(m,t)=>{T(t)};function l(m){const{value:t,index:a,...x}=m;return e("div",{role:"tabpanel",hidden:t!==a,id:`simple-tabpanel-${a}`,"aria-labelledby":`simple-tab-${a}`,...x,children:t===a&&e(f,{sx:{p:3},children:s(g,{children:["Hello from panel ",a]})})})}return s(v,{children:[s(c,{value:r,onChange:h,...n,children:[e(i,{label:"Item One",...p(0)}),e(i,{label:"Item Two",...p(1)}),e(i,{label:"Item Three",...p(2),disabled:!0})]}),e(l,{value:r,index:0}),e(l,{value:r,index:1}),e(l,{value:r,index:2})]})}};var d,u,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: TabsProps) => {
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
        <Tabs value={value} onChange={handleChange} {...args}>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} disabled />
        </Tabs>
        <CustomTabPanel value={value} index={0} />
        <CustomTabPanel value={value} index={1} />
        <CustomTabPanel value={value} index={2} />
      </>;
  }
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const Q=["_Tabs"];export{o as _Tabs,Q as __namedExportsOrder,M as default};
//# sourceMappingURL=Tabs.stories-fa52fdf3.js.map
