import{j as e,r as s}from"./iframe-D81qY2CF.js";import{a as t,T as P}from"./TablePagination-CIjBK-Y1.js";import{T as l}from"./Table-OyVwOewM.js";import{T as d}from"./TableRow-CoNZa0CX.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-DLxutlEr.js";import"./memoTheme-A9yntoiy.js";import"./styled-CaGoIOKf.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-COxO8Toi.js";import"./useSlot-ietvTX_K.js";import"./mergeSlotProps-BaZVmxsR.js";import"./useForkRef-aj5N3dMx.js";import"./KeyboardArrowRight-hsbsbWU8.js";import"./createSvgIcon-cW8ufNaK.js";import"./SvgIcon-B6ASqf__.js";import"./PaginationItem-BuMcVXYv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D8v-94oh.js";import"./useTimeout-DKkko9rl.js";import"./TransitionGroupContext-CUPg0qtb.js";import"./useEventCallback-CqgW2Pgy.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DShobRfO.js";import"./CircularProgress-ByHKQjCZ.js";import"./OutlinedInput-CBLYdT9S.js";import"./useFormControl-B58sNEHq.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-GmvmTtOS.js";import"./List-CQHF_s_Z.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-BT7eijOJ.js";import"./Menu-LxUC79pv.js";import"./useSlotProps-huDybs-7.js";import"./Popover-DAivdLAX.js";import"./Portal-CxFiB9ei.js";import"./useTheme-DaB7mFrL.js";import"./utils-or5sFOOm.js";import"./getReactElementRef-DGERSSwn.js";import"./mergeSlotProps-B-p-pIsk.js";import"./Modal-DwTQgRCi.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DEXVSxef.js";import"./Fade-ChDneRqZ.js";import"./Paper-B5yWzxZy.js";import"./useControlled-JeBGtbqT.js";import"./index-BD-so7Wr.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-B1cEb85-.js";import"./index-DXPw07iH.js";import"./index-BiBDMnSv.js";import"./index-D8s0t892.js";import"./Tooltip-DVNRBZHi.js";import"./Button-B5mFfpCi.js";import"./index-CcvrWeMs.js";import"./Box-rRIRPzng.js";import"./Grid-DCMyUpSS.js";import"./styled-BY17iDss.js";import"./isMuiElement-CnND6WC1.js";import"./Stack-DqyNPhS4.js";import"./Container-CAzsbVoz.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-1LiFzSpb.js";import"./FormHelperText-DCQUYD-6.js";import"./FormControlLabel-yS-K86Z-.js";import"./Typography-Dn0-Cqm0.js";import"./Switch-T-QwS1SK.js";import"./SwitchBase-BPMkWiED.js";import"./RadioGroup-DLNEB0Uq.js";import"./Radio-BUX_wfoF.js";import"./FormGroup-C39yIwat.js";import"./Divider-nvWxZ6Yj.js";import"./Table-D57oNcBy.js";import"./TableRow-CIjWVkTD.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
