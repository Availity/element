import{r as s,j as e}from"./iframe-BxUHITI1.js";import{a as t,T as P}from"./TablePagination-Jrjpyjsq.js";import{T as l}from"./Table-MWqE2Zng.js";import{T as d}from"./TableRow-DmDrjTqr.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-Bt_opSPk.js";import"./memoTheme-CzoHsl9a.js";import"./styled-CpGjzToy.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CcjO5U0F.js";import"./useSlot-B7qqTYAC.js";import"./mergeSlotProps-MHJ1SX4K.js";import"./useForkRef-lvxB79U5.js";import"./KeyboardArrowRight-BW9Ls5d0.js";import"./createSvgIcon-RiBZe8zy.js";import"./SvgIcon-BZhbNLcx.js";import"./PaginationItem-BU6qng-F.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DsL-5Cn7.js";import"./useTimeout-DAfKtcD8.js";import"./TransitionGroupContext-l3bxEgIQ.js";import"./useEventCallback-C37BR1tG.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-B68upYna.js";import"./CircularProgress-DLAhFeVr.js";import"./OutlinedInput-RCQ8H0A1.js";import"./useFormControl-DBh9raQ6.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-chTOyprh.js";import"./List-DdRjpWGh.js";import"./SelectFocusSourceContext-CdZu0_4c.js";import"./useSlotProps-CkGYMLCU.js";import"./Popover-lMnIH1fd.js";import"./Portal-uHNWHw4F.js";import"./useTheme-D1EEqNP3.js";import"./utils-Bx4IaHxc.js";import"./getReactElementRef-CgE3Obh2.js";import"./mergeSlotProps-BlkVzhTt.js";import"./Modal-CLWW9UYM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D0eWelix.js";import"./Fade-3fp3ueS9.js";import"./Paper-BbjEmRJb.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-Dq8mhllO.js";import"./useControlled-Bgh5sVCP.js";import"./index-D7Z8d6Jb.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-Bbc4edNa.js";import"./index-Yus2I1Ga.js";import"./index-MVgG_W0q.js";import"./index-Cxy_eo2a.js";import"./Tooltip-DZz3XPMm.js";import"./Button-iASAD3CE.js";import"./index-BMhl3l0u.js";import"./Box-dmaYfFtJ.js";import"./Grid-CYb8qmsK.js";import"./isMuiElement-D7EX6TJ1.js";import"./styled-dRg2RBwo.js";import"./Stack-CFpqy-T3.js";import"./Container-CqfIskg6.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DlwqTA7N.js";import"./FormHelperText-D2Y_lV8s.js";import"./FormControlLabel-Ci3_q9uP.js";import"./Typography-BPEZnd-f.js";import"./Switch-CeMAy6L2.js";import"./SwitchBase-C1EzQuwL.js";import"./Radio-C1VCwxsF.js";import"./RadioGroup-DcGjIHPU.js";import"./FormGroup-Cp82ltLG.js";import"./Divider-DI8N_gjR.js";import"./Table-CCq8x76r.js";import"./TableRow-BNyY8V0L.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
