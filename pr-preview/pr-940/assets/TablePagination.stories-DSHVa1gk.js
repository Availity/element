import{r as s,j as e}from"./iframe-ClyInPD8.js";import{a as t,T as P}from"./TablePagination-DScpkfQu.js";import{T as l}from"./Table-CppzJXmp.js";import{T as d}from"./TableRow-EFGfLrxt.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-U3qOsa_S.js";import"./memoTheme-CULMZTzm.js";import"./styled-D7PoFJCi.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CnNXsauW.js";import"./useSlot-D46kf6z6.js";import"./mergeSlotProps-DRm6mdtU.js";import"./useForkRef-CWYhWoid.js";import"./KeyboardArrowRight-CKG-8eyu.js";import"./createSvgIcon-C9dBkbUF.js";import"./SvgIcon-DfVeW2fT.js";import"./PaginationItem-C7-g-OzJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CL-JJlq6.js";import"./useTimeout-Bv1knD6m.js";import"./TransitionGroupContext-DtZ8GaDC.js";import"./useEventCallback-CQShbQqM.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-3p_Hzj1M.js";import"./CircularProgress-Cfnaefvx.js";import"./OutlinedInput-DSggnpCx.js";import"./useFormControl-uCK0rOs6.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-C8BRMxNf.js";import"./List-CeyWtXC0.js";import"./SelectFocusSourceContext-DyH9g7NM.js";import"./useSlotProps-D2_jX090.js";import"./Popover-DPOqsvJI.js";import"./Portal-6M9c9Gfh.js";import"./useTheme-Cf-PtNfg.js";import"./utils-DIFk0nuU.js";import"./getReactElementRef-Cs8-_4yh.js";import"./mergeSlotProps-m5IYYthV.js";import"./Modal-B7upLf36.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DGkZDyow.js";import"./Fade-5LrOnsLV.js";import"./Paper-2PN-0rlq.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-K3icrudd.js";import"./useControlled-CId5aZ2_.js";import"./index-W6CH2PNc.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-Cq9yleSi.js";import"./index-BBWIuguO.js";import"./index-CrcoPoGw.js";import"./index-Cl8nDLSA.js";import"./Tooltip-D3BuTBo3.js";import"./Button-C1rBrVEa.js";import"./index-zd_NREJJ.js";import"./Box-eNTJbR1-.js";import"./Grid-CgIe3-7e.js";import"./isMuiElement-Bh35qceP.js";import"./styled-XkY1prTM.js";import"./Stack-nuzf0IeA.js";import"./Container-DALlxZP3.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-D-Th-UGt.js";import"./FormHelperText-DIonPlvk.js";import"./FormControlLabel-xIGoThDj.js";import"./Typography-D3903seB.js";import"./Switch-CCHprpAt.js";import"./SwitchBase-DQRax_vO.js";import"./Radio--iMoPkP6.js";import"./RadioGroup-CB2wjVzu.js";import"./FormGroup-3MIP52gK.js";import"./Divider-DWJuH81S.js";import"./Table-jRWmBLmP.js";import"./TableRow-CFbXQErX.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
