import{r as s,j as e}from"./iframe-h0MgQYlb.js";import{a as t,T as P}from"./TablePagination-DEe6UeP3.js";import{T as l}from"./Table-BKWv_vdv.js";import{T as d}from"./TableRow-DbomrBqJ.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-Cj3XORty.js";import"./memoTheme-XXgMlyY8.js";import"./styled-BqHoSPCQ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BU_H4qS5.js";import"./useSlot-DRVd6-GX.js";import"./mergeSlotProps-D1gF_ZlB.js";import"./useForkRef-CKNxtvC9.js";import"./KeyboardArrowRight-wuL3poIH.js";import"./createSvgIcon-BnwFzQLv.js";import"./SvgIcon-CJ2gQRBv.js";import"./PaginationItem-BSOia0Ne.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DGaEQWnN.js";import"./useTimeout-DZyw5ypU.js";import"./TransitionGroupContext-BQlZajXI.js";import"./useEventCallback-DzEyioes.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-gyouzdWj.js";import"./CircularProgress-Ce_dbRGa.js";import"./OutlinedInput-BuAc6qqn.js";import"./useFormControl-CzHvh1jI.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-76QK7Jrt.js";import"./List-DZrQ3uAf.js";import"./SelectFocusSourceContext-AoxeqCNi.js";import"./useSlotProps-CeTvmasO.js";import"./Popover-yoB3AMXB.js";import"./Portal-De7hiZQn.js";import"./useTheme-ipJVwYFq.js";import"./utils-DputtVCR.js";import"./getReactElementRef-zdjSJbKU.js";import"./mergeSlotProps-CQCB7Z3d.js";import"./Modal-Br_uJxcw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-KJ2tZ5Vr.js";import"./Fade-z7eIM_c6.js";import"./Paper-Bzbluycl.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-BHNpSFEz.js";import"./useControlled-4IqYUsvs.js";import"./index-BfEcMr2H.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-B1XNhcEk.js";import"./index-BD61RVnX.js";import"./index-MVgG_W0q.js";import"./index-_zAfcFR5.js";import"./Tooltip-cnLuDxtR.js";import"./Button-DFw25j8B.js";import"./index-DDm8yHLq.js";import"./Box-CawMSGjY.js";import"./Grid-BGvSYpEY.js";import"./isMuiElement-DHZpsMdk.js";import"./styled-ZbNx8Tx8.js";import"./Stack-B9I8dIEY.js";import"./Container-CVSHMzmU.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-ai4y9w6P.js";import"./FormHelperText-AZVpt9j-.js";import"./FormControlLabel-a6mRqus2.js";import"./Typography-DKkmO78y.js";import"./Switch-CLZpABLm.js";import"./SwitchBase-Dtg29Sna.js";import"./Radio-CXfh_6OV.js";import"./RadioGroup-BlqwT0bO.js";import"./FormGroup-BOwHFNcU.js";import"./Divider-IpoUtaBO.js";import"./Table-4E2jN6Hy.js";import"./TableRow-D9hK9bEa.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
