import{j as e}from"./iframe-C1vntzAX.js";import{T as a}from"./index-BaatzM2V.js";import{T as s}from"./TreeView-Cpl8qXgR.js";import{T as r}from"./TreeItem-DOwPYvIR.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-D6jUB3HO.js";import"./memoTheme-B-OyMYhz.js";import"./styled-CpL5pW3T.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./EventManager-DwabjxJ2.js";import"./useTimeout-Dtp_2qQ3.js";import"./useSlotProps-B-xFDx91.js";import"./mergeSlotProps-B_ZZvCmf.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DLYnPViW.js";import"./index-CDQPidku.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-CgejwYEH.js";import"./createSvgIcon-OHXdYWDp.js";import"./Checkbox-BKLdKyoo.js";import"./SwitchBase-BNj6NLZe.js";import"./useFormControl-SXzsh7qR.js";import"./useSlot-BmDgUDTi.js";import"./useControlled-DMvVP-hg.js";import"./ButtonBase-COQRfLrd.js";import"./TransitionGroupContext-cDoqgCSl.js";import"./useEventCallback-D85fiQCE.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-cS-2BPos.js";import"./CircularProgress-Drsym3OL.js";import"./Collapse-CYiPcGRV.js";import"./useTheme-vaQlFbmr.js";import"./utils-3uAZdIAp.js";const K={title:"Components/TreeView/TreeView",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(s,{...o})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(s,{checkboxSelection:!0,...o})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const L=["_TreeView","_TreeViewCheckbox"];export{t as _TreeView,i as _TreeViewCheckbox,L as __namedExportsOrder,K as default};
