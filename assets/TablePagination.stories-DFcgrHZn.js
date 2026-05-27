import{r as s,j as e}from"./iframe-C99277Jn.js";import{a as t,T as P}from"./TablePagination-CoKI9RsG.js";import{T as l}from"./Table-DeE1Srsr.js";import{T as d}from"./TableRow-3GPu9Lrm.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-BrQ2uCsD.js";import"./memoTheme-BcCvxPZB.js";import"./styled-BSyyF-nm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Bri-MDig.js";import"./useSlot-C5dpIhsV.js";import"./mergeSlotProps-BBhrXk0t.js";import"./useForkRef-Co0kt0JD.js";import"./KeyboardArrowRight-1QSKh1x7.js";import"./createSvgIcon-Cab5rVDr.js";import"./SvgIcon-BaWfF9je.js";import"./PaginationItem-DcNAtnuM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B6dKL5Sm.js";import"./useTimeout-Dw4BvZaa.js";import"./TransitionGroupContext-ByqVrO43.js";import"./useEventCallback-BvtgHlfy.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-GExIkIsQ.js";import"./CircularProgress-DWs2PQSt.js";import"./OutlinedInput-BJeJtbfu.js";import"./useFormControl-nv_qHD3t.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-Dok0RRjK.js";import"./List-DBdeSu6E.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-BZkjZ3ZH.js";import"./Menu-BTFniDZi.js";import"./useSlotProps-CQi1oJfT.js";import"./Popover-C720EYK_.js";import"./Portal-rCUOv2ZO.js";import"./useTheme-rB5ljihk.js";import"./utils-DQTgiKe9.js";import"./getReactElementRef-Bs67iJIN.js";import"./mergeSlotProps-BBfmIDSu.js";import"./Modal-BSnsGlt8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CPg3TVnd.js";import"./Fade-DTvpgJPw.js";import"./Paper-YQNMXe3n.js";import"./useControlled-DV2QdfFp.js";import"./index-DBNEVM-X.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./Pagination-apdqtWkF.js";import"./index-DtA39DZL.js";import"./index-BiBDMnSv.js";import"./index-BLVZqh54.js";import"./Tooltip-1HJoGAor.js";import"./Button-D7NhHobB.js";import"./index-y3fpgOs1.js";import"./Box-XJPq1vP8.js";import"./Grid-iRC4uFdh.js";import"./isMuiElement-nAYICNXy.js";import"./styled-CKZ50tVK.js";import"./Stack-DydGXCUI.js";import"./Container-CFzAHwrR.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-4tLKTmpv.js";import"./FormHelperText-BLAKn_Zn.js";import"./FormControlLabel-5DOJ260I.js";import"./Typography-ZltxThzN.js";import"./Switch-B-MFS8IL.js";import"./SwitchBase-DtVc0w0b.js";import"./Radio-DMRBAorq.js";import"./RadioGroup-pJk0tL1L.js";import"./FormGroup-B_29syzn.js";import"./Divider-D76QGJ0C.js";import"./Table-BBlcaDJg.js";import"./TableRow-CFXeOdC5.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
