import{j as e}from"./iframe-D1NCSytB.js";import{T as a}from"./index-B2ZGVgz2.js";import{T as o}from"./TreeView-BUlIKcOT.js";import{T as r}from"./TreeItem-o3Gkgi2R.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-BWjvtf8i.js";import"./memoTheme-DOGX_B28.js";import"./styled-BbCZmQsA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useSlotProps-WTXiNqL0.js";import"./mergeSlotProps-DlDajhlR.js";import"./useForkRef-BpGj9yaf.js";import"./EventManager-BJ3PBR6n.js";import"./index-BYdlpT-l.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-B4wc5_NU.js";import"./createSvgIcon-BJL25Yge.js";import"./Checkbox-CR38QSPi.js";import"./SwitchBase-DGBYhJIH.js";import"./useFormControl-BPWmZTOm.js";import"./useSlot-D1NHtjkn.js";import"./useControlled-Czfb1u9c.js";import"./ButtonBase-BAUCY_Oi.js";import"./useTimeout-Bh_i1JKi.js";import"./TransitionGroupContext-BkHkrwff.js";import"./useEventCallback-C8LcGziW.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-LIb7wZP9.js";import"./CircularProgress-DKmuW22e.js";import"./Collapse-_HSdtg7x.js";import"./useTheme-D3cMIjr1.js";import"./utils-DI3cRngQ.js";const H={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
