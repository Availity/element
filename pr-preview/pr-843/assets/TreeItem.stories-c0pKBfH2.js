import{j as e}from"./iframe-DKPLEfLw.js";import{T as r}from"./TreeItem-BkAN1Y3x.js";import{T as o}from"./TreeView-DwbsDHj5.js";import{F as x}from"./index-WRElMkUo.js";import{G as g}from"./index-Dn59n-rN.js";import{T as s}from"./index-B_gHUUTW.js";import"./preload-helper-Dp1pzeXC.js";import"./EventManager-DE69Uj1w.js";import"./index-D_mIFYgG.js";import"./useTimeout-C_Ka5Mcj.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./mergeSlotProps-DczvM8iT.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-RoKiuIH8.js";import"./useForkRef-BBFL5x5N.js";import"./styled-DmVvl1cy.js";import"./createSvgIcon-vtaDbQWp.js";import"./SvgIcon-FjAnPN_Y.js";import"./memoTheme-DCtqnaOZ.js";import"./Checkbox-BUOBBCwl.js";import"./SwitchBase-XH4IthcC.js";import"./useFormControl-B1pwVxN7.js";import"./useSlot-BRbtrhUo.js";import"./useControlled-RZIZY8-C.js";import"./ButtonBase-ChXh0SoD.js";import"./TransitionGroupContext-PAkUv-tF.js";import"./useEventCallback-DDVZojhm.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-AOTIRq8g.js";import"./CircularProgress-QNpYF3E0.js";import"./Collapse-BtXMWKf0.js";import"./useTheme-9F3p9Qod.js";import"./utils-BvzjqUtG.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-CZdlnD3e.js";import"./Grid-Bc7_QC4M.js";import"./styled-Wz6Z4Uga.js";import"./isMuiElement-Bob4bJgN.js";import"./Stack-ClwGR_Ch.js";import"./Container-DJ1Q8iJN.js";import"./Typography-BTTsir7-.js";const ce={title:"Components/TreeView/TreeItem",component:r,tags:["autodocs"]},i={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item",id:"tree-item"}),e.jsx(o,{children:e.jsx(r,{...t})})]}),args:{truncate:!0,itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item"}},m={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Selectable Tree Item",id:"tree-item-selectable"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item-selectable"}},a={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item with Icon",id:"tree-item-icon"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"tree-item",label:e.jsxs(g,{container:!0,sx:{alignItems:"center"},children:[e.jsx(x,{sx:{marginRight:1}}),"Tree Item"]}),children:e.jsx(r,{itemId:"sub-tree-item",label:"Sub Tree Item"}),"aria-labelledby":"tree-item-icon"}};var l,c,n;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
