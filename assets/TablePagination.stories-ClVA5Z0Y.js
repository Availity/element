import{r as s,j as e}from"./iframe-D39zpO5D.js";import{a as t,T as P}from"./TablePagination-Dmc9DxaQ.js";import{T as l}from"./Table-RXIjmU6A.js";import{T as d}from"./TableRow-Dkb1kReF.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-OOnxdUYf.js";import"./memoTheme-DS1Qd1tD.js";import"./styled-DVn78CF9.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CK4fY5_P.js";import"./useSlot-BR7cWQ8J.js";import"./mergeSlotProps-hvpDzkoH.js";import"./useForkRef-DNCE6AYe.js";import"./KeyboardArrowRight-C0qF-8y9.js";import"./createSvgIcon-CXilsj0Y.js";import"./SvgIcon-DrCHR_XG.js";import"./PaginationItem-B-f5JwNM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C5qFdqG6.js";import"./useTimeout-DkqtJI-P.js";import"./TransitionGroupContext-iGlL40r0.js";import"./useEventCallback-CTE8ZTt3.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-1y7-X1Ns.js";import"./CircularProgress-DZf4mQi8.js";import"./OutlinedInput-DUfnrBns.js";import"./useFormControl-DAAm-Ep5.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-BIwGDZff.js";import"./List-C3S5OFLg.js";import"./SelectFocusSourceContext-CAoytt1x.js";import"./useSlotProps-CHrZTrOT.js";import"./Popover-CLbI9j0Y.js";import"./Portal-D0_VnBDB.js";import"./useTheme-Q_YzHohC.js";import"./utils-BiqFTD-G.js";import"./getReactElementRef-BiLy3DMf.js";import"./mergeSlotProps-VT4Oa8rE.js";import"./Modal-Bcdi7MY2.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BGS6hD_O.js";import"./Fade-C2SBq3LE.js";import"./Paper-B079EtYg.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-Cr_b3k2m.js";import"./useControlled-Dc7tfWw6.js";import"./index-LJlq2DD9.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-VD87hW1V.js";import"./index-CRBGvwQd.js";import"./index-CrcoPoGw.js";import"./index-CT8p7-xb.js";import"./Tooltip-T0tiLXY7.js";import"./Button-BxFiSb--.js";import"./index-BHfSa4RT.js";import"./Box-MvPvGRqH.js";import"./Grid-sUXan3gB.js";import"./isMuiElement-B_WcrTr3.js";import"./styled-D2W9iR9V.js";import"./Stack-DtFT-rmC.js";import"./Container-Bg9CFWCo.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CbsmgfPu.js";import"./FormHelperText-SrmT5h7r.js";import"./FormControlLabel-DlhlN1bF.js";import"./Typography-lHvxoPWM.js";import"./Switch-DWJuNNrz.js";import"./SwitchBase-Dtvf4WNX.js";import"./Radio-D-0z7h1P.js";import"./RadioGroup-BF-ujAZJ.js";import"./FormGroup-DlBhWtzs.js";import"./Divider-m_CRUwIv.js";import"./Table-UKF4znZD.js";import"./TableRow-CndKneI4.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
