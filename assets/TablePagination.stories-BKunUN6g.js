import{j as e,r as s}from"./iframe-VmT73p94.js";import{a as t,T as P}from"./TablePagination-BsF1PB04.js";import{T as l}from"./Table-D5fQYvZC.js";import{T as d}from"./TableRow-CrqrVFZX.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CixNlopo.js";import"./memoTheme-CW0LOUve.js";import"./styled-DVm59HJf.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-B4v7ttYn.js";import"./useSlot-BmxE9uZS.js";import"./mergeSlotProps-B8SRg1CI.js";import"./useForkRef-Ctnrtb-D.js";import"./KeyboardArrowRight-bIxCgFYy.js";import"./createSvgIcon-CHar5Fph.js";import"./SvgIcon-OqnDZfg-.js";import"./PaginationItem-BafljVLP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BXyceE0h.js";import"./useTimeout-BprXv5F8.js";import"./TransitionGroupContext-CeVXvV0a.js";import"./useEventCallback-C3cbUdrm.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Br45PAbc.js";import"./CircularProgress-CrZ4k3FD.js";import"./OutlinedInput-DmwOWPcc.js";import"./useFormControl-SPs3ZDhM.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-NkAGmtGD.js";import"./List-frVJ5qAx.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-CuIE7pA_.js";import"./Menu-DXTlxeJ2.js";import"./useSlotProps-DY7-TJQW.js";import"./Popover-Dk4scS2q.js";import"./Portal-BwXxrIv3.js";import"./useTheme-COUM0_Su.js";import"./utils-ByQY0EBI.js";import"./getReactElementRef-ft3Uw4WU.js";import"./mergeSlotProps-5qBSIGBn.js";import"./Modal-DFppbk7B.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CtDRaPiM.js";import"./Fade-NocNkBOI.js";import"./Paper-DQLSkWvh.js";import"./useControlled-BjbV18t2.js";import"./index-Cb5v9xcC.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Pagination-CBd8Ojnq.js";import"./index-BoqWl9Cu.js";import"./index-BiBDMnSv.js";import"./index-HUpkhuIg.js";import"./Tooltip-BRQG12-b.js";import"./Button-zpUHMDEI.js";import"./index-CUHhPe5b.js";import"./Box-CvMegSiU.js";import"./Grid-Bmv36tXm.js";import"./styled-D1-ZAWkh.js";import"./isMuiElement-Bqpdq4Yq.js";import"./Stack-DZgcNSaF.js";import"./Container-BVb-1dj-.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Bl-cZ89x.js";import"./FormHelperText-B6vrgGZp.js";import"./FormControlLabel-C8hCHqaE.js";import"./Typography-B3jjC7CW.js";import"./Switch-Du7_HRPg.js";import"./SwitchBase-ByAZ1y9s.js";import"./RadioGroup-BMQSDDse.js";import"./Radio-D0s2w_TC.js";import"./FormGroup-BpYFK3ZO.js";import"./Divider-CJvG-lQD.js";import"./Table-BQ2kD0Iq.js";import"./TableRow-CScAjgmw.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
