import{j as e}from"./iframe-DPWyg_sE.js";import{T as a}from"./index-rY20fRa0.js";import{T as o}from"./TreeView-PjLEb2Dw.js";import{T as r}from"./TreeItem-B0Xpehlc.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-DAlbupBm.js";import"./memoTheme-CvhDbT8x.js";import"./styled-Cx4UoaTx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useSlotProps-LUJJL6zM.js";import"./mergeSlotProps-CVICHJ3a.js";import"./useForkRef-CQj222cR.js";import"./EventManager-CkFtjAX9.js";import"./index-HgfBgIyk.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BLZY0MiZ.js";import"./createSvgIcon-kD6OJaqd.js";import"./Checkbox-BCBYoKdh.js";import"./SwitchBase-BmqpUqm4.js";import"./useFormControl-DFCevzuq.js";import"./useSlot-BxXiaFQD.js";import"./useControlled-wCcL1r_0.js";import"./ButtonBase-DwZSi7dI.js";import"./useTimeout-RvN-OPdu.js";import"./TransitionGroupContext-Dbv33dTP.js";import"./useEventCallback-jcG2qnaO.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-B4tJEkZP.js";import"./CircularProgress-9Tec-y6j.js";import"./Collapse-BVBkKcmb.js";import"./useTheme-7tDQkz1C.js";import"./utils-BB7LdJ51.js";const H={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
