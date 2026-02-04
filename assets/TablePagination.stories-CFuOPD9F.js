import{j as e,r as s}from"./iframe-uePoqqpz.js";import{a as t,T as P}from"./TablePagination-DVwj9Us2.js";import{T as l}from"./Table-ClVCXk43.js";import{T as d}from"./TableRow-BVM-6SV5.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-B9ZwBdID.js";import"./memoTheme-Dgj0sIK-.js";import"./styled-HV0RCVZb.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-Bc272Dlc.js";import"./useSlot-dwhecRhc.js";import"./mergeSlotProps-BA0TfUKM.js";import"./useForkRef-BwAAUV5l.js";import"./KeyboardArrowRight-BsFFZfip.js";import"./createSvgIcon-CMty7C1j.js";import"./SvgIcon-CzJHsKlT.js";import"./PaginationItem-DYfS9OmH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DvYvvCW7.js";import"./useTimeout-_NjN4_Sd.js";import"./TransitionGroupContext-CmeeQpCz.js";import"./useEventCallback-DlO0-RjJ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Ikh-V53z.js";import"./CircularProgress-JnYtC6I3.js";import"./OutlinedInput-ylNzk_x5.js";import"./useFormControl-BKwMicKC.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-D0qK5xzJ.js";import"./List-Dd6qPk-t.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-CEXIzbdI.js";import"./Menu-DZd2G5JR.js";import"./useSlotProps-D5l61s2T.js";import"./Popover-2q7X57UR.js";import"./Portal-qmW-7K1L.js";import"./useTheme-CLegm-7I.js";import"./utils-BMnAKpwa.js";import"./getReactElementRef-C3-m1DFV.js";import"./mergeSlotProps-BPVeeAxm.js";import"./Modal-D5SBOgz1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-Qp_fmvj0.js";import"./Fade-C63bziq-.js";import"./Paper-DEbfATBV.js";import"./useControlled-CiVZLVlp.js";import"./index-iuot5o8P.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-D6pEVmC8.js";import"./index-6RO9VGSX.js";import"./index-BiBDMnSv.js";import"./index-DRQPm386.js";import"./Tooltip-CBI98mGf.js";import"./Button-BeX4uEqy.js";import"./index-B2DDv_1u.js";import"./Box-DubY7n2i.js";import"./Grid-B0G5TA-i.js";import"./styled-CfUCvIwx.js";import"./isMuiElement-HClAlyu-.js";import"./Stack-arXlwEbk.js";import"./Container-BhCZsEOQ.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DqAesqJW.js";import"./FormHelperText-Bal2g5d8.js";import"./FormControlLabel-DChSBWBU.js";import"./Typography-CCivflCu.js";import"./Switch-D4Y-JyOJ.js";import"./SwitchBase-C9hqB2YO.js";import"./RadioGroup-D80V5-w2.js";import"./Radio-BRRYeyDG.js";import"./FormGroup-C5jIOnyH.js";import"./Divider-f2g74RMi.js";import"./Table-Cm7BuGhm.js";import"./TableRow-DTrjuKit.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
