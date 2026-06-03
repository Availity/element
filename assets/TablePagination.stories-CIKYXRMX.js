import{r as s,j as e}from"./iframe-C9Q7A5ra.js";import{a as t,T as P}from"./TablePagination-CArZ4t_J.js";import{T as l}from"./Table-BsN-6s-6.js";import{T as d}from"./TableRow-CYl_GJ4L.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-L95cVaTb.js";import"./memoTheme-YF5MtDv6.js";import"./styled-0UczSNXk.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-l7wcox08.js";import"./useSlot--WqN-Xj_.js";import"./mergeSlotProps-UhsM3zsz.js";import"./useForkRef-B8T8EBOK.js";import"./KeyboardArrowRight-BVPFCG2G.js";import"./createSvgIcon-CHtzqaAD.js";import"./SvgIcon-CzclMxo5.js";import"./PaginationItem-DCa9G2TS.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B3rBS9gF.js";import"./useTimeout-BpXHY--n.js";import"./TransitionGroupContext-DyV0aRJH.js";import"./useEventCallback-LHv8CayF.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DZcoIB4U.js";import"./CircularProgress-CPrPE9Sw.js";import"./OutlinedInput-CSgt8L6A.js";import"./useFormControl-CWsMajyi.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-oXf-57r6.js";import"./List-zrL7hhVU.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-C1poooRd.js";import"./Menu-DBFXP6CC.js";import"./useSlotProps-Osd4OcEu.js";import"./Popover-BYapJmFI.js";import"./Portal-1jOXhtNE.js";import"./useTheme-DiIVsm9U.js";import"./utils-BZDXaftX.js";import"./getReactElementRef-D2IRer1N.js";import"./mergeSlotProps-CWYgiJ7A.js";import"./Modal-BGRke5kn.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-QSng-jdr.js";import"./Fade-Qmg-4-l1.js";import"./Paper-BvFLUZyh.js";import"./useControlled-__FO7R_p.js";import"./index-CyBTe91T.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./Pagination-NFo1OrRL.js";import"./index-BV7HRARt.js";import"./index-BiBDMnSv.js";import"./index-Cb9JJsiN.js";import"./Tooltip-Dxz12tat.js";import"./Button-CeTzgLEE.js";import"./index-0hLAGvby.js";import"./Box-BiOrU6MK.js";import"./Grid-CzHxH48g.js";import"./isMuiElement-BgeoDj0f.js";import"./styled-CCY5CIG6.js";import"./Stack-DyDlGsHv.js";import"./Container-CbMFSBjO.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BmBjgzzS.js";import"./FormHelperText-Cbb9nKyC.js";import"./FormControlLabel-DhgUYH0v.js";import"./Typography-DxUywEUK.js";import"./Switch-CdF7hf3S.js";import"./SwitchBase-DXRaGOfU.js";import"./Radio-DztJdFCF.js";import"./RadioGroup-80iG6m5i.js";import"./FormGroup-BsWZdUIF.js";import"./Divider-Uz9pEyYf.js";import"./Table-BETxETkZ.js";import"./TableRow-CXK0jZXq.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
