import{j as e,r as c}from"./iframe-BAylI5Je.js";import{C as u}from"./Collapse-Bzj5cIl1.js";import{b as h}from"./index-D7bO6OTt.js";import{B as a}from"./Box-DpddYXXn.js";import{F as x}from"./FormControlLabel-BGdc4dIY.js";import{S as b}from"./Switch-BAMXHdQl.js";import{T as C}from"./Table-CN-8yUYf.js";import{T as f}from"./TableHead-D4ocZ8wo.js";import{T as d}from"./TableRow-DuMsVTNT.js";import{T as l}from"./TableCell-CL-Arvtx.js";import{v as T}from"./visuallyHidden-Dan1xhjv.js";import{T as g}from"./TableBody-4iZwXDBn.js";import{P as y}from"./Paper-gzQqajNa.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-Ct91rq7x.js";import"./styled-qchFS-7q.js";import"./memoTheme-BuFiJMU4.js";import"./utils-jWIr1tvh.js";import"./TransitionGroupContext-4YAWsFUH.js";import"./useSlot-tp0V2ckF.js";import"./mergeSlotProps-CpHFUTeD.js";import"./useForkRef-BbXecB9y.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-Dtra5kqE.js";import"./index-Cwm8YEbi.js";import"./Tooltip-xJM8APnn.js";import"./useControlled-DdXnTKyH.js";import"./useEventCallback-kqwlHtUL.js";import"./getReactElementRef-DYgwaRsW.js";import"./Portal-CtkHDIPH.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CjIBT4F9.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DyCxfOpo.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CKOllhzB.js";import"./CircularProgress-Da-Xnf7p.js";import"./Button-6oOIUTaT.js";import"./index-BYPMkNsh.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-B08jEN2V.js";import"./Alert-esZRtMpT.js";import"./createSvgIcon-srbipTqh.js";import"./Close-5QC12IK7.js";import"./AlertTitle-5KZiYhCa.js";import"./Typography-DNXJRb7Q.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D3XHth8F.js";import"./SwitchBase-tkLAg85y.js";const t=o=>e.jsx(u,{...o});try{t.displayName="Collapse",t.__docgenInfo={description:"",displayName:"Collapse",props:{children:{defaultValue:null,description:"The content node to be collapsed.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CollapseClasses>"}},collapsedSize:{defaultValue:{value:"'0px'"},description:"The width (horizontal) or height (vertical) of the container when collapsed.",name:"collapsedSize",required:!1,type:{name:"string | number"}},component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:"ElementType<TransitionProps, keyof IntrinsicElements>"}},easing:{defaultValue:null,description:`The transition timing function.
You may specify a single easing or a object containing enter and exit values.`,name:"easing",required:!1,type:{name:"string | { enter?: string; exit?: string; }"}},in:{defaultValue:null,description:"If `true`, the component will transition in.",name:"in",required:!1,type:{name:"boolean"}},orientation:{defaultValue:{value:"'vertical'"},description:"The transition orientation.",name:"orientation",required:!1,type:{name:'"horizontal" | "vertical"'}},timeout:{defaultValue:{value:"duration.standard"},description:`The duration for the transition, in milliseconds.
You may specify a single timeout for all transitions, or individually with an object.

Set to 'auto' to automatically calculate transition time based on height.`,name:"timeout",required:!1,type:{name:'number | "auto" | { appear?: number; enter?: number; exit?: number; } | { appear?: number; enter?: number; exit?: number; }'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<CollapseSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ root?: SlotProps<"div", CollapseRootSlotPropsOverrides, CollapseOwnerState>; wrapper?: SlotProps<"div", CollapseWrapperSlotPropsOverrides, CollapseOwnerState>; wrapperInner?: SlotProps<...>; }'}}}}}catch{}const Te={title:"Components/Transitions/Collapse",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Expand from the start edge of the child element."}}}},s={render:o=>{const[p,i]=c.useState(!0),r=()=>{i(!1),setTimeout(()=>i(!0),1e3)};return e.jsx(t,{in:p,...o,children:e.jsx(h,{onClose:r,children:"Dismissable Alert"})})}},n={render:()=>{const[o,p]=c.useState(!0),i=()=>{p(m=>!m)},r=e.jsx(y,{sx:{m:1,width:100,height:100,bgcolor:"grey.200"},elevation:4});return e.jsxs(a,{children:[e.jsx(x,{control:e.jsx(b,{checked:o,onChange:i}),label:"Show"}),e.jsxs(C,{role:"presentation",sx:{width:250},children:[e.jsx(f,{children:e.jsxs(d,{children:[e.jsx(l,{children:e.jsx(a,{sx:T,children:"Orientation"})}),e.jsx(l,{children:e.jsx(a,{sx:{width:120},children:"collapsedSize 0"})}),e.jsx(l,{children:e.jsx(a,{sx:{width:120},children:"collapsedSize 40"})})]})}),e.jsxs(g,{children:[e.jsxs(d,{sx:{verticalAlign:"top"},children:[e.jsx(l,{children:e.jsx(a,{sx:{height:120},children:"Vertical"})}),e.jsx(l,{children:e.jsx(t,{in:o,children:r})}),e.jsx(l,{children:e.jsx(t,{in:o,collapsedSize:40,children:r})})]}),e.jsxs(d,{sx:{verticalAlign:"top"},children:[e.jsx(l,{children:e.jsx(a,{sx:{height:120},children:"Horizontal"})}),e.jsx(l,{children:e.jsx(t,{orientation:"horizontal",in:o,children:r})}),e.jsx(l,{children:e.jsx(t,{orientation:"horizontal",in:o,collapsedSize:40,children:r})})]})]})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const ge=["_Collapse","_Options"];export{s as _Collapse,n as _Options,ge as __namedExportsOrder,Te as default};
