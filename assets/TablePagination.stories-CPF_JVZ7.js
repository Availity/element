import{r as s,j as e}from"./iframe-DM2JG2Wv.js";import{a as t,T as P}from"./TablePagination-x_55DoSk.js";import{T as l}from"./Table-B6EKrhn9.js";import{T as d}from"./TableRow-_bVj7WkB.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-taPEobjX.js";import"./memoTheme-BeNhxrAF.js";import"./styled-DsG-VtUm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-C4JLbWtR.js";import"./useSlot-CtcofBwJ.js";import"./mergeSlotProps-Dz0ZGrQB.js";import"./useForkRef--lBTfT4q.js";import"./KeyboardArrowRight-DZxbWge-.js";import"./createSvgIcon-CxStVnnE.js";import"./SvgIcon-C29JSttG.js";import"./PaginationItem-C6P35hSh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-FpBSGXSw.js";import"./useTimeout-DDDxsICF.js";import"./TransitionGroupContext-BViK_5QW.js";import"./useEventCallback-B8_sGVJg.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Bj7e_4ur.js";import"./CircularProgress-D7bBmSyx.js";import"./OutlinedInput-BVhxzUTD.js";import"./useFormControl-BOyQprAg.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CyST2nUS.js";import"./List-lGfDTeyH.js";import"./SelectFocusSourceContext-DI2xIgZx.js";import"./useSlotProps-6BpQXPqS.js";import"./Popover-LlYF3w6K.js";import"./Portal-DFUf67sY.js";import"./useTheme-BIdTJdU8.js";import"./utils-B1H1HspZ.js";import"./getReactElementRef-gsi1wQpy.js";import"./mergeSlotProps-gJlJxAuh.js";import"./Modal-Bpysy-qr.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Ba2TkHwg.js";import"./Fade-Bb7aty5O.js";import"./Paper-D6rGRseY.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-CUSrbkCV.js";import"./useControlled-4UyvroS3.js";import"./index-DV4r8BJd.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-CAdc3csH.js";import"./index-D0QEA918.js";import"./index-MVgG_W0q.js";import"./index-DQYiNEqx.js";import"./Tooltip-Ff-XGBQt.js";import"./Button-p88YkSSM.js";import"./index-Dro33RKh.js";import"./Box-Cqyd88nw.js";import"./Grid-CX1e7vz2.js";import"./isMuiElement-B6N371AV.js";import"./styled-Bf965zM_.js";import"./Stack-D8O8MXVX.js";import"./Container-I8b0yq_j.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DlqYcycJ.js";import"./FormHelperText-DmHrS-f2.js";import"./FormControlLabel-CgZbLNmr.js";import"./Typography-Cb49bwUU.js";import"./Switch-Uj5KOIHe.js";import"./SwitchBase-DE3M2Edh.js";import"./Radio-BvqRFW_F.js";import"./RadioGroup-Dp4TasKT.js";import"./FormGroup-B-vHGHwY.js";import"./Divider-FKTpnAgL.js";import"./Table-DP6RaJZx.js";import"./TableRow-ChFRCOe2.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
