import{r as s,j as e}from"./iframe-DRsKaZoV.js";import{a as t,T as P}from"./TablePagination-JLGzN5K8.js";import{T as l}from"./Table-XBcmarDP.js";import{T as d}from"./TableRow-Cx-9S8Uy.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-DVPtwAG4.js";import"./memoTheme-olSsBjA8.js";import"./styled-DO91FIEC.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BmEFr3dE.js";import"./useSlot-DNM0KLoM.js";import"./mergeSlotProps-BURl53KS.js";import"./useForkRef-LQtjIIgV.js";import"./KeyboardArrowRight-Bc-FmwPE.js";import"./createSvgIcon-DdCwdPBR.js";import"./SvgIcon-Dpxjd7uT.js";import"./PaginationItem-BihMC6l3.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CTgQ_by3.js";import"./useTimeout-C--q8J9W.js";import"./TransitionGroupContext-BL3wvAVn.js";import"./useEventCallback-Bu60zwDR.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DtO7gEQ8.js";import"./CircularProgress-CYts75uW.js";import"./OutlinedInput-CTy6Arcb.js";import"./useFormControl-CaAeDifA.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-zXsMGQ-z.js";import"./List-NT7j0dtQ.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-SUCJpX4J.js";import"./Menu-BlJgRakS.js";import"./useSlotProps-D3Llr-h-.js";import"./Popover-BWFp7wtj.js";import"./Portal-D6re67WF.js";import"./useTheme-C1O811uL.js";import"./utils-DcRyR5pI.js";import"./getReactElementRef-BQu0zR55.js";import"./mergeSlotProps-Df0B65SV.js";import"./Modal-BZWbCELz.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-p4pxeza_.js";import"./Fade-CW38gb4g.js";import"./Paper-Ddpt-3Cp.js";import"./useControlled-kFa1Yq00.js";import"./index-BpFZIt2g.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-BFIpnYRv.js";import"./index-k6hBKodf.js";import"./index-BiBDMnSv.js";import"./index-B2IJrd5x.js";import"./Tooltip-BkcHQcF9.js";import"./Button-CfQxP6eB.js";import"./index-CGwbp9eO.js";import"./Box-C-WaElnX.js";import"./Grid-MQYUDPdn.js";import"./isMuiElement-BnPWmSJy.js";import"./styled-vffCohJ0.js";import"./Stack-BxJBBr6k.js";import"./Container-BgUm-9tp.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-RsyWpHhV.js";import"./FormHelperText-D3SjXGbb.js";import"./FormControlLabel-BaqYfVno.js";import"./Typography-DeM8j2MH.js";import"./Switch-BOnpMkyi.js";import"./SwitchBase-BMlwKK7W.js";import"./Radio-Czxwkbet.js";import"./RadioGroup-Bubzloai.js";import"./FormGroup--k6qR8L5.js";import"./Divider-DDouCUAL.js";import"./Table-B6IRljCd.js";import"./TableRow-DzBbXPgy.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
