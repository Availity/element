import{r as s,j as e}from"./iframe-Wk3enkn_.js";import{a as t,T as P}from"./TablePagination-mxfwcoM5.js";import{T as l}from"./Table-D353YR5L.js";import{T as d}from"./TableRow-BPrOPbPP.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-D2PtryKx.js";import"./memoTheme-Caj5A1s7.js";import"./styled-BmTYHnh6.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CGPgBjBm.js";import"./useSlot-JMUv4BXp.js";import"./mergeSlotProps-NkzDZpmj.js";import"./useForkRef-yXYQNRja.js";import"./KeyboardArrowRight-DS7EMvNn.js";import"./createSvgIcon-q6AyRDli.js";import"./SvgIcon-C-x4Imun.js";import"./PaginationItem-CdgehMtC.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Qsi_pa_1.js";import"./useTimeout-BCOPmfCQ.js";import"./TransitionGroupContext-CwOxOLGn.js";import"./useEventCallback-B7JQiyR1.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C6xLK3w0.js";import"./CircularProgress-n4f4P4WA.js";import"./OutlinedInput-61eRF8Ns.js";import"./useFormControl-DXnbjHYZ.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-B_TFQKkc.js";import"./List-DVxafNt_.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-CYNyfJKO.js";import"./Menu-BseMwSAi.js";import"./useSlotProps-BfCrVpCA.js";import"./Popover-D6BMZrDV.js";import"./Portal-CCkMzpr1.js";import"./useTheme-CmRoqaFD.js";import"./utils-tb6sxdlZ.js";import"./getReactElementRef-Cnge9CgM.js";import"./mergeSlotProps-CCeuxG84.js";import"./Modal-CRbA4mc9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-B_XiOxQq.js";import"./Fade-CxXiFCgw.js";import"./Paper-BtZlLsyY.js";import"./useControlled-2F9gTxQc.js";import"./index-a2BAU8hi.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-IVUU0PnJ.js";import"./index-BucrEBOe.js";import"./index-BiBDMnSv.js";import"./index-pyii_x3t.js";import"./Tooltip-BR4Ffd1U.js";import"./Button-C074Gfa_.js";import"./index-CV9srtxl.js";import"./Box-DL-v_noe.js";import"./Grid-DdfbYMl5.js";import"./isMuiElement-DVgXTGQo.js";import"./styled-BnyQvlXI.js";import"./Stack-8J7VIz0q.js";import"./Container-ChUN_I-o.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-LAF-CuJk.js";import"./FormHelperText-D2pMThEq.js";import"./FormControlLabel-DI5XH8jn.js";import"./Typography-CLtqYzwP.js";import"./Switch-BPKn7d48.js";import"./SwitchBase-D9fpHDmD.js";import"./Radio-ETXqDp11.js";import"./RadioGroup-BUslnlIU.js";import"./FormGroup-CUY907o-.js";import"./Divider-6Fy3l_MU.js";import"./Table-D8gcmXLI.js";import"./TableRow-Ksy28vn8.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
