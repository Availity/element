import{r as s,j as e}from"./iframe-La0hozmm.js";import{a as t,T as P}from"./TablePagination-CtatDx35.js";import{T as l}from"./Table-DVjV_KeM.js";import{T as d}from"./TableRow-B4AkfyKF.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-Ct9q3r58.js";import"./memoTheme-CzcgztNR.js";import"./styled-06PLk0qx.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-MtFBV_eT.js";import"./useSlot-nKi4u3tI.js";import"./mergeSlotProps-CfiUOF2K.js";import"./useForkRef-CYgSXLxN.js";import"./KeyboardArrowRight-CjNwYM4D.js";import"./createSvgIcon-CogVIOis.js";import"./SvgIcon-BIfisKmW.js";import"./PaginationItem-DIFc-Fvm.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-RNjBI3PY.js";import"./useTimeout-CjP9kdgI.js";import"./TransitionGroupContext-Db3Z6NMb.js";import"./useEventCallback-CkMNQS0_.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BEf7IA6l.js";import"./CircularProgress-DKXLIFka.js";import"./OutlinedInput-CTfBg3Vp.js";import"./useFormControl-ClnyVQ0Y.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-BtKUyM4C.js";import"./List-B0CpRJrl.js";import"./SelectFocusSourceContext-BppuX2PY.js";import"./useSlotProps-o4xrbGrj.js";import"./Popover-CV1jitSE.js";import"./Portal-QPUTbchU.js";import"./useTheme-D5kgDNuB.js";import"./utils-C_Yf081A.js";import"./getReactElementRef-TIeMXNsW.js";import"./mergeSlotProps-BDDINM1D.js";import"./Modal-lk5DA8tl.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BHVJATGi.js";import"./Fade-DsXUXhXd.js";import"./Paper-BvBPQPSI.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-DTVzxWrU.js";import"./useControlled-DV2EMPBp.js";import"./index-D89vBAiO.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-BPml7alx.js";import"./index-L9cyz4q_.js";import"./index-MVgG_W0q.js";import"./index-CT5mpeGo.js";import"./Tooltip-DDgYhS1x.js";import"./Button-x0oW_Zme.js";import"./index-eHZf6pHN.js";import"./Box-B4jhZySH.js";import"./Grid-DTxUT0NX.js";import"./isMuiElement-VxhL7QTS.js";import"./styled-99JPjMFe.js";import"./Stack-COfd3H0w.js";import"./Container-Bl6cg8Xd.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-YrmrWU_k.js";import"./FormHelperText-Bk8ZiDzG.js";import"./FormControlLabel-BuAbVyu2.js";import"./Typography-F8uVoBR9.js";import"./Switch-Dn7ksyeq.js";import"./SwitchBase-BXj3k-eu.js";import"./Radio-DrT8Tsp3.js";import"./RadioGroup-B9XhnsTM.js";import"./FormGroup-BFP8PGgB.js";import"./Divider-BdcGsQEp.js";import"./Table-UThLkLPp.js";import"./TableRow-BSbwiryD.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
