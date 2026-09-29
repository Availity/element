import{r as s,j as e}from"./iframe-BdtdKmg8.js";import{a as t,T as P}from"./TablePagination-Hxu9OZIq.js";import{T as l}from"./Table-Bd7Escut.js";import{T as d}from"./TableRow-Dmmj53uv.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CIYdSYyj.js";import"./memoTheme-BSZO8tET.js";import"./styled-DYRRHVQd.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-D_3klPwZ.js";import"./useSlot-CQH1JnoL.js";import"./mergeSlotProps-D1CilINf.js";import"./useForkRef-yU1gIY9t.js";import"./KeyboardArrowRight-Dm9--NUB.js";import"./createSvgIcon-Bq4fCAzJ.js";import"./SvgIcon-BHLlmPIG.js";import"./PaginationItem-CC1wYKf7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Bsasq48R.js";import"./useTimeout-BjzlLD0-.js";import"./TransitionGroupContext-DW5Ji1V0.js";import"./useEventCallback-CNW4hkob.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BGWMoxCC.js";import"./CircularProgress-DKwr5YQe.js";import"./OutlinedInput-By841vvG.js";import"./useFormControl-6mG5_X4U.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-C6Do7LD1.js";import"./List-kh9aNYzj.js";import"./SelectFocusSourceContext-BALdufV-.js";import"./useSlotProps-CIppk9xm.js";import"./Popover-D2QOeMg_.js";import"./Portal-By3tqOUu.js";import"./useTheme-BUr8GPQY.js";import"./utils-B5cCI6Rw.js";import"./getReactElementRef-BX57xPm_.js";import"./mergeSlotProps-BmhbC6HA.js";import"./Modal-r1fngEGv.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-cYgAzR7a.js";import"./Fade-C-oQ5huf.js";import"./Paper-BbHjqnIf.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-BJ67YTJg.js";import"./useControlled-qDvReWFA.js";import"./index-ByY3g0DH.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-D5XAU94I.js";import"./index-CLJf8Evv.js";import"./index-CrcoPoGw.js";import"./index-sfs31Xg8.js";import"./Tooltip-B7d6lYcI.js";import"./Button-DsRHMuVD.js";import"./index-y3OLnY3V.js";import"./Box-Bdbdbjz0.js";import"./Grid-BEc5hWlN.js";import"./isMuiElement-VRCGw5Z3.js";import"./styled-BACYX6V0.js";import"./Stack-DjOyHPuU.js";import"./Container-5HhabFZh.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-A8uoF4Ei.js";import"./FormHelperText-CjBh-oXE.js";import"./FormControlLabel-D9_T4UwB.js";import"./Typography-Ct1eVQia.js";import"./Switch-D7-Gaizw.js";import"./SwitchBase-t0UcAKA4.js";import"./Radio-CwDoUWcu.js";import"./RadioGroup-BPASCs_d.js";import"./FormGroup-Crs6dnJ1.js";import"./Divider-BFyzYRTs.js";import"./Table-CpXiCmEn.js";import"./TableRow-C8dI1mTc.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
