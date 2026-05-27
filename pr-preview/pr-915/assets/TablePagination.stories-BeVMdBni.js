import{r as s,j as e}from"./iframe-BeW-ShBa.js";import{a as t,T as P}from"./TablePagination-Cy_-fBZ2.js";import{T as l}from"./Table-BXr5e-Ux.js";import{T as d}from"./TableRow-kmUvzJpC.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-HMtjjUWX.js";import"./memoTheme-Dx1_-nEN.js";import"./styled-E0CmYcz3.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CjDyVHfi.js";import"./useSlot-BhPPWLJz.js";import"./mergeSlotProps-CGqoVYOm.js";import"./useForkRef-Bgl7H4kw.js";import"./KeyboardArrowRight-DfMALxS3.js";import"./createSvgIcon-BpCrnFel.js";import"./SvgIcon-C3Z68du4.js";import"./PaginationItem-BJlsJC_M.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Z8KwVcKF.js";import"./useTimeout-Da9tNn-P.js";import"./TransitionGroupContext-BUF6kaGb.js";import"./useEventCallback-6Uyg9fGx.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BvJM40or.js";import"./CircularProgress-CiOpdtGa.js";import"./OutlinedInput-DFxqNyAs.js";import"./useFormControl-DwS3dUaL.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-GU-uFh5u.js";import"./List-C1Y1JpKl.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-DxZlcoBU.js";import"./Menu-CN-C-Du1.js";import"./useSlotProps-ghuGdCEB.js";import"./Popover-BVS0J5pW.js";import"./Portal-BPMEmQxN.js";import"./useTheme-BPzLpLU0.js";import"./utils-CvRtdEc9.js";import"./getReactElementRef-BjNvvstO.js";import"./mergeSlotProps-D8UcRAc-.js";import"./Modal-CnexL54u.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-B02_d13g.js";import"./Fade-D8bMgo8d.js";import"./Paper-C7ldQuEP.js";import"./useControlled-BpXRfpPn.js";import"./index-BKqV-UiY.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./Pagination-CZLnUIK1.js";import"./index-DHE56XfM.js";import"./index-BiBDMnSv.js";import"./index-B-GrkHTI.js";import"./Tooltip-UPiMyfZ8.js";import"./Button-BwdPpmvm.js";import"./index-CcUAtZIu.js";import"./Box-BJjonoMC.js";import"./Grid-D-BmDj5R.js";import"./isMuiElement-Gc_4vFE3.js";import"./styled-C6cy5gNq.js";import"./Stack-CkM3UncO.js";import"./Container-CuzKFum9.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Cxj9EV6v.js";import"./FormHelperText-DLkF45Vp.js";import"./FormControlLabel-rtHyeW46.js";import"./Typography-C3HO5zSq.js";import"./Switch-B_X6xexg.js";import"./SwitchBase-D-OFjC1o.js";import"./Radio-BNVrWmQP.js";import"./RadioGroup-D9O0pa2h.js";import"./FormGroup-CXZ8nN14.js";import"./Divider-DULf-jQm.js";import"./Table-BlYqerRo.js";import"./TableRow-9uwshM7W.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
