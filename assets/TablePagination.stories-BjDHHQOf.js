import{j as e,r as s}from"./iframe-DF1q2aaL.js";import{a as t,T as j}from"./TablePagination-DjvRMXIW.js";import{T as v}from"./Table-DHH4B08Y.js";import{T as O}from"./TableRow-CZEqmcao.js";import"./preload-helper-Dp1pzeXC.js";import"./TableCell-WNhPYxPt.js";import"./memoTheme-BD6H9365.js";import"./styled-CFEXa4qH.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-BvkI__YB.js";import"./useSlot-CQvSmYnu.js";import"./mergeSlotProps-BnmzE4jq.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D-TFDBL_.js";import"./KeyboardArrowRight-0rYEIeVN.js";import"./createSvgIcon-DzcieuLS.js";import"./SvgIcon-DB8Z1ZTq.js";import"./PaginationItem-F0I0F4Ca.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D5OUD9Sm.js";import"./useTimeout-CJLBifOK.js";import"./TransitionGroupContext-DTdRQeqO.js";import"./useEventCallback-C9NbUrxX.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-K-5rBd1A.js";import"./CircularProgress-DkK8nyO-.js";import"./OutlinedInput-BCsojIk-.js";import"./useFormControl-ByL3kvVY.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CCRIegh5.js";import"./List-D-4vELaV.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-Chgl2RF6.js";import"./Menu-CmYraULs.js";import"./useSlotProps-B0ZOsC4g.js";import"./Popover-Dip1991W.js";import"./Portal-CbFePWP9.js";import"./useTheme-C0GFliqz.js";import"./utils-BdM8s10D.js";import"./getReactElementRef-Cr3R6gAV.js";import"./mergeSlotProps-bUytW4Ka.js";import"./Modal-BadjnIQl.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-Ck1pJi37.js";import"./Fade-CQtVaZQb.js";import"./Paper-DZhAfepD.js";import"./useControlled-C2txOzyk.js";import"./index-DJNX-Iyq.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-DQGMcSov.js";import"./index-DOuKqbND.js";import"./index-DS1ZdVNz.js";import"./index-D2mEmfXN.js";import"./Tooltip-BXhUmSeH.js";import"./Button-B9ufjNyc.js";import"./index-DCToeNHS.js";import"./Box-CIJZFnEp.js";import"./Grid-BQHRv1eX.js";import"./styled-PDED6P24.js";import"./isMuiElement-Q-8wUiYz.js";import"./Stack--jn-4dia.js";import"./Container-CTcWCZH6.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-D577_Nqf.js";import"./FormHelperText-BITEPghI.js";import"./FormControlLabel-D1O_4yuP.js";import"./Typography-cWmdXt40.js";import"./Switch-DurZW9YG.js";import"./SwitchBase-iVmERgWS.js";import"./RadioGroup-CIUS5EVT.js";import"./Radio-DHSYbRtv.js";import"./FormGroup-CcYCP0zR.js";import"./Divider-C6IIcVBl.js";import"./Table-g0tJLxjJ.js";import"./TableRow-teD-3kqi.js";const oe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(v,{role:"presentation",children:e.jsx(j,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
