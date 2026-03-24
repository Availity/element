import{r as d,j as e}from"./iframe-BXw3gXzi.js";import{T as i}from"./TableSortLabel-CF1B58yz.js";import{G as r}from"./index-tCOiXdlf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DQ-Pw2vZ.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-WyGfIbWv.js";import"./memoTheme-Cun1OYGu.js";import"./styled-B4C1j5cm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Box-BM1JqmYM.js";import"./visuallyHidden-Dan1xhjv.js";import"./TableSortLabel-CI3DI3_J.js";import"./createSvgIcon--3tSNQ0H.js";import"./useSlot-ChptDOQ0.js";import"./mergeSlotProps-CH0acCqg.js";import"./useForkRef-C2Z_35PR.js";import"./ButtonBase-BTnZicAm.js";import"./useTimeout-0uXpumKy.js";import"./TransitionGroupContext-M8heGJda.js";import"./useEventCallback-3YhfTi0L.js";import"./isFocusVisible-B8k4qzLc.js";import"./Grid-BGtXNav_.js";import"./useTheme-BMbLtIQ2.js";import"./isMuiElement-HwGtkGEy.js";import"./styled-C8dNPj49.js";import"./Stack-BuTN3X4b.js";import"./Container-BCT1HrQN.js";const q={title:"Components/Table/TableSortLabel",component:i,tags:["autodocs"],args:{children:"TableSortLabel content"}},n={render:o=>{const[s,a]=d.useState();return e.jsx(i,{active:!!s,direction:s,onClick:()=>a(s==="asc"?"desc":"asc"),...o})}},t={render:()=>e.jsxs(r,{container:!0,spacing:1,children:[e.jsx(r,{size:{xs:3},children:"Default"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{children:"Column Header"})}),e.jsx(r,{size:{xs:3},children:"Active Undefined"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{active:!0,children:"Column Header"})}),e.jsx(r,{size:{xs:3},children:"Active Ascending"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{active:!0,direction:"asc",children:"Column Header"})}),e.jsx(r,{size:{xs:3},children:"Active Descending"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{active:!0,direction:"desc",children:"Column Header"})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (args: TableSortLabelProps) => {
    type Order = 'asc' | 'desc' | undefined;
    const [order, setOrder] = useState<Order>();
    return <TableSortLabel active={!!order} direction={order} onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')} {...args} />;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["_TableSortLabel","_Variants"];export{n as _TableSortLabel,t as _Variants,w as __namedExportsOrder,q as default};
