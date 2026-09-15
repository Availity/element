import{r as s,j as e}from"./iframe-DF0Rdha4.js";import{a as t,T as P}from"./TablePagination-CrzBpYc4.js";import{T as l}from"./Table-BzR1AZLI.js";import{T as d}from"./TableRow-k6XZZGP-.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-DPvKtpBL.js";import"./memoTheme-4vIjm6LZ.js";import"./styled-I7SbqUzc.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-D-RaTubX.js";import"./useSlot-Bu48rJfG.js";import"./mergeSlotProps-De-W8bEz.js";import"./useForkRef-BKwvVnzL.js";import"./KeyboardArrowRight-DqRueOpf.js";import"./createSvgIcon-IzKekw11.js";import"./SvgIcon-CMfmqAYx.js";import"./PaginationItem-BBAe08KU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DIMIguuI.js";import"./useTimeout-CMPjzxnq.js";import"./TransitionGroupContext-B0rcK__J.js";import"./useEventCallback-BNwW89Is.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-oDfd5Lmw.js";import"./CircularProgress-B4cKxRwq.js";import"./OutlinedInput-mQC1K6j_.js";import"./useFormControl-A_gbksq7.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-BzAa0cMH.js";import"./List-CQj_DkG6.js";import"./SelectFocusSourceContext-Dy_24zIK.js";import"./useSlotProps-CexFUqCS.js";import"./Popover-6fv2nyIA.js";import"./Portal-CcmPSbI-.js";import"./useTheme-Dht0CY8-.js";import"./utils-DCMHm21Z.js";import"./getReactElementRef-BJS3FUmu.js";import"./mergeSlotProps-BO33MI0n.js";import"./Modal-Bdo5cqSi.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Cj1iOKB7.js";import"./Fade-Cx-6eTbl.js";import"./Paper-DargFASt.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-CgSH5fRm.js";import"./useControlled-Dig0ZMyL.js";import"./index-6PSJ7mzi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-DW_z5Ip_.js";import"./index-BVLgzJf-.js";import"./index-CrcoPoGw.js";import"./index-CUgfwVUD.js";import"./Tooltip-BWnEWeD7.js";import"./Button-kz7BikUW.js";import"./index-CPOPohyu.js";import"./Box-g_k8tvoW.js";import"./Grid-wcoxmIQC.js";import"./isMuiElement-CM_e2YWo.js";import"./styled-CjeI9bHt.js";import"./Stack-CQjWIA4P.js";import"./Container-D2_4bomA.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-D3AL5AgI.js";import"./FormHelperText-9mqc9Ecw.js";import"./FormControlLabel-Dq_-18BO.js";import"./Typography-CVkvQWeR.js";import"./Switch-C2KqfsMd.js";import"./SwitchBase-DZV18a5O.js";import"./Radio-DA7ldTDW.js";import"./RadioGroup-BOyQBxC7.js";import"./FormGroup-DhUgHgdA.js";import"./Divider-P6rUNdV1.js";import"./Table-CvSRnIFK.js";import"./TableRow-BHGXNNgY.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
