import{r as s,j as e}from"./iframe-DUa_E2nK.js";import{a as t,T as P}from"./TablePagination-DTNdl220.js";import{T as l}from"./Table-CfX5lskR.js";import{T as d}from"./TableRow-DV8E5-tD.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CmYIWBq_.js";import"./memoTheme-Bo6NThYL.js";import"./styled-D3Muh4M2.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DsDqAkgc.js";import"./useSlot-DlELlrwU.js";import"./mergeSlotProps-CEo301sU.js";import"./useForkRef-CxpHUqnO.js";import"./KeyboardArrowRight-NPJCzEL-.js";import"./createSvgIcon-BrmPcgFj.js";import"./SvgIcon-BewdDvzO.js";import"./PaginationItem-Da4dNt6K.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Bug9d4_R.js";import"./useTimeout-CVWqITqM.js";import"./TransitionGroupContext-CaPdAk9s.js";import"./useEventCallback-BMK6R2Pt.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BifEyGUq.js";import"./CircularProgress-Bzposo0O.js";import"./OutlinedInput-CFR5oBwr.js";import"./useFormControl-S2Jix1K5.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-BUuxRVA2.js";import"./List-BU73CZkQ.js";import"./SelectFocusSourceContext-C1yv2uKz.js";import"./useSlotProps-Cc5Sw607.js";import"./Popover-rBOqpwbc.js";import"./Portal-DK6E0QaG.js";import"./useTheme-D2wrQY5U.js";import"./utils-9zA4k4wE.js";import"./getReactElementRef-ReUsDlEE.js";import"./mergeSlotProps-BWiww6C5.js";import"./Modal-BWDZ2XAH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D1fLbtuP.js";import"./Fade-BulH4fWG.js";import"./Paper-BFFGqGxw.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-ElUVnloi.js";import"./useControlled-mPNvpXlD.js";import"./index-BevA4mtD.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-Bqn-AmGr.js";import"./index-BU1mb21Z.js";import"./index-MVgG_W0q.js";import"./index-CS_NebII.js";import"./Tooltip-Bq-dRAZk.js";import"./Button-CbV8DhMK.js";import"./index-CpWANY3x.js";import"./Box-BO8RQHnM.js";import"./Grid-BjkaeTm4.js";import"./isMuiElement-CAErNZ9l.js";import"./styled-DfLAYXD9.js";import"./Stack-BXnO2vhe.js";import"./Container-D09iA6_m.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CpBzcOsS.js";import"./FormHelperText-D9BA1QML.js";import"./FormControlLabel-BWd96Wzk.js";import"./Typography-BemmhR83.js";import"./Switch-CKOovF9u.js";import"./SwitchBase-Cbi-g6KU.js";import"./Radio-BjnBtCnE.js";import"./RadioGroup-GuTuFZPa.js";import"./FormGroup-BvSMqjlq.js";import"./Divider-C3QA1lO4.js";import"./Table-DYA7VkmX.js";import"./TableRow-DyXzlIHq.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
