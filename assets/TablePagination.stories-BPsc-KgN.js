import{r as s,j as e}from"./iframe-BogvEzzk.js";import{a as t,T as P}from"./TablePagination-DG2YYmvv.js";import{T as l}from"./Table-j8MfbwCh.js";import{T as d}from"./TableRow-U8uayqG6.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-B5WC8WTk.js";import"./memoTheme-ConJxO_1.js";import"./styled-BFtRu0jz.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-wzNfIIWH.js";import"./useSlot-Y7PrCG6i.js";import"./mergeSlotProps-BErbrcgk.js";import"./useForkRef-CqcCgO8d.js";import"./KeyboardArrowRight-T4V_fDuX.js";import"./createSvgIcon-p3gD-EgA.js";import"./SvgIcon-G5ERuA4c.js";import"./PaginationItem-BtWTiT9l.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BesYK0lh.js";import"./useTimeout-DZGpqNmU.js";import"./TransitionGroupContext-CHnQfJTl.js";import"./useEventCallback-C0HPOgFU.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BtFu5_Hj.js";import"./CircularProgress-DhfsvjKI.js";import"./OutlinedInput-Cq1_VBQe.js";import"./useFormControl-B8_Z0NzZ.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-mJ0JnQWE.js";import"./List-DxFgOZ6h.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-DuHTe2pd.js";import"./Menu-DssRhoRF.js";import"./useSlotProps-BANTEgU8.js";import"./Popover-9x2syr4c.js";import"./Portal-ZBYUloHF.js";import"./useTheme-BBNTCId8.js";import"./utils-5Q8am4bW.js";import"./getReactElementRef-CP_6PAo8.js";import"./mergeSlotProps-C4-1KyX1.js";import"./Modal-CXoXruWX.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BNc1S_Ht.js";import"./Fade-2k1WGtTS.js";import"./Paper-DuKdNvwh.js";import"./useControlled-gyysmPVY.js";import"./index-DN6mEFyY.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-BvH4YaU7.js";import"./index-BrcEbWZt.js";import"./index-BiBDMnSv.js";import"./index-CVBbnXNY.js";import"./Tooltip-C6WVgS1U.js";import"./Button-tZZ9xZeA.js";import"./index-COPogReU.js";import"./Box-vDt_-54-.js";import"./Grid-BcbYyZVH.js";import"./isMuiElement-BFE19Jpd.js";import"./styled-CBCNrD84.js";import"./Stack-Dk7Y43_6.js";import"./Container-BNyaW0Z7.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-C89BBoXI.js";import"./FormHelperText-BPy61GBU.js";import"./FormControlLabel-Bwwng0iC.js";import"./Typography-6PKOADI0.js";import"./Switch-DBCNURWK.js";import"./SwitchBase-FzsuJ5kA.js";import"./Radio-CRkgjGUI.js";import"./RadioGroup-D27OhYEB.js";import"./FormGroup-DFkfhFkB.js";import"./Divider-BlV-2iOF.js";import"./Table-NZymoYEA.js";import"./TableRow-DqKd-D7i.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
