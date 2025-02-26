import{j as r}from"./jsx-runtime-CcL-W3nW.js";import{T as o}from"./TreeItem-C-tVD48g.js";import{T as c}from"./TreeView-DW7uSo6t.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./identifier-Dtqimryx.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./EventManager-Cp9YrV-m.js";import"./useForkRef-BVrIj09m.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./ownerDocument-DW-IO8s5.js";import"./index-nos-0K8U.js";import"./index-0eQTE8wr.js";import"./faCircleArrowRight-fEvkKBkH.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./SvgIcon-DSdWmKAH.js";import"./generateUtilityClass-CVWqFxsA.js";import"./memoTheme-D-rVhYRp.js";import"./styled-CF1hcdwO.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./useThemeProps-NV-uCBd-.js";import"./useThemeProps-BIK-1DKm.js";import"./useTheme-C2CrmYKc.js";import"./resolveComponentProps-Dg20wxiM.js";import"./useSlotProps-BAIpVL6Y.js";import"./index-Dk74W0Oi.js";import"./createSvgIcon-TketyoFF.js";import"./Checkbox-imGzR8Us.js";import"./SwitchBase-Z9YgLJlx.js";import"./useFormControl-68oiojFJ.js";import"./useControlled-WdbyInBW.js";import"./ButtonBase-DbVRbsLs.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Collapse-quvbLMTx.js";import"./useTheme-DUkCvbx_.js";import"./utils-D5ZkK9XY.js";import"./index-BEx9gAkE.js";const f=e=>["string","number","boolean"].includes(typeof e),h=e=>!!e&&typeof e=="object",u=({data:e})=>Object.entries(e).map(a=>{const[n,t]=a;if(f(t)){const l=`${n}: ${t.toString()}`;return r.jsx(o,{label:l,itemId:`${n}.${t}`},`${n}.${t}`)}if(h(t)){const l=`${n}: ${Array.isArray(t)?`[ ] ${t.length} items`:`{ } ${Object.keys(t).length} keys`}`;return r.jsx(o,{label:l,itemId:n,children:u({data:t})},n)}return null}),s=({data:e,...a})=>{const n=u({data:e});return r.jsx(c,{...a,children:n})};try{s.displayName="JsonViewer",s.__docgenInfo={description:"",displayName:"JsonViewer",props:{data:{defaultValue:null,description:"Data to be rendered, can be most valid javascript objects, some uncommon types may not by fully supported - like cyclical objects, proxies, symbols as keys.",name:"data",required:!0,type:{name:"Record<string, unknown>"}},onItemClick:{defaultValue:null,description:"Callback fired when the `content` slot of a given Tree Item is clicked.\n@param event The DOM event that triggered the change.\n@param itemId The id of the focused item.",name:"onItemClick",required:!1,type:{name:"(event: MouseEvent<Element, MouseEvent>, itemId: string) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<SimpleTreeViewClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},id:{defaultValue:null,description:`This prop is used to help implement the accessibility logic.
If you don't provide this prop. It falls back to a randomly generated id.`,name:"id",required:!1,type:{name:"string"}},slots:{defaultValue:null,description:"Overridable component slots.",name:"slots",required:!1,type:{name:"SimpleTreeViewSlots"}},slotProps:{defaultValue:null,description:"The props used for each component slot.",name:"slotProps",required:!1,type:{name:"SimpleTreeViewSlotProps"}},disabledItemsFocusable:{defaultValue:{value:"false"},description:"If `true`, will allow focus on disabled items.",name:"disabledItemsFocusable",required:!1,type:{name:"boolean"}},itemChildrenIndentation:{defaultValue:{value:"12px"},description:`Horizontal indentation between an item and its children.
Examples: 24, "24px", "2rem", "2em".`,name:"itemChildrenIndentation",required:!1,type:{name:"string | number"}},apiRef:{defaultValue:null,description:"The ref object that allows Tree View manipulation. Can be instantiated with `useTreeViewApiRef()`.",name:"apiRef",required:!1,type:{name:"SimpleTreeViewApiRef"}},experimentalFeatures:{defaultValue:null,description:"Unstable features, breaking changes might be introduced.\nFor each feature, if the flag is not explicitly set to `true`,\nthe feature will be fully disabled and any property / method call will not have any effect.",name:"experimentalFeatures",required:!1,type:{name:"{ indentationAtItemLevel?: boolean; }"}},expandedItems:{defaultValue:null,description:`Expanded item ids.
Used when the item's expansion is controlled.`,name:"expandedItems",required:!1,type:{name:"string[]"}},defaultExpandedItems:{defaultValue:{value:"[]"},description:`Expanded item ids.
Used when the item's expansion is not controlled.`,name:"defaultExpandedItems",required:!1,type:{name:"string[]"}},onExpandedItemsChange:{defaultValue:null,description:`Callback fired when Tree Items are expanded/collapsed.
@param event The DOM event that triggered the change.
@param itemIds The ids of the expanded items.`,name:"onExpandedItemsChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, itemIds: string[]) => void"}},onItemExpansionToggle:{defaultValue:null,description:"Callback fired when a Tree Item is expanded or collapsed.\n@param event The DOM event that triggered the change.\n@param itemId The itemId of the modified item.\n@param isExpanded `true` if the item has just been expanded, `false` if it has just been collapsed.",name:"onItemExpansionToggle",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, itemId: string, isExpanded: boolean) => void"}},expansionTrigger:{defaultValue:{value:"'content'"},description:"The slot that triggers the item's expansion when clicked.",name:"expansionTrigger",required:!1,type:{name:'"content" | "iconContainer"'}},onItemFocus:{defaultValue:null,description:`Callback fired when a given Tree Item is focused.
@param event The DOM event that triggered the change. **Warning**: This is a generic event not a focus event.
@param itemId The id of the focused item.`,name:"onItemFocus",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, itemId: string) => void"}},disableSelection:{defaultValue:{value:"false"},description:"If `true` selection is disabled.",name:"disableSelection",required:!1,type:{name:"boolean"}},defaultSelectedItems:{defaultValue:{value:"[]"},description:"Selected item ids. (Uncontrolled)\nWhen `multiSelect` is true this takes an array of strings; when false (default) a string.",name:"defaultSelectedItems",required:!1,type:{name:"string[]"}},selectedItems:{defaultValue:null,description:"Selected item ids. (Controlled)\nWhen `multiSelect` is true this takes an array of strings; when false (default) a string.",name:"selectedItems",required:!1,type:{name:"string[]"}},multiSelect:{defaultValue:{value:"false"},description:"If `true`, `ctrl` and `shift` will trigger multiselect.",name:"multiSelect",required:!1,type:{name:"true"}},checkboxSelection:{defaultValue:{value:"false"},description:"If `true`, the Tree View renders a checkbox at the left of its label that allows selecting it.",name:"checkboxSelection",required:!1,type:{name:"boolean"}},onSelectedItemsChange:{defaultValue:null,description:"Callback fired when Tree Items are selected/deselected.\n@param event The DOM event that triggered the change.\n@param itemIds The ids of the selected items.\nWhen `multiSelect` is `true`, this is an array of strings; when false (default) a string.",name:"onSelectedItemsChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, itemIds: string[]) => void"}},onItemSelectionToggle:{defaultValue:null,description:"Callback fired when a Tree Item is selected or deselected.\n@param event The DOM event that triggered the change.\n@param itemId The itemId of the modified item.\n@param isSelected `true` if the item has just been selected, `false` if it has just been deselected.",name:"onItemSelectionToggle",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, itemId: string, isSelected: boolean) => void"}}}}}catch{}const re={title:"Components/TreeView/JsonViewer",component:s,tags:["autodocs"]},i={render:({data:e,...a})=>r.jsx(s,{data:e,...a}),args:{data:{foo:{bar:{baz:["stuff","things","etc."]}}}}};var d,m,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: ({
    data,
    ...rest
  }: JsonViewerProps) => <JsonViewer data={data} {...rest} />,
  args: {
    data: {
      foo: {
        bar: {
          baz: ['stuff', 'things', 'etc.']
        }
      }
    }
  }
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const se=["_JsonViewer"];export{i as _JsonViewer,se as __namedExportsOrder,re as default};
