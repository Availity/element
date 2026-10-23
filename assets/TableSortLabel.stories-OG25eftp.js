import{r as d,j as e}from"./iframe-DM2JG2Wv.js";import{T as i}from"./TableSortLabel-Bspbe6_7.js";import{G as r}from"./index-Dro33RKh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DV4r8BJd.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-C29JSttG.js";import"./memoTheme-BeNhxrAF.js";import"./styled-DsG-VtUm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Box-Cqyd88nw.js";import"./visuallyHidden-Dan1xhjv.js";import"./TableSortLabel-ICq-SP45.js";import"./createSvgIcon-CxStVnnE.js";import"./useSlot-CtcofBwJ.js";import"./mergeSlotProps-Dz0ZGrQB.js";import"./useForkRef--lBTfT4q.js";import"./ButtonBase-FpBSGXSw.js";import"./useTimeout-DDDxsICF.js";import"./TransitionGroupContext-BViK_5QW.js";import"./useEventCallback-B8_sGVJg.js";import"./isFocusVisible-B8k4qzLc.js";import"./Grid-CX1e7vz2.js";import"./useTheme-BIdTJdU8.js";import"./isMuiElement-B6N371AV.js";import"./styled-Bf965zM_.js";import"./Stack-D8O8MXVX.js";import"./Container-I8b0yq_j.js";const q={title:"Components/Table/TableSortLabel",component:i,tags:["autodocs"],args:{children:"TableSortLabel content"}},n={render:o=>{const[s,a]=d.useState();return e.jsx(i,{active:!!s,direction:s,onClick:()=>a(s==="asc"?"desc":"asc"),...o})}},t={render:()=>e.jsxs(r,{container:!0,spacing:1,children:[e.jsx(r,{size:{xs:3},children:"Default"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{children:"Column Header"})}),e.jsx(r,{size:{xs:3},children:"Active Undefined"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{active:!0,children:"Column Header"})}),e.jsx(r,{size:{xs:3},children:"Active Ascending"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{active:!0,direction:"asc",children:"Column Header"})}),e.jsx(r,{size:{xs:3},children:"Active Descending"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{active:!0,direction:"desc",children:"Column Header"})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
