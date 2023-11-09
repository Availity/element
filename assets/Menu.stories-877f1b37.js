import{j as n,a as o}from"./jsx-runtime-390e5fc8.js";import{r}from"./index-570b25c1.js";import{B as V}from"./index-93428ce8.js";import{U as I,e as q,H as w,A as P}from"./index-dd60701b.js";import{M as T,a as k}from"./Menu-30d77e29.js";import{M as E}from"./MenuItem-5ce48f00.js";import"./_commonjsHelpers-042e6b4d.js";import"./Button-fef3f699.js";import"./createTheme-e6b56ddb.js";import"./clsx-8416b751.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-78cd751f.js";import"./useThemeProps-285a8f6c.js";import"./generateUtilityClasses-2915a045.js";import"./ButtonBase-6abe7f0b.js";import"./emotion-react.browser.esm-69a15469.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-86055ff5.js";import"./useTheme-b3699c65.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./Grow-d970f38d.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useSlotProps-1710581f.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-ef8e1194.js";import"./LoadingButton-f91fec86.js";import"./extends-90dea224.js";import"./CircularProgress-c55bac56.js";import"./faCircleArrowRight-5066acd3.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-f3e07af8.js";import"./react-is.production.min-a192e302.js";import"./Popover-f52592f3.js";import"./Modal-33895bdc.js";import"./Backdrop-c0ceeda2.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-adaa179d.js";import"./debounce-517eeb3c.js";import"./dividerClasses-17e5b451.js";const s=e=>n(T,{...e,slotProps:{paper:{variant:"elevation"}}}),a=e=>n(E,{...e,disableRipple:!0,disableTouchRipple:!0}),h=e=>n(k,{...e});try{s.displayName="Menu",s.__docgenInfo={description:"",displayName:"Menu",props:{className:{defaultValue:null,description:"@ignore",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Menu contents, normally `MenuItem`s.",name:"children",required:!1,type:{name:"ReactNode"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},action:{defaultValue:null,description:`A ref for imperative actions.
It currently only supports updatePosition() action.`,name:"action",required:!1,type:{name:"Ref<PopoverActions>"}},transformOrigin:{defaultValue:{value:`{
vertical: 'top',
horizontal: 'left',
}`},description:`This is the point on the popover which
will attach to the anchor's origin.

Options:
vertical: [top, center, bottom, x(px)];
horizontal: [left, center, right, x(px)].`,name:"transformOrigin",required:!1,type:{name:"PopoverOrigin"}},transitionDuration:{defaultValue:{value:"'auto'"},description:"The length of the transition in `ms`, or 'auto'",name:"transitionDuration",required:!1,type:{name:'number | "auto" | { appear?: number; enter?: number; exit?: number; } | { appear?: number; enter?: number; exit?: number; }'}},container:{defaultValue:null,description:"An HTML element, component instance, or function that returns either.\nThe `container` will passed to the Modal component.\n\nBy default, it uses the body of the anchorEl's top-level document object,\nso it's simply `document.body` most of the time.",name:"container",required:!1,type:{name:"Element | (() => Element)"}},variant:{defaultValue:{value:"'selectedMenu'"},description:"The variant to use. Use `menu` to prevent selected items from impacting the initial focus.",name:"variant",required:!1,type:{name:'"menu" | "selectedMenu"'}},components:{defaultValue:{value:"{}"},description:"The components used for each slot inside.\n\nThis prop is an alias for the `slots` prop.\nIt's recommended to use the `slots` prop instead.",name:"components",required:!1,type:{name:"{ Root?: ElementType<any>; Backdrop?: ElementType<any>; }"}},componentsProps:{defaultValue:{value:"{}"},description:"The extra props for the slot components.\nYou can override the existing props or add new ones.\n\nThis prop is an alias for the `slotProps` prop.\nIt's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.",name:"componentsProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", ModalComponentsPropsOverrides, ModalOwnerState>; backdrop?: SlotComponentProps<OverridableComponent<BackdropTypeMap<{}, "div">>, ModalComponentsPropsOverrides, ModalOwnerState>; }'}},onClose:{defaultValue:null,description:'Callback fired when the component requests to be closed.\n@param event The event source of the callback.\n@param reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.',name:"onClose",required:!1,type:{name:'(event: {}, reason: "backdropClick" | "escapeKeyDown") => void'}},slotProps:{defaultValue:{value:"{}"},description:`The extra props for the slot components.
You can override the existing props or add new ones.`,name:"slotProps",required:!1,type:{name:'{ root?: SlotComponentProps<OverridableComponent<ModalTypeMap<"div", {}>>, {}, ModalOwnerState>; paper?: SlotComponentProps<...>; }'}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"{ root?: ElementType<any>; paper?: ElementType<any>; }"}},autoFocus:{defaultValue:{value:"true"},description:'If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled\nchildren are not focusable. If you set this prop to `false` focus will be placed\non the parent modal container. This has severe accessibility implications\nand should only be considered if you manage focus otherwise.',name:"autoFocus",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!0,type:{name:"boolean"}},anchorOrigin:{defaultValue:{value:`{
vertical: 'top',
horizontal: 'left',
}`},description:`This is the point on the anchor where the popover's
\`anchorEl\` will attach to. This is not used when the
anchorReference is 'anchorPosition'.

Options:
vertical: [top, center, bottom];
horizontal: [left, center, right].`,name:"anchorOrigin",required:!1,type:{name:"PopoverOrigin"}},PaperProps:{defaultValue:{value:"{}"},description:"Props applied to the [`Paper`](/material-ui/api/paper/) element.\n\nThis prop is an alias for `slotProps.paper` and will be overriden by it if both are used.\n@deprecated Use `slotProps.paper` instead.",name:"PaperProps",required:!1,type:{name:"Partial<PaperProps<ElementType<any>, {}>>"}},closeAfterTransition:{defaultValue:{value:"false"},description:"When set to true the Modal waits until a nested Transition is completed before closing.",name:"closeAfterTransition",required:!1,type:{name:"boolean"}},disableAutoFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not automatically shift focus to itself when it opens, and\nreplace it to the last focused element when it closes.\nThis also works correctly with any modal children that have the `disableAutoFocus` prop.\n\nGenerally this should never be set to `true` as it makes the modal less\naccessible to assistive technologies, like screen readers.",name:"disableAutoFocus",required:!1,type:{name:"boolean"}},disablePortal:{defaultValue:{value:"false"},description:"The `children` will be under the DOM hierarchy of the parent component.",name:"disablePortal",required:!1,type:{name:"boolean"}},disableRestoreFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not restore focus to previously focused element once\nmodal is hidden or unmounted.",name:"disableRestoreFocus",required:!1,type:{name:"boolean"}},disableScrollLock:{defaultValue:{value:"false"},description:"Disable the scroll lock behavior.",name:"disableScrollLock",required:!1,type:{name:"boolean"}},hideBackdrop:{defaultValue:{value:"false"},description:"If `true`, the backdrop is not rendered.",name:"hideBackdrop",required:!1,type:{name:"boolean"}},keepMounted:{defaultValue:{value:"false"},description:`Always keep the children in the DOM.
This prop can be useful in SEO situation or
when you want to maximize the responsiveness of the Modal.`,name:"keepMounted",required:!1,type:{name:"boolean"}},onTransitionEnter:{defaultValue:null,description:"A function called when a transition enters.",name:"onTransitionEnter",required:!1,type:{name:"() => void"}},onTransitionExited:{defaultValue:null,description:"A function called when a transition has exited.",name:"onTransitionExited",required:!1,type:{name:"() => void"}},anchorEl:{defaultValue:null,description:`An HTML element, or a function that returns one.
It's used to set the position of the menu.`,name:"anchorEl",required:!1,type:{name:"Element | (() => Element) | PopoverVirtualElement | (() => PopoverVirtualElement)"}},anchorPosition:{defaultValue:null,description:`This is the position that may be used to set the position of the popover.
The coordinates are relative to the application's client area.`,name:"anchorPosition",required:!1,type:{name:"PopoverPosition"}},anchorReference:{defaultValue:{value:"'anchorEl'"},description:`This determines which anchor prop to refer to when setting
the position of the popover.`,name:"anchorReference",required:!1,type:{name:"PopoverReference"}},marginThreshold:{defaultValue:{value:"16"},description:`Specifies how close to the edge of the window the popover can appear.
If null, the popover will not be constrained by the window.`,name:"marginThreshold",required:!1,type:{name:"number"}},MenuListProps:{defaultValue:{value:"{}"},description:"Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.",name:"MenuListProps",required:!1,type:{name:'Partial<MenuListProps<"ul", {}>>'}}}}}catch{}try{a.displayName="MenuItem",a.__docgenInfo={description:"",displayName:"MenuItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<MenuItemClasses> & Partial<ClassNameMap<never>>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLLIElement>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},autoFocus:{defaultValue:{value:"false"},description:"If `true`, the list item is focused during the first mount.\nFocus will also be triggered if the value changes from false to true.",name:"autoFocus",required:!1,type:{name:"boolean"}},dense:{defaultValue:{value:"false"},description:"If `true`, compact vertical padding designed for keyboard and mouse input is used.\nThe prop defaults to the value inherited from the parent Menu component.",name:"dense",required:!1,type:{name:"boolean"}},disableGutters:{defaultValue:{value:"false"},description:"If `true`, the left and right padding is removed.",name:"disableGutters",required:!1,type:{name:"boolean"}},divider:{defaultValue:{value:"false"},description:"If `true`, a 1px light border is added to the bottom of the menu item.",name:"divider",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"If `true`, the component is selected.",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="MenuList",h.__docgenInfo={description:"",displayName:"MenuList",props:{autoFocus:{defaultValue:{value:"false"},description:'If `true`, will focus the `[role="menu"]` container and move into tab order.',name:"autoFocus",required:!1,type:{name:"boolean"}},autoFocusItem:{defaultValue:{value:"false"},description:'If `true`, will focus the first menuitem if `variant="menu"` or selected item\nif `variant="selectedMenu"`.',name:"autoFocusItem",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"MenuList contents, normally `MenuItem`s.\nThe content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},disabledItemsFocusable:{defaultValue:{value:"false"},description:"If `true`, will allow focus on disabled items.",name:"disabledItemsFocusable",required:!1,type:{name:"boolean"}},disableListWrap:{defaultValue:{value:"false"},description:"If `true`, the menu items will not wrap focus.",name:"disableListWrap",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'selectedMenu'"},description:"The variant to use. Use `menu` to prevent selected items from impacting the initial focus\nand the vertical alignment relative to the anchor element.",name:"variant",required:!1,type:{name:'"menu" | "selectedMenu"'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ListClasses> & Partial<ClassNameMap<never>>"}},dense:{defaultValue:{value:"false"},description:"If `true`, compact vertical padding designed for keyboard and mouse input is used for\nthe list and list items.\nThe prop is available to descendant components as the `dense` context.",name:"dense",required:!1,type:{name:"boolean"}},disablePadding:{defaultValue:{value:"false"},description:"If `true`, vertical padding is removed from the list.",name:"disablePadding",required:!1,type:{name:"boolean"}},subheader:{defaultValue:null,description:"The content of the subheader, normally `ListSubheader`.",name:"subheader",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLUListElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}}}catch{}const Ie={title:"Components/Menu/Menu",component:s,tags:["autodocs"]},u={render:({open:e,...p})=>{const i=r.useRef(null),[c,l]=r.useState(!1);r.useEffect(()=>{l(e)},[e]);const m=()=>{l(f=>!f)},t=()=>{l(!1)};return o("div",{children:[n(V,{id:"basic-button","aria-controls":e?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":e?"true":void 0,onClick:m,ref:i,children:"Dashboard"}),o(s,{id:"basic-menu",anchorEl:i.current,open:c,onClose:t,MenuListProps:{"aria-labelledby":"basic-button"},...p,children:[n(a,{onClick:t,children:"Profile"}),n(a,{onClick:t,selected:!0,children:"My account"}),n(a,{onClick:t,disabled:!0,children:"Help"}),n(a,{onClick:t,children:"Logout"})]})]})}},d={render:({open:e,...p})=>{const i=r.useRef(null),[c,l]=r.useState(!1);r.useEffect(()=>{l(e)},[e]);const m=()=>{l(f=>!f)},t=()=>{l(!1)};return o("div",{children:[n(V,{id:"basic-button","aria-controls":e?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":e?"true":void 0,onClick:m,ref:i,children:"Dashboard"}),o(s,{id:"basic-menu",anchorEl:i.current,open:c,onClose:t,MenuListProps:{"aria-labelledby":"basic-button"},...p,children:[o(a,{onClick:t,children:[n(I,{}),"Profile"]}),o(a,{onClick:t,selected:!0,children:[n(q,{}),"My account"]}),o(a,{onClick:t,disabled:!0,children:[n(w,{}),"Help"]}),o(a,{onClick:t,children:[n(P,{}),"Logout"]})]})]})}};var b,y,v;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(y=u.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var C,M,g;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(g=(M=d.parameters)==null?void 0:M.docs)==null?void 0:g.source}}};const qe=["_Menu","_MenuWithIcons"];export{u as _Menu,d as _MenuWithIcons,qe as __namedExportsOrder,Ie as default};
//# sourceMappingURL=Menu.stories-877f1b37.js.map
