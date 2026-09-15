import{r as s,j as e}from"./iframe-BOySubGY.js";import{a as t,T as P}from"./TablePagination-DT7dQ_UI.js";import{T as l}from"./Table-B7pPDy_i.js";import{T as d}from"./TableRow-D3KEYxwx.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-DRSzAfwo.js";import"./memoTheme-C-oySTID.js";import"./styled-XjKTZ5Ba.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-HJP8xu3D.js";import"./useSlot-BgdUY7vI.js";import"./mergeSlotProps-A5qFZlFu.js";import"./useForkRef-BEcBTcWu.js";import"./KeyboardArrowRight-7OaIk8rF.js";import"./createSvgIcon-CNdKwBrG.js";import"./SvgIcon-DZLHpFL-.js";import"./PaginationItem-BZZ7iZsi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CriPZSS7.js";import"./useTimeout-D7rfSJNw.js";import"./TransitionGroupContext-DX1Xmw-6.js";import"./useEventCallback-De91DTs8.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D23BvDdt.js";import"./CircularProgress-B5gdOPr_.js";import"./OutlinedInput-BwuDTIYn.js";import"./useFormControl-D_4giGBh.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-noTvYDxh.js";import"./List-DWj6PFWF.js";import"./SelectFocusSourceContext-NsTTN5Ry.js";import"./useSlotProps-CORZ0NF7.js";import"./Popover-DvcJ8O_V.js";import"./Portal-Bk70ZbQ1.js";import"./useTheme-BZyZpBhU.js";import"./utils-MRT_IXkN.js";import"./getReactElementRef-ekrhOioo.js";import"./mergeSlotProps-CosNNS-j.js";import"./Modal-JO3U43CI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-wymMCVv9.js";import"./Fade-MtnpW3KP.js";import"./Paper-DK-wycZj.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-DNKWmaXz.js";import"./useControlled-ZCAGuxBe.js";import"./index-Axa3knvz.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-B_Z0JW8_.js";import"./index-EOKAY7fx.js";import"./index-CrcoPoGw.js";import"./index-dHFlkqLk.js";import"./Tooltip-CVYQnSxv.js";import"./Button-DWb-ONsW.js";import"./index-BY15XDHL.js";import"./Box-C0cMPqSK.js";import"./Grid-CxzBT5ej.js";import"./isMuiElement-BscQb9Cz.js";import"./styled-B4Xqzm8j.js";import"./Stack-CvrbJzig.js";import"./Container-C4UOiudT.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Crev6sHt.js";import"./FormHelperText-Br3yPV4I.js";import"./FormControlLabel-BN3VyYGk.js";import"./Typography-SY2Ud8Z5.js";import"./Switch-B1ncU5jj.js";import"./SwitchBase-DttprOgY.js";import"./Radio-D60xP-8b.js";import"./RadioGroup-HDv0R8RF.js";import"./FormGroup-CtfESWxW.js";import"./Divider-BLCYt0Sf.js";import"./Table-DDYhikiF.js";import"./TableRow-B-PaV1Km.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
