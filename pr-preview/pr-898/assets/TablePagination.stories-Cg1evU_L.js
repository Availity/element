import{r as s,j as e}from"./iframe-N02SuUfm.js";import{a as t,T as P}from"./TablePagination-B-Amo76i.js";import{T as l}from"./Table-BqZbfXBx.js";import{T as d}from"./TableRow-g2eFGEOf.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CarbazfF.js";import"./memoTheme-DMlCkTbp.js";import"./styled-uecMoX7Y.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-C-7Bcexz.js";import"./useSlot-CYr36xh7.js";import"./mergeSlotProps-BGDsmNTV.js";import"./useForkRef-C8fPM8y1.js";import"./KeyboardArrowRight-8KOGLjoC.js";import"./createSvgIcon-quS1Xx-W.js";import"./SvgIcon-BTj78AGP.js";import"./PaginationItem-2mv9MFGw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Cit_CnSx.js";import"./useTimeout-CejRPUTA.js";import"./TransitionGroupContext-DaLiAsRr.js";import"./useEventCallback-CZlMSRL0.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cq9St4jZ.js";import"./CircularProgress-DkicU_0c.js";import"./OutlinedInput-BJ4muOdx.js";import"./useFormControl-BD7aMFTJ.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-foX-bddd.js";import"./List-YU4EJ10j.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-ho_my8co.js";import"./Menu-CNbByBse.js";import"./useSlotProps-BDT4gqxX.js";import"./Popover-DZUU7aLF.js";import"./Portal-BvewvNxS.js";import"./useTheme-CBomFZYP.js";import"./utils-CJrkpLOG.js";import"./getReactElementRef-DLbY8hGf.js";import"./mergeSlotProps-B75zb9Z-.js";import"./Modal-B1sd4ioz.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-zgdIOC3a.js";import"./Fade-CDLQakVW.js";import"./Paper-BzTjV2sZ.js";import"./useControlled-RyKq5As7.js";import"./index-lxra371Y.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-B_5S-czw.js";import"./index-O83autw8.js";import"./index-BiBDMnSv.js";import"./index-BvsDSmAk.js";import"./Tooltip-CQFd6bN6.js";import"./Button-I7Afgrab.js";import"./index-BFybfeE7.js";import"./Box-Ben8ewWC.js";import"./Grid-DiVgGJyw.js";import"./isMuiElement-C9a6bZCj.js";import"./styled-CbtJmbVm.js";import"./Stack-fkRAdSBn.js";import"./Container-BEjGGen4.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CYwHUPzU.js";import"./FormHelperText-DfPO-kQa.js";import"./FormControlLabel-CoweE3QV.js";import"./Typography-DFwTx7H5.js";import"./Switch-CtRDDJM7.js";import"./SwitchBase-BES-af_c.js";import"./Radio-DnbbdXNl.js";import"./RadioGroup-DUNzvRPH.js";import"./FormGroup-lyJkF3yT.js";import"./Divider-Dw47beet.js";import"./Table-BjdUoIO2.js";import"./TableRow-BJs9q4nV.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
