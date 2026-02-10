import{j as e}from"./iframe-BAylI5Je.js";import{T as a}from"./index-ETFPSSMx.js";import{T as o}from"./TreeView-DVXEPynx.js";import{T as r}from"./TreeItem-vizoN9ia.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-DNXJRb7Q.js";import"./memoTheme-BuFiJMU4.js";import"./styled-qchFS-7q.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useSlotProps-CjIBT4F9.js";import"./mergeSlotProps-CpHFUTeD.js";import"./useForkRef-BbXecB9y.js";import"./EventManager-Dd4nIyPr.js";import"./index-BYPMkNsh.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-B08jEN2V.js";import"./createSvgIcon-srbipTqh.js";import"./Checkbox-CocXLTcy.js";import"./SwitchBase-tkLAg85y.js";import"./useFormControl-D3XHth8F.js";import"./useSlot-tp0V2ckF.js";import"./useControlled-DdXnTKyH.js";import"./ButtonBase-CKOllhzB.js";import"./useTimeout-Dtra5kqE.js";import"./TransitionGroupContext-4YAWsFUH.js";import"./useEventCallback-kqwlHtUL.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-CGOGNWJ4.js";import"./CircularProgress-Da-Xnf7p.js";import"./Collapse-Bzj5cIl1.js";import"./useTheme-Ct91rq7x.js";import"./utils-jWIr1tvh.js";const H={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
