import{j as e,r as s}from"./iframe-CsWHXpAl.js";import{a as t,T as P}from"./TablePagination-D4IW-FFh.js";import{T as l}from"./Table-FdjFMJDl.js";import{T as d}from"./TableRow-JqBZd2EX.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-DmXTUX2b.js";import"./memoTheme-D1WvXAYX.js";import"./styled-7ngSg1XE.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-CXGc2Y_6.js";import"./useSlot-C4woaFwW.js";import"./mergeSlotProps-BavqdjkP.js";import"./useForkRef-C-HgPgYg.js";import"./KeyboardArrowRight-CTMRC9ms.js";import"./createSvgIcon-vjDmBDLj.js";import"./SvgIcon-rO9Zrjko.js";import"./PaginationItem-CCZeq4uC.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Bidr6pNA.js";import"./useTimeout-MBLSaU9x.js";import"./TransitionGroupContext-C2wcbRoz.js";import"./useEventCallback-ByFiieHy.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BElkJFHg.js";import"./CircularProgress-DpaflDra.js";import"./OutlinedInput-BC0zMwA1.js";import"./useFormControl-C7imt2Hm.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-D2hb5sIN.js";import"./List-B6sbHI_t.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-BSaniiJT.js";import"./Menu-B1BH_CE7.js";import"./useSlotProps-DAB-O9r_.js";import"./Popover-DZmHDLDj.js";import"./Portal-BnhBoGVi.js";import"./useTheme-p1ELRF_q.js";import"./utils-DGzkDCaD.js";import"./getReactElementRef-U9GKYTTT.js";import"./mergeSlotProps-DtxOh3xS.js";import"./Modal-xpXfJVrF.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DunYOkpv.js";import"./Fade-CyNrIrid.js";import"./Paper-CRnRfyjj.js";import"./useControlled-D3FoPl0A.js";import"./index-CAQ8YrHX.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Pagination-BuSq59Li.js";import"./index-DtMpmsGA.js";import"./index-BiBDMnSv.js";import"./index-vavqp1NI.js";import"./Tooltip-Bng6bCNf.js";import"./Button-CA2GH-94.js";import"./index-D6jmlPGV.js";import"./Box-D0gDoyzH.js";import"./Grid-ht3QhPkQ.js";import"./styled-DAuJ6HDN.js";import"./isMuiElement-Bn1OwKtz.js";import"./Stack-Cd9e6_04.js";import"./Container-B-ZE-anm.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Bq2nsaK6.js";import"./FormHelperText-JfQUw7jj.js";import"./FormControlLabel-66sIfP2p.js";import"./Typography-BPpHVaiZ.js";import"./Switch-XyUWMXtR.js";import"./SwitchBase-C8WEOYdn.js";import"./RadioGroup-cucNTYda.js";import"./Radio-DFc5QvIb.js";import"./FormGroup-mpFcmi4u.js";import"./Divider-fQ4alnU8.js";import"./Table-Cy8Sj01j.js";import"./TableRow-DoPEADTp.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
