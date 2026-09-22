import{r as s,j as e}from"./iframe-DKvnFaXU.js";import{a as t,T as P}from"./TablePagination-DEMVokNH.js";import{T as l}from"./Table-DXraKG06.js";import{T as d}from"./TableRow-DW1o6fOr.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-BnVTRC_G.js";import"./memoTheme-CqfCSJ2X.js";import"./styled-CmsEx6_f.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-WXHf1wWD.js";import"./useSlot-CCglkhUf.js";import"./mergeSlotProps-DgX6bSST.js";import"./useForkRef-BZiVfW-q.js";import"./KeyboardArrowRight-CizzPORR.js";import"./createSvgIcon-2KwAvjFg.js";import"./SvgIcon-CXEooahZ.js";import"./PaginationItem-C9DTBV-z.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-t7rDwPbd.js";import"./useTimeout-CHMS-cR8.js";import"./TransitionGroupContext-Ywi-MhlW.js";import"./useEventCallback-BMp-rMhG.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dk2wxJIq.js";import"./CircularProgress-1gU5OTOX.js";import"./OutlinedInput-BIAm5zgc.js";import"./useFormControl-DSlP_RFA.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DsT8FJ3P.js";import"./List-BGKHL79p.js";import"./SelectFocusSourceContext-F5AOv-5-.js";import"./useSlotProps-DYzgJZQm.js";import"./Popover-VuJg1sVN.js";import"./Portal-D0mCJoig.js";import"./useTheme-CSDDNwq2.js";import"./utils-Bp7Prb7W.js";import"./getReactElementRef-CqgsFiRl.js";import"./mergeSlotProps-BLQDwcQN.js";import"./Modal-Bm3yPZFq.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-EX3DoS9x.js";import"./Fade-CrAHTHjX.js";import"./Paper-DT4unmmL.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-Dyif2wC_.js";import"./useControlled-DXzaWELJ.js";import"./index-Dp9gWiw7.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-tZm1SdSy.js";import"./index-ksFf16Do.js";import"./index-CrcoPoGw.js";import"./index-goOPcPYN.js";import"./Tooltip-D9ZPYqEU.js";import"./Button-CcwmilXM.js";import"./index-DbDO0Ft_.js";import"./Box-D54lZQNO.js";import"./Grid-BqSQzKdl.js";import"./isMuiElement-B9gvf1iq.js";import"./styled-vqTvL8XB.js";import"./Stack-Ddupjr1g.js";import"./Container-Dg7zSU0F.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CkcKI7js.js";import"./FormHelperText-DYyNj_Dv.js";import"./FormControlLabel-DwYTjEvZ.js";import"./Typography-D7JJPpmc.js";import"./Switch-DxotU7Ib.js";import"./SwitchBase-DhDyeBWH.js";import"./Radio-BTw0Rwqw.js";import"./RadioGroup-27Q2WKBY.js";import"./FormGroup-B64yWhLm.js";import"./Divider-DEIVsENh.js";import"./Table-BFsW-A6j.js";import"./TableRow-DGkgg5cG.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
