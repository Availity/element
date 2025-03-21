import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{a as t,T as a}from"./Tab-DnBVADy-.js";import{B as m}from"./Box-DWnb8VZB.js";import{T as P}from"./Typography-CvSvtD2a.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./styled-CF1hcdwO.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./identifier-Dtqimryx.js";import"./generateUtilityClass-CVWqFxsA.js";import"./Tabs-Q_4h7ycJ.js";import"./memoTheme-D-rVhYRp.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./ButtonBase-DbVRbsLs.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./useForkRef-BVrIj09m.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-nos-0K8U.js";import"./useTheme-DUkCvbx_.js";import"./useTheme-C2CrmYKc.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./KeyboardArrowRight-PXT6z23P.js";import"./createSvgIcon-TketyoFF.js";import"./SvgIcon-DSdWmKAH.js";import"./useSlotProps-BAIpVL6Y.js";import"./resolveComponentProps-Dg20wxiM.js";import"./extendSxProp-B5AgUjQT.js";import"./index-f0Aa_BgU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const oe={title:"Components/Tabs/Tabs",component:t,argTypes:{level:{options:["primary","secondary"],control:{type:"radio"}}},tags:["autodocs"]};function l(r){return{id:`simple-tab-${r}`,"aria-controls":`simple-tabpanel-${r}`}}function s(r){const{value:d,index:n,...C}=r;return e.jsx("div",{role:"tabpanel",hidden:d!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...C,children:d===n&&e.jsx(m,{sx:{p:3},children:e.jsxs(P,{children:["Hello from panel ",n+1]})})})}const i={render:r=>e.jsxs(e.Fragment,{children:[e.jsxs(t,{value:r.value,onChange:()=>{},...r,children:[e.jsx(a,{label:"Item One",...l(0)}),e.jsx(a,{label:"Item Two",...l(1)}),e.jsx(a,{label:"Item Three",...l(2),disabled:!0})]}),e.jsx(s,{value:r.value,index:0}),e.jsx(s,{value:r.value,index:1}),e.jsx(s,{value:r.value,index:2})]}),args:{value:0}},b={render:r=>e.jsxs(e.Fragment,{children:[e.jsxs(t,{value:r.value,onChange:()=>{},...r,children:[e.jsx(a,{label:"Item One",...l(0)}),e.jsx(a,{label:"Item Two",...l(1)}),e.jsx(a,{label:"Item Three",...l(2),disabled:!0}),e.jsx(a,{label:"Item Four",...l(3),disabled:!0}),e.jsx(a,{label:"Item Five",...l(4),disabled:!0}),e.jsx(a,{label:"Item Six",...l(5),disabled:!0}),e.jsx(a,{label:"Item Seven",...l(6),disabled:!0}),e.jsx(a,{label:"Item Eight",...l(7),disabled:!0}),e.jsx(a,{label:"Item Nine",...l(8),disabled:!0}),e.jsx(a,{label:"Item Ten",...l(9),disabled:!0})]}),e.jsx(s,{value:r.value,index:0}),e.jsx(s,{value:r.value,index:1}),e.jsx(s,{value:r.value,index:2})]}),args:{value:0,variant:"scrollable"}},o={render:()=>e.jsxs(m,{sx:{p:3,backgroundColor:"background.paper"},children:[e.jsxs(t,{level:"primary",value:0,onChange:()=>{},children:[e.jsx(a,{label:"Item One",...l(0)}),e.jsx(a,{label:"Item Two",...l(1)}),e.jsx(a,{label:"Item Three",...l(2),disabled:!0})]}),e.jsx("div",{role:"tabpanel",id:"simple-tabpanel-0","aria-labelledby":"simple-tab-0",children:e.jsxs(m,{sx:{p:3},children:[e.jsx(P,{sx:{mb:2},children:"Hello from panel 1"}),e.jsxs(t,{level:"secondary",value:1,onChange:()=>{},children:[e.jsx(a,{label:"Item Four",...l(3)}),e.jsx(a,{label:"Item Five",...l(4)}),e.jsx(a,{label:"Item Six",...l(5),disabled:!0})]}),e.jsx(s,{value:4,index:3}),e.jsx(s,{value:4,index:4}),e.jsx(s,{value:4,index:5})]})}),e.jsx(s,{value:0,index:1}),e.jsx(s,{value:0,index:2})]})};var p,u,x;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var v,T,c;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(c=(T=b.parameters)==null?void 0:T.docs)==null?void 0:c.source}}};var j,y,h,I,g;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source},description:{story:"There is a hierarchy for tab styling. Most tabs will have the primary level styling while nested tabs have the secondary level styling.",...(g=(I=o.parameters)==null?void 0:I.docs)==null?void 0:g.description}}};const te=["_Tabs","_TabsScrollable","_Levels"];export{o as _Levels,i as _Tabs,b as _TabsScrollable,te as __namedExportsOrder,oe as default};
