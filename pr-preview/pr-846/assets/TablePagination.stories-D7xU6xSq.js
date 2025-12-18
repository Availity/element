import{j as e,r as s}from"./iframe-BgIiq-du.js";import{a as t,T as j}from"./TablePagination-DVsD9cZ_.js";import{T as v}from"./Table-BcAR6X5Q.js";import{T as O}from"./TableRow-BTaFn-lM.js";import"./preload-helper-Dp1pzeXC.js";import"./TableCell-CUdlVRxp.js";import"./memoTheme-BUFmT7AM.js";import"./styled-nLr0G4t_.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-Bvz8PxfP.js";import"./useSlot-EdtQUYAt.js";import"./mergeSlotProps-CnVkUNbm.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DMJLoebf.js";import"./KeyboardArrowRight-DTfqS_8O.js";import"./createSvgIcon-ibTAZZq3.js";import"./SvgIcon-O7DiaTLk.js";import"./PaginationItem-CelCUBnq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Cb3z3UZq.js";import"./useTimeout-BqNIrHgl.js";import"./TransitionGroupContext-CQbv1oLy.js";import"./useEventCallback-BIchpltM.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-ByM6u0PW.js";import"./CircularProgress-DMUtFszr.js";import"./OutlinedInput-Dg_t9JtL.js";import"./useFormControl-BMochES0.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-BhtyPVDm.js";import"./List-BBSN2ySS.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-CBCPH66q.js";import"./Menu-LL6n-Tmm.js";import"./useSlotProps-C3d2_4qf.js";import"./Popover-BfSxTCFv.js";import"./Portal-DTFxnUfG.js";import"./useTheme-D1y-VmtJ.js";import"./utils-NnkRphE_.js";import"./getReactElementRef-CoLPcd7a.js";import"./mergeSlotProps-0qvZmlEs.js";import"./Modal-BZOZDgI9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-eqU3iNBn.js";import"./Fade-BZsMZeiY.js";import"./Paper-Zfwh-5mP.js";import"./useControlled-BtJ2k5T0.js";import"./index-DDWPjCym.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-Br4QXR-w.js";import"./index-BKW4MMGN.js";import"./index-DS1ZdVNz.js";import"./index-CEJHTNJk.js";import"./Tooltip-ZBvV1JRk.js";import"./Button-CxUn3cs_.js";import"./index-BbN5E_zC.js";import"./Box-Bqm_9Atf.js";import"./Grid-BxagjAZA.js";import"./styled-D4IfxCmy.js";import"./isMuiElement-CdT2rXyX.js";import"./Stack-L7a-IdF6.js";import"./Container-DQV0JO0Z.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-CyyVYiDN.js";import"./FormHelperText-B_hQhJDs.js";import"./FormControlLabel-CUpZZg-L.js";import"./Typography-BSAr1ZxE.js";import"./Switch-OK2h4JsG.js";import"./SwitchBase-2uzOx-Cu.js";import"./RadioGroup-DoiLr74G.js";import"./Radio-B8BDq2Ri.js";import"./FormGroup-Cad3Q2FR.js";import"./Divider-BgBGt6wQ.js";import"./Table-Cqy8JrAs.js";import"./TableRow-BR68uPq1.js";const oe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(v,{role:"presentation",children:e.jsx(j,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
