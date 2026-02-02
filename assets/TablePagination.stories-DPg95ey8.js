import{j as e,r as s}from"./iframe-DNfpO8Rq.js";import{a as t,T as P}from"./TablePagination-qbLtN02e.js";import{T as l}from"./Table-DRPjLqbI.js";import{T as d}from"./TableRow-DQ2ijK1b.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-DhVpU73a.js";import"./memoTheme-B-zz_BUk.js";import"./styled-Sw3aRR2D.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-CMbupHYO.js";import"./useSlot-C-w8GshL.js";import"./mergeSlotProps-D2aT8sWY.js";import"./useForkRef-BEoZ4oWN.js";import"./KeyboardArrowRight-o7iO0Fue.js";import"./createSvgIcon-COwWNPU9.js";import"./SvgIcon-wfbC-1tw.js";import"./PaginationItem-CCqdmDZb.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CF5Cip_l.js";import"./useTimeout-DYZny39l.js";import"./TransitionGroupContext-BRbpeLOF.js";import"./useEventCallback-Cty6Llwj.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-ERuDSHkW.js";import"./CircularProgress-BsdZW6N9.js";import"./OutlinedInput-CxWcWAhd.js";import"./useFormControl-CXy51Z7B.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-BlXYCIAe.js";import"./List-PCdh5O9l.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-Caz7ouzi.js";import"./Menu-GNxT5KIL.js";import"./useSlotProps-DDNYhqkV.js";import"./Popover-DAUaJ4uf.js";import"./Portal-r7W1nGba.js";import"./useTheme-ChvAJH3t.js";import"./utils-SDoQ5BJm.js";import"./getReactElementRef-CLhxke3N.js";import"./mergeSlotProps-Dw6FooMH.js";import"./Modal-3xVicKkn.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-ByspIO9w.js";import"./Fade-D6YTpiOd.js";import"./Paper-nKCUTTwg.js";import"./useControlled-C3q2PKrI.js";import"./index-BcmMVDWe.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Pagination-4QJqymaB.js";import"./index-BBViSpLj.js";import"./index-BiBDMnSv.js";import"./index-DN_R5H2f.js";import"./Tooltip-B3COV0pN.js";import"./Button-UPAXXDe3.js";import"./index-ClTf_1DV.js";import"./Box-BG966X3W.js";import"./Grid-Cny3WeXp.js";import"./styled-u8_9JzuP.js";import"./isMuiElement-DJ9IZ7LZ.js";import"./Stack-BjTTdI7a.js";import"./Container-DLf6AVaH.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DZJIxUfx.js";import"./FormHelperText-D1EIcDeZ.js";import"./FormControlLabel-CZU8p7Kf.js";import"./Typography-bSWIGKwV.js";import"./Switch-lgncHCaL.js";import"./SwitchBase-BqCmHlNC.js";import"./RadioGroup-DpVTqJPi.js";import"./Radio-DPh56O4W.js";import"./FormGroup-DWO4b4yr.js";import"./Divider-lxDB-kkB.js";import"./Table-cxhLcb48.js";import"./TableRow-OHnYE0kw.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
