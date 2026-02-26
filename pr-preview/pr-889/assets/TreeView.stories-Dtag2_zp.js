import{j as e}from"./iframe-DRsKaZoV.js";import{T as a}from"./index-CwkjCgy5.js";import{T as o}from"./TreeView-CH2R1C77.js";import{T as r}from"./TreeItem-nADdDlL-.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-DeM8j2MH.js";import"./memoTheme-olSsBjA8.js";import"./styled-DO91FIEC.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlotProps-D3Llr-h-.js";import"./mergeSlotProps-BURl53KS.js";import"./useForkRef-LQtjIIgV.js";import"./EventManager-B8e4NRUl.js";import"./index-BpFZIt2g.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-Dpxjd7uT.js";import"./createSvgIcon-DdCwdPBR.js";import"./Checkbox-DuBDBICY.js";import"./SwitchBase-BMlwKK7W.js";import"./useFormControl-CaAeDifA.js";import"./useSlot-DNM0KLoM.js";import"./useControlled-kFa1Yq00.js";import"./ButtonBase-CTgQ_by3.js";import"./useTimeout-C--q8J9W.js";import"./TransitionGroupContext-BL3wvAVn.js";import"./useEventCallback-Bu60zwDR.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-Df0B65SV.js";import"./CircularProgress-CYts75uW.js";import"./Collapse-Bt0_1h-Y.js";import"./useTheme-C1O811uL.js";import"./utils-DcRyR5pI.js";const H={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
