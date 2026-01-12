import{j as e,r as s}from"./iframe-BZz3QcUV.js";import{a as t,T as P}from"./TablePagination-D3EJFSmD.js";import{T as l}from"./Table-DZtLbLM6.js";import{T as d}from"./TableRow-DTuSTrZC.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-D3tzXzpC.js";import"./memoTheme-Bs2nn0CZ.js";import"./styled-BM-ddlS9.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-CXKIS5Ne.js";import"./useSlot-r4YEcyId.js";import"./mergeSlotProps-B23xrLHr.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CqxV8UPS.js";import"./KeyboardArrowRight-DWRWQgn3.js";import"./createSvgIcon-CpO6BPRg.js";import"./SvgIcon-DKZWjmjR.js";import"./PaginationItem-DCYthC-V.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DOxBZg-r.js";import"./useTimeout-DLwU38Ef.js";import"./TransitionGroupContext-9H431pbn.js";import"./useEventCallback-BVOh0J-M.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cw2IKBAQ.js";import"./CircularProgress-SMz0iZ9M.js";import"./OutlinedInput-DNitDyEY.js";import"./useFormControl-B768zcnH.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-Ce5adnAn.js";import"./List-BiE2s1yi.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-Cx4JwKMA.js";import"./Menu-DMEgO2wa.js";import"./useSlotProps-DFvf-0uJ.js";import"./Popover-BrY2xuMs.js";import"./Portal-Zp5JyzDe.js";import"./useTheme-B7Cqxh2G.js";import"./utils-BgvT_xZo.js";import"./getReactElementRef-Bpvbu8Ov.js";import"./mergeSlotProps-Bzsz_uoU.js";import"./Modal-CA8rC7t3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-DN1aCuq7.js";import"./Fade-BQarXe1G.js";import"./Paper-CDv_1HFe.js";import"./useControlled-DdT90daF.js";import"./index-DVq5OAtC.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-DmF3CGIo.js";import"./index-D7JVpCQY.js";import"./index-BiBDMnSv.js";import"./index-B314xkb7.js";import"./Tooltip-BWJHZRl6.js";import"./Button-Cp--sx01.js";import"./index-Vz6FX8E2.js";import"./Box-BOg-vuMP.js";import"./Grid-1nQ5vvaE.js";import"./styled-DdCwn5Ke.js";import"./isMuiElement-BdI-HeXQ.js";import"./Stack-DLX-eFuT.js";import"./Container-DqMY3rTf.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-DAjwOrks.js";import"./FormHelperText-Bu3hR_Kj.js";import"./FormControlLabel-vq4-1n5v.js";import"./Typography-dKvhZPmN.js";import"./Switch-vChijCA0.js";import"./SwitchBase-C7jx3Ye5.js";import"./RadioGroup-B5TaUYpc.js";import"./Radio-DA-zdsxW.js";import"./FormGroup-jedMmTa3.js";import"./Divider-CLJilj78.js";import"./Table-BxTNhU2t.js";import"./TableRow-B4iCZJbj.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
