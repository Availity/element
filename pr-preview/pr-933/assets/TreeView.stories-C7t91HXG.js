import{j as e}from"./iframe-CgyQHDht.js";import{T as a}from"./index-Au96FvEp.js";import{T as o}from"./TreeView-DIEEUXZ_.js";import{T as r}from"./TreeItem-Dk1JUXHH.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-yiHubm7E.js";import"./memoTheme-9z4HOxEW.js";import"./styled-CeAqJ-c9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./EventManager-DhSQvYuq.js";import"./index-6_aePX59.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D8liJDyc.js";import"./createSvgIcon-CyM8AHy5.js";import"./Checkbox-BDOSMpbv.js";import"./SwitchBase-D-PtVu31.js";import"./useFormControl-Ca8XhVwX.js";import"./useSlot-BI63qm8Z.js";import"./mergeSlotProps-DEDO0PDp.js";import"./useForkRef-DvvK-eiI.js";import"./useControlled-DSiBAGka.js";import"./ButtonBase-BeOu4eYa.js";import"./useTimeout-B7u63TVX.js";import"./TransitionGroupContext-CbCiCZin.js";import"./useEventCallback-v1-mseXg.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-gK_7x5gw.js";import"./CircularProgress-OvvKtsaM.js";import"./Collapse-BR1Q4Syc.js";import"./useTheme-DBOW2iGc.js";import"./utils-i6pe6p9D.js";const G={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: TreeViewProps) => <>
      <Typography variant="h1" children="Tree View" id="tree-view" />
      <TreeView {...args} />
    </>,
  args: {
    children: items,
    'aria-labelledby': 'tree-view'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: TreeViewProps) => <>
      <Typography variant="h1" children="Selectable Tree View" id="tree-view-selectable" />
      <TreeView checkboxSelection {...args} />
    </>,
  args: {
    children: items,
    'aria-labelledby': 'tree-view-selectable'
  }
}`,...i.parameters?.docs?.source}}};const H=["_TreeView","_TreeViewCheckbox"];export{t as _TreeView,i as _TreeViewCheckbox,H as __namedExportsOrder,G as default};
