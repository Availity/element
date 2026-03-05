import{r as m,j as r}from"./iframe-Wk3enkn_.js";import{T as p}from"./TableRow-BPrOPbPP.js";import{I as x}from"./index-pyii_x3t.js";import{E as c,n as y}from"./index-a2BAU8hi.js";import{B as h,G as a}from"./index-CV9srtxl.js";import{C as b}from"./index-BVgANZQQ.js";import{T as o}from"./index-CNr7z3HO.js";import{T as n}from"./TableBody-DjFG6oLU.js";import{T as e}from"./TableCell-DMD_sjWf.js";import"./preload-helper-PPVm8Dsz.js";import"./TableRow-Ksy28vn8.js";import"./TableCell-D2PtryKx.js";import"./memoTheme-Caj5A1s7.js";import"./styled-BmTYHnh6.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Tooltip-BR4Ffd1U.js";import"./useTheme-CmRoqaFD.js";import"./useSlot-JMUv4BXp.js";import"./mergeSlotProps-NkzDZpmj.js";import"./useForkRef-yXYQNRja.js";import"./useTimeout-BCOPmfCQ.js";import"./useControlled-2F9gTxQc.js";import"./useEventCallback-B7JQiyR1.js";import"./getReactElementRef-Cnge9CgM.js";import"./Portal-CCkMzpr1.js";import"./utils-tb6sxdlZ.js";import"./TransitionGroupContext-CwOxOLGn.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BfCrVpCA.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C6xLK3w0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Qsi_pa_1.js";import"./CircularProgress-n4f4P4WA.js";import"./Button-C074Gfa_.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-C-x4Imun.js";import"./Box-DL-v_noe.js";import"./Grid-DdfbYMl5.js";import"./isMuiElement-DVgXTGQo.js";import"./styled-BnyQvlXI.js";import"./Stack-8J7VIz0q.js";import"./Container-ChUN_I-o.js";import"./Collapse-eLUi1aNP.js";import"./Typography-CLtqYzwP.js";import"./TableBody-DQ8G3taT.js";import"./visuallyHidden-Dan1xhjv.js";const xr={title:"Components/Table/TableRow",component:p,tags:["autodocs"],args:{children:"This text is a child of TableRow"}},t={render:i=>r.jsx(n,{children:r.jsxs(p,{...i,children:[r.jsx(e,{children:"Cell 1"}),r.jsx(e,{children:"Cell 2"}),r.jsx(e,{children:"Cell 3"})]})})},l={render:i=>{const[s,d]=m.useState(!1);return r.jsxs(n,{children:[r.jsxs(p,{...i,children:[r.jsx(e,{padding:"checkbox",children:r.jsx(x,{title:"expand row",size:"medium",onClick:()=>d(!s),children:s?r.jsx(c,{}):r.jsx(y,{})})}),r.jsx(e,{children:"Cell 1"}),r.jsx(e,{children:"Cell 2"}),r.jsx(e,{children:"Cell 3"})]}),r.jsx(p,{...i,children:r.jsx(e,{style:{padding:0,paddingLeft:"32px"},colSpan:12,children:r.jsx(b,{in:s,timeout:"auto",unmountOnExit:!0,children:r.jsxs(h,{sx:{padding:2},children:[r.jsxs(a,{container:!0,spacing:2,wrap:"wrap",children:[r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 1"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 2"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 3"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]})]}),r.jsxs(a,{container:!0,spacing:2,wrap:"wrap",children:[r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 4"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 5"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 6"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]})]})]})})})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: TableRowProps) => <TableBody>
      <TableRow {...args}>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
    </TableBody>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: TableRowProps) => {
    const [open, setOpen] = useState(false);
    return <TableBody>
        <TableRow {...args}>
          <TableCell padding="checkbox">
            <IconButton title="expand row" size="medium" onClick={() => setOpen(!open)}>
              {open ? <ExpandIcon /> : <CollapseIcon />}
            </IconButton>
          </TableCell>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </TableRow>
        <TableRow {...args}>
          <TableCell style={{
          padding: 0,
          paddingLeft: '32px'
        }} colSpan={12}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{
              padding: 2
            }}>
                <Grid container spacing={2} wrap="wrap">
                  <Grid size="grow">
                    <Typography variant="body2" sx={{
                    fontWeight: 'bold'
                  }}>
                      Extra Data 1
                    </Typography>
                    <Typography variant="body2">Lorem Ipsum</Typography>
                  </Grid>
                  <Grid size="grow">
                    <Typography variant="body2" sx={{
                    fontWeight: 'bold'
                  }}>
                      Extra Data 2
                    </Typography>
                    <Typography variant="body2">Lorem Ipsum</Typography>
                  </Grid>
                  <Grid size="grow">
                    <Typography variant="body2" sx={{
                    fontWeight: 'bold'
                  }}>
                      Extra Data 3
                    </Typography>
                    <Typography variant="body2">Lorem Ipsum</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} wrap="wrap">
                  <Grid size="grow">
                    <Typography variant="body2" sx={{
                    fontWeight: 'bold'
                  }}>
                      Extra Data 4
                    </Typography>
                    <Typography variant="body2">Lorem Ipsum</Typography>
                  </Grid>
                  <Grid size="grow">
                    <Typography variant="body2" sx={{
                    fontWeight: 'bold'
                  }}>
                      Extra Data 5
                    </Typography>
                    <Typography variant="body2">Lorem Ipsum</Typography>
                  </Grid>
                  <Grid size="grow">
                    <Typography variant="body2" sx={{
                    fontWeight: 'bold'
                  }}>
                      Extra Data 6
                    </Typography>
                    <Typography variant="body2">Lorem Ipsum</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </TableBody>;
  }
}`,...l.parameters?.docs?.source}}};const cr=["_TableRow","_CollapsibleRow"];export{l as _CollapsibleRow,t as _TableRow,cr as __namedExportsOrder,xr as default};
