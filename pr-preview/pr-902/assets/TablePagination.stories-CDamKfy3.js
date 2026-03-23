import{r as s,j as e}from"./iframe-hulqVKFa.js";import{a as t,T as P}from"./TablePagination-LBOmbhgt.js";import{T as l}from"./Table-CXDofPwr.js";import{T as d}from"./TableRow-BlkStB_u.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CDT5l8yf.js";import"./memoTheme-B_nCzl8M.js";import"./styled-CYnX6RAa.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BT9eVBB7.js";import"./useSlot-CalbLJ3n.js";import"./mergeSlotProps-C6UhvrC4.js";import"./useForkRef-BQz3TnTQ.js";import"./KeyboardArrowRight-Boy7kz-R.js";import"./createSvgIcon-MyKUcFFT.js";import"./SvgIcon-i9gddw4o.js";import"./PaginationItem-BGPDMWz5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-2bDflI9o.js";import"./useTimeout-Bim6OzXz.js";import"./TransitionGroupContext-DQUbB_yy.js";import"./useEventCallback-IcKGM0BT.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D52dKoJw.js";import"./CircularProgress-p22Pqfnj.js";import"./OutlinedInput-8C-NOWfH.js";import"./useFormControl-CY5egsXZ.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CvVnX1VI.js";import"./List-CHNmHfLH.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-CSBq7uz_.js";import"./Menu-BASAkWZI.js";import"./useSlotProps-CO5Qh0k_.js";import"./Popover-BiUSFDdq.js";import"./Portal-BqpYj0TQ.js";import"./useTheme-C7AUirRA.js";import"./utils-CqZ-bN0c.js";import"./getReactElementRef-DCfmlyG2.js";import"./mergeSlotProps-BYXPuP8C.js";import"./Modal-BIuYGRLg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-l3mPJCzo.js";import"./Fade-T6bIu7ga.js";import"./Paper-BVOs07DX.js";import"./useControlled-maN10Goq.js";import"./index-CFZ7DghX.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-B4N6KGr4.js";import"./index-CwQEE9jE.js";import"./index-BiBDMnSv.js";import"./index-CWJdyCdu.js";import"./Tooltip-CwFATdR1.js";import"./Button-BD9YMHcT.js";import"./index-BlNR_NWf.js";import"./Box-CyvodRNS.js";import"./Grid-CPl8rXDT.js";import"./isMuiElement-B2zjcqD7.js";import"./styled-QvSbzdTE.js";import"./Stack-B2rPYqjB.js";import"./Container-CNnb763M.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Buq9vnb5.js";import"./FormHelperText-CJHErJH9.js";import"./FormControlLabel-Dnvw7QmX.js";import"./Typography-COHcSKH7.js";import"./Switch-D6kkTZOZ.js";import"./SwitchBase-BXxnTvJc.js";import"./Radio-BCOKkKaa.js";import"./RadioGroup-DCnXM_Hp.js";import"./FormGroup-BDEQiySx.js";import"./Divider-DjTc7Vl7.js";import"./Table-CPX8mB_2.js";import"./TableRow-WMr0C0Gl.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
