import{r as s,j as e}from"./iframe-DTy-Hi1D.js";import{a as t,T as P}from"./TablePagination-CWYOvnrM.js";import{T as l}from"./Table-CVLY5bN4.js";import{T as d}from"./TableRow-Bfs9MLXC.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-Bk7b1Pb0.js";import"./memoTheme-BG1xBytH.js";import"./styled-aP0uaM-i.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Bm2Axxpg.js";import"./useSlot-Bv56ZHL8.js";import"./mergeSlotProps-DbXyWffN.js";import"./useForkRef-Cs-hla5u.js";import"./KeyboardArrowRight-Cihi1V6O.js";import"./createSvgIcon-Bsd6X5Qz.js";import"./SvgIcon-3YRNiFr2.js";import"./PaginationItem-CWbkDPCN.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DQHg31rx.js";import"./useTimeout-Dox0L-0x.js";import"./TransitionGroupContext-vVRi092a.js";import"./useEventCallback-wWQn7yuE.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CZkpNN92.js";import"./CircularProgress-Dsur0AFP.js";import"./OutlinedInput-BsxOEMJo.js";import"./useFormControl-BecUCFWL.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-D3vOOJ8w.js";import"./List-CK8mYBos.js";import"./SelectFocusSourceContext-B0GTmmdc.js";import"./useSlotProps-i2bvpF4l.js";import"./Popover-pG0yFIDd.js";import"./Portal-BwzhUyNs.js";import"./useTheme-D2uWiRt2.js";import"./utils-UH3J-pbT.js";import"./getReactElementRef-Czal8mnO.js";import"./mergeSlotProps-BWinZWd0.js";import"./Modal-C1xsDPMc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-7k1loi6N.js";import"./Fade-CkUvZM_R.js";import"./Paper-BB7D87hg.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-DkS3VRNH.js";import"./useControlled-DJ-ZRmZ2.js";import"./index-DJUckNHv.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-DMwrI4DZ.js";import"./index-BW2CNFKP.js";import"./index-CrcoPoGw.js";import"./index-BWwQVXX2.js";import"./Tooltip-DHFGNIkU.js";import"./Button-BSzYbaIQ.js";import"./index-zuOxgOiJ.js";import"./Box-BiTKfYdJ.js";import"./Grid-9G99kq7Q.js";import"./isMuiElement-BqP85GjQ.js";import"./styled-CiCMHiUo.js";import"./Stack-D5xuPFAT.js";import"./Container-CKdO9iiE.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BhJzQqzw.js";import"./FormHelperText-BqXE1i86.js";import"./FormControlLabel-DU0Bs6VA.js";import"./Typography-BE1U26X8.js";import"./Switch-CQO10KB0.js";import"./SwitchBase-B6HLL3af.js";import"./Radio-CT0ik4u9.js";import"./RadioGroup-DhRVjKyW.js";import"./FormGroup-DeHCopE_.js";import"./Divider-dXGoqsdo.js";import"./Table-BZ8WrwIQ.js";import"./TableRow-DjKTfhQj.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
