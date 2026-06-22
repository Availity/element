import{j as o,r as m}from"./iframe-BcpGFM79.js";import{T as n}from"./Typography-giEvkJi7.js";import{P as p}from"./Popover-41EoUMhM.js";import"./preload-helper-Dab_6GC_.js";import"./Typography-D2_Tvhdq.js";import"./memoTheme-CUR-_UQu.js";import"./styled-YELB7PbO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Popover-C-vNPShq.js";import"./useSlot-COYLd7Pd.js";import"./mergeSlotProps-Y-QEFSGT.js";import"./useForkRef-BE9Mh8bk.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Grow-DgKR5Z9h.js";import"./useTheme-DjrtHLeH.js";import"./utils-CX-dufza.js";import"./TransitionGroupContext-DMVjCYVP.js";import"./useTimeout-D7cMLa2k.js";import"./getReactElementRef-ksE6JIsb.js";import"./mergeSlotProps-0PeTl37o.js";import"./debounce-Be36O1Ab.js";import"./Modal-ORZGbsIm.js";import"./useEventCallback-B998UMHo.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-D0YnE6km.js";import"./contains-DSD8CO72.js";import"./Backdrop-Kq3hx2RN.js";import"./Fade-CdC4gkg9.js";import"./Paper-DJSKHSTy.js";const J={title:"Components/Popover/Popover",component:p,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:100}}}},r={render:e=>o.jsx("div",{children:o.jsx(p,{...e})}),args:{children:o.jsx(n,{children:"This text is a child of Popover",sx:{p:1}}),open:!0}},t={render:()=>{const[e,s]=m.useState(null),l=c=>{s(c.currentTarget)},i=()=>{s(null)},a=!!e;return o.jsxs(o.Fragment,{children:[o.jsx(n,{"aria-owns":a?"mouse-over-popover":void 0,"aria-haspopup":"true",children:"Hover Me",onMouseEnter:l,onMouseLeave:i}),o.jsx(p,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:o.jsx(n,{children:"This text is a child of Popover",sx:{p:1}}),disableRestoreFocus:!0,id:"mouse-over-popover",onClose:i,open:a,sx:{pointerEvents:"none"},transformOrigin:{vertical:"top",horizontal:"left"}})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
