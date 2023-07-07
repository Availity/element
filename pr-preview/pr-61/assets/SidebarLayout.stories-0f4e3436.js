import{j as e,a}from"./jsx-runtime-91a467a5.js";import{C as c,H as T,S as C,a as N,T as y}from"./TablesSection-f58c48f9.js";import{G as r}from"./Grid-97c183db.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-0cac7ee0.js";import"./useThemeProps-4a2bd4cc.js";import"./extends-bab83b91.js";import"./Box-49a2b352.js";import"./extendSxProp-b17911bf.js";import"./Paper-4d20a8fa.js";import"./useTheme-5d25d683.js";const A={title:"Layouts/Sidebar",tags:["autodocs"],parameters:{docs:{description:{component:`*Work In Progress*

Sidebar layout that includes header, sidenav, search section, & tables.`}}}},i={render:()=>e(c,{maxWidth:!1,sx:{bgcolor:"background.canvas",minHeight:"75%",padding:"1rem"},children:a(c,{fixed:!0,children:[e(T,{}),a(r,{container:!0,spacing:2,children:[e(r,{item:!0,xs:12,sm:"auto",children:e(C,{})}),a(r,{item:!0,xs:!0,children:[e("div",{role:"tabpanel",children:a(r,{container:!0,spacing:2,children:[e(r,{item:!0,xs:12,children:e(N,{})}),e(r,{item:!0,xs:12,children:e(y,{})})]})}),e("div",{role:"tabpanel",hidden:!0,children:"future section"}),e("div",{role:"tabpanel",hidden:!0,children:"future section"})]})]})]})})},t={render:()=>e(T,{})},o={render:()=>e(C,{})},n={render:()=>e(N,{})},s={render:()=>e(y,{})};var d,m,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,l,S;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <HeaderSection />
}`,...(S=(l=t.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};var h,b,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <SideNavSection />
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var x,v,G;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <SearchSection />
}`,...(G=(v=n.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};var f,_,H;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <TablesSection />
}`,...(H=(_=s.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};const B=["_SidebarLayout","_HeaderSection","_SideNavSection","_SearchSection","_TablesSection"];export{t as _HeaderSection,n as _SearchSection,o as _SideNavSection,i as _SidebarLayout,s as _TablesSection,B as __namedExportsOrder,A as default};
//# sourceMappingURL=SidebarLayout.stories-0f4e3436.js.map
