import{j as r,r as m}from"./iframe-P-I-t7s_.js";import{T as p}from"./TableRow-CIugTpGh.js";import{I as x}from"./index-BOqcfzn9.js";import{E as c,n as y}from"./index-C3cy06cM.js";import{B as h,G as a}from"./index-DGaASH14.js";import{C as b}from"./index-pKTnUwux.js";import{T as o}from"./index-DWh3JVg2.js";import{T as n}from"./TableBody-BBdwt6qO.js";import{T as e}from"./TableCell-BtNIVeGZ.js";import"./preload-helper-PPVm8Dsz.js";import"./TableRow-01KUszpw.js";import"./TableCell-CDPGmG-_.js";import"./memoTheme-Bi3jfVWD.js";import"./styled-DNi79hKI.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Tooltip-kyKJtl96.js";import"./useTheme-BPf64W-X.js";import"./useSlot-DY-xq6aU.js";import"./mergeSlotProps-CDm4lxrI.js";import"./useForkRef-B5SqA4pZ.js";import"./useTimeout-Dzhca5Jx.js";import"./useControlled-Cqclzim-.js";import"./useEventCallback-DAYatbRK.js";import"./getReactElementRef-DFgmZ0uJ.js";import"./Portal-_y01gIKP.js";import"./utils-DTqcJog-.js";import"./TransitionGroupContext-Dvdi4lCr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cx6Yk_v4.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BTlhtNIa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-P5TjO14T.js";import"./CircularProgress-BRuGXxty.js";import"./Button-xw2JRpr3.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DmOXCSGB.js";import"./Box-BCYJimk9.js";import"./Grid-DUqLWWvo.js";import"./styled-Cp0DTD0x.js";import"./isMuiElement-DIafhdSN.js";import"./Stack-JGFv5pEs.js";import"./Container-8zPEfJs6.js";import"./Collapse-_SLmHTOg.js";import"./Typography-BFwAhjnY.js";import"./TableBody-M40zXdCi.js";import"./visuallyHidden-Dan1xhjv.js";const xr={title:"Components/Table/TableRow",component:p,tags:["autodocs"],args:{children:"This text is a child of TableRow"}},t={render:i=>r.jsx(n,{children:r.jsxs(p,{...i,children:[r.jsx(e,{children:"Cell 1"}),r.jsx(e,{children:"Cell 2"}),r.jsx(e,{children:"Cell 3"})]})})},l={render:i=>{const[s,d]=m.useState(!1);return r.jsxs(n,{children:[r.jsxs(p,{...i,children:[r.jsx(e,{padding:"checkbox",children:r.jsx(x,{title:"expand row",size:"medium",onClick:()=>d(!s),children:s?r.jsx(c,{}):r.jsx(y,{})})}),r.jsx(e,{children:"Cell 1"}),r.jsx(e,{children:"Cell 2"}),r.jsx(e,{children:"Cell 3"})]}),r.jsx(p,{...i,children:r.jsx(e,{style:{padding:0,paddingLeft:"32px"},colSpan:12,children:r.jsx(b,{in:s,timeout:"auto",unmountOnExit:!0,children:r.jsxs(h,{sx:{padding:2},children:[r.jsxs(a,{container:!0,spacing:2,wrap:"wrap",children:[r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 1"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 2"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 3"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]})]}),r.jsxs(a,{container:!0,spacing:2,wrap:"wrap",children:[r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 4"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 5"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]}),r.jsxs(a,{size:"grow",children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"bold"},children:"Extra Data 6"}),r.jsx(o,{variant:"body2",children:"Lorem Ipsum"})]})]})]})})})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
