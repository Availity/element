import{j as s}from"./jsx-runtime-91a467a5.js";import{r as a}from"./index-8db94870.js";import{a as m}from"./Tab-3664575d.js";const c=a.createContext(null);function f(){const[e,t]=a.useState(null);return a.useEffect(()=>{t(`mui-p-${Math.round(Math.random()*1e5)}`)},[]),e}function h(e){const{children:t,value:n}=e,l=f(),i=a.useMemo(()=>({idPrefix:l,value:n}),[l,n]);return s(c.Provider,{value:i,children:t})}function b(){return a.useContext(c)}function y(e,t){const{idPrefix:n}=e;return n===null?null:`${e.idPrefix}-P-${t}`}function v(e,t){const{idPrefix:n}=e;return n===null?null:`${e.idPrefix}-T-${t}`}const T=a.forwardRef(function(t,n){const{children:l,...i}=t,o=b();if(o===null)throw new TypeError("No TabContext provided");const p=a.Children.map(l,r=>a.isValidElement(r)?a.cloneElement(r,{"aria-controls":y(o,r.props.value),id:v(o,r.props.value)}):null);return s(m,{...i,ref:n,value:o.value,children:p})}),g=T,u=({children:e,...t})=>s(h,{...t,children:e});try{u.displayName="TabContext",u.__docgenInfo={description:"",displayName:"TabContext",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"The value of the currently selected `Tab`.",name:"value",required:!0,type:{name:"string"}}}}}catch{}const d=({children:e,...t})=>s(g,{...t,disableRipple:!0,disableTouchRipple:!0,orientation:"horizontal",centered:!1,children:e});try{d.displayName="TabList",d.__docgenInfo={description:"",displayName:"TabList",props:{children:{defaultValue:null,description:"A list of `<Tab />` elements.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TabsClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},"aria-label":{defaultValue:null,description:"The label for the Tabs as a string.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"An id or list of ids separated by a space that label the Tabs.",name:"aria-labelledby",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`Callback fired when the value changes.
@param event The event source of the callback. **Warning**: This is a generic event not a change event.
@param value We default to the index of the child (number)`,name:"onChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, value: any) => void"}},action:{defaultValue:null,description:"Callback fired when the component mounts.\nThis is useful when you want to trigger an action programmatically.\nIt supports two actions: `updateIndicator()` and `updateScrollButtons()`\n@param actions This object contains all possible actions\nthat can be triggered programmatically.",name:"action",required:!1,type:{name:"Ref<TabsActions>"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'standard'"},description:"Determines additional display behavior of the tabs:\n\n- `scrollable` will invoke scrolling properties and allow for horizontally\nscrolling (or swiping) of the tab bar.\n-`fullWidth` will make the tabs grow to use all the available space,\nwhich should be used for small views, like on mobile.\n- `standard` will render the default state.",name:"variant",required:!1,type:{name:'"standard" | "fullWidth" | "scrollable"'}},slotProps:{defaultValue:{value:"{}"},description:`The extra props for the slot components.
You can override the existing props or add new ones.`,name:"slotProps",required:!1,type:{name:'{ startScrollButtonIcon?: SlotComponentProps<OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; }, TabsStartScrollButtonIconSlotPropsOverrides, TabsOwnerState>; endScrollButtonIcon?: SlotComponentProps<...>; }'}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"{ StartScrollButtonIcon?: ElementType<any>; EndScrollButtonIcon?: ElementType<any>; }"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},allowScrollButtonsMobile:{defaultValue:{value:"false"},description:"If `true`, the scroll buttons aren't forced hidden on mobile.\nBy default the scroll buttons are hidden on mobile and takes precedence over `scrollButtons`.",name:"allowScrollButtonsMobile",required:!1,type:{name:"boolean"}},indicatorColor:{defaultValue:{value:"'primary'"},description:"Determines the color of the indicator.",name:"indicatorColor",required:!1,type:{name:'"primary" | "secondary"'}},ScrollButtonComponent:{defaultValue:{value:"TabScrollButton"},description:"The component used to render the scroll buttons.",name:"ScrollButtonComponent",required:!1,type:{name:"ElementType<any>"}},scrollButtons:{defaultValue:{value:"'auto'"},description:"Determine behavior of scroll buttons when tabs are set to scroll:\n\n- `auto` will only present them when not all the items are visible.\n- `true` will always present them.\n- `false` will never present them.\n\nBy default the scroll buttons are hidden on mobile.\nThis behavior can be disabled with `allowScrollButtonsMobile`.",name:"scrollButtons",required:!1,type:{name:'boolean | "auto"'}},selectionFollowsFocus:{defaultValue:null,description:"If `true` the selected tab changes on focus. Otherwise it only\nchanges on activation.",name:"selectionFollowsFocus",required:!1,type:{name:"boolean"}},TabIndicatorProps:{defaultValue:{value:"{}"},description:"Props applied to the tab indicator element.",name:"TabIndicatorProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> & { sx?: SxProps<Theme>; }"}},TabScrollButtonProps:{defaultValue:{value:"{}"},description:"Props applied to the [`TabScrollButton`](/material-ui/api/tab-scroll-button/) element.",name:"TabScrollButtonProps",required:!1,type:{name:"Partial<TabScrollButtonProps>"}},textColor:{defaultValue:{value:"'primary'"},description:"Determines the color of the `Tab`.",name:"textColor",required:!1,type:{name:'"inherit" | "primary" | "secondary"'}},visibleScrollbar:{defaultValue:{value:"false"},description:"If `true`, the scrollbar is visible. It can be useful when displaying\na long vertical list of tabs.",name:"visibleScrollbar",required:!1,type:{name:"boolean"}}}}}catch{}export{u as T,d as a,v as b,y as g,b as u};
//# sourceMappingURL=TabList-af67acdf.js.map
