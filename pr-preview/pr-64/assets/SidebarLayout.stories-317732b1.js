import{j as e,a as t}from"./jsx-runtime-91a467a5.js";import{r as j}from"./index-8db94870.js";import{C as d,H,S as k,a as I,T as N}from"./TablesSection-1bfd6a25.js";import{G as r}from"./Grid-3db7bf58.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-bbc4db24.js";import"./useThemeProps-0aafcae6.js";import"./extends-bab83b91.js";import"./index-e35e1256.js";import"./faMagnifyingGlass-d219cdaa.js";import"./faCircleArrowRight-f21d618c.js";import"./SvgIcon-ca7a5f5b.js";import"./Box-0f01f648.js";import"./extendSxProp-e5ca4f7c.js";import"./List-732fc7e9.js";import"./createSvgIcon-6d7c3e0b.js";import"./ButtonBase-4635bd7d.js";import"./emotion-react.browser.esm-f47b4cc7.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./Typography-184ba4ea.js";import"./useSlotProps-4b86086d.js";import"./IconButton-61ef6ad6.js";import"./Paper-c4513d03.js";import"./Divider-18980443.js";import"./dividerClasses-b028230b.js";import"./isMuiElement-08f54e3c.js";import"./listItemTextClasses-3902b3c9.js";import"./useTheme-aec6e016.js";const ce={title:"Layouts/Sidebar",tags:["autodocs"],parameters:{docs:{description:{component:`*Work In Progress*

Sidebar layout that includes header, sidenav, search section, & tables.`}}}},i={render:()=>{const[c,y]=j.useState("home");return e(d,{maxWidth:!1,sx:{bgcolor:"background.canvas",minHeight:"75%",padding:"1rem"},children:t(d,{fixed:!0,children:[e(H,{}),t(r,{container:!0,spacing:2,children:[e(r,{item:!0,xs:12,sm:"auto",children:e(k,{activeTab:c,onItemClick:y})}),t(r,{item:!0,xs:!0,children:[e("div",{role:"tabpanel",children:t(r,{container:!0,spacing:2,children:[e(r,{item:!0,xs:12,children:e(I,{})}),e(r,{item:!0,xs:12,children:e(N,{})})]})}),e("div",{role:"tabpanel",hidden:!0,children:"future section"}),e("div",{role:"tabpanel",hidden:!0,children:"future section"})]})]})]})})}},a={render:()=>e(H,{})},o={render:()=>e(k,{onItemClick:c=>console.log(c)})},n={render:()=>e(I,{})},s={render:()=>e(N,{})};var m,p,l;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(p=i.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,S,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <HeaderSection />
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var h,v,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <SidebarNav onItemClick={item => console.log(item)} />
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,G,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <SearchSection />
}`,...(f=(G=n.parameters)==null?void 0:G.docs)==null?void 0:f.source}}};var T,_,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <TablesSection />
}`,...(C=(_=s.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const de=["_SidebarLayout","_HeaderSection","_SidebarNavSection","_SearchSection","_TablesSection"];export{a as _HeaderSection,n as _SearchSection,i as _SidebarLayout,o as _SidebarNavSection,s as _TablesSection,de as __namedExportsOrder,ce as default};
//# sourceMappingURL=SidebarLayout.stories-317732b1.js.map
