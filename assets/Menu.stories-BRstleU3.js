import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r}from"./index-BgYLq7fD.js";import{B as g}from"./index-k9OtkSpc.js";import{U as I,r as V,H as q,A as k}from"./index-CmMPo3bx.js";import{M as P,a as w}from"./Menu-BUIr0rCt.js";import{M as T}from"./MenuItem-B0sbJV79.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Tooltip-Xh9QA514.js";import"./generateUtilityClass-GxznSYtt.js";import"./identifier-CHUoN9pF.js";import"./index-DyJdRKzS.js";import"./useTheme-BGaXYmwe.js";import"./DefaultPropsProvider-ArLX9SCD.js";import"./useTheme-CVByJb8R.js";import"./styled-FZfCzBz5.js";import"./memoTheme-BLrvrRyo.js";import"./useSlot-qvYlW2UV.js";import"./resolveComponentProps-XMphxBSb.js";import"./useForkRef-Dz4aGlyk.js";import"./generateUtilityClasses-aotQgNYZ.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./useControlled-DxC1uCGX.js";import"./useId-DIK8ekB4.js";import"./getReactElementRef-Df0xbma2.js";import"./Portal-DEVqEMA6.js";import"./utils-tFrEP9Vf.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DT0tbkWv.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BFylt634.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DwAEbHIm.js";import"./emotion-react.browser.esm-DW5OmoQI.js";import"./CircularProgress-o1goEU37.js";import"./Button-DrYdciQ0.js";import"./LoadingButton-C6EjcQI6.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./SvgIcon-D3xe1wVB.js";import"./Popover-DNs0CrC2.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-zGtC1N39.js";import"./Modal-BSor9Am9.js";import"./Backdrop-DwIksyfj.js";import"./Fade-rL0rk9XF.js";import"./List-CN2yCDHK.js";import"./listItemTextClasses-BE6nMJZB.js";import"./dividerClasses-Cy3VQ5Zc.js";const i=t=>e.jsx(P,{...t}),a=t=>e.jsx(T,{...t,disableRipple:!0,disableTouchRipple:!0}),f=t=>e.jsx(w,{...t});try{i.displayName="Menu",i.__docgenInfo={description:"",displayName:"Menu",props:{variant:{defaultValue:{value:"'selectedMenu'"},description:"The variant to use. Use `menu` to prevent selected items from impacting the initial focus.",name:"variant",required:!1,type:{name:'"menu" | "selectedMenu"'}},components:{defaultValue:{value:"{}"},description:"The components used for each slot inside.\n@deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"components",required:!1,type:{name:"{ Root?: ElementType<any, keyof IntrinsicElements>; Backdrop?: ElementType<any, keyof IntrinsicElements>; }"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<PopoverSlots>"}},className:{defaultValue:null,description:"@ignore",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Menu contents, normally `MenuItem`s.",name:"children",required:!1,type:{name:"ReactNode"}},autoFocus:{defaultValue:{value:"true"},description:'If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled\nchildren are not focusable. If you set this prop to `false` focus will be placed\non the parent modal container. This has severe accessibility implications\nand should only be considered if you manage focus otherwise.',name:"autoFocus",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},action:{defaultValue:null,description:`A ref for imperative actions.
It currently only supports updatePosition() action.`,name:"action",required:!1,type:{name:"Ref<PopoverActions>"}},componentsProps:{defaultValue:{value:"{}"},description:"The extra props for the slot components.\nYou can override the existing props or add new ones.\n@deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"componentsProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", ModalComponentsPropsOverrides, ModalOwnerState>; backdrop?: SlotComponentProps<OverridableComponent<BackdropTypeMap<{}, "div">>, ModalComponentsPropsOverrides, ModalOwnerState>; }'}},onClose:{defaultValue:null,description:'Callback fired when the component requests to be closed.\n@param event The event source of the callback.\n@param reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.',name:"onClose",required:!1,type:{name:'(event: {}, reason: "backdropClick" | "escapeKeyDown") => void'}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ root?: SlotProps<OverridableComponent<ModalTypeMap<"div", {}>>, {}, ModalOwnerState>; paper?: SlotProps<OverridableComponent<PaperTypeMap<{}, "div">>, {}, {}>; }'}},transformOrigin:{defaultValue:{value:`{
vertical: 'top',
horizontal: 'left',
}`},description:`This is the point on the popover which
will attach to the anchor's origin.

Options:
vertical: [top, center, bottom, x(px)];
horizontal: [left, center, right, x(px)].`,name:"transformOrigin",required:!1,type:{name:"PopoverOrigin"}},transitionDuration:{defaultValue:{value:"'auto'"},description:"The length of the transition in `ms`, or 'auto'",name:"transitionDuration",required:!1,type:{name:'number | "auto" | { appear?: number; enter?: number; exit?: number; } | { appear?: number; enter?: number; exit?: number; }'}},container:{defaultValue:null,description:"An HTML element, component instance, or function that returns either.\nThe `container` will passed to the Modal component.\n\nBy default, it uses the body of the anchorEl's top-level document object,\nso it's simply `document.body` most of the time.",name:"container",required:!1,type:{name:"Element | (() => Element)"}},disablePortal:{defaultValue:{value:"false"},description:"The `children` will be under the DOM hierarchy of the parent component.",name:"disablePortal",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!0,type:{name:"boolean"}},anchorOrigin:{defaultValue:{value:`{
vertical: 'top',
horizontal: 'left',
}`},description:`This is the point on the anchor where the popover's
\`anchorEl\` will attach to. This is not used when the
anchorReference is 'anchorPosition'.

Options:
vertical: [top, center, bottom];
horizontal: [left, center, right].`,name:"anchorOrigin",required:!1,type:{name:"PopoverOrigin"}},PaperProps:{defaultValue:{value:"{}"},description:"Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.\n\nThis prop is an alias for `slotProps.paper` and will be overriden by it if both are used.\n@deprecated Use `slotProps.paper` instead.",name:"PaperProps",required:!1,type:{name:"Partial<PaperProps<ElementType<any, keyof IntrinsicElements>>>"}},disableRestoreFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not restore focus to previously focused element once\nmodal is hidden or unmounted.",name:"disableRestoreFocus",required:!1,type:{name:"boolean"}},closeAfterTransition:{defaultValue:{value:"false"},description:"When set to true the Modal waits until a nested Transition is completed before closing.",name:"closeAfterTransition",required:!1,type:{name:"boolean"}},disableAutoFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not automatically shift focus to itself when it opens, and\nreplace it to the last focused element when it closes.\nThis also works correctly with any modal children that have the `disableAutoFocus` prop.\n\nGenerally this should never be set to `true` as it makes the modal less\naccessible to assistive technologies, like screen readers.",name:"disableAutoFocus",required:!1,type:{name:"boolean"}},disableScrollLock:{defaultValue:{value:"false"},description:"Disable the scroll lock behavior.",name:"disableScrollLock",required:!1,type:{name:"boolean"}},hideBackdrop:{defaultValue:{value:"false"},description:"If `true`, the backdrop is not rendered.",name:"hideBackdrop",required:!1,type:{name:"boolean"}},keepMounted:{defaultValue:{value:"false"},description:`Always keep the children in the DOM.
This prop can be useful in SEO situation or
when you want to maximize the responsiveness of the Modal.`,name:"keepMounted",required:!1,type:{name:"boolean"}},onTransitionEnter:{defaultValue:null,description:"A function called when a transition enters.",name:"onTransitionEnter",required:!1,type:{name:"() => void"}},onTransitionExited:{defaultValue:null,description:"A function called when a transition has exited.",name:"onTransitionExited",required:!1,type:{name:"() => void"}},anchorEl:{defaultValue:null,description:`An HTML element, or a function that returns one.
It's used to set the position of the menu.`,name:"anchorEl",required:!1,type:{name:"Element | (() => Element) | PopoverVirtualElement | (() => PopoverVirtualElement)"}},anchorPosition:{defaultValue:null,description:`This is the position that may be used to set the position of the popover.
The coordinates are relative to the application's client area.`,name:"anchorPosition",required:!1,type:{name:"PopoverPosition"}},anchorReference:{defaultValue:{value:"'anchorEl'"},description:`This determines which anchor prop to refer to when setting
the position of the popover.`,name:"anchorReference",required:!1,type:{name:"PopoverReference"}},marginThreshold:{defaultValue:{value:"16"},description:`Specifies how close to the edge of the window the popover can appear.
If null, the popover will not be constrained by the window.`,name:"marginThreshold",required:!1,type:{name:"number"}},MenuListProps:{defaultValue:{value:"{}"},description:"Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.",name:"MenuListProps",required:!1,type:{name:"Partial<MenuListProps>"}}}}}catch{}try{a.displayName="MenuItem",a.__docgenInfo={description:"",displayName:"MenuItem",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<MenuItemClasses> & Partial<ClassNameMap<never>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLLIElement>"}},autoFocus:{defaultValue:{value:"false"},description:"If `true`, the list item is focused during the first mount.\nFocus will also be triggered if the value changes from false to true.",name:"autoFocus",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},selected:{defaultValue:{value:"false"},description:"If `true`, the component is selected.",name:"selected",required:!1,type:{name:"boolean"}},dense:{defaultValue:{value:"false"},description:"If `true`, compact vertical padding designed for keyboard and mouse input is used.\nThe prop defaults to the value inherited from the parent Menu component.",name:"dense",required:!1,type:{name:"boolean"}},divider:{defaultValue:{value:"false"},description:"If `true`, a 1px light border is added to the bottom of the menu item.",name:"divider",required:!1,type:{name:"boolean"}},disableGutters:{defaultValue:{value:"false"},description:"If `true`, the left and right padding is removed.",name:"disableGutters",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="MenuList",f.__docgenInfo={description:"",displayName:"MenuList",props:{autoFocus:{defaultValue:{value:"false"},description:'If `true`, will focus the `[role="menu"]` container and move into tab order.',name:"autoFocus",required:!1,type:{name:"boolean"}},autoFocusItem:{defaultValue:{value:"false"},description:'If `true`, will focus the first menuitem if `variant="menu"` or selected item\nif `variant="selectedMenu"`.',name:"autoFocusItem",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"MenuList contents, normally `MenuItem`s.\nThe content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},disabledItemsFocusable:{defaultValue:{value:"false"},description:"If `true`, will allow focus on disabled items.",name:"disabledItemsFocusable",required:!1,type:{name:"boolean"}},disableListWrap:{defaultValue:{value:"false"},description:"If `true`, the menu items will not wrap focus.",name:"disableListWrap",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'selectedMenu'"},description:"The variant to use. Use `menu` to prevent selected items from impacting the initial focus\nand the vertical alignment relative to the anchor element.",name:"variant",required:!1,type:{name:'"menu" | "selectedMenu"'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ListClasses> & Partial<ClassNameMap<never>>"}},dense:{defaultValue:{value:"false"},description:"If `true`, compact vertical padding designed for keyboard and mouse input is used for\nthe list and list items.\nThe prop is available to descendant components as the `dense` context.",name:"dense",required:!1,type:{name:"boolean"}},disablePadding:{defaultValue:{value:"false"},description:"If `true`, vertical padding is removed from the list.",name:"disablePadding",required:!1,type:{name:"boolean"}},subheader:{defaultValue:null,description:"The content of the subheader, normally `ListSubheader`.",name:"subheader",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLUListElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const Le={title:"Components/Menu/Menu",component:i,tags:["autodocs"]},s={render:({open:t,...d})=>{const l=r.useRef(null),[p,o]=r.useState(!1);r.useEffect(()=>{o(t)},[t]);const c=()=>{o(m=>!m)},n=()=>{o(!1)};return e.jsxs("div",{children:[e.jsx(g,{id:"basic-button","aria-controls":t?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":t?"true":void 0,onClick:c,ref:l,children:"Dashboard"}),e.jsxs(i,{id:"basic-menu",anchorEl:l.current,open:p,onClose:n,MenuListProps:{"aria-labelledby":"basic-button"},...d,children:[e.jsx(a,{onClick:n,children:"Profile"}),e.jsx(a,{onClick:n,selected:!0,children:"My account"}),e.jsx(a,{onClick:n,disabled:!0,children:"Help"}),e.jsx(a,{onClick:n,children:"Logout"})]})]})}},u={render:({open:t,...d})=>{const l=r.useRef(null),[p,o]=r.useState(!1);r.useEffect(()=>{o(t)},[t]);const c=()=>{o(m=>!m)},n=()=>{o(!1)};return e.jsxs("div",{children:[e.jsx(g,{id:"basic-button","aria-controls":t?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":t?"true":void 0,onClick:c,ref:l,children:"Dashboard"}),e.jsxs(i,{id:"basic-menu",anchorEl:l.current,open:p,onClose:n,MenuListProps:{"aria-labelledby":"basic-button"},...d,children:[e.jsxs(a,{onClick:n,children:[e.jsx(I,{}),"Profile"]}),e.jsxs(a,{onClick:n,selected:!0,children:[e.jsx(V,{}),"My account"]}),e.jsxs(a,{onClick:n,disabled:!0,children:[e.jsx(q,{}),"Help"]}),e.jsxs(a,{onClick:n,children:[e.jsx(k,{}),"Logout"]})]})]})}};var h,b,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,M,C;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(M=u.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};const Se=["_Menu","_MenuWithIcons"];export{s as _Menu,u as _MenuWithIcons,Se as __namedExportsOrder,Le as default};
