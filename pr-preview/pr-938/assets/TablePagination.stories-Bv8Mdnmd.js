import{r as s,j as e}from"./iframe-pcBkreyF.js";import{a as t,T as P}from"./TablePagination-DG-Aj0z3.js";import{T as l}from"./Table-BaGVEu3k.js";import{T as d}from"./TableRow-sWbky4KF.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CMyUWkNh.js";import"./memoTheme-BGzSgD4T.js";import"./styled-DhfgW05P.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Cw3Ymn-V.js";import"./useSlot-Nge6-EMU.js";import"./mergeSlotProps-sZF9W67M.js";import"./useForkRef-D6t7VBhN.js";import"./KeyboardArrowRight-LShtgW49.js";import"./createSvgIcon-BbL3U0Hb.js";import"./SvgIcon-CQU7rCYy.js";import"./PaginationItem-Bc0dAi8A.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BIRNPLHh.js";import"./useTimeout-BkFACxc1.js";import"./TransitionGroupContext-B-1f4D3_.js";import"./useEventCallback-C_PhZ4gM.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CLvE6niR.js";import"./CircularProgress-vX9_m42Y.js";import"./OutlinedInput-BjryEflV.js";import"./useFormControl-Bf13Qy6E.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CY9uvawV.js";import"./List-a_vVMaa5.js";import"./SelectFocusSourceContext-CX9jhojZ.js";import"./useSlotProps-DXdTwkgQ.js";import"./Popover-C9B_5d2D.js";import"./Portal-BLikJhBv.js";import"./useTheme-DrTO_DRk.js";import"./utils-BhTotuHU.js";import"./getReactElementRef-DUpT5N-m.js";import"./mergeSlotProps-DZ2a6j45.js";import"./Modal-B61PTYm1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CgPauin7.js";import"./Fade-BrnSbnNG.js";import"./Paper-CIIxPuZQ.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-Hy7YqFc2.js";import"./useControlled-DNBc9hrk.js";import"./index-BHECb7j3.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-BNRBrCJo.js";import"./index-DvMYR6cM.js";import"./index-CrcoPoGw.js";import"./index-D-7rEUPH.js";import"./Tooltip-DFZ7S6Z_.js";import"./Button-BPX7NsmD.js";import"./index-rjMel0fo.js";import"./Box-Ca_dclTz.js";import"./Grid-CiV8r-oF.js";import"./isMuiElement-c2rAqbnw.js";import"./styled-Dcs2wRea.js";import"./Stack-CK_dWn5x.js";import"./Container-h1971dVV.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CkVLmsyo.js";import"./FormHelperText-C7FrADGT.js";import"./FormControlLabel-DRNnFuPg.js";import"./Typography-sFl1f9yL.js";import"./Switch-DsQpNO6o.js";import"./SwitchBase-31BvtgwI.js";import"./Radio-Dy2mqGql.js";import"./RadioGroup-CNBCQsi2.js";import"./FormGroup-BurSUFFK.js";import"./Divider-DByQLpF0.js";import"./Table-BcJzpzn2.js";import"./TableRow-BBbdF642.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
