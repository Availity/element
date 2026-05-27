import{r as s,j as e}from"./iframe-BAio8bRO.js";import{a as t,T as P}from"./TablePagination-EFWrwjP6.js";import{T as l}from"./Table-Dy8zAVIs.js";import{T as d}from"./TableRow-BYn04YFM.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-MAwDmJmj.js";import"./memoTheme-B5Zw--p6.js";import"./styled-BVlyzXC0.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DxHIvi-G.js";import"./useSlot-BVjxSlY9.js";import"./mergeSlotProps-CmGkLNGM.js";import"./useForkRef-DNDPTA8R.js";import"./KeyboardArrowRight-4pCxmP0N.js";import"./createSvgIcon-BHdN4xjz.js";import"./SvgIcon-tye3QKHe.js";import"./PaginationItem-CAo0TNpY.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Ae9hTywr.js";import"./useTimeout-BkgJttAJ.js";import"./TransitionGroupContext-DZhFA06X.js";import"./useEventCallback-9-WTFaLk.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cgj-zrzq.js";import"./CircularProgress-DwO4_zrq.js";import"./OutlinedInput-BRrwvmjS.js";import"./useFormControl-DkRYiQSC.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DPxDkcAS.js";import"./List-BfAeB2nv.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-CgPW8wBS.js";import"./Menu-CNZsUiwy.js";import"./useSlotProps-CFXUmX-_.js";import"./Popover-DwmwO2CA.js";import"./Portal-DtZMvnVy.js";import"./useTheme-BlST_Otk.js";import"./utils-LXi-Tlok.js";import"./getReactElementRef-C8WT4AXt.js";import"./mergeSlotProps-CA_Fws6O.js";import"./Modal-Cb932oqz.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DUEOgCON.js";import"./Fade-D__YuxCd.js";import"./Paper-DW5lDWun.js";import"./useControlled-BkSKTHhF.js";import"./index-D6CmWoDY.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./Pagination-DWFdCzys.js";import"./index-yxUFkiba.js";import"./index-BiBDMnSv.js";import"./index-Cu3Q3wdb.js";import"./Tooltip-hIKEgUI5.js";import"./Button-CfkShIuN.js";import"./index-q0NfFQ9-.js";import"./Box-D9uuWVv-.js";import"./Grid-t7gGqywk.js";import"./isMuiElement-AydbSc-U.js";import"./styled-EJoH7QSk.js";import"./Stack-bN5r8_lU.js";import"./Container-CV_lDoo_.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DzJu46U9.js";import"./FormHelperText-DXCvGRLv.js";import"./FormControlLabel-BTqQRKxw.js";import"./Typography-BPUxSRI8.js";import"./Switch-b6dmdWoZ.js";import"./SwitchBase-C_i35j5v.js";import"./Radio-99FOiw6S.js";import"./RadioGroup-BcF4x91b.js";import"./FormGroup-DD4jPXUp.js";import"./Divider-CSqQtEDI.js";import"./Table-Bb8CjRUD.js";import"./TableRow-DfoqtIYR.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
