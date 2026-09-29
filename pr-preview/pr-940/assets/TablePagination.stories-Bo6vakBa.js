import{r as s,j as e}from"./iframe-Cn9qPtrp.js";import{a as t,T as P}from"./TablePagination--tX_iwWY.js";import{T as l}from"./Table-DVyVkGn3.js";import{T as d}from"./TableRow-CuKo7glr.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-BC9nNp5q.js";import"./memoTheme-6yds69P_.js";import"./styled-D2CDconu.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-C9zuxqZg.js";import"./useSlot-Cknh0r9X.js";import"./mergeSlotProps-Bjka9Klf.js";import"./useForkRef-Dq6ZsqmR.js";import"./KeyboardArrowRight-D5JPoXp9.js";import"./createSvgIcon-CK6UXRVe.js";import"./SvgIcon-LXn_mqm4.js";import"./PaginationItem-DQdhbdVu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-2oFpmJBY.js";import"./useTimeout-BoQb9RDS.js";import"./TransitionGroupContext-CFwcVVqT.js";import"./useEventCallback-CiCWuPbq.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BEbO5w96.js";import"./CircularProgress-DAUt--dg.js";import"./OutlinedInput-havtgxzd.js";import"./useFormControl-TW3X2czK.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CdZ7Mc6s.js";import"./List-CDFvHcS1.js";import"./SelectFocusSourceContext-ePGizTGK.js";import"./useSlotProps-yJhFLJQp.js";import"./Popover-C9eTKBeN.js";import"./Portal-BWZt9Zv4.js";import"./useTheme-B6YVOUYP.js";import"./utils-BlV9er3y.js";import"./getReactElementRef-6Fd7mh7z.js";import"./mergeSlotProps-DuRirGHi.js";import"./Modal-DH6vGrJY.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CvWpQ392.js";import"./Fade-BsEF4Oay.js";import"./Paper-DwYDYFlD.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-DUVCVT7_.js";import"./useControlled-BIT0kvxY.js";import"./index-DWYQ4eQk.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-CH4XZ8SP.js";import"./index-CcgQ8l9r.js";import"./index-CrcoPoGw.js";import"./index-BIlLMFwD.js";import"./Tooltip-DKs25lhA.js";import"./Button-Cp2YlGAc.js";import"./index-CyKw9SYR.js";import"./Box-CeYPkCsw.js";import"./Grid-BbGFtGav.js";import"./isMuiElement-DcGc7pTf.js";import"./styled-DhBMIDqB.js";import"./Stack-DmctAkNR.js";import"./Container-y4mOFKcU.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BxiY_bl4.js";import"./FormHelperText-BWYBhNPM.js";import"./FormControlLabel-BGe8VaE5.js";import"./Typography-CDKB6cUx.js";import"./Switch-BdwK0ecZ.js";import"./SwitchBase-BoThDgH3.js";import"./Radio-BupWkmwv.js";import"./RadioGroup-CG6yeKGL.js";import"./FormGroup-DJyf2790.js";import"./Divider-ejbo4Ydy.js";import"./Table-CdDQNiW2.js";import"./TableRow-C7c3bgaF.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
