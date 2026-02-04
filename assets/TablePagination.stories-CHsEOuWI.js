import{j as e,r as s}from"./iframe-BjnuDffd.js";import{a as t,T as P}from"./TablePagination-CeABPsnD.js";import{T as l}from"./Table-C7nLg2or.js";import{T as d}from"./TableRow-CnjYT95o.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CowgCprK.js";import"./memoTheme-B2JdP5Lg.js";import"./styled-DqMp1nYt.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-BldaycFQ.js";import"./useSlot-jAOnMiB5.js";import"./mergeSlotProps-ShRnscjH.js";import"./useForkRef-DH1owG2H.js";import"./KeyboardArrowRight-DO9uv2MS.js";import"./createSvgIcon-mv4Pxh2n.js";import"./SvgIcon-CargZ35d.js";import"./PaginationItem-C94rKwXf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B91JQX2j.js";import"./useTimeout-C6wFpPob.js";import"./TransitionGroupContext-CjQYVfWF.js";import"./useEventCallback-C7vIb1Zh.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CTKwlcpD.js";import"./CircularProgress-2p5PvuKn.js";import"./OutlinedInput-DF2vQFYi.js";import"./useFormControl-CIls3zi9.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-BqEvZF4h.js";import"./List-CTB2KJ36.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-CqSNJN5R.js";import"./Menu-CkKwmLfC.js";import"./useSlotProps-BCOe5sCp.js";import"./Popover-CoUD2O0H.js";import"./Portal-BeYOOpZP.js";import"./useTheme-C7UHXn64.js";import"./utils-BWRWa3IK.js";import"./getReactElementRef-Cj7TLjNv.js";import"./mergeSlotProps-4WC3aA8E.js";import"./Modal-Dw-6s7kU.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CJ9OS4uV.js";import"./Fade-C3ie0yGC.js";import"./Paper-rd8sC7yH.js";import"./useControlled-BK8V1AI9.js";import"./index-BPcsFkr_.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-D0_aWzlr.js";import"./index-svg4hkeJ.js";import"./index-BiBDMnSv.js";import"./index-ozQD-jv-.js";import"./Tooltip-DY2U7J0u.js";import"./Button-Z3VsI-jq.js";import"./index-CqZiq0s6.js";import"./Box-BZu1WY8a.js";import"./Grid-B7_6AdGR.js";import"./styled-BuSaaTq2.js";import"./isMuiElement-CRA1aQWB.js";import"./Stack-2ZpK9jn9.js";import"./Container-DjmD-ytY.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-gNuCHhVS.js";import"./FormHelperText-CtgE_BPS.js";import"./FormControlLabel-CsqIcyf0.js";import"./Typography-fWFZNgKP.js";import"./Switch-Dn3O0b_X.js";import"./SwitchBase-BeqnuivA.js";import"./RadioGroup-BkZEZI9I.js";import"./Radio-D5EV174V.js";import"./FormGroup-BpUqtGY1.js";import"./Divider-Dn0pR-KW.js";import"./Table-CdoTbnSn.js";import"./TableRow-D2zC5YVD.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
