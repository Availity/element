import{j as e}from"./iframe-Cb7vw6QO.js";import{T as a}from"./index-Bi9KpQ_H.js";import{T as o}from"./TreeView-Bxy-pU80.js";import{T as r}from"./TreeItem-D1UA_FYh.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-DIMxXIFj.js";import"./memoTheme-BhRdBUps.js";import"./styled-Bj0Es0Li.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useSlotProps-BV7LDA1z.js";import"./mergeSlotProps-81oQhZWc.js";import"./useForkRef-BNxAHOk3.js";import"./EventManager-XiFSOlhr.js";import"./index-CXcfblB4.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-DzlaQllX.js";import"./createSvgIcon-Bes_Hs0U.js";import"./Checkbox-Bdbh-hP5.js";import"./SwitchBase-TNKs6tJ6.js";import"./useFormControl-CTXbndWV.js";import"./useSlot-Bh9EPizr.js";import"./useControlled-DqdtCuR_.js";import"./ButtonBase-CsQPbkJ1.js";import"./useTimeout-Cz1ClSsL.js";import"./TransitionGroupContext-DGa2MF0H.js";import"./useEventCallback-DhPRnvwe.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-BcsNuv71.js";import"./CircularProgress-CDQWW7ND.js";import"./Collapse-BQ5_UtsK.js";import"./useTheme-CGEjvpOB.js";import"./utils-DcOfItOr.js";const H={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
