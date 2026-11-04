import{r as s,j as e}from"./iframe-B7It4zq8.js";import{a as t,T as P}from"./TablePagination-BAro5Fte.js";import{T as l}from"./Table-CZBTER9P.js";import{T as d}from"./TableRow-QKecY8iR.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CQaiM9Yz.js";import"./memoTheme-CGf3L_ek.js";import"./styled-Bn4RjmYR.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-a0LoARCg.js";import"./useSlot-W932GJWf.js";import"./mergeSlotProps-D605olu0.js";import"./useForkRef-CPn4J3x7.js";import"./KeyboardArrowRight-KC11zhr4.js";import"./createSvgIcon-mTQeEUrk.js";import"./SvgIcon-CN80xc_w.js";import"./PaginationItem-CpBujmkC.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B2waO-fK.js";import"./useTimeout-YUVk49Nr.js";import"./TransitionGroupContext-DcJKCyB0.js";import"./useEventCallback-C74dKXBI.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C-t-b5Lt.js";import"./CircularProgress-B2uMItbz.js";import"./OutlinedInput-2NJ2Vb7h.js";import"./useFormControl-B-9vmVn0.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CM666IHL.js";import"./List-BBFik3I9.js";import"./SelectFocusSourceContext-p7Q9PkOh.js";import"./useSlotProps-5kTH7JUJ.js";import"./Popover-CvEl5u9c.js";import"./Portal-Dv_fvGmT.js";import"./useTheme-BEYyhBmQ.js";import"./utils-8hf5HdRr.js";import"./getReactElementRef-DdXJtssw.js";import"./mergeSlotProps-CT132jMM.js";import"./Modal-XCKy5Q-Z.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CMsbxjXn.js";import"./Fade-dOEIYsg7.js";import"./Paper-16eSpGwX.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-CqroXm0-.js";import"./useControlled-D_SZmVUM.js";import"./index-DahGL3Ws.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-CDMapHLA.js";import"./index-eyGbV9a5.js";import"./index-MVgG_W0q.js";import"./index-U6rGSuo_.js";import"./Tooltip-CzJoUoCR.js";import"./Button-BIhtYg5K.js";import"./index-NPVdg4Et.js";import"./Box-DCJTclMn.js";import"./Grid-A8igwbvH.js";import"./isMuiElement-Co847M5i.js";import"./styled-DnXB-Vry.js";import"./Stack-KZSUJmtQ.js";import"./Container-DFLwTEF8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DL9fs6b-.js";import"./FormHelperText-xZDaLp3L.js";import"./FormControlLabel-DzsUjCY9.js";import"./Typography-D5VLn6r5.js";import"./Switch-gEQ3qE6L.js";import"./SwitchBase-CGG-3b0l.js";import"./Radio-BrnWVLWC.js";import"./RadioGroup-CCkcY1aL.js";import"./FormGroup-CrkydTVS.js";import"./Divider-hoZSVZoR.js";import"./Table-D6b0TjQg.js";import"./TableRow-BW1Y-GSa.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
