import{r as s,j as e}from"./iframe-D2jXllzf.js";import{a as t,T as P}from"./TablePagination-fs_IKqlM.js";import{T as l}from"./Table-DK8JZGmQ.js";import{T as d}from"./TableRow-XJtePeOy.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-BKp2QPaH.js";import"./memoTheme-Zt5oAqwv.js";import"./styled-DdNVu9ib.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-B5l6CiYP.js";import"./useSlot-CazCKcce.js";import"./mergeSlotProps-CJpLwHYZ.js";import"./useForkRef-BlUwhnRH.js";import"./KeyboardArrowRight-JTJxQPA-.js";import"./createSvgIcon-BpTXI-oS.js";import"./SvgIcon-9pPXd2AZ.js";import"./PaginationItem-CbTYx3YY.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DMYh_tyc.js";import"./useTimeout-CPz5sd6r.js";import"./TransitionGroupContext-BzeXUGnN.js";import"./useEventCallback-B89JyN3q.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dd5dInOR.js";import"./CircularProgress-BG5QNhqD.js";import"./OutlinedInput-8NKqoys9.js";import"./useFormControl-C4VpCIrq.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DVJCGnvN.js";import"./List-WMhnwrif.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-J4E2T8gJ.js";import"./Menu-3Df3H2zp.js";import"./useSlotProps-FypE9v1G.js";import"./Popover-d3WYO_gM.js";import"./Portal-DNbvJLzK.js";import"./useTheme-C2p3ig_2.js";import"./utils-B6mCZ_7g.js";import"./getReactElementRef-DHdu6blE.js";import"./mergeSlotProps-B6ai5Rqv.js";import"./Modal-epJMSIoD.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CqC92YWR.js";import"./Fade-CjW2EPns.js";import"./Paper-DezgSOvY.js";import"./useControlled-DpI9NEaZ.js";import"./index-SmivVlA3.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./Pagination-4Dmm1Cmi.js";import"./index-C0wMGhls.js";import"./index-BiBDMnSv.js";import"./index-toBpsxUE.js";import"./Tooltip-GSnbTknq.js";import"./Button-CwKYXhwT.js";import"./index-_ebpbhE4.js";import"./Box-BbqhAezV.js";import"./Grid-DcON0D60.js";import"./isMuiElement-CtLsGuPJ.js";import"./styled-CrGM8GXy.js";import"./Stack-C7w4lddQ.js";import"./Container-DTQuoaq9.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-4fh9O_yA.js";import"./FormHelperText-x3FNzzv5.js";import"./FormControlLabel-CI5bXKO9.js";import"./Typography-B2ZUFsL1.js";import"./Switch-DcLsdLv8.js";import"./SwitchBase-DFUx5LAR.js";import"./Radio-DtF9_Ty_.js";import"./RadioGroup-CIQq2756.js";import"./FormGroup-kt5TsLUL.js";import"./Divider-ztTjX0xU.js";import"./Table-BT1ufiBX.js";import"./TableRow-D41PhkQC.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
