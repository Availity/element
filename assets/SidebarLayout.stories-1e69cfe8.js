import"./index-570b25c1.js";import{M as d,U as s,b as c}from"./index-01886da2.js";import"./index-5bd1ab51.js";import"./index-dd60701b.js";import{j as r,a as e,F as l}from"./jsx-runtime-390e5fc8.js";import"./index-3661aeb3.js";import"./index-8f828b25.js";import"./index-a03817c7.js";import"./index-5794909b.js";import"./index-2e8b4ae7.js";import"./index-90b88d96.js";import"./index-61052c9b.js";import{T as h}from"./index-c1772088.js";import{H as u,S as x,a as g,T as b,D as S}from"./DataGridSection-f552396a.js";import{C as p}from"./Container-87fd18ac.js";import{G as t}from"./Grid-e557fe35.js";import{u as a}from"./index-da4379a2.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-816c0cc5.js";import"../sb-preview/runtime.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./index-8a077077.js";import"./index-f8236e9a.js";import"./index-356e4a49.js";import"./Button-bf5d864a.js";import"./createTheme-e6b56ddb.js";import"./clsx-8416b751.js";import"./styled-78cd751f.js";import"./useThemeProps-285a8f6c.js";import"./generateUtilityClasses-2915a045.js";import"./ButtonBase-da7ceb67.js";import"./emotion-react.browser.esm-69a15469.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-7c526765.js";import"./useTheme-b3699c65.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./useSlotProps-1710581f.js";import"./utils-1ac07bae.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-e1c52fea.js";import"./LoadingButton-d30fce51.js";import"./extends-90dea224.js";import"./CircularProgress-c55bac56.js";import"./faCircleArrowRight-5066acd3.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-f3e07af8.js";import"./index-86efc5f7.js";import"./Avatar-b0962169.js";import"./createSvgIcon-c7fbf131.js";import"./Link-6b0912e7.js";import"./Typography-125528da.js";import"./extendSxProp-4d42c058.js";import"./Badge-27ccac47.js";import"./Checkbox-961e189d.js";import"./utils-3d35716f.js";import"./TextField-297e2fd6.js";import"./FormLabel-4f2fd2fa.js";import"./isMuiElement-6907f060.js";import"./Select-835f1a5f.js";import"./react-is.production.min-a192e302.js";import"./Menu-51c4cb11.js";import"./Modal-1f126ad0.js";import"./Backdrop-c0ceeda2.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-adaa179d.js";import"./debounce-517eeb3c.js";import"./OutlinedInput-422528d5.js";import"./GlobalStyles-bb3c5388.js";import"./FormHelperText-5982fdaa.js";import"./index-9681c8ff.js";import"./Box-7f261278.js";import"./FormControlLabel-4f099345.js";import"./Stack-385eaa90.js";import"./styled-d8af9a46.js";import"./Divider-bf202c30.js";import"./dividerClasses-17e5b451.js";import"./index-de6e87dd.js";import"./LocalizationProvider-bbd3fee8.js";import"./Breadcrumbs-c3e2f3e9.js";import"./InputAdornment-cfb27f94.js";import"./index-b527af3f.js";import"./Chip-a33b6866.js";import"./visuallyHidden-14c3de6e.js";import"./index-1fc0ca9a.js";import"./Close-d9903b66.js";import"./MenuItem-3c95a4ec.js";import"./KeyboardArrowRight-f1b42dda.js";import"./LastPage-92c52e7e.js";function n(o){const i=Object.assign({h1:"h1",p:"p",em:"em"},a(),o.components);return e(l,{children:[r(d,{title:"Layouts/Sidebar/MDX"}),`
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
`})]})}function f(o={}){const{wrapper:i}=Object.assign({},a(),o.components);return i?r(i,{...o,children:r(n,{...o})}):n(o)}const G=()=>{throw new Error("Docs-only story")};G.parameters={docsOnly:!0};const m={title:"Layouts/Sidebar/MDX",tags:["stories-mdx"],includeStories:["__page"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:f};const di=["__page"];export{di as __namedExportsOrder,G as __page,m as default};
//# sourceMappingURL=SidebarLayout.stories-1e69cfe8.js.map
