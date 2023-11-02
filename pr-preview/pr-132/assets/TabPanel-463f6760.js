import{j as i}from"./jsx-runtime-390e5fc8.js";import{a as b,_ as c}from"./extends-90dea224.js";import{r as n}from"./index-570b25c1.js";import{M as S}from"./Tab-7b45e7e1.js";import{c as C}from"./clsx-8416b751.js";import{g as q,s as V,c as _}from"./styled-78cd751f.js";import{g as B}from"./generateUtilityClasses-2915a045.js";import{u as I}from"./useThemeProps-285a8f6c.js";const y=n.createContext(null);function M(){const[e,t]=n.useState(null);return n.useEffect(()=>{t(`mui-p-${Math.round(Math.random()*1e5)}`)},[]),e}function N(e){const{children:t,value:a}=e,l=M(),u=n.useMemo(()=>({idPrefix:l,value:a}),[l,a]);return i(y.Provider,{value:u,children:t})}function T(){return n.useContext(y)}function v(e,t){const{idPrefix:a}=e;return a===null?null:`${e.idPrefix}-P-${t}`}function g(e,t){const{idPrefix:a}=e;return a===null?null:`${e.idPrefix}-T-${t}`}const E=["children"],R=n.forwardRef(function(t,a){const{children:l}=t,u=b(t,E),o=T();if(o===null)throw new TypeError("No TabContext provided");const r=n.Children.map(l,s=>n.isValidElement(s)?n.cloneElement(s,{"aria-controls":v(o,s.props.value),id:g(o,s.props.value)}):null);return i(S,c({},u,{ref:a,value:o.value,children:r}))}),L=R;function $(e){return q("MuiTabPanel",e)}B("MuiTabPanel",["root"]);const k=["children","className","value"],D=e=>{const{classes:t}=e;return _({root:["root"]},$,t)},O=V("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({padding:e.spacing(3)})),U=n.forwardRef(function(t,a){const l=I({props:t,name:"MuiTabPanel"}),{children:u,className:o,value:r}=l,s=b(l,k),p=c({},l),P=D(p),d=T();if(d===null)throw new TypeError("No TabContext provided");const w=v(d,r),x=g(d,r);return i(O,c({"aria-labelledby":x,className:C(P.root,o),hidden:r!==d.value,id:w,ref:a,role:"tabpanel",ownerState:p},s,{children:r===d.value&&u}))}),W=U,m=({children:e,...t})=>i(N,{...t,children:e});try{m.displayName="TabContext",m.__docgenInfo={description:"",displayName:"TabContext",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"The value of the currently selected `Tab`.",name:"value",required:!0,type:{name:"string"}}}}}catch{}const f=({children:e,...t})=>i(L,{...t,orientation:"horizontal",centered:!1,children:e});try{f.displayName="TabList",f.__docgenInfo={description:"",displayName:"TabList",props:{children:{defaultValue:null,description:"A list of `<Tab />` elements.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TabsClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},"aria-label":{defaultValue:null,description:"The label for the Tabs as a string.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"An id or list of ids separated by a space that label the Tabs.",name:"aria-labelledby",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`Callback fired when the value changes.
@param event The event source of the callback. **Warning**: This is a generic event not a change event.
@param value We default to the index of the child (number)`,name:"onChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, value: any) => void"}},action:{defaultValue:null,description:"Callback fired when the component mounts.\nThis is useful when you want to trigger an action programmatically.\nIt supports two actions: `updateIndicator()` and `updateScrollButtons()`\n@param actions This object contains all possible actions\nthat can be triggered programmatically.",name:"action",required:!1,type:{name:"Ref<TabsActions>"}},variant:{defaultValue:{value:"'standard'"},description:"Determines additional display behavior of the tabs:\n\n- `scrollable` will invoke scrolling properties and allow for horizontally\nscrolling (or swiping) of the tab bar.\n- `fullWidth` will make the tabs grow to use all the available space,\nwhich should be used for small views, like on mobile.\n- `standard` will render the default state.",name:"variant",required:!1,type:{name:'"standard" | "fullWidth" | "scrollable"'}},slotProps:{defaultValue:{value:"{}"},description:`The extra props for the slot components.
You can override the existing props or add new ones.`,name:"slotProps",required:!1,type:{name:'{ startScrollButtonIcon?: SlotComponentProps<OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; }, TabsStartScrollButtonIconSlotPropsOverrides, TabsOwnerState>; endScrollButtonIcon?: SlotComponentProps<...>; }'}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"{ StartScrollButtonIcon?: ElementType<any>; EndScrollButtonIcon?: ElementType<any>; }"}},allowScrollButtonsMobile:{defaultValue:{value:"false"},description:"If `true`, the scroll buttons aren't forced hidden on mobile.\nBy default the scroll buttons are hidden on mobile and takes precedence over `scrollButtons`.",name:"allowScrollButtonsMobile",required:!1,type:{name:"boolean"}},indicatorColor:{defaultValue:{value:"'primary'"},description:"Determines the color of the indicator.",name:"indicatorColor",required:!1,type:{name:'"primary" | "secondary"'}},ScrollButtonComponent:{defaultValue:{value:"TabScrollButton"},description:"The component used to render the scroll buttons.",name:"ScrollButtonComponent",required:!1,type:{name:"ElementType<any>"}},scrollButtons:{defaultValue:{value:"'auto'"},description:"Determine behavior of scroll buttons when tabs are set to scroll:\n\n- `auto` will only present them when not all the items are visible.\n- `true` will always present them.\n- `false` will never present them.\n\nBy default the scroll buttons are hidden on mobile.\nThis behavior can be disabled with `allowScrollButtonsMobile`.",name:"scrollButtons",required:!1,type:{name:'boolean | "auto"'}},selectionFollowsFocus:{defaultValue:null,description:"If `true` the selected tab changes on focus. Otherwise it only\nchanges on activation.",name:"selectionFollowsFocus",required:!1,type:{name:"boolean"}},TabIndicatorProps:{defaultValue:{value:"{}"},description:"Props applied to the tab indicator element.",name:"TabIndicatorProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> & { sx?: SxProps<Theme>; }"}},TabScrollButtonProps:{defaultValue:{value:"{}"},description:"Props applied to the [`TabScrollButton`](/material-ui/api/tab-scroll-button/) element.",name:"TabScrollButtonProps",required:!1,type:{name:"Partial<TabScrollButtonProps>"}},textColor:{defaultValue:{value:"'primary'"},description:"Determines the color of the `Tab`.",name:"textColor",required:!1,type:{name:'"inherit" | "primary" | "secondary"'}},visibleScrollbar:{defaultValue:{value:"false"},description:"If `true`, the scrollbar is visible. It can be useful when displaying\na long vertical list of tabs.",name:"visibleScrollbar",required:!1,type:{name:"boolean"}}}}}catch{}const h=({children:e,...t})=>i(W,{...t,children:e});try{h.displayName="TabPanel",h.__docgenInfo={description:"",displayName:"TabPanel",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TabPanelClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},value:{defaultValue:null,description:"The `value` of the corresponding `Tab`. Must use the index of the `Tab` when\nno `value` was passed to `Tab`.",name:"value",required:!0,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}export{m as T,f as a,h as b};
//# sourceMappingURL=TabPanel-463f6760.js.map
