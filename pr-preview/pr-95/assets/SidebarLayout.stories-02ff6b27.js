import{j as r,a as t}from"./jsx-runtime-91a467a5.js";import{r as E}from"./index-8db94870.js";import{C as d,H as N,S as y,a as j,T as A,D as L}from"./DataGridSection-3bafc63d.js";import{G as e}from"./Grid-bed1c57e.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-657e2aa7.js";import"./useThemeProps-ad7d4b8c.js";import"./extends-bab83b91.js";import"./index-8950f082.js";import"./faCircleArrowRight-dbb40e32.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-c3c5be0b.js";import"./Box-08ad8bbe.js";import"./extendSxProp-1ec1a8c1.js";import"./Breadcrumbs-1ca76ef7.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-fedf70c8.js";import"./ButtonBase-6cf3e0c4.js";import"./emotion-react.browser.esm-a6af08ad.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./useEnhancedEffect-c45cae33.js";import"./Typography-b1d35567.js";import"./useSlotProps-d00a877a.js";import"./isHostComponent-73d6e646.js";import"./IconButton-427dc05a.js";import"./Link-ed051e64.js";import"./Paper-8c39f6b3.js";import"./TextField-abe90fbf.js";import"./FormLabel-4402a0fa.js";import"./utils-0a422cdb.js";import"./useId-fd294ee9.js";import"./Menu-c6215f2c.js";import"./useTheme-92c76a56.js";import"./utils-ec691a65.js";import"./index-8ce4a492.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-698471fc.js";import"./Tooltip-20eef2a5.js";import"./createChainedFunction-0bab83cf.js";import"./OutlinedInput-e0105204.js";import"./GlobalStyles-25cb3a8b.js";import"./FormHelperText-4f09096a.js";import"./index-08e9d4bf.js";import"./index-9681c8ff.js";import"./index-8e80667f.js";import"./Button-0c87990d.js";import"./LoadingButton-c81ddd00.js";import"./FormControlLabel-77b39479.js";import"./Badge-b3f303f3.js";import"./Divider-c380d1fa.js";import"./dividerClasses-e8602bc7.js";import"./index-18abf711.js";import"./index-edd07009.js";import"./Chip-9b15fe02.js";import"./index-d45a8efc.js";import"./index-139220f6.js";import"./index-61110efe.js";import"./isNativeReflectConstruct-e378569d.js";import"./index-1fc0ca9a.js";import"./Close-3accadea.js";import"./MenuItem-39c9dc2c.js";import"./Checkbox-e2872f4d.js";import"./KeyboardArrowRight-a6d1a9a8.js";const Ur={title:"Layouts/Sidebar",tags:["autodocs"],parameters:{docs:{description:{component:`*Work In Progress*

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
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const Vr=["_SidebarLayout","_HeaderSection","_SidebarNavSection","_SearchSection","_TablesSection","_DataGridSection"];export{c as _DataGridSection,o as _HeaderSection,n as _SearchSection,i as _SidebarLayout,a as _SidebarNavSection,s as _TablesSection,Vr as __namedExportsOrder,Ur as default};
//# sourceMappingURL=SidebarLayout.stories-02ff6b27.js.map
