import{j as e,r as s}from"./iframe-PQChuD5P.js";import{a as t,T as P}from"./TablePagination-Bf4B4kV6.js";import{T as l}from"./Table-BUQb8mZZ.js";import{T as d}from"./TableRow-CFb3WKp_.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CXhJB-3k.js";import"./memoTheme-CVvKr3an.js";import"./styled-IO14y-za.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-CUSE1Pui.js";import"./useSlot-Budp5-i0.js";import"./mergeSlotProps-D2tsKCVf.js";import"./useForkRef-CKG9IprU.js";import"./KeyboardArrowRight-G2gq4vT-.js";import"./createSvgIcon-DUCTV8Uh.js";import"./SvgIcon-Ct-k9MaL.js";import"./PaginationItem-CWfSVdPV.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DrAbzSCI.js";import"./useTimeout-CrdRO3z-.js";import"./TransitionGroupContext-4uG2Mcc_.js";import"./useEventCallback-CVuBVoUk.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-uRCWfHSj.js";import"./CircularProgress-C9w8hYD6.js";import"./OutlinedInput-D5_x8OFb.js";import"./useFormControl-CbIOiaJO.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DVtKGjx9.js";import"./List-DWc9uyQQ.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-bU8x50qw.js";import"./Menu-BolQPLJ0.js";import"./useSlotProps-NXvv48zc.js";import"./Popover-DekC-QM6.js";import"./Portal-CcwI5hbz.js";import"./useTheme-D_lM5llQ.js";import"./utils-Bn3set7p.js";import"./getReactElementRef-CkDqfdPm.js";import"./mergeSlotProps-Cm7mpwkx.js";import"./Modal-iRzmQDx3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DtcvWdU4.js";import"./Fade-BKGIBsen.js";import"./Paper-DzmRSJAJ.js";import"./useControlled-DL9Iut2g.js";import"./index-B-1E6jc-.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Pagination-Ctu47PnB.js";import"./index-BWhceLOE.js";import"./index-BiBDMnSv.js";import"./index-CPbMBP85.js";import"./Tooltip-D_0sM1X3.js";import"./Button-J7D5oBem.js";import"./index-CWw8B1ja.js";import"./Box-DSvqrQJU.js";import"./Grid-DbL14Ouo.js";import"./styled-C9qQOw_O.js";import"./isMuiElement-BKekQHvL.js";import"./Stack-DzAEF9zt.js";import"./Container-BWtWb0u_.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-GejnCESN.js";import"./FormHelperText-Cawj5hZz.js";import"./FormControlLabel-CxBE5Rqn.js";import"./Typography-C-i-WVAF.js";import"./Switch-N2p4b12b.js";import"./SwitchBase-kj6FUEij.js";import"./RadioGroup-CkrIdeCa.js";import"./Radio-DDAK31Zp.js";import"./FormGroup-DzcaZvEX.js";import"./Divider-DaI22C2v.js";import"./Table-CW31eKPx.js";import"./TableRow-BLAuWIb5.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
