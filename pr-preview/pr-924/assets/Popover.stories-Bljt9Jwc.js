import{j as o,r as m}from"./iframe-BdOkmXSO.js";import{T as n}from"./Typography-BP7E3Z2h.js";import{P as p}from"./Popover-DFYYKuzM.js";import"./preload-helper-Dab_6GC_.js";import"./Typography-Ba-r-irp.js";import"./memoTheme-Dp1NrYg6.js";import"./styled-ntycrLPJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Popover-Dmejw1yb.js";import"./useSlot-Do_-kGcn.js";import"./mergeSlotProps-Bpe1uZ1i.js";import"./useForkRef-B6GvvQRB.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Grow-zcR73JmX.js";import"./useTheme-DpzwBSOw.js";import"./utils-BBZ_5XBR.js";import"./TransitionGroupContext-Ce7OQG8A.js";import"./useTimeout-yhleNqH_.js";import"./getReactElementRef-CAZnW1NE.js";import"./mergeSlotProps-CGT3lxwg.js";import"./debounce-Be36O1Ab.js";import"./Modal-C2ZApFn6.js";import"./useEventCallback-Ci1dFtlM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Df3mT0t7.js";import"./contains-DSD8CO72.js";import"./Backdrop-BHtRMzsl.js";import"./Fade-BJ4yz3if.js";import"./Paper-X002pFu5.js";const J={title:"Components/Popover/Popover",component:p,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:100}}}},r={render:e=>o.jsx("div",{children:o.jsx(p,{...e})}),args:{children:o.jsx(n,{children:"This text is a child of Popover",sx:{p:1}}),open:!0}},t={render:()=>{const[e,s]=m.useState(null),l=c=>{s(c.currentTarget)},i=()=>{s(null)},a=!!e;return o.jsxs(o.Fragment,{children:[o.jsx(n,{"aria-owns":a?"mouse-over-popover":void 0,"aria-haspopup":"true",children:"Hover Me",onMouseEnter:l,onMouseLeave:i}),o.jsx(p,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:o.jsx(n,{children:"This text is a child of Popover",sx:{p:1}}),disableRestoreFocus:!0,id:"mouse-over-popover",onClose:i,open:a,sx:{pointerEvents:"none"},transformOrigin:{vertical:"top",horizontal:"left"}})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
