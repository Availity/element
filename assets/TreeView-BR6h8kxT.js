import{j as f}from"./jsx-runtime-BTJTZTIL.js";import{_ as o}from"./identifier-CudAVvBZ.js";import{r as m}from"./index-BgYLq7fD.js";import{u as b,g as C,e as R,p as k,b as P,a as j,c as v,d as _,f as A,h as O,i as F,j as U,k as X,l as D,m as N,n as J}from"./TreeItem-BbfAfu4u.js";import{g as W}from"./generateUtilityClass-BeVSWKCg.js";import{g as L}from"./generateUtilityClasses-whvyra8-.js";import{u as x}from"./useTimeout-iC_34LsC.js";import{u as $}from"./useForkRef-Dz4aGlyk.js";import{u as z}from"./useEnhancedEffect-j2zQLnYm.js";import{u as B}from"./useSlotProps-BmqT0tgx.js";import{s as G,c as H}from"./styled-CKuRQFSa.js";function K(t){return W("MuiSimpleTreeView",t)}L("MuiSimpleTreeView",["root"]);const E=m.createContext(null);function S(t){const{children:r,itemId:a=null}=t,{instance:l,treeId:c,rootRef:i}=b(),n=m.useRef(new Map);m.useEffect(()=>{if(!i.current)return;let e=null;if(a==null)e=i.current.id;else{const u=l.getItemMeta(a);u!==void 0&&(e=C({itemId:a,treeId:c,id:u.idAttribute}))}if(e==null)return;const d=l.getItemOrderedChildrenIds(a??null)??[],p=R(e),h=i.current.querySelectorAll(`${a==null?"":`*[id="${p}"] `}[role="treeitem"]:not(*[id="${p}"] [role="treeitem"] [role="treeitem"])`),I=Array.from(h).map(u=>n.current.get(u.id));(I.length!==d.length||I.some((u,w)=>u!==d[w]))&&l.setJSXItemsOrderedChildrenIds(a??null,I)});const s=m.useMemo(()=>({registerChild:(e,d)=>n.current.set(e,d),unregisterChild:e=>n.current.delete(e),parentId:a}),[a]);return f.jsx(E.Provider,{value:s,children:r})}const T=({instance:t,setState:r})=>{t.preventItemUpdates();const a=x(i=>(r(n=>{if(n.items.itemMetaMap[i.id]!=null)throw new Error(["MUI X: The Tree View component requires all items to have a unique `id` property.","Alternatively, you can use the `getItemId` prop to specify a custom id for each item.",`Two items were provided with the same id in the \`items\` prop: "${i.id}"`].join(`
`));return o({},n,{items:o({},n.items,{itemMetaMap:o({},n.items.itemMetaMap,{[i.id]:i}),itemMap:o({},n.items.itemMap,{[i.id]:{id:i.id,label:i.label}})})})}),()=>{r(n=>{const s=o({},n.items.itemMetaMap),e=o({},n.items.itemMap);return delete s[i.id],delete e[i.id],o({},n,{items:o({},n.items,{itemMetaMap:s,itemMap:e})})}),k(t,"removeItem",{id:i.id})})),l=(i,n)=>{const s=i??j;r(e=>o({},e,{items:o({},e.items,{itemOrderedChildrenIds:o({},e.items.itemOrderedChildrenIds,{[s]:n}),itemChildrenIndexes:o({},e.items.itemChildrenIndexes,{[s]:P(n)})})}))},c=x((i,n)=>(t.updateFirstCharMap(s=>(s[i]=n,s)),()=>{t.updateFirstCharMap(s=>{const e=o({},s);return delete e[i],e})}));return{instance:{insertJSXItem:a,setJSXItemsOrderedChildrenIds:l,mapFirstCharFromJSX:c}}},M=t=>Array.isArray(t)?t.length>0&&t.some(M):!!t,Y=({props:t,rootRef:r,contentRef:a})=>{const{instance:l,treeId:c}=b(),{children:i,disabled:n=!1,label:s,itemId:e,id:d}=t,p=m.useContext(E);if(p==null)throw new Error(["MUI X: Could not find the Tree View Children Item context.","It looks like you rendered your component outside of a SimpleTreeView parent component.","This can also happen if you are bundling multiple versions of the Tree View."].join(`
`));const{registerChild:h,unregisterChild:I,parentId:y}=p,u=M(i),w=m.useRef(null),q=$(w,a);return z(()=>{const g=C({itemId:e,treeId:c,id:d});return h(g,e),()=>{I(g)}},[h,I,e,d,c]),m.useEffect(()=>l.insertJSXItem({id:e,idAttribute:d,parentId:y,expandable:u,disabled:n}),[l,y,e,u,n,d]),m.useEffect(()=>{var g;if(s)return l.mapFirstCharFromJSX(e,(((g=w.current)==null?void 0:g.textContent)??"").substring(0,1).toLowerCase())},[l,e,s]),{contentRef:q,rootRef:r}};T.itemPlugin=Y;T.wrapItem=({children:t,itemId:r})=>{const a=m.useContext(v);return f.jsx(S,{itemId:r,children:f.jsx(v.Provider,{value:a+1,children:t})})};T.wrapRoot=({children:t})=>f.jsx(S,{children:f.jsx(v.Provider,{value:0,children:t})});T.params={};const Q=[_,A,O,F,U,X,T],Z=D(),ee=t=>{const{classes:r}=t;return H({root:["root"]},K,r)},te=G("ul",{name:"MuiSimpleTreeView",slot:"Root",overridesResolver:(t,r)=>r.root})({padding:0,margin:0,listStyle:"none",outline:0,position:"relative"}),ne=[],ie=m.forwardRef(function(r,a){const l=Z({props:r,name:"MuiSimpleTreeView"}),c=l,{getRootProps:i,contextValue:n}=N({plugins:Q,rootRef:a,props:o({},l,{items:ne})}),{slots:s,slotProps:e}=l,d=ee(l),p=(s==null?void 0:s.root)??te,h=B({elementType:p,externalSlotProps:e==null?void 0:e.root,className:d.root,getSlotProps:i,ownerState:c});return f.jsx(J,{value:n,children:f.jsx(p,o({},h))})}),V=({children:t,...r})=>f.jsx(ie,{...r,children:t});try{V.displayName="TreeView",V.__docgenInfo={description:"",displayName:"TreeView",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},slots:{defaultValue:null,description:"Overridable component slots.",name:"slots",required:!1,type:{name:"SimpleTreeViewSlots"}},slotProps:{defaultValue:null,description:"The props used for each component slot.",name:"slotProps",required:!1,type:{name:"SimpleTreeViewSlotProps"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<SimpleTreeViewClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},apiRef:{defaultValue:null,description:"The ref object that allows Tree View manipulation. Can be instantiated with `useTreeViewApiRef()`.",name:"apiRef",required:!1,type:{name:"SimpleTreeViewApiRef"}},experimentalFeatures:{defaultValue:null,description:"Unstable features, breaking changes might be introduced.\nFor each feature, if the flag is not explicitly set to `true`,\nthe feature will be fully disabled and any property / method call will not have any effect.",name:"experimentalFeatures",required:!1,type:{name:"{ indentationAtItemLevel?: boolean; }"}},id:{defaultValue:null,description:`This prop is used to help implement the accessibility logic.
If you don't provide this prop. It falls back to a randomly generated id.`,name:"id",required:!1,type:{name:"string"}},onItemClick:{defaultValue:null,description:"Callback fired when the `content` slot of a given Tree Item is clicked.\n@param event The DOM event that triggered the change.\n@param itemId The id of the focused item.",name:"onItemClick",required:!1,type:{name:"(event: MouseEvent<Element, MouseEvent>, itemId: string) => void"}},disabledItemsFocusable:{defaultValue:{value:"false"},description:"If `true`, will allow focus on disabled items.",name:"disabledItemsFocusable",required:!1,type:{name:"boolean"}},itemChildrenIndentation:{defaultValue:{value:"12px"},description:`Horizontal indentation between an item and its children.
Examples: 24, "24px", "2rem", "2em".`,name:"itemChildrenIndentation",required:!1,type:{name:"string | number"}},expandedItems:{defaultValue:null,description:`Expanded item ids.
Used when the item's expansion is controlled.`,name:"expandedItems",required:!1,type:{name:"string[]"}},defaultExpandedItems:{defaultValue:{value:"[]"},description:`Expanded item ids.
Used when the item's expansion is not controlled.`,name:"defaultExpandedItems",required:!1,type:{name:"string[]"}},onExpandedItemsChange:{defaultValue:null,description:`Callback fired when Tree Items are expanded/collapsed.
@param event The DOM event that triggered the change.
@param itemIds The ids of the expanded items.`,name:"onExpandedItemsChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, itemIds: string[]) => void"}},onItemExpansionToggle:{defaultValue:null,description:"Callback fired when a Tree Item is expanded or collapsed.\n@param event The DOM event that triggered the change.\n@param itemId The itemId of the modified item.\n@param isExpanded `true` if the item has just been expanded, `false` if it has just been collapsed.",name:"onItemExpansionToggle",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, itemId: string, isExpanded: boolean) => void"}},expansionTrigger:{defaultValue:{value:"'content'"},description:"The slot that triggers the item's expansion when clicked.",name:"expansionTrigger",required:!1,type:{name:'"content" | "iconContainer"'}},onItemFocus:{defaultValue:null,description:`Callback fired when a given Tree Item is focused.
@param event The DOM event that triggered the change. **Warning**: This is a generic event not a focus event.
@param itemId The id of the focused item.`,name:"onItemFocus",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, itemId: string) => void"}},disableSelection:{defaultValue:{value:"false"},description:"If `true` selection is disabled.",name:"disableSelection",required:!1,type:{name:"boolean"}},defaultSelectedItems:{defaultValue:{value:"[]"},description:"Selected item ids. (Uncontrolled)\nWhen `multiSelect` is true this takes an array of strings; when false (default) a string.",name:"defaultSelectedItems",required:!1,type:{name:"string[]"}},selectedItems:{defaultValue:null,description:"Selected item ids. (Controlled)\nWhen `multiSelect` is true this takes an array of strings; when false (default) a string.",name:"selectedItems",required:!1,type:{name:"string[]"}},multiSelect:{defaultValue:{value:"false"},description:"If `true`, `ctrl` and `shift` will trigger multiselect.",name:"multiSelect",required:!1,type:{name:"true"}},checkboxSelection:{defaultValue:{value:"false"},description:"If `true`, the Tree View renders a checkbox at the left of its label that allows selecting it.",name:"checkboxSelection",required:!1,type:{name:"boolean"}},onSelectedItemsChange:{defaultValue:null,description:"Callback fired when Tree Items are selected/deselected.\n@param event The DOM event that triggered the change.\n@param itemIds The ids of the selected items.\nWhen `multiSelect` is `true`, this is an array of strings; when false (default) a string.",name:"onSelectedItemsChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, itemIds: string[]) => void"}},onItemSelectionToggle:{defaultValue:null,description:"Callback fired when a Tree Item is selected or deselected.\n@param event The DOM event that triggered the change.\n@param itemId The itemId of the modified item.\n@param isSelected `true` if the item has just been selected, `false` if it has just been deselected.",name:"onItemSelectionToggle",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, itemId: string, isSelected: boolean) => void"}}}}}catch{}export{V as T};
