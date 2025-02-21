import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{r as s}from"./index-DcWiA9TO.js";import{c as t,T as j,b as v}from"./TablePagination-D3phJt3W.js";import{T as O}from"./TableRow-CVujlSx0.js";import"./TableCell-B-4SwkOJ.js";import"./TableContainer-BYcHd2uh.js";import"./TableSortLabel-BQqdJwno.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TableHead-DNc8L0mv.js";import"./generateUtilityClass-Bqc1qv72.js";import"./createTheme-CKCRSfxM.js";import"./TableCell-BJsQbUAN.js";import"./memoTheme-DvanvhnP.js";import"./styled-Dbr85gFc.js";import"./DefaultPropsProvider-CIAoFptl.js";import"./generateUtilityClasses-DyVAdLaw.js";import"./index-DOIkBcWq.js";import"./index-nos-0K8U.js";import"./KeyboardArrowRight-CZg1oL5c.js";import"./createSvgIcon-IUeEQzFc.js";import"./SvgIcon-BS-p1eoC.js";import"./PaginationItem-BPsdbuBB.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-DO4SmqlR.js";import"./resolveComponentProps-BiTA-uKg.js";import"./useForkRef-BVrIj09m.js";import"./ButtonBase-DQZrtVrL.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./emotion-react.browser.esm-rTq5AsO6.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-v3cBwN0V.js";import"./useId-DszduLV4.js";import"./CircularProgress-BHFEuwTi.js";import"./OutlinedInput-DUFM6NiM.js";import"./useFormControl-68oiojFJ.js";import"./formControlState-Dq1zat_P.js";import"./isHostComponent-DVu5iVWx.js";import"./index-D-S2KyN4.js";import"./extendSxProp-BKaoT_Qt.js";import"./useTheme-BUEqHFQV.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-philOZTp.js";import"./List-Ce1NCs06.js";import"./listItemTextClasses-D4YKThxo.js";import"./dividerClasses-Dy0fxzds.js";import"./Select-Bh3HlTBm.js";import"./Menu-BNF0dZPe.js";import"./useSlotProps-Cuv6gcjd.js";import"./Popover-DJDHQo2S.js";import"./Portal-CKWfQBCE.js";import"./useTheme-ChS1Y5Lw.js";import"./utils-D5ZkK9XY.js";import"./index-BEx9gAkE.js";import"./getReactElementRef-AnOffBoZ.js";import"./Paper-CvfFJp8a.js";import"./Modal-CzgY4V0Y.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-B9IVkNZn.js";import"./Fade-DbM47FxC.js";import"./useControlled-WdbyInBW.js";import"./index--IoBtPgS.js";import"./faCircleArrowRight-fEvkKBkH.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./Pagination-DNPgGNvr.js";import"./index-BPVUk_cQ.js";import"./index-DMWJB0MK.js";import"./index-CDwEgPAM.js";import"./Tooltip-eF_7lzc5.js";import"./Button-B22iKlEO.js";import"./LoadingButton-B6FUrH4t.js";import"./faCheck-B05F4ORy.js";import"./FormLabel-DrJE-ijH.js";import"./FormControlLabel-DLlzi5Ft.js";import"./Typography-Cng4iL4p.js";import"./Switch-6eDJgjyT.js";import"./SwitchBase-DPjFJeLH.js";import"./RadioGroup-DLgS-ogh.js";import"./Box-BAeL439g.js";import"./Divider-D_YJaRgz.js";import"./Stack-C5Zrd0Q6.js";import"./styled-C36SNKZX.js";import"./useThemeProps-YZ7_EcgO.js";import"./TableRow-DuRUQs72.js";import"./visuallyHidden-Dan1xhjv.js";import"./TableContainer-5qF23HLt.js";import"./TableSortLabel-DB6oJZ4F.js";const Pe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(j,{role:"presentation",children:e.jsx(v,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
