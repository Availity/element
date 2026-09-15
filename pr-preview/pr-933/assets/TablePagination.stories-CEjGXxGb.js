import{r as s,j as e}from"./iframe-CgyQHDht.js";import{a as t,T as P}from"./TablePagination-DgRQK___.js";import{T as l}from"./Table-BsdUbD9R.js";import{T as d}from"./TableRow-Bn_tGai6.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-Bh_EUimc.js";import"./memoTheme-9z4HOxEW.js";import"./styled-CeAqJ-c9.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BS7uZkbH.js";import"./useSlot-BI63qm8Z.js";import"./mergeSlotProps-DEDO0PDp.js";import"./useForkRef-DvvK-eiI.js";import"./KeyboardArrowRight-C5A509EE.js";import"./createSvgIcon-CyM8AHy5.js";import"./SvgIcon-D8liJDyc.js";import"./PaginationItem-DQeeQO8q.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BeOu4eYa.js";import"./useTimeout-B7u63TVX.js";import"./TransitionGroupContext-CbCiCZin.js";import"./useEventCallback-v1-mseXg.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-M-Sr99uW.js";import"./CircularProgress-OvvKtsaM.js";import"./OutlinedInput-B2h6fqQ3.js";import"./useFormControl-Ca8XhVwX.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-Dqhprfdd.js";import"./List-DixvLrk0.js";import"./SelectFocusSourceContext-DstQPVWn.js";import"./useSlotProps-D00sgM-L.js";import"./Popover-BgvdSOaj.js";import"./Portal-Cv3ZG74Z.js";import"./useTheme-DBOW2iGc.js";import"./utils-i6pe6p9D.js";import"./getReactElementRef-DSOw1wXb.js";import"./mergeSlotProps-gK_7x5gw.js";import"./Modal-DZVQKIJf.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CV_7DsVP.js";import"./Fade-DcwI299R.js";import"./Paper-C6T4apaD.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-wirFxTuI.js";import"./useControlled-DSiBAGka.js";import"./index-6_aePX59.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-BZTKrpLb.js";import"./index-H6Uxih6N.js";import"./index-CrcoPoGw.js";import"./index-5azouwn6.js";import"./Tooltip-0ZBCaLdQ.js";import"./Button-D8e6tdaf.js";import"./index-BiQy1AHR.js";import"./Box-BxdWl5-L.js";import"./Grid-BNO3N1YM.js";import"./isMuiElement-BaNoNC5Q.js";import"./styled-Dvv_Oh9D.js";import"./Stack-oqPb14Ks.js";import"./Container-s8QyPm16.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BjV2ncBQ.js";import"./FormHelperText-D2TAK_49.js";import"./FormControlLabel-DhBBoI9-.js";import"./Typography-yiHubm7E.js";import"./Switch-CLE859Ym.js";import"./SwitchBase-D-PtVu31.js";import"./Radio-B6-Bdtmn.js";import"./RadioGroup-Dy6esOrh.js";import"./FormGroup-LqcUTR9x.js";import"./Divider-A7T5E6Fz.js";import"./Table-CW3JbfF0.js";import"./TableRow-Db3NdK_3.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
