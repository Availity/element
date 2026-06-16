import{r as s,j as e}from"./iframe-C9_PxSGQ.js";import{a as t,T as P}from"./TablePagination-BnlXVduU.js";import{T as l}from"./Table-Dr7mppbx.js";import{T as d}from"./TableRow-BO5aC5Jl.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-C7NqJPfO.js";import"./memoTheme-BxvcW3UF.js";import"./styled-B-vqXkzy.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-VzmCB7LQ.js";import"./useSlot-B-bGbgrQ.js";import"./mergeSlotProps-DQ8_Kw8O.js";import"./useForkRef-CmIALVnC.js";import"./KeyboardArrowRight-BKxcrbRX.js";import"./createSvgIcon-DoDU4gSx.js";import"./SvgIcon-FGOQRPT3.js";import"./PaginationItem-CpATNRxQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-k4M9aDLt.js";import"./useTimeout-BMn8x6pQ.js";import"./TransitionGroupContext-BZ4pLHPO.js";import"./useEventCallback-DieoYw-U.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BjLNslZW.js";import"./CircularProgress-vDDdOi_d.js";import"./OutlinedInput-BZW58KdM.js";import"./useFormControl-CpMC7EHx.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CqEwmjGs.js";import"./List-DWo7-1hB.js";import"./SelectFocusSourceContext-Fw-FsAu5.js";import"./useSlotProps-BDX3RUX-.js";import"./Popover-Dc2RDNtf.js";import"./Portal-Ct4gHjrk.js";import"./useTheme-BHbpGC30.js";import"./utils-8dHd4F9E.js";import"./getReactElementRef-on-DwLqm.js";import"./mergeSlotProps-BJFY07Zq.js";import"./Modal-CUp8vkO1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-5mRpAKll.js";import"./Fade-BLrbHvJ9.js";import"./Paper-DGceIsLw.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-DcupVlEN.js";import"./useControlled-BGxEnoNZ.js";import"./index-Ddg0Heb3.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-DWGsim8-.js";import"./index-CE6aNSs8.js";import"./index-CrcoPoGw.js";import"./index-ButV5MJr.js";import"./Tooltip-FRBJUwm-.js";import"./Button-DtK3QmjS.js";import"./index-Cwp1bTGK.js";import"./Box-DwMYriWl.js";import"./Grid-AdyG_hrd.js";import"./isMuiElement-BE5icW1i.js";import"./styled-v5MGqYmj.js";import"./Stack-BEdSkyO_.js";import"./Container-DSjJo15B.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BeY29v7P.js";import"./FormHelperText-CQ0DNzl4.js";import"./FormControlLabel-DQ-Rgi5d.js";import"./Typography-B7ymJCK8.js";import"./Switch-C9aFTenp.js";import"./SwitchBase-CbZ2kkmp.js";import"./Radio-DCg2Gj6y.js";import"./RadioGroup-DJuShQt6.js";import"./FormGroup-mRbk2rO2.js";import"./Divider-BU7503P_.js";import"./Table-DOqOXBiu.js";import"./TableRow-hTzGN9SS.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
