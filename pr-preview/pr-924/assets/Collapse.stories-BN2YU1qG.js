import{r as d,j as e}from"./iframe-BdOkmXSO.js";import{C as i}from"./Collapse-CC-fDAQz.js";import{A as h}from"./Alert-CSWcSWY9.js";import{B as t}from"./Box-DXcrr7iM.js";import{F as x}from"./FormControlLabel-D6kG6ySx.js";import{S as b}from"./Switch-CjGqe3wq.js";import{T as C}from"./Table-D3TEGGCw.js";import{T}from"./TableHead-CHPy1Myv.js";import{T as c}from"./TableRow-C-8uBnP7.js";import{T as o}from"./TableCell-BnfCdFxG.js";import{v as u}from"./visuallyHidden-Dan1xhjv.js";import{T as j}from"./TableBody-FnC3n9Lz.js";import{P as g}from"./Paper-X002pFu5.js";import"./preload-helper-Dab_6GC_.js";import"./Collapse-DoKQNqzl.js";import"./useTheme-DpzwBSOw.js";import"./styled-ntycrLPJ.js";import"./memoTheme-Dp1NrYg6.js";import"./utils-BBZ_5XBR.js";import"./TransitionGroupContext-Ce7OQG8A.js";import"./useSlot-Do_-kGcn.js";import"./mergeSlotProps-Bpe1uZ1i.js";import"./useForkRef-B6GvvQRB.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-yhleNqH_.js";import"./IconButton-Ci36e-XY.js";import"./Tooltip-5Kn3M0WA.js";import"./useControlled-wRMaIAhC.js";import"./useEventCallback-Ci1dFtlM.js";import"./getReactElementRef-CAZnW1NE.js";import"./Grow-zcR73JmX.js";import"./Popper-CsnU-V5Y.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-Df3mT0t7.js";import"./useSlotProps-0Tuv8-jv.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C66xLdI-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D0mr5YFJ.js";import"./CircularProgress-BtHd2z-U.js";import"./Actions-j5ZzHduY.js";import"./FaSvgIcon-D_zjT4On.js";import"./SvgIcon-BD13zcFd.js";import"./Form-Dy8jxpW5.js";import"./Alert-Dv8Vaeap.js";import"./createSvgIcon-B1lFLeS5.js";import"./Close-CNJCk13c.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B7U-TuVK.js";import"./Typography-Ba-r-irp.js";import"./SwitchBase-DGEVIec5.js";import"./mergeSlotProps-CGT3lxwg.js";const ge={title:"Components/Transitions/Collapse",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Expand from the start edge of the child element."}}}},a={render:l=>{const[p,s]=d.useState(!0),r=()=>{s(!1),setTimeout(()=>s(!0),1e3)};return e.jsx(i,{in:p,...l,children:e.jsx(h,{onClose:r,children:"Dismissable Alert"})})}},n={render:()=>{const[l,p]=d.useState(!0),s=()=>{p(m=>!m)},r=e.jsx(g,{sx:{m:1,width:100,height:100,bgcolor:"grey.200"},elevation:4});return e.jsxs(t,{children:[e.jsx(x,{control:e.jsx(b,{checked:l,onChange:s}),label:"Show"}),e.jsxs(C,{role:"presentation",sx:{width:250},children:[e.jsx(T,{children:e.jsxs(c,{children:[e.jsx(o,{children:e.jsx(t,{sx:u,children:"Orientation"})}),e.jsx(o,{children:e.jsx(t,{sx:{width:120},children:"collapsedSize 0"})}),e.jsx(o,{children:e.jsx(t,{sx:{width:120},children:"collapsedSize 40"})})]})}),e.jsxs(j,{children:[e.jsxs(c,{sx:{verticalAlign:"top"},children:[e.jsx(o,{children:e.jsx(t,{sx:{height:120},children:"Vertical"})}),e.jsx(o,{children:e.jsx(i,{in:l,children:r})}),e.jsx(o,{children:e.jsx(i,{in:l,collapsedSize:40,children:r})})]}),e.jsxs(c,{sx:{verticalAlign:"top"},children:[e.jsx(o,{children:e.jsx(t,{sx:{height:120},children:"Horizontal"})}),e.jsx(o,{children:e.jsx(i,{orientation:"horizontal",in:l,children:r})}),e.jsx(o,{children:e.jsx(i,{orientation:"horizontal",in:l,collapsedSize:40,children:r})})]})]})]})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
