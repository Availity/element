import{j as e,r as s}from"./iframe-DdGJyqAg.js";import{a as t,T as P}from"./TablePagination-DCjaDL_Z.js";import{T as l}from"./Table-D272vwmT.js";import{T as d}from"./TableRow-DNcsD4xT.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-MkQ5Xh1u.js";import"./memoTheme-zSpKnFub.js";import"./styled-DZNwGmaG.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-DIq7GsJx.js";import"./useSlot-eMa7p3Q9.js";import"./mergeSlotProps-DPHtdEFZ.js";import"./useForkRef-B5TSGzbi.js";import"./KeyboardArrowRight-8QG1mS7u.js";import"./createSvgIcon-DK_4S9NY.js";import"./SvgIcon-C8uI1pQt.js";import"./PaginationItem-D1WWQ0Tj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CFis8PXN.js";import"./useTimeout-Cz_VOQaa.js";import"./TransitionGroupContext-DXcWZkFx.js";import"./useEventCallback-CPaQ5FLe.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BE3A75mF.js";import"./CircularProgress-lWH1rXDR.js";import"./OutlinedInput-BHM7Boqm.js";import"./useFormControl-B0XFIIeV.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DE8NhBOc.js";import"./List-CL4x-icz.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-mSqrLB5c.js";import"./Menu-aYZqoIsz.js";import"./useSlotProps-BJSVq7mD.js";import"./Popover-YJQiE46u.js";import"./Portal-B-KSdahe.js";import"./useTheme-Cv4lKaq_.js";import"./utils-CgujwDzQ.js";import"./getReactElementRef-cwdxe4es.js";import"./mergeSlotProps-DS8s2Zwb.js";import"./Modal-R_KASL8z.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CA13Yjqk.js";import"./Fade-D0RG6YQl.js";import"./Paper-DkSeVLdU.js";import"./useControlled-JTS7gCiC.js";import"./index-DcoLq1GP.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Pagination-CE0QGN-J.js";import"./index-CCsEDXQX.js";import"./index-BiBDMnSv.js";import"./index-C--XPrtb.js";import"./Tooltip-Cpc2Ys61.js";import"./Button-hwETKy73.js";import"./index-VAodLW9S.js";import"./Box-CoFPB8Zy.js";import"./Grid-DZe0cyy5.js";import"./styled-Zzv4A2is.js";import"./isMuiElement-DDjJU4Hv.js";import"./Stack-VReAszZR.js";import"./Container-Dqr8G4iZ.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CosMvvSd.js";import"./FormHelperText-DU4kG7nJ.js";import"./FormControlLabel-BIb5JIBe.js";import"./Typography-DLXtgzgf.js";import"./Switch-Cx_bjJHc.js";import"./SwitchBase-Po0BfNKK.js";import"./RadioGroup-BW30_Nxw.js";import"./Radio-lAxyQiiy.js";import"./FormGroup-CO1Br__f.js";import"./Divider-Ccos3Z6v.js";import"./Table-D9nfaqJg.js";import"./TableRow-D100-Q6J.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
