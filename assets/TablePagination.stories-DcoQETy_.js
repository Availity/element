import{r as s,j as e}from"./iframe-CeHuEGfq.js";import{a as t,T as P}from"./TablePagination-jMa2IT4L.js";import{T as l}from"./Table-BG9ro3tT.js";import{T as d}from"./TableRow-ezA6KltS.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-DS8rHnOv.js";import"./memoTheme-qRsFH38R.js";import"./styled-BKIS-N79.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CdvQ9m2a.js";import"./useSlot-BjsCytrs.js";import"./mergeSlotProps-C79h5NBS.js";import"./useForkRef-C6m00sRF.js";import"./KeyboardArrowRight-BsD80q5g.js";import"./createSvgIcon-BjIHtdQj.js";import"./SvgIcon-DI8VqS9R.js";import"./PaginationItem-z6C9RB4M.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C22Hv80K.js";import"./useTimeout-B6rYa280.js";import"./TransitionGroupContext-DUPaGMT2.js";import"./useEventCallback-DqQ5xSM8.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BIB2TXr9.js";import"./CircularProgress-BvbF-3zQ.js";import"./OutlinedInput-BDHR51dh.js";import"./useFormControl-W-tvDTQe.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-unaWaI6A.js";import"./List-tyHuZrlB.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-DdWoD2OA.js";import"./Menu-B1d2wtb1.js";import"./useSlotProps-CYPYwT6r.js";import"./Popover-ChFmJvSp.js";import"./Portal-Dc4hRbOT.js";import"./useTheme-B3XVgK6m.js";import"./utils-CIk5CIgt.js";import"./getReactElementRef-C4ayTemP.js";import"./mergeSlotProps-D2-E38NA.js";import"./Modal-BR7rsPPx.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CJ45d9Fb.js";import"./Fade-BYSf3HBJ.js";import"./Paper-CZXACBVR.js";import"./useControlled-BliVddQx.js";import"./index-Du3l4lx8.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-BBqk_U0n.js";import"./index-DZHTdTBe.js";import"./index-BiBDMnSv.js";import"./index-h6yqrKSK.js";import"./Tooltip-B1PYtTnY.js";import"./Button-Ds__YP3L.js";import"./index-FvduELsu.js";import"./Box-yrTwHKYh.js";import"./Grid-DxlaTZg5.js";import"./isMuiElement-CftH3wiN.js";import"./styled-Cy9W--Nr.js";import"./Stack-Bat2MqnC.js";import"./Container-BxPloYEr.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CSqpisVO.js";import"./FormHelperText-Dpl44cik.js";import"./FormControlLabel-BhuXOFU6.js";import"./Typography-Dg4MYAbO.js";import"./Switch-kBTUDp-9.js";import"./SwitchBase-DGGiuPbR.js";import"./Radio-B8VMe6MP.js";import"./RadioGroup-BEPHQprY.js";import"./FormGroup-DHYG8q6E.js";import"./Divider-D6Ozvcwy.js";import"./Table-CVbSxtgM.js";import"./TableRow-BTyoL08O.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
