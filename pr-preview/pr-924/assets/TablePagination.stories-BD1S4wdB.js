import{r as i,j as r}from"./iframe-BcpGFM79.js";import{a,T as P}from"./TablePagination-B6_Zmt6i.js";import{T as l}from"./Table-ChFI1QS9.js";import{T as d}from"./TableRow-D5eCfq3j.js";import"./preload-helper-Dab_6GC_.js";import"./TableCell-BK__3QSH.js";import"./memoTheme-CUR-_UQu.js";import"./styled-YELB7PbO.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Pagination-BbpT6ZOI.js";import"./PaginationItem-C6AImN3k.js";import"./Navigation-CE3d8dtq.js";import"./faCircleArrowRight-C4kufxUN.js";import"./FaSvgIcon-CT_rBCtN.js";import"./SvgIcon-DwHLgNU7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./LastPage-g_4dWlYs.js";import"./createSvgIcon-D6BcWLqc.js";import"./useSlot-COYLd7Pd.js";import"./mergeSlotProps-Y-QEFSGT.js";import"./useForkRef-BE9Mh8bk.js";import"./ButtonBase-DuPW9E1K.js";import"./useTimeout-D7cMLa2k.js";import"./TransitionGroupContext-DMVjCYVP.js";import"./useEventCallback-B998UMHo.js";import"./isFocusVisible-B8k4qzLc.js";import"./useControlled-B1x_m4Ao.js";import"./Select-C1npLRYC.js";import"./Actions-D5HDZDyt.js";import"./Input-CKZyVNiP.js";import"./OutlinedInput-CRSwkZMH.js";import"./useFormControl-BGMg_aeo.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-CxS44fOa.js";import"./SelectFocusSourceContext-BgAF1XhB.js";import"./useSlotProps-wCHKs8ch.js";import"./Popover-C-vNPShq.js";import"./Grow-DgKR5Z9h.js";import"./useTheme-DjrtHLeH.js";import"./utils-CX-dufza.js";import"./getReactElementRef-ksE6JIsb.js";import"./mergeSlotProps-0PeTl37o.js";import"./Modal-ORZGbsIm.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-D0YnE6km.js";import"./contains-DSD8CO72.js";import"./Backdrop-Kq3hx2RN.js";import"./Fade-CdC4gkg9.js";import"./Paper-DJSKHSTy.js";import"./List-B4tdnm47.js";import"./Stack-C71gTkqw.js";import"./styled-CAzon1OD.js";import"./Divider-DtLhEkPR.js";import"./dividerClasses-qU9lkgJy.js";import"./TablePagination-CkUjW9Li.js";import"./KeyboardArrowRight-CiAH_Y-I.js";import"./IconButton-bOxsf80n.js";import"./CircularProgress-B0VZoizd.js";import"./MenuItem-CAGa9_PZ.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./Table-DbE1P6lE.js";import"./TableRow-CDFa7zDo.js";const Re={title:"Components/Table/TablePagination",component:a,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},t={render:e=>{const[m,o]=i.useState(e.page);return i.useEffect(()=>{o(e.page)},[e.page]),r.jsx(a,{...e,page:m,onPageChange:(c,g)=>{o(g)}})}},n={render:e=>{const[m,o]=i.useState(e.page);return i.useEffect(()=>{o(e.page)},[e.page]),r.jsx(l,{role:"presentation",children:r.jsx(P,{children:r.jsx(d,{children:r.jsx(a,{...e,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},p={render:e=>r.jsx(a,{...e}),args:{rowsPerPageOptions:[]}},s={render:e=>r.jsx(a,{...e}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
