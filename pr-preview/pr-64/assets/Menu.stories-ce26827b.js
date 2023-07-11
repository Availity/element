import{j as o,a as V,F as B}from"./jsx-runtime-91a467a5.js";import{r as i}from"./index-8db94870.js";import{B as A}from"./index-5079100e.js";import{M as D,a as H}from"./Menu-21b60be0.js";import{g as L,b as G,s as W,r as z,c as I,a as U}from"./styled-bbc4db24.js";import{b as m,c as j}from"./useThemeProps-0aafcae6.js";import{L as q}from"./List-732fc7e9.js";import{B as K,u as Y}from"./ButtonBase-4635bd7d.js";import{d as T}from"./dividerClasses-b028230b.js";import{l as P}from"./listItemTextClasses-3902b3c9.js";import{u as J}from"./useForkRef-2674f3de.js";import"./_commonjsHelpers-042e6b4d.js";import"./Button-c7fe7886.js";import"./LoadingButton-33e357a1.js";import"./emotion-react.browser.esm-f47b4cc7.js";import"./extends-bab83b91.js";import"./useId-fd294ee9.js";import"./Tooltip-ab4358e8.js";import"./useTheme-aec6e016.js";import"./index-8ce4a492.js";import"./useSlotProps-4b86086d.js";import"./utils-3aa248e2.js";import"./inheritsLoose-a02b825e.js";import"./setPrototypeOf-8d862a7d.js";import"./useIsFocusVisible-bbf13f29.js";import"./IconButton-61ef6ad6.js";import"./Paper-c4513d03.js";const Q=L("MuiListItemIcon",["root","alignItemsFlexStart"]),w=Q;function X(e){return G("MuiMenuItem",e)}const Z=L("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),u=Z,ee=(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]},te=e=>{const{disabled:t,dense:a,divider:s,disableGutters:l,selected:r,classes:n}=e,d=U({root:["root",a&&"dense",t&&"disabled",!l&&"gutters",s&&"divider",r&&"selected"]},X,n);return{...n,...d}},ae=W(K,{shouldForwardProp:e=>z(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ee})(({theme:e,ownerState:t})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap",...!t.disableGutters&&{paddingLeft:16,paddingRight:16},...t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${u.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:m(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${u.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:m(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${u.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:m(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:m(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${u.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${u.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${T.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${T.inset}`]:{marginLeft:52},[`& .${P.root}`]:{marginTop:0,marginBottom:0},[`& .${P.inset}`]:{paddingLeft:36},[`& .${w.root}`]:{minWidth:36},...!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},...t.dense&&{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${w.root} svg`]:{fontSize:"1.25rem"}}})),ne=i.forwardRef(function(t,a){const s=j({props:t,name:"MuiMenuItem"}),{autoFocus:l=!1,component:r="li",dense:n=!1,divider:c=!1,disableGutters:d=!1,focusVisibleClassName:S,role:E="menuitem",tabIndex:v,className:F,..._}=s,g=i.useContext(q),M=i.useMemo(()=>({dense:n||g.dense||!1,disableGutters:d}),[g.dense,n,d]),b=i.useRef(null);Y(()=>{l&&b.current&&b.current.focus()},[l]);const $={...s,dense:M.dense,divider:c,disableGutters:d},y=te(s),N=J(b,a);let C;return s.disabled||(C=v!==void 0?v:-1),o(q.Provider,{value:M,children:o(ae,{ref:N,role:E,tabIndex:C,component:r,focusVisibleClassName:I(y.focusVisible,S),className:I(y.root,F),..._,ownerState:$,classes:y})})}),oe=ne,h=e=>o(D,{...e}),p=e=>o(oe,{...e}),k=e=>o(H,{...e});try{h.displayName="Menu",h.__docgenInfo={description:"",displayName:"Menu",props:{className:{defaultValue:null,description:"@ignore",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Menu contents, normally `MenuItem`s.",name:"children",required:!1,type:{name:"ReactNode"}},elevation:{defaultValue:{value:"8"},description:"The elevation of the popover.",name:"elevation",required:!1,type:{name:"number"}},action:{defaultValue:null,description:`A ref for imperative actions.
It currently only supports updatePosition() action.`,name:"action",required:!1,type:{name:"Ref<PopoverActions>"}},transformOrigin:{defaultValue:{value:`{
vertical: 'top',
horizontal: 'left',
}`},description:`This is the point on the popover which
will attach to the anchor's origin.

Options:
vertical: [top, center, bottom, x(px)];
horizontal: [left, center, right, x(px)].`,name:"transformOrigin",required:!1,type:{name:"PopoverOrigin"}},transitionDuration:{defaultValue:{value:"'auto'"},description:"The length of the transition in `ms`, or 'auto'",name:"transitionDuration",required:!1,type:{name:'number | "auto" | { appear?: number; enter?: number; exit?: number; } | { appear?: number; enter?: number; exit?: number; }'}},container:{defaultValue:null,description:"An HTML element, component instance, or function that returns either.\nThe `container` will passed to the Modal component.\n\nBy default, it uses the body of the anchorEl's top-level document object,\nso it's simply `document.body` most of the time.",name:"container",required:!1,type:{name:"Element | (() => Element)"}},variant:{defaultValue:{value:"'selectedMenu'"},description:"The variant to use. Use `menu` to prevent selected items from impacting the initial focus.",name:"variant",required:!1,type:{name:'"menu" | "selectedMenu"'}},anchorOrigin:{defaultValue:{value:`{
vertical: 'top',
horizontal: 'left',
}`},description:`This is the point on the anchor where the popover's
\`anchorEl\` will attach to. This is not used when the
anchorReference is 'anchorPosition'.

Options:
vertical: [top, center, bottom];
horizontal: [left, center, right].`,name:"anchorOrigin",required:!1,type:{name:"PopoverOrigin"}},componentsProps:{defaultValue:{value:"{}"},description:"The extra props for the slot components.\nYou can override the existing props or add new ones.\n\nThis prop is an alias for the `slotProps` prop.\nIt's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.",name:"componentsProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", ModalComponentsPropsOverrides, ModalOwnerState>; backdrop?: SlotComponentProps<OverridableComponent<BackdropTypeMap<{}, "div">>, ModalComponentsPropsOverrides, ModalOwnerState>; }'}},components:{defaultValue:{value:"{}"},description:"The components used for each slot inside.\n\nThis prop is an alias for the `slots` prop.\nIt's recommended to use the `slots` prop instead.",name:"components",required:!1,type:{name:"{ Root?: ElementType<any>; Backdrop?: ElementType<any>; }"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Modal.",name:"slotProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", ModalComponentsPropsOverrides, ModalOwnerState>; backdrop?: SlotComponentProps<OverridableComponent<BackdropTypeMap<{}, "div">>, ModalComponentsPropsOverrides, ModalOwnerState>; }'}},slots:{defaultValue:{value:"{}"},description:`The components used for each slot inside the Modal.
Either a string to use a HTML element or a component.`,name:"slots",required:!1,type:{name:"ModalSlots"}},autoFocus:{defaultValue:{value:"true"},description:'If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled\nchildren are not focusable. If you set this prop to `false` focus will be placed\non the parent modal container. This has severe accessibility implications\nand should only be considered if you manage focus otherwise.',name:"autoFocus",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:'Callback fired when the component requests to be closed.\n@param event The event source of the callback.\n@param reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.',name:"onClose",required:!1,type:{name:'(event: {}, reason: "backdropClick" | "escapeKeyDown") => void'}},closeAfterTransition:{defaultValue:{value:"false"},description:"When set to true the Modal waits until a nested Transition is completed before closing.",name:"closeAfterTransition",required:!1,type:{name:"boolean"}},disableAutoFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not automatically shift focus to itself when it opens, and\nreplace it to the last focused element when it closes.\nThis also works correctly with any modal children that have the `disableAutoFocus` prop.\n\nGenerally this should never be set to `true` as it makes the modal less\naccessible to assistive technologies, like screen readers.",name:"disableAutoFocus",required:!1,type:{name:"boolean"}},disablePortal:{defaultValue:{value:"false"},description:"The `children` will be under the DOM hierarchy of the parent component.",name:"disablePortal",required:!1,type:{name:"boolean"}},disableRestoreFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not restore focus to previously focused element once\nmodal is hidden or unmounted.",name:"disableRestoreFocus",required:!1,type:{name:"boolean"}},disableScrollLock:{defaultValue:{value:"false"},description:"Disable the scroll lock behavior.",name:"disableScrollLock",required:!1,type:{name:"boolean"}},hideBackdrop:{defaultValue:{value:"false"},description:"If `true`, the backdrop is not rendered.",name:"hideBackdrop",required:!1,type:{name:"boolean"}},keepMounted:{defaultValue:{value:"false"},description:`Always keep the children in the DOM.
This prop can be useful in SEO situation or
when you want to maximize the responsiveness of the Modal.`,name:"keepMounted",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!0,type:{name:"boolean"}},anchorEl:{defaultValue:null,description:`An HTML element, or a function that returns one.
It's used to set the position of the menu.`,name:"anchorEl",required:!1,type:{name:"Element | ((element: Element) => Element)"}},anchorPosition:{defaultValue:null,description:`This is the position that may be used to set the position of the popover.
The coordinates are relative to the application's client area.`,name:"anchorPosition",required:!1,type:{name:"PopoverPosition"}},anchorReference:{defaultValue:{value:"'anchorEl'"},description:`This determines which anchor prop to refer to when setting
the position of the popover.`,name:"anchorReference",required:!1,type:{name:"PopoverReference"}},marginThreshold:{defaultValue:{value:"16"},description:"Specifies how close to the edge of the window the popover can appear.",name:"marginThreshold",required:!1,type:{name:"number"}},PaperProps:{defaultValue:{value:"{}"},description:"Props applied to the [`Paper`](/material-ui/api/paper/) element.",name:"PaperProps",required:!1,type:{name:'Partial<PaperProps<"div", {}>>'}},MenuListProps:{defaultValue:{value:"{}"},description:"Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.",name:"MenuListProps",required:!1,type:{name:'Partial<MenuListProps<"ul", {}>>'}}}}}catch{}try{p.displayName="MenuItem",p.__docgenInfo={description:"",displayName:"MenuItem",props:{autoFocus:{defaultValue:{value:"false"},description:"If `true`, the list item is focused during the first mount.\nFocus will also be triggered if the value changes from false to true.",name:"autoFocus",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<MenuItemClasses> & Partial<ClassNameMap<never>>"}},dense:{defaultValue:{value:"false"},description:"If `true`, compact vertical padding designed for keyboard and mouse input is used.\nThe prop defaults to the value inherited from the parent Menu component.",name:"dense",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disableGutters:{defaultValue:{value:"false"},description:"If `true`, the left and right padding is removed.",name:"disableGutters",required:!1,type:{name:"boolean"}},divider:{defaultValue:{value:"false"},description:"If `true`, a 1px light border is added to the bottom of the menu item.",name:"divider",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"If `true`, the component is selected.",name:"selected",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:{value:"false"},description:"If `true`, the ripple effect is disabled.\n\n⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `.Mui-focusVisible` class.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:{value:"false"},description:"If `true`, the touch ripple effect is disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:{value:"false"},description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},touchRippleRef:{defaultValue:null,description:"A ref that points to the `TouchRipple` element.",name:"touchRippleRef",required:!1,type:{name:"Ref<TouchRippleActions>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLLIElement>"}}}}}catch{}try{k.displayName="MenuList",k.__docgenInfo={description:"",displayName:"MenuList",props:{autoFocus:{defaultValue:{value:"false"},description:'If `true`, will focus the `[role="menu"]` container and move into tab order.',name:"autoFocus",required:!1,type:{name:"boolean"}},autoFocusItem:{defaultValue:{value:"false"},description:'If `true`, will focus the first menuitem if `variant="menu"` or selected item\nif `variant="selectedMenu"`.',name:"autoFocusItem",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"MenuList contents, normally `MenuItem`s.\nThe content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},disabledItemsFocusable:{defaultValue:{value:"false"},description:"If `true`, will allow focus on disabled items.",name:"disabledItemsFocusable",required:!1,type:{name:"boolean"}},disableListWrap:{defaultValue:{value:"false"},description:"If `true`, the menu items will not wrap focus.",name:"disableListWrap",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'selectedMenu'"},description:"The variant to use. Use `menu` to prevent selected items from impacting the initial focus\nand the vertical alignment relative to the anchor element.",name:"variant",required:!1,type:{name:'"menu" | "selectedMenu"'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ListClasses> & Partial<ClassNameMap<never>>"}},dense:{defaultValue:{value:"false"},description:"If `true`, compact vertical padding designed for keyboard and mouse input is used for\nthe list and list items.\nThe prop is available to descendant components as the `dense` context.",name:"dense",required:!1,type:{name:"boolean"}},disablePadding:{defaultValue:{value:"false"},description:"If `true`, vertical padding is removed from the list.",name:"disablePadding",required:!1,type:{name:"boolean"}},subheader:{defaultValue:null,description:"The content of the subheader, normally `ListSubheader`.",name:"subheader",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLUListElement>"}}}}}catch{}const Le={title:"Components/Menu/Menu",component:h,tags:["autodocs"]},f={render:({open:e,...t})=>{const a=i.useRef(null),[s,l]=i.useState(!1);i.useEffect(()=>{l(e)},[e]);const r=()=>{l(c=>!c)},n=()=>{l(!1)};return V(B,{children:[o(A,{id:"basic-button","aria-controls":e?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":e?"true":void 0,onClick:r,ref:a,children:"Dashboard"}),V(h,{id:"basic-menu",anchorEl:a.current,open:s,onClose:n,MenuListProps:{"aria-labelledby":"basic-button"},...t,children:[o(p,{onClick:n,children:"Profile"}),o(p,{onClick:n,children:"My account"}),o(p,{onClick:n,children:"Logout"})]})]})}};var x,O,R;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    return <>
        <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} ref={anchorEl}>
          Dashboard
        </Button>
        <Menu id="basic-menu" anchorEl={anchorEl.current} open={controlledOpen} onClose={handleClose} MenuListProps={{
        'aria-labelledby': 'basic-button'
      }} {...args}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </>;
  }
}`,...(R=(O=f.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Se=["_Menu"];export{f as _Menu,Se as __namedExportsOrder,Le as default};
//# sourceMappingURL=Menu.stories-ce26827b.js.map
