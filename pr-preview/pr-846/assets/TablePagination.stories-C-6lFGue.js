import{j as e,r as s}from"./iframe-HTo88Qah.js";import{a as t,T as j}from"./TablePagination-4zMVTEQx.js";import{T as v}from"./Table-ChpBRg4X.js";import{T as O}from"./TableRow-DnjYz9eS.js";import"./preload-helper-Dp1pzeXC.js";import"./TableCell-BsGklnrl.js";import"./memoTheme-BOsLVKQV.js";import"./styled-DjA2FMTv.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-DzvutKv0.js";import"./useSlot-O7mjHfs3.js";import"./mergeSlotProps-CVeY9kVm.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D-SriJrD.js";import"./KeyboardArrowRight-B-74RgJh.js";import"./createSvgIcon-y0t4CXxH.js";import"./SvgIcon-E7njoD0w.js";import"./PaginationItem-Bx083jZ8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B5t8kESg.js";import"./useTimeout-BzMKXnUG.js";import"./TransitionGroupContext-B9ftAZaO.js";import"./useEventCallback-skU3gh-c.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DZMzYKiR.js";import"./CircularProgress-DZY0-sNj.js";import"./OutlinedInput-MiCzJhYW.js";import"./useFormControl-Cr2usIhw.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-CvqFX1yP.js";import"./List-CmTfMQOa.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-BdLjO0gU.js";import"./Menu-PYi1p1r0.js";import"./useSlotProps-Cf38pxn0.js";import"./Popover-CT5XF8Yd.js";import"./Portal-CpErzDB6.js";import"./useTheme-CndemxDm.js";import"./utils-C06-OhnX.js";import"./getReactElementRef-BupWyWHg.js";import"./mergeSlotProps-CBvO9dhe.js";import"./Modal-9Oi2445E.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-DDvA0mPu.js";import"./Fade-C_QOMosM.js";import"./Paper-YwfGNSvh.js";import"./useControlled-DAZnMUbd.js";import"./index-Bp1v9Z_f.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-CCRFZDxD.js";import"./index-BUXJSmUd.js";import"./index-DS1ZdVNz.js";import"./index-aYiA4GaY.js";import"./Tooltip-AdliQAtR.js";import"./Button-CyUxXAKO.js";import"./index-jajfa-T1.js";import"./Box-D0j4-ZsT.js";import"./Grid-rOUx4HQp.js";import"./styled-qrQLN9Aj.js";import"./isMuiElement-dEqiUdHL.js";import"./Stack-BWf0eeeY.js";import"./Container-Cb74vs7z.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-CKZ-ST5l.js";import"./FormHelperText-CTGhF2oz.js";import"./FormControlLabel-DKw8_E53.js";import"./Typography-BCaLwMk6.js";import"./Switch-Bvuzim_x.js";import"./SwitchBase-Bjk21Qpk.js";import"./RadioGroup-COWjhrUF.js";import"./Radio-C63ghe3L.js";import"./FormGroup-D6bYwNR_.js";import"./Divider-Df0M282n.js";import"./Table-BMK4Pv17.js";import"./TableRow-4C8RWEQD.js";const oe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(v,{role:"presentation",children:e.jsx(j,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
