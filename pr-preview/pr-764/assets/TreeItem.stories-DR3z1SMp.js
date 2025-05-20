import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{T as r}from"./TreeItem-BuW3js1i.js";import{T as a}from"./TreeView-CnitQQ-f.js";import{F as x}from"./index-CmMPo3bx.js";import{G as g}from"./index-DmY_4rvh.js";import{T as s}from"./index-ClMemn8c.js";import"./index-ChsGqxH_.js";import"./identifier-CHUoN9pF.js";import"./index-BgYLq7fD.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./EventManager-Cp9YrV-m.js";import"./useForkRef-Dz4aGlyk.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./ownerDocument-DW-IO8s5.js";import"./index-DyJdRKzS.js";import"./generateUtilityClass-GxznSYtt.js";import"./useThemeProps-BADT0iz2.js";import"./DefaultPropsProvider-ArLX9SCD.js";import"./useThemeProps-BNBLMFIr.js";import"./useTheme-CVByJb8R.js";import"./resolveComponentProps-XMphxBSb.js";import"./useSlotProps-DT0tbkWv.js";import"./styled-FZfCzBz5.js";import"./index-BPy8VV6B.js";import"./index-Chjiymov.js";import"./createSvgIcon-DK1T27V3.js";import"./SvgIcon-D3xe1wVB.js";import"./memoTheme-BLrvrRyo.js";import"./generateUtilityClasses-aotQgNYZ.js";import"./Checkbox-DEN02h0-.js";import"./SwitchBase-DpeF2ikX.js";import"./useFormControl-t_-EwZHM.js";import"./useControlled-DxC1uCGX.js";import"./ButtonBase-DwAEbHIm.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./emotion-react.browser.esm-DW5OmoQI.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Collapse-RuyvmUHH.js";import"./useTheme-BGaXYmwe.js";import"./utils-tFrEP9Vf.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./Box-BU2WakPM.js";import"./extendSxProp-BZnzVrgj.js";import"./Grid2-BbvvmKhh.js";import"./styled-CsKbBpC_.js";import"./isMuiElement-DiOAsJE6.js";import"./Stack-2ILcP_1D.js";import"./Container-DvcsWH8C.js";import"./Typography-geKghQyJ.js";import"./index-Df15702_.js";const ye={title:"Components/TreeView/TreeItem",component:r,tags:["autodocs"]},i={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item",id:"tree-item"}),e.jsx(a,{children:e.jsx(r,{...t})})]}),args:{truncate:!0,itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item"}},m={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Selectable Tree Item",id:"tree-item-selectable"}),e.jsx(a,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item-selectable"}},o={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item with Icon",id:"tree-item-icon"}),e.jsx(a,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"tree-item",label:e.jsxs(g,{container:!0,sx:{alignItems:"center"},children:[e.jsx(x,{sx:{marginRight:1}}),"Tree Item"]}),children:e.jsx(r,{itemId:"sub-tree-item",label:"Sub Tree Item"}),"aria-labelledby":"tree-item-icon"}};var l,c,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var n,d,T;m.parameters={...m.parameters,docs:{...(n=m.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(T=(d=m.parameters)==null?void 0:d.docs)==null?void 0:T.source}}};var I,h,b;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const Se=["_Tree","_TreeCheckboxSelection","_TreeIcon"];export{i as _Tree,m as _TreeCheckboxSelection,o as _TreeIcon,Se as __namedExportsOrder,ye as default};
