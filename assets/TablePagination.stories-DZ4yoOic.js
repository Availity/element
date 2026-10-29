import{r as s,j as e}from"./iframe-CLut6yOe.js";import{a as t,T as P}from"./TablePagination-DzQzQtaQ.js";import{T as l}from"./Table-CRcduTRX.js";import{T as d}from"./TableRow-wgCK4u37.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-DeRZcUPR.js";import"./memoTheme-BCZ6py50.js";import"./styled-B56iE4qf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BE6_p5N5.js";import"./useSlot-C8ASSSxZ.js";import"./mergeSlotProps-BoE-e40D.js";import"./useForkRef-CW7nwTzV.js";import"./KeyboardArrowRight-BjNh46R7.js";import"./createSvgIcon-BcCXBLY5.js";import"./SvgIcon-Dd51Rz_D.js";import"./PaginationItem-Dcxo8YFb.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B4AmE_nS.js";import"./useTimeout-DSf2abi9.js";import"./TransitionGroupContext-CxTk-KXz.js";import"./useEventCallback-BXl50wnQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-MKfAwX3T.js";import"./CircularProgress-Cb3dAqoX.js";import"./OutlinedInput-NqaTAoz7.js";import"./useFormControl-CsURvBpr.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CE5xIuZM.js";import"./List-Ed_p2skf.js";import"./SelectFocusSourceContext-BqjsBqoL.js";import"./useSlotProps-BphsLqn6.js";import"./Popover-D8aHDtre.js";import"./Portal-buqhKvPN.js";import"./useTheme-uzqIZvgA.js";import"./utils-CY0-o-M4.js";import"./getReactElementRef-CPIcGi-m.js";import"./mergeSlotProps-BD3yaoOB.js";import"./Modal-RUjatzFH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DrT6KjAn.js";import"./Fade-CkZ97Hml.js";import"./Paper-CMcH6Gk3.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-Dy9kUNRR.js";import"./useControlled-BMhEC-vi.js";import"./index-CxuuQ7ms.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-JJVzBfD5.js";import"./index-DroMy-PZ.js";import"./index-MVgG_W0q.js";import"./index-DNgDR8tQ.js";import"./Tooltip-20BxdW9m.js";import"./Button-CO7SGq6S.js";import"./index-BGYc3edq.js";import"./Box-KcVtg1pO.js";import"./Grid-CiYph9Ji.js";import"./isMuiElement-CAAIFwhI.js";import"./styled-qS0Yrwc6.js";import"./Stack-C0CMzs2G.js";import"./Container-DKVcPtkF.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-C4ZzvvPY.js";import"./FormHelperText-Du_S5IXp.js";import"./FormControlLabel-DK2k45Ms.js";import"./Typography-BLWoaJn_.js";import"./Switch-bv0zSmLo.js";import"./SwitchBase-B76ZlPUO.js";import"./Radio-C6QDUZlf.js";import"./RadioGroup-DtHGdsBt.js";import"./FormGroup-_FRXrzq-.js";import"./Divider-o9_MDQMV.js";import"./Table-Ce2mDOqn.js";import"./TableRow-Ba2B1BeS.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
