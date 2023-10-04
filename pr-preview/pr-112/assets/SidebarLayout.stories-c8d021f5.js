import"./index-570b25c1.js";import{M as d,U as s,b as c}from"./index-445f85bf.js";import"./index-ab2511e5.js";import"./index-6c98e8c4.js";import{j as r,a as e,F as l}from"./jsx-runtime-390e5fc8.js";import"./index-475e9db3.js";import"./index-1a68640b.js";import"./index-542553e9.js";import{C as p,G as t}from"./index-17ab8ba2.js";import"./index-3d4c6fd7.js";import"./index-688f9b16.js";import{T as h}from"./index-00c3be08.js";import{H as u,S as x,a as g,T as b,D as S}from"./DataGridSection-eacfa974.js";import{u as a}from"./index-da4379a2.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-7d3be983.js";import"../sb-preview/runtime.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./index-8a077077.js";import"./index-f8236e9a.js";import"./index-356e4a49.js";import"./Button-b8d9193e.js";import"./clsx.m-5a18bdae.js";import"./createTheme-cf9cd31a.js";import"./styled-34470687.js";import"./useThemeProps-4eed9f55.js";import"./generateUtilityClasses-379cd6e3.js";import"./ButtonBase-c1676a07.js";import"./emotion-react.browser.esm-166e2a31.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-cf9f79a8.js";import"./useTheme-75b14aeb.js";import"./Grow-16063720.js";import"./utils-7964d339.js";import"./ownerDocument-613eb639.js";import"./useSlotProps-5f03bd16.js";import"./isHostComponent-73d6e646.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-899bd586.js";import"./LoadingButton-f3d81a39.js";import"./faCircleArrowRight-a219d0fc.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-544b53cd.js";import"./index-338918c6.js";import"./Badge-6d40a1e4.js";import"./Checkbox-92370ee2.js";import"./utils-3d35716f.js";import"./createSvgIcon-d58a77bd.js";import"./Chip-ded34222.js";import"./TablePagination-d15a1cec.js";import"./TableCell-12a22124.js";import"./KeyboardArrowRight-1a8432f1.js";import"./PaginationItem-1968a162.js";import"./Select-ea34a9f7.js";import"./react-is.production.min-a192e302.js";import"./Menu-5cbf8d5d.js";import"./ownerWindow-698471fc.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-bff53714.js";import"./OutlinedInput-472e64a7.js";import"./GlobalStyles-de8dc72e.js";import"./MenuItem-60137032.js";import"./dividerClasses-3c222898.js";import"./TableRow-9f7fc496.js";import"./TableContainer-e847577a.js";import"./Pagination-0ee963aa.js";import"./Box-4ff12a56.js";import"./extendSxProp-3c84bad0.js";import"./TableSortLabel-31ac3150.js";import"./FormControl-91252996.js";import"./isMuiElement-9a8390c4.js";import"./InputAdornment-eb1c52d0.js";import"./Typography-b4b82de0.js";import"./FormHelperText-c4f9f03b.js";import"./Link-79553cef.js";import"./index-9681c8ff.js";import"./FormControlLabel-c7d47d9c.js";import"./FormLabel-c1b87670.js";import"./Container-bd153028.js";import"./styled-4b92625c.js";import"./Grid2-a7e4c902.js";import"./index-5829c730.js";import"./index-c629ce0b.js";import"./Breadcrumbs-194fe855.js";import"./TextField-f0c69d3d.js";import"./index-ccef7342.js";import"./Divider-647f498d.js";import"./visuallyHidden-14c3de6e.js";import"./index-1fc0ca9a.js";import"./Close-41d6a998.js";function n(o){const i=Object.assign({h1:"h1",p:"p",em:"em"},a(),o.components);return e(l,{children:[r(d,{title:"Layouts/Sidebar/MDX"}),`
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
`})]})}function G(o={}){const{wrapper:i}=Object.assign({},a(),o.components);return i?r(i,{...o,children:r(n,{...o})}):n(o)}const f=()=>{throw new Error("Docs-only story")};f.parameters={docsOnly:!0};const m={title:"Layouts/Sidebar/MDX",tags:["stories-mdx"],includeStories:["__page"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:G};const ai=["__page"];export{ai as __namedExportsOrder,f as __page,m as default};
//# sourceMappingURL=SidebarLayout.stories-c8d021f5.js.map
