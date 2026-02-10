import{j as e,r as s}from"./iframe-BAylI5Je.js";import{a as t,T as P}from"./TablePagination-CQzDmlZw.js";import{T as l}from"./Table-CJcxfgut.js";import{T as d}from"./TableRow-Bg5YMZgs.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CL-Arvtx.js";import"./memoTheme-BuFiJMU4.js";import"./styled-qchFS-7q.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-Dmenq7c1.js";import"./useSlot-tp0V2ckF.js";import"./mergeSlotProps-CpHFUTeD.js";import"./useForkRef-BbXecB9y.js";import"./KeyboardArrowRight-MRB6veI6.js";import"./createSvgIcon-srbipTqh.js";import"./SvgIcon-B08jEN2V.js";import"./PaginationItem-B5ExSgB0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CKOllhzB.js";import"./useTimeout-Dtra5kqE.js";import"./TransitionGroupContext-4YAWsFUH.js";import"./useEventCallback-kqwlHtUL.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DyCxfOpo.js";import"./CircularProgress-Da-Xnf7p.js";import"./OutlinedInput-y_HDBIb1.js";import"./useFormControl-D3XHth8F.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-uZdOKIkx.js";import"./List-DqOUiTru.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-DYhNbNq7.js";import"./Menu-DYBZESlQ.js";import"./useSlotProps-CjIBT4F9.js";import"./Popover-CACtmdrF.js";import"./Portal-CtkHDIPH.js";import"./useTheme-Ct91rq7x.js";import"./utils-jWIr1tvh.js";import"./getReactElementRef-DYgwaRsW.js";import"./mergeSlotProps-CGOGNWJ4.js";import"./Modal-CGjmMJhZ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-Be3vx7rL.js";import"./Fade-CXDV8Ndz.js";import"./Paper-gzQqajNa.js";import"./useControlled-DdXnTKyH.js";import"./index-BYPMkNsh.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-B-qoZxBm.js";import"./index-CcRABOkE.js";import"./index-BiBDMnSv.js";import"./index-Cwm8YEbi.js";import"./Tooltip-xJM8APnn.js";import"./Button-6oOIUTaT.js";import"./index-ByCxKZZY.js";import"./Box-DpddYXXn.js";import"./Grid-BbaS7RWy.js";import"./styled-u23OebPe.js";import"./isMuiElement-Bp8yuFL1.js";import"./Stack-C7cYFq8h.js";import"./Container-a0Zu5jK3.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Cph4_T4L.js";import"./FormHelperText-CrBR3XVW.js";import"./FormControlLabel-BGdc4dIY.js";import"./Typography-DNXJRb7Q.js";import"./Switch-BAMXHdQl.js";import"./SwitchBase-tkLAg85y.js";import"./RadioGroup-aoY6ysvU.js";import"./Radio-BlyB3buX.js";import"./FormGroup-BD94_Pet.js";import"./Divider-Bhd0GQ1C.js";import"./Table-CN-8yUYf.js";import"./TableRow-DuMsVTNT.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
