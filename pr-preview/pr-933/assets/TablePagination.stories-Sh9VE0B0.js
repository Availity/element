import{r as s,j as e}from"./iframe-_ZTccD58.js";import{a as t,T as P}from"./TablePagination-Dfei-a7E.js";import{T as l}from"./Table-HPvvcxVF.js";import{T as d}from"./TableRow-NHJXkJi-.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-C_bIl4Um.js";import"./memoTheme-BuxtMmS2.js";import"./styled-DxUGJNed.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Ci00hVrf.js";import"./useSlot-Y1vfiROK.js";import"./mergeSlotProps-BNTkh1_h.js";import"./useForkRef-BH960YuM.js";import"./KeyboardArrowRight-yNbly7x2.js";import"./createSvgIcon-CPBwa84_.js";import"./SvgIcon-B7LeHXNQ.js";import"./PaginationItem-C5tZEbzh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CPTcrrxt.js";import"./useTimeout-COBvC2JW.js";import"./TransitionGroupContext-U0kEnV9D.js";import"./useEventCallback-Bsg7GzMN.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DaIXPvFu.js";import"./CircularProgress-DP4XdEyk.js";import"./OutlinedInput-DXlNzAXJ.js";import"./useFormControl-3-vne5Nr.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DWs6npYo.js";import"./List-D6qKeGNd.js";import"./SelectFocusSourceContext-CjN1_fJS.js";import"./useSlotProps-93kC9vNJ.js";import"./Popover-DTwCY0yp.js";import"./Portal-D40QliBd.js";import"./useTheme-CbKlvc9V.js";import"./utils-CGytJ6bP.js";import"./getReactElementRef-CKHPMftD.js";import"./mergeSlotProps-D6scpCU0.js";import"./Modal-D02YFzj_.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-B0rEXgSL.js";import"./Fade-U1zsu3gd.js";import"./Paper-TFiwEfzG.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-wCdgrbFd.js";import"./useControlled-h9lrVQtL.js";import"./index-D2g-Snq2.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-Oyq_Su4V.js";import"./index-BrswPlEY.js";import"./index-CrcoPoGw.js";import"./index-DLaYSOpi.js";import"./Tooltip-BlJXya1q.js";import"./Button-DpAEBbkn.js";import"./index-MbAAKXvE.js";import"./Box-BSxgn2ms.js";import"./Grid-cMYs6nxO.js";import"./isMuiElement-yepEbMeh.js";import"./styled-B0tsulN_.js";import"./Stack-DA_tb5jO.js";import"./Container-ChGZTn1s.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BOIs-YGq.js";import"./FormHelperText-CVMjCHsI.js";import"./FormControlLabel-Bk2X92XQ.js";import"./Typography-BQev244I.js";import"./Switch-DVpo9JuL.js";import"./SwitchBase-BCE6kg8q.js";import"./Radio-C4kknd4X.js";import"./RadioGroup-jGIVdwLG.js";import"./FormGroup-DF6oOKk8.js";import"./Divider-ByHj0LGu.js";import"./Table-L6UFlKOe.js";import"./TableRow-BIxKXDwc.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
