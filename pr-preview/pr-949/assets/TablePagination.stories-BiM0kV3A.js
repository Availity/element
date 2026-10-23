import{r as s,j as e}from"./iframe-BEwKysCr.js";import{a as t,T as P}from"./TablePagination-Cxm81DMd.js";import{T as l}from"./Table-C5IrkdYX.js";import{T as d}from"./TableRow-Qq0chBJ0.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CdemXK-R.js";import"./memoTheme-DRAFqHbg.js";import"./styled-Bg0-_ABf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BVwHVqpR.js";import"./useSlot-BiH5AaTw.js";import"./mergeSlotProps-DrnO3OcF.js";import"./useForkRef-DOnOtXA5.js";import"./KeyboardArrowRight-BNYBiJK7.js";import"./createSvgIcon-BBwf9uD1.js";import"./SvgIcon-BCBu9Peg.js";import"./PaginationItem-CzVk008H.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DKnYqpgE.js";import"./useTimeout-CgoAjxgp.js";import"./TransitionGroupContext-pIYTZL6v.js";import"./useEventCallback-CrQ8pL3N.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BB9H-X4e.js";import"./CircularProgress-BsydgvXb.js";import"./OutlinedInput-C9Bj3Clw.js";import"./useFormControl-DZ5DvtNE.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-gIbdHPjW.js";import"./List-DPCyJ7f3.js";import"./SelectFocusSourceContext-CInINzuy.js";import"./useSlotProps-CytfctCW.js";import"./Popover-DaOq3n4o.js";import"./Portal-CDUk8pyx.js";import"./useTheme-GtZOwaC6.js";import"./utils-kGYhSz9o.js";import"./getReactElementRef-CS040HVY.js";import"./mergeSlotProps-BJEr5Vx4.js";import"./Modal-HL9q2m8c.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BV1Q-DrT.js";import"./Fade-DHWT1KLz.js";import"./Paper-0a0qvbdm.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-CCM-Wvl2.js";import"./useControlled-SqHPXcV4.js";import"./index-BKyxZB2f.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-DIBhCEpG.js";import"./index-B07NIH_W.js";import"./index-MVgG_W0q.js";import"./index-DgXerHVi.js";import"./Tooltip-hIdC-Elu.js";import"./Button-dWZGUH58.js";import"./index-C4sW_QjN.js";import"./Box-3XwYnqya.js";import"./Grid-BlMGH9aP.js";import"./isMuiElement-Ds6j6Ubo.js";import"./styled-nNR7mMu5.js";import"./Stack-CkUGtwqW.js";import"./Container-CSrQBmhf.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DpPPs8BD.js";import"./FormHelperText-CuKBSHwO.js";import"./FormControlLabel-CS5vRZ4l.js";import"./Typography-DdaiLWH8.js";import"./Switch-CGjlBj-8.js";import"./SwitchBase-gfvk7QPN.js";import"./Radio-BIuNKybY.js";import"./RadioGroup-Dgbh2tWz.js";import"./FormGroup-DCv0nEPD.js";import"./Divider-CcMK4Bgo.js";import"./Table-DqEvQ_YE.js";import"./TableRow-b77Z8o2L.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
