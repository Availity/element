import{j as e,r as s}from"./iframe-CJLLcML8.js";import{a as t,T as j}from"./TablePagination-BzQMK8Hk.js";import{T as v}from"./Table-CHghUjke.js";import{T as O}from"./TableRow-Bw7D62Tt.js";import"./preload-helper-Dp1pzeXC.js";import"./TableCell-CJV-SJFb.js";import"./memoTheme-BPg8_iBl.js";import"./styled-B7le8MWV.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-zAzL1F_p.js";import"./useSlot-DNA5Cnoe.js";import"./mergeSlotProps-Do_erTC-.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CMYI3Eu9.js";import"./KeyboardArrowRight-3tBGX8xv.js";import"./createSvgIcon-1XqqLt2A.js";import"./SvgIcon-nGyHStYX.js";import"./PaginationItem-BfQbKVhx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BKbTUVR3.js";import"./useTimeout-BDHAbL-Z.js";import"./TransitionGroupContext-6F5e1B-G.js";import"./useEventCallback-CaMR-E7T.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BOgoFyJ3.js";import"./CircularProgress-RWvPhipq.js";import"./OutlinedInput-DNQM8Xa2.js";import"./useFormControl-uOljBMPN.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-SXpxW8Of.js";import"./List-DZOXnXvW.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-BtCRDfeh.js";import"./Menu-DnSzvQQj.js";import"./useSlotProps-DOvHvxlg.js";import"./Popover-Ch8Hsvn-.js";import"./Portal-TXv_ZwAZ.js";import"./useTheme-xHPwzHWg.js";import"./utils-CcsuvtaX.js";import"./getReactElementRef-CwAmIBs7.js";import"./mergeSlotProps-C09rs3Ch.js";import"./Modal-BMIrjP1v.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-BvruHGhP.js";import"./Fade-Dl1RkEkt.js";import"./Paper-Ckh12xdI.js";import"./useControlled-CvR5zcEM.js";import"./index-C2z6S83Q.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-CgSghEAw.js";import"./index-kzcO1V8q.js";import"./index-DS1ZdVNz.js";import"./index-CsEAkofl.js";import"./Tooltip-KzdkIRNP.js";import"./Button-BS9NNOwE.js";import"./index-D75YOOsa.js";import"./Box-BuKoPa3R.js";import"./Grid-DjNI_6Ef.js";import"./styled-u61wxLO2.js";import"./isMuiElement-DVNv0xWp.js";import"./Stack-Rx154AVC.js";import"./Container-1fjr_go_.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-Dtmn331W.js";import"./FormHelperText-BcH1NUIs.js";import"./FormControlLabel-C4_bygPo.js";import"./Typography-D_pkt0MV.js";import"./Switch-BZMLws66.js";import"./SwitchBase-DP0WXxDo.js";import"./RadioGroup-Bh5cb6o5.js";import"./Radio-C5Xj2oDq.js";import"./FormGroup-DTNRnmOw.js";import"./Divider-CFrVNj22.js";import"./Table-DQEhY78D.js";import"./TableRow-Ddz3Sfc9.js";const oe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(v,{role:"presentation",children:e.jsx(j,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
