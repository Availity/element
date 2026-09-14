import{j as e}from"./iframe-D39zpO5D.js";import{T as a}from"./index-CIttbvMR.js";import{T as o}from"./TreeView-H0P7EEYF.js";import{T as r}from"./TreeItem-CfseRNQy.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-lHvxoPWM.js";import"./memoTheme-DS1Qd1tD.js";import"./styled-DVn78CF9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./EventManager-uDW2vg2k.js";import"./index-LJlq2DD9.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DrCHR_XG.js";import"./createSvgIcon-CXilsj0Y.js";import"./Checkbox-BU--4AVR.js";import"./SwitchBase-Dtvf4WNX.js";import"./useFormControl-DAAm-Ep5.js";import"./useSlot-BR7cWQ8J.js";import"./mergeSlotProps-hvpDzkoH.js";import"./useForkRef-DNCE6AYe.js";import"./useControlled-Dc7tfWw6.js";import"./ButtonBase-C5qFdqG6.js";import"./useTimeout-DkqtJI-P.js";import"./TransitionGroupContext-iGlL40r0.js";import"./useEventCallback-CTE8ZTt3.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-VT4Oa8rE.js";import"./CircularProgress-DZf4mQi8.js";import"./Collapse-bk3u2LoT.js";import"./useTheme-Q_YzHohC.js";import"./utils-BiqFTD-G.js";const G={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
