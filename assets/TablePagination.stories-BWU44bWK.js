import{j as e,r as s}from"./iframe-BiHmAaXu.js";import{a as t,T as j}from"./TablePagination-DABuB-SL.js";import{T as v}from"./Table-CQjOEN-B.js";import{T as O}from"./TableRow-BLKXCYTc.js";import"./preload-helper-Dp1pzeXC.js";import"./TableCell-CIS2n0K6.js";import"./memoTheme-zGeQXNTV.js";import"./styled-Dtda04LL.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-mzChgjtp.js";import"./useSlot-BwnKjiCD.js";import"./mergeSlotProps-vY4QflWx.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-egRdNH_q.js";import"./KeyboardArrowRight-D75iINTi.js";import"./createSvgIcon-IF8Bi_Qp.js";import"./SvgIcon-CbropkBN.js";import"./PaginationItem-A64D0E4Y.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DdAFxN83.js";import"./useTimeout-BxBXWuFq.js";import"./TransitionGroupContext-B15fWyGj.js";import"./useEventCallback-A-8aNATG.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C3B7XTqu.js";import"./CircularProgress-BsuuE2cE.js";import"./OutlinedInput-BWJb0RpZ.js";import"./useFormControl-DA3IDcHJ.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-C66-84ao.js";import"./List-DXRLKjrx.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-BDE1CX3n.js";import"./Menu-DYeOy5Na.js";import"./useSlotProps-BP935MD-.js";import"./Popover-D5fdFEs-.js";import"./Portal-3VCYEpJr.js";import"./useTheme-D51yRe8t.js";import"./utils-Derh_BFQ.js";import"./getReactElementRef-DBbsA3vx.js";import"./mergeSlotProps-BH9FGeIP.js";import"./Modal-zlXF-WhO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-i5bVk1OO.js";import"./Fade-Ck39exYl.js";import"./Paper-9ZvZWPZJ.js";import"./useControlled-QJx0Pv3z.js";import"./index-BvV5FGi6.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-Cgv8docb.js";import"./index-ByUyCzHb.js";import"./index-DJKl12U0.js";import"./index-Bh-1iHl-.js";import"./Tooltip-D9RCop2K.js";import"./Button-CeglKkVM.js";import"./index-Cgd0JpyD.js";import"./Box-CiWIFjse.js";import"./Grid-CEmIxvlK.js";import"./styled-Zig1TB_m.js";import"./isMuiElement-DKHzA-If.js";import"./Stack-Dj-nUodw.js";import"./Container-BlXDxTKA.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-xE0j2NN6.js";import"./FormHelperText-BzT4cDWj.js";import"./FormControlLabel-PFGWuE2R.js";import"./Typography-De5LbgvD.js";import"./Switch-C-wqo3KQ.js";import"./SwitchBase-DdUPb-fL.js";import"./RadioGroup-dLknwHzj.js";import"./Radio-CQ8fVyUu.js";import"./FormGroup-D0sXqKiB.js";import"./Divider-BeTsCdiD.js";import"./Table-BHpmdfgD.js";import"./TableRow-CIb0OeHO.js";const oe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(v,{role:"presentation",children:e.jsx(j,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
