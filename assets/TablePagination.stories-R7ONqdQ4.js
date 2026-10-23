import{r as s,j as e}from"./iframe-TaNZkFdX.js";import{a as t,T as P}from"./TablePagination-C6DVz_-a.js";import{T as l}from"./Table-fcKe5nL6.js";import{T as d}from"./TableRow-BZ1JJcJZ.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-ClsYKEji.js";import"./memoTheme-DWNFUNe8.js";import"./styled-B4LT_xKE.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CP-C3nnU.js";import"./useSlot-C54pGJsm.js";import"./mergeSlotProps-I1tu7yOe.js";import"./useForkRef-BWA77Ou0.js";import"./KeyboardArrowRight-Z6rolRFn.js";import"./createSvgIcon-gxV3qIoY.js";import"./SvgIcon-DJOFM4ge.js";import"./PaginationItem-DHq19oyR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-hN41DD3n.js";import"./useTimeout-6mINgJ0s.js";import"./TransitionGroupContext-DNirSs3q.js";import"./useEventCallback-Mv5Tf1uh.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Bj0GebPw.js";import"./CircularProgress-UQNWqsj-.js";import"./OutlinedInput-CUtfKWDd.js";import"./useFormControl-C3JuhRxY.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DqiCaf4R.js";import"./List-B95bCbeF.js";import"./SelectFocusSourceContext-onYVou0i.js";import"./useSlotProps-DaoY2z77.js";import"./Popover-D5CfIDm2.js";import"./Portal-bQbDJznY.js";import"./useTheme-BwMLg3Cm.js";import"./utils-DLs5F192.js";import"./getReactElementRef-CAOV2LsM.js";import"./mergeSlotProps-CMDl2A-V.js";import"./Modal-C4RwlORl.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-aCYOBwWa.js";import"./Fade-CJipK2zd.js";import"./Paper-DmzWjV3O.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-BL9Z-gNl.js";import"./useControlled-DvjtXf7N.js";import"./index-DQOdSWXL.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-BMHn-ixR.js";import"./index-DED0iKzE.js";import"./index-MVgG_W0q.js";import"./index-B97OVu1W.js";import"./Tooltip-NifhenR9.js";import"./Button-BwGYoRWi.js";import"./index-BDHwWUp_.js";import"./Box-B6-W-G0J.js";import"./Grid-CXWUeHQh.js";import"./isMuiElement-D3gl8ezB.js";import"./styled-Dk8RL2_h.js";import"./Stack-CHbD9DWZ.js";import"./Container-Bw0hRcvj.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DDrneIVK.js";import"./FormHelperText-hu8qIV4s.js";import"./FormControlLabel-St5nSj4i.js";import"./Typography-01frBhx_.js";import"./Switch-BfayRGCf.js";import"./SwitchBase-lR1eKZM4.js";import"./Radio-D2LmUOQ3.js";import"./RadioGroup-y5iYDCwH.js";import"./FormGroup-DCFH8px-.js";import"./Divider-HX4qCGjr.js";import"./Table-DGUZXhgS.js";import"./TableRow-Dcn3ouoO.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
