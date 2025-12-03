import{j as e,r as s}from"./iframe-L2WfQCwc.js";import{a as t,T as j}from"./TablePagination-osvTWc9n.js";import{T as v}from"./Table-BRY25V69.js";import{T as O}from"./TableRow-COlyuBUN.js";import"./preload-helper-Dp1pzeXC.js";import"./TableCell-DoCTjD6W.js";import"./memoTheme-DbVnS5NV.js";import"./styled-BnTbP4z1.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-B0o1t8Nx.js";import"./useSlot-DIvU7LRB.js";import"./mergeSlotProps-DHVHFrS4.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C3tscFOR.js";import"./KeyboardArrowRight-DPkVqFQ1.js";import"./createSvgIcon-CN7Wy4aL.js";import"./SvgIcon-B1vwUV3N.js";import"./PaginationItem-Cbp8J1SF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DCYuzXhR.js";import"./useTimeout-CpICOsEx.js";import"./TransitionGroupContext-yrVXEs3b.js";import"./useEventCallback-CrctvfCx.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BicFpcJT.js";import"./CircularProgress-B0WBDXJs.js";import"./OutlinedInput-CWyWBPMD.js";import"./useFormControl-DN-RqkfH.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DRQMWxSt.js";import"./List-D2he6eDF.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-DjLfknxE.js";import"./Menu-D7peMxM5.js";import"./useSlotProps-B_VhlgSD.js";import"./Popover-B7G6K2kq.js";import"./Portal-B8Bei1bh.js";import"./useTheme-X_Qa8Dhp.js";import"./utils-B5nq23mn.js";import"./getReactElementRef-BWc-HwFQ.js";import"./mergeSlotProps-CWoOrWbD.js";import"./Modal-D5Qdog5s.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-D7wf_uck.js";import"./Fade-CQS6r_wU.js";import"./Paper-BGi8TE6x.js";import"./useControlled-BwGYVh51.js";import"./index-CSnqgGqw.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-D6SvyhyC.js";import"./index-CzXABN3m.js";import"./index-DJKl12U0.js";import"./index-Dn592ewG.js";import"./Tooltip-BMsQv-ox.js";import"./Button-B1u8B3-l.js";import"./index-jgvtu0vB.js";import"./Box-CX0N0ctd.js";import"./Grid-B587iyjg.js";import"./styled-cdoMrI2T.js";import"./isMuiElement-SRHHNfX0.js";import"./Stack-BhxFzEo9.js";import"./Container-0A1GRnLt.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-8xWJV5Dj.js";import"./FormHelperText-CamvAlEY.js";import"./FormControlLabel-mvG_upvO.js";import"./Typography-caGtC1xp.js";import"./Switch-kUKw20MM.js";import"./SwitchBase-CQdZnqs0.js";import"./RadioGroup-C2RdLrrk.js";import"./Radio-36twfGTs.js";import"./FormGroup-D2CPtvpg.js";import"./Divider-B5nuI06r.js";import"./Table-BjndtMUA.js";import"./TableRow-CsnVd0BE.js";const oe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(v,{role:"presentation",children:e.jsx(j,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
