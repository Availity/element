import{r as s,j as e}from"./iframe-6QlsuZks.js";import{a as t,T as P}from"./TablePagination-6U4HrEXg.js";import{T as l}from"./Table-Cww4K_kg.js";import{T as d}from"./TableRow-CMwZUN8i.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-3CHdkL_E.js";import"./memoTheme-B9sQlNky.js";import"./styled-DGzk_rgf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BrfTxO8t.js";import"./useSlot-DzncR7P9.js";import"./mergeSlotProps-hCluPQZ0.js";import"./useForkRef-B_RCYMsy.js";import"./KeyboardArrowRight-DCcGKwyk.js";import"./createSvgIcon-suRscvHS.js";import"./SvgIcon-o3xhyLw5.js";import"./PaginationItem-O8yhHeno.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DqANlMe2.js";import"./useTimeout-CoBmWaVy.js";import"./TransitionGroupContext-BfrWwv51.js";import"./useEventCallback-H76OWquH.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C52xOams.js";import"./CircularProgress-BzseWMqn.js";import"./OutlinedInput-BvrLXmtS.js";import"./useFormControl-DZ_CUTQW.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-KZvvtqde.js";import"./List-Dng0f1WM.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-CKSuph_q.js";import"./Menu-C8039Cjb.js";import"./useSlotProps-XhtNc6mu.js";import"./Popover-CbDgWpYW.js";import"./Portal-DtF3r0WZ.js";import"./useTheme-CgDfdbfy.js";import"./utils-DDHdHaR3.js";import"./getReactElementRef-CeFrpTOn.js";import"./mergeSlotProps-y686c5--.js";import"./Modal-BEIbnPxI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BrGAJPN3.js";import"./Fade-BumTlQbr.js";import"./Paper-CDdLas_Y.js";import"./useControlled-D8gQq48B.js";import"./index-CrKJovUE.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-BqvJlLpu.js";import"./index-DVMtrzSw.js";import"./index-BiBDMnSv.js";import"./index-Bu7ksarN.js";import"./Tooltip-Obr4DBw0.js";import"./Button-Ck8mL0PX.js";import"./index-D54pz1q_.js";import"./Box-BeM2Ae_w.js";import"./Grid-B1lubc6W.js";import"./isMuiElement-Cw9eyX2o.js";import"./styled-BHPtUtOc.js";import"./Stack-CcxNsvTs.js";import"./Container-BCUe36Lo.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-0NhCwZGG.js";import"./FormHelperText-BoQfm90T.js";import"./FormControlLabel-DydU_YjN.js";import"./Typography-BiVk-Xpu.js";import"./Switch-CPR75Nav.js";import"./SwitchBase-CPhx0cqS.js";import"./Radio--62dKuxE.js";import"./RadioGroup-K7Ow30iF.js";import"./FormGroup-DnkUzQHJ.js";import"./Divider-DciKYC8r.js";import"./Table-BUyyUoGm.js";import"./TableRow-C5MnxYPu.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
