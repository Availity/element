import{r as s,j as e}from"./iframe-Cl61WGkI.js";import{a as t,T as P}from"./TablePagination-BERQ3y8r.js";import{T as l}from"./Table-BXRghPNs.js";import{T as d}from"./TableRow-CSMn4pxp.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-DTboJaJG.js";import"./memoTheme-Bl50oicv.js";import"./styled-BC98FWsK.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CGxWC_qt.js";import"./useSlot-BNKzCfYO.js";import"./mergeSlotProps-oCe6X0UM.js";import"./useForkRef-BgBNpKdE.js";import"./KeyboardArrowRight-CxBcN3pg.js";import"./createSvgIcon-C9mzZA9x.js";import"./SvgIcon-Dwb1J2d-.js";import"./PaginationItem-Cl0g71NS.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-q-jaW3RD.js";import"./useTimeout-DRIZehDr.js";import"./TransitionGroupContext-DF5xYsKa.js";import"./useEventCallback-04OY0OEQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-q11oqdUa.js";import"./CircularProgress-Bq8oVM2O.js";import"./OutlinedInput-ClvlI1xc.js";import"./useFormControl-D2EIO9e7.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DGSVMmOa.js";import"./List-BAGNgyyd.js";import"./SelectFocusSourceContext-CAKJeAkQ.js";import"./useSlotProps-BwXPHno3.js";import"./Popover-Du9tN1-X.js";import"./Portal-CKqV7NOt.js";import"./useTheme-IfO6Fwpt.js";import"./utils-BISW7tPB.js";import"./getReactElementRef-C7aNrngo.js";import"./mergeSlotProps-ZgLDWHqg.js";import"./Modal-B_tt91Mu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-C_s6yW8r.js";import"./Fade-sz48bo3z.js";import"./Paper-DdNx7n5g.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-Cn1KxIPd.js";import"./useControlled-Df0GFCpG.js";import"./index-CmI2eh32.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-uH-rKXav.js";import"./index-DjWqBCXk.js";import"./index-CrcoPoGw.js";import"./index-CqgX4Pjw.js";import"./Tooltip-BWDly8di.js";import"./Button-DuB2O4vc.js";import"./index-D0cf1ol3.js";import"./Box-BylFce9S.js";import"./Grid-CY38bvtz.js";import"./isMuiElement-Cx1dzcL4.js";import"./styled-DUX11FjB.js";import"./Stack-DbcIcCvU.js";import"./Container-CQCkLV4U.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BSv5oG3S.js";import"./FormHelperText-C194FQMi.js";import"./FormControlLabel-DjUlFFqe.js";import"./Typography-BbUycIDS.js";import"./Switch-BDf-0e9Z.js";import"./SwitchBase-BclwBU3W.js";import"./Radio-CgniSRaf.js";import"./RadioGroup-DT7A7289.js";import"./FormGroup-NS8rU_fN.js";import"./Divider-DDnoJtKN.js";import"./Table-CYczuwbL.js";import"./TableRow-DnaNdUrh.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
