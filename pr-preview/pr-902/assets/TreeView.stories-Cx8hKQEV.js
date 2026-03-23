import{j as e}from"./iframe-DvcXWkGI.js";import{T as a}from"./index-C1KFV9tz.js";import{T as o}from"./TreeView-C5MBJvvh.js";import{T as r}from"./TreeItem-EWzCkjvh.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-CbbFdRSD.js";import"./memoTheme-C00_9AbM.js";import"./styled-DjkE2l0O.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlotProps-BYEe1XOi.js";import"./mergeSlotProps-C-IYj7GK.js";import"./useForkRef-DXhMi9Fu.js";import"./EventManager-CrKeG-bA.js";import"./index-63S9eLZS.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-Co17_fug.js";import"./createSvgIcon-JaHuofy7.js";import"./Checkbox-HX7bwo5u.js";import"./SwitchBase-BEtkunQj.js";import"./useFormControl-CnGwjuyh.js";import"./useSlot-DrWGT-0c.js";import"./useControlled-CWsku3Ua.js";import"./ButtonBase-CI7etmmo.js";import"./useTimeout-BLAqdi1l.js";import"./TransitionGroupContext-DxPJb2_E.js";import"./useEventCallback-jEehnAW2.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-CU9nKqZa.js";import"./CircularProgress-CsILiYUE.js";import"./Collapse-Cq_IR-Gg.js";import"./useTheme-BDjWybQB.js";import"./utils-CXX3yobC.js";const H={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
