import{j as e,r as s}from"./iframe-XJ8rUARQ.js";import{a as t,T as j}from"./TablePagination-Cikk_tpq.js";import{T as v}from"./Table-CBQzQAzw.js";import{T as O}from"./TableRow-3IEXn7v3.js";import"./preload-helper-Dp1pzeXC.js";import"./TableCell-BBZFiWGd.js";import"./memoTheme-q27Lu1jJ.js";import"./styled-DH1bohWY.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-CGukXcHL.js";import"./useSlot-BQnc1wiW.js";import"./mergeSlotProps-B1UYo6hf.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-k_WY5UDV.js";import"./KeyboardArrowRight-D0JCHGDR.js";import"./createSvgIcon-CZFbIjHx.js";import"./SvgIcon-gs9ZPknn.js";import"./PaginationItem-BoLrZdML.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CgzYzVmi.js";import"./useTimeout-CHPWgY-X.js";import"./TransitionGroupContext-BLsjMo91.js";import"./useEventCallback-BDPMWXz1.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CSeSeZKT.js";import"./CircularProgress-DHokMmGN.js";import"./OutlinedInput-CRGope29.js";import"./useFormControl-BQzGV_Rr.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DJRjWX2u.js";import"./List-BH13I8v0.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-DRmfM0LR.js";import"./Menu-CwbeRV8m.js";import"./useSlotProps-ClBThUbu.js";import"./Popover-CSSnkq1S.js";import"./Portal-xufODOBH.js";import"./useTheme-DdE3jScQ.js";import"./utils-Bu5_zceD.js";import"./getReactElementRef-CA2jWjUI.js";import"./mergeSlotProps-DiGp33rA.js";import"./Modal-mRbZ2Llg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-Dk5P0AXa.js";import"./Fade-7aiRsYlH.js";import"./Paper-BItyqzia.js";import"./useControlled-XnLwGYQ0.js";import"./index-Bic9pcsq.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-CexPy8Wi.js";import"./index-BrB8cp_v.js";import"./index-DS1ZdVNz.js";import"./index-Bfg0IfXb.js";import"./Tooltip-CFosmsmO.js";import"./Button-jNyCdmKh.js";import"./index-BiP5P7M1.js";import"./Box-qW0uta-Y.js";import"./Grid-Dk4fwvMn.js";import"./styled-BwErFkk7.js";import"./isMuiElement-bpXde_gu.js";import"./Stack-DBw9MoVN.js";import"./Container-D0WZR6MW.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-CuI6a_rh.js";import"./FormHelperText-CWz_PZRQ.js";import"./FormControlLabel-DERvxbVJ.js";import"./Typography-DLCURa9h.js";import"./Switch-DAE0QIZT.js";import"./SwitchBase-wxow7jUk.js";import"./RadioGroup-B4eLwq-k.js";import"./Radio-BM00RdYB.js";import"./FormGroup-DBHzl_SM.js";import"./Divider-By-_we-K.js";import"./Table-CGfeeUKC.js";import"./TableRow-t9K0gimT.js";const oe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(v,{role:"presentation",children:e.jsx(j,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
