import{j as e,r as c}from"./iframe-QKKiXGe2.js";import{C as u}from"./Collapse-BzKppt1G.js";import{b as h}from"./index-DtY9Vnl1.js";import{B as i}from"./Box-DS6KTGM7.js";import{F as f}from"./FormControlLabel-DzVdZDHy.js";import{S as x}from"./Switch-D-dXUd1u.js";import{T as b}from"./Table-CAFhwaus.js";import{T as C}from"./TableHead-DQKGzwQf.js";import{T as p}from"./TableRow-BcuEXi1w.js";import{T as t}from"./TableCell-Da2iwTN1.js";import{v as T}from"./visuallyHidden-Dan1xhjv.js";import{T as g}from"./TableBody-CmIvtJM2.js";import{P as y}from"./Paper-Bu_9L5He.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CobnQWC-.js";import"./styled-CQy7SchW.js";import"./memoTheme-CZ6h3Fbh.js";import"./utils-Dh1OrGpA.js";import"./TransitionGroupContext-CAofQ-AT.js";import"./useSlot-DRcEuyBg.js";import"./mergeSlotProps-C7lIBrBK.js";import"./useForkRef-GKR9CYz5.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-DkvHtZOb.js";import"./index-Dx_zFY-v.js";import"./IconButton-SAs9Di6J.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BjGfF1Y_.js";import"./useEventCallback-KenlF9RE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BAVpeqhg.js";import"./Tooltip-BYG0wW6K.js";import"./useControlled-BjERoBEC.js";import"./getReactElementRef-DpOU19qE.js";import"./Portal-JL7agaji.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CqRX49VI.js";import"./Button-B0ZWu58J.js";import"./index-C-csxGdp.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D3LX6zM9.js";import"./Alert-CirbgJPt.js";import"./createSvgIcon-Bm4mBUxC.js";import"./Close-DncTnFTq.js";import"./AlertTitle-CJkA97o7.js";import"./Typography-lfATY7Ds.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BS7uljQq.js";import"./SwitchBase-BB6lrJXc.js";import"./mergeSlotProps-CpR-3M6H.js";const l=o=>e.jsx(u,{...o});try{l.displayName="Collapse",l.__docgenInfo={description:"",displayName:"Collapse",props:{children:{defaultValue:null,description:"The content node to be collapsed.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CollapseClasses> | undefined"}},collapsedSize:{defaultValue:{value:"'0px'"},description:"The width (horizontal) or height (vertical) of the container when collapsed.",name:"collapsedSize",required:!1,type:{name:"string | number | undefined"}},component:{defaultValue:null,description:`The component used for the root node.
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
