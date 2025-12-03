import{j as e,r as s}from"./iframe-D4l0qtta.js";import{a as t,T as j}from"./TablePagination-BGqzOR6e.js";import{T as v}from"./Table-DdLjeS29.js";import{T as O}from"./TableRow-DV0jtsWt.js";import"./preload-helper-Dp1pzeXC.js";import"./TableCell-BT4Md-7-.js";import"./memoTheme-BA7dV9ce.js";import"./styled-BTFFsjyJ.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-D3XRuDHB.js";import"./useSlot-D-iz2SxY.js";import"./mergeSlotProps-DF_C76Yp.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Dd_PEYLR.js";import"./KeyboardArrowRight-DhFhNZ69.js";import"./createSvgIcon-0ZTEW-tI.js";import"./SvgIcon-Domhqj7B.js";import"./PaginationItem-DuvKAN7F.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-caw8p1XZ.js";import"./useTimeout-tDfAfQSP.js";import"./TransitionGroupContext-CoIben92.js";import"./useEventCallback-BZanBeRj.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-vTRylTTB.js";import"./CircularProgress-CNlJ1A1Z.js";import"./OutlinedInput-C0jP2jLp.js";import"./useFormControl-Cf7b7V2i.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-BOVE50hy.js";import"./List-CMRknLMF.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select--IzqTXcD.js";import"./Menu-C__YMKvy.js";import"./useSlotProps-CDGpK8qC.js";import"./Popover-CTlIoDyj.js";import"./Portal-D2eOL5uX.js";import"./useTheme-CeD1owOb.js";import"./utils-C5eKUPpq.js";import"./getReactElementRef-CBOb2zug.js";import"./mergeSlotProps-PW512166.js";import"./Modal--YBRLag_.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-C4Qzx4Iq.js";import"./Fade-22-1AoWN.js";import"./Paper-DbNlwRfL.js";import"./useControlled-Cq9ik7Uv.js";import"./index-B-RlsP5T.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-YsrP7_Hr.js";import"./index-DNyVveUa.js";import"./index-DJKl12U0.js";import"./index-CzvPe9hU.js";import"./Tooltip-CWqA7bV3.js";import"./Button-c5qr7CJB.js";import"./index-BpTvn-wv.js";import"./Box-CbXkJEEm.js";import"./Grid-AzzeqWvx.js";import"./styled-CK-eMcBj.js";import"./isMuiElement-CH7W9SW2.js";import"./Stack-DeWONcZO.js";import"./Container-Cbdyqd46.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-BOy5HPW6.js";import"./FormHelperText-BC2JKs99.js";import"./FormControlLabel-DwCec4RA.js";import"./Typography-DQo__xQb.js";import"./Switch-Bu62HeQk.js";import"./SwitchBase-zo6P8E0k.js";import"./RadioGroup-DdFhp1NH.js";import"./Radio-BvlDOov9.js";import"./FormGroup-BUu0NSyx.js";import"./Divider-DYT8Z4PY.js";import"./Table-EGya6bIJ.js";import"./TableRow-DH__M_0c.js";const oe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(v,{role:"presentation",children:e.jsx(j,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
