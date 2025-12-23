import{j as e}from"./iframe-uHgbxI5K.js";import{T as n}from"./index-v9QuSlC7.js";import{T as s}from"./TreeView-BXFKJN4j.js";import{T as r}from"./TreeItem-B5LrEKmi.js";import"./preload-helper-Dp1pzeXC.js";import"./Typography-BUwJzphg.js";import"./memoTheme-oX4ulD_d.js";import"./styled-8YbhM9a0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./EventManager-TOlBTEZk.js";import"./index-DyU1fC7A.js";import"./useTimeout-CnBSTBeY.js";import"./useSlotProps-BTIA_7et.js";import"./mergeSlotProps-Muvz4q9m.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BQsEeVXe.js";import"./index-CUd5PmZT.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-C1fws6HS.js";import"./createSvgIcon-BmijsGhR.js";import"./Checkbox-cAdizeDs.js";import"./SwitchBase-Coc1IMyb.js";import"./useFormControl-BeaDuuzQ.js";import"./useSlot-DoiGXRjP.js";import"./useControlled-kFiMxWUJ.js";import"./ButtonBase-DWgIiiPw.js";import"./TransitionGroupContext-D0JdioPb.js";import"./useEventCallback-1jk_qbz7.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-CYc5iuk1.js";import"./CircularProgress-DxKRrnZT.js";import"./Collapse-C8biy26g.js";import"./useTheme-CtIbOmqo.js";import"./utils-Cj1f_ISK.js";const Y={title:"Components/TreeView/TreeView",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},b=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(s,{...o})]}),args:{children:b,"aria-labelledby":"tree-view"}},i={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(s,{checkboxSelection:!0,...o})]}),args:{children:b,"aria-labelledby":"tree-view-selectable"}};var a,m,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
