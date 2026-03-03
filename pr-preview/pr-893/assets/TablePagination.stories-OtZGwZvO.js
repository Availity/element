import{r as s,j as e}from"./iframe-Dv1Hb7kF.js";import{a as t,T as P}from"./TablePagination-BqcwnmI0.js";import{T as l}from"./Table-D8qG_xhv.js";import{T as d}from"./TableRow-Ba530eEv.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-DpYZOke6.js";import"./memoTheme-BBZRIDpe.js";import"./styled-89sVFKyy.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Msk6OZ-n.js";import"./useSlot-D3-97Bpj.js";import"./mergeSlotProps-CVQXFPJk.js";import"./useForkRef-DHvmsRje.js";import"./KeyboardArrowRight-CD02e48V.js";import"./createSvgIcon-cwUD_L_o.js";import"./SvgIcon-5pvqgcrC.js";import"./PaginationItem-BKByKZQw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B7Edy8zQ.js";import"./useTimeout-CU6v0sK-.js";import"./TransitionGroupContext-C2v-exTz.js";import"./useEventCallback-BE-Xh8QX.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-X5Y4CM4M.js";import"./CircularProgress-D7Y0JvGB.js";import"./OutlinedInput-D5mtK01a.js";import"./useFormControl-B8g9qj4o.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-1JuMaG01.js";import"./List-ClfHumox.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-N2w0oj5_.js";import"./Menu-DerUfZPz.js";import"./useSlotProps-8Sv9aFcC.js";import"./Popover-BoOdWaVF.js";import"./Portal-nZmp6a4c.js";import"./useTheme-CGsP9Gxx.js";import"./utils-BsA11HdC.js";import"./getReactElementRef-87-1wWv5.js";import"./mergeSlotProps-BLold4VH.js";import"./Modal-u03eQQEl.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-B0FQGZ20.js";import"./Fade-B9vTzmTP.js";import"./Paper-DYUOfCQ3.js";import"./useControlled-wUW2FFSG.js";import"./index-B9y9IGGa.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-CBms0iGI.js";import"./index-DvY_Wzu4.js";import"./index-BiBDMnSv.js";import"./index-BBTP1ICE.js";import"./Tooltip-johHX3Tw.js";import"./Button-B4ml1k34.js";import"./index-B87WwVT5.js";import"./Box-BHuPsdf_.js";import"./Grid-DHp-nl__.js";import"./isMuiElement-CfSIe_7M.js";import"./styled-VmFmZdM9.js";import"./Stack-Cs6IioTg.js";import"./Container-BOWYat-a.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CYY7WDyQ.js";import"./FormHelperText-D669KPjG.js";import"./FormControlLabel-D0XosfHE.js";import"./Typography-Lwv6roC7.js";import"./Switch-BsNgqz8B.js";import"./SwitchBase-CR98SRoT.js";import"./Radio-kIMdyyjk.js";import"./RadioGroup-BE3gGYAr.js";import"./FormGroup-pznL_RZ6.js";import"./Divider-BzgSa4bA.js";import"./Table-CEpNSLlO.js";import"./TableRow-CMWha1mk.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
