import{j as e}from"./iframe-QKKiXGe2.js";import{T as r}from"./TreeItem-CGhRL0DM.js";import{T as o}from"./TreeView-DmFcEqpP.js";import{F as l}from"./index-C-csxGdp.js";import{G as c}from"./index-DmDUxSlw.js";import{T as s}from"./index-p3f1BLXv.js";import"./preload-helper-PPVm8Dsz.js";import"./EventManager-oTSDn-AQ.js";import"./styled-CQy7SchW.js";import"./createSvgIcon-Bm4mBUxC.js";import"./SvgIcon-D3LX6zM9.js";import"./memoTheme-CZ6h3Fbh.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Checkbox-CKPFhv7F.js";import"./SwitchBase-BB6lrJXc.js";import"./useFormControl-BS7uljQq.js";import"./useSlot-DRcEuyBg.js";import"./mergeSlotProps-C7lIBrBK.js";import"./useForkRef-GKR9CYz5.js";import"./useControlled-BjERoBEC.js";import"./ButtonBase-BjGfF1Y_.js";import"./useTimeout-DkvHtZOb.js";import"./TransitionGroupContext-CAofQ-AT.js";import"./useEventCallback-KenlF9RE.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-CpR-3M6H.js";import"./CircularProgress-BAVpeqhg.js";import"./Collapse-BzKppt1G.js";import"./useTheme-CobnQWC-.js";import"./utils-Dh1OrGpA.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-DS6KTGM7.js";import"./Grid-BWZayuEN.js";import"./isMuiElement-BPsBBR2z.js";import"./styled-CL_ITmKE.js";import"./Stack-vCt2ORwh.js";import"./Container-B58issDp.js";import"./Typography-lfATY7Ds.js";const Y={title:"Components/TreeView/TreeItem",component:r,tags:["autodocs"]},i={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item",id:"tree-item"}),e.jsx(o,{children:e.jsx(r,{...t})})]}),args:{truncate:!0,itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item"}},m={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Selectable Tree Item",id:"tree-item-selectable"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item-selectable"}},a={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item with Icon",id:"tree-item-icon"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"tree-item",label:e.jsxs(c,{container:!0,sx:{alignItems:"center"},children:[e.jsx(l,{sx:{marginRight:1}}),"Tree Item"]}),children:e.jsx(r,{itemId:"sub-tree-item",label:"Sub Tree Item"}),"aria-labelledby":"tree-item-icon"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
