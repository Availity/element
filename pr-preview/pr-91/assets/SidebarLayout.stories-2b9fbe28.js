import{j as r,a as t}from"./jsx-runtime-91a467a5.js";import{r as E}from"./index-8db94870.js";import{C as d,H as N,S as y,a as j,T as A,D as L}from"./DataGridSection-d64c3b7a.js";import{G as e}from"./Grid-bed1c57e.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-657e2aa7.js";import"./useThemeProps-ad7d4b8c.js";import"./extends-bab83b91.js";import"./index-93ed4815.js";import"./faCircleArrowRight-555d384f.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-c3c5be0b.js";import"./Box-08ad8bbe.js";import"./extendSxProp-1ec1a8c1.js";import"./Breadcrumbs-f14a9d3c.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-fedf70c8.js";import"./ButtonBase-920b2988.js";import"./emotion-react.browser.esm-a6af08ad.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./Typography-b1d35567.js";import"./useSlotProps-3883ee92.js";import"./IconButton-86149d8f.js";import"./Link-ed051e64.js";import"./Paper-8c39f6b3.js";import"./TextField-9ba7cec0.js";import"./FormControl-8894f30e.js";import"./FormLabel-6155989a.js";import"./useId-fd294ee9.js";import"./Menu-8dfbb14f.js";import"./useTheme-92c76a56.js";import"./utils-d62d1ea6.js";import"./index-8ce4a492.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-698471fc.js";import"./Tooltip-8862c8b0.js";import"./createChainedFunction-0bab83cf.js";import"./OutlinedInput-918f6d1e.js";import"./GlobalStyles-25cb3a8b.js";import"./Badge-b32d8b72.js";import"./Divider-c380d1fa.js";import"./dividerClasses-e8602bc7.js";import"./index-fee2b937.js";import"./index-0b879891.js";import"./Chip-d51ec8b6.js";import"./index-9681c8ff.js";import"./index-e8e8346a.js";import"./Button-f8975b32.js";import"./LoadingButton-93eaf8cc.js";import"./FormControlLabel-fe7aa935.js";import"./index-d45a8efc.js";import"./index-9667f495.js";import"./index-80bbb35c.js";import"./isNativeReflectConstruct-e378569d.js";import"./index-1fc0ca9a.js";import"./Close-3accadea.js";import"./MenuItem-226c82bb.js";import"./Checkbox-9bbc9bc3.js";import"./KeyboardArrowRight-a6d1a9a8.js";const Kr={title:"Layouts/Sidebar",tags:["autodocs"],parameters:{docs:{description:{component:`*Work In Progress*

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
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const Mr=["_SidebarLayout","_HeaderSection","_SidebarNavSection","_SearchSection","_TablesSection","_DataGridSection"];export{c as _DataGridSection,o as _HeaderSection,n as _SearchSection,i as _SidebarLayout,a as _SidebarNavSection,s as _TablesSection,Mr as __namedExportsOrder,Kr as default};
//# sourceMappingURL=SidebarLayout.stories-2b9fbe28.js.map
