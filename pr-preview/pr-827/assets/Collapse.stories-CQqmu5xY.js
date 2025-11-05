import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-BSuoOqEd.js";import{C as T}from"./Collapse-Dpx26zjc.js";import{b as g}from"./index-DO2seCIp.js";import{B as i}from"./Box-BAprLmuU.js";import{F as j}from"./FormControlLabel-Bg8bewgW.js";import{S as y}from"./Switch-BQOh7xoK.js";import{T as w}from"./Table-CFcaDVkG.js";import{T as S}from"./TableHead-DH-CAZNz.js";import{T as m}from"./TableRow-BBryrBZE.js";import{T as t}from"./TableCell-CQrLN2wf.js";import{v}from"./visuallyHidden-Dan1xhjv.js";import{T as k}from"./TableBody-B1re9SC8.js";import{P as z}from"./Paper-BZZ0Jx2l.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./identifier-DhnHujDJ.js";import"./useTheme-DG5qVMsu.js";import"./DefaultPropsProvider-B1sWsgx2.js";import"./useTheme-C_c7PR3o.js";import"./styled-9znMky1q.js";import"./memoTheme-BwIkkReu.js";import"./utils-DuVTnmV7.js";import"./TransitionGroupContext-CcytU7uK.js";import"./index-CRBziY_1.js";import"./index-CCz_6dyq.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-B9dULhq6.js";import"./useForkRef-BIkqQIqh.js";import"./index-B2J0USI8.js";import"./Tooltip-bMNvQkmf.js";import"./index-bqlmQ0VS.js";import"./useSlot-jI6_c_PV.js";import"./mergeSlotProps-C8ahzxnq.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-DUUijreW.js";import"./useId-kjFOwFR3.js";import"./useEventCallback-Dvy07Fv6.js";import"./useEnhancedEffect-CIAiDanS.js";import"./getReactElementRef-B8liFQVS.js";import"./Portal-BleVqemi.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BphRKsXg.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-aAtY6dbQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-AdAh9sBA.js";import"./emotion-react.browser.esm-CVJjYY2z.js";import"./CircularProgress-I3IM84c9.js";import"./Button-DMnfP4ih.js";import"./LoadingButton-b9D3Ot90.js";import"./index-LinAfN8C.js";import"./faCircleArrowRight-e2oTZTvX.js";import"./faUser-Dxmucm-1.js";import"./SvgIcon-enpUMgPP.js";import"./Alert-CrhEATBR.js";import"./createSvgIcon-DjY4rWdK.js";import"./Close-DUhU1j0f.js";import"./AlertTitle-BZIznXRP.js";import"./Typography-CHtEfMke.js";import"./index-DtRw77fL.js";import"./extendSxProp-plByhdXY.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BP1ipPfY.js";import"./SwitchBase-D9HE_1I9.js";const r=o=>e.jsx(T,{...o});try{r.displayName="Collapse",r.__docgenInfo={description:"",displayName:"Collapse",props:{children:{defaultValue:null,description:"The content node to be collapsed.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CollapseClasses>"}},collapsedSize:{defaultValue:{value:"'0px'"},description:"The width (horizontal) or height (vertical) of the container when collapsed.",name:"collapsedSize",required:!1,type:{name:"string | number"}},component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:"ElementType<TransitionProps, keyof IntrinsicElements>"}},easing:{defaultValue:null,description:`The transition timing function.
You may specify a single easing or a object containing enter and exit values.`,name:"easing",required:!1,type:{name:"string | { enter?: string; exit?: string; }"}},in:{defaultValue:null,description:"If `true`, the component will transition in.",name:"in",required:!1,type:{name:"boolean"}},orientation:{defaultValue:{value:"'vertical'"},description:"The transition orientation.",name:"orientation",required:!1,type:{name:'"horizontal" | "vertical"'}},timeout:{defaultValue:{value:"duration.standard"},description:`The duration for the transition, in milliseconds.
You may specify a single timeout for all transitions, or individually with an object.

Set to 'auto' to automatically calculate transition time based on height.`,name:"timeout",required:!1,type:{name:'number | "auto" | { appear?: number; enter?: number; exit?: number; } | { appear?: number; enter?: number; exit?: number; }'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const Fe={title:"Components/Transitions/Collapse",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Expand from the start edge of the child element."}}}},n={render:o=>{const[p,a]=C.useState(!0),l=()=>{a(!1),setTimeout(()=>a(!0),1e3)};return e.jsx(r,{in:p,...o,children:e.jsx(g,{onClose:l,children:"Dismissable Alert"})})}},s={render:()=>{const[o,p]=C.useState(!0),a=()=>{p(f=>!f)},l=e.jsx(z,{sx:{m:1,width:100,height:100,bgcolor:"grey.200"},elevation:4});return e.jsxs(i,{children:[e.jsx(j,{control:e.jsx(y,{checked:o,onChange:a}),label:"Show"}),e.jsxs(w,{role:"presentation",sx:{width:250},children:[e.jsx(S,{children:e.jsxs(m,{children:[e.jsx(t,{children:e.jsx(i,{sx:v,children:"Orientation"})}),e.jsx(t,{children:e.jsx(i,{sx:{width:120},children:"collapsedSize 0"})}),e.jsx(t,{children:e.jsx(i,{sx:{width:120},children:"collapsedSize 40"})})]})}),e.jsxs(k,{children:[e.jsxs(m,{sx:{verticalAlign:"top"},children:[e.jsx(t,{children:e.jsx(i,{sx:{height:120},children:"Vertical"})}),e.jsx(t,{children:e.jsx(r,{in:o,children:l})}),e.jsx(t,{children:e.jsx(r,{in:o,collapsedSize:40,children:l})})]}),e.jsxs(m,{sx:{verticalAlign:"top"},children:[e.jsx(t,{children:e.jsx(i,{sx:{height:120},children:"Horizontal"})}),e.jsx(t,{children:e.jsx(r,{orientation:"horizontal",in:o,children:l})}),e.jsx(t,{children:e.jsx(r,{orientation:"horizontal",in:o,collapsedSize:40,children:l})})]})]})]})]})}};var d,c,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(c=n.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var u,x,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const Ie=["_Collapse","_Options"];export{n as _Collapse,s as _Options,Ie as __namedExportsOrder,Fe as default};
