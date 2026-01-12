import{j as e}from"./iframe-BZz3QcUV.js";import{T as r}from"./TreeItem-CdIHmkn7.js";import{T as o}from"./TreeView-C92axW10.js";import{F as l}from"./index-DVq5OAtC.js";import{G as c}from"./index-Vz6FX8E2.js";import{T as s}from"./index-ClM7p1ER.js";import"./preload-helper-PPVm8Dsz.js";import"./EventManager-CSp2dXaL.js";import"./useTimeout-DLwU38Ef.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./mergeSlotProps-B23xrLHr.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-DFvf-0uJ.js";import"./useForkRef-CqxV8UPS.js";import"./styled-BM-ddlS9.js";import"./createSvgIcon-CpO6BPRg.js";import"./SvgIcon-DKZWjmjR.js";import"./memoTheme-Bs2nn0CZ.js";import"./Checkbox-BgDfA3Xc.js";import"./SwitchBase-C7jx3Ye5.js";import"./useFormControl-B768zcnH.js";import"./useSlot-r4YEcyId.js";import"./useControlled-DdT90daF.js";import"./ButtonBase-DOxBZg-r.js";import"./TransitionGroupContext-9H431pbn.js";import"./useEventCallback-BVOh0J-M.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-Bzsz_uoU.js";import"./CircularProgress-SMz0iZ9M.js";import"./Collapse-Dhn11c-9.js";import"./useTheme-B7Cqxh2G.js";import"./utils-BgvT_xZo.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-BOg-vuMP.js";import"./Grid-1nQ5vvaE.js";import"./styled-DdCwn5Ke.js";import"./isMuiElement-BdI-HeXQ.js";import"./Stack-DLX-eFuT.js";import"./Container-DqMY3rTf.js";import"./Typography-dKvhZPmN.js";const $={title:"Components/TreeView/TreeItem",component:r,tags:["autodocs"]},i={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item",id:"tree-item"}),e.jsx(o,{children:e.jsx(r,{...t})})]}),args:{truncate:!0,itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item"}},m={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Selectable Tree Item",id:"tree-item-selectable"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item-selectable"}},a={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item with Icon",id:"tree-item-icon"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"tree-item",label:e.jsxs(c,{container:!0,sx:{alignItems:"center"},children:[e.jsx(l,{sx:{marginRight:1}}),"Tree Item"]}),children:e.jsx(r,{itemId:"sub-tree-item",label:"Sub Tree Item"}),"aria-labelledby":"tree-item-icon"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: TreeItemProps) => <>
      <Typography variant="h1" children="Tree Item" id="tree-item" />
      <TreeView>
        <TreeItem {...args} />
      </TreeView>
    </>,
  args: {
    truncate: true,
    itemId: 'Tree Item Label',
    label: 'Tree Item Label',
    children: <TreeItem itemId="This text is a child of TreeItem" label="This text is a child of TreeItem" />,
    'aria-labelledby': 'tree-item'
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: TreeItemProps) => <>
      <Typography variant="h1" children="Selectable Tree Item" id="tree-item-selectable" />
      <TreeView checkboxSelection>
        <TreeItem {...args} />
      </TreeView>
    </>,
  args: {
    itemId: 'Tree Item Label',
    label: 'Tree Item Label',
    children: <TreeItem itemId="This text is a child of TreeItem" label="This text is a child of TreeItem" />,
    'aria-labelledby': 'tree-item-selectable'
  }
}`,...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: TreeItemProps) => <>
      <Typography variant="h1" children="Tree Item with Icon" id="tree-item-icon" />
      <TreeView checkboxSelection>
        <TreeItem {...args} />
      </TreeView>
    </>,
  args: {
    itemId: 'tree-item',
    label: <Grid container sx={{
      alignItems: 'center'
    }}>
        <FolderIcon sx={{
        marginRight: 1
      }} />
        Tree Item
      </Grid>,
    children: <TreeItem itemId="sub-tree-item" label="Sub Tree Item" />,
    'aria-labelledby': 'tree-item-icon'
  }
}`,...a.parameters?.docs?.source}}};const ee=["_Tree","_TreeCheckboxSelection","_TreeIcon"];export{i as _Tree,m as _TreeCheckboxSelection,a as _TreeIcon,ee as __namedExportsOrder,$ as default};
