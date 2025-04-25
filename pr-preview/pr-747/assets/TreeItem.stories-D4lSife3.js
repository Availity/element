import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{T as r}from"./TreeItem-BbfAfu4u.js";import{T as a}from"./TreeView-BR6h8kxT.js";import{F as x}from"./index-BAgvEqVW.js";import{G as g}from"./index-CQspzllj.js";import{T as s}from"./index-DSF7aQ5o.js";import"./index-ChsGqxH_.js";import"./identifier-CudAVvBZ.js";import"./index-BgYLq7fD.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./EventManager-Cp9YrV-m.js";import"./useForkRef-Dz4aGlyk.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./ownerDocument-DW-IO8s5.js";import"./index-DyJdRKzS.js";import"./generateUtilityClass-BeVSWKCg.js";import"./useThemeProps-BGrMtKaW.js";import"./DefaultPropsProvider-CWkNlXkE.js";import"./useThemeProps-Do5o_sjG.js";import"./useTheme-Ib01SJ3a.js";import"./resolveComponentProps-CCNxqvxI.js";import"./useSlotProps-BmqT0tgx.js";import"./styled-CKuRQFSa.js";import"./index-BPy8VV6B.js";import"./index-Chjiymov.js";import"./createSvgIcon-BWWwXn7v.js";import"./SvgIcon-CiBNlF9H.js";import"./memoTheme-CpoNRPWX.js";import"./generateUtilityClasses-whvyra8-.js";import"./Checkbox-DDZWJ_7e.js";import"./SwitchBase-CYtmyT40.js";import"./useFormControl-t_-EwZHM.js";import"./useControlled-DxC1uCGX.js";import"./ButtonBase-D97P5WV0.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./emotion-react.browser.esm-v7Jm8XFw.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Collapse-CiPJcNM-.js";import"./useTheme-Cx1wRXKO.js";import"./utils-tFrEP9Vf.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./Box-Dv31mJKI.js";import"./extendSxProp-BY7TjwKM.js";import"./Grid2-JMPt1-k0.js";import"./styled-Dbr83ACF.js";import"./isMuiElement-DiOAsJE6.js";import"./Stack-qbqOHiMo.js";import"./Container-DVbvSSVb.js";import"./Typography-COSof5sR.js";import"./index-DfraP8LW.js";const ye={title:"Components/TreeView/TreeItem",component:r,tags:["autodocs"]},i={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item",id:"tree-item"}),e.jsx(a,{children:e.jsx(r,{...t})})]}),args:{truncate:!0,itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item"}},m={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Selectable Tree Item",id:"tree-item-selectable"}),e.jsx(a,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item-selectable"}},o={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item with Icon",id:"tree-item-icon"}),e.jsx(a,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"tree-item",label:e.jsxs(g,{container:!0,sx:{alignItems:"center"},children:[e.jsx(x,{sx:{marginRight:1}}),"Tree Item"]}),children:e.jsx(r,{itemId:"sub-tree-item",label:"Sub Tree Item"}),"aria-labelledby":"tree-item-icon"}};var l,c,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
