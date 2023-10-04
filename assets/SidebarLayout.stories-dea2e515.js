import"./index-570b25c1.js";import{M as d,U as s,b as c}from"./index-9373d63f.js";import"./index-df90da3e.js";import"./index-a97b9a56.js";import{j as r,a as e,F as l}from"./jsx-runtime-390e5fc8.js";import"./index-99060b48.js";import"./index-bbdd91bd.js";import"./index-ab5b003c.js";import"./index-53f78ddc.js";import"./index-1b452f28.js";import{T as h}from"./index-e4f24654.js";import{H as u,S as x,a as g,T as b,D as S}from"./DataGridSection-4f5cbb25.js";import{C as p}from"./Container-5d132ad9.js";import{G as t}from"./Grid-631b4085.js";import{u as a}from"./index-da4379a2.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-99b1a9d2.js";import"../sb-preview/runtime.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./index-8a077077.js";import"./index-f8236e9a.js";import"./index-356e4a49.js";import"./Button-03854916.js";import"./clsx.m-fb33c42b.js";import"./createTheme-4dc6b23f.js";import"./styled-d0245a8f.js";import"./useThemeProps-bb804320.js";import"./generateUtilityClasses-145aac4e.js";import"./ButtonBase-ae02db0a.js";import"./emotion-react.browser.esm-325397be.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-d34c04c4.js";import"./useTheme-108b79b5.js";import"./ownerDocument-613eb639.js";import"./useSlotProps-ff3a8657.js";import"./isHostComponent-73d6e646.js";import"./utils-78dc3aa5.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-8720a92d.js";import"./LoadingButton-5b331dfb.js";import"./faCircleArrowRight-2a86424a.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-6af4d5b9.js";import"./index-338918c6.js";import"./Badge-41bb91c2.js";import"./Checkbox-e24b272d.js";import"./utils-3d35716f.js";import"./createSvgIcon-ab70d8ae.js";import"./Chip-e700d4e6.js";import"./FormControl-e8c4f774.js";import"./isMuiElement-9a8390c4.js";import"./InputAdornment-4738448d.js";import"./Typography-9728a9c9.js";import"./extendSxProp-fa3ab054.js";import"./FormHelperText-4ba98590.js";import"./Link-444e0d62.js";import"./index-9681c8ff.js";import"./Box-a5c2ee7f.js";import"./FormControlLabel-ecc014e3.js";import"./FormLabel-513408a3.js";import"./OutlinedInput-db8225ea.js";import"./ownerWindow-698471fc.js";import"./GlobalStyles-4d8fa0fc.js";import"./Paper-582e0bbf.js";import"./index-e2863e8a.js";import"./Breadcrumbs-f315cc8c.js";import"./react-is.production.min-a192e302.js";import"./TextField-a57d634f.js";import"./Menu-5ec177f1.js";import"./createChainedFunction-0bab83cf.js";import"./Divider-81cba528.js";import"./dividerClasses-c83f3358.js";import"./visuallyHidden-14c3de6e.js";import"./index-1fc0ca9a.js";import"./Close-82c4c884.js";import"./MenuItem-3c0592b4.js";import"./styled-f808758a.js";import"./KeyboardArrowRight-97bd477f.js";import"./LastPage-379dc1a2.js";function n(o){const i=Object.assign({h1:"h1",p:"p",em:"em"},a(),o.components);return e(l,{children:[r(d,{title:"Layouts/Sidebar/MDX"}),`
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
`})]})}function f(o={}){const{wrapper:i}=Object.assign({},a(),o.components);return i?r(i,{...o,children:r(n,{...o})}):n(o)}const G=()=>{throw new Error("Docs-only story")};G.parameters={docsOnly:!0};const m={title:"Layouts/Sidebar/MDX",tags:["stories-mdx"],includeStories:["__page"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:f};const Yr=["__page"];export{Yr as __namedExportsOrder,G as __page,m as default};
//# sourceMappingURL=SidebarLayout.stories-dea2e515.js.map
