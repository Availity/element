import{j as e,r as s}from"./iframe-B9UmYm9a.js";import{a as t,T as j}from"./TablePagination-NZ-mj6yA.js";import{T as v}from"./Table-DAkeruJD.js";import{T as O}from"./TableRow-BsIjNOjv.js";import"./preload-helper-Dp1pzeXC.js";import"./TableCell-CZMAWHMu.js";import"./memoTheme-D_NWO3Sf.js";import"./styled-DoXLytZI.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-BucN6s6p.js";import"./useSlot-CR5yVO5D.js";import"./mergeSlotProps-BiSAcbtH.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CxMGEvhU.js";import"./KeyboardArrowRight-ymF5Nt4S.js";import"./createSvgIcon-DD78qtxD.js";import"./SvgIcon-ML3dO570.js";import"./PaginationItem-CQ5htY0m.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DqL2pmKa.js";import"./useTimeout-BY4Ptw2I.js";import"./TransitionGroupContext-DbiiX3No.js";import"./useEventCallback-DHGbg9uZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BJqVFicY.js";import"./CircularProgress-DuOgkEjt.js";import"./OutlinedInput-BK9tzaXx.js";import"./useFormControl-DPjGFIzP.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-Dv_i5NYl.js";import"./List-w0232vmf.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-W9lhdw2r.js";import"./Menu-1MwgyoZI.js";import"./useSlotProps-C_80d6ZX.js";import"./Popover-B10feGb7.js";import"./Portal-QZjT-NjO.js";import"./useTheme-T4vxBpQ_.js";import"./utils-eGNVq-HS.js";import"./getReactElementRef-BfoHU7AI.js";import"./mergeSlotProps-CwZ7clL2.js";import"./Modal-BuRfNVHb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-BIzo1FrP.js";import"./Fade-BMTciNwC.js";import"./Paper-Cv6JMR6s.js";import"./useControlled-CNkUV8JJ.js";import"./index-YD2oNNLd.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-DGPus0Jc.js";import"./index-Dzu0DSbh.js";import"./index-DS1ZdVNz.js";import"./index--sXbh2PD.js";import"./Tooltip-Cq5UdYzB.js";import"./Button-Bc3m4P2S.js";import"./index-D7gUouFh.js";import"./Box-Bn4lUdip.js";import"./Grid-uZx4aDYj.js";import"./styled-CJz0EzFO.js";import"./isMuiElement-Cw-OmkyD.js";import"./Stack-DzpHRCHq.js";import"./Container-B2IKB7A7.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-B3vmFr68.js";import"./FormHelperText-DXO_xPS8.js";import"./FormControlLabel-Dtdu6pre.js";import"./Typography-BTbXiqY0.js";import"./Switch-C5tER1UK.js";import"./SwitchBase-DDiDHpVB.js";import"./RadioGroup-C9RP_NTU.js";import"./Radio-Y85ZGYF_.js";import"./FormGroup-CXBV0ZAF.js";import"./Divider-a2pOlaeB.js";import"./Table-DphABeuZ.js";import"./TableRow-DTfOIsUj.js";const oe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(v,{role:"presentation",children:e.jsx(j,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: TablePaginationProps) => {
    const [page, setPage] = useState(args.page);
    useEffect(() => {
      setPage(args.page);
    }, [args.page]);
    return <TablePagination {...args} page={page} onPageChange={(event, page) => {
      setPage(page);
    }} />;
  }
}`,...(l=(P=a.parameters)==null?void 0:P.docs)==null?void 0:l.source}}};var d,u,T;p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(T=(u=p.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var b,f,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: TablePaginationProps) => <TablePagination {...args} />,
  args: {
    rowsPerPageOptions: []
  }
}`,...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var x,h,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: TablePaginationProps) => <TablePagination {...args} />,
  args: {
    rowsPerPage: -1,
    rowsPerPageOptions: [-1]
  }
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const te=["_TablePagination","_AsPartOfTable","_FixedRowsPerPage","_ShowAll"];export{p as _AsPartOfTable,i as _FixedRowsPerPage,n as _ShowAll,a as _TablePagination,te as __namedExportsOrder,oe as default};
