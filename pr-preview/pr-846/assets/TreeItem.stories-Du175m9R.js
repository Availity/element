import{j as e}from"./iframe-uHgbxI5K.js";import{T as r}from"./TreeItem-B5LrEKmi.js";import{T as o}from"./TreeView-BXFKJN4j.js";import{F as x}from"./index-CUd5PmZT.js";import{G as g}from"./index-BzyIUxG9.js";import{T as s}from"./index-v9QuSlC7.js";import"./preload-helper-Dp1pzeXC.js";import"./EventManager-TOlBTEZk.js";import"./index-DyU1fC7A.js";import"./useTimeout-CnBSTBeY.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./mergeSlotProps-Muvz4q9m.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-BTIA_7et.js";import"./useForkRef-BQsEeVXe.js";import"./styled-8YbhM9a0.js";import"./createSvgIcon-BmijsGhR.js";import"./SvgIcon-C1fws6HS.js";import"./memoTheme-oX4ulD_d.js";import"./Checkbox-cAdizeDs.js";import"./SwitchBase-Coc1IMyb.js";import"./useFormControl-BeaDuuzQ.js";import"./useSlot-DoiGXRjP.js";import"./useControlled-kFiMxWUJ.js";import"./ButtonBase-DWgIiiPw.js";import"./TransitionGroupContext-D0JdioPb.js";import"./useEventCallback-1jk_qbz7.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-CYc5iuk1.js";import"./CircularProgress-DxKRrnZT.js";import"./Collapse-C8biy26g.js";import"./useTheme-CtIbOmqo.js";import"./utils-Cj1f_ISK.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-CGtHD5r9.js";import"./Grid-CoybaeI6.js";import"./styled-sJpgZ5yK.js";import"./isMuiElement-DF8mSHc6.js";import"./Stack-DRfNMs7N.js";import"./Container-CyeFbR1g.js";import"./Typography-BUwJzphg.js";const ce={title:"Components/TreeView/TreeItem",component:r,tags:["autodocs"]},i={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item",id:"tree-item"}),e.jsx(o,{children:e.jsx(r,{...t})})]}),args:{truncate:!0,itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item"}},m={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Selectable Tree Item",id:"tree-item-selectable"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item-selectable"}},a={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item with Icon",id:"tree-item-icon"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"tree-item",label:e.jsxs(g,{container:!0,sx:{alignItems:"center"},children:[e.jsx(x,{sx:{marginRight:1}}),"Tree Item"]}),children:e.jsx(r,{itemId:"sub-tree-item",label:"Sub Tree Item"}),"aria-labelledby":"tree-item-icon"}};var l,c,n;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
