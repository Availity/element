import{j as e}from"./iframe-Cn9qPtrp.js";import{T as a}from"./index-D2wuP2WF.js";import{T as o}from"./TreeView-CWrTvbhB.js";import{T as r}from"./TreeItem-DITLezls.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-CDKB6cUx.js";import"./memoTheme-6yds69P_.js";import"./styled-D2CDconu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./EventManager-nvf-V_uW.js";import"./index-DWYQ4eQk.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-LXn_mqm4.js";import"./createSvgIcon-CK6UXRVe.js";import"./Checkbox-DbJHTCNC.js";import"./SwitchBase-BoThDgH3.js";import"./useFormControl-TW3X2czK.js";import"./useSlot-Cknh0r9X.js";import"./mergeSlotProps-Bjka9Klf.js";import"./useForkRef-Dq6ZsqmR.js";import"./useControlled-BIT0kvxY.js";import"./ButtonBase-2oFpmJBY.js";import"./useTimeout-BoQb9RDS.js";import"./TransitionGroupContext-CFwcVVqT.js";import"./useEventCallback-CiCWuPbq.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-DuRirGHi.js";import"./CircularProgress-DAUt--dg.js";import"./Collapse-DGSdtkEP.js";import"./useTheme-B6YVOUYP.js";import"./utils-BlV9er3y.js";const G={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
