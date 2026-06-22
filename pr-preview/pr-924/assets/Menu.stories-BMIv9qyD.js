import{r as s,j as e}from"./iframe-BdOkmXSO.js";import{B as C}from"./Button-T_obMJ3V.js";import{U as h,b}from"./Common-DofP6EnG.js";import{H as f}from"./Form-Dy8jxpW5.js";import{A as M}from"./Navigation-ldLDovnt.js";import{a as m,M as t}from"./Menu-UjCNKVg4.js";import"./preload-helper-Dab_6GC_.js";import"./Button-NnJ9RF69.js";import"./styled-ntycrLPJ.js";import"./memoTheme-Dp1NrYg6.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-D0mr5YFJ.js";import"./useTimeout-yhleNqH_.js";import"./TransitionGroupContext-Ce7OQG8A.js";import"./useForkRef-B6GvvQRB.js";import"./useEventCallback-Ci1dFtlM.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BtHd2z-U.js";import"./faMagnifyingGlass-DEVYYJwr.js";import"./FaSvgIcon-D_zjT4On.js";import"./SvgIcon-BD13zcFd.js";import"./faCircleArrowRight-C4kufxUN.js";import"./SelectFocusSourceContext-CO0vp2u8.js";import"./useSlot-Do_-kGcn.js";import"./mergeSlotProps-Bpe1uZ1i.js";import"./useSlotProps-0Tuv8-jv.js";import"./Popover-Dmejw1yb.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Grow-zcR73JmX.js";import"./useTheme-DpzwBSOw.js";import"./utils-BBZ_5XBR.js";import"./getReactElementRef-CAZnW1NE.js";import"./mergeSlotProps-CGT3lxwg.js";import"./debounce-Be36O1Ab.js";import"./Modal-C2ZApFn6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Df3mT0t7.js";import"./contains-DSD8CO72.js";import"./Backdrop-BHtRMzsl.js";import"./Fade-BJ4yz3if.js";import"./Paper-X002pFu5.js";import"./List-DHFLMipa.js";import"./MenuItem-CjpUI41B.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";const Ce={title:"Components/Menu/Menu",component:m,tags:["autodocs"]},i={render:({open:n,...c})=>{const l=s.useRef(null),[d,r]=s.useState(!1);s.useEffect(()=>{r(n)},[n]);const p=()=>{r(u=>!u)},o=()=>{r(!1)};return e.jsxs("div",{children:[e.jsx(C,{id:"basic-button","aria-controls":n?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,onClick:p,ref:l,children:"Dashboard"}),e.jsxs(m,{id:"basic-menu",anchorEl:l.current,open:d,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},...c,children:[e.jsx(t,{onClick:o,children:"Profile"}),e.jsx(t,{onClick:o,selected:!0,children:"My account"}),e.jsx(t,{onClick:o,disabled:!0,children:"Help"}),e.jsx(t,{onClick:o,children:"Logout"})]})]})}},a={render:({open:n,...c})=>{const l=s.useRef(null),[d,r]=s.useState(!1);s.useEffect(()=>{r(n)},[n]);const p=()=>{r(u=>!u)},o=()=>{r(!1)};return e.jsxs("div",{children:[e.jsx(C,{id:"basic-button","aria-controls":n?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,onClick:p,ref:l,children:"Dashboard"}),e.jsxs(m,{id:"basic-menu",anchorEl:l.current,open:d,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},...c,children:[e.jsxs(t,{onClick:o,children:[e.jsx(h,{}),"Profile"]}),e.jsxs(t,{onClick:o,selected:!0,children:[e.jsx(b,{}),"My account"]}),e.jsxs(t,{onClick:o,disabled:!0,children:[e.jsx(f,{}),"Help"]}),e.jsxs(t,{onClick:o,children:[e.jsx(M,{}),"Logout"]})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
