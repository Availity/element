import{r as s,j as e}from"./iframe-D77h7lRS.js";import{a as t,T as P}from"./TablePagination-Cm8hpH0U.js";import{T as l}from"./Table-C9IUmo0l.js";import{T as d}from"./TableRow-CmZ7M-CM.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-JZl689Vy.js";import"./memoTheme-DqX_R3KK.js";import"./styled-CDvIACaW.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DHGX3TSO.js";import"./useSlot-BBYvJbSe.js";import"./mergeSlotProps-qLX7lv7e.js";import"./useForkRef-SW3gFaM3.js";import"./KeyboardArrowRight-lEWjA29o.js";import"./createSvgIcon-BLoD-eFu.js";import"./SvgIcon-CnEcCUNg.js";import"./PaginationItem-CF-5QkON.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D6ESZVYa.js";import"./useTimeout-BjR7jkxB.js";import"./TransitionGroupContext-DCGSqGsz.js";import"./useEventCallback-d4rGFhnJ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CCSNmYsA.js";import"./CircularProgress-Bxr3-rHo.js";import"./OutlinedInput-MSLFQPLk.js";import"./useFormControl-9VfVAAyA.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-BHLNPhFp.js";import"./List-R8dOKo6P.js";import"./SelectFocusSourceContext-Czp42SwI.js";import"./useSlotProps-uX8RgR0A.js";import"./Popover-CwdVeln-.js";import"./Portal-DtDkDNee.js";import"./useTheme-CWKAY9AZ.js";import"./utils-CC74677U.js";import"./getReactElementRef-BIPFoYsf.js";import"./mergeSlotProps-Br5GpCfN.js";import"./Modal-DrVB10Rb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-__Xm0d1s.js";import"./Fade-DyYAtDpQ.js";import"./Paper-BiY9noHN.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-C4WXADnT.js";import"./useControlled-BR2YzmEr.js";import"./index-CquEWAAI.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-1zvVMp3V.js";import"./index-DVH5TI0W.js";import"./index-CrcoPoGw.js";import"./index-DfVYTiZj.js";import"./Tooltip-BhKuATOF.js";import"./Button-CJwJUbvG.js";import"./index-DKJ5gtoF.js";import"./Box-o7XdZc8G.js";import"./Grid-hgY9dIJR.js";import"./isMuiElement-Blipuvld.js";import"./styled-BMl8GMRY.js";import"./Stack-CP02Z4Z2.js";import"./Container-BclAzrCm.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BJmj-K9U.js";import"./FormHelperText-Ypt_VW2y.js";import"./FormControlLabel-DT8dT1qO.js";import"./Typography-Bljyylya.js";import"./Switch-BUzHje9n.js";import"./SwitchBase-aanT7hNQ.js";import"./Radio-CtNllKQQ.js";import"./RadioGroup-DR8oDR1o.js";import"./FormGroup-5D0gupCO.js";import"./Divider-ml52RQXY.js";import"./Table-B_p6VheE.js";import"./TableRow-C0WrqRuX.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
