import{j as e,r as s}from"./iframe-DTpfCdTP.js";import{a as t,T as P}from"./TablePagination-DPZuyDYV.js";import{T as l}from"./Table-BvRoSRqg.js";import{T as d}from"./TableRow-C1vRykFO.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-B0-QlSn1.js";import"./memoTheme-D8G-akul.js";import"./styled-JKD3wrB9.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-CJf6GT-2.js";import"./useSlot-h1Ycty7Q.js";import"./mergeSlotProps-BJk609iI.js";import"./useForkRef-Dez1FBmj.js";import"./KeyboardArrowRight-D2OAFii4.js";import"./createSvgIcon-DXGDQ1gJ.js";import"./SvgIcon-CZ5jOsa4.js";import"./PaginationItem-POod3huz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-TqCu7TYl.js";import"./useTimeout-BG483csS.js";import"./TransitionGroupContext-DugTcswx.js";import"./useEventCallback-5DZSu_H1.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C1za8a59.js";import"./CircularProgress-eXewDO5k.js";import"./OutlinedInput-CVj7dZL7.js";import"./useFormControl-CbIMQ9id.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CVpIvfto.js";import"./List-CSqXqE4r.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-CjtdDW9Z.js";import"./Menu-B1D499Ps.js";import"./useSlotProps-BBfgcS2b.js";import"./Popover-5DZ_M0nb.js";import"./Portal-Ghvglbwf.js";import"./useTheme-jT65VjN1.js";import"./utils-vs6bWRab.js";import"./getReactElementRef-Bdxo8MI5.js";import"./mergeSlotProps-Cw1mNVtR.js";import"./Modal-8tunU-lf.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BvhACw8B.js";import"./Fade-D9Ctmrdo.js";import"./Paper-Dn1utG1r.js";import"./useControlled-BQlebmQ3.js";import"./index-DFihowQv.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-BM97_ZkP.js";import"./index-Bu3ZJce-.js";import"./index-BiBDMnSv.js";import"./index-q1MxSMZt.js";import"./Tooltip-uiVSuhLb.js";import"./Button-CuRegif2.js";import"./index-BdlJaXZ1.js";import"./Box-DTAenaTM.js";import"./Grid-cSi6T3Qn.js";import"./styled-TJsrHN39.js";import"./isMuiElement-DL6gjngF.js";import"./Stack-Dc_aLgSc.js";import"./Container-BggHV1YK.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BGFTL5Tj.js";import"./FormHelperText-BjaQkS1m.js";import"./FormControlLabel-B9oEtMCF.js";import"./Typography-OfK4w6vl.js";import"./Switch-DD597uwN.js";import"./SwitchBase-Co9W6Shr.js";import"./RadioGroup-DYBhXyJ1.js";import"./Radio-N8vNuqKF.js";import"./FormGroup-BymkvjC5.js";import"./Divider-BCluY1w_.js";import"./Table-ldj3uSF_.js";import"./TableRow-CrjEVRQH.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
