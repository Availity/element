import{r as d,j as e}from"./iframe-B3KH45W1.js";import{C as i}from"./Collapse-K6dmnt0F.js";import{A as h}from"./Alert-D7-DHY3L.js";import{B as t}from"./Box-B9pOgzbW.js";import{F as x}from"./FormControlLabel-BsZGvzQm.js";import{S as b}from"./Switch-CcRf_7vA.js";import{T as C}from"./Table-IvgxMyLz.js";import{T}from"./TableHead-BAWQTQjg.js";import{T as c}from"./TableRow-Dtacin0C.js";import{T as o}from"./TableCell-ByJLeVkS.js";import{v as u}from"./visuallyHidden-Dan1xhjv.js";import{T as j}from"./TableBody-uG3SdOlq.js";import{P as g}from"./Paper-BJPkQ8DM.js";import"./preload-helper-Dab_6GC_.js";import"./Collapse-DfjkZUiC.js";import"./useTheme-Ds4SDsFm.js";import"./styled-B89GBRvi.js";import"./memoTheme-DWwRHojM.js";import"./utils-BQeXEgW_.js";import"./TransitionGroupContext-CAm2K2SY.js";import"./useSlot-DGd0VXU6.js";import"./mergeSlotProps--7hXBDn0.js";import"./useForkRef-C1kAtY37.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-BS1Rp5sI.js";import"./IconButton-UjBwLmV3.js";import"./Tooltip-BBnoBBLv.js";import"./useControlled-cbOgjwu_.js";import"./useEventCallback-CVbD2IC6.js";import"./getReactElementRef-CBNP7eUh.js";import"./Grow-iiG6wjq6.js";import"./Popper-Bmyzhh-s.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CUL18StY.js";import"./useSlotProps-CXce_cAS.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dv3tzyaZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DgN9Oijw.js";import"./CircularProgress-BSNAtS4j.js";import"./Actions-CO819m3I.js";import"./FaSvgIcon-DUC6Q4wv.js";import"./SvgIcon-DDVH-xS0.js";import"./Form-D1K37nGD.js";import"./Alert-CobxnwGF.js";import"./createSvgIcon-CP7Sjzln.js";import"./Close-CCXJfw-Y.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Bg2Y-buC.js";import"./Typography-D3qZBRmm.js";import"./SwitchBase-BX3xx9bG.js";import"./mergeSlotProps-CZPVrohS.js";const ge={title:"Components/Transitions/Collapse",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Expand from the start edge of the child element."}}}},a={render:l=>{const[p,s]=d.useState(!0),r=()=>{s(!1),setTimeout(()=>s(!0),1e3)};return e.jsx(i,{in:p,...l,children:e.jsx(h,{onClose:r,children:"Dismissable Alert"})})}},n={render:()=>{const[l,p]=d.useState(!0),s=()=>{p(m=>!m)},r=e.jsx(g,{sx:{m:1,width:100,height:100,bgcolor:"grey.200"},elevation:4});return e.jsxs(t,{children:[e.jsx(x,{control:e.jsx(b,{checked:l,onChange:s}),label:"Show"}),e.jsxs(C,{role:"presentation",sx:{width:250},children:[e.jsx(T,{children:e.jsxs(c,{children:[e.jsx(o,{children:e.jsx(t,{sx:u,children:"Orientation"})}),e.jsx(o,{children:e.jsx(t,{sx:{width:120},children:"collapsedSize 0"})}),e.jsx(o,{children:e.jsx(t,{sx:{width:120},children:"collapsedSize 40"})})]})}),e.jsxs(j,{children:[e.jsxs(c,{sx:{verticalAlign:"top"},children:[e.jsx(o,{children:e.jsx(t,{sx:{height:120},children:"Vertical"})}),e.jsx(o,{children:e.jsx(i,{in:l,children:r})}),e.jsx(o,{children:e.jsx(i,{in:l,collapsedSize:40,children:r})})]}),e.jsxs(c,{sx:{verticalAlign:"top"},children:[e.jsx(o,{children:e.jsx(t,{sx:{height:120},children:"Horizontal"})}),e.jsx(o,{children:e.jsx(i,{orientation:"horizontal",in:l,children:r})}),e.jsx(o,{children:e.jsx(i,{orientation:"horizontal",in:l,collapsedSize:40,children:r})})]})]})]})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
