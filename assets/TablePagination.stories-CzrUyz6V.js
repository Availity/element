import{j as e,r as s}from"./iframe-D6rueNNG.js";import{a as t,T as j}from"./TablePagination-C8ZuyXeh.js";import{T as v}from"./Table-3HMKbvJG.js";import{T as O}from"./TableRow-jLTOvtub.js";import"./preload-helper-Dp1pzeXC.js";import"./TableCell-CHwaVolt.js";import"./memoTheme-CCfkpwUG.js";import"./styled-ZW0UZQf0.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-ViKeYaSE.js";import"./useSlot-DvvYNYr-.js";import"./mergeSlotProps-CvdD-egp.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-k6UH9Eyt.js";import"./KeyboardArrowRight-CLhRYKE8.js";import"./createSvgIcon-DVzV6U3r.js";import"./SvgIcon-3IcwaHvd.js";import"./PaginationItem-_LjebGXD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CyBCFM1e.js";import"./useTimeout-BykHjwvK.js";import"./TransitionGroupContext-DgL19gcU.js";import"./useEventCallback-QlF7xWZO.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BLmBtzUE.js";import"./CircularProgress-CNVgVvu_.js";import"./OutlinedInput-Cd3-ysTE.js";import"./useFormControl-D4KUkep_.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-EJSNYpaj.js";import"./List-Uhgfhymb.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-BpVXp2kQ.js";import"./Menu-D8SCn5nN.js";import"./useSlotProps-y_-PZrbQ.js";import"./Popover-tpY20ENr.js";import"./Portal-BA5FuLB9.js";import"./useTheme-iuyBXSR0.js";import"./utils-BI9CCtVK.js";import"./getReactElementRef-Behh7Kdk.js";import"./mergeSlotProps-C5cj9pSF.js";import"./Modal-ZhXTdvJb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-CzQqt0qo.js";import"./Fade-DS1rltrj.js";import"./Paper-BUunjapz.js";import"./useControlled-CmrCbjvY.js";import"./index-BjO6qU9j.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-Et7jQZZj.js";import"./index-wUp1dZq7.js";import"./index-DS1ZdVNz.js";import"./index-AWy4Z3jX.js";import"./Tooltip-qA0i6HK3.js";import"./Button-Cqe8RDHi.js";import"./index-CFiPcGtG.js";import"./Box-DT5FlFN8.js";import"./Grid-Ch7w618h.js";import"./styled-BjPVeGBq.js";import"./isMuiElement-DcnMsx99.js";import"./Stack-UTUiIrYm.js";import"./Container-D69exS9C.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-GzQ04A1E.js";import"./FormHelperText-BXHr50QB.js";import"./FormControlLabel-BStP3Ng7.js";import"./Typography-011omOzu.js";import"./Switch-BY8lzbTs.js";import"./SwitchBase-BEMaNbt8.js";import"./RadioGroup-pjy6vA1B.js";import"./Radio-D0EdhFlV.js";import"./FormGroup-BkOWXx4T.js";import"./Divider-BHJPECa0.js";import"./Table-DlWcTyfS.js";import"./TableRow-B96DCzm4.js";const oe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(v,{role:"presentation",children:e.jsx(j,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
