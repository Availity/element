import{j as e}from"./iframe-Cv4YEYCT.js";import{T as r}from"./TreeItem-BB-QJk-S.js";import{T as o}from"./TreeView-D8b0ZMHI.js";import{F as x}from"./index-CNJpAeel.js";import{G as g}from"./index-bB8uZqWv.js";import{T as s}from"./index-Cy8ZwHJB.js";import"./preload-helper-Dp1pzeXC.js";import"./EventManager-D-n36TFl.js";import"./index-L5zdR5bf.js";import"./useTimeout-S5FMYS9P.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./mergeSlotProps-bXMVHHr9.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-DpLQsBTB.js";import"./useForkRef-Cy9-wLDX.js";import"./styled-BjYrgzj8.js";import"./createSvgIcon-anG-4vyn.js";import"./SvgIcon-RzgLEiZ2.js";import"./memoTheme-pu_-LVrP.js";import"./Checkbox-sBcguM7o.js";import"./SwitchBase-CKHrTpOb.js";import"./useFormControl-CIuk8i81.js";import"./useSlot-DM3XJHLF.js";import"./useControlled-DotOmqWu.js";import"./ButtonBase-Te2dWPfF.js";import"./TransitionGroupContext-ReV1kAll.js";import"./useEventCallback-Dezg1Jp2.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-pd1YXqCy.js";import"./CircularProgress-4dbP_wqt.js";import"./Collapse-BYf9d2UP.js";import"./useTheme-yn0WqvlF.js";import"./utils-CC-nVGrC.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-GX48hKKC.js";import"./Grid-CuYwHY7F.js";import"./styled-Cz-jNn-e.js";import"./isMuiElement-C4Xkg-Fl.js";import"./Stack-BZ8fB6iW.js";import"./Container-Ceu7L51X.js";import"./Typography-BHaCpI2A.js";const ce={title:"Components/TreeView/TreeItem",component:r,tags:["autodocs"]},i={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item",id:"tree-item"}),e.jsx(o,{children:e.jsx(r,{...t})})]}),args:{truncate:!0,itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item"}},m={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Selectable Tree Item",id:"tree-item-selectable"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item-selectable"}},a={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item with Icon",id:"tree-item-icon"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"tree-item",label:e.jsxs(g,{container:!0,sx:{alignItems:"center"},children:[e.jsx(x,{sx:{marginRight:1}}),"Tree Item"]}),children:e.jsx(r,{itemId:"sub-tree-item",label:"Sub Tree Item"}),"aria-labelledby":"tree-item-icon"}};var l,c,n;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(n=(c=i.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var d,p,T;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(T=(p=m.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};var I,h,b;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const ne=["_Tree","_TreeCheckboxSelection","_TreeIcon"];export{i as _Tree,m as _TreeCheckboxSelection,a as _TreeIcon,ne as __namedExportsOrder,ce as default};
