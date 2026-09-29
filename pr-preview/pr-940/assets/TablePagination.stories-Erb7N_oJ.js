import{r as s,j as e}from"./iframe-CEHPhfh-.js";import{a as t,T as P}from"./TablePagination-DTnzWyHt.js";import{T as l}from"./Table-DkMAidiN.js";import{T as d}from"./TableRow-CDx7B8-n.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-IcQAPVAQ.js";import"./memoTheme-CIUXmmP3.js";import"./styled-surM00hH.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CRD43Pz0.js";import"./useSlot-CGHriRRK.js";import"./mergeSlotProps-DqsR1CiL.js";import"./useForkRef-CUwhrb4S.js";import"./KeyboardArrowRight-mg3wAyDu.js";import"./createSvgIcon-DM21giQZ.js";import"./SvgIcon-CRmvg5rp.js";import"./PaginationItem-CifbcE-m.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Bi9yKj0d.js";import"./useTimeout-C36QQqY4.js";import"./TransitionGroupContext-KFjAD8lx.js";import"./useEventCallback-BjU86bqT.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DFv4hPcI.js";import"./CircularProgress-DIulSjrJ.js";import"./OutlinedInput-B4rUmiBa.js";import"./useFormControl-DKOaXlnO.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CMlNScME.js";import"./List-DTUSYVMO.js";import"./SelectFocusSourceContext-ZlVDIhni.js";import"./useSlotProps-CX3w_7Yv.js";import"./Popover-Cu_iSQEj.js";import"./Portal-BAyfuJxK.js";import"./useTheme-B_yH_tF0.js";import"./utils-Dqw6COyO.js";import"./getReactElementRef-BKZTuICO.js";import"./mergeSlotProps-CfdDxxlC.js";import"./Modal-D7vdJCxc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BLceXtZc.js";import"./Fade-snlpbKkK.js";import"./Paper-CXpuvckS.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-D7khzvuo.js";import"./useControlled-CuNUqud6.js";import"./index-tILHWvZu.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-AiToClQj.js";import"./index-_UegUKj_.js";import"./index-CrcoPoGw.js";import"./index-BiRTiuFa.js";import"./Tooltip-BwegOhQ3.js";import"./Button-DCMVSOfW.js";import"./index-DYWaDwbT.js";import"./Box-JfKqa7ps.js";import"./Grid-BWykgrcb.js";import"./isMuiElement-B3XjmQiv.js";import"./styled-Z7vS--HU.js";import"./Stack-kFyJTz_L.js";import"./Container-WyARCUam.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BRYtStoZ.js";import"./FormHelperText-DheZpH7H.js";import"./FormControlLabel-BzSk7T_G.js";import"./Typography-CJQmKVEQ.js";import"./Switch-BsymbQPl.js";import"./SwitchBase-DLCeua8o.js";import"./Radio-BHEJ1nRB.js";import"./RadioGroup-CeNvO4S4.js";import"./FormGroup-uFTTDTpe.js";import"./Divider-Ct8M__zO.js";import"./Table-CTOK87CP.js";import"./TableRow-DdBeQXXp.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
