import{j as e}from"./iframe-6QlsuZks.js";import{T as a}from"./index-ClTqhWkD.js";import{T as o}from"./TreeView-8ebwJrQg.js";import{T as r}from"./TreeItem-DB95UhAp.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-BiVk-Xpu.js";import"./memoTheme-B9sQlNky.js";import"./styled-DGzk_rgf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlotProps-XhtNc6mu.js";import"./mergeSlotProps-hCluPQZ0.js";import"./useForkRef-B_RCYMsy.js";import"./EventManager-DQ2w0OLp.js";import"./index-CrKJovUE.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-o3xhyLw5.js";import"./createSvgIcon-suRscvHS.js";import"./Checkbox-Bgv454X1.js";import"./SwitchBase-CPhx0cqS.js";import"./useFormControl-DZ_CUTQW.js";import"./useSlot-DzncR7P9.js";import"./useControlled-D8gQq48B.js";import"./ButtonBase-DqANlMe2.js";import"./useTimeout-CoBmWaVy.js";import"./TransitionGroupContext-BfrWwv51.js";import"./useEventCallback-H76OWquH.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-y686c5--.js";import"./CircularProgress-BzseWMqn.js";import"./Collapse-ilTxgmIb.js";import"./useTheme-CgDfdbfy.js";import"./utils-DDHdHaR3.js";const H={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
