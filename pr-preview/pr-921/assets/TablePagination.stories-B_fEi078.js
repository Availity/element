import{r as s,j as e}from"./iframe-DV02LU8f.js";import{a as t,T as P}from"./TablePagination-CTYYaR8h.js";import{T as l}from"./Table-CZv2R9W7.js";import{T as d}from"./TableRow-BG2O67Qr.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-B2aBIYR_.js";import"./memoTheme-DH1tDBpV.js";import"./styled-rnNWEicw.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Cw6yhwDw.js";import"./useSlot-Hu3W-cCE.js";import"./mergeSlotProps-Bc2Oi4bk.js";import"./useForkRef-BwPtyht0.js";import"./KeyboardArrowRight-uH3_Dyb5.js";import"./createSvgIcon-ClgyEN0Z.js";import"./SvgIcon-BicIoovE.js";import"./PaginationItem-CdAYzcYM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DyVkVOcL.js";import"./useTimeout-7haRoRjC.js";import"./TransitionGroupContext-BxFEbXtm.js";import"./useEventCallback-DerujR8C.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D4Hw4OQf.js";import"./CircularProgress-CAVNnpCq.js";import"./OutlinedInput-MfvrGn0E.js";import"./useFormControl-rUj125Nx.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-C98voqD2.js";import"./List-B86gDMtC.js";import"./SelectFocusSourceContext-D8Hbh3nZ.js";import"./useSlotProps-Dtx0TQHB.js";import"./Popover-BR27wnSV.js";import"./Portal-PMyfFMaG.js";import"./useTheme-Y2xcdKFi.js";import"./utils-CvzJUHOJ.js";import"./getReactElementRef-COC2CLEL.js";import"./mergeSlotProps-N6SvUUDD.js";import"./Modal-B3KISgYa.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Ci3V7QU8.js";import"./Fade-CAu7O51Y.js";import"./Paper-X_4XbRhq.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Select-SJiTaZi2.js";import"./useControlled-DL5wIsJx.js";import"./index-B2ndQJTP.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Pagination-hFac9Lop.js";import"./index-DGPCr9CP.js";import"./index-CrcoPoGw.js";import"./index-DgtuzQHk.js";import"./Tooltip-BOv4Ws7L.js";import"./Button-3YflG3_Z.js";import"./index-DN1f2VGk.js";import"./Box-SeXXrj1o.js";import"./Grid-CAt1Mh8-.js";import"./isMuiElement-Bod-d1Ly.js";import"./styled-TfTHS2wg.js";import"./Stack-BwJgyjvk.js";import"./Container-C-cbttNX.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DxmpMApS.js";import"./FormHelperText-B69_0vl5.js";import"./FormControlLabel-BmV4-vkc.js";import"./Typography-BZigmqh7.js";import"./Switch-CgHx9hmd.js";import"./SwitchBase-slcB8KUf.js";import"./Radio-CReGbcbO.js";import"./RadioGroup-D4ixwP02.js";import"./FormGroup-ClgnKSXL.js";import"./Divider-DdW8tJiT.js";import"./Table-BAyVddh7.js";import"./TableRow-BTf4auFS.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
