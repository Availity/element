import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{r as s}from"./index-DcWiA9TO.js";import{c as t,T as j,b as v}from"./TablePagination-De27-qkv.js";import{T as O}from"./TableRow-4Bu_8-8J.js";import"./TableCell-FlE4k9GT.js";import"./TableContainer-BHzN-e7g.js";import"./TableSortLabel-DDvM76TQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TableHead-BBbVjsXx.js";import"./generateUtilityClass-DELP8s2G.js";import"./identifier-CenlGZaM.js";import"./TableCell-C_kdAjxi.js";import"./memoTheme-CIpOTVoB.js";import"./styled-wZqJTO_n.js";import"./DefaultPropsProvider-LCKMq1Iv.js";import"./generateUtilityClasses-duJ5YrlI.js";import"./index-B4RNdokz.js";import"./index-nos-0K8U.js";import"./KeyboardArrowRight-DtJl0LVn.js";import"./createSvgIcon-BzSwLqYD.js";import"./SvgIcon-DfAk99tL.js";import"./PaginationItem-BQGjWpdu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-CaH4cQiJ.js";import"./resolveComponentProps-D4XT56l6.js";import"./useForkRef-BVrIj09m.js";import"./ButtonBase-Ctwr4_Dd.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./emotion-react.browser.esm-BKUJyPAt.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DGohL5ME.js";import"./useId-DszduLV4.js";import"./CircularProgress-D2topXWR.js";import"./OutlinedInput-BeuFtjMr.js";import"./useFormControl-68oiojFJ.js";import"./formControlState-Dq1zat_P.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BKNdG2lN.js";import"./extendSxProp-w61GJfY-.js";import"./useTheme-DwYC2ms6.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DmzwdCRd.js";import"./List-BRpAtMOZ.js";import"./listItemTextClasses-DjWz3xcn.js";import"./dividerClasses-C6lHB_qP.js";import"./Select-Dt0UCwxY.js";import"./Menu-BU9jXi-3.js";import"./useSlotProps-DE50rPTb.js";import"./Popover-CSXcjUnK.js";import"./Portal-D32Mdiva.js";import"./useTheme-Cf-RAc4Y.js";import"./utils-D5ZkK9XY.js";import"./index-BEx9gAkE.js";import"./getReactElementRef-AnOffBoZ.js";import"./Paper-DoDJPSvm.js";import"./Modal-B_4-9GXq.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-4xfgJS0q.js";import"./Fade-DlB6bWB0.js";import"./useControlled-WdbyInBW.js";import"./index-BDqO7SwG.js";import"./faUser-CAcveCor.js";import"./Pagination-BPOTGBJQ.js";import"./index-BlC5JLGo.js";import"./index-DMWJB0MK.js";import"./index-DSGElAqY.js";import"./Tooltip-BNHD4B5V.js";import"./Button-C-tuTFv-.js";import"./LoadingButton-BK9aMQRn.js";import"./faCheck-B05F4ORy.js";import"./FormLabel-CZFypZnO.js";import"./FormControlLabel-CImDabQe.js";import"./Typography-Dw3TlP36.js";import"./Switch-CXk7mhi6.js";import"./SwitchBase-CHDa-0k7.js";import"./RadioGroup-B7AA9dKi.js";import"./Box-DR5TX31P.js";import"./Divider-Dys0WftY.js";import"./Stack-BPYMGdgv.js";import"./styled-CIC6PLSI.js";import"./useThemeProps-BAwiOWAz.js";import"./TableRow-DxrEIraJ.js";import"./visuallyHidden-Dan1xhjv.js";import"./TableContainer-2RNrsJgq.js";import"./TableSortLabel-C4bn4vsP.js";const ge={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(j,{role:"presentation",children:e.jsx(v,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: TablePaginationProps) => {
    const [page, setPage] = useState(args.page);
    useEffect(() => {
      setPage(args.page);
    }, [args.page]);
    return <TablePagination {...args} page={page} onPageChange={(event, page) => {
      setPage(page);
    }} />;
  }
}`,...(l=(P=a.parameters)==null?void 0:P.docs)==null?void 0:l.source}}};var d,u,b;p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(u=p.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var T,f,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const ce=["_TablePagination","_AsPartOfTable","_FixedRowsPerPage","_ShowAll"];export{p as _AsPartOfTable,i as _FixedRowsPerPage,n as _ShowAll,a as _TablePagination,ce as __namedExportsOrder,ge as default};
