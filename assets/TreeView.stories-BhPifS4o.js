import{j as e}from"./iframe-BXw3gXzi.js";import{T as a}from"./index-DgW2N-xw.js";import{T as o}from"./TreeView-DNAONlFX.js";import{T as r}from"./TreeItem-Bp5zo39j.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-BaC1f153.js";import"./memoTheme-Cun1OYGu.js";import"./styled-B4C1j5cm.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlotProps-yzZ17Wp2.js";import"./mergeSlotProps-CH0acCqg.js";import"./useForkRef-C2Z_35PR.js";import"./EventManager-D9wW3npO.js";import"./index-DQ-Pw2vZ.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-WyGfIbWv.js";import"./createSvgIcon--3tSNQ0H.js";import"./Checkbox-CKSiPxEW.js";import"./SwitchBase-DGpDYu1p.js";import"./useFormControl-v5C4S-YL.js";import"./useSlot-ChptDOQ0.js";import"./useControlled-B4VTwyPs.js";import"./ButtonBase-BTnZicAm.js";import"./useTimeout-0uXpumKy.js";import"./TransitionGroupContext-M8heGJda.js";import"./useEventCallback-3YhfTi0L.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-BLBn1dIn.js";import"./CircularProgress-DhFZnFeX.js";import"./Collapse-CUbhuvjn.js";import"./useTheme-BMbLtIQ2.js";import"./utils-xtkVmQdP.js";const H={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
