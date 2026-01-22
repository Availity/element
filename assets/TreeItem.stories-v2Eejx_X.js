import{j as e}from"./iframe-P-I-t7s_.js";import{T as r}from"./TreeItem-D1swRJty.js";import{T as o}from"./TreeView-BYfksKNy.js";import{F as l}from"./index-C3cy06cM.js";import{G as c}from"./index-DGaASH14.js";import{T as s}from"./index-DWh3JVg2.js";import"./preload-helper-PPVm8Dsz.js";import"./EventManager-bLwvbgwT.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./mergeSlotProps-CDm4lxrI.js";import"./useSlotProps-Cx6Yk_v4.js";import"./useForkRef-B5SqA4pZ.js";import"./styled-DNi79hKI.js";import"./createSvgIcon-JwEd2gcS.js";import"./SvgIcon-DmOXCSGB.js";import"./memoTheme-Bi3jfVWD.js";import"./Checkbox-DpOG-Ngj.js";import"./SwitchBase-CrBPRb-c.js";import"./useFormControl-PrL4cH60.js";import"./useSlot-DY-xq6aU.js";import"./useControlled-Cqclzim-.js";import"./ButtonBase-P5TjO14T.js";import"./useTimeout-Dzhca5Jx.js";import"./TransitionGroupContext-Dvdi4lCr.js";import"./useEventCallback-DAYatbRK.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-BWpcczPW.js";import"./CircularProgress-BRuGXxty.js";import"./Collapse-_SLmHTOg.js";import"./useTheme-BPf64W-X.js";import"./utils-DTqcJog-.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Box-BCYJimk9.js";import"./Grid-DUqLWWvo.js";import"./styled-Cp0DTD0x.js";import"./isMuiElement-DIafhdSN.js";import"./Stack-JGFv5pEs.js";import"./Container-8zPEfJs6.js";import"./Typography-BFwAhjnY.js";const Z={title:"Components/TreeView/TreeItem",component:r,tags:["autodocs"]},i={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item",id:"tree-item"}),e.jsx(o,{children:e.jsx(r,{...t})})]}),args:{truncate:!0,itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item"}},m={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Selectable Tree Item",id:"tree-item-selectable"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"Tree Item Label",label:"Tree Item Label",children:e.jsx(r,{itemId:"This text is a child of TreeItem",label:"This text is a child of TreeItem"}),"aria-labelledby":"tree-item-selectable"}},a={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h1",children:"Tree Item with Icon",id:"tree-item-icon"}),e.jsx(o,{checkboxSelection:!0,children:e.jsx(r,{...t})})]}),args:{itemId:"tree-item",label:e.jsxs(c,{container:!0,sx:{alignItems:"center"},children:[e.jsx(l,{sx:{marginRight:1}}),"Tree Item"]}),children:e.jsx(r,{itemId:"sub-tree-item",label:"Sub Tree Item"}),"aria-labelledby":"tree-item-icon"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const $=["_Tree","_TreeCheckboxSelection","_TreeIcon"];export{i as _Tree,m as _TreeCheckboxSelection,a as _TreeIcon,$ as __namedExportsOrder,Z as default};
