import{r as s,j as e}from"./iframe-B3XSEB2p.js";import{a as t,T as P}from"./TablePagination-B6-QLwPr.js";import{T as l}from"./Table-DlG3nyk5.js";import{T as d}from"./TableRow-CFA6E5Ex.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-BITjAJYJ.js";import"./memoTheme-zFBVIAxJ.js";import"./styled-BKJUYYzH.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Cnd5KuNW.js";import"./useSlot-fXCwMtx-.js";import"./mergeSlotProps-BUA7aXyy.js";import"./useForkRef-BFyiqj42.js";import"./KeyboardArrowRight-C9AR9_cN.js";import"./createSvgIcon-DXiAxkxb.js";import"./SvgIcon-BW4di25g.js";import"./PaginationItem-BotLAx1J.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CV7JyDx9.js";import"./useTimeout-DjubHrAv.js";import"./TransitionGroupContext-bUHI8Opa.js";import"./useEventCallback-Dfz_oY_W.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-ML2PMq2-.js";import"./CircularProgress-C6blXItT.js";import"./OutlinedInput-DspMNzyC.js";import"./useFormControl-rtm0CpB1.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CW_UE916.js";import"./List-DQXlBrYZ.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-BjYusGuK.js";import"./Menu-Dd8TIx7v.js";import"./useSlotProps-BnXi_Ts5.js";import"./Popover-DxzJjHiF.js";import"./Portal-DeOXpMrf.js";import"./useTheme-Gs2b_SoM.js";import"./utils-CMJMNufc.js";import"./getReactElementRef-m4HA6qqR.js";import"./mergeSlotProps-DbeHDdbS.js";import"./Modal-3VYdLW2j.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DfrvDDlR.js";import"./Fade-BhRChvyZ.js";import"./Paper-CGKnoNLB.js";import"./useControlled-BnIqSLBp.js";import"./index-CAS_Ehni.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-gzdzWdfG.js";import"./index-DF0ei3mA.js";import"./index-BiBDMnSv.js";import"./index-BDo5zO46.js";import"./Tooltip-CpMdDorm.js";import"./Button-Cx7ia3Qx.js";import"./index-CTZEFlon.js";import"./Box-CT-z8ogS.js";import"./Grid-DWbHQ1o7.js";import"./isMuiElement-ZiQktaUF.js";import"./styled-lVb8KQEy.js";import"./Stack-Bkt6nYoM.js";import"./Container-Dg4ygdO4.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CxLEzcw-.js";import"./FormHelperText-B6YW8aeN.js";import"./FormControlLabel-DCV2mEAb.js";import"./Typography-BStgzFan.js";import"./Switch-C8UoIn7g.js";import"./SwitchBase-zf7Fsryl.js";import"./Radio-BX0zjP_U.js";import"./RadioGroup-PiA-pQ_J.js";import"./FormGroup-BicZh9bY.js";import"./Divider-CYS1Q5pq.js";import"./Table-B65kPYiG.js";import"./TableRow-DiZAQ1lo.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
