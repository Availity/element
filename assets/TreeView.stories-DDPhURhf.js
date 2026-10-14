import{j as e}from"./iframe-BxUHITI1.js";import{T as a}from"./index-DdUtkmNt.js";import{T as o}from"./TreeView-B-DDs6F-.js";import{T as r}from"./TreeItem-FpaSrmjH.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-BPEZnd-f.js";import"./memoTheme-CzoHsl9a.js";import"./styled-CpGjzToy.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./EventManager-BO8lTmy0.js";import"./index-D7Z8d6Jb.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BZhbNLcx.js";import"./createSvgIcon-RiBZe8zy.js";import"./Checkbox-Brx8Mpgd.js";import"./SwitchBase-C1EzQuwL.js";import"./useFormControl-DBh9raQ6.js";import"./useSlot-B7qqTYAC.js";import"./mergeSlotProps-MHJ1SX4K.js";import"./useForkRef-lvxB79U5.js";import"./useControlled-Bgh5sVCP.js";import"./ButtonBase-DsL-5Cn7.js";import"./useTimeout-DAfKtcD8.js";import"./TransitionGroupContext-l3bxEgIQ.js";import"./useEventCallback-C37BR1tG.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-BlkVzhTt.js";import"./CircularProgress-DLAhFeVr.js";import"./Collapse-DbkdmBmj.js";import"./useTheme-D1EEqNP3.js";import"./utils-Bx4IaHxc.js";const G={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
