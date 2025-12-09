import{j as e,r as s}from"./iframe-Cv4YEYCT.js";import{a as t,T as j}from"./TablePagination-CsfEjb0u.js";import{T as v}from"./Table-DN-BD-kb.js";import{T as O}from"./TableRow-B_2JkSu9.js";import"./preload-helper-Dp1pzeXC.js";import"./TableCell-Cs-IIckH.js";import"./memoTheme-pu_-LVrP.js";import"./styled-BjYrgzj8.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-BS_BMHuX.js";import"./useSlot-DM3XJHLF.js";import"./mergeSlotProps-bXMVHHr9.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Cy9-wLDX.js";import"./KeyboardArrowRight-D0I0Fdd1.js";import"./createSvgIcon-anG-4vyn.js";import"./SvgIcon-RzgLEiZ2.js";import"./PaginationItem-B5KVFN58.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Te2dWPfF.js";import"./useTimeout-S5FMYS9P.js";import"./TransitionGroupContext-ReV1kAll.js";import"./useEventCallback-Dezg1Jp2.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-y4oP_Qzi.js";import"./CircularProgress-4dbP_wqt.js";import"./OutlinedInput-C6lArYvq.js";import"./useFormControl-CIuk8i81.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DRWLENGv.js";import"./List-5gkoo-vG.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-DdtRsles.js";import"./Menu-Dp7wAg9-.js";import"./useSlotProps-DpLQsBTB.js";import"./Popover-BbkQ84jj.js";import"./Portal-HdFRzq7f.js";import"./useTheme-yn0WqvlF.js";import"./utils-CC-nVGrC.js";import"./getReactElementRef-Cucsv-xJ.js";import"./mergeSlotProps-pd1YXqCy.js";import"./Modal-C2-2MRhp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-CJgjCZ3h.js";import"./Fade-72ut2BWr.js";import"./Paper-BGV9jSeN.js";import"./useControlled-DotOmqWu.js";import"./index-CNJpAeel.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-D9TlGQUu.js";import"./index-DnPt5deZ.js";import"./index-DS1ZdVNz.js";import"./index-C6B9H3-6.js";import"./Tooltip-DdwYWGQa.js";import"./Button-CxHqlBlz.js";import"./index-bB8uZqWv.js";import"./Box-GX48hKKC.js";import"./Grid-CuYwHY7F.js";import"./styled-Cz-jNn-e.js";import"./isMuiElement-C4Xkg-Fl.js";import"./Stack-BZ8fB6iW.js";import"./Container-Ceu7L51X.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-BwjfLjpu.js";import"./FormHelperText-f-ithwPR.js";import"./FormControlLabel-Bn-8_Wfs.js";import"./Typography-BHaCpI2A.js";import"./Switch-CUTgowE6.js";import"./SwitchBase-CKHrTpOb.js";import"./RadioGroup-BkrhAZ5l.js";import"./Radio-DCQT_nxE.js";import"./FormGroup-CZi0Ex0q.js";import"./Divider-0N8BvuQ6.js";import"./Table-CRx1nYRl.js";import"./TableRow-CoAONDPE.js";const oe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(v,{role:"presentation",children:e.jsx(j,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
