import{r as s,j as e}from"./iframe-CoG_eD6W.js";import{a as t,T as P}from"./TablePagination-CMonEONU.js";import{T as l}from"./Table-DDokiHHk.js";import{T as d}from"./TableRow-D1pL_Xw6.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-00Zeg0vz.js";import"./memoTheme-CN1XLapj.js";import"./styled-CrcATWO9.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DAi4mNA_.js";import"./useSlot-l_cpBHym.js";import"./mergeSlotProps-CuYtKo7e.js";import"./useForkRef-9zYUNwSQ.js";import"./KeyboardArrowRight-BzxlYs8f.js";import"./createSvgIcon-BZPSTfMo.js";import"./SvgIcon-CCNV5-S3.js";import"./PaginationItem-C5dxUJoq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-xOGqtgga.js";import"./useTimeout-q1GWP7GL.js";import"./TransitionGroupContext-DiP32wUd.js";import"./useEventCallback-zH8r8cS3.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DsWpehFA.js";import"./CircularProgress-tDS4AUw-.js";import"./OutlinedInput-CQM4Urfm.js";import"./useFormControl-I9ZHfBzW.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-B5AGltVf.js";import"./List-C5woYmQ0.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-BYaj2ZYw.js";import"./Menu-BbxzJjKs.js";import"./useSlotProps-CIYBUvT1.js";import"./Popover-DzuLIXX2.js";import"./Portal-7VZcAwyN.js";import"./useTheme-DYBUFgS8.js";import"./utils-D_Ss1Qw4.js";import"./getReactElementRef-n9HqNesf.js";import"./mergeSlotProps-o__YjBAq.js";import"./Modal-BuuBhc14.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CNiEEGxX.js";import"./Fade-54RPVvaS.js";import"./Paper-C7UtGvQD.js";import"./useControlled-BVDl1GQq.js";import"./index-BiwFPdxj.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./Pagination-Ctshi6g8.js";import"./index-BE8Ll7Ot.js";import"./index-BiBDMnSv.js";import"./index-BY7cwWhX.js";import"./Tooltip-oLaJghdR.js";import"./Button-DJVoIG0F.js";import"./index-BDyGITPx.js";import"./Box-B04c7Rsy.js";import"./Grid-BeBOjXU7.js";import"./isMuiElement-BhB00eMX.js";import"./styled-BeasdvCJ.js";import"./Stack-BofL0Z-3.js";import"./Container-COr2r_OP.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CTAhp3K4.js";import"./FormHelperText-D9B_EybF.js";import"./FormControlLabel-Dj3okdwu.js";import"./Typography-ByO5UaW_.js";import"./Switch-uWW0_4XR.js";import"./SwitchBase-C-K9jIoH.js";import"./Radio-BZ06ecad.js";import"./RadioGroup-DJI1jOFA.js";import"./FormGroup-h8CX_LB4.js";import"./Divider-buyCaqQp.js";import"./Table-DRKXqABC.js";import"./TableRow-DbJYIJMc.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
