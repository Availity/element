import{j as r,a as t}from"./jsx-runtime-91a467a5.js";import{r as E}from"./index-8db94870.js";import{C as d,H as N,S as y,a as j,T as A,D as L}from"./DataGridSection-49529852.js";import{G as e}from"./Grid-8ee444d3.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-a84420af.js";import"./useThemeProps-2498ecc2.js";import"./extends-bab83b91.js";import"./index-17968c62.js";import"./faCircleArrowRight-202cb008.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-aa084682.js";import"./Box-09d9a604.js";import"./extendSxProp-8578bd86.js";import"./Breadcrumbs-264fd2b1.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-6dc812c4.js";import"./ButtonBase-3eb7f77d.js";import"./emotion-react.browser.esm-8a1b3cc7.js";import"./inheritsLoose-8349f581.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./Typography-a32bf19b.js";import"./useSlotProps-e284ca0c.js";import"./IconButton-cff60f92.js";import"./Link-504223ba.js";import"./Paper-2db66439.js";import"./TextField-c9306533.js";import"./useId-fd294ee9.js";import"./Menu-ec053f5a.js";import"./useTheme-fc3bf0b8.js";import"./utils-50b22590.js";import"./index-8ce4a492.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-698471fc.js";import"./Grow-6bddf867.js";import"./GlobalStyles-776808f2.js";import"./InputAdornment-e5c701de.js";import"./Badge-c11af328.js";import"./Divider-686e4b75.js";import"./dividerClasses-d158f676.js";import"./index-4b809b73.js";import"./index-0b879891.js";import"./Chip-ad77e750.js";import"./index-88a1300b.js";import"./index-dfb6250e.js";import"./Button-9069391e.js";import"./LoadingButton-8d7c374c.js";import"./Tooltip-348b79a3.js";import"./index-624a2039.js";import"./index-1468fc59.js";import"./LocalizationProvider-1b8d1ea9.js";import"./index-1fc0ca9a.js";import"./Close-f2696c27.js";import"./MenuItem-f8bafed0.js";import"./KeyboardArrowRight-3a3cc91a.js";const qr={title:"Layouts/Sidebar",tags:["autodocs"],parameters:{docs:{description:{component:`*Work In Progress*

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
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const wr=["_SidebarLayout","_HeaderSection","_SidebarNavSection","_SearchSection","_TablesSection","_DataGridSection"];export{c as _DataGridSection,o as _HeaderSection,n as _SearchSection,i as _SidebarLayout,a as _SidebarNavSection,s as _TablesSection,wr as __namedExportsOrder,qr as default};
//# sourceMappingURL=SidebarLayout.stories-8b761a0b.js.map
