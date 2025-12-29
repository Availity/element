import{j as e}from"./iframe-XJ8rUARQ.js";import{T as n}from"./index-CMxAEhwf.js";import{T as s}from"./TreeView-D9xpvpzd.js";import{T as r}from"./TreeItem-D0NBc2tE.js";import"./preload-helper-Dp1pzeXC.js";import"./Typography-DLCURa9h.js";import"./memoTheme-q27Lu1jJ.js";import"./styled-DH1bohWY.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./EventManager-CXH2KtHz.js";import"./index--DMbptHO.js";import"./useTimeout-CHPWgY-X.js";import"./useSlotProps-ClBThUbu.js";import"./mergeSlotProps-B1UYo6hf.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-k_WY5UDV.js";import"./index-Bic9pcsq.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-gs9ZPknn.js";import"./createSvgIcon-CZFbIjHx.js";import"./Checkbox-LfJCtZdC.js";import"./SwitchBase-wxow7jUk.js";import"./useFormControl-BQzGV_Rr.js";import"./useSlot-BQnc1wiW.js";import"./useControlled-XnLwGYQ0.js";import"./ButtonBase-CgzYzVmi.js";import"./TransitionGroupContext-BLsjMo91.js";import"./useEventCallback-BDPMWXz1.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-DiGp33rA.js";import"./CircularProgress-DHokMmGN.js";import"./Collapse-LGV7nwMW.js";import"./useTheme-DdE3jScQ.js";import"./utils-Bu5_zceD.js";const Y={title:"Components/TreeView/TreeView",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The `TreeView` component receives its items as JSX Children. This makes it\na good option for hardcoded items."}}}},b=e.jsxs(e.Fragment,{children:[e.jsxs(r,{itemId:"tree-1",label:"Tree 1",children:[e.jsx(r,{itemId:"sub-tree-1.1",label:"Sub Tree 1.1"}),e.jsx(r,{itemId:"sub-tree-1.2",label:"Sub Tree 1.2"}),e.jsx(r,{itemId:"sub-tree-1.3",label:"Sub Tree 1.3"})]}),e.jsxs(r,{itemId:"tree-2",label:"Tree 2",children:[e.jsx(r,{itemId:"sub-tree-2.1",label:"Sub Tree 2.1"}),e.jsx(r,{itemId:"sub-tree-2.2",label:"Sub Tree 2.2"})]}),e.jsx(r,{itemId:"tree-3",label:"Tree 3",children:e.jsx(r,{itemId:"sub-tree-3.1",label:"Sub Tree 3.1"})}),e.jsx(r,{itemId:"tree-4",label:"Tree 4",children:e.jsx(r,{itemId:"sub-tree-4.1",label:"Sub Tree 4.1"})})]}),t={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"h1",children:"Tree View",id:"tree-view"}),e.jsx(s,{...o})]}),args:{children:b,"aria-labelledby":"tree-view"}},i={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"h1",children:"Selectable Tree View",id:"tree-view-selectable"}),e.jsx(s,{checkboxSelection:!0,...o})]}),args:{children:b,"aria-labelledby":"tree-view-selectable"}};var a,m,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
