import{r as s,j as e}from"./iframe-B3KH45W1.js";import{B as C}from"./Button-BFPH_qAh.js";import{U as h,b}from"./Common-BAorCfPo.js";import{H as f}from"./Form-D1K37nGD.js";import{A as M}from"./Navigation-Cc0klsga.js";import{a as m,M as t}from"./Menu-ZFzMlJ0D.js";import"./preload-helper-Dab_6GC_.js";import"./Button-CpFiF_Ow.js";import"./styled-B89GBRvi.js";import"./memoTheme-DWwRHojM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-DgN9Oijw.js";import"./useTimeout-BS1Rp5sI.js";import"./TransitionGroupContext-CAm2K2SY.js";import"./useForkRef-C1kAtY37.js";import"./useEventCallback-CVbD2IC6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BSNAtS4j.js";import"./faMagnifyingGlass-DEVYYJwr.js";import"./FaSvgIcon-DUC6Q4wv.js";import"./SvgIcon-DDVH-xS0.js";import"./faCircleArrowRight-C4kufxUN.js";import"./SelectFocusSourceContext-BFgvB2zc.js";import"./useSlot-DGd0VXU6.js";import"./mergeSlotProps--7hXBDn0.js";import"./useSlotProps-CXce_cAS.js";import"./Popover-3fDVAJax.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Grow-iiG6wjq6.js";import"./useTheme-Ds4SDsFm.js";import"./utils-BQeXEgW_.js";import"./getReactElementRef-CBNP7eUh.js";import"./mergeSlotProps-CZPVrohS.js";import"./debounce-Be36O1Ab.js";import"./Modal-CJRztngO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CUL18StY.js";import"./contains-DSD8CO72.js";import"./Backdrop-y0tvSJ2D.js";import"./Fade-DJRP9WcG.js";import"./Paper-BJPkQ8DM.js";import"./List-DafW6Lb2.js";import"./MenuItem-BfWTq7kz.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";const Ce={title:"Components/Menu/Menu",component:m,tags:["autodocs"]},i={render:({open:n,...c})=>{const l=s.useRef(null),[d,r]=s.useState(!1);s.useEffect(()=>{r(n)},[n]);const p=()=>{r(u=>!u)},o=()=>{r(!1)};return e.jsxs("div",{children:[e.jsx(C,{id:"basic-button","aria-controls":n?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,onClick:p,ref:l,children:"Dashboard"}),e.jsxs(m,{id:"basic-menu",anchorEl:l.current,open:d,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},...c,children:[e.jsx(t,{onClick:o,children:"Profile"}),e.jsx(t,{onClick:o,selected:!0,children:"My account"}),e.jsx(t,{onClick:o,disabled:!0,children:"Help"}),e.jsx(t,{onClick:o,children:"Logout"})]})]})}},a={render:({open:n,...c})=>{const l=s.useRef(null),[d,r]=s.useState(!1);s.useEffect(()=>{r(n)},[n]);const p=()=>{r(u=>!u)},o=()=>{r(!1)};return e.jsxs("div",{children:[e.jsx(C,{id:"basic-button","aria-controls":n?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,onClick:p,ref:l,children:"Dashboard"}),e.jsxs(m,{id:"basic-menu",anchorEl:l.current,open:d,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},...c,children:[e.jsxs(t,{onClick:o,children:[e.jsx(h,{}),"Profile"]}),e.jsxs(t,{onClick:o,selected:!0,children:[e.jsx(b,{}),"My account"]}),e.jsxs(t,{onClick:o,disabled:!0,children:[e.jsx(f,{}),"Help"]}),e.jsxs(t,{onClick:o,children:[e.jsx(M,{}),"Logout"]})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: ({
    open,
    ...args
  }) => {
    const anchorEl = useRef<HTMLButtonElement>(null);
    const [controlledOpen, setControlledOpen] = useState(false);
    useEffect(() => {
      setControlledOpen(open);
    }, [open]);
    const handleClick = () => {
      setControlledOpen(prev => !prev);
    };
    const handleClose = () => {
      setControlledOpen(false);
    };
    return <div>
        <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} ref={anchorEl}>
          Dashboard
        </Button>
        <Menu id="basic-menu" anchorEl={anchorEl.current} open={controlledOpen} onClose={handleClose} MenuListProps={{
        'aria-labelledby': 'basic-button'
      }} {...args}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose} selected>
            My account
          </MenuItem>
          <MenuItem onClick={handleClose} disabled>
            Help
          </MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: ({
    open,
    ...args
  }) => {
    const anchorEl = useRef<HTMLButtonElement>(null);
    const [controlledOpen, setControlledOpen] = useState(false);
    useEffect(() => {
      setControlledOpen(open);
    }, [open]);
    const handleClick = () => {
      setControlledOpen(prev => !prev);
    };
    const handleClose = () => {
      setControlledOpen(false);
    };
    return <div>
        <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} ref={anchorEl}>
          Dashboard
        </Button>
        <Menu id="basic-menu" anchorEl={anchorEl.current} open={controlledOpen} onClose={handleClose} MenuListProps={{
        'aria-labelledby': 'basic-button'
      }} {...args}>
          <MenuItem onClick={handleClose}>
            <UserIcon />
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose} selected>
            <SettingsIcon />
            My account
          </MenuItem>
          <MenuItem onClick={handleClose} disabled>
            <HelpCircleIcon />
            Help
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ArrowCircleLeftIcon />
            Logout
          </MenuItem>
        </Menu>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const he=["_Menu","_MenuWithIcons"];export{i as _Menu,a as _MenuWithIcons,he as __namedExportsOrder,Ce as default};
