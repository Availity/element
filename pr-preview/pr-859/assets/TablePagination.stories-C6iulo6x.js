import{j as e,r as s}from"./iframe-C1vntzAX.js";import{a as t,T as P}from"./TablePagination-D_pA2rVL.js";import{T as l}from"./Table-NhokrTNB.js";import{T as d}from"./TableRow-S5mBn0Tq.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-Cus9kGHe.js";import"./memoTheme-B-OyMYhz.js";import"./styled-CpL5pW3T.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-XK4UbnIH.js";import"./useSlot-BmDgUDTi.js";import"./mergeSlotProps-B_ZZvCmf.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DLYnPViW.js";import"./KeyboardArrowRight-Dd5qA4RI.js";import"./createSvgIcon-OHXdYWDp.js";import"./SvgIcon-CgejwYEH.js";import"./PaginationItem-CIh1KJJ1.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-COQRfLrd.js";import"./useTimeout-Dtp_2qQ3.js";import"./TransitionGroupContext-cDoqgCSl.js";import"./useEventCallback-D85fiQCE.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-qkSs6g8Y.js";import"./CircularProgress-Drsym3OL.js";import"./OutlinedInput-Cw6JNZpA.js";import"./useFormControl-SXzsh7qR.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DokT1SIV.js";import"./List-DDwJcFVG.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-DT2YphLn.js";import"./Menu-CxzULmf9.js";import"./useSlotProps-B-xFDx91.js";import"./Popover-O9h2nK3b.js";import"./Portal-CG1k2SoH.js";import"./useTheme-vaQlFbmr.js";import"./utils-3uAZdIAp.js";import"./getReactElementRef-Bv2ENe3N.js";import"./mergeSlotProps-cS-2BPos.js";import"./Modal-Pgn3CpwW.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-CYuRmh3w.js";import"./Fade-BAaRtBTH.js";import"./Paper-DNaexmm0.js";import"./useControlled-DMvVP-hg.js";import"./index-CDQPidku.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-DvhDLLKv.js";import"./index-DEQeexvc.js";import"./index-BiBDMnSv.js";import"./index-BuDjrn_R.js";import"./Tooltip-CVSMh7i1.js";import"./Button-CbKLSFYP.js";import"./index-B1BPaPLx.js";import"./Box-DpOTPtKg.js";import"./Grid-Cq8hrZqV.js";import"./styled-BjeYOfVm.js";import"./isMuiElement-DtGZmajx.js";import"./Stack-CGWfFhJY.js";import"./Container-Bfu4tgfO.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-ViyvnT0n.js";import"./FormHelperText-C4dhFzeB.js";import"./FormControlLabel-Bwj9Hz7Q.js";import"./Typography-D6jUB3HO.js";import"./Switch-GsArecYL.js";import"./SwitchBase-BNj6NLZe.js";import"./RadioGroup-tSqlKPFB.js";import"./Radio-LwS1PEVC.js";import"./FormGroup-DYA_ON2b.js";import"./Divider-Bj7zfztv.js";import"./Table-QQykxPDu.js";import"./TableRow-DGmaqsRe.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
