import{j as e}from"./iframe-TaNZkFdX.js";import{T as a}from"./index-CvI2ruD5.js";import{T as o}from"./TreeView--cwI51bQ.js";import{T as r}from"./TreeItem-BZWzZmOS.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-01frBhx_.js";import"./memoTheme-DWNFUNe8.js";import"./styled-B4LT_xKE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./EventManager-BJfmbUIi.js";import"./index-DQOdSWXL.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DJOFM4ge.js";import"./createSvgIcon-gxV3qIoY.js";import"./Checkbox-x_xAoSeX.js";import"./SwitchBase-lR1eKZM4.js";import"./useFormControl-C3JuhRxY.js";import"./useSlot-C54pGJsm.js";import"./mergeSlotProps-I1tu7yOe.js";import"./useForkRef-BWA77Ou0.js";import"./useControlled-DvjtXf7N.js";import"./ButtonBase-hN41DD3n.js";import"./useTimeout-6mINgJ0s.js";import"./TransitionGroupContext-DNirSs3q.js";import"./useEventCallback-Mv5Tf1uh.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-CMDl2A-V.js";import"./CircularProgress-UQNWqsj-.js";import"./Collapse-Dic22WCU.js";import"./useTheme-BwMLg3Cm.js";import"./utils-DLs5F192.js";const G={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
