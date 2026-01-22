import{j as e,r as s}from"./iframe-P-I-t7s_.js";import{a as t,T as P}from"./TablePagination-CInKHUGl.js";import{T as l}from"./Table-COJPR9af.js";import{T as d}from"./TableRow-CIugTpGh.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CDPGmG-_.js";import"./memoTheme-Bi3jfVWD.js";import"./styled-DNi79hKI.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-11E-MYAd.js";import"./useSlot-DY-xq6aU.js";import"./mergeSlotProps-CDm4lxrI.js";import"./useForkRef-B5SqA4pZ.js";import"./KeyboardArrowRight-CbeuMfoU.js";import"./createSvgIcon-JwEd2gcS.js";import"./SvgIcon-DmOXCSGB.js";import"./PaginationItem-Bqv36uWP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-P5TjO14T.js";import"./useTimeout-Dzhca5Jx.js";import"./TransitionGroupContext-Dvdi4lCr.js";import"./useEventCallback-DAYatbRK.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BTlhtNIa.js";import"./CircularProgress-BRuGXxty.js";import"./OutlinedInput-D9ScyHuO.js";import"./useFormControl-PrL4cH60.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-Bq9AS9K8.js";import"./List-C_3Uxwtv.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-DUXcWGfO.js";import"./Menu-BJGmABLE.js";import"./useSlotProps-Cx6Yk_v4.js";import"./Popover-CxE7A8ms.js";import"./Portal-_y01gIKP.js";import"./useTheme-BPf64W-X.js";import"./utils-DTqcJog-.js";import"./getReactElementRef-DFgmZ0uJ.js";import"./mergeSlotProps-BWpcczPW.js";import"./Modal-vVbgVJa4.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-C0L4z1af.js";import"./Fade-CVC1eZsP.js";import"./Paper-DMZ3Nhg0.js";import"./useControlled-Cqclzim-.js";import"./index-C3cy06cM.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Pagination-DwpsqEfH.js";import"./index-Dhbn43JG.js";import"./index-BiBDMnSv.js";import"./index-BOqcfzn9.js";import"./Tooltip-kyKJtl96.js";import"./Button-xw2JRpr3.js";import"./index-DGaASH14.js";import"./Box-BCYJimk9.js";import"./Grid-DUqLWWvo.js";import"./styled-Cp0DTD0x.js";import"./isMuiElement-DIafhdSN.js";import"./Stack-JGFv5pEs.js";import"./Container-8zPEfJs6.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-0KiMc52e.js";import"./FormHelperText-Bbq60y1z.js";import"./FormControlLabel-DAUG9NcE.js";import"./Typography-BFwAhjnY.js";import"./Switch-Br6_MbNh.js";import"./SwitchBase-CrBPRb-c.js";import"./RadioGroup-CQO77CJ0.js";import"./Radio-1bLCVnvB.js";import"./FormGroup-BbkimDWv.js";import"./Divider-CVqRGGvC.js";import"./Table-DtZnSxPc.js";import"./TableRow-01KUszpw.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
