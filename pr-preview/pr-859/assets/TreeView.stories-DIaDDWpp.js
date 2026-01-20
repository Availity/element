import{j as e}from"./iframe-Bb3d8CAJ.js";import{T as a}from"./index-CGPDYcnJ.js";import{T as o}from"./TreeView-D0ul-lq1.js";import{T as r}from"./TreeItem-CnJpEUlJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-BQpGuQ-L.js";import"./memoTheme-DG97Ks8Q.js";import"./styled-DljcZuS8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useSlotProps-DBrHcN3c.js";import"./mergeSlotProps-gjnpxKKm.js";import"./useForkRef-B1A3wtQb.js";import"./EventManager-L7oTSJR_.js";import"./index-0wpeyl_7.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-B3pyeCMx.js";import"./createSvgIcon-DaOARJ1X.js";import"./Checkbox-ByrksOGG.js";import"./SwitchBase-DL98QF8Z.js";import"./useFormControl-Drg5HQwL.js";import"./useSlot-DsuYGff3.js";import"./useControlled-Dk5cREEZ.js";import"./ButtonBase-ChdXNNb1.js";import"./useTimeout-CybQo20w.js";import"./TransitionGroupContext-B6dWxZQA.js";import"./useEventCallback-CXGXfcdA.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-BbxdafLp.js";import"./CircularProgress-CEqu6RKG.js";import"./Collapse-DM9mpHoT.js";import"./useTheme-7VSsG7x3.js";import"./utils-CYAKcw8L.js";const H={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
