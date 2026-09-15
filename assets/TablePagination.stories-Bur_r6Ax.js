import{r as s,j as e}from"./iframe-G1mPJgBf.js";import{a as t,T as P}from"./TablePagination-B4NDx0VO.js";import{T as l}from"./Table-6wqIZx3c.js";import{T as d}from"./TableRow-e1d0WZjd.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-BXnIvvAU.js";import"./memoTheme-ClxxX8JT.js";import"./styled-Bu4wmneT.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BaggDzSn.js";import"./useSlot-DeTGMu9w.js";import"./mergeSlotProps-D9Hi5YzQ.js";import"./useForkRef-BD2h0Jdv.js";import"./KeyboardArrowRight-CKT8MZau.js";import"./createSvgIcon-BAr3_gQH.js";import"./SvgIcon-CTlX2w7Q.js";import"./PaginationItem-DsGZTSBn.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B5xaXwjS.js";import"./useTimeout-EKZwYL1w.js";import"./TransitionGroupContext-F733By2L.js";import"./useEventCallback-C728JWJX.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Bcnv2CeG.js";import"./CircularProgress-CUukeIT7.js";import"./OutlinedInput-C3tRGErD.js";import"./useFormControl-DGpS68tJ.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-9uwNWF_N.js";import"./List-NPmmzPN-.js";import"./SelectFocusSourceContext-DO_9ohPs.js";import"./useSlotProps-C0zVRdHz.js";import"./Popover-CqRJKN8j.js";import"./Portal-D2NuCJSx.js";import"./useTheme-D1p8Kaqq.js";import"./utils-CV6P-8oh.js";import"./getReactElementRef-D1QwtblH.js";import"./mergeSlotProps-B2gKoX76.js";import"./Modal-CSvN6E0P.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-wbozj9wt.js";import"./Fade-DRE_fc-F.js";import"./Paper-B8ctKAYM.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-BYk43Zrb.js";import"./useControlled-_wEooLXW.js";import"./index-J2aZCtZS.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-CNASimtQ.js";import"./index-DPTb8TTK.js";import"./index-CrcoPoGw.js";import"./index-L2w0xRVx.js";import"./Tooltip-DQJZ8sfi.js";import"./Button-ByjTqYnc.js";import"./index-Dd7L_VAv.js";import"./Box-B9x9TWbS.js";import"./Grid-DzK1vDYp.js";import"./isMuiElement-CksqsLPP.js";import"./styled-DkfJ6ssg.js";import"./Stack-baAEBtk1.js";import"./Container-v7PawbDd.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CXyukB4E.js";import"./FormHelperText-B8V18IsC.js";import"./FormControlLabel-tWenJfV9.js";import"./Typography-DNGzJ1Ro.js";import"./Switch-ChMWY217.js";import"./SwitchBase-DC5Y6S4X.js";import"./Radio-B20SOU7e.js";import"./RadioGroup-BjboFY-P.js";import"./FormGroup-B0-dPKpp.js";import"./Divider-SgB52HKQ.js";import"./Table-l_MyaAIA.js";import"./TableRow-DAdQIp0t.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
