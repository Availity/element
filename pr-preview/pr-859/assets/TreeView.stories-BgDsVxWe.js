import{j as e}from"./iframe-DDdys5VZ.js";import{T as a}from"./index-Z7ZBVKdt.js";import{T as o}from"./TreeView-CeLKFnz3.js";import{T as r}from"./TreeItem-JmUFzanf.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-CZtxpkXF.js";import"./memoTheme-Cxx5qwbm.js";import"./styled-hFTqa5AW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useSlotProps-CMLU_yM0.js";import"./mergeSlotProps-4h4cl7Iv.js";import"./useForkRef-CnZ00-R9.js";import"./EventManager-Bu5fAomw.js";import"./index-BnYYGU_m.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DHyw-wAY.js";import"./createSvgIcon-Q7sAoZ8R.js";import"./Checkbox-BkBkgm3h.js";import"./SwitchBase-DjDUEO21.js";import"./useFormControl-BqJWQcaa.js";import"./useSlot-tZFGbiOx.js";import"./useControlled-DPgR13iz.js";import"./ButtonBase-DZVI88h8.js";import"./useTimeout-DZwXI9W9.js";import"./TransitionGroupContext-Dv_3Vfqr.js";import"./useEventCallback-Cc8SLIyn.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-DywXoXlU.js";import"./CircularProgress-CD5GaXFj.js";import"./Collapse-48uCS0oQ.js";import"./useTheme-3S67f5Cb.js";import"./utils-CF4In8Xa.js";const H={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
