import{r as i,j as r}from"./iframe-D9VxGUXm.js";import{a,T as P}from"./TablePagination-CEHyk2Jh.js";import{T as l}from"./Table-BDrZkJOS.js";import{T as d}from"./TableRow-uzOprS2d.js";import"./preload-helper-Dab_6GC_.js";import"./TableCell-Cw7UBNAW.js";import"./memoTheme-CUWoCynM.js";import"./styled-D8Xb_hHx.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Pagination-BKFUZJ3Z.js";import"./PaginationItem-iZ2KwCDK.js";import"./Navigation-DXIENyQY.js";import"./faCircleArrowRight-C4kufxUN.js";import"./FaSvgIcon-CwoOr0og.js";import"./SvgIcon-Bgb2NC38.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./LastPage-BafUOlA7.js";import"./createSvgIcon-CuKrs_jq.js";import"./useSlot-BAM4jdU8.js";import"./mergeSlotProps-CLdLLAsF.js";import"./useForkRef-5-P7CGIn.js";import"./ButtonBase-IEWOwJJy.js";import"./useTimeout-CCeZqBN_.js";import"./TransitionGroupContext-BLR2oRR2.js";import"./useEventCallback-BrENIvCl.js";import"./isFocusVisible-B8k4qzLc.js";import"./useControlled-nlFUsoSS.js";import"./Select-DKGOAe8y.js";import"./Actions-Bez28Qkr.js";import"./Input-C9_Sqi_J.js";import"./OutlinedInput-Dr4cfOVe.js";import"./useFormControl-D5KNipz4.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-CN5D_YTR.js";import"./SelectFocusSourceContext-BhxM5Ro2.js";import"./useSlotProps-BLtbmDJZ.js";import"./Popover-R-MCXb6u.js";import"./Grow-o6-ommK8.js";import"./useTheme-B41ItSj5.js";import"./utils-Bcz57uZ2.js";import"./getReactElementRef-Dqr_-LzO.js";import"./mergeSlotProps-JAhzVB8J.js";import"./Modal-B8lqQyLL.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CSfdL5WB.js";import"./contains-DSD8CO72.js";import"./Backdrop-DWoUx2Mm.js";import"./Fade-4pWY_yaW.js";import"./Paper-oCFHvNnf.js";import"./List-VhCI1ZGj.js";import"./Stack-NbPl_tL-.js";import"./styled-N1qat-rE.js";import"./Divider-BXDOAs2I.js";import"./dividerClasses-qU9lkgJy.js";import"./TablePagination-C3EqRP5K.js";import"./KeyboardArrowRight-kLT-iIvk.js";import"./IconButton-BrelKzp4.js";import"./CircularProgress-rsn-iR-g.js";import"./MenuItem-QbVoyqaY.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./Table-_DjTmh-g.js";import"./TableRow-B8C9HmIL.js";const Re={title:"Components/Table/TablePagination",component:a,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},t={render:e=>{const[m,o]=i.useState(e.page);return i.useEffect(()=>{o(e.page)},[e.page]),r.jsx(a,{...e,page:m,onPageChange:(c,g)=>{o(g)}})}},n={render:e=>{const[m,o]=i.useState(e.page);return i.useEffect(()=>{o(e.page)},[e.page]),r.jsx(l,{role:"presentation",children:r.jsx(P,{children:r.jsx(d,{children:r.jsx(a,{...e,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},p={render:e=>r.jsx(a,{...e}),args:{rowsPerPageOptions:[]}},s={render:e=>r.jsx(a,{...e}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
