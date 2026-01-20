import{j as e,r as s}from"./iframe-DDdys5VZ.js";import{a as t,T as P}from"./TablePagination-CjVRmdlK.js";import{T as l}from"./Table-DHmra0IB.js";import{T as d}from"./TableRow-D8r8ibAz.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-DrSGqINp.js";import"./memoTheme-Cxx5qwbm.js";import"./styled-hFTqa5AW.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-Bm6W9zlu.js";import"./useSlot-tZFGbiOx.js";import"./mergeSlotProps-4h4cl7Iv.js";import"./useForkRef-CnZ00-R9.js";import"./KeyboardArrowRight-Ct4xqaq_.js";import"./createSvgIcon-Q7sAoZ8R.js";import"./SvgIcon-DHyw-wAY.js";import"./PaginationItem-D1wcay06.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DZVI88h8.js";import"./useTimeout-DZwXI9W9.js";import"./TransitionGroupContext-Dv_3Vfqr.js";import"./useEventCallback-Cc8SLIyn.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BOaXfSEH.js";import"./CircularProgress-CD5GaXFj.js";import"./OutlinedInput-ucVlTC9v.js";import"./useFormControl-BqJWQcaa.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-D5xFdCU1.js";import"./List-CR67BSGH.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-Djy4tG8c.js";import"./Menu-Co2n-EqS.js";import"./useSlotProps-CMLU_yM0.js";import"./Popover-CjMcOH46.js";import"./Portal-CIlqDXrO.js";import"./useTheme-3S67f5Cb.js";import"./utils-CF4In8Xa.js";import"./getReactElementRef-KKwdvyjG.js";import"./mergeSlotProps-DywXoXlU.js";import"./Modal-QZjHV8Pa.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DQLMuQga.js";import"./Fade-Ci7jieLM.js";import"./Paper-BNuTBhMB.js";import"./useControlled-DPgR13iz.js";import"./index-BnYYGU_m.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Pagination-BL_RDQCg.js";import"./index-edAtDfel.js";import"./index-BiBDMnSv.js";import"./index-Do6uxBxf.js";import"./Tooltip-BrywaEgo.js";import"./Button-uXds9IdN.js";import"./index-C23gf4rm.js";import"./Box-D4-1J1wq.js";import"./Grid-D5jHLohi.js";import"./styled-D0qD_60F.js";import"./isMuiElement-CGZGs55h.js";import"./Stack-XR9IapJe.js";import"./Container-BECr7IV3.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BxsO_0-t.js";import"./FormHelperText-Cpr7oON-.js";import"./FormControlLabel-B1gJTqT_.js";import"./Typography-CZtxpkXF.js";import"./Switch-crCZdAfS.js";import"./SwitchBase-DjDUEO21.js";import"./RadioGroup-C83SlUVY.js";import"./Radio-BU8wkIcC.js";import"./FormGroup-CqwFAPep.js";import"./Divider-Dljr7oH4.js";import"./Table-Ckjr4ayV.js";import"./TableRow-9j2fgqac.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
