import{r as s,j as e}from"./iframe-CNKi_Ec9.js";import{a as t,T as P}from"./TablePagination-EMjswQRS.js";import{T as l}from"./Table-C3RU5k8a.js";import{T as d}from"./TableRow-B9NM5zo0.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CmngKaQV.js";import"./memoTheme-DeusU9l_.js";import"./styled-CGPS0K8z.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CZEULS3o.js";import"./useSlot-6u895GGS.js";import"./mergeSlotProps-NHo9zqIM.js";import"./useForkRef-BcCxGyq_.js";import"./KeyboardArrowRight-YT-3YAn3.js";import"./createSvgIcon-DLBoSPlD.js";import"./SvgIcon-DRZMbgGT.js";import"./PaginationItem-WGyRftC_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CiH38IXk.js";import"./useTimeout-qmb5R95B.js";import"./TransitionGroupContext-BESWVVvg.js";import"./useEventCallback-Cws-zXFa.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CeXbiSrq.js";import"./CircularProgress-BrUNS0I2.js";import"./OutlinedInput-DZuvzaas.js";import"./useFormControl-DxT84DOF.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-BPXvf9Y3.js";import"./List-D58GBsbd.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-Bzhx4OcW.js";import"./Menu-BFHZ6L8B.js";import"./useSlotProps-BIvI5Lxh.js";import"./Popover-DyVfRwhv.js";import"./Portal-C3A-VfFU.js";import"./useTheme-BKQS-hPu.js";import"./utils-SSfZp7cC.js";import"./getReactElementRef-8X4grM9z.js";import"./mergeSlotProps-BwVcmSim.js";import"./Modal-CT8tTE_f.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CJANX_Gq.js";import"./Fade-B4qzam9p.js";import"./Paper-B0v8-sA3.js";import"./useControlled-w5dFxqhC.js";import"./index-B_WSnka_.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./Pagination-BLtDcMUq.js";import"./index-CQjy1HYz.js";import"./index-BiBDMnSv.js";import"./index-B621nc9Z.js";import"./Tooltip-CJ_GLTq5.js";import"./Button-CTbvABeh.js";import"./index-BM_So9FB.js";import"./Box-DEr-V8__.js";import"./Grid-DePYc70X.js";import"./isMuiElement-B5CkoKss.js";import"./styled-CVVnUVY6.js";import"./Stack-CcjdTXZq.js";import"./Container-DdiDjvnS.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CpWhdyIU.js";import"./FormHelperText-BvYn2Wec.js";import"./FormControlLabel-CCq1oojw.js";import"./Typography-DIfLarQN.js";import"./Switch-CCv0qv0x.js";import"./SwitchBase-CGY2Ihdn.js";import"./Radio-XdbEbU1g.js";import"./RadioGroup-QR865JiM.js";import"./FormGroup-DeFM7qwO.js";import"./Divider-CeqzL_MC.js";import"./Table-DgSn7Q1_.js";import"./TableRow-DDBryqRw.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
