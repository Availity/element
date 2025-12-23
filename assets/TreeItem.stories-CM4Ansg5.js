import{j as e}from"./iframe-DF1q2aaL.js";import{T as r}from"./TreeItem-f6_yVldP.js";import{T as o}from"./TreeView-Dpj7V6cA.js";import{F as x}from"./index-DJNX-Iyq.js";import{G as g}from"./index-DCToeNHS.js";import{T as s}from"./index-Q8RjvuCg.js";import"./preload-helper-Dp1pzeXC.js";import"./EventManager-qXQ-9Zei.js";import"./index-59p-ZqwA.js";import"./useTimeout-CJLBifOK.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./mergeSlotProps-BnmzE4jq.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-B0ZOsC4g.js";import"./useForkRef-D-TFDBL_.js";import"./styled-CFEXa4qH.js";import"./createSvgIcon-DzcieuLS.js";import"./SvgIcon-DB8Z1ZTq.js";import"./memoTheme-BD6H9365.js";import"./Checkbox-D2YTkWqF.js";import"./SwitchBase-iVmERgWS.js";import"./useFormControl-ByL3kvVY.js";import"./useSlot-CQvSmYnu.js";import"./useControlled-C2txOzyk.js";import"./ButtonBase-D5OUD9Sm.js";import"./TransitionGroupContext-DTdRQeqO.js";import"./useEventCallback-C9NbUrxX.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-bUytW4Ka.js";import"./CircularProgress-DkK8nyO-.js";import"./Collapse-UbS1CPrc.js";import"./useTheme-C0GFliqz.js";import"./utils-BdM8s10D.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-CIJZFnEp.js";import"./Grid-BQHRv1eX.js";import"./styled-PDED6P24.js";import"./isMuiElement-Q-8wUiYz.js";import"./Stack--jn-4dia.js";import"./Container-CTcWCZH6.js";import"./Typography-cWmdXt40.js";const ce={title:"Components/TreeView/TreeItem",component:r,tags:["autodocs"]},i={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item",id:"tree-item"}),e.jsx(o,{children:e.jsx(r,{...t})})]}),args:{truncate:!0,itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item"}},m={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Selectable Tree Item",id:"tree-item-selectable"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item-selectable"}},a={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item with Icon",id:"tree-item-icon"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"tree-item",label:e.jsxs(g,{container:!0,sx:{alignItems:"center"},children:[e.jsx(x,{sx:{marginRight:1}}),"Tree Item"]}),children:e.jsx(r,{itemId:"sub-tree-item",label:"Sub Tree Item"}),"aria-labelledby":"tree-item-icon"}};var l,c,n;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
