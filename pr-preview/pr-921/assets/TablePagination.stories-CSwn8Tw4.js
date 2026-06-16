import{r as s,j as e}from"./iframe-D__S4UWJ.js";import{a as t,T as P}from"./TablePagination-DpT0I_Fm.js";import{T as l}from"./Table-Di2GtO0V.js";import{T as d}from"./TableRow-BVspWEWv.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CojyfqtR.js";import"./memoTheme-BV959hj8.js";import"./styled-D9hsOvpf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CBILZ17Q.js";import"./useSlot-O8ollNDw.js";import"./mergeSlotProps-D3BIdMsf.js";import"./useForkRef-BqPQmHw4.js";import"./KeyboardArrowRight-jWCUtoG3.js";import"./createSvgIcon-CjZPmBcj.js";import"./SvgIcon-XbFZbbsX.js";import"./PaginationItem-b3HCm_ah.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Ci_mfbwX.js";import"./useTimeout-92omNL17.js";import"./TransitionGroupContext-y7HMp-IG.js";import"./useEventCallback-DJS3GGm_.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CNhmLG-N.js";import"./CircularProgress-haj7VCd3.js";import"./OutlinedInput-C35dVeS9.js";import"./useFormControl-BV3eLlPL.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CUJv_U_7.js";import"./List-BzNi2ci2.js";import"./SelectFocusSourceContext-Sxgzlu4M.js";import"./useSlotProps-BwqG8d0v.js";import"./Popover-BxV2QR5y.js";import"./Portal-DQUO7uTD.js";import"./useTheme-CFaiP_LB.js";import"./utils-qh6k9bbM.js";import"./getReactElementRef-CXYGkVyS.js";import"./mergeSlotProps-CgsjCMz0.js";import"./Modal-B4jLPaJ1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-B_zkZsEU.js";import"./Fade-BYuTC5N7.js";import"./Paper-Cbe2-SWa.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-75QAeKH4.js";import"./useControlled-jwoPGZ3a.js";import"./index-DhycCYh-.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-AI37TqLh.js";import"./index-Ba9958WM.js";import"./index-CrcoPoGw.js";import"./index-CSzUZNdV.js";import"./Tooltip-CiiYXVhS.js";import"./Button-CFqvl5Id.js";import"./index-DMk5qu1-.js";import"./Box-BOn3j62W.js";import"./Grid-BBYwbGJ2.js";import"./isMuiElement-BbpHSvRS.js";import"./styled-Bi8w4HDu.js";import"./Stack-CGHwgn-1.js";import"./Container-B4RgbXyO.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DogfPA3j.js";import"./FormHelperText-C5TKqXw1.js";import"./FormControlLabel-DOCoDnNz.js";import"./Typography-jktlZrXz.js";import"./Switch-CtmyTchu.js";import"./SwitchBase-D1Cjv_3W.js";import"./Radio-Btfwlgcu.js";import"./RadioGroup-DzVI_j6e.js";import"./FormGroup-DqGHfD-7.js";import"./Divider--uBwDw0n.js";import"./Table-B_ugzSdH.js";import"./TableRow-Be-d0XvO.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
