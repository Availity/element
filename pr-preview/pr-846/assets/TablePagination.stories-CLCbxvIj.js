import{j as e,r as s}from"./iframe-BOqhEPj6.js";import{a as t,T as j}from"./TablePagination-xA7HH8Dr.js";import{T as v}from"./Table-D6CvMg6T.js";import{T as O}from"./TableRow-BaQWZeKR.js";import"./preload-helper-Dp1pzeXC.js";import"./TableCell-Dhq_h1eK.js";import"./memoTheme-BYC15E_2.js";import"./styled-ClQgRsdc.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-BJWa-WZn.js";import"./useSlot-B469CtEr.js";import"./mergeSlotProps-sNcrx_r5.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D87wou6e.js";import"./KeyboardArrowRight-BvYhVlfS.js";import"./createSvgIcon-BzRll-a0.js";import"./SvgIcon-BlVGnbba.js";import"./PaginationItem-5G8y1Onh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C7cVXKAH.js";import"./useTimeout-CKtuW5yl.js";import"./TransitionGroupContext-TO625Yxj.js";import"./useEventCallback-BHkbNqwn.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BP3VjvuD.js";import"./CircularProgress-Xg5tMO8-.js";import"./OutlinedInput-PlN7TJgo.js";import"./useFormControl-BmeSG9ns.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-BGoG3jjw.js";import"./List-B_DaY4Qf.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-B9cbP78R.js";import"./Menu-Bf3EcXbm.js";import"./useSlotProps-DnEE7xuk.js";import"./Popover-C29c9q_D.js";import"./Portal-Cx3wFGpK.js";import"./useTheme-s5qe_7AX.js";import"./utils-CDaWu4n1.js";import"./getReactElementRef-DF_NnWMb.js";import"./mergeSlotProps-DX0ZwzcB.js";import"./Modal-plhmqEr0.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-hLK-Cyuw.js";import"./Fade-Dvz2gflC.js";import"./Paper-Bx06Uw5g.js";import"./useControlled-CmW8DIBb.js";import"./index-DX6yAWWK.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-B8i-EJYQ.js";import"./index-Blj6OPPS.js";import"./index-DS1ZdVNz.js";import"./index-CQw0a6ar.js";import"./Tooltip-DKIHpwU2.js";import"./Button-BDF2rRxm.js";import"./index-DMdqsLqb.js";import"./Box-CIHxGpEh.js";import"./Grid-BJc_wFud.js";import"./styled-BY2Q14_8.js";import"./isMuiElement-FBus6K6C.js";import"./Stack-DPaZpNJF.js";import"./Container-Ck_72FoA.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-CceHt0Ap.js";import"./FormHelperText-Bp2ajVCS.js";import"./FormControlLabel-BYe2eUOw.js";import"./Typography-DCSeVpBd.js";import"./Switch-BuD3o8qk.js";import"./SwitchBase-C1i5BvMK.js";import"./RadioGroup-Dw0DM2_a.js";import"./Radio-Co3Vqsmj.js";import"./FormGroup-BnSyuzUv.js";import"./Divider-DJj0BQqc.js";import"./Table-COS8RPDM.js";import"./TableRow-DWzFP_NW.js";const oe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(v,{role:"presentation",children:e.jsx(j,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
