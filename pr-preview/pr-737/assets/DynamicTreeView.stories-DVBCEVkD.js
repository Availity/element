import{j as a}from"./jsx-runtime-BTJTZTIL.js";import{T as pe}from"./index-DSF7aQ5o.js";import{d as mt,f as pt,h as ut,i as ft,j as bt,k as ht,o as te,u as Oe,q as me,r as gt,s as It,c as yt,l as Me,t as Tt,v as xt,w as vt,g as wt,x as Ct,y as Ve,z as V,m as Vt,n as St,T as Et}from"./TreeItem-Be-Efje1.js";import{_ as o,a as X}from"./identifier-CudAVvBZ.js";import{r as S}from"./index-BgYLq7fD.js";import{g as kt,c as $e}from"./generateUtilityClass-BeVSWKCg.js";import{g as Rt}from"./generateUtilityClasses-whvyra8-.js";import{_ as q}from"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import{C as Dt}from"./Checkbox-DDZWJ_7e.js";import{u as Se}from"./useForkRef-Dz4aGlyk.js";import{u as L}from"./useSlotProps-BmqT0tgx.js";import{r as _,e as Ee}from"./resolveComponentProps-CCNxqvxI.js";import{s as ae,c as Be,b as Ae}from"./styled-CKuRQFSa.js";import{C as Pt}from"./Collapse-CiPJcNM-.js";import"./index-ChsGqxH_.js";import"./Typography-COSof5sR.js";import"./index-DfraP8LW.js";import"./extendSxProp-BY7TjwKM.js";import"./DefaultPropsProvider-CWkNlXkE.js";import"./useTheme-Ib01SJ3a.js";import"./emotion-react.browser.esm-v7Jm8XFw.js";import"./memoTheme-CpoNRPWX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./EventManager-Cp9YrV-m.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./ownerDocument-DW-IO8s5.js";import"./index-DyJdRKzS.js";import"./index-DcwHbAK-.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./SvgIcon-CiBNlF9H.js";import"./useThemeProps-BGrMtKaW.js";import"./useThemeProps-Do5o_sjG.js";import"./index-BPy8VV6B.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-Chjiymov.js";import"./createSvgIcon-BWWwXn7v.js";import"./SwitchBase-CYtmyT40.js";import"./useFormControl-t_-EwZHM.js";import"./useControlled-DxC1uCGX.js";import"./ButtonBase-D97P5WV0.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./isFocusVisible-B8k4qzLc.js";import"./useTheme-Cx1wRXKO.js";import"./utils-tFrEP9Vf.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";function jt(e){return kt("MuiRichTreeView",e)}Rt("MuiRichTreeView",["root"]);const _t=[mt,pt,ut,ft,bt,ht,te];function Ne(e){const{instance:t,items:{onItemClick:d},selection:{multiSelect:n,checkboxSelection:c,disableSelection:u},expansion:{expansionTrigger:f}}=Oe(),b=t.isItemExpandable(e),h=t.isItemExpanded(e),g=t.isItemFocused(e),I=t.isItemSelected(e),m=t.isItemDisabled(e),C=t!=null&&t.isItemBeingEdited?t==null?void 0:t.isItemBeingEdited(e):!1,k=t.isItemEditable?t.isItemEditable(e):!1,O=i=>{if(!m){g||t.focusItem(i,e);const w=n&&(i.shiftKey||i.ctrlKey||i.metaKey);b&&!(w&&t.isItemExpanded(e))&&t.toggleItemExpansion(i,e)}},s=i=>{m||(g||t.focusItem(i,e),n&&(i.shiftKey||i.ctrlKey||i.metaKey)?i.shiftKey?t.expandSelectionRange(i,e):t.selectItem({event:i,itemId:e,keepExistingSelection:!0}):t.selectItem({event:i,itemId:e,shouldBeSelected:!0}))},l=i=>{if(u||m)return;const w=i.nativeEvent.shiftKey;n&&w?t.expandSelectionRange(i,e):t.selectItem({event:i,itemId:e,keepExistingSelection:n,shouldBeSelected:i.target.checked})},D=i=>{(i.shiftKey||i.ctrlKey||i.metaKey||m)&&i.preventDefault()},v=()=>{me(t,te)&&t.isItemEditable(e)&&(t.isItemBeingEdited(e)?t.setEditedItemId(null):t.setEditedItemId(e))};return{disabled:m,expanded:h,selected:I,focused:g,editable:k,editing:C,disableSelection:u,checkboxSelection:c,handleExpansion:O,handleSelection:s,handleCheckboxSelection:l,handleContentClick:d,preventSelection:D,expansionTrigger:f,toggleItemEditing:v,handleSaveItemLabel:(i,w)=>{me(t,te)&&t.isItemBeingEditedRef(e)&&(t.updateItemLabel(e,w),v(),t.focusItem(i,e))},handleCancelItemLabelEditing:i=>{me(t,te)&&t.isItemBeingEditedRef(e)&&(v(),t.focusItem(i,e))}}}const qt=["classes","className","displayIcon","expansionIcon","icon","label","itemId","onClick","onMouseDown","dragAndDropOverlayProps","labelInputProps"],Ke=S.forwardRef(function(t,d){const{classes:n,className:c,displayIcon:u,expansionIcon:f,icon:b,label:h,itemId:g,onClick:I,onMouseDown:m,dragAndDropOverlayProps:C,labelInputProps:k}=t,O=q(t,qt),{disabled:s,expanded:l,selected:D,focused:v,editing:y,editable:M,disableSelection:i,checkboxSelection:w,handleExpansion:ne,handleSelection:$,handleCheckboxSelection:B,handleContentClick:E,preventSelection:R,expansionTrigger:K,toggleItemEditing:U}=Ne(g),P=b||f||u,W=S.useRef(null),ie=T=>{R(T),m&&m(T)},re=T=>{var H;E==null||E(T,g),!((H=W.current)!=null&&H.contains(T.target))&&(K==="content"&&ne(T),w||$(T),I&&I(T))},oe=T=>{T.defaultMuiPrevented||U()};return a.jsxs("div",o({},O,{className:$e(n.root,c,l&&n.expanded,D&&n.selected,v&&n.focused,s&&n.disabled,y&&n.editing,M&&n.editable),onClick:re,onMouseDown:ie,ref:d,children:[a.jsx("div",{className:n.iconContainer,children:P}),w&&a.jsx(Dt,{className:n.checkbox,checked:D,onChange:B,disabled:s||i,ref:W,tabIndex:-1}),y?a.jsx(gt,o({},k,{className:n.labelInput})):a.jsx("div",o({className:n.label},M&&{onDoubleClick:oe},{children:h})),C&&a.jsx(It,o({},C))]}))}),Lt=["children","className","slots","slotProps","ContentComponent","ContentProps","itemId","id","label","onClick","onMouseDown","onFocus","onBlur","onKeyDown"],Ft=["ownerState"],Ot=["ownerState"],Mt=["ownerState"],$t=Me(),Bt=e=>{const{classes:t}=e;return Be({root:["root"],content:["content"],expanded:["expanded"],selected:["selected"],focused:["focused"],disabled:["disabled"],iconContainer:["iconContainer"],checkbox:["checkbox"],label:["label"],labelInput:["labelInput"],editing:["editing"],editable:["editable"],groupTransition:["groupTransition"]},Ct,t)},At=ae("li",{name:"MuiTreeItem",slot:"Root",overridesResolver:(e,t)=>t.root})({listStyle:"none",margin:0,padding:0,outline:0}),Nt=ae(Ke,{name:"MuiTreeItem",slot:"Content",overridesResolver:(e,t)=>[t.content,t.iconContainer&&{[`& .${V.iconContainer}`]:t.iconContainer},t.label&&{[`& .${V.label}`]:t.label}],shouldForwardProp:e=>Ae(e)&&e!=="indentationAtItemLevel"})(({theme:e})=>({padding:e.spacing(.5,1),borderRadius:e.shape.borderRadius,width:"100%",boxSizing:"border-box",position:"relative",display:"flex",alignItems:"center",gap:e.spacing(1),cursor:"pointer",WebkitTapHighlightColor:"transparent","&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${V.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,backgroundColor:"transparent"},[`&.${V.focused}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${V.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:X(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:X(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:X(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${V.focused}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:X(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`& .${V.iconContainer}`]:{width:16,display:"flex",flexShrink:0,justifyContent:"center","& svg":{fontSize:18}},[`& .${V.label}`]:o({width:"100%",boxSizing:"border-box",minWidth:0,position:"relative"},e.typography.body1),[`& .${V.checkbox}`]:{padding:0},variants:[{props:{indentationAtItemLevel:!0},style:{paddingLeft:`calc(${e.spacing(1)} + var(--TreeView-itemChildrenIndentation) * var(--TreeView-itemDepth))`}}]})),Kt=ae(Pt,{name:"MuiTreeItem",slot:"GroupTransition",overridesResolver:(e,t)=>t.groupTransition,shouldForwardProp:e=>Ae(e)&&e!=="indentationAtItemLevel"})({margin:0,padding:0,paddingLeft:"var(--TreeView-itemChildrenIndentation)",variants:[{props:{indentationAtItemLevel:!0},style:{paddingLeft:0}}]}),Ut=S.forwardRef(function(t,d){var ye,Te,xe,ve;const{icons:n,runItemPlugins:c,items:{disabledItemsFocusable:u,indentationAtItemLevel:f},selection:{disableSelection:b},expansion:{expansionTrigger:h},treeId:g,instance:I}=Oe(),m=S.useContext(yt),C=$t({props:t,name:"MuiTreeItem"}),{children:k,className:O,slots:s,slotProps:l,ContentComponent:D=Ke,ContentProps:v,itemId:y,id:M,label:i,onClick:w,onMouseDown:ne,onBlur:$,onKeyDown:B}=C,E=q(C,Lt),{expanded:R,focused:K,selected:U,disabled:P,editing:W,handleExpansion:ie,handleCancelItemLabelEditing:re,handleSaveItemLabel:oe}=Ne(y),{contentRef:T,rootRef:H,propsEnhancers:x}=c(C),z=S.useRef(null),fe=S.useRef(null),We=Se(d,H,z),He=Se(v==null?void 0:v.ref,T,fe),A={expandIcon:(s==null?void 0:s.expandIcon)??n.slots.expandIcon??xt,collapseIcon:(s==null?void 0:s.collapseIcon)??n.slots.collapseIcon??Tt,endIcon:(s==null?void 0:s.endIcon)??n.slots.endIcon,icon:s==null?void 0:s.icon,groupTransition:s==null?void 0:s.groupTransition},be=r=>Array.isArray(r)?r.length>0&&r.some(be):!!r,G=be(k),se=o({},C,{expanded:R,focused:K,selected:U,disabled:P,indentationAtItemLevel:f}),p=Bt(se),he=A.groupTransition??void 0,ze=L({elementType:he,ownerState:{},externalSlotProps:l==null?void 0:l.groupTransition,additionalProps:o({unmountOnExit:!0,in:R,component:"ul",role:"group"},f?{indentationAtItemLevel:!0}:{}),className:p.groupTransition}),Ge=r=>{h==="iconContainer"&&ie(r)},le=R?A.collapseIcon:A.expandIcon,Je=L({elementType:le,ownerState:{},externalSlotProps:r=>R?o({},_(n.slotProps.collapseIcon,r),_(l==null?void 0:l.collapseIcon,r)):o({},_(n.slotProps.expandIcon,r),_(l==null?void 0:l.expandIcon,r)),additionalProps:{onClick:Ge}}),Qe=q(Je,Ft),Xe=G&&le?a.jsx(le,o({},Qe)):null,de=G?void 0:A.endIcon,Ye=L({elementType:de,ownerState:{},externalSlotProps:r=>G?{}:o({},_(n.slotProps.endIcon,r),_(l==null?void 0:l.endIcon,r))}),Ze=q(Ye,Ot),et=de?a.jsx(de,o({},Ze)):null,ce=A.icon,tt=L({elementType:ce,ownerState:{},externalSlotProps:l==null?void 0:l.icon}),at=q(tt,Mt),nt=ce?a.jsx(ce,o({},at)):null;let J;U?J=!0:b||P?J=void 0:J=!1;function it(r){!K&&(!P||u)&&r.currentTarget===r.target&&I.focusItem(r,y)}function rt(r){var j,N,we,Ce;$==null||$(r),!(W||r.relatedTarget&&Ve(r.relatedTarget,z.current)&&(r.target&&((N=(j=r.target)==null?void 0:j.dataset)==null?void 0:N.element)==="labelInput"&&Ve(r.target,z.current)||((Ce=(we=r.relatedTarget)==null?void 0:we.dataset)==null?void 0:Ce.element)==="labelInput"))&&I.removeFocusedItem()}const ot=r=>{var j,N;B==null||B(r),((N=(j=r.target)==null?void 0:j.dataset)==null?void 0:N.element)!=="labelInput"&&I.handleItemKeyDown(r,y)},st=wt({itemId:y,treeId:g,id:M}),lt=I.canItemBeTabbed(y)?0:-1,Q={rootRefObject:z,contentRefObject:fe,interactions:{handleSaveItemLabel:oe,handleCancelItemLabelEditing:re}},dt=((ye=x.root)==null?void 0:ye.call(x,o({},Q,{externalEventHandlers:Ee(E)})))??{},ct=((Te=x.content)==null?void 0:Te.call(x,o({},Q,{externalEventHandlers:Ee(v)})))??{},ge=((xe=x.dragAndDropOverlay)==null?void 0:xe.call(x,o({},Q,{externalEventHandlers:{}})))??{},Ie=((ve=x.labelInput)==null?void 0:ve.call(x,o({},Q,{externalEventHandlers:{}})))??{};return a.jsx(vt,{itemId:y,children:a.jsxs(At,o({className:$e(p.root,O),role:"treeitem","aria-expanded":G?R:void 0,"aria-selected":J,"aria-disabled":P||void 0,id:st,tabIndex:lt},E,{ownerState:se,onFocus:it,onBlur:rt,onKeyDown:ot,ref:We,style:f?o({},E.style,{"--TreeView-itemDepth":typeof m=="function"?m(y):m}):E.style},dt,{children:[a.jsx(Nt,o({as:D,classes:{root:p.content,expanded:p.expanded,selected:p.selected,focused:p.focused,disabled:p.disabled,editable:p.editable,editing:p.editing,iconContainer:p.iconContainer,label:p.label,labelInput:p.labelInput,checkbox:p.checkbox},label:i,itemId:y,onClick:w,onMouseDown:ne,icon:nt,expansionIcon:Xe,displayIcon:et,ownerState:se},v,ct,ge.action==null?{}:{dragAndDropOverlayProps:ge},Ie.value==null?{}:{labelInputProps:Ie},{ref:He})),k&&a.jsx(Kt,o({as:he},ze,{children:k}))]}))})}),Wt=["ownerState"];function Ht({slots:e,slotProps:t,label:d,id:n,itemId:c,itemsToRender:u}){const f=(e==null?void 0:e.item)??Ut,b=L({elementType:f,externalSlotProps:t==null?void 0:t.item,additionalProps:{itemId:c,id:n,label:d},ownerState:{itemId:c,label:d}}),h=q(b,Wt),g=S.useMemo(()=>u?a.jsx(Ue,{itemsToRender:u,slots:e,slotProps:t}):null,[u,e,t]);return a.jsx(f,o({},h,{children:g}))}function Ue(e){const{itemsToRender:t,slots:d,slotProps:n}=e;return a.jsx(S.Fragment,{children:t.map(c=>a.jsx(Ht,{slots:d,slotProps:n,label:c.label,id:c.id,itemId:c.itemId,itemsToRender:c.children},c.itemId))})}const zt=Me(),Gt=e=>{const{classes:t}=e;return Be({root:["root"]},jt,t)},Jt=ae("ul",{name:"MuiRichTreeView",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:0,margin:0,listStyle:"none",outline:0,position:"relative"}),Qt=S.forwardRef(function(t,d){const n=zt({props:t,name:"MuiRichTreeView"}),{getRootProps:c,contextValue:u,instance:f}=Vt({plugins:_t,rootRef:d,props:n}),{slots:b,slotProps:h}=n,g=Gt(n),I=(b==null?void 0:b.root)??Jt,m=L({elementType:I,externalSlotProps:h==null?void 0:h.root,className:g.root,getSlotProps:c,ownerState:n});return a.jsx(St,{value:u,children:a.jsx(I,o({},m,{children:a.jsx(Ue,{slots:b,slotProps:h,itemsToRender:f.getItemsToRender()})}))})}),F=({children:e,slots:t,...d})=>a.jsx(Qt,{...d,slots:{...t,item:Et},children:e});try{F.displayName="DynamicTreeView",F.__docgenInfo={description:"",displayName:"DynamicTreeView",props:{slots:{defaultValue:{value:"{}"},description:"Overridable component slots.",name:"slots",required:!1,type:{name:"RichTreeViewSlots"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each component slot.",name:"slotProps",required:!1,type:{name:"RichTreeViewSlotProps<TreeViewBaseItem, true>"}},apiRef:{defaultValue:null,description:"The ref object that allows Tree View manipulation. Can be instantiated with `useTreeViewApiRef()`.",name:"apiRef",required:!1,type:{name:"RichTreeViewApiRef"}},experimentalFeatures:{defaultValue:null,description:"Unstable features, breaking changes might be introduced.\nFor each feature, if the flag is not explicitly set to `true`,\nthe feature will be fully disabled and any property / method call will not have any effect.",name:"experimentalFeatures",required:!1,type:{name:"{ indentationAtItemLevel?: boolean; } & { labelEditing?: boolean; }"}},id:{defaultValue:null,description:`This prop is used to help implement the accessibility logic.
If you don't provide this prop. It falls back to a randomly generated id.`,name:"id",required:!1,type:{name:"string"}},disabledItemsFocusable:{defaultValue:{value:"false"},description:"If `true`, will allow focus on disabled items.",name:"disabledItemsFocusable",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"readonly TreeViewBaseItem[]"}},isItemDisabled:{defaultValue:null,description:`Used to determine if a given item should be disabled.
@template R
@param item The item to check.
@returns \`true\` if the item should be disabled.`,name:"isItemDisabled",required:!1,type:{name:"(item: TreeViewBaseItem) => boolean"}},getItemLabel:{defaultValue:{value:"(item) => item.label"},description:`Used to determine the string label for a given item.
@template R
@param item The item to check.
@returns The label of the item.`,name:"getItemLabel",required:!1,type:{name:"(item: TreeViewBaseItem) => string"}},getItemId:{defaultValue:{value:"(item) => item.id"},description:`Used to determine the id of a given item.
@template R
@param item The item to check.
@returns The id of the item.`,name:"getItemId",required:!1,type:{name:"(item: TreeViewBaseItem) => string"}},onItemClick:{defaultValue:null,description:"Callback fired when the `content` slot of a given Tree Item is clicked.\n@param event The DOM event that triggered the change.\n@param itemId The id of the focused item.",name:"onItemClick",required:!1,type:{name:"(event: MouseEvent<Element, MouseEvent>, itemId: string) => void"}},itemChildrenIndentation:{defaultValue:{value:"12px"},description:`Horizontal indentation between an item and its children.
Examples: 24, "24px", "2rem", "2em".`,name:"itemChildrenIndentation",required:!1,type:{name:"string | number"}},expandedItems:{defaultValue:null,description:`Expanded item ids.
Used when the item's expansion is controlled.`,name:"expandedItems",required:!1,type:{name:"string[]"}},defaultExpandedItems:{defaultValue:{value:"[]"},description:`Expanded item ids.
Used when the item's expansion is not controlled.`,name:"defaultExpandedItems",required:!1,type:{name:"string[]"}},onExpandedItemsChange:{defaultValue:null,description:`Callback fired when Tree Items are expanded/collapsed.
@param event The DOM event that triggered the change.
@param itemIds The ids of the expanded items.`,name:"onExpandedItemsChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, itemIds: string[]) => void"}},onItemExpansionToggle:{defaultValue:null,description:"Callback fired when a Tree Item is expanded or collapsed.\n@param event The DOM event that triggered the change.\n@param itemId The itemId of the modified item.\n@param isExpanded `true` if the item has just been expanded, `false` if it has just been collapsed.",name:"onItemExpansionToggle",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, itemId: string, isExpanded: boolean) => void"}},expansionTrigger:{defaultValue:{value:"'content'"},description:"The slot that triggers the item's expansion when clicked.",name:"expansionTrigger",required:!1,type:{name:'"content" | "iconContainer"'}},onItemFocus:{defaultValue:null,description:`Callback fired when a given Tree Item is focused.
@param event The DOM event that triggered the change. **Warning**: This is a generic event not a focus event.
@param itemId The id of the focused item.`,name:"onItemFocus",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, itemId: string) => void"}},disableSelection:{defaultValue:{value:"false"},description:"If `true` selection is disabled.",name:"disableSelection",required:!1,type:{name:"boolean"}},defaultSelectedItems:{defaultValue:{value:"[]"},description:"Selected item ids. (Uncontrolled)\nWhen `multiSelect` is true this takes an array of strings; when false (default) a string.",name:"defaultSelectedItems",required:!1,type:{name:"string[]"}},selectedItems:{defaultValue:null,description:"Selected item ids. (Controlled)\nWhen `multiSelect` is true this takes an array of strings; when false (default) a string.",name:"selectedItems",required:!1,type:{name:"string[]"}},multiSelect:{defaultValue:{value:"false"},description:"If `true`, `ctrl` and `shift` will trigger multiselect.",name:"multiSelect",required:!1,type:{name:"true"}},checkboxSelection:{defaultValue:{value:"false"},description:"If `true`, the Tree View renders a checkbox at the left of its label that allows selecting it.",name:"checkboxSelection",required:!1,type:{name:"boolean"}},onSelectedItemsChange:{defaultValue:null,description:"Callback fired when Tree Items are selected/deselected.\n@param event The DOM event that triggered the change.\n@param itemIds The ids of the selected items.\nWhen `multiSelect` is `true`, this is an array of strings; when false (default) a string.",name:"onSelectedItemsChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, itemIds: string[]) => void"}},onItemSelectionToggle:{defaultValue:null,description:"Callback fired when a Tree Item is selected or deselected.\n@param event The DOM event that triggered the change.\n@param itemId The itemId of the modified item.\n@param isSelected `true` if the item has just been selected, `false` if it has just been deselected.",name:"onItemSelectionToggle",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, itemId: string, isSelected: boolean) => void"}},onItemLabelChange:{defaultValue:null,description:`Callback fired when the label of an item changes.
@param itemId The id of the item that was edited.
@param newLabel The new label of the items.`,name:"onItemLabelChange",required:!1,type:{name:"(itemId: string, newLabel: string) => void"}},isItemEditable:{defaultValue:null,description:"Determines if a given item is editable or not.\nMake sure to also enable the `labelEditing` experimental feature:\n`<RichTreeViewPro experimentalFeatures={{ labelEditing: true }}  />`.\nBy default, the items are not editable.\n@template R\n@param item The item to check.\n@returns `true` if the item is editable.",name:"isItemEditable",required:!1,type:{name:"boolean | ((item: TreeViewBaseItem) => boolean)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<RichTreeViewClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}}}catch{}const Ha={title:"Components/TreeView/DynamicTreeView",component:F,tags:["autodocs"],parameters:{docs:{description:{component:"The `DynamicTreeView` receives its items via an `items` prop, making it easier\nto dynamically load them from an external source. Furthermore,\n`DynamicTreeView` includes the ability to make the `TreeItem`'s editable."}}}},ue=[{id:"tree-1",label:"Tree 1",children:[{id:"sub-tree-1.1",label:"Sub Tree 1.1",children:[{id:"sub-tree-1.1.1",label:"Sub Tree 1.1.1"}]},{id:"sub-tree-1.2",label:"Sub Tree 1.2"},{id:"sub-tree-1.3",label:"Sub Tree 1.3"}]},{id:"tree-2",label:"Tree 2",children:[{id:"sub-tree-2.1",label:"Sub Tree 2.1"},{id:"sub-tree-2.2",label:"Sub Tree 2.2"}]},{id:"tree-3",label:"Tree 3",children:[{id:"sub-tree-3.1",label:"Sub Tree 3.1"}]},{id:"tree-4",label:"Tree 4",children:[{id:"sub-tree-4.1",label:"Sub Tree 4.1"}]}],Y={render:e=>a.jsxs(a.Fragment,{children:[a.jsx(pe,{variant:"h1",children:"Selectable Dynamic Tree",id:"dynamic-tree"}),a.jsx(F,{...e})]}),args:{items:ue,"aria-labelledby":"dynamic-tree"}},Z={render:e=>a.jsxs(a.Fragment,{children:[a.jsx(pe,{variant:"h1",children:"Selectable Dynamic Tree",id:"dynamic-tree-selectable"}),a.jsx(F,{...e})]}),args:{items:ue,checkboxSelection:!0,"aria-labelledby":"dynamic-tree-selectable"}},ee={render:e=>a.jsxs(a.Fragment,{children:[a.jsx(pe,{variant:"h1",children:"Editable Dynamic Tree",id:"dynamic-tree-editable"}),a.jsx(F,{...e})]}),args:{items:ue,isItemEditable:!0,experimentalFeatures:{labelEditing:!0},"aria-labelledby":"dynamic-tree-editable"}};var ke,Re,De;Y.parameters={...Y.parameters,docs:{...(ke=Y.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: (args: DynamicTreeViewProps) => <>
      <Typography variant="h1" children="Selectable Dynamic Tree" id="dynamic-tree" />
      <DynamicTreeView {...args} />
    </>,
  args: {
    items,
    'aria-labelledby': 'dynamic-tree'
  }
}`,...(De=(Re=Y.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};var Pe,je,_e;Z.parameters={...Z.parameters,docs:{...(Pe=Z.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: (args: DynamicTreeViewProps) => <>
      <Typography variant="h1" children="Selectable Dynamic Tree" id="dynamic-tree-selectable" />
      <DynamicTreeView {...args} />
    </>,
  args: {
    items,
    checkboxSelection: true,
    'aria-labelledby': 'dynamic-tree-selectable'
  }
}`,...(_e=(je=Z.parameters)==null?void 0:je.docs)==null?void 0:_e.source}}};var qe,Le,Fe;ee.parameters={...ee.parameters,docs:{...(qe=ee.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: (args: DynamicTreeViewProps) => <>
      <Typography variant="h1" children="Editable Dynamic Tree" id="dynamic-tree-editable" />
      <DynamicTreeView {...args} />
    </>,
  args: {
    items,
    isItemEditable: true,
    experimentalFeatures: {
      labelEditing: true
    },
    'aria-labelledby': 'dynamic-tree-editable'
  }
}`,...(Fe=(Le=ee.parameters)==null?void 0:Le.docs)==null?void 0:Fe.source}}};const za=["_DynamicTreeView","_DynamicTreeViewCheckbox","_DynamicTreeViewEditable"];export{Y as _DynamicTreeView,Z as _DynamicTreeViewCheckbox,ee as _DynamicTreeViewEditable,za as __namedExportsOrder,Ha as default};
