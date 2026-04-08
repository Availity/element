import{r as s,j as e}from"./iframe-CWp6xAJi.js";import{a as t,T as P}from"./TablePagination-CcQox39L.js";import{T as l}from"./Table-Bj65DhiK.js";import{T as d}from"./TableRow-tKoT3-m-.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-cB4PAck6.js";import"./memoTheme-Cd48oeI4.js";import"./styled-BbzXfeov.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BATAVhxb.js";import"./useSlot-DyNQWwC6.js";import"./mergeSlotProps-D_m3hd0U.js";import"./useForkRef-3LhxE-jP.js";import"./KeyboardArrowRight-UPF8hm-0.js";import"./createSvgIcon-BPSi4ajd.js";import"./SvgIcon-BE17mmZt.js";import"./PaginationItem-CX9proxo.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-QvXOsOsa.js";import"./useTimeout-YuGHwSAC.js";import"./TransitionGroupContext-DXm2NhTQ.js";import"./useEventCallback-DWzQfpRP.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BcXRPXis.js";import"./CircularProgress-a2FiPD69.js";import"./OutlinedInput-B-1NmxdT.js";import"./useFormControl-hGDRNu7C.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-o2G0EomF.js";import"./List-BpYrKy3Y.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-CeGHqpeG.js";import"./Menu-Dgz24AwM.js";import"./useSlotProps-DzjUqkkU.js";import"./Popover-BPg-4WyH.js";import"./Portal-v_NAREGo.js";import"./useTheme-DHWCGmhz.js";import"./utils-D4ENFMIW.js";import"./getReactElementRef-C_Avcpz3.js";import"./mergeSlotProps-Dxb_vIiW.js";import"./Modal-BPpm24UE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CqFgtmAJ.js";import"./Fade-BHa9ONGT.js";import"./Paper-C5XDmwPa.js";import"./useControlled-D9oaenaI.js";import"./index-buZDR1ob.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-CGp7mY7x.js";import"./index-52-MGCI2.js";import"./index-BiBDMnSv.js";import"./index-Bxm1lbI1.js";import"./Tooltip-C9q2MrGF.js";import"./Button-DheGOcXb.js";import"./index-DiK5u2m6.js";import"./Box-C01JMt70.js";import"./Grid-BEi4nMA-.js";import"./isMuiElement-CXCicdtK.js";import"./styled-Ck6GK9xN.js";import"./Stack-DilTTonM.js";import"./Container-CHapUF_w.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BXQlDb-z.js";import"./FormHelperText-D5HQHcTB.js";import"./FormControlLabel-BIT2ITgz.js";import"./Typography-DAHmtciD.js";import"./Switch-B27HjCvE.js";import"./SwitchBase-BDjJ1Fzr.js";import"./Radio-BJKeIEsI.js";import"./RadioGroup-CurkXTE0.js";import"./FormGroup-F0R8oEct.js";import"./Divider-mFdRldcH.js";import"./Table-Cl1QxLF5.js";import"./TableRow-CRYLem2F.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
