import{j as e}from"./iframe-DKvnFaXU.js";import{T as a}from"./index-CDeQa_Ov.js";import{T as o}from"./TreeView-5XEwrCuo.js";import{T as r}from"./TreeItem-C_xyN_gx.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-D7JJPpmc.js";import"./memoTheme-CqfCSJ2X.js";import"./styled-CmsEx6_f.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./EventManager-DOR4dTF3.js";import"./index-Dp9gWiw7.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CXEooahZ.js";import"./createSvgIcon-2KwAvjFg.js";import"./Checkbox-BUE6P3_A.js";import"./SwitchBase-DhDyeBWH.js";import"./useFormControl-DSlP_RFA.js";import"./useSlot-CCglkhUf.js";import"./mergeSlotProps-DgX6bSST.js";import"./useForkRef-BZiVfW-q.js";import"./useControlled-DXzaWELJ.js";import"./ButtonBase-t7rDwPbd.js";import"./useTimeout-CHMS-cR8.js";import"./TransitionGroupContext-Ywi-MhlW.js";import"./useEventCallback-BMp-rMhG.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-BLQDwcQN.js";import"./CircularProgress-1gU5OTOX.js";import"./Collapse-BBQsUP8L.js";import"./useTheme-CSDDNwq2.js";import"./utils-Bp7Prb7W.js";const G={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
