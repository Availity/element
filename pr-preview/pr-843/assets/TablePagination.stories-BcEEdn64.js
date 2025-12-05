import{j as e,r as s}from"./iframe-DKPLEfLw.js";import{a as t,T as j}from"./TablePagination-MVacnzKd.js";import{T as v}from"./Table-D33cP8ii.js";import{T as O}from"./TableRow-D6YZJWkS.js";import"./preload-helper-Dp1pzeXC.js";import"./TableCell-BwsKndhd.js";import"./memoTheme-DCtqnaOZ.js";import"./styled-DmVvl1cy.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-BTjjslOW.js";import"./useSlot-BRbtrhUo.js";import"./mergeSlotProps-DczvM8iT.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BBFL5x5N.js";import"./KeyboardArrowRight-Dm4l_80Y.js";import"./createSvgIcon-vtaDbQWp.js";import"./SvgIcon-FjAnPN_Y.js";import"./PaginationItem-wuRlOy-J.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-ChXh0SoD.js";import"./useTimeout-C_Ka5Mcj.js";import"./TransitionGroupContext-PAkUv-tF.js";import"./useEventCallback-DDVZojhm.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-8Ec7VkLh.js";import"./CircularProgress-QNpYF3E0.js";import"./OutlinedInput-DIczrftV.js";import"./useFormControl-B1pwVxN7.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DmUIChEl.js";import"./List-BjcIUzlW.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-y-N0h_1d.js";import"./Menu-B7TQxF7y.js";import"./useSlotProps-RoKiuIH8.js";import"./Popover-DN87KpwA.js";import"./Portal-DsulJ7FL.js";import"./useTheme-9F3p9Qod.js";import"./utils-BvzjqUtG.js";import"./getReactElementRef-BnAyG0-a.js";import"./mergeSlotProps-AOTIRq8g.js";import"./Modal-DY-Qgl5b.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-sfrV9DZb.js";import"./Fade-CbLeUs7S.js";import"./Paper-Ca4rgQEJ.js";import"./useControlled-RZIZY8-C.js";import"./index-WRElMkUo.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-D1LvX15h.js";import"./index-CX145kFJ.js";import"./index-DS1ZdVNz.js";import"./index-BFdrycj9.js";import"./Tooltip-CV3fhIPH.js";import"./Button-DWZjJ-VR.js";import"./index-Dn59n-rN.js";import"./Box-CZdlnD3e.js";import"./Grid-Bc7_QC4M.js";import"./styled-Wz6Z4Uga.js";import"./isMuiElement-Bob4bJgN.js";import"./Stack-ClwGR_Ch.js";import"./Container-DJ1Q8iJN.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-BKHgwe-Y.js";import"./FormHelperText-BZehQ3tG.js";import"./FormControlLabel-BINRX9VO.js";import"./Typography-BTTsir7-.js";import"./Switch-BHae2QHc.js";import"./SwitchBase-XH4IthcC.js";import"./RadioGroup-I65WgL0c.js";import"./Radio-DOe0Rmw3.js";import"./FormGroup-C3uHp-KP.js";import"./Divider-CuebH3Dd.js";import"./Table-1uVYaCoz.js";import"./TableRow-OGeFcri4.js";const oe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(v,{role:"presentation",children:e.jsx(j,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
