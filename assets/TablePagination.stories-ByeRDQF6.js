import{j as e,r as s}from"./iframe-D1NCSytB.js";import{a as t,T as P}from"./TablePagination-DoVJbCGP.js";import{T as l}from"./Table-c1y74q8K.js";import{T as d}from"./TableRow-wSe_Y2zS.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CbhrP5L4.js";import"./memoTheme-DOGX_B28.js";import"./styled-BbCZmQsA.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-CqXZGrKr.js";import"./useSlot-D1NHtjkn.js";import"./mergeSlotProps-DlDajhlR.js";import"./useForkRef-BpGj9yaf.js";import"./KeyboardArrowRight-ldyjUIUI.js";import"./createSvgIcon-BJL25Yge.js";import"./SvgIcon-B4wc5_NU.js";import"./PaginationItem-WpB7HQQZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BAUCY_Oi.js";import"./useTimeout-Bh_i1JKi.js";import"./TransitionGroupContext-BkHkrwff.js";import"./useEventCallback-C8LcGziW.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cqago1eB.js";import"./CircularProgress-DKmuW22e.js";import"./OutlinedInput-mW4xZACZ.js";import"./useFormControl-BPWmZTOm.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-BOtI9qPe.js";import"./List-BopVit6a.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-BFdMvHb_.js";import"./Menu-CXdeS85n.js";import"./useSlotProps-WTXiNqL0.js";import"./Popover-2BPfyVKB.js";import"./Portal-DSDwhvGd.js";import"./useTheme-D3cMIjr1.js";import"./utils-DI3cRngQ.js";import"./getReactElementRef-D8NIfLKv.js";import"./mergeSlotProps-LIb7wZP9.js";import"./Modal-gZmGceMQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CXhAj7P7.js";import"./Fade-D-LTijLB.js";import"./Paper-CBE46eXP.js";import"./useControlled-Czfb1u9c.js";import"./index-BYdlpT-l.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-D_8r-wqF.js";import"./index-nWo2-Vbp.js";import"./index-BiBDMnSv.js";import"./index-BPnk7Q5j.js";import"./Tooltip-C79jCpae.js";import"./Button-Dci9Exp7.js";import"./index-D9eAXuXP.js";import"./Box-Dk8U9NOX.js";import"./Grid-CLUwk8Cn.js";import"./styled-DdVDvF5f.js";import"./isMuiElement-DU2Yi2t-.js";import"./Stack-BQ77EqZr.js";import"./Container-CFpNJvgv.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Dky5iOJU.js";import"./FormHelperText-00W-iRAK.js";import"./FormControlLabel-DJJ3tTv9.js";import"./Typography-BWjvtf8i.js";import"./Switch-CAzDGHeO.js";import"./SwitchBase-DGBYhJIH.js";import"./RadioGroup-DYU7D_Ot.js";import"./Radio-iQ3dsbb4.js";import"./FormGroup-C3gH0vq5.js";import"./Divider-BuOS6m7g.js";import"./Table-BF4gFhY0.js";import"./TableRow-BYKHUYYm.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
