import{j as e}from"./iframe-B-IDRs1c.js";import{T as n}from"./index-DQtlh_Xd.js";import{T as s}from"./TreeView-CC81kIFM.js";import{T as r}from"./TreeItem-CFruf0jP.js";import"./preload-helper-Dp1pzeXC.js";import"./Typography-qhH8cReh.js";import"./memoTheme-CE8Ve8p3.js";import"./styled-7JhYMRam.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./EventManager-rgRzB3XM.js";import"./useTimeout-B5Lb3nSx.js";import"./useSlotProps-CfOviytx.js";import"./mergeSlotProps-C8D8DcHH.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-ClLnv_Rm.js";import"./index-B8qzEHL-.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-Dnen4Kai.js";import"./createSvgIcon-D0KAL-_d.js";import"./Checkbox-CNKWYW5A.js";import"./SwitchBase-D-rxiEW8.js";import"./useFormControl-DeAhKfVJ.js";import"./useSlot-BDZruxXA.js";import"./useControlled-c6loq-MY.js";import"./ButtonBase-BRBh8179.js";import"./TransitionGroupContext-FoUS5PCq.js";import"./useEventCallback-cI9q2pBc.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-CcD7j9hf.js";import"./CircularProgress-DIITlzvm.js";import"./Collapse-CgY6sXYd.js";import"./useTheme-BCGo3_gR.js";import"./utils-BDyqiFkI.js";const W={title:"Components/TreeView/TreeView",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},b=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(s,{...o})]}),args:{children:b,"aria-labelledby":"tree-view"}},i={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(s,{checkboxSelection:!0,...o})]}),args:{children:b,"aria-labelledby":"tree-view-selectable"}};var a,m,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Y=["_TreeView","_TreeViewCheckbox"];export{t as _TreeView,i as _TreeViewCheckbox,Y as __namedExportsOrder,W as default};
