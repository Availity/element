import{r as s,j as e}from"./iframe-QKKiXGe2.js";import{a as t,T as P}from"./TablePagination-BvqZk-vH.js";import{T as l}from"./Table-BcSiNaue.js";import{T as d}from"./TableRow-DYSbkici.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-Da2iwTN1.js";import"./memoTheme-CZ6h3Fbh.js";import"./styled-CQy7SchW.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-C3jMkOyx.js";import"./useSlot-DRcEuyBg.js";import"./mergeSlotProps-C7lIBrBK.js";import"./useForkRef-GKR9CYz5.js";import"./KeyboardArrowRight-CerKf__N.js";import"./createSvgIcon-Bm4mBUxC.js";import"./SvgIcon-D3LX6zM9.js";import"./PaginationItem-DQ_l4uyD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BjGfF1Y_.js";import"./useTimeout-DkvHtZOb.js";import"./TransitionGroupContext-CAofQ-AT.js";import"./useEventCallback-KenlF9RE.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-SAs9Di6J.js";import"./CircularProgress-BAVpeqhg.js";import"./OutlinedInput-Cudg-yYO.js";import"./useFormControl-BS7uljQq.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-BUdA172x.js";import"./List-jtBebsxm.js";import"./SelectFocusSourceContext-Iss43-gE.js";import"./useSlotProps-CqRX49VI.js";import"./Popover-DfTMYM2R.js";import"./Portal-JL7agaji.js";import"./useTheme-CobnQWC-.js";import"./utils-Dh1OrGpA.js";import"./getReactElementRef-DpOU19qE.js";import"./mergeSlotProps-CpR-3M6H.js";import"./Modal-WlFR6ZW0.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Veo0zKS5.js";import"./Fade-BA-tR7QB.js";import"./Paper-Bu_9L5He.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-DSMEK_KK.js";import"./useControlled-BjERoBEC.js";import"./index-C-csxGdp.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-Dd3iT8Fx.js";import"./index-Cvupsb9L.js";import"./index-CrcoPoGw.js";import"./index-Dx_zFY-v.js";import"./Tooltip-BYG0wW6K.js";import"./Button-B0ZWu58J.js";import"./index-DmDUxSlw.js";import"./Box-DS6KTGM7.js";import"./Grid-BWZayuEN.js";import"./isMuiElement-BPsBBR2z.js";import"./styled-CL_ITmKE.js";import"./Stack-vCt2ORwh.js";import"./Container-B58issDp.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-D_H32dE9.js";import"./FormHelperText-DI4TFjly.js";import"./FormControlLabel-DzVdZDHy.js";import"./Typography-lfATY7Ds.js";import"./Switch-D-dXUd1u.js";import"./SwitchBase-BB6lrJXc.js";import"./Radio-Bqh7DeHt.js";import"./RadioGroup-SwtLDsyW.js";import"./FormGroup-THy_K4lA.js";import"./Divider-U3oIKmQv.js";import"./Table-CAFhwaus.js";import"./TableRow-BcuEXi1w.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: TablePaginationProps) => {
    const [page, setPage] = useState(args.page);
    useEffect(() => {
      setPage(args.page);
    }, [args.page]);
    return <TablePagination {...args} page={page} onPageChange={(event, page) => {
      setPage(page);
    }} />;
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: TablePaginationProps) => {
    const [page, setPage] = useState(args.page);
    useEffect(() => {
      setPage(args.page);
    }, [args.page]);
    return <Table role="presentation">
        <TableFooter>
          <TableRow>
            <TablePagination {...args} page={page} onPageChange={(event, page) => {
            setPage(page);
          }} />
          </TableRow>
        </TableFooter>
      </Table>;
  },
  args: {
    component: undefined
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: TablePaginationProps) => <TablePagination {...args} />,
  args: {
    rowsPerPageOptions: []
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (args: TablePaginationProps) => <TablePagination {...args} />,
  args: {
    rowsPerPage: -1,
    rowsPerPageOptions: [-1]
  }
}`,...n.parameters?.docs?.source}}};const Nr=["_TablePagination","_AsPartOfTable","_FixedRowsPerPage","_ShowAll"];export{p as _AsPartOfTable,i as _FixedRowsPerPage,n as _ShowAll,a as _TablePagination,Nr as __namedExportsOrder,Mr as default};
