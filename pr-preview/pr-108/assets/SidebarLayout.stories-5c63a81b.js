import{j as r,a as t}from"./jsx-runtime-390e5fc8.js";import{r as E}from"./index-570b25c1.js";import{H as N,S as y,a as j,T as A,D as L}from"./DataGridSection-aebca026.js";import{C as d}from"./Container-f071c24c.js";import{G as e}from"./Grid-1323b00c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-b20b939a.js";import"./faCircleArrowRight-a712a312.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-33a08535.js";import"./styled-52ae1682.js";import"./useThemeProps-09701b40.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./Box-f536527f.js";import"./extendSxProp-5906c526.js";import"./Breadcrumbs-b43b2fb0.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-cde3b626.js";import"./ButtonBase-d82e3f0a.js";import"./emotion-react.browser.esm-7b849601.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Typography-fc5866ec.js";import"./useSlotProps-163bc2ac.js";import"./isHostComponent-73d6e646.js";import"./IconButton-01452f88.js";import"./Link-a52e3cb5.js";import"./Paper-f833d12a.js";import"./TextField-c56286dc.js";import"./FormLabel-49db2e23.js";import"./utils-3d35716f.js";import"./useId-6f4bfce0.js";import"./Menu-24a09785.js";import"./useTheme-a833130b.js";import"./utils-237e8b7d.js";import"./index-8a077077.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-698471fc.js";import"./Tooltip-863be512.js";import"./useControlled-9b1271e0.js";import"./createChainedFunction-0bab83cf.js";import"./OutlinedInput-7e88b918.js";import"./GlobalStyles-0835ee04.js";import"./FormHelperText-0da16220.js";import"./index-ce864163.js";import"./index-9681c8ff.js";import"./index-1df17b3b.js";import"./Button-04ac7f3f.js";import"./LoadingButton-ef204a6f.js";import"./FormControlLabel-eb87f144.js";import"./Badge-235707d5.js";import"./Divider-2fdf100d.js";import"./dividerClasses-21aada36.js";import"./index-f767eb93.js";import"./index-338918c6.js";import"./Avatar-ac96a4a5.js";import"./index-80702e04.js";import"./index-d3ecc606.js";import"./index-cb4f412a.js";import"./index-0f59056b.js";import"./index-0f4d0e4c.js";import"./visuallyHidden-14c3de6e.js";import"./index-1fc0ca9a.js";import"./Close-38943527.js";import"./MenuItem-21aae5c3.js";import"./Checkbox-4556ddb0.js";import"./KeyboardArrowRight-60fa4295.js";import"./LastPage-89b3c5a3.js";const Yr={title:"Layouts/Sidebar",tags:["autodocs"],parameters:{docs:{description:{component:`*Work In Progress*

Sidebar layout that includes header, sidenav, search section, & tables.`}}}},i={render:()=>{const[c,W]=E.useState("home");return r(d,{maxWidth:!1,sx:{bgcolor:"background.canvas",minHeight:"75%",padding:"1rem"},children:t(d,{fixed:!0,children:[r(N,{}),t(e,{container:!0,spacing:2,children:[r(e,{item:!0,xs:12,sm:"auto",children:r(y,{activeTab:c,onItemClick:W})}),t(e,{item:!0,xs:!0,children:[r("div",{role:"tabpanel",children:t(e,{container:!0,spacing:2,children:[r(e,{item:!0,xs:12,children:r(j,{})}),r(e,{item:!0,xs:12,children:r(A,{})}),r(e,{item:!0,xs:12,children:r(L,{})})]})}),r("div",{role:"tabpanel",hidden:!0,children:"future section"}),r("div",{role:"tabpanel",hidden:!0,children:"future section"})]})]})]})})}},o={render:()=>r(N,{})},a={render:()=>r(y,{onItemClick:c=>console.log(c)})},n={render:()=>r(j,{})},s={render:()=>r(A,{})},m={render:()=>r(L,{})};var p,l,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var G,f,_;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <SearchSection />
}`,...(_=(f=n.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var T,C,H;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <TablesSection />
}`,...(H=(C=s.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var k,D,I;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <DataGridSection />
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const Zr=["_SidebarLayout","_HeaderSection","_SidebarNavSection","_SearchSection","_TablesSection","_DataGridSection"];export{m as _DataGridSection,o as _HeaderSection,n as _SearchSection,i as _SidebarLayout,a as _SidebarNavSection,s as _TablesSection,Zr as __namedExportsOrder,Yr as default};
//# sourceMappingURL=SidebarLayout.stories-5c63a81b.js.map
