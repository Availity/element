import{j as e,r as s}from"./iframe-Cb7vw6QO.js";import{a as t,T as P}from"./TablePagination-CPnDfNvd.js";import{T as l}from"./Table-C3gbXrky.js";import{T as d}from"./TableRow-2P0BmvZc.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-dl5Y0br7.js";import"./memoTheme-BhRdBUps.js";import"./styled-Bj0Es0Li.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-Bp9cxDIz.js";import"./useSlot-Bh9EPizr.js";import"./mergeSlotProps-81oQhZWc.js";import"./useForkRef-BNxAHOk3.js";import"./KeyboardArrowRight-hvs2aRME.js";import"./createSvgIcon-Bes_Hs0U.js";import"./SvgIcon-DzlaQllX.js";import"./PaginationItem-BFfZZr9a.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CsQPbkJ1.js";import"./useTimeout-Cz1ClSsL.js";import"./TransitionGroupContext-DGa2MF0H.js";import"./useEventCallback-DhPRnvwe.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CF-wUheM.js";import"./CircularProgress-CDQWW7ND.js";import"./OutlinedInput-DXGq1lSL.js";import"./useFormControl-CTXbndWV.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-BwREORlm.js";import"./List-BZXK3kN1.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-Ic8q8ktd.js";import"./Menu-Bewcal6o.js";import"./useSlotProps-BV7LDA1z.js";import"./Popover-Cnj0-dEv.js";import"./Portal-DJJdN93D.js";import"./useTheme-CGEjvpOB.js";import"./utils-DcOfItOr.js";import"./getReactElementRef-a_8TXcOV.js";import"./mergeSlotProps-BcsNuv71.js";import"./Modal-B43L0UeZ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-4le12T3H.js";import"./Fade-DsAVsIO4.js";import"./Paper-Bx6fwAkb.js";import"./useControlled-DqdtCuR_.js";import"./index-CXcfblB4.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-CJqjqcqS.js";import"./index-CZ4e5IMC.js";import"./index-BiBDMnSv.js";import"./index-BC2dqveQ.js";import"./Tooltip-BsHoCzhf.js";import"./Button-DxhLSeMc.js";import"./index-Cvw4zcDU.js";import"./Box-CNkaSG6M.js";import"./Grid-C2w8BqSX.js";import"./styled-CR8SZlf8.js";import"./isMuiElement-imdvoBqP.js";import"./Stack-CHKpeULE.js";import"./Container-D_bVL9K8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DpGDqrtm.js";import"./FormHelperText-Bt-HOScp.js";import"./FormControlLabel-CxvC5PJ6.js";import"./Typography-DIMxXIFj.js";import"./Switch-Bdgg5hW3.js";import"./SwitchBase-TNKs6tJ6.js";import"./RadioGroup-r3Yri3XM.js";import"./Radio-B6-bkMGE.js";import"./FormGroup-067_YhNq.js";import"./Divider-ByZ0eGkq.js";import"./Table-BBTbrs4X.js";import"./TableRow-B_N3g2-u.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
