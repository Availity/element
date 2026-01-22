import{j as e,r as s}from"./iframe-CFnK--5_.js";import{a as t,T as P}from"./TablePagination-uM17GEje.js";import{T as l}from"./Table-DxPLfBG2.js";import{T as d}from"./TableRow-BUHGaQlm.js";import"./preload-helper-PPVm8Dsz.js";import"./TableCell-CHPTSKFz.js";import"./memoTheme-DHqcPMUG.js";import"./styled-B_SR2Ytp.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-CAWk6HwI.js";import"./useSlot-Bcbuphfr.js";import"./mergeSlotProps-CjkbnSEr.js";import"./useForkRef-Di9rDSJ_.js";import"./KeyboardArrowRight-B-fQewZy.js";import"./createSvgIcon-BW1yD8n1.js";import"./SvgIcon-BS2_Q9nG.js";import"./PaginationItem-6eSejrZ0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BaxBneFE.js";import"./useTimeout-C_X7UAwn.js";import"./TransitionGroupContext-D3GUir9f.js";import"./useEventCallback-CAGgRosr.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DDlS7gn-.js";import"./CircularProgress-DUyilEJx.js";import"./OutlinedInput-BfiYytvL.js";import"./useFormControl-DJceSmmG.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-B9BDwxmC.js";import"./List-C3NHgsZM.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-BYNd40Es.js";import"./Menu-PVr7rvfs.js";import"./useSlotProps-3SA_4L0x.js";import"./Popover-BcL-oPoN.js";import"./Portal-By2AWbtS.js";import"./useTheme-BUU7R_-h.js";import"./utils-DAiY7LDj.js";import"./getReactElementRef-guKTxCdd.js";import"./mergeSlotProps-BbOuZYXd.js";import"./Modal-Dz8FS_X7.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BW7XWXju.js";import"./Fade-DuAG_vf9.js";import"./Paper-0nNMytNf.js";import"./useControlled-QCqU36h_.js";import"./index-B8FQNIIr.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Pagination-C_Vq3Wie.js";import"./index-DrG6kryt.js";import"./index-BiBDMnSv.js";import"./index-JryDx5j_.js";import"./Tooltip-D7zb4Xpv.js";import"./Button-CFFdP_-2.js";import"./index-CTUH8f9W.js";import"./Box-CzpKZwgR.js";import"./Grid-sJL0YzUx.js";import"./styled-0UPDl72R.js";import"./isMuiElement-CSdCdkNb.js";import"./Stack-B65FEu5Y.js";import"./Container-H7u83N50.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BxmsTci0.js";import"./FormHelperText-CpKPjCPu.js";import"./FormControlLabel-BiBG1MyE.js";import"./Typography-CAi-X6a_.js";import"./Switch-CRsbDZ2t.js";import"./SwitchBase-Go4xKq43.js";import"./RadioGroup-DzDfSE_s.js";import"./Radio-CyZ0qGfy.js";import"./FormGroup-DvOiGmSW.js";import"./Divider-qHDQ2Pf0.js";import"./Table-Fhp9nQAd.js";import"./TableRow-gFhY-EEM.js";const Mr={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(l,{role:"presentation",children:e.jsx(P,{children:e.jsx(d,{children:e.jsx(t,{...r,page:m,onPageChange:(c,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
