import{r as i,j as r}from"./iframe-B3KH45W1.js";import{a,T as P}from"./TablePagination-CMCQMh4r.js";import{T as l}from"./Table-CWQft2Kt.js";import{T as d}from"./TableRow-CqRFgD38.js";import"./preload-helper-Dab_6GC_.js";import"./TableCell-ByJLeVkS.js";import"./memoTheme-DWwRHojM.js";import"./styled-B89GBRvi.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Pagination-D3FPiUX6.js";import"./PaginationItem-BNt19wgW.js";import"./Navigation-Cc0klsga.js";import"./faCircleArrowRight-C4kufxUN.js";import"./FaSvgIcon-DUC6Q4wv.js";import"./SvgIcon-DDVH-xS0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./LastPage-CXV44daE.js";import"./createSvgIcon-CP7Sjzln.js";import"./useSlot-DGd0VXU6.js";import"./mergeSlotProps--7hXBDn0.js";import"./useForkRef-C1kAtY37.js";import"./ButtonBase-DgN9Oijw.js";import"./useTimeout-BS1Rp5sI.js";import"./TransitionGroupContext-CAm2K2SY.js";import"./useEventCallback-CVbD2IC6.js";import"./isFocusVisible-B8k4qzLc.js";import"./useControlled-cbOgjwu_.js";import"./Select-BJwaEEmH.js";import"./Actions-CO819m3I.js";import"./Input-CuUrWl-a.js";import"./OutlinedInput-BAiglCmg.js";import"./useFormControl-Bg2Y-buC.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-DIxhJ8kq.js";import"./SelectFocusSourceContext-BFgvB2zc.js";import"./useSlotProps-CXce_cAS.js";import"./Popover-3fDVAJax.js";import"./Grow-iiG6wjq6.js";import"./useTheme-Ds4SDsFm.js";import"./utils-BQeXEgW_.js";import"./getReactElementRef-CBNP7eUh.js";import"./mergeSlotProps-CZPVrohS.js";import"./Modal-CJRztngO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CUL18StY.js";import"./contains-DSD8CO72.js";import"./Backdrop-y0tvSJ2D.js";import"./Fade-DJRP9WcG.js";import"./Paper-BJPkQ8DM.js";import"./List-DafW6Lb2.js";import"./Stack-D4A7CmlM.js";import"./styled-CG3DpTjV.js";import"./Divider-C6Wz3kbt.js";import"./dividerClasses-qU9lkgJy.js";import"./TablePagination-c_bZKy33.js";import"./KeyboardArrowRight-CGRognX1.js";import"./IconButton-Dv3tzyaZ.js";import"./CircularProgress-BSNAtS4j.js";import"./MenuItem-BfWTq7kz.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./Table-IvgxMyLz.js";import"./TableRow-Dtacin0C.js";const Re={title:"Components/Table/TablePagination",component:a,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},t={render:e=>{const[m,o]=i.useState(e.page);return i.useEffect(()=>{o(e.page)},[e.page]),r.jsx(a,{...e,page:m,onPageChange:(c,g)=>{o(g)}})}},n={render:e=>{const[m,o]=i.useState(e.page);return i.useEffect(()=>{o(e.page)},[e.page]),r.jsx(l,{role:"presentation",children:r.jsx(P,{children:r.jsx(d,{children:r.jsx(a,{...e,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},p={render:e=>r.jsx(a,{...e}),args:{rowsPerPageOptions:[]}},s={render:e=>r.jsx(a,{...e}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: TablePaginationProps) => {
    const [page, setPage] = useState(args.page);
    useEffect(() => {
      setPage(args.page);
    }, [args.page]);
    return <TablePagination {...args} page={page} onPageChange={(event, page) => {
      setPage(page);
    }} />;
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: TablePaginationProps) => <TablePagination {...args} />,
  args: {
    rowsPerPageOptions: []
  }
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: TablePaginationProps) => <TablePagination {...args} />,
  args: {
    rowsPerPage: -1,
    rowsPerPageOptions: [-1]
  }
}`,...s.parameters?.docs?.source}}};const Fe=["_TablePagination","_AsPartOfTable","_FixedRowsPerPage","_ShowAll"];export{n as _AsPartOfTable,p as _FixedRowsPerPage,s as _ShowAll,t as _TablePagination,Fe as __namedExportsOrder,Re as default};
