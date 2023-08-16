import{j as r,a as t}from"./jsx-runtime-91a467a5.js";import{r as E}from"./index-8db94870.js";import{C as d,H as N,S as y,a as j,T as A,D as L}from"./DataGridSection-afc59145.js";import{G as e}from"./Grid-44436001.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-838f2411.js";import"./useThemeProps-ac6a164c.js";import"./extends-bab83b91.js";import"./index-cd651495.js";import"./faCircleArrowRight-555d384f.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-247857dd.js";import"./Box-473e99f8.js";import"./extendSxProp-d07c2917.js";import"./Breadcrumbs-66bbcafb.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-802be96d.js";import"./ButtonBase-246c583e.js";import"./emotion-react.browser.esm-63c9efdb.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./Typography-e8ebf3ff.js";import"./useSlotProps-8f208bee.js";import"./IconButton-58eb99ee.js";import"./Link-b1ab97a7.js";import"./Paper-25f4f657.js";import"./TextField-431fd5eb.js";import"./OutlinedInput-f4d9261c.js";import"./FormLabel-f4a5774d.js";import"./index-8ce4a492.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./GlobalStyles-6909ed97.js";import"./useId-fd294ee9.js";import"./Menu-0d2471b4.js";import"./useTheme-c349195b.js";import"./utils-038da973.js";import"./Tooltip-98269e07.js";import"./Badge-f2ecc77a.js";import"./Divider-3e9557ac.js";import"./dividerClasses-f59732d7.js";import"./index-64f3c907.js";import"./index-61f39d05.js";import"./Chip-22ff5d20.js";import"./Button-e016c6ed.js";import"./CircularProgress-76852e3f.js";import"./index-398e3a69.js";import"./index-93d0de92.js";import"./LoadingButton-65968ff9.js";import"./index-fe410b9c.js";import"./index-9681c8ff.js";import"./index-d69dd2a1.js";import"./index-a9eb109e.js";import"./isNativeReflectConstruct-e378569d.js";import"./index-1fc0ca9a.js";import"./Close-f3879550.js";import"./MenuItem-49ca62b3.js";import"./KeyboardArrowRight-c8f32650.js";const Fr={title:"Layouts/Sidebar",tags:["autodocs"],parameters:{docs:{description:{component:`*Work In Progress*

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
//# sourceMappingURL=SidebarLayout.stories-85b519e9.js.map
