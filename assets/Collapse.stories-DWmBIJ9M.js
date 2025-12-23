import{j as e,r as C}from"./iframe-DF1q2aaL.js";import{C as T}from"./Collapse-UbS1CPrc.js";import{b as g}from"./index-DmX3TV1f.js";import{B as i}from"./Box-CIJZFnEp.js";import{F as j}from"./FormControlLabel-D1O_4yuP.js";import{S as y}from"./Switch-DurZW9YG.js";import{T as w}from"./Table-g0tJLxjJ.js";import{T as S}from"./TableHead-DSfuqkNL.js";import{T as d}from"./TableRow-teD-3kqi.js";import{T as t}from"./TableCell-WNhPYxPt.js";import{v}from"./visuallyHidden-Dan1xhjv.js";import{T as k}from"./TableBody-CNYjs7C0.js";import{P as z}from"./Paper-DZhAfepD.js";import"./preload-helper-Dp1pzeXC.js";import"./useTheme-C0GFliqz.js";import"./styled-CFEXa4qH.js";import"./memoTheme-BD6H9365.js";import"./utils-BdM8s10D.js";import"./TransitionGroupContext-DTdRQeqO.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-CJLBifOK.js";import"./useForkRef-D-TFDBL_.js";import"./index-D2mEmfXN.js";import"./Tooltip-BXhUmSeH.js";import"./useSlot-CQvSmYnu.js";import"./mergeSlotProps-BnmzE4jq.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-C2txOzyk.js";import"./useEventCallback-C9NbUrxX.js";import"./getReactElementRef-Cr3R6gAV.js";import"./Portal-CbFePWP9.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B0ZOsC4g.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-K-5rBd1A.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D5OUD9Sm.js";import"./CircularProgress-DkK8nyO-.js";import"./Button-B9ufjNyc.js";import"./index-DJNX-Iyq.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-DB8Z1ZTq.js";import"./Alert-CKz_Ipst.js";import"./createSvgIcon-DzcieuLS.js";import"./Close-DyTYpaPw.js";import"./AlertTitle-DX6i04AW.js";import"./Typography-cWmdXt40.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-ByL3kvVY.js";import"./SwitchBase-iVmERgWS.js";const l=o=>e.jsx(T,{...o});try{l.displayName="Collapse",l.__docgenInfo={description:"",displayName:"Collapse",props:{children:{defaultValue:null,description:"The content node to be collapsed.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CollapseClasses>"}},collapsedSize:{defaultValue:{value:"'0px'"},description:"The width (horizontal) or height (vertical) of the container when collapsed.",name:"collapsedSize",required:!1,type:{name:"string | number"}},component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:"ElementType<TransitionProps, keyof IntrinsicElements>"}},easing:{defaultValue:null,description:`The transition timing function.
You may specify a single easing or a object containing enter and exit values.`,name:"easing",required:!1,type:{name:"string | { enter?: string; exit?: string; }"}},in:{defaultValue:null,description:"If `true`, the component will transition in.",name:"in",required:!1,type:{name:"boolean"}},orientation:{defaultValue:{value:"'vertical'"},description:"The transition orientation.",name:"orientation",required:!1,type:{name:'"horizontal" | "vertical"'}},timeout:{defaultValue:{value:"duration.standard"},description:`The duration for the transition, in milliseconds.
You may specify a single timeout for all transitions, or individually with an object.

Set to 'auto' to automatically calculate transition time based on height.`,name:"timeout",required:!1,type:{name:'number | "auto" | { appear?: number; enter?: number; exit?: number; } | { appear?: number; enter?: number; exit?: number; }'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const ke={title:"Components/Transitions/Collapse",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"Expand from the start edge of the child element."}}}},n={render:o=>{const[p,a]=C.useState(!0),r=()=>{a(!1),setTimeout(()=>a(!0),1e3)};return e.jsx(l,{in:p,...o,children:e.jsx(g,{onClose:r,children:"Dismissable Alert"})})}},s={render:()=>{const[o,p]=C.useState(!0),a=()=>{p(f=>!f)},r=e.jsx(z,{sx:{m:1,width:100,height:100,bgcolor:"grey.200"},elevation:4});return e.jsxs(i,{children:[e.jsx(j,{control:e.jsx(y,{checked:o,onChange:a}),label:"Show"}),e.jsxs(w,{role:"presentation",sx:{width:250},children:[e.jsx(S,{children:e.jsxs(d,{children:[e.jsx(t,{children:e.jsx(i,{sx:v,children:"Orientation"})}),e.jsx(t,{children:e.jsx(i,{sx:{width:120},children:"collapsedSize 0"})}),e.jsx(t,{children:e.jsx(i,{sx:{width:120},children:"collapsedSize 40"})})]})}),e.jsxs(k,{children:[e.jsxs(d,{sx:{verticalAlign:"top"},children:[e.jsx(t,{children:e.jsx(i,{sx:{height:120},children:"Vertical"})}),e.jsx(t,{children:e.jsx(l,{in:o,children:r})}),e.jsx(t,{children:e.jsx(l,{in:o,collapsedSize:40,children:r})})]}),e.jsxs(d,{sx:{verticalAlign:"top"},children:[e.jsx(t,{children:e.jsx(i,{sx:{height:120},children:"Horizontal"})}),e.jsx(t,{children:e.jsx(l,{orientation:"horizontal",in:o,children:r})}),e.jsx(t,{children:e.jsx(l,{orientation:"horizontal",in:o,collapsedSize:40,children:r})})]})]})]})]})}};var c,m,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,x,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const ze=["_Collapse","_Options"];export{n as _Collapse,s as _Options,ze as __namedExportsOrder,ke as default};
