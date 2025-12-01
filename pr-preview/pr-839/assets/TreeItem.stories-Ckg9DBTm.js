import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as r}from"./TreeItem-Tn0IT1l1.js";import{T as a}from"./TreeView-C7IZx-Dd.js";import{F as x}from"./index-BgHLshU-.js";import{G as g}from"./index-DWvMPRyT.js";import{T as s}from"./index-7dkkVNWZ.js";import"./extends-CF3RwP-h.js";import"./index-BSuoOqEd.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./EventManager-BMONEqLZ.js";import"./useTimeout-B9dULhq6.js";import"./index-bqlmQ0VS.js";import"./identifier-DhnHujDJ.js";import"./useThemeProps-C6agzR_2.js";import"./DefaultPropsProvider-B1sWsgx2.js";import"./useThemeProps-DxTj-Mj7.js";import"./useTheme-C_c7PR3o.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./mergeSlotProps-C8ahzxnq.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-BphRKsXg.js";import"./useForkRef-BIkqQIqh.js";import"./styled-9znMky1q.js";import"./createSvgIcon-DjY4rWdK.js";import"./SvgIcon-enpUMgPP.js";import"./memoTheme-BwIkkReu.js";import"./Checkbox-DYMm0_cs.js";import"./SwitchBase-D9HE_1I9.js";import"./useFormControl-BP1ipPfY.js";import"./useSlot-jI6_c_PV.js";import"./useControlled-DUUijreW.js";import"./ButtonBase-AdAh9sBA.js";import"./TransitionGroupContext-CcytU7uK.js";import"./emotion-react.browser.esm-CVJjYY2z.js";import"./useEventCallback-Dvy07Fv6.js";import"./useEnhancedEffect-CIAiDanS.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-1djKqk8T.js";import"./CircularProgress-I3IM84c9.js";import"./Collapse-Dpx26zjc.js";import"./useTheme-DG5qVMsu.js";import"./utils-DuVTnmV7.js";import"./index-CRBziY_1.js";import"./index-CCz_6dyq.js";import"./faCircleArrowRight-DSzUu1Qy.js";import"./faUser-D77uLSLS.js";import"./Box-BAprLmuU.js";import"./extendSxProp-plByhdXY.js";import"./Grid-BrQtrDmH.js";import"./styled-BN1MHGNr.js";import"./isMuiElement-CsRUsG_W.js";import"./Stack-C-7_RWLD.js";import"./Container-BRT0GL3j.js";import"./Typography-CHtEfMke.js";import"./index-DtRw77fL.js";const Se={title:"Components/TreeView/TreeItem",component:r,tags:["autodocs"]},i={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item",id:"tree-item"}),e.jsx(a,{children:e.jsx(r,{...t})})]}),args:{truncate:!0,itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item"}},m={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Selectable Tree Item",id:"tree-item-selectable"}),e.jsx(a,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item-selectable"}},o={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item with Icon",id:"tree-item-icon"}),e.jsx(a,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"tree-item",label:e.jsxs(g,{container:!0,sx:{alignItems:"center"},children:[e.jsx(x,{sx:{marginRight:1}}),"Tree Item"]}),children:e.jsx(r,{itemId:"sub-tree-item",label:"Sub Tree Item"}),"aria-labelledby":"tree-item-icon"}};var l,c,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const we=["_Tree","_TreeCheckboxSelection","_TreeIcon"];export{i as _Tree,m as _TreeCheckboxSelection,o as _TreeIcon,we as __namedExportsOrder,Se as default};
