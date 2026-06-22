import{r as d,j as e}from"./iframe-BcpGFM79.js";import{T as i}from"./TableSortLabel-vhK_baF5.js";import{G as r}from"./Grid-CobFFp4x.js";import"./preload-helper-Dab_6GC_.js";import"./Data-DwJeur80.js";import"./FaSvgIcon-CT_rBCtN.js";import"./SvgIcon-DwHLgNU7.js";import"./memoTheme-CUR-_UQu.js";import"./styled-YELB7PbO.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Box-YZXBtx3i.js";import"./visuallyHidden-Dan1xhjv.js";import"./createSvgIcon-D6BcWLqc.js";import"./useSlot-COYLd7Pd.js";import"./mergeSlotProps-Y-QEFSGT.js";import"./useForkRef-BE9Mh8bk.js";import"./ButtonBase-DuPW9E1K.js";import"./useTimeout-D7cMLa2k.js";import"./TransitionGroupContext-DMVjCYVP.js";import"./useEventCallback-B998UMHo.js";import"./isFocusVisible-B8k4qzLc.js";import"./Grid-DtKUTAQi.js";import"./useTheme-DjrtHLeH.js";import"./isMuiElement-IVbgCQ7T.js";import"./styled-CAzon1OD.js";const V={title:"Components/Table/TableSortLabel",component:i,tags:["autodocs"],args:{children:"TableSortLabel content"}},n={render:o=>{const[t,a]=d.useState();return e.jsx(i,{active:!!t,direction:t,onClick:()=>a(t==="asc"?"desc":"asc"),...o})}},s={render:()=>e.jsxs(r,{container:!0,spacing:1,children:[e.jsx(r,{size:{xs:3},children:"Default"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{children:"Column Header"})}),e.jsx(r,{size:{xs:3},children:"Active Undefined"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{active:!0,children:"Column Header"})}),e.jsx(r,{size:{xs:3},children:"Active Ascending"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{active:!0,direction:"asc",children:"Column Header"})}),e.jsx(r,{size:{xs:3},children:"Active Descending"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{active:!0,direction:"desc",children:"Column Header"})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (args: TableSortLabelProps) => {
    type Order = 'asc' | 'desc' | undefined;
    const [order, setOrder] = useState<Order>();
    return <TableSortLabel active={!!order} direction={order} onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')} {...args} />;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid size={{
      xs: 3
    }}>Default</Grid>
      <Grid size={{
      xs: 9
    }}>
        <TableSortLabel>Column Header</TableSortLabel>
      </Grid>
      <Grid size={{
      xs: 3
    }}>Active Undefined</Grid>
      <Grid size={{
      xs: 9
    }}>
        <TableSortLabel active>Column Header</TableSortLabel>
      </Grid>
      <Grid size={{
      xs: 3
    }}>Active Ascending</Grid>
      <Grid size={{
      xs: 9
    }}>
        <TableSortLabel active direction="asc">
          Column Header
        </TableSortLabel>
      </Grid>
      <Grid size={{
      xs: 3
    }}>Active Descending</Grid>
      <Grid size={{
      xs: 9
    }}>
        <TableSortLabel active direction="desc">
          Column Header
        </TableSortLabel>
      </Grid>
    </Grid>
}`,...s.parameters?.docs?.source}}};const y=["_TableSortLabel","_Variants"];export{n as _TableSortLabel,s as _Variants,y as __namedExportsOrder,V as default};
