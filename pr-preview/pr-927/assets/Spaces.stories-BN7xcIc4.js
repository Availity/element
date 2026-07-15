import{j as p}from"./iframe-DxDqWgB3.js";import{P as e}from"./index-DGf8uJ3M.js";import{T as o}from"./index-kRUN3OIn.js";import{S as n}from"./index-Dz-uzYEo.js";import{Q as d}from"./suspense-9NuidOnd.js";import{S as m,u as h,a as S}from"./Spaces-CA12E9kA.js";import{Q as y}from"./queryClient-HqMYM8ct.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-07-bvRG5.js";import"./useTheme-CKON97k_.js";import"./styled-C-u4rj0B.js";import"./memoTheme-CW08UaDq.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-C89Ggk5t.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-aFyRrUOd.js";import"./Grid-B6GnwMzX.js";import"./isMuiElement-Mzgb52Ql.js";import"./styled-CRQ2ZGB4.js";import"./Stack-pOcYjPv5.js";import"./Container-BXfLwVnI.js";import"./Img-BtkBWOkQ.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DNJz3ILC.js";import"./index-BkhnDdeT.js";import"./___vite-browser-external_commonjs-proxy-DfgmlVcb.js";import"./index-B5eWFWMd.js";import"./index-DfCeY9NF.js";import"./index-CE_ZDuuA.js";import"./Tooltip-CU2nv3Au.js";import"./useSlot-DhabbitO.js";import"./mergeSlotProps-CkntHcZx.js";import"./useForkRef-DI5ILbHc.js";import"./useTimeout-Cg12-pSn.js";import"./useControlled-BtuGr2vc.js";import"./useEventCallback-BAtRlhKU.js";import"./getReactElementRef-8K8_YwXV.js";import"./Portal-BC-tKqvb.js";import"./utils-C0firkgU.js";import"./TransitionGroupContext-DQeLAkDQ.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C80LEsEt.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Bq1g08rd.js";import"./ButtonBase-Cv_OxEAB.js";import"./CircularProgress-X93LMWzE.js";import"./Button-Cfa_uJOq.js";import"./index-CA8wTNp_.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DuolYAV0.js";import"./index-fKfIBwLT.js";import"./Alert-ARVpXHuT.js";import"./createSvgIcon-DYs5Y6Jm.js";import"./Close-D6pX4ZTo.js";import"./AlertTitle-Dumgedy2.js";import"./Dialog-DgCQ5K5w.js";import"./DialogContext-g9qV5LLM.js";import"./Modal-DWjx2hRe.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-COfvuY5V.js";import"./Fade-CrNSUCom.js";import"./DialogTitle-Dhmt40Wx.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-D1a2Ur-j.js";import"./DialogContent-Bh62BqDm.js";import"./DialogContentText-C2JpEgR-.js";import"./index-CrcoPoGw.js";import"./index-DkLpbvcP.js";import"./LinearProgress-CxWPqxMR.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: SpacesProps) => {
    return <QueryClientProvider client={queryClient}>
        <Spaces {...args}>
          <SpaceContainer>
            <Stack spacing={2}>
              <Paper>
                <Typography>Space 1 was passed in the props.</Typography>
                <SpaceComponent spaceId="1" />
              </Paper>
              <Paper>
                <Typography>Space 2 was fetched from the api via the spaceId passed in the props.</Typography>
                <SpaceComponent spaceId="2" />
              </Paper>
              <Paper>
                <Typography>Space 3 was not returned.</Typography>
                <SpaceComponent spaceId="3" />
              </Paper>
              <Paper>
                <Typography>Space 11 was fetched from the api via the payerId passed in the props.</Typography>
                <SpaceComponent spaceId="11" />
              </Paper>
            </Stack>
          </SpaceContainer>
        </Spaces>
      </QueryClientProvider>;
  },
  args: {
    spaces: [{
      id: '1',
      configurationId: '1',
      type: 'space',
      name: 'Space 1'
    }],
    spaceIds: ['2'],
    payerIds: ['a']
  }
}`,...i.parameters?.docs?.source}}};const Ap=["_Spaces"];export{i as _Spaces,Ap as __namedExportsOrder,zp as default};
