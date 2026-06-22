import{r as d,j as e}from"./iframe-BdOkmXSO.js";import{T as i}from"./TableSortLabel-CjuHZyaj.js";import{G as r}from"./Grid-C8TSgpaR.js";import"./preload-helper-Dab_6GC_.js";import"./Data-BVZizbSW.js";import"./FaSvgIcon-D_zjT4On.js";import"./SvgIcon-BD13zcFd.js";import"./memoTheme-Dp1NrYg6.js";import"./styled-ntycrLPJ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Box-DXcrr7iM.js";import"./visuallyHidden-Dan1xhjv.js";import"./createSvgIcon-B1lFLeS5.js";import"./useSlot-Do_-kGcn.js";import"./mergeSlotProps-Bpe1uZ1i.js";import"./useForkRef-B6GvvQRB.js";import"./ButtonBase-D0mr5YFJ.js";import"./useTimeout-yhleNqH_.js";import"./TransitionGroupContext-Ce7OQG8A.js";import"./useEventCallback-Ci1dFtlM.js";import"./isFocusVisible-B8k4qzLc.js";import"./Grid-BUOsnAxa.js";import"./useTheme-DpzwBSOw.js";import"./isMuiElement-v3aJqbSB.js";import"./styled-NjTlQkCK.js";const V={title:"Components/Table/TableSortLabel",component:i,tags:["autodocs"],args:{children:"TableSortLabel content"}},n={render:o=>{const[t,a]=d.useState();return e.jsx(i,{active:!!t,direction:t,onClick:()=>a(t==="asc"?"desc":"asc"),...o})}},s={render:()=>e.jsxs(r,{container:!0,spacing:1,children:[e.jsx(r,{size:{xs:3},children:"Default"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{children:"Column Header"})}),e.jsx(r,{size:{xs:3},children:"Active Undefined"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{active:!0,children:"Column Header"})}),e.jsx(r,{size:{xs:3},children:"Active Ascending"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{active:!0,direction:"asc",children:"Column Header"})}),e.jsx(r,{size:{xs:3},children:"Active Descending"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{active:!0,direction:"desc",children:"Column Header"})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
