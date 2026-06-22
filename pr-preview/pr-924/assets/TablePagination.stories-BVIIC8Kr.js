import{r as i,j as r}from"./iframe-DHkqGgbi.js";import{a,T as P}from"./TablePagination-BqXuCFMr.js";import{T as l}from"./Table-z-4FExqI.js";import{T as d}from"./TableRow-DJevO6Zq.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-AslK_mnV.js";import"./memoTheme-vxEZSkJ8.js";import"./styled-BFLY3dn7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Pagination-CLagROwA.js";import"./PaginationItem-hVSHEAg8.js";import"./Navigation-DNeAUlyb.js";import"./faCircleArrowRight-C4kufxUN.js";import"./FaSvgIcon-BtkjvlUV.js";import"./SvgIcon-D9Y7JiS_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./LastPage-zjG_mkaV.js";import"./createSvgIcon-BS4jmzRl.js";import"./useSlot-CAeYipRU.js";import"./mergeSlotProps-Dp8H4ez1.js";import"./useForkRef-B4h6zx_x.js";import"./ButtonBase-BwqJJF5q.js";import"./useTimeout-Bjfnw5AG.js";import"./TransitionGroupContext-3E4Xv_Lx.js";import"./useEventCallback-LtXdtY4h.js";import"./isFocusVisible-B8k4qzLc.js";import"./useControlled-DlDi1BKb.js";import"./Select-_ZrxUeya.js";import"./Actions-BhLIra-T.js";import"./Input-BBd18T7c.js";import"./OutlinedInput-BwTPRsy8.js";import"./useFormControl-ZgfjO4em.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-Cb_v2ztz.js";import"./SelectFocusSourceContext-21Yu2WtQ.js";import"./useSlotProps-CZQ_I0Kw.js";import"./Popover-B_wJwpIg.js";import"./Grow-CwxupgJl.js";import"./useTheme-DTNKpojL.js";import"./utils-BQBkKAg6.js";import"./getReactElementRef-BRoKhHqU.js";import"./mergeSlotProps-BNZZW_n2.js";import"./Modal-BHwxEFT_.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CtpwjVP0.js";import"./contains-DSD8CO72.js";import"./Backdrop-D3ggRYPY.js";import"./Fade-CqjyPa8q.js";import"./Paper-Cer6O457.js";import"./List-BX9VmHQj.js";import"./Stack-CO_r3hOW.js";import"./styled-HR_WeqBB.js";import"./Divider-BaW80ssX.js";import"./dividerClasses-qU9lkgJy.js";import"./TablePagination-oQHoAWCi.js";import"./KeyboardArrowRight-6cJDt9sw.js";import"./IconButton-DmdwZwcg.js";import"./CircularProgress-D39cxiof.js";import"./MenuItem-ClLGuXdD.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./Table-DZl4TzcK.js";import"./TableRow-BX2-3phv.js";const Re={title:"Components/Table/TablePagination",component:a,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},t={render:e=>{const[m,o]=i.useState(e.page);return i.useEffect(()=>{o(e.page)},[e.page]),r.jsx(a,{...e,page:m,onPageChange:(c,g)=>{o(g)}})}},n={render:e=>{const[m,o]=i.useState(e.page);return i.useEffect(()=>{o(e.page)},[e.page]),r.jsx(l,{role:"presentation",children:r.jsx(P,{children:r.jsx(d,{children:r.jsx(a,{...e,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},p={render:e=>r.jsx(a,{...e}),args:{rowsPerPageOptions:[]}},s={render:e=>r.jsx(a,{...e}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
