import{r as s,j as e}from"./iframe-C7RYpRRO.js";import{a as t,T as P}from"./TablePagination-BpG4jjGK.js";import{T as l}from"./Table-7SyX4JBZ.js";import{T as d}from"./TableRow-_0_qTC1b.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CKEKqimT.js";import"./memoTheme-DZ9vOlqG.js";import"./styled-Cqgr8yLU.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DNXbralK.js";import"./useSlot-lfX05XTl.js";import"./mergeSlotProps-BkPIbwBi.js";import"./useForkRef-mY6jA1_e.js";import"./KeyboardArrowRight-CTGK_pum.js";import"./createSvgIcon-Dc4WGqJQ.js";import"./SvgIcon-DZsvZcJW.js";import"./PaginationItem-DeoaFQ6v.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-YfnvzWnB.js";import"./useTimeout-IWs7fXER.js";import"./TransitionGroupContext-D50vcWaO.js";import"./useEventCallback-BmDadX9V.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DUEQnTYy.js";import"./CircularProgress-DRusqeVx.js";import"./OutlinedInput-EMbPCbiK.js";import"./useFormControl-BSDmqwdX.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-K0aWY1N3.js";import"./List-BcqSLVqi.js";import"./SelectFocusSourceContext-Des1O4JU.js";import"./useSlotProps-CyQLJvs1.js";import"./Popover-Bq3gAnqf.js";import"./Portal-B-Fuv61-.js";import"./useTheme-WpQOCtdc.js";import"./utils-BrOTTAGC.js";import"./getReactElementRef-CzYjVf0K.js";import"./mergeSlotProps-BKdWdZnu.js";import"./Modal-Vlv0KwQ6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DbHQkIp9.js";import"./Fade-BHmjLU7V.js";import"./Paper-DUYPN4Ep.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-vyzsrS7k.js";import"./useControlled-C5e-G2Uo.js";import"./index-B0i75ydy.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-BxEeICQB.js";import"./index-miMFKzwY.js";import"./index-MVgG_W0q.js";import"./index-C-TAFGmA.js";import"./Tooltip-By5WBZwq.js";import"./Button-DYbxeNEo.js";import"./index-C2dcAPuD.js";import"./Box-DobRJWDd.js";import"./Grid-52szHxD-.js";import"./isMuiElement-Do9YpkA9.js";import"./styled-Cn_UBHgZ.js";import"./Stack-D9VD4k0X.js";import"./Container-Bhb68_To.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CsJ_Ttuz.js";import"./FormHelperText-HnS8eQWb.js";import"./FormControlLabel-CvDpl5RW.js";import"./Typography-heIaV1nZ.js";import"./Switch-BITMdJ8m.js";import"./SwitchBase-C3jOb5-J.js";import"./Radio-CO_Uo7ot.js";import"./RadioGroup-CBZao7AR.js";import"./FormGroup-lR-44Vgx.js";import"./Divider-DIUIqII7.js";import"./Table-BB5qyfK4.js";import"./TableRow-DYLsxU05.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
