import{j as e,r as s}from"./iframe-B-IDRs1c.js";import{a as t,T as j}from"./TablePagination-Dl16esoh.js";import{T as v}from"./Table-dsj2dBe0.js";import{T as O}from"./TableRow-BijNpUHg.js";import"./preload-helper-Dp1pzeXC.js";import"./TableCell-DIsJiMXh.js";import"./memoTheme-CE8Ve8p3.js";import"./styled-7JhYMRam.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-Bl0dj8he.js";import"./useSlot-BDZruxXA.js";import"./mergeSlotProps-C8D8DcHH.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-ClLnv_Rm.js";import"./KeyboardArrowRight-B_Y19ugN.js";import"./createSvgIcon-D0KAL-_d.js";import"./SvgIcon-Dnen4Kai.js";import"./PaginationItem-CFQ_RaDe.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BRBh8179.js";import"./useTimeout-B5Lb3nSx.js";import"./TransitionGroupContext-FoUS5PCq.js";import"./useEventCallback-cI9q2pBc.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BX_62obP.js";import"./CircularProgress-DIITlzvm.js";import"./OutlinedInput-2jEgO4FM.js";import"./useFormControl-DeAhKfVJ.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DKB19Hlx.js";import"./List-DqzcvQFO.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-D7jHN25u.js";import"./Menu-k9MMNqzG.js";import"./useSlotProps-CfOviytx.js";import"./Popover-DhQ5m6YW.js";import"./Portal-Br3wST_n.js";import"./useTheme-BCGo3_gR.js";import"./utils-BDyqiFkI.js";import"./getReactElementRef-DTxB74xF.js";import"./mergeSlotProps-CcD7j9hf.js";import"./Modal-BzHYDMo_.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-BCtdC_Sn.js";import"./Fade-D1BipWHC.js";import"./Paper-BIo3wRRL.js";import"./useControlled-c6loq-MY.js";import"./index-B8qzEHL-.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-D1-VvMau.js";import"./index-B7ln0YRF.js";import"./index-DJKl12U0.js";import"./index-CT2WTVvP.js";import"./Tooltip-CSSVlh_J.js";import"./Button-BTxgxpDX.js";import"./index-y3bL_tnv.js";import"./Box-D7mgUtfD.js";import"./Grid-CzlSEqG7.js";import"./styled-BXVIoFq6.js";import"./isMuiElement-Cvcy1-u-.js";import"./Stack-BQlzlOuL.js";import"./Container-DiLdPN9q.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-MY60MoUc.js";import"./FormHelperText-CkBHd9eX.js";import"./FormControlLabel-DA8J7sXe.js";import"./Typography-qhH8cReh.js";import"./Switch-DR7U96ou.js";import"./SwitchBase-D-rxiEW8.js";import"./RadioGroup-DeL1r2zs.js";import"./Radio-leo7IPEq.js";import"./FormGroup-DRovw82o.js";import"./Divider-Bu1AF1W-.js";import"./Table-tb8nd96s.js";import"./TableRow-Bp26Glh3.js";const oe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(v,{role:"presentation",children:e.jsx(j,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
