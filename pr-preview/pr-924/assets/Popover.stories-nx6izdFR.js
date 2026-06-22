import{j as o,r as m}from"./iframe-B3KH45W1.js";import{T as n}from"./Typography-k07kEcGa.js";import{P as p}from"./Popover-BkkE0-xm.js";import"./preload-helper-Dab_6GC_.js";import"./Typography-D3qZBRmm.js";import"./memoTheme-DWwRHojM.js";import"./styled-B89GBRvi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Popover-3fDVAJax.js";import"./useSlot-DGd0VXU6.js";import"./mergeSlotProps--7hXBDn0.js";import"./useForkRef-C1kAtY37.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Grow-iiG6wjq6.js";import"./useTheme-Ds4SDsFm.js";import"./utils-BQeXEgW_.js";import"./TransitionGroupContext-CAm2K2SY.js";import"./useTimeout-BS1Rp5sI.js";import"./getReactElementRef-CBNP7eUh.js";import"./mergeSlotProps-CZPVrohS.js";import"./debounce-Be36O1Ab.js";import"./Modal-CJRztngO.js";import"./useEventCallback-CVbD2IC6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CUL18StY.js";import"./contains-DSD8CO72.js";import"./Backdrop-y0tvSJ2D.js";import"./Fade-DJRP9WcG.js";import"./Paper-BJPkQ8DM.js";const J={title:"Components/Popover/Popover",component:p,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:100}}}},r={render:e=>o.jsx("div",{children:o.jsx(p,{...e})}),args:{children:o.jsx(n,{children:"This text is a child of Popover",sx:{p:1}}),open:!0}},t={render:()=>{const[e,s]=m.useState(null),l=c=>{s(c.currentTarget)},i=()=>{s(null)},a=!!e;return o.jsxs(o.Fragment,{children:[o.jsx(n,{"aria-owns":a?"mouse-over-popover":void 0,"aria-haspopup":"true",children:"Hover Me",onMouseEnter:l,onMouseLeave:i}),o.jsx(p,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:o.jsx(n,{children:"This text is a child of Popover",sx:{p:1}}),disableRestoreFocus:!0,id:"mouse-over-popover",onClose:i,open:a,sx:{pointerEvents:"none"},transformOrigin:{vertical:"top",horizontal:"left"}})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
