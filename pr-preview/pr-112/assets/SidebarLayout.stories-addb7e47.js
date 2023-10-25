import"./index-570b25c1.js";import{M as d,U as s,b as c}from"./index-e3a4055e.js";import"./index-742560bc.js";import"./index-df413f1e.js";import{j as r,a as e,F as l}from"./jsx-runtime-390e5fc8.js";import"./index-6c07da69.js";import"./index-dc002079.js";import"./index-cfe4ced8.js";import{C as p,G as t}from"./index-8286ce5c.js";import"./index-92035bdc.js";import"./index-9ee667b0.js";import{T as h}from"./index-7f24b282.js";import{H as u,S as x,a as g,T as b,D as S}from"./DataGridSection-34a65c9d.js";import{u as a}from"./index-da4379a2.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-41222569.js";import"../sb-preview/runtime.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./index-8a077077.js";import"./index-f8236e9a.js";import"./index-356e4a49.js";import"./Button-c8d0f982.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./styled-ba967c06.js";import"./useThemeProps-32d9d40f.js";import"./generateUtilityClasses-cabd787c.js";import"./ButtonBase-0a435f0a.js";import"./emotion-react.browser.esm-474fda6d.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-db1cd215.js";import"./useTheme-4854111c.js";import"./objectWithoutPropertiesLoose-830c72af.js";import"./ownerDocument-613eb639.js";import"./Grow-5e3a8791.js";import"./utils-57cc91c3.js";import"./useSlotProps-4e64ffeb.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-7604743a.js";import"./LoadingButton-1865c5d0.js";import"./extends-90dea224.js";import"./faCircleArrowRight-ecf82256.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-e7295b43.js";import"./index-86efc5f7.js";import"./Badge-9c1271e3.js";import"./Checkbox-488bcec3.js";import"./utils-3d35716f.js";import"./createSvgIcon-a2702ab1.js";import"./TablePagination-9130dd3c.js";import"./TableCell-37083325.js";import"./KeyboardArrowRight-399aa1c9.js";import"./PaginationItem-43e78c97.js";import"./Select-3e954196.js";import"./react-is.production.min-a192e302.js";import"./Menu-216583e1.js";import"./ownerWindow-698471fc.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-5389b241.js";import"./OutlinedInput-ac666d53.js";import"./GlobalStyles-adf0b00b.js";import"./MenuItem-7ec041ec.js";import"./dividerClasses-bef686f3.js";import"./TableRow-8758e60d.js";import"./TableContainer-6191a711.js";import"./Pagination-04291afb.js";import"./Box-ca2a0b09.js";import"./extendSxProp-9115426f.js";import"./TableSortLabel-5ad993e2.js";import"./TextField-42a0141b.js";import"./FormLabel-c20a5ce1.js";import"./isMuiElement-6907f060.js";import"./FormHelperText-77c1615b.js";import"./Link-2b846b46.js";import"./Typography-45d8e817.js";import"./index-9681c8ff.js";import"./FormControlLabel-87163616.js";import"./Stack-4be8c4f6.js";import"./styled-b379d1d1.js";import"./Divider-66f52528.js";import"./Container-1fb095c3.js";import"./Grid2-9aef8e79.js";import"./index-e4c8d820.js";import"./index-d5a6f0e0.js";import"./Breadcrumbs-01bc4afa.js";import"./InputAdornment-de6150c6.js";import"./index-1327d399.js";import"./index-60161482.js";import"./Chip-bd182597.js";import"./visuallyHidden-14c3de6e.js";import"./index-1fc0ca9a.js";import"./Close-88006d9f.js";function n(o){const i=Object.assign({h1:"h1",p:"p",em:"em"},a(),o.components);return e(l,{children:[r(d,{title:"Layouts/Sidebar/MDX"}),`
`,r(i.h1,{id:"sidebar-layout",children:"Sidebar Layout"}),`
`,r(i.p,{children:r(i.em,{children:"Work In Progress"})}),`
`,r(s,{children:r(h,{children:r(p,{maxWidth:!1,sx:{bgcolor:"background.canvas",minHeight:"75%",maxHeight:"100%",padding:"1rem"},children:e(p,{fixed:!0,children:[r(u,{}),e(t,{container:!0,spacing:2,children:[r(t,{xs:12,sm:"auto",children:r(x,{})}),e(t,{xs:!0,children:[r("div",{role:"tabpanel",children:e(t,{container:!0,spacing:2,children:[r(t,{xs:12,children:r(g,{})}),r(t,{xs:12,children:r(b,{})}),r(t,{xs:12,children:r(S,{})})]})}),r("div",{role:"tabpanel",hidden:!0,children:r(i.p,{children:"future section"})}),r("div",{role:"tabpanel",hidden:!0,children:r(i.p,{children:"future section"})})]})]})]})})})}),`
`,r(c,{code:`<ThemeProvider>
  <Container maxWidth={false} sx={{bgcolor:'background.canvas', padding:'1rem'}}>
    <Container fixed>
      <HeaderSection/>
      <Grid container spacing={2}>
        <Grid xs={12} sm='auto'>
          <SideNavSection/>
        </Grid>
        <Grid xs>
          <div role="tabpanel">
              <Grid container spacing={2}>
                <Grid xs={12}>
                  <SearchSection/>
                </Grid>
                <Grid xs={12}>
                  <TablesSection/>
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
  </Container>
</ThemeProvider>
`})]})}function G(o={}){const{wrapper:i}=Object.assign({},a(),o.components);return i?r(i,{...o,children:r(n,{...o})}):n(o)}const f=()=>{throw new Error("Docs-only story")};f.parameters={docsOnly:!0};const m={title:"Layouts/Sidebar/MDX",tags:["stories-mdx"],includeStories:["__page"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:G};const si=["__page"];export{si as __namedExportsOrder,f as __page,m as default};
//# sourceMappingURL=SidebarLayout.stories-addb7e47.js.map
