import{j as e,r as s}from"./iframe-Cdk6lpWs.js";import{a as t,T as P}from"./TablePagination-BN7HzGOx.js";import{T as l}from"./Table-CNOwqwIm.js";import{T as d}from"./TableRow-BrCc4x86.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-rkUqx7cj.js";import"./memoTheme-Dnmlp1j3.js";import"./styled-Da4jwHSl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-BksBdHDG.js";import"./useSlot-D-PxlIN3.js";import"./mergeSlotProps-DMc6LXK-.js";import"./useForkRef-BBp7hlnJ.js";import"./KeyboardArrowRight-mmsHPJ3B.js";import"./createSvgIcon-1kVfY1hj.js";import"./SvgIcon-BMF15TUB.js";import"./PaginationItem-BbT0ZBda.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CJIyK2Pl.js";import"./useTimeout-CIy7F0jL.js";import"./TransitionGroupContext-DcA7Ut_f.js";import"./useEventCallback-vVwk_Y3I.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-2-tk2V1a.js";import"./CircularProgress-CILK_PUp.js";import"./OutlinedInput-BbAI9Vq7.js";import"./useFormControl-CAkCGBTI.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-B8e3E2HJ.js";import"./List-Dcbm-z_I.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-CQWhIYrJ.js";import"./Menu-dXNiq2iy.js";import"./useSlotProps-CRphJa0r.js";import"./Popover-DMn3WhmR.js";import"./Portal-Ci08Bzea.js";import"./useTheme-OiEjV3So.js";import"./utils-DiARjLYz.js";import"./getReactElementRef-ABpHVkKM.js";import"./mergeSlotProps-Cgqp3Cpl.js";import"./Modal-C-Sdy15n.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BehU8qli.js";import"./Fade-B5dkP1J3.js";import"./Paper-CO31t9g6.js";import"./useControlled-QHn5S2wL.js";import"./index-3GTxF1kd.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-DYFfaRBF.js";import"./index-BsjSeSSH.js";import"./index-BiBDMnSv.js";import"./index-CywYuil6.js";import"./Tooltip-BgHK4L6p.js";import"./Button-CkMj2wnd.js";import"./index-Bw-mxMFV.js";import"./Box-BUETqROo.js";import"./Grid-D_4fODgZ.js";import"./styled-BDQK8zLY.js";import"./isMuiElement-DCHxCuAf.js";import"./Stack-CISAqHYT.js";import"./Container-BZnG0h-h.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BwiCP9Z9.js";import"./FormHelperText-DhYKundP.js";import"./FormControlLabel-CgHFrAmG.js";import"./Typography-BiMhXRVd.js";import"./Switch-Bzq6IxhW.js";import"./SwitchBase-eP1OYkAc.js";import"./RadioGroup-C-01PQVx.js";import"./Radio-ClP34CLy.js";import"./FormGroup-BjXhw4n-.js";import"./Divider-CbIu_a9X.js";import"./Table-D9Q53b1t.js";import"./TableRow-kmSbmgU7.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
