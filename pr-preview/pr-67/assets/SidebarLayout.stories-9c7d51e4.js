import{j as e,a as t}from"./jsx-runtime-91a467a5.js";import{r as j}from"./index-8db94870.js";import{C as d,H,S as k,a as I,T as N}from"./TablesSection-57491e9a.js";import{G as r}from"./Grid-dcc87a85.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-48536e78.js";import"./useThemeProps-4e8cc45e.js";import"./extends-bab83b91.js";import"./index-05865f9f.js";import"./faMagnifyingGlass-d219cdaa.js";import"./faCircleArrowRight-c530ef6d.js";import"./SvgIcon-63a7a9ef.js";import"./Box-a370ec79.js";import"./extendSxProp-70e72958.js";import"./Breadcrumbs-0bf4f691.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-a18730f7.js";import"./ButtonBase-71b73842.js";import"./emotion-react.browser.esm-94564128.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./Typography-c2535165.js";import"./useSlotProps-e755ff0f.js";import"./IconButton-b3f5181d.js";import"./Link-37452212.js";import"./Paper-f9d84c2d.js";import"./TextField-a65d5831.js";import"./useId-fd294ee9.js";import"./Menu-b45be0f8.js";import"./useTheme-a8520578.js";import"./utils-e3b45a21.js";import"./index-8ce4a492.js";import"./Grow-b15871a4.js";import"./GlobalStyles-2df33680.js";import"./Close-0aea5f16.js";import"./Badge-fb5c3fb5.js";import"./Chip-8e419b25.js";import"./Divider-8b943f8f.js";import"./dividerClasses-34e8f2f7.js";import"./listItemTextClasses-9d46e741.js";const xe={title:"Layouts/Sidebar",tags:["autodocs"],parameters:{docs:{description:{component:`*Work In Progress*

Sidebar layout that includes header, sidenav, search section, & tables.`}}}},i={render:()=>{const[c,y]=j.useState("home");return e(d,{maxWidth:!1,sx:{bgcolor:"background.canvas",minHeight:"75%",padding:"1rem"},children:t(d,{fixed:!0,children:[e(H,{}),t(r,{container:!0,spacing:2,children:[e(r,{item:!0,xs:12,sm:"auto",children:e(k,{activeTab:c,onItemClick:y})}),t(r,{item:!0,xs:!0,children:[e("div",{role:"tabpanel",children:t(r,{container:!0,spacing:2,children:[e(r,{item:!0,xs:12,children:e(I,{})}),e(r,{item:!0,xs:12,children:e(N,{})})]})}),e("div",{role:"tabpanel",hidden:!0,children:"future section"}),e("div",{role:"tabpanel",hidden:!0,children:"future section"})]})]})]})})}},o={render:()=>e(H,{})},a={render:()=>e(k,{onItemClick:c=>console.log(c)})},n={render:()=>e(I,{})},s={render:()=>e(N,{})};var m,p,l;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(p=i.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,S,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <HeaderSection />
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var h,v,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <SidebarNav onItemClick={item => console.log(item)} />
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,G,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <SearchSection />
}`,...(f=(G=n.parameters)==null?void 0:G.docs)==null?void 0:f.source}}};var T,_,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <TablesSection />
}`,...(C=(_=s.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const Ge=["_SidebarLayout","_HeaderSection","_SidebarNavSection","_SearchSection","_TablesSection"];export{o as _HeaderSection,n as _SearchSection,i as _SidebarLayout,a as _SidebarNavSection,s as _TablesSection,Ge as __namedExportsOrder,xe as default};
//# sourceMappingURL=SidebarLayout.stories-9c7d51e4.js.map
