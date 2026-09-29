import{r as s,j as e}from"./iframe-CGrCKeT2.js";import{a as t,T as P}from"./TablePagination-klwUcoei.js";import{T as l}from"./Table-S7E1eOV4.js";import{T as d}from"./TableRow-COX2vyGK.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-D8gGUoXl.js";import"./memoTheme-BqDMrUbz.js";import"./styled-CotFv3Dr.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BTxJdBdW.js";import"./useSlot-BZVhLUF7.js";import"./mergeSlotProps-Dfpv_trn.js";import"./useForkRef-BEtKOrY4.js";import"./KeyboardArrowRight-CfOyRLH5.js";import"./createSvgIcon-DSkk_8Bd.js";import"./SvgIcon-DmVwQJs6.js";import"./PaginationItem-DJEaAEQB.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B5P9vk86.js";import"./useTimeout-DnCoFfSV.js";import"./TransitionGroupContext-BBGMeol_.js";import"./useEventCallback-y36uneSW.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-dlpyeDck.js";import"./CircularProgress-BKyEW5Pk.js";import"./OutlinedInput-DfoKSt68.js";import"./useFormControl-DJsBJsMM.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-C1NUGI0D.js";import"./List-y2FflAjw.js";import"./SelectFocusSourceContext-C01S2OkC.js";import"./useSlotProps-DOUkeG0B.js";import"./Popover-BPPXiUal.js";import"./Portal-BYKyeVye.js";import"./useTheme-4bOKZyvR.js";import"./utils-BkMf-uLY.js";import"./getReactElementRef-BNGPoDkJ.js";import"./mergeSlotProps-DfxTDm-u.js";import"./Modal-DaH7TrRl.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CUGDXrbh.js";import"./Fade-CllAQl-L.js";import"./Paper-DOXN6uva.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-CTV8LpZw.js";import"./useControlled-DCMdc5dP.js";import"./index-DKQlCnEq.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-B-NkH9LO.js";import"./index-6epKdSc3.js";import"./index-CrcoPoGw.js";import"./index-DmvP-mEg.js";import"./Tooltip-BDnPRKbu.js";import"./Button-BHZdRtrg.js";import"./index-DolDcqHq.js";import"./Box-Bi1Xr4Gf.js";import"./Grid-CmaXE-H9.js";import"./isMuiElement-RR7Ftbg4.js";import"./styled-BjWfuHlM.js";import"./Stack-_oDMgEvk.js";import"./Container-CUb5VPVp.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Dm5e5Bpr.js";import"./FormHelperText-CzHZXYcR.js";import"./FormControlLabel-CLZnkdIQ.js";import"./Typography-Bir8nP2f.js";import"./Switch-RFJmoXGw.js";import"./SwitchBase-B4wWvBkW.js";import"./Radio-Dm4oDbtu.js";import"./RadioGroup-CjIXdSfJ.js";import"./FormGroup-A-2cfNzW.js";import"./Divider-DHaspIrJ.js";import"./Table-CC97xcre.js";import"./TableRow--Wn75dZS.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
