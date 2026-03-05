import{j as e}from"./iframe-Wk3enkn_.js";import{T as a}from"./index-CNr7z3HO.js";import{T as o}from"./TreeView-3YqsXNVj.js";import{T as r}from"./TreeItem-3_dvMoVf.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-CLtqYzwP.js";import"./memoTheme-Caj5A1s7.js";import"./styled-BmTYHnh6.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlotProps-BfCrVpCA.js";import"./mergeSlotProps-NkzDZpmj.js";import"./useForkRef-yXYQNRja.js";import"./EventManager-BThdMhbz.js";import"./index-a2BAU8hi.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-C-x4Imun.js";import"./createSvgIcon-q6AyRDli.js";import"./Checkbox-Bhsc5Gwd.js";import"./SwitchBase-D9fpHDmD.js";import"./useFormControl-DXnbjHYZ.js";import"./useSlot-JMUv4BXp.js";import"./useControlled-2F9gTxQc.js";import"./ButtonBase-Qsi_pa_1.js";import"./useTimeout-BCOPmfCQ.js";import"./TransitionGroupContext-CwOxOLGn.js";import"./useEventCallback-B7JQiyR1.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-CCeuxG84.js";import"./CircularProgress-n4f4P4WA.js";import"./Collapse-eLUi1aNP.js";import"./useTheme-CmRoqaFD.js";import"./utils-tb6sxdlZ.js";const H={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const K=["_TreeView","_TreeViewCheckbox"];export{t as _TreeView,i as _TreeViewCheckbox,K as __namedExportsOrder,H as default};
