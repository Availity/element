import{r as s,j as e}from"./iframe-CwayONq3.js";import{a as t,T as P}from"./TablePagination-ry7Q0WUn.js";import{T as l}from"./Table-fow18ujl.js";import{T as d}from"./TableRow-BplAkA4j.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-j7vomrtM.js";import"./memoTheme-CSn7n7-0.js";import"./styled-WjtpYKzZ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-D_l0aAmO.js";import"./useSlot-ar6Q8od1.js";import"./mergeSlotProps-BztucupI.js";import"./useForkRef-Cy6dgODW.js";import"./KeyboardArrowRight-CF10VE9h.js";import"./createSvgIcon-DSjYKgaH.js";import"./SvgIcon-Dok2DrMx.js";import"./PaginationItem-CxlzrA_u.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-3L383qSX.js";import"./useTimeout-DzhE3XW1.js";import"./TransitionGroupContext-Bu4CoR7O.js";import"./useEventCallback-Cc5Qaj1M.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-XSGXEsQ5.js";import"./CircularProgress-CcJveUId.js";import"./OutlinedInput--oh61w1N.js";import"./useFormControl-CfAi1Cl1.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DiRviosC.js";import"./List-D5XMTJG9.js";import"./SelectFocusSourceContext-Bmlj6I18.js";import"./useSlotProps-C4DgWBnT.js";import"./Popover-Ljxjuwbj.js";import"./Portal-B5eAGKeX.js";import"./useTheme-DZN2Ghm1.js";import"./utils-BJivSKBX.js";import"./getReactElementRef-CjqPEX8j.js";import"./mergeSlotProps-DSTd1XFa.js";import"./Modal-DN1-xy7q.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BYFYfQXf.js";import"./Fade-DXm-QaGZ.js";import"./Paper-DlpHeBlY.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-cZINCd5X.js";import"./useControlled-H2-lqa1O.js";import"./index-FoJb9FyM.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-DFY5CYsV.js";import"./index-CYRtiz7B.js";import"./index-CrcoPoGw.js";import"./index-rzzKeWqc.js";import"./Tooltip-px23ZV-t.js";import"./Button-hBir-_1a.js";import"./index-C55j7MuO.js";import"./Box-C4nPPECx.js";import"./Grid-DathB-g2.js";import"./isMuiElement-sqB-nJpP.js";import"./styled-C0MvsQi9.js";import"./Stack-k-008in-.js";import"./Container-BUicGBFY.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CTdRs88K.js";import"./FormHelperText-CjnpPyYN.js";import"./FormControlLabel-BSPnDcnX.js";import"./Typography-CDQ-d4mK.js";import"./Switch-BeMxMh89.js";import"./SwitchBase-fbtSEbIK.js";import"./Radio-CmQsUMRS.js";import"./RadioGroup-CF3fvuBB.js";import"./FormGroup-bV0aYJSN.js";import"./Divider-CQfA4tzc.js";import"./Table-D7KTrGmA.js";import"./TableRow-Cl8fRaVP.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
