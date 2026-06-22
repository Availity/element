import{r as i,j as r}from"./iframe-BdOkmXSO.js";import{a,T as P}from"./TablePagination-Td6P5K1f.js";import{T as l}from"./Table-hFZcuHza.js";import{T as d}from"./TableRow-CmHw-f91.js";import"./preload-helper-Dab_6GC_.js";import"./TableCell-BnfCdFxG.js";import"./memoTheme-Dp1NrYg6.js";import"./styled-ntycrLPJ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Pagination-BxWRBzMw.js";import"./PaginationItem-CbRK1-zv.js";import"./Navigation-ldLDovnt.js";import"./faCircleArrowRight-C4kufxUN.js";import"./FaSvgIcon-D_zjT4On.js";import"./SvgIcon-BD13zcFd.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./LastPage-IVRF3n2c.js";import"./createSvgIcon-B1lFLeS5.js";import"./useSlot-Do_-kGcn.js";import"./mergeSlotProps-Bpe1uZ1i.js";import"./useForkRef-B6GvvQRB.js";import"./ButtonBase-D0mr5YFJ.js";import"./useTimeout-yhleNqH_.js";import"./TransitionGroupContext-Ce7OQG8A.js";import"./useEventCallback-Ci1dFtlM.js";import"./isFocusVisible-B8k4qzLc.js";import"./useControlled-wRMaIAhC.js";import"./Select-BMgXIlcS.js";import"./Actions-j5ZzHduY.js";import"./Input-CH_2lQsk.js";import"./OutlinedInput-DKeYBi_m.js";import"./useFormControl-B7U-TuVK.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-BHp_jWyp.js";import"./SelectFocusSourceContext-CO0vp2u8.js";import"./useSlotProps-0Tuv8-jv.js";import"./Popover-Dmejw1yb.js";import"./Grow-zcR73JmX.js";import"./useTheme-DpzwBSOw.js";import"./utils-BBZ_5XBR.js";import"./getReactElementRef-CAZnW1NE.js";import"./mergeSlotProps-CGT3lxwg.js";import"./Modal-C2ZApFn6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Df3mT0t7.js";import"./contains-DSD8CO72.js";import"./Backdrop-BHtRMzsl.js";import"./Fade-BJ4yz3if.js";import"./Paper-X002pFu5.js";import"./List-DHFLMipa.js";import"./Stack-CkMIcmCj.js";import"./styled-NjTlQkCK.js";import"./Divider-h1ZBdIZM.js";import"./dividerClasses-qU9lkgJy.js";import"./TablePagination-BgXQJOrc.js";import"./KeyboardArrowRight-Tpgydl_-.js";import"./IconButton-C66xLdI-.js";import"./CircularProgress-BtHd2z-U.js";import"./MenuItem-CjpUI41B.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./Table-D3TEGGCw.js";import"./TableRow-C-8uBnP7.js";const Re={title:"Components/Table/TablePagination",component:a,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},t={render:e=>{const[m,o]=i.useState(e.page);return i.useEffect(()=>{o(e.page)},[e.page]),r.jsx(a,{...e,page:m,onPageChange:(c,g)=>{o(g)}})}},n={render:e=>{const[m,o]=i.useState(e.page);return i.useEffect(()=>{o(e.page)},[e.page]),r.jsx(l,{role:"presentation",children:r.jsx(P,{children:r.jsx(d,{children:r.jsx(a,{...e,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},p={render:e=>r.jsx(a,{...e}),args:{rowsPerPageOptions:[]}},s={render:e=>r.jsx(a,{...e}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
