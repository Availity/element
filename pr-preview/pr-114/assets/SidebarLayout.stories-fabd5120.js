import{j as r,a as t}from"./jsx-runtime-390e5fc8.js";import{r as E}from"./index-570b25c1.js";import{H as N,S as y,a as j,T as A,D as L}from"./DataGridSection-c8548969.js";import{C as p}from"./Container-f3fcb1ef.js";import{G as e}from"./Grid-0aa1fe5b.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-77e680bf.js";import"./faCircleArrowRight-2a86424a.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-102d705b.js";import"./clsx.m-fb33c42b.js";import"./createTheme-4dc6b23f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-5f33a28c.js";import"./styled-fc2b35f5.js";import"./generateUtilityClasses-8a827d83.js";import"./Box-a5c2ee7f.js";import"./extendSxProp-fa3ab054.js";import"./Breadcrumbs-d5cfb1b0.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-fa525e7b.js";import"./ButtonBase-654f8a82.js";import"./emotion-react.browser.esm-325397be.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Typography-bf8f4457.js";import"./useSlotProps-ff3a8657.js";import"./isHostComponent-73d6e646.js";import"./IconButton-5b7e7002.js";import"./Link-0bbaffab.js";import"./Paper-c73104d0.js";import"./TextField-bb5a1441.js";import"./FormControl-c9e553ad.js";import"./utils-3d35716f.js";import"./isMuiElement-9a8390c4.js";import"./useId-6f4bfce0.js";import"./FormLabel-204f23dc.js";import"./Menu-6d720c17.js";import"./useTheme-117bd4f5.js";import"./Modal-dfa5517d.js";import"./utils-c4e5670c.js";import"./index-8a077077.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-698471fc.js";import"./Tooltip-528bd356.js";import"./useControlled-9b1271e0.js";import"./createChainedFunction-0bab83cf.js";import"./OutlinedInput-193b0208.js";import"./GlobalStyles-7484fee1.js";import"./FormHelperText-b3427492.js";import"./InputAdornment-468d660b.js";import"./Badge-6e9c04ae.js";import"./Divider-dfc5ac1a.js";import"./dividerClasses-a7bdfea3.js";import"./index-2dd44fd1.js";import"./Button-4ab2863e.js";import"./LoadingButton-7e27a20e.js";import"./index-849c0b33.js";import"./index-338918c6.js";import"./Checkbox-44dca6fb.js";import"./Chip-f644a380.js";import"./index-b0fc00fa.js";import"./index-c8528b58.js";import"./index-22e1157c.js";import"./index-9681c8ff.js";import"./FormControlLabel-6cbfc175.js";import"./index-494e7e2c.js";import"./index-7898f97c.js";import"./index-521cd455.js";import"./index-faf5dda6.js";import"./LocalizationProvider-98566918.js";import"./visuallyHidden-14c3de6e.js";import"./index-1fc0ca9a.js";import"./Close-2b6f6dcb.js";import"./MenuItem-3539b546.js";import"./styled-42e4472b.js";import"./KeyboardArrowRight-acbacc23.js";import"./LastPage-d4d7a7f0.js";const ne={title:"Layouts/Sidebar",tags:["autodocs"],parameters:{docs:{description:{component:`*Work In Progress*

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
}`,...(I=(D=s.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const se=["_SidebarLayout","_HeaderSection","_SidebarNavSection","_SearchSection","_TablesSection","_DataGridSection"];export{s as _DataGridSection,o as _HeaderSection,m as _SearchSection,i as _SidebarLayout,a as _SidebarNavSection,n as _TablesSection,se as __namedExportsOrder,ne as default};
//# sourceMappingURL=SidebarLayout.stories-fabd5120.js.map
