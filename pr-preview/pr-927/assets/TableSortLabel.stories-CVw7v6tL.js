import{r as d,j as e}from"./iframe-DDeFjhwT.js";import{T as i}from"./TableSortLabel-D4JsZYoF.js";import{G as r}from"./index-oWqJ9z6g.js";import"./preload-helper-PPVm8Dsz.js";import"./index-V6LxtqOC.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DRz9ijBU.js";import"./memoTheme-BKUl2Kw8.js";import"./styled-PQjfDOgQ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Box-ClrgcKqA.js";import"./visuallyHidden-Dan1xhjv.js";import"./TableSortLabel-DlT0Ea7u.js";import"./createSvgIcon-BxZGQxhE.js";import"./useSlot-SzvoDGen.js";import"./mergeSlotProps-BPESDwW9.js";import"./useForkRef-DgKt8E30.js";import"./ButtonBase-D-CcOUqB.js";import"./useTimeout-Cm2RyAAI.js";import"./TransitionGroupContext-DKXhXx0i.js";import"./useEventCallback-tCUa2-C3.js";import"./isFocusVisible-B8k4qzLc.js";import"./Grid-DkuRXmB0.js";import"./useTheme-KKOLTJXa.js";import"./isMuiElement-C8BOTMMK.js";import"./styled-B5nfTXUF.js";import"./Stack-D5p-aU6z.js";import"./Container-BKOvC3qE.js";const q={title:"Components/Table/TableSortLabel",component:i,tags:["autodocs"],args:{children:"TableSortLabel content"}},n={render:o=>{const[s,a]=d.useState();return e.jsx(i,{active:!!s,direction:s,onClick:()=>a(s==="asc"?"desc":"asc"),...o})}},t={render:()=>e.jsxs(r,{container:!0,spacing:1,children:[e.jsx(r,{size:{xs:3},children:"Default"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{children:"Column Header"})}),e.jsx(r,{size:{xs:3},children:"Active Undefined"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{active:!0,children:"Column Header"})}),e.jsx(r,{size:{xs:3},children:"Active Ascending"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{active:!0,direction:"asc",children:"Column Header"})}),e.jsx(r,{size:{xs:3},children:"Active Descending"}),e.jsx(r,{size:{xs:9},children:e.jsx(i,{active:!0,direction:"desc",children:"Column Header"})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
