import{j as e,r as s}from"./iframe-B15MwHjc.js";import{a as t,T as P}from"./TablePagination-th5FEEti.js";import{T as l}from"./Table-Bly0deol.js";import{T as d}from"./TableRow-B_vSgtc_.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-ayg63IGL.js";import"./memoTheme-D5o8CaBh.js";import"./styled-Dsm9_3nR.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-BlNuxGKJ.js";import"./useSlot-CSAMaxgS.js";import"./mergeSlotProps-CdThJ-3P.js";import"./useForkRef-DuY6SZZx.js";import"./KeyboardArrowRight-1jfSkl8y.js";import"./createSvgIcon-Zx_tmbTm.js";import"./SvgIcon-B05McAjj.js";import"./PaginationItem-Dw58hSm2.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CE7Ewp3a.js";import"./useTimeout-Cm6ZfeQK.js";import"./TransitionGroupContext-C0L_he2M.js";import"./useEventCallback-37O-Z23c.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DjrXNLZD.js";import"./CircularProgress-CW5OewJC.js";import"./OutlinedInput-BMlXZ3gW.js";import"./useFormControl-DbxR-Wox.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-Cw8yyEgi.js";import"./List-CmAbVLaT.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-DXNTvSPv.js";import"./Menu-B2wOm28Q.js";import"./useSlotProps-CHKxwTOr.js";import"./Popover-CyCNIteo.js";import"./Portal-BtkHLfcV.js";import"./useTheme-DNjXucVs.js";import"./utils-Cl7K9KPr.js";import"./getReactElementRef-GzGc3gHa.js";import"./mergeSlotProps-DHmKZad7.js";import"./Modal-DdeK4hRP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CWbXueS0.js";import"./Fade-C0vOm-43.js";import"./Paper-Ci8Atnw6.js";import"./useControlled-DMX50sqj.js";import"./index-B-JYDf49.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Pagination-C5SK7ZjF.js";import"./index-BjT6B4tx.js";import"./index-BiBDMnSv.js";import"./index-C1-wXq3o.js";import"./Tooltip-Cn8xYtbM.js";import"./Button-BsXdLE5f.js";import"./index-DxM9B309.js";import"./Box-YSmorlov.js";import"./Grid-Dy4g6prj.js";import"./styled-C2cPqIG3.js";import"./isMuiElement-DJZ5QjLd.js";import"./Stack-D0GxJWIp.js";import"./Container-BF4wPU8W.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DRfWx8jo.js";import"./FormHelperText-CDhxewv3.js";import"./FormControlLabel-DYkHjabZ.js";import"./Typography-DGTJIKj9.js";import"./Switch-B2hQpGai.js";import"./SwitchBase-BFuCmFIk.js";import"./RadioGroup-CqvOxW_2.js";import"./Radio-dFCAzPut.js";import"./FormGroup-CDeCnKJo.js";import"./Divider-fv3xKdt2.js";import"./Table-7FDmCD84.js";import"./TableRow-BUMmoIy6.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
