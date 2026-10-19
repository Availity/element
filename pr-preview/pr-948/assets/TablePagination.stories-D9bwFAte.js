import{r as s,j as e}from"./iframe-V3tbPOwE.js";import{a as t,T as P}from"./TablePagination-BGx6TpPb.js";import{T as l}from"./Table-CWdhDrR7.js";import{T as d}from"./TableRow-DGE-fQ4G.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-D6L9zm9J.js";import"./memoTheme-nYDz4AH7.js";import"./styled-Br8tiGNT.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Cy6DNW7V.js";import"./useSlot-JqPUkt86.js";import"./mergeSlotProps-nXLrBWqI.js";import"./useForkRef-CZXJqfUL.js";import"./KeyboardArrowRight-BPNXWlw0.js";import"./createSvgIcon-CsNTB8qp.js";import"./SvgIcon-DMsEcqNG.js";import"./PaginationItem-Ding65uq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BWZhrEZd.js";import"./useTimeout-BFosHs8Q.js";import"./TransitionGroupContext-BT8MRBaI.js";import"./useEventCallback-BsNvdAGC.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cmdx9brD.js";import"./CircularProgress-1E0UYHmw.js";import"./OutlinedInput-CApj83lO.js";import"./useFormControl-CkUw_ctj.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CkfZme_c.js";import"./List-VEKX0l2J.js";import"./SelectFocusSourceContext-DV7K2vKu.js";import"./useSlotProps-BFQRGr1E.js";import"./Popover-LG3JRuxX.js";import"./Portal-BYLHPY1g.js";import"./useTheme-kNyMIH6i.js";import"./utils-DJcf64yX.js";import"./getReactElementRef-jC5-igXX.js";import"./mergeSlotProps-CnUXTjg3.js";import"./Modal-Bj2PA8Xo.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-lpfDs7Fh.js";import"./Fade-CfqPTD91.js";import"./Paper-CdPhUGdf.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-CrxWULwR.js";import"./useControlled-DU3h8Asb.js";import"./index-DDGGRFDD.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-x4S91aWi.js";import"./index-teMVs_up.js";import"./index-MVgG_W0q.js";import"./index-CheDZIlw.js";import"./Tooltip-BqnFS_Iw.js";import"./Button-DK2TX3S1.js";import"./index-DBjuuRwi.js";import"./Box-CWUEJO1A.js";import"./Grid-Bw-kyyif.js";import"./isMuiElement-Bojr2z3f.js";import"./styled-DaY85gB9.js";import"./Stack-BhI6E9BW.js";import"./Container-DuquqMVo.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CkW7GKiH.js";import"./FormHelperText-DpXYC3GS.js";import"./FormControlLabel-BuiDdDUC.js";import"./Typography-CpNf9PKA.js";import"./Switch-sFLjF5Ad.js";import"./SwitchBase-DJnb3nbp.js";import"./Radio-KNolnd1x.js";import"./RadioGroup-BnROJ1qm.js";import"./FormGroup-BS6CC4_B.js";import"./Divider-CfhIjDdr.js";import"./Table-D1lQ5E0K.js";import"./TableRow-9U1fH5HZ.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
