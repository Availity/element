import{r as s,j as e}from"./iframe-7yTZJyI8.js";import{a as t,T as P}from"./TablePagination-Bsb3UeIX.js";import{T as l}from"./Table-jrX-qWJq.js";import{T as d}from"./TableRow-D_X9SM91.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CDv3GjAX.js";import"./memoTheme-CIMTQhyT.js";import"./styled-BMlFG2th.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DJKUfW5b.js";import"./useSlot-CCUJR_Dn.js";import"./mergeSlotProps-D3aTQwfn.js";import"./useForkRef-CH4SD_Tq.js";import"./KeyboardArrowRight-COHoHC6L.js";import"./createSvgIcon-D2n64X_N.js";import"./SvgIcon-BfOELIkm.js";import"./PaginationItem-BOoQFjLp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DlKrHxyr.js";import"./useTimeout-DDTRmv4f.js";import"./TransitionGroupContext-BVN7PaEo.js";import"./useEventCallback-B8agtspF.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-ffMIHdaJ.js";import"./CircularProgress-CFzFWCR0.js";import"./OutlinedInput-CpoiWSqJ.js";import"./useFormControl-vZHxFS91.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-C80vvv0o.js";import"./List-CRcTwWHL.js";import"./SelectFocusSourceContext-wLszAgBF.js";import"./useSlotProps-EhI9vhRh.js";import"./Popover-DlQtJRWC.js";import"./Portal-B1bcjcbG.js";import"./useTheme-BQI76UIF.js";import"./utils-C-JIMqUV.js";import"./getReactElementRef-BidH7fq7.js";import"./mergeSlotProps-Bi6GFR8l.js";import"./Modal-CedBjRzI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Bj6XerGx.js";import"./Fade-DH1Krrsi.js";import"./Paper-DkH-Q5xC.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-C8OaN8DB.js";import"./useControlled-C9ki-RMb.js";import"./index-LWy-RhUk.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-DYidNVUv.js";import"./index-Fccp8F6-.js";import"./index-MVgG_W0q.js";import"./index-BAPd2OJx.js";import"./Tooltip-BDwmcAHG.js";import"./Button-BK3WQXmQ.js";import"./index-DoZlsXSq.js";import"./Box-BsPtR0uw.js";import"./Grid-CKHq_-iw.js";import"./isMuiElement-BI6Pjydy.js";import"./styled-Cs8_Hcz2.js";import"./Stack-CZJNS7pW.js";import"./Container-CJPQZB9X.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-I6OgSsZO.js";import"./FormHelperText-CWuIrZZ7.js";import"./FormControlLabel-B-Gj01lZ.js";import"./Typography-Bz3seEIw.js";import"./Switch-D80papWj.js";import"./SwitchBase-B3rR0Chu.js";import"./Radio-pAidvSGQ.js";import"./RadioGroup-DzGlsQkP.js";import"./FormGroup-B09RTSmM.js";import"./Divider-4AVVzlu6.js";import"./Table-CbhBuO7s.js";import"./TableRow-B4gmBF1x.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
