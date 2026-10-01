import{r as s,j as e}from"./iframe-BfiSjCZE.js";import{a as t,T as P}from"./TablePagination-BvcpUBBI.js";import{T as l}from"./Table-Cggh-tHy.js";import{T as d}from"./TableRow-C-yOPo5N.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-B9Oaz1d8.js";import"./memoTheme-Bf2lNlfa.js";import"./styled-B9LoXHeR.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CsFDrJki.js";import"./useSlot-BvJ3REjy.js";import"./mergeSlotProps-d8P6odjW.js";import"./useForkRef-KHwM-Xb0.js";import"./KeyboardArrowRight-3NgrFehc.js";import"./createSvgIcon-DV4tT70v.js";import"./SvgIcon-pfgupZ4n.js";import"./PaginationItem-CVyRMy9X.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B0Rj5enX.js";import"./useTimeout-Dvw-KAbd.js";import"./TransitionGroupContext-BprlU7j-.js";import"./useEventCallback-BRDDRqyT.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CFfT0ndL.js";import"./CircularProgress-DFM5h0gz.js";import"./OutlinedInput-DF7uYzJm.js";import"./useFormControl-C5CMMi3k.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-Dhg1FPPh.js";import"./List-DSZlyKTP.js";import"./SelectFocusSourceContext-Bs6RAa9A.js";import"./useSlotProps-DsKdZe-B.js";import"./Popover-B_IG8L-c.js";import"./Portal-1iQSKTOk.js";import"./useTheme-CyCmmmWE.js";import"./utils-CZVImzMM.js";import"./getReactElementRef-DrqUH2UJ.js";import"./mergeSlotProps-DuqHZ2js.js";import"./Modal-DeYFWYjf.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CyrGgScl.js";import"./Fade-DEFCsiCh.js";import"./Paper-8FyfnLjY.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-Bc7HWole.js";import"./useControlled-DuHd5Dfi.js";import"./index-CnlcVsMi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-rItUsZbQ.js";import"./index-BP56GXIS.js";import"./index-MVgG_W0q.js";import"./index-BnEi8s_n.js";import"./Tooltip-DQOY4bTe.js";import"./Button-CWR2xa5V.js";import"./index-DXU92sR7.js";import"./Box-CRTcjAl_.js";import"./Grid-C2RK_1Jw.js";import"./isMuiElement-CIl3go_L.js";import"./styled-Bty96-Ys.js";import"./Stack-ggz2xYsp.js";import"./Container-B6cEEQtr.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BkT6Jibn.js";import"./FormHelperText-CxIv3Am1.js";import"./FormControlLabel-CdBL0lN_.js";import"./Typography-C4HmXqwR.js";import"./Switch-Q5fXJ2Uu.js";import"./SwitchBase-AFFAmAWt.js";import"./Radio-C4YJulXy.js";import"./RadioGroup-DcY1quof.js";import"./FormGroup-BdAfT7sS.js";import"./Divider-CELaABvA.js";import"./Table-a9E2HMAr.js";import"./TableRow-CySAEEq8.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
