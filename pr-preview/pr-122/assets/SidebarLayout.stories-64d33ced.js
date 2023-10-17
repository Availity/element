import"./index-570b25c1.js";import{M as d,U as s,b as c}from"./index-cc12faad.js";import"./index-49af8d8b.js";import"./index-f35eb24e.js";import{j as r,a as e,F as l}from"./jsx-runtime-390e5fc8.js";import"./index-798bcdbc.js";import"./index-77c93b21.js";import"./index-b9687215.js";import"./index-77af8b5f.js";import"./index-a52c6b7c.js";import{T as h}from"./index-63776c21.js";import{H as u,S as x,a as g,T as b,D as S}from"./DataGridSection-e327296b.js";import{C as p}from"./Container-6823ff64.js";import{G as t}from"./Grid-d51fec4b.js";import{u as a}from"./index-da4379a2.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-2bd7fe26.js";import"../sb-preview/runtime.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./index-8a077077.js";import"./index-f8236e9a.js";import"./index-356e4a49.js";import"./Button-9af3d166.js";import"./createTheme-e6b56ddb.js";import"./clsx-8416b751.js";import"./styled-188025da.js";import"./useThemeProps-db7202c2.js";import"./generateUtilityClasses-f776b170.js";import"./ButtonBase-6040f690.js";import"./emotion-react.browser.esm-69a15469.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-d9214433.js";import"./useTheme-3a36d7a0.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./useSlotProps-1710581f.js";import"./utils-df51f77d.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-15cd5b0a.js";import"./LoadingButton-2cbf4819.js";import"./extends-90dea224.js";import"./faCircleArrowRight-5066acd3.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-ab7aa383.js";import"./index-d36a06bb.js";import"./Badge-f27db098.js";import"./Checkbox-a3d48803.js";import"./useFormControl-c56e981c.js";import"./createSvgIcon-e4b87ef5.js";import"./TextField-c7cc9e25.js";import"./FormControl-0ffe418b.js";import"./utils-a73c94d0.js";import"./isMuiElement-6907f060.js";import"./FormLabel-7579deb9.js";import"./Select-21d68e76.js";import"./react-is.production.min-a192e302.js";import"./Menu-b3818dcf.js";import"./ownerWindow-698471fc.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-4c319fed.js";import"./OutlinedInput-b679a079.js";import"./GlobalStyles-8a837dd0.js";import"./FormHelperText-276a9108.js";import"./Link-20859ed0.js";import"./Typography-a571125c.js";import"./extendSxProp-4d42c058.js";import"./index-9681c8ff.js";import"./Box-7f261278.js";import"./FormControlLabel-3713c7b9.js";import"./Stack-aed56d46.js";import"./styled-4350ac6b.js";import"./Divider-e6df2ce9.js";import"./dividerClasses-d4e8510c.js";import"./index-722e8b73.js";import"./Breadcrumbs-c1befc8e.js";import"./InputAdornment-4144614f.js";import"./index-d80280fa.js";import"./Chip-35828233.js";import"./visuallyHidden-14c3de6e.js";import"./index-1fc0ca9a.js";import"./Close-ab7ad129.js";import"./MenuItem-919a3c91.js";import"./KeyboardArrowRight-5ae0643c.js";import"./LastPage-bfb2a0a5.js";function n(o){const i=Object.assign({h1:"h1",p:"p",em:"em"},a(),o.components);return e(l,{children:[r(d,{title:"Layouts/Sidebar/MDX"}),`
`,r(i.h1,{id:"sidebar-layout",children:"Sidebar Layout"}),`
`,r(i.p,{children:r(i.em,{children:"Work In Progress"})}),`
`,r(s,{children:r(h,{children:r(p,{maxWidth:!1,sx:{bgcolor:"background.canvas",minHeight:"75%",maxHeight:"100%",padding:"1rem"},children:e(p,{fixed:!0,children:[r(u,{}),e(t,{container:!0,spacing:2,children:[r(t,{item:!0,xs:12,sm:"auto",children:r(x,{})}),e(t,{item:!0,xs:!0,children:[r("div",{role:"tabpanel",children:e(t,{container:!0,spacing:2,children:[r(t,{item:!0,xs:12,children:r(g,{})}),r(t,{item:!0,xs:12,children:r(b,{})}),r(t,{item:!0,xs:12,children:r(S,{})})]})}),r("div",{role:"tabpanel",hidden:!0,children:r(i.p,{children:"future section"})}),r("div",{role:"tabpanel",hidden:!0,children:r(i.p,{children:"future section"})})]})]})]})})})}),`
`,r(c,{code:`<ThemeProvider>
  <Container maxWidth={false} sx={{bgcolor:'background.canvas', padding:'1rem'}}>
    <Container fixed>
      <HeaderSection/>
      <Grid container spacing={2}>
        <Grid item xs={12} sm='auto'>
          <SideNavSection/>
        </Grid>
        <Grid item xs>
          <div role="tabpanel">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <SearchSection/>
                </Grid>
                <Grid item xs={12}>
                  <TablesSection/>
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
  </Container>
</ThemeProvider>
`})]})}function f(o={}){const{wrapper:i}=Object.assign({},a(),o.components);return i?r(i,{...o,children:r(n,{...o})}):n(o)}const G=()=>{throw new Error("Docs-only story")};G.parameters={docsOnly:!0};const m={title:"Layouts/Sidebar/MDX",tags:["stories-mdx"],includeStories:["__page"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:f};const ti=["__page"];export{ti as __namedExportsOrder,G as __page,m as default};
//# sourceMappingURL=SidebarLayout.stories-64d33ced.js.map
