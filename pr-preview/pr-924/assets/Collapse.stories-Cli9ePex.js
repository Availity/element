import{r as d,j as e}from"./iframe-DHkqGgbi.js";import{C as i}from"./Collapse-lBIhOfoT.js";import{A as h}from"./Alert-B8NdUQLL.js";import{B as t}from"./Box-DMMQfXcC.js";import{F as x}from"./FormControlLabel-DadtF2ZI.js";import{S as b}from"./Switch-8nfRm4iM.js";import{T as C}from"./Table-DZl4TzcK.js";import{T}from"./TableHead-DMghYeuL.js";import{T as c}from"./TableRow-BX2-3phv.js";import{T as o}from"./TableCell-AslK_mnV.js";import{v as u}from"./visuallyHidden-Dan1xhjv.js";import{T as j}from"./TableBody-BYXzvYVg.js";import{P as g}from"./Paper-Cer6O457.js";import"./preload-helper-PPVm8Dsz.js";import"./Collapse-B35dphRb.js";import"./useTheme-DTNKpojL.js";import"./styled-BFLY3dn7.js";import"./memoTheme-vxEZSkJ8.js";import"./utils-BQBkKAg6.js";import"./TransitionGroupContext-3E4Xv_Lx.js";import"./useSlot-CAeYipRU.js";import"./mergeSlotProps-Dp8H4ez1.js";import"./useForkRef-B4h6zx_x.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-Bjfnw5AG.js";import"./IconButton-D5Zzj5BR.js";import"./Tooltip-YeMRA4-y.js";import"./useControlled-DlDi1BKb.js";import"./useEventCallback-LtXdtY4h.js";import"./getReactElementRef-BRoKhHqU.js";import"./Grow-CwxupgJl.js";import"./Popper-BUehIlZq.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CtpwjVP0.js";import"./useSlotProps-CZQ_I0Kw.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DmdwZwcg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BwqJJF5q.js";import"./CircularProgress-D39cxiof.js";import"./Actions-BhLIra-T.js";import"./FaSvgIcon-BtkjvlUV.js";import"./SvgIcon-D9Y7JiS_.js";import"./Form-CBGs9Zxl.js";import"./Alert-CHLZka3S.js";import"./createSvgIcon-BS4jmzRl.js";import"./Close-BGS6MUFg.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-ZgfjO4em.js";import"./Typography-i96SYvKe.js";import"./SwitchBase-BwOio7J8.js";import"./mergeSlotProps-BNZZW_n2.js";const ge={title:"Components/Transitions/Collapse",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Expand from the start edge of the child element."}}}},a={render:l=>{const[p,s]=d.useState(!0),r=()=>{s(!1),setTimeout(()=>s(!0),1e3)};return e.jsx(i,{in:p,...l,children:e.jsx(h,{onClose:r,children:"Dismissable Alert"})})}},n={render:()=>{const[l,p]=d.useState(!0),s=()=>{p(m=>!m)},r=e.jsx(g,{sx:{m:1,width:100,height:100,bgcolor:"grey.200"},elevation:4});return e.jsxs(t,{children:[e.jsx(x,{control:e.jsx(b,{checked:l,onChange:s}),label:"Show"}),e.jsxs(C,{role:"presentation",sx:{width:250},children:[e.jsx(T,{children:e.jsxs(c,{children:[e.jsx(o,{children:e.jsx(t,{sx:u,children:"Orientation"})}),e.jsx(o,{children:e.jsx(t,{sx:{width:120},children:"collapsedSize 0"})}),e.jsx(o,{children:e.jsx(t,{sx:{width:120},children:"collapsedSize 40"})})]})}),e.jsxs(j,{children:[e.jsxs(c,{sx:{verticalAlign:"top"},children:[e.jsx(o,{children:e.jsx(t,{sx:{height:120},children:"Vertical"})}),e.jsx(o,{children:e.jsx(i,{in:l,children:r})}),e.jsx(o,{children:e.jsx(i,{in:l,collapsedSize:40,children:r})})]}),e.jsxs(c,{sx:{verticalAlign:"top"},children:[e.jsx(o,{children:e.jsx(t,{sx:{height:120},children:"Horizontal"})}),e.jsx(o,{children:e.jsx(i,{orientation:"horizontal",in:l,children:r})}),e.jsx(o,{children:e.jsx(i,{orientation:"horizontal",in:l,collapsedSize:40,children:r})})]})]})]})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: CollapseProps) => {
    const [visible, setVisible] = useState(true);
    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };
    return <Collapse in={visible} {...args}>
        <Alert onClose={onClose}>Dismissable Alert</Alert>
      </Collapse>;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    const handleChange = () => {
      setChecked(prev => !prev);
    };
    const background = <Paper sx={{
      m: 1,
      width: 100,
      height: 100,
      bgcolor: 'grey.200'
    }} elevation={4} />;
    return <Box>
        <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" />
        <Table role="presentation" sx={{
        width: 250
      }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Box sx={visuallyHidden}>Orientation</Box>
              </TableCell>
              <TableCell>
                <Box sx={{
                width: 120
              }}>collapsedSize 0</Box>
              </TableCell>
              <TableCell>
                <Box sx={{
                width: 120
              }}>collapsedSize 40</Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{
            verticalAlign: 'top'
          }}>
              <TableCell>
                <Box sx={{
                height: 120
              }}>Vertical</Box>
              </TableCell>
              <TableCell>
                <Collapse in={checked}>{background}</Collapse>
              </TableCell>
              <TableCell>
                <Collapse in={checked} collapsedSize={40}>
                  {background}
                </Collapse>
              </TableCell>
            </TableRow>
            <TableRow sx={{
            verticalAlign: 'top'
          }}>
              <TableCell>
                <Box sx={{
                height: 120
              }}>Horizontal</Box>
              </TableCell>
              <TableCell>
                <Collapse orientation="horizontal" in={checked}>
                  {background}
                </Collapse>
              </TableCell>
              <TableCell>
                <Collapse orientation="horizontal" in={checked} collapsedSize={40}>
                  {background}
                </Collapse>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>;
  }
}`,...n.parameters?.docs?.source}}};const we=["_Collapse","_Options"];export{a as _Collapse,n as _Options,we as __namedExportsOrder,ge as default};
