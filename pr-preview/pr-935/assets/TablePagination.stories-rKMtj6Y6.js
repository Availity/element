import{r as s,j as e}from"./iframe-CWY3iD4k.js";import{a as t,T as P}from"./TablePagination-C-SihsIB.js";import{T as l}from"./Table-DCPuo-Nh.js";import{T as d}from"./TableRow-Cx804Lu4.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-DGgD9-MY.js";import"./memoTheme-DrmgfhiZ.js";import"./styled-CIfQzxdD.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-C8Y5pmIc.js";import"./useSlot-jGeM5BDq.js";import"./mergeSlotProps-DYpSnyrH.js";import"./useForkRef-DtxHKGyT.js";import"./KeyboardArrowRight-D3ipwBEl.js";import"./createSvgIcon-DumzlQmL.js";import"./SvgIcon-DKNFXPcY.js";import"./PaginationItem-Bh4BuFS1.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BVW6-IPM.js";import"./useTimeout-8ubSeoYI.js";import"./TransitionGroupContext-BKIhkECl.js";import"./useEventCallback-DHih-p6k.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CKcF2qnA.js";import"./CircularProgress-Dd-jZUAB.js";import"./OutlinedInput-DdNeAm6I.js";import"./useFormControl-wbjgmvhY.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DMQINTj6.js";import"./List-2Vo6P9AC.js";import"./SelectFocusSourceContext-C5AxKvUw.js";import"./useSlotProps-DqKnkovT.js";import"./Popover-Fhuog7vE.js";import"./Portal-GTIXf_ni.js";import"./useTheme-BBG77Eif.js";import"./utils-uPZOnv02.js";import"./getReactElementRef-DgEYPRe_.js";import"./mergeSlotProps-CH3-0yIT.js";import"./Modal-BW2dyGsc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CXYVCyew.js";import"./Fade-DPNQjbRR.js";import"./Paper-dLVuKHPb.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-DVpJrfTw.js";import"./useControlled-CIbXyyiC.js";import"./index-BzSYwNd-.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-CJORF7yS.js";import"./index-DsnzGN7g.js";import"./index-CrcoPoGw.js";import"./index-CFwKy-vk.js";import"./Tooltip-B3bZKYVT.js";import"./Button-CdHEuVuq.js";import"./index-CH36QgIT.js";import"./Box-W_K2m7mS.js";import"./Grid-Dpddp4dd.js";import"./isMuiElement-CITzrPa4.js";import"./styled-DiOSWYDP.js";import"./Stack-CDV8c2Ym.js";import"./Container-O7CLblpO.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Z07liIv_.js";import"./FormHelperText-DrighLwE.js";import"./FormControlLabel-BTjj02X-.js";import"./Typography-DdnCOrzM.js";import"./Switch-XAbrm4Bm.js";import"./SwitchBase-LkmlHlRJ.js";import"./Radio-D1gt4lAJ.js";import"./RadioGroup-DJo27srd.js";import"./FormGroup-CwKuENeS.js";import"./Divider-dym_m635.js";import"./Table-BkqERYQD.js";import"./TableRow-DZHvWd37.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
