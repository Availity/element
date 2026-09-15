import{r as s,j as e}from"./iframe-CwO-jD2r.js";import{a as t,T as P}from"./TablePagination-Cm-f2_it.js";import{T as l}from"./Table-yPMu19qb.js";import{T as d}from"./TableRow-CMzn4k8k.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-BA2gVZGP.js";import"./memoTheme-BFKi1h0L.js";import"./styled-oLigdm2H.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-D41nJ23K.js";import"./useSlot-H46dGhkF.js";import"./mergeSlotProps-BwWI2lDY.js";import"./useForkRef-C_Onx5Be.js";import"./KeyboardArrowRight-CrqE4MAC.js";import"./createSvgIcon-s4imERVo.js";import"./SvgIcon-DVo5jYj3.js";import"./PaginationItem-BZbUr33X.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CG4pUtur.js";import"./useTimeout-fSFkMMHB.js";import"./TransitionGroupContext-B7p21pCQ.js";import"./useEventCallback-DAOE043T.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-6AH5JngU.js";import"./CircularProgress-BJ26xdy5.js";import"./OutlinedInput-ClLFrf98.js";import"./useFormControl-CiqVAws-.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CgX7Nk_7.js";import"./List-C1oZuEzd.js";import"./SelectFocusSourceContext-CyLTWWv_.js";import"./useSlotProps-CxdF0UKw.js";import"./Popover-B5g1qt2p.js";import"./Portal-Bdc5oVT9.js";import"./useTheme-COk7r_Ee.js";import"./utils-4BcLErhI.js";import"./getReactElementRef-BccMI9lA.js";import"./mergeSlotProps-BuhqGTB0.js";import"./Modal-pR2rfcmc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CkQmcNu2.js";import"./Fade-BMJzwZSG.js";import"./Paper-4GVPiycN.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-DpBSTnvT.js";import"./useControlled-D7MGwIra.js";import"./index-BN6UcWAE.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-Bz6FHnoa.js";import"./index-BA97GnXb.js";import"./index-CrcoPoGw.js";import"./index-CNETp13n.js";import"./Tooltip-DWOWlEqB.js";import"./Button-BLrfDWuG.js";import"./index-DDnCuFzs.js";import"./Box-aCkC6O_c.js";import"./Grid-BLIKAx1P.js";import"./isMuiElement-DiCrCwGT.js";import"./styled-CUc8450O.js";import"./Stack-CHmf-yYC.js";import"./Container-BPLOD5On.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BVvcn0pm.js";import"./FormHelperText-BOeTOdIO.js";import"./FormControlLabel-C2jYLJgd.js";import"./Typography-BF7hwO0t.js";import"./Switch-B9atGEQZ.js";import"./SwitchBase-Bpbf_DGL.js";import"./Radio-Dge-NWMw.js";import"./RadioGroup-Bs8Dm3MU.js";import"./FormGroup-CQLSU16C.js";import"./Divider-BSXm1Pap.js";import"./Table-BhlntBAl.js";import"./TableRow-orJ63LO0.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
