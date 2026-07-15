import{r as s,j as e}from"./iframe-DDeFjhwT.js";import{a as t,T as P}from"./TablePagination--OwCotax.js";import{T as l}from"./Table-Cg1YWKs8.js";import{T as d}from"./TableRow-DiAExuzd.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CFP1nHpQ.js";import"./memoTheme-BKUl2Kw8.js";import"./styled-PQjfDOgQ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CoU8zj7w.js";import"./useSlot-SzvoDGen.js";import"./mergeSlotProps-BPESDwW9.js";import"./useForkRef-DgKt8E30.js";import"./KeyboardArrowRight-Bvs06MTL.js";import"./createSvgIcon-BxZGQxhE.js";import"./SvgIcon-DRz9ijBU.js";import"./PaginationItem-C6xgWgBm.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D-CcOUqB.js";import"./useTimeout-Cm2RyAAI.js";import"./TransitionGroupContext-DKXhXx0i.js";import"./useEventCallback-tCUa2-C3.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CurJhF0D.js";import"./CircularProgress-DZuzO0Uv.js";import"./OutlinedInput-ZBGK4L-L.js";import"./useFormControl-eu10Xp36.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-Cg3KkHlt.js";import"./List-nMnQx56C.js";import"./SelectFocusSourceContext-CquKgtEw.js";import"./useSlotProps-B4bgTElG.js";import"./Popover-DktFq9tj.js";import"./Portal-BqacPdFW.js";import"./useTheme-KKOLTJXa.js";import"./utils-DshWixdw.js";import"./getReactElementRef-BeHDg4ji.js";import"./mergeSlotProps-CjAnYkZH.js";import"./Modal-BpltTEbA.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BGCVqILM.js";import"./Fade-klYlUMvL.js";import"./Paper-igPbegtl.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-hUhZUIoR.js";import"./useControlled-BH5VVnvv.js";import"./index-V6LxtqOC.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-BcDwx7gb.js";import"./index-BaZRRpT9.js";import"./index-CrcoPoGw.js";import"./index-CSwp3I03.js";import"./Tooltip-5o6beSBH.js";import"./Button-su8UM5h8.js";import"./index-oWqJ9z6g.js";import"./Box-ClrgcKqA.js";import"./Grid-DkuRXmB0.js";import"./isMuiElement-C8BOTMMK.js";import"./styled-B5nfTXUF.js";import"./Stack-D5p-aU6z.js";import"./Container-BKOvC3qE.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DwKt04Fe.js";import"./FormHelperText-C0of87GE.js";import"./FormControlLabel-Ji9c007o.js";import"./Typography-Be3kmzes.js";import"./Switch-B4_H_B2f.js";import"./SwitchBase-DR9e1Vdv.js";import"./Radio-CNcgpL5h.js";import"./RadioGroup-BxaV2sVI.js";import"./FormGroup-DtvKduvm.js";import"./Divider-C-2m7oZQ.js";import"./Table-WgxUO1Pu.js";import"./TableRow-B9j1trM6.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
