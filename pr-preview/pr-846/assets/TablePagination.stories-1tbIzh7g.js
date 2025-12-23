import{j as e,r as s}from"./iframe-uHgbxI5K.js";import{a as t,T as j}from"./TablePagination-BXk4U0YY.js";import{T as v}from"./Table-0OEqHEvW.js";import{T as O}from"./TableRow-D7Th-5UO.js";import"./preload-helper-Dp1pzeXC.js";import"./TableCell-BEouSoPG.js";import"./memoTheme-oX4ulD_d.js";import"./styled-8YbhM9a0.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./index-BRl7RSJO.js";import"./useSlot-DoiGXRjP.js";import"./mergeSlotProps-Muvz4q9m.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BQsEeVXe.js";import"./KeyboardArrowRight-5AEdXO5J.js";import"./createSvgIcon-BmijsGhR.js";import"./SvgIcon-C1fws6HS.js";import"./PaginationItem-D0qINmfu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DWgIiiPw.js";import"./useTimeout-CnBSTBeY.js";import"./TransitionGroupContext-D0JdioPb.js";import"./useEventCallback-1jk_qbz7.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CXBoVS4j.js";import"./CircularProgress-DxKRrnZT.js";import"./OutlinedInput-DP-7ibgJ.js";import"./useFormControl-BeaDuuzQ.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./MenuItem-C99Iej8Q.js";import"./List-CeL-YZlm.js";import"./listItemIconClasses-CyGEUV5Q.js";import"./listItemTextClasses-CiRxluPw.js";import"./dividerClasses-CxQzuCbE.js";import"./Select-CBljlXjB.js";import"./Menu-Bxya32y2.js";import"./useSlotProps-BTIA_7et.js";import"./Popover-CSEUEHDl.js";import"./Portal-DdZjlCce.js";import"./useTheme-CtIbOmqo.js";import"./utils-Cj1f_ISK.js";import"./getReactElementRef-WEJqQMPe.js";import"./mergeSlotProps-CYc5iuk1.js";import"./Modal-aX1QMhvm.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-D55cv2by.js";import"./Fade-C1oo-Wld.js";import"./Paper-Dmj0lJnR.js";import"./useControlled-kFiMxWUJ.js";import"./index-CUd5PmZT.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Pagination-DZnngvWZ.js";import"./index-Dy-6MYFu.js";import"./index-DS1ZdVNz.js";import"./index-BovvASnm.js";import"./Tooltip-sNbil-gw.js";import"./Button-D_ToZGbA.js";import"./index-BzyIUxG9.js";import"./Box-CGtHD5r9.js";import"./Grid-CoybaeI6.js";import"./styled-sJpgZ5yK.js";import"./isMuiElement-DF8mSHc6.js";import"./Stack-DRfNMs7N.js";import"./Container-CyeFbR1g.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-BvekG9my.js";import"./FormHelperText-D71Rzsdg.js";import"./FormControlLabel-CMdu96K9.js";import"./Typography-BUwJzphg.js";import"./Switch-B-2iDVxW.js";import"./SwitchBase-Coc1IMyb.js";import"./RadioGroup-DaQRAyuZ.js";import"./Radio-CCIIGQOt.js";import"./FormGroup-C41I1qRZ.js";import"./Divider-lRCFE_gn.js";import"./Table-BRtrAksE.js";import"./TableRow-BwfwQDhf.js";const oe={title:"Components/Table/TablePagination",component:t,tags:["autodocs"],args:{component:"div",count:50,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,{value:-1,label:"all"}],onPageChange:()=>null},parameters:{controls:{exclude:["align","padding","sortDirection","scope","size","variant"]}}},a={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})}},p={render:r=>{const[m,o]=s.useState(r.page);return s.useEffect(()=>{o(r.page)},[r.page]),e.jsx(v,{role:"presentation",children:e.jsx(j,{children:e.jsx(O,{children:e.jsx(t,{...r,page:m,onPageChange:(_,g)=>{o(g)}})})})})},args:{component:void 0}},i={render:r=>e.jsx(t,{...r}),args:{rowsPerPageOptions:[]}},n={render:r=>e.jsx(t,{...r}),args:{rowsPerPage:-1,rowsPerPageOptions:[-1]}};var c,P,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
