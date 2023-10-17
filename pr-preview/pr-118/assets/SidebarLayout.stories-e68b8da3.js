import"./index-570b25c1.js";import{M as d,U as s,b as c}from"./index-3128c348.js";import"./index-bc19b086.js";import"./index-25d48f71.js";import{j as r,a as e,F as l}from"./jsx-runtime-390e5fc8.js";import"./index-c0b36b1a.js";import"./index-4a0094be.js";import"./index-4600b9fe.js";import"./index-8224ca1a.js";import"./index-7a70df2f.js";import{T as h}from"./index-1ec72176.js";import{H as u,S as x,a as g,T as b,D as S}from"./DataGridSection-cec69d3f.js";import{C as p}from"./Container-92fc112b.js";import{G as t}from"./Grid-977833ec.js";import{u as a}from"./index-da4379a2.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-0c0fd1ca.js";import"../sb-preview/runtime.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./index-8a077077.js";import"./index-f8236e9a.js";import"./index-356e4a49.js";import"./Button-48a9b380.js";import"./createTheme-b02e766d.js";import"./clsx-43049957.js";import"./styled-69a32198.js";import"./useThemeProps-ac7867ed.js";import"./generateUtilityClasses-b06d554b.js";import"./ButtonBase-78eecb53.js";import"./emotion-react.browser.esm-dc887828.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-9ef5363d.js";import"./useTheme-a234fe30.js";import"./objectWithoutPropertiesLoose-830c72af.js";import"./ownerDocument-613eb639.js";import"./useSlotProps-c5009eb1.js";import"./utils-a53b28cc.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-329b8fa1.js";import"./LoadingButton-8f26fe8a.js";import"./extends-90dea224.js";import"./faCircleArrowRight-45fe0977.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-667e6608.js";import"./index-80bbe68e.js";import"./Badge-040bd2ec.js";import"./Checkbox-91df2012.js";import"./utils-3d35716f.js";import"./createSvgIcon-5dca4d92.js";import"./Chip-00f560d1.js";import"./FormLabel-10b42ad0.js";import"./isMuiElement-6907f060.js";import"./InputAdornment-435dfe4f.js";import"./Typography-72ef0a36.js";import"./extendSxProp-b0ad88fc.js";import"./FormHelperText-ef15573c.js";import"./Link-2e03a78b.js";import"./index-9681c8ff.js";import"./Box-ce79f7f7.js";import"./FormControlLabel-61164d2c.js";import"./Stack-524d7b5c.js";import"./styled-9972f020.js";import"./OutlinedInput-0f61bb0e.js";import"./ownerWindow-698471fc.js";import"./GlobalStyles-6bf89189.js";import"./Paper-f1647d6d.js";import"./index-c863f970.js";import"./Breadcrumbs-ce38e814.js";import"./react-is.production.min-a192e302.js";import"./TextField-1b2a0c65.js";import"./Menu-ada6f194.js";import"./createChainedFunction-0bab83cf.js";import"./Divider-a67a617b.js";import"./dividerClasses-272b0ff4.js";import"./visuallyHidden-14c3de6e.js";import"./index-1fc0ca9a.js";import"./Close-dfa46add.js";import"./MenuItem-f0d1c848.js";import"./KeyboardArrowRight-71a82ecc.js";import"./LastPage-e2c78f39.js";function n(o){const i=Object.assign({h1:"h1",p:"p",em:"em"},a(),o.components);return e(l,{children:[r(d,{title:"Layouts/Sidebar/MDX"}),`
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
`})]})}function f(o={}){const{wrapper:i}=Object.assign({},a(),o.components);return i?r(i,{...o,children:r(n,{...o})}):n(o)}const G=()=>{throw new Error("Docs-only story")};G.parameters={docsOnly:!0};const m={title:"Layouts/Sidebar/MDX",tags:["stories-mdx"],includeStories:["__page"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:f};const Zr=["__page"];export{Zr as __namedExportsOrder,G as __page,m as default};
//# sourceMappingURL=SidebarLayout.stories-e68b8da3.js.map
