import{r as s,j as e}from"./iframe-CskbrvwW.js";import{a as t,T as P}from"./TablePagination-B7d4TjjE.js";import{T as l}from"./Table-BppX-nKy.js";import{T as d}from"./TableRow-CcyEBB1m.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-KyUj4VmU.js";import"./memoTheme-DEwbXW4J.js";import"./styled-BsXlxVo_.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CE4BnMQ5.js";import"./useSlot-BWiqm7gO.js";import"./mergeSlotProps-BuWg2zjK.js";import"./useForkRef-CJ9Mlrh4.js";import"./KeyboardArrowRight-Ds9xg536.js";import"./createSvgIcon-Bhh07A3D.js";import"./SvgIcon-B2BnKrH8.js";import"./PaginationItem-Ba8CuYrF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D0cuhZpt.js";import"./useTimeout-tPc9dJl0.js";import"./TransitionGroupContext-Bfg0KmSK.js";import"./useEventCallback-SyYUcrzB.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C3QjbCEP.js";import"./CircularProgress-DRIVKGSr.js";import"./OutlinedInput-DIJeNguT.js";import"./useFormControl-CfOh6Tof.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CW7mj2oq.js";import"./List-TojBtRhm.js";import"./SelectFocusSourceContext-BPCr-wpP.js";import"./useSlotProps-C5o6YfE5.js";import"./Popover-DXCvR8dx.js";import"./Portal-4hvJB8nO.js";import"./useTheme-BYK31DIa.js";import"./utils-JI7-Ixnq.js";import"./getReactElementRef-C03_kC3i.js";import"./mergeSlotProps-CnXGUKPA.js";import"./Modal-BBxZlvcb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D90u1o6C.js";import"./Fade-6PhvYSTo.js";import"./Paper-C7gSeK8B.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-ByAJkR7Y.js";import"./useControlled-DIqjKUDM.js";import"./index-BWPz21f_.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-nkW_ZIAl.js";import"./index-CTKUFQuw.js";import"./index-CrcoPoGw.js";import"./index-BA1sIr4x.js";import"./Tooltip-DpvX0KYg.js";import"./Button-NBHJiR2s.js";import"./index-CZsLRVDZ.js";import"./Box-ChrZYvSC.js";import"./Grid-Dtrs9C3c.js";import"./isMuiElement-AkziJBw1.js";import"./styled-DBnwDxk1.js";import"./Stack-C_7R7j6r.js";import"./Container-YINSrinB.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-De4oAUc0.js";import"./FormHelperText-DuMGeBBY.js";import"./FormControlLabel-DU9By6y8.js";import"./Typography-C3YNkC5-.js";import"./Switch-C8V1MSZG.js";import"./SwitchBase-B5TBSL1B.js";import"./Radio-CkEEhUL0.js";import"./RadioGroup-DNnvKS06.js";import"./FormGroup-F9zDzK3f.js";import"./Divider-CQKuo_rK.js";import"./Table-p6xxlaEm.js";import"./TableRow-tijUyIQr.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
