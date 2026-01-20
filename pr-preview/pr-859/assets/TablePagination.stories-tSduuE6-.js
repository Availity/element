import{j as e,r as s}from"./iframe-Bb3d8CAJ.js";import{a as t,T as P}from"./TablePagination-CrXRZEO8.js";import{T as l}from"./Table-Bcx9_w6D.js";import{T as d}from"./TableRow-BlQ8kZXF.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-BU_YF6Ni.js";import"./memoTheme-DG97Ks8Q.js";import"./styled-DljcZuS8.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-DK2zEKys.js";import"./useSlot-DsuYGff3.js";import"./mergeSlotProps-gjnpxKKm.js";import"./useForkRef-B1A3wtQb.js";import"./KeyboardArrowRight-BOBvfysg.js";import"./createSvgIcon-DaOARJ1X.js";import"./SvgIcon-B3pyeCMx.js";import"./PaginationItem-CIJUfuPd.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-ChdXNNb1.js";import"./useTimeout-CybQo20w.js";import"./TransitionGroupContext-B6dWxZQA.js";import"./useEventCallback-CXGXfcdA.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C3Ov0u9A.js";import"./CircularProgress-CEqu6RKG.js";import"./OutlinedInput-Cn1Phwz7.js";import"./useFormControl-Drg5HQwL.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-D-D8kjrB.js";import"./List-2MkZxWsu.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-NdweL_Kg.js";import"./Menu-C4_TcCpf.js";import"./useSlotProps-DBrHcN3c.js";import"./Popover-B6d6ta9S.js";import"./Portal-Cn9zneq7.js";import"./useTheme-7VSsG7x3.js";import"./utils-CYAKcw8L.js";import"./getReactElementRef-C8hW-Gj-.js";import"./mergeSlotProps-BbxdafLp.js";import"./Modal-Bwn9o6tM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DGjsJ5Cu.js";import"./Fade-GlPiP-Z7.js";import"./Paper--RUEVv6r.js";import"./useControlled-Dk5cREEZ.js";import"./index-0wpeyl_7.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Pagination-G3HkU0JL.js";import"./index-aE4BW0-t.js";import"./index-BiBDMnSv.js";import"./index-5JqH0pbP.js";import"./Tooltip-SkDB5_9b.js";import"./Button-Bh15sM15.js";import"./index-EIWodvd0.js";import"./Box-BBwRUkD_.js";import"./Grid-DMQwhFnG.js";import"./styled-BHuc_G65.js";import"./isMuiElement-DI-PqbcS.js";import"./Stack-BUtu09qb.js";import"./Container-UE_6YzFq.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DpdhAv7p.js";import"./FormHelperText-qi6lM2Nc.js";import"./FormControlLabel-DyZlM93z.js";import"./Typography-BQpGuQ-L.js";import"./Switch-CWfCt-pZ.js";import"./SwitchBase-DL98QF8Z.js";import"./RadioGroup-Bwz-Xf6e.js";import"./Radio-Di5bGY6f.js";import"./FormGroup-DphnweWP.js";import"./Divider-B8rl5TZG.js";import"./Table-Cn99DXXx.js";import"./TableRow-cddOx9Fh.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
