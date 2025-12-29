import{j as e,r as s}from"./iframe-74vBDrmZ.js";import{a as t,T as j}from"./TablePagination-BdQcAHh4.js";import{T as v}from"./Table-LbmCGY8-.js";import{T as O}from"./TableRow-2AtWiK53.js";import"./preload-helper-Dp1pzeXC.js";import"./TableCell-CYtVlZ0e.js";import"./memoTheme-CrohEj2F.js";import"./styled-BHC3gMyH.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-CrhcKPxT.js";import"./useSlot-Dpj_kWoj.js";import"./mergeSlotProps-CYq4Cs5M.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CaacVPvw.js";import"./KeyboardArrowRight-C0ZzxWHy.js";import"./createSvgIcon-CUQeMkEj.js";import"./SvgIcon-DyiByr8S.js";import"./PaginationItem-Peu4z5P0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-HlJCpadJ.js";import"./useTimeout-Bh1htgn1.js";import"./TransitionGroupContext-BXUgPNXW.js";import"./useEventCallback-D1J4VLx7.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D5Ff5U4u.js";import"./CircularProgress-BKuGISI6.js";import"./OutlinedInput-BZtuODov.js";import"./useFormControl-W_ZVRf0F.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-BWTKRsNe.js";import"./List-CJjXTZlw.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-DSPuUoJp.js";import"./Menu-Q9cLfYSW.js";import"./useSlotProps-C0zznadg.js";import"./Popover-DC9vU-iT.js";import"./Portal-CYFlRt9C.js";import"./useTheme-C3eWChmp.js";import"./utils-BsLLjsnO.js";import"./getReactElementRef-DTaqgOCe.js";import"./mergeSlotProps-DZKFty2J.js";import"./Modal-CW_aBWxl.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-BdJqATDV.js";import"./Fade-DPk9gQur.js";import"./Paper-WApO2-l7.js";import"./useControlled-BzQ0uXxz.js";import"./index-Ci5o9uVL.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-Dxmpy4Qz.js";import"./index-7ETHbYPI.js";import"./index-DS1ZdVNz.js";import"./index-BdaRrwoe.js";import"./Tooltip-D7yzj_N1.js";import"./Button-CnH678eA.js";import"./index-DABAYwxJ.js";import"./Box-B4VqGeVw.js";import"./Grid-D7zFgz1I.js";import"./styled-32LRH9GB.js";import"./isMuiElement-40PMFKcu.js";import"./Stack-B4RYbXhj.js";import"./Container-Bx3d2t5z.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-B2HH4-4s.js";import"./FormHelperText-CMCARtlF.js";import"./FormControlLabel-DhCXjowv.js";import"./Typography-B2QvIve-.js";import"./Switch-BBvMCXlY.js";import"./SwitchBase-DDix-9SU.js";import"./RadioGroup-CxmLgL3p.js";import"./Radio-gcv8NASd.js";import"./FormGroup-cs5_Y0kj.js";import"./Divider-C1LAeBUh.js";import"./Table-DbOiPSxn.js";import"./TableRow-CUh_dG-2.js";const oe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(v,{role:"presentation",children:e.jsx(j,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: TablePaginationProps) => {
    const [page, setPage] = useState(args.page);
    useEffect(() => {
      setPage(args.page);
    }, [args.page]);
    return <TablePagination {...args} page={page} onPageChange={(event, page) => {
      setPage(page);
    }} />;
  }
}`,...(l=(P=a.parameters)==null?void 0:P.docs)==null?void 0:l.source}}};var d,u,T;p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(T=(u=p.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var b,f,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: TablePaginationProps) => <TablePagination {...args} />,
  args: {
    rowsPerPageOptions: []
  }
}`,...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var x,h,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: TablePaginationProps) => <TablePagination {...args} />,
  args: {
    rowsPerPage: -1,
    rowsPerPageOptions: [-1]
  }
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const te=["_TablePagination","_AsPartOfTable","_FixedRowsPerPage","_ShowAll"];export{p as _AsPartOfTable,i as _FixedRowsPerPage,n as _ShowAll,a as _TablePagination,te as __namedExportsOrder,oe as default};
