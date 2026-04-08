import{j as e}from"./iframe-CWp6xAJi.js";import{T as a}from"./index-BJBbOM60.js";import{T as o}from"./TreeView-37XUA8SW.js";import{T as r}from"./TreeItem-B5AENO2h.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-DAHmtciD.js";import"./memoTheme-Cd48oeI4.js";import"./styled-BbzXfeov.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlotProps-DzjUqkkU.js";import"./mergeSlotProps-D_m3hd0U.js";import"./useForkRef-3LhxE-jP.js";import"./EventManager-Bm9kIsY3.js";import"./index-buZDR1ob.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BE17mmZt.js";import"./createSvgIcon-BPSi4ajd.js";import"./Checkbox-1YsHoRfb.js";import"./SwitchBase-BDjJ1Fzr.js";import"./useFormControl-hGDRNu7C.js";import"./useSlot-DyNQWwC6.js";import"./useControlled-D9oaenaI.js";import"./ButtonBase-QvXOsOsa.js";import"./useTimeout-YuGHwSAC.js";import"./TransitionGroupContext-DXm2NhTQ.js";import"./useEventCallback-DWzQfpRP.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-Dxb_vIiW.js";import"./CircularProgress-a2FiPD69.js";import"./Collapse-CZZzoR_N.js";import"./useTheme-DHWCGmhz.js";import"./utils-D4ENFMIW.js";const H={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
