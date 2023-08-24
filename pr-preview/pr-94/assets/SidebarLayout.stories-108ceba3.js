import{j as r,a as t}from"./jsx-runtime-91a467a5.js";import{r as E}from"./index-8db94870.js";import{C as d,H as N,S as y,a as j,T as A,D as L}from"./DataGridSection-762dfd9c.js";import{G as e}from"./Grid-a625ccec.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-3f92ccfd.js";import"./useThemeProps-e4a8cdbc.js";import"./extends-bab83b91.js";import"./index-bc648821.js";import"./faCircleArrowRight-555d384f.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-2cc6257a.js";import"./Box-992d9cc4.js";import"./extendSxProp-60b1cf3b.js";import"./Breadcrumbs-005b9c80.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-ac09799d.js";import"./ButtonBase-984984ab.js";import"./emotion-react.browser.esm-638d3fdc.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./Typography-d2e5eadd.js";import"./useSlotProps-cdd19d6c.js";import"./IconButton-87076761.js";import"./Link-10a1db47.js";import"./Paper-f5e9bc79.js";import"./TextField-dff766e6.js";import"./FormControl-6288b859.js";import"./FormLabel-fefed97f.js";import"./useId-fd294ee9.js";import"./Menu-252256b2.js";import"./useTheme-9732e621.js";import"./utils-cd6c7dfd.js";import"./index-8ce4a492.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-698471fc.js";import"./Tooltip-7b223af2.js";import"./createChainedFunction-0bab83cf.js";import"./OutlinedInput-519d8c45.js";import"./GlobalStyles-22b090b6.js";import"./Badge-ffbc363e.js";import"./Divider-346e2f52.js";import"./dividerClasses-a536a9bd.js";import"./index-8610fb92.js";import"./index-edd07009.js";import"./Chip-47d57a1a.js";import"./index-9681c8ff.js";import"./index-5c97ad5f.js";import"./Button-f7c44a22.js";import"./LoadingButton-bb1adf78.js";import"./FormControlLabel-23526cb6.js";import"./index-3427ccfa.js";import"./index-d9cc57f6.js";import"./index-e753225e.js";import"./isNativeReflectConstruct-e378569d.js";import"./visuallyHidden-14c3de6e.js";import"./index-1fc0ca9a.js";import"./Close-ebe952a1.js";import"./MenuItem-bf5e4718.js";import"./Checkbox-9eb68db6.js";import"./KeyboardArrowRight-b2c20915.js";const Mr={title:"Layouts/Sidebar",tags:["autodocs"],parameters:{docs:{description:{component:`*Work In Progress*

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
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const Qr=["_SidebarLayout","_HeaderSection","_SidebarNavSection","_SearchSection","_TablesSection","_DataGridSection"];export{c as _DataGridSection,o as _HeaderSection,n as _SearchSection,i as _SidebarLayout,a as _SidebarNavSection,s as _TablesSection,Qr as __namedExportsOrder,Mr as default};
//# sourceMappingURL=SidebarLayout.stories-108ceba3.js.map
