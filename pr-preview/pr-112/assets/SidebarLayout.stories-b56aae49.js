import{j as r,a as t}from"./jsx-runtime-390e5fc8.js";import{r as E}from"./index-570b25c1.js";import"./index-4f46ff89.js";import"./index-c91bacb5.js";import"./index-e0fd6ed7.js";import"./index-6c4f7381.js";import"./index-ed5ca834.js";import"./index-0e99cbbb.js";import"./index-b905a91a.js";import{C as c,G as e}from"./index-082b93cd.js";import"./index-0733667c.js";import"./index-a3280e79.js";import"./index-e95fda27.js";import{H as N,S as y,a as j,T as A,D as L}from"./DataGridSection-4b041fd7.js";import"./_commonjsHelpers-042e6b4d.js";import"./Button-676c50e4.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-7846e708.js";import"./useThemeProps-018254e6.js";import"./generateUtilityClasses-70c60a0e.js";import"./ButtonBase-f1b77b46.js";import"./emotion-react.browser.esm-474fda6d.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-e75628f1.js";import"./useTheme-76c02901.js";import"./objectWithoutPropertiesLoose-830c72af.js";import"./ownerDocument-613eb639.js";import"./Grow-f5561129.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useSlotProps-4e64ffeb.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-de7b27e6.js";import"./LoadingButton-23ede12c.js";import"./extends-90dea224.js";import"./CircularProgress-924892c6.js";import"./faCircleArrowRight-ecf82256.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-b52b22c3.js";import"./index-fd483b67.js";import"./Avatar-e0c05330.js";import"./createSvgIcon-359b5f59.js";import"./Link-0fc2a91d.js";import"./Typography-8f39b1cb.js";import"./extendSxProp-9115426f.js";import"./Badge-e640f991.js";import"./Checkbox-de5c3cff.js";import"./utils-3d35716f.js";import"./TablePagination-133ab834.js";import"./TableCell-e489d0cc.js";import"./KeyboardArrowRight-0ba4b66f.js";import"./PaginationItem-92e6625e.js";import"./Select-1e6b8376.js";import"./react-is.production.min-a192e302.js";import"./Menu-a816b978.js";import"./Modal-dc5a21fa.js";import"./Backdrop-68fb5a34.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-2d2ada67.js";import"./debounce-517eeb3c.js";import"./OutlinedInput-5c4aca78.js";import"./GlobalStyles-bc6ce36c.js";import"./MenuItem-2927656e.js";import"./dividerClasses-b19abef8.js";import"./TableRow-a1c1dbfb.js";import"./TableContainer-52da86d1.js";import"./Pagination-b8ffebd7.js";import"./Box-ca2a0b09.js";import"./TableSortLabel-f6cd2259.js";import"./TextField-4a018d74.js";import"./FormLabel-26dfe09c.js";import"./isMuiElement-6907f060.js";import"./FormHelperText-eb61de0b.js";import"./index-9681c8ff.js";import"./FormControlLabel-eda9707b.js";import"./Stack-caeba03e.js";import"./styled-11d1647d.js";import"./Divider-7fb78c99.js";import"./Container-6934edbe.js";import"./Grid2-88809a0f.js";import"./index-1df734f8.js";import"./LocalizationProvider-01292d3a.js";import"./index-185d376d.js";import"./Breadcrumbs-d7963cd1.js";import"./InputAdornment-987554c3.js";import"./index-0c942154.js";import"./index-7b2a929f.js";import"./Chip-fcd9692c.js";import"./visuallyHidden-14c3de6e.js";import"./index-1fc0ca9a.js";import"./Close-fd2201f8.js";const ke={title:"Layouts/Sidebar",tags:["autodocs"],parameters:{docs:{description:{component:`*Work In Progress*

Sidebar layout that includes header, sidenav, search section, & tables.`}}}},i={render:()=>{const[s,W]=E.useState("home");return r(c,{maxWidth:!1,sx:{bgcolor:"background.canvas",minHeight:"75%",padding:"1rem"},children:t(c,{fixed:!0,children:[r(N,{}),t(e,{container:!0,spacing:2,children:[r(e,{xs:12,sm:"auto",children:r(y,{activeTab:s,onItemClick:W})}),t(e,{xs:!0,children:[r("div",{role:"tabpanel",children:t(e,{container:!0,spacing:2,children:[r(e,{xs:12,children:r(j,{})}),r(e,{xs:12,children:r(A,{})}),r(e,{xs:12,children:r(L,{})})]})}),r("div",{role:"tabpanel",hidden:!0,children:"future section"}),r("div",{role:"tabpanel",hidden:!0,children:"future section"})]})]})]})})}},o={render:()=>r(N,{})},a={render:()=>r(y,{onItemClick:s=>console.log(s)})},m={render:()=>r(j,{})},p={render:()=>r(A,{})},n={render:()=>r(L,{})};var d,l,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(_=m.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var T,C,H;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <TablesSection />
}`,...(H=(C=p.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var k,D,I;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <DataGridSection />
}`,...(I=(D=n.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const De=["_SidebarLayout","_HeaderSection","_SidebarNavSection","_SearchSection","_TablesSection","_DataGridSection"];export{n as _DataGridSection,o as _HeaderSection,m as _SearchSection,i as _SidebarLayout,a as _SidebarNavSection,p as _TablesSection,De as __namedExportsOrder,ke as default};
//# sourceMappingURL=SidebarLayout.stories-b56aae49.js.map
