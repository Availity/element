import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{L as k,U as L}from"./index-CmMPo3bx.js";import{a as o,T as a}from"./Tab-DgDtXouu.js";import{r as O}from"./index-BgYLq7fD.js";import{B as p}from"./Box-BU2WakPM.js";import{T as w}from"./Typography-geKghQyJ.js";import"./index-ChsGqxH_.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./SvgIcon-D3xe1wVB.js";import"./generateUtilityClass-GxznSYtt.js";import"./identifier-CHUoN9pF.js";import"./memoTheme-BLrvrRyo.js";import"./styled-FZfCzBz5.js";import"./DefaultPropsProvider-ArLX9SCD.js";import"./generateUtilityClasses-aotQgNYZ.js";import"./Tabs-DA3CdUG8.js";import"./ButtonBase-DwAEbHIm.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./emotion-react.browser.esm-DW5OmoQI.js";import"./useForkRef-Dz4aGlyk.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-DyJdRKzS.js";import"./useTheme-BGaXYmwe.js";import"./useTheme-CVByJb8R.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./KeyboardArrowRight-DGijcEGn.js";import"./createSvgIcon-DK1T27V3.js";import"./useSlotProps-DT0tbkWv.js";import"./resolveComponentProps-XMphxBSb.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./extendSxProp-BZnzVrgj.js";import"./index-Df15702_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const je={title:"Components/Tabs/Tabs",component:o,argTypes:{level:{options:["primary","secondary"],control:{type:"radio"}}},tags:["autodocs"]};function l(r){return{id:`simple-tab-${r}`,"aria-controls":`simple-tabpanel-${r}`}}function s(r){const{value:i,index:n,...u}=r;return e.jsx("div",{role:"tabpanel",hidden:i!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...u,children:i===n&&e.jsx(p,{sx:{p:3},children:e.jsxs(w,{children:["Hello from panel ",n+1]})})})}const b={render:r=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{value:r.value,onChange:()=>{},...r,children:[e.jsx(a,{label:"Item One",...l(0)}),e.jsx(a,{label:"Item Two",...l(1)}),e.jsx(a,{label:"Item Three",...l(2),disabled:!0})]}),e.jsx(s,{value:r.value,index:0}),e.jsx(s,{value:r.value,index:1}),e.jsx(s,{value:r.value,index:2})]}),args:{value:0}},m={render:r=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{value:r.value,onChange:()=>{},...r,children:[e.jsx(a,{label:"Item One",...l(0)}),e.jsx(a,{label:"Item Two",...l(1)}),e.jsx(a,{label:"Item Three",...l(2),disabled:!0}),e.jsx(a,{label:"Item Four",...l(3),disabled:!0}),e.jsx(a,{label:"Item Five",...l(4),disabled:!0}),e.jsx(a,{label:"Item Six",...l(5),disabled:!0}),e.jsx(a,{label:"Item Seven",...l(6),disabled:!0}),e.jsx(a,{label:"Item Eight",...l(7),disabled:!0}),e.jsx(a,{label:"Item Nine",...l(8),disabled:!0}),e.jsx(a,{label:"Item Ten",...l(9),disabled:!0})]}),e.jsx(s,{value:r.value,index:0}),e.jsx(s,{value:r.value,index:1}),e.jsx(s,{value:r.value,index:2})]}),args:{value:0,variant:"scrollable"}},t={render:()=>e.jsxs(p,{sx:{p:3,backgroundColor:"background.paper"},children:[e.jsxs(o,{level:"primary",value:0,onChange:()=>{},children:[e.jsx(a,{label:"Item One",...l(0)}),e.jsx(a,{label:"Item Two",...l(1)}),e.jsx(a,{label:"Item Three",...l(2),disabled:!0})]}),e.jsx("div",{role:"tabpanel",id:"simple-tabpanel-0","aria-labelledby":"simple-tab-0",children:e.jsxs(p,{sx:{p:3},children:[e.jsx(w,{sx:{mb:2},children:"Hello from panel 1"}),e.jsxs(o,{level:"secondary",value:1,onChange:()=>{},children:[e.jsx(a,{label:"Item Four",...l(3)}),e.jsx(a,{label:"Item Five",...l(4)}),e.jsx(a,{label:"Item Six",...l(5),disabled:!0})]}),e.jsx(s,{value:4,index:3}),e.jsx(s,{value:4,index:4}),e.jsx(s,{value:4,index:5})]})}),e.jsx(s,{value:0,index:1}),e.jsx(s,{value:0,index:2})]})},d={render:()=>{const[r,i]=O.useState(0),n=(u,_)=>{i(_)};return e.jsxs(e.Fragment,{children:[e.jsxs(o,{value:r,onChange:n,children:[e.jsx(a,{icon:e.jsx(k,{}),label:"Links",...l(0)}),e.jsx(a,{icon:e.jsx(L,{}),label:"My Account",...l(1)})]}),e.jsx(s,{value:r,index:0}),e.jsx(s,{value:r,index:1})]})}};var x,c,v;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: TabsProps) => {
    return <>
        <Tabs value={args.value} onChange={() => {}} {...args}>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} disabled />
        </Tabs>
        <CustomTabPanel value={args.value} index={0} />
        <CustomTabPanel value={args.value} index={1} />
        <CustomTabPanel value={args.value} index={2} />
      </>;
  },
  args: {
    value: 0
  }
}`,...(v=(c=b.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var T,h,j;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: TabsProps) => {
    return <>
        <Tabs value={args.value} onChange={() => {}} {...args}>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} disabled />
          <Tab label="Item Four" {...a11yProps(3)} disabled />
          <Tab label="Item Five" {...a11yProps(4)} disabled />
          <Tab label="Item Six" {...a11yProps(5)} disabled />
          <Tab label="Item Seven" {...a11yProps(6)} disabled />
          <Tab label="Item Eight" {...a11yProps(7)} disabled />
          <Tab label="Item Nine" {...a11yProps(8)} disabled />
          <Tab label="Item Ten" {...a11yProps(9)} disabled />
        </Tabs>
        <CustomTabPanel value={args.value} index={0} />
        <CustomTabPanel value={args.value} index={1} />
        <CustomTabPanel value={args.value} index={2} />
      </>;
  },
  args: {
    value: 0,
    variant: 'scrollable'
  }
}`,...(j=(h=m.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var y,I,g,P,C;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return <Box sx={{
      p: 3,
      backgroundColor: 'background.paper'
    }}>
        <Tabs level="primary" value={0} onChange={() => {}}>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} disabled />
        </Tabs>
          <div role="tabpanel" id={\`simple-tabpanel-0\`} aria-labelledby={\`simple-tab-0\`}>
            <Box sx={{
          p: 3
        }}>
              <Typography sx={{
            mb: 2
          }}>Hello from panel 1</Typography>
              <Tabs level="secondary" value={1} onChange={() => {}}>
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} disabled />
              </Tabs>
              <CustomTabPanel value={4} index={3} />
              <CustomTabPanel value={4} index={4} />
              <CustomTabPanel value={4} index={5} />
            </Box>
          </div>
          <CustomTabPanel value={0} index={1} />
          <CustomTabPanel value={0} index={2} />
      </Box>;
  }
}`,...(g=(I=t.parameters)==null?void 0:I.docs)==null?void 0:g.source},description:{story:"There is a hierarchy for tab styling. Most tabs will have the primary level styling while nested tabs have the secondary level styling.",...(C=(P=t.parameters)==null?void 0:P.docs)==null?void 0:C.description}}};var S,f,F;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return <>
        <Tabs value={value} onChange={handleChange}>
          <Tab icon={<LinkIcon />} label="Links" {...a11yProps(0)} />
          <Tab icon={<UserIcon />} label="My Account" {...a11yProps(1)} />
        </Tabs>
        <CustomTabPanel value={value} index={0} />
        <CustomTabPanel value={value} index={1} />
      </>;
  }
}`,...(F=(f=d.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};const ye=["_Tabs","_TabsScrollable","_Levels","_WithIcons"];export{t as _Levels,b as _Tabs,m as _TabsScrollable,d as _WithIcons,ye as __namedExportsOrder,je as default};
