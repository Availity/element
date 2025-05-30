import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as s}from"./index-BgYLq7fD.js";import{c as t,T as j,b as v}from"./TablePagination-GcyHethy.js";import{T as O}from"./TableRow-D5lAztty.js";import"./TableCell-BdZto29H.js";import"./TableContainer-ClzDj8v-.js";import"./TableSortLabel-ETe2iovo.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./TableHead-oMlxqc4e.js";import"./generateUtilityClass-GxznSYtt.js";import"./identifier-CHUoN9pF.js";import"./TableCell-DT8dV3s1.js";import"./memoTheme-BLrvrRyo.js";import"./styled-FZfCzBz5.js";import"./DefaultPropsProvider-ArLX9SCD.js";import"./generateUtilityClasses-aotQgNYZ.js";import"./index-imWuPkY1.js";import"./index-DyJdRKzS.js";import"./KeyboardArrowRight-DGijcEGn.js";import"./createSvgIcon-DK1T27V3.js";import"./SvgIcon-D3xe1wVB.js";import"./PaginationItem-flpc0RTc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-qvYlW2UV.js";import"./resolveComponentProps-XMphxBSb.js";import"./useForkRef-Dz4aGlyk.js";import"./ButtonBase-DwAEbHIm.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./emotion-react.browser.esm-DW5OmoQI.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BFylt634.js";import"./useId-DIK8ekB4.js";import"./CircularProgress-o1goEU37.js";import"./OutlinedInput-ClKDCKpR.js";import"./useFormControl-t_-EwZHM.js";import"./formControlState-Dq1zat_P.js";import"./isHostComponent-DVu5iVWx.js";import"./index-Df15702_.js";import"./extendSxProp-BZnzVrgj.js";import"./useTheme-CVByJb8R.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-B0sbJV79.js";import"./List-CN2yCDHK.js";import"./listItemTextClasses-BE6nMJZB.js";import"./dividerClasses-Cy3VQ5Zc.js";import"./Select-D8Pqa1Dd.js";import"./Menu-BUIr0rCt.js";import"./useSlotProps-DT0tbkWv.js";import"./Popover-DNs0CrC2.js";import"./Portal-DEVqEMA6.js";import"./useTheme-BGaXYmwe.js";import"./utils-tFrEP9Vf.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./getReactElementRef-Df0xbma2.js";import"./Paper-zGtC1N39.js";import"./Modal-BSor9Am9.js";import"./Backdrop-DwIksyfj.js";import"./Fade-rL0rk9XF.js";import"./useControlled-DxC1uCGX.js";import"./index-Daj15cVv.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./Pagination-BT2C5VbO.js";import"./index-BJt3X_mY.js";import"./index-DJKl12U0.js";import"./index-k9OtkSpc.js";import"./Tooltip-Xh9QA514.js";import"./Button-DrYdciQ0.js";import"./LoadingButton-C6EjcQI6.js";import"./index-DmY_4rvh.js";import"./Box-BU2WakPM.js";import"./Grid2-BbvvmKhh.js";import"./styled-CsKbBpC_.js";import"./isMuiElement-DiOAsJE6.js";import"./useThemeProps-BNBLMFIr.js";import"./Stack-2ILcP_1D.js";import"./Container-DvcsWH8C.js";import"./faCheck-BUdkY9Qv.js";import"./FormControlLabel-NrRuXsuu.js";import"./Typography-geKghQyJ.js";import"./Switch-BMNMooHv.js";import"./SwitchBase-DpeF2ikX.js";import"./RadioGroup-CGGGzwtq.js";import"./Divider-CE8hkX1u.js";import"./TableRow-CYkSGJKZ.js";import"./visuallyHidden-Dan1xhjv.js";import"./TableContainer-BQmYc0Cb.js";import"./TableSortLabel-DaBUob62.js";const ue={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(j,{role:"presentation",children:e.jsx(v,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const be=["_TablePagination","_AsPartOfTable","_FixedRowsPerPage","_ShowAll"];export{p as _AsPartOfTable,i as _FixedRowsPerPage,n as _ShowAll,a as _TablePagination,be as __namedExportsOrder,ue as default};
