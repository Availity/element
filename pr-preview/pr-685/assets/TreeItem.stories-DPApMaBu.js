import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{T as r}from"./TreeItem-D4cA5ufk.js";import{T as a}from"./TreeView-Ck33FFVt.js";import{F as x}from"./index-4AU0IlPL.js";import{G as g}from"./index-Cyp_3NIz.js";import{T as s}from"./index-BtPDELIe.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./identifier-Dtqimryx.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./EventManager-Cp9YrV-m.js";import"./useForkRef-BVrIj09m.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./ownerDocument-DW-IO8s5.js";import"./index-nos-0K8U.js";import"./generateUtilityClass-CVWqFxsA.js";import"./useThemeProps-NV-uCBd-.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./useThemeProps-BIK-1DKm.js";import"./useTheme-C2CrmYKc.js";import"./resolveComponentProps-Dg20wxiM.js";import"./useSlotProps-BAIpVL6Y.js";import"./styled-CF1hcdwO.js";import"./index-Dk74W0Oi.js";import"./createSvgIcon-TketyoFF.js";import"./SvgIcon-DSdWmKAH.js";import"./memoTheme-D-rVhYRp.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./Checkbox-imGzR8Us.js";import"./SwitchBase-Z9YgLJlx.js";import"./useFormControl-68oiojFJ.js";import"./useControlled-WdbyInBW.js";import"./ButtonBase-DbVRbsLs.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Collapse-quvbLMTx.js";import"./useTheme-DUkCvbx_.js";import"./utils-D5ZkK9XY.js";import"./index-BEx9gAkE.js";import"./faCircleArrowRight-BeBmJtPK.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./Box-DWnb8VZB.js";import"./extendSxProp-B5AgUjQT.js";import"./Grid2-y9MPRr2u.js";import"./styled-vBjI3IQc.js";import"./isMuiElement-DAzOCCHH.js";import"./Stack-BcsM4Vc0.js";import"./Container-Cqq8qXXg.js";import"./Typography-CvSvtD2a.js";import"./index-f0Aa_BgU.js";const ue={title:"Components/TreeView/TreeItem",component:r,tags:["autodocs"]},i={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item",id:"tree-item"}),e.jsx(a,{children:e.jsx(r,{...t})})]}),args:{truncate:!0,itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item"}},m={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Selectable Tree Item",id:"tree-item-selectable"}),e.jsx(a,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item-selectable"}},o={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item with Icon",id:"tree-item-icon"}),e.jsx(a,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"tree-item",label:e.jsxs(g,{container:!0,sx:{alignItems:"center"},children:[e.jsx(x,{sx:{marginRight:1}}),"Tree Item"]}),children:e.jsx(r,{itemId:"sub-tree-item",label:"Sub Tree Item"}),"aria-labelledby":"tree-item-icon"}};var l,c,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const je=["_Tree","_TreeCheckboxSelection","_TreeIcon"];export{i as _Tree,m as _TreeCheckboxSelection,o as _TreeIcon,je as __namedExportsOrder,ue as default};
