import{j as e,r as s}from"./iframe-DdXne19Y.js";import{a as t,T as j}from"./TablePagination-sIkU1d4V.js";import{T as v}from"./Table-CFaIeI95.js";import{T as O}from"./TableRow-BjH2kH4I.js";import"./preload-helper-Dp1pzeXC.js";import"./TableCell-B4mRl2W_.js";import"./memoTheme-CUJXAVnw.js";import"./styled-BazYwfX2.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-Ch_UG72o.js";import"./useSlot-C03We_gL.js";import"./mergeSlotProps-DnK45DUJ.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CwS1hXJN.js";import"./KeyboardArrowRight-DXGj2beb.js";import"./createSvgIcon-DN69LkXl.js";import"./SvgIcon-BQDSNwSM.js";import"./PaginationItem-BF8pAo4D.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-QyfCUXJP.js";import"./useTimeout-DNSBYZWv.js";import"./TransitionGroupContext-BmVNFFik.js";import"./useEventCallback-tpV6a8iV.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-AJGji1yG.js";import"./CircularProgress-BfO5yz2q.js";import"./OutlinedInput-Djerxqt7.js";import"./useFormControl-BwhQrUSg.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CFwonOI5.js";import"./List-DoRYj9yq.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-DCenjn89.js";import"./Menu-Cs7LdjKJ.js";import"./useSlotProps-By8gKRU1.js";import"./Popover-DRO2Qh8T.js";import"./Portal-DsQ-EqqM.js";import"./useTheme-CuyM6APQ.js";import"./utils-Ch6tMI2K.js";import"./getReactElementRef-DEBAn-f7.js";import"./mergeSlotProps-UCTDG2OX.js";import"./Modal-BbyhaS1O.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-Dq9HqcNO.js";import"./Fade-CCyBXsDD.js";import"./Paper-CbzX-jOu.js";import"./useControlled-Z6Q03A9f.js";import"./index-CNxWBKtb.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-BivnIK-w.js";import"./index-pszKQIzk.js";import"./index-DS1ZdVNz.js";import"./index-BAQ-tpih.js";import"./Tooltip-Rz90OO73.js";import"./Button-CllFJQRZ.js";import"./index-MeSa46Cj.js";import"./Box-C-w4SaHJ.js";import"./Grid-C_HzQ4gC.js";import"./styled-BF4YlmQL.js";import"./isMuiElement-DibdeMrO.js";import"./Stack-C_AZLH4Q.js";import"./Container-DBlL8WTt.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-D8_ACgjp.js";import"./FormHelperText-Bd_ok_cn.js";import"./FormControlLabel-BieOE7Dl.js";import"./Typography-DcBpERD3.js";import"./Switch-Drv5vZ5Z.js";import"./SwitchBase-DiiYsJU3.js";import"./RadioGroup-pW8u9tOe.js";import"./Radio-D-7KGHTB.js";import"./FormGroup-CMq_tA2-.js";import"./Divider-mMaBIRfA.js";import"./Table-DAIHo4Ii.js";import"./TableRow-Cg6SqQco.js";const oe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(v,{role:"presentation",children:e.jsx(j,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
