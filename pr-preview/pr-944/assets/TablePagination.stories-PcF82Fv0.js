import{r as s,j as e}from"./iframe-DPgvn2UU.js";import{a as t,T as P}from"./TablePagination-D7ttE2c5.js";import{T as l}from"./Table-DI07IE7v.js";import{T as d}from"./TableRow-DCnvj-4H.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-BOo8-6Rt.js";import"./memoTheme-BYph2ZTv.js";import"./styled-Bnkr7D-c.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BjyTaLX0.js";import"./useSlot-DpB6mlqQ.js";import"./mergeSlotProps-DRvPt2A_.js";import"./useForkRef-B_9E6GXl.js";import"./KeyboardArrowRight-DuECyhlO.js";import"./createSvgIcon-CVdeguJ_.js";import"./SvgIcon-Bq0V0STh.js";import"./PaginationItem-PuGhIcXp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C05RGSI7.js";import"./useTimeout-b550rnFU.js";import"./TransitionGroupContext-CFlHgrGu.js";import"./useEventCallback-DBIic8Ex.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-B7NJWIp-.js";import"./CircularProgress-C6YfH4n8.js";import"./OutlinedInput-BT6k7tdI.js";import"./useFormControl-cN7RU9gv.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CyA-Zdrn.js";import"./List-BJ31Te5w.js";import"./SelectFocusSourceContext-TejMP2UB.js";import"./useSlotProps-BkILu-KG.js";import"./Popover-XaGZ9P8a.js";import"./Portal-DRuBdp-z.js";import"./useTheme-B7kQ5Jap.js";import"./utils-CA9pXuzB.js";import"./getReactElementRef-vJH3QVIN.js";import"./mergeSlotProps-SFKmFrry.js";import"./Modal-DJSJonwV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DG1hflfc.js";import"./Fade-pXi3dxmW.js";import"./Paper-Bg7uCtkj.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-C71NVgIY.js";import"./useControlled-BRfcL8pA.js";import"./index-DkMl2Zw_.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-DH-_Jsxm.js";import"./index-DO8HKLfP.js";import"./index-MVgG_W0q.js";import"./index-CeFSOpBV.js";import"./Tooltip-YOgdBn5B.js";import"./Button-BYYLdAXe.js";import"./index-DiNwh75D.js";import"./Box-BlDR6l9l.js";import"./Grid-DrKODsgE.js";import"./isMuiElement-CIfsBfEF.js";import"./styled-CiHxTfSE.js";import"./Stack-Br7WCR6b.js";import"./Container-CIN8FyKG.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DYfqByqT.js";import"./FormHelperText-DCcVia06.js";import"./FormControlLabel-DpEDB8IM.js";import"./Typography-CPTozpuv.js";import"./Switch-CslP4g6_.js";import"./SwitchBase-TQhLjsOV.js";import"./Radio-DrWY9wGb.js";import"./RadioGroup-C6Vtjkty.js";import"./FormGroup-DdQAx87u.js";import"./Divider-DOUeryDl.js";import"./Table-COVw5qvB.js";import"./TableRow-CwnAksF4.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
