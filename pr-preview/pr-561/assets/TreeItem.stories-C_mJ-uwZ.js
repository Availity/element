import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{T as r}from"./TreeItem-edF2_KV4.js";import{T as a}from"./TreeView-Bt5aaMP7.js";import{F as x}from"./index-CaTz9XJG.js";import{G as g}from"./index-BObrA9Y-.js";import{T as s}from"./index-yTp6TMTk.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./createTheme-CKCRSfxM.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./EventManager-Cp9YrV-m.js";import"./useForkRef-BVrIj09m.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./ownerDocument-DW-IO8s5.js";import"./index-nos-0K8U.js";import"./generateUtilityClass-Bqc1qv72.js";import"./useThemeProps-CHu9suWH.js";import"./DefaultPropsProvider-CIAoFptl.js";import"./useThemeProps-YZ7_EcgO.js";import"./useTheme-BUEqHFQV.js";import"./resolveComponentProps-BiTA-uKg.js";import"./useSlotProps-Cuv6gcjd.js";import"./styled-Dbr85gFc.js";import"./index-Dk74W0Oi.js";import"./createSvgIcon-IUeEQzFc.js";import"./SvgIcon-BS-p1eoC.js";import"./memoTheme-DvanvhnP.js";import"./generateUtilityClasses-DyVAdLaw.js";import"./Checkbox-D003M6rt.js";import"./SwitchBase-DPjFJeLH.js";import"./useFormControl-68oiojFJ.js";import"./useControlled-WdbyInBW.js";import"./ButtonBase-DQZrtVrL.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./emotion-react.browser.esm-rTq5AsO6.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Collapse-9mMULzbG.js";import"./useTheme-ChS1Y5Lw.js";import"./utils-D5ZkK9XY.js";import"./index-BEx9gAkE.js";import"./faUser-CAcveCor.js";import"./Box-BAeL439g.js";import"./extendSxProp-BKaoT_Qt.js";import"./Grid2-CanCOREk.js";import"./styled-C36SNKZX.js";import"./isMuiElement-DAzOCCHH.js";import"./Stack-C5Zrd0Q6.js";import"./Container-nY1JXDIQ.js";import"./Typography-Cng4iL4p.js";import"./index-D-S2KyN4.js";const xe={title:"Components/TreeView/TreeItem",component:r,tags:["autodocs"]},i={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item",id:"tree-item"}),e.jsx(a,{children:e.jsx(r,{...t})})]}),args:{truncate:!0,itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item"}},m={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Selectable Tree Item",id:"tree-item-selectable"}),e.jsx(a,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item-selectable"}},o={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item with Icon",id:"tree-item-icon"}),e.jsx(a,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"tree-item",label:e.jsxs(g,{container:!0,sx:{alignItems:"center"},children:[e.jsx(x,{sx:{marginRight:1}}),"Tree Item"]}),children:e.jsx(r,{itemId:"sub-tree-item",label:"Sub Tree Item"}),"aria-labelledby":"tree-item-icon"}};var l,c,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const ge=["_Tree","_TreeCheckboxSelection","_TreeIcon"];export{i as _Tree,m as _TreeCheckboxSelection,o as _TreeIcon,ge as __namedExportsOrder,xe as default};
