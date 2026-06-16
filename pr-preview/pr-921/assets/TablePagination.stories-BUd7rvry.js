import{r as s,j as e}from"./iframe-DbrIJLQi.js";import{a as t,T as P}from"./TablePagination-BJYuHNto.js";import{T as l}from"./Table-DdW19XDt.js";import{T as d}from"./TableRow-r9XQAGLS.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-D2oOSDIY.js";import"./memoTheme-CYnUbeeS.js";import"./styled-7I1Qt9E3.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BVzc7mHp.js";import"./useSlot-ucEwirIM.js";import"./mergeSlotProps-D6Q6z-MA.js";import"./useForkRef-xHQCOq-i.js";import"./KeyboardArrowRight-DIfWkxFG.js";import"./createSvgIcon-GCeLsGHA.js";import"./SvgIcon-DkLovEvc.js";import"./PaginationItem-BV5k1bvt.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BHclRNV-.js";import"./useTimeout-0bEjAxlE.js";import"./TransitionGroupContext-bpHC9icU.js";import"./useEventCallback-GRDf_Mdq.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-FVSq3BNJ.js";import"./CircularProgress-HcGcr7gk.js";import"./OutlinedInput-BFe23H1n.js";import"./useFormControl-CYWmgkgE.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-Clm18pri.js";import"./List-C1_gwHJu.js";import"./SelectFocusSourceContext-BBesLkFm.js";import"./useSlotProps-CHkbcgjp.js";import"./Popover-CoLBYFg2.js";import"./Portal-CRDltpFP.js";import"./useTheme-DYW2Qal8.js";import"./utils-C3QXpwtY.js";import"./getReactElementRef-CTToKV8F.js";import"./mergeSlotProps-BYQRBRhP.js";import"./Modal-DerH6gqI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BxUsxFSD.js";import"./Fade-BisiffpU.js";import"./Paper-CCVHPuGA.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-Cdrixiru.js";import"./useControlled-DZAExesg.js";import"./index-BV8EXEzP.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-yHfCIfhe.js";import"./index-D1fYhjb6.js";import"./index-CrcoPoGw.js";import"./index-BviXD-l_.js";import"./Tooltip-Dj2v8eaN.js";import"./Button-CzxszAvI.js";import"./index-D9nQZvQo.js";import"./Box-ddZNUx2x.js";import"./Grid-D3_qV-Fz.js";import"./isMuiElement-2h_sD4kS.js";import"./styled-DMMrRL0j.js";import"./Stack-H1A63kiw.js";import"./Container-B1a9E6oy.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-D7bT6Btw.js";import"./FormHelperText-BvP8g2iX.js";import"./FormControlLabel-WcjZ1yo1.js";import"./Typography-CJOV5VVW.js";import"./Switch-B5eAU5u-.js";import"./SwitchBase-D5XteesO.js";import"./Radio-DxcSoo58.js";import"./RadioGroup-ypRPCInm.js";import"./FormGroup-VuYgoRam.js";import"./Divider-BV6LSjrm.js";import"./Table-DWMa3gtX.js";import"./TableRow-5BwT7fuY.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
