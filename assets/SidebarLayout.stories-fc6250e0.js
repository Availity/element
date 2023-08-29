import{j as r,a as t}from"./jsx-runtime-390e5fc8.js";import{r as E}from"./index-570b25c1.js";import{C as d,H as N,S as y,a as j,T as A,D as L}from"./DataGridSection-d91f85d8.js";import{G as e}from"./Grid-8655ea46.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-46700abb.js";import"./useThemeProps-a0bcf1fa.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./index-c3fc5b9b.js";import"./faCircleArrowRight-555d384f.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-5897cc2b.js";import"./Box-84f0fe93.js";import"./extendSxProp-00384f26.js";import"./Breadcrumbs-2c1703b4.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-ddb735eb.js";import"./ButtonBase-aeff0912.js";import"./emotion-react.browser.esm-dc94dc3c.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./Typography-66f9d519.js";import"./useSlotProps-31aaaa55.js";import"./IconButton-249e9fb9.js";import"./Link-460c4c8f.js";import"./Paper-9691a1f7.js";import"./TextField-22305daa.js";import"./FormControl-3331f79d.js";import"./FormLabel-d5339951.js";import"./useId-6f4bfce0.js";import"./Menu-150c2495.js";import"./useTheme-d6ae80b7.js";import"./utils-2678d3f4.js";import"./index-8a077077.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-698471fc.js";import"./Tooltip-2897f931.js";import"./createChainedFunction-0bab83cf.js";import"./OutlinedInput-279abcec.js";import"./GlobalStyles-0dde8858.js";import"./Badge-131b6e16.js";import"./Divider-a3d20a23.js";import"./dividerClasses-1ce153f5.js";import"./index-2c889be6.js";import"./index-fcfbe3db.js";import"./Chip-9287d8c6.js";import"./index-9681c8ff.js";import"./index-4cab4afe.js";import"./Button-c8c7a6d0.js";import"./LoadingButton-bdafa76d.js";import"./FormControlLabel-32a091db.js";import"./index-074384a6.js";import"./index-ae5b2189.js";import"./index-d32aeadf.js";import"./visuallyHidden-14c3de6e.js";import"./index-1fc0ca9a.js";import"./Close-7b1f55b3.js";import"./MenuItem-f77c9652.js";import"./Checkbox-b3a2191c.js";import"./KeyboardArrowRight-8c9c4049.js";const Fr={title:"Layouts/Sidebar",tags:["autodocs"],parameters:{docs:{description:{component:`*Work In Progress*

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
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const Jr=["_SidebarLayout","_HeaderSection","_SidebarNavSection","_SearchSection","_TablesSection","_DataGridSection"];export{c as _DataGridSection,o as _HeaderSection,n as _SearchSection,i as _SidebarLayout,a as _SidebarNavSection,s as _TablesSection,Jr as __namedExportsOrder,Fr as default};
//# sourceMappingURL=SidebarLayout.stories-fc6250e0.js.map
