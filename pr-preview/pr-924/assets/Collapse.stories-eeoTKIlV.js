import{r as d,j as e}from"./iframe-BcpGFM79.js";import{C as i}from"./Collapse-DM-_R_As.js";import{A as h}from"./Alert-CYTKc6CY.js";import{B as t}from"./Box-YZXBtx3i.js";import{F as x}from"./FormControlLabel-BMa98H6J.js";import{S as b}from"./Switch-D7MKOh2D.js";import{T as C}from"./Table-DbE1P6lE.js";import{T}from"./TableHead-CAunGVfh.js";import{T as c}from"./TableRow-CDFa7zDo.js";import{T as o}from"./TableCell-BK__3QSH.js";import{v as u}from"./visuallyHidden-Dan1xhjv.js";import{T as j}from"./TableBody-zElBHe3z.js";import{P as g}from"./Paper-DJSKHSTy.js";import"./preload-helper-Dab_6GC_.js";import"./Collapse-CVPkzKoB.js";import"./useTheme-DjrtHLeH.js";import"./styled-YELB7PbO.js";import"./memoTheme-CUR-_UQu.js";import"./utils-CX-dufza.js";import"./TransitionGroupContext-DMVjCYVP.js";import"./useSlot-COYLd7Pd.js";import"./mergeSlotProps-Y-QEFSGT.js";import"./useForkRef-BE9Mh8bk.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-D7cMLa2k.js";import"./IconButton-BQJBDMuu.js";import"./Tooltip-CGfPTNyc.js";import"./useControlled-B1x_m4Ao.js";import"./useEventCallback-B998UMHo.js";import"./getReactElementRef-ksE6JIsb.js";import"./Grow-DgKR5Z9h.js";import"./Popper-77inD8mp.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-D0YnE6km.js";import"./useSlotProps-wCHKs8ch.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-bOxsf80n.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DuPW9E1K.js";import"./CircularProgress-B0VZoizd.js";import"./Actions-D5HDZDyt.js";import"./FaSvgIcon-CT_rBCtN.js";import"./SvgIcon-DwHLgNU7.js";import"./Form-BSB-tu1Z.js";import"./Alert-BwHZJPPa.js";import"./createSvgIcon-D6BcWLqc.js";import"./Close-BJXb1f8O.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BGMg_aeo.js";import"./Typography-D2_Tvhdq.js";import"./SwitchBase-_V4FthNd.js";import"./mergeSlotProps-0PeTl37o.js";const ge={title:"Components/Transitions/Collapse",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Expand from the start edge of the child element."}}}},a={render:l=>{const[p,s]=d.useState(!0),r=()=>{s(!1),setTimeout(()=>s(!0),1e3)};return e.jsx(i,{in:p,...l,children:e.jsx(h,{onClose:r,children:"Dismissable Alert"})})}},n={render:()=>{const[l,p]=d.useState(!0),s=()=>{p(m=>!m)},r=e.jsx(g,{sx:{m:1,width:100,height:100,bgcolor:"grey.200"},elevation:4});return e.jsxs(t,{children:[e.jsx(x,{control:e.jsx(b,{checked:l,onChange:s}),label:"Show"}),e.jsxs(C,{role:"presentation",sx:{width:250},children:[e.jsx(T,{children:e.jsxs(c,{children:[e.jsx(o,{children:e.jsx(t,{sx:u,children:"Orientation"})}),e.jsx(o,{children:e.jsx(t,{sx:{width:120},children:"collapsedSize 0"})}),e.jsx(o,{children:e.jsx(t,{sx:{width:120},children:"collapsedSize 40"})})]})}),e.jsxs(j,{children:[e.jsxs(c,{sx:{verticalAlign:"top"},children:[e.jsx(o,{children:e.jsx(t,{sx:{height:120},children:"Vertical"})}),e.jsx(o,{children:e.jsx(i,{in:l,children:r})}),e.jsx(o,{children:e.jsx(i,{in:l,collapsedSize:40,children:r})})]}),e.jsxs(c,{sx:{verticalAlign:"top"},children:[e.jsx(o,{children:e.jsx(t,{sx:{height:120},children:"Horizontal"})}),e.jsx(o,{children:e.jsx(i,{orientation:"horizontal",in:l,children:r})}),e.jsx(o,{children:e.jsx(i,{orientation:"horizontal",in:l,collapsedSize:40,children:r})})]})]})]})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
