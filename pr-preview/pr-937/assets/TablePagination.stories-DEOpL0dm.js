import{r as s,j as e}from"./iframe-CrDI7sKE.js";import{a as t,T as P}from"./TablePagination-DT9ZHMgC.js";import{T as l}from"./Table-B3t8cAyA.js";import{T as d}from"./TableRow-BtUDW1GX.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-DhSXg8OM.js";import"./memoTheme-1eSCZRav.js";import"./styled-CqKFH6eA.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Dd7VLSGm.js";import"./useSlot--sris71t.js";import"./mergeSlotProps-C73UPCQk.js";import"./useForkRef-BfO6-t9P.js";import"./KeyboardArrowRight-BHq65tnC.js";import"./createSvgIcon-B259oLuI.js";import"./SvgIcon-Db1uzRw5.js";import"./PaginationItem-ZKpt3Ypi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Lw6uESYo.js";import"./useTimeout-B0l-dQbr.js";import"./TransitionGroupContext-Bo9v56k3.js";import"./useEventCallback-D4QkonYW.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-COXIliVf.js";import"./CircularProgress-DKP2WMPH.js";import"./OutlinedInput-Di-XT6nh.js";import"./useFormControl-DRWQKdnm.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DncL7wMQ.js";import"./List-CTjmGkg1.js";import"./SelectFocusSourceContext-qiWoxQgp.js";import"./useSlotProps-Cihilg2w.js";import"./Popover-Cm29Ipyl.js";import"./Portal-DJpfMgk6.js";import"./useTheme-e92JqNOn.js";import"./utils-BWKdc28P.js";import"./getReactElementRef-d6gO3Pyv.js";import"./mergeSlotProps-DmKidiVf.js";import"./Modal-Hr0EA0wP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-B1fHeAP2.js";import"./Fade-BmT7tLhS.js";import"./Paper-DYAzX1VO.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-DqoCSbAA.js";import"./useControlled-C0OF1VAF.js";import"./index-B75hp5XN.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-ikodt4eN.js";import"./index-BpI0U3eZ.js";import"./index-CrcoPoGw.js";import"./index-D1nVldbn.js";import"./Tooltip-BYMj-RjT.js";import"./Button-C68buGXp.js";import"./index-BtTxkIqf.js";import"./Box-BKdDafZT.js";import"./Grid-B7k0uIkV.js";import"./isMuiElement-CplrA1Xb.js";import"./styled-B5mLmA23.js";import"./Stack-BQFWbwCa.js";import"./Container-QJP-imy5.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-X5erI1FX.js";import"./FormHelperText-LkC2Q1TY.js";import"./FormControlLabel-CXnKQHZS.js";import"./Typography-BB__VVHi.js";import"./Switch-CY48rVhs.js";import"./SwitchBase-DCKaqOED.js";import"./Radio-ca9tiySW.js";import"./RadioGroup-DloPrg92.js";import"./FormGroup-7kR7A8Vb.js";import"./Divider-B87S6cGg.js";import"./Table-CEJg2uiu.js";import"./TableRow-Ctw4j-NW.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
