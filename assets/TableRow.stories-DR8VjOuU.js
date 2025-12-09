import{j as r,r as g}from"./iframe-Cv4YEYCT.js";import{T as p}from"./TableRow-B_2JkSu9.js";import{I as T}from"./index-C6B9H3-6.js";import{E as u,n as j}from"./index-CNJpAeel.js";import{B as C,G as a}from"./index-bB8uZqWv.js";import{C as w}from"./index-3BnPhP73.js";import{T as o}from"./index-Cy8ZwHJB.js";import{T as h}from"./TableBody-CJGFV2TQ.js";import{T as e}from"./TableCell-DvPcqBFY.js";import"./preload-helper-Dp1pzeXC.js";import"./TableRow-CoAONDPE.js";import"./TableCell-Cs-IIckH.js";import"./memoTheme-pu_-LVrP.js";import"./styled-BjYrgzj8.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Tooltip-DdwYWGQa.js";import"./useTheme-yn0WqvlF.js";import"./useSlot-DM3XJHLF.js";import"./mergeSlotProps-bXMVHHr9.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Cy9-wLDX.js";import"./useTimeout-S5FMYS9P.js";import"./useControlled-DotOmqWu.js";import"./useEventCallback-Dezg1Jp2.js";import"./getReactElementRef-Cucsv-xJ.js";import"./Portal-HdFRzq7f.js";import"./utils-CC-nVGrC.js";import"./TransitionGroupContext-ReV1kAll.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DpLQsBTB.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-y4oP_Qzi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Te2dWPfF.js";import"./CircularProgress-4dbP_wqt.js";import"./Button-CxHqlBlz.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-RzgLEiZ2.js";import"./Box-GX48hKKC.js";import"./Grid-CuYwHY7F.js";import"./styled-Cz-jNn-e.js";import"./isMuiElement-C4Xkg-Fl.js";import"./Stack-BZ8fB6iW.js";import"./Container-Ceu7L51X.js";import"./Collapse-BYf9d2UP.js";import"./Typography-BHaCpI2A.js";import"./TableBody-B5N3Ytbd.js";import"./visuallyHidden-Dan1xhjv.js";const ur={title:"Components/Table/TableRow",component:p,tags:["autodocs"],args:{children:"This text is a child of TableRow"}},t={render:i=>r.jsx(h,{children:r.jsxs(p,{...i,children:[r.jsx(e,{children:"Cell 1"}),r.jsx(e,{children:"Cell 2"}),r.jsx(e,{children:"Cell 3"})]})})},l={render:i=>{const[s,b]=g.useState(!1);return r.jsxs(h,{children:[r.jsxs(p,{...i,children:[r.jsx(e,{padding:"checkbox",children:r.jsx(T,{title:"expand row",size:"medium",onClick:()=>b(!s),children:s?r.jsx(u,{}):r.jsx(j,{})})}),r.jsx(e,{children:"Cell 1"}),r.jsx(e,{children:"Cell 2"}),r.jsx(e,{children:"Cell 3"})]}),r.jsx(p,{...i,children:r.jsx(e,{style:{padding:0,paddingLeft:"32px"},colSpan:12,children:r.jsx(w,{in:s,timeout:"auto",unmountOnExit:!0,children:r.jsxs(C,{sx:{padding:2},children:[r.jsxs(a,{container:!0,spacing:2,wrap:"wrap",children:[r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 1"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 2"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 3"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]})]}),r.jsxs(a,{container:!0,spacing:2,wrap:"wrap",children:[r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 4"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 5"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 6"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]})]})]})})})})]})}};var n,d,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
