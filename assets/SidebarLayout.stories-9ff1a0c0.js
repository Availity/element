import{j as r,a as t}from"./jsx-runtime-390e5fc8.js";import{r as E}from"./index-570b25c1.js";import{H as N,S as y,a as j,T as A,D as L}from"./DataGridSection-e498d249.js";import{C as p}from"./Container-92fc112b.js";import{G as e}from"./Grid-977833ec.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-25d48f71.js";import"./faCircleArrowRight-45fe0977.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-667e6608.js";import"./createTheme-b02e766d.js";import"./clsx-43049957.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-ac7867ed.js";import"./styled-69a32198.js";import"./generateUtilityClasses-b06d554b.js";import"./Box-ce79f7f7.js";import"./extendSxProp-b0ad88fc.js";import"./Breadcrumbs-ce38e814.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-5dca4d92.js";import"./ButtonBase-78eecb53.js";import"./emotion-react.browser.esm-dc887828.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Typography-72ef0a36.js";import"./useSlotProps-c5009eb1.js";import"./objectWithoutPropertiesLoose-830c72af.js";import"./IconButton-329b8fa1.js";import"./Link-2e03a78b.js";import"./Paper-f1647d6d.js";import"./TextField-9d53cc8b.js";import"./FormControl-8060afd3.js";import"./utils-3d35716f.js";import"./isMuiElement-6907f060.js";import"./useId-6f4bfce0.js";import"./FormLabel-5f5d671f.js";import"./Menu-ada6f194.js";import"./useTheme-a234fe30.js";import"./utils-a53b28cc.js";import"./index-8a077077.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-698471fc.js";import"./createChainedFunction-0bab83cf.js";import"./Tooltip-9ef5363d.js";import"./useControlled-9b1271e0.js";import"./OutlinedInput-0f61bb0e.js";import"./GlobalStyles-6bf89189.js";import"./FormHelperText-ef15573c.js";import"./InputAdornment-435dfe4f.js";import"./Badge-040bd2ec.js";import"./Divider-a67a617b.js";import"./dividerClasses-272b0ff4.js";import"./index-bc19b086.js";import"./Button-48a9b380.js";import"./LoadingButton-8f26fe8a.js";import"./extends-90dea224.js";import"./index-2e752af9.js";import"./index-fc238a97.js";import"./Checkbox-91df2012.js";import"./Chip-00f560d1.js";import"./index-23365ade.js";import"./index-9681c8ff.js";import"./FormControlLabel-61164d2c.js";import"./Stack-524d7b5c.js";import"./styled-9972f020.js";import"./index-4a0094be.js";import"./index-8224ca1a.js";import"./index-7a70df2f.js";import"./index-21706776.js";import"./index-3290967b.js";import"./visuallyHidden-14c3de6e.js";import"./index-1fc0ca9a.js";import"./Close-dfa46add.js";import"./MenuItem-f0d1c848.js";import"./KeyboardArrowRight-71a82ecc.js";import"./LastPage-e2c78f39.js";const me={title:"Layouts/Sidebar",tags:["autodocs"],parameters:{docs:{description:{component:`*Work In Progress*

Sidebar layout that includes header, sidenav, search section, & tables.`}}}},i={render:()=>{const[c,W]=E.useState("home");return r(p,{maxWidth:!1,sx:{bgcolor:"background.canvas",minHeight:"75%",padding:"1rem"},children:t(p,{fixed:!0,children:[r(N,{}),t(e,{container:!0,spacing:2,children:[r(e,{item:!0,xs:12,sm:"auto",children:r(y,{activeTab:c,onItemClick:W})}),t(e,{item:!0,xs:!0,children:[r("div",{role:"tabpanel",children:t(e,{container:!0,spacing:2,children:[r(e,{item:!0,xs:12,children:r(j,{})}),r(e,{item:!0,xs:12,children:r(A,{})}),r(e,{item:!0,xs:12,children:r(L,{})})]})}),r("div",{role:"tabpanel",hidden:!0,children:"future section"}),r("div",{role:"tabpanel",hidden:!0,children:"future section"})]})]})]})})}},o={render:()=>r(N,{})},a={render:()=>r(y,{onItemClick:c=>console.log(c)})},m={render:()=>r(j,{})},n={render:()=>r(A,{})},s={render:()=>r(L,{})};var d,l,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('home');
    return <Container maxWidth={false} sx={{
      bgcolor: 'background.canvas',
      minHeight: '75%',
      padding: '1rem'
    }}>
        <Container fixed>
          <HeaderSection />
          <Grid container spacing={2}>
            <Grid item xs={12} sm="auto">
              <SidebarNav activeTab={activeTab} onItemClick={setActiveTab} />
            </Grid>
            <Grid item xs>
              <div role="tabpanel">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <SearchSection />
                  </Grid>
                  <Grid item xs={12}>
                    <TablesSection />
                  </Grid>
                  <Grid item xs={12}>
                    <DataGridSection />
                  </Grid>
                </Grid>
              </div>
              <div role="tabpanel" hidden>
                future section
              </div>
              <div role="tabpanel" hidden>
                future section
              </div>
            </Grid>
          </Grid>
        </Container>
      </Container>;
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var S,b,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <HeaderSection />
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,g,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <SidebarNav onItemClick={item => console.log(item)} />
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var G,f,_;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <SearchSection />
}`,...(_=(f=m.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var T,C,H;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <TablesSection />
}`,...(H=(C=n.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var k,D,I;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <DataGridSection />
}`,...(I=(D=s.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const ne=["_SidebarLayout","_HeaderSection","_SidebarNavSection","_SearchSection","_TablesSection","_DataGridSection"];export{s as _DataGridSection,o as _HeaderSection,m as _SearchSection,i as _SidebarLayout,a as _SidebarNavSection,n as _TablesSection,ne as __namedExportsOrder,me as default};
//# sourceMappingURL=SidebarLayout.stories-9ff1a0c0.js.map
