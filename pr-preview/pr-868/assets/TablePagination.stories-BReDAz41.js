import{j as e,r as s}from"./iframe-B4F0UUz5.js";import{a as t,T as P}from"./TablePagination-CNfLuZqU.js";import{T as l}from"./Table-Er_f4t1z.js";import{T as d}from"./TableRow-BUYb_pDQ.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-BJy0lxQ7.js";import"./memoTheme-BKk2saex.js";import"./styled-bGWttyC6.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-CT6KuApF.js";import"./useSlot-oo8TP9Im.js";import"./mergeSlotProps-DT_q42Lx.js";import"./useForkRef-CjLG5x_H.js";import"./KeyboardArrowRight-BD0kiENp.js";import"./createSvgIcon-BXxeVrmm.js";import"./SvgIcon-DM1sZoZa.js";import"./PaginationItem-DjfthSfn.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DqWoj7oR.js";import"./useTimeout-BonZNUeG.js";import"./TransitionGroupContext-fwmkieDY.js";import"./useEventCallback-BqH7MYZ-.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CqGgnlnL.js";import"./CircularProgress-PmMulKWi.js";import"./OutlinedInput-CTooi5LH.js";import"./useFormControl-CfinztXI.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-BYw7E8qK.js";import"./List-Bzm3hBtH.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-Cx_9VZof.js";import"./Menu-CeLPT6xJ.js";import"./useSlotProps-C2ZAZv5Q.js";import"./Popover-DpDyXaal.js";import"./Portal-D8A5UmkR.js";import"./useTheme-DkdpmsKL.js";import"./utils-BiHtS7y3.js";import"./getReactElementRef-CApeICjD.js";import"./mergeSlotProps-Besm4UoO.js";import"./Modal-BBtCbIw6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-D8y383n3.js";import"./Fade-C5UM2BtN.js";import"./Paper-BhZ60vFE.js";import"./useControlled-BRFwdesD.js";import"./index-Cr9n8cqt.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Pagination-BG0gtjTy.js";import"./index-BqKnOEku.js";import"./index-BiBDMnSv.js";import"./index-CJ27nWYv.js";import"./Tooltip-DyWobFm2.js";import"./Button-BurqBlBC.js";import"./index-DgFyk_v-.js";import"./Box-BvO6GINh.js";import"./Grid-JVi79X3C.js";import"./styled-C47D77LO.js";import"./isMuiElement-DG4Oj80J.js";import"./Stack-B6PQK5zz.js";import"./Container-C5kZIMq8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-FPMZFyGu.js";import"./FormHelperText-CnAIs5dB.js";import"./FormControlLabel-DMY5D4WX.js";import"./Typography-xEPHi5Wz.js";import"./Switch-DWGta2yJ.js";import"./SwitchBase-1rR0JDDB.js";import"./RadioGroup-C5y020-O.js";import"./Radio-DK64YLFj.js";import"./FormGroup-CONHlSLp.js";import"./Divider-D1MNiILV.js";import"./Table-KhTT_Ho3.js";import"./TableRow-CidAkPlG.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
