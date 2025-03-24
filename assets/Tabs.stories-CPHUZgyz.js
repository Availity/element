import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{L as E,U as B}from"./index-CTQn_wDL.js";import{T as v}from"./index-BEpCJ8Yz.js";import{a as t,T as l}from"./Tab-B14qCAFG.js";import{r as M}from"./index-DcWiA9TO.js";import{B as x}from"./Box-DWnb8VZB.js";import{T as A}from"./Typography-CvSvtD2a.js";import"./faCircleArrowRight-6L8v8FIg.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./SvgIcon-DSdWmKAH.js";import"./generateUtilityClass-CVWqFxsA.js";import"./identifier-Dtqimryx.js";import"./memoTheme-D-rVhYRp.js";import"./styled-CF1hcdwO.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./Tooltip-CiiaKkqp.js";import"./index-nos-0K8U.js";import"./useTheme-DUkCvbx_.js";import"./useTheme-C2CrmYKc.js";import"./useSlot-DnkSxE3X.js";import"./resolveComponentProps-Dg20wxiM.js";import"./useForkRef-BVrIj09m.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-CBAx_nZm.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BAIpVL6Y.js";import"./isFocusVisible-B8k4qzLc.js";import"./Tabs-Q_4h7ycJ.js";import"./ButtonBase-DbVRbsLs.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./KeyboardArrowRight-PXT6z23P.js";import"./createSvgIcon-TketyoFF.js";import"./extendSxProp-B5AgUjQT.js";import"./index-f0Aa_BgU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const Ve={title:"Components/Tabs/Tabs",component:t,argTypes:{level:{options:["primary","secondary"],control:{type:"radio"}}},tags:["autodocs"]};function n(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}function r(a){const{value:o,index:s,...p}=a;return e.jsx("div",{role:"tabpanel",hidden:o!==s,id:`simple-tabpanel-${s}`,"aria-labelledby":`simple-tab-${s}`,...p,children:o===s&&e.jsx(x,{sx:{p:3},children:e.jsxs(A,{children:["Hello from panel ",s+1]})})})}const b={render:a=>e.jsxs(e.Fragment,{children:[e.jsxs(t,{value:a.value,onChange:()=>{},...a,children:[e.jsx(l,{label:"Item One",...n(0)}),e.jsx(l,{label:"Item Two",...n(1)}),e.jsx(l,{label:"Item Three",...n(2),disabled:!0})]}),e.jsx(r,{value:a.value,index:0}),e.jsx(r,{value:a.value,index:1}),e.jsx(r,{value:a.value,index:2})]}),args:{value:0}},m={render:a=>e.jsxs(e.Fragment,{children:[e.jsxs(t,{value:a.value,onChange:()=>{},...a,children:[e.jsx(l,{label:"Item One",...n(0)}),e.jsx(l,{label:"Item Two",...n(1)}),e.jsx(l,{label:"Item Three",...n(2),disabled:!0}),e.jsx(l,{label:"Item Four",...n(3),disabled:!0}),e.jsx(l,{label:"Item Five",...n(4),disabled:!0}),e.jsx(l,{label:"Item Six",...n(5),disabled:!0}),e.jsx(l,{label:"Item Seven",...n(6),disabled:!0}),e.jsx(l,{label:"Item Eight",...n(7),disabled:!0}),e.jsx(l,{label:"Item Nine",...n(8),disabled:!0}),e.jsx(l,{label:"Item Ten",...n(9),disabled:!0})]}),e.jsx(r,{value:a.value,index:0}),e.jsx(r,{value:a.value,index:1}),e.jsx(r,{value:a.value,index:2})]}),args:{value:0,variant:"scrollable"}},i={render:()=>e.jsxs(x,{sx:{p:3,backgroundColor:"background.paper"},children:[e.jsxs(t,{level:"primary",value:0,onChange:()=>{},children:[e.jsx(l,{label:"Item One",...n(0)}),e.jsx(l,{label:"Item Two",...n(1)}),e.jsx(l,{label:"Item Three",...n(2),disabled:!0})]}),e.jsx("div",{role:"tabpanel",id:"simple-tabpanel-0","aria-labelledby":"simple-tab-0",children:e.jsxs(x,{sx:{p:3},children:[e.jsx(A,{sx:{mb:2},children:"Hello from panel 1"}),e.jsxs(t,{level:"secondary",value:1,onChange:()=>{},children:[e.jsx(l,{label:"Item Four",...n(3)}),e.jsx(l,{label:"Item Five",...n(4)}),e.jsx(l,{label:"Item Six",...n(5),disabled:!0})]}),e.jsx(r,{value:4,index:3}),e.jsx(r,{value:4,index:4}),e.jsx(r,{value:4,index:5})]})}),e.jsx(r,{value:0,index:1}),e.jsx(r,{value:0,index:2})]})},d={render:()=>{const[a,o]=M.useState(0),s=(p,c)=>{o(c)};return e.jsxs(e.Fragment,{children:[e.jsxs(t,{value:a,onChange:s,children:[e.jsx(l,{icon:e.jsx(E,{}),label:"Links",...n(0)}),e.jsx(l,{icon:e.jsx(B,{}),label:"My Account",...n(1)})]}),e.jsx(r,{value:a,index:0}),e.jsx(r,{value:a,index:1})]})}},u={render:()=>{const[a,o]=M.useState(0),s=(p,c)=>{o(c)};return e.jsxs(e.Fragment,{children:[e.jsxs(t,{value:a,onChange:s,children:[e.jsx(l,{label:e.jsx(v,{title:"Links",children:e.jsx(E,{})}),...n(0)}),e.jsx(v,{title:"My Account",children:e.jsx(l,{label:e.jsx(B,{}),...n(1)})})]}),e.jsx(r,{value:a,index:0}),e.jsx(r,{value:a,index:1})]})}};var T,h,j;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(j=(h=b.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var y,g,I;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(I=(g=m.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var P,C,S,f,w;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source},description:{story:"There is a hierarchy for tab styling. Most tabs will have the primary level styling while nested tabs have the secondary level styling.",...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.description}}};var F,_,k;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(k=(_=d.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var L,V,O;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return <>
        <Tabs value={value} onChange={handleChange}>
          <Tab label={<Tooltip title="Links"><LinkIcon /></Tooltip>} {...a11yProps(0)} />
          <Tooltip title="My Account"><Tab label={<UserIcon />} {...a11yProps(1)} /></Tooltip>
        </Tabs>
        <CustomTabPanel value={value} index={0} />
        <CustomTabPanel value={value} index={1} />
      </>;
  }
}`,...(O=(V=u.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const Oe=["_Tabs","_TabsScrollable","_Levels","_WithIcons","_IconOnly"];export{u as _IconOnly,i as _Levels,b as _Tabs,m as _TabsScrollable,d as _WithIcons,Oe as __namedExportsOrder,Ve as default};
