import{r as s,j as e}from"./iframe-C4HkdVED.js";import{a as t,T as P}from"./TablePagination-DYdqx-_U.js";import{T as l}from"./Table-BU-LGyaa.js";import{T as d}from"./TableRow-DkC-uNp9.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-BnQ8lwYu.js";import"./memoTheme-BG6Rse2P.js";import"./styled-BT-YQVcS.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-ZQdk9NZt.js";import"./useSlot-BskdyKfe.js";import"./mergeSlotProps-l3M3qA9x.js";import"./useForkRef-DbUR2J1C.js";import"./KeyboardArrowRight-D0s7qMH-.js";import"./createSvgIcon-ZWi4Noed.js";import"./SvgIcon-CzUPI6h_.js";import"./PaginationItem-5YNONNnS.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DSSz5Mb_.js";import"./useTimeout-Dr23bHsI.js";import"./TransitionGroupContext-CZn2k0zL.js";import"./useEventCallback-D9gX9Adj.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DAm3sfm9.js";import"./CircularProgress-ClUyHzUc.js";import"./OutlinedInput-Rbi1tT2Y.js";import"./useFormControl-DBv_L_iF.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-Q3-O-kXG.js";import"./List-t3_9dFMJ.js";import"./SelectFocusSourceContext-De_LaZ5b.js";import"./useSlotProps-zZW6O8Vc.js";import"./Popover-DZCyI0Pz.js";import"./Portal-Dwihqrdb.js";import"./useTheme-B8XrPkIo.js";import"./utils-DTqk_mV5.js";import"./getReactElementRef-BgdKh17h.js";import"./mergeSlotProps-D4zCYtSN.js";import"./Modal-B_rVHOa-.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CPAt_MFQ.js";import"./Fade-JYP9Xa3N.js";import"./Paper-D1x-q-nj.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-BCOcnhN8.js";import"./useControlled-DrH6I0XL.js";import"./index-BbnWHkMi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-yITvinW9.js";import"./index-BNpXJtsj.js";import"./index-MVgG_W0q.js";import"./index-BxZtHMSR.js";import"./Tooltip-Cu6qxs5M.js";import"./Button-Xlv09vPK.js";import"./index-YZkZIPP3.js";import"./Box-zmRcbAMo.js";import"./Grid-BRUvQOfL.js";import"./isMuiElement-DPikhU7x.js";import"./styled-CWQ1NF-T.js";import"./Stack-Rm4Xh7KY.js";import"./Container-c3Xuxmeg.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-C9ntXL4m.js";import"./FormHelperText-CB5Pl2UM.js";import"./FormControlLabel-DqOpCIzX.js";import"./Typography-Da_zx24V.js";import"./Switch-WzSlbu28.js";import"./SwitchBase-A-EsK39V.js";import"./Radio-D4t5oEYc.js";import"./RadioGroup-Crjwdy5J.js";import"./FormGroup-CVvckbGi.js";import"./Divider-DePVDSaH.js";import"./Table-B-csNlcd.js";import"./TableRow-BTUy-vAk.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
