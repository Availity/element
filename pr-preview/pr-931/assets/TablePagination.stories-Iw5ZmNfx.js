import{r as s,j as e}from"./iframe-ujVaYq5z.js";import{a as t,T as P}from"./TablePagination-mXO2A19i.js";import{T as l}from"./Table-BjuDoIkb.js";import{T as d}from"./TableRow-VxQ4TfFZ.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-C_R-5HP5.js";import"./memoTheme-CdGwTPP7.js";import"./styled-B-xCudEP.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DqPGU1OM.js";import"./useSlot-Bx_FYgWG.js";import"./mergeSlotProps-KSZa1rpd.js";import"./useForkRef-DbBKzesF.js";import"./KeyboardArrowRight-lghWkz0L.js";import"./createSvgIcon-C0cHZWti.js";import"./SvgIcon-DXUCDQE8.js";import"./PaginationItem-_V4zeH2Y.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-iPF5PiZW.js";import"./useTimeout-NHks1NG8.js";import"./TransitionGroupContext-4IQuvIV5.js";import"./useEventCallback-Ckojbqp4.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-MZkZlGxG.js";import"./CircularProgress-see__pNb.js";import"./OutlinedInput-BtSlq6bO.js";import"./useFormControl-Cvu2sY6d.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-h0bjYy3Y.js";import"./List-CjBQExuh.js";import"./SelectFocusSourceContext-rG7pWPT_.js";import"./useSlotProps-zhwYHJyp.js";import"./Popover-BHdYqB-a.js";import"./Portal-C9J_EaUY.js";import"./useTheme-CRyXlIuJ.js";import"./utils-JnhbsWr6.js";import"./getReactElementRef-SADr8eSm.js";import"./mergeSlotProps-Cf3nLFWM.js";import"./Modal-3Eqv_0Wj.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DZyErt74.js";import"./Fade-D1fX65m0.js";import"./Paper-tJaxAljo.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-BPDCCuPw.js";import"./useControlled-BffgEsp1.js";import"./index-CiMK-E4X.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-BlwRxiDD.js";import"./index-DuhTuEga.js";import"./index-CrcoPoGw.js";import"./index-612CGizF.js";import"./Tooltip-5f47SB-B.js";import"./Button-CHVL5mlZ.js";import"./index-BOD_Negu.js";import"./Box-Cl1E5OD4.js";import"./Grid-CvbP1FC1.js";import"./isMuiElement-rsUHqA_z.js";import"./styled-VPzH8ng9.js";import"./Stack-CQconrOZ.js";import"./Container-Bu0A8KYF.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CPfTRyuP.js";import"./FormHelperText-CTZY8iBR.js";import"./FormControlLabel-C4xfba5E.js";import"./Typography-BNx6-4zj.js";import"./Switch-CBjqQ08R.js";import"./SwitchBase-DwviZCGg.js";import"./Radio-CjVbsVnH.js";import"./RadioGroup-_oAPx5U4.js";import"./FormGroup-Bf_foN45.js";import"./Divider-DIAH-5fx.js";import"./Table-BigYPfcB.js";import"./TableRow-4f1is1Mu.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
