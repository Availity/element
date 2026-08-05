import{r as s,j as e}from"./iframe-Cwe65xm_.js";import{a as t,T as P}from"./TablePagination-CP8WnOii.js";import{T as l}from"./Table-Bz-UJHEN.js";import{T as d}from"./TableRow-DuOc9W0P.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-DhfCUYtg.js";import"./memoTheme-JTO0J2AE.js";import"./styled-DQU8Bodb.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DfK7RkQZ.js";import"./useSlot-DT6vlKow.js";import"./mergeSlotProps-DptD_Py-.js";import"./useForkRef-B3dE_Xi9.js";import"./KeyboardArrowRight-BfBqdUrk.js";import"./createSvgIcon-BCdDg_61.js";import"./SvgIcon-DVcTXB35.js";import"./PaginationItem-BA2vYq33.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B2MrdNo3.js";import"./useTimeout-B979BKpc.js";import"./TransitionGroupContext-DfpprYK4.js";import"./useEventCallback-Cus8kDUU.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CLwVH8iN.js";import"./CircularProgress-Gl2vZfvX.js";import"./OutlinedInput-CVtI0giW.js";import"./useFormControl-BhG-OBsq.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-UoQq1kiT.js";import"./List-CdxcmJFC.js";import"./SelectFocusSourceContext-8cwNuwWa.js";import"./useSlotProps-CHdu95RH.js";import"./Popover-BqjsgymF.js";import"./Portal-MprWoh0y.js";import"./useTheme-ClD_legM.js";import"./utils-E62tsqSg.js";import"./getReactElementRef-BO3eeWP1.js";import"./mergeSlotProps-DKtwpG52.js";import"./Modal-DXesMzil.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BuJJs5yg.js";import"./Fade-DVmn_b9B.js";import"./Paper-BllScWLN.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-Bee2J2VA.js";import"./useControlled-B5htf0na.js";import"./index-Dwd1T5KI.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-BuJrR_Ty.js";import"./index-CPjIJxsx.js";import"./index-CrcoPoGw.js";import"./index-B70TfKNL.js";import"./Tooltip-DXMour_H.js";import"./Button-BPlwCXwF.js";import"./index-GEX0zvPr.js";import"./Box-DUWM_zX0.js";import"./Grid-XXlh0rR0.js";import"./isMuiElement-CFlSzKZl.js";import"./styled-Drm9UKpq.js";import"./Stack-CRAKFpNP.js";import"./Container-Bu5eEzkf.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CoNS-ZSY.js";import"./FormHelperText-CcTnWzja.js";import"./FormControlLabel-pIK1R6xI.js";import"./Typography-CwzEaEbc.js";import"./Switch-COmW8gnw.js";import"./SwitchBase-vEUtDMIo.js";import"./Radio-B-ELdh2p.js";import"./RadioGroup-7oQM0Exi.js";import"./FormGroup-bSlB8GHJ.js";import"./Divider-DdiTjDHI.js";import"./Table-CZ5cSEvw.js";import"./TableRow-CHO7sTDc.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
