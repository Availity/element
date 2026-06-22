import{r as d,j as e}from"./iframe-D9VxGUXm.js";import{C as i}from"./Collapse-BnbSLDl0.js";import{A as h}from"./Alert-C3bWTqG3.js";import{B as t}from"./Box-1lHW1eXR.js";import{F as x}from"./FormControlLabel-DvK8y5Ee.js";import{S as b}from"./Switch-CgS_eYMx.js";import{T as C}from"./Table-_DjTmh-g.js";import{T}from"./TableHead-CgZLqmxP.js";import{T as c}from"./TableRow-B8C9HmIL.js";import{T as o}from"./TableCell-Cw7UBNAW.js";import{v as u}from"./visuallyHidden-Dan1xhjv.js";import{T as j}from"./TableBody-D4Mwwipi.js";import{P as g}from"./Paper-oCFHvNnf.js";import"./preload-helper-Dab_6GC_.js";import"./Collapse-BO7aptJF.js";import"./useTheme-B41ItSj5.js";import"./styled-D8Xb_hHx.js";import"./memoTheme-CUWoCynM.js";import"./utils-Bcz57uZ2.js";import"./TransitionGroupContext-BLR2oRR2.js";import"./useSlot-BAM4jdU8.js";import"./mergeSlotProps-CLdLLAsF.js";import"./useForkRef-5-P7CGIn.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-CCeZqBN_.js";import"./IconButton-Cib1SE9E.js";import"./Tooltip-88iJgdeD.js";import"./useControlled-nlFUsoSS.js";import"./useEventCallback-BrENIvCl.js";import"./getReactElementRef-Dqr_-LzO.js";import"./Grow-o6-ommK8.js";import"./Popper-D26kfRUw.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CSfdL5WB.js";import"./useSlotProps-BLtbmDJZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BrelKzp4.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-IEWOwJJy.js";import"./CircularProgress-rsn-iR-g.js";import"./Actions-Bez28Qkr.js";import"./FaSvgIcon-CwoOr0og.js";import"./SvgIcon-Bgb2NC38.js";import"./Form-BG5Mtcu6.js";import"./Alert-BFBy3_2R.js";import"./createSvgIcon-CuKrs_jq.js";import"./Close-BBIackpZ.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D5KNipz4.js";import"./Typography-mI_XzOBj.js";import"./SwitchBase-VVWJOAo4.js";import"./mergeSlotProps-JAhzVB8J.js";const ge={title:"Components/Transitions/Collapse",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Expand from the start edge of the child element."}}}},a={render:l=>{const[p,s]=d.useState(!0),r=()=>{s(!1),setTimeout(()=>s(!0),1e3)};return e.jsx(i,{in:p,...l,children:e.jsx(h,{onClose:r,children:"Dismissable Alert"})})}},n={render:()=>{const[l,p]=d.useState(!0),s=()=>{p(m=>!m)},r=e.jsx(g,{sx:{m:1,width:100,height:100,bgcolor:"grey.200"},elevation:4});return e.jsxs(t,{children:[e.jsx(x,{control:e.jsx(b,{checked:l,onChange:s}),label:"Show"}),e.jsxs(C,{role:"presentation",sx:{width:250},children:[e.jsx(T,{children:e.jsxs(c,{children:[e.jsx(o,{children:e.jsx(t,{sx:u,children:"Orientation"})}),e.jsx(o,{children:e.jsx(t,{sx:{width:120},children:"collapsedSize 0"})}),e.jsx(o,{children:e.jsx(t,{sx:{width:120},children:"collapsedSize 40"})})]})}),e.jsxs(j,{children:[e.jsxs(c,{sx:{verticalAlign:"top"},children:[e.jsx(o,{children:e.jsx(t,{sx:{height:120},children:"Vertical"})}),e.jsx(o,{children:e.jsx(i,{in:l,children:r})}),e.jsx(o,{children:e.jsx(i,{in:l,collapsedSize:40,children:r})})]}),e.jsxs(c,{sx:{verticalAlign:"top"},children:[e.jsx(o,{children:e.jsx(t,{sx:{height:120},children:"Horizontal"})}),e.jsx(o,{children:e.jsx(i,{orientation:"horizontal",in:l,children:r})}),e.jsx(o,{children:e.jsx(i,{orientation:"horizontal",in:l,collapsedSize:40,children:r})})]})]})]})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
