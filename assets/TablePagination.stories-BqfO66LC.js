import{j as e,r as s}from"./iframe-DPWyg_sE.js";import{a as t,T as P}from"./TablePagination-DkmtqPfw.js";import{T as l}from"./Table-Cpf6qZ1b.js";import{T as d}from"./TableRow-BXOki5lm.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-C3zN53fj.js";import"./memoTheme-CvhDbT8x.js";import"./styled-Cx4UoaTx.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-B9V6sq0h.js";import"./useSlot-BxXiaFQD.js";import"./mergeSlotProps-CVICHJ3a.js";import"./useForkRef-CQj222cR.js";import"./KeyboardArrowRight-B8v1sJZf.js";import"./createSvgIcon-kD6OJaqd.js";import"./SvgIcon-BLZY0MiZ.js";import"./PaginationItem-B3WUEHS4.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DwZSi7dI.js";import"./useTimeout-RvN-OPdu.js";import"./TransitionGroupContext-Dbv33dTP.js";import"./useEventCallback-jcG2qnaO.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BF9Np9Lj.js";import"./CircularProgress-9Tec-y6j.js";import"./OutlinedInput-DVo6vKS6.js";import"./useFormControl-DFCevzuq.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-Bd_hRR-h.js";import"./List-Rzw7CuXQ.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-JvCmDejN.js";import"./Menu-BQ424Qa8.js";import"./useSlotProps-LUJJL6zM.js";import"./Popover-BMgBZv6J.js";import"./Portal-D5nwTdpC.js";import"./useTheme-7tDQkz1C.js";import"./utils-BB7LdJ51.js";import"./getReactElementRef-x8Lx8RXT.js";import"./mergeSlotProps-B4tJEkZP.js";import"./Modal-CWpQp0b9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-RhGZ7C5k.js";import"./Fade-jqxkxdpP.js";import"./Paper-CoTVTpu9.js";import"./useControlled-wCcL1r_0.js";import"./index-HgfBgIyk.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-CaZw2fC4.js";import"./index-C0D43F6K.js";import"./index-BiBDMnSv.js";import"./index-WUbIbMUB.js";import"./Tooltip-CdOjvbM3.js";import"./Button-BBTQggAb.js";import"./index-klW-QR3s.js";import"./Box-BW7Ma-QQ.js";import"./Grid-BOsdlhg5.js";import"./styled-D3AT7-A0.js";import"./isMuiElement-BiKTnabE.js";import"./Stack-BKgbUtNe.js";import"./Container-NqiDyIZZ.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DkpgJt2M.js";import"./FormHelperText-B2zRfOi_.js";import"./FormControlLabel-B3zPKxhD.js";import"./Typography-DAlbupBm.js";import"./Switch-C0QC4SKP.js";import"./SwitchBase-BmqpUqm4.js";import"./RadioGroup-GYjouWwM.js";import"./Radio-COT2Uoxb.js";import"./FormGroup-BAw5f_Y0.js";import"./Divider-Cvvpqoti.js";import"./Table-BXfUUuRU.js";import"./TableRow-BGO1TCBW.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
