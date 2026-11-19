import{j as e}from"./iframe-7yTZJyI8.js";import{T as a}from"./index-Fm3BvXJg.js";import{T as o}from"./TreeView-B5I_9gMR.js";import{T as r}from"./TreeItem-BVaJpU90.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-Bz3seEIw.js";import"./memoTheme-CIMTQhyT.js";import"./styled-BMlFG2th.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./EventManager-CE2kvp1F.js";import"./index-LWy-RhUk.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BfOELIkm.js";import"./createSvgIcon-D2n64X_N.js";import"./Checkbox-DZBhFZLO.js";import"./SwitchBase-B3rR0Chu.js";import"./useFormControl-vZHxFS91.js";import"./useSlot-CCUJR_Dn.js";import"./mergeSlotProps-D3aTQwfn.js";import"./useForkRef-CH4SD_Tq.js";import"./useControlled-C9ki-RMb.js";import"./ButtonBase-DlKrHxyr.js";import"./useTimeout-DDTRmv4f.js";import"./TransitionGroupContext-BVN7PaEo.js";import"./useEventCallback-B8agtspF.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-Bi6GFR8l.js";import"./CircularProgress-CFzFWCR0.js";import"./Collapse-CDhWraOx.js";import"./useTheme-BQI76UIF.js";import"./utils-C-JIMqUV.js";const G={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
