import{j as o,r as m}from"./iframe-D9VxGUXm.js";import{T as n}from"./Typography-D9Pc6OpE.js";import{P as p}from"./Popover-yKpH4xon.js";import"./preload-helper-Dab_6GC_.js";import"./Typography-mI_XzOBj.js";import"./memoTheme-CUWoCynM.js";import"./styled-D8Xb_hHx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Popover-R-MCXb6u.js";import"./useSlot-BAM4jdU8.js";import"./mergeSlotProps-CLdLLAsF.js";import"./useForkRef-5-P7CGIn.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Grow-o6-ommK8.js";import"./useTheme-B41ItSj5.js";import"./utils-Bcz57uZ2.js";import"./TransitionGroupContext-BLR2oRR2.js";import"./useTimeout-CCeZqBN_.js";import"./getReactElementRef-Dqr_-LzO.js";import"./mergeSlotProps-JAhzVB8J.js";import"./debounce-Be36O1Ab.js";import"./Modal-B8lqQyLL.js";import"./useEventCallback-BrENIvCl.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CSfdL5WB.js";import"./contains-DSD8CO72.js";import"./Backdrop-DWoUx2Mm.js";import"./Fade-4pWY_yaW.js";import"./Paper-oCFHvNnf.js";const J={title:"Components/Popover/Popover",component:p,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:100}}}},r={render:e=>o.jsx("div",{children:o.jsx(p,{...e})}),args:{children:o.jsx(n,{children:"This text is a child of Popover",sx:{p:1}}),open:!0}},t={render:()=>{const[e,s]=m.useState(null),l=c=>{s(c.currentTarget)},i=()=>{s(null)},a=!!e;return o.jsxs(o.Fragment,{children:[o.jsx(n,{"aria-owns":a?"mouse-over-popover":void 0,"aria-haspopup":"true",children:"Hover Me",onMouseEnter:l,onMouseLeave:i}),o.jsx(p,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:o.jsx(n,{children:"This text is a child of Popover",sx:{p:1}}),disableRestoreFocus:!0,id:"mouse-over-popover",onClose:i,open:a,sx:{pointerEvents:"none"},transformOrigin:{vertical:"top",horizontal:"left"}})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
