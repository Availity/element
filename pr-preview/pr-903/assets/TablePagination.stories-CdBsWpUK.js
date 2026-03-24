import{r as s,j as e}from"./iframe-BP-fstPH.js";import{a as t,T as P}from"./TablePagination-C_NExVYW.js";import{T as l}from"./Table-Bz9n3c5I.js";import{T as d}from"./TableRow-CLYpqLjI.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-DBxQFI8N.js";import"./memoTheme-CBW4mAKK.js";import"./styled-QS_6ePhI.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-xoCILrSP.js";import"./useSlot-AMpyQgX8.js";import"./mergeSlotProps-CZ6XbOjr.js";import"./useForkRef-kN7FeyJY.js";import"./KeyboardArrowRight-9qdbCnMo.js";import"./createSvgIcon-CdaKSufU.js";import"./SvgIcon-BNSNkhkk.js";import"./PaginationItem-BIz7a26H.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CN3Lj4mC.js";import"./useTimeout-aFoefsbK.js";import"./TransitionGroupContext-CBWt0gZQ.js";import"./useEventCallback--hrt0XPn.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CG0C3HM8.js";import"./CircularProgress-CgtN00kw.js";import"./OutlinedInput-DAVO5nXI.js";import"./useFormControl-BqU37Iip.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CGBePHhN.js";import"./List-BJHgVsR-.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-BKUFFh0V.js";import"./Menu-B8YLwSTz.js";import"./useSlotProps-B35r-AKt.js";import"./Popover-DZnVKWt8.js";import"./Portal-DXb3wffR.js";import"./useTheme-8xMS95AC.js";import"./utils-ct7xOGzP.js";import"./getReactElementRef-rCjbZXAY.js";import"./mergeSlotProps-BN9RGjlA.js";import"./Modal-AZaAAX9Q.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-Du2lwHJG.js";import"./Fade-DdOD_q3t.js";import"./Paper-BbZw2l2T.js";import"./useControlled-C1wvNNpf.js";import"./index-Ds-ZEgLG.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-B_QLmQtA.js";import"./index-PuKCOh7B.js";import"./index-BiBDMnSv.js";import"./index-CUBSMbdA.js";import"./Tooltip-CFDxDxIS.js";import"./Button-Bi9jGuft.js";import"./index-DDACpU55.js";import"./Box-yuve2Yeg.js";import"./Grid-FUwIxOgZ.js";import"./isMuiElement-DVbYF-_U.js";import"./styled-CP91GCBe.js";import"./Stack-DimDvg5e.js";import"./Container-iJP50oB2.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DabwHVcZ.js";import"./FormHelperText-C4xW4xrL.js";import"./FormControlLabel-DVBIx8eJ.js";import"./Typography-BMazaI8i.js";import"./Switch-DiGOVsxw.js";import"./SwitchBase-CyaT9YQ0.js";import"./Radio-CTRKg1Xd.js";import"./RadioGroup-DFvWHceN.js";import"./FormGroup-CcKsQGcG.js";import"./Divider-jfkURQMV.js";import"./Table-CGdhLQP3.js";import"./TableRow-1C89aHRc.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
