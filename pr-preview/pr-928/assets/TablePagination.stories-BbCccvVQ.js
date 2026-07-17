import{r as s,j as e}from"./iframe-DFjmTghm.js";import{a as t,T as P}from"./TablePagination-fB_ym02N.js";import{T as l}from"./Table-DXeQPUiW.js";import{T as d}from"./TableRow-BJaN1Www.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CQD5Genl.js";import"./memoTheme-BQvuiRMw.js";import"./styled-Bs6aTLdD.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DFP91f_1.js";import"./useSlot-Cc0TH-P4.js";import"./mergeSlotProps-dd0y0IZz.js";import"./useForkRef-Cm1smsVr.js";import"./KeyboardArrowRight-BLtDdp17.js";import"./createSvgIcon-BZFSDOFb.js";import"./SvgIcon-loQPFd-T.js";import"./PaginationItem-DNBUFH4v.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-WbBW4SNX.js";import"./useTimeout-DYSzpSzE.js";import"./TransitionGroupContext-CFoyGAe4.js";import"./useEventCallback-DYc4zMoP.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D8Ip9ZNp.js";import"./CircularProgress-DAp6FT1u.js";import"./OutlinedInput-CYFmS-1F.js";import"./useFormControl-BfqaQjSl.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-B1-NNr7Q.js";import"./List-DDn9UT2Z.js";import"./SelectFocusSourceContext-Be8PVA64.js";import"./useSlotProps-BPRZd4R9.js";import"./Popover-Clpup2NH.js";import"./Portal-6A9k5eoS.js";import"./useTheme-C6J0_U3R.js";import"./utils-DG8dL2Al.js";import"./getReactElementRef-dZ7e7R7I.js";import"./mergeSlotProps-Bioj6IL2.js";import"./Modal-DeIW4txF.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Behw_zi2.js";import"./Fade-BDQ0ytsL.js";import"./Paper-DDJAWKgV.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-CsYK4MgS.js";import"./useControlled-_CojnKOO.js";import"./index-BziNu4GU.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-Dro4cDoX.js";import"./index-jO9EpA7l.js";import"./index-CrcoPoGw.js";import"./index-C9VG5BR5.js";import"./Tooltip-BpELumoD.js";import"./Button-Di2tppwh.js";import"./index-CRzHfBAS.js";import"./Box-CxjVphfW.js";import"./Grid-88wyRLeR.js";import"./isMuiElement-BTwBnJKE.js";import"./styled-tzudnm-b.js";import"./Stack-CWk2zcdQ.js";import"./Container-BIn0b_Bo.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CVzJErPY.js";import"./FormHelperText-D5drgxgl.js";import"./FormControlLabel-DH8yz918.js";import"./Typography-B0pIYi8P.js";import"./Switch-DU0RNYmU.js";import"./SwitchBase-fM7ST65L.js";import"./Radio-H9CP-1cm.js";import"./RadioGroup-By2pNnEt.js";import"./FormGroup-BhsOAUu0.js";import"./Divider-CTNIEa-8.js";import"./Table-xzzR8Pq3.js";import"./TableRow-ui6W3XwP.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
