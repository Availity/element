import{j as e}from"./iframe-HTo88Qah.js";import{T as n}from"./index-BHAyuMBH.js";import{T as s}from"./TreeView-BHuVrjAW.js";import{T as r}from"./TreeItem-uOfoUZKm.js";import"./preload-helper-Dp1pzeXC.js";import"./Typography-BCaLwMk6.js";import"./memoTheme-BOsLVKQV.js";import"./styled-DjA2FMTv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./EventManager-C_WXamQe.js";import"./index-DviwiyA1.js";import"./useTimeout-BzMKXnUG.js";import"./useSlotProps-Cf38pxn0.js";import"./mergeSlotProps-CVeY9kVm.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D-SriJrD.js";import"./index-Bp1v9Z_f.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-E7njoD0w.js";import"./createSvgIcon-y0t4CXxH.js";import"./Checkbox-Ha1b27DJ.js";import"./SwitchBase-Bjk21Qpk.js";import"./useFormControl-Cr2usIhw.js";import"./useSlot-O7mjHfs3.js";import"./useControlled-DAZnMUbd.js";import"./ButtonBase-B5t8kESg.js";import"./TransitionGroupContext-B9ftAZaO.js";import"./useEventCallback-skU3gh-c.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-CBvO9dhe.js";import"./CircularProgress-DZY0-sNj.js";import"./Collapse-BRZv8GFx.js";import"./useTheme-CndemxDm.js";import"./utils-C06-OhnX.js";const Y={title:"Components/TreeView/TreeView",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},b=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(s,{...o})]}),args:{children:b,"aria-labelledby":"tree-view"}},i={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(s,{checkboxSelection:!0,...o})]}),args:{children:b,"aria-labelledby":"tree-view-selectable"}};var a,m,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
