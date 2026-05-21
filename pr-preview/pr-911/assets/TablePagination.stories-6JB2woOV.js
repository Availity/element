import{r as s,j as e}from"./iframe-BP_6obq-.js";import{a as t,T as P}from"./TablePagination-BCJTI6iu.js";import{T as l}from"./Table-hmmZZ-f9.js";import{T as d}from"./TableRow-MA2CovTd.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-BwMqMeBe.js";import"./memoTheme-BSboZUOu.js";import"./styled-tyPDC8H3.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-z52uYQzy.js";import"./useSlot-CmZQLFXT.js";import"./mergeSlotProps-8ro87pMD.js";import"./useForkRef-DOgu7oQ4.js";import"./KeyboardArrowRight-bDJy9AwS.js";import"./createSvgIcon-C8pu6ftq.js";import"./SvgIcon-CnHEyztA.js";import"./PaginationItem-B_Y7wah6.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-8n2sjZ5K.js";import"./useTimeout-CSJtp0Y8.js";import"./TransitionGroupContext-B3nL2djk.js";import"./useEventCallback-BD_ANQY0.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DsvJwMgL.js";import"./CircularProgress-DALVNgNR.js";import"./OutlinedInput-BvbUZoKB.js";import"./useFormControl-CcVPoqIg.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-Bnptw7TG.js";import"./List-DIXN3EWs.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-Yr3aFb9D.js";import"./Menu-B16pZnWM.js";import"./useSlotProps-CRXG0rmu.js";import"./Popover-B8-deUWB.js";import"./Portal-XICOo1di.js";import"./useTheme-DbBiTE4S.js";import"./utils-fRJUoSLW.js";import"./getReactElementRef-CcD8R4QN.js";import"./mergeSlotProps-C4cSFGrS.js";import"./Modal-BoTJ9TiT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BmoQCgqO.js";import"./Fade-C9R9e0Yq.js";import"./Paper-00-tiWk7.js";import"./useControlled-DHSx-hEg.js";import"./index-CnReW6m-.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./Pagination-Cx_5Q0zB.js";import"./index-OtLd_hTL.js";import"./index-BiBDMnSv.js";import"./index-D0xPWEah.js";import"./Tooltip-DfZ6DZ9O.js";import"./Button-DKYxn39A.js";import"./index-Cyg8Zoy-.js";import"./Box-CrUjzboj.js";import"./Grid-DuXHbjPr.js";import"./isMuiElement-Dpdrf9tp.js";import"./styled-VCZNIqfv.js";import"./Stack-CMlfGjCP.js";import"./Container-CMlBc6YM.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CiSkpeaB.js";import"./FormHelperText-DlNTsgkP.js";import"./FormControlLabel-PcokZr4D.js";import"./Typography-xBYBi8Ml.js";import"./Switch-BDYdkdO0.js";import"./SwitchBase-Cy3ktZMy.js";import"./Radio-BmUp1QZh.js";import"./RadioGroup-DELYNiGz.js";import"./FormGroup-B81_w-JB.js";import"./Divider-OjstwTer.js";import"./Table-Boqv3RHm.js";import"./TableRow-B0KHTvrZ.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
