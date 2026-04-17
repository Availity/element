import{r as s,j as e}from"./iframe-D_FBGCyt.js";import{a as t,T as P}from"./TablePagination-dHbHFjl0.js";import{T as l}from"./Table-CB9eQeuK.js";import{T as d}from"./TableRow-CoGaLFB4.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-Bz09E2Ye.js";import"./memoTheme-BLxVLpBG.js";import"./styled-xf6f_HVu.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CGKjnV1l.js";import"./useSlot-BtMprAQd.js";import"./mergeSlotProps-gV_s4djX.js";import"./useForkRef-CnVOscb6.js";import"./KeyboardArrowRight-Q-aFD9-a.js";import"./createSvgIcon-CrDNgKEm.js";import"./SvgIcon-5AfvjDJL.js";import"./PaginationItem--Hp5fTPY.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D61WXHG0.js";import"./useTimeout-SlAgGEcH.js";import"./TransitionGroupContext-D8t5YM-9.js";import"./useEventCallback-jDv7Sv7e.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-eUYvyQUt.js";import"./CircularProgress-BjsVuxPp.js";import"./OutlinedInput-BIVPjmnf.js";import"./useFormControl-D0mczUgB.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-DcrhouKt.js";import"./List-BXCcSLWL.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-rTOCbTjW.js";import"./Menu-D87dknpl.js";import"./useSlotProps-C2D_NZSZ.js";import"./Popover-DSajnCnR.js";import"./Portal-DcK87Y2W.js";import"./useTheme-C9l_6OF0.js";import"./utils-DnGyS3wP.js";import"./getReactElementRef-CwqBwRrr.js";import"./mergeSlotProps-Vx5Db-vC.js";import"./Modal-C7olDkj8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-y5ajGIML.js";import"./Fade-BVS2OpEz.js";import"./Paper-BakwuC79.js";import"./useControlled-CdfLcSkL.js";import"./index-C15pSvNp.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-CYe9q0dT.js";import"./index-CHeBUqtj.js";import"./index-BiBDMnSv.js";import"./index-DfmN7Pdp.js";import"./Tooltip-Cz548eDU.js";import"./Button-CuoV_D53.js";import"./index-BBo7dAKW.js";import"./Box-CvB3zA9H.js";import"./Grid-DRIeD9kY.js";import"./isMuiElement-DWlz3pJm.js";import"./styled-D_5SdMbV.js";import"./Stack-CDN4SC59.js";import"./Container-CHNU3dwn.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CcBITnwG.js";import"./FormHelperText-D-uyeHOV.js";import"./FormControlLabel-R0V4f3aH.js";import"./Typography-2LRTBqXt.js";import"./Switch-CePFD_S0.js";import"./SwitchBase-DTTSsIt3.js";import"./Radio-D_ui9MP1.js";import"./RadioGroup-DFPZLkM7.js";import"./FormGroup-Cz3AxvE4.js";import"./Divider-PHdlqile.js";import"./Table-oN04xwXz.js";import"./TableRow-DH6OWg1B.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
