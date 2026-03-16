import{r as s,j as e}from"./iframe-DPzbdwV6.js";import{a as t,T as P}from"./TablePagination-xrsTPk0F.js";import{T as l}from"./Table-D4W6gqzU.js";import{T as d}from"./TableRow-DQOgSXDB.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-C0mT93kG.js";import"./memoTheme-BPZzx3Fh.js";import"./styled-rDINGuMr.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DeZ_0TKv.js";import"./useSlot-D5vL0YkG.js";import"./mergeSlotProps-C_Eyz2VC.js";import"./useForkRef-DK4-OTh4.js";import"./KeyboardArrowRight-C9TQO8En.js";import"./createSvgIcon-Bjho5j0_.js";import"./SvgIcon-DJ4ww3AR.js";import"./PaginationItem-BjPXzd5S.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DiUPj8iu.js";import"./useTimeout-BEe3g1yB.js";import"./TransitionGroupContext-_giaZQD1.js";import"./useEventCallback-D6Y3GTd7.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-MOZEFIpK.js";import"./CircularProgress-DahfViZv.js";import"./OutlinedInput-FZJmt1fs.js";import"./useFormControl-1JXYARsd.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-Dl-ygMyF.js";import"./List-BDr2LImM.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-DSYIp7jG.js";import"./Menu-BG2RWp3K.js";import"./useSlotProps-DqDqMweE.js";import"./Popover-CvqPE70p.js";import"./Portal-BKsBZMKZ.js";import"./useTheme-CsAYvKS6.js";import"./utils-C8GgNPFy.js";import"./getReactElementRef-KOzEHSpK.js";import"./mergeSlotProps-B7wEujIz.js";import"./Modal-Dq2bUZTV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-a7fTNHAx.js";import"./Fade-BSRsDsAD.js";import"./Paper-Coy0maCu.js";import"./useControlled-B7b2C6zg.js";import"./index-Dc5vJBpb.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-kKNvJQZu.js";import"./index-BTgjH9Py.js";import"./index-BiBDMnSv.js";import"./index-DWmIprsC.js";import"./Tooltip-BXHSE_Yz.js";import"./Button-DBTzQ06_.js";import"./index-IpBMU51L.js";import"./Box-Daga5vLj.js";import"./Grid-CYik0omM.js";import"./isMuiElement-D-kuf848.js";import"./styled-Ct-kKLkW.js";import"./Stack-CQtcIy6Q.js";import"./Container-o6DB5o93.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-QN0beRBt.js";import"./FormHelperText-f01bZ0iU.js";import"./FormControlLabel-CkCBAxOz.js";import"./Typography-D5TdBLOe.js";import"./Switch-DvRxi_iA.js";import"./SwitchBase-xPqcMqos.js";import"./Radio-BhnduWGS.js";import"./RadioGroup-6nf6fmGM.js";import"./FormGroup-SQvMgCQU.js";import"./Divider-C3C8H99N.js";import"./Table-BUzgISza.js";import"./TableRow-CFYJZtJS.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
