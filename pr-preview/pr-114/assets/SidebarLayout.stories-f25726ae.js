import"./index-570b25c1.js";import{M as d,U as s,b as c}from"./index-33fe3404.js";import"./index-2dd44fd1.js";import"./index-77e680bf.js";import{j as r,a as e,F as l}from"./jsx-runtime-390e5fc8.js";import"./index-849c0b33.js";import"./index-b0fc00fa.js";import"./index-c8528b58.js";import"./index-22e1157c.js";import"./index-494e7e2c.js";import"./index-7898f97c.js";import{T as h}from"./index-521cd455.js";import{H as u,S as x,a as g,T as b,D as S}from"./DataGridSection-c8548969.js";import{C as p}from"./Container-f3fcb1ef.js";import{G as t}from"./Grid-0aa1fe5b.js";import{u as a}from"./index-da4379a2.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-c30abf6a.js";import"../sb-preview/runtime.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./index-8a077077.js";import"./index-f8236e9a.js";import"./index-356e4a49.js";import"./Button-4ab2863e.js";import"./clsx.m-fb33c42b.js";import"./createTheme-4dc6b23f.js";import"./styled-fc2b35f5.js";import"./useThemeProps-5f33a28c.js";import"./generateUtilityClasses-8a827d83.js";import"./ButtonBase-654f8a82.js";import"./emotion-react.browser.esm-325397be.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-528bd356.js";import"./useTheme-117bd4f5.js";import"./ownerDocument-613eb639.js";import"./useSlotProps-ff3a8657.js";import"./isHostComponent-73d6e646.js";import"./utils-c4e5670c.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-5b7e7002.js";import"./LoadingButton-7e27a20e.js";import"./faCircleArrowRight-2a86424a.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-102d705b.js";import"./index-338918c6.js";import"./Badge-6e9c04ae.js";import"./Checkbox-44dca6fb.js";import"./utils-3d35716f.js";import"./createSvgIcon-fa525e7b.js";import"./Chip-f644a380.js";import"./Link-0bbaffab.js";import"./Typography-bf8f4457.js";import"./extendSxProp-fa3ab054.js";import"./FormControl-c9e553ad.js";import"./isMuiElement-9a8390c4.js";import"./InputAdornment-468d660b.js";import"./FormHelperText-b3427492.js";import"./index-9681c8ff.js";import"./Box-a5c2ee7f.js";import"./FormControlLabel-6cbfc175.js";import"./FormLabel-204f23dc.js";import"./OutlinedInput-193b0208.js";import"./ownerWindow-698471fc.js";import"./GlobalStyles-7484fee1.js";import"./Paper-c73104d0.js";import"./index-faf5dda6.js";import"./LocalizationProvider-98566918.js";import"./Breadcrumbs-d5cfb1b0.js";import"./react-is.production.min-a192e302.js";import"./TextField-bb5a1441.js";import"./Menu-6d720c17.js";import"./Modal-dfa5517d.js";import"./createChainedFunction-0bab83cf.js";import"./Divider-dfc5ac1a.js";import"./dividerClasses-a7bdfea3.js";import"./visuallyHidden-14c3de6e.js";import"./index-1fc0ca9a.js";import"./Close-2b6f6dcb.js";import"./MenuItem-3539b546.js";import"./styled-42e4472b.js";import"./KeyboardArrowRight-acbacc23.js";import"./LastPage-d4d7a7f0.js";function n(o){const i=Object.assign({h1:"h1",p:"p",em:"em"},a(),o.components);return e(l,{children:[r(d,{title:"Layouts/Sidebar/MDX"}),`
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
`})]})}function f(o={}){const{wrapper:i}=Object.assign({},a(),o.components);return i?r(i,{...o,children:r(n,{...o})}):n(o)}const G=()=>{throw new Error("Docs-only story")};G.parameters={docsOnly:!0};const m={title:"Layouts/Sidebar/MDX",tags:["stories-mdx"],includeStories:["__page"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:f};const ri=["__page"];export{ri as __namedExportsOrder,G as __page,m as default};
//# sourceMappingURL=SidebarLayout.stories-f25726ae.js.map
