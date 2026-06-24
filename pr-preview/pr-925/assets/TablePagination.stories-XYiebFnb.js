import{r as s,j as e}from"./iframe-BRP1PsTd.js";import{a as t,T as P}from"./TablePagination-BoFXgWBD.js";import{T as l}from"./Table-B94JClGq.js";import{T as d}from"./TableRow-BDHtEhBR.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-DwdrzU81.js";import"./memoTheme-Rx2ZtNd-.js";import"./styled-kfJMXx_R.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-D2le--d_.js";import"./useSlot-B51YQDxZ.js";import"./mergeSlotProps-B2RYlZua.js";import"./useForkRef-DUyCy24e.js";import"./KeyboardArrowRight-DEofCXr7.js";import"./createSvgIcon-DDgQnkKT.js";import"./SvgIcon-C0xh8SUy.js";import"./PaginationItem-BHjBvJ6r.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DI3KZvly.js";import"./useTimeout-zBXF3kIc.js";import"./TransitionGroupContext-DjWTkcZP.js";import"./useEventCallback-BX14bO_3.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-4bUdPSIB.js";import"./CircularProgress-Dy9r_LoH.js";import"./OutlinedInput-URDDzUkx.js";import"./useFormControl-ClZVz9V6.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem--u5AKOAy.js";import"./List-7Ktovrvd.js";import"./SelectFocusSourceContext-DOQkQ0SO.js";import"./useSlotProps-fBG80Xpc.js";import"./Popover-Cq8sFUbM.js";import"./Portal-CRr1uWpV.js";import"./useTheme-C-06SHWZ.js";import"./utils-DtC8lP3P.js";import"./getReactElementRef-y-MSVziw.js";import"./mergeSlotProps-C4YKGlLy.js";import"./Modal-D89_wzi3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DCwrU8T9.js";import"./Fade-ByvXngvB.js";import"./Paper-Cw-zNh9i.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-BKZ2kjY2.js";import"./useControlled-8-M28gqE.js";import"./index-C9qIB2Ge.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-fBhQX-9s.js";import"./index-B3tzpYmG.js";import"./index-CrcoPoGw.js";import"./index-BsNnDr7w.js";import"./Tooltip-C5fygC3l.js";import"./Button-BSPls0mt.js";import"./index-D7dOkDl_.js";import"./Box-CXnBoTl2.js";import"./Grid-Mz87TCh6.js";import"./isMuiElement-CTMPmI0-.js";import"./styled-BWHNlctr.js";import"./Stack-DIw4f7bu.js";import"./Container-Bk3CGwFA.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DFQHDft-.js";import"./FormHelperText-CJRPJvNW.js";import"./FormControlLabel-CKZTo3Af.js";import"./Typography-BELI0wSd.js";import"./Switch-CxGtlCVz.js";import"./SwitchBase-7T8YNLcX.js";import"./Radio-0Tlh6eCh.js";import"./RadioGroup-lgnoJOI3.js";import"./FormGroup-CgbUB1-e.js";import"./Divider-CcSh8kgD.js";import"./Table-Cibs91Cu.js";import"./TableRow-DQRJI-Xg.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
