import{r as s,j as e}from"./iframe-Cyg9aVcX.js";import{a as t,T as P}from"./TablePagination-Bk7pjYSZ.js";import{T as l}from"./Table-CVxoB74z.js";import{T as d}from"./TableRow-Dwz-XGIW.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-DhNQSLQU.js";import"./memoTheme-jifZnr2J.js";import"./styled-Bd0VbO2U.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DOvA8Bkf.js";import"./useSlot-BxXD7OXK.js";import"./mergeSlotProps-cvNGDztE.js";import"./useForkRef-DU61cGWF.js";import"./KeyboardArrowRight-BieK8LqM.js";import"./createSvgIcon-C4GbkCiK.js";import"./SvgIcon-yyAmYjGv.js";import"./PaginationItem-BFoCAdUn.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BvuHtZ4U.js";import"./useTimeout-D6StvTbU.js";import"./TransitionGroupContext-Bf2CmkMl.js";import"./useEventCallback-C8dig9Cp.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D_0lSByq.js";import"./CircularProgress-DgTEISy3.js";import"./OutlinedInput-CwV_y8Kk.js";import"./useFormControl-BUS69YTZ.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-_JPqE97N.js";import"./List-BhseiF0d.js";import"./SelectFocusSourceContext-C-S6pfu1.js";import"./useSlotProps-D3SvR_Jp.js";import"./Popover-DGII8wAD.js";import"./Portal-CbV_9_tw.js";import"./useTheme-CzQvHrc-.js";import"./utils-B1U3sbvV.js";import"./getReactElementRef-CtSLxyS5.js";import"./mergeSlotProps-N0Bp7CtQ.js";import"./Modal-BKoLjwX6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Dt1aobyE.js";import"./Fade-BlsC_kbX.js";import"./Paper-CQzqH1w0.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-IhPRkG6b.js";import"./useControlled-LzVIFy4V.js";import"./index-PRHxF3E5.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-BOvMgmFx.js";import"./index-CVel8P3L.js";import"./index-CrcoPoGw.js";import"./index-h-exa6rv.js";import"./Tooltip-B872xQRW.js";import"./Button-BmGuU9Jv.js";import"./index-DUYfXBKq.js";import"./Box-DlTv5Oab.js";import"./Grid-ss4buRXG.js";import"./isMuiElement-D3GE3m2r.js";import"./styled-JRnDCPkO.js";import"./Stack-BB9tt9ZR.js";import"./Container-6TunXfMs.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BGxiyC7J.js";import"./FormHelperText-BEXj3jiV.js";import"./FormControlLabel-jOwSmfh2.js";import"./Typography-fPTXF0ua.js";import"./Switch-BNJ4GIvD.js";import"./SwitchBase-BLP-bgBx.js";import"./Radio-hpxBX7ZN.js";import"./RadioGroup-zueoi5PR.js";import"./FormGroup-CeG0nHdE.js";import"./Divider-BNMEa6zC.js";import"./Table-BiyeV4XO.js";import"./TableRow-0c5SHgw4.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
