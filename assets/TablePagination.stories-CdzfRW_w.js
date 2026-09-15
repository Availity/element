import{r as s,j as e}from"./iframe-_UUIOQuH.js";import{a as t,T as P}from"./TablePagination-CDdVy94F.js";import{T as l}from"./Table-fQXeGrXW.js";import{T as d}from"./TableRow-Cb7AK9ff.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CkGupWP8.js";import"./memoTheme-CIZa69Jr.js";import"./styled-b9_l-4u0.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index--J1dj1j2.js";import"./useSlot-CykKJjN_.js";import"./mergeSlotProps-BdoUtTwz.js";import"./useForkRef-Ds0id4pA.js";import"./KeyboardArrowRight-1dS6fMW0.js";import"./createSvgIcon-4iIpqybs.js";import"./SvgIcon-Bp4jKyt3.js";import"./PaginationItem-HxOrWLWV.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B29bExhs.js";import"./useTimeout-CpXLyJm7.js";import"./TransitionGroupContext-BWER5STN.js";import"./useEventCallback-C78AkP7O.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CUKPhxxE.js";import"./CircularProgress-DrYD12o3.js";import"./OutlinedInput-DGiceUve.js";import"./useFormControl-CTluzM1B.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CUrK21Pg.js";import"./List-C4OA8wB0.js";import"./SelectFocusSourceContext-r48ZZdc4.js";import"./useSlotProps-Ceux9c--.js";import"./Popover-xKML6FqO.js";import"./Portal-CM-iumOR.js";import"./useTheme-CMhvYveJ.js";import"./utils-CA__7Tjr.js";import"./getReactElementRef-C0bnOj0D.js";import"./mergeSlotProps-Bn9bLFsW.js";import"./Modal-CM12C_yu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BIxTCRW2.js";import"./Fade-BLKcm6ko.js";import"./Paper-P8N6YQhi.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-Une4fEtR.js";import"./useControlled-De2ikPKN.js";import"./index-C64ixpTy.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-BTd2iJsS.js";import"./index-xNAiQBP1.js";import"./index-CrcoPoGw.js";import"./index-TC4m-Pq9.js";import"./Tooltip-BIzLnAgn.js";import"./Button-BOTNYh0S.js";import"./index-BtEaczgi.js";import"./Box-B5h19-4r.js";import"./Grid-CC4gnOAh.js";import"./isMuiElement-WWIYAN0M.js";import"./styled-D33n_PsO.js";import"./Stack-DyYrotpf.js";import"./Container-Abk-Ppxh.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DQWo1yfq.js";import"./FormHelperText-pYsIiyHO.js";import"./FormControlLabel-DPHIrrlZ.js";import"./Typography-6OKQ2qDF.js";import"./Switch-bAqugkzY.js";import"./SwitchBase-DgyKBDYv.js";import"./Radio-D6-4V09b.js";import"./RadioGroup-CNUqCHUu.js";import"./FormGroup-CE3PB0EV.js";import"./Divider-DtxNcQca.js";import"./Table-x2W-TD00.js";import"./TableRow-D7vEyE6T.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
