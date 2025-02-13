import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{T as n}from"./Tabs-U7PpNQ0n.js";import{T as l}from"./Tab-B9B6LKgz.js";import{B as c}from"./Box-DWnb8VZB.js";import{T as j}from"./Typography-CvSvtD2a.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./generateUtilityClass-CVWqFxsA.js";import"./identifier-Dtqimryx.js";import"./index-nos-0K8U.js";import"./useTheme-DUkCvbx_.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./useTheme-C2CrmYKc.js";import"./styled-CF1hcdwO.js";import"./memoTheme-D-rVhYRp.js";import"./useEnhancedEffect-D2f2tbda.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./KeyboardArrowRight-PXT6z23P.js";import"./createSvgIcon-TketyoFF.js";import"./SvgIcon-DSdWmKAH.js";import"./useSlotProps-BAIpVL6Y.js";import"./resolveComponentProps-Dg20wxiM.js";import"./useForkRef-BVrIj09m.js";import"./ButtonBase-DbVRbsLs.js";import"./useTimeout-B8wmcRZV.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./isFocusVisible-B8k4qzLc.js";import"./extendSxProp-B5AgUjQT.js";import"./index-f0Aa_BgU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const ee={title:"Components/Tabs/Tabs",component:n,tags:["autodocs"]};function r(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}function s(a){const{value:m,index:t,...v}=a;return e.jsx("div",{role:"tabpanel",hidden:m!==t,id:`simple-tabpanel-${t}`,"aria-labelledby":`simple-tab-${t}`,...v,children:m===t&&e.jsx(c,{sx:{p:3},children:e.jsxs(j,{children:["Hello from panel ",t]})})})}const o={render:a=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{value:a.value,onChange:()=>{},...a,children:[e.jsx(l,{label:"Item One",...r(0)}),e.jsx(l,{label:"Item Two",...r(1)}),e.jsx(l,{label:"Item Three",...r(2),disabled:!0})]}),e.jsx(s,{value:a.value,index:0}),e.jsx(s,{value:a.value,index:1}),e.jsx(s,{value:a.value,index:2})]}),args:{value:0}},i={render:a=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{value:a.value,onChange:()=>{},...a,children:[e.jsx(l,{label:"Item One",...r(0)}),e.jsx(l,{label:"Item Two",...r(1)}),e.jsx(l,{label:"Item Three",...r(2),disabled:!0}),e.jsx(l,{label:"Item Four",...r(3),disabled:!0}),e.jsx(l,{label:"Item Five",...r(4),disabled:!0}),e.jsx(l,{label:"Item Six",...r(5),disabled:!0}),e.jsx(l,{label:"Item Seven",...r(6),disabled:!0}),e.jsx(l,{label:"Item Eight",...r(7),disabled:!0}),e.jsx(l,{label:"Item Nine",...r(8),disabled:!0}),e.jsx(l,{label:"Item Ten",...r(9),disabled:!0})]}),e.jsx(s,{value:a.value,index:0}),e.jsx(s,{value:a.value,index:1}),e.jsx(s,{value:a.value,index:2})]}),args:{value:0,variant:"scrollable"}};var b,d,p;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,T,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(T=i.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const ae=["_Tabs","_TabsScrollable"];export{o as _Tabs,i as _TabsScrollable,ae as __namedExportsOrder,ee as default};
