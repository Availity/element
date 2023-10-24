import{j as r,a as t}from"./jsx-runtime-390e5fc8.js";import{r as E}from"./index-570b25c1.js";import"./index-742560bc.js";import"./index-df413f1e.js";import"./index-6c07da69.js";import"./index-dc002079.js";import"./index-cfe4ced8.js";import{C as c,G as e}from"./index-8286ce5c.js";import"./index-92035bdc.js";import"./index-9ee667b0.js";import"./index-8a01f150.js";import{H as N,S as y,a as j,T as A,D as L}from"./DataGridSection-7572c518.js";import"./_commonjsHelpers-042e6b4d.js";import"./Button-c8d0f982.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-ba967c06.js";import"./useThemeProps-32d9d40f.js";import"./generateUtilityClasses-cabd787c.js";import"./ButtonBase-0a435f0a.js";import"./emotion-react.browser.esm-474fda6d.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-db1cd215.js";import"./useTheme-4854111c.js";import"./objectWithoutPropertiesLoose-830c72af.js";import"./ownerDocument-613eb639.js";import"./Grow-5e3a8791.js";import"./index-8a077077.js";import"./utils-57cc91c3.js";import"./useSlotProps-4e64ffeb.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-7604743a.js";import"./LoadingButton-1865c5d0.js";import"./extends-90dea224.js";import"./faCircleArrowRight-ecf82256.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-e7295b43.js";import"./index-86efc5f7.js";import"./Badge-9c1271e3.js";import"./Checkbox-488bcec3.js";import"./utils-3d35716f.js";import"./createSvgIcon-a2702ab1.js";import"./TablePagination-9130dd3c.js";import"./TableCell-37083325.js";import"./KeyboardArrowRight-399aa1c9.js";import"./PaginationItem-43e78c97.js";import"./Select-3e954196.js";import"./react-is.production.min-a192e302.js";import"./Menu-216583e1.js";import"./ownerWindow-698471fc.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-5389b241.js";import"./OutlinedInput-ac666d53.js";import"./GlobalStyles-adf0b00b.js";import"./MenuItem-7ec041ec.js";import"./dividerClasses-bef686f3.js";import"./TableRow-8758e60d.js";import"./TableContainer-6191a711.js";import"./Pagination-04291afb.js";import"./Box-ca2a0b09.js";import"./extendSxProp-9115426f.js";import"./TableSortLabel-5ad993e2.js";import"./TextField-42a0141b.js";import"./FormLabel-c20a5ce1.js";import"./isMuiElement-6907f060.js";import"./FormHelperText-77c1615b.js";import"./Link-2b846b46.js";import"./Typography-45d8e817.js";import"./index-9681c8ff.js";import"./FormControlLabel-87163616.js";import"./Stack-4be8c4f6.js";import"./styled-b379d1d1.js";import"./Divider-66f52528.js";import"./Container-1fb095c3.js";import"./Grid2-9aef8e79.js";import"./index-d69c8d6b.js";import"./index-d5a6f0e0.js";import"./Breadcrumbs-01bc4afa.js";import"./InputAdornment-de6150c6.js";import"./index-1327d399.js";import"./index-60161482.js";import"./Chip-bd182597.js";import"./visuallyHidden-14c3de6e.js";import"./index-1fc0ca9a.js";import"./Close-88006d9f.js";const ve={title:"Layouts/Sidebar",tags:["autodocs"],parameters:{docs:{description:{component:`*Work In Progress*

Sidebar layout that includes header, sidenav, search section, & tables.`}}}},i={render:()=>{const[s,W]=E.useState("home");return r(c,{maxWidth:!1,sx:{bgcolor:"background.canvas",minHeight:"75%",padding:"1rem"},children:t(c,{fixed:!0,children:[r(N,{}),t(e,{container:!0,spacing:2,children:[r(e,{xs:12,sm:"auto",children:r(y,{activeTab:s,onItemClick:W})}),t(e,{xs:!0,children:[r("div",{role:"tabpanel",children:t(e,{container:!0,spacing:2,children:[r(e,{xs:12,children:r(j,{})}),r(e,{xs:12,children:r(A,{})}),r(e,{xs:12,children:r(L,{})})]})}),r("div",{role:"tabpanel",hidden:!0,children:"future section"}),r("div",{role:"tabpanel",hidden:!0,children:"future section"})]})]})]})})}},o={render:()=>r(N,{})},a={render:()=>r(y,{onItemClick:s=>console.log(s)})},m={render:()=>r(j,{})},n={render:()=>r(A,{})},p={render:()=>r(L,{})};var d,l,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
            <Grid xs={12} sm="auto">
              <SidebarNav activeTab={activeTab} onItemClick={setActiveTab} />
            </Grid>
            <Grid xs>
              <div role="tabpanel">
                <Grid container spacing={2}>
                  <Grid xs={12}>
                    <SearchSection />
                  </Grid>
                  <Grid xs={12}>
                    <TablesSection />
                  </Grid>
                  <Grid xs={12}>
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
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var G,_,f;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <SearchSection />
}`,...(f=(_=m.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var T,C,H;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <TablesSection />
}`,...(H=(C=n.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var k,D,I;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <DataGridSection />
}`,...(I=(D=p.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const ge=["_SidebarLayout","_HeaderSection","_SidebarNavSection","_SearchSection","_TablesSection","_DataGridSection"];export{p as _DataGridSection,o as _HeaderSection,m as _SearchSection,i as _SidebarLayout,a as _SidebarNavSection,n as _TablesSection,ge as __namedExportsOrder,ve as default};
//# sourceMappingURL=SidebarLayout.stories-162578b3.js.map
