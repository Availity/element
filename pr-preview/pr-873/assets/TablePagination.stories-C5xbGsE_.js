import{j as e,r as s}from"./iframe-BACK_0qL.js";import{a as t,T as P}from"./TablePagination-CG9d_0k2.js";import{T as l}from"./Table-CElhRW_q.js";import{T as d}from"./TableRow-BXpGHP5Z.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CNZfWYZp.js";import"./memoTheme-CehCTkMp.js";import"./styled-CILYMfR2.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-DLOdAyoc.js";import"./useSlot-4KwJ1ZEX.js";import"./mergeSlotProps-Ce5vEJyz.js";import"./useForkRef-COVhBD0c.js";import"./KeyboardArrowRight-DEmYKdJL.js";import"./createSvgIcon-BJ8pbv3g.js";import"./SvgIcon-BWD4KGVI.js";import"./PaginationItem-BrgEuttw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CDXMi9Z2.js";import"./useTimeout-Bbnn395Q.js";import"./TransitionGroupContext-B4j_r9NY.js";import"./useEventCallback-B1QjfuHc.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-fOR7z52u.js";import"./CircularProgress-BxeLfgty.js";import"./OutlinedInput-BBATfXzR.js";import"./useFormControl-BhxRA0Wm.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CFZV2Jp4.js";import"./List-CHkCl1_C.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-7via2PWA.js";import"./Menu-BLYO1-4m.js";import"./useSlotProps-DdDv6txA.js";import"./Popover-1PzWGKLc.js";import"./Portal-BBUkHp6C.js";import"./useTheme-CAH-7WS1.js";import"./utils-CTnKgbLp.js";import"./getReactElementRef-cseQ0t00.js";import"./mergeSlotProps-Bu0K3qzP.js";import"./Modal-DwWll_wO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-88X4YLU1.js";import"./Fade-BOPFrwB9.js";import"./Paper-DbocNi97.js";import"./useControlled-Bvcrhgjz.js";import"./index-CThJnamY.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Pagination-BFx-WG00.js";import"./index-CVUi_W90.js";import"./index-BiBDMnSv.js";import"./index-DezS3mgp.js";import"./Tooltip-CvzAHSPe.js";import"./Button-DJ1l2vuX.js";import"./index-BgUu0nys.js";import"./Box-yoY0NcWx.js";import"./Grid-BgvciMyj.js";import"./styled-D6EtJyjy.js";import"./isMuiElement-9m4N3JlX.js";import"./Stack-BZ18XAbQ.js";import"./Container-DsEO0A5x.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Dno3GiSo.js";import"./FormHelperText-BT3PilzM.js";import"./FormControlLabel-DzNIFIFQ.js";import"./Typography-Bcc0vKQ7.js";import"./Switch-BaH0feTf.js";import"./SwitchBase-BSY6ujsV.js";import"./RadioGroup-DkdKL8fz.js";import"./Radio-B_eeQFe2.js";import"./FormGroup-CfSlpII8.js";import"./Divider-Oendm3Q_.js";import"./Table-DvKBbJVF.js";import"./TableRow-Tg_kNciA.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
