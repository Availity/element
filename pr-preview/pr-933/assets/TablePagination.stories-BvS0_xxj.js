import{r as s,j as e}from"./iframe-DPnTQG0G.js";import{a as t,T as P}from"./TablePagination-Qig5J8rO.js";import{T as l}from"./Table-0-pVfc39.js";import{T as d}from"./TableRow-SnGXXFwe.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-ChxRbszx.js";import"./memoTheme-CMfgY8Ge.js";import"./styled-B3r2fqeJ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DrOTJLl8.js";import"./useSlot-CA9InCnB.js";import"./mergeSlotProps-BoQagQxu.js";import"./useForkRef-B-MdRiiy.js";import"./KeyboardArrowRight-BBjwId7t.js";import"./createSvgIcon-o5Z7wc8L.js";import"./SvgIcon-BFzjjt5D.js";import"./PaginationItem-DMYnrGCe.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C2F6Y1bD.js";import"./useTimeout-CUwsoYp8.js";import"./TransitionGroupContext-BMEataXp.js";import"./useEventCallback-jzoMkJU2.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DddGcaV5.js";import"./CircularProgress-BvBmh-xb.js";import"./OutlinedInput-C590kWAS.js";import"./useFormControl-CD258ohF.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DBVpvhGZ.js";import"./List-Dof0ngef.js";import"./SelectFocusSourceContext-CLuNS6BP.js";import"./useSlotProps-BTR8zjwb.js";import"./Popover-BYyO-8oX.js";import"./Portal-DFXYbKgm.js";import"./useTheme-DIidgVEY.js";import"./utils-BzkU8P15.js";import"./getReactElementRef-Bl_fL_Lc.js";import"./mergeSlotProps-AmPjT2RW.js";import"./Modal-CcK1uO_P.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-ByDG0JKY.js";import"./Fade-Bvo7Nuzl.js";import"./Paper-CfCnRjNa.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-Bt2NJ17i.js";import"./useControlled-DDdRMWyJ.js";import"./index-DyrAPJez.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-nZQAXIA0.js";import"./index-Q8djF-9e.js";import"./index-CrcoPoGw.js";import"./index-B7O5cvxg.js";import"./Tooltip-oUWx7pT_.js";import"./Button-D8f966mF.js";import"./index-CsNDMedn.js";import"./Box-BwT9D1D3.js";import"./Grid-C4qiCYbq.js";import"./isMuiElement-BqwjpEeh.js";import"./styled-DTgt2DI8.js";import"./Stack-CUFjbj2M.js";import"./Container-Dg-G3qaT.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-T7G46Ktc.js";import"./FormHelperText-BuntHaUt.js";import"./FormControlLabel-M3VpV2dL.js";import"./Typography-BE3nbQ7X.js";import"./Switch-CESQP3ju.js";import"./SwitchBase-CsMfMGxT.js";import"./Radio-CPnlDQ7O.js";import"./RadioGroup-CakEV_i2.js";import"./FormGroup-tGhy1mwH.js";import"./Divider-BJPFleRo.js";import"./Table-Cb1sM557.js";import"./TableRow-C8jkeKaG.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
