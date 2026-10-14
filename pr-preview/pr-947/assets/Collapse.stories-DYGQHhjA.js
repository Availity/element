import{j as e,r as c}from"./iframe-Dc8rhMFy.js";import{C as u}from"./Collapse-B1_4xyjI.js";import{b as h}from"./index-g6loayii.js";import{B as i}from"./Box-BeA7Astr.js";import{F as f}from"./FormControlLabel-DPQCCqsQ.js";import{S as x}from"./Switch-fiWFufRn.js";import{T as b}from"./Table-BR8pzgW-.js";import{T as C}from"./TableHead-BYXR2znz.js";import{T as p}from"./TableRow-CPYnPD4v.js";import{T as t}from"./TableCell-COK42Vn7.js";import{v as T}from"./visuallyHidden-Dan1xhjv.js";import{T as g}from"./TableBody-CEMDUbQB.js";import{P as y}from"./Paper-CSAWm734.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CAn2KvKi.js";import"./styled-BGT3xm4Q.js";import"./memoTheme-S-5nuklg.js";import"./utils-D7u3O4jf.js";import"./TransitionGroupContext-BFqd1JBl.js";import"./useSlot-3a7eddsl.js";import"./mergeSlotProps-kSQUyWpp.js";import"./useForkRef-udrkS_SI.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-CrdWGjXP.js";import"./index-Dd1sCRm8.js";import"./IconButton-CeH7M-cn.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CqO9c84b.js";import"./useEventCallback-BaT-rbGb.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-FGVI2lRz.js";import"./Tooltip-y8JW-hsI.js";import"./useControlled-g2ws-rib.js";import"./getReactElementRef-Dso64NKM.js";import"./Portal-jMetYcmF.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Bnd3aa5q.js";import"./Button-D07KqWD2.js";import"./index-DY0QHs1w.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BxrpqK7J.js";import"./Alert-QjJoCGLU.js";import"./createSvgIcon-CArSjKuJ.js";import"./Close-C-Uwrjhi.js";import"./AlertTitle-BL7DBIFe.js";import"./Typography-B_IwZxWJ.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Dv8J8Q0P.js";import"./SwitchBase-CND8MRdP.js";import"./mergeSlotProps-CnvQftF1.js";const l=o=>e.jsx(u,{...o});try{l.displayName="Collapse",l.__docgenInfo={description:"",displayName:"Collapse",props:{children:{defaultValue:null,description:"The content node to be collapsed.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CollapseClasses> | undefined"}},collapsedSize:{defaultValue:{value:"'0px'"},description:"The width (horizontal) or height (vertical) of the container when collapsed.",name:"collapsedSize",required:!1,type:{name:"string | number | undefined"}},component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:"ElementType<TransitionProps, keyof IntrinsicElements> | undefined"}},easing:{defaultValue:null,description:`The transition timing function.
You may specify a single easing or a object containing enter and exit values.`,name:"easing",required:!1,type:{name:"string | { enter?: string | undefined; exit?: string | undefined; } | undefined"}},in:{defaultValue:null,description:"If `true`, the component will transition in.",name:"in",required:!1,type:{name:"boolean | undefined"}},orientation:{defaultValue:{value:"'vertical'"},description:"The transition orientation.",name:"orientation",required:!1,type:{name:'"horizontal" | "vertical" | undefined'}},timeout:{defaultValue:{value:"duration.standard"},description:`The duration for the transition, in milliseconds.
You may specify a single timeout for all transitions, or individually with an object.

Set to 'auto' to automatically calculate transition time based on height.`,name:"timeout",required:!1,type:{name:'number | "auto" | { appear?: number | undefined; enter?: number | undefined; exit?: number | undefined; } | { appear?: number | undefined; enter?: number | undefined; exit?: number | undefined; } | undefined'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme> | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown> | undefined"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<CollapseSlots> | undefined"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ root?: SlotProps<"div", CollapseRootSlotPropsOverrides, CollapseOwnerState> | undefined; wrapper?: SlotProps<...> | undefined; wrapperInner?: SlotProps<...> | undefined; } | undefined'}}}}}catch{}const ge={title:"Components/Transitions/Collapse",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"Expand from the start edge of the child element."}}}},a={render:o=>{const[d,r]=c.useState(!0),n=()=>{r(!1),setTimeout(()=>r(!0),1e3)};return e.jsx(l,{in:d,...o,children:e.jsx(h,{onClose:n,children:"Dismissable Alert"})})}},s={render:()=>{const[o,d]=c.useState(!0),r=()=>{d(m=>!m)},n=e.jsx(y,{sx:{m:1,width:100,height:100,bgcolor:"grey.200"},elevation:4});return e.jsxs(i,{children:[e.jsx(f,{control:e.jsx(x,{checked:o,onChange:r}),label:"Show"}),e.jsxs(b,{role:"presentation",sx:{width:250},children:[e.jsx(C,{children:e.jsxs(p,{children:[e.jsx(t,{children:e.jsx(i,{sx:T,children:"Orientation"})}),e.jsx(t,{children:e.jsx(i,{sx:{width:120},children:"collapsedSize 0"})}),e.jsx(t,{children:e.jsx(i,{sx:{width:120},children:"collapsedSize 40"})})]})}),e.jsxs(g,{children:[e.jsxs(p,{sx:{verticalAlign:"top"},children:[e.jsx(t,{children:e.jsx(i,{sx:{height:120},children:"Vertical"})}),e.jsx(t,{children:e.jsx(l,{in:o,children:n})}),e.jsx(t,{children:e.jsx(l,{in:o,collapsedSize:40,children:n})})]}),e.jsxs(p,{sx:{verticalAlign:"top"},children:[e.jsx(t,{children:e.jsx(i,{sx:{height:120},children:"Horizontal"})}),e.jsx(t,{children:e.jsx(l,{orientation:"horizontal",in:o,children:n})}),e.jsx(t,{children:e.jsx(l,{orientation:"horizontal",in:o,collapsedSize:40,children:n})})]})]})]})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const ye=["_Collapse","_Options"];export{a as _Collapse,s as _Options,ye as __namedExportsOrder,ge as default};
