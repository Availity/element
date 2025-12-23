import{j as r,r as g}from"./iframe-BOqhEPj6.js";import{T as p}from"./TableRow-BaQWZeKR.js";import{I as T}from"./index-CQw0a6ar.js";import{E as u,n as j}from"./index-DX6yAWWK.js";import{B as C,G as a}from"./index-DMdqsLqb.js";import{C as w}from"./index-CTwZxTpf.js";import{T as o}from"./index-C8WQ3P9P.js";import{T as h}from"./TableBody-DOYH_3PE.js";import{T as e}from"./TableCell-09OHYNm6.js";import"./preload-helper-Dp1pzeXC.js";import"./TableRow-DWzFP_NW.js";import"./TableCell-Dhq_h1eK.js";import"./memoTheme-BYC15E_2.js";import"./styled-ClQgRsdc.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Tooltip-DKIHpwU2.js";import"./useTheme-s5qe_7AX.js";import"./useSlot-B469CtEr.js";import"./mergeSlotProps-sNcrx_r5.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D87wou6e.js";import"./useTimeout-CKtuW5yl.js";import"./useControlled-CmW8DIBb.js";import"./useEventCallback-BHkbNqwn.js";import"./getReactElementRef-DF_NnWMb.js";import"./Portal-Cx3wFGpK.js";import"./utils-CDaWu4n1.js";import"./TransitionGroupContext-TO625Yxj.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DnEE7xuk.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BP3VjvuD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C7cVXKAH.js";import"./CircularProgress-Xg5tMO8-.js";import"./Button-BDF2rRxm.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-BlVGnbba.js";import"./Box-CIHxGpEh.js";import"./Grid-BJc_wFud.js";import"./styled-BY2Q14_8.js";import"./isMuiElement-FBus6K6C.js";import"./Stack-DPaZpNJF.js";import"./Container-Ck_72FoA.js";import"./Collapse-DPvamv9x.js";import"./Typography-DCSeVpBd.js";import"./TableBody-Bxql9Emc.js";import"./visuallyHidden-Dan1xhjv.js";const ur={title:"Components/Table/TableRow",component:p,tags:["autodocs"],args:{children:"This text is a child of TableRow"}},t={render:i=>r.jsx(h,{children:r.jsxs(p,{...i,children:[r.jsx(e,{children:"Cell 1"}),r.jsx(e,{children:"Cell 2"}),r.jsx(e,{children:"Cell 3"})]})})},l={render:i=>{const[s,b]=g.useState(!1);return r.jsxs(h,{children:[r.jsxs(p,{...i,children:[r.jsx(e,{padding:"checkbox",children:r.jsx(T,{title:"expand row",size:"medium",onClick:()=>b(!s),children:s?r.jsx(u,{}):r.jsx(j,{})})}),r.jsx(e,{children:"Cell 1"}),r.jsx(e,{children:"Cell 2"}),r.jsx(e,{children:"Cell 3"})]}),r.jsx(p,{...i,children:r.jsx(e,{style:{padding:0,paddingLeft:"32px"},colSpan:12,children:r.jsx(w,{in:s,timeout:"auto",unmountOnExit:!0,children:r.jsxs(C,{sx:{padding:2},children:[r.jsxs(a,{container:!0,spacing:2,wrap:"wrap",children:[r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 1"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 2"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 3"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]})]}),r.jsxs(a,{container:!0,spacing:2,wrap:"wrap",children:[r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 4"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 5"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 6"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]})]})]})})})})]})}};var n,d,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
