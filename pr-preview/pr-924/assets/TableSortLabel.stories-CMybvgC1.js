import{r as d,j as e}from"./iframe-B3KH45W1.js";import{T as i}from"./TableSortLabel-47_dV246.js";import{G as r}from"./Grid-BlezGjUJ.js";import"./preload-helper-Dab_6GC_.js";import"./Data-SUFfCDCQ.js";import"./FaSvgIcon-DUC6Q4wv.js";import"./SvgIcon-DDVH-xS0.js";import"./memoTheme-DWwRHojM.js";import"./styled-B89GBRvi.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Box-B9pOgzbW.js";import"./visuallyHidden-Dan1xhjv.js";import"./createSvgIcon-CP7Sjzln.js";import"./useSlot-DGd0VXU6.js";import"./mergeSlotProps--7hXBDn0.js";import"./useForkRef-C1kAtY37.js";import"./ButtonBase-DgN9Oijw.js";import"./useTimeout-BS1Rp5sI.js";import"./TransitionGroupContext-CAm2K2SY.js";import"./useEventCallback-CVbD2IC6.js";import"./isFocusVisible-B8k4qzLc.js";import"./Grid-CXe_6B0b.js";import"./useTheme-Ds4SDsFm.js";import"./isMuiElement-BGMciLL0.js";import"./styled-CG3DpTjV.js";const V={title:"Components/Table/TableSortLabel",component:i,tags:["autodocs"],args:{children:"TableSortLabel content"}},n={render:o=>{const[t,a]=d.useState();return e.jsx(i,{active:!!t,direction:t,onClick:()=>a(t==="asc"?"desc":"asc"),...o})}},s={render:()=>e.jsxs(r,{container:!0,spacing:1,children:[e.jsx(r,{size:{xs:3},children:"Default"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{children:"Column Header"})}),e.jsx(r,{size:{xs:3},children:"Active Undefined"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{active:!0,children:"Column Header"})}),e.jsx(r,{size:{xs:3},children:"Active Ascending"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{active:!0,direction:"asc",children:"Column Header"})}),e.jsx(r,{size:{xs:3},children:"Active Descending"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{active:!0,direction:"desc",children:"Column Header"})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
