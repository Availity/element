import{j as e}from"./iframe-BfiSjCZE.js";import{T as r}from"./TreeItem-1RotUj5o.js";import{T as o}from"./TreeView-RQmN_YWl.js";import{F as l}from"./index-CnlcVsMi.js";import{G as c}from"./index-DXU92sR7.js";import{T as s}from"./index-Ditxfwx6.js";import"./preload-helper-PPVm8Dsz.js";import"./EventManager-5bzqAyEX.js";import"./styled-B9LoXHeR.js";import"./createSvgIcon-DV4tT70v.js";import"./SvgIcon-pfgupZ4n.js";import"./memoTheme-Bf2lNlfa.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Checkbox-BgLjUNtM.js";import"./SwitchBase-AFFAmAWt.js";import"./useFormControl-C5CMMi3k.js";import"./useSlot-BvJ3REjy.js";import"./mergeSlotProps-d8P6odjW.js";import"./useForkRef-KHwM-Xb0.js";import"./useControlled-DuHd5Dfi.js";import"./ButtonBase-B0Rj5enX.js";import"./useTimeout-Dvw-KAbd.js";import"./TransitionGroupContext-BprlU7j-.js";import"./useEventCallback-BRDDRqyT.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-DuqHZ2js.js";import"./CircularProgress-DFM5h0gz.js";import"./Collapse-DUOEVSSh.js";import"./useTheme-CyCmmmWE.js";import"./utils-CZVImzMM.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-CRTcjAl_.js";import"./Grid-C2RK_1Jw.js";import"./isMuiElement-CIl3go_L.js";import"./styled-Bty96-Ys.js";import"./Stack-ggz2xYsp.js";import"./Container-B6cEEQtr.js";import"./Typography-C4HmXqwR.js";const Y={title:"Components/TreeView/TreeItem",component:r,tags:["autodocs"]},i={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item",id:"tree-item"}),e.jsx(o,{children:e.jsx(r,{...t})})]}),args:{truncate:!0,itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item"}},m={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Selectable Tree Item",id:"tree-item-selectable"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item-selectable"}},a={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item with Icon",id:"tree-item-icon"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"tree-item",label:e.jsxs(c,{container:!0,sx:{alignItems:"center"},children:[e.jsx(l,{sx:{marginRight:1}}),"Tree Item"]}),children:e.jsx(r,{itemId:"sub-tree-item",label:"Sub Tree Item"}),"aria-labelledby":"tree-item-icon"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Z=["_Tree","_TreeCheckboxSelection","_TreeIcon"];export{i as _Tree,m as _TreeCheckboxSelection,a as _TreeIcon,Z as __namedExportsOrder,Y as default};
