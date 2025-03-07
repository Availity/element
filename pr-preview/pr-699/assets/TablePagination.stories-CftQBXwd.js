import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{r as s}from"./index-DcWiA9TO.js";import{c as t,T as j,b as v}from"./TablePagination-CK3RRAKL.js";import{T as O}from"./TableRow-DVKDfasV.js";import"./TableCell-x0hwsAja.js";import"./TableContainer-7k-JNPYF.js";import"./TableSortLabel-CxC50Qug.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TableHead-DdEksbPN.js";import"./generateUtilityClass-CVWqFxsA.js";import"./identifier-Dtqimryx.js";import"./TableCell-BQKipwh9.js";import"./memoTheme-D-rVhYRp.js";import"./styled-CF1hcdwO.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./index-otv_s7jV.js";import"./index-nos-0K8U.js";import"./KeyboardArrowRight-PXT6z23P.js";import"./createSvgIcon-TketyoFF.js";import"./SvgIcon-DSdWmKAH.js";import"./PaginationItem-BsVNDaT9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-DnkSxE3X.js";import"./resolveComponentProps-Dg20wxiM.js";import"./useForkRef-BVrIj09m.js";import"./ButtonBase-DbVRbsLs.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Caxu-qgA.js";import"./useId-DszduLV4.js";import"./CircularProgress-D8w9ZPs6.js";import"./OutlinedInput-CQlxW3ax.js";import"./useFormControl-68oiojFJ.js";import"./formControlState-Dq1zat_P.js";import"./isHostComponent-DVu5iVWx.js";import"./index-f0Aa_BgU.js";import"./extendSxProp-B5AgUjQT.js";import"./useTheme-C2CrmYKc.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DHI5k2qe.js";import"./List-ChBzRQcW.js";import"./listItemTextClasses-QA0fdXLT.js";import"./dividerClasses-BmOcEkDu.js";import"./Select-hLZ2S4VH.js";import"./Menu-Byu17A6t.js";import"./useSlotProps-BAIpVL6Y.js";import"./Popover-ChEuM7rO.js";import"./Portal-CBAx_nZm.js";import"./useTheme-DUkCvbx_.js";import"./utils-D5ZkK9XY.js";import"./index-BEx9gAkE.js";import"./getReactElementRef-AnOffBoZ.js";import"./Paper-DXcIEVia.js";import"./Modal-B5s0Thvt.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-B4gbyDGC.js";import"./Fade-Dl4gmST4.js";import"./useControlled-WdbyInBW.js";import"./index-4AU0IlPL.js";import"./faCircleArrowRight-BeBmJtPK.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./Pagination-BtNphvVn.js";import"./index-DS2qViMa.js";import"./index-DMWJB0MK.js";import"./index-DLsH_p52.js";import"./Tooltip-CiiaKkqp.js";import"./Button-BAEbeAyH.js";import"./LoadingButton-9DxABi24.js";import"./faCheck-B05F4ORy.js";import"./FormLabel-98YPf6ct.js";import"./FormControlLabel-GqYWwHWT.js";import"./Typography-CvSvtD2a.js";import"./Switch-BqVUWLaW.js";import"./SwitchBase-Z9YgLJlx.js";import"./RadioGroup-BogPRRDq.js";import"./Box-DWnb8VZB.js";import"./Divider-jUONNV4j.js";import"./Stack-BcsM4Vc0.js";import"./styled-vBjI3IQc.js";import"./useThemeProps-BIK-1DKm.js";import"./TableRow-DHQkOw7Z.js";import"./visuallyHidden-Dan1xhjv.js";import"./TableContainer-Msdvjxjc.js";import"./TableSortLabel-IF83hpqd.js";const Pe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(j,{role:"presentation",children:e.jsx(v,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const le=["_TablePagination","_AsPartOfTable","_FixedRowsPerPage","_ShowAll"];export{p as _AsPartOfTable,i as _FixedRowsPerPage,n as _ShowAll,a as _TablePagination,le as __namedExportsOrder,Pe as default};
