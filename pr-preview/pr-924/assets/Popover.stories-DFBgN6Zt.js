import{j as o,r as m}from"./iframe-DHkqGgbi.js";import{T as n}from"./Typography-BunlOy3h.js";import{P as p}from"./Popover-COy_ae8f.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-i96SYvKe.js";import"./memoTheme-vxEZSkJ8.js";import"./styled-BFLY3dn7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Popover-B_wJwpIg.js";import"./useSlot-CAeYipRU.js";import"./mergeSlotProps-Dp8H4ez1.js";import"./useForkRef-B4h6zx_x.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Grow-CwxupgJl.js";import"./useTheme-DTNKpojL.js";import"./utils-BQBkKAg6.js";import"./TransitionGroupContext-3E4Xv_Lx.js";import"./useTimeout-Bjfnw5AG.js";import"./getReactElementRef-BRoKhHqU.js";import"./mergeSlotProps-BNZZW_n2.js";import"./debounce-Be36O1Ab.js";import"./Modal-BHwxEFT_.js";import"./useEventCallback-LtXdtY4h.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CtpwjVP0.js";import"./contains-DSD8CO72.js";import"./Backdrop-D3ggRYPY.js";import"./Fade-CqjyPa8q.js";import"./Paper-Cer6O457.js";const J={title:"Components/Popover/Popover",component:p,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:100}}}},r={render:e=>o.jsx("div",{children:o.jsx(p,{...e})}),args:{children:o.jsx(n,{children:"This text is a child of Popover",sx:{p:1}}),open:!0}},t={render:()=>{const[e,s]=m.useState(null),l=c=>{s(c.currentTarget)},i=()=>{s(null)},a=!!e;return o.jsxs(o.Fragment,{children:[o.jsx(n,{"aria-owns":a?"mouse-over-popover":void 0,"aria-haspopup":"true",children:"Hover Me",onMouseEnter:l,onMouseLeave:i}),o.jsx(p,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:o.jsx(n,{children:"This text is a child of Popover",sx:{p:1}}),disableRestoreFocus:!0,id:"mouse-over-popover",onClose:i,open:a,sx:{pointerEvents:"none"},transformOrigin:{vertical:"top",horizontal:"left"}})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: (args: PopoverProps) => {
    return <div>
        <Popover {...args} />
      </div>;
  },
  args: {
    children: <Typography children="This text is a child of Popover" sx={{
      p: 1
    }} />,
    open: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return <>
        <Typography aria-owns={open ? 'mouse-over-popover' : undefined} aria-haspopup="true" children="Hover Me" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose} />
        <Popover anchorEl={anchorEl} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }} children={<Typography children="This text is a child of Popover" sx={{
        p: 1
      }} />} disableRestoreFocus id="mouse-over-popover" onClose={handlePopoverClose} open={open} sx={{
        pointerEvents: 'none'
      }} transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }} />
      </>;
  }
}`,...t.parameters?.docs?.source}}};const K=["_Popover","_PopoverWithTarget"];export{r as _Popover,t as _PopoverWithTarget,K as __namedExportsOrder,J as default};
