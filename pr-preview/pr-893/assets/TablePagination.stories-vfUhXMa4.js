import{r as s,j as e}from"./iframe-DdfW-8_N.js";import{a as t,T as P}from"./TablePagination-BjIUED35.js";import{T as l}from"./Table-ifOP4X-s.js";import{T as d}from"./TableRow-D139aMeI.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CEDT4UcK.js";import"./memoTheme-Dy9OKavz.js";import"./styled-LeBzfrVS.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-B-qOCvpX.js";import"./useSlot-CGn3_9IL.js";import"./mergeSlotProps-CqPusD8W.js";import"./useForkRef-B88Yvlsp.js";import"./KeyboardArrowRight-ByG7hOr0.js";import"./createSvgIcon-WEQlv1NO.js";import"./SvgIcon-Dd37ovUy.js";import"./PaginationItem-BWWszfeh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Beiib6fe.js";import"./useTimeout-B6LNCSjE.js";import"./TransitionGroupContext-CyCzSLBs.js";import"./useEventCallback-DvSzgmRL.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-cVpvf3wp.js";import"./CircularProgress-YKVCICB8.js";import"./OutlinedInput-BotArOsj.js";import"./useFormControl-CG8sOhjY.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-_DPbfyuG.js";import"./List-9mS4xUP0.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-BECnV9sa.js";import"./Menu-B20e0XTp.js";import"./useSlotProps-1teZLVpX.js";import"./Popover-CWHWrYUI.js";import"./Portal-HR7sjuNG.js";import"./useTheme-CibYXdii.js";import"./utils-ByofAeEv.js";import"./getReactElementRef-C38daVWB.js";import"./mergeSlotProps-DEry-0fa.js";import"./Modal-BmEogbMs.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BcoXv1zJ.js";import"./Fade-Dr2QUuJ4.js";import"./Paper-B3IXTn7K.js";import"./useControlled-DoVGZQrv.js";import"./index-BFOrYL81.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-BcBfbdkA.js";import"./index-DcimIcN_.js";import"./index-BiBDMnSv.js";import"./index-C-S8qNMg.js";import"./Tooltip-Bx3cCyVU.js";import"./Button-B9MkHEWu.js";import"./index-DpB8nAvk.js";import"./Box-B1YYYxPG.js";import"./Grid-BLYhcV5L.js";import"./isMuiElement-Bemz2x0M.js";import"./styled-BbktOZM5.js";import"./Stack-COJVbYMP.js";import"./Container-C4O5rbHe.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-sMVSQNOc.js";import"./FormHelperText-DRC7w-DS.js";import"./FormControlLabel-CjgpwnMF.js";import"./Typography-CwnuSxBW.js";import"./Switch-DMN2jmMq.js";import"./SwitchBase-BidU3yt6.js";import"./Radio-dXLgjMUo.js";import"./RadioGroup-CMxHbEOa.js";import"./FormGroup-BNOfCNl9.js";import"./Divider-w0XMBMrP.js";import"./Table-DEsdT_rs.js";import"./TableRow-BH13Fbea.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
