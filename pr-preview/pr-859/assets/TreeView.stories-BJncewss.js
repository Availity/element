import{j as e}from"./iframe-BZz3QcUV.js";import{T as a}from"./index-ClM7p1ER.js";import{T as s}from"./TreeView-C92axW10.js";import{T as r}from"./TreeItem-CdIHmkn7.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-dKvhZPmN.js";import"./memoTheme-Bs2nn0CZ.js";import"./styled-BM-ddlS9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./EventManager-CSp2dXaL.js";import"./useTimeout-DLwU38Ef.js";import"./useSlotProps-DFvf-0uJ.js";import"./mergeSlotProps-B23xrLHr.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CqxV8UPS.js";import"./index-DVq5OAtC.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-DKZWjmjR.js";import"./createSvgIcon-CpO6BPRg.js";import"./Checkbox-BgDfA3Xc.js";import"./SwitchBase-C7jx3Ye5.js";import"./useFormControl-B768zcnH.js";import"./useSlot-r4YEcyId.js";import"./useControlled-DdT90daF.js";import"./ButtonBase-DOxBZg-r.js";import"./TransitionGroupContext-9H431pbn.js";import"./useEventCallback-BVOh0J-M.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-Bzsz_uoU.js";import"./CircularProgress-SMz0iZ9M.js";import"./Collapse-Dhn11c-9.js";import"./useTheme-B7Cqxh2G.js";import"./utils-BgvT_xZo.js";const K={title:"Components/TreeView/TreeView",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(s,{...o})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(s,{checkboxSelection:!0,...o})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const L=["_TreeView","_TreeViewCheckbox"];export{t as _TreeView,i as _TreeViewCheckbox,L as __namedExportsOrder,K as default};
