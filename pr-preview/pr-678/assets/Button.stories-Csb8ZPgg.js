import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{G as t,B as V}from"./index-BObrA9Y-.js";import{o as d,p as c}from"./index--IoBtPgS.js";import{r as q}from"./index-DcWiA9TO.js";import{B as _}from"./Button-B22iKlEO.js";import"./Box-BAeL439g.js";import"./createTheme-CKCRSfxM.js";import"./generateUtilityClasses-DyVAdLaw.js";import"./generateUtilityClass-Bqc1qv72.js";import"./useTheme-BUEqHFQV.js";import"./extendSxProp-BKaoT_Qt.js";import"./Grid2-CanCOREk.js";import"./useTheme-ChS1Y5Lw.js";import"./DefaultPropsProvider-CIAoFptl.js";import"./styled-C36SNKZX.js";import"./styled-Dbr85gFc.js";import"./isMuiElement-DAzOCCHH.js";import"./useThemeProps-YZ7_EcgO.js";import"./Stack-C5Zrd0Q6.js";import"./Container-nY1JXDIQ.js";import"./faCircleArrowRight-fEvkKBkH.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./SvgIcon-BS-p1eoC.js";import"./memoTheme-DvanvhnP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-DszduLV4.js";import"./ButtonBase-DQZrtVrL.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./emotion-react.browser.esm-rTq5AsO6.js";import"./useForkRef-BVrIj09m.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BHFEuwTi.js";const T={disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},r=q.forwardRef((n,C)=>e.jsx(_,{...n,...T,ref:C}));try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ButtonClasses> & Partial<ClassNameMap<never>>"}},color:{defaultValue:{value:"secondary"},description:"The color of the component.",name:"color",required:!1,type:{name:'"primary" | "secondary" | "tertiary"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},loading:{defaultValue:{value:"null"},description:"If `true`, the loading indicator is visible and the button is disabled.\nIf `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).",name:"loading",required:!1,type:{name:"boolean"}},loadingIndicator:{defaultValue:{value:'<CircularProgress color="inherit" size={16} />'},description:'Element placed before the children if the button is in loading state.\nThe node should contain an element with `role="progressbar"` with an accessible name.\nBy default, it renders a `CircularProgress` that is labeled by the button itself.',name:"loadingIndicator",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"large"},description:"The size of the component.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},loadingPosition:{defaultValue:{value:"'center'"},description:"The loading indicator can be positioned on the start, end, or the center of the button.",name:"loadingPosition",required:!1,type:{name:'"center" | "end" | "start"'}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const xe={title:"Components/Button/Button",component:r,tags:["autodocs"]},i={render:({...n})=>e.jsx(r,{...n,children:"Button"}),args:{color:"primary",size:"large"}},o={render:()=>e.jsxs(t,{container:!0,spacing:1,children:[e.jsx(t,{size:{xs:12},children:e.jsx(r,{color:"primary",children:"Primary"})}),e.jsx(t,{size:{xs:12},children:e.jsx(r,{color:"secondary",children:"Secondary"})}),e.jsx(t,{size:{xs:12},children:e.jsx(r,{color:"tertiary",children:"Tertiary"})})]})},s={render:()=>e.jsxs(t,{container:!0,spacing:1,children:[e.jsx(t,{size:{xs:12},children:e.jsx(r,{color:"tertiary",size:"small",children:"Small Button"})}),e.jsx(t,{size:{xs:12},children:e.jsx(r,{color:"secondary",size:"medium",children:"Medium Button"})}),e.jsx(t,{size:{xs:12},children:e.jsx(r,{color:"primary",size:"large",children:"Large Button"})})]})},a={render:()=>e.jsxs(t,{container:!0,spacing:1,children:[e.jsx(t,{size:{xs:3},children:e.jsx(r,{color:"primary",size:"large",startIcon:e.jsx(d,{}),children:"Large"})}),e.jsx(t,{size:{xs:3},children:e.jsx(r,{color:"primary",size:"medium",startIcon:e.jsx(d,{}),children:"Medium"})}),e.jsx(t,{size:{xs:3},children:e.jsx(r,{color:"primary",size:"small",startIcon:e.jsx(d,{}),children:"Small"})}),e.jsx(t,{size:{xs:3}}),e.jsx(t,{size:{xs:3},children:e.jsx(r,{color:"primary",size:"large",endIcon:e.jsx(c,{}),children:"Large"})}),e.jsx(t,{size:{xs:3},children:e.jsx(r,{color:"primary",size:"medium",endIcon:e.jsx(c,{}),children:"Medium"})}),e.jsx(t,{size:{xs:3},children:e.jsx(r,{color:"primary",size:"small",endIcon:e.jsx(c,{}),children:"Small"})}),e.jsx(t,{size:{xs:3}})]})},l={render:()=>{const n={mr:1,mb:1};return e.jsxs(V,{sx:{display:"flex",flexWrap:"wrap",mr:-1,mb:-1},children:[e.jsx(r,{color:"tertiary",sx:n,children:"Button 1"}),e.jsx(r,{color:"tertiary",sx:n,children:"Button 2"}),e.jsx(r,{color:"tertiary",sx:n,children:"Button 3"}),e.jsx(r,{color:"tertiary",sx:n,children:"Button 4"})]})}};var u,p,m;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    ...args
  }: ButtonProps) => <Button {...args}>Button</Button>,
  args: {
    color: 'primary',
    size: 'large'
  }
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,f,x,y,B;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid size={{
      xs: 12
    }}>
        <Button color="primary">Primary</Button>
      </Grid>
      <Grid size={{
      xs: 12
    }}>
        <Button color="secondary">Secondary</Button>
      </Grid>
      <Grid size={{
      xs: 12
    }}>
        <Button color="tertiary">Tertiary</Button>
      </Grid>
    </Grid>
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"Availity approved button colors and variations",...(B=(y=o.parameters)==null?void 0:y.docs)==null?void 0:B.description}}};var g,b,z;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid size={{
      xs: 12
    }}>
        <Button color="tertiary" size="small">
          Small Button
        </Button>
      </Grid>
      <Grid size={{
      xs: 12
    }}>
        <Button color="secondary" size="medium">
          Medium Button
        </Button>
      </Grid>
      <Grid size={{
      xs: 12
    }}>
        <Button color="primary" size="large">
          Large Button
        </Button>
      </Grid>
    </Grid>
}`,...(z=(b=s.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var j,I,G;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid size={{
      xs: 3
    }}>
        <Button color="primary" size="large" startIcon={<ArrowCircleLeftIcon />}>
          Large
        </Button>
      </Grid>
      <Grid size={{
      xs: 3
    }}>
        <Button color="primary" size="medium" startIcon={<ArrowCircleLeftIcon />}>
          Medium
        </Button>
      </Grid>
      <Grid size={{
      xs: 3
    }}>
        <Button color="primary" size="small" startIcon={<ArrowCircleLeftIcon />}>
          Small
        </Button>
      </Grid>
      <Grid size={{
      xs: 3
    }} />
      <Grid size={{
      xs: 3
    }}>
        <Button color="primary" size="large" endIcon={<ArrowCircleRightIcon />}>
          Large
        </Button>
      </Grid>
      <Grid size={{
      xs: 3
    }}>
        <Button color="primary" size="medium" endIcon={<ArrowCircleRightIcon />}>
          Medium
        </Button>
      </Grid>
      <Grid size={{
      xs: 3
    }}>
        <Button color="primary" size="small" endIcon={<ArrowCircleRightIcon />}>
          Small
        </Button>
      </Grid>
      <Grid size={{
      xs: 3
    }} />
    </Grid>
}`,...(G=(I=a.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var w,S,v;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const groupedButtonStyles = {
      mr: 1,
      mb: 1
    };
    return <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      mr: -1,
      mb: -1
    }}>
        <Button color="tertiary" sx={groupedButtonStyles}>
          Button 1
        </Button>
        <Button color="tertiary" sx={groupedButtonStyles}>
          Button 2
        </Button>
        <Button color="tertiary" sx={groupedButtonStyles}>
          Button 3
        </Button>
        <Button color="tertiary" sx={groupedButtonStyles}>
          Button 4
        </Button>
      </Box>;
  }
}`,...(v=(S=l.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const ye=["_Button","_Colors","_ButtonSizes","_ButtonWithIcon","_Groups"];export{i as _Button,s as _ButtonSizes,a as _ButtonWithIcon,o as _Colors,l as _Groups,ye as __namedExportsOrder,xe as default};
