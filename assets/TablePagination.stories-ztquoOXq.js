import{r as s,j as e}from"./iframe-CEMXsp8C.js";import{a as t,T as P}from"./TablePagination-Bz-RROyF.js";import{T as l}from"./Table-CSNfQTiM.js";import{T as d}from"./TableRow-CnWC1oy-.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-uEINJFlH.js";import"./memoTheme-l-GP-bwx.js";import"./styled-qsRty7dq.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Cfdw861m.js";import"./useSlot-CsbKhATt.js";import"./mergeSlotProps-CZJ2E7Ux.js";import"./useForkRef-DoG2Adio.js";import"./KeyboardArrowRight-BZGtE_CT.js";import"./createSvgIcon-f84r-UoO.js";import"./SvgIcon-nYHR5krO.js";import"./PaginationItem-BfpRHDAc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DV3wZvw5.js";import"./useTimeout-Dr5vw9MW.js";import"./TransitionGroupContext-CFI9AaDj.js";import"./useEventCallback-DFupxdy5.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CI45TlqX.js";import"./CircularProgress-C6UU3hYL.js";import"./OutlinedInput-DkQzF-Yr.js";import"./useFormControl-rkOnYHMv.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-D1zsd1Cx.js";import"./List-C7cGWOto.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-CW96VAM3.js";import"./Menu-of2ejCIv.js";import"./useSlotProps-Uj4Ej5E1.js";import"./Popover-uAtnNwBt.js";import"./Portal-Cd1GL2Ny.js";import"./useTheme-DmimCZ1K.js";import"./utils-uO-Y6Lu-.js";import"./getReactElementRef-7aOdyAnj.js";import"./mergeSlotProps-DUVsb-pA.js";import"./Modal-C_PIWu30.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-De3axDf6.js";import"./Fade-DiSnUXPW.js";import"./Paper-CpiR7IfR.js";import"./useControlled-BuTFob83.js";import"./index-D94lOHFj.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./Pagination-15mk0-an.js";import"./index-6HvsEIgM.js";import"./index-BiBDMnSv.js";import"./index-CwlIgXTJ.js";import"./Tooltip-DE_9rsm0.js";import"./Button-BggChkC7.js";import"./index-DIoqnUOe.js";import"./Box-BEsP6iEE.js";import"./Grid-DNEcM-zX.js";import"./isMuiElement-D0FqNR9x.js";import"./styled-Dz3b5a5M.js";import"./Stack-Ct51BpAL.js";import"./Container-DBKsfXDc.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-B5UQsNVX.js";import"./FormHelperText-DqMuL7fY.js";import"./FormControlLabel-CKApGRUl.js";import"./Typography-aAxGDRe7.js";import"./Switch-CgP-2Cp1.js";import"./SwitchBase-qMOE7SWj.js";import"./Radio-IVXlydwe.js";import"./RadioGroup-dD3cetTc.js";import"./FormGroup-LMrVoSKP.js";import"./Divider-DTiwsONw.js";import"./Table-CcQiIr1W.js";import"./TableRow-BdwOH7Rx.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
