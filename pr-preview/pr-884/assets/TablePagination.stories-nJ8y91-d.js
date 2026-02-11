import{j as e,r as s}from"./iframe-BVv6e2Np.js";import{a as t,T as P}from"./TablePagination-BcUWjvAM.js";import{T as l}from"./Table-BTxCEjqR.js";import{T as d}from"./TableRow-BQrzTvC7.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-Btxz4aAY.js";import"./memoTheme-PshU1uu8.js";import"./styled-Bn_uYMrA.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-CRJOnTar.js";import"./useSlot-Dio4nhmD.js";import"./mergeSlotProps-C-9V1pWD.js";import"./useForkRef-QN_ofJ4G.js";import"./KeyboardArrowRight-097t5za8.js";import"./createSvgIcon-qSa5VTtT.js";import"./SvgIcon-DdboHVfF.js";import"./PaginationItem-b64QE-Mg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BmS5gOfS.js";import"./useTimeout-VBRAECgQ.js";import"./TransitionGroupContext-CL5aD017.js";import"./useEventCallback-emf-njXD.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BcGJMyaC.js";import"./CircularProgress-Pj_uAnf5.js";import"./OutlinedInput-DI3zgq5U.js";import"./useFormControl-BAeGzom2.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CDbRhXwf.js";import"./List-Bg0xhiqI.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-Dyb5oikR.js";import"./Menu-Bm9loH8N.js";import"./useSlotProps-DYhjeFex.js";import"./Popover-CEwjWQ9G.js";import"./Portal-BwoQ5t2b.js";import"./useTheme-DDxdviwK.js";import"./utils-D_B0tNMS.js";import"./getReactElementRef-Dy4ZaQ26.js";import"./mergeSlotProps-C-YQqgT8.js";import"./Modal-CAkb2EYM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-C4f2cZgH.js";import"./Fade-Y8hFLq3H.js";import"./Paper-CdGIIeGD.js";import"./useControlled-D2of93L0.js";import"./index-B4G_w09r.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-BbDkjMe6.js";import"./index-BJdoztUJ.js";import"./index-BiBDMnSv.js";import"./index-CAgTxRUA.js";import"./Tooltip-DzBLv92b.js";import"./Button-DHfmf7R6.js";import"./index-BqnVqtTN.js";import"./Box-DerM4oMw.js";import"./Grid-Bt9ySBei.js";import"./styled-CBIa6Uon.js";import"./isMuiElement-Cd1iR6Ah.js";import"./Stack-C99HnkMn.js";import"./Container-BDZyOzn-.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BgKjCqoz.js";import"./FormHelperText-BrnALqdS.js";import"./FormControlLabel-DGBsJpdM.js";import"./Typography-DXGXRPqa.js";import"./Switch-9sJWqMky.js";import"./SwitchBase-lr7Awnj5.js";import"./RadioGroup-Fo5bGjwG.js";import"./Radio-DckZLIGy.js";import"./FormGroup-CU_RoCsb.js";import"./Divider-CDfQZRd7.js";import"./Table-Cu1IWbpo.js";import"./TableRow-BZTC_dOS.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: TablePaginationProps) => {
    const [page, setPage] = useState(args.page);
    useEffect(() => {
      setPage(args.page);
    }, [args.page]);
    return <TablePagination {...args} page={page} onPageChange={(event, page) => {
      setPage(page);
    }} />;
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: TablePaginationProps) => <TablePagination {...args} />,
  args: {
    rowsPerPageOptions: []
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (args: TablePaginationProps) => <TablePagination {...args} />,
  args: {
    rowsPerPage: -1,
    rowsPerPageOptions: [-1]
  }
}`,...n.parameters?.docs?.source}}};const Nr=["_TablePagination","_AsPartOfTable","_FixedRowsPerPage","_ShowAll"];export{p as _AsPartOfTable,i as _FixedRowsPerPage,n as _ShowAll,a as _TablePagination,Nr as __namedExportsOrder,Mr as default};
