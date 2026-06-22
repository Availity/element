import{r as s,j as e}from"./iframe-BcpGFM79.js";import{B as C}from"./Button-DgpwJSBN.js";import{U as h,b}from"./Common-IWC_xwUh.js";import{H as f}from"./Form-BSB-tu1Z.js";import{A as M}from"./Navigation-CE3d8dtq.js";import{a as m,M as t}from"./Menu-DqMVmefC.js";import"./preload-helper-Dab_6GC_.js";import"./Button-CNBYq3K8.js";import"./styled-YELB7PbO.js";import"./memoTheme-CUR-_UQu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-DuPW9E1K.js";import"./useTimeout-D7cMLa2k.js";import"./TransitionGroupContext-DMVjCYVP.js";import"./useForkRef-BE9Mh8bk.js";import"./useEventCallback-B998UMHo.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B0VZoizd.js";import"./faMagnifyingGlass-DEVYYJwr.js";import"./FaSvgIcon-CT_rBCtN.js";import"./SvgIcon-DwHLgNU7.js";import"./faCircleArrowRight-C4kufxUN.js";import"./SelectFocusSourceContext-BgAF1XhB.js";import"./useSlot-COYLd7Pd.js";import"./mergeSlotProps-Y-QEFSGT.js";import"./useSlotProps-wCHKs8ch.js";import"./Popover-C-vNPShq.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Grow-DgKR5Z9h.js";import"./useTheme-DjrtHLeH.js";import"./utils-CX-dufza.js";import"./getReactElementRef-ksE6JIsb.js";import"./mergeSlotProps-0PeTl37o.js";import"./debounce-Be36O1Ab.js";import"./Modal-ORZGbsIm.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-D0YnE6km.js";import"./contains-DSD8CO72.js";import"./Backdrop-Kq3hx2RN.js";import"./Fade-CdC4gkg9.js";import"./Paper-DJSKHSTy.js";import"./List-B4tdnm47.js";import"./MenuItem-CAGa9_PZ.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";const Ce={title:"Components/Menu/Menu",component:m,tags:["autodocs"]},i={render:({open:n,...c})=>{const l=s.useRef(null),[d,r]=s.useState(!1);s.useEffect(()=>{r(n)},[n]);const p=()=>{r(u=>!u)},o=()=>{r(!1)};return e.jsxs("div",{children:[e.jsx(C,{id:"basic-button","aria-controls":n?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,onClick:p,ref:l,children:"Dashboard"}),e.jsxs(m,{id:"basic-menu",anchorEl:l.current,open:d,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},...c,children:[e.jsx(t,{onClick:o,children:"Profile"}),e.jsx(t,{onClick:o,selected:!0,children:"My account"}),e.jsx(t,{onClick:o,disabled:!0,children:"Help"}),e.jsx(t,{onClick:o,children:"Logout"})]})]})}},a={render:({open:n,...c})=>{const l=s.useRef(null),[d,r]=s.useState(!1);s.useEffect(()=>{r(n)},[n]);const p=()=>{r(u=>!u)},o=()=>{r(!1)};return e.jsxs("div",{children:[e.jsx(C,{id:"basic-button","aria-controls":n?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,onClick:p,ref:l,children:"Dashboard"}),e.jsxs(m,{id:"basic-menu",anchorEl:l.current,open:d,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},...c,children:[e.jsxs(t,{onClick:o,children:[e.jsx(h,{}),"Profile"]}),e.jsxs(t,{onClick:o,selected:!0,children:[e.jsx(b,{}),"My account"]}),e.jsxs(t,{onClick:o,disabled:!0,children:[e.jsx(f,{}),"Help"]}),e.jsxs(t,{onClick:o,children:[e.jsx(M,{}),"Logout"]})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
