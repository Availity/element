import{r as s,j as e}from"./iframe-BXw3gXzi.js";import{a as t,T as P}from"./TablePagination-CvUYSeZj.js";import{T as l}from"./Table-CwBaDP_5.js";import{T as d}from"./TableRow-C8ISYsH7.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-eDFGecT3.js";import"./memoTheme-Cun1OYGu.js";import"./styled-B4C1j5cm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CCQb1uiv.js";import"./useSlot-ChptDOQ0.js";import"./mergeSlotProps-CH0acCqg.js";import"./useForkRef-C2Z_35PR.js";import"./KeyboardArrowRight-BlG01bwV.js";import"./createSvgIcon--3tSNQ0H.js";import"./SvgIcon-WyGfIbWv.js";import"./PaginationItem-Cy5TP2nG.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BTnZicAm.js";import"./useTimeout-0uXpumKy.js";import"./TransitionGroupContext-M8heGJda.js";import"./useEventCallback-3YhfTi0L.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DeurSYdO.js";import"./CircularProgress-DhFZnFeX.js";import"./OutlinedInput-BHzGOAt2.js";import"./useFormControl-v5C4S-YL.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DaQ1LzX7.js";import"./List-Cs9MPw4u.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select--_x2H-6c.js";import"./Menu-CW4zJ6VU.js";import"./useSlotProps-yzZ17Wp2.js";import"./Popover-Bzr2tLUQ.js";import"./Portal-7KnvOddD.js";import"./useTheme-BMbLtIQ2.js";import"./utils-xtkVmQdP.js";import"./getReactElementRef-DHOcIADn.js";import"./mergeSlotProps-BLBn1dIn.js";import"./Modal-C_gnWSEE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-D7s4TJBu.js";import"./Fade-D_YaJ4fg.js";import"./Paper-DAJ4kOlQ.js";import"./useControlled-B4VTwyPs.js";import"./index-DQ-Pw2vZ.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-D9oIurkS.js";import"./index-CW8Uf0e3.js";import"./index-BiBDMnSv.js";import"./index-DejzIRML.js";import"./Tooltip-ByULunc2.js";import"./Button-BgBpxWh8.js";import"./index-tCOiXdlf.js";import"./Box-BM1JqmYM.js";import"./Grid-BGtXNav_.js";import"./isMuiElement-HwGtkGEy.js";import"./styled-C8dNPj49.js";import"./Stack-BuTN3X4b.js";import"./Container-BCT1HrQN.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BdgZp3W_.js";import"./FormHelperText-DL7htFBa.js";import"./FormControlLabel-Ckl0iH_4.js";import"./Typography-BaC1f153.js";import"./Switch-BD3lQCjm.js";import"./SwitchBase-DGpDYu1p.js";import"./Radio-BmXj6-yU.js";import"./RadioGroup-CrpTZ2V1.js";import"./FormGroup-v_02e0Td.js";import"./Divider-D_KSA0HU.js";import"./Table-DqtVWbfW.js";import"./TableRow-CGI6DYxn.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
