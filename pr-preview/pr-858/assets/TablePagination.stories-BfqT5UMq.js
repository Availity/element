import{j as e,r as s}from"./iframe-Tg5E9Q0V.js";import{a as t,T as j}from"./TablePagination-CISwUR9A.js";import{T as v}from"./Table-83inTSV6.js";import{T as O}from"./TableRow-qX1xyaPm.js";import"./preload-helper-Dp1pzeXC.js";import"./TableCell-BBgW99vN.js";import"./memoTheme-CSHka9uN.js";import"./styled-CkQGWiXZ.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-DeFdHT9w.js";import"./useSlot-DWYsP92Q.js";import"./mergeSlotProps-BNNCTn4N.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-B_DO_dbH.js";import"./KeyboardArrowRight-3TxfcKh8.js";import"./createSvgIcon-BlU2wZ3P.js";import"./SvgIcon-of2VfktU.js";import"./PaginationItem-jnNIPMxI.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CCTLTRt8.js";import"./useTimeout-CYbYxV9r.js";import"./TransitionGroupContext-cQD0tQZD.js";import"./useEventCallback-pJVTgRiD.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cl7hs1iw.js";import"./CircularProgress-xXUbWWTu.js";import"./OutlinedInput-DMBmnQFG.js";import"./useFormControl-r-M3yZ1X.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-C-eZI1YU.js";import"./List-Dgv4nz0z.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-XTv3Q3rb.js";import"./Menu-CGLRlKaF.js";import"./useSlotProps-S7vQ2L8Q.js";import"./Popover-CDrviG-H.js";import"./Portal-CbAAOrpG.js";import"./useTheme-D2PM0NC9.js";import"./utils-BChu3r4-.js";import"./getReactElementRef-B8vpBm8c.js";import"./mergeSlotProps-D8IAAijA.js";import"./Modal-BGuLed81.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-BgXNmqEU.js";import"./Fade-BvyniuaG.js";import"./Paper-DUjZmU49.js";import"./useControlled-BcdiiQVx.js";import"./index-D8INjewo.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-BCaoo-QV.js";import"./index-77bZYOQr.js";import"./index-DS1ZdVNz.js";import"./index-x-cZi-nY.js";import"./Tooltip-BTI4GCPp.js";import"./Button-CDV9x4x4.js";import"./index-D4DEAloD.js";import"./Box-BsChB_Op.js";import"./Grid-GpGmgKJU.js";import"./styled-CQuv9sTF.js";import"./isMuiElement-DRHNiz3q.js";import"./Stack-DMT1dotB.js";import"./Container-f8pbHfI3.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-ChcC5XoQ.js";import"./FormHelperText-D0NqzqTG.js";import"./FormControlLabel-_Cs-jF7x.js";import"./Typography-BcRYJcKe.js";import"./Switch-qnihXu10.js";import"./SwitchBase-dnO5HhvT.js";import"./RadioGroup-BiGhfNL0.js";import"./Radio-CCseEdT4.js";import"./FormGroup-CYUa5pLf.js";import"./Divider-sdSeaLpt.js";import"./Table-dcJkawyj.js";import"./TableRow-B6nHBFFH.js";const oe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(v,{role:"presentation",children:e.jsx(j,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
