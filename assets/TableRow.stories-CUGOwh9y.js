import{j as r,r as g}from"./iframe-BiHmAaXu.js";import{T as p}from"./TableRow-BLKXCYTc.js";import{I as T}from"./index-Bh-1iHl-.js";import{E as u,n as j}from"./index-BvV5FGi6.js";import{B as C,G as a}from"./index-Cgd0JpyD.js";import{C as w}from"./index-DdMwULHC.js";import{T as o}from"./index-SvqotCfh.js";import{T as h}from"./TableBody-cbH6OH0-.js";import{T as e}from"./TableCell-CgI_XXRU.js";import"./preload-helper-Dp1pzeXC.js";import"./TableRow-CIb0OeHO.js";import"./TableCell-CIS2n0K6.js";import"./memoTheme-zGeQXNTV.js";import"./styled-Dtda04LL.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Tooltip-D9RCop2K.js";import"./useTheme-D51yRe8t.js";import"./useSlot-BwnKjiCD.js";import"./mergeSlotProps-vY4QflWx.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-egRdNH_q.js";import"./useTimeout-BxBXWuFq.js";import"./useControlled-QJx0Pv3z.js";import"./useEventCallback-A-8aNATG.js";import"./getReactElementRef-DBbsA3vx.js";import"./Portal-3VCYEpJr.js";import"./utils-Derh_BFQ.js";import"./TransitionGroupContext-B15fWyGj.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BP935MD-.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C3B7XTqu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DdAFxN83.js";import"./CircularProgress-BsuuE2cE.js";import"./Button-CeglKkVM.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-CbropkBN.js";import"./Box-CiWIFjse.js";import"./Grid-CEmIxvlK.js";import"./styled-Zig1TB_m.js";import"./isMuiElement-DKHzA-If.js";import"./Stack-Dj-nUodw.js";import"./Container-BlXDxTKA.js";import"./Collapse-DHObo2N6.js";import"./Typography-De5LbgvD.js";import"./TableBody-CiFPcQcJ.js";import"./visuallyHidden-Dan1xhjv.js";const ur={title:"Components/Table/TableRow",component:p,tags:["autodocs"],args:{children:"This text is a child of TableRow"}},t={render:i=>r.jsx(h,{children:r.jsxs(p,{...i,children:[r.jsx(e,{children:"Cell 1"}),r.jsx(e,{children:"Cell 2"}),r.jsx(e,{children:"Cell 3"})]})})},l={render:i=>{const[s,b]=g.useState(!1);return r.jsxs(h,{children:[r.jsxs(p,{...i,children:[r.jsx(e,{padding:"checkbox",children:r.jsx(T,{title:"expand row",size:"medium",onClick:()=>b(!s),children:s?r.jsx(u,{}):r.jsx(j,{})})}),r.jsx(e,{children:"Cell 1"}),r.jsx(e,{children:"Cell 2"}),r.jsx(e,{children:"Cell 3"})]}),r.jsx(p,{...i,children:r.jsx(e,{style:{padding:0,paddingLeft:"32px"},colSpan:12,children:r.jsx(w,{in:s,timeout:"auto",unmountOnExit:!0,children:r.jsxs(C,{sx:{padding:2},children:[r.jsxs(a,{container:!0,spacing:2,wrap:"wrap",children:[r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 1"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 2"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 3"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]})]}),r.jsxs(a,{container:!0,spacing:2,wrap:"wrap",children:[r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 4"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 5"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 6"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]})]})]})})})})]})}};var n,d,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
