import{j as r,r as g}from"./iframe-74vBDrmZ.js";import{T as p}from"./TableRow-2AtWiK53.js";import{I as T}from"./index-BdaRrwoe.js";import{E as u,n as j}from"./index-Ci5o9uVL.js";import{B as C,G as a}from"./index-DABAYwxJ.js";import{C as w}from"./index-sx1Dwp9q.js";import{T as o}from"./index-wf38qGOo.js";import{T as h}from"./TableBody-B4A9xj50.js";import{T as e}from"./TableCell-pHO3JJIn.js";import"./preload-helper-Dp1pzeXC.js";import"./TableRow-CUh_dG-2.js";import"./TableCell-CYtVlZ0e.js";import"./memoTheme-CrohEj2F.js";import"./styled-BHC3gMyH.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Tooltip-D7yzj_N1.js";import"./useTheme-C3eWChmp.js";import"./useSlot-Dpj_kWoj.js";import"./mergeSlotProps-CYq4Cs5M.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CaacVPvw.js";import"./useTimeout-Bh1htgn1.js";import"./useControlled-BzQ0uXxz.js";import"./useEventCallback-D1J4VLx7.js";import"./getReactElementRef-DTaqgOCe.js";import"./Portal-CYFlRt9C.js";import"./utils-BsLLjsnO.js";import"./TransitionGroupContext-BXUgPNXW.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C0zznadg.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D5Ff5U4u.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-HlJCpadJ.js";import"./CircularProgress-BKuGISI6.js";import"./Button-CnH678eA.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-DyiByr8S.js";import"./Box-B4VqGeVw.js";import"./Grid-D7zFgz1I.js";import"./styled-32LRH9GB.js";import"./isMuiElement-40PMFKcu.js";import"./Stack-B4RYbXhj.js";import"./Container-Bx3d2t5z.js";import"./Collapse-CAHL7uJx.js";import"./Typography-B2QvIve-.js";import"./TableBody-C5dCjoRu.js";import"./visuallyHidden-Dan1xhjv.js";const ur={title:"Components/Table/TableRow",component:p,tags:["autodocs"],args:{children:"This text is a child of TableRow"}},t={render:i=>r.jsx(h,{children:r.jsxs(p,{...i,children:[r.jsx(e,{children:"Cell 1"}),r.jsx(e,{children:"Cell 2"}),r.jsx(e,{children:"Cell 3"})]})})},l={render:i=>{const[s,b]=g.useState(!1);return r.jsxs(h,{children:[r.jsxs(p,{...i,children:[r.jsx(e,{padding:"checkbox",children:r.jsx(T,{title:"expand row",size:"medium",onClick:()=>b(!s),children:s?r.jsx(u,{}):r.jsx(j,{})})}),r.jsx(e,{children:"Cell 1"}),r.jsx(e,{children:"Cell 2"}),r.jsx(e,{children:"Cell 3"})]}),r.jsx(p,{...i,children:r.jsx(e,{style:{padding:0,paddingLeft:"32px"},colSpan:12,children:r.jsx(w,{in:s,timeout:"auto",unmountOnExit:!0,children:r.jsxs(C,{sx:{padding:2},children:[r.jsxs(a,{container:!0,spacing:2,wrap:"wrap",children:[r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 1"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 2"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 3"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]})]}),r.jsxs(a,{container:!0,spacing:2,wrap:"wrap",children:[r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 4"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 5"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 6"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]})]})]})})})})]})}};var n,d,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: TableRowProps) => <TableBody>
      <TableRow {...args}>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
    </TableBody>
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var x,c,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(c=l.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};const jr=["_TableRow","_CollapsibleRow"];export{l as _CollapsibleRow,t as _TableRow,jr as __namedExportsOrder,ur as default};
