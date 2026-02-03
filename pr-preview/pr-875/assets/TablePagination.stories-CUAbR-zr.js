import{j as e,r as s}from"./iframe-DyOisw3p.js";import{a as t,T as P}from"./TablePagination-gMs2TtKM.js";import{T as l}from"./Table-DLtdP_o_.js";import{T as d}from"./TableRow-MOQy1EKi.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-W5lTsN6I.js";import"./memoTheme-ClQmTMaA.js";import"./styled-DlFKYmu8.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-BqBmhozs.js";import"./useSlot-DsPkR1Hp.js";import"./mergeSlotProps-ixnHwvJm.js";import"./useForkRef-BtdJvb-F.js";import"./KeyboardArrowRight-BpoVX5T2.js";import"./createSvgIcon-Qu4Q4I06.js";import"./SvgIcon-BXtElNvn.js";import"./PaginationItem-FC5jztz8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BEmwhJpH.js";import"./useTimeout-BCyZYTVL.js";import"./TransitionGroupContext-CUZzTcDE.js";import"./useEventCallback-B6KJfX3V.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CgX6RyGO.js";import"./CircularProgress-CyhGhsVo.js";import"./OutlinedInput-DjTS6Cam.js";import"./useFormControl-C7ikDY0l.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-B8F-xg2R.js";import"./List-CwjiyNio.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-DrIkGwSX.js";import"./Menu-DwuMbMvw.js";import"./useSlotProps-CMD2axpv.js";import"./Popover-ClMw720w.js";import"./Portal-B0VFW4sd.js";import"./useTheme-BZ9q4WY8.js";import"./utils-4feg5QSW.js";import"./getReactElementRef-Ce2cv_v4.js";import"./mergeSlotProps-Cudb8Bh-.js";import"./Modal-BLEQPR58.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-m45uhTcp.js";import"./Fade-KpFWzCuU.js";import"./Paper-Ds5OMBpI.js";import"./useControlled-L_7kh0l2.js";import"./index-BIYW56wV.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Pagination-BaPPQgbB.js";import"./index-Bvjs7UpB.js";import"./index-BiBDMnSv.js";import"./index-CJEk8w79.js";import"./Tooltip-3XPWX8ag.js";import"./Button-Do4OGzvj.js";import"./index-DOLuYYYn.js";import"./Box-CT_Tx_FO.js";import"./Grid-D_aaW8Iu.js";import"./styled-lupBF2MK.js";import"./isMuiElement-BDDMqoU0.js";import"./Stack-Ch0vDCre.js";import"./Container-DQWs-8OX.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BnNEguu9.js";import"./FormHelperText-RFAnYjnI.js";import"./FormControlLabel-D8ZYbm0A.js";import"./Typography-Ds2SQ99O.js";import"./Switch-CrU2TDZp.js";import"./SwitchBase-Cb80yQ4X.js";import"./RadioGroup-DKEcTwAA.js";import"./Radio-og8t-TTy.js";import"./FormGroup-CoGTgvk-.js";import"./Divider-Bp2RWgT9.js";import"./Table-CLnibQtN.js";import"./TableRow-BU56dHOs.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
