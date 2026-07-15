import{r as s,j as e}from"./iframe-DxDqWgB3.js";import{a as t,T as P}from"./TablePagination-cd4UqWNK.js";import{T as l}from"./Table-DkKuwlm8.js";import{T as d}from"./TableRow-ClxC-TPR.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CxS_hh2v.js";import"./memoTheme-CW08UaDq.js";import"./styled-C-u4rj0B.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-D6sWq-83.js";import"./useSlot-DhabbitO.js";import"./mergeSlotProps-CkntHcZx.js";import"./useForkRef-DI5ILbHc.js";import"./KeyboardArrowRight-sVFRf-Uq.js";import"./createSvgIcon-DYs5Y6Jm.js";import"./SvgIcon-DuolYAV0.js";import"./PaginationItem-CMrmnT3f.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Cv_OxEAB.js";import"./useTimeout-Cg12-pSn.js";import"./TransitionGroupContext-DQeLAkDQ.js";import"./useEventCallback-BAtRlhKU.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Bq1g08rd.js";import"./CircularProgress-X93LMWzE.js";import"./OutlinedInput-lQiM0HOI.js";import"./useFormControl-s6qjM2X3.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DZam1QO3.js";import"./List-D2CsPysG.js";import"./SelectFocusSourceContext-IuLaNH-W.js";import"./useSlotProps-C80LEsEt.js";import"./Popover-ChYq-J8R.js";import"./Portal-BC-tKqvb.js";import"./useTheme-CKON97k_.js";import"./utils-C0firkgU.js";import"./getReactElementRef-8K8_YwXV.js";import"./mergeSlotProps-BDEDV9VX.js";import"./Modal-DWjx2hRe.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-COfvuY5V.js";import"./Fade-CrNSUCom.js";import"./Paper-07-bvRG5.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-Cqayly8p.js";import"./useControlled-BtuGr2vc.js";import"./index-CA8wTNp_.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-BFsix6So.js";import"./index-C12PZec_.js";import"./index-CrcoPoGw.js";import"./index-CE_ZDuuA.js";import"./Tooltip-CU2nv3Au.js";import"./Button-Cfa_uJOq.js";import"./index-Dz-uzYEo.js";import"./Box-aFyRrUOd.js";import"./Grid-B6GnwMzX.js";import"./isMuiElement-Mzgb52Ql.js";import"./styled-CRQ2ZGB4.js";import"./Stack-pOcYjPv5.js";import"./Container-BXfLwVnI.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BCXj-Ezv.js";import"./FormHelperText-BTWiYLzM.js";import"./FormControlLabel-C7NGeSpD.js";import"./Typography-C89Ggk5t.js";import"./Switch-CCHmmAjq.js";import"./SwitchBase-D3CCA6Bi.js";import"./Radio-9NIMnnwm.js";import"./RadioGroup-Czt-QDiE.js";import"./FormGroup-C29suHwn.js";import"./Divider-DCUlQGE7.js";import"./Table-D4kkD9Zn.js";import"./TableRow-B2o6zE9C.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
