import{j as e,r as s}from"./iframe-BRLvBxWA.js";import{a as t,T as P}from"./TablePagination-Cfy4B5Np.js";import{T as l}from"./Table-CMOqwhS5.js";import{T as d}from"./TableRow-C9lhe0hh.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-Dwxg7WR-.js";import"./memoTheme-KNjPhf5l.js";import"./styled-CZ9R0hiM.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-DihklTli.js";import"./useSlot-BL0V4ya8.js";import"./mergeSlotProps-DJQ_9vH6.js";import"./useForkRef-Btt9MVeC.js";import"./KeyboardArrowRight-BooXmUvq.js";import"./createSvgIcon-Bf5nQhSb.js";import"./SvgIcon-Ddzah0KZ.js";import"./PaginationItem-O8JRMWMR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-aoiMu9Tz.js";import"./useTimeout-D2Y7qDK0.js";import"./TransitionGroupContext-DVVrop_G.js";import"./useEventCallback-8VD7KoTy.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DyDu_M09.js";import"./CircularProgress-gYkLYLdu.js";import"./OutlinedInput-DvUGPFLm.js";import"./useFormControl-C3g7vEaW.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-BH1c0Vb-.js";import"./List-Bsssf5sN.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-Ipzf7kND.js";import"./Menu-BsR3IEcx.js";import"./useSlotProps-BzYpEyJr.js";import"./Popover-BZZTn0gU.js";import"./Portal-B3jPIhjh.js";import"./useTheme-DUDwCCgT.js";import"./utils-v3JDOV4B.js";import"./getReactElementRef-Cit-YTyg.js";import"./mergeSlotProps-Be5-6mnc.js";import"./Modal-CquUqJ-o.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-aNpcT55H.js";import"./Fade-B-kZ2aWY.js";import"./Paper-B9vhvsVc.js";import"./useControlled-APkh1ier.js";import"./index-XiudsVJB.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Pagination-C4bcEVAM.js";import"./index-CFpgbKkO.js";import"./index-BiBDMnSv.js";import"./index-WLJ37MO7.js";import"./Tooltip-7V2d6kcs.js";import"./Button-Dh1nUKo-.js";import"./index-DaMlQ0yP.js";import"./Box-zm6tG-Ly.js";import"./Grid-CtDV3yUj.js";import"./styled-tPTq9LI3.js";import"./isMuiElement-mA_3UNgb.js";import"./Stack-ng3wJJZp.js";import"./Container-BIDAJaGd.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CCgxdWp7.js";import"./FormHelperText-DqicFGG5.js";import"./FormControlLabel-CQw-dPQn.js";import"./Typography-CYuHQB7d.js";import"./Switch-Mud3csUL.js";import"./SwitchBase-CAohy3fZ.js";import"./RadioGroup-C75CZzPW.js";import"./Radio-D4OXQB13.js";import"./FormGroup-qwfmGCav.js";import"./Divider-DCI4ccpv.js";import"./Table-CXzLnsCD.js";import"./TableRow-BIw1xEIJ.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
