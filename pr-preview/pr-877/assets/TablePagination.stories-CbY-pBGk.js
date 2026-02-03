import{j as e,r as s}from"./iframe-DV3He85V.js";import{a as t,T as P}from"./TablePagination-DHhkVdp_.js";import{T as l}from"./Table-eRpzAsP9.js";import{T as d}from"./TableRow-DIZzoEPY.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-C5GKC7Bg.js";import"./memoTheme-CqO710ep.js";import"./styled-BUFH9864.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-BcnglB8Z.js";import"./useSlot-D_lQT_km.js";import"./mergeSlotProps-BOgCOH-Y.js";import"./useForkRef-BjKAtTT0.js";import"./KeyboardArrowRight-9S3cHa0B.js";import"./createSvgIcon-Dah6_HeO.js";import"./SvgIcon-BPrDg5y8.js";import"./PaginationItem-BGR-7qdF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CmkGGnOd.js";import"./useTimeout-Ckthjz3O.js";import"./TransitionGroupContext-DIj-4TH7.js";import"./useEventCallback-DWs5MTmZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CvMV_1wy.js";import"./CircularProgress-DhVft3f6.js";import"./OutlinedInput-wiNtXLYd.js";import"./useFormControl-BVnKZRJX.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-ClbGXAa3.js";import"./List-DAdkMrgy.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-C5eTjdLt.js";import"./Menu-DtWOoTbV.js";import"./useSlotProps-Da-PnXIN.js";import"./Popover-B1b3gXrN.js";import"./Portal-C_yGG6TD.js";import"./useTheme-SfRUUZiP.js";import"./utils-Bwvx3eCn.js";import"./getReactElementRef-DFI1E4nz.js";import"./mergeSlotProps-CMPc2IAt.js";import"./Modal-wug12V1o.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CGWgMRTN.js";import"./Fade-BX6Wa8dQ.js";import"./Paper-Dqu7MPEo.js";import"./useControlled-Ccx6itka.js";import"./index-BjhlD0KS.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-D5h0eQ5H.js";import"./index-BjMQ-2w8.js";import"./index-BiBDMnSv.js";import"./index-BfHLbFj4.js";import"./Tooltip-B-fI_KqI.js";import"./Button-BaC_cxcf.js";import"./index-Cdp2fnep.js";import"./Box-BLEv-Mrp.js";import"./Grid-BisxJX3W.js";import"./styled-CIy1Wxpq.js";import"./isMuiElement-_HgZ6tG6.js";import"./Stack-eceoAOKj.js";import"./Container-KecICwJn.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BaCofFNT.js";import"./FormHelperText-OP92smCd.js";import"./FormControlLabel-CjUpK0gq.js";import"./Typography-CE44PW7B.js";import"./Switch-B6e_Dv9_.js";import"./SwitchBase-BJ52hWR6.js";import"./RadioGroup-Bv5HCDOS.js";import"./Radio-CAqmK0KW.js";import"./FormGroup-4nVuE012.js";import"./Divider-BHrLvxZ6.js";import"./Table-Bt7MuG-y.js";import"./TableRow-hD-T1nNA.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
