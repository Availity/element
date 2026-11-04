import{r as s,j as e}from"./iframe-igAdvFbl.js";import{a as t,T as P}from"./TablePagination-OXLa0_P6.js";import{T as l}from"./Table-Da4scybt.js";import{T as d}from"./TableRow-ByhEs6jx.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-BOFf7P73.js";import"./memoTheme-CLnB_uxM.js";import"./styled-91ph4J30.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-ExG5GHpI.js";import"./useSlot-DFdPJoU3.js";import"./mergeSlotProps-Cu3OtoH3.js";import"./useForkRef-D-t6gd0T.js";import"./KeyboardArrowRight-DWnNBW63.js";import"./createSvgIcon-D2IPPG_U.js";import"./SvgIcon-Bjb7RMXU.js";import"./PaginationItem-DjiaAhaE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B-BThNWO.js";import"./useTimeout-BVAWMZsv.js";import"./TransitionGroupContext-ymy7tNok.js";import"./useEventCallback-CsTRRlXt.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C_pwG3tG.js";import"./CircularProgress-W3XJwf44.js";import"./OutlinedInput-DZ81owk-.js";import"./useFormControl-Bx8k6zBT.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CdJIxslN.js";import"./List-DTJ1rzY1.js";import"./SelectFocusSourceContext-UC_jDJX5.js";import"./useSlotProps-IKBnSf1M.js";import"./Popover-C5OLrl0l.js";import"./Portal-CXKAB8qb.js";import"./useTheme-CIUac4TP.js";import"./utils-BtrN11DB.js";import"./getReactElementRef-B9sY4O0b.js";import"./mergeSlotProps-DAotqHD5.js";import"./Modal-Xx_DAuxP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-ML0QiAd8.js";import"./Fade-D_O_c1g4.js";import"./Paper-ClVD0o31.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-BnEKPMqA.js";import"./useControlled-CFxyCb-W.js";import"./index-LwuFN9gm.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-zcyvyDxB.js";import"./index-cJoCX_EQ.js";import"./index-MVgG_W0q.js";import"./index-C0-lL2nR.js";import"./Tooltip-Cq44iNEt.js";import"./Button-Cul-JvC2.js";import"./index-z9cH4Dkd.js";import"./Box-BVxISqTJ.js";import"./Grid-DZVhVXMq.js";import"./isMuiElement-BIGdb7v5.js";import"./styled-Ai7RJ0M0.js";import"./Stack-BIYUXFFU.js";import"./Container-DJJd4hOz.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CGkPHvag.js";import"./FormHelperText-CqbyILKB.js";import"./FormControlLabel-Cr28FXxz.js";import"./Typography-D8sokpBT.js";import"./Switch-CzqwvcGs.js";import"./SwitchBase-D9KptgKZ.js";import"./Radio-DqBogu0I.js";import"./RadioGroup-BxHvvyZy.js";import"./FormGroup-C9xaqCDH.js";import"./Divider-DUumJmmu.js";import"./Table-BDBL9n6D.js";import"./TableRow-BuQFijBS.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
