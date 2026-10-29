import{r as m,j as r}from"./iframe-CLut6yOe.js";import{T as p}from"./TableRow-wgCK4u37.js";import{I as x}from"./index-DNgDR8tQ.js";import{E as c,o as y}from"./index-CxuuQ7ms.js";import{B as h,G as a}from"./index-BGYc3edq.js";import{C as b}from"./index-9XCJsw_r.js";import{T as o}from"./index-DmhD3hPK.js";import{T as n}from"./TableBody-BJ81JNxs.js";import{T as e}from"./TableCell-Dh5Bjhw-.js";import"./preload-helper-PPVm8Dsz.js";import"./TableRow-Ba2B1BeS.js";import"./TableCell-DeRZcUPR.js";import"./memoTheme-BCZ6py50.js";import"./styled-B56iE4qf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./IconButton-MKfAwX3T.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B4AmE_nS.js";import"./useTimeout-DSf2abi9.js";import"./TransitionGroupContext-CxTk-KXz.js";import"./useForkRef-CW7nwTzV.js";import"./useEventCallback-BXl50wnQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cb3dAqoX.js";import"./Tooltip-20BxdW9m.js";import"./useTheme-uzqIZvgA.js";import"./useSlot-C8ASSSxZ.js";import"./mergeSlotProps-BoE-e40D.js";import"./useControlled-BMhEC-vi.js";import"./getReactElementRef-CPIcGi-m.js";import"./Portal-buqhKvPN.js";import"./utils-CY0-o-M4.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BphsLqn6.js";import"./Button-CO7SGq6S.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Dd51Rz_D.js";import"./Box-KcVtg1pO.js";import"./Grid-CiYph9Ji.js";import"./isMuiElement-CAAIFwhI.js";import"./styled-qS0Yrwc6.js";import"./Stack-C0CMzs2G.js";import"./Container-DKVcPtkF.js";import"./Collapse-B-iUBrJ1.js";import"./Typography-BLWoaJn_.js";import"./TableBody-DG0nN_do.js";import"./visuallyHidden-Dan1xhjv.js";const xr={title:"Components/Table/TableRow",component:p,tags:["autodocs"],args:{children:"This text is a child of TableRow"}},t={render:i=>r.jsx(n,{children:r.jsxs(p,{...i,children:[r.jsx(e,{children:"Cell 1"}),r.jsx(e,{children:"Cell 2"}),r.jsx(e,{children:"Cell 3"})]})})},l={render:i=>{const[s,d]=m.useState(!1);return r.jsxs(n,{children:[r.jsxs(p,{...i,children:[r.jsx(e,{padding:"checkbox",children:r.jsx(x,{title:"expand row",size:"medium",onClick:()=>d(!s),children:s?r.jsx(c,{}):r.jsx(y,{})})}),r.jsx(e,{children:"Cell 1"}),r.jsx(e,{children:"Cell 2"}),r.jsx(e,{children:"Cell 3"})]}),r.jsx(p,{...i,children:r.jsx(e,{style:{padding:0,paddingLeft:"32px"},colSpan:12,children:r.jsx(b,{in:s,timeout:"auto",unmountOnExit:!0,children:r.jsxs(h,{sx:{padding:2},children:[r.jsxs(a,{container:!0,spacing:2,wrap:"wrap",children:[r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 1"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 2"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 3"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]})]}),r.jsxs(a,{container:!0,spacing:2,wrap:"wrap",children:[r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 4"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 5"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 6"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]})]})]})})})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
