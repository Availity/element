import{r as s,j as e}from"./iframe-3dkTY0jX.js";import{a as t,T as P}from"./TablePagination-DSYIRfs8.js";import{T as l}from"./Table-Brz1aQwk.js";import{T as d}from"./TableRow-CWxfKTHV.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-JyXxN__5.js";import"./memoTheme-ClYOyAcO.js";import"./styled-DpUmhVNm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BtB9_B59.js";import"./useSlot-rqG-d0ju.js";import"./mergeSlotProps-DA590uQB.js";import"./useForkRef-D98SVFOp.js";import"./KeyboardArrowRight-DN_z1Kli.js";import"./createSvgIcon-BvVOPXpo.js";import"./SvgIcon-iH6sJxt7.js";import"./PaginationItem-BjxXnRWw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CGwtNBxW.js";import"./useTimeout-C1Q0-pFI.js";import"./TransitionGroupContext-CenxJGkC.js";import"./useEventCallback-DqxbtF2b.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-NndX5job.js";import"./CircularProgress-BLVqZX76.js";import"./OutlinedInput-Duj6wcXY.js";import"./useFormControl-BkMljPP4.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-BQnkIlah.js";import"./List-DjzIYyb1.js";import"./SelectFocusSourceContext-DDFMB3UY.js";import"./useSlotProps-cunvSKS2.js";import"./Popover-DRGr9AS8.js";import"./Portal-COcgB0Km.js";import"./useTheme-DqSWHq5v.js";import"./utils-q4WRQ2GW.js";import"./getReactElementRef-D5Pt6kS1.js";import"./mergeSlotProps-gdJU7zTn.js";import"./Modal-C04Dtpn0.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DwY4Idrm.js";import"./Fade-DoGbMPsZ.js";import"./Paper-v-wIRd8c.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-hM0JA67n.js";import"./useControlled-BRptJIgz.js";import"./index-CuTsacvC.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-CIZRDbLN.js";import"./index-C83s78gO.js";import"./index-CrcoPoGw.js";import"./index-B-aFmFgv.js";import"./Tooltip-gP38pAtd.js";import"./Button-llKR0QUB.js";import"./index-DIxClpYS.js";import"./Box-8YbrThzE.js";import"./Grid-CLckDB5v.js";import"./isMuiElement-Bd2bXImB.js";import"./styled-BLuOjd1d.js";import"./Stack-C6U2vEDQ.js";import"./Container-DbHjUNkP.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BNykh8H7.js";import"./FormHelperText-CfwUUlMy.js";import"./FormControlLabel-CWmS10z3.js";import"./Typography-BaJfZ2Cx.js";import"./Switch-BmTIf3nr.js";import"./SwitchBase-kK0dwszt.js";import"./Radio-C4Mro5AG.js";import"./RadioGroup-B3zSb4-e.js";import"./FormGroup-dum4jMC0.js";import"./Divider-xWAGgNzV.js";import"./Table-B7fSuEeV.js";import"./TableRow-C6bFLkoS.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
