import{j as r,a as t}from"./jsx-runtime-390e5fc8.js";import{r as E}from"./index-570b25c1.js";import{H as N,S as y,a as j,T as A,D as L}from"./DataGridSection-8b6d86e5.js";import{C as p}from"./Container-6823ff64.js";import{G as e}from"./Grid-d51fec4b.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f35eb24e.js";import"./faCircleArrowRight-5066acd3.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-ab7aa383.js";import"./createTheme-e6b56ddb.js";import"./clsx-8416b751.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-db7202c2.js";import"./styled-188025da.js";import"./generateUtilityClasses-f776b170.js";import"./Box-7f261278.js";import"./extendSxProp-4d42c058.js";import"./Breadcrumbs-c1befc8e.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-e4b87ef5.js";import"./ButtonBase-6040f690.js";import"./emotion-react.browser.esm-69a15469.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Typography-a571125c.js";import"./useSlotProps-1710581f.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./IconButton-15cd5b0a.js";import"./Link-20859ed0.js";import"./Paper-4c319fed.js";import"./TextField-7928884c.js";import"./FormLabel-a07a3cea.js";import"./utils-3d35716f.js";import"./isMuiElement-6907f060.js";import"./useId-6f4bfce0.js";import"./Select-997ebd3a.js";import"./Menu-09429e3f.js";import"./useTheme-3a36d7a0.js";import"./Backdrop-e44d0c7e.js";import"./utils-df51f77d.js";import"./index-8a077077.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-698471fc.js";import"./createChainedFunction-0bab83cf.js";import"./Tooltip-d9214433.js";import"./useControlled-9b1271e0.js";import"./OutlinedInput-dc04b75a.js";import"./GlobalStyles-8a837dd0.js";import"./FormHelperText-ffbef46f.js";import"./InputAdornment-bac5b9bc.js";import"./Badge-f27db098.js";import"./Divider-e6df2ce9.js";import"./dividerClasses-d4e8510c.js";import"./index-49af8d8b.js";import"./Button-9af3d166.js";import"./LoadingButton-2cbf4819.js";import"./extends-90dea224.js";import"./index-e0cbc6db.js";import"./index-86efc5f7.js";import"./Checkbox-b04c18ed.js";import"./index-67c58611.js";import"./index-9681c8ff.js";import"./FormControlLabel-0fb4668c.js";import"./Stack-aed56d46.js";import"./styled-4350ac6b.js";import"./index-77c93b21.js";import"./index-d80280fa.js";import"./Chip-35828233.js";import"./index-77af8b5f.js";import"./index-a52c6b7c.js";import"./index-ad0a2e8a.js";import"./index-2410d48c.js";import"./visuallyHidden-14c3de6e.js";import"./index-1fc0ca9a.js";import"./Close-ab7ad129.js";import"./MenuItem-0e9b60fb.js";import"./KeyboardArrowRight-5ae0643c.js";import"./LastPage-bfb2a0a5.js";const se={title:"Layouts/Sidebar",tags:["autodocs"],parameters:{docs:{description:{component:`*Work In Progress*

Sidebar layout that includes header, sidenav, search section, & tables.`}}}},i={render:()=>{const[c,W]=E.useState("home");return r(p,{maxWidth:!1,sx:{bgcolor:"background.canvas",minHeight:"75%",padding:"1rem"},children:t(p,{fixed:!0,children:[r(N,{}),t(e,{container:!0,spacing:2,children:[r(e,{item:!0,xs:12,sm:"auto",children:r(y,{activeTab:c,onItemClick:W})}),t(e,{item:!0,xs:!0,children:[r("div",{role:"tabpanel",children:t(e,{container:!0,spacing:2,children:[r(e,{item:!0,xs:12,children:r(j,{})}),r(e,{item:!0,xs:12,children:r(A,{})}),r(e,{item:!0,xs:12,children:r(L,{})})]})}),r("div",{role:"tabpanel",hidden:!0,children:"future section"}),r("div",{role:"tabpanel",hidden:!0,children:"future section"})]})]})]})})}},o={render:()=>r(N,{})},a={render:()=>r(y,{onItemClick:c=>console.log(c)})},m={render:()=>r(j,{})},n={render:()=>r(A,{})},s={render:()=>r(L,{})};var d,l,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(I=(D=s.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const ce=["_SidebarLayout","_HeaderSection","_SidebarNavSection","_SearchSection","_TablesSection","_DataGridSection"];export{s as _DataGridSection,o as _HeaderSection,m as _SearchSection,i as _SidebarLayout,a as _SidebarNavSection,n as _TablesSection,ce as __namedExportsOrder,se as default};
//# sourceMappingURL=SidebarLayout.stories-f610c6ce.js.map
