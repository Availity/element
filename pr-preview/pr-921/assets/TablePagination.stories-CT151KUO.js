import{r as s,j as e}from"./iframe-DVscMr-A.js";import{a as t,T as P}from"./TablePagination-BFdqusNQ.js";import{T as l}from"./Table-CcqPjs-d.js";import{T as d}from"./TableRow-LNr2GDLL.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-BwmBFP4i.js";import"./memoTheme-BWlAx59E.js";import"./styled-DQ7SGoXr.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-sGuQEgWY.js";import"./useSlot-CcjURTXg.js";import"./mergeSlotProps-2ZD1Wa3p.js";import"./useForkRef-D_2VvoZd.js";import"./KeyboardArrowRight-AcQYhrmn.js";import"./createSvgIcon-ZxKINfNn.js";import"./SvgIcon-W7CV7YPZ.js";import"./PaginationItem-CsEU6jky.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Rik4d0uu.js";import"./useTimeout-zxUPRTwq.js";import"./TransitionGroupContext-BG8XIQuv.js";import"./useEventCallback-yUNJdQIx.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dq1PDEwT.js";import"./CircularProgress-DG2q71MX.js";import"./OutlinedInput-CY0TCNx8.js";import"./useFormControl-DkCKu5ph.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-B4Uje97_.js";import"./List-ct4XBHDF.js";import"./SelectFocusSourceContext-BTpAiLqB.js";import"./useSlotProps-pr2a7puG.js";import"./Popover-Cvu36zQJ.js";import"./Portal-DpqzBqCy.js";import"./useTheme-YOFO5C4H.js";import"./utils-3Br-A01V.js";import"./getReactElementRef-BdBU57AF.js";import"./mergeSlotProps-Bx8d2XL6.js";import"./Modal-CHyTrEbM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-VQSY8Csy.js";import"./Fade-BDZpyD8d.js";import"./Paper-CQbuUb0F.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-DvdmAFVR.js";import"./useControlled-DNBFEVpl.js";import"./index-BnViiisy.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-d3D979B4.js";import"./index-Dslozi2v.js";import"./index-CrcoPoGw.js";import"./index-BeF-k_6p.js";import"./Tooltip-fH0F2vbV.js";import"./Button-C5YW8aoX.js";import"./index-MzdqpUr1.js";import"./Box-fBwpr0Q7.js";import"./Grid-QdwtLyJp.js";import"./isMuiElement-J0UlRgLR.js";import"./styled-BgmeM797.js";import"./Stack-D0PqJVFB.js";import"./Container-BdxHCcxG.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BdI1jtcT.js";import"./FormHelperText-DTQfoS1X.js";import"./FormControlLabel-xHJRVqLE.js";import"./Typography-CU66rNGi.js";import"./Switch-D2p0E2hS.js";import"./SwitchBase-hRTrvGbO.js";import"./Radio-BkHQIpvX.js";import"./RadioGroup-Cfs5wAAA.js";import"./FormGroup-DpHjrUnv.js";import"./Divider-DIgW-ZID.js";import"./Table-BjWfrUNA.js";import"./TableRow-DnHa-v0p.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
