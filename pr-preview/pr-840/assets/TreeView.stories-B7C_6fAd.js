import{j as e}from"./iframe-D4l0qtta.js";import{T as n}from"./index-CsS4JCzl.js";import{T as s}from"./TreeView-DrZmhxrA.js";import{T as r}from"./TreeItem-qA_uOHdr.js";import"./preload-helper-Dp1pzeXC.js";import"./Typography-DQo__xQb.js";import"./memoTheme-BA7dV9ce.js";import"./styled-BTFFsjyJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./EventManager-zjz_pT9O.js";import"./useTimeout-tDfAfQSP.js";import"./useSlotProps-CDGpK8qC.js";import"./mergeSlotProps-DF_C76Yp.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Dd_PEYLR.js";import"./index-B-RlsP5T.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-Domhqj7B.js";import"./createSvgIcon-0ZTEW-tI.js";import"./Checkbox-Cg2-DPw0.js";import"./SwitchBase-zo6P8E0k.js";import"./useFormControl-Cf7b7V2i.js";import"./useSlot-D-iz2SxY.js";import"./useControlled-Cq9ik7Uv.js";import"./ButtonBase-caw8p1XZ.js";import"./TransitionGroupContext-CoIben92.js";import"./useEventCallback-BZanBeRj.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-PW512166.js";import"./CircularProgress-CNlJ1A1Z.js";import"./Collapse-BtztexEU.js";import"./useTheme-CeD1owOb.js";import"./utils-C5eKUPpq.js";const W={title:"Components/TreeView/TreeView",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},b=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(s,{...o})]}),args:{children:b,"aria-labelledby":"tree-view"}},i={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(s,{checkboxSelection:!0,...o})]}),args:{children:b,"aria-labelledby":"tree-view-selectable"}};var a,m,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
