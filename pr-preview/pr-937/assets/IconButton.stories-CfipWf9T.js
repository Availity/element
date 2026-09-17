import{r as z,j as e}from"./iframe-CrDI7sKE.js";import{G as n}from"./index-BtTxkIqf.js";import{d as t}from"./index-B75hp5XN.js";import{I as y}from"./IconButton-COXIliVf.js";import{T as j}from"./Tooltip-BYMj-RjT.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-BKdDafZT.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Grid-B7k0uIkV.js";import"./useTheme-e92JqNOn.js";import"./isMuiElement-CplrA1Xb.js";import"./styled-B5mLmA23.js";import"./styled-CqKFH6eA.js";import"./Stack-BQFWbwCa.js";import"./Container-QJP-imy5.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Db1uzRw5.js";import"./memoTheme-1eSCZRav.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Lw6uESYo.js";import"./useTimeout-B0l-dQbr.js";import"./TransitionGroupContext-Bo9v56k3.js";import"./useForkRef-BfO6-t9P.js";import"./useEventCallback-D4QkonYW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DKP2WMPH.js";import"./useSlot--sris71t.js";import"./mergeSlotProps-C73UPCQk.js";import"./useControlled-C0OF1VAF.js";import"./getReactElementRef-d6gO3Pyv.js";import"./Portal-DJpfMgk6.js";import"./utils-BWKdc28P.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cihilg2w.js";const g={borderRadius:".25rem",border:1},i=z.forwardRef((s,m)=>{const{title:d,variant:p="text",sx:h,size:x="medium",disabled:c,...f}=s,I={...h,...p==="outlined"&&g},u=e.jsx(y,{"aria-label":d,sx:{...I},disabled:c,...f,ref:m,size:x});return e.jsx(j,{title:d,children:c?e.jsx("span",{children:u}):u})});try{i.displayName="IconButton",i.__docgenInfo={description:"",displayName:"IconButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<IconButtonClasses> & Partial<ClassNameMap<never>>) | undefined"}},children:{defaultValue:null,description:`The icon to display.
The content of the component.`,name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:{value:"'secondary'"},description:"The color of the component",name:"color",required:!1,type:{name:'"primary" | "secondary" | undefined'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme> | undefined"}},title:{defaultValue:null,description:"Text for tooltip and aria-label",name:"title",required:!1,type:{name:"string"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number | undefined"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | undefined"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions> | undefined"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:'"small" | "medium" | undefined'}},loading:{defaultValue:{value:"null"},description:"If `true`, the loading indicator is visible and the button is disabled.\nIf `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).",name:"loading",required:!1,type:{name:"boolean | null | undefined"}},variant:{defaultValue:{value:"'text'"},description:"The variant to use",name:"variant",required:!1,type:{name:'"text" | "outlined" | undefined'}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string | undefined"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | undefined"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any> | undefined"}},edge:{defaultValue:{value:"false"},description:`If given, uses a negative margin to counteract the padding on one
side (this is often helpful for aligning the left or right
side of the icon with content above or below, without ruining the border
size and shape).`,name:"edge",required:!1,type:{name:'false | "end" | "start" | undefined'}},loadingIndicator:{defaultValue:{value:'<CircularProgress color="inherit" size={16} />'},description:'Element placed before the children if the button is in loading state.\nThe node should contain an element with `role="progressbar"` with an accessible name.\nBy default, it renders a `CircularProgress` that is labeled by the button itself.',name:"loadingIndicator",required:!1,type:{name:"ReactNode"}}}}}catch{}const re={title:"Components/Button/IconButton",component:i,tags:["autodocs"],args:{title:"title text"},argTypes:{size:{table:{disable:!0}}}},o={render:({...s})=>e.jsx(i,{...s,children:e.jsx(t,{})})},a={render:()=>e.jsxs(n,{container:!0,spacing:1,children:[e.jsx(n,{size:{xs:3},children:"Text"}),e.jsx(n,{size:{xs:9},children:e.jsx(i,{title:"search",variant:"text",children:e.jsx(t,{})})}),e.jsx(n,{size:{xs:3},children:"Outlined"}),e.jsx(n,{size:{xs:9},children:e.jsx(i,{title:"search",variant:"outlined",children:e.jsx(t,{})})})]})},l={render:()=>e.jsxs(n,{container:!0,spacing:1,children:[e.jsx(n,{size:{xs:2},children:"Primary"}),e.jsx(n,{size:{xs:2},children:e.jsx(i,{title:"search",variant:"text",color:"primary",children:e.jsx(t,{})})}),e.jsx(n,{size:{xs:8},children:e.jsx(i,{title:"search",variant:"outlined",color:"primary",children:e.jsx(t,{})})}),e.jsx(n,{size:{xs:2},children:"Secondary"}),e.jsx(n,{size:{xs:2},children:e.jsx(i,{title:"search",variant:"text",color:"secondary",children:e.jsx(t,{})})}),e.jsx(n,{size:{xs:8},children:e.jsx(i,{title:"search",variant:"outlined",color:"secondary",children:e.jsx(t,{})})})]})},r={render:()=>e.jsxs(n,{container:!0,spacing:1,children:[e.jsx(n,{size:{xs:2},children:"xsmall icon"}),e.jsx(n,{size:{xs:2},children:e.jsx(i,{title:"search",children:e.jsx(t,{fontSize:"xsmall"})})}),e.jsx(n,{size:{xs:8},children:e.jsx(i,{title:"search",variant:"outlined",children:e.jsx(t,{fontSize:"xsmall"})})}),e.jsx(n,{size:{xs:2},children:"small icon"}),e.jsx(n,{size:{xs:2},children:e.jsx(i,{title:"search",children:e.jsx(t,{fontSize:"small"})})}),e.jsx(n,{size:{xs:8},children:e.jsx(i,{title:"search",variant:"outlined",children:e.jsx(t,{fontSize:"small"})})}),e.jsx(n,{size:{xs:2},children:"medium icon"}),e.jsx(n,{size:{xs:2},children:e.jsx(i,{title:"search",children:e.jsx(t,{fontSize:"medium"})})}),e.jsx(n,{size:{xs:8},children:e.jsx(i,{title:"search",variant:"outlined",children:e.jsx(t,{fontSize:"medium"})})}),e.jsx(n,{size:{xs:2},children:"large icon"}),e.jsx(n,{size:{xs:2},children:e.jsx(i,{title:"search",children:e.jsx(t,{fontSize:"large"})})}),e.jsx(n,{size:{xs:8},children:e.jsx(i,{title:"search",variant:"outlined",children:e.jsx(t,{fontSize:"large"})})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ({
    ...args
  }: IconButtonProps) => <IconButton {...args}>
      <SearchIcon />
    </IconButton>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid size={{
      xs: 3
    }}>Text</Grid>
      <Grid size={{
      xs: 9
    }}>
        <IconButton title="search" variant="text">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 3
    }}>Outlined</Grid>
      <Grid size={{
      xs: 9
    }}>
        <IconButton title="search" variant="outlined">
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid size={{
      xs: 2
    }}>Primary</Grid>
      <Grid size={{
      xs: 2
    }}>
        <IconButton title="search" variant="text" color="primary">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 8
    }}>
        <IconButton title="search" variant="outlined" color="primary">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 2
    }}>Secondary</Grid>
      <Grid size={{
      xs: 2
    }}>
        <IconButton title="search" variant="text" color="secondary">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 8
    }}>
        <IconButton title="search" variant="outlined" color="secondary">
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid size={{
      xs: 2
    }}>xsmall icon</Grid>
      <Grid size={{
      xs: 2
    }}>
        <IconButton title="search">
          <SearchIcon fontSize="xsmall" />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 8
    }}>
        <IconButton title="search" variant="outlined">
          <SearchIcon fontSize="xsmall" />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 2
    }}>small icon</Grid>
      <Grid size={{
      xs: 2
    }}>
        <IconButton title="search">
          <SearchIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 8
    }}>
        <IconButton title="search" variant="outlined">
          <SearchIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 2
    }}>medium icon</Grid>
      <Grid size={{
      xs: 2
    }}>
        <IconButton title="search">
          <SearchIcon fontSize="medium" />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 8
    }}>
        <IconButton title="search" variant="outlined">
          <SearchIcon fontSize="medium" />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 2
    }}>large icon</Grid>
      <Grid size={{
      xs: 2
    }}>
        <IconButton title="search">
          <SearchIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid size={{
      xs: 8
    }}>
        <IconButton title="search" variant="outlined">
          <SearchIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
}`,...r.parameters?.docs?.source},description:{story:"For additional sizes, specify `fontSize` on the child `Icon`",...r.parameters?.docs?.description}}};const se=["_IconButton","_Variants","_Colors","_Sizes"];export{l as _Colors,o as _IconButton,r as _Sizes,a as _Variants,se as __namedExportsOrder,re as default};
