import{j as e,r as s}from"./iframe-rhK9tIc4.js";import{a as t,T as P}from"./TablePagination-BT3KLidB.js";import{T as l}from"./Table-Cpvunkpd.js";import{T as d}from"./TableRow-C7gCSUNM.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-C8uBfrN2.js";import"./memoTheme-IQ7acCr3.js";import"./styled-CBQFiEom.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-CtTrerl2.js";import"./useSlot-Ss2ummcO.js";import"./mergeSlotProps-C1tzmMCQ.js";import"./useForkRef-DQY4LT_f.js";import"./KeyboardArrowRight-shwU2Y4k.js";import"./createSvgIcon-C0bXOuHF.js";import"./SvgIcon-DzAUVQ7n.js";import"./PaginationItem-CQLR_lSJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C62hOKjf.js";import"./useTimeout-D0IbZg6d.js";import"./TransitionGroupContext-uy7bHgBz.js";import"./useEventCallback-Ds2BvoNa.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BVic3zsX.js";import"./CircularProgress-BoTRikuG.js";import"./OutlinedInput-COUc_T8p.js";import"./useFormControl-CYsp_SKE.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-cfpy59yu.js";import"./List-CNY8HNhe.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-DYr5Qbdr.js";import"./Menu-YddSZ-mB.js";import"./useSlotProps-CU-sXxN2.js";import"./Popover-CcuZMJNK.js";import"./Portal-D-ZKSgVP.js";import"./useTheme-BXOJLFox.js";import"./utils-Doe2UH4J.js";import"./getReactElementRef-D1xzuExO.js";import"./mergeSlotProps-C0a1pPRg.js";import"./Modal-BnNr8XN8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-Vru5BHJP.js";import"./Fade-BMyKZOEO.js";import"./Paper-lILei8Mh.js";import"./useControlled-CseZ_aCu.js";import"./index-DRr7OjqP.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Pagination-DPXJmell.js";import"./index--boPwSiR.js";import"./index-BiBDMnSv.js";import"./index-C-QneIm0.js";import"./Tooltip-DiEqfW-N.js";import"./Button-KJ_PCDyl.js";import"./index-BuVKmpdG.js";import"./Box-D2lP2H-p.js";import"./Grid-CauPBeSX.js";import"./styled-C2-sQktw.js";import"./isMuiElement-D8DZ9hal.js";import"./Stack-Dtbvl2fa.js";import"./Container-Bbkz5YIh.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BV3CtcmF.js";import"./FormHelperText-iHOtARPd.js";import"./FormControlLabel-gbSYoGRZ.js";import"./Typography-DyqU0saw.js";import"./Switch-CeNvjV_X.js";import"./SwitchBase-F3FXc6iE.js";import"./RadioGroup-NJJTzESl.js";import"./Radio-BHuW9Gba.js";import"./FormGroup-CCTE-ze6.js";import"./Divider-DF_Db46W.js";import"./Table-DOZzXYaN.js";import"./TableRow-B1VWZYnz.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
