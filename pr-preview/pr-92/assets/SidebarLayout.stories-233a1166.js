import{j as r,a as t}from"./jsx-runtime-390e5fc8.js";import{r as E}from"./index-570b25c1.js";import{C as d,H as N,S as y,a as j,T as A,D as L}from"./DataGridSection-7cd4f17f.js";import{G as e}from"./Grid-d0d33ffc.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-4775977a.js";import"./useThemeProps-760858ee.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./index-24e94e71.js";import"./faCircleArrowRight-555d384f.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-a70a27d9.js";import"./Box-48af092c.js";import"./extendSxProp-30aaf424.js";import"./Breadcrumbs-49325315.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-2cd6d7e5.js";import"./ButtonBase-f6c00ee6.js";import"./emotion-react.browser.esm-2467a126.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./Typography-90fb900c.js";import"./useSlotProps-cb7adee4.js";import"./IconButton-f83ceb8c.js";import"./Link-70adeabd.js";import"./Paper-e35979d3.js";import"./TextField-5df41399.js";import"./OutlinedInput-6b19f0d5.js";import"./FormLabel-df283fb8.js";import"./index-8a077077.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./GlobalStyles-21fedcfa.js";import"./useId-6f4bfce0.js";import"./Menu-0ce705a8.js";import"./useTheme-c803dd64.js";import"./utils-0c40a87f.js";import"./Tooltip-644d10dd.js";import"./Badge-7f58bc42.js";import"./Divider-4fb2d638.js";import"./dividerClasses-91030350.js";import"./index-9037d638.js";import"./index-5f5a7624.js";import"./Chip-d4156cd4.js";import"./Button-9ac46b4c.js";import"./CircularProgress-80c4bc18.js";import"./index-5cb16f21.js";import"./index-1b4bf07d.js";import"./LoadingButton-53ad2e5e.js";import"./index-c7fe62a8.js";import"./index-9681c8ff.js";import"./index-41fc7c96.js";import"./index-8667e481.js";import"./index-1fc0ca9a.js";import"./Close-64399e75.js";import"./MenuItem-5beedc58.js";import"./KeyboardArrowRight-6daa7f7d.js";const wr={title:"Layouts/Sidebar",tags:["autodocs"],parameters:{docs:{description:{component:`*Work In Progress*

Sidebar layout that includes header, sidenav, search section, & tables.`}}}},i={render:()=>{const[m,W]=E.useState("home");return r(d,{maxWidth:!1,sx:{bgcolor:"background.canvas",minHeight:"75%",padding:"1rem"},children:t(d,{fixed:!0,children:[r(N,{}),t(e,{container:!0,spacing:2,children:[r(e,{item:!0,xs:12,sm:"auto",children:r(y,{activeTab:m,onItemClick:W})}),t(e,{item:!0,xs:!0,children:[r("div",{role:"tabpanel",children:t(e,{container:!0,spacing:2,children:[r(e,{item:!0,xs:12,children:r(j,{})}),r(e,{item:!0,xs:12,children:r(A,{})}),r(e,{item:!0,xs:12,children:r(L,{})})]})}),r("div",{role:"tabpanel",hidden:!0,children:"future section"}),r("div",{role:"tabpanel",hidden:!0,children:"future section"})]})]})]})})}},o={render:()=>r(N,{})},a={render:()=>r(y,{onItemClick:m=>console.log(m)})},n={render:()=>r(j,{})},s={render:()=>r(A,{})},c={render:()=>r(L,{})};var p,l,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var G,_,f;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <SearchSection />
}`,...(f=(_=n.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var T,C,H;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <TablesSection />
}`,...(H=(C=s.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var k,D,I;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <DataGridSection />
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const zr=["_SidebarLayout","_HeaderSection","_SidebarNavSection","_SearchSection","_TablesSection","_DataGridSection"];export{c as _DataGridSection,o as _HeaderSection,n as _SearchSection,i as _SidebarLayout,a as _SidebarNavSection,s as _TablesSection,zr as __namedExportsOrder,wr as default};
//# sourceMappingURL=SidebarLayout.stories-233a1166.js.map
