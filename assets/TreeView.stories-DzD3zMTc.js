import{j as e}from"./iframe-BfiSjCZE.js";import{T as a}from"./index-Ditxfwx6.js";import{T as o}from"./TreeView-RQmN_YWl.js";import{T as r}from"./TreeItem-1RotUj5o.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-C4HmXqwR.js";import"./memoTheme-Bf2lNlfa.js";import"./styled-B9LoXHeR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./EventManager-5bzqAyEX.js";import"./index-CnlcVsMi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-pfgupZ4n.js";import"./createSvgIcon-DV4tT70v.js";import"./Checkbox-BgLjUNtM.js";import"./SwitchBase-AFFAmAWt.js";import"./useFormControl-C5CMMi3k.js";import"./useSlot-BvJ3REjy.js";import"./mergeSlotProps-d8P6odjW.js";import"./useForkRef-KHwM-Xb0.js";import"./useControlled-DuHd5Dfi.js";import"./ButtonBase-B0Rj5enX.js";import"./useTimeout-Dvw-KAbd.js";import"./TransitionGroupContext-BprlU7j-.js";import"./useEventCallback-BRDDRqyT.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-DuqHZ2js.js";import"./CircularProgress-DFM5h0gz.js";import"./Collapse-DUOEVSSh.js";import"./useTheme-CyCmmmWE.js";import"./utils-CZVImzMM.js";const G={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
