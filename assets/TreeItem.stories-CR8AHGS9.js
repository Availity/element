import{j as e}from"./iframe-CLut6yOe.js";import{T as r}from"./TreeItem-DA52xLRv.js";import{T as o}from"./TreeView-Cw2senRI.js";import{F as l}from"./index-CxuuQ7ms.js";import{G as c}from"./index-BGYc3edq.js";import{T as s}from"./index-DmhD3hPK.js";import"./preload-helper-PPVm8Dsz.js";import"./EventManager-DdEsHSoW.js";import"./styled-B56iE4qf.js";import"./createSvgIcon-BcCXBLY5.js";import"./SvgIcon-Dd51Rz_D.js";import"./memoTheme-BCZ6py50.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Checkbox-CsjF1I8z.js";import"./SwitchBase-B76ZlPUO.js";import"./useFormControl-CsURvBpr.js";import"./useSlot-C8ASSSxZ.js";import"./mergeSlotProps-BoE-e40D.js";import"./useForkRef-CW7nwTzV.js";import"./useControlled-BMhEC-vi.js";import"./ButtonBase-B4AmE_nS.js";import"./useTimeout-DSf2abi9.js";import"./TransitionGroupContext-CxTk-KXz.js";import"./useEventCallback-BXl50wnQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-BD3yaoOB.js";import"./CircularProgress-Cb3dAqoX.js";import"./Collapse-B-iUBrJ1.js";import"./useTheme-uzqIZvgA.js";import"./utils-CY0-o-M4.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-KcVtg1pO.js";import"./Grid-CiYph9Ji.js";import"./isMuiElement-CAAIFwhI.js";import"./styled-qS0Yrwc6.js";import"./Stack-C0CMzs2G.js";import"./Container-DKVcPtkF.js";import"./Typography-BLWoaJn_.js";const Y={title:"Components/TreeView/TreeItem",component:r,tags:["autodocs"]},i={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item",id:"tree-item"}),e.jsx(o,{children:e.jsx(r,{...t})})]}),args:{truncate:!0,itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item"}},m={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Selectable Tree Item",id:"tree-item-selectable"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item-selectable"}},a={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item with Icon",id:"tree-item-icon"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"tree-item",label:e.jsxs(c,{container:!0,sx:{alignItems:"center"},children:[e.jsx(l,{sx:{marginRight:1}}),"Tree Item"]}),children:e.jsx(r,{itemId:"sub-tree-item",label:"Sub Tree Item"}),"aria-labelledby":"tree-item-icon"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
