import{j as e}from"./iframe-BiHmAaXu.js";import{T as r}from"./TreeItem-B2o5LvQs.js";import{T as o}from"./TreeView-DAtYnz-0.js";import{F as x}from"./index-BvV5FGi6.js";import{G as g}from"./index-Cgd0JpyD.js";import{T as s}from"./index-SvqotCfh.js";import"./preload-helper-Dp1pzeXC.js";import"./EventManager-BgslwqEu.js";import"./useTimeout-BxBXWuFq.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./mergeSlotProps-vY4QflWx.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-BP935MD-.js";import"./useForkRef-egRdNH_q.js";import"./styled-Dtda04LL.js";import"./createSvgIcon-IF8Bi_Qp.js";import"./SvgIcon-CbropkBN.js";import"./memoTheme-zGeQXNTV.js";import"./Checkbox-BtChiaE9.js";import"./SwitchBase-DdUPb-fL.js";import"./useFormControl-DA3IDcHJ.js";import"./useSlot-BwnKjiCD.js";import"./useControlled-QJx0Pv3z.js";import"./ButtonBase-DdAFxN83.js";import"./TransitionGroupContext-B15fWyGj.js";import"./useEventCallback-A-8aNATG.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-BH9FGeIP.js";import"./CircularProgress-BsuuE2cE.js";import"./Collapse-DHObo2N6.js";import"./useTheme-D51yRe8t.js";import"./utils-Derh_BFQ.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-CiWIFjse.js";import"./Grid-CEmIxvlK.js";import"./styled-Zig1TB_m.js";import"./isMuiElement-DKHzA-If.js";import"./Stack-Dj-nUodw.js";import"./Container-BlXDxTKA.js";import"./Typography-De5LbgvD.js";const le={title:"Components/TreeView/TreeItem",component:r,tags:["autodocs"]},i={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item",id:"tree-item"}),e.jsx(o,{children:e.jsx(r,{...t})})]}),args:{truncate:!0,itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item"}},m={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Selectable Tree Item",id:"tree-item-selectable"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item-selectable"}},a={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item with Icon",id:"tree-item-icon"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"tree-item",label:e.jsxs(g,{container:!0,sx:{alignItems:"center"},children:[e.jsx(x,{sx:{marginRight:1}}),"Tree Item"]}),children:e.jsx(r,{itemId:"sub-tree-item",label:"Sub Tree Item"}),"aria-labelledby":"tree-item-icon"}};var l,c,n;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const ce=["_Tree","_TreeCheckboxSelection","_TreeIcon"];export{i as _Tree,m as _TreeCheckboxSelection,a as _TreeIcon,ce as __namedExportsOrder,le as default};
