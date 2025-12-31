import{j as e}from"./iframe-D6rueNNG.js";import{T as n}from"./index-E9_P1BCd.js";import{T as s}from"./TreeView-DJjTqSEE.js";import{T as r}from"./TreeItem-DkcU4QnL.js";import"./preload-helper-Dp1pzeXC.js";import"./Typography-011omOzu.js";import"./memoTheme-CCfkpwUG.js";import"./styled-ZW0UZQf0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./EventManager-2If4fyGa.js";import"./index-BJ6jjaZ4.js";import"./useTimeout-BykHjwvK.js";import"./useSlotProps-y_-PZrbQ.js";import"./mergeSlotProps-CvdD-egp.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-k6UH9Eyt.js";import"./index-BjO6qU9j.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-3IcwaHvd.js";import"./createSvgIcon-DVzV6U3r.js";import"./Checkbox-4v8WtE6p.js";import"./SwitchBase-BEMaNbt8.js";import"./useFormControl-D4KUkep_.js";import"./useSlot-DvvYNYr-.js";import"./useControlled-CmrCbjvY.js";import"./ButtonBase-CyBCFM1e.js";import"./TransitionGroupContext-DgL19gcU.js";import"./useEventCallback-QlF7xWZO.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-C5cj9pSF.js";import"./CircularProgress-CNVgVvu_.js";import"./Collapse-DSMiEM_D.js";import"./useTheme-iuyBXSR0.js";import"./utils-BI9CCtVK.js";const Y={title:"Components/TreeView/TreeView",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},b=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(s,{...o})]}),args:{children:b,"aria-labelledby":"tree-view"}},i={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(s,{checkboxSelection:!0,...o})]}),args:{children:b,"aria-labelledby":"tree-view-selectable"}};var a,m,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: TreeViewProps) => <>
      <Typography variant="h1" children="Tree View" id="tree-view" />
      <TreeView {...args} />
    </>,
  args: {
    children: items,
    'aria-labelledby': 'tree-view'
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,d,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: TreeViewProps) => <>
      <Typography variant="h1" children="Selectable Tree View" id="tree-view-selectable" />
      <TreeView checkboxSelection {...args} />
    </>,
  args: {
    children: items,
    'aria-labelledby': 'tree-view-selectable'
  }
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Z=["_TreeView","_TreeViewCheckbox"];export{t as _TreeView,i as _TreeViewCheckbox,Z as __namedExportsOrder,Y as default};
