import{j as e}from"./iframe-DDdys5VZ.js";import{T as r}from"./TreeItem-JmUFzanf.js";import{T as o}from"./TreeView-CeLKFnz3.js";import{F as l}from"./index-BnYYGU_m.js";import{G as c}from"./index-C23gf4rm.js";import{T as s}from"./index-Z7ZBVKdt.js";import"./preload-helper-PPVm8Dsz.js";import"./EventManager-Bu5fAomw.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./mergeSlotProps-4h4cl7Iv.js";import"./useSlotProps-CMLU_yM0.js";import"./useForkRef-CnZ00-R9.js";import"./styled-hFTqa5AW.js";import"./createSvgIcon-Q7sAoZ8R.js";import"./SvgIcon-DHyw-wAY.js";import"./memoTheme-Cxx5qwbm.js";import"./Checkbox-BkBkgm3h.js";import"./SwitchBase-DjDUEO21.js";import"./useFormControl-BqJWQcaa.js";import"./useSlot-tZFGbiOx.js";import"./useControlled-DPgR13iz.js";import"./ButtonBase-DZVI88h8.js";import"./useTimeout-DZwXI9W9.js";import"./TransitionGroupContext-Dv_3Vfqr.js";import"./useEventCallback-Cc8SLIyn.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-DywXoXlU.js";import"./CircularProgress-CD5GaXFj.js";import"./Collapse-48uCS0oQ.js";import"./useTheme-3S67f5Cb.js";import"./utils-CF4In8Xa.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Box-D4-1J1wq.js";import"./Grid-D5jHLohi.js";import"./styled-D0qD_60F.js";import"./isMuiElement-CGZGs55h.js";import"./Stack-XR9IapJe.js";import"./Container-BECr7IV3.js";import"./Typography-CZtxpkXF.js";const Z={title:"Components/TreeView/TreeItem",component:r,tags:["autodocs"]},i={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item",id:"tree-item"}),e.jsx(o,{children:e.jsx(r,{...t})})]}),args:{truncate:!0,itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item"}},m={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Selectable Tree Item",id:"tree-item-selectable"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item-selectable"}},a={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item with Icon",id:"tree-item-icon"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"tree-item",label:e.jsxs(c,{container:!0,sx:{alignItems:"center"},children:[e.jsx(l,{sx:{marginRight:1}}),"Tree Item"]}),children:e.jsx(r,{itemId:"sub-tree-item",label:"Sub Tree Item"}),"aria-labelledby":"tree-item-icon"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const $=["_Tree","_TreeCheckboxSelection","_TreeIcon"];export{i as _Tree,m as _TreeCheckboxSelection,a as _TreeIcon,$ as __namedExportsOrder,Z as default};
