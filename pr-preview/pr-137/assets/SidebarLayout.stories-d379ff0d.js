import{j as r,a as t}from"./jsx-runtime-390e5fc8.js";import{r as E}from"./index-570b25c1.js";import{H as N,S as y,a as j,T as A,D as L}from"./DataGridSection-4453e9f5.js";import{C as c}from"./Container-87fd18ac.js";import{G as e}from"./Grid-e557fe35.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d2e63b55.js";import"./faCircleArrowRight-5066acd3.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-f3e07af8.js";import"./createTheme-e6b56ddb.js";import"./clsx-8416b751.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-285a8f6c.js";import"./styled-78cd751f.js";import"./generateUtilityClasses-2915a045.js";import"./Box-7f261278.js";import"./extendSxProp-4d42c058.js";import"./Breadcrumbs-c3e2f3e9.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-c7fbf131.js";import"./ButtonBase-da7ceb67.js";import"./emotion-react.browser.esm-69a15469.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Typography-125528da.js";import"./useSlotProps-1710581f.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./IconButton-e1c52fea.js";import"./Link-6b0912e7.js";import"./Paper-adaa179d.js";import"./TextField-297e2fd6.js";import"./FormLabel-4f2fd2fa.js";import"./utils-3d35716f.js";import"./isMuiElement-6907f060.js";import"./useId-6f4bfce0.js";import"./Select-835f1a5f.js";import"./Menu-51c4cb11.js";import"./useTheme-b3699c65.js";import"./Modal-1f126ad0.js";import"./Backdrop-c0ceeda2.js";import"./utils-1ac07bae.js";import"./index-8a077077.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Tooltip-7c526765.js";import"./useControlled-9b1271e0.js";import"./debounce-517eeb3c.js";import"./OutlinedInput-422528d5.js";import"./GlobalStyles-bb3c5388.js";import"./FormHelperText-5982fdaa.js";import"./InputAdornment-cfb27f94.js";import"./Badge-27ccac47.js";import"./Divider-bf202c30.js";import"./dividerClasses-17e5b451.js";import"./index-361fb5ad.js";import"./Button-bf5d864a.js";import"./LoadingButton-7d17ce4c.js";import"./extends-90dea224.js";import"./CircularProgress-5cd64941.js";import"./index-e5411303.js";import"./index-fd483b67.js";import"./Avatar-b0962169.js";import"./index-cc8ffd81.js";import"./Checkbox-961e189d.js";import"./index-8f828b25.js";import"./index-b527af3f.js";import"./Chip-a33b6866.js";import"./index-94f07ebc.js";import"./index-e07eccd0.js";import"./index-9681c8ff.js";import"./FormControlLabel-4f099345.js";import"./Stack-385eaa90.js";import"./styled-d8af9a46.js";import"./index-90b88d96.js";import"./index-61052c9b.js";import"./index-bfd1cee4.js";import"./index-e792a1dc.js";import"./LocalizationProvider-bbd3fee8.js";import"./visuallyHidden-14c3de6e.js";import"./index-1fc0ca9a.js";import"./Close-d9903b66.js";import"./MenuItem-3c95a4ec.js";import"./KeyboardArrowRight-f1b42dda.js";import"./LastPage-92c52e7e.js";const he={title:"Layouts/Sidebar",tags:["autodocs"],parameters:{docs:{description:{component:`*Work In Progress*

Sidebar layout that includes header, sidenav, search section, & tables.`}}}},i={render:()=>{const[p,W]=E.useState("home");return r(c,{maxWidth:!1,sx:{bgcolor:"background.canvas",minHeight:"75%",padding:"1rem"},children:t(c,{fixed:!0,children:[r(N,{}),t(e,{container:!0,spacing:2,children:[r(e,{item:!0,xs:12,sm:"auto",children:r(y,{activeTab:p,onItemClick:W})}),t(e,{item:!0,xs:!0,children:[r("div",{role:"tabpanel",children:t(e,{container:!0,spacing:2,children:[r(e,{item:!0,xs:12,children:r(j,{})}),r(e,{item:!0,xs:12,children:r(A,{})}),r(e,{item:!0,xs:12,children:r(L,{})})]})}),r("div",{role:"tabpanel",hidden:!0,children:"future section"}),r("div",{role:"tabpanel",hidden:!0,children:"future section"})]})]})]})})}},o={render:()=>r(N,{})},a={render:()=>r(y,{onItemClick:p=>console.log(p)})},m={render:()=>r(j,{})},n={render:()=>r(A,{})},s={render:()=>r(L,{})};var d,l,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var G,f,_;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <SearchSection />
}`,...(_=(f=m.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var T,C,H;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <TablesSection />
}`,...(H=(C=n.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var k,D,I;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <DataGridSection />
}`,...(I=(D=s.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const ve=["_SidebarLayout","_HeaderSection","_SidebarNavSection","_SearchSection","_TablesSection","_DataGridSection"];export{s as _DataGridSection,o as _HeaderSection,m as _SearchSection,i as _SidebarLayout,a as _SidebarNavSection,n as _TablesSection,ve as __namedExportsOrder,he as default};
//# sourceMappingURL=SidebarLayout.stories-d379ff0d.js.map
