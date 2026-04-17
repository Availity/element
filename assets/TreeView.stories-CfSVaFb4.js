import{j as e}from"./iframe-D_FBGCyt.js";import{T as a}from"./index-BFUMh9R9.js";import{T as o}from"./TreeView-Bqq9xcdt.js";import{T as r}from"./TreeItem-DOK0FUOP.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-2LRTBqXt.js";import"./memoTheme-BLxVLpBG.js";import"./styled-xf6f_HVu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlotProps-C2D_NZSZ.js";import"./mergeSlotProps-gV_s4djX.js";import"./useForkRef-CnVOscb6.js";import"./EventManager-DbU-TXY0.js";import"./index-C15pSvNp.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-5AfvjDJL.js";import"./createSvgIcon-CrDNgKEm.js";import"./Checkbox-BEYZC8Q6.js";import"./SwitchBase-DTTSsIt3.js";import"./useFormControl-D0mczUgB.js";import"./useSlot-BtMprAQd.js";import"./useControlled-CdfLcSkL.js";import"./ButtonBase-D61WXHG0.js";import"./useTimeout-SlAgGEcH.js";import"./TransitionGroupContext-D8t5YM-9.js";import"./useEventCallback-jDv7Sv7e.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-Vx5Db-vC.js";import"./CircularProgress-BjsVuxPp.js";import"./Collapse-whwxhGdx.js";import"./useTheme-C9l_6OF0.js";import"./utils-DnGyS3wP.js";const H={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
