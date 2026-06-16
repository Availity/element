import{j as e,r as c}from"./iframe-Bzxq4khQ.js";import{C as u}from"./Collapse-UuiAGPmH.js";import{b as h}from"./index-DsDlPsDu.js";import{B as a}from"./Box-Bmi0pHZf.js";import{F as x}from"./FormControlLabel-HjAGXNw6.js";import{S as b}from"./Switch-RyNLpMLT.js";import{T as C}from"./Table-k50T7zHq.js";import{T as f}from"./TableHead-iHK3OKAK.js";import{T as d}from"./TableRow-BNxfcwUL.js";import{T as l}from"./TableCell-C9rbCqkb.js";import{v as T}from"./visuallyHidden-Dan1xhjv.js";import{T as g}from"./TableBody-i6OAAj-G.js";import{P as y}from"./Paper-i7wmImU7.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CLJ35KcV.js";import"./styled-BSgFKBik.js";import"./memoTheme-CkAjAg3h.js";import"./utils-BhtHTj_i.js";import"./TransitionGroupContext-4l5GgSIy.js";import"./useSlot-cTDCwMnT.js";import"./mergeSlotProps-BP1q_mR2.js";import"./useForkRef-CyBmAmq2.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-D8n7EMSe.js";import"./index-HZB2unx2.js";import"./Tooltip--PgUuozR.js";import"./useControlled-BxlFJ8nt.js";import"./useEventCallback-Zn8Kx7hu.js";import"./getReactElementRef-C4G1HZdF.js";import"./Portal-DrMzc0O0.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Dxsb08A1.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CbyRNbtW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-mnH_3Wha.js";import"./CircularProgress-OhY0Ky5x.js";import"./Button-COtcAXVl.js";import"./index-C1aSd5b5.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DbWIKXvI.js";import"./Alert-DCVSEwDs.js";import"./createSvgIcon-Bd4vIYa-.js";import"./Close-C1tpug76.js";import"./AlertTitle-tUAT_83t.js";import"./Typography-B9ybtieC.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CNT2ANZv.js";import"./SwitchBase-Cq5XAYLf.js";import"./mergeSlotProps-516L7gnV.js";const t=o=>e.jsx(u,{...o});try{t.displayName="Collapse",t.__docgenInfo={description:"",displayName:"Collapse",props:{children:{defaultValue:null,description:"The content node to be collapsed.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CollapseClasses>"}},collapsedSize:{defaultValue:{value:"'0px'"},description:"The width (horizontal) or height (vertical) of the container when collapsed.",name:"collapsedSize",required:!1,type:{name:"string | number"}},component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:"ElementType<TransitionProps, keyof IntrinsicElements>"}},easing:{defaultValue:null,description:`The transition timing function.
You may specify a single easing or a object containing enter and exit values.`,name:"easing",required:!1,type:{name:"string | { enter?: string; exit?: string; }"}},in:{defaultValue:null,description:"If `true`, the component will transition in.",name:"in",required:!1,type:{name:"boolean"}},orientation:{defaultValue:{value:"'vertical'"},description:"The transition orientation.",name:"orientation",required:!1,type:{name:'"horizontal" | "vertical"'}},timeout:{defaultValue:{value:"duration.standard"},description:`The duration for the transition, in milliseconds.
You may specify a single timeout for all transitions, or individually with an object.

Set to 'auto' to automatically calculate transition time based on height.`,name:"timeout",required:!1,type:{name:'number | "auto" | { appear?: number; enter?: number; exit?: number; } | { appear?: number; enter?: number; exit?: number; }'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<CollapseSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ root?: SlotProps<"div", CollapseRootSlotPropsOverrides, CollapseOwnerState>; wrapper?: SlotProps<"div", CollapseWrapperSlotPropsOverrides, CollapseOwnerState>; wrapperInner?: SlotProps<...>; }'}}}}}catch{}const ge={title:"Components/Transitions/Collapse",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Expand from the start edge of the child element."}}}},s={render:o=>{const[p,i]=c.useState(!0),r=()=>{i(!1),setTimeout(()=>i(!0),1e3)};return e.jsx(t,{in:p,...o,children:e.jsx(h,{onClose:r,children:"Dismissable Alert"})})}},n={render:()=>{const[o,p]=c.useState(!0),i=()=>{p(m=>!m)},r=e.jsx(y,{sx:{m:1,width:100,height:100,bgcolor:"grey.200"},elevation:4});return e.jsxs(a,{children:[e.jsx(x,{control:e.jsx(b,{checked:o,onChange:i}),label:"Show"}),e.jsxs(C,{role:"presentation",sx:{width:250},children:[e.jsx(f,{children:e.jsxs(d,{children:[e.jsx(l,{children:e.jsx(a,{sx:T,children:"Orientation"})}),e.jsx(l,{children:e.jsx(a,{sx:{width:120},children:"collapsedSize 0"})}),e.jsx(l,{children:e.jsx(a,{sx:{width:120},children:"collapsedSize 40"})})]})}),e.jsxs(g,{children:[e.jsxs(d,{sx:{verticalAlign:"top"},children:[e.jsx(l,{children:e.jsx(a,{sx:{height:120},children:"Vertical"})}),e.jsx(l,{children:e.jsx(t,{in:o,children:r})}),e.jsx(l,{children:e.jsx(t,{in:o,collapsedSize:40,children:r})})]}),e.jsxs(d,{sx:{verticalAlign:"top"},children:[e.jsx(l,{children:e.jsx(a,{sx:{height:120},children:"Horizontal"})}),e.jsx(l,{children:e.jsx(t,{orientation:"horizontal",in:o,children:r})}),e.jsx(l,{children:e.jsx(t,{orientation:"horizontal",in:o,collapsedSize:40,children:r})})]})]})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const ye=["_Collapse","_Options"];export{s as _Collapse,n as _Options,ye as __namedExportsOrder,ge as default};
