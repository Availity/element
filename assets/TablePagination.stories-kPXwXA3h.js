import{r as s,j as e}from"./iframe-BXngGBfv.js";import{a as t,T as P}from"./TablePagination-DyPvCxfp.js";import{T as l}from"./Table-BcWdByMe.js";import{T as d}from"./TableRow-BU30wSLN.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-BOFxvLer.js";import"./memoTheme-By_0Hb9I.js";import"./styled-Bawvqwj4.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BgHU0UOz.js";import"./useSlot-CrmQg2MJ.js";import"./mergeSlotProps-Brb8C4Ss.js";import"./useForkRef-BPuQGl16.js";import"./KeyboardArrowRight-VFMVVJUE.js";import"./createSvgIcon-PKFeQm70.js";import"./SvgIcon-BJuCOs7n.js";import"./PaginationItem-CMt3H58o.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CzabJsBp.js";import"./useTimeout-DWqRGYei.js";import"./TransitionGroupContext-CO0Qzr5e.js";import"./useEventCallback-BS9kycBS.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-B7Rw7xc_.js";import"./CircularProgress-CH7ElgU6.js";import"./OutlinedInput-D8j1VWle.js";import"./useFormControl-CYmoh9g8.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-C3r6i1GZ.js";import"./List-83oLdzCs.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-CAygNoe6.js";import"./Menu-DGj6ldkx.js";import"./useSlotProps-Djma3IUa.js";import"./Popover-3ptJ9M55.js";import"./Portal-71LMLhER.js";import"./useTheme-C0sMdU1B.js";import"./utils-Co-MjcrY.js";import"./getReactElementRef-BBa8qN_k.js";import"./mergeSlotProps-tz8U3nPv.js";import"./Modal-DmtASUzd.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-sSmeMUd4.js";import"./Fade-CaBS8FWJ.js";import"./Paper-DbLV-z9R.js";import"./useControlled-XJJbW9AP.js";import"./index-Cf4ih-NU.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./Pagination-Bn7HG6yY.js";import"./index-Bk46c2ns.js";import"./index-BiBDMnSv.js";import"./index-ZvN5iItO.js";import"./Tooltip-16k3P5ny.js";import"./Button-BjebpOto.js";import"./index-D7EY_zU-.js";import"./Box-Cs53hwdz.js";import"./Grid-DhicbWoX.js";import"./isMuiElement-7V78C_da.js";import"./styled-B3TWJa8B.js";import"./Stack-DSCZMnTD.js";import"./Container-BIFp3KrG.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-POAGYpGd.js";import"./FormHelperText-C-R3JwUM.js";import"./FormControlLabel-D-20YuFd.js";import"./Typography-CV53WmLj.js";import"./Switch-Xno7-L_Z.js";import"./SwitchBase-BmDSdJmL.js";import"./Radio-DCMCbOVJ.js";import"./RadioGroup-BskKp_ip.js";import"./FormGroup-BPXNegLF.js";import"./Divider-BN0wEXXb.js";import"./Table-Cq1M9KTI.js";import"./TableRow-CJyvS5_b.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
