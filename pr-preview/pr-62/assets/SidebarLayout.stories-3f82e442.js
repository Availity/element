import{j as e,a as i}from"./jsx-runtime-91a467a5.js";import{C as c,H as T,S as C,a as N,T as y}from"./TablesSection-a64814db.js";import{G as r}from"./Grid-c43e877c.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-362768da.js";import"./useThemeProps-209b167f.js";import"./extends-bab83b91.js";import"./index-243cee36.js";import"./faMagnifyingGlass-d219cdaa.js";import"./faCircleArrowRight-f21d618c.js";import"./SvgIcon-9d562db2.js";import"./Box-dd25e24e.js";import"./extendSxProp-f8cb53f5.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-fecd2817.js";import"./ButtonBase-e390fcf3.js";import"./emotion-react.browser.esm-803df07d.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./Typography-3506bfd2.js";import"./useSlotProps-0d6e705d.js";import"./IconButton-d2e52582.js";import"./Paper-e8439940.js";import"./useTheme-9557626a.js";const re={title:"Layouts/Sidebar",tags:["autodocs"],parameters:{docs:{description:{component:`*Work In Progress*

Sidebar layout that includes header, sidenav, search section, & tables.`}}}},t={render:()=>e(c,{maxWidth:!1,sx:{bgcolor:"background.canvas",minHeight:"75%",padding:"1rem"},children:i(c,{fixed:!0,children:[e(T,{}),i(r,{container:!0,spacing:2,children:[e(r,{item:!0,xs:12,sm:"auto",children:e(C,{})}),i(r,{item:!0,xs:!0,children:[e("div",{role:"tabpanel",children:i(r,{container:!0,spacing:2,children:[e(r,{item:!0,xs:12,children:e(N,{})}),e(r,{item:!0,xs:12,children:e(y,{})})]})}),e("div",{role:"tabpanel",hidden:!0,children:"future section"}),e("div",{role:"tabpanel",hidden:!0,children:"future section"})]})]})]})})},a={render:()=>e(T,{})},o={render:()=>e(C,{})},n={render:()=>e(N,{})},s={render:()=>e(y,{})};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    // TODO: tab logic
    return <Container maxWidth={false} sx={{
      bgcolor: 'background.canvas',
      minHeight: '75%',
      padding: '1rem'
    }}>
        <Container fixed>
          <HeaderSection />
          <Grid container spacing={2}>
            <Grid item xs={12} sm="auto">
              <SideNavSection />
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,l,S;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <HeaderSection />
}`,...(S=(l=a.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};var h,b,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <SideNavSection />
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var x,v,G;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <SearchSection />
}`,...(G=(v=n.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};var f,_,H;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <TablesSection />
}`,...(H=(_=s.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};const ie=["_SidebarLayout","_HeaderSection","_SideNavSection","_SearchSection","_TablesSection"];export{a as _HeaderSection,n as _SearchSection,o as _SideNavSection,t as _SidebarLayout,s as _TablesSection,ie as __namedExportsOrder,re as default};
//# sourceMappingURL=SidebarLayout.stories-3f82e442.js.map
