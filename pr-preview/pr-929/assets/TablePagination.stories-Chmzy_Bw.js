import{r as s,j as e}from"./iframe-Cnf77ZIg.js";import{a as t,T as P}from"./TablePagination-L0qeJRtx.js";import{T as l}from"./Table-CL7dI2Fg.js";import{T as d}from"./TableRow-Bw2me_lG.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-HqiafO7n.js";import"./memoTheme-rtNk9j34.js";import"./styled-D7PTo4Yf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-1BWBAZgg.js";import"./useSlot-UCTcrF1q.js";import"./mergeSlotProps-CtuEIw1c.js";import"./useForkRef-CwrFiSR5.js";import"./KeyboardArrowRight-BrrORG9z.js";import"./createSvgIcon-C5tcB9_e.js";import"./SvgIcon-D8TdQCTz.js";import"./PaginationItem-CCdLcpyz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Cb27w-UN.js";import"./useTimeout-DDbT1lIl.js";import"./TransitionGroupContext-PCEy4ISN.js";import"./useEventCallback-C-Qx89z1.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-De56WQhg.js";import"./CircularProgress-DjiS4vOo.js";import"./OutlinedInput-Wlr5Q67i.js";import"./useFormControl-FlV4R_pV.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DVMRpQnt.js";import"./List-B-VVle_u.js";import"./SelectFocusSourceContext-CGaZJ5Tt.js";import"./useSlotProps-9tgtsXjP.js";import"./Popover-CyHUhMPu.js";import"./Portal-_ErOQT1L.js";import"./useTheme-fbZoBAbS.js";import"./utils-C9oXke8q.js";import"./getReactElementRef-CMOtQl0I.js";import"./mergeSlotProps-DJo0CcBT.js";import"./Modal-BsxKKYBP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CwjXL11W.js";import"./Fade-DcdXt8nB.js";import"./Paper-DkkA_EpG.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-BSUog0-L.js";import"./useControlled-CSfvqfPH.js";import"./index-CCvoZ_po.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-ovlEHrVX.js";import"./index-CpFXeQfH.js";import"./index-CrcoPoGw.js";import"./index-BbhRJntT.js";import"./Tooltip-RxJZvyE-.js";import"./Button-B1EPaR8-.js";import"./index-ORdrVCt-.js";import"./Box-ChPufWLv.js";import"./Grid-CrhtQkIm.js";import"./isMuiElement-DBtd91O4.js";import"./styled-BdiKer14.js";import"./Stack-CAuZPL_Y.js";import"./Container-Bpufyj5a.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BjvK7be8.js";import"./FormHelperText-BughnuW6.js";import"./FormControlLabel-DA0D24Rk.js";import"./Typography-C7kdML4f.js";import"./Switch-DUQOdpz9.js";import"./SwitchBase-BooYjoT7.js";import"./Radio-5LCq-NFB.js";import"./RadioGroup-BKRFtPL4.js";import"./FormGroup-DzvvVjMS.js";import"./Divider-nIEtNCFC.js";import"./Table-DEovtaTZ.js";import"./TableRow-EB78Hczo.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
