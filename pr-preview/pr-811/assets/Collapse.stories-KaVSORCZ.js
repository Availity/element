import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as C}from"./index-BgYLq7fD.js";import{C as T}from"./Collapse-RuyvmUHH.js";import{b as g}from"./index-rh78dY07.js";import{B as i}from"./Box-BU2WakPM.js";import{F as j}from"./FormControlLabel-NrRuXsuu.js";import{S as y}from"./Switch-B_HzHwQu.js";import{T as w,a as S}from"./TableHead-oMlxqc4e.js";import{a as d,T as v}from"./TableRow-CYkSGJKZ.js";import{T as o}from"./TableCell-DT8dV3s1.js";import{v as k}from"./visuallyHidden-Dan1xhjv.js";import{P as z}from"./Paper-zGtC1N39.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./generateUtilityClass-GxznSYtt.js";import"./identifier-CHUoN9pF.js";import"./useTheme-BGaXYmwe.js";import"./DefaultPropsProvider-ArLX9SCD.js";import"./useTheme-CVByJb8R.js";import"./styled-FZfCzBz5.js";import"./memoTheme-BLrvrRyo.js";import"./utils-tFrEP9Vf.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./generateUtilityClasses-aotQgNYZ.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./useForkRef-Dz4aGlyk.js";import"./index-k9OtkSpc.js";import"./Tooltip-Xh9QA514.js";import"./index-DyJdRKzS.js";import"./useSlot-qvYlW2UV.js";import"./resolveComponentProps-XMphxBSb.js";import"./useControlled-DxC1uCGX.js";import"./useId-DIK8ekB4.js";import"./getReactElementRef-Df0xbma2.js";import"./Portal-DEVqEMA6.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DT0tbkWv.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BFylt634.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DwAEbHIm.js";import"./emotion-react.browser.esm-DW5OmoQI.js";import"./CircularProgress-o1goEU37.js";import"./Button-DrYdciQ0.js";import"./LoadingButton-C6EjcQI6.js";import"./index-CmMPo3bx.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./SvgIcon-D3xe1wVB.js";import"./Alert-BSC4cdjV.js";import"./createSvgIcon-DK1T27V3.js";import"./Close-9bLEWkOn.js";import"./AlertTitle-Bln1cCcI.js";import"./Typography-geKghQyJ.js";import"./index-Df15702_.js";import"./extendSxProp-BZnzVrgj.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-t_-EwZHM.js";import"./SwitchBase-DpeF2ikX.js";const l=t=>e.jsx(T,{...t});try{l.displayName="Collapse",l.__docgenInfo={description:"",displayName:"Collapse",props:{children:{defaultValue:null,description:"The content node to be collapsed.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CollapseClasses>"}},collapsedSize:{defaultValue:{value:"'0px'"},description:"The width (horizontal) or height (vertical) of the container when collapsed.",name:"collapsedSize",required:!1,type:{name:"string | number"}},component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:"ElementType<TransitionProps, keyof IntrinsicElements>"}},easing:{defaultValue:null,description:`The transition timing function.
You may specify a single easing or a object containing enter and exit values.`,name:"easing",required:!1,type:{name:"string | { enter?: string; exit?: string; }"}},in:{defaultValue:null,description:"If `true`, the component will transition in.",name:"in",required:!1,type:{name:"boolean"}},orientation:{defaultValue:{value:"'vertical'"},description:"The transition orientation.",name:"orientation",required:!1,type:{name:'"horizontal" | "vertical"'}},timeout:{defaultValue:{value:"duration.standard"},description:`The duration for the transition, in milliseconds.
You may specify a single timeout for all transitions, or individually with an object.

Set to 'auto' to automatically calculate transition time based on height.`,name:"timeout",required:!1,type:{name:'number | "auto" | { appear?: number; enter?: number; exit?: number; } | { appear?: number; enter?: number; exit?: number; }'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const Ne={title:"Components/Transitions/Collapse",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"Expand from the start edge of the child element."}}}},n={render:t=>{const[p,a]=C.useState(!0),r=()=>{a(!1),setTimeout(()=>a(!0),1e3)};return e.jsx(l,{in:p,...t,children:e.jsx(g,{onClose:r,children:"Dismissable Alert"})})}},s={render:()=>{const[t,p]=C.useState(!0),a=()=>{p(f=>!f)},r=e.jsx(z,{sx:{m:1,width:100,height:100,bgcolor:"grey.200"},elevation:4});return e.jsxs(i,{children:[e.jsx(j,{control:e.jsx(y,{checked:t,onChange:a}),label:"Show"}),e.jsxs(w,{role:"presentation",sx:{width:250},children:[e.jsx(S,{children:e.jsxs(d,{children:[e.jsx(o,{children:e.jsx(i,{sx:k,children:"Orientation"})}),e.jsx(o,{children:e.jsx(i,{sx:{width:120},children:"collapsedSize 0"})}),e.jsx(o,{children:e.jsx(i,{sx:{width:120},children:"collapsedSize 40"})})]})}),e.jsxs(v,{children:[e.jsxs(d,{sx:{verticalAlign:"top"},children:[e.jsx(o,{children:e.jsx(i,{sx:{height:120},children:"Vertical"})}),e.jsx(o,{children:e.jsx(l,{in:t,children:r})}),e.jsx(o,{children:e.jsx(l,{in:t,collapsedSize:40,children:r})})]}),e.jsxs(d,{sx:{verticalAlign:"top"},children:[e.jsx(o,{children:e.jsx(i,{sx:{height:120},children:"Horizontal"})}),e.jsx(o,{children:e.jsx(l,{orientation:"horizontal",in:t,children:r})}),e.jsx(o,{children:e.jsx(l,{orientation:"horizontal",in:t,collapsedSize:40,children:r})})]})]})]})]})}};var c,m,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const Fe=["_Collapse","_Options"];export{n as _Collapse,s as _Options,Fe as __namedExportsOrder,Ne as default};
