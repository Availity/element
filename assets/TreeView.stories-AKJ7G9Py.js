import{j as e}from"./iframe-P-I-t7s_.js";import{T as a}from"./index-DWh3JVg2.js";import{T as o}from"./TreeView-BYfksKNy.js";import{T as r}from"./TreeItem-D1swRJty.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-BFwAhjnY.js";import"./memoTheme-Bi3jfVWD.js";import"./styled-DNi79hKI.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useSlotProps-Cx6Yk_v4.js";import"./mergeSlotProps-CDm4lxrI.js";import"./useForkRef-B5SqA4pZ.js";import"./EventManager-bLwvbgwT.js";import"./index-C3cy06cM.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DmOXCSGB.js";import"./createSvgIcon-JwEd2gcS.js";import"./Checkbox-DpOG-Ngj.js";import"./SwitchBase-CrBPRb-c.js";import"./useFormControl-PrL4cH60.js";import"./useSlot-DY-xq6aU.js";import"./useControlled-Cqclzim-.js";import"./ButtonBase-P5TjO14T.js";import"./useTimeout-Dzhca5Jx.js";import"./TransitionGroupContext-Dvdi4lCr.js";import"./useEventCallback-DAYatbRK.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-BWpcczPW.js";import"./CircularProgress-BRuGXxty.js";import"./Collapse-_SLmHTOg.js";import"./useTheme-BPf64W-X.js";import"./utils-DTqcJog-.js";const H={title:"Components/TreeView/TreeView",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},m=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(o,{...s})]}),args:{children:m,"aria-labelledby":"tree-view"}},i={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(o,{checkboxSelection:!0,...s})]}),args:{children:m,"aria-labelledby":"tree-view-selectable"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
