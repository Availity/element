import{j as r,a as t}from"./jsx-runtime-390e5fc8.js";import{r as E}from"./index-570b25c1.js";import{H as N,S as y,a as j,T as A,D as L}from"./DataGridSection-2d629b01.js";import{C as p}from"./Container-5d132ad9.js";import{G as e}from"./Grid-631b4085.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-a97b9a56.js";import"./faCircleArrowRight-2a86424a.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-6af4d5b9.js";import"./clsx.m-fb33c42b.js";import"./createTheme-4dc6b23f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-bb804320.js";import"./styled-d0245a8f.js";import"./generateUtilityClasses-145aac4e.js";import"./Box-a5c2ee7f.js";import"./extendSxProp-fa3ab054.js";import"./Breadcrumbs-f315cc8c.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-ab70d8ae.js";import"./ButtonBase-ae02db0a.js";import"./emotion-react.browser.esm-325397be.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Typography-9728a9c9.js";import"./useSlotProps-ff3a8657.js";import"./isHostComponent-73d6e646.js";import"./IconButton-8720a92d.js";import"./Link-444e0d62.js";import"./Paper-582e0bbf.js";import"./TextField-a57d634f.js";import"./FormControl-e8c4f774.js";import"./utils-3d35716f.js";import"./isMuiElement-9a8390c4.js";import"./useId-6f4bfce0.js";import"./FormLabel-513408a3.js";import"./Menu-5ec177f1.js";import"./useTheme-108b79b5.js";import"./utils-78dc3aa5.js";import"./index-8a077077.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-698471fc.js";import"./Tooltip-d34c04c4.js";import"./useControlled-9b1271e0.js";import"./createChainedFunction-0bab83cf.js";import"./OutlinedInput-db8225ea.js";import"./GlobalStyles-4d8fa0fc.js";import"./FormHelperText-4ba98590.js";import"./InputAdornment-4738448d.js";import"./Badge-41bb91c2.js";import"./Divider-81cba528.js";import"./dividerClasses-c83f3358.js";import"./index-df90da3e.js";import"./Button-03854916.js";import"./LoadingButton-5b331dfb.js";import"./index-99060b48.js";import"./index-338918c6.js";import"./Checkbox-e24b272d.js";import"./Chip-e700d4e6.js";import"./index-ab5b003c.js";import"./index-9681c8ff.js";import"./FormControlLabel-ecc014e3.js";import"./index-bbdd91bd.js";import"./index-53f78ddc.js";import"./index-1b452f28.js";import"./index-d9ad03cb.js";import"./index-1cda1c0f.js";import"./visuallyHidden-14c3de6e.js";import"./index-1fc0ca9a.js";import"./Close-82c4c884.js";import"./MenuItem-3c0592b4.js";import"./styled-f808758a.js";import"./KeyboardArrowRight-97bd477f.js";import"./LastPage-379dc1a2.js";const oe={title:"Layouts/Sidebar",tags:["autodocs"],parameters:{docs:{description:{component:`*Work In Progress*

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
}`,...(I=(D=s.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const ae=["_SidebarLayout","_HeaderSection","_SidebarNavSection","_SearchSection","_TablesSection","_DataGridSection"];export{s as _DataGridSection,o as _HeaderSection,m as _SearchSection,i as _SidebarLayout,a as _SidebarNavSection,n as _TablesSection,ae as __namedExportsOrder,oe as default};
//# sourceMappingURL=SidebarLayout.stories-d9fd8896.js.map
